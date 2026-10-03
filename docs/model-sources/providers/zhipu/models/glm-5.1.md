# glm-5.1：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`glm-5.1`。
- 核验日期：2026-10-03；本次只迁移记录，没有重新核验或提高状态。

## 适用接入面

- [compute/providers/zhipu.json](../access/providers--zhipu.md)
- [compute/model-specs/zhipu.json](../access/model-specs--zhipu.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/zhipu.json

[查看配置](../../../../../compute/providers/zhipu.json) · [接入面说明](../access/providers--zhipu.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/zhipu.json","id":"glm-5.1"} -->
```json
{
  "contextWindow": 200000,
  "maxOutputTokens": 131072,
  "serviceType": [
    "chat",
    "reasoning"
  ],
  "capabilities": [
    "chat",
    "reasoning",
    "code",
    "multilingual",
    "deep_thinking",
    "long_context",
    "math",
    "tool_use",
    "agent"
  ],
  "defaultTemperature": 1,
  "defaultTopP": 0.95,
  "inputPrice": 6,
  "outputPrice": 24,
  "extra.cacheHitPrice": 1.3,
  "extra.pricingTiers": [
    {
      "condition": "input_length_k_tokens: [0, 32)",
      "inputPrice": 6,
      "outputPrice": 24,
      "cacheHitPrice": 1.3
    },
    {
      "condition": "input_length_k_tokens: [32+)",
      "inputPrice": 8,
      "outputPrice": 28,
      "cacheHitPrice": 2
    }
  ]
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/zhipu.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `glm-5.1` | 200000 / 131072 | CNY：6 / 24 | `modelName`→[glm-pricing](../SOURCES.md#glm-pricing) | [glm-pricing](../SOURCES.md#glm-pricing) | partial | `a33341eef062449272b0329c9d76dbb20d972d911e2d42176727e0b4a6209f53` |

### compute/model-specs/zhipu.json

[查看配置](../../../../../compute/model-specs/zhipu.json) · [接入面说明](../access/model-specs--zhipu.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/zhipu.json","id":"glm-5.1"} -->
```json
{
  "spec.contextWindow": 200000,
  "spec.maxOutputTokens": 128000,
  "spec.serviceType": [
    "chat"
  ],
  "spec.capabilities": [
    "chat",
    "reasoning",
    "code",
    "multilingual",
    "deep_thinking",
    "long_context",
    "math",
    "tool_use",
    "agent"
  ],
  "spec.supportsReasoning": true,
  "spec.defaultTemperature": 1,
  "routing.tier": "balanced",
  "routing.routingPriority": 65,
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
    "defaultMode": "medium"
  }
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/zhipu.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `glm-5.1` | 200000 / 128000 | 非计价主数据 | `id`→[glm-pricing](../SOURCES.md#glm-pricing) | [glm-pricing](../SOURCES.md#glm-pricing) | partial | `2cd6ed51e011c7f1a288cd4c69e90dd7a71b70929feaa188a8abca39d126e6ee` |

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
  "supplier": "zhipu",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
