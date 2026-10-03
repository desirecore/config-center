# perplexity：官网与来源缺口单列

[总目录](../README.md) · [官方入口与读取状态](../../model-sources/providers/perplexity/SOURCES.md) · [核查原因和后续计划](../../model-sources/providers/perplexity/AUDIT.md)

本表从现有字段证明生成，不重新访问官网、不刷新核验日期、不改变模型数据。每个接入面单独计数。

## 未登记官方入口（0 条）

无该类记录。

## 未取得可读官网证据（0 条）

无该类记录。

## 入口有读取记录，但本条模型无字段证明（4 条）

| 模型 | 接入面 | 未登记证明的关键字段 | 官网入口/读取结果 |
| --- | --- | --- | --- |
| [`sonar-pro`](../../model-sources/providers/perplexity/models/sonar-pro.md) | [`compute/providers/perplexity.json`](../../../compute/providers/perplexity.json) | `contextWindow`、`extra.requestPricingPer1k.high`、`extra.requestPricingPer1k.low`、`extra.requestPricingPer1k.medium`、`inputPrice`、`maxOutputTokens`、`modelName`、`outputPrice` | [perplexity](../../model-sources/providers/perplexity/SOURCES.md#perplexity)：fetched |
| [`sonar-pro`](../../model-sources/providers/perplexity/models/sonar-pro.md) | [`compute/model-specs/perplexity.json`](../../../compute/model-specs/perplexity.json) | `id`、`spec.contextWindow`、`spec.maxOutputTokens` | [perplexity](../../model-sources/providers/perplexity/SOURCES.md#perplexity)：fetched |
| [`sonar-reasoning-pro`](../../model-sources/providers/perplexity/models/sonar-reasoning-pro.md) | [`compute/providers/perplexity.json`](../../../compute/providers/perplexity.json) | `contextWindow`、`extra.requestPricingPer1k.high`、`extra.requestPricingPer1k.low`、`extra.requestPricingPer1k.medium`、`inputPrice`、`maxOutputTokens`、`modelName`、`outputPrice` | [perplexity](../../model-sources/providers/perplexity/SOURCES.md#perplexity)：fetched |
| [`sonar-reasoning-pro`](../../model-sources/providers/perplexity/models/sonar-reasoning-pro.md) | [`compute/model-specs/perplexity.json`](../../../compute/model-specs/perplexity.json) | `id`、`spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.supportsReasoning` | [perplexity](../../model-sources/providers/perplexity/SOURCES.md#perplexity)：fetched |

## 仅确认 ID，参数来源未登记（2 条）

| 模型 | 接入面 | 未登记证明的关键字段 | 官网入口/读取结果 |
| --- | --- | --- | --- |
| [`sonar`](../../model-sources/providers/perplexity/models/sonar.md) | [`compute/providers/perplexity.json`](../../../compute/providers/perplexity.json) | `contextWindow`、`extra.requestPricingPer1k.high`、`extra.requestPricingPer1k.low`、`extra.requestPricingPer1k.medium`、`inputPrice`、`maxOutputTokens`、`outputPrice` | [perplexity](../../model-sources/providers/perplexity/SOURCES.md#perplexity)：fetched |
| [`sonar`](../../model-sources/providers/perplexity/models/sonar.md) | [`compute/model-specs/perplexity.json`](../../../compute/model-specs/perplexity.json) | `spec.contextWindow`、`spec.maxOutputTokens` | [perplexity](../../model-sources/providers/perplexity/SOURCES.md#perplexity)：fetched |

## 已有部分参数证明，仍需区分未证明字段（0 条）

无该类记录。

## 历史身份/参数不证明当前可用性（0 条）

无该类记录。

说明：缺少字段引用表示本仓尚未登记官方证明，不等于已证明数据错误。关键字段列表包括身份、数值限制、采样、价格与部分推理合同；不是全部 API 参数清单。routing、优先级、产品能力标签和预设启用状态不按供应商事实判错。保守兼容预算、未公开价格和历史参数的详细边界见原单模型文件。
