import { readFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { fileURLToPath } from 'node:url'
import { resolve, join } from 'node:path'
import { SOURCES } from './update-runtime-catalog.mjs'

const ROOT = fileURLToPath(new URL('../', import.meta.url))
const hash = value => createHash('sha256').update(JSON.stringify(value)).digest('hex')
function tableRows(text, columns) {
  return text.split('\n').filter(line => line.startsWith('|')).map(line => line.split('|').slice(1, -1).map(cell => cell.trim().replace(/^`|`$/g, ''))).filter(cells => cells.length === columns && !cells.every(cell => /^[- :]+$/.test(cell)))
}
export function validateRuntimeSources(root = ROOT, now = new Date().toISOString()) {
  const errors = []
  const read = path => readFileSync(join(root, path), 'utf8')
  try {
    const fallback = JSON.parse(read('runtimes/versions-fallback.json'))
    const recommended = JSON.parse(read('runtimes/recommended.json'))
    if (!Number.isFinite(Date.parse(fallback.generatedAt)) || Date.parse(fallback.generatedAt) > Date.parse(now)) errors.push('fallback: invalid/future generatedAt')
    for (const name of ['node', 'npm', 'pnpm', 'yarn']) {
      const rows = name === 'node' ? fallback.node : fallback.pkgManagers[name]
      const path = name === 'node' ? 'node-snapshot.md' : `package-managers/${name}-snapshot.md`
      const page = read(`docs/runtime-sources/${path}`)
      if (!rows.length) errors.push(`${name}: empty snapshot`)
      if (!page.includes(`- 官方来源：[官方目录](${SOURCES[name]})\n`)) errors.push(`${name}: official source URL drift`)
      const seen = new Set()
      for (const row of rows) {
        const version = row.version ?? row.tag_name
        const date = row.date ?? row.created_at
        if (!/^v\d+\.\d+\.\d+$/.test(version) || seen.has(version)) errors.push(`${name}: invalid/duplicate stable version`)
        seen.add(version)
        if (!Number.isFinite(Date.parse(date)) || Date.parse(date) > Date.parse(fallback.generatedAt)) errors.push(`${name}: invalid/future row publication date`)
      }
      const expectedVersion = rows[0]?.version ?? rows[0]?.tag_name
      if (!page.includes(`- 实际读取：${fallback.generatedAt}\n`)) errors.push(`${name}: snapshot date drift`)
      if (!page.includes(`- 目录条数：${rows.length}\n`)) errors.push(`${name}: snapshot count drift`)
      if (!page.includes(`- 首条版本：${expectedVersion}\n`)) errors.push(`${name}: first version drift`)
      if (!page.includes(`- 本仓条目指纹（JSON.stringify、SHA-256）：\`${hash(rows)}\`\n`)) errors.push(`${name}: snapshot fingerprint drift`)
      if (!/- 本轮读取的官方正文 SHA-256：`[a-f0-9]{64}`\n/.test(page)) errors.push(`${name}: missing official body digest record`)
    }
    const pythonRows = tableRows(read('docs/runtime-sources/python-fallback.md'), 2).filter(cells => cells[0] !== '名称')
    if (JSON.stringify(pythonRows) !== JSON.stringify(fallback.python.map(row => [row.name, row.version]))) errors.push('python: Hatch pin table drift')
    for (const name of ['node', 'python']) {
      const page = read(`docs/runtime-sources/${name}-recommended.md`)
      const expected = recommended[name]
      const sourceUrl = name === 'node' ? `https://nodejs.org/dist/v${expected.version}/SHASUMS256.txt` : `https://api.github.com/repos/astral-sh/python-build-standalone/releases/tags/${expected.distTag}`
      if (!page.includes(`- 官方来源：[官方摘要清单](${sourceUrl})。\n`)) errors.push(`${name}: recommended official source URL drift`)
      if (!page.includes(`- 数据：\`runtimes/recommended.json#${name}\`，版本 \`${expected.version}\`。\n`)) errors.push(`${name}: recommended version drift`)
      if (name === 'node' && !page.includes(`LTS 名 ${expected.ltsCodename}；`)) errors.push('node: recommended LTS drift')
      if (name === 'python' && !page.includes(`tag \`${expected.distTag}\``)) errors.push('python: recommended distTag drift')
      const rows = tableRows(page, 3).filter(cells => cells[0] !== '平台')
      const values = Object.entries(expected.archives).map(([platform, path]) => [platform, path, expected.sha256[platform]])
      if (JSON.stringify(rows) !== JSON.stringify(values)) errors.push(`${name}: recommended archive/hash table drift`)
    }
  } catch (error) { errors.push(`runtime source read: ${error.message}`) }
  return { errors }
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const result = validateRuntimeSources()
  for (const error of result.errors) console.error(error)
  console.log(`Runtime sources: snapshot and recommended tables; ${result.errors.length} failed (offline consistency, not official re-fetch or installation verification)`)
  process.exitCode = result.errors.length ? 1 : 0
}
