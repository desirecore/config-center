# xai：官网与来源缺口单列

[总目录](../README.md) · [官方入口与读取状态](../../model-sources/providers/xai/SOURCES.md) · [核查原因和后续计划](../../model-sources/providers/xai/AUDIT.md)

本表从现有字段证明生成，不重新访问官网、不刷新核验日期、不改变模型数据。每个接入面单独计数。

## 未登记官方入口（0 条）

无该类记录。

## 未取得可读官网证据（0 条）

无该类记录。

## 入口有读取记录，但本条模型无字段证明（5 条）

| 模型 | 接入面 | 未登记证明的关键字段 | 官网入口/读取结果 |
| --- | --- | --- | --- |
| [`grok-4-1-fast-reasoning`](../../model-sources/providers/xai/models/grok-4-1-fast-reasoning.md) | [`compute/model-specs/xai.json`](../../../compute/model-specs/xai.json) | `id`、`spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.supportsReasoning` | [xai](../../model-sources/providers/xai/SOURCES.md#xai)：fetched |
| [`grok-4-3`](../../model-sources/providers/xai/models/grok-4-3.md) | [`compute/model-specs/xai.json`](../../../compute/model-specs/xai.json) | `id`、`spec.contextWindow`、`spec.supportsReasoning` | [xai](../../model-sources/providers/xai/SOURCES.md#xai)：fetched |
| [`grok-4.20-0309-reasoning`](../../model-sources/providers/xai/models/grok-4.20-0309-reasoning.md) | [`compute/providers/xai.json`](../../../compute/providers/xai.json) | `contextWindow`、`defaultTemperature`、`defaultTopP`、`extra.cachedInputPrice`、`inputPrice`、`maxOutputTokens`、`modelName`、`outputPrice` | [xai](../../model-sources/providers/xai/SOURCES.md#xai)：fetched |
| [`grok-4.20-0309-reasoning`](../../model-sources/providers/xai/models/grok-4.20-0309-reasoning.md) | [`compute/model-specs/xai.json`](../../../compute/model-specs/xai.json) | `id`、`spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.supportsReasoning` | [xai](../../model-sources/providers/xai/SOURCES.md#xai)：fetched |
| [`grok-4.5`](../../model-sources/providers/xai/models/grok-4.5.md) | [`compute/model-specs/xai.json`](../../../compute/model-specs/xai.json) | `id`、`spec.contextWindow`、`spec.extra.thinkingOnly`、`spec.maxOutputTokens`、`spec.supportsReasoning` | [xai](../../model-sources/providers/xai/SOURCES.md#xai)：fetched |

## 仅确认 ID，参数来源未登记（3 条）

| 模型 | 接入面 | 未登记证明的关键字段 | 官网入口/读取结果 |
| --- | --- | --- | --- |
| [`grok-4.7`](../../model-sources/providers/xai/models/grok-4.7.md) | [`compute/providers/xai.json`](../../../compute/providers/xai.json) | `contextWindow`、`extra.cachedInputPrice`、`extra.reasoning.defaultEffort`、`extra.reasoning.supportedEfforts`、`inputPrice`、`outputPrice` | [xai](../../model-sources/providers/xai/SOURCES.md#xai)：fetched |
| [`grok-4.7`](../../model-sources/providers/xai/models/grok-4.7.md) | [`compute/model-specs/xai.json`](../../../compute/model-specs/xai.json) | `spec.contextWindow`、`spec.supportsReasoning` | [xai](../../model-sources/providers/xai/SOURCES.md#xai)：fetched |
| [`grok-build-0.1`](../../model-sources/providers/xai/models/grok-build-0.1.md) | [`compute/providers/xai.json`](../../../compute/providers/xai.json) | `contextWindow`、`defaultTemperature`、`defaultTopP`、`extra.cachedInputPrice`、`inputPrice`、`outputPrice` | [xai](../../model-sources/providers/xai/SOURCES.md#xai)：fetched |

## 已有部分参数证明，仍需区分未证明字段（1 条）

| 模型 | 接入面 | 未登记证明的关键字段 | 官网入口/读取结果 |
| --- | --- | --- | --- |
| [`grok-4.3`](../../model-sources/providers/xai/models/grok-4.3.md) | [`compute/providers/xai.json`](../../../compute/providers/xai.json) | `defaultTemperature`、`defaultTopP` | [grok43-model](../../model-sources/providers/xai/SOURCES.md#grok43-model)：fetched |

## 历史身份/参数不证明当前可用性（0 条）

无该类记录。

说明：缺少字段引用表示本仓尚未登记官方证明，不等于已证明数据错误。关键字段列表包括身份、数值限制、采样、价格与部分推理合同；不是全部 API 参数清单。routing、优先级、产品能力标签和预设启用状态不按供应商事实判错。保守兼容预算、未公开价格和历史参数的详细边界见原单模型文件。
