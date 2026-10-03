import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import {fileURLToPath} from 'node:url';
import {compileCatalog,projectV1,stableJson,validateCatalog,synchronizeRootProjection} from '../scripts/catalog-v2/compile.mjs';
import {resolveEffectiveModel} from '../scripts/catalog-v2/effective-model.mjs';
import {classifyExtra} from '../scripts/catalog-v2/migrate.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const catalog=JSON.parse(fs.readFileSync(path.join(root,'catalog/v2/catalog.json'),'utf8'));
const spec={modelRef:'vendor:exact',identity:{vendor:'vendor',canonicalModelId:'exact'},facts:{contextWindow:1000,maxInputTokens:800,maxOutputTokens:500,capabilities:['chat'],constraints:{thinkingOnly:true}},routing:{reasoning:{supportedModes:['off','low','high']}},lifecycle:{status:'active'}};
const model={apiModelId:'exact',modelRef:spec.modelRef,binding:{kind:'exact'},overrides:{contextWindow:{value:700,reason:'platform-cap'}},request:{reasoning:{supportedEfforts:['none','low','high','max'],defaultEffort:'none'}},billing:[{amount:-1,currency:'USD',unit:'million-tokens'}],lifecycle:{status:'active'},metadata:{recordedExtra:{capabilities:['vision']}}};
const options={publicationState:'published',requiredClientVersion:'10.0.200',clientVersion:'10.0.200',connection:{apiFormat:'openai-completions'}};
test('canonical projections reproduce each V1 field including missing fields and metadata',()=>{
 for(const [file,data]of Object.entries(projectV1(catalog))) assert.equal(stableJson(data),stableJson(JSON.parse(fs.readFileSync(path.join(root,file),'utf8'))),file);
});
test('compiler is deterministic and does not depend on provider files',()=>assert.equal(stableJson(compileCatalog(catalog)),stableJson(compileCatalog(structuredClone(catalog)))));
test('candidate and invalid versions fail closed while budget/output remain independent',()=>{
 assert.ok(resolveEffectiveModel(spec,model,{...options,publicationState:'candidate'}).blockedReasons.includes('catalog-not-published'));
 assert.ok(resolveEffectiveModel(spec,model,{...options,clientVersion:'garbage'}).blockedReasons.includes('invalid-client-version'));
 assert.ok(resolveEffectiveModel(spec,model,{...options,clientVersion:'10.0.199'}).blockedReasons.includes('client-update-required'));
 const effective=resolveEffectiveModel(spec,model,options);assert.equal(effective.facts.contextWindow,700);assert.equal(effective.facts.maxOutputTokens,500);assert.equal(effective.billing[0].amount,-1);
});
test('resolver uses explicit access set without capability union or metadata consumption',()=>{
 const override=structuredClone(model);override.overrides.capabilities={value:['chat'],reason:'no vision access'};
 const result=resolveEffectiveModel(spec,override,{...options,userOverrides:{capabilities:['vision'],contextWindow:2000,maxInputTokens:600}});
 assert.deepEqual(result.facts.capabilities,['chat']);assert.equal(result.facts.contextWindow,700);assert.equal(result.facts.maxInputTokens,600);assert.deepEqual(result.request.reasoning.supportedEfforts,['low','high']);assert.equal(result.request.reasoning.defaultEffort,undefined);
});
test('misbound identities and retired records cannot authorize calls',()=>{
 assert.ok(resolveEffectiveModel(spec,{...model,binding:{kind:'dynamic'}},options).blockedReasons.includes('unresolved-model-binding'));
 assert.ok(resolveEffectiveModel({...spec,lifecycle:{status:'historical'}},model,options).blockedReasons.includes('retired-model'));
});
test('legacy runtime keys and unexplained overrides are refused',()=>{
 const copy=structuredClone(catalog);copy.accesses[0].models[0].request.thinkingDefault=true;assert.throws(()=>validateCatalog(copy),/Old runtime key|Unknown managed request key|Invalid V2 schema/);
 assert.throws(()=>resolveEffectiveModel(spec,{...model,overrides:{contextWindow:{value:500}}},options),/Unexplained/);
});
test('all inventoried fields have one owner and nonconsumed defaults remain metadata',()=>{
 const decisions=JSON.parse(fs.readFileSync(path.join(root,'catalog/v2/field-decisions.json'),'utf8'));
 assert.equal(decisions.length,149);assert.equal(new Set(decisions.map(d=>d.path)).size,149);
 assert.equal(classifyExtra('thinkingDefault',['fake-read']), 'metadata');assert.equal(classifyExtra('cachePricing'), 'billing');
 const base=compileCatalog(catalog).output;for(const s of base.specs)assert.equal(s.metadata.projection,undefined);
});

