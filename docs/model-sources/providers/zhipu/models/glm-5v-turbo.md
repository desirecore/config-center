# glm-5v-turbo：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`glm-5v-turbo`。
- 核验日期：2026-10-03；本次只迁移记录，没有重新核验或提高状态。

## 适用接入面

- [compute/providers/zhipu.json](../access/providers--zhipu.md)
- [compute/model-specs/zhipu.json](../access/model-specs--zhipu.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/zhipu.json

[查看配置](../../../../../compute/providers/zhipu.json) · [接入面说明](../access/providers--zhipu.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/zhipu.json","id":"glm-5v-turbo"} -->
```json
{
  "contextWindow": 200000,
  "maxOutputTokens": 131072,
  "serviceType": [
    "vision"
  ],
  "capabilities": [
    "chat",
    "vision",
    "video_understanding",
    "image_understanding",
    "file_understanding",
    "reasoning",
    "code",
    "deep_thinking",
    "long_context",
    "tool_use",
    "agent"
  ],
  "defaultTemperature": 1,
  "defaultTopP": 0.95,
  "inputPrice": 5,
  "outputPrice": 22,
  "extra.cacheHitPrice": 1.2,
  "extra.pricingTiers": [
    {
      "condition": "input_length_k_tokens: [0, 32)",
      "inputPrice": 5,
      "outputPrice": 22,
      "cacheHitPrice": 1.2
    },
    {
      "condition": "input_length_k_tokens: [32+)",
      "inputPrice": 7,
      "outputPrice": 26,
      "cacheHitPrice": 1.8
    }
  ]
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/zhipu.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `glm-5v-turbo` | 200000 / 131072 | CNY：5 / 22 | `modelName`→[glm-pricing](../SOURCES.md#glm-pricing) | [glm-pricing](../SOURCES.md#glm-pricing) | partial | `3f6fb8c4655444565b7b55989ea463ffbda1d3ff5fa6036ce6a28226c7d03de2` |

### compute/model-specs/zhipu.json

[查看配置](../../../../../compute/model-specs/zhipu.json) · [接入面说明](../access/model-specs--zhipu.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/zhipu.json","id":"glm-5v-turbo"} -->
```json
{
  "spec.contextWindow": 200000,
  "spec.maxOutputTokens": 128000,
  "spec.serviceType": [
    "vision"
  ],
  "spec.capabilities": [
    "chat",
    "vision",
    "video_understanding",
    "image_understanding",
    "file_understanding",
    "reasoning",
    "code",
    "deep_thinking",
    "long_context",
    "tool_use",
    "agent"
  ],
  "spec.supportsReasoning": true,
  "spec.defaultTemperature": 1
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/zhipu.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `glm-5v-turbo` | 200000 / 128000 | 非计价主数据 | `id`→[glm-pricing](../SOURCES.md#glm-pricing) | [glm-pricing](../SOURCES.md#glm-pricing) | partial | `ed725e26eeade7a3cd34906ab09403a2e02fae7ec72903827275df531a1f7af6` |

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
