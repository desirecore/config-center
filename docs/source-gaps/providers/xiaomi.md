# xiaomi：官网与来源缺口单列

[总目录](../README.md) · [官方入口与读取状态](../../model-sources/providers/xiaomi/SOURCES.md) · [核查原因和后续计划](../../model-sources/providers/xiaomi/AUDIT.md)

本表从现有字段证明生成，不重新访问官网、不刷新核验日期、不改变模型数据。每个接入面单独计数。

## 未登记官方入口（0 条）

无该类记录。

## 未取得可读官网证据（0 条）

无该类记录。

## 入口有读取记录，但本条模型无字段证明（8 条）

| 模型 | 接入面 | 未登记证明的关键字段 | 官网入口/读取结果 |
| --- | --- | --- | --- |
| [`mimo-v2-flash`](../../model-sources/providers/xiaomi/models/mimo-v2-flash.md) | [`compute/model-specs/xiaomi.json`](../../../compute/model-specs/xiaomi.json) | `id`、`spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.supportsReasoning` | [xiaomi](../../model-sources/providers/xiaomi/SOURCES.md#xiaomi)：fetched |
| [`mimo-v2-omni`](../../model-sources/providers/xiaomi/models/mimo-v2-omni.md) | [`compute/model-specs/xiaomi.json`](../../../compute/model-specs/xiaomi.json) | `id`、`spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.supportsReasoning` | [xiaomi](../../model-sources/providers/xiaomi/SOURCES.md#xiaomi)：fetched |
| [`mimo-v2-pro`](../../model-sources/providers/xiaomi/models/mimo-v2-pro.md) | [`compute/model-specs/xiaomi.json`](../../../compute/model-specs/xiaomi.json) | `id`、`spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.supportsReasoning` | [xiaomi](../../model-sources/providers/xiaomi/SOURCES.md#xiaomi)：fetched |
| [`mimo-v2-tts`](../../model-sources/providers/xiaomi/models/mimo-v2-tts.md) | [`compute/model-specs/xiaomi.json`](../../../compute/model-specs/xiaomi.json) | `id`、`spec.contextWindow` | [xiaomi](../../model-sources/providers/xiaomi/SOURCES.md#xiaomi)：fetched |
| [`mimo-x-flash-preview`](../../model-sources/providers/xiaomi/models/mimo-x-flash-preview.md) | [`compute/providers/xiaomi.json`](../../../compute/providers/xiaomi.json) | `contextWindow`、`modelName` | [xiaomi](../../model-sources/providers/xiaomi/SOURCES.md#xiaomi)：fetched |
| [`mimo-x-flash-preview`](../../model-sources/providers/xiaomi/models/mimo-x-flash-preview.md) | [`compute/model-specs/xiaomi.json`](../../../compute/model-specs/xiaomi.json) | `id`、`spec.contextWindow` | [xiaomi](../../model-sources/providers/xiaomi/SOURCES.md#xiaomi)：fetched |
| [`mimo-x-pro-preview`](../../model-sources/providers/xiaomi/models/mimo-x-pro-preview.md) | [`compute/providers/xiaomi.json`](../../../compute/providers/xiaomi.json) | `contextWindow`、`modelName` | [xiaomi](../../model-sources/providers/xiaomi/SOURCES.md#xiaomi)：fetched |
| [`mimo-x-pro-preview`](../../model-sources/providers/xiaomi/models/mimo-x-pro-preview.md) | [`compute/model-specs/xiaomi.json`](../../../compute/model-specs/xiaomi.json) | `id`、`spec.contextWindow` | [xiaomi](../../model-sources/providers/xiaomi/SOURCES.md#xiaomi)：fetched |

## 仅确认 ID，参数来源未登记（7 条）

| 模型 | 接入面 | 未登记证明的关键字段 | 官网入口/读取结果 |
| --- | --- | --- | --- |
| [`mimo-v2.5-tts-voiceclone`](../../model-sources/providers/xiaomi/models/mimo-v2.5-tts-voiceclone.md) | [`compute/providers/xiaomi.json`](../../../compute/providers/xiaomi.json) | 已登记关键字段都有证明；其他合同限制仍按原记录复核 | [xiaomi-models](../../model-sources/providers/xiaomi/SOURCES.md#xiaomi-models)：fetched |
| [`mimo-v2.5-tts-voiceclone`](../../model-sources/providers/xiaomi/models/mimo-v2.5-tts-voiceclone.md) | [`compute/model-specs/xiaomi.json`](../../../compute/model-specs/xiaomi.json) | `spec.contextWindow` | [xiaomi-models](../../model-sources/providers/xiaomi/SOURCES.md#xiaomi-models)：fetched |
| [`mimo-v2.5-tts-voicedesign`](../../model-sources/providers/xiaomi/models/mimo-v2.5-tts-voicedesign.md) | [`compute/providers/xiaomi.json`](../../../compute/providers/xiaomi.json) | 已登记关键字段都有证明；其他合同限制仍按原记录复核 | [xiaomi-models](../../model-sources/providers/xiaomi/SOURCES.md#xiaomi-models)：fetched |
| [`mimo-v2.5-tts-voicedesign`](../../model-sources/providers/xiaomi/models/mimo-v2.5-tts-voicedesign.md) | [`compute/model-specs/xiaomi.json`](../../../compute/model-specs/xiaomi.json) | `spec.contextWindow` | [xiaomi-models](../../model-sources/providers/xiaomi/SOURCES.md#xiaomi-models)：fetched |
| [`mimo-v2.5-tts`](../../model-sources/providers/xiaomi/models/mimo-v2.5-tts.md) | [`compute/providers/xiaomi.json`](../../../compute/providers/xiaomi.json) | 已登记关键字段都有证明；其他合同限制仍按原记录复核 | [xiaomi-models](../../model-sources/providers/xiaomi/SOURCES.md#xiaomi-models)：fetched |
| [`mimo-v2.5-tts`](../../model-sources/providers/xiaomi/models/mimo-v2.5-tts.md) | [`compute/model-specs/xiaomi.json`](../../../compute/model-specs/xiaomi.json) | `spec.contextWindow`、`spec.maxOutputTokens` | [xiaomi-models](../../model-sources/providers/xiaomi/SOURCES.md#xiaomi-models)：fetched |
| [`mimo-v2.5`](../../model-sources/providers/xiaomi/models/mimo-v2.5.md) | [`compute/model-specs/xiaomi.json`](../../../compute/model-specs/xiaomi.json) | `spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.supportsReasoning` | [xiaomi](../../model-sources/providers/xiaomi/SOURCES.md#xiaomi)：fetched |

## 已有部分参数证明，仍需区分未证明字段（10 条）

| 模型 | 接入面 | 未登记证明的关键字段 | 官网入口/读取结果 |
| --- | --- | --- | --- |
| [`mimo-v2.5-asr`](../../model-sources/providers/xiaomi/models/mimo-v2.5-asr.md) | [`compute/providers/xiaomi.json`](../../../compute/providers/xiaomi.json) | 已登记关键字段都有证明；其他合同限制仍按原记录复核 | [xiaomi-models](../../model-sources/providers/xiaomi/SOURCES.md#xiaomi-models)：fetched |
| [`mimo-v2.5-asr`](../../model-sources/providers/xiaomi/models/mimo-v2.5-asr.md) | [`compute/model-specs/xiaomi.json`](../../../compute/model-specs/xiaomi.json) | 已登记关键字段都有证明；其他合同限制仍按原记录复核 | [xiaomi-models](../../model-sources/providers/xiaomi/SOURCES.md#xiaomi-models)：fetched |
| [`mimo-v2.5-pro`](../../model-sources/providers/xiaomi/models/mimo-v2.5-pro.md) | [`compute/providers/xiaomi.json`](../../../compute/providers/xiaomi.json) | 已登记关键字段都有证明；其他合同限制仍按原记录复核 | [xiaomi-models](../../model-sources/providers/xiaomi/SOURCES.md#xiaomi-models)：fetched；[xiaomi-price](../../model-sources/providers/xiaomi/SOURCES.md#xiaomi-price)：fetched |
| [`mimo-v2.5-pro`](../../model-sources/providers/xiaomi/models/mimo-v2.5-pro.md) | [`compute/model-specs/xiaomi.json`](../../../compute/model-specs/xiaomi.json) | `spec.defaultTemperature`、`spec.supportsReasoning` | [xiaomi-models](../../model-sources/providers/xiaomi/SOURCES.md#xiaomi-models)：fetched |
| [`mimo-v2.6-flash`](../../model-sources/providers/xiaomi/models/mimo-v2.6-flash.md) | [`compute/providers/xiaomi.json`](../../../compute/providers/xiaomi.json) | 已登记关键字段都有证明；其他合同限制仍按原记录复核 | [xiaomi-models](../../model-sources/providers/xiaomi/SOURCES.md#xiaomi-models)：fetched；[xiaomi-price](../../model-sources/providers/xiaomi/SOURCES.md#xiaomi-price)：fetched |
| [`mimo-v2.6-flash`](../../model-sources/providers/xiaomi/models/mimo-v2.6-flash.md) | [`compute/model-specs/xiaomi.json`](../../../compute/model-specs/xiaomi.json) | `spec.supportsReasoning` | [xiaomi-models](../../model-sources/providers/xiaomi/SOURCES.md#xiaomi-models)：fetched |
| [`mimo-v2.6-pro-ultraspeed`](../../model-sources/providers/xiaomi/models/mimo-v2.6-pro-ultraspeed.md) | [`compute/providers/xiaomi.json`](../../../compute/providers/xiaomi.json) | 已登记关键字段都有证明；其他合同限制仍按原记录复核 | [xiaomi-models](../../model-sources/providers/xiaomi/SOURCES.md#xiaomi-models)：fetched；[xiaomi-price](../../model-sources/providers/xiaomi/SOURCES.md#xiaomi-price)：fetched |
| [`mimo-v2.6-pro-ultraspeed`](../../model-sources/providers/xiaomi/models/mimo-v2.6-pro-ultraspeed.md) | [`compute/model-specs/xiaomi.json`](../../../compute/model-specs/xiaomi.json) | `spec.supportsReasoning` | [xiaomi-models](../../model-sources/providers/xiaomi/SOURCES.md#xiaomi-models)：fetched |
| [`mimo-v2.6-pro`](../../model-sources/providers/xiaomi/models/mimo-v2.6-pro.md) | [`compute/providers/xiaomi.json`](../../../compute/providers/xiaomi.json) | 已登记关键字段都有证明；其他合同限制仍按原记录复核 | [xiaomi-models](../../model-sources/providers/xiaomi/SOURCES.md#xiaomi-models)：fetched；[xiaomi-price](../../model-sources/providers/xiaomi/SOURCES.md#xiaomi-price)：fetched |
| [`mimo-v2.6-pro`](../../model-sources/providers/xiaomi/models/mimo-v2.6-pro.md) | [`compute/model-specs/xiaomi.json`](../../../compute/model-specs/xiaomi.json) | `spec.supportsReasoning` | [xiaomi-models](../../model-sources/providers/xiaomi/SOURCES.md#xiaomi-models)：fetched |

## 历史身份/参数不证明当前可用性（0 条）

无该类记录。

说明：缺少字段引用表示本仓尚未登记官方证明，不等于已证明数据错误。关键字段列表包括身份、数值限制、采样、价格与部分推理合同；不是全部 API 参数清单。routing、优先级、产品能力标签和预设启用状态不按供应商事实判错。保守兼容预算、未公开价格和历史参数的详细边界见原单模型文件。
