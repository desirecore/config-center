import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync, readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { join } from 'node:path'
import { parseSourcePage } from '../scripts/validate-sources.mjs'
import { resolveEffectiveModel } from '../scripts/catalog-v2/effective-model.mjs'

const root = fileURLToPath(new URL('../', import.meta.url))
const read = path => JSON.parse(readFileSync(join(root, path), 'utf8'))
test('Kimi domestic token prices remain distinct from write TTL and subscription prices', () => {
  const provider = read('compute/providers/moonshot.json')
  const model = provider.models.find(item => item.modelName === 'kimi-k3')
  assert.equal(provider.priceCurrency, 'CNY')
  assert.deepEqual([model.inputPrice, model.outputPrice, model.extra.cacheHitPrice], [20, 100, 2])
  assert.equal(model.maxOutputTokens, 1048576)
  assert.match(model.extra.pricingNotes, /TTL 5min 20, TTL 1h 40/)
  const page = parseSourcePage(readFileSync(join(root, 'docs/model-sources/providers/moonshot/models/kimi-k3.md'), 'utf8'))
  const proof = page.records.find(item => item.config === 'compute/providers/moonshot.json').fieldSources
  for (const field of ['inputPrice', 'outputPrice', 'extra.cacheHitPrice']) assert.ok(proof.some(item => item.field === field && item.source === 'kimi-pricing'))
})
test('Xiaomi normal API prices do not use batch rates or ASR duration as token prices', () => {
  const provider = read('compute/providers/xiaomi.json')
  const old = provider.models.find(item => item.modelName === 'mimo-v2.5-pro')
  assert.deepEqual([old.inputPrice, old.outputPrice, old.extra.cachedInputPrice], [3, 6, 0.025])
  const asr = provider.models.find(item => item.modelName === 'mimo-v2.5-asr')
  assert.equal(asr.inputPrice, undefined)
  assert.equal(asr.outputPrice, undefined)
  const fast = provider.models.find(item => item.modelName === 'mimo-v2.6-pro-ultraspeed')
  assert.deepEqual([fast.inputPrice, fast.outputPrice], [30, 60])
})
test('Baidu Coding Plan does not inherit native ERNIE vision or obsolete quota multipliers', () => {
  const plan = read('compute/coding-plans/baidu-coding.json')
  assert.equal(plan.models.some(item => item.capabilities?.includes('vision')), false)
  const glm = plan.models.find(item => item.modelName === 'glm-5.1')
  assert.match(glm.description, /高峰抵扣 ×4 \/ 低峰 ×3/)
  assert.ok(read('compute/providers/baidu.json').models.find(item => item.modelName === 'ernie-5.0').capabilities.includes('vision'))
})
test('JavaScript shell pages cannot silently become verified Volcengine parameters', () => {
  const directory = join(root, 'docs/model-sources/providers/volcengine/models')
  for (const file of readdirSync(directory)) {
    const page = parseSourcePage(readFileSync(join(directory, file), 'utf8'))
    for (const record of page.records) {
      assert.equal(record.status, 'pending')
      assert.deepEqual(record.fieldSources, [])
    }
  }
})

