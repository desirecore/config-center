#!/usr/bin/env node
import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join, resolve, relative, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createHash } from 'node:crypto'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
export const OFFICIAL_HOSTS = {
  openai: ['developers.openai.com', 'platform.openai.com', 'learn.chatgpt.com', 'github.com'],
  anthropic: ['platform.claude.com', 'docs.claude.com', 'anthropic.com', 'www.anthropic.com'],
  'github-copilot': ['docs.github.com', 'github.com'],
  deepseek: ['api-docs.deepseek.com'],
  alibaba: ['help.aliyun.com', 'www.alibabacloud.com'],
  volcengine: ['docs.volcengine.com', 'www.volcengine.com'],
  moonshot: ['platform.kimi.com', 'platform.kimi.ai', 'platform.moonshot.cn', 'platform.moonshot.ai'],
  zhipu: ['docs.bigmodel.cn', 'open.bigmodel.cn', 'docs.z.ai'],
  baichuan: ['www.baichuan-ai.com', 'platform.baichuan-ai.com'],
  minimax: ['platform.minimax.cn', 'platform.minimaxi.com', 'platform.minimax.io'],
  xiaomi: ['mimo.mi.com', 'mimo.xiaomi.com', 'platform.xiaomimimo.com'],
  baidu: ['cloud.baidu.com', 'intl.cloud.baidu.com', 'ernie.baidu.com'],
  tencent: ['www.tencent.com', 'cloud.tencent.com', 'cloud.tencent.com.cn', 'intl.cloud.tencent.com'],
  xunfei: ['www.xfyun.cn', 'xinghuo.xfyun.cn'],
  siliconflow: ['www.siliconflow.cn', 'docs.siliconflow.cn', 'www.siliconflow.com', 'docs.siliconflow.com'],
  ollama: ['ollama.com', 'docs.ollama.com'],
  google: ['ai.google.dev', 'cloud.google.com'],
  mistral: ['docs.mistral.ai', 'mistral.ai'],
  xai: ['docs.x.ai', 'x.ai'],
  cohere: ['docs.cohere.com', 'cohere.com'],
  kling: ['kling.ai', 'app.klingai.com', 'ir.kuaishou.com'],
  openrouter: ['openrouter.ai'],
  perplexity: ['docs.perplexity.ai', 'www.perplexity.ai', 'research.perplexity.ai'],
  stability: ['stability.ai', 'platform.stability.ai'],
  stealth: ['openrouter.ai', 'docs.bigmodel.cn'],
  infini: ['docs.infini-ai.com', 'cloud.infini-ai.com'],
  moorethread: ['code.mthreads.com', 'www.mthreads.com', 'developer.mthreads.com'],
  kwai: ['www.streamlake.ai', 'streamlake.com', 'www.streamlake.com'],
}

