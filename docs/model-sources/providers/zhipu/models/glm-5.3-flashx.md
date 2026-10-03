# glm-5.3-flashx：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`glm-5.3-flashx`。
- 核验日期：2026-10-03；本次只迁移记录，没有重新核验或提高状态。

## 适用接入面

- [compute/providers/zhipu.json](../access/providers--zhipu.md)
- [compute/model-specs/zhipu.json](../access/model-specs--zhipu.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/zhipu.json

[查看配置](../../../../../compute/providers/zhipu.json) · [接入面说明](../access/providers--zhipu.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/zhipu.json","id":"glm-5.3-flashx"} -->
```json
{
  "contextWindow": 1000000,
  "maxOutputTokens": 128000,
  "serviceType": [
    "chat",
    "reasoning",
    "vision"
  ],
  "capabilities": [
    "chat",
    "reasoning",
    "code",
    "multilingual",
    "vision",
    "video_understanding",
    "tool_use",
    "long_context",
    "fast"
  ],
  "inputPrice": 2,
  "outputPrice": 7,
  "extra.reasoning": {
    "supportedEfforts": [
      "low",
      "high",
      "max"
    ],
    "defaultEffort": "max"
  },
  "extra.thinkingOnly": true,
  "extra.cacheHitPrice": 0.57,
  "extra.pricingNotes": "国内官方标准价，人民币/百万 tokens；Flash 限时优惠以控制台实际结算为准。"
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/zhipu.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `glm-5.3-flashx` | 1000000 / 128000 | CNY：2 / 7 | `extra.cacheHitPrice`→[glm-pricing](../SOURCES.md#glm-pricing), `extra.reasoning.defaultEffort`→[glm53-flash](../SOURCES.md#glm53-flash), `extra.reasoning.supportedEfforts`→[glm53-flash](../SOURCES.md#glm53-flash), `extra.thinkingOnly`→[glm53-flash](../SOURCES.md#glm53-flash), `inputPrice`→[glm-pricing](../SOURCES.md#glm-pricing), `modelName`→[glm53-flash](../SOURCES.md#glm53-flash), `outputPrice`→[glm-pricing](../SOURCES.md#glm-pricing) | [glm-pricing](../SOURCES.md#glm-pricing), [glm53-flash](../SOURCES.md#glm53-flash) | partial | `90198f90256cc40ac50dd2ac6f395ba1a0f6062cdefd392f61840c1569b6f8e1` |

### compute/model-specs/zhipu.json

[查看配置](../../../../../compute/model-specs/zhipu.json) · [接入面说明](../access/model-specs--zhipu.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/zhipu.json","id":"glm-5.3-flashx"} -->
```json
{
  "spec.contextWindow": 1000000,
  "spec.maxOutputTokens": 128000,
  "spec.serviceType": [
    "chat",
    "reasoning",
    "vision"
  ],
  "spec.capabilities": [
    "chat",
    "reasoning",
    "code",
    "multilingual",
    "vision",
    "video_understanding",
    "tool_use",
    "long_context",
    "fast"
  ],
  "spec.supportsReasoning": true,
  "spec.extra.thinkingOnly": true,
  "routing.tier": "balanced",
  "routing.routingPriority": 49,
  "routing.eligibleForAgent": true,
  "routing.reasoning": {
    "supportedModes": [
      "auto",
      "low",
      "high",
      "max"
    ],
    "defaultMode": "max"
  }
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/zhipu.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `glm-5.3-flashx` | 1000000 / 128000 | 非计价主数据 | `id`→[glm53-flash](../SOURCES.md#glm53-flash), `spec.extra.thinkingOnly`→[glm53-flash](../SOURCES.md#glm53-flash) | [glm53-flash](../SOURCES.md#glm53-flash) | partial | `6d10e6cf17f4461142a1827d036c3cb2b7d798d5e579398e1d4ca9bc4d00394b` |

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
