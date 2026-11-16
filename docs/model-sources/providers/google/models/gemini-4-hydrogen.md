# gemini-4-hydrogen：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`gemini-4-hydrogen`。
- 核验日期：2026-11-16；仅下列字段取得官网证明，未执行收费 API 或订阅账号调用。

## 接入合同与核验边界

原厂统一 1048576 token 窗口由输入、思考与输出共享，不能混作独立最大输入。共享规格记录单次流式 65536；Hydrogen 非流式 REST 也支持 65536，当前原生接入采用 65536。百万输出需要额外 continuation 或 Interactions 后台执行，本批没有启用这类适配。

原厂支持 low/medium/high/xhigh，默认 high；本批原生接入仅开放 low/medium/high，因为本轮已核 pi-ai Google 适配器没有 xhigh 原生透传。共享完整官方档位与接入面子集分别记录；不能用其他平台的默认值覆盖原厂 high。Standard 付费 USD/M 输入1.50、输出（含思考）7.50、隐式缓存读0.075，另有免费层。去除 temperature/top_p/top_k，只支持隐式缓存，不声明显式缓存。初读的旧工作区已安装 pi-ai 1.0.2，通过 thinkingBudget 映射 Gemini 4 档位（官网允许兼容但返回警告）；隔离最新 dev 按锁安装的 pi-ai 1.5.0 已识别 Gemini 4 并使用原生 thinkingLevel。两版都没有可确认的原生 xhigh 透传，本批三档接入限制保持不变；这不证明 1.5.0 已随正式客户端铺开，也没有执行账号调用。新型号保持手动选择，路由 tier/priority/eligibleForAgent/defaultReference 属于本仓策略。

## 字段级来源记录

### compute/model-specs/google.json

[查看配置](../../../../../compute/model-specs/google.json) · [接入面说明](../access/model-specs--google.md)

当前参数详情；路由和默认选择属于本仓策略：

<!-- source-details: {"config":"compute/model-specs/google.json","id":"gemini-4-hydrogen"} -->
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
    "description": "Gemini 4 Hydrogen，面向高吞吐编程与多模态智能体任务",
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
        "high",
        "xhigh"
      ],
      "defaultMode": "high"
    }
  }
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/google.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `gemini-4-hydrogen` | 1048576 / 65536 | 非计价主数据 | `id`→[google-hydrogen](../SOURCES.md#google-hydrogen)、`spec.contextWindow`→[google-hydrogen](../SOURCES.md#google-hydrogen)、`spec.maxOutputTokens`→[google-hydrogen](../SOURCES.md#google-hydrogen)、`spec.capabilities`→[google-hydrogen](../SOURCES.md#google-hydrogen)、`spec.supportsReasoning`→[google-hydrogen](../SOURCES.md#google-hydrogen)、`spec.extra.samplingParametersDeprecated`→[google-hydrogen-generate-content](../SOURCES.md#google-hydrogen-generate-content) | [google-hydrogen](../SOURCES.md#google-hydrogen)、[google-hydrogen-generate-content](../SOURCES.md#google-hydrogen-generate-content) | partial | `2eed8766efac59896f0219422d36da6fc09bd72e31cb56cbecd7a73ed3b9b8cd` |

### compute/providers/google.json

[查看配置](../../../../../compute/providers/google.json) · [接入面说明](../access/providers--google.md)

当前参数详情；路由和默认选择属于本仓策略：

<!-- source-details: {"config":"compute/providers/google.json","id":"gemini-4-hydrogen"} -->
```json
{
  "serviceType": [
    "chat"
  ],
  "description": "Gemini 4 Hydrogen，面向高吞吐编程与多模态智能体任务",
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
  "inputPrice": 1.5,
  "outputPrice": 7.5,
  "extra": {
    "reasoning": {
      "supportedEfforts": [
        "low",
        "medium",
        "high"
      ],
      "defaultEffort": "high"
    },
    "samplingParametersDeprecated": true,
    "cachedInputPrice": 0.075,
    "pricingNotes": "Google Standard paid tier USD/百万 tokens：输入 1.50、输出（含思考）7.50、隐式缓存读 0.075；另有免费层，不支持显式缓存。流式与非流式 REST 单次均为 65536；未适配 long decode，不把百万输出当当前接入上限。 当前 Google 适配器不接受 xhigh，接入只提供 low/medium/high；原厂完整档位保留在共享规格。"
  }
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/google.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `gemini-4-hydrogen` | 1048576 / 65536 | USD：1.5 / 7.5 | `modelName`→[google-hydrogen](../SOURCES.md#google-hydrogen)、`contextWindow`→[google-hydrogen](../SOURCES.md#google-hydrogen)、`maxOutputTokens`→[google-gemini4-generate-content](../SOURCES.md#google-gemini4-generate-content)、`capabilities`→[google-hydrogen](../SOURCES.md#google-hydrogen)、`extra.reasoning.defaultEffort`→[google-hydrogen-generate-content](../SOURCES.md#google-hydrogen-generate-content)、`extra.reasoning.supportedEfforts`→[google-hydrogen-generate-content](../SOURCES.md#google-hydrogen-generate-content)、`extra.samplingParametersDeprecated`→[google-hydrogen-generate-content](../SOURCES.md#google-hydrogen-generate-content)、`inputPrice`→[google-gemini4-pricing](../SOURCES.md#google-gemini4-pricing)、`outputPrice`→[google-gemini4-pricing](../SOURCES.md#google-gemini4-pricing)、`extra.cachedInputPrice`→[google-gemini4-pricing](../SOURCES.md#google-gemini4-pricing) | [google-hydrogen](../SOURCES.md#google-hydrogen)、[google-gemini4-generate-content](../SOURCES.md#google-gemini4-generate-content)、[google-hydrogen-generate-content](../SOURCES.md#google-hydrogen-generate-content)、[google-gemini4-pricing](../SOURCES.md#google-gemini4-pricing) | partial | `fe1ff104ce6837a56fdd71b3e886981cc5b282ca369a984a3f7089626cfca1b4` |

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
