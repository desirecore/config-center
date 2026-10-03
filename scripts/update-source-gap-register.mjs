import { readFileSync, readdirSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { join, relative, dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { parseSourcePage } from './validate-sources.mjs'
const ROOT = fileURLToPath(new URL('../', import.meta.url))
const titles = { missing: '未登记官方入口', blocked: '未取得可读官网证据', pending: '入口有读取记录，但本条模型无字段证明', idOnly: '仅确认 ID，参数来源未登记', partial: '已有部分参数证明，仍需区分未证明字段', historical: '历史身份/参数不证明当前可用性' }
export function classifyGap(record, sources) {
  if (record.status === 'historical') return 'historical'
  if (!record.sources.length) return 'missing'
  if (!record.sources.some(ref => sources.get(ref.source)?.retrieval === 'fetched')) return 'blocked'
  if (!record.fieldSources.length) return 'pending'
  return record.fieldSources.every(ref => ['id', 'modelName'].includes(ref.field)) ? 'idOnly' : 'partial'
}
const facts = /^(?:spec\.)?(?:id|modelName|contextWindow|maxOutputTokens|defaultTemperature|defaultTopP|inputPrice|outputPrice|supportsReasoning|extra\.(?:reasoning\.(?:supportedEfforts|defaultEffort)|thinkingOnly|adaptiveThinking|samplingParametersDeprecated|forcedToolChoiceUnsupported|dimensions|defaultDimension|.*(?:Price|Pricing|price|pricing).*))$/
export function missingFactFields(row, proofs) {
  const paths = []
  const walk = (value, prefix = '') => {
    for (const [key, item] of Object.entries(value)) {
      const path = prefix ? `${prefix}.${key}` : key
      if (item && typeof item === 'object' && !Array.isArray(item)) walk(item, path)
      else if (facts.test(path) && !/Notes?$/.test(path)) paths.push(path)
    }
  }
  walk(row)
  return paths.filter(path => !proofs.some(proof => path === proof.field || path.startsWith(`${proof.field}.`))).sort()
}
function emptyCounts() { return Object.fromEntries(Object.keys(titles).map(key => [key, 0])) }
export function renderRegister(root = ROOT) {
  const pages = new Map(), total = emptyCounts(), supplierStats = []
  const link = (from, to) => relative(dirname(from), to).split('\\').join('/')
  const rowLink = (file, target, title) => `[${title}](${link(file, target)})`
  for (const supplier of readdirSync(join(root, 'docs/model-sources/providers')).sort()) {
    const dir = `docs/model-sources/providers/${supplier}`
    const sourceList = parseSourcePage(readFileSync(join(root, dir, 'SOURCES.md'), 'utf8')).metadata.sources
    const sources = new Map(sourceList.map(source => [source.id, source])), records = []
    for (const name of readdirSync(join(root, dir, 'models')).sort()) {
      const modelDoc = `${dir}/models/${name}`, text = readFileSync(join(root, modelDoc), 'utf8')
      if (!text.includes('<!-- source-metadata:start -->')) continue
      for (const record of parseSourcePage(text).records) {
        const config = JSON.parse(readFileSync(join(root, record.config), 'utf8'))
        const row = (config.models ?? config.specs).find(item => (item.modelName ?? item.id) === record.id)
        records.push({ ...record, modelDoc, gap: classifyGap(record, sources), missingFields: missingFactFields(row, record.fieldSources) })
      }
    }
    const counts = emptyCounts()
    for (const record of records) { counts[record.gap]++; total[record.gap]++ }
    const file = `docs/source-gaps/providers/${supplier}.md`
    let text = `# ${supplier}：官网与来源缺口单列\n\n[总目录](../README.md) · ${rowLink(file, `${dir}/SOURCES.md`, '官方入口与读取状态')} · ${rowLink(file, `${dir}/AUDIT.md`, '核查原因和后续计划')}\n\n本表从现有字段证明生成，不重新访问官网、不刷新核验日期、不改变模型数据。每个接入面单独计数。\n\n`
    for (const [category, title] of Object.entries(titles)) {
      const selected = records.filter(record => record.gap === category)
      text += `## ${title}（${selected.length} 条）\n\n`
      if (!selected.length) { text += '无该类记录。\n\n'; continue }
      text += '| 模型 | 接入面 | 未登记证明的关键字段 | 官网入口/读取结果 |\n| --- | --- | --- | --- |\n'
      for (const record of selected) {
        const evidence = record.sources.map(ref => {
          const source = sources.get(ref.source)
          return `${rowLink(file, `${dir}/SOURCES.md#${ref.source}`, ref.source)}：${source?.retrieval ?? '未登记'}`
        }).join('；') || '未登记'
        const missing = record.missingFields.map(field => `\`${field}\``).join('、') || '已登记关键字段都有证明；其他合同限制仍按原记录复核'
        text += `| ${rowLink(file, record.modelDoc, `\`${record.id}\``)} | ${rowLink(file, record.config, `\`${record.config}\``)} | ${missing} | ${evidence} |\n`
      }
      text += '\n'
    }
    text += '说明：缺少字段引用表示本仓尚未登记官方证明，不等于已证明数据错误。关键字段列表包括身份、数值限制、采样、价格与部分推理合同；不是全部 API 参数清单。routing、优先级、产品能力标签和预设启用状态不按供应商事实判错。保守兼容预算、未公开价格和历史参数的详细边界见原单模型文件。\n'
    pages.set(file, text); supplierStats.push({ supplier, counts })
  }
  const sum = Object.values(total).reduce((a, b) => a + b, 0)
  let index = '# 官网缺失与来源不明：独立清单\n\n本清单只汇总当前仓内证据状态，不声称本轮重新搜索官网。数据主文件和来源状态不变；同一模型在 API、订阅、套餐与共享规格分别计数。\n\n'
  index += '供应商官网入口均已登记；“没有找到供应商官网”目前没有已登记案例。能明确单列的是官网入口读取失败/页面壳、未取得型号专属规格或身份揭示证据，以及缺少字段级证明。不能把这些情况混为“没有官网”。\n\n'
  for (const [key, title] of Object.entries(titles)) index += `- ${title}：**${total[key]} 条**。\n`
  index += `\n总计 ${sum} 条：前四类需要补证；partial 类逐条列出已有数据中尚未登记证明的关键字段，不能全部当作数据已核；historical 另列。\n\n`
  index += '| 供应商清单 | 未登记入口 | 入口不可读 | 无字段证明 | 仅 ID | 参数部分已核 | 历史 |\n| --- | --- | --- | --- | --- | --- | --- |\n'
  for (const { supplier, counts } of supplierStats) index += `| [${supplier}](providers/${supplier}.md) | ${Object.keys(titles).map(key => counts[key]).join(' | ')} |\n`
  index += '\n另外单列：[型号/身份专属证据缺口](identities.md)、[非模型 API 证据不足](api-contracts.md)、[本仓策略历史依据缺失](policy-origins.md)。供应商记录详见上述细分文件，不在总目录堆全部模型。\n\n更新来源登记后运行 `npm run sources:gaps` 重新生成本目录及供应商清单；`npm run sources:gaps:check` 检查是否过期。生成器不会增加已核字段、改来源状态或写入主数据。\n'
  pages.set('docs/source-gaps/README.md', index)
  return { pages, counts: total }
}
export function syncRegister(root = ROOT, check = false) {
  const { pages, counts } = renderRegister(root), errors = []
  for (const [file, text] of pages) {
    const target = join(root, file)
    if (check) { if (!existsSync(target) || readFileSync(target, 'utf8') !== text) errors.push(`${file}: 来源缺口清单过期`) }
    else { mkdirSync(dirname(target), { recursive: true }); writeFileSync(target, text) }
  }
  return { errors, counts }
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2)
  if (args.some(arg => arg !== '--check')) throw new Error('Usage: node scripts/update-source-gap-register.mjs [--check]')
  const result = syncRegister(ROOT, args.includes('--check'))
  console.log(JSON.stringify(result)); process.exitCode = result.errors.length ? 1 : 0
}
