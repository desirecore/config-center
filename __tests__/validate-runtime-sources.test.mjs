import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cpSync, mkdtempSync, readFileSync, writeFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { validateRuntimeSources } from '../scripts/validate-runtime-sources.mjs'
const repo = fileURLToPath(new URL('../', import.meta.url))
function fixture(run) {
  const root = mkdtempSync(join(tmpdir(), 'runtime-provenance-'))
  for (const path of ['docs/runtime-sources', 'runtimes']) cpSync(join(repo, path), join(root, path), { recursive: true })
  try { run(root) } finally { rmSync(root, { recursive: true, force: true }) }
}
function change(root, path, mutate) {
  const file = join(root, path), data = JSON.parse(readFileSync(file, 'utf8'))
  mutate(data)
  writeFileSync(file, JSON.stringify(data))
}
test('runtime documentation matches current recommended archives and fallback rows', () => {
  assert.deepEqual(validateRuntimeSources(repo), { errors: [] })
})
test('recommended checksum or version cannot change without source table review', () => fixture(root => {
  change(root, 'runtimes/recommended.json', data => { data.node.sha256['linux-x64'] = '0'.repeat(64); data.python.version = '3.14.9' })
  const errors = validateRuntimeSources(root).errors.join('\n')
  assert.match(errors, /node: recommended archive\/hash table drift/)
  assert.match(errors, /python: recommended version drift/)
}))
test('offline snapshot data and Hatch pin cannot drift from source records', () => fixture(root => {
  change(root, 'runtimes/versions-fallback.json', data => { data.node[0].version = 'v26.11.0'; data.python[0].version = '3.7.10' })
  const errors = validateRuntimeSources(root).errors.join('\n')
  assert.match(errors, /node: snapshot fingerprint drift/)
  assert.match(errors, /node: first version drift/)
  assert.match(errors, /python: Hatch pin table drift/)
}))
test('runtime metadata guards dates, counts, LTS and standalone tag', () => fixture(root => {
  change(root, 'runtimes/versions-fallback.json', data => { data.generatedAt = '2099-01-01T00:00:00Z'; data.pkgManagers.npm.pop() })
  change(root, 'runtimes/recommended.json', data => { data.node.ltsCodename = 'Future'; data.python.distTag = '20990101' })
  const errors = validateRuntimeSources(root).errors.join('\n')
  assert.match(errors, /future generatedAt/)
  assert.match(errors, /npm: snapshot count drift/)
  assert.match(errors, /node: recommended LTS drift/)
  assert.match(errors, /python: recommended distTag drift/)
}))
