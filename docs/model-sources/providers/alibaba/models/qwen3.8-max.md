# qwen3.8-max：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`qwen3.8-max`。
- 核验日期：2026-10-03；本次只迁移记录，没有重新核验或提高状态。

## 适用接入面

- [compute/providers/dashscope.json](../access/providers--dashscope.md)
- [compute/coding-plans/dashscope-token-plan.json](../access/coding-plans--dashscope-token-plan.md)
- [compute/model-specs/qwen.json](../access/model-specs--qwen.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/dashscope.json

[查看配置](../../../../../compute/providers/dashscope.json) · [接入面说明](../access/providers--dashscope.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/dashscope.json","id":"qwen3.8-max"} -->
```json
{
  "contextWindow": 1000000,
  "maxOutputTokens": 131072,
  "serviceType": [
    "chat",
    "vision"
  ],
  "capabilities": [
    "chat",
    "reasoning",
    "code",
    "multilingual",
    "long_context",
    "tool_use",
    "agent",
    "vision",
    "video_understanding"
  ],
  "defaultTemperature": 0.6,
  "defaultTopP": 0.95,
  "inputPrice": 12,
  "outputPrice": 36,
  "extra.reasoning": {
    "supportedEfforts": [
      "low",
      "medium",
      "xhigh"
    ],
    "defaultEffort": "xhigh"
  },
  "extra.cachedInputPrice": 1.5,
  "extra.pricingNotes": "CNY per 1M tokens, Beijing region standard price."
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/dashscope.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `qwen3.8-max` | 1000000 / 131072 | CNY：12 / 36 | `modelName`→[qwen-models](../SOURCES.md#qwen-models) | [qwen-models](../SOURCES.md#qwen-models) | partial | `94c998740373672c42cacb0bb087ab1a4d94a7e76932c93e8fbfd9ee0df4ae94` |

### compute/coding-plans/dashscope-token-plan.json

[查看配置](../../../../../compute/coding-plans/dashscope-token-plan.json) · [接入面说明](../access/coding-plans--dashscope-token-plan.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/coding-plans/dashscope-token-plan.json","id":"qwen3.8-max"} -->
```json
{
  "contextWindow": 1000000,
  "maxOutputTokens": 131072,
  "serviceType": [
    "chat",
    "reasoning",
    "vision"
  ],
  "capabilities": [
    "chat",
    "reasoning",
    "deep_thinking",
    "code",
    "vision",
    "tool_use",
    "agent",
    "long_context"
  ],
  "defaultTemperature": 0.6,
  "extra.reasoning": {
    "supportedEfforts": [
      "low",
      "medium",
      "xhigh"
    ],
    "defaultEffort": "xhigh"
  }
}
```
<!-- source-details:end -->

<!-- source-config: compute/coding-plans/dashscope-token-plan.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `qwen3.8-max` | 1000000 / 131072 | 套餐：未声明 / 未声明 | `modelName`→[qwen-models](../SOURCES.md#qwen-models) | [qwen-models](../SOURCES.md#qwen-models) | partial | `83e667966e487cf59cd1016f47d468f4e3411955f5d30cf62b1791c1b3ad3071` |

### compute/model-specs/qwen.json

[查看配置](../../../../../compute/model-specs/qwen.json) · [接入面说明](../access/model-specs--qwen.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/qwen.json","id":"qwen3.8-max"} -->
```json
{
  "spec.contextWindow": 1000000,
  "spec.maxOutputTokens": 131072,
  "spec.serviceType": [
    "chat"
  ],
  "spec.capabilities": [
    "chat",
    "reasoning",
    "code",
    "multilingual",
    "tool_use",
    "long_context",
    "agent",
    "vision",
    "video_understanding"
  ],
  "spec.supportsReasoning": true,
  "spec.defaultTemperature": 0.6,
  "spec.defaultTopP": 0.95,
  "routing.tier": "flagship",
  "routing.routingPriority": 40,
  "routing.eligibleForAgent": true,
  "routing.reasoning": {
    "supportedModes": [
      "auto",
      "off",
      "minimal",
      "low",
      "medium",
      "high",
      "xhigh"
    ],
    "defaultMode": "xhigh"
  }
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/qwen.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `qwen3.8-max` | 1000000 / 131072 | 非计价主数据 | `id`→[qwen-models](../SOURCES.md#qwen-models) | [qwen-models](../SOURCES.md#qwen-models) | partial | `ef512ea06c71245df5bd2adca133a8ec0ce4e1c8051ff0900af3a810b078e2ab` |

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
  "supplier": "alibaba",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
