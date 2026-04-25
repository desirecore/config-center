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
  if (rel === 'compute/providers/_index.json') return 'providers-index'
  if (rel === 'compute/coding-plans/_index.json') return 'providers-index'
  if (rel.startsWith('compute/providers/') && rel.endsWith('.json')) return 'provider'
  if (rel.startsWith('compute/coding-plans/') && rel.endsWith('.json')) return 'provider'
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
