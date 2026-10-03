import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import {resolveEffectiveModel} from './effective-model.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../..');
const clone=x=>structuredClone(x);
let canonicalValidator;
export function validateCanonicalSchema(catalog) {
  if(!canonicalValidator){const ajv=new Ajv({allErrors:true,strict:false});addFormats(ajv);canonicalValidator=ajv.compile(JSON.parse(fs.readFileSync(path.join(root,'schemas/catalog-v2.schema.json'),'utf8')));}
  if(!canonicalValidator(catalog))throw new Error(`Invalid V2 schema: ${JSON.stringify(canonicalValidator.errors)}`);
}
const REQUEST_KEYS=new Set(['adaptiveThinking','constraints','reasoning','serverSideWebSearch','thinking','thinkingRoundTrip','thinkingToolTurnValidation','endpointPath','apiFormatOverride','speech','responsesOnly','preserveThinkingDefault','upstreamModelId']);
export function stableJson(value){if(Array.isArray(value))return `[${value.map(stableJson).join(',')}]`;if(value&&typeof value==='object')return `{${Object.keys(value).sort().map(k=>`${JSON.stringify(k)}:${stableJson(value[k])}`).join(',')}}`;return JSON.stringify(value);}
export function digest(value){return crypto.createHash('sha256').update(stableJson(value)).digest('hex');}
export function projectV1(catalog){
  const outputs={};
  for(const [filename,header] of Object.entries(catalog.metadata.specFiles)) outputs[`compute/model-specs/${filename}`]={...clone(header),specs:[]};
  const byRef=new Map(catalog.specs.map(s=>[s.modelRef,s]));
  for(const spec of catalog.specs){
    const data={};for(const key of spec.metadata.projection.specKeys){
      if(key==='extra'){data.extra={};for(const name of spec.metadata.projection.extraKeys){const bucket=Object.hasOwn(spec.facts.constraints??{},name)?spec.facts.constraints:spec.metadata.recordedExtra;const adaptiveProfile=spec.protocolProfiles?.find(p=>p.apiFormats.includes('anthropic-messages'));data.extra[name]=clone(name==='adaptiveThinking'&&adaptiveProfile?adaptiveProfile.request.adaptiveThinking:bucket[name]);}}
      else data[key]=clone(Object.hasOwn(spec.metadata.recordedFacts??{},key)?spec.metadata.recordedFacts[key]:spec.facts[key]);
    }
    outputs[spec.metadata.sourceFile].specs.push({...clone(spec.metadata.legacyIdentity),id:spec.identity.canonicalModelId,spec:data,...(Object.keys(spec.routing).length?{routing:clone(spec.routing)}:{})});
  }
  for(const access of catalog.accesses){
    const models=access.models.map(model=>{
      const spec=byRef.get(model.modelRef), out={};
      for(const key of model.metadata.projection.modelKeys){
        if(key==='modelName')out.modelName=model.apiModelId;
        else if(key==='apiModelId')out.apiModelId=model.request.upstreamModelId;
        else if(key==='extra'){
          out.extra={};for(const name of model.metadata.projection.extraKeys){
            const price=model.billing.find(b=>b.sourceKey===`extra.${name}`);
            if(price)out.extra[name]=clone(price.amount);
            else if(Object.hasOwn(model.request,name))out.extra[name]=clone(model.request[name]);
            else if(Object.hasOwn(model.request.constraints??{},name))out.extra[name]=clone(model.request.constraints[name]);
            else if(Object.hasOwn(model.lifecycle,name))out.extra[name]=clone(model.lifecycle[name]);
            else if(Object.hasOwn(model.metadata.recordedExtra,name))out.extra[name]=clone(model.metadata.recordedExtra[name]);
            else throw new Error(`Missing projection ${model.apiModelId}.extra.${name}`);
            for(const nested of model.billing.filter(b=>b.sourceKey.startsWith(`extra.${name}.`))){const keys=nested.sourceKey.slice(`extra.${name}.`.length).split('.');let target=out.extra[name];for(const part of keys.slice(0,-1))target=target[part]??={};target[keys.at(-1)]=clone(nested.amount);}
          }
        } else if(['inputPrice','outputPrice'].includes(key))out[key]=clone(model.billing.find(b=>b.sourceKey===key)?.amount);
        else if(Object.hasOwn(model.metadata.compatibilityValues??{},key))out[key]=clone(model.metadata.compatibilityValues[key]);
        else if(Object.hasOwn(model.overrides,key))out[key]=clone(model.overrides[key].value);
        else if(Object.hasOwn(model.metadata.attributes,key))out[key]=clone(model.metadata.attributes[key]);
        else if(Object.hasOwn(spec?.facts??{},key))out[key]=clone(spec.facts[key]);
        else throw new Error(`Missing projection ${model.apiModelId}.${key}`);
      }
      return out;
    });outputs[access.metadata.sourceFile]={...clone(access.connection),models};
  }
  return outputs;
}
export function validateCatalog(catalog){
  validateCanonicalSchema(catalog);
  const refs=new Set();
  for(const spec of catalog.specs){if(refs.has(spec.modelRef))throw new Error(`Duplicate modelRef ${spec.modelRef}`);refs.add(spec.modelRef);if(Object.keys(spec.facts).some(k=>/price|billing/i.test(k)))throw new Error('Spec contains billing');}
  const accessIds=new Set();
  for(const access of catalog.accesses){if(accessIds.has(access.id))throw new Error(`Duplicate access ${access.id}`);accessIds.add(access.id);for(const model of access.models){
    if(model.binding.kind==='exact'&&!refs.has(model.modelRef))throw new Error(`Unknown spec ${model.modelRef}`);
    if(model.binding.kind!=='exact'&&model.modelRef!==null)throw new Error('Dynamic/unresolved cannot claim exact spec');
    for(const [k,v]of Object.entries(model.overrides))if(!v.reason||!Object.hasOwn(v,'value'))throw new Error(`Unexplained override ${k}`);
    for(const key of Object.keys(model.request))if(!REQUEST_KEYS.has(key))throw new Error(`Unknown managed request key ${key}`);
    for(const key of ['reasoningEffort','defaultReasoningEffort','thinkingDefault','supportsThinking','cachedInputPrice','cacheHitPrice']) if(Object.hasOwn(model.request,key))throw new Error(`Old runtime key ${key}`);
    for(const bill of model.billing)if(!bill.unit||!bill.currency)throw new Error('Billing dimension missing');
  }}
  if(catalog.publication.state==='published'&&!/^\d+\.\d+\.\d+$/.test(catalog.publication.requiredClientVersion??''))throw new Error('Published catalog needs real minimum client version');
}
export function compileCatalog(catalog){
  validateCatalog(catalog);
  const output=clone(catalog);
  // Projection-only metadata never enters the runtime contract; useful descriptive values remain non-consumed.
  delete output.metadata.specFiles;
  for(const spec of output.specs){delete spec.metadata.projection;delete spec.metadata.legacyIdentity;}
  for(const access of output.accesses)for(const model of access.models)delete model.metadata.projection;
  output.digest=digest(output);
  const projection=projectV1(catalog);
  const diagnostics={specs:catalog.specs.length,accesses:catalog.accesses.length,models:catalog.accesses.reduce((n,a)=>n+a.models.length,0),bindings:{},overrides:[],publication:catalog.publication};
  for(const a of catalog.accesses)for(const m of a.models){diagnostics.bindings[m.binding.kind]=(diagnostics.bindings[m.binding.kind]??0)+1;for(const [k,v]of Object.entries(m.overrides))diagnostics.overrides.push({accessId:a.id,apiModelId:m.apiModelId,field:k,...v});}
  const specsByRef = new Map(output.specs.map(spec => [spec.modelRef,spec]));
  const resolverParity={formatVersion:2,fixtureOnly:true,clientVersion:'999.0.0',requiredClientVersion:'0.0.0',now:'2026-10-03T00:00:00Z',models:[]};
  for(const access of output.accesses)for(const model of access.models){
    const effective=resolveEffectiveModel(specsByRef.get(model.modelRef),model,{publicationState:'published',requiredClientVersion:resolverParity.requiredClientVersion,clientVersion:resolverParity.clientVersion,now:resolverParity.now,connection:access.connection});
    resolverParity.models.push({accessId:access.id,apiModelId:model.apiModelId,digest:digest(effective),selectable:effective.selectable,effectiveApiFormat:effective.apiFormat,effectiveApiModelId:effective.apiModelId,eligibleForCall:effective.eligibleForCall,eligibleForAutoRouting:effective.eligibleForAutoRouting,manualOnly:effective.manualOnly,blockedReasons:effective.blockedReasons});
  }
  return {output,projection,diagnostics,resolverParity};
}
/** Root V1 files are generated publication projections, never author inputs.
 * Preserve harmless existing serialization when values match to avoid unrelated key-order churn.
 */
