import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { loadSchemas } from '../scripts/validate.mjs'

const read = path => JSON.parse(readFileSync(new URL(`../${path}`, import.meta.url), 'utf8'))
const validate = loadSchemas()['api-provider']

test('Anthropic 视觉配置显式选择整个内容块数组，兼容首块为推理的响应', () => {
  const config = read('api-providers/image-understanding/configured-vision-anthropic.json')
  assert.deepEqual(config.response, { textPath: 'content', textFormat: 'text-blocks' })
  assert.equal(validate(config), true, JSON.stringify(validate.errors))
})

test('字符串响应格式可省略，旧 OpenAI 视觉配置仍有效', () => {
  const config = read('api-providers/image-understanding/configured-vision-openai.json')
  assert.equal(Object.hasOwn(config.response, 'textFormat'), false)
  assert.equal(validate(config), true, JSON.stringify(validate.errors))
  assert.equal(Object.hasOwn(config.response, 'textFormat'), false)
  config.response.textFormat = 'string'
  assert.equal(validate(config), true, JSON.stringify(validate.errors))
})

test('响应格式拒绝未知值和非字符串，避免默默接受未实现的提取策略', () => {
  for (const textFormat of ['thinking-blocks', null, true, []]) {
    const config = read('api-providers/image-understanding/configured-vision-anthropic.json')
    config.response.textFormat = textFormat
    assert.equal(validate(config), false)
    assert.ok(validate.errors.some(error => error.instancePath === '/response/textFormat'))
  }
})

test('响应配置继续拒绝未知字段', () => {
  const config = read('api-providers/image-understanding/configured-vision-anthropic.json')
  config.response.includeThinking = true
  assert.equal(validate(config), false)
  assert.ok(validate.errors.some(error => error.keyword === 'additionalProperties'
    && error.params.additionalProperty === 'includeThinking'))
})
