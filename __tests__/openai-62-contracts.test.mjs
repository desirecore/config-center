import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { resolveEffectiveModel } from '../scripts/catalog-v2/effective-model.mjs'

const read = file => JSON.parse(readFileSync(new URL(`../${file}`, import.meta.url), 'utf8'))
const catalog = read('catalog/v2/catalog.json')
const ids = ['gpt-6.2-sol', 'gpt-6.2-astra']
const levels = ['low', 'medium', 'high', 'xhigh', 'max']
const model = (file, id) => read(file).models.find(m => m.modelName === id)
const effective = (file, id) => {
  const access = catalog.accesses.find(a => a.metadata.sourceFile === file)
  const row = access.models.find(m => m.apiModelId === id)
  return resolveEffectiveModel(catalog.specs.find(s => s.modelRef === row.modelRef), row, {
    publicationState: 'published', requiredClientVersion: '0.0.0', clientVersion: '999.0.0',
    now: '2026-11-18T00:00:00Z', connection: access.connection,
  })
}

test('6.2 两款原厂精确规格保留硬约束，既有客户端仅开放可编码子集', () => {
  for (const id of ids) {
    const spec = catalog.specs.find(s => s.modelRef === `openai:${id}`)
    assert.ok(spec)
    assert.deepEqual(spec.metadata.legacyIdentity.match.exact, [id, `openai/${id}`])
    assert.equal(spec.metadata.legacyIdentity.match.patterns, undefined)
    assert.deepEqual([spec.facts.contextWindow, spec.facts.maxInputTokens, spec.facts.maxOutputTokens], [1050000, 922000, 128000])
    assert.deepEqual(spec.facts.constraints, { thinkingOnly: true, samplingParametersDeprecated: true })
    assert.equal(spec.routing.eligibleForAgent, false)
    assert.equal(spec.routing.defaultReference, false)
    assert.deepEqual(spec.routing.reasoning, { supportedModes: ['auto', ...levels], defaultMode: 'auto' })
    const v1 = read('compute/model-specs/openai.json').specs.find(s => s.id === id)
    assert.equal(v1.spec.extra.thinkingOnly, true)
    assert.equal(v1.spec.extra.samplingParametersDeprecated, true)
  }
  assert.deepEqual(catalog.publication, { state: 'candidate', requiredClientVersion: null })
})

test('原厂工具请求在V1和V2均显式走Responses，不只依赖未消费的标记', () => {
  const file = 'compute/providers/openai.json'
  assert.equal(read(file).apiFormat, 'openai-completions')
  for (const id of ids) {
    const v1 = model(file, id)
    assert.equal(v1.extra.apiFormatOverride, 'openai-responses')
    assert.equal(v1.extra.responsesOnly, true)
    assert.deepEqual(v1.extra.reasoning.supportedEfforts, levels)
    assert.equal(v1.extra.reasoning.defaultEffort, undefined)
    const resolved = effective(file, id)
    assert.equal(resolved.apiFormat, 'openai-responses')
    assert.equal(resolved.eligibleForCall, true)
    assert.equal(resolved.eligibleForAutoRouting, false)
    assert.equal(resolved.request.constraints.thinkingOnly, true)
    assert.equal(resolved.request.constraints.samplingParametersDeprecated, true)
    assert.equal(v1.defaultTemperature, undefined)
    assert.equal(v1.defaultTopP, undefined)
  }
})

