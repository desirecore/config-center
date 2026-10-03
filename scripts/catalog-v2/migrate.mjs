/** Explicit ONE-TIME importer. Compilation never reads V1. Reimport is manual and reviewed. */
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
export const FACT_KEYS = ['contextWindow','maxInputTokens','maxOutputTokens','capabilities','serviceType','supportsReasoning','defaultTemperature','defaultTopP','defaultTopK'];
const INTRINSIC = new Set(['thinkingOnly','samplingParametersDeprecated','forcedToolChoiceUnsupported','speech','modelOrigin','dimensions','defaultDimension']);
const clone = x => structuredClone(x);
const equal = (a,b) => JSON.stringify(a) === JSON.stringify(b);
function readJson(file) { return JSON.parse(fs.readFileSync(file,'utf8')); }
function files(dir) { return fs.readdirSync(dir).filter(n => n.endsWith('.json') && !n.startsWith('_')).sort(); }
function leaves(obj, prefix='extra') { return Object.entries(obj ?? {}).flatMap(([k,v]) => v && typeof v === 'object' && !Array.isArray(v) ? leaves(v, `${prefix}.${k}`) : [`${prefix}.${k}`]); }
export function classifyExtra(key, consumers = []) {
  if (/price|pricing/i.test(key)) return 'billing';
  key = key.split('.')[0];
  if(key==='responsesOnly')return 'request';
  if (['deprecated','legacy','replacedBy','deprecationNotice','retiredAt'].includes(key)) return 'lifecycle';
  if (INTRINSIC.has(key)) return 'intrinsic';
  return consumers.length && !['thinkingDefault','supportsThinking','snapshot','aliases'].includes(key) ? 'request' : 'metadata';
}
function unitFor(key) {
  if (key === 'cachePricing') return 'compound-source-units';
  if (/PerMillionCharacters/.test(key)) return 'million-characters';
  if (/write5m/.test(key)) return 'million-tokens-cache-write-5m';
  if (/write1h/.test(key)) return 'million-tokens-cache-write-1h';
  if (/searchRequestPriceUsd/.test(key)) return 'search-request';
  if (/PerMinute/.test(key)) return 'minute';
  if (/PerSong/.test(key)) return 'song-up-to-five-minutes';
  if (/PerGeneration/.test(key)) return 'generation';
  if (/PerImage/.test(key)) return 'image';
  if (/Per1k/.test(key)) return 'thousand-requests';
  if (/storagePerMillionTokensPerHour|StoragePricePerMillionTokenHour/.test(key)) return 'million-token-hour';
  if (/Storage|storage/.test(key)) return 'source-unit-unresolved';
  if (/Tiers/.test(key)) return 'tiered-source-unit';
  if (/Note/.test(key)) return 'annotation';
  return 'million-tokens';
}
export function importCatalog(repoRoot, consumers={}) {
  const catalog = {formatVersion:2, publication:{state:'candidate',requiredClientVersion:null}, specs:[], accesses:[], retirements:[], metadata:{migrationEpoch:1, authority:'catalog/v2/catalog.json', verification:'migration-preserves-existing-evidence', specFiles:{}}};
  for (const filename of files(path.join(repoRoot,'compute/model-specs'))) {
    const data = readJson(path.join(repoRoot,'compute/model-specs',filename));
    const vendor = filename.slice(0,-5);
    catalog.metadata.specFiles[filename] = Object.fromEntries(Object.entries(data).filter(([k])=>k!=='specs'));
    for (const entry of data.specs) {
      const facts = Object.fromEntries(Object.entries(entry.spec).filter(([k])=>k!=='extra'));
      const metadata = {recordedExtra:{}, projection:{specKeys:Object.keys(entry.spec),extraKeys:Object.keys(entry.spec.extra ?? {})}, sourceFile:`compute/model-specs/${filename}`};
      for (const [key,value] of Object.entries(entry.spec.extra ?? {})) (INTRINSIC.has(key) ? (facts.constraints ??= {}) : metadata.recordedExtra)[key] = clone(value);
      const rest = Object.fromEntries(Object.entries(entry).filter(([k])=> !['id','spec','routing'].includes(k)));
      catalog.specs.push({modelRef:`${vendor}:${entry.id}`,identity:{vendor,canonicalModelId:entry.id},facts,routing:entry.routing ?? {},lifecycle:{status:'unknown'},metadata:{...metadata,legacyIdentity:rest}});
    }
  }
  for(const spec of catalog.specs){
    if(Object.hasOwn(spec.metadata.recordedExtra,'adaptiveThinking')){
      spec.protocolProfiles=[{apiFormats:['anthropic-messages'],request:{adaptiveThinking:spec.metadata.recordedExtra.adaptiveThinking}}];
      delete spec.metadata.recordedExtra.adaptiveThinking;
    }
    for(const key of ['releasedAt','retiredAt'])if(Object.hasOwn(spec.facts,key)){
      (spec.metadata.recordedFacts??={})[key]=spec.facts[key];delete spec.facts[key];
    }
  }
  const exactIndex = new Map();
  for (const spec of catalog.specs) for (const name of [spec.identity.canonicalModelId,...(spec.metadata.legacyIdentity.match?.exact ?? [])]) {
    const bucket=exactIndex.get(name) ?? []; if(!bucket.includes(spec)) bucket.push(spec); exactIndex.set(name,bucket);
  }
  for (const category of ['providers','coding-plans']) for (const filename of files(path.join(repoRoot,`compute/${category}`))) {
    const data=readJson(path.join(repoRoot,`compute/${category}`,filename));
    const connection=Object.fromEntries(Object.entries(data).filter(([k])=>k!=='models'));
    const access={id:data.id,category,connection,models:[],metadata:{sourceFile:`compute/${category}/${filename}`}};
    for (const model of data.models) {
      let candidates=exactIndex.get(model.modelName) ?? [];
      if(candidates.length>1) candidates=candidates.filter(s=>s.identity.vendor===data.provider);
      const spec=candidates.length===1?candidates[0]:null;
      const dynamic=/latest$|^auto$/.test(model.modelName);
      const next={apiModelId:model.modelName,modelRef:spec?.modelRef ?? null,binding:{kind:spec?'exact':dynamic?'dynamic':'access-local',reason:spec?'exact-id-or-declared-alias':'no-proven-exact-identity'},overrides:{},request:{},billing:[],lifecycle:{status:'unknown'},metadata:{attributes:{},recordedExtra:{},projection:{modelKeys:Object.keys(model),extraKeys:Object.keys(model.extra ?? {})},sourceRecord:`${access.metadata.sourceFile}#${model.modelName}`}};
      if(data.requiredClientVersion)next.requiredClientVersion=data.requiredClientVersion;
      for(const [key,value] of Object.entries(model)) {
        if(key==='modelName'||key==='extra')continue;
        if(key==='apiModelId'){next.request.upstreamModelId=value;continue;}
        if(['inputPrice','outputPrice'].includes(key)){next.billing.push({sourceKey:key,amount:value,currency:data.priceCurrency ?? 'unknown',unit:'million-tokens',direction:key==='inputPrice'?'input':'output',verification:'inherited-not-reverified'});continue;}
        if(FACT_KEYS.includes(key)) {if(!spec||!equal(spec.facts[key],value))next.overrides[key]={value:clone(value),reason:'preserved-access-contract',evidence:next.metadata.sourceRecord,verification:'inherited-not-reverified'};} else next.metadata.attributes[key]=clone(value);
      }
      for(const [key,value] of Object.entries(model.extra ?? {})) {
        const owner=classifyExtra(key,consumers[key] ?? []);
        if(owner==='billing') next.billing.push({sourceKey:`extra.${key}`,amount:clone(value),currency:data.priceCurrency ?? 'unknown',unit:unitFor(key),verification:'inherited-not-reverified'});
        else if(owner==='request') next.request[key]=clone(value);
        else if(owner==='intrinsic') {
          // Only original proven spec facts are shared; access-only declarations remain explicit constraints.
          next.request.constraints ??= {}; next.request.constraints[key]=clone(value);
        } else if(owner==='lifecycle') next.lifecycle[key]=clone(value);
        else next.metadata.recordedExtra[key]=clone(value);
      }
      if(spec) for(const [key,value] of Object.entries(spec.metadata.recordedExtra)) {
        if(classifyExtra(key,consumers[key]??[])==='request' && !Object.hasOwn(next.request,key)) next.request[key]=clone(value);
      }
      if(next.request.serverSideWebSearch && Object.hasOwn(next.request.serverSideWebSearch,'searchRequestPriceUsd')){
        next.billing.push({sourceKey:'extra.serverSideWebSearch.searchRequestPriceUsd',amount:next.request.serverSideWebSearch.searchRequestPriceUsd,currency:'USD',unit:'search-request',verification:'inherited-not-reverified'});
        delete next.request.serverSideWebSearch.searchRequestPriceUsd;
      }
      access.models.push(next);
    }
    catalog.accesses.push(access);
  }
  const decisionsPath=path.join(repoRoot,'docs/plans/catalog-contract-migration/SPEC-DECISIONS.json');
  if(fs.existsSync(decisionsPath)){
    const decisions=readJson(decisionsPath);
    for(const access of catalog.accesses)for(const model of access.models){
      const exception=(decisions.strictExactExceptions??[]).find(d=>d.file===access.metadata.sourceFile && d.apiModelId===model.apiModelId);
      if(exception){model.modelRef=null;model.binding={kind:exception.kind?.includes('dynamic')?'dynamic':'access-local',reason:exception.reason};model.metadata.automaticRouting=false;}
      const budget=(decisions.independentInputBudgets??[]).find(d=>d.file===access.metadata.sourceFile && d.apiModelId===model.apiModelId);
      if(budget){
        model.metadata.compatibilityValues={contextWindow:model.overrides.contextWindow?.value??catalog.specs.find(s=>s.modelRef===model.modelRef)?.facts.contextWindow};
        for(const key of ['maxInputTokens','contextWindow','maxOutputTokens'])if(Object.hasOwn(budget,key))model.overrides[key]={value:budget[key],reason:budget.semanticDecision,evidence:budget.evidence,verification:'officially-verified-independent-budget'};
        model.metadata.independentBudgetEvidence=budget;
      }
    }
  }
  return catalog;
}
export function discoverConsumers(clientRoot) {
  const result={};
  function scan(dir){if(!fs.existsSync(dir))return; for(const ent of fs.readdirSync(dir,{withFileTypes:true})){const file=path.join(dir,ent.name); if(ent.isDirectory()){if(!['node_modules','__tests__','dist','.git'].includes(ent.name))scan(file);} else if(/\.[cm]?[tj]sx?$/.test(ent.name)&& !/test|spec\.ts/.test(ent.name)){const text=fs.readFileSync(file,'utf8');for(const m of text.matchAll(/\bextra(?:\?\.|\.)([a-zA-Z]\w*)/g)){(result[m[1]]??= []).push(path.relative(clientRoot,file));}}}}
  scan(path.join(clientRoot,'packages'));scan(path.join(clientRoot,'app'));for(const k of Object.keys(result))result[k]=[...new Set(result[k])].sort();return result;
}
if(process.argv[1]===fileURLToPath(import.meta.url)){
  if(!process.argv.includes('--write')) throw new Error('One-time migration requires --write; use compile.mjs thereafter');
  const clientRoot=process.argv[process.argv.indexOf('--client-root')+1];
  if(!process.argv.includes('--client-root'))throw new Error('Client source required for field consumer audit');
  const consumers=discoverConsumers(clientRoot), catalog=importCatalog(root,consumers);
  fs.mkdirSync(path.join(root,'catalog/v2'),{recursive:true});fs.writeFileSync(path.join(root,'catalog/v2/catalog.json'),JSON.stringify(catalog,null,2)+'\n');
  const inventory = fs.readFileSync(path.join(root,'docs/plans/catalog-contract-migration/FIELD-INVENTORY.md'),'utf8');
  const paths=[...inventory.matchAll(/`extra\.([^`]+)`/g)].map(m=>m[1]);
  const decisions=paths.map(p=>({path:`extra.${p}`,owner:classifyExtra(p,consumers[p.split('.')[0]]??[]),consumerCandidates:consumers[p.split('.')[0]]??[],minimumVersion:null,versionStatus:'candidate-contract-not-released',verification:'static-property-read-candidate-not-runtime-acceptance'}));
  fs.writeFileSync(path.join(root,'catalog/v2/field-decisions.json'),JSON.stringify(decisions,null,2)+'\n');
  fs.writeFileSync(path.join(root,'docs/plans/catalog-contract-migration/FIELD-DECISIONS.md'),'# 字段归属与消费核查\n\n全部既有149条路径已分域；静态消费路径是核查候选，不宣称正式发布支持。无消费证明的值进入非运行时metadata，V1投影保留，不自动扩大能力。正式V2发布前须补实际客户端测试和版本。\n\n| 字段 | owner | 消费候选 | 发布版本 |\n| --- | --- | --- | --- |\n'+decisions.map(d=>`| \`${d.path}\` | ${d.owner} | ${d.consumerCandidates.slice(0,3).join('<br>')||'未识别；记录性隔离'} | 待正式发布 |`).join('\n')+'\n');
  console.log(`Imported ${catalog.specs.length} specs, ${catalog.accesses.length} accesses, ${decisions.length} field decisions`);
}
