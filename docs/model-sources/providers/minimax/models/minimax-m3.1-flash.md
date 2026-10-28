# MiniMax-M3.1-Flash：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`MiniMax-M3.1-Flash`。
- 核验日期：2026-10-28；仅下表列出的字段取得官网证明，未进行收费 API 或订阅账号调用。

## 接入合同与核验边界

本轮补入 M3.1 Flash 正式版：原厂 1000000 窗口、524288 单次输出（131072 是推荐值），强制 adaptive thinking，low/medium/high/xhigh/max，默认 max；采样固定并忽略入参。国内价格为 CNY 1/4/0.1，不能换用国际 USD 0.15/0.60/0.015。M Plan 三档均可用，Preview 已下线且旧名转发正式版：预置改用正式 ID，旧名写入该套餐 tombstones，原规格仅作历史解析；未以新模型添加为由移除其他存量条目。

新型号的 tier、routingPriority、eligibleForAgent=false 与 defaultReference=false 是本仓策略；保持手动选择，未扩大默认自动路由。

## 字段级来源记录

### compute/model-specs/minimax.json

[查看配置](../../../../../compute/model-specs/minimax.json) · [接入面说明](../access/model-specs--minimax.md)

当前参数详情；路由、默认选择与产品策略不作为官网事实：

