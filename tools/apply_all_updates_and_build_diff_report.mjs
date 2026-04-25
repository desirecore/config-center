import fs from "node:fs/promises";
import path from "node:path";

const ROOT = "/Users/xieyuanxiang/config-center";
const ZENMUX_FILE = "/tmp/zenmux-models.json";
const OUT_DIR = path.join(ROOT, "字段取值表");
const DATE_TAG = "2026-04-23";

const TARGET_DIRS = [
  path.join(ROOT, "compute", "providers"),
  path.join(ROOT, "compute", "coding-plans"),
];

const PROVIDER_OWNED_BY = {
  openai: ["openai"],
  anthropic: ["anthropic"],
  deepseek: ["deepseek"],
  google: ["google"],
  moonshot: ["moonshotai"],
  zhipu: ["z-ai"],
  "zhipu-embedding": ["z-ai"],
  dashscope: ["qwen"],
  minimax: ["minimax"],
  baidu: ["baidu"],
  tencent: ["tencent"],
  volcengine: ["bytedance", "volcengine"],
  xai: ["x-ai"],
  mistral: ["mistralai"],
  kwai: ["kuaishou"],
  lingyiwanwu: ["inclusionai"],
  siliconflow: ["qwen", "baai"],
  cohere: ["cohere"],
  perplexity: ["perplexity"],
};

