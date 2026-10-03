import { test } from 'node:test'
import assert from 'node:assert/strict'
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { modelFingerprint, sourceUrlError, validateSources } from '../scripts/validate-sources.mjs'

function fixture(callback) {
  const root = mkdtempSync(join(tmpdir(), 'model-sources-'))
  const model = { modelName: 'gpt-test', contextWindow: 1000 }
  const provider = { priceCurrency: 'USD', models: [model] }
  for (const folder of ['providers', 'coding-plans', 'model-specs']) {
    mkdirSync(join(root, 'compute', folder), { recursive: true })
    writeFileSync(join(root, 'compute', folder, '_index.json'), JSON.stringify({ order: folder === 'providers' ? ['openai'] : [] }))
  }
  mkdirSync(join(root, 'docs/model-sources/providers'), { recursive: true })
  const dataPath = join(root, 'compute/providers/openai.json')
  const docPath = join(root, 'docs/model-sources/providers/openai.md')
  writeFileSync(dataPath, JSON.stringify(provider))
  const source = { id: 'official', url: 'https://developers.openai.com/api/docs/models', kind: 'official-doc', scope: 'OpenAI 测试接入', retrieval: 'fetched', checkedAt: '2026-10-03' }
  const metadata = { formatVersion: 1, supplier: 'openai', checkedAt: '2026-10-03', sources: [source] }
  const page = (status = 'partial', src = metadata) => `# OpenAI\n\n### official\n\n<!-- source-config: compute/providers/openai.json -->\n\n| \`gpt-test\` | 1000 / 未声明 | USD：未声明 / 未声明 | \`contextWindow\`→[official](#official) | [official](#official) | ${status} | \`${modelFingerprint(model)}\` |\n\n<!-- source-metadata:start -->\n\`\`\`json\n${JSON.stringify(src)}\n\`\`\`\n<!-- source-metadata:end -->\n`
  writeFileSync(docPath, page())
  try { callback({ root, model, provider, dataPath, docPath, page, metadata }) }
  finally { rmSync(root, { recursive: true, force: true }) }
}

test('配置已变而来源记录未复核时必须失败', () => fixture(({ root, provider, dataPath }) => {
  assert.equal(validateSources(root).errors.length, 0)
  provider.models[0].contextWindow = 2000
  writeFileSync(dataPath, JSON.stringify(provider))
  assert.ok(validateSources(root).errors.some((message) => message.includes('来源记录过期')))
}))

test('来源覆盖遗漏及重复配置 ID 都会失败', () => fixture(({ root, provider, dataPath }) => {
  provider.models.push({ modelName: 'undocumented' })
  writeFileSync(dataPath, JSON.stringify(provider))
  assert.ok(validateSources(root).errors.some((message) => message.includes('undocumented') && message.includes('缺少 Markdown')))
  provider.models.push({ ...provider.models[0] })
  writeFileSync(dataPath, JSON.stringify(provider))
  assert.ok(validateSources(root).errors.some((message) => message.includes('配置中存在重复 ID')))
}))

test('页面壳不能支持已核字段，整条全部核实标记被拒绝', () => fixture(({ root, metadata, page, docPath }) => {
  metadata.sources[0].retrieval = 'shell'
  writeFileSync(docPath, page('partial', metadata))
  assert.ok(validateSources(root).errors.some((message) => message.includes('不能以页面壳')))
  metadata.sources[0].retrieval = 'fetched'
  writeFileSync(docPath, page('verified', metadata))
  assert.ok(validateSources(root).errors.some((message) => message.includes('禁止将整条模型标为全部核实')))
}))

test('拒绝第三方、社区、伪官方仓库和带凭据的来源 URL', () => {
  assert.equal(sourceUrlError('openai', 'https://developers.openai.com/api/docs/models'), null)
  assert.ok(sourceUrlError('openai', 'https://example.com/openai/models'))
  assert.ok(sourceUrlError('openai', 'https://github.com/unrelated/models'))
  assert.ok(sourceUrlError('volcengine', 'https://www.volcengine.com/article/123'))
  assert.ok(sourceUrlError('openai', 'https://developers.openai.com/docs?api_key=secret'))
})
