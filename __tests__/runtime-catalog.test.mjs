import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { selectNodeVersions, selectPackageReleases, verifyRecommended } from '../scripts/update-runtime-catalog.mjs'

const now = '2026-10-03T12:00:00Z'
test('runtime snapshot excludes future, prerelease and monorepo library releases', () => {
  const rows = [
    { tag_name: 'config-v11.2.0', published_at: now },
    { tag_name: 'v12.3.0-beta.1', published_at: now },
    { tag_name: 'v12.2.0', published_at: '2026-09-30T00:00:00Z' },
    { tag_name: 'v12.3.0', published_at: '2026-10-04T00:00:00Z' },
    { tag_name: 'v12.1.0', published_at: now, prerelease: true },
  ]
  assert.deepEqual(selectPackageReleases(rows, 'npm', now), [{ tag_name: 'v12.2.0', created_at: '2026-09-30T00:00:00Z' }])
  assert.deepEqual(selectPackageReleases([{ tag_name: '@yarnpkg/cli/4.18.1', published_at: now }, { tag_name: '@yarnpkg/core/4.18.1', published_at: now }], 'yarn', now), [{ tag_name: 'v4.18.1', created_at: now }])
})
test('Node snapshot caps each major and excludes future/pre-release entries', () => {
  const rows = ['v26.10.0', 'v26.9.0', 'v26.8.2', 'v26.8.1', 'v24.21.0', 'v24.22.0-rc1', 'v15.0.0'].map(version => ({ version, date: '2026-09-30' }))
  rows.unshift({ version: 'v27.0.0', date: '2026-10-10' })
  assert.deepEqual(selectNodeVersions(rows, now).map(row => row.version), ['v26.10.0', 'v26.9.0', 'v26.8.2', 'v24.21.0'])
})
test('recommended verifier rejects mismatched digest and cross-platform archive', () => {
  const r = JSON.parse(readFileSync(new URL('../runtimes/recommended.json', import.meta.url)))
  const nodes = [{ version: `v${r.node.version}`, lts: r.node.ltsCodename, date: '2026-09-07' }]
  const sums = Object.entries(r.node.archives).map(([key, path]) => `${r.node.sha256[key]}  ${path.split('/').at(-1)}`).join('\n')
  const release = { published_at: '2026-10-01T22:37:31Z', tag_name: r.python.distTag, assets: Object.entries(r.python.archives).map(([key, path]) => ({ name: path.split('/').at(-1), state: 'uploaded', digest: `sha256:${r.python.sha256[key]}` })) }
  verifyRecommended(r, nodes, sums, release, now)
  assert.throws(() => verifyRecommended(r, nodes, sums, { ...release, published_at: '2026-10-04T00:00:00Z' }, now), /future publication/)
  assert.throws(() => verifyRecommended(r, nodes, sums, { ...release, published_at: undefined }, now), /unpublished/)
  assert.throws(() => verifyRecommended(r, [{ ...nodes[0], date: '2026-10-04' }], sums, release, now), /future publication/)
  const badDigest = structuredClone(r)
  badDigest.node.sha256['linux-x64'] = '0'.repeat(64)
  assert.throws(() => verifyRecommended(badDigest, nodes, sums, release, now), /digest mismatch/)
  const badPlatform = structuredClone(r)
  badPlatform.python.archives['linux-arm64'] = r.python.archives['linux-x64']
  assert.throws(() => verifyRecommended(badPlatform, nodes, sums, release, now), /Unsafe Python archive/)
})
test('each refreshed runtime catalog snapshot matches its documented fingerprint', async () => {
  const { createHash } = await import('node:crypto')
  const fallback = JSON.parse(readFileSync(new URL('../runtimes/versions-fallback.json', import.meta.url)))
  for (const name of ['node', 'npm', 'pnpm', 'yarn']) {
    const rows = name === 'node' ? fallback.node : fallback.pkgManagers[name]
    const path = name === 'node' ? 'node-snapshot.md' : `package-managers/${name}-snapshot.md`
    const doc = readFileSync(new URL(`../docs/runtime-sources/${path}`, import.meta.url), 'utf8')
    const hash = createHash('sha256').update(JSON.stringify(rows)).digest('hex')
    assert.ok(doc.includes(hash), `${name}: stale provenance fingerprint`)
    assert.ok(doc.includes(fallback.generatedAt), `${name}: stale provenance date`)
  }
})
