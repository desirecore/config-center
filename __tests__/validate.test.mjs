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
import { existsSync, readFileSync, readdirSync } from 'node:fs'
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

  it('model-specs 是智能路由的唯一规格主数据', () => {
    const indexPath = join(ROOT, 'compute', 'model-specs', '_index.json')
    const result = validateFile(indexPath, validators)
    assert.equal(result.ok, true, JSON.stringify(result.errors, null, 2))

    const index = JSON.parse(readFileSync(indexPath, 'utf8'))
    assert.deepEqual(index.routingTiers.map((tier) => tier.id), [
      'flagship',
      'balanced',
      'lightweight',
    ])
    assert.equal(existsSync(join(ROOT, 'compute', 'smart-routing')), false)

    const routed = []
    for (const name of index.order) {
      const file = JSON.parse(readFileSync(join(ROOT, 'compute', 'model-specs', `${name}.json`), 'utf8'))
      for (const spec of file.specs) {
        if (spec.routing) routed.push(spec)
      }
    }
    assert.equal(routed.length, 46)
    assert.equal(routed.every((spec) => spec.routing.reasoning.supportedModes.includes(spec.routing.reasoning.defaultMode)), true)
    assert.equal(routed.every((spec) => Array.isArray(spec.spec.capabilities)), true)
  })

  it('智能路由三档必须完整唯一，且每档从自身开始回退', () => {
    const indexPath = join(ROOT, 'compute', 'model-specs', '_index.json')
    const index = JSON.parse(readFileSync(indexPath, 'utf8'))
    const validate = compile('model-specs-index')

    const duplicateTier = structuredClone(index)
    duplicateTier.routingTiers[1] = structuredClone(duplicateTier.routingTiers[0])
    assert.equal(validate(duplicateTier), false)

    const wrongFirstFallback = structuredClone(index)
    wrongFirstFallback.routingTiers[0].fallbackOrder = ['balanced', 'flagship', 'lightweight']
    assert.equal(validate(wrongFirstFallback), false)
  })

  it('Provider 与 coding plan 的 _index.json 应通过 providers-index schema', () => {
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

  it('WebSearch 服务端能力仅标记官方直连 Anthropic/OpenAI 模型', () => {
    const anthropic = JSON.parse(readFileSync(join(ROOT, 'compute', 'providers', 'anthropic.json'), 'utf8'))
    const openai = JSON.parse(readFileSync(join(ROOT, 'compute', 'providers', 'openai.json'), 'utf8'))
    const openaiCodex = JSON.parse(readFileSync(join(ROOT, 'compute', 'providers', 'openai-codex.json'), 'utf8'))

    const enabled = (provider) => provider.models
      .filter((model) => model.extra?.serverSideWebSearch?.enabled === true)
      .map((model) => model.modelName)

    assert.deepEqual(enabled(anthropic), [
      'claude-fable-5',
      'claude-opus-5',
      'claude-sonnet-5',
    ])
    assert.deepEqual(enabled(openai), [
      'gpt-5.5',
      'gpt-5.5-pro',
      'gpt-5.4',
      'gpt-5.4-pro',
      'gpt-5.4-mini',
      'gpt-5.4-nano',
      'gpt-5',
      'gpt-4.1',
      'gpt-4.1-mini',
      'o4-mini',
    ])
    assert.deepEqual(enabled(openaiCodex), [])

    for (const model of anthropic.models.filter((item) => enabled(anthropic).includes(item.modelName))) {
      assert.equal(model.extra.serverSideWebSearch.dialect, 'anthropic-messages')
      assert.equal(model.extra.serverSideWebSearch.toolType, 'web_search_20260318')
      assert.equal(model.extra.serverSideWebSearch.searchRequestPriceUsd, 0.01)
      assert.equal('maxUses' in model.extra.serverSideWebSearch, false)
    }
    for (const model of openai.models.filter((item) => enabled(openai).includes(item.modelName))) {
      assert.equal(model.extra.serverSideWebSearch.dialect, 'openai-responses')
      assert.equal(model.extra.serverSideWebSearch.toolType, 'web_search')
      assert.equal(model.extra.serverSideWebSearch.searchRequestPriceUsd, 0.01)
      assert.equal('maxUses' in model.extra.serverSideWebSearch, false)
    }
  })

  it('Brave Search API 使用显式密钥声明且默认关闭', () => {
    const brave = JSON.parse(readFileSync(join(ROOT, 'api-providers', 'web-search', 'brave.json'), 'utf8'))
    const index = JSON.parse(readFileSync(join(ROOT, 'api-providers', 'web-search', '_index.json'), 'utf8'))

    assert.equal(brave.enabled, false)
    assert.equal(brave.endpoint, 'https://api.search.brave.com/res/v1/web/search')
    assert.deepEqual(brave.auth, {
      type: 'header',
      headerName: 'X-Subscription-Token',
      apiKeyRef: 'brave',
    })
    assert.deepEqual(index.order, ['tavily', 'brave', 'serper'])
    assert.equal(
      validateFile(join(ROOT, 'api-providers', 'web-search', 'brave.json'), validators).ok,
      true,
    )
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

  it('DeepSeek V4 Flash Vision Exp 应提供独立的视觉规格', () => {
    const provider = JSON.parse(readFileSync(join(ROOT, 'compute', 'providers', 'deepseek.json'), 'utf8'))
    const specFile = JSON.parse(readFileSync(join(ROOT, 'compute', 'model-specs', 'deepseek.json'), 'utf8'))
    const modelId = 'deepseek-v4-flash-vision-exp'
    const model = provider.models.find((item) => item.modelName === modelId)

    assert.ok(provider.services.includes('vision'))
    assert.ok(model, `provider 缺少 ${modelId}`)
    assert.equal(model.contextWindow, 1000000)
    assert.equal(model.maxOutputTokens, 384000)
    assert.ok(model.capabilities.includes('vision'))
    assert.ok(model.serviceType.includes('vision'))
    assert.equal(model.extra.supportsThinking, true)
    assert.equal(model.extra.thinkingDefault, true)

    const specs = specFile.specs.filter((item) => item.id === modelId)
    assert.equal(specs.length, 1, `model-specs 中 ${modelId} 应且仅应有一条规格`)
    assert.deepEqual(specs[0].match.exact, [modelId])
    assert.equal('patterns' in specs[0].match, false)
    assert.equal(specs[0].family, modelId)
    assert.equal(specs[0].spec.contextWindow, 1000000)
    assert.equal(specs[0].spec.maxOutputTokens, 384000)
    assert.equal(specs[0].spec.supportsReasoning, true)
    assert.ok(specs[0].spec.capabilities.includes('vision'))
    assert.ok(specs[0].spec.serviceType.includes('vision'))

    const flash = specFile.specs.find((item) => item.id === 'deepseek-v4-flash')
    assert.deepEqual(flash.match.exact, ['deepseek-v4-flash'])
    assert.equal('patterns' in flash.match, false)
  })

  it('MiMo V2.5 ASR 应有独立精确规格，避免回落到 MiMo V2.5 family', () => {
    const specFile = JSON.parse(readFileSync(join(ROOT, 'compute', 'model-specs', 'xiaomi.json'), 'utf8'))
    const specs = specFile.specs.filter((item) => item.id === 'mimo-v2.5-asr')

    assert.equal(specs.length, 1, 'mimo-v2.5-asr 应且仅应有一条规格')
    assert.deepEqual(specs[0].match.exact, ['mimo-v2.5-asr'])
    assert.deepEqual(specs[0].spec.serviceType, ['asr'])
    assert.ok(specs[0].spec.capabilities.includes('asr'))
  })

  it('Ox Alpha 应提供与 OpenRouter 一致的多模态推理规格', () => {
    const provider = JSON.parse(readFileSync(join(ROOT, 'compute', 'providers', 'openrouter.json'), 'utf8'))
    const specFile = JSON.parse(readFileSync(join(ROOT, 'compute', 'model-specs', 'stealth.json'), 'utf8'))
    const model = provider.models.find((item) => item.modelName === 'stealth/ox-alpha')
    const modelSpec = specFile.specs.find((item) => item.id === 'ox-alpha')

    assert.ok(model, 'OpenRouter provider 缺少 stealth/ox-alpha')
    assert.ok(modelSpec, 'model-specs 缺少 ox-alpha')

    for (const item of [model, modelSpec.spec]) {
      assert.equal(item.contextWindow, 1048576)
      assert.equal(item.maxOutputTokens, 131072)
      assert.equal(item.defaultTemperature, 1)
      assert.equal(item.defaultTopP, 0.95)
      assert.ok(item.capabilities.includes('reasoning'))
      assert.ok(item.capabilities.includes('vision'))
      assert.ok(item.capabilities.includes('video_understanding'))
    }

    assert.deepEqual(model.extra.reasoning.supportedEfforts, ['low', 'high', 'max'])
    assert.equal(model.extra.reasoning.defaultEffort, 'max')
    assert.equal(model.extra.thinking.disableSupported, false)
    assert.equal(model.inputPrice, 0)
    assert.equal(model.outputPrice, 0)
    assert.deepEqual(modelSpec.match.exact, ['ox-alpha', 'stealth/ox-alpha'])
    assert.equal(modelSpec.spec.supportsReasoning, true)
    assert.equal(modelSpec.spec.releasedAt, '2026-08-21')
  })

  it('MiMo V2.5 仅非 Pro 型号应声明多模态能力', () => {
    const provider = JSON.parse(readFileSync(join(ROOT, 'compute', 'providers', 'xiaomi.json'), 'utf8'))
    const specFile = JSON.parse(readFileSync(join(ROOT, 'compute', 'model-specs', 'xiaomi.json'), 'utf8'))
    const specFor = (modelId) => specFile.specs.find((item) => item.id === modelId)

    const mimoV25 = specFor('mimo-v2.5')
    assert.ok(mimoV25, 'model-specs 缺少 mimo-v2.5')
    assert.ok(mimoV25.spec.capabilities.includes('vision'))
    assert.ok(mimoV25.spec.serviceType.includes('vision'))

    for (const modelId of ['mimo-v2.5-pro', 'mimo-v2-pro']) {
      const modelSpec = specFor(modelId)
      assert.ok(modelSpec, `model-specs 缺少 ${modelId}`)
      assert.equal(modelSpec.spec.capabilities.includes('vision'), false)
      assert.equal(modelSpec.spec.serviceType.includes('vision'), false)
    }

    const pro = provider.models.find((item) => item.modelName === 'mimo-v2.5-pro')
    assert.ok(pro, 'provider 缺少 mimo-v2.5-pro')
    assert.equal(pro.capabilities.includes('vision'), false)
    assert.equal(pro.serviceType.includes('vision'), false)
  })

  it('Qwen3.8 Max Preview 应在 Token Plan 中提供完整的推理与视觉规格', () => {
    const tokenPlan = JSON.parse(readFileSync(join(ROOT, 'compute', 'coding-plans', 'dashscope-token-plan.json'), 'utf8'))
    const specFile = JSON.parse(readFileSync(join(ROOT, 'compute', 'model-specs', 'qwen.json'), 'utf8'))
    const modelId = 'qwen3.8-max-preview'
    const model = tokenPlan.models.find((item) => item.modelName === modelId)

    assert.ok(model, `Token Plan 缺少 ${modelId}`)
    assert.equal(model.contextWindow, 983616)
    assert.equal(model.defaultTemperature, 0.6)
    assert.ok(model.capabilities.includes('reasoning'))
    assert.ok(model.capabilities.includes('vision'))
    assert.ok(model.serviceType.includes('reasoning'))
    assert.ok(model.serviceType.includes('vision'))
    assert.deepEqual(model.extra.reasoning.supportedEfforts, ['low', 'high', 'xhigh'])
    assert.equal(model.extra.reasoning.defaultEffort, 'xhigh')
    assert.equal(model.extra.thinkingOnly, true)
    assert.equal(model.extra.thinkingMaxTokens, 262144)
    assert.equal(model.extra.preserveThinkingDefault, true)
    assert.equal(model.extra.supportsParallelToolCalls, false)

    const specs = specFile.specs.filter((item) => item.id === modelId)
    assert.equal(specs.length, 1, `model-specs 中 ${modelId} 应且仅应有一条规格`)
    assert.equal(specs[0].spec.contextWindow, 1000000)
    assert.equal(specs[0].spec.defaultTemperature, 0.6)
    assert.equal(specs[0].spec.supportsReasoning, true)
    assert.ok(specs[0].spec.capabilities.includes('vision'))
  })

  it('Qwen3.8 Flash 应提供完整的多模态推理规格', () => {
    const specFile = JSON.parse(readFileSync(join(ROOT, 'compute', 'model-specs', 'qwen.json'), 'utf8'))
    const modelId = 'qwen3.8-flash'
    const specs = specFile.specs.filter((item) => item.id === modelId)

    assert.equal(specs.length, 1, `model-specs 中 ${modelId} 应且仅应有一条规格`)
    const modelSpec = specs[0]
    assert.deepEqual(modelSpec.match.exact, [modelId])
    assert.equal('patterns' in modelSpec.match, false)
    assert.equal(modelSpec.family, modelId)
    assert.equal(modelSpec.spec.contextWindow, 1000000)
    assert.equal(modelSpec.spec.maxOutputTokens, 131072)
    assert.equal(modelSpec.spec.supportsReasoning, true)
    assert.equal(modelSpec.spec.releasedAt, '2026-08-26')
    assert.ok(modelSpec.spec.capabilities.includes('vision'))
    assert.ok(modelSpec.spec.capabilities.includes('video_understanding'))
    assert.ok(modelSpec.spec.capabilities.includes('fast'))
    assert.deepEqual(modelSpec.spec.serviceType, ['chat', 'reasoning', 'vision'])
    assert.equal(modelSpec.spec.extra.thinkingMaxTokens, 262144)
    assert.equal(modelSpec.routing.tier, 'lightweight')
    assert.equal(modelSpec.routing.reasoning.defaultMode, 'xhigh')
  })

  it('GLM-5.3-Flash 应在 Coding Plan 中提供强制思考的多模态接入', () => {
    const codingPlan = JSON.parse(readFileSync(join(ROOT, 'compute', 'coding-plans', 'zhipu-coding.json'), 'utf8'))
    const specFile = JSON.parse(readFileSync(join(ROOT, 'compute', 'model-specs', 'zhipu.json'), 'utf8'))
    const modelId = 'glm-5.3-flash'
    const model = codingPlan.models.find((item) => item.modelName === modelId)
    const modelSpec = specFile.specs.find((item) => item.id === modelId)

    assert.ok(model, `智谱 Coding Plan 缺少 ${modelId}`)
    assert.equal(model.contextWindow, 1048576)
    assert.equal(model.maxOutputTokens, 131072)
    assert.ok(model.capabilities.includes('vision'))
    assert.ok(model.capabilities.includes('video_understanding'))
    assert.deepEqual(model.serviceType, ['chat', 'reasoning', 'vision'])
    assert.equal(model.extra.thinkingOnly, true)
    assert.deepEqual(model.extra.reasoning.supportedEfforts, ['low', 'high', 'max'])
    assert.equal(model.extra.reasoning.defaultEffort, 'max')

    assert.ok(modelSpec, `model-specs 缺少 ${modelId}`)
    assert.equal(modelSpec.spec.extra.thinkingOnly, true)
    assert.deepEqual(modelSpec.routing.reasoning.supportedModes, ['auto', 'low', 'high', 'max'])
  })

  it('基础模型与后缀版本应使用独立精确规格，避免互相误匹配', () => {
    const qwen = JSON.parse(readFileSync(join(ROOT, 'compute', 'model-specs', 'qwen.json'), 'utf8'))
    const deepseek = JSON.parse(readFileSync(join(ROOT, 'compute', 'model-specs', 'deepseek.json'), 'utf8'))
    const specFor = (file, id) => file.specs.find((item) => item.id === id)

    const qwenBase = specFor(qwen, 'qwen3.8-max')
    const qwenPreview = specFor(qwen, 'qwen3.8-max-preview')
    const deepseekBase = specFor(deepseek, 'deepseek-v4-pro')
    const deepseek0813 = specFor(deepseek, 'deepseek-v4-pro-0813')
    const deepseekFlash = specFor(deepseek, 'deepseek-v4-flash')
    const deepseekFlash0731 = specFor(deepseek, 'deepseek-v4-flash-0731')

    for (const [id, modelSpec] of [
      ['qwen3.8-max', qwenBase],
      ['qwen3.8-max-preview', qwenPreview],
      ['deepseek-v4-pro', deepseekBase],
      ['deepseek-v4-pro-0813', deepseek0813],
      ['deepseek-v4-flash', deepseekFlash],
      ['deepseek-v4-flash-0731', deepseekFlash0731],
    ]) {
      assert.ok(modelSpec, `model-specs 缺少 ${id}`)
      assert.deepEqual(modelSpec.match.exact, [id])
      assert.equal(modelSpec.family, id)
    }

    assert.equal('patterns' in deepseekBase.match, false)
    assert.equal('patterns' in deepseek0813.match, false)
    assert.equal('patterns' in deepseekFlash.match, false)
    assert.equal('patterns' in deepseekFlash0731.match, false)
    assert.equal(qwenBase.spec.contextWindow, qwenPreview.spec.contextWindow)
    assert.equal(qwenBase.spec.maxOutputTokens, qwenPreview.spec.maxOutputTokens)
    assert.equal(deepseekBase.spec.contextWindow, deepseek0813.spec.contextWindow)
    assert.equal(deepseekBase.spec.maxOutputTokens, deepseek0813.spec.maxOutputTokens)
    assert.equal(deepseekFlash.spec.contextWindow, deepseekFlash0731.spec.contextWindow)
    assert.equal(deepseekFlash.spec.maxOutputTokens, deepseekFlash0731.spec.maxOutputTokens)
  })

  it('所有 Provider 应按供应商归属计价，模型来源不覆盖供应商币种', () => {
    const expectedCurrencies = {
      anthropic: 'USD',
      'anthropic-claude': 'USD',
      baichuan: 'CNY',
      baidu: 'CNY',
      cohere: 'USD',
      dashscope: 'CNY',
      deepseek: 'CNY',
      google: 'USD',
      kling: 'CNY',
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

describe('model-specs 智能路由 schema 反例', () => {
  const validate = compile('model-spec')

  it('拒绝未声明的 routing 字段，避免策略静默分叉', () => {
    const data = JSON.parse(readFileSync(join(ROOT, 'compute', 'model-specs', 'openai.json'), 'utf8'))
    data.specs.find((spec) => spec.routing).routing.unknownRoutingPolicy = true
    assert.equal(validate(data), false)
  })

  it('拒绝默认 reasoning 不在模型支持集合中的策略', () => {
    const data = JSON.parse(readFileSync(join(ROOT, 'compute', 'model-specs', 'openai.json'), 'utf8'))
    data.specs.find((spec) => spec.routing).routing.reasoning.defaultMode = 'max'
    data.specs.find((spec) => spec.routing).routing.reasoning.supportedModes = ['auto']
    assert.equal(validate(data), false)
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
