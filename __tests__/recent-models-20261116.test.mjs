import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { resolveEffectiveModel } from '../scripts/catalog-v2/effective-model.mjs'

const read = file => JSON.parse(readFileSync(new URL(`../${file}`, import.meta.url), 'utf8'))
const catalog = read('catalog/v2/catalog.json')
const ids = [
  'qwen4-max', 'qwen4-max-preview', 'glm-5.3-flashx-legal', 'hy4', 'hy4-flash', 'claude-fable-5-2',
  'gemini-4-carbon', 'gemini-4-hydrogen', 'gpt-image-2.6-flare', 'gpt-image-2.6-sunburst',
  'gemini-omni-1.1-flash', 'gemini-omni-1.2-flash', 'gemini-nano-banana-2.1',
]
const findSpec = id => catalog.specs.find(s => s.identity.canonicalModelId === id)
const providerModel = (provider, id) => read(`compute/providers/${provider}.json`).models.find(m => m.modelName === id)
const effective = (file, id) => {
  const access = catalog.accesses.find(a => a.metadata.sourceFile === file)
  const model = access.models.find(m => m.apiModelId === id)
  return resolveEffectiveModel(catalog.specs.find(s => s.modelRef === model.modelRef), model, {
    publicationState: 'published', requiredClientVersion: '0.0.0', clientVersion: '999.0.0',
    now: '2026-11-16T00:00:00Z', connection: access.connection,
  })
}

test('新增条目不改变仅指定供应商时首个对话模型的兜底选择', () => {
  for (const [file, expected] of [
    ['compute/providers/dashscope.json', 'qwen3.8-omni-flash'],
    ['compute/providers/google.json', 'gemini-4-argon'],
    ['compute/providers/openrouter.json', 'mistralai/mistral-large-4-0'],
    ['compute/coding-plans/dashscope-token-plan.json', 'deepseek-v4.1-flash'],
  ]) {
    const first = read(file).models.find(model => model.serviceType === 'chat' || model.serviceType?.includes('chat'))
    assert.equal(first?.modelName, expected, file)
  }
})

test('十一月新规格精确绑定且不扩展默认自动路由', () => {
  for (const id of ids) {
    const spec = findSpec(id)
    assert.ok(spec, id)
    assert.notEqual(spec.routing.eligibleForAgent, true, id)
    assert.notEqual(spec.routing.defaultReference, true, id)
    assert.equal(spec.metadata.legacyIdentity.match.patterns, undefined, id)
    for (const a of catalog.accesses) for (const m of a.models.filter(m => m.modelRef === spec.modelRef)) {
      assert.equal(m.binding.kind, 'exact', m.apiModelId)
      const result = effective(a.metadata.sourceFile, m.apiModelId)
      assert.equal(result.eligibleForCall, true, m.apiModelId)
      assert.equal(result.eligibleForAutoRouting, false, m.apiModelId)
      assert.deepEqual(result.pendingOverrides, [], m.apiModelId)
    }
  }
  assert.equal(catalog.publication.state, 'candidate')
  assert.equal(catalog.publication.requiredClientVersion, null)
})

test('Qwen 正式版的模式上限与 API、套餐、聚合价格分开', () => {
  const spec = findSpec('qwen4-max')
  assert.equal(spec.facts.maxInputTokens, 983616)
  assert.equal(spec.facts.maxOutputTokens, 262144)
  assert.equal(spec.metadata.legacyIdentity.match.exact.includes('qwen4-max-preview'), false)
  const native = providerModel('dashscope', 'qwen4-max')
  assert.deepEqual([native.contextWindow, native.maxOutputTokens, native.inputPrice, native.outputPrice], [1000000, 131072, 10, 30])
  assert.deepEqual(native.extra.reasoning.supportedEfforts, ['none', 'high'])
  const plan = read('compute/coding-plans/dashscope-token-plan.json').models.find(m => m.modelName === 'qwen4-max')
  assert.equal(plan.maxOutputTokens, 131072)
  assert.equal(plan.inputPrice, undefined)
  assert.equal(plan.outputPrice, undefined)
  assert.deepEqual(plan.extra.reasoning.supportedEfforts, ['none', 'high'])
  const hosted = providerModel('openrouter', 'qwen/qwen4-max')
  assert.deepEqual([hosted.inputPrice, hosted.outputPrice, hosted.extra.cachedInputPrice], [1.5, 4.5, 0.075])
})

