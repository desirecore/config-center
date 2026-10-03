import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cpSync, mkdtempSync, appendFileSync, rmSync } from 'node:fs'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import { fileURLToPath } from 'node:url'
import { classifyGap, missingFactFields, syncRegister } from '../scripts/update-source-gap-register.mjs'
const readable = new Map([['official', { retrieval: 'fetched' }]])
const row = proofs => ({ status: proofs.length ? 'partial' : 'pending', sources: [{ source: 'official' }], fieldSources: proofs.map(field => ({ field })) })
test('unreadable official websites and missing model facts are distinct', () => {
  assert.equal(classifyGap(row([]), new Map([['official', { retrieval: 'shell' }]])), 'blocked')
  assert.equal(classifyGap(row([]), readable), 'pending')
  assert.equal(classifyGap(row(['modelName']), readable), 'idOnly')
  assert.equal(classifyGap(row(['modelName', 'maxOutputTokens']), readable), 'partial')
  assert.equal(classifyGap({ ...row([]), sources: [] }, readable), 'missing')
  assert.equal(classifyGap({ ...row([]), status: 'historical' }, readable), 'historical')
})
test('parent proof covers child contract fields; product routing is not a supplier fact', () => {
  const data = { modelName: 'example', contextWindow: 1000, extra: { reasoning: { supportedEfforts: ['low'], defaultEffort: 'low' }, cachePricing: { read: 1 }, pricingNotes: 'internal note' }, routing: { routingPriority: 1 } }
  assert.deepEqual(missingFactFields(data, [{ field: 'modelName' }, { field: 'extra.reasoning' }]), ['contextWindow', 'extra.cachePricing.read'])
})
test('an edited register cannot silently diverge from field evidence', () => {
  const root = mkdtempSync(join(tmpdir(), 'source-gaps-'))
  const repo = fileURLToPath(new URL('../', import.meta.url))
  try {
    for (const path of ['compute', 'docs/model-sources', 'docs/source-gaps']) cpSync(join(repo, path), join(root, path), { recursive: true })
    assert.deepEqual(syncRegister(root, true).errors, [])
    appendFileSync(join(root, 'docs/source-gaps/providers/openai.md'), '\nIncorrect manual verification claim\n')
    assert.match(syncRegister(root, true).errors.join('\n'), /openai\.md: 来源缺口清单过期/)
  } finally { rmSync(root, { recursive: true, force: true }) }
})
