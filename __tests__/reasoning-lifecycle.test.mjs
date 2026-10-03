import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
const read = (name) => JSON.parse(readFileSync(new URL(`../${name}`, import.meta.url), 'utf8'))
test('verified API effort fields are client-readable and Pro defaults remain distinct', () => {
  const rows = read('compute/providers/openai.json').models
  for (const id of ['gpt-5.5', 'gpt-5.5-pro', 'gpt-5.4', 'gpt-5.4-pro', 'gpt-5.4-mini', 'gpt-5.4-nano']) {
    const row = rows.find((x) => x.modelName === id)
    assert.deepEqual(row.extra.reasoning.supportedEfforts, id.endsWith('-pro')
      ? ['medium', 'high', 'xhigh']
      : ['none', 'low', 'medium', 'high', 'xhigh'])
    assert.equal(row.extra.reasoningEffort, undefined)
    assert.equal(row.extra.defaultReasoningEffort, undefined)
    if (id.endsWith('-pro')) assert.equal(row.extra.responsesOnly, true)
  }
  assert.equal(rows.find((x) => x.modelName === 'gpt-5.4-pro').extra.reasoning.defaultEffort, 'medium')
  assert.equal(rows.find((x) => x.modelName === 'gpt-5.5-pro').extra.reasoning.defaultEffort, 'high')
})
test('provisional and historical identities cannot become automatic official models', () => {
  const reserve = read('compute/model-specs/openai.json').specs.find((x) => x.id === 'gpt-reserve')
  assert.ok(reserve)
  assert.equal(reserve.routing.eligibleForAgent, false)
  const ox = read('compute/model-specs/stealth.json').specs.find((x) => x.id === 'ox-alpha')
  assert.deepEqual(ox.match.exact, ['ox-alpha', 'stealth/ox-alpha'])
  assert.equal(ox.spec.extra.modelOrigin, undefined)
})
