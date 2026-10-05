# glm-5.3-flash：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`glm-5.3-flash`。
- 核验日期：2026-10-03；本次只迁移记录，没有重新核验或提高状态。
- 2026-10-05 补核：Anthropic 协议的思考强度控制（`thinking.type` 与 `output_config.effort`），见官网证据目录「已知边界与核验说明」；其余字段未重新核验。

## 适用接入面

- [compute/providers/zhipu.json](../access/providers--zhipu.md)
- [compute/coding-plans/zhipu-coding.json](../access/coding-plans--zhipu-coding.md)
- [compute/model-specs/zhipu.json](../access/model-specs--zhipu.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/zhipu.json

[查看配置](../../../../../compute/providers/zhipu.json) · [接入面说明](../access/providers--zhipu.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/zhipu.json","id":"glm-5.3-flash"} -->
```json
{
  "contextWindow": 1048576,
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
    "tool_use",
    "agent",
    "long_context",
    "vision",
    "image_understanding",
    "video_understanding"
  ],
  "defaultTemperature": 1,
  "defaultTopP": 0.95,
  "inputPrice": 0.8,
  "outputPrice": 2.8,
  "extra.reasoning": {
    "supportedEfforts": [
      "low",
      "high",
      "max"
    ],
    "defaultEffort": "max"
  },
  "extra.adaptiveThinking": true,
  "extra.thinkingOnly": true,
  "extra.cacheHitPrice": 0.23,
  "extra.pricingNotes": "国内官方标准价，人民币/百万 tokens；Flash 限时优惠以控制台实际结算为准。"
}
```
<!-- source-details:end -->

`extra.adaptiveThinking` 依据同一 `/api/anthropic` 端点在 Coding Plan 官网页（[glm-plan](../SOURCES.md#glm-plan)）上的思考强度说明推定；按量 API Key 的账号实测待补，故未列入本接入面已核字段。

<!-- source-config: compute/providers/zhipu.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `glm-5.3-flash` | 1048576 / 131072 | CNY：0.8 / 2.8 | `extra.cacheHitPrice`→[glm-pricing](../SOURCES.md#glm-pricing), `extra.reasoning.defaultEffort`→[glm53-flash](../SOURCES.md#glm53-flash), `extra.reasoning.supportedEfforts`→[glm53-flash](../SOURCES.md#glm53-flash), `extra.thinkingOnly`→[glm53-flash](../SOURCES.md#glm53-flash), `inputPrice`→[glm-pricing](../SOURCES.md#glm-pricing), `modelName`→[glm53-flash](../SOURCES.md#glm53-flash), `outputPrice`→[glm-pricing](../SOURCES.md#glm-pricing) | [glm-pricing](../SOURCES.md#glm-pricing), [glm53-flash](../SOURCES.md#glm53-flash) | partial | `e9b5a587cd462e819120f6771f9068aecc4efb5d6381823ecfffbd2a7a4a8e22` |

### compute/coding-plans/zhipu-coding.json

[查看配置](../../../../../compute/coding-plans/zhipu-coding.json) · [接入面说明](../access/coding-plans--zhipu-coding.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/coding-plans/zhipu-coding.json","id":"glm-5.3-flash"} -->
```json
{
  "contextWindow": 1048576,
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
    "image_understanding",
    "video_understanding",
    "long_context",
    "tool_use",
    "agent",
    "multilingual",
    "fast"
  ],
  "defaultTemperature": 1,
  "defaultTopP": 0.95,
  "extra.reasoning": {
    "supportedEfforts": [
      "low",
      "high",
      "max"
    ],
    "defaultEffort": "max"
  },
  "extra.adaptiveThinking": true,
  "extra.thinkingOnly": true
}
```
<!-- source-details:end -->

<!-- source-config: compute/coding-plans/zhipu-coding.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `glm-5.3-flash` | 1048576 / 131072 | 套餐：未声明 / 未声明 | `extra.adaptiveThinking`→[glm-plan-intl](../SOURCES.md#glm-plan-intl), `extra.reasoning.defaultEffort`→[glm53-flash](../SOURCES.md#glm53-flash), `extra.reasoning.supportedEfforts`→[glm53-flash](../SOURCES.md#glm53-flash), `extra.thinkingOnly`→[glm53-flash](../SOURCES.md#glm53-flash), `modelName`→[glm53-flash](../SOURCES.md#glm53-flash) | [glm-plan-intl](../SOURCES.md#glm-plan-intl), [glm53-flash](../SOURCES.md#glm53-flash) | partial | `72a649e6a18df9559bb6606103c29baf303e045d11037c1765f116d50f04d223` |

### compute/model-specs/zhipu.json

[查看配置](../../../../../compute/model-specs/zhipu.json) · [接入面说明](../access/model-specs--zhipu.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/zhipu.json","id":"glm-5.3-flash"} -->
```json
{
  "spec.contextWindow": 1048576,
  "spec.maxOutputTokens": 131072,
  "spec.serviceType": [
    "chat",
    "reasoning",
    "vision"
  ],
  "spec.capabilities": [
    "chat",
    "reasoning",
    "deep_thinking",
    "code",
    "tool_use",
    "agent",
    "long_context",
    "vision",
    "image_understanding",
    "video_understanding"
  ],
  "spec.supportsReasoning": true,
  "spec.defaultTemperature": 1,
  "spec.defaultTopP": 0.95,
  "spec.releasedAt": "2026-08-26",
  "spec.extra.adaptiveThinking": true,
  "spec.extra.thinkingOnly": true,
  "routing.tier": "balanced",
  "routing.routingPriority": 48,
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
| `glm-5.3-flash` | 1048576 / 131072 | 非计价主数据 | `id`→[glm53-flash](../SOURCES.md#glm53-flash), `spec.extra.adaptiveThinking`→[glm-plan](../SOURCES.md#glm-plan), `spec.extra.thinkingOnly`→[glm53-flash](../SOURCES.md#glm53-flash) | [glm-plan](../SOURCES.md#glm-plan), [glm53-flash](../SOURCES.md#glm53-flash) | partial | `a9447c04b737184ab52b7aaac1380580422f05ade4cfb982675d02d6c31d6894` |

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
