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

  it('runtimes/recommended.json 应通过 runtime-recommended schema', () => {
    const result = validateFile(join(ROOT, 'runtimes', 'recommended.json'), validators)
    assert.equal(result.ok, true, JSON.stringify(result.errors, null, 2))
  })

  it('runtimes/versions-fallback.json 应通过 runtime-versions-fallback schema', () => {
    const result = validateFile(join(ROOT, 'runtimes', 'versions-fallback.json'), validators)
    assert.equal(result.ok, true, JSON.stringify(result.errors, null, 2))
  })

  it('DeepSeek V4 Pro/Flash 应与官方的 1M/384K reasoning profile 一致', () => {
    const provider = JSON.parse(readFileSync(join(ROOT, 'compute', 'providers', 'deepseek.json'), 'utf8'))
    const specFile = JSON.parse(readFileSync(join(ROOT, 'compute', 'model-specs', 'deepseek.json'), 'utf8'))
    const modelIds = ['deepseek-v4-pro', 'deepseek-v4-flash']

    for (const modelId of modelIds) {
      const model = provider.models.find((item) => item.modelName === modelId)
      assert.ok(model, `provider 缺少 ${modelId}`)
      assert.equal(model.contextWindow, 1000000)
      assert.equal(model.maxOutputTokens, 384000)
      assert.ok(model.capabilities.includes('reasoning'))
      assert.ok(model.capabilities.includes('deep_thinking'))
      assert.ok(model.serviceType.includes('reasoning'))
      assert.equal(model.extra.supportsThinking, true)
      assert.equal(model.extra.thinkingDefault, true)
      assert.deepEqual(model.extra.reasoningEffort, ['high', 'max'])

      const specs = specFile.specs.filter((item) => item.id === modelId)
      assert.equal(specs.length, 1, `model-specs 中 ${modelId} 应且仅应有一条规格`)
      for (const { spec } of specs) {
        assert.equal(spec.contextWindow, 1000000)
        assert.equal(spec.maxOutputTokens, 384000)
        assert.equal(spec.supportsReasoning, true)
        assert.ok(spec.capabilities.includes('reasoning'))
        assert.ok(spec.capabilities.includes('deep_thinking'))
        assert.ok(spec.serviceType.includes('reasoning'))
        assert.equal(spec.extra.supportsThinking, true)
        assert.equal(spec.extra.thinkingDefault, true)
        assert.deepEqual(spec.extra.reasoningEffort, ['high', 'max'])
      }
    }
  })

  it('MiMo V2.5 ASR 应有独立精确规格，避免回落到 MiMo V2.5 family', () => {
    const specFile = JSON.parse(readFileSync(join(ROOT, 'compute', 'model-specs', 'xiaomi.json'), 'utf8'))
    const specs = specFile.specs.filter((item) => item.id === 'mimo-v2.5-asr')

    assert.equal(specs.length, 1, 'mimo-v2.5-asr 应且仅应有一条规格')
    assert.deepEqual(specs[0].match.exact, ['mimo-v2.5-asr'])
    assert.deepEqual(specs[0].spec.serviceType, ['asr'])
    assert.ok(specs[0].spec.capabilities.includes('asr'))
  })

  it('所有 Provider 应按供应商归属计价，模型来源不覆盖供应商币种', () => {
    const expectedCurrencies = {
      anthropic: 'USD',
      baichuan: 'CNY',
      baidu: 'CNY',
      cohere: 'USD',
      dashscope: 'CNY',
      deepseek: 'CNY',
      google: 'USD',
      kling: 'CNY',
      lingyiwanwu: 'CNY',
      'local-whisper': 'USD',
      minimax: 'CNY',
      mistral: 'USD',
      moonshot: 'CNY',
      ollama: 'USD',
      openai: 'USD',
      'openai-codex': 'USD',
      openrouter: 'USD',
      perplexity: 'USD',
      siliconflow: 'CNY',
      stability: 'USD',
      tencent: 'CNY',
      volcengine: 'CNY',
      xai: 'USD',
      xiaomi: 'CNY',
      xunfei: 'CNY',
      zhipu: 'CNY',
      'zhipu-embedding': 'CNY',
    }
    const dir = join(ROOT, 'compute', 'providers')
    const actualProviders = []

    for (const file of readdirSync(dir)) {
      if (!file.endsWith('.json') || file === '_index.json') continue
      const data = JSON.parse(readFileSync(join(dir, file), 'utf8'))
      actualProviders.push(data.provider)
      assert.ok(
        Object.hasOwn(expectedCurrencies, data.provider),
        `未给 Provider ${data.provider} 声明计价归属`,
      )
      assert.equal(
        data.priceCurrency,
        expectedCurrencies[data.provider],
        `${data.label} 应按供应商归属使用 ${expectedCurrencies[data.provider]} 计价`,
      )
    }

    assert.deepEqual(actualProviders.sort(), Object.keys(expectedCurrencies).sort())
  })

  it('MiniMax 应使用国内开放平台人民币价', () => {
    const provider = JSON.parse(readFileSync(join(ROOT, 'compute', 'providers', 'minimax.json'), 'utf8'))
    const model = (modelName) => provider.models.find((item) => item.modelName === modelName)

    assert.equal(provider.priceCurrency, 'CNY')
    assert.deepEqual(
      [model('MiniMax-M3').inputPrice, model('MiniMax-M3').outputPrice],
      [2.1, 8.4],
    )
    assert.deepEqual(
      [model('MiniMax-M2.7').inputPrice, model('MiniMax-M2.7').outputPrice],
      [2.1, 8.4],
    )
    assert.deepEqual(
      [model('MiniMax-M2.7-highspeed').inputPrice, model('MiniMax-M2.7-highspeed').outputPrice],
      [4.2, 16.8],
    )
    assert.equal(model('image-01').extra.pricePerImage, 0.025)
    assert.equal(model('speech-2.8-hd').extra.pricePerMillionCharacters, 350)
    assert.equal(model('speech-2.8-turbo').extra.pricePerMillionCharacters, 200)
    assert.equal(model('music-2.6').extra.pricePerSongUpToFiveMinutes, 1)
  })
})

