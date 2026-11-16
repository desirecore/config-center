# gemini-4-carbon：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`gemini-4-carbon`。
- 核验日期：2026-11-16；仅下列字段取得官网证明，未执行收费 API 或订阅账号调用。

## 接入合同与核验边界

原厂统一 1048576 token 窗口由输入、思考与输出共享，不能混作独立最大输入。共享规格记录单次流式 65536；Carbon 非流式 REST 只支持 32768，当前原生接入采用两种请求均可接受的 32768。百万输出需要额外 continuation 或 Interactions 后台执行，本批没有启用这类适配。

原厂支持 low/medium/high，默认 medium。Standard USD/M 优惠为输入2、输出（含思考）10、隐式缓存读0.10，至2026-11-30；2026-12-01起分别4、20、0.20。无免费层。去除 temperature/top_p/top_k，只支持隐式缓存，不声明显式缓存。初读的旧工作区已安装 pi-ai 1.0.2，通过 thinkingBudget 映射 Gemini 4 档位（官网允许兼容但返回警告）；隔离最新 dev 按锁安装的 pi-ai 1.5.0 已识别 Gemini 4 并使用原生 thinkingLevel。两版都没有可确认的原生 xhigh 透传，本批三档接入限制保持不变；这不证明 1.5.0 已随正式客户端铺开，也没有执行账号调用。新型号保持手动选择，路由 tier/priority/eligibleForAgent/defaultReference 属于本仓策略。

## 字段级来源记录

### compute/model-specs/google.json

[查看配置](../../../../../compute/model-specs/google.json) · [接入面说明](../access/model-specs--google.md)

当前参数详情；路由和默认选择属于本仓策略：

<!-- source-details: {"config":"compute/model-specs/google.json","id":"gemini-4-carbon"} -->
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
    "description": "Gemini 4 Carbon，面向编程、复杂推理与多模态长上下文任务",
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
| `gemini-4-carbon` | 1048576 / 65536 | 非计价主数据 | `id`→[google-carbon](../SOURCES.md#google-carbon)、`spec.contextWindow`→[google-carbon](../SOURCES.md#google-carbon)、`spec.maxOutputTokens`→[google-carbon](../SOURCES.md#google-carbon)、`spec.capabilities`→[google-carbon](../SOURCES.md#google-carbon)、`spec.supportsReasoning`→[google-carbon](../SOURCES.md#google-carbon)、`spec.extra.samplingParametersDeprecated`→[google-carbon-generate-content](../SOURCES.md#google-carbon-generate-content) | [google-carbon](../SOURCES.md#google-carbon)、[google-carbon-generate-content](../SOURCES.md#google-carbon-generate-content) | partial | `99936bfcfd334f95a1a37e5cd4f60358657ac54d463457bc54326656dcf8742b` |

### compute/providers/google.json

[查看配置](../../../../../compute/providers/google.json) · [接入面说明](../access/providers--google.md)

当前参数详情；路由和默认选择属于本仓策略：

<!-- source-details: {"config":"compute/providers/google.json","id":"gemini-4-carbon"} -->
```json
{
  "serviceType": [
    "chat"
  ],
  "description": "Gemini 4 Carbon，面向编程、复杂推理与多模态长上下文任务",
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
    "pricingNotes": "Google Standard USD/百万 tokens：截至 2026-11-30 输入 2、输出 10、隐式缓存读 0.10；2026-12-01 起分别为 4、20、0.20。无免费层，不支持显式缓存。当前原生接入采用非流式 REST 32768；流式单次 65536，未适配 long decode。"
  }
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/google.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `gemini-4-carbon` | 1048576 / 32768 | USD：2 / 10 | `modelName`→[google-carbon](../SOURCES.md#google-carbon)、`contextWindow`→[google-carbon](../SOURCES.md#google-carbon)、`maxOutputTokens`→[google-gemini4-generate-content](../SOURCES.md#google-gemini4-generate-content)、`capabilities`→[google-carbon](../SOURCES.md#google-carbon)、`extra.reasoning.defaultEffort`→[google-carbon-generate-content](../SOURCES.md#google-carbon-generate-content)、`extra.reasoning.supportedEfforts`→[google-carbon-generate-content](../SOURCES.md#google-carbon-generate-content)、`extra.samplingParametersDeprecated`→[google-carbon-generate-content](../SOURCES.md#google-carbon-generate-content)、`inputPrice`→[google-gemini4-pricing](../SOURCES.md#google-gemini4-pricing)、`outputPrice`→[google-gemini4-pricing](../SOURCES.md#google-gemini4-pricing)、`extra.cachedInputPrice`→[google-gemini4-pricing](../SOURCES.md#google-gemini4-pricing) | [google-carbon](../SOURCES.md#google-carbon)、[google-gemini4-generate-content](../SOURCES.md#google-gemini4-generate-content)、[google-carbon-generate-content](../SOURCES.md#google-carbon-generate-content)、[google-gemini4-pricing](../SOURCES.md#google-gemini4-pricing) | partial | `6810ff0152a4d83799fd1b444c9b1dc5474130437ba915921cff3ddd5c295f36` |

## 待核实项

未列出字段仍为未核实；目录、编译和 Schema 校验不能替代账号调用。不同接入面的价格、限制与协议分别核对；未加入默认自动路由。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "google",
  "checkedAt": "2026-11-16",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
