import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { resolveEffectiveModel } from './catalog-v2/effective-model.mjs';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const date = process.argv[2];
if (!/^\d{4}-\d{2}-\d{2}$/.test(date ?? '')) throw new Error('Usage: node scripts/assemble-source-recheck.mjs YYYY-MM-DD');
const dir = path.join(root, 'docs/source-rechecks', date);
const inventory = JSON.parse(fs.readFileSync(path.join(dir,'inventory.json'),'utf8'));
const expected = new Map(inventory.records.map(r => [r.recordKey,r]));
const canonical=JSON.parse(fs.readFileSync(path.join(root,'catalog/v2/catalog.json'),'utf8'));
const canonicalViews=new Map(),specByRef=new Map(canonical.specs.map(s=>[s.modelRef,s]));
for(const spec of canonical.specs) canonicalViews.set(`${spec.metadata.sourceFile}#${spec.identity.canonicalModelId}`,{reference:`catalog/v2/catalog.json#${spec.modelRef}`,stableModelId:spec.identity.canonicalModelId,apiModelId:spec.identity.canonicalModelId,facts:spec.facts,request:{},billing:[]});
for(const access of canonical.accesses)for(const model of access.models){
  const effective=resolveEffectiveModel(specByRef.get(model.modelRef),model,{publicationState:canonical.publication.state,requiredClientVersion:'0.0.0',clientVersion:'999.0.0',connection:access.connection,now:`${date}T00:00:00Z`});
  canonicalViews.set(`${access.metadata.sourceFile}#${model.apiModelId}`,{reference:`catalog/v2/catalog.json#${access.id}/${model.apiModelId}`,stableModelId:model.apiModelId,apiModelId:effective.apiModelId,facts:effective.facts,request:effective.request,billing:effective.billing});
}
const reports = fs.readdirSync(path.join(dir,'providers')).filter(f => f.endsWith('.json')).sort().map(f => JSON.parse(fs.readFileSync(path.join(dir,'providers',f),'utf8')));
reports.push(...['api-contracts.json','policy-origins.json'].map(f => JSON.parse(fs.readFileSync(path.join(dir,f),'utf8'))));
const records = [], sources = [], seen = new Set(), errors = [], observations = [];
const read = (obj, field) => { let v=obj; for(const key of field.split('.')) { if(v===null || typeof v!=='object' || !Object.hasOwn(v,key)) return undefined; v=v[key]; } return v; };
for (const report of reports) {
  const namespace = report.supplier ?? (report.findings[0]?.recordKind === 'internal-policy' ? 'policy' : 'api');
  const sourceMap = new Map();
  for (const source of report.sources) {
    if(sourceMap.has(source.id)) errors.push(`Duplicate source ${namespace}/${source.id}`);
    if(!/^https:\/\//.test(source.url)) errors.push(`Non-HTTPS source ${source.url}`);
    sourceMap.set(source.id,source);
    sources.push({...source,sourceKey:`${namespace}/${source.id}`,namespace,checkedAt:report.checkedAt,referencedRecords:0});
  }
  for (const finding of report.findings) {
    const original = expected.get(finding.recordKey);
    if(!original && !finding.recordKind) errors.push(`Unknown inventory record ${finding.recordKey}`);
    if(seen.has(finding.recordKey)) errors.push(`Duplicate finding ${finding.recordKey}`);
    seen.add(finding.recordKey);
    if(original && (finding.modelId!==original.modelId || finding.config!==original.config)) errors.push(`Identity changed ${finding.recordKey}`);
    const refs = new Set(finding.sourceIds);
    for(const id of refs) {
      if(!sourceMap.has(id)) errors.push(`Unknown source ${finding.recordKey}: ${id}`);
      const source = sources.find(s=>s.sourceKey===`${namespace}/${id}`); if(source) source.referencedRecords++;
    }
    const current = original?.current ?? finding.current;
    for (const evidence of finding.fieldEvidence) {
      const s=sourceMap.get(evidence.sourceId);
      if(!s || s.retrieval!=='readable') errors.push(`Unread source used as proof ${finding.recordKey}: ${evidence.sourceId}`);
      if(!['matches','differs','not-comparable'].includes(evidence.assessment)) errors.push(`Invalid assessment ${finding.recordKey}`);
      const actual = read(current,evidence.field) ?? read(current,`spec.${evidence.field}`);
      if(actual!==undefined && JSON.stringify(actual)!==JSON.stringify(evidence.currentValue)) observations.push({recordKey:finding.recordKey,field:evidence.field,inventoryValue:actual,declaredCurrentValue:evidence.currentValue});
    }
    const priorProofs=original?.knownFieldEvidence ?? finding.knownFieldEvidence ?? [];
    const proved=new Set(finding.fieldEvidence.filter(e=>e.assessment!=='not-comparable' && sourceMap.get(e.sourceId)?.kind?.startsWith('official-')).map(e=>e.field.replace(/^spec\./,'')));
    const remainingCritical=(original?.missingFields??[]).filter(f=>!proved.has(f.replace(/^spec\./,'')));
    const remainingFields=[...new Set([...remainingCritical,...finding.remainingFields])];
    records.push({...original,...finding,current,canonicalView:canonicalViews.get(finding.recordKey)??null,recordKind:finding.recordKind??'model',checkedAt:report.checkedAt,remainingFields,sourceKeys:finding.sourceIds.map(id=>`${namespace}/${id}`),fieldEvidence:finding.fieldEvidence.map(e=>({...e,sourceKey:`${namespace}/${e.sourceId}`,sourceKind:sourceMap.get(e.sourceId)?.kind,sourceUrl:sourceMap.get(e.sourceId)?.url,alreadyRegistered:priorProofs.some(p=>p.field.replace(/^spec\./,'')===e.field.replace(/^spec\./,''))}))});
  }
}
for(const key of expected.keys()) if(!seen.has(key)) errors.push(`Missing inventory record ${key}`);
if(errors.length) throw new Error(errors.join('\n'));
const outcomeCounts={}; const modelCounts={};
for(const r of records){outcomeCounts[r.outcome]=(outcomeCounts[r.outcome]??0)+1;if(r.recordKind==='model')modelCounts[r.outcome]=(modelCounts[r.outcome]??0)+1;}
const pr=JSON.parse(fs.readFileSync(path.join(dir,'client-pr-status.json'),'utf8'));
const releases=JSON.parse(fs.readFileSync(path.join(dir,'client-release-status.json'),'utf8'));
const publication=JSON.parse(fs.readFileSync(path.join(root,'compute/v2/manifest.json'),'utf8'));
const status={checkedAt:date,configCenter:{commit:inventory.baseCommit,presetDataVersion:inventory.presetDataVersion,state:publication.state,requiredClientVersion:publication.requiredClientVersion},client:{pullRequest:'https://github.com/desirecore/desirecore/pull/4042',head:pr.headRefOid,state:pr.state,checks:Object.fromEntries(pr.statusCheckRollup.map(c=>[c.name,c.conclusion||c.status])),latestFormalRelease:releases.find(r=>!r.isDraft&&!r.isPrerelease)?.tagName??'未取得正式版本'}};
const summary={checkedAt:date,modelRecords:inventory.records.length,apiRecords:records.filter(r=>r.recordKind==='api-contract').length,policyRecords:records.filter(r=>r.recordKind==='internal-policy').length,totalReviewRecords:records.length,modelOutcomeCounts:modelCounts,outcomeCounts,sourceAttempts:sources.length,readableSources:sources.filter(s=>s.retrieval==='readable').length,distinctUrls:new Set(sources.map(s=>s.url)).size,fieldEvidence:records.reduce((n,r)=>n+r.fieldEvidence.length,0),newFieldCandidates:records.reduce((n,r)=>n+r.fieldEvidence.filter(e=>!e.alreadyRegistered).length,0),snapshotObservations:observations.length};
fs.writeFileSync(path.join(dir,'review-data.json'),JSON.stringify({summary,status,records,sources,snapshotObservations:observations},null,2)+'\n');
const label={'official-fields-found':'部分官方字段候选','official-identity-only':'仅官方身份','official-access-only':'仅接入/产品入口','official-conflict':'数值/语义/生命周期事项','trusted-secondary-only':'仅可信第三方','still-unresolved':'仍未解决','historical-only':'历史适用','internal-policy-missing-approval':'待批准/评测依据'};
const table=Object.entries(modelCounts).map(([k,v])=>`| ${label[k]??k} | ${v} |`).join('\n');
let md=`# ${date}：来源重新检索与复核\n\n基线 main \`${inventory.baseCommit}\`，数据版本${inventory.presetDataVersion}。本轮实际重新访问官网、官方代码和模型卡，部分页面使用渲染浏览器；可信第三方单独标识。626条模型记录全部覆盖，API合同6条及本仓策略3条另列。\n\n## 最新发布状态\n\n客户端[PR #4042](${status.client.pullRequest})仍OPEN，head \`${status.client.head}\`。检查快照：${Object.entries(status.client.checks).map(([name,state])=>`${name}=${state}`).join("、")}；正式版本${status.client.latestFormalRelease}。V2保持candidate及空最低版本，不因文档补证而启用。\n\n## 模型重检结论\n\n| 结论 | 记录数 |\n| --- | ---: |\n${table}\n\n这些是重检候选分类，不是整条记录全部已核。来源读取${summary.sourceAttempts}次，其中${summary.readableSources}次可读，${summary.distinctUrls}个不同URL；${summary.fieldEvidence}项字段候选，含重复接入及已有字段再核。字段、价格币种、计价单位、地域、型号版本、API/订阅范围分别保留。对照原值取V1兼容投影，表格另列V2规范值及定位；规范值为候选合同的静态解析，不代表已发布或可调用。\n\n## 优先复核\n\n- Infini的deepseek-v3精确下线记录；不扩大为整个域名停服。\n- 火山及腾讯Coding Plan已停/将停的具体型号，直连API分别判断。\n- OpenAI Codex订阅退役与API仍可用的区别，以及未来API停服预告。\n- Perplexity Sonar迁移：同步/流式渐进重写仍工作，异步旧请求不再支持；不能说域名全停服。\n- Google最大输入限制与总上下文窗口的语义，K/M缩写及缓存/阶梯/平台价格不可比项。\n- 豆包Global与Custom合同；Snippet数组类型、可空发布时间、仅示例ErrorCode规则。\n\n## 细分记录\n\n`;
for(const report of reports.filter(r=>r.supplier))md+=`- [${report.supplier}](providers/${report.supplier}.md)：${report.findings.length}条静态记录。\n`;
md+='\n- [非模型API](api-contracts/)：六个独立合同记录。\n- [本仓策略依据](policy-origins.md)：历史实现不等于批准或模型评测。\n- `inventory.json`保存开始时原值及已登记证明；`review-data.json`保存全部候选、来源和剩余缺口。\n\n## 统一复核与后续更新\n\n临时XLSX保存在工作区outputs/source-review-20261004，包含记录复核、字段证据、来源读取；冲突排在前面，可筛选供应商和结论，填写采纳/需补证/不采纳及意见。每条记录使用稳定config#id，防止排序后意见错位。\n\n本轮未修改canonical、原来源metadata状态、预设数据版本或客户端。采纳前复核精确ID/实参、来源正文、单位、适用地域与接入；只有适用字段才能迁入原细分来源文档。可信第三方、HTTP失败、页面壳、官方目录缺失、API示例或历史记录不得升级成完整官方参数或账号验收。\n\n更新时先从canonical修改并编译，同步字段证明、指纹、规格索引及manifest，再跑完整校验。重检可运行：\n\n```bash\nnode scripts/source-recheck-inventory.mjs YYYY-MM-DD\nnode scripts/assemble-source-recheck.mjs YYYY-MM-DD\n```\n';
fs.writeFileSync(path.join(dir,'README.md'),md);
console.log(JSON.stringify(summary));
