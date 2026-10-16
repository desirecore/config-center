import { test } from 'node:test'
import assert from 'node:assert/strict'
import { execFileSync, spawnSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { lstatSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { builtinModules } from 'node:module'
import { devNull, tmpdir } from 'node:os'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const repository = fileURLToPath(new URL('../', import.meta.url))
const toolDirectory = join(repository, '.github/runtime-publication')
const tool = join(toolDirectory, 'publisher.cjs')
const digest = value => createHash('sha256').update(value).digest('hex')

test('standalone publisher has pinned bytes, bounded provenance and Node-only externals', () => {
  const metadata = JSON.parse(readFileSync(join(toolDirectory, 'publisher.metadata.json'), 'utf8'))
  assert.equal(metadata.formatVersion, 1)
  assert.equal(metadata.profile, 'config-center-runtime-publisher-node-cjs-v1')
  assert.match(metadata.sourceCommit, /^[a-f0-9]{40}$/)
  assert.equal(digest(readFileSync(tool)), metadata.sha256)
  assert.ok(metadata.inputs.length > 0 && metadata.inputs.length <= 2048)
  assert.equal(new Set(metadata.inputs.map(input => input.path)).size, metadata.inputs.length)
  for (const input of metadata.inputs) {
    assert.match(input.sha256, /^[a-f0-9]{64}$/)
    assert.ok(input.path.length <= 512 && !/[\\:\x00-\x1f]/.test(input.path))
    assert.ok(input.path.split('/').every(part => part && part !== '.' && part !== '..'))
    assert.match(input.path, /^(?:node_modules\/|packages\/(?:schemas|shared)\/src\/|scripts\/sync\/)/)
  }
  const builtin = new Set(builtinModules.map(name => name.replace(/^node:/, '')))
  assert.ok(metadata.externalImports.length > 0)
  for (const name of metadata.externalImports) {
    assert.ok(name.startsWith('node:') && builtin.has(name.slice(5)))
  }
  assert.ok(readFileSync(join(toolDirectory, 'LICENSE.DesireCore')).length > 0)
  assert.ok(readFileSync(join(toolDirectory, 'THIRD_PARTY_NOTICES.txt')).length > 0)
})

test('standalone publication ignores docs/tests but requires a new version for changed runtime bytes', { timeout: 120_000 }, async t => {
  // 私有无凭据 fixture，不联网、不执行作者脚本、不触碰工作区或远端 runtime。
  const scratch = mkdtempSync(join(tmpdir(), 'config-center-publication-test-'))
  t.after(() => rmSync(scratch, { recursive: true, force: true }))
  const home = join(scratch, 'home'), hooks = join(scratch, 'hooks'), template = join(scratch, 'template')
  for (const path of [home, hooks, template]) mkdirSync(path)
  const clean = Object.fromEntries(['PATH', 'Path', 'SystemRoot', 'windir', 'TEMP', 'TMP', 'TMPDIR']
    .flatMap(key => process.env[key] === undefined ? [] : [[key, process.env[key]]]))
  const environment = { ...clean, HOME: home, USERPROFILE: home, XDG_CONFIG_HOME: home,
    GIT_CONFIG_GLOBAL: devNull, GIT_CONFIG_SYSTEM: devNull, GIT_CONFIG_NOSYSTEM: '1',
    GIT_TEMPLATE_DIR: template, GIT_TERMINAL_PROMPT: '0', GIT_ALLOW_PROTOCOL: 'file',
    GIT_OPTIONAL_LOCKS: '0', GIT_NO_REPLACE_OBJECTS: '1', GIT_NO_LAZY_FETCH: '1' }
  const git = args => execFileSync('git', ['-c', `core.hooksPath=${hooks}`, '-c', 'core.fsmonitor=false',
    '-c', 'gc.auto=0', '-c', 'maintenance.auto=false', ...args], {
    cwd: scratch, env: environment, encoding: 'utf8', timeout: 30_000, maxBuffer: 8 * 1024 * 1024, stdio: 'pipe',
  }).trim()
  const source = join(scratch, 'source'), output = join(scratch, 'runtime.git')
  const initialHead = git(['-C', repository, 'rev-parse', 'HEAD'])
  git(['clone', '--no-local', '--no-checkout', '--no-hardlinks', '--depth=1', pathToFileURL(repository).href, source])
  git(['-C', source, 'checkout', '--detach', initialHead])
  const publish = () => spawnSync(process.execPath, [tool, '--source', source,
    '--source-commit', git(['-C', source, 'rev-parse', 'HEAD']), '--output', output, '--apply',
    '--author-name', 'Runtime Fixture', '--author-email', 'fixture@example.invalid'], {
    cwd: scratch, env: clean, encoding: 'utf8', timeout: 30_000, maxBuffer: 2 * 1024 * 1024,
  })
  const success = () => {
    const result = publish()
    assert.equal(result.error, undefined)
    assert.equal(result.status, 0, result.stderr)
    const receipt = JSON.parse(result.stdout.split('\n')[0])
    assert.equal(receipt.validationBoundary, 'runtime-payload-and-client-contract-only')
    assert.equal(receipt.dryRun, false)
    return receipt
  }
  const commit = (path, text) => {
    const target = resolve(source, path)
    assert.ok(target.startsWith(source + '/'))
    mkdirSync(dirname(target), { recursive: true })
    writeFileSync(target, text)
    git(['-C', source, 'add', '--', path])
    git(['-C', source, '-c', 'user.name=Runtime Fixture', '-c', 'user.email=fixture@example.invalid',
      'commit', '-m', `fixture: ${path}`])
    assert.equal(git(['-C', source, 'status', '--porcelain']), '')
  }
  const bareSnapshot = () => {
    const files = []
    const visit = (directory, prefix = '') => {
      for (const name of readdirSync(directory).sort()) {
        const path = join(directory, name), relative = prefix + name, info = lstatSync(path)
        assert.ok(!info.isSymbolicLink())
        if (info.isDirectory()) visit(path, relative + '/')
        else { assert.ok(info.isFile()); files.push([relative, digest(readFileSync(path))]) }
      }
    }
    visit(output)
    return files
  }
  const manifestText = readFileSync(join(source, 'manifest.json'), 'utf8')
  const first = success()
  assert.equal(first.changed, true)
  assert.equal(first.dataVersion, JSON.parse(manifestText).presetDataVersion)
  const ref = () => git([`--git-dir=${output}`, 'rev-parse', 'refs/heads/runtime'])
  assert.equal(ref(), first.runtimeCommit)
  assert.equal(git([`--git-dir=${output}`, 'rev-list', '--count', 'runtime']), '1')
  const paths = git([`--git-dir=${output}`, 'ls-tree', '-r', '--name-only', 'runtime']).split('\n')
  const marker = JSON.parse(git([`--git-dir=${output}`, 'show', 'runtime:.desirecore-runtime.json']))
  assert.deepEqual(paths.sort(), [...marker.files.map(file => file.path), '.desirecore-runtime.json'].sort())
  assert.equal(paths.length, first.fileCount + 1)
  assert.ok(paths.every(path => !/^(?:docs|__tests__|scripts|\.github)\//.test(path)))
  const baseline = bareSnapshot()

  for (const [name, path, text] of [
    ['documentation-only', 'docs/runtime-publication-fixture.md', '# 私有无变化回归夹具\n'],
    ['test-only', '__tests__/runtime-publication-fixture.test.mjs', '// 私有无变化回归夹具\n'],
  ]) {
    await t.test(`${name} is a true no-op without even rewriting bare files`, () => {
      commit(path, text)
      const receipt = success()
      assert.equal(receipt.changed, false)
      assert.equal(receipt.sourceCommit, git(['-C', source, 'rev-parse', 'HEAD']))
      for (const key of ['runtimeCommit', 'dataVersion', 'payloadDigest', 'fileCount']) assert.equal(receipt[key], first[key])
      assert.equal(readFileSync(join(source, 'manifest.json'), 'utf8'), manifestText)
      assert.equal(ref(), first.runtimeCommit)
      assert.deepEqual(bareSnapshot(), baseline)
    })
  }

  await t.test('changed runtime bytes at the same version fail without mutating the last good publication', () => {
    const manifest = JSON.parse(manifestText)
    manifest.description += ' (private fixture)'
    commit('manifest.json', JSON.stringify(manifest, null, 2) + '\n')
    const result = publish()
    assert.equal(result.error, undefined)
    assert.equal(result.status, 1)
    assert.equal(result.stderr.trim(), 'config_center_runtime_changed_payload_requires_new_data_version')
    assert.equal(ref(), first.runtimeCommit)
    assert.deepEqual(bareSnapshot(), baseline)
  })

  await t.test('a valid higher-version payload advances only the independent runtime parent chain', () => {
    const manifest = JSON.parse(readFileSync(join(source, 'manifest.json'), 'utf8'))
    manifest.presetDataVersion++
    commit('manifest.json', JSON.stringify(manifest, null, 2) + '\n')
    const next = success()
    assert.equal(next.changed, true)
    assert.equal(next.dataVersion, first.dataVersion + 1)
    assert.notEqual(next.payloadDigest, first.payloadDigest)
    assert.equal(ref(), next.runtimeCommit)
    assert.equal(git([`--git-dir=${output}`, 'rev-list', '--parents', '-1', 'runtime']), `${next.runtimeCommit} ${first.runtimeCommit}`)
    assert.equal(git([`--git-dir=${output}`, 'rev-list', '--count', 'runtime']), '2')
    assert.equal(success().changed, false)
  })
})
