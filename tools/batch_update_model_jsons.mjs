import fs from "node:fs/promises";
import path from "node:path";

const ROOT = "/Users/xieyuanxiang/config-center";
const ZENMUX_FILE = "/tmp/zenmux-models.json";
const REPORT_DIR = path.join(ROOT, "字段取值表");

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

const OFFICIAL_DOCS = {
  openai: ["https://platform.openai.com/docs/models", "https://platform.openai.com/docs/pricing"],
  anthropic: ["https://docs.anthropic.com/en/docs/about-claude/models/all-models", "https://docs.anthropic.com/en/docs/about-claude/pricing"],
  deepseek: ["https://api-docs.deepseek.com/quick_start/pricing"],
  google: ["https://ai.google.dev/gemini-api/docs/models", "https://ai.google.dev/pricing"],
  moonshot: ["https://platform.moonshot.cn/docs/pricing/chat"],
  zhipu: ["https://docs.bigmodel.cn/cn/guide/models/text/", "https://www.bigmodel.cn/pricing"],
  dashscope: ["https://help.aliyun.com/zh/model-studio/getting-started/models", "https://help.aliyun.com/zh/model-studio/pricing"],
  minimax: ["https://platform.minimax.io/docs/guides/pricing-paygo"],
  baidu: ["https://cloud.baidu.com/doc/qianfan/"],
  tencent: ["https://cloud.tencent.com/document/product/1729"],
  volcengine: ["https://www.volcengine.com/docs/82379"],
  xai: ["https://docs.x.ai/docs/models"],
  mistral: ["https://docs.mistral.ai/getting-started/models", "https://mistral.ai/pricing"],
  cohere: ["https://docs.cohere.com/docs/models", "https://cohere.com/pricing"],
  siliconflow: ["https://www.siliconflow.com/models", "https://siliconflow.cn/pricing"],
  perplexity: ["https://docs.perplexity.ai"],
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

function parseZenModel(m) {
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
    reasoning: m.capabilities?.reasoning,
    prompt: m.pricings?.prompt?.[0],
    completion: m.pricings?.completion?.[0],
  };
}

function matchModel(provider, modelName, zenModels) {
  const aliases = PROVIDER_OWNED_BY[provider] || [provider];
  const pool = zenModels.filter((m) => aliases.includes(m.vendor));

  const localNorm = normalize(modelName);
  const localStripped = stripTail(localNorm);

  const exact = pool.filter((m) => m.model === modelName);
  if (exact.length === 1) return { tier: "exact", model: exact[0] };

  const norm = pool.filter((m) => m.norm === localNorm);
  if (norm.length === 1) return { tier: "normalized", model: norm[0] };

  const stripped = pool.filter((m) => m.stripped === localStripped);
  if (stripped.length === 1) return { tier: "stripped", model: stripped[0] };

  const ranked = pool
    .map((m) => {
      const tokensA = new Set(localNorm.split("-").filter(Boolean));
      const tokensB = new Set(m.norm.split("-").filter(Boolean));
      let inter = 0;
      for (const t of tokensA) if (tokensB.has(t)) inter += 1;
      const union = new Set([...tokensA, ...tokensB]).size || 1;
      return { m, score: inter / union };
    })
    .filter((x) => x.score >= 0.35)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  if (ranked.length === 1) return { tier: "similar", model: ranked[0].m };
  if (ranked.length > 1) return { tier: "ambiguous", candidates: ranked.map((x) => x.m.id) };
  return { tier: "none" };
}

function isPriceUsable(entry) {
  return entry && entry.unit === "perMTokens" && entry.currency === "USD" && typeof entry.value === "number";
}

function contextShouldUpdate(local, remote) {
  if (typeof remote !== "number") return false;
  if (typeof local !== "number") return true;
  if (local === remote) return false;
  const ratio = Math.abs(local - remote) / Math.max(local, remote);
  return ratio > 0.03;
}

async function listJsonFiles() {
  const files = [];
  for (const dir of TARGET_DIRS) {
    for (const f of await fs.readdir(dir)) {
      if (!f.endsWith(".json") || f === "_index.json") continue;
      files.push(path.join(dir, f));
    }
  }
  return files.sort();
}

function reportNameFromPath(rel) {
  return rel.replaceAll("/", "__").replaceAll(".json", "");
}

