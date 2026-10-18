import {test} from 'node:test'
import assert from 'node:assert/strict'
import {readFileSync} from 'node:fs'
const read=path=>JSON.parse(readFileSync(new URL('../'+path,import.meta.url),'utf8'))
test('GPT-5.4 base cannot swallow distinct Nano, Pro or future variants',()=>{
 const rows=read('compute/model-specs/openai.json').specs
 const base=rows.find(x=>x.id==='gpt-5.4')
 assert.equal(base.match.patterns,undefined)
 assert.ok(base.match.exact.includes('gpt-5.4'))
 for(const [id,window] of [['gpt-5.4-nano',400000],['gpt-5.4-pro',1050000]]){
  const spec=rows.find(x=>x.id===id);assert.equal(spec.spec.contextWindow,window);assert.equal(spec.spec.maxOutputTokens,128000);assert.ok(spec.match.exact.includes(id))
 }
})
test('identity-only coding variants cannot inherit family context, output or routing',()=>{
 const rows=read('compute/model-specs/qwen.json').specs
 for(const id of ['qwen3-coder-plus','qwen3-coder-next']){
  const spec=rows.find(x=>x.id===id);assert.ok(spec.match.exact.includes(id));assert.deepEqual(Object.keys(spec.spec),['description']);assert.equal(spec.routing,undefined)
 }
})
test('all recorded baseline differences and exceptions have explicit decisions',()=>{
 const d=read('docs/plans/catalog-contract-migration/SPEC-DECISIONS.json')
 assert.equal(d.bindings.length,24);assert.equal(d.differences.length,45);assert.equal(d.specOnly.length,58)
 for(const row of [...d.differences,...d.specOnly]){assert.ok(row.classification);assert.ok(row.decision);assert.ok(row.reason)}
 for(const row of d.accessExceptions){assert.equal(row.inheritFamily,false);assert.equal(row.automaticRouting,false);assert.equal(row.effectiveBinding,null)}
 assert.ok(d.differences.some(r=>r.id==='gpt-5.4-nano'&&!r.currentDifferences.length))
 // MiniMax-M3 直连/套餐的输出上限已按官网 Messages API 参考核对为 524288（2026-10-18），接入不再保留差异覆盖
 const minimaxM3=d.differences.filter(r=>r.id==='MiniMax-M3')
 assert.equal(minimaxM3.length,2)
 for(const row of minimaxM3){assert.equal(row.classification,'verified-official-limit');assert.deepEqual(row.currentDifferences,[]);assert.equal(row.verifiedOverride,false)}
 assert.ok(d.verifiedLimits.some(r=>r.vendor==='minimax'&&r.id==='MiniMax-M3'&&r.maxOutputTokens===524288&&r.contextWindow===1000000))
 assert.equal(d.currentCounts.numericalDifferences,d.differences.filter(r=>r.currentDifferences.length).length)
})
