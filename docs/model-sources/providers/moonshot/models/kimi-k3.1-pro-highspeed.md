# kimi-k3.1-pro-highspeed：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`kimi-k3.1-pro-highspeed`。
- 核验日期：2026-10-28；仅下表列出的字段取得官网证明，未进行收费 API 或订阅账号调用。

## 接入合同与核验边界

按量 API 与 Kimi Code 分开：原厂 ID 是 kimi-k3.1-pro / kimi-k3.1-pro-highspeed，默认 max，输出默认 131072、允许最大 1048576，输入与输出共享 1048576。Code 使用 k3.1-pro / k3.1-pro-highspeed；本次模型配置页写明默认 high（旧概览页写 max，采用逐型号表），Plus 的普通版预置窗口 262144，Pro/Allegretto 及以上可达 1048576，高速版要求 Pro/Allegretto 及以上；订阅输出上限未声明，V2 明确 null，V1 不填输出字段，短 ID 不添加全局 Spec 别名。定价 Markdown 当前表格为空，价格使用国内首页可读价格卡；没有据国际美元价换算。图片需 base64 或文件 ID，公网 URL 不支持；未验收客户端视觉转换和账号调用。

新型号的 tier、routingPriority、eligibleForAgent=false 与 defaultReference=false 是本仓策略；保持手动选择，未扩大默认自动路由。

## 字段级来源记录

### compute/model-specs/moonshot.json

[查看配置](../../../../../compute/model-specs/moonshot.json) · [接入面说明](../access/model-specs--moonshot.md)

当前参数详情；路由、默认选择与产品策略不作为官网事实：

<!-- source-details: {"config":"compute/model-specs/moonshot.json","id":"kimi-k3.1-pro-highspeed"} -->
```json
{
  "spec": {
    "contextWindow": 1048576,
    "maxOutputTokens": 1048576,
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
      "reasoning"
    ],
    "supportsReasoning": true,
    "description": "Kimi K3.1 Pro Highspeed，能力与普通版相同，约 2–3 倍输出速度；按量 API 默认 max，与输入共享 1048576 token 窗口",
    "extra": {
      "thinkingOnly": true,
      "samplingParametersDeprecated": true
    }
  },
  "routing": {
    "tier": "flagship",
    "routingPriority": 50,
    "eligibleForAgent": false,
    "defaultReference": false,
    "reasoning": {
      "supportedModes": [
        "auto",
        "low",
        "high",
        "max"
      ],
      "defaultMode": "max"
    }
  }
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/moonshot.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `kimi-k3.1-pro-highspeed` | 1048576 / 1048576 | 非计价主数据 | `id`→[kimi-k31](../SOURCES.md#kimi-k31)、`spec.contextWindow`→[kimi-k31-context](../SOURCES.md#kimi-k31-context)、`spec.maxOutputTokens`→[kimi-k31](../SOURCES.md#kimi-k31)、`spec.capabilities`→[kimi-k31](../SOURCES.md#kimi-k31)、`spec.supportsReasoning`→[kimi-k31](../SOURCES.md#kimi-k31)、`spec.extra.thinkingOnly`→[kimi-k31](../SOURCES.md#kimi-k31)、`spec.extra.samplingParametersDeprecated`→[kimi-k31](../SOURCES.md#kimi-k31) | [kimi-k31](../SOURCES.md#kimi-k31)、[kimi-k31-context](../SOURCES.md#kimi-k31-context) | partial | `aa6e1b2c55035df0bfb2c9ea619d41dde5d0eef5ef1fa55cc0c5adfd9f058924` |

### compute/providers/moonshot.json

[查看配置](../../../../../compute/providers/moonshot.json) · [接入面说明](../access/providers--moonshot.md)

当前参数详情；路由、默认选择与产品策略不作为官网事实：

<!-- source-details: {"config":"compute/providers/moonshot.json","id":"kimi-k3.1-pro-highspeed"} -->
```json
{
  "serviceType": [
    "reasoning"
  ],
  "description": "Kimi K3.1 Pro Highspeed，能力与普通版相同，约 2–3 倍输出速度；按量 API 默认 max，与输入共享 1048576 token 窗口",
  "contextWindow": 1048576,
  "maxOutputTokens": 1048576,
  "capabilities": [
    "chat",
    "reasoning",
    "code",
    "vision",
    "tool_use",
    "long_context",
    "video_understanding"
  ],
  "inputPrice": 26,
  "outputPrice": 136,
  "extra": {
    "thinking": {
      "default": "enabled",
      "disableSupported": false,
      "preserveReasoningContent": true
    },
    "reasoning": {
      "supportedEfforts": [
        "low",
        "high",
        "max"
      ],
      "defaultEffort": "max"
    },
    "thinkingOnly": true,
    "samplingParametersDeprecated": true,
    "cacheHitPrice": 1.3,
    "pricingNotes": "Kimi 国内 CNY/百万 tokens：输入 26、输出 136、缓存命中 1.30；官网首页缓存写入 26，TTL 的额外档位本次未取得证明，不以此推断其他 TTL 价格。"
  }
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/moonshot.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `kimi-k3.1-pro-highspeed` | 1048576 / 1048576 | CNY：26 / 136 | `modelName`→[kimi-k31](../SOURCES.md#kimi-k31)、`contextWindow`→[kimi-k31-context](../SOURCES.md#kimi-k31-context)、`maxOutputTokens`→[kimi-k31](../SOURCES.md#kimi-k31)、`capabilities`→[kimi-k31](../SOURCES.md#kimi-k31)、`extra.reasoning`→[kimi-k31](../SOURCES.md#kimi-k31)、`extra.thinkingOnly`→[kimi-k31](../SOURCES.md#kimi-k31)、`extra.samplingParametersDeprecated`→[kimi-k31](../SOURCES.md#kimi-k31)、`extra.thinking`→[kimi-k31](../SOURCES.md#kimi-k31)、`inputPrice`→[kimi-k31-pricing](../SOURCES.md#kimi-k31-pricing)、`outputPrice`→[kimi-k31-pricing](../SOURCES.md#kimi-k31-pricing)、`extra.cacheHitPrice`→[kimi-k31-pricing](../SOURCES.md#kimi-k31-pricing) | [kimi-k31](../SOURCES.md#kimi-k31)、[kimi-k31-context](../SOURCES.md#kimi-k31-context)、[kimi-k31-pricing](../SOURCES.md#kimi-k31-pricing) | partial | `36e7bb05215080e63ec38aaad7951a7ee19f00c83da2040789bd650b4cc51511` |

## 待核实项

- 未列入字段来源的参数维持待核实；本地 Schema、编译与 resolver 对照不能替代账号调用。
- 原厂、订阅、聚合平台分别复核；不能从模型名称、目录存在或 HTTP 200 推导全部协议能力。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "moonshot",
  "checkedAt": "2026-10-28",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
