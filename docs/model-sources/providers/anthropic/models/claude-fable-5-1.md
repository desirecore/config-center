# claude-fable-5-1：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`claude-fable-5-1`。
- 核验日期：2026-10-03；本次只迁移记录，没有重新核验或提高状态。

## 适用接入面

- [compute/providers/anthropic-claude.json](../access/providers--anthropic-claude.md)
- [compute/providers/anthropic.json](../access/providers--anthropic.md)
- [compute/model-specs/anthropic.json](../access/model-specs--anthropic.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/anthropic-claude.json

[查看配置](../../../../../compute/providers/anthropic-claude.json) · [接入面说明](../access/providers--anthropic-claude.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/anthropic-claude.json","id":"claude-fable-5-1"} -->
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
  "extra.thinkingOnly": true,
  "extra.adaptiveThinking": true
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/anthropic-claude.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `claude-fable-5-1` | 1000000 / 128000 | USD：未声明 / 未声明 | `modelName`→[claude-models](../SOURCES.md#claude-models) | [claude-models](../SOURCES.md#claude-models) | partial | `8676a78498c4b22fa8d9a383970c53c8a20da7a335a507290c4e5513c29d0e99` |

### compute/providers/anthropic.json

[查看配置](../../../../../compute/providers/anthropic.json) · [接入面说明](../access/providers--anthropic.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/anthropic.json","id":"claude-fable-5-1"} -->
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
  "inputPrice": 10,
  "outputPrice": 50,
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
  "extra.thinkingOnly": true,
  "extra.adaptiveThinking": true,
  "extra.samplingParametersDeprecated": true,
  "extra.forcedToolChoiceUnsupported": true,
  "extra.cachePricing": {
    "write5m": 12.5,
    "write1h": 20,
    "read": 0.25
  },
  "extra.pricingNotes": "Prices are per 1M tokens. Full 1M context is billed at standard pricing."
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/anthropic.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `claude-fable-5-1` | 1000000 / 128000 | USD：10 / 50 | `modelName`→[claude-models](../SOURCES.md#claude-models) | [claude-models](../SOURCES.md#claude-models) | partial | `0c277612edfecf40cf814529cde3510488e8690ec2dc483d61ebd4fb354c352a` |

### compute/model-specs/anthropic.json

[查看配置](../../../../../compute/model-specs/anthropic.json) · [接入面说明](../access/model-specs--anthropic.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/anthropic.json","id":"claude-fable-5-1"} -->
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
    "deep_thinking",
    "code",
    "vision",
    "tool_use",
    "long_context"
  ],
  "spec.supportsReasoning": true,
  "spec.extra.thinkingOnly": true,
  "spec.extra.adaptiveThinking": true,
  "spec.extra.samplingParametersDeprecated": true,
  "spec.extra.forcedToolChoiceUnsupported": true,
  "routing.tier": "flagship",
  "routing.routingPriority": 20,
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
  }
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/anthropic.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `claude-fable-5-1` | 1000000 / 128000 | 非计价主数据 | `id`→[claude-models](../SOURCES.md#claude-models) | [claude-models](../SOURCES.md#claude-models) | partial | `fc72b0d7c506d81052e9545c27713e6a0283730973b7df96bf64755a054c0b23` |

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
