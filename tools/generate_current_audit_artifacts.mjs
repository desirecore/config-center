import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.env.CONFIG_CENTER_ROOT || process.cwd();
const ZENMUX_FILE = process.env.ZENMUX_FILE || "/tmp/zenmux-models.json";
const FIELD_TABLE_DIR = path.join(ROOT, "字段取值表");
const OUTPUT_DIR = path.join(ROOT, "outputs", "field-audit");

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
  moonshot: ["https://platform.moonshot.cn/docs/guide/overview", "https://platform.moonshot.cn/docs/pricing/chat"],
  zhipu: ["https://docs.bigmodel.cn/cn/guide/models/text/", "https://www.bigmodel.cn/pricing"],
  "zhipu-embedding": ["https://docs.bigmodel.cn/cn/guide/models/embedding"],
  dashscope: ["https://help.aliyun.com/zh/model-studio/getting-started/models", "https://help.aliyun.com/zh/model-studio/pricing"],
  minimax: ["https://platform.minimax.io/docs/api-reference/api-overview", "https://platform.minimax.io/docs/guides/pricing-paygo"],
  baichuan: ["https://platform.baichuan-ai.com/docs"],
  baidu: ["https://cloud.baidu.com/doc/qianfan/"],
  tencent: ["https://cloud.tencent.com/document/product/1729"],
  volcengine: ["https://www.volcengine.com/docs/82379"],
  xai: ["https://docs.x.ai/docs/models"],
  mistral: ["https://docs.mistral.ai/getting-started/models", "https://mistral.ai/pricing"],
  cohere: ["https://docs.cohere.com/docs/models", "https://cohere.com/pricing"],
  siliconflow: ["https://www.siliconflow.com/models", "https://siliconflow.cn/pricing"],
  perplexity: ["https://docs.perplexity.ai"],
  openrouter: ["https://openrouter.ai/models"],
  xunfei: ["https://www.xfyun.cn/doc/"],
};

