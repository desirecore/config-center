import { readFile, writeFile } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import { fileURLToPath } from 'node:url'
import { resolve, dirname } from 'node:path'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
export const SOURCES = Object.freeze({
  node: 'https://nodejs.org/dist/index.json',
  npm: 'https://api.github.com/repos/npm/cli/releases?per_page=100',
  pnpm: 'https://api.github.com/repos/pnpm/pnpm/releases?per_page=100',
  yarn: 'https://api.github.com/repos/yarnpkg/berry/releases?per_page=100',
  hatch: 'https://raw.githubusercontent.com/pypa/hatch/b998d2b755bc0dca20054f96da8981532444fc2a/src/hatch/python/distributions.py',
})
const hash = value => createHash('sha256').update(JSON.stringify(value)).digest('hex')
const stableVersion = /^v\d+\.\d+\.\d+$/

export function selectNodeVersions(rows, now) {
  if (!Array.isArray(rows)) throw new Error('Invalid official Node index')
  const counts = new Map()
  const selected = rows.filter(row => {
    if (!stableVersion.test(row.version) || !/^\d{4}-\d{2}-\d{2}$/.test(row.date)) return false
    if (row.date > now.slice(0, 10)) return false
    const major = Number(row.version.split('.')[0].slice(1))
    if (major < 16 || (counts.get(major) ?? 0) >= 3) return false
    counts.set(major, (counts.get(major) ?? 0) + 1)
    return true
  })
  if (!selected.length) throw new Error('No stable Node releases')
  return selected
}

export function selectPackageReleases(rows, name, now) {
  if (!Array.isArray(rows)) throw new Error(`Invalid ${name} releases`)
  const seen = new Set()
  return rows.flatMap(row => {
    if (row.draft || row.prerelease) return []
    let tag = row.tag_name
    if (name === 'yarn') {
      const match = /^@yarnpkg\/cli\/(\d+\.\d+\.\d+)$/.exec(tag)
      if (!match) return []
      tag = `v${match[1]}`
    }
    if (!stableVersion.test(tag) || seen.has(tag)) return []
    if (!row.published_at || !Number.isFinite(Date.parse(row.published_at)) || Date.parse(row.published_at) > Date.parse(now)) return []
    seen.add(tag)
    // Client-compatible field name; value is publication time, not commit creation time.
    return [{ tag_name: tag, created_at: row.published_at }]
  }).slice(0, 30)
}

export function verifyRecommended(recommended, nodeRows, sums, pythonRelease, now = new Date().toISOString()) {
  const nowMs = Date.parse(now)
  if (!Number.isFinite(nowMs)) throw new Error('Invalid verification time')
  const publishedMs = Date.parse(pythonRelease.published_at)
  if (!Number.isFinite(publishedMs) || publishedMs > nowMs) throw new Error('Python release unpublished or future publication date')
  const node = nodeRows.find(row => row.version === `v${recommended.node.version}`)
  if (!node || node.lts !== recommended.node.ltsCodename) throw new Error('Recommended Node release/LTS mismatch')
  if (!/^\d{4}-\d{2}-\d{2}$/.test(node.date) || node.date > now.slice(0, 10)) throw new Error('Node release missing or future publication date')
  if (pythonRelease.tag_name !== recommended.python.distTag || pythonRelease.draft || pythonRelease.prerelease) throw new Error('Python release tag/status mismatch')
  const lines = new Map(sums.split('\n').flatMap(line => {
    const match = /^([a-f0-9]{64})\s+\*?(\S+)$/.exec(line.trim())
    return match ? [[match[2], match[1]]] : []
  }))
  const nodeSuffixes = { 'darwin-arm64': 'darwin-arm64.tar.gz', 'darwin-x64': 'darwin-x64.tar.gz', 'win32-x64': 'win-x64.zip', 'win32-arm64': 'win-arm64.zip', 'linux-x64': 'linux-x64.tar.gz', 'linux-arm64': 'linux-arm64.tar.gz' }
  const pythonTriples = { 'darwin-arm64': 'aarch64-apple-darwin', 'darwin-x64': 'x86_64-apple-darwin', 'win32-x64': 'x86_64-pc-windows-msvc', 'win32-arm64': 'aarch64-pc-windows-msvc', 'linux-x64': 'x86_64-unknown-linux-gnu', 'linux-arm64': 'aarch64-unknown-linux-gnu' }
  for (const platform of Object.keys(nodeSuffixes)) {
    const path = recommended.node.archives[platform]
    if (path !== `v${recommended.node.version}/node-v${recommended.node.version}-${nodeSuffixes[platform]}`) throw new Error('Unsafe Node archive path')
    if (lines.get(path.split('/').at(-1)) !== recommended.node.sha256[platform]) throw new Error(`Node digest mismatch: ${platform}`)
  }
  for (const platform of Object.keys(pythonTriples)) {
    const path = recommended.python.archives[platform]
    if (path !== `${recommended.python.distTag}/cpython-${recommended.python.version}+${recommended.python.distTag}-${pythonTriples[platform]}-install_only_stripped.tar.gz`) throw new Error('Unsafe Python archive path')
    const asset = pythonRelease.assets.find(row => row.name === path.split('/').at(-1))
    if (!asset || asset.state !== 'uploaded' || asset.digest !== `sha256:${recommended.python.sha256[platform]}`) throw new Error(`Python digest mismatch: ${platform}`)
  }
}

