import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync, readdirSync } from 'node:fs'
const read = file => JSON.parse(readFileSync(new URL(`../${file}`, import.meta.url), 'utf8'))

test('Spark X2 must not inherit Ultra endpoint or X1.5 output limits', () => {
  const old = read('compute/providers/xunfei.json')
  const x2 = read('compute/providers/xunfei-x2.json')
  assert.ok(old.models.some(model => model.modelName === '4.0Ultra'))
  assert.ok(!old.models.some(model => model.modelName === 'spark-x'))
  assert.ok(old.tombstones.includes('spark-x'))
  assert.equal(x2.baseUrl, 'https://spark-api-open.xf-yun.com/x2')
  const model = x2.models.find(model => model.modelName === 'spark-x')
  assert.equal(model.maxOutputTokens, 131072)
  assert.ok(model.capabilities.includes('tool_use'))
  assert.ok(read('compute/providers/_index.json').order.includes('xunfei-x2'))
})
test('Anthropic API defaults do not retain contradictory legacy flat effort', () => {
  for (const config of ['anthropic', 'anthropic-claude']) {
    const models = read(`compute/providers/${config}.json`).models
    for (const model of models) assert.equal(model.extra?.defaultEffort, undefined)
    for (const id of ['claude-opus-5', 'claude-sonnet-5', 'claude-sonnet-5-5']) {
      assert.equal(models.find(model => model.modelName === id).extra.reasoning.defaultEffort, 'high')
    }
    assert.equal(models.find(model => model.modelName === 'claude-opus-5-5').extra.reasoning.defaultEffort, 'medium')
  }
})
test('all published reasoning contracts use consumed fields after migration', () => {
  for (const folder of ['providers', 'coding-plans', 'model-specs']) {
    for (const name of readdirSync(new URL(`../compute/${folder}/`, import.meta.url)).filter(name => name.endsWith('.json') && name !== '_index.json')) {
      const config = read(`compute/${folder}/${name}`)
      for (const model of config.models ?? config.specs) {
        const extra = model.spec?.extra ?? model.extra ?? {}
        assert.equal(extra.reasoningEffort, undefined, `${folder}/${name}: ${model.modelName ?? model.id}`)
        assert.equal(extra.defaultReasoningEffort, undefined)
      }
    }
  }
})