function normalize(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[._/]/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function stripTail(value) {
  return value
    .replace(/-(latest|preview|exp|experimental|stable)$/g, "")
    .replace(/-\d{8}$/g, "")
    .replace(/-\d{6}$/g, "")
    .replace(/-\d{4}-\d{2}-\d{2}$/g, "");
}

function parseZenMuxModel(model) {
  const [vendor, ...rest] = String(model.id || "").split("/");
  const name = rest.join("/");
  const norm = normalize(name);
  return {
    id: model.id,
    vendor,
    modelName: name,
    norm,
    stripped: stripTail(norm),
    contextWindow: model.context_length,
    reasoning: model.capabilities?.reasoning,
    prompt: model.pricings?.prompt?.[0],
    completion: model.pricings?.completion?.[0],
  };
}

function jaccard(left, right) {
  const a = new Set(left.split("-").filter(Boolean));
  const b = new Set(right.split("-").filter(Boolean));
  let overlap = 0;
  for (const item of a) if (b.has(item)) overlap += 1;
  return overlap / (new Set([...a, ...b]).size || 1);
}

function matchModel(provider, modelName, zenModels) {
  const owners = PROVIDER_OWNED_BY[provider] || [provider];
  const pool = zenModels.filter((model) => owners.includes(model.vendor));
  const localNorm = normalize(modelName);
  const localStripped = stripTail(localNorm);

  const exact = pool.filter((model) => model.modelName === modelName);
  if (exact.length === 1) return { tier: "exact", matched: exact[0], candidates: exact };

  const normalized = pool.filter((model) => model.norm === localNorm);
  if (normalized.length === 1) return { tier: "normalized", matched: normalized[0], candidates: normalized };

  const stripped = pool.filter((model) => model.stripped === localStripped);
  if (stripped.length === 1) return { tier: "stripped", matched: stripped[0], candidates: stripped };

  const candidates = pool
    .map((model) => ({ model, score: jaccard(localNorm, model.norm) }))
    .filter((item) => item.score >= 0.35)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map((item) => item.model);

  if (candidates.length === 1) return { tier: "similar", matched: candidates[0], candidates };
  return { tier: candidates.length ? "ambiguous" : "none", matched: null, candidates };
}

function formatValue(value) {
  if (value === undefined) return "(缺省)";
  return `\`${JSON.stringify(value)}\``;
}

function formatList(values) {
  if (!values?.length) return "(none)";
  return values.map((value) => `\`${value}\``).join("、");
}

function reportFolderName(relativePath) {
  return relativePath
    .replace(/^compute\//, "")
    .replaceAll("/", "__")
    .replace(/\.json$/, "");
}

async function listJsonFiles() {
  const files = [];
  for (const dir of TARGET_DIRS) {
    for (const fileName of await fs.readdir(dir)) {
      if (!fileName.endsWith(".json") || fileName.startsWith("_")) continue;
      files.push(path.join(dir, fileName));
    }
  }
  return files.sort();
}

async function readZenMuxModels() {
  try {
    const raw = JSON.parse(await fs.readFile(ZENMUX_FILE, "utf8"));
    return (raw.data || []).map(parseZenMuxModel);
  } catch {
    return [];
  }
}

function buildFieldRows(doc, model, match) {
  const z = match.matched;
  return [
    {
      field: "modelName",
      current: model.modelName,
      suggested: z ? z.modelName : model.modelName,
      decision: z && ["exact", "normalized"].includes(match.tier) ? "保持" : "待确认",
      reason: z ? `ZenMux匹配(${match.tier}): ${z.id}` : "ZenMux无稳定匹配，需官方文档确认",
    },
    {
      field: "displayName",
      current: model.displayName,
      suggested: model.displayName,
      decision: "保持",
      reason: "展示字段，以本项目产品命名策略为准",
    },
    {
      field: "serviceType",
      current: model.serviceType,
      suggested: model.serviceType,
      decision: "保持",
      reason: "服务路由字段，以本项目分类约定为准",
    },
    {
      field: "contextWindow",
      current: model.contextWindow,
      suggested: z?.contextWindow ?? model.contextWindow,
      decision: typeof z?.contextWindow === "number" ? "待确认" : "待确认",
      reason: typeof z?.contextWindow === "number"
        ? `ZenMux给出context_length=${z.contextWindow}，最终以官方模型规格页确认`
        : "ZenMux无context可用，需官方规格页确认",
    },
    {
      field: "maxOutputTokens",
      current: model.maxOutputTokens,
      suggested: model.maxOutputTokens,
      decision: "待确认",
      reason: "ZenMux列表未提供统一max output字段，需官方模型详情页确认",
    },
    {
      field: "inputPrice",
      current: model.inputPrice,
      suggested: model.inputPrice,
      decision: "待确认",
      reason: `当前文件币种为${doc.priceCurrency || "USD"}，价格需官方价格页确认`,
    },
    {
      field: "outputPrice",
      current: model.outputPrice,
      suggested: model.outputPrice,
      decision: "待确认",
      reason: `当前文件币种为${doc.priceCurrency || "USD"}，价格需官方价格页确认`,
    },
    {
      field: "capabilities",
      current: model.capabilities,
      suggested: model.capabilities,
      decision: "保持",
      reason: "能力标签是本项目语义字段，不直接由第三方列表覆盖",
    },
    {
      field: "defaultTemperature",
      current: model.defaultTemperature,
      suggested: model.defaultTemperature,
      decision: model.defaultTemperature === null ? "建议修改" : "保持",
      reason: model.defaultTemperature === null
        ? "schema拒绝null；不支持采样参数时应省略字段"
        : "当前值与schema兼容；是否采用默认采样值需官方文档确认",
    },
    {
      field: "defaultTopP",
      current: model.defaultTopP,
      suggested: model.defaultTopP,
      decision: model.defaultTopP === null ? "建议修改" : "保持",
      reason: model.defaultTopP === null
        ? "schema拒绝null；不支持采样参数时应省略字段"
        : "当前值与schema兼容；是否采用默认采样值需官方文档确认",
    },
    {
      field: "extra",
      current: model.extra,
      suggested: model.extra,
      decision: "待确认",
      reason: "扩展字段为本项目schema，需按业务含义和官方补充信息复核",
    },
  ];
}

async function main() {
  const generatedAt = new Date().toISOString();
  const zenModels = await readZenMuxModels();
  const files = await listJsonFiles();
  await fs.mkdir(FIELD_TABLE_DIR, { recursive: true });
  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  const allModels = [];
  const skipped = [];
  const pendingByProvider = new Map();
  const fieldIndex = [];
  const nullSampling = [];

  for (const absolutePath of files) {
    const relativePath = path.relative(ROOT, absolutePath);
    const doc = JSON.parse(await fs.readFile(absolutePath, "utf8"));
    const provider = doc.provider || path.basename(absolutePath, ".json");
    const outDir = path.join(FIELD_TABLE_DIR, reportFolderName(relativePath));
    await fs.mkdir(outDir, { recursive: true });

    const detailed = [
      `# 详细字段取值表 - ${relativePath}`,
      "",
      `- provider: \`${provider}\``,
      `- priceCurrency: \`${doc.priceCurrency || "USD"}\``,
      `- generatedAt: \`${generatedAt}\``,
      "",
      "## 来源",
      "",
      ...(OFFICIAL_DOCS[provider] || ["(待补充provider官方文档)"]).map((item) => `- ${item}`),
      "- https://zenmux.ai/models",
      "- https://zenmux.ai/api/v1/models",
      "",
    ];
    const unresolved = [
      `# 未确认字段报告 - ${relativePath}`,
      "",
      `- provider: \`${provider}\``,
      `- generatedAt: \`${generatedAt}\``,
      "",
    ];

    const models = Array.isArray(doc.models) ? doc.models : [];
    for (const model of models) {
      const match = matchModel(provider, model.modelName, zenModels);
      const rows = buildFieldRows(doc, model, match);
      const status = match.matched
        ? `matched-${match.tier}`
        : match.tier === "ambiguous" ? "ambiguous" : "no-match";

      allModels.push({
        file: relativePath,
        provider,
        modelName: model.modelName,
        displayName: model.displayName,
        serviceType: model.serviceType,
        capabilities: model.capabilities,
        contextWindow: model.contextWindow,
        maxOutputTokens: model.maxOutputTokens,
        inputPrice: model.inputPrice,
        outputPrice: model.outputPrice,
        defaultTemperature: model.defaultTemperature,
        defaultTopP: model.defaultTopP,
        matchTier: match.tier,
        zenmux: match.matched?.id ?? null,
      });

      if (model.defaultTemperature === null) nullSampling.push(`${relativePath}::${model.modelName}::defaultTemperature`);
      if (model.defaultTopP === null) nullSampling.push(`${relativePath}::${model.modelName}::defaultTopP`);

      skipped.push({
        file: relativePath,
        provider,
        modelName: model.modelName,
        reason: status,
        zenmux: match.matched?.id ?? null,
        candidates: match.candidates.map((item) => item.id),
      });

      if (!match.matched || match.tier === "ambiguous") {
        const bucket = pendingByProvider.get(provider) || [];
        bucket.push({
          file: relativePath,
          modelName: model.modelName,
          reason: match.tier === "ambiguous"
            ? `ambiguous match candidates: ${match.candidates.map((item) => item.id).join(",")}`
            : "no ZenMux match",
        });
        pendingByProvider.set(provider, bucket);
      }

      detailed.push(`## ${model.modelName}`);
      detailed.push("");
      detailed.push(`- ZenMux匹配级别: \`${match.tier}\``);
      if (match.matched) detailed.push(`- ZenMux命中: \`${match.matched.id}\``);
      detailed.push(`- ZenMux候选: ${formatList(match.candidates.map((item) => item.id))}`);
      detailed.push("");
      detailed.push("| 字段 | 当前值 | 建议值 | 结论 | 依据/说明 |");
      detailed.push("|---|---|---|---|---|");
      for (const row of rows) {
        detailed.push(`| \`${row.field}\` | ${formatValue(row.current)} | ${formatValue(row.suggested)} | ${row.decision} | ${row.reason} |`);
      }
      detailed.push("");

      const pendingRows = rows.filter((row) => row.decision === "待确认" || row.decision === "建议修改");
      if (pendingRows.length) {
        unresolved.push(`## ${model.modelName}`);
        unresolved.push("");
        for (const row of pendingRows) unresolved.push(`- \`${row.field}\`: ${row.reason}`);
        unresolved.push("");
      }
    }

    if (unresolved.length === 4) {
      unresolved.push("- (none)");
      unresolved.push("");
    }

    const detailedFile = path.join(outDir, "详细字段取值表.md");
    const unresolvedFile = path.join(outDir, "未确认字段报告.md");
    await fs.writeFile(detailedFile, `${detailed.join("\n")}\n`, "utf8");
    await fs.writeFile(unresolvedFile, `${unresolved.join("\n")}\n`, "utf8");
    fieldIndex.push({
      file: relativePath,
      provider,
      modelCount: models.length,
      folder: path.relative(ROOT, outDir),
      detailed: path.relative(ROOT, detailedFile),
      unresolved: path.relative(ROOT, unresolvedFile),
    });
  }

  const matchedModels = allModels.filter((item) => item.zenmux).length;
  const summary = {
    actualModels: allModels.length,
    sourceModels: zenModels.length,
    matchedModels,
    unmatchedModels: allModels.filter((item) => item.matchTier === "none").length,
    ambiguousModels: allModels.filter((item) => item.matchTier === "ambiguous").length,
    nullSamplingFields: nullSampling.length,
    updatedModels: 0,
    updatedFiles: 0,
    skippedModels: allModels.length,
  };

  await fs.writeFile(
    path.join(FIELD_TABLE_DIR, "目录索引.json"),
    `${JSON.stringify(fieldIndex, null, 2)}\n`,
    "utf8",
  );

  const reportJson = {
    source: ZENMUX_FILE,
    generatedAt,
    summary,
    updated: [],
    skipped,
    models: allModels,
    nullSampling,
  };
  await fs.writeFile(
    path.join(OUTPUT_DIR, "zenmux-sync-report.json"),
    `${JSON.stringify(reportJson, null, 2)}\n`,
    "utf8",
  );

  const reportLines = [
    "# ZenMux Sync Report",
    "",
    `- source: \`${ZENMUX_FILE}\``,
    `- generatedAt: \`${generatedAt}\``,
    `- actualModels: **${summary.actualModels}**`,
    `- sourceModels: **${summary.sourceModels}**`,
    `- matchedModels: **${summary.matchedModels}**`,
    `- unmatchedModels: **${summary.unmatchedModels}**`,
    `- ambiguousModels: **${summary.ambiguousModels}**`,
    `- nullSamplingFields: **${summary.nullSamplingFields}**`,
    `- updatedModels: **${summary.updatedModels}**`,
    `- updatedFiles: **${summary.updatedFiles}**`,
    "",
    "## Field Coverage",
    "",
    "- synced: none; this audit run is read-only and does not mutate JSON config.",
    "- reviewed from JSON: `modelName`, `displayName`, `serviceType`, `contextWindow`, `maxOutputTokens`, `inputPrice`, `outputPrice`, `capabilities`, `defaultTemperature`, `defaultTopP`, `extra`.",
    "- guardrail: `defaultTemperature` and `defaultTopP` must be omitted or numbers; `null` is invalid.",
    "",
    "## Updated Models",
    "",
    "- (none)",
    "",
    "## Skipped / Reviewed Models",
    "",
    ...skipped.map((item) => {
      const detail = item.zenmux
        ? `${item.reason}:${item.zenmux}`
        : item.candidates.length ? `${item.reason}:${item.candidates.join(",")}` : item.reason;
      return `- ${item.file} :: ${item.modelName} -> ${detail}`;
    }),
    "",
  ];
  await fs.writeFile(path.join(OUTPUT_DIR, "zenmux-sync-report.md"), `${reportLines.join("\n")}\n`, "utf8");

  const checklist = [
    "# Official Review Checklist",
    "",
    `GeneratedAt: ${generatedAt}`,
    `Source: ${path.join(OUTPUT_DIR, "zenmux-sync-report.json")}`,
    "",
    "Purpose: verify unresolved models with official vendor docs before write-back.",
    "",
    "## Summary",
    "",
    `- actual models: **${summary.actualModels}**`,
    `- unresolved models: **${summary.unmatchedModels + summary.ambiguousModels}**`,
    `- providers involved: **${pendingByProvider.size}**`,
    `- null sampling fields: **${summary.nullSamplingFields}**`,
    "",
  ];
  for (const [provider, items] of [...pendingByProvider.entries()].sort(([a], [b]) => a.localeCompare(b))) {
    checklist.push(`## Provider: ${provider}`);
    checklist.push("- official docs:");
    for (const doc of OFFICIAL_DOCS[provider] || ["(add link manually)"]) checklist.push(`  - ${doc}`);
    checklist.push("- pending models:");
    for (const item of items) checklist.push(`  - \`${item.modelName}\` (${item.file}) -> ${item.reason}`);
    checklist.push("");
  }
  checklist.push("## Field-by-Field Verification Rule");
  checklist.push("");
  checklist.push("- `modelName`: must exactly match provider API model ID or official alias rule.");
  checklist.push("- `contextWindow`: use official model spec limit.");
  checklist.push("- `maxOutputTokens`: use official output cap; do not infer from context.");
  checklist.push("- `inputPrice`/`outputPrice`: use official published API pricing and the provider currency.");
  checklist.push("- `capabilities`: project taxonomy field; keep local semantics unless official docs clearly contradict the capability.");
  checklist.push("- `defaultTemperature`/`defaultTopP`: only fill with numeric values when provider docs define a safe default; omit unsupported fields instead of using `null`.");
  await fs.writeFile(path.join(OUTPUT_DIR, "official-review-checklist.md"), `${checklist.join("\n")}\n`, "utf8");

  const riskLines = [
    "# ZenMux Risk Audit",
    "",
    `GeneratedAt: ${generatedAt}`,
    `Source: ${path.join(OUTPUT_DIR, "zenmux-sync-report.json")}`,
    "",
    `- HIGH: ${summary.nullSamplingFields > 0 ? 1 : 0}`,
    `- MEDIUM: ${summary.ambiguousModels}`,
    `- LOW: ${summary.unmatchedModels}`,
    "",
    "## Notes",
    "",
    "- HIGH covers schema-breaking sampling defaults such as `null`.",
    "- MEDIUM covers ambiguous third-party model matches.",
    "- LOW covers models without a ZenMux match; these require official-doc review but do not by themselves indicate JSON invalidity.",
  ];
  await fs.writeFile(path.join(OUTPUT_DIR, "zenmux-risk-audit.md"), `${riskLines.join("\n")}\n`, "utf8");

  const detailedLines = [
    "# ZenMux Sync Detailed Report",
    "",
    `GeneratedAt: ${generatedAt}`,
    "",
    "## Summary",
    "",
    `- actualModels: ${summary.actualModels}`,
    `- sourceModels: ${summary.sourceModels}`,
    `- matchedModels: ${summary.matchedModels}`,
    `- unmatchedModels: ${summary.unmatchedModels}`,
    `- ambiguousModels: ${summary.ambiguousModels}`,
    `- nullSamplingFields: ${summary.nullSamplingFields}`,
    "",
    "## Current Model Inventory",
    "",
    "| File | Provider | Model | Match | ZenMux |",
    "|---|---|---|---|---|",
    ...allModels.map((item) => `| ${item.file} | ${item.provider} | \`${item.modelName}\` | ${item.matchTier} | ${item.zenmux ? `\`${item.zenmux}\`` : ""} |`),
  ];
  await fs.writeFile(path.join(OUTPUT_DIR, "zenmux-sync-detailed.md"), `${detailedLines.join("\n")}\n`, "utf8");

  console.log(JSON.stringify({ generatedAt, summary, fieldTableFiles: fieldIndex.length }, null, 2));
}

await main();
