# baidu：官网与来源缺口单列

[总目录](../README.md) · [官方入口与读取状态](../../model-sources/providers/baidu/SOURCES.md) · [核查原因和后续计划](../../model-sources/providers/baidu/AUDIT.md)

本表从现有字段证明生成，不重新访问官网、不刷新核验日期、不改变模型数据。每个接入面单独计数。

## 未登记官方入口（0 条）

无该类记录。

## 未取得可读官网证据（0 条）

无该类记录。

## 入口有读取记录，但本条模型无字段证明（5 条）

| 模型 | 接入面 | 未登记证明的关键字段 | 官网入口/读取结果 |
| --- | --- | --- | --- |
| [`ernie-5.0-thinking-latest`](../../model-sources/providers/baidu/models/ernie-5.0-thinking-latest.md) | [`compute/providers/baidu.json`](../../../compute/providers/baidu.json) | `contextWindow`、`extra.pricingTiers`、`inputPrice`、`maxOutputTokens`、`modelName`、`outputPrice` | [baidu-models](../../model-sources/providers/baidu/SOURCES.md#baidu-models)：fetched |
| [`ernie-5.0-thinking-latest`](../../model-sources/providers/baidu/models/ernie-5.0-thinking-latest.md) | [`compute/model-specs/baidu.json`](../../../compute/model-specs/baidu.json) | `id`、`spec.contextWindow`、`spec.maxOutputTokens`、`spec.supportsReasoning` | [baidu-models](../../model-sources/providers/baidu/SOURCES.md#baidu-models)：fetched |
| [`ernie-x1.1`](../../model-sources/providers/baidu/models/ernie-x1.1.md) | [`compute/providers/baidu.json`](../../../compute/providers/baidu.json) | `contextWindow`、`inputPrice`、`maxOutputTokens`、`modelName`、`outputPrice` | [baidu-models](../../model-sources/providers/baidu/SOURCES.md#baidu-models)：fetched |
| [`ernie-x1.1`](../../model-sources/providers/baidu/models/ernie-x1.1.md) | [`compute/model-specs/baidu.json`](../../../compute/model-specs/baidu.json) | `id`、`spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.supportsReasoning` | [baidu-models](../../model-sources/providers/baidu/SOURCES.md#baidu-models)：fetched |
| [`minimax-m2.7`](../../model-sources/providers/baidu/models/minimax-m2.7.md) | [`compute/coding-plans/baidu-coding.json`](../../../compute/coding-plans/baidu-coding.json) | `modelName` | [baidu-models](../../model-sources/providers/baidu/SOURCES.md#baidu-models)：fetched |

## 仅确认 ID，参数来源未登记（13 条）

| 模型 | 接入面 | 未登记证明的关键字段 | 官网入口/读取结果 |
| --- | --- | --- | --- |
| [`deepseek-v3.2`](../../model-sources/providers/baidu/models/deepseek-v3.2.md) | [`compute/coding-plans/baidu-coding.json`](../../../compute/coding-plans/baidu-coding.json) | 已登记关键字段都有证明；其他合同限制仍按原记录复核 | [baidu-models](../../model-sources/providers/baidu/SOURCES.md#baidu-models)：fetched |
| [`deepseek-v4-flash`](../../model-sources/providers/baidu/models/deepseek-v4-flash.md) | [`compute/coding-plans/baidu-coding.json`](../../../compute/coding-plans/baidu-coding.json) | 已登记关键字段都有证明；其他合同限制仍按原记录复核 | [baidu-models](../../model-sources/providers/baidu/SOURCES.md#baidu-models)：fetched |
| [`ernie-4.5-turbo-128k`](../../model-sources/providers/baidu/models/ernie-4.5-turbo-128k.md) | [`compute/providers/baidu.json`](../../../compute/providers/baidu.json) | `contextWindow`、`defaultTemperature`、`defaultTopP`、`extra.cacheHitPrice`、`inputPrice`、`maxOutputTokens`、`outputPrice` | [baidu-models](../../model-sources/providers/baidu/SOURCES.md#baidu-models)：fetched |
| [`ernie-4.5-turbo-128k`](../../model-sources/providers/baidu/models/ernie-4.5-turbo-128k.md) | [`compute/model-specs/baidu.json`](../../../compute/model-specs/baidu.json) | `spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens` | [baidu-models](../../model-sources/providers/baidu/SOURCES.md#baidu-models)：fetched |
| [`ernie-4.5-turbo-20260402`](../../model-sources/providers/baidu/models/ernie-4.5-turbo-20260402.md) | [`compute/providers/baidu.json`](../../../compute/providers/baidu.json) | `contextWindow`、`defaultTemperature`、`defaultTopP`、`extra.cacheHitPrice`、`inputPrice`、`maxOutputTokens`、`outputPrice` | [baidu-plan](../../model-sources/providers/baidu/SOURCES.md#baidu-plan)：fetched |
| [`ernie-4.5-turbo-20260402`](../../model-sources/providers/baidu/models/ernie-4.5-turbo-20260402.md) | [`compute/model-specs/baidu.json`](../../../compute/model-specs/baidu.json) | `spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens` | [baidu-plan](../../model-sources/providers/baidu/SOURCES.md#baidu-plan)：fetched |
| [`ernie-5.0`](../../model-sources/providers/baidu/models/ernie-5.0.md) | [`compute/providers/baidu.json`](../../../compute/providers/baidu.json) | `contextWindow`、`defaultTemperature`、`defaultTopP`、`extra.pricingTiers`、`inputPrice`、`maxOutputTokens`、`outputPrice` | [baidu-models](../../model-sources/providers/baidu/SOURCES.md#baidu-models)：fetched |
| [`ernie-5.0`](../../model-sources/providers/baidu/models/ernie-5.0.md) | [`compute/model-specs/baidu.json`](../../../compute/model-specs/baidu.json) | `spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens` | [baidu-models](../../model-sources/providers/baidu/SOURCES.md#baidu-models)：fetched |
| [`glm-5`](../../model-sources/providers/baidu/models/glm-5.md) | [`compute/coding-plans/baidu-coding.json`](../../../compute/coding-plans/baidu-coding.json) | 已登记关键字段都有证明；其他合同限制仍按原记录复核 | [baidu-models](../../model-sources/providers/baidu/SOURCES.md#baidu-models)：fetched |
| [`kimi-k2.5`](../../model-sources/providers/baidu/models/kimi-k2.5.md) | [`compute/coding-plans/baidu-coding.json`](../../../compute/coding-plans/baidu-coding.json) | 已登记关键字段都有证明；其他合同限制仍按原记录复核 | [baidu-plan](../../model-sources/providers/baidu/SOURCES.md#baidu-plan)：fetched |
| [`kimi-k2.6`](../../model-sources/providers/baidu/models/kimi-k2.6.md) | [`compute/coding-plans/baidu-coding.json`](../../../compute/coding-plans/baidu-coding.json) | 已登记关键字段都有证明；其他合同限制仍按原记录复核 | [baidu-models](../../model-sources/providers/baidu/SOURCES.md#baidu-models)：fetched |
| [`minimax-m2.5`](../../model-sources/providers/baidu/models/minimax-m2.5.md) | [`compute/coding-plans/baidu-coding.json`](../../../compute/coding-plans/baidu-coding.json) | 已登记关键字段都有证明；其他合同限制仍按原记录复核 | [baidu-plan](../../model-sources/providers/baidu/SOURCES.md#baidu-plan)：fetched |
| [`qianfan-code-latest`](../../model-sources/providers/baidu/models/qianfan-code-latest.md) | [`compute/coding-plans/baidu-coding.json`](../../../compute/coding-plans/baidu-coding.json) | 已登记关键字段都有证明；其他合同限制仍按原记录复核 | [baidu-plan](../../model-sources/providers/baidu/SOURCES.md#baidu-plan)：fetched |

## 已有部分参数证明，仍需区分未证明字段（2 条）

| 模型 | 接入面 | 未登记证明的关键字段 | 官网入口/读取结果 |
| --- | --- | --- | --- |
| [`ernie-4.5-turbo-20260402`](../../model-sources/providers/baidu/models/ernie-4.5-turbo-20260402.md) | [`compute/coding-plans/baidu-coding.json`](../../../compute/coding-plans/baidu-coding.json) | 已登记关键字段都有证明；其他合同限制仍按原记录复核 | [baidu-plan](../../model-sources/providers/baidu/SOURCES.md#baidu-plan)：fetched |
| [`glm-5.1`](../../model-sources/providers/baidu/models/glm-5.1.md) | [`compute/coding-plans/baidu-coding.json`](../../../compute/coding-plans/baidu-coding.json) | 已登记关键字段都有证明；其他合同限制仍按原记录复核 | [baidu-plan](../../model-sources/providers/baidu/SOURCES.md#baidu-plan)：fetched |

## 历史身份/参数不证明当前可用性（0 条）

无该类记录。

说明：缺少字段引用表示本仓尚未登记官方证明，不等于已证明数据错误。关键字段列表包括身份、数值限制、采样、价格与部分推理合同；不是全部 API 参数清单。routing、优先级、产品能力标签和预设启用状态不按供应商事实判错。保守兼容预算、未公开价格和历史参数的详细边界见原单模型文件。