test('Preview 精确规格阻止旧客户端剥离后继承正式版合同', () => {
  const preview = findSpec('qwen4-max-preview')
  const formal = findSpec('qwen4-max')
  assert.deepEqual(preview.metadata.legacyIdentity.match.exact, ['qwen4-max-preview', 'qwen4.0-max-preview'])
  for (const alias of preview.metadata.legacyIdentity.match.exact) {
    assert.equal(catalog.specs.filter(s => s.metadata.legacyIdentity.match?.exact?.includes(alias)).length, 1)
    assert.equal(formal.metadata.legacyIdentity.match.exact.includes(alias), false)
  }
  assert.deepEqual([preview.facts.maxOutputTokens, formal.facts.maxOutputTokens], [393216, 262144])
  assert.equal(preview.metadata.previewPeriod.endsAt, '2026-11-25T16:00:00Z')
  assert.equal(preview.lifecycle.retiredAt, undefined)
  assert.equal(catalog.accesses.some(a => a.models.some(m => m.modelRef === preview.modelRef)), false)
})

test('Gemini 原生单次输出、平台长输出及默认思考档位不串用', () => {
  const carbon = providerModel('google', 'gemini-4-carbon')
  const hydrogen = providerModel('google', 'gemini-4-hydrogen')
  assert.deepEqual([carbon.maxOutputTokens, hydrogen.maxOutputTokens], [32768, 65536])
  assert.equal(findSpec('gemini-4-carbon').facts.maxOutputTokens, 65536)
  assert.ok(findSpec('gemini-4-hydrogen').routing.reasoning.supportedModes.includes('xhigh'))
  assert.equal(hydrogen.extra.reasoning.supportedEfforts.includes('xhigh'), false)
  assert.equal(hydrogen.extra.reasoning.defaultEffort, 'high')
  assert.match(carbon.extra.pricingNotes, /2026-12-01/)
  for (const id of ['gemini-4-carbon', 'gemini-4-hydrogen']) {
    assert.equal(providerModel('openrouter', `google/${id}`).maxOutputTokens, 943718)
    assert.equal(effective('compute/providers/openrouter.json', `google/${id}`).facts.maxOutputTokens, 943718)
  }
  const hosted = providerModel('openrouter', 'google/gemini-4-hydrogen')
  assert.equal(hosted.extra.reasoning.defaultEffort, 'medium')
  assert.ok(hosted.extra.reasoning.supportedEfforts.includes('xhigh'))
})

test('未适配型号不写入原厂接入，媒体输入输出不冒充总窗口', () => {
  for (const id of ['claude-fable-5-2', 'hy4-flash', 'gpt-image-2.6-flare', 'gpt-image-2.6-sunburst', 'gemini-omni-1.1-flash', 'gemini-omni-1.2-flash', 'gemini-nano-banana-2.1']) {
    const ref = findSpec(id).modelRef
    assert.equal(catalog.accesses.some(a => a.models.some(m => m.modelRef === ref)), false, id)
  }
  assert.equal(providerModel('tencent', 'hy4'), undefined)
  assert.equal(providerModel('zhipu', 'glm-5.3-flashx-legal'), undefined)
  for (const id of ['gemini-omni-1.1-flash', 'gemini-omni-1.2-flash', 'gemini-nano-banana-2.1']) {
    assert.equal(findSpec(id).facts.contextWindow, undefined)
    assert.equal(findSpec(id).facts.maxInputTokens, 131072)
  }
})

test('百度托管国际与免费 ID 保持平台局部合同，不继承国内规格', () => {
  for (const id of ['baidu/ernie-5.5-flash-preview:free', 'baidu/ernie-light-dt-1.0-intl']) {
    const result = effective('compute/providers/openrouter.json', id)
    assert.equal(result.identity, null)
    assert.equal(result.manualOnly, true)
    assert.equal(result.eligibleForCall, true)
    assert.equal(result.eligibleForAutoRouting, false)
    assert.equal(result.facts.contextWindow, 1024000)
  }
  const free = providerModel('openrouter', 'baidu/ernie-5.5-flash-preview:free')
  assert.deepEqual([free.inputPrice, free.outputPrice], [0, 0])
  const paid = providerModel('openrouter', 'baidu/ernie-light-dt-1.0-intl')
  assert.deepEqual([paid.inputPrice, paid.outputPrice, paid.extra.cachedInputPrice], [1.13, 3.94, 0.113])
})
