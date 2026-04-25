import fs from "node:fs/promises";
import path from "node:path";

const ROOT = "/Users/xieyuanxiang/config-center";
const OUT_ROOT = path.join(ROOT, "字段取值表");
const ZENMUX_FILE = "/tmp/zenmux-models.json";

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
    reasoning: m.capabilities?.reasoning,
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

function matchWithCandidates(provider, modelName, zenModels) {
  const aliases = PROVIDER_OWNED_BY[provider] || [provider];
  const pool = zenModels.filter((z) => aliases.includes(z.vendor));
  const localNorm = normalize(modelName);
  const localStripped = stripTail(localNorm);

  const exact = pool.filter((z) => z.model === modelName);
  if (exact.length === 1) return { matched: exact[0], tier: "exact", candidates: exact };

  const norm = pool.filter((z) => z.norm === localNorm);
  if (norm.length === 1) return { matched: norm[0], tier: "normalized", candidates: norm };

  const stripped = pool.filter((z) => z.stripped === localStripped);
  if (stripped.length === 1) return { matched: stripped[0], tier: "stripped", candidates: stripped };

  const ranked = pool
    .map((z) => ({ z, score: jaccard(localNorm, z.norm) }))
    .filter((x) => x.score >= 0.25)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map((x) => x.z);

  if (ranked.length === 1) return { matched: ranked[0], tier: "similar", candidates: ranked };
  return { matched: null, tier: ranked.length ? "ambiguous" : "none", candidates: ranked };
}

function fmt(v) {
  if (v === undefined) return "(缺省)";
  return `\`${JSON.stringify(v)}\``;
}

function quoteCsv(arr) {
  if (!arr.length) return "(none)";
  return arr.map((x) => `\`${x}\``).join("、");
}

