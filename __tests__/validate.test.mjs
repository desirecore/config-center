/**
 * config-center frozen schema 校验测试
 *
 * 关键场景：
 * - 现有所有数据文件必须通过 frozen schema 校验
 * - PR #1 引发死锁的反例（defaultTemperature: null）必须被拒绝
 * - 防御未知字段（additionalProperties: false）保护老客户端
 *
 * 运行：
 *   npm test
 *   node --test __tests__/
 */

import { describe, it } from 'node:test'
import { strict as assert } from 'node:assert'
import { readFileSync, readdirSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { Ajv } from 'ajv'
import addFormats from 'ajv-formats'

import { validateFile, loadSchemas } from '../scripts/validate.mjs'

const validators = loadSchemas()

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')

function loadSchema(name) {
  const p = join(ROOT, 'schemas', `${name}.schema.json`)
  return JSON.parse(readFileSync(p, 'utf8'))
}

function compile(name) {
  const ajv = new Ajv({ allErrors: true, strict: false })
  addFormats(ajv)
  return ajv.compile(loadSchema(name))
}

// ==================== 真实数据 happy path ====================

describe('真实数据全量校验', () => {
  it('所有 compute/providers/*.json 应通过 provider schema', () => {
    const dir = join(ROOT, 'compute', 'providers')
    const failures = []
    for (const file of readdirSync(dir)) {
      if (!file.endsWith('.json') || file === '_index.json') continue
      const result = validateFile(join(dir, file), validators)
      if (!result.ok) failures.push({ file, errors: result.errors })
    }
    assert.equal(
      failures.length,
      0,
      `${failures.length} provider 文件校验失败:\n${JSON.stringify(failures, null, 2)}`,
    )
  })

  it('所有 compute/coding-plans/*.json 应通过 provider schema', () => {
    const dir = join(ROOT, 'compute', 'coding-plans')
    const failures = []
    for (const file of readdirSync(dir)) {
      if (!file.endsWith('.json') || file === '_index.json') continue
      const result = validateFile(join(dir, file), validators)
      if (!result.ok) failures.push({ file, errors: result.errors })
    }
    assert.equal(
      failures.length,
      0,
      `${failures.length} coding-plan 文件校验失败:\n${JSON.stringify(failures, null, 2)}`,
    )
  })

  it('manifest.json 应通过 manifest schema', () => {
    const result = validateFile(join(ROOT, 'manifest.json'), validators)
    assert.equal(result.ok, true, JSON.stringify(result.errors, null, 2))
  })

  it('compute/pricing.json 应通过 pricing schema', () => {
    const result = validateFile(join(ROOT, 'compute', 'pricing.json'), validators)
    assert.equal(result.ok, true, JSON.stringify(result.errors, null, 2))
  })

  it('compute/service-map.json 应通过 service-map schema', () => {
    const result = validateFile(join(ROOT, 'compute', 'service-map.json'), validators)
    assert.equal(result.ok, true, JSON.stringify(result.errors, null, 2))
  })

  it('两个 _index.json 应通过 providers-index schema', () => {
    const r1 = validateFile(join(ROOT, 'compute', 'providers', '_index.json'), validators)
    const r2 = validateFile(join(ROOT, 'compute', 'coding-plans', '_index.json'), validators)
    assert.equal(r1.ok, true, JSON.stringify(r1.errors, null, 2))
    assert.equal(r2.ok, true, JSON.stringify(r2.errors, null, 2))
  })
})

// ==================== Provider schema 反例 ====================

describe('provider schema 反例（防 PR #1 重演）', () => {
  const validate = compile('provider')

  function makeValidProvider() {
    return {
      id: 'provider-test-001',
      provider: 'test',
      label: 'Test',
      baseUrl: 'https://api.test.com',
      apiKeyRef: 'test',
      apiKeyVerified: false,
      enabled: false,
      status: 'unconfigured',
      services: ['chat'],
      models: [
        {
          modelName: 'm1',
          displayName: 'M1',
          serviceType: ['chat'],
          capabilities: ['chat'],
        },
      ],
    }
  }

  it('合法 minimal provider 通过', () => {
    assert.equal(validate(makeValidProvider()), true, JSON.stringify(validate.errors))
  })

  it('拒绝 defaultTemperature: null（PR #1 死锁元凶）', () => {
    const data = makeValidProvider()
    data.models[0].defaultTemperature = null
    assert.equal(validate(data), false)
    assert.ok(
      validate.errors.some((e) => e.instancePath.endsWith('/defaultTemperature')),
      `应有 defaultTemperature 错误，实际：${JSON.stringify(validate.errors)}`,
    )
  })

  it('拒绝 defaultTopP: null', () => {
    const data = makeValidProvider()
    data.models[0].defaultTopP = null
    assert.equal(validate(data), false)
    assert.ok(validate.errors.some((e) => e.instancePath.endsWith('/defaultTopP')))
  })

  it('拒绝 defaultTemperature: "0.7"（string）', () => {
    const data = makeValidProvider()
    data.models[0].defaultTemperature = '0.7'
    assert.equal(validate(data), false)
  })

  it('接受省略 defaultTemperature/defaultTopP（reasoning 模型推荐做法）', () => {
    const data = makeValidProvider()
    // 不设这两个字段
    assert.equal(validate(data), true, JSON.stringify(validate.errors))
  })

  it('接受 defaultTemperature: 0.7（合法 number）', () => {
    const data = makeValidProvider()
    data.models[0].defaultTemperature = 0.7
    data.models[0].defaultTopP = 0.95
    assert.equal(validate(data), true, JSON.stringify(validate.errors))
  })

  it('拒绝 defaultTemperature 超出 [0, 2] 范围', () => {
    const data = makeValidProvider()
    data.models[0].defaultTemperature = 3.0
    assert.equal(validate(data), false)
  })

  it('拒绝 model 顶层未知字段（additionalProperties: false 保护老客户端）', () => {
    const data = makeValidProvider()
    data.models[0].brandNewField = 'oops'
    assert.equal(validate(data), false)
    assert.ok(
      validate.errors.some((e) => e.keyword === 'additionalProperties'),
      `应有 additionalProperties 错误，实际：${JSON.stringify(validate.errors)}`,
    )
  })

  it('拒绝 provider 顶层未知字段', () => {
    const data = makeValidProvider()
    data.unknownTopLevelField = 'oops'
    assert.equal(validate(data), false)
    assert.ok(validate.errors.some((e) => e.keyword === 'additionalProperties'))
  })

  it('拒绝缺少必填字段（如 model 缺 modelName）', () => {
    const data = makeValidProvider()
    delete data.models[0].modelName
    assert.equal(validate(data), false)
  })

  it('拒绝非法 status enum', () => {
    const data = makeValidProvider()
    data.status = 'wrong-status'
    assert.equal(validate(data), false)
  })

  it('拒绝非法 priceCurrency enum（仅允许 USD/CNY）', () => {
    const data = makeValidProvider()
    data.priceCurrency = 'EUR'
    assert.equal(validate(data), false)
  })
})

// ==================== Manifest schema ====================

describe('manifest schema', () => {
  const validate = compile('manifest')

  it('合法 manifest 通过', () => {
    assert.equal(
      validate({
        version: '1.0.0',
        presetDataVersion: 30,
        updatedAt: '2026-04-25',
        description: 'test',
      }),
      true,
    )
  })

  it('拒绝 presetDataVersion 为 string', () => {
    assert.equal(
      validate({
        version: '1.0.0',
        presetDataVersion: '30',
        updatedAt: '2026-04-25',
      }),
      false,
    )
  })

  it('拒绝非法 updatedAt 格式', () => {
    assert.equal(
      validate({
        version: '1.0.0',
        presetDataVersion: 30,
        updatedAt: '04/25/2026',
      }),
      false,
    )
  })

  it('拒绝缺少 presetDataVersion', () => {
    assert.equal(
      validate({ version: '1.0.0', updatedAt: '2026-04-25' }),
      false,
    )
  })
})

// ==================== Service map schema ====================

describe('service-map schema', () => {
  const validate = compile('service-map')

  it('合法 service-map 通过', () => {
    assert.equal(
      validate({
        chat: { modelName: 'gpt-5-mini', providerId: 'provider-openai-001' },
      }),
      true,
    )
  })

  it('拒绝缺少 providerId 的条目', () => {
    assert.equal(validate({ chat: { modelName: 'gpt-5-mini' } }), false)
  })

  it('拒绝条目中含未知字段', () => {
    assert.equal(
      validate({
        chat: {
          modelName: 'gpt-5-mini',
          providerId: 'provider-openai-001',
          extra: 'oops',
        },
      }),
      false,
    )
  })
})

// ==================== Providers-index schema ====================

describe('providers-index schema', () => {
  const validate = compile('providers-index')

  it('合法 _index.json 通过', () => {
    assert.equal(validate({ description: 'x', order: ['openai', 'anthropic'] }), true)
  })

  it('拒绝 order 含重复元素', () => {
    assert.equal(validate({ order: ['openai', 'openai'] }), false)
  })

  it('拒绝缺少 order', () => {
    assert.equal(validate({ description: 'x' }), false)
  })
})