test('X2 independent budget is not a total context assumption and V1 remains frozen',()=>{
 const access=catalog.accesses.find(a=>a.metadata.sourceFile==='compute/providers/xunfei-x2.json');
 const model=access.models.find(m=>m.apiModelId==='spark-x');
 assert.equal(model.overrides.maxInputTokens.value,65536);assert.equal(model.overrides.contextWindow.value,null);assert.equal(model.overrides.maxOutputTokens.value,131072);
 assert.equal(projectV1(catalog)[access.metadata.sourceFile].models[0].contextWindow,65536);
});
test('all dependency gates and lifecycle deadline enforce actual calls',()=>{
 for(const layer of ['provider','protocol','spec']){
  const newer='10.0.201'; const s=structuredClone(spec),m=structuredClone(model),o={...options,connection:{apiFormat:'anthropic-messages'}};
  if(layer==='provider')o.connection.requiredClientVersion=newer;
  if(layer==='protocol')m.protocol={state:'supported',requiredClientVersion:newer};
  if(layer==='spec')s.requiredClientVersion=newer;
  assert.ok(resolveEffectiveModel(s,m,o).blockedReasons.includes('client-update-required'),layer);
 }
 const dated={...spec,lifecycle:{status:'deprecated',retiredAt:'2027-04-01'}};
 assert.equal(resolveEffectiveModel(dated,model,{...options,now:'2027-03-31T23:59:59Z'}).eligible,true);
 assert.ok(resolveEffectiveModel(dated,model,{...options,now:'2027-04-01T00:00:00Z'}).blockedReasons.includes('retired-model'));
});
test('all intrinsic hard constraints survive access false and scoped adaptive applies to dynamic exact identity',()=>{
 const s={...spec,facts:{...spec.facts,constraints:{thinkingOnly:true,samplingParametersDeprecated:true,forcedToolChoiceUnsupported:true}},protocolProfiles:[{apiFormats:['anthropic-messages'],request:{adaptiveThinking:true}}]};
 const m={...model,request:{adaptiveThinking:false,constraints:{thinkingOnly:false,samplingParametersDeprecated:false,forcedToolChoiceUnsupported:false}}};
 const result=resolveEffectiveModel(s,m,{...options,connection:{apiFormat:'anthropic-messages'}});
 assert.deepEqual(result.facts.constraints,s.facts.constraints);assert.equal(result.request.adaptiveThinking,true);
 assert.equal(resolveEffectiveModel(s,{...m,request:{}},{...options,connection:{apiFormat:'openai-completions'}}).request.adaptiveThinking,undefined);
});
test('unverified budget expansion cannot enlarge effective hard budget; official platform contract can',()=>{
 const s={...spec,facts:{...spec.facts,maxOutputTokens:20}},m={...model,overrides:{maxOutputTokens:{value:2000,reason:'old-assumption',verification:'inherited-not-reverified'}}};
 const result=resolveEffectiveModel(s,m,options);assert.equal(result.facts.maxOutputTokens,20);assert.equal(result.pendingOverrides.length,1);assert.equal(result.automaticRoutingEligible,false);
 const verified=structuredClone(m);verified.overrides.maxOutputTokens.verification='officially-verified-access-contract';assert.equal(resolveEffectiveModel(s,verified,options).facts.maxOutputTokens,2000);
});

