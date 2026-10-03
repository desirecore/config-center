import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cpSync, mkdtempSync, readFileSync, writeFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawnSync } from 'node:child_process'
import { validateDataSources } from '../scripts/validate-data-sources.mjs'

const repo = fileURLToPath(new URL('../', import.meta.url))
function fixture(run) {
  const root = mkdtempSync(join(tmpdir(), 'data-contract-'))
  for (const path of ['docs/data-sources', 'api-providers', 'compute/providers']) cpSync(join(repo, path), join(root, path), { recursive: true })
  for (const file of ['pricing.json', 'service-map.json']) cpSync(join(repo, 'compute', file), join(root, 'compute', file))
  try { run(root) } finally { rmSync(root, { recursive: true, force: true }) }
}
function change(root, path, mutate) {
  const file = join(root, path), data = JSON.parse(readFileSync(file, 'utf8'))
  mutate(data)
  writeFileSync(file, JSON.stringify(data))
}
test('non-model source records cover current policy and API configuration', () => {
  assert.deepEqual(validateDataSources(repo), { errors: [], records: 8 })
})
test('API authentication and result mapping changes require contract review', () => fixture(root => {
  change(root, 'api-providers/web-search/tavily.json', data => { data.auth.type = 'none'; data.response.resultsPath = 'wrong' })
  assert.match(validateDataSources(root).errors.join('\n'), /contract drift: auth/)
}))
test('new API provider must have its own source record', () => fixture(root => {
  cpSync(join(root, 'api-providers/web-search/tavily.json'), join(root, 'api-providers/web-search/new.json'))
  assert.match(validateDataSources(root).errors.join('\n'), /missing source record: api-providers\/web-search\/new.json/)
}))
test('pricing assumptions cannot drift without policy record update', () => fixture(root => {
  change(root, 'compute/pricing.json', data => { data.usdToCny = 8 })
  assert.match(validateDataSources(root).errors.join('\n'), /contract drift: usdToCny/)
}))
test('default mappings cannot reference absent models', () => fixture(root => {
  change(root, 'compute/service-map.json', data => { data.chat.modelName = 'nonexistent' })
  assert.match(validateDataSources(root).errors.join('\n'), /unresolved route chat/)
}))
test('changing a default to an existing model still requires a policy record update', () => fixture(root => {
  change(root, 'compute/service-map.json', data => { data.chat.modelName = 'gpt-5.5' })
  assert.match(validateDataSources(root).errors.join('\n'), /routing policy drift/)
}))
test('third-party hosts cannot be presented as official evidence', () => fixture(root => {
  const path = join(root, 'docs/data-sources/api-providers/tavily.md')
  writeFileSync(path, readFileSync(path, 'utf8').replace('https://docs.tavily.com/', 'https://third-party.example/'))
  assert.match(validateDataSources(root).errors.join('\n'), /unapproved source URL/)
}))
test('an official entry cannot redirect verification to a third-party site', () => fixture(root => {
  const path = join(root, 'docs/data-sources/api-providers/tavily.md')
  writeFileSync(path, readFileSync(path, 'utf8').replace('"resolvedUrl": "https://docs.tavily.com/', '"resolvedUrl": "https://third-party.example/'))
  assert.match(validateDataSources(root).errors.join('\n'), /unapproved resolved source URL/)
}))
test('a page shell cannot prove verified API fields', () => fixture(root => {
  const path = join(root, 'docs/data-sources/api-providers/tavily.md')
  writeFileSync(path, readFileSync(path, 'utf8').replace('"retrieval": "fetched"', '"retrieval": "shell"'))
  assert.match(validateDataSources(root).errors.join('\n'), /verified field without fetched source/)
}))
test('retired ZenMux tools fail before reading or writing data', () => {
  for (const entry of ['batch_update_model_jsons', 'apply_all_updates_and_build_diff_report', 'generate_current_audit_artifacts', 'generate_field_tables_per_json']) {
    const result = spawnSync(process.execPath, [join(repo, 'tools', `${entry}.mjs`)], { encoding: 'utf8', env: { ...process.env, CONFIG_CENTER_ROOT: '/nonexistent-root', ZENMUX_FILE: '/nonexistent-snapshot' } })
    assert.equal(result.status, 1)
    assert.match(result.stderr, /retired/)
    assert.doesNotMatch(result.stderr, /ENOENT/)
  }
})
