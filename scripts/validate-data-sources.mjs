import { readFileSync, readdirSync } from 'node:fs'
import { resolve, relative, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { isDeepStrictEqual } from 'node:util'

const ROOT = fileURLToPath(new URL('../', import.meta.url))
const OFFICIAL_HOSTS = {
  tavily: ['docs.tavily.com'], brave: ['api.search.brave.com', 'brave.com'],
  serper: ['serper.dev'], 'doubao-search-global': ['www.volcengine.com', 'docs.volcengine.com'],
  'configured-vision-openai': ['developers.openai.com', 'platform.openai.com'],
  'configured-vision-anthropic': ['platform.claude.com', 'docs.anthropic.com'],
}
function files(root, directory, extension) {
  const dir = join(root, directory)
  return readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const path = join(directory, entry.name)
    return entry.isDirectory() ? files(root, path, extension) : entry.name.endsWith(extension) ? [path] : []
  })
}
export function validateDataSources(root = ROOT) {
  const errors = [], records = new Map()
  const read = path => JSON.parse(readFileSync(join(root, path), 'utf8'))
  for (const page of files(root, 'docs/data-sources', '.md')) {
    const text = readFileSync(join(root, page), 'utf8')
    if (!text.includes('<!-- data-source:start -->')) continue
    try {
      const match = text.match(/<!-- data-source:start -->\s*```json\s*([\s\S]*?)```\s*<!-- data-source:end -->/)
      if (!match) throw new Error('invalid metadata block')
      const record = JSON.parse(match[1])
      const target = resolve(root, record.config)
      if (relative(root, target).startsWith('..')) throw new Error('config escapes repository')
      if (records.has(record.config)) throw new Error('duplicate config record')
      if (!/^\d{4}-\d{2}-\d{2}$/.test(record.checkedAt)) throw new Error('missing checkedAt')
      const config = read(record.config)
      records.set(record.config, record)
      if (record.kind === 'routing-policy') {
        if (record.status !== 'policy' || record.config !== 'compute/service-map.json') throw new Error('invalid routing policy')
        if (!isDeepStrictEqual(config, record.claims)) errors.push(`${page}: routing policy drift: update the documented default selection`)
        const providers = files(root, 'compute/providers', '.json').filter(p => !p.endsWith('/_index.json')).map(read)
        const external = new Set((record.externalProviders ?? []).map(item => {
          if (!item.id || !item.reason?.trim()) throw new Error('external provider needs reason')
          return item.id
        }))
        for (const [service, route] of Object.entries(config)) {
          const provider = providers.find(item => item.id === route.providerId)
          if (external.has(route.providerId)) continue
          if (!provider || !provider.models?.some(model => model.modelName === route.modelName)) throw new Error(`unresolved route ${service}: ${route.providerId}/${route.modelName}`)
        }
      } else if (record.kind === 'policy' || record.kind === 'api-contract') {
        if (!record.claims || !Object.keys(record.claims).length) throw new Error('missing claims')
        for (const [key, value] of Object.entries(record.claims)) {
          if (!isDeepStrictEqual(config[key], value)) throw new Error(`contract drift: ${key}`)
        }
        if (record.kind === 'policy') {
          if (record.status !== 'policy' || record.config !== 'compute/pricing.json') throw new Error('invalid pricing policy')
          if (!isDeepStrictEqual(config, record.claims)) throw new Error('unrecorded pricing field')
        } else {
          if (!['partial', 'pending'].includes(record.status)) throw new Error('invalid verification status')
          if (!Array.isArray(record.verifiedFields) || record.verifiedFields.some(key => typeof key !== 'string' || key.split('.').reduce((value, segment) => value?.[segment], record.claims) === undefined)) throw new Error('invalid verified fields')
          if (record.status === 'pending' && record.verifiedFields.length) throw new Error('pending cannot assert verified fields')
          if (record.status === 'partial' && !record.verifiedFields.length) throw new Error('partial needs verified fields')
          if (!record.sources?.length) throw new Error('missing official source')
          for (const source of record.sources) {
            const url = new URL(source.url)
            if (url.protocol !== 'https:' || url.username || url.password || url.search || !OFFICIAL_HOSTS[config.id]?.includes(url.hostname)) throw new Error('unapproved source URL')
            if (!['fetched', 'shell', 'failed'].includes(source.retrieval)) throw new Error('invalid retrieval')
            if (!/^\d{4}-\d{2}-\d{2}$/.test(source.checkedAt ?? '') || Number.isNaN(Date.parse(source.checkedAt)) || new Date(source.checkedAt).toISOString().slice(0, 10) !== source.checkedAt) throw new Error('invalid source checkedAt')
            if (source.resolvedUrl) {
              const resolved = new URL(source.resolvedUrl)
              if (resolved.protocol !== 'https:' || resolved.username || resolved.password || resolved.searchParams.has('token') || !OFFICIAL_HOSTS[config.id]?.includes(resolved.hostname)) throw new Error('unapproved resolved source URL')
            }
            if (source.contentSha256 != null && !/^[a-f0-9]{64}$/.test(source.contentSha256)) throw new Error('invalid source digest')
            if (source.retrieval !== 'failed' && (!source.resolvedUrl || !source.contentSha256)) throw new Error('read source needs resolved URL and digest')
          }
          if (record.verifiedFields.length && !record.sources.some(source => source.retrieval === 'fetched')) throw new Error('verified field without fetched source')
          for (const key of ['endpoint', 'method', 'auth', 'request', 'response']) if (!(key in record.claims)) throw new Error(`missing contract field ${key}`)
        }
      } else throw new Error('unknown record kind')
    } catch (error) { errors.push(`${page}: ${error.message}`) }
  }
  const required = ['compute/pricing.json', 'compute/service-map.json', ...files(root, 'api-providers', '.json').filter(path => !path.endsWith('/_index.json'))]
  for (const path of required) if (!records.has(path)) errors.push(`missing source record: ${path}`)
  for (const path of records.keys()) if (!required.includes(path)) errors.push(`out of scope source record: ${path}`)
  return { errors, records: records.size }
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const result = validateDataSources()
  for (const error of result.errors) console.error(error)
  console.log(`Data sources: ${result.records} policy/API records; ${result.errors.length} failed (not account-call verification)`)
  process.exitCode = result.errors.length ? 1 : 0
}