test('订阅默认窗口和本仓输出规划策略不冒充原厂API合同', () => {
  const file = 'compute/providers/openai-codex.json'
  for (const [id, window] of [['gpt-6.2-sol', 500000], ['gpt-6.2-astra', 272000]]) {
    const v1 = model(file, id)
    assert.equal(v1.contextWindow, window)
    assert.equal(v1.maxOutputTokens, 128000)
    assert.equal(v1.inputPrice, undefined)
    assert.equal(v1.outputPrice, undefined)
    assert.equal(v1.extra.apiFormatOverride, undefined)
    assert.deepEqual(v1.extra.reasoning.supportedEfforts, levels)
    assert.equal(v1.extra.reasoning.defaultEffort, undefined)
    const access = catalog.accesses.find(a => a.metadata.sourceFile === file).models.find(m => m.apiModelId === id)
    assert.equal(access.metadata.knownContract.subscriptionMaxOutputTokens, null)
    assert.equal(access.metadata.knownContract.subscriptionMaxInputTokens, null)
    assert.equal(access.metadata.localPolicy.outputPlanningCeiling, 128000)
    assert.equal(access.metadata.localPolicy.vendorSubscriptionLimitVerified, false)
    const resolved = effective(file, id)
    assert.equal(resolved.apiFormat, 'openai-codex-responses')
    assert.deepEqual([resolved.facts.contextWindow, resolved.facts.maxInputTokens, resolved.facts.maxOutputTokens], [window, null, 128000])
    assert.equal(resolved.eligibleForAutoRouting, false)
  }
})

test('OpenRouter Pro只保留平台局部身份，真实slug和独立默认档位不丢失', () => {
  const file = 'compute/providers/openrouter.json'
  for (const id of ids) {
    const native = model('compute/providers/openai.json', id)
    const expected = id.endsWith('sol') ? [2, 10, 0.1, 2.5] : [8, 40, 0.4, 10]
    assert.deepEqual([native.inputPrice, native.outputPrice, native.extra.cachedInputPrice], expected.slice(0, 3))
    for (const suffix of ['', '-pro']) {
      const slug = `openai/${id}${suffix}`
      const v1 = model(file, slug)
      assert.equal(v1.modelName, slug)
      assert.deepEqual([v1.inputPrice, v1.outputPrice, v1.extra.cachedInputPrice, v1.extra.cacheWritePrice], expected)
      assert.equal(v1.extra.reasoning.defaultEffort, 'medium')
      assert.deepEqual(v1.extra.reasoning.supportedEfforts, levels)
      assert.equal(v1.extra.pricingTiers, undefined)
      assert.match(v1.extra.pricingNotes, /min_prompt_tokens=272000/)
      const resolved = effective(file, slug)
      assert.equal(resolved.apiModelId, slug)
      assert.equal(resolved.apiFormat, 'openai-completions')
      assert.equal(resolved.eligibleForCall, true)
      assert.equal(resolved.eligibleForAutoRouting, false)
      if (suffix) {
        assert.equal(resolved.identity, null)
        assert.equal(resolved.manualOnly, true)
      }
    }
    assert.equal(catalog.specs.some(s => s.identity.canonicalModelId === `${id}-pro`), false)
    assert.equal(model('compute/providers/openai.json', `${id}-pro`), undefined)
  }
})

test('新增条目不改变供应商首个对话模型，未设置不可用速度或缓存扩展', () => {
  for (const [file, expected] of [
    ['compute/providers/openai.json', 'gpt-6.1-terra'],
    ['compute/providers/openai-codex.json', 'gpt-6.1-terra'],
    ['compute/providers/openrouter.json', 'mistralai/mistral-large-4-0'],
  ]) {
    assert.equal(read(file).models.find(m => m.serviceType === 'chat' || m.serviceType?.includes('chat')).modelName, expected)
    for (const row of read(file).models.filter(m => /gpt-6\.2-(?:sol|astra)/.test(m.modelName))) {
      assert.equal(row.extra.cacheRetention, undefined)
      assert.equal(row.extra.serviceTier, undefined)
      assert.equal(row.extra.reasoning.supportedEfforts.includes('ultra'), false)
      assert.equal(row.extra.reasoning.supportedEfforts.includes('none'), false)
      assert.equal(row.extra.reasoning.supportedEfforts.includes('minimal'), false)
    }
  }
})
