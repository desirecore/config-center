# moonshot：官网与来源缺口单列

[总目录](../README.md) · [官方入口与读取状态](../../model-sources/providers/moonshot/SOURCES.md) · [核查原因和后续计划](../../model-sources/providers/moonshot/AUDIT.md)

本表从现有字段证明生成，不重新访问官网、不刷新核验日期、不改变模型数据。每个接入面单独计数。

## 未登记官方入口（0 条）

无该类记录。

## 未取得可读官网证据（0 条）

无该类记录。

## 入口有读取记录，但本条模型无字段证明（14 条）

| 模型 | 接入面 | 未登记证明的关键字段 | 官网入口/读取结果 |
| --- | --- | --- | --- |
| [`kimi-for-coding`](../../model-sources/providers/moonshot/models/kimi-for-coding.md) | [`compute/coding-plans/moonshot-coding.json`](../../../compute/coding-plans/moonshot-coding.json) | `contextWindow`、`maxOutputTokens`、`modelName` | [kimi-k3](../../model-sources/providers/moonshot/SOURCES.md#kimi-k3)：fetched |
| [`kimi-k2-thinking`](../../model-sources/providers/moonshot/models/kimi-k2-thinking.md) | [`compute/model-specs/moonshot.json`](../../../compute/model-specs/moonshot.json) | `id`、`spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.supportsReasoning` | [kimi-k3](../../model-sources/providers/moonshot/SOURCES.md#kimi-k3)：fetched |
| [`kimi-k2.5`](../../model-sources/providers/moonshot/models/kimi-k2.5.md) | [`compute/providers/moonshot.json`](../../../compute/providers/moonshot.json) | `contextWindow`、`defaultTemperature`、`defaultTopP`、`extra.cacheHitPrice`、`inputPrice`、`maxOutputTokens`、`modelName`、`outputPrice` | [kimi-k3](../../model-sources/providers/moonshot/SOURCES.md#kimi-k3)：fetched |
| [`kimi-k2.5`](../../model-sources/providers/moonshot/models/kimi-k2.5.md) | [`compute/model-specs/moonshot.json`](../../../compute/model-specs/moonshot.json) | `id`、`spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.supportsReasoning` | [kimi-k3](../../model-sources/providers/moonshot/SOURCES.md#kimi-k3)：fetched |
| [`kimi-k2`](../../model-sources/providers/moonshot/models/kimi-k2.md) | [`compute/model-specs/moonshot.json`](../../../compute/model-specs/moonshot.json) | `id`、`spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.supportsReasoning` | [kimi-pricing](../../model-sources/providers/moonshot/SOURCES.md#kimi-pricing)：fetched |
| [`moonshot-v1-128k-vision-preview`](../../model-sources/providers/moonshot/models/moonshot-v1-128k-vision-preview.md) | [`compute/providers/moonshot.json`](../../../compute/providers/moonshot.json) | `contextWindow`、`defaultTemperature`、`defaultTopP`、`inputPrice`、`maxOutputTokens`、`modelName`、`outputPrice` | [kimi-k3](../../model-sources/providers/moonshot/SOURCES.md#kimi-k3)：fetched |
| [`moonshot-v1-128k`](../../model-sources/providers/moonshot/models/moonshot-v1-128k.md) | [`compute/providers/moonshot.json`](../../../compute/providers/moonshot.json) | `contextWindow`、`defaultTemperature`、`defaultTopP`、`inputPrice`、`maxOutputTokens`、`modelName`、`outputPrice` | [kimi-k3](../../model-sources/providers/moonshot/SOURCES.md#kimi-k3)：fetched |
| [`moonshot-v1-128k`](../../model-sources/providers/moonshot/models/moonshot-v1-128k.md) | [`compute/model-specs/moonshot.json`](../../../compute/model-specs/moonshot.json) | `id`、`spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens` | [kimi-k3](../../model-sources/providers/moonshot/SOURCES.md#kimi-k3)：fetched |
| [`moonshot-v1-32k-vision-preview`](../../model-sources/providers/moonshot/models/moonshot-v1-32k-vision-preview.md) | [`compute/providers/moonshot.json`](../../../compute/providers/moonshot.json) | `contextWindow`、`defaultTemperature`、`defaultTopP`、`inputPrice`、`maxOutputTokens`、`modelName`、`outputPrice` | [kimi-k3](../../model-sources/providers/moonshot/SOURCES.md#kimi-k3)：fetched |
| [`moonshot-v1-32k`](../../model-sources/providers/moonshot/models/moonshot-v1-32k.md) | [`compute/providers/moonshot.json`](../../../compute/providers/moonshot.json) | `contextWindow`、`defaultTemperature`、`defaultTopP`、`inputPrice`、`maxOutputTokens`、`modelName`、`outputPrice` | [kimi-k3](../../model-sources/providers/moonshot/SOURCES.md#kimi-k3)：fetched |
| [`moonshot-v1-32k`](../../model-sources/providers/moonshot/models/moonshot-v1-32k.md) | [`compute/model-specs/moonshot.json`](../../../compute/model-specs/moonshot.json) | `id`、`spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens` | [kimi-k3](../../model-sources/providers/moonshot/SOURCES.md#kimi-k3)：fetched |
| [`moonshot-v1-8k-vision-preview`](../../model-sources/providers/moonshot/models/moonshot-v1-8k-vision-preview.md) | [`compute/providers/moonshot.json`](../../../compute/providers/moonshot.json) | `contextWindow`、`defaultTemperature`、`defaultTopP`、`inputPrice`、`maxOutputTokens`、`modelName`、`outputPrice` | [kimi-k3](../../model-sources/providers/moonshot/SOURCES.md#kimi-k3)：fetched |
| [`moonshot-v1-8k`](../../model-sources/providers/moonshot/models/moonshot-v1-8k.md) | [`compute/providers/moonshot.json`](../../../compute/providers/moonshot.json) | `contextWindow`、`defaultTemperature`、`defaultTopP`、`inputPrice`、`maxOutputTokens`、`modelName`、`outputPrice` | [kimi-k3](../../model-sources/providers/moonshot/SOURCES.md#kimi-k3)：fetched |
| [`moonshot-v1-8k`](../../model-sources/providers/moonshot/models/moonshot-v1-8k.md) | [`compute/model-specs/moonshot.json`](../../../compute/model-specs/moonshot.json) | `id`、`spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens` | [kimi-k3](../../model-sources/providers/moonshot/SOURCES.md#kimi-k3)：fetched |

## 仅确认 ID，参数来源未登记（0 条）

无该类记录。

## 已有部分参数证明，仍需区分未证明字段（7 条）

| 模型 | 接入面 | 未登记证明的关键字段 | 官网入口/读取结果 |
| --- | --- | --- | --- |
| [`kimi-k2.6`](../../model-sources/providers/moonshot/models/kimi-k2.6.md) | [`compute/providers/moonshot.json`](../../../compute/providers/moonshot.json) | `defaultTopP`、`maxOutputTokens` | [kimi-pricing](../../model-sources/providers/moonshot/SOURCES.md#kimi-pricing)：fetched；[kimi-k26](../../model-sources/providers/moonshot/SOURCES.md#kimi-k26)：fetched |
| [`kimi-k2.6`](../../model-sources/providers/moonshot/models/kimi-k2.6.md) | [`compute/model-specs/moonshot.json`](../../../compute/model-specs/moonshot.json) | `spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.supportsReasoning` | [kimi-pricing](../../model-sources/providers/moonshot/SOURCES.md#kimi-pricing)：fetched |
| [`kimi-k2.7-code-highspeed`](../../model-sources/providers/moonshot/models/kimi-k2.7-code-highspeed.md) | [`compute/providers/moonshot.json`](../../../compute/providers/moonshot.json) | `defaultTopP`、`maxOutputTokens` | [kimi-pricing](../../model-sources/providers/moonshot/SOURCES.md#kimi-pricing)：fetched；[kimi-k27](../../model-sources/providers/moonshot/SOURCES.md#kimi-k27)：fetched |
| [`kimi-k2.7-code`](../../model-sources/providers/moonshot/models/kimi-k2.7-code.md) | [`compute/providers/moonshot.json`](../../../compute/providers/moonshot.json) | `defaultTopP`、`maxOutputTokens` | [kimi-pricing](../../model-sources/providers/moonshot/SOURCES.md#kimi-pricing)：fetched；[kimi-k27](../../model-sources/providers/moonshot/SOURCES.md#kimi-k27)：fetched |
| [`kimi-k2.7-code`](../../model-sources/providers/moonshot/models/kimi-k2.7-code.md) | [`compute/model-specs/moonshot.json`](../../../compute/model-specs/moonshot.json) | `spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.supportsReasoning` | [kimi-pricing](../../model-sources/providers/moonshot/SOURCES.md#kimi-pricing)：fetched |
| [`kimi-k3`](../../model-sources/providers/moonshot/models/kimi-k3.md) | [`compute/providers/moonshot.json`](../../../compute/providers/moonshot.json) | 已登记关键字段都有证明；其他合同限制仍按原记录复核 | [kimi-pricing](../../model-sources/providers/moonshot/SOURCES.md#kimi-pricing)：fetched；[kimi-k3](../../model-sources/providers/moonshot/SOURCES.md#kimi-k3)：fetched |
| [`kimi-k3`](../../model-sources/providers/moonshot/models/kimi-k3.md) | [`compute/model-specs/moonshot.json`](../../../compute/model-specs/moonshot.json) | `spec.supportsReasoning` | [kimi-pricing](../../model-sources/providers/moonshot/SOURCES.md#kimi-pricing)：fetched；[kimi-k3](../../model-sources/providers/moonshot/SOURCES.md#kimi-k3)：fetched |

## 历史身份/参数不证明当前可用性（0 条）

无该类记录。

说明：缺少字段引用表示本仓尚未登记官方证明，不等于已证明数据错误。关键字段列表包括身份、数值限制、采样、价格与部分推理合同；不是全部 API 参数清单。routing、优先级、产品能力标签和预设启用状态不按供应商事实判错。保守兼容预算、未公开价格和历史参数的详细边界见原单模型文件。
