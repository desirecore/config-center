# cohere：官网与来源缺口单列

[总目录](../README.md) · [官方入口与读取状态](../../model-sources/providers/cohere/SOURCES.md) · [核查原因和后续计划](../../model-sources/providers/cohere/AUDIT.md)

本表从现有字段证明生成，不重新访问官网、不刷新核验日期、不改变模型数据。每个接入面单独计数。

## 未登记官方入口（0 条）

无该类记录。

## 未取得可读官网证据（0 条）

无该类记录。

## 入口有读取记录，但本条模型无字段证明（0 条）

无该类记录。

## 仅确认 ID，参数来源未登记（9 条）

| 模型 | 接入面 | 未登记证明的关键字段 | 官网入口/读取结果 |
| --- | --- | --- | --- |
| [`command-a-03-2025`](../../model-sources/providers/cohere/models/command-a-03-2025.md) | [`compute/providers/cohere.json`](../../../compute/providers/cohere.json) | `contextWindow`、`defaultTemperature`、`defaultTopP`、`inputPrice`、`maxOutputTokens`、`outputPrice` | [cohere-models](../../model-sources/providers/cohere/SOURCES.md#cohere-models)：fetched |
| [`command-a-03-2025`](../../model-sources/providers/cohere/models/command-a-03-2025.md) | [`compute/model-specs/cohere.json`](../../../compute/model-specs/cohere.json) | `spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens` | [cohere-models](../../model-sources/providers/cohere/SOURCES.md#cohere-models)：fetched |
| [`command-a-plus-05-2026`](../../model-sources/providers/cohere/models/command-a-plus-05-2026.md) | [`compute/model-specs/cohere.json`](../../../compute/model-specs/cohere.json) | `spec.contextWindow`、`spec.maxOutputTokens`、`spec.supportsReasoning` | [cohere-models](../../model-sources/providers/cohere/SOURCES.md#cohere-models)：fetched |
| [`command-r7b-12-2024`](../../model-sources/providers/cohere/models/command-r7b-12-2024.md) | [`compute/providers/cohere.json`](../../../compute/providers/cohere.json) | `contextWindow`、`defaultTemperature`、`defaultTopP`、`inputPrice`、`maxOutputTokens`、`outputPrice` | [cohere-models](../../model-sources/providers/cohere/SOURCES.md#cohere-models)：fetched |
| [`command-r7b-12-2024`](../../model-sources/providers/cohere/models/command-r7b-12-2024.md) | [`compute/model-specs/cohere.json`](../../../compute/model-specs/cohere.json) | `spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens` | [cohere-models](../../model-sources/providers/cohere/SOURCES.md#cohere-models)：fetched |
| [`north-mini-code-1-0`](../../model-sources/providers/cohere/models/north-mini-code-1-0.md) | [`compute/model-specs/cohere.json`](../../../compute/model-specs/cohere.json) | `spec.contextWindow`、`spec.maxOutputTokens` | [cohere-models](../../model-sources/providers/cohere/SOURCES.md#cohere-models)：fetched |
| [`north-small-translate-1-0`](../../model-sources/providers/cohere/models/north-small-translate-1-0.md) | [`compute/model-specs/cohere.json`](../../../compute/model-specs/cohere.json) | 已登记关键字段都有证明；其他合同限制仍按原记录复核 | [cohere-models](../../model-sources/providers/cohere/SOURCES.md#cohere-models)：fetched；[north-translate-doc](../../model-sources/providers/cohere/SOURCES.md#north-translate-doc)：fetched |
| [`rerank-v4.0-fast`](../../model-sources/providers/cohere/models/rerank-v4.0-fast.md) | [`compute/model-specs/cohere.json`](../../../compute/model-specs/cohere.json) | 已登记关键字段都有证明；其他合同限制仍按原记录复核 | [cohere-models](../../model-sources/providers/cohere/SOURCES.md#cohere-models)：fetched |
| [`rerank-v4.0-pro`](../../model-sources/providers/cohere/models/rerank-v4.0-pro.md) | [`compute/model-specs/cohere.json`](../../../compute/model-specs/cohere.json) | 已登记关键字段都有证明；其他合同限制仍按原记录复核 | [cohere-models](../../model-sources/providers/cohere/SOURCES.md#cohere-models)：fetched |

## 已有部分参数证明，仍需区分未证明字段（8 条）

| 模型 | 接入面 | 未登记证明的关键字段 | 官网入口/读取结果 |
| --- | --- | --- | --- |
| [`command-a-plus-05-2026`](../../model-sources/providers/cohere/models/command-a-plus-05-2026.md) | [`compute/providers/cohere.json`](../../../compute/providers/cohere.json) | `contextWindow`、`maxOutputTokens` | [cohere-compat](../../model-sources/providers/cohere/SOURCES.md#cohere-compat)：fetched；[cohere-models](../../model-sources/providers/cohere/SOURCES.md#cohere-models)：fetched |
| [`embed-v4.0`](../../model-sources/providers/cohere/models/embed-v4.0.md) | [`compute/providers/cohere.json`](../../../compute/providers/cohere.json) | `contextWindow`、`inputPrice`、`maxOutputTokens`、`outputPrice` | [cohere-models](../../model-sources/providers/cohere/SOURCES.md#cohere-models)：fetched |
| [`embed-v4.0`](../../model-sources/providers/cohere/models/embed-v4.0.md) | [`compute/model-specs/cohere.json`](../../../compute/model-specs/cohere.json) | `spec.contextWindow` | [cohere-models](../../model-sources/providers/cohere/SOURCES.md#cohere-models)：fetched |
| [`embed-v5.0-fast`](../../model-sources/providers/cohere/models/embed-v5.0-fast.md) | [`compute/providers/cohere.json`](../../../compute/providers/cohere.json) | `contextWindow` | [cohere-embed](../../model-sources/providers/cohere/SOURCES.md#cohere-embed)：fetched；[cohere-models](../../model-sources/providers/cohere/SOURCES.md#cohere-models)：fetched |
| [`embed-v5.0-fast`](../../model-sources/providers/cohere/models/embed-v5.0-fast.md) | [`compute/model-specs/cohere.json`](../../../compute/model-specs/cohere.json) | `spec.contextWindow` | [cohere-embed](../../model-sources/providers/cohere/SOURCES.md#cohere-embed)：fetched；[cohere-models](../../model-sources/providers/cohere/SOURCES.md#cohere-models)：fetched |
| [`embed-v5.0-pro`](../../model-sources/providers/cohere/models/embed-v5.0-pro.md) | [`compute/providers/cohere.json`](../../../compute/providers/cohere.json) | `contextWindow` | [cohere-embed](../../model-sources/providers/cohere/SOURCES.md#cohere-embed)：fetched；[cohere-models](../../model-sources/providers/cohere/SOURCES.md#cohere-models)：fetched |
| [`embed-v5.0-pro`](../../model-sources/providers/cohere/models/embed-v5.0-pro.md) | [`compute/model-specs/cohere.json`](../../../compute/model-specs/cohere.json) | `spec.contextWindow` | [cohere-embed](../../model-sources/providers/cohere/SOURCES.md#cohere-embed)：fetched；[cohere-models](../../model-sources/providers/cohere/SOURCES.md#cohere-models)：fetched |
| [`rerank-v3.5`](../../model-sources/providers/cohere/models/rerank-v3.5.md) | [`compute/model-specs/cohere.json`](../../../compute/model-specs/cohere.json) | 已登记关键字段都有证明；其他合同限制仍按原记录复核 | [cohere-models](../../model-sources/providers/cohere/SOURCES.md#cohere-models)：fetched；[cohere-rerank](../../model-sources/providers/cohere/SOURCES.md#cohere-rerank)：fetched |

## 历史身份/参数不证明当前可用性（0 条）

无该类记录。

说明：缺少字段引用表示本仓尚未登记官方证明，不等于已证明数据错误。关键字段列表包括身份、数值限制、采样、价格与部分推理合同；不是全部 API 参数清单。routing、优先级、产品能力标签和预设启用状态不按供应商事实判错。保守兼容预算、未公开价格和历史参数的详细边界见原单模型文件。