function buildRows(doc, model, match) {
  const rows = [];
  const z = match.matched;
  const currency = doc.priceCurrency || "USD";

  rows.push({
    field: "modelName",
    current: model.modelName,
    suggested: z ? z.model : model.modelName,
    decision: z && match.tier === "exact" ? "保持" : "待确认",
    reason: z ? `ZenMux匹配(${match.tier}): ${z.id}` : "ZenMux无稳定匹配",
  });

  rows.push({
    field: "displayName",
    current: model.displayName,
    suggested: model.displayName,
    decision: "保持",
    reason: "展示字段，需按产品命名策略",
  });

  rows.push({
    field: "serviceType",
    current: model.serviceType,
    suggested: model.serviceType,
    decision: "保持",
    reason: "服务路由字段，优先本项目约定",
  });

  const trustedContextMatch = ["exact", "normalized", "stripped"].includes(match.tier);
  if (z && typeof z.context === "number" && trustedContextMatch) {
    const ratio = typeof model.contextWindow === "number" ? Math.abs(model.contextWindow - z.context) / Math.max(model.contextWindow, z.context) : 1;
    const sameScale = ratio <= 0.03;
    rows.push({
      field: "contextWindow",
      current: model.contextWindow,
      suggested: sameScale ? model.contextWindow : z.context,
      decision: sameScale ? "保持" : "建议修改",
      reason: sameScale ? `ZenMux(${z.id})口径近似（≤3%）` : `ZenMux(${z.id})提供明确context_length=${z.context}`,
    });
  } else {
    rows.push({
      field: "contextWindow",
      current: model.contextWindow,
      suggested: model.contextWindow,
      decision: "待确认",
      reason: z && typeof z.context === "number"
        ? `ZenMux命中(${match.tier})但匹配置信不足，不直接覆盖context`
        : "ZenMux无context可用，需官方规格页确认",
    });
  }

  rows.push({
    field: "maxOutputTokens",
    current: model.maxOutputTokens,
    suggested: model.maxOutputTokens,
    decision: "待确认",
    reason: "ZenMux列表未提供统一max output字段，需官方模型详情页",
  });

  const canPriceFromZen = z && z.prompt && z.completion && z.prompt.unit === "perMTokens" && z.prompt.currency === "USD" && z.completion.unit === "perMTokens" && z.completion.currency === "USD";
  if (canPriceFromZen && currency === "USD" && (match.tier === "exact" || match.tier === "normalized")) {
    rows.push({
      field: "inputPrice",
      current: model.inputPrice,
      suggested: z.prompt.value,
      decision: model.inputPrice === z.prompt.value ? "保持" : "建议修改",
      reason: `ZenMux(${z.id}) prompt=${z.prompt.value} USD/MTokens`,
    });
    rows.push({
      field: "outputPrice",
      current: model.outputPrice,
      suggested: z.completion.value,
      decision: model.outputPrice === z.completion.value ? "保持" : "建议修改",
      reason: `ZenMux(${z.id}) completion=${z.completion.value} USD/MTokens`,
    });
  } else {
    rows.push({
      field: "inputPrice",
      current: model.inputPrice,
      suggested: model.inputPrice,
      decision: "待确认",
      reason: canPriceFromZen
        ? `本文件币种为${currency}，ZenMux价格为USD，需官方价格页复核`
        : "ZenMux无稳定价格可用，需官方价格页复核",
    });
    rows.push({
      field: "outputPrice",
      current: model.outputPrice,
      suggested: model.outputPrice,
      decision: "待确认",
      reason: canPriceFromZen
        ? `本文件币种为${currency}，ZenMux价格为USD，需官方价格页复核`
        : "ZenMux无稳定价格可用，需官方价格页复核",
    });
  }

  rows.push({
    field: "capabilities",
    current: model.capabilities,
    suggested: model.capabilities,
    decision: typeof z?.reasoning === "boolean" ? "待确认" : "保持",
    reason: typeof z?.reasoning === "boolean"
      ? `ZenMux给出reasoning=${z.reasoning}，但capabilities是项目语义字段，需官方能力说明复核`
      : "ZenMux无明确能力映射差异",
  });

  rows.push({
    field: "defaultTemperature",
    current: model.defaultTemperature,
    suggested: model.defaultTemperature,
    decision: "待确认",
    reason: "官方通常不提供默认采样参数",
  });

  rows.push({
    field: "defaultTopP",
    current: model.defaultTopP,
    suggested: model.defaultTopP,
    decision: "待确认",
    reason: "官方通常不提供默认采样参数",
  });

  rows.push({
    field: "extra",
    current: model.extra,
    suggested: model.extra,
    decision: "待确认",
    reason: "扩展字段为本地schema，需业务侧定义",
  });

  return rows;
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

function folderByJson(relPath) {
  const base = path.basename(relPath, ".json");
  return path.join(OUT_ROOT, base);
}

async function main() {
  const zraw = JSON.parse(await fs.readFile(ZENMUX_FILE, "utf8"));
  const zen = (zraw.data || []).map(parseZen);
  const files = await listFiles();
  const generatedAt = new Date().toISOString();
  await fs.mkdir(OUT_ROOT, { recursive: true });

  const global = [];

  for (const abs of files) {
    const rel = path.relative(ROOT, abs);
    const doc = JSON.parse(await fs.readFile(abs, "utf8"));
    const provider = doc.provider || path.basename(abs, ".json");
    const models = Array.isArray(doc.models) ? doc.models : [];
    const outDir = folderByJson(rel);
    await fs.mkdir(outDir, { recursive: true });

    const detailed = [];
    const unresolved = [];
    detailed.push(`# 详细字段取值表 - ${rel}`);
    detailed.push("");
    detailed.push(`- provider: \`${provider}\``);
    detailed.push(`- priceCurrency: \`${doc.priceCurrency || "USD"}\``);
    detailed.push(`- generatedAt: \`${generatedAt}\``);
    detailed.push("");
    detailed.push("## 来源");
    detailed.push("");
    for (const d of OFFICIAL_DOCS[provider] || ["(待补充provider官方文档)"]) detailed.push(`- ${d}`);
    detailed.push("- https://zenmux.ai/models");
    detailed.push("- https://zenmux.ai/api/v1/models");
    detailed.push("");

    unresolved.push(`# 未确认字段报告 - ${rel}`);
    unresolved.push("");
    unresolved.push(`- provider: \`${provider}\``);
    unresolved.push(`- generatedAt: \`${generatedAt}\``);
    unresolved.push("");

    for (const m of models) {
      const match = matchWithCandidates(provider, m.modelName, zen);
      const rows = buildRows(doc, m, match);
      detailed.push(`## ${m.modelName}`);
      detailed.push("");
      detailed.push(`- ZenMux匹配级别: \`${match.tier}\``);
      if (match.matched) detailed.push(`- ZenMux命中: \`${match.matched.id}\``);
      detailed.push(`- ZenMux候选: ${quoteCsv((match.candidates || []).map((x) => x.id))}`);
      detailed.push("");
      detailed.push("| 字段 | 当前值 | 建议值 | 结论 | 依据/说明 |");
      detailed.push("|---|---|---|---|---|");
      for (const r of rows) {
        detailed.push(`| \`${r.field}\` | ${fmt(r.current)} | ${fmt(r.suggested)} | ${r.decision} | ${r.reason} |`);
      }
      detailed.push("");

      const pending = rows.filter((r) => r.decision === "待确认");
      if (pending.length) {
        unresolved.push(`## ${m.modelName}`);
        unresolved.push("");
        for (const p of pending) unresolved.push(`- \`${p.field}\`: ${p.reason}`);
        unresolved.push("");
      }
    }

    if (unresolved.length === 3) {
      unresolved.push("- (none)");
      unresolved.push("");
    }

    const detailedFile = path.join(outDir, "详细字段取值表.md");
    const unresolvedFile = path.join(outDir, "未确认字段报告.md");
    await fs.writeFile(detailedFile, `${detailed.join("\n")}\n`, "utf8");
    await fs.writeFile(unresolvedFile, `${unresolved.join("\n")}\n`, "utf8");

    global.push({
      file: rel,
      folder: path.relative(ROOT, outDir),
      detailed: path.relative(ROOT, detailedFile),
      unresolved: path.relative(ROOT, unresolvedFile),
      modelCount: models.length,
    });
  }

  await fs.writeFile(
    path.join(OUT_ROOT, "目录索引.json"),
    `${JSON.stringify(global, null, 2)}\n`,
    "utf8"
  );
  console.log(JSON.stringify({ files: global.length, out: OUT_ROOT }, null, 2));
}

await main();