const catalog = read('catalog/v2/catalog.json')
const access = (file, id) => catalog.accesses.find(item => item.metadata.sourceFile === file).models.find(item => item.apiModelId === id)
const effective = (file, id) => {
  const connection = catalog.accesses.find(item => item.metadata.sourceFile === file).connection
  const model = access(file, id)
  const spec = catalog.specs.find(item => item.modelRef === model.modelRef)
  return resolveEffectiveModel(spec, model, {
    publicationState: 'published', requiredClientVersion: '0.0.0', clientVersion: '999.0.0',
    now: '2026-10-28T00:00:00Z', connection,
  })
}
test('October additions are exact identities and do not enlarge default automatic routing', () => {
  const additions = ['gpt-6.1-terra', 'claude-haiku-5-5', 'MiniMax-M3.1-Flash', 'kimi-k3.1-pro', 'kimi-k3.1-pro-highspeed', 'gemini-4-argon', 'mistral-large-4']
  for (const id of additions) {
    const specs = catalog.specs.filter(item => item.identity.canonicalModelId === id)
    assert.equal(specs.length, 1, id)
    assert.equal(specs[0].routing.eligibleForAgent, false, id)
    assert.equal(specs[0].routing.defaultReference, false, id)
    assert.equal(specs[0].metadata.legacyIdentity.match.patterns, undefined, id)
    for (const endpoint of catalog.accesses) for (const model of endpoint.models.filter(item => item.modelRef === specs[0].modelRef)) {
      assert.equal(model.binding.kind, 'exact', model.apiModelId)
      const result = effective(endpoint.metadata.sourceFile, model.apiModelId)
      assert.equal(result.eligibleForCall, true, `${endpoint.id}:${model.apiModelId}`)
      assert.equal(result.eligibleForAutoRouting, false, model.apiModelId)
      assert.deepEqual(result.pendingOverrides, [], model.apiModelId)
    }
  }
  assert.equal(catalog.publication.state, 'candidate')
  assert.equal(catalog.publication.requiredClientVersion, null)
})
test('Terra native tools use Responses, independent input limit and subscription billing remain separate', () => {
  const result = effective('compute/providers/openai.json', 'gpt-6.1-terra')
  assert.equal(result.apiFormat, 'openai-responses')
  assert.equal(result.facts.contextWindow, 1050000)
  assert.equal(result.facts.maxInputTokens, 922000)
  assert.equal(result.facts.maxOutputTokens, 128000)
  assert.ok(result.request.reasoning.supportedEfforts.includes('none'))
  const api = read('compute/providers/openai.json').models.find(item => item.modelName === 'gpt-6.1-terra')
  assert.deepEqual([api.inputPrice, api.outputPrice, api.extra.cachedInputPrice], [1, 5, 0.05])
  const subscription = effective('compute/providers/openai-codex.json', 'gpt-6.1-terra')
  assert.equal(subscription.apiFormat, 'openai-codex-responses')
  assert.deepEqual(subscription.billing, [])
  assert.equal(subscription.request.reasoning.supportedEfforts.includes('none'), false)
})
test('Haiku tier and cache prices cannot collapse to its headline minimum or Batch output limit', () => {
  const model = read('compute/providers/anthropic.json').models.find(item => item.modelName === 'claude-haiku-5-5')
  assert.equal(model.maxOutputTokens, 128000)
  assert.deepEqual(model.extra.pricingTiers, [
    { maxInputTokens: 100000, inputPrice: 0.1, outputPrice: 0.5, cacheReadPrice: 0.01 },
    { maxInputTokens: 1000000, inputPrice: 0.5, outputPrice: 2.5, cacheReadPrice: 0.05 },
  ])
  for (const file of ['compute/providers/anthropic.json', 'compute/providers/anthropic-claude.json']) {
    const result = effective(file, 'claude-haiku-5-5')
    assert.equal(result.request.adaptiveThinking, true)
    assert.equal(result.request.reasoning.defaultEffort, 'medium')
    assert.deepEqual(result.request.reasoning.supportedEfforts, ['low', 'medium', 'high', 'xhigh', 'max'])
    assert.equal(result.facts.constraints.samplingParametersDeprecated, true)
    assert.equal(result.facts.constraints.forcedToolChoiceUnsupported, undefined)
    assert.equal(result.request.thinkingRoundTrip.protocol, 'anthropic-messages')
    assert.equal(result.request.thinkingRoundTrip.enabled, true)
    assert.equal(result.request.thinkingToolTurnValidation, 'accepts-thinkless')
  }
  assert.equal(effective('compute/providers/openrouter.json', 'anthropic/claude-haiku-5.5').request.adaptiveThinking, undefined)
})
test('MiniMax GA replaces the retired preview without mixing the native and hosted window or prices', () => {
  const plan = read('compute/coding-plans/minimax-coding.json')
  assert.equal(plan.models.some(item => item.modelName === 'MiniMax-M3.1-Flash-Preview'), false)
  assert.ok(plan.tombstones.includes('MiniMax-M3.1-Flash-Preview'))
  assert.equal(catalog.specs.find(item => item.modelRef === 'minimax:MiniMax-M3.1-Flash-Preview').lifecycle.status, 'historical')
  for (const file of ['compute/providers/minimax.json', 'compute/coding-plans/minimax-coding.json']) {
    const result = effective(file, 'MiniMax-M3.1-Flash')
    assert.equal(result.facts.contextWindow, 1000000)
    assert.equal(result.facts.maxOutputTokens, 524288)
    assert.equal(result.facts.constraints.thinkingOnly, true)
    assert.equal(result.request.adaptiveThinking, true)
    assert.equal(result.request.reasoning.defaultEffort, 'max')
  }
  const native = read('compute/providers/minimax.json').models.find(item => item.modelName === 'MiniMax-M3.1-Flash')
  const hosted = read('compute/providers/openrouter.json').models.find(item => item.modelName === 'minimax/minimax-m3.1-flash')
  assert.deepEqual([native.inputPrice, native.outputPrice, native.extra.cacheReadPrice], [1, 4, 0.1])
  assert.deepEqual([hosted.inputPrice, hosted.outputPrice, hosted.extra.cachedInputPrice], [0.15, 0.6, 0.015])
  assert.equal(effective('compute/providers/openrouter.json', hosted.modelName).facts.contextWindow, 1048576)
  assert.equal(effective('compute/providers/openrouter.json', hosted.modelName).request.adaptiveThinking, undefined)
})
test('Kimi API and Code retain distinct request IDs, defaults, tier caps and unknown subscription output', () => {
  for (const [apiId, codeId, window, input, output] of [
    ['kimi-k3.1-pro', 'k3.1-pro', 262144, 13, 68],
    ['kimi-k3.1-pro-highspeed', 'k3.1-pro-highspeed', 1048576, 26, 136],
  ]) {
    const api = effective('compute/providers/moonshot.json', apiId)
    const code = effective('compute/coding-plans/moonshot-coding.json', codeId)
    assert.equal(api.request.reasoning.defaultEffort, 'max')
    assert.equal(api.facts.maxOutputTokens, 1048576)
    assert.equal(code.request.reasoning.defaultEffort, 'high')
    assert.equal(code.apiModelId, codeId)
    assert.equal(code.facts.contextWindow, window)
    assert.equal(code.facts.maxOutputTokens, null)
    assert.deepEqual(code.billing, [])
    assert.equal(code.facts.constraints.thinkingOnly, true)
    const legacy = read('compute/coding-plans/moonshot-coding.json').models.find(item => item.modelName === codeId)
    assert.equal(legacy.maxOutputTokens, undefined)
    const row = read('compute/providers/moonshot.json').models.find(item => item.modelName === apiId)
    assert.deepEqual([row.inputPrice, row.outputPrice, row.extra.cacheHitPrice], [input, output, 1.3])
    assert.equal(api.request.thinking.preserveReasoningContent, true)
  }
})
test('Gemini synchronous access cannot claim long decode while the hosted output contract remains independent', () => {
  const native = effective('compute/providers/google.json', 'gemini-4-argon')
  assert.equal(native.apiFormat, 'google-generative-ai')
  assert.equal(native.facts.contextWindow, 1048576)
  assert.equal(native.facts.maxOutputTokens, 32768)
  assert.equal(native.request.reasoning.defaultEffort, 'medium')
  const hosted = effective('compute/providers/openrouter.json', 'google/gemini-4-argon')
  assert.equal(hosted.facts.maxOutputTokens, 943718)
  assert.deepEqual(hosted.pendingOverrides, [])
  assert.equal(catalog.specs.find(item => item.modelRef === 'google:gemini-4-argon').facts.maxOutputTokens, 65536)
  const row = read('compute/providers/google.json').models.find(item => item.modelName === 'gemini-4-argon')
  assert.match(row.extra.pricingNotes, /2026-11-30/)
  assert.match(row.extra.pricingNotes, /2026-12-01/)
})
test('Mistral original unknown budgets stay unknown rather than inheriting the gateway limits', () => {
  const native = effective('compute/providers/mistral.json', 'mistral-large-4')
  assert.equal(native.facts.contextWindow, undefined)
  assert.equal(native.facts.maxOutputTokens, undefined)
  assert.deepEqual(native.request.reasoning.supportedEfforts, ['none'])
  const hosted = effective('compute/providers/openrouter.json', 'mistralai/mistral-large-4-0')
  assert.equal(hosted.facts.contextWindow, 1048576)
  assert.equal(hosted.facts.maxOutputTokens, 262144)
})
