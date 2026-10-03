# claude-sonnet-5-5：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`claude-sonnet-5-5`。
- 核验日期：2026-10-03；本轮复核仅限下表已核字段，其余仍待核实。

## 适用接入面

- [compute/providers/anthropic-claude.json](../access/providers--anthropic-claude.md)
- [compute/providers/anthropic.json](../access/providers--anthropic.md)
- [compute/model-specs/anthropic.json](../access/model-specs--anthropic.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/anthropic-claude.json

[查看配置](../../../../../compute/providers/anthropic-claude.json) · [接入面说明](../access/providers--anthropic-claude.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/anthropic-claude.json","id":"claude-sonnet-5-5"} -->
```json
{
  "contextWindow": 1000000,
  "maxOutputTokens": 128000,
  "serviceType": [
    "chat"
  ],
  "capabilities": [
    "chat",
    "reasoning",
    "code",
    "vision",
    "tool_use",
    "agent",
    "long_context"
  ],
  "extra.reasoning": {
    "supportedEfforts": [
      "low",
      "medium",
      "high",
      "xhigh",
      "max"
    ],
    "defaultEffort": "high"
  },
  "extra.adaptiveThinking": true,
  "extra.samplingParametersDeprecated": true,
  "extra.forcedToolChoiceUnsupported": true,
  "extra.reasoning.defaultEffort": "high",
  "modelName": "claude-sonnet-5-5"
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/anthropic-claude.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `claude-sonnet-5-5` | 1000000 / 128000 | USD：未声明 / 未声明 | `contextWindow`→[claude-sonnet55](../SOURCES.md#claude-sonnet55), `extra.adaptiveThinking`→[claude-sonnet55](../SOURCES.md#claude-sonnet55), `extra.forcedToolChoiceUnsupported`→[claude-sonnet55](../SOURCES.md#claude-sonnet55), `extra.reasoning.defaultEffort`→[claude-sonnet55](../SOURCES.md#claude-sonnet55), `maxOutputTokens`→[claude-sonnet55](../SOURCES.md#claude-sonnet55), `modelName`→[claude-sonnet55](../SOURCES.md#claude-sonnet55) | [claude-models](../SOURCES.md#claude-models), [claude-sonnet55](../SOURCES.md#claude-sonnet55) | partial | `deaa1823c6e0e828c96669746a571641da9d5878c7e7078834d326f290534255` |

### compute/providers/anthropic.json

[查看配置](../../../../../compute/providers/anthropic.json) · [接入面说明](../access/providers--anthropic.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/anthropic.json","id":"claude-sonnet-5-5"} -->
```json
{
  "contextWindow": 1000000,
  "maxOutputTokens": 128000,
  "serviceType": [
    "chat",
    "computer_use"
  ],
  "capabilities": [
    "chat",
    "reasoning",
    "code",
    "vision",
    "tool_use",
    "computer_use",
    "agent",
    "long_context"
  ],
  "inputPrice": 2,
  "outputPrice": 10,
  "extra.reasoning": {
    "supportedEfforts": [
      "low",
      "medium",
      "high",
      "xhigh",
      "max"
    ],
    "defaultEffort": "high"
  },
  "extra.adaptiveThinking": true,
  "extra.samplingParametersDeprecated": true,
  "extra.forcedToolChoiceUnsupported": true,
  "extra.cachePricing": {
    "write5m": 2.5,
    "write1h": 4,
    "read": 0.2
  },
  "extra.reasoning.defaultEffort": "high",
  "modelName": "claude-sonnet-5-5",
  "extra.reasoning.supportedEfforts": [
    "low",
    "medium",
    "high",
    "xhigh",
    "max"
  ]
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/anthropic.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `claude-sonnet-5-5` | 1000000 / 128000 | USD：2 / 10 | `contextWindow`→[claude-sonnet55](../SOURCES.md#claude-sonnet55), `extra.adaptiveThinking`→[claude-sonnet55](../SOURCES.md#claude-sonnet55), `extra.forcedToolChoiceUnsupported`→[claude-sonnet55](../SOURCES.md#claude-sonnet55), `extra.reasoning.defaultEffort`→[claude-sonnet55](../SOURCES.md#claude-sonnet55), `inputPrice`→[claude-sonnet55](../SOURCES.md#claude-sonnet55), `maxOutputTokens`→[claude-sonnet55](../SOURCES.md#claude-sonnet55), `modelName`→[claude-sonnet55](../SOURCES.md#claude-sonnet55), `outputPrice`→[claude-sonnet55](../SOURCES.md#claude-sonnet55), `extra.reasoning.supportedEfforts`→[claude-effort](../SOURCES.md#claude-effort) | [claude-models](../SOURCES.md#claude-models), [claude-sonnet55](../SOURCES.md#claude-sonnet55), [claude-effort](../SOURCES.md#claude-effort) | partial | `9f9e6e077d1cffb9a2618b56c95bc82d9e1730a627538e08fba3b032e9ba6955` |

### compute/model-specs/anthropic.json

[查看配置](../../../../../compute/model-specs/anthropic.json) · [接入面说明](../access/model-specs--anthropic.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/anthropic.json","id":"claude-sonnet-5-5"} -->
```json
{
  "spec.contextWindow": 1000000,
  "spec.maxOutputTokens": 128000,
  "spec.serviceType": [
    "chat"
  ],
  "spec.capabilities": [
    "chat",
    "reasoning",
    "code",
    "vision",
    "tool_use",
    "computer_use",
    "long_context"
  ],
  "spec.supportsReasoning": true,
  "spec.releasedAt": "2026-09-28",
  "spec.extra.adaptiveThinking": true,
  "spec.extra.samplingParametersDeprecated": true,
  "spec.extra.forcedToolChoiceUnsupported": true,
  "routing.tier": "balanced",
  "routing.routingPriority": 18,
  "routing.eligibleForAgent": true,
  "routing.reasoning": {
    "supportedModes": [
      "auto",
      "low",
      "medium",
      "high",
      "xhigh",
      "max"
    ],
    "defaultMode": "high"
  },
  "id": "claude-sonnet-5-5"
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/anthropic.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `claude-sonnet-5-5` | 1000000 / 128000 | 非计价主数据 | `id`→[claude-sonnet55](../SOURCES.md#claude-sonnet55), `spec.contextWindow`→[claude-sonnet55](../SOURCES.md#claude-sonnet55), `spec.extra.adaptiveThinking`→[claude-sonnet55](../SOURCES.md#claude-sonnet55), `spec.extra.forcedToolChoiceUnsupported`→[claude-sonnet55](../SOURCES.md#claude-sonnet55), `spec.maxOutputTokens`→[claude-sonnet55](../SOURCES.md#claude-sonnet55), `spec.releasedAt`→[claude-sonnet55](../SOURCES.md#claude-sonnet55) | [claude-models](../SOURCES.md#claude-models), [claude-sonnet55](../SOURCES.md#claude-sonnet55) | partial | `721b450117510321de0f49c3b45ec80e2b35091c8d4fa38ceeb99b958deea141` |

## 下次更新核查

- 对照官网核查精确 ID／别名、是否仍列出、上下文／输入／输出限制及单位。
- 分别核查推理档位、默认值、是否可关闭思考、采样和强制工具选择限制、多模态输入／输出。
- 按本接入面核对价格、缓存、阶梯／峰谷、套餐支持；不能把其他平台参数直接复制。
- 只更新真正复核的字段与引用来源；保留其余待核实项及历史记录。
- 同步对应 canonical JSON、回归和模型指纹，再运行来源校验。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "anthropic",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