export function sourceUrlError(supplier, value) {
  let u
  try { u = new URL(value) } catch { return '不是合法 URL' }
  if (u.protocol !== 'https:' || u.username || u.password) return '必须是无凭据的 HTTPS URL'
  if (!OFFICIAL_HOSTS[supplier]?.includes(u.hostname)) return `未登记为 ${supplier} 的官方域名`
  if (u.hostname === 'github.com' && supplier === 'openai' && !u.pathname.startsWith('/openai/')) return 'GitHub 来源必须属于 openai 官方组织'
  if (/\/(?:article|articles|ask|community)\//i.test(u.pathname)) return '社区/用户文章不能作为官网主证据'
  if ([...u.searchParams.keys()].some((k) => /^(?:api[_-]?key|token|password|secret|access_token)$/i.test(k))) return '来源 URL 不得包含凭据参数'
  return null
}
const stable = (value) => {
  if (Array.isArray(value)) return value.map(stable)
  if (value && typeof value === 'object') return Object.fromEntries(Object.keys(value).sort().map((key) => [key, stable(value[key])]))
  return value
}
export const modelFingerprint = (row) => createHash('sha256').update(JSON.stringify(stable(row))).digest('hex')
const get = (row, path) => path.split('.').reduce((value, key) => value?.[key], row)
const dateValid = (value) => /^\d{4}-\d{2}-\d{2}$/.test(value ?? '') && !Number.isNaN(Date.parse(value)) && new Date(value).toISOString().slice(0, 10) === value
const configSupplier = (config) => {
  const name = config.split('/').at(-1).replace(/\.json$/, '')
  const aliases = { 'openai-codex': 'openai', 'local-whisper': 'openai', 'anthropic-claude': 'anthropic', dashscope: 'alibaba', qwen: 'alibaba', wan: 'alibaba', happyhorse: 'alibaba', 'dashscope-coding': 'alibaba', 'dashscope-token-plan': 'alibaba', 'zhipu-embedding': 'zhipu', 'tencent-token': 'tencent', 'moorethread-coding': 'moorethread' }
  return aliases[name] ?? name.replace(/-coding$/, '')
}

export function parseSourcePage(text) {
  const match = text.match(/<!-- source-metadata:start -->\s*```json\s*([\s\S]*?)\s*```\s*<!-- source-metadata:end -->/)
  if (!match) throw new Error('缺少 source-metadata JSON 块')
  const metadata = JSON.parse(match[1])
  const records = []
  let config = null
  for (const line of text.split('\n')) {
    const marker = line.match(/^<!-- source-config: (compute\/[\w/-]+\.json) -->$/)
    if (marker) { config = marker[1]; continue }
    if (!config || !/^\| `/.test(line)) continue
    const cells = line.split('|').slice(1, -1).map((s) => s.trim())
    if (cells.length !== 7) throw new Error('来源表必须有 7 列')
    const id = cells[0].match(/^`([^`]+)`$/)?.[1]
    const fingerprint = cells[6].match(/^`([a-f0-9]{64})`$/)?.[1]
    const fieldSources = [...cells[3].matchAll(/`([^`]+)`→\[([\w-]+)\]\(#([\w-]+)\)/g)].map((m) => ({ field: m[1], source: m[2], anchor: m[3] }))
    const sources = [...cells[4].matchAll(/\[([\w-]+)\]\(#([\w-]+)\)/g)].map((m) => ({ source: m[1], anchor: m[2] }))
    records.push({ config, id, fingerprint, fieldSources, sources, status: cells[5], limits: cells[1], pricing: cells[2] })
  }
  return { metadata, records }
}

export function validateSources(root = ROOT) {
  const errors = [], inventory = new Map(), documented = new Set()
  for (const [folder, key, idKey] of [['providers', 'models', 'modelName'], ['coding-plans', 'models', 'modelName'], ['model-specs', 'specs', 'id']]) {
    const index = JSON.parse(readFileSync(join(root, 'compute', folder, '_index.json'), 'utf8'))
    for (const name of index.order) {
      const config = `compute/${folder}/${name}.json`
      const data = JSON.parse(readFileSync(join(root, config), 'utf8'))
      for (const row of data[key]) {
        const address = `${config}#${row[idKey]}`
        if (inventory.has(address)) errors.push(`${address}: 配置中存在重复 ID`)
        inventory.set(address, { row, data })
      }
    }
  }
  const dir = join(root, 'docs/model-sources/providers')
  let pages = 0, partial = 0, pending = 0, historical = 0
  if (!existsSync(dir)) errors.push('缺少 docs/model-sources/providers')
  for (const file of existsSync(dir) ? readdirSync(dir).filter((f) => f.endsWith('.md')) : []) {
    pages++
    let page
    const text = readFileSync(join(dir, file), 'utf8')
    try { page = parseSourcePage(text) } catch (e) { errors.push(`${file}: ${e.message}`); continue }
    const { metadata, records } = page
    if (metadata.formatVersion !== 1 || !OFFICIAL_HOSTS[metadata.supplier]) errors.push(`${file}: 未知格式版本或供应商`)
    if (!dateValid(metadata.checkedAt)) errors.push(`${file}: 无效核验日期`)
    if (!Array.isArray(metadata.sources) || metadata.sources.length === 0) errors.push(`${file}: 缺少官网来源元数据`)
    const sources = new Map()
    for (const src of metadata.sources ?? []) {
      if (sources.has(src.id)) errors.push(`${file}: 重复来源 ID ${src.id}`)
      sources.set(src.id, src)
      const invalid = sourceUrlError(metadata.supplier, src.url)
      if (invalid) errors.push(`${file}#${src.id}: ${invalid}`)
      if (src.resolvedUrl) {
        const redirectError = sourceUrlError(metadata.supplier, src.resolvedUrl)
        if (redirectError) errors.push(`${file}#${src.id}: 最终跳转地址 ${redirectError}`)
      }
      if (typeof src.scope !== 'string' || src.scope.trim().length < 3) errors.push(`${file}#${src.id}: 缺少地域/接入面范围`)
      if (src.contentSha256 != null && !/^[a-f0-9]{64}$/.test(src.contentSha256)) errors.push(`${file}#${src.id}: 无效官网内容摘要`)
      if (!['official-doc', 'official-api', 'official-repository', 'official-announcement'].includes(src.kind)) errors.push(`${file}#${src.id}: 不允许第三方来源类型`)
      if (!['fetched', 'shell', 'unreadable'].includes(src.retrieval) || !dateValid(src.checkedAt)) errors.push(`${file}#${src.id}: 缺少读取状态或日期`)
      if (!text.includes(`### ${src.id}\n`)) errors.push(`${file}#${src.id}: 缺少人读来源锚点`)
    }
    for (const rec of records) {
      const address = `${rec.config}#${rec.id}`
      if (documented.has(address)) errors.push(`${address}: 来源记录重复`)
      documented.add(address)
      if (configSupplier(rec.config) !== metadata.supplier) errors.push(`${address}: 来源页面供应商与配置归属不一致`)
      const current = inventory.get(address)
      if (!current) { errors.push(`${file}: 无对应配置 ${address}`); continue }
      if (rec.fingerprint !== modelFingerprint(current.row)) errors.push(`${address}: 来源记录过期，请复核并更新指纹`)
      if (!['partial', 'pending', 'historical'].includes(rec.status)) errors.push(`${address}: 无效状态；禁止将整条模型标为全部核实`)
      if (rec.status === 'partial') partial++
      if (rec.status === 'pending') pending++
      if (rec.status === 'historical') historical++
      if (rec.status === 'partial' && rec.fieldSources.length === 0) errors.push(`${address}: partial 必须声明已核字段`)
      if (rec.status === 'pending' && rec.fieldSources.length > 0) errors.push(`${address}: pending 不应包含已核字段`)
      if (rec.sources.length === 0) errors.push(`${address}: 缺少官网入口`)
      for (const ref of [...rec.sources, ...rec.fieldSources]) {
        if (!sources.has(ref.source) || ref.anchor !== ref.source) errors.push(`${address}: 无效来源引用 ${ref.source}`)
      }
      for (const proof of rec.fieldSources) {
        if (get(current.row, proof.field) === undefined) errors.push(`${address}: 已核字段不存在 ${proof.field}`)
        if (sources.get(proof.source)?.retrieval !== 'fetched') errors.push(`${address}: ${proof.field} 不能以页面壳/读取失败作为证据`)
      }
      const facts = current.row.spec ?? current.row
      const limits = `${facts.contextWindow ?? '未声明'} / ${facts.maxOutputTokens ?? '未声明'}`
      const pricing = current.row.spec ? '非计价主数据' : `${current.data.priceCurrency ?? '套餐'}：${current.row.inputPrice ?? '未声明'} / ${current.row.outputPrice ?? '未声明'}`
      if (rec.limits !== limits || rec.pricing !== pricing) errors.push(`${address}: 人读参数表与配置不一致`)
    }
  }
  for (const key of inventory.keys()) if (!documented.has(key)) errors.push(`${key}: 缺少 Markdown 来源记录`)
  return { errors, pages, models: inventory.size, partial, pending, historical }
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  if (process.argv.includes('--fingerprints')) {
    for (const folder of ['providers', 'coding-plans', 'model-specs']) {
      const dir = join(ROOT, 'compute', folder)
      for (const f of readdirSync(dir).filter((f) => f.endsWith('.json') && f !== '_index.json')) {
        const d = JSON.parse(readFileSync(join(dir, f), 'utf8'))
        for (const row of d.models ?? d.specs ?? []) console.log(`${relative(ROOT, join(dir, f))}#${row.modelName ?? row.id} ${modelFingerprint(row)}`)
      }
    }
  } else {
    const result = validateSources()
    for (const error of result.errors) console.error(`  fail ${error}`)
    console.log(`Sources: ${result.pages} Markdown pages, ${result.models} models; ${result.partial} partial, ${result.pending} pending, ${result.historical} historical; ${result.errors.length} failed`)
    console.log('partial 仅核实列出的字段；此检查验证来源登记与配置一致性，不等于官网实测或全部参数核实。')
    process.exitCode = result.errors.length ? 1 : 0
  }
}
