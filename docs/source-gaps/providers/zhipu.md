# zhipu：官网与来源缺口单列

[总目录](../README.md) · [官方入口与读取状态](../../model-sources/providers/zhipu/SOURCES.md) · [核查原因和后续计划](../../model-sources/providers/zhipu/AUDIT.md)

本表从现有字段证明生成，不重新访问官网、不刷新核验日期、不改变模型数据。每个接入面单独计数。

## 未登记官方入口（0 条）

无该类记录。

## 未取得可读官网证据（0 条）

无该类记录。

## 入口有读取记录，但本条模型无字段证明（3 条）

| 模型 | 接入面 | 未登记证明的关键字段 | 官网入口/读取结果 |
| --- | --- | --- | --- |
| [`glm-4.7-thinking`](../../model-sources/providers/zhipu/models/glm-4.7-thinking.md) | [`compute/model-specs/zhipu.json`](../../../compute/model-specs/zhipu.json) | `id`、`spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.supportsReasoning` | [glm53](../../model-sources/providers/zhipu/SOURCES.md#glm53)：fetched |
| [`glm-5`](../../model-sources/providers/zhipu/models/glm-5.md) | [`compute/providers/zhipu.json`](../../../compute/providers/zhipu.json) | `contextWindow`、`defaultTemperature`、`defaultTopP`、`extra.cacheHitPrice`、`extra.cacheStoragePrice`、`extra.pricingTiers`、`inputPrice`、`maxOutputTokens`、`modelName`、`outputPrice` | [glm53](../../model-sources/providers/zhipu/SOURCES.md#glm53)：fetched |
| [`glm-5`](../../model-sources/providers/zhipu/models/glm-5.md) | [`compute/model-specs/zhipu.json`](../../../compute/model-specs/zhipu.json) | `id`、`spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.supportsReasoning` | [glm53](../../model-sources/providers/zhipu/SOURCES.md#glm53)：fetched |

## 仅确认 ID，参数来源未登记（18 条）

| 模型 | 接入面 | 未登记证明的关键字段 | 官网入口/读取结果 |
| --- | --- | --- | --- |
| [`embedding-3`](../../model-sources/providers/zhipu/models/embedding-3.md) | [`compute/providers/zhipu-embedding.json`](../../../compute/providers/zhipu-embedding.json) | `contextWindow`、`inputPrice` | [glm-pricing](../../model-sources/providers/zhipu/SOURCES.md#glm-pricing)：fetched |
| [`embedding-3`](../../model-sources/providers/zhipu/models/embedding-3.md) | [`compute/model-specs/zhipu.json`](../../../compute/model-specs/zhipu.json) | `spec.contextWindow` | [glm-pricing](../../model-sources/providers/zhipu/SOURCES.md#glm-pricing)：fetched |
| [`glm-4.6`](../../model-sources/providers/zhipu/models/glm-4.6.md) | [`compute/providers/zhipu.json`](../../../compute/providers/zhipu.json) | `contextWindow`、`defaultTemperature`、`defaultTopP`、`extra.cacheHitPrice`、`inputPrice`、`maxOutputTokens`、`outputPrice` | [glm-pricing](../../model-sources/providers/zhipu/SOURCES.md#glm-pricing)：fetched |
| [`glm-4.6`](../../model-sources/providers/zhipu/models/glm-4.6.md) | [`compute/model-specs/zhipu.json`](../../../compute/model-specs/zhipu.json) | `spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.supportsReasoning` | [glm-pricing](../../model-sources/providers/zhipu/SOURCES.md#glm-pricing)：fetched；[zhipu-glm-4-6-page](../../model-sources/providers/zhipu/SOURCES.md#zhipu-glm-4-6-page)：fetched |
| [`glm-4.6v`](../../model-sources/providers/zhipu/models/glm-4.6v.md) | [`compute/providers/zhipu.json`](../../../compute/providers/zhipu.json) | `contextWindow`、`defaultTemperature`、`defaultTopP`、`extra.cacheHitPrice`、`extra.cacheStoragePrice`、`extra.pricingTiers`、`inputPrice`、`maxOutputTokens`、`outputPrice` | [glm-pricing](../../model-sources/providers/zhipu/SOURCES.md#glm-pricing)：fetched |
| [`glm-4.6v`](../../model-sources/providers/zhipu/models/glm-4.6v.md) | [`compute/model-specs/zhipu.json`](../../../compute/model-specs/zhipu.json) | `spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens` | [glm-pricing](../../model-sources/providers/zhipu/SOURCES.md#glm-pricing)：fetched |
| [`glm-4.7-flashx`](../../model-sources/providers/zhipu/models/glm-4.7-flashx.md) | [`compute/providers/zhipu.json`](../../../compute/providers/zhipu.json) | `contextWindow`、`defaultTemperature`、`defaultTopP`、`extra.cacheHitPrice`、`extra.cacheStoragePrice`、`inputPrice`、`maxOutputTokens`、`outputPrice` | [glm-pricing](../../model-sources/providers/zhipu/SOURCES.md#glm-pricing)：fetched；[zhipu-glm-4-7-page](../../model-sources/providers/zhipu/SOURCES.md#zhipu-glm-4-7-page)：fetched；[zhipu-model-overview](../../model-sources/providers/zhipu/SOURCES.md#zhipu-model-overview)：fetched |
| [`glm-4.7`](../../model-sources/providers/zhipu/models/glm-4.7.md) | [`compute/providers/zhipu.json`](../../../compute/providers/zhipu.json) | `contextWindow`、`defaultTemperature`、`defaultTopP`、`extra.cacheHitPrice`、`extra.cacheStoragePrice`、`extra.pricingTiers`、`inputPrice`、`maxOutputTokens`、`outputPrice` | [glm-pricing](../../model-sources/providers/zhipu/SOURCES.md#glm-pricing)：fetched |
| [`glm-4.7`](../../model-sources/providers/zhipu/models/glm-4.7.md) | [`compute/coding-plans/zhipu-coding.json`](../../../compute/coding-plans/zhipu-coding.json) | `contextWindow`、`maxOutputTokens` | [glm-pricing](../../model-sources/providers/zhipu/SOURCES.md#glm-pricing)：fetched |
| [`glm-4.7`](../../model-sources/providers/zhipu/models/glm-4.7.md) | [`compute/model-specs/zhipu.json`](../../../compute/model-specs/zhipu.json) | `spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.supportsReasoning` | [glm-pricing](../../model-sources/providers/zhipu/SOURCES.md#glm-pricing)：fetched |
| [`glm-5-turbo`](../../model-sources/providers/zhipu/models/glm-5-turbo.md) | [`compute/providers/zhipu.json`](../../../compute/providers/zhipu.json) | `contextWindow`、`defaultTemperature`、`defaultTopP`、`extra.cacheHitPrice`、`extra.cacheStoragePrice`、`extra.pricingTiers`、`inputPrice`、`maxOutputTokens`、`outputPrice` | [glm-pricing](../../model-sources/providers/zhipu/SOURCES.md#glm-pricing)：fetched |
| [`glm-5-turbo`](../../model-sources/providers/zhipu/models/glm-5-turbo.md) | [`compute/coding-plans/zhipu-coding.json`](../../../compute/coding-plans/zhipu-coding.json) | `contextWindow`、`maxOutputTokens` | [glm-pricing](../../model-sources/providers/zhipu/SOURCES.md#glm-pricing)：fetched |
| [`glm-5-turbo`](../../model-sources/providers/zhipu/models/glm-5-turbo.md) | [`compute/model-specs/zhipu.json`](../../../compute/model-specs/zhipu.json) | `spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.supportsReasoning` | [glm-pricing](../../model-sources/providers/zhipu/SOURCES.md#glm-pricing)：fetched |
| [`glm-5.1`](../../model-sources/providers/zhipu/models/glm-5.1.md) | [`compute/providers/zhipu.json`](../../../compute/providers/zhipu.json) | `contextWindow`、`defaultTemperature`、`defaultTopP`、`extra.cacheHitPrice`、`extra.cacheStoragePrice`、`extra.pricingTiers`、`inputPrice`、`maxOutputTokens`、`outputPrice` | [glm-pricing](../../model-sources/providers/zhipu/SOURCES.md#glm-pricing)：fetched |
| [`glm-5.1`](../../model-sources/providers/zhipu/models/glm-5.1.md) | [`compute/model-specs/zhipu.json`](../../../compute/model-specs/zhipu.json) | `spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.supportsReasoning` | [glm-pricing](../../model-sources/providers/zhipu/SOURCES.md#glm-pricing)：fetched |
| [`glm-5.2`](../../model-sources/providers/zhipu/models/glm-5.2.md) | [`compute/model-specs/zhipu.json`](../../../compute/model-specs/zhipu.json) | `spec.contextWindow`、`spec.maxOutputTokens`、`spec.supportsReasoning` | [glm53](../../model-sources/providers/zhipu/SOURCES.md#glm53)：fetched |
| [`glm-5v-turbo`](../../model-sources/providers/zhipu/models/glm-5v-turbo.md) | [`compute/providers/zhipu.json`](../../../compute/providers/zhipu.json) | `contextWindow`、`defaultTemperature`、`defaultTopP`、`extra.cacheHitPrice`、`extra.cacheStoragePrice`、`extra.pricingTiers`、`inputPrice`、`maxOutputTokens`、`outputPrice` | [glm-pricing](../../model-sources/providers/zhipu/SOURCES.md#glm-pricing)：fetched |
| [`glm-5v-turbo`](../../model-sources/providers/zhipu/models/glm-5v-turbo.md) | [`compute/model-specs/zhipu.json`](../../../compute/model-specs/zhipu.json) | `spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.supportsReasoning` | [glm-pricing](../../model-sources/providers/zhipu/SOURCES.md#glm-pricing)：fetched |

## 已有部分参数证明，仍需区分未证明字段（10 条）

| 模型 | 接入面 | 未登记证明的关键字段 | 官网入口/读取结果 |
| --- | --- | --- | --- |
| [`glm-5.2`](../../model-sources/providers/zhipu/models/glm-5.2.md) | [`compute/providers/zhipu.json`](../../../compute/providers/zhipu.json) | `contextWindow`、`defaultTemperature`、`defaultTopP`、`extra.cacheHitPrice`、`extra.cacheStoragePrice`、`inputPrice`、`maxOutputTokens`、`modelName`、`outputPrice` | [glm52-cn-api](../../model-sources/providers/zhipu/SOURCES.md#glm52-cn-api)：fetched |
| [`glm-5.2`](../../model-sources/providers/zhipu/models/glm-5.2.md) | [`compute/coding-plans/zhipu-coding.json`](../../../compute/coding-plans/zhipu-coding.json) | `contextWindow`、`maxOutputTokens`、`modelName` | [glm52-intl-api](../../model-sources/providers/zhipu/SOURCES.md#glm52-intl-api)：fetched |
| [`glm-5.3-flash`](../../model-sources/providers/zhipu/models/glm-5.3-flash.md) | [`compute/providers/zhipu.json`](../../../compute/providers/zhipu.json) | `contextWindow`、`defaultTemperature`、`defaultTopP`、`maxOutputTokens` | [glm-pricing](../../model-sources/providers/zhipu/SOURCES.md#glm-pricing)：fetched；[glm53-flash](../../model-sources/providers/zhipu/SOURCES.md#glm53-flash)：fetched |
| [`glm-5.3-flash`](../../model-sources/providers/zhipu/models/glm-5.3-flash.md) | [`compute/coding-plans/zhipu-coding.json`](../../../compute/coding-plans/zhipu-coding.json) | `contextWindow`、`defaultTemperature`、`defaultTopP`、`maxOutputTokens` | [glm53-flash](../../model-sources/providers/zhipu/SOURCES.md#glm53-flash)：fetched |
| [`glm-5.3-flash`](../../model-sources/providers/zhipu/models/glm-5.3-flash.md) | [`compute/model-specs/zhipu.json`](../../../compute/model-specs/zhipu.json) | `spec.contextWindow`、`spec.defaultTemperature`、`spec.defaultTopP`、`spec.maxOutputTokens`、`spec.supportsReasoning` | [glm53-flash](../../model-sources/providers/zhipu/SOURCES.md#glm53-flash)：fetched |
| [`glm-5.3-flashx`](../../model-sources/providers/zhipu/models/glm-5.3-flashx.md) | [`compute/providers/zhipu.json`](../../../compute/providers/zhipu.json) | `contextWindow`、`maxOutputTokens` | [glm-pricing](../../model-sources/providers/zhipu/SOURCES.md#glm-pricing)：fetched；[glm53-flash](../../model-sources/providers/zhipu/SOURCES.md#glm53-flash)：fetched |
| [`glm-5.3-flashx`](../../model-sources/providers/zhipu/models/glm-5.3-flashx.md) | [`compute/model-specs/zhipu.json`](../../../compute/model-specs/zhipu.json) | `spec.contextWindow`、`spec.maxOutputTokens`、`spec.supportsReasoning` | [glm53-flash](../../model-sources/providers/zhipu/SOURCES.md#glm53-flash)：fetched |
| [`glm-5.3`](../../model-sources/providers/zhipu/models/glm-5.3.md) | [`compute/providers/zhipu.json`](../../../compute/providers/zhipu.json) | `contextWindow`、`defaultTemperature`、`defaultTopP`、`maxOutputTokens` | [glm-pricing](../../model-sources/providers/zhipu/SOURCES.md#glm-pricing)：fetched；[glm53](../../model-sources/providers/zhipu/SOURCES.md#glm53)：fetched |
| [`glm-5.3`](../../model-sources/providers/zhipu/models/glm-5.3.md) | [`compute/coding-plans/zhipu-coding.json`](../../../compute/coding-plans/zhipu-coding.json) | `contextWindow`、`defaultTemperature`、`defaultTopP`、`maxOutputTokens` | [glm53](../../model-sources/providers/zhipu/SOURCES.md#glm53)：fetched |
| [`glm-5.3`](../../model-sources/providers/zhipu/models/glm-5.3.md) | [`compute/model-specs/zhipu.json`](../../../compute/model-specs/zhipu.json) | `spec.contextWindow`、`spec.defaultTemperature`、`spec.defaultTopP`、`spec.maxOutputTokens`、`spec.supportsReasoning` | [glm53](../../model-sources/providers/zhipu/SOURCES.md#glm53)：fetched |

## 历史身份/参数不证明当前可用性（0 条）

无该类记录。

说明：缺少字段引用表示本仓尚未登记官方证明，不等于已证明数据错误。关键字段列表包括身份、数值限制、采样、价格与部分推理合同；不是全部 API 参数清单。routing、优先级、产品能力标签和预设启用状态不按供应商事实判错。保守兼容预算、未公开价格和历史参数的详细边界见原单模型文件。