<!-- source-details: {"config":"compute/model-specs/minimax.json","id":"MiniMax-M3.1-Flash"} -->
```json
{
  "spec": {
    "contextWindow": 1000000,
    "maxOutputTokens": 524288,
    "capabilities": [
      "chat",
      "reasoning",
      "code",
      "vision",
      "tool_use",
      "long_context",
      "video_understanding"
    ],
    "serviceType": [
      "chat",
      "reasoning",
      "vision"
    ],
    "supportsReasoning": true,
    "description": "MiniMax M3.1 Flash 正式版，100 万上下文；强制思考，low/medium/high/xhigh/max，默认 max",
    "extra": {
      "adaptiveThinking": true,
      "thinkingOnly": true,
      "samplingParametersDeprecated": true
    }
  },
  "routing": {
    "tier": "balanced",
    "routingPriority": 50,
    "eligibleForAgent": false,
    "defaultReference": false,
    "reasoning": {
      "supportedModes": [
        "auto",
        "low",
        "medium",
        "high",
        "xhigh",
        "max"
      ],
      "defaultMode": "max"
    }
  }
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/minimax.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `MiniMax-M3.1-Flash` | 1000000 / 524288 | 非计价主数据 | `id`→[minimax-flash31-sdk](../SOURCES.md#minimax-flash31-sdk)、`spec.contextWindow`→[minimax-flash31-sdk](../SOURCES.md#minimax-flash31-sdk)、`spec.maxOutputTokens`→[minimax-flash31-messages](../SOURCES.md#minimax-flash31-messages)、`spec.capabilities`→[minimax-flash31-sdk](../SOURCES.md#minimax-flash31-sdk)、`spec.supportsReasoning`→[minimax-flash31-sdk](../SOURCES.md#minimax-flash31-sdk)、`spec.extra.thinkingOnly`→[minimax-flash31-sdk](../SOURCES.md#minimax-flash31-sdk)、`spec.extra.samplingParametersDeprecated`→[minimax-flash31-sdk](../SOURCES.md#minimax-flash31-sdk) | [minimax-flash31-sdk](../SOURCES.md#minimax-flash31-sdk)、[minimax-flash31-messages](../SOURCES.md#minimax-flash31-messages) | partial | `950873241610a26c68e85d48e4dfda6cd265af168895b96d752edbbd2839fcf2` |

### compute/providers/minimax.json

[查看配置](../../../../../compute/providers/minimax.json) · [接入面说明](../access/providers--minimax.md)

当前参数详情；路由、默认选择与产品策略不作为官网事实：

<!-- source-details: {"config":"compute/providers/minimax.json","id":"MiniMax-M3.1-Flash"} -->
```json
{
  "serviceType": [
    "chat",
    "reasoning",
    "vision"
  ],
  "description": "MiniMax M3.1 Flash 正式版，100 万上下文；强制思考，low/medium/high/xhigh/max，默认 max",
  "contextWindow": 1000000,
  "maxOutputTokens": 524288,
  "capabilities": [
    "chat",
    "reasoning",
    "code",
    "vision",
    "tool_use",
    "long_context",
    "video_understanding"
  ],
  "inputPrice": 1,
  "outputPrice": 4,
  "extra": {
    "reasoning": {
      "supportedEfforts": [
        "low",
        "medium",
        "high",
        "xhigh",
        "max"
      ],
      "defaultEffort": "max"
    },
    "adaptiveThinking": true,
    "thinkingOnly": true,
    "samplingParametersDeprecated": true,
    "cacheReadPrice": 0.1,
    "pricingNotes": "MiniMax 国内按量 Standard，CNY/百万 tokens：输入 1.00、输出 4.00、缓存读 0.10；不使用国际站美元价，不支持 service_tier 优先级字段。"
  }
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/minimax.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `MiniMax-M3.1-Flash` | 1000000 / 524288 | CNY：1 / 4 | `modelName`→[minimax-flash31-sdk](../SOURCES.md#minimax-flash31-sdk)、`contextWindow`→[minimax-flash31-sdk](../SOURCES.md#minimax-flash31-sdk)、`maxOutputTokens`→[minimax-flash31-messages](../SOURCES.md#minimax-flash31-messages)、`capabilities`→[minimax-flash31-sdk](../SOURCES.md#minimax-flash31-sdk)、`extra.reasoning`→[minimax-flash31-sdk](../SOURCES.md#minimax-flash31-sdk)、`extra.thinkingOnly`→[minimax-flash31-sdk](../SOURCES.md#minimax-flash31-sdk)、`extra.samplingParametersDeprecated`→[minimax-flash31-sdk](../SOURCES.md#minimax-flash31-sdk)、`extra.adaptiveThinking`→[minimax-flash31-sdk](../SOURCES.md#minimax-flash31-sdk)、`inputPrice`→[minimax-flash31-pricing](../SOURCES.md#minimax-flash31-pricing)、`outputPrice`→[minimax-flash31-pricing](../SOURCES.md#minimax-flash31-pricing)、`extra.cacheReadPrice`→[minimax-flash31-pricing](../SOURCES.md#minimax-flash31-pricing) | [minimax-flash31-sdk](../SOURCES.md#minimax-flash31-sdk)、[minimax-flash31-messages](../SOURCES.md#minimax-flash31-messages)、[minimax-flash31-pricing](../SOURCES.md#minimax-flash31-pricing) | partial | `d805490493ccd07b86f498642c58b59a1d3667acaf85924e4aaa1cda66ee2bd7` |

### compute/coding-plans/minimax-coding.json

[查看配置](../../../../../compute/coding-plans/minimax-coding.json) · [接入面说明](../access/coding-plans--minimax-coding.md)

当前参数详情；路由、默认选择与产品策略不作为官网事实：

<!-- source-details: {"config":"compute/coding-plans/minimax-coding.json","id":"MiniMax-M3.1-Flash"} -->
```json
{
  "serviceType": [
    "chat",
    "reasoning",
    "vision"
  ],
  "description": "MiniMax M3.1 Flash 正式版，M Plan 各档均可用；按订阅额度计费，替代已下线 Preview 预置",
  "contextWindow": 1000000,
  "maxOutputTokens": 524288,
  "capabilities": [
    "chat",
    "reasoning",
    "code",
    "vision",
    "tool_use",
    "long_context",
    "video_understanding"
  ],
  "extra": {
    "reasoning": {
      "supportedEfforts": [
        "low",
        "medium",
        "high",
        "xhigh",
        "max"
      ],
      "defaultEffort": "max"
    },
    "adaptiveThinking": true,
    "thinkingOnly": true,
    "samplingParametersDeprecated": true
  },
  "source": "preset"
}
```
<!-- source-details:end -->

<!-- source-config: compute/coding-plans/minimax-coding.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `MiniMax-M3.1-Flash` | 1000000 / 524288 | 套餐：未声明 / 未声明 | `modelName`→[minimax-flash31-plan](../SOURCES.md#minimax-flash31-plan)、`contextWindow`→[minimax-flash31-sdk](../SOURCES.md#minimax-flash31-sdk)、`maxOutputTokens`→[minimax-flash31-messages](../SOURCES.md#minimax-flash31-messages)、`capabilities`→[minimax-flash31-sdk](../SOURCES.md#minimax-flash31-sdk)、`extra.reasoning`→[minimax-flash31-sdk](../SOURCES.md#minimax-flash31-sdk)、`extra.thinkingOnly`→[minimax-flash31-sdk](../SOURCES.md#minimax-flash31-sdk)、`extra.samplingParametersDeprecated`→[minimax-flash31-sdk](../SOURCES.md#minimax-flash31-sdk)、`extra.adaptiveThinking`→[minimax-flash31-sdk](../SOURCES.md#minimax-flash31-sdk) | [minimax-flash31-plan](../SOURCES.md#minimax-flash31-plan)、[minimax-flash31-sdk](../SOURCES.md#minimax-flash31-sdk)、[minimax-flash31-messages](../SOURCES.md#minimax-flash31-messages) | partial | `fdf3994499878dc60b0ecc6245071d365794cbc2db88e6c621919d0300c4a1b7` |

## 待核实项

- 未列入字段来源的参数维持待核实；本地 Schema、编译与 resolver 对照不能替代账号调用。
- 原厂、订阅、聚合平台分别复核；不能从模型名称、目录存在或 HTTP 200 推导全部协议能力。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "minimax",
  "checkedAt": "2026-10-28",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
