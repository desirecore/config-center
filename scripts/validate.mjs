#!/usr/bin/env node
/**
 * 校验 config-center 所有数据文件是否符合 frozen schema 契约。
 *
 * 用法：
 *   node scripts/validate.mjs            # 校验整个仓库
 *   node scripts/validate.mjs --file <p> # 校验单个文件
 *
 * 退出码：0 = 全部通过，1 = 至少一个文件校验失败。
 *
 * 设计：
 * - frozen schema 镜像 desirecore d185299（fix #471 之前）的严格 schema
 * - 任何破坏老版本兼容的数据（如 defaultTemperature: null）会被拒绝
 * - CI on pull_request 自动跑此脚本，不通过则禁止合并
 */

import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, dirname, basename, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { Ajv } from 'ajv'
import addFormats from 'ajv-formats'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')

/** 加载 schemas/ 下所有 JSON Schema。每次调用使用独立的 Ajv 实例避免 $id 冲突。 */
export function loadSchemas() {
  const ajv = new Ajv({ allErrors: true, strict: false })
  addFormats(ajv)
  const schemasDir = join(ROOT, 'schemas')
  const map = {}
  for (const file of readdirSync(schemasDir)) {
    if (!file.endsWith('.schema.json')) continue
    const schema = JSON.parse(readFileSync(join(schemasDir, file), 'utf8'))
    map[basename(file, '.schema.json')] = ajv.compile(schema)
  }
  return map
}

/**
 * 决定单个数据文件应使用哪个 schema。
 * 返回 schema key 字符串，或 null 表示无需校验。
 */
function pickSchemaKey(absPath) {
  const rel = relative(ROOT, absPath).replaceAll('\\', '/')
  if (rel === 'manifest.json') return 'manifest'
  if (rel === 'compute/pricing.json') return 'pricing'
  if (rel === 'compute/service-map.json') return 'service-map'
  if (rel === 'compute/model-specs/_index.json') return 'model-specs-index'
  if (rel === 'compute/providers/_index.json') return 'providers-index'
  if (rel === 'runtimes/recommended.json') return 'runtime-recommended'
  if (rel === 'runtimes/versions-fallback.json') return 'runtime-versions-fallback'
  if (rel === 'compute/coding-plans/_index.json') return 'providers-index'
  if (rel.startsWith('compute/providers/') && rel.endsWith('.json')) return 'provider'
  if (rel.startsWith('compute/coding-plans/') && rel.endsWith('.json')) return 'provider'
  if (rel.startsWith('compute/model-specs/') && rel.endsWith('.json')) return 'model-spec'
  // api-providers/<capability>/*.json：声明式外部 API 供应商（_index.json 复用 providers-index）
  if (rel.startsWith('api-providers/') && rel.endsWith('/_index.json')) return 'providers-index'
  if (rel.startsWith('api-providers/') && rel.endsWith('.json')) return 'api-provider'
  return null
}

const SKIP_DIRS = new Set(['node_modules', 'schemas', '__tests__', 'scripts'])

function* walkJsonFiles(dir) {
  for (const entry of readdirSync(dir)) {
    if (entry.startsWith('.') || SKIP_DIRS.has(entry)) continue
    const full = join(dir, entry)
    const st = statSync(full)
    if (st.isDirectory()) {
      yield* walkJsonFiles(full)
    } else if (entry.endsWith('.json')) {
      yield full
    }
  }
}

function formatErrors(errors) {
  return errors
    .map((e) => `    ${e.instancePath || '/'}: ${e.message}${
      e.params && Object.keys(e.params).length ? ` (${JSON.stringify(e.params)})` : ''
    }`)
    .join('\n')
}

/** 校验单个文件，返回 { ok, schemaKey, errors? } */
export function validateFile(absPath, validators = loadSchemas()) {
  const schemaKey = pickSchemaKey(absPath)
  if (!schemaKey) return { ok: true, schemaKey: null, skipped: true }

  const validator = validators[schemaKey]
  if (!validator) {
    return { ok: false, schemaKey, errors: [{ message: `schema '${schemaKey}' not found` }] }
  }

  let data
  try {
    data = JSON.parse(readFileSync(absPath, 'utf8'))
  } catch (err) {
    return { ok: false, schemaKey, errors: [{ message: `JSON parse error: ${err.message}` }] }
  }

  const valid = validator(data)
  if (valid) return { ok: true, schemaKey }
  return { ok: false, schemaKey, errors: validator.errors }
}

