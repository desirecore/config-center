# deepseek-flash：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`deepseek-flash`。
- 核验日期：2026-10-03；本次只迁移记录，没有重新核验或提高状态。

## 适用接入面

- [compute/providers/deepseek.json](../access/providers--deepseek.md)
- [compute/model-specs/deepseek.json](../access/model-specs--deepseek.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/deepseek.json

[查看配置](../../../../../compute/providers/deepseek.json) · [接入面说明](../access/providers--deepseek.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/deepseek.json","id":"deepseek-flash"} -->
```json
{
  "contextWindow": 1000000,
  "maxOutputTokens": 384000,
  "serviceType": [
    "chat",
    "reasoning",
    "vision"
  ],
  "capabilities": [
    "chat",
    "code",
    "reasoning",
    "deep_thinking",
    "vision",
    "long_context",
    "multilingual",
    "tool_use"
  ],
  "defaultTemperature": 1,
  "defaultTopP": 1,
  "inputPrice": 1,
  "outputPrice": 4,
  "extra.reasoning": {
    "supportedEfforts": [
      "low",
      "high",
      "max"
    ],
    "defaultEffort": "high"
  },
  "extra.cacheHitPrice": 0.02,
  "extra.pricingTiers": [
    {
      "condition": "idle",
      "inputPrice": 1,
      "outputPrice": 4,
      "cacheHitPrice": 0.02
    },
    {
      "condition": "peak",
      "inputPrice": 2,
      "outputPrice": 8,
      "cacheHitPrice": 0.04
    }
  ],
  "extra.pricingNotes": "空闲时段为北京时间工作日 09:00-12:00、14:00-18:00 之外的时段；高峰时段价格为输入 2 元、输出 8 元、缓存命中输入 0.04 元/百万 tokens。"
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/deepseek.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `deepseek-flash` | 1000000 / 384000 | CNY：1 / 4 | `contextWindow`→[deepseek-pricing](../SOURCES.md#deepseek-pricing), `extra.cacheHitPrice`→[deepseek-pricing](../SOURCES.md#deepseek-pricing), `extra.reasoning.defaultEffort`→[deepseek-thinking](../SOURCES.md#deepseek-thinking), `extra.reasoning.supportedEfforts`→[deepseek-thinking](../SOURCES.md#deepseek-thinking), `inputPrice`→[deepseek-pricing](../SOURCES.md#deepseek-pricing), `maxOutputTokens`→[deepseek-pricing](../SOURCES.md#deepseek-pricing), `modelName`→[deepseek-pricing](../SOURCES.md#deepseek-pricing), `outputPrice`→[deepseek-pricing](../SOURCES.md#deepseek-pricing) | [deepseek-pricing](../SOURCES.md#deepseek-pricing), [deepseek-thinking](../SOURCES.md#deepseek-thinking) | partial | `f622ba63ca8b88e5f5ba4f7b8c5483f761cfd3239455b4bafff1def3fc1c6aff` |

### compute/model-specs/deepseek.json

[查看配置](../../../../../compute/model-specs/deepseek.json) · [接入面说明](../access/model-specs--deepseek.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/deepseek.json","id":"deepseek-flash"} -->
```json
{
  "spec.contextWindow": 1000000,
  "spec.maxOutputTokens": 384000,
  "spec.serviceType": [
    "chat",
    "reasoning",
    "vision"
  ],
  "spec.capabilities": [
    "chat",
    "code",
    "reasoning",
    "deep_thinking",
    "vision",
    "multilingual",
    "tool_use"
  ],
  "spec.supportsReasoning": true,
  "spec.defaultTemperature": 1,
  "routing.tier": "lightweight",
  "routing.routingPriority": 35,
  "routing.eligibleForAgent": true,
  "routing.reasoning": {
    "supportedModes": [
      "auto",
      "low",
      "high",
      "max"
    ],
    "defaultMode": "high"
  }
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/deepseek.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `deepseek-flash` | 1000000 / 384000 | 非计价主数据 | `id`→[deepseek-pricing](../SOURCES.md#deepseek-pricing), `spec.contextWindow`→[deepseek-pricing](../SOURCES.md#deepseek-pricing), `spec.maxOutputTokens`→[deepseek-pricing](../SOURCES.md#deepseek-pricing) | [deepseek-pricing](../SOURCES.md#deepseek-pricing) | partial | `9f54d6a5866645f9b7c988b8de8ef2a24b3f3a3541f93e0a884ce4584ee915f7` |

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
  "supplier": "deepseek",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
