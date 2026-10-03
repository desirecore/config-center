import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
const read = (path) => JSON.parse(readFileSync(new URL(`../${path}`, import.meta.url), 'utf8'))
test('Cohere compatibility provider excludes native rerank and tombstones old preset', () => {
  const d = read('compute/providers/cohere.json')
  assert.ok(d.tombstones.includes('rerank-v3.5'))
  assert.equal(d.models.some((r) => r.serviceType.includes('rerank')), false)
  assert.equal(read('compute/model-specs/cohere.json').specs.find((r) => r.id === 'rerank-v3.5').spec.contextWindow, 4096)
})
test('MiniMax SDK text-only M2 models cannot advertise image/video input', () => {
  for (const path of ['compute/providers/minimax.json', 'compute/coding-plans/minimax-coding.json', 'compute/model-specs/minimax.json']) {
    const d = read(path)
    for (const row of d.models ?? d.specs) {
      if (!/^MiniMax-M2(?:\.|$)/.test(row.modelName ?? row.id)) continue
      const caps = (row.spec ?? row).capabilities
      assert.equal(caps.some((v) => ['vision', 'image_understanding', 'video_understanding'].includes(v)), false)
    }
  }
  assert.equal(read('compute/model-specs/minimax.json').specs.find((r) => r.id === 'MiniMax-M3').spec.contextWindow, 1000000)
})
test('North canonical IDs match official API IDs without broad alias inheritance', () => {
  const rows = read('compute/model-specs/cohere.json').specs
  assert.equal(rows.some((r) => r.id === 'north-mini-code'), false)
  const mini = rows.find((r) => r.id === 'north-mini-code-1-0')
  assert.deepEqual(mini.match.exact, ['north-mini-code-1-0', 'north-mini-code'])
  assert.equal(mini.match.patterns, undefined)
  assert.equal(mini.spec.supportsReasoning, undefined)
  assert.deepEqual(rows.find((r) => r.id === 'north-small-translate-1-0').match.exact, ['north-small-translate-1-0'])
  assert.equal(read('compute/providers/cohere.json').models.some((r) => r.modelName.startsWith('north-')), false)
})