/**
 * 已知会静默失效的 extra 键名。
 *
 * `extra` 是开放对象：写错键名既不会被 schema 拒绝，也没有任何运行时告警——数据看着
 * 在那儿，客户端却永远读不到。desirecore#2307 就是这么来的：model-spec 的
 * extra.thinkingOnly 写下后零消费，provider 侧另有 10 处扁平 extra.reasoningEffort
 * 同样从未生效，直到用户撞上一个上游 400 才暴露。
 *
 * 刻意只警告、不失败：存量条目的正确取值必须逐个核实各自接入面实际接受哪些 effort，
 * 一次批量改写的风险远大于收益（声明过窄会削掉模型能力，漏写 none 会让原本能关思考
 * 的模型失去该选项）。
 */
const SUSPICIOUS_EXTRA_KEYS = {
  provider: {
    reasoningEffort: '客户端只读嵌套的 extra.reasoning.supportedEfforts，扁平写法永不生效',
    defaultReasoningEffort: '同上，应并入 extra.reasoning.defaultEffort',
  },
  spec: {
    reasoningEffort: 'reasoning effort 是接入面能力，只能声明在 provider model 的 extra.reasoning 中',
  },
}

/** 巡检静默失效键名，返回告警列表（不影响退出码）。 */
function lintSuspiciousExtraKeys(targets) {
  const warnings = []
  for (const file of targets) {
    const rel = relative(ROOT, file)
    let data
    try {
      data = JSON.parse(readFileSync(file, 'utf8'))
    } catch {
      continue // 解析失败由 schema 校验负责报错
    }
    if (Array.isArray(data.models)) {
      for (const model of data.models) {
        for (const [key, hint] of Object.entries(SUSPICIOUS_EXTRA_KEYS.provider)) {
          if (model?.extra && Object.hasOwn(model.extra, key)) {
            warnings.push(`${rel} → models[${model.modelName}].extra.${key}：${hint}`)
          }
        }
      }
    }
    if (Array.isArray(data.specs)) {
      for (const entry of data.specs) {
        const extra = entry?.spec?.extra
        for (const [key, hint] of Object.entries(SUSPICIOUS_EXTRA_KEYS.spec)) {
          if (extra && Object.hasOwn(extra, key)) {
            warnings.push(`${rel} → specs[${entry.id}].spec.extra.${key}：${hint}`)
          }
        }
      }
    }
  }
  return warnings
}

function main() {
  const args = process.argv.slice(2)
  const fileArgIdx = args.indexOf('--file')
  const targets = []

  if (fileArgIdx >= 0) {
    const file = args[fileArgIdx + 1]
    if (!file) {
      console.error('--file requires a path argument')
      process.exit(2)
    }
    targets.push(resolve(file))
  } else {
    targets.push(...walkJsonFiles(ROOT))
  }

  const validators = loadSchemas()
  let failures = 0
  let validated = 0
  let skipped = 0

  for (const file of targets) {
    const rel = relative(ROOT, file)
    const result = validateFile(file, validators)
    if (result.skipped) {
      skipped++
      continue
    }
    if (result.ok) {
      validated++
      console.log(`  ok  [${result.schemaKey}] ${rel}`)
    } else {
      failures++
      console.error(`  fail [${result.schemaKey}] ${rel}`)
      console.error(formatErrors(result.errors))
    }
  }

  const warnings = lintSuspiciousExtraKeys(targets)
  if (warnings.length > 0) {
    console.log()
    console.log(`静默失效键名告警（${warnings.length} 处，不影响校验结果）：`)
    for (const warning of warnings) console.log(`  warn ${warning}`)
    console.log('  这些键写在 extra 里不会报错，但客户端从不读取；修正前请逐个核实该接入面实际接受的 effort。')
  }

  console.log()
  console.log(`Summary: ${validated} validated, ${skipped} skipped, ${failures} failed`)

  if (failures > 0) {
    console.error('\n校验失败！请检查上方错误。')
    console.error('常见问题：')
    console.error('  - defaultTemperature/defaultTopP 必须是 number，禁止写 null（reasoning 模型应完全省略字段）')
    console.error('  - additionalProperties 严格模式：新增字段需先在 desirecore 主仓升级 schema 再推送数据')
    process.exit(1)
  }
}

const isMain = process.argv[1] === fileURLToPath(import.meta.url)
if (isMain) {
  main()
}
