import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { parseSourcePage } from './validate-sources.mjs';
import { classifyGap, missingFactFields } from './update-source-gap-register.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const date = process.argv[2];
if (!/^\d{4}-\d{2}-\d{2}$/.test(date ?? '') || new Date(date).toISOString().slice(0, 10) !== date) {
  throw new Error('Usage: node scripts/source-recheck-inventory.mjs YYYY-MM-DD');
}
const directory = `docs/source-rechecks/${date}`;
const records = [];
for (const supplier of fs.readdirSync(path.join(root, 'docs/model-sources/providers')).sort()) {
  const supplierDir = `docs/model-sources/providers/${supplier}`;
  const sources = parseSourcePage(fs.readFileSync(path.join(root, supplierDir, 'SOURCES.md'), 'utf8')).metadata.sources;
  const sourceMap = new Map(sources.map(source => [source.id, source]));
  const models = path.join(root, supplierDir, 'models');
  if (!fs.existsSync(models)) continue;
  for (const filename of fs.readdirSync(models).sort()) {
    const sourceDoc = `${supplierDir}/models/${filename}`;
    const text = fs.readFileSync(path.join(root, sourceDoc), 'utf8');
    if (!text.includes('<!-- source-metadata:start -->')) continue;
    for (const record of parseSourcePage(text).records) {
      const data = JSON.parse(fs.readFileSync(path.join(root, record.config), 'utf8'));
      const current = (data.models ?? data.specs).find(row => (row.modelName ?? row.id) === record.id);
      if (!current) throw new Error(`Missing ${record.config}#${record.id}`);
      records.push({
        recordKey: `${record.config}#${record.id}`, supplier, modelId: record.id,
        config: record.config, sourceDoc, originalStatus: record.status,
        originalGap: classifyGap(record, sourceMap),
        missingFields: missingFactFields(current, record.fieldSources),
        knownFieldEvidence: record.fieldSources, current,
        registeredSources: record.sources.map(ref => ({ ...sourceMap.get(ref.source), reference: ref })),
      });
    }
  }
}
if (new Set(records.map(row => row.recordKey)).size !== records.length) throw new Error('Duplicate record identity');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'manifest.json'), 'utf8'));
const result = {
  checkedAt: date, baseCommit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(),
  presetDataVersion: manifest.presetDataVersion,
  scope: 'All source-gap records, including identity-only, partial fields, and historical identity; evidence candidates await human review.',
  records,
};
fs.mkdirSync(path.join(root, directory), { recursive: true });
fs.writeFileSync(path.join(root, directory, 'inventory.json'), JSON.stringify(result, null, 2) + '\n');
console.log(JSON.stringify({ records: records.length, suppliers: new Set(records.map(row => row.supplier)).size, path: `${directory}/inventory.json` }));
