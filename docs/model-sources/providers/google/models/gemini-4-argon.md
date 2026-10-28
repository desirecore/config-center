# gemini-4-argon：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`gemini-4-argon`。
- 核验日期：2026-10-28；仅下表列出的字段取得官网证明，未进行收费 API 或订阅账号调用。

## 接入合同与核验边界

Argon 原厂共享 1048576 窗口，GenerateContent 单次流式 65536、非流式 REST 32768。共享规格记录单次流式上限 65536，当前原生接入采用两种请求均可接受的 32768；百万输出需要额外 continuation 或 Interactions 后台执行，本次没有声明这项适配。推理 low/medium/high、默认 medium；移除采样入参，只使用隐式缓存。Standard 优惠 2/10/0.1 USD/M 至 2026-11-30；2026-12-01 起 4/20/0.2。没有把 Managed Agents/Antigravity 的可用性当本仓订阅接入证据。

新型号的 tier、routingPriority、eligibleForAgent=false 与 defaultReference=false 是本仓策略；保持手动选择，未扩大默认自动路由。

## 字段级来源记录

### compute/model-specs/google.json

[查看配置](../../../../../compute/model-specs/google.json) · [接入面说明](../access/model-specs--google.md)

当前参数详情；路由、默认选择与产品策略不作为官网事实：

<!-- source-details: {"config":"compute/model-specs/google.json","id":"gemini-4-argon"} -->
```json
{
  "spec": {
    "contextWindow": 1048576,
    "maxOutputTokens": 65536,
    "capabilities": [
      "chat",
      "reasoning",
      "code",
      "vision",
      "tool_use",
      "long_context",
      "video_understanding",
      "audio_understanding"
    ],
    "serviceType": [
      "chat"
    ],
    "supportsReasoning": true,
    "description": "Gemini 4 Argon，共享 1048576 token 窗口；单次流式输出 65536，非流式 REST 32768；百万输出需要额外 long decode 流程",
    "extra": {
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
        "medium",
        "high"
      ],
      "defaultMode": "medium"
    }
  }
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/google.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `gemini-4-argon` | 1048576 / 65536 | 非计价主数据 | `id`→[google-argon](../SOURCES.md#google-argon)、`spec.contextWindow`→[google-argon](../SOURCES.md#google-argon)、`spec.maxOutputTokens`→[google-argon](../SOURCES.md#google-argon)、`spec.capabilities`→[google-argon](../SOURCES.md#google-argon)、`spec.supportsReasoning`→[google-argon](../SOURCES.md#google-argon)、`spec.extra.samplingParametersDeprecated`→[google-argon-latest](../SOURCES.md#google-argon-latest) | [google-argon](../SOURCES.md#google-argon)、[google-argon-latest](../SOURCES.md#google-argon-latest) | partial | `38f7a54a9da9bb2cb93c2f9a8ba5724ec892aa3e241c214caa4a4e62b0190fb8` |

### compute/providers/google.json

[查看配置](../../../../../compute/providers/google.json) · [接入面说明](../access/providers--google.md)

当前参数详情；路由、默认选择与产品策略不作为官网事实：

<!-- source-details: {"config":"compute/providers/google.json","id":"gemini-4-argon"} -->
```json
{
  "serviceType": [
    "chat"
  ],
  "description": "Gemini 4 Argon，共享 1048576 token 窗口；单次流式输出 65536，非流式 REST 32768；百万输出需要额外 long decode 流程",
  "contextWindow": 1048576,
  "maxOutputTokens": 32768,
  "capabilities": [
    "chat",
    "reasoning",
    "code",
    "vision",
    "tool_use",
    "long_context",
    "video_understanding",
    "audio_understanding"
  ],
  "inputPrice": 2,
  "outputPrice": 10,
  "extra": {
    "reasoning": {
      "supportedEfforts": [
        "low",
        "medium",
        "high"
      ],
      "defaultEffort": "medium"
    },
    "samplingParametersDeprecated": true,
    "cachedInputPrice": 0.1,
    "pricingNotes": "Google Standard USD/百万 tokens：截至 2026-11-30 输入 2、输出 10、隐式缓存读 0.10；2026-12-01 起分别为 4、20、0.20。无免费层，不支持显式缓存。预置采用非流式 REST 的 32768 上限，流式单次可达 65536；未启用 long decode/Interactions 后台续传，不能把百万输出作为当前原生接入上限。"
  }
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/google.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `gemini-4-argon` | 1048576 / 32768 | USD：2 / 10 | `modelName`→[google-argon](../SOURCES.md#google-argon)、`contextWindow`→[google-argon](../SOURCES.md#google-argon)、`maxOutputTokens`→[google-argon-generate-content](../SOURCES.md#google-argon-generate-content)、`capabilities`→[google-argon](../SOURCES.md#google-argon)、`extra.reasoning`→[google-argon-thinking](../SOURCES.md#google-argon-thinking)、`extra.samplingParametersDeprecated`→[google-argon-latest](../SOURCES.md#google-argon-latest)、`inputPrice`→[google-argon-pricing](../SOURCES.md#google-argon-pricing)、`outputPrice`→[google-argon-pricing](../SOURCES.md#google-argon-pricing)、`extra.cachedInputPrice`→[google-argon-pricing](../SOURCES.md#google-argon-pricing) | [google-argon](../SOURCES.md#google-argon)、[google-argon-generate-content](../SOURCES.md#google-argon-generate-content)、[google-argon-thinking](../SOURCES.md#google-argon-thinking)、[google-argon-latest](../SOURCES.md#google-argon-latest)、[google-argon-pricing](../SOURCES.md#google-argon-pricing) | partial | `3c1bb2867146d24bd4e212c140a651b8721b1c179a90d171ff605fbcf823e9ef` |

## 待核实项

- 未列入字段来源的参数维持待核实；本地 Schema、编译与 resolver 对照不能替代账号调用。
- 原厂、订阅、聚合平台分别复核；不能从模型名称、目录存在或 HTTP 200 推导全部协议能力。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "google",
  "checkedAt": "2026-10-28",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
