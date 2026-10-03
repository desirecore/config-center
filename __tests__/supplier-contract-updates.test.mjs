import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync, readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { join } from 'node:path'
import { parseSourcePage } from '../scripts/validate-sources.mjs'

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