export function synchronizeRootProjection(repoRoot, projection, {check=false}={}) {
  for(const [file,data] of Object.entries(projection)){
    if(!/^compute\/(providers|coding-plans|model-specs)\/[^/]+\.json$/.test(file) || path.basename(file).startsWith('_'))throw new Error(`Invalid V1 publication path ${file}`);
    const absolute=path.join(repoRoot,file);
    let matches=false;
    if(fs.existsSync(absolute)){
      try{matches=stableJson(JSON.parse(fs.readFileSync(absolute,'utf8')))===stableJson(data);}catch{matches=false;}
    }
    if(check){if(!matches)throw new Error(`Stale V1 projection ${file}; edit catalog/v2 then run catalog:compile`);}
    else if(!matches){fs.mkdirSync(path.dirname(absolute),{recursive:true});fs.writeFileSync(absolute,JSON.stringify(data,null,2)+'\n');}
  }
}
export function run({check=false}={}){
 const catalog=JSON.parse(fs.readFileSync(path.join(root,'catalog/v2/catalog.json'),'utf8'));
 const retirementsPath=path.join(root,'catalog/v2/retirements.json');
 if(fs.existsSync(retirementsPath)){const registry=JSON.parse(fs.readFileSync(retirementsPath,'utf8'));catalog.retirements=Array.isArray(registry)?registry:registry.retirements??registry.rules??[];}
 const schema=JSON.parse(fs.readFileSync(path.join(root,'schemas/catalog-v2.schema.json'),'utf8'));
 const ajv=new Ajv({allErrors:true,strict:false});addFormats(ajv);const validate=ajv.compile(schema);if(!validate(catalog))throw new Error(JSON.stringify(validate.errors));
 const {output,projection,diagnostics,resolverParity}=compileCatalog(catalog);
 const providerValidator=ajv.compile(JSON.parse(fs.readFileSync(path.join(root,'schemas/provider.schema.json'),'utf8')));
 const specValidator=ajv.compile(JSON.parse(fs.readFileSync(path.join(root,'schemas/model-spec.schema.json'),'utf8')));
 for(const [file,data]of Object.entries(projection)){const validator=file.includes('/model-specs/')?specValidator:providerValidator;if(!validator(data))throw new Error(`${file}: ${JSON.stringify(validator.errors)}`);}
 synchronizeRootProjection(root,projection,{check});
 const files={'compute/v2/resolver-parity.json':resolverParity,'compute/v2/catalog.json':output,'compute/v2/diagnostics.json':diagnostics,'compute/v2/manifest.json':{formatVersion:2,state:catalog.publication.state,requiredClientVersion:catalog.publication.requiredClientVersion,catalogPath:'compute/v2/catalog.json',digest:output.digest}};
 for(const [file,data]of Object.entries(projection)) files[`compute/v2/compatibility/${file.slice('compute/'.length)}`]=data;
 for(const [file,data]of Object.entries(files)){const absolute=path.join(root,file),text=JSON.stringify(data,null,2)+'\n';if(check){if(!fs.existsSync(absolute)||fs.readFileSync(absolute,'utf8')!==text)throw new Error(`Stale generated file ${file}`);}else {fs.mkdirSync(path.dirname(absolute),{recursive:true});fs.writeFileSync(absolute,text);}}
 console.log(`V2 ${check?'verified':'compiled'}: ${diagnostics.models} models; state=${catalog.publication.state}; digest=${output.digest}`);
 return diagnostics;
}
if(process.argv[1]===fileURLToPath(import.meta.url))run({check:process.argv.includes('--check')});