test('typed schema rejects unknown runtime fields, unsafe versions and invalid billing dimensions',()=>{
 const corruptions=[
  c=>c.specs[0].facts.unreadBehavior=true,
  c=>c.specs[0].facts.maxOutputTokens='128000',
  c=>c.accesses[0].connection.hiddenProtocol='anything',
  c=>c.accesses[0].connection.requiredClientVersion='tomorrow',
  c=>c.accesses[0].models[0].request.reasoning.supportedEfforts=['made-up'],
  c=>c.accesses.flatMap(a=>a.models).find(m=>m.billing.length).billing[0].amount=true,
  c=>c.accesses.flatMap(a=>a.models).find(m=>m.billing.length).billing[0].unit='anything',
  c=>c.specs[0].lifecycle.retiredAt='not-a-date',
  c=>c.retirements.push({id:'invalid',scope:'endpoint'})
 ];
 for(const corrupt of corruptions){const c=structuredClone(catalog);corrupt(c);assert.throws(()=>validateCatalog(c),/Invalid V2 schema/);}
});

test('explicit access-local/dynamic contracts stay callable on known adapters but never auto route or inherit',()=>{
 for(const kind of ['access-local','dynamic']){
  const m={...model,modelRef:null,binding:{kind},overrides:{contextWindow:{value:123,reason:'existing-access-contract'}}};
  const result=resolveEffectiveModel(spec,m,options);assert.equal(result.eligibleForCall,true);assert.equal(result.eligibleForAutoRouting,false);assert.equal(result.manualOnly,true);assert.equal(result.facts.contextWindow,123);assert.equal(result.facts.maxOutputTokens,undefined);assert.equal(result.identity,null);
  assert.ok(resolveEffectiveModel(spec,m,{...options,connection:{apiFormat:'not-implemented'}}).blockedReasons.includes('unknown-adapter'));
 }
});
test('all 36 confirmed unimplemented native models remain visible and cannot call or auto route',()=>{
 const decisions=JSON.parse(fs.readFileSync(path.join(root,'docs/plans/catalog-contract-migration/ADAPTER-DECISIONS.json'),'utf8')).decisions;
 assert.equal(decisions.length,36);let count=0;
 for(const decision of decisions){
  const access=catalog.accesses.find(a=>a.metadata.sourceFile===decision.file),m=access.models.find(m=>m.apiModelId===decision.apiModelId),s=catalog.specs.find(s=>s.modelRef===m.modelRef);
  assert.equal(m.protocol.state,'unsupported',`${decision.file}:${m.apiModelId}`);assert.ok(m.protocol.reason);assert.equal(m.protocol.requiredClientVersion,undefined);
  const result=resolveEffectiveModel(s,m,{...options,connection:access.connection});assert.equal(result.eligibleForCall,false);assert.equal(result.eligibleForAutoRouting,false);assert.ok(result.blockedReasons.includes('unsupported-adapter'));count++;
 }
 assert.equal(count,36);
});
test('actual outgoing aliases survive canonical transport IDs and V1 projection',()=>{
 const expected={ 'glm-5.2':'glm-5.2[1m]','doubao-seed-2.1-pro':'doubao-seed-2-1-pro-260628','doubao-seed-2.1-turbo':'doubao-seed-2-1-turbo-260628'};
 for(const [stable,wire]of Object.entries(expected)){
  const access=catalog.accesses.find(a=>a.models.some(m=>m.apiModelId===stable&&m.request.upstreamModelId===wire));const m=access.models.find(m=>m.apiModelId===stable),s=catalog.specs.find(s=>s.modelRef===m.modelRef);
  assert.equal(m.request.upstreamModelId,wire);assert.equal(m.metadata.attributes.apiModelId,undefined);assert.equal(resolveEffectiveModel(s,m,{...options,connection:access.connection}).apiModelId,wire);
  assert.equal(projectV1(catalog)[access.metadata.sourceFile].models.find(m=>m.modelName===stable).apiModelId,wire);
 }
});
test('search unit price ownership is billing at the leaf, while protocol group remains request',()=>{
 assert.equal(classifyExtra('serverSideWebSearch.searchRequestPriceUsd'),'billing');
 assert.equal(classifyExtra('serverSideWebSearch',['consumer.ts']),'request');
 const decisions=JSON.parse(fs.readFileSync(path.join(root,'catalog/v2/field-decisions.json'),'utf8'));assert.equal(decisions.find(x=>x.path==='extra.serverSideWebSearch.searchRequestPriceUsd').owner,'billing');
});
test('six product-deprecated Seed choices retain explicit calls without reentering selectors or automatic routing',()=>{
 const access=catalog.accesses.find(a=>a.id==='provider-volcengine-001'),models=access.models.filter(m=>m.lifecycle.deprecated===true);assert.equal(models.length,6);
 for(const model of models){const spec=catalog.specs.find(s=>s.modelRef===model.modelRef);const result=resolveEffectiveModel(spec,model,{...options,connection:access.connection});assert.equal(result.eligibleForCall,true);assert.equal(result.selectable,false);assert.equal(result.eligibleForAutoRouting,false);assert.ok(!result.blockedReasons.includes('retired-model'));}
});
test('implemented Responses format handles explicit override and mandatory Responses-only without accepting arbitrary adapters',()=>{
 const direct={...model,request:{apiFormatOverride:'openai-responses'}};assert.equal(resolveEffectiveModel(spec,direct,options).eligibleForCall,true);
 const only={...model,request:{responsesOnly:true}};const result=resolveEffectiveModel(spec,only,options);assert.equal(result.apiFormat,'openai-responses');assert.equal(result.request.apiFormatOverride,'openai-responses');assert.equal(result.eligibleForCall,true);
 assert.ok(resolveEffectiveModel(spec,{...model,request:{apiFormatOverride:'unimplemented-native-api'}},options).blockedReasons.includes('unknown-adapter'));
 const listed=catalog.accesses.flatMap(a=>a.models).filter(m=>m.request.responsesOnly);assert.equal(listed.length,3);for(const m of listed)assert.equal(m.metadata.recordedExtra.responsesOnly,undefined);
});