function normalize(s) {
  return String(s || "")
    .toLowerCase()
    .replace(/[._/]/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function stripTail(s) {
  return s
    .replace(/-(latest|preview|exp|experimental|stable)$/g, "")
    .replace(/-\d{8}$/g, "")
    .replace(/-\d{6}$/g, "")
    .replace(/-\d{4}-\d{2}-\d{2}$/g, "");
}

function parseZen(m) {
  const [vendor, ...rest] = String(m.id).split("/");
  const model = rest.join("/");
  const norm = normalize(model);
  return {
    id: m.id,
    vendor,
    model,
    norm,
    stripped: stripTail(norm),
    context: m.context_length,
    prompt: m.pricings?.prompt?.[0],
    completion: m.pricings?.completion?.[0],
  };
}

function jaccard(a, b) {
  const A = new Set(a.split("-").filter(Boolean));
  const B = new Set(b.split("-").filter(Boolean));
  let inter = 0;
  for (const x of A) if (B.has(x)) inter += 1;
  return inter / (new Set([...A, ...B]).size || 1);
}

function match(provider, modelName, zenList) {
  const aliases = PROVIDER_OWNED_BY[provider] || [provider];
  const pool = zenList.filter((z) => aliases.includes(z.vendor));
  const localNorm = normalize(modelName);
  const localStripped = stripTail(localNorm);

  const exact = pool.filter((z) => z.model === modelName);
  if (exact.length === 1) return { tier: "exact", z: exact[0] };

  const norm = pool.filter((z) => z.norm === localNorm);
  if (norm.length === 1) return { tier: "normalized", z: norm[0] };

  const stripped = pool.filter((z) => z.stripped === localStripped);
  if (stripped.length === 1) return { tier: "stripped", z: stripped[0] };

  const ranked = pool
    .map((z) => ({ z, score: jaccard(localNorm, z.norm) }))
    .filter((x) => x.score >= 0.35)
    .sort((a, b) => b.score - a.score);
  if (ranked.length === 1) return { tier: "similar", z: ranked[0].z };
  return { tier: "none", z: null };
}

function isUsdPerM(x) {
  return x && x.unit === "perMTokens" && x.currency === "USD" && typeof x.value === "number";
}

function shouldUpdateContext(local, remote) {
  if (typeof remote !== "number") return false;
  if (typeof local !== "number") return true;
  if (local === remote) return false;
  const ratio = Math.abs(local - remote) / Math.max(local, remote);
  return ratio > 0.03;
}

async function listFiles() {
  const out = [];
  for (const dir of TARGET_DIRS) {
    for (const f of await fs.readdir(dir)) {
      if (!f.endsWith(".json") || f === "_index.json") continue;
      out.push(path.join(dir, f));
    }
  }
  return out.sort();
}

async function main() {
  const raw = JSON.parse(await fs.readFile(ZENMUX_FILE, "utf8"));
  const zen = (raw.data || []).map(parseZen);
  const files = await listFiles();

  const changes = [];

  for (const abs of files) {
    const rel = path.relative(ROOT, abs);
    const doc = JSON.parse(await fs.readFile(abs, "utf8"));
    const provider = doc.provider || path.basename(abs, ".json");
    const currency = doc.priceCurrency || "USD";
    const models = Array.isArray(doc.models) ? doc.models : [];

    let touched = false;

    for (const m of models) {
      const mm = match(provider, m.modelName, zen);
      if (!mm.z) continue;

      const modelChanges = [];
      const z = mm.z;

      if (shouldUpdateContext(m.contextWindow, z.context)) {
        modelChanges.push({
          field: "contextWindow",
          from: m.contextWindow,
          to: z.context,
        });
        m.contextWindow = z.context;
      }

      const allowPrice = currency === "USD" && ["exact", "normalized", "stripped", "similar"].includes(mm.tier);
      if (allowPrice && isUsdPerM(z.prompt) && m.inputPrice !== z.prompt.value) {
        modelChanges.push({
          field: "inputPrice",
          from: m.inputPrice,
          to: z.prompt.value,
        });
        m.inputPrice = z.prompt.value;
      }
      if (allowPrice && isUsdPerM(z.completion) && m.outputPrice !== z.completion.value) {
        modelChanges.push({
          field: "outputPrice",
          from: m.outputPrice,
          to: z.completion.value,
        });
        m.outputPrice = z.completion.value;
      }

      if (modelChanges.length) {
        touched = true;
        changes.push({
          file: rel,
          provider,
          modelName: m.modelName,
          zenmux: z.id,
          matchTier: mm.tier,
          currency,
          changes: modelChanges,
        });
      }
    }

    if (touched) {
      await fs.writeFile(abs, `${JSON.stringify(doc, null, 2)}\n`, "utf8");
    }
  }

  await fs.mkdir(OUT_DIR, { recursive: true });
  const jsonOut = path.join(OUT_DIR, `修改后差异总报告-${DATE_TAG}.json`);
  const mdOut = path.join(OUT_DIR, `修改后差异总报告-${DATE_TAG}.md`);

  const summary = {
    generatedAt: new Date().toISOString(),
    totalChangedModels: changes.length,
    totalChangedFields: changes.reduce((n, c) => n + c.changes.length, 0),
    changedFiles: [...new Set(changes.map((c) => c.file))].length,
  };

  await fs.writeFile(jsonOut, `${JSON.stringify({ summary, changes }, null, 2)}\n`, "utf8");

  const lines = [];
  lines.push(`# 修改后差异总报告（${DATE_TAG}）`);
  lines.push("");
  lines.push(`- generatedAt: \`${summary.generatedAt}\``);
  lines.push(`- changedFiles: **${summary.changedFiles}**`);
  lines.push(`- changedModels: **${summary.totalChangedModels}**`);
  lines.push(`- changedFields: **${summary.totalChangedFields}**`);
  lines.push("");
  lines.push("## 明细");
  lines.push("");
  if (!changes.length) {
    lines.push("- (none)");
  } else {
    for (const c of changes) {
      lines.push(`- ${c.file} :: ${c.modelName}`);
      lines.push(`  - zenmux: ${c.zenmux} [${c.matchTier}], currency=${c.currency}`);
      for (const d of c.changes) {
        lines.push(`  - ${d.field}: ${JSON.stringify(d.from)} -> ${JSON.stringify(d.to)}`);
      }
    }
  }
  lines.push("");
  lines.push("## 数据来源");
  lines.push("");
  lines.push("- https://zenmux.ai/models");
  lines.push("- https://zenmux.ai/api/v1/models");
  lines.push("- 各 provider 官方模型/价格文档（见各子目录详细字段取值表）");
  lines.push("");

  await fs.writeFile(mdOut, `${lines.join("\n")}\n`, "utf8");
  console.log(JSON.stringify({ summary, jsonOut, mdOut }, null, 2));
}

await main();
