# claude-haiku-5-5：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`claude-haiku-5-5`。
- 核验日期：2026-10-28；仅下表列出的字段取得官网证明，未进行收费 API 或订阅账号调用。

## 接入合同与核验边界

Haiku 5.5 的 1M/128K 沿用本仓 Anthropic 十进制换算为 1000000/128000，官网为简写而非明文整数。支持五档 effort，默认 medium；本仓统一采用 adaptive，不暴露 disabled 与高 effort 的无效组合。价格必须按 100000 输入 token 阈值区分两档，Batch 300K 不作为同步上限。Claude Code 页面只确认型号映射；订阅账号的访问和额度未实测。

新型号的 tier、routingPriority、eligibleForAgent=false 与 defaultReference=false 是本仓策略；保持手动选择，未扩大默认自动路由。

## 字段级来源记录

### compute/model-specs/anthropic.json

[查看配置](../../../../../compute/model-specs/anthropic.json) · [接入面说明](../access/model-specs--anthropic.md)

当前参数详情；路由、默认选择与产品策略不作为官网事实：

<!-- source-details: {"config":"compute/model-specs/anthropic.json","id":"claude-haiku-5-5"} -->
```json
{
  "spec": {
    "contextWindow": 1000000,
    "maxOutputTokens": 128000,
    "capabilities": [
      "chat",
      "reasoning",
      "code",
      "vision",
      "tool_use",
      "long_context"
    ],
    "serviceType": [
      "chat"
    ],
    "supportsReasoning": true,
    "description": "Claude Haiku 5.5，低延迟模型；自适应思考，默认 medium；输入超过 100000 tokens 使用独立价阶",
    "extra": {
      "adaptiveThinking": true,
      "samplingParametersDeprecated": true
    }
  },
  "routing": {
    "tier": "lightweight",
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
      "defaultMode": "medium"
    }
  }
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/anthropic.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `claude-haiku-5-5` | 1000000 / 128000 | 非计价主数据 | `id`→[claude-haiku55](../SOURCES.md#claude-haiku55)、`spec.contextWindow`→[claude-haiku55](../SOURCES.md#claude-haiku55)、`spec.maxOutputTokens`→[claude-haiku55](../SOURCES.md#claude-haiku55)、`spec.capabilities`→[claude-haiku55](../SOURCES.md#claude-haiku55)、`spec.supportsReasoning`→[claude-haiku55](../SOURCES.md#claude-haiku55)、`spec.extra.samplingParametersDeprecated`→[claude-haiku55-changes](../SOURCES.md#claude-haiku55-changes) | [claude-haiku55](../SOURCES.md#claude-haiku55)、[claude-haiku55-changes](../SOURCES.md#claude-haiku55-changes) | partial | `be321658dd475edad4764e049b6cfe7a4251877f7c61a84c6e09d5de3a80d08b` |

### compute/providers/anthropic-claude.json

[查看配置](../../../../../compute/providers/anthropic-claude.json) · [接入面说明](../access/providers--anthropic-claude.md)

当前参数详情；路由、默认选择与产品策略不作为官网事实：

<!-- source-details: {"config":"compute/providers/anthropic-claude.json","id":"claude-haiku-5-5"} -->
```json
{
  "serviceType": [
    "chat"
  ],
  "description": "Claude Haiku 5.5，Claude Code 订阅入口；自适应思考默认 medium，实际可用性与额度取决于账户",
  "contextWindow": 1000000,
  "maxOutputTokens": 128000,
  "capabilities": [
    "chat",
    "reasoning",
    "code",
    "vision",
    "tool_use",
    "long_context"
  ],
  "extra": {
    "adaptiveThinking": true,
    "reasoning": {
      "supportedEfforts": [
        "low",
        "medium",
        "high",
        "xhigh",
        "max"
      ],
      "defaultEffort": "medium"
    },
    "samplingParametersDeprecated": true,
    "thinkingRoundTrip": {
      "enabled": true,
      "protocol": "anthropic-messages",
      "allowEmptySignature": false,
      "scope": "active-tool-turn"
    },
    "thinkingToolTurnValidation": "accepts-thinkless"
  },
  "source": "preset"
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/anthropic-claude.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `claude-haiku-5-5` | 1000000 / 128000 | USD：未声明 / 未声明 | `modelName`→[claude-haiku55-code](../SOURCES.md#claude-haiku55-code)、`extra.reasoning`→[claude-haiku55-effort](../SOURCES.md#claude-haiku55-effort)、`extra.adaptiveThinking`→[claude-haiku55](../SOURCES.md#claude-haiku55)、`extra.samplingParametersDeprecated`→[claude-haiku55-changes](../SOURCES.md#claude-haiku55-changes)、`extra.thinkingRoundTrip.enabled`→[claude-haiku55-migration](../SOURCES.md#claude-haiku55-migration)、`extra.thinkingRoundTrip.protocol`→[claude-haiku55-migration](../SOURCES.md#claude-haiku55-migration)、`extra.thinkingToolTurnValidation`→[claude-haiku55-migration](../SOURCES.md#claude-haiku55-migration) | [claude-haiku55-code](../SOURCES.md#claude-haiku55-code)、[claude-haiku55-effort](../SOURCES.md#claude-haiku55-effort)、[claude-haiku55](../SOURCES.md#claude-haiku55)、[claude-haiku55-changes](../SOURCES.md#claude-haiku55-changes)、[claude-haiku55-migration](../SOURCES.md#claude-haiku55-migration) | partial | `5cddfc5df4bb998bf11f91f64626eda8434357e87d7389e8c6f59b7f22299f28` |

### compute/providers/anthropic.json

[查看配置](../../../../../compute/providers/anthropic.json) · [接入面说明](../access/providers--anthropic.md)

当前参数详情；路由、默认选择与产品策略不作为官网事实：

<!-- source-details: {"config":"compute/providers/anthropic.json","id":"claude-haiku-5-5"} -->
```json
{
  "serviceType": [
    "chat"
  ],
  "description": "Claude Haiku 5.5，低延迟模型；自适应思考，默认 medium；输入超过 100000 tokens 使用独立价阶",
  "contextWindow": 1000000,
  "maxOutputTokens": 128000,
  "capabilities": [
    "chat",
    "reasoning",
    "code",
    "vision",
    "tool_use",
    "long_context"
  ],
  "inputPrice": 0.1,
  "outputPrice": 0.5,
  "extra": {
    "adaptiveThinking": true,
    "reasoning": {
      "supportedEfforts": [
        "low",
        "medium",
        "high",
        "xhigh",
        "max"
      ],
      "defaultEffort": "medium"
    },
    "samplingParametersDeprecated": true,
    "cacheReadPrice": 0.01,
    "pricingTiers": [
      {
        "maxInputTokens": 100000,
        "inputPrice": 0.1,
        "outputPrice": 0.5,
        "cacheReadPrice": 0.01
      },
      {
        "maxInputTokens": 1000000,
        "inputPrice": 0.5,
        "outputPrice": 2.5,
        "cacheReadPrice": 0.05
      }
    ],
    "pricingNotes": "USD/百万 tokens；输入超过 100000 tokens 时整次请求按输入 0.50、输出 2.50、缓存读 0.05 计价。5 分钟缓存写入 0.125 / 0.625，1 小时 0.20 / 1.00（分别对应两档输入长度）。Batch 半价；同步输出 128000，300K 输出仅适用于带 beta header 的 Batch API。",
    "thinkingRoundTrip": {
      "enabled": true,
      "protocol": "anthropic-messages",
      "allowEmptySignature": false,
      "scope": "active-tool-turn"
    },
    "thinkingToolTurnValidation": "accepts-thinkless"
  }
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/anthropic.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `claude-haiku-5-5` | 1000000 / 128000 | USD：0.1 / 0.5 | `modelName`→[claude-haiku55](../SOURCES.md#claude-haiku55)、`contextWindow`→[claude-haiku55](../SOURCES.md#claude-haiku55)、`maxOutputTokens`→[claude-haiku55](../SOURCES.md#claude-haiku55)、`capabilities`→[claude-haiku55](../SOURCES.md#claude-haiku55)、`extra.reasoning`→[claude-haiku55-effort](../SOURCES.md#claude-haiku55-effort)、`extra.samplingParametersDeprecated`→[claude-haiku55-changes](../SOURCES.md#claude-haiku55-changes)、`extra.adaptiveThinking`→[claude-haiku55](../SOURCES.md#claude-haiku55)、`inputPrice`→[claude-haiku55](../SOURCES.md#claude-haiku55)、`outputPrice`→[claude-haiku55](../SOURCES.md#claude-haiku55)、`extra.cacheReadPrice`→[claude-haiku55](../SOURCES.md#claude-haiku55)、`extra.pricingTiers`→[claude-haiku55](../SOURCES.md#claude-haiku55)、`extra.thinkingRoundTrip.enabled`→[claude-haiku55-migration](../SOURCES.md#claude-haiku55-migration)、`extra.thinkingRoundTrip.protocol`→[claude-haiku55-migration](../SOURCES.md#claude-haiku55-migration)、`extra.thinkingToolTurnValidation`→[claude-haiku55-migration](../SOURCES.md#claude-haiku55-migration) | [claude-haiku55](../SOURCES.md#claude-haiku55)、[claude-haiku55-effort](../SOURCES.md#claude-haiku55-effort)、[claude-haiku55-changes](../SOURCES.md#claude-haiku55-changes)、[claude-haiku55-migration](../SOURCES.md#claude-haiku55-migration) | partial | `f62f2052c4fb04aeb59d4a5f1d95bf03f5324687b6766acd689ac66fe34a3ba1` |

原生 Messages 回放须保留签名与完整思考块；当前 scope 和非空签名策略沿用本仓既有回放配置。官网允许 forced tool_choice，其返回可无思考块，故不声明 forcedToolChoiceUnsupported。OpenRouter 不继承这些原生回放字段。

## 待核实项

- 未列入字段来源的参数维持待核实；本地 Schema、编译与 resolver 对照不能替代账号调用。
- 原厂、订阅、聚合平台分别复核；不能从模型名称、目录存在或 HTTP 200 推导全部协议能力。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "anthropic",
  "checkedAt": "2026-10-28",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
