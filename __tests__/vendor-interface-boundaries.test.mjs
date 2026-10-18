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
test('MiniMax M2.x output limit follows the official max_tokens cap and retired models are tombstoned', () => {
  // 官网 Messages API 参数参考：除 M3.1-Flash-Preview / M3 外的其他模型 max_tokens 上限 204800（2026-10-18）
  const specs = read('compute/model-specs/minimax.json').specs
  const m2 = ['MiniMax-M2.7', 'MiniMax-M2.7-highspeed', 'MiniMax-M2.5', 'MiniMax-M2.5-highspeed', 'MiniMax-M2.1', 'MiniMax-M2.1-highspeed', 'MiniMax-M2']
  for (const id of m2) {
    const spec = specs.find((r) => r.id === id).spec
    assert.equal(spec.maxOutputTokens, 204800, id)
    assert.equal(spec.contextWindow, 204800, id)
  }
  for (const path of ['compute/providers/minimax.json', 'compute/coding-plans/minimax-coding.json']) {
    for (const row of read(path).models.filter((r) => m2.includes(r.modelName))) assert.equal(row.maxOutputTokens, 204800, `${path}#${row.modelName}`)
  }
  // 模型列表页标为已下线：直连移除并写入 tombstones，规格保留；M2-her 撤去与官网 64 K 窗口矛盾的数值
  const retired = ['MiniMax-M2.1', 'MiniMax-M2.1-highspeed', 'MiniMax-M2', 'M2-her']
  const direct = read('compute/providers/minimax.json')
  for (const id of retired) {
    assert.equal(direct.models.some((r) => r.modelName === id), false, id)
    assert.ok(direct.tombstones.includes(id), id)
    assert.ok(specs.some((r) => r.id === id), id)
  }
  const her = specs.find((r) => r.id === 'M2-her').spec
  assert.equal(her.contextWindow, undefined)
  assert.equal(her.maxOutputTokens, undefined)
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