async function officialText(url) {
  const allowed = new Set([...Object.values(SOURCES)])
  const recommended = JSON.parse(await readFile(resolve(ROOT, 'runtimes/recommended.json'), 'utf8'))
  allowed.add(`https://nodejs.org/dist/v${recommended.node.version}/SHASUMS256.txt`)
  allowed.add(`https://api.github.com/repos/astral-sh/python-build-standalone/releases/tags/${recommended.python.distTag}`)
  if (!allowed.has(url)) throw new Error(`Unapproved source: ${url}`)
  const response = await fetch(url, { redirect: 'error', signal: AbortSignal.timeout(30000), headers: { 'User-Agent': 'config-center-runtime-audit' } })
  if (!response.ok) throw new Error(`${url}: HTTP ${response.status}`)
  return response.text()
}

async function main() {
  const write = process.argv.includes('--write')
  if (process.argv.slice(2).some(arg => arg !== '--write')) throw new Error('Usage: node scripts/update-runtime-catalog.mjs [--write]')
  const recommended = JSON.parse(await readFile(resolve(ROOT, 'runtimes/recommended.json'), 'utf8'))
  const old = JSON.parse(await readFile(resolve(ROOT, 'runtimes/versions-fallback.json'), 'utf8'))
  const sumsUrl = `https://nodejs.org/dist/v${recommended.node.version}/SHASUMS256.txt`
  const pythonUrl = `https://api.github.com/repos/astral-sh/python-build-standalone/releases/tags/${recommended.python.distTag}`
  const urls = [...Object.values(SOURCES), sumsUrl, pythonUrl]
  const texts = await Promise.all(urls.map(officialText))
  const source = Object.fromEntries(urls.map((url, i) => [url, texts[i]]))
  const nodes = JSON.parse(source[SOURCES.node])
  const pythonRelease = JSON.parse(source[pythonUrl])
  const now = new Date().toISOString()
  verifyRecommended(recommended, nodes, source[sumsUrl], pythonRelease, now)
  // The fallback mirrors bundled Hatch 1.16.5, not standalone's latest release.
  // Fail closed if its existing rows no longer match that official distribution map.
  for (const row of old.python) {
    const expected = row.name.startsWith('pypy') ? `${row.name}-v${row.version}-` : `cpython-${row.version}`
    const escapedName = row.name.replaceAll('.', '\\.')
    const section = new RegExp(`^    ['\"]${escapedName}['\"]: \\{([\\s\\S]*?)(?=^    ['\"]|^\\})`, 'm').exec(source[SOURCES.hatch])
    if (!section || !section[1].includes(expected)) throw new Error(`Hatch pin mismatch: ${row.name}`)
  }
  const next = { ...old, generatedAt: now, node: selectNodeVersions(nodes, now), pkgManagers: {} }
  for (const name of ['npm', 'pnpm', 'yarn']) {
    next.pkgManagers[name] = selectPackageReleases(JSON.parse(source[SOURCES[name]]), name, now)
    if (!next.pkgManagers[name].length) throw new Error(`No stable ${name} releases`)
  }
  if (!next.node.some(row => row.version === `v${recommended.node.version}`)) throw new Error('Recommended Node absent from snapshot')
  if (write) {
    await writeFile(resolve(ROOT, 'runtimes/versions-fallback.json'), `${JSON.stringify(next, null, 2)}\n`)
    for (const name of ['node', 'npm', 'pnpm', 'yarn']) {
      const rows = name === 'node' ? next.node : next.pkgManagers[name]
      const path = name === 'node' ? 'node-snapshot.md' : `package-managers/${name}-snapshot.md`
      await writeFile(resolve(ROOT, 'docs/runtime-sources', path), `# ${name} 离线目录快照\n\n- 实际读取：${now}\n- 官方来源：[官方目录](${SOURCES[name]})\n- 数据位置：\`runtimes/versions-fallback.json#${name === 'node' ? 'node' : `pkgManagers.${name}`}\`\n- 目录条数：${rows.length}\n- 首条版本：${rows[0].version ?? rows[0].tag_name}\n- 本仓条目指纹（JSON.stringify、SHA-256）：\`${hash(rows)}\`\n- 本轮读取的官方正文 SHA-256：\`${createHash('sha256').update(source[SOURCES[name]]).digest('hex')}\`\n\n筛选规则：${name === 'node' ? 'Node 16 及以上，每个大版本最多三条正式发布；保留上游顺序。不表示所有大版本仍受支持。' : '读取官方仓库最近 100 个 releases，排除 draft、prerelease、非正式版本标签及未来发布日期，最多 30 条；Yarn 只接受 @yarnpkg/cli 正式标签。created_at 字段保持客户端结构，值取 published_at。目录不代表当前平台安装测试已通过。'}\n`)
    }
  }
  console.log(JSON.stringify({ write, generatedAt: now, node: next.node.length, packageManagers: Object.fromEntries(Object.entries(next.pkgManagers).map(([key, value]) => [key, value.length])), python: 'preserved: bundled Hatch 1.16.5 pin; recommended archive hashes verified against official manifests' }))
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main().catch(error => { console.error(error.message); process.exitCode = 1 })