test('root V1 is generated from canonical, rejects manual drift and never rewrites indexes or unrelated files',()=>{
 const temp=fs.mkdtempSync(path.join(os.tmpdir(),'catalog-root-projection-'));
 try{
  const projection=projectV1(catalog),file=Object.keys(projection)[0];
  const indexes=['compute/providers/_index.json','compute/model-specs/_index.json'];
  for(const index of indexes){fs.mkdirSync(path.dirname(path.join(temp,index)),{recursive:true});fs.writeFileSync(path.join(temp,index),'{"sentinel":"user-index"}');}
  fs.mkdirSync(path.join(temp,'logs'));fs.writeFileSync(path.join(temp,'logs','user.log'),'preserve');
  synchronizeRootProjection(temp,projection);synchronizeRootProjection(temp,projection,{check:true});
  const changed=JSON.parse(fs.readFileSync(path.join(temp,file),'utf8'));changed.specs[0].spec.contextWindow=42;fs.writeFileSync(path.join(temp,file),JSON.stringify(changed));
  assert.throws(()=>synchronizeRootProjection(temp,projection,{check:true}),/Stale V1 projection/);
  synchronizeRootProjection(temp,projection);synchronizeRootProjection(temp,projection,{check:true});
  assert.equal(stableJson(JSON.parse(fs.readFileSync(path.join(temp,file),'utf8'))),stableJson(projection[file]));
  for(const index of indexes)assert.equal(fs.readFileSync(path.join(temp,index),'utf8'),'{'+'"sentinel":"user-index"}');
  assert.equal(fs.readFileSync(path.join(temp,'logs/user.log'),'utf8'),'preserve');
  assert.throws(()=>synchronizeRootProjection(temp,{'compute/providers/_index.json':{}},{check:true}),/Invalid V1 publication path/);
 }finally{fs.rmSync(temp,{recursive:true,force:true});}
});