async function main() {
  const raw = JSON.parse(await fs.readFile(ZENMUX_FILE, "utf8"));
  const zenModels = (raw.data || []).map(parseZenModel);
  const files = await listJsonFiles();
  await fs.mkdir(REPORT_DIR, { recursive: true });

  const summary = [];

  for (const abs of files) {
    const rel = path.relative(ROOT, abs);
    const doc = JSON.parse(await fs.readFile(abs, "utf8"));
    const provider = doc.provider || path.basename(abs, ".json");
    const priceCurrency = doc.priceCurrency || "USD";
    const models = Array.isArray(doc.models) ? doc.models : [];

    const changed = [];
    const unresolved = [];
    let fileChanged = false;

    for (const model of models) {
      const mm = matchModel(provider, model.modelName, zenModels);
      if (!mm.model) {
        unresolved.push({
          modelName: model.modelName,
          reason: mm.tier === "ambiguous" ? `ambiguous:${(mm.candidates || []).join(",")}` : "no-zenmux-match",
        });
        continue;
      }
      const z = mm.model;
      const fieldsChanged = [];

      if (contextShouldUpdate(model.contextWindow, z.context)) {
        const before = model.contextWindow;
        model.contextWindow = z.context;
        fieldsChanged.push(`contextWindow:${before}->${z.context}`);
      }

      const allowPrice = priceCurrency === "USD" && (mm.tier === "exact" || mm.tier === "normalized");
      if (allowPrice && isPriceUsable(z.prompt) && model.inputPrice !== z.prompt.value) {
        const before = model.inputPrice;
        model.inputPrice = z.prompt.value;
        fieldsChanged.push(`inputPrice:${before}->${z.prompt.value}`);
      } else if (!allowPrice && model.inputPrice !== undefined) {
        unresolved.push({
          modelName: model.modelName,
          reason: `price-not-updated(currency=${priceCurrency},match=${mm.tier})`,
        });
      }

      if (allowPrice && isPriceUsable(z.completion) && model.outputPrice !== z.completion.value) {
        const before = model.outputPrice;
        model.outputPrice = z.completion.value;
        fieldsChanged.push(`outputPrice:${before}->${z.completion.value}`);
      }

      if (fieldsChanged.length) {
        fileChanged = true;
        changed.push({
          modelName: model.modelName,
          zenmux: z.id,
          matchTier: mm.tier,
          fieldsChanged,
        });
      } else {
        unresolved.push({
          modelName: model.modelName,
          reason: `matched-no-change(${z.id},${mm.tier})`,
        });
      }
    }

    if (fileChanged) {
      await fs.writeFile(abs, `${JSON.stringify(doc, null, 2)}\n`, "utf8");
    }

    const reportFile = path.join(REPORT_DIR, `${reportNameFromPath(rel)}-未确认字段报告.md`);
    const lines = [];
    lines.push(`# 未确认字段报告 - ${rel}`);
    lines.push("");
    lines.push(`- provider: \`${provider}\``);
    lines.push(`- priceCurrency: \`${priceCurrency}\``);
    lines.push(`- changedModels: **${changed.length}**`);
    lines.push(`- unresolvedItems: **${unresolved.length}**`);
    lines.push("");
    lines.push("## 官方来源");
    lines.push("");
    const docs = OFFICIAL_DOCS[provider] || [];
    if (docs.length) {
      for (const d of docs) lines.push(`- ${d}`);
    } else {
      lines.push("- (待补充该 provider 官方文档)");
    }
    lines.push("- https://zenmux.ai/models");
    lines.push("- https://zenmux.ai/api/v1/models");
    lines.push("");
    lines.push("## 已修改");
    lines.push("");
    if (!changed.length) {
      lines.push("- (none)");
    } else {
      for (const c of changed) {
        lines.push(`- \`${c.modelName}\` <= \`${c.zenmux}\` [${c.matchTier}]`);
        for (const f of c.fieldsChanged) lines.push(`  - ${f}`);
      }
    }
    lines.push("");
    lines.push("## 未确认/未修改");
    lines.push("");
    if (!unresolved.length) {
      lines.push("- (none)");
    } else {
      for (const u of unresolved) lines.push(`- \`${u.modelName}\`: ${u.reason}`);
    }
    lines.push("");
    await fs.writeFile(reportFile, `${lines.join("\n")}\n`, "utf8");

    summary.push({
      file: rel,
      changedModels: changed.length,
      unresolvedItems: unresolved.length,
      report: path.relative(ROOT, reportFile),
    });
  }

  const summaryFile = path.join(REPORT_DIR, "全量处理汇总-2026-04-23.json");
  await fs.writeFile(summaryFile, `${JSON.stringify(summary, null, 2)}\n`, "utf8");
  console.log(JSON.stringify({ processedFiles: summary.length, summaryFile }, null, 2));
}

await main();