// ==================== Runtime 清单反例 ====================

describe('runtime-recommended schema 反例', () => {
  const validate = compile('runtime-recommended')

  function makeValidManifest() {
    return JSON.parse(readFileSync(join(ROOT, 'runtimes', 'recommended.json'), 'utf8'))
  }

  it('拒绝缺少平台归档（archives 六平台必填）', () => {
    const data = makeValidManifest()
    delete data.node.archives['win32-arm64']
    assert.equal(validate(data), false)
  })

  it('拒绝非法 sha256（长度/字符集不符）', () => {
    const data = makeValidManifest()
    data.python.sha256['darwin-arm64'] = 'not-a-sha'
    assert.equal(validate(data), false)
  })

  it('拒绝未知字段（additionalProperties: false 保护老客户端）', () => {
    const data = makeValidManifest()
    data.unknownField = true
    assert.equal(validate(data), false)
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

  it('接受 extra.reasoning 能力矩阵，同时保留 extra 其他扩展字段', () => {
    const data = makeValidProvider()
    data.models[0].extra = {
      reasoning: {
        supportedEfforts: ['low', 'medium', 'high', 'xhigh', 'max'],
        defaultEffort: 'medium',
      },
      providerSpecificFlag: true,
    }
    assert.equal(validate(data), true, JSON.stringify(validate.errors))
  })

  it('拒绝 Ultra 与重复 reasoning effort', () => {
    const ultra = makeValidProvider()
    ultra.models[0].extra = {
      reasoning: { supportedEfforts: ['high', 'ultra'], defaultEffort: 'high' },
    }
    assert.equal(validate(ultra), false)

    const duplicate = makeValidProvider()
    duplicate.models[0].extra = {
      reasoning: { supportedEfforts: ['high', 'high'], defaultEffort: 'high' },
    }
    assert.equal(validate(duplicate), false)
  })

  it('拒绝不在 supportedEfforts 中的 defaultEffort', () => {
    const data = makeValidProvider()
    data.models[0].extra = {
      reasoning: { supportedEfforts: ['low'], defaultEffort: 'high' },
    }
    assert.equal(validate(data), false)
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

describe('model-spec schema 接入面边界', () => {
  const validate = compile('model-spec')

  it('拒绝在模型内在规格中声明 reasoning effort', () => {
    const data = {
      specs: [{
        id: 'gpt-test',
        spec: {
          extra: {
            reasoning: {
              supportedEfforts: ['low', 'high'],
              defaultEffort: 'low',
            },
          },
        },
      }],
    }
    assert.equal(validate(data), false)
  })

  it('仍允许模型内在扩展参数', () => {
    const data = {
      specs: [{ id: 'gpt-test', spec: { extra: { intrinsicBudgetHint: 8192 } } }],
    }
    assert.equal(validate(data), true, JSON.stringify(validate.errors))
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
