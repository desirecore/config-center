# kimi-k3：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`kimi-k3`。
- 核验日期：2026-10-03；本轮重新读取官网，逐接入面只确认下表列出的字段；其余仍待核实。

## 适用接入面

- [compute/providers/moonshot.json](../access/providers--moonshot.md)
- [compute/model-specs/moonshot.json](../access/model-specs--moonshot.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/moonshot.json

[查看配置](../../../../../compute/providers/moonshot.json) · [接入面说明](../access/providers--moonshot.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/moonshot.json","id":"kimi-k3"} -->
```json
{
  "contextWindow": 1048576,
  "maxOutputTokens": 1048576,
  "serviceType": [
    "reasoning"
  ],
  "capabilities": [
    "chat",
    "reasoning",
    "code",
    "tool_use",
    "agent",
    "long_context",
    "vision",
    "video_understanding"
  ],
  "extra.reasoning": {
    "supportedEfforts": [
      "low",
      "high",
      "max"
    ],
    "defaultEffort": "max"
  },
  "extra.thinkingOnly": true,
  "extra.samplingParametersDeprecated": true,
  "extra.pricingNotes": "CNY per 1M tokens: input 20, output 100, cache hit 2. Cache writes: TTL 5min 20, TTL 1h 40; recorded separately from cache-hit billing.",
  "inputPrice": 20,
  "outputPrice": 100,
  "extra.cacheHitPrice": 2
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/moonshot.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `kimi-k3` | 1048576 / 1048576 | CNY：20 / 100 | `contextWindow`→[kimi-pricing](../SOURCES.md#kimi-pricing)、`extra.reasoning.defaultEffort`→[kimi-k3](../SOURCES.md#kimi-k3)、`extra.reasoning.supportedEfforts`→[kimi-k3](../SOURCES.md#kimi-k3)、`extra.samplingParametersDeprecated`→[kimi-k3](../SOURCES.md#kimi-k3)、`extra.thinkingOnly`→[kimi-k3](../SOURCES.md#kimi-k3)、`maxOutputTokens`→[kimi-k3](../SOURCES.md#kimi-k3)、`modelName`→[kimi-pricing](../SOURCES.md#kimi-pricing)、`inputPrice`→[kimi-pricing](../SOURCES.md#kimi-pricing)、`outputPrice`→[kimi-pricing](../SOURCES.md#kimi-pricing)、`extra.cacheHitPrice`→[kimi-pricing](../SOURCES.md#kimi-pricing)、`extra.pricingNotes`→[kimi-pricing](../SOURCES.md#kimi-pricing) | [kimi-pricing](../SOURCES.md#kimi-pricing)、[kimi-k3](../SOURCES.md#kimi-k3) | partial | `ff0ea59f00b5873742ebb33938a6669b58ebd88b81677772c1be55f577ed315c` |

### compute/model-specs/moonshot.json

[查看配置](../../../../../compute/model-specs/moonshot.json) · [接入面说明](../access/model-specs--moonshot.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/moonshot.json","id":"kimi-k3"} -->
```json
{
  "spec.contextWindow": 1048576,
  "spec.maxOutputTokens": 1048576,
  "spec.serviceType": [
    "reasoning"
  ],
  "spec.capabilities": [
    "chat",
    "reasoning",
    "code",
    "tool_use",
    "agent",
    "long_context",
    "vision",
    "video_understanding"
  ],
  "spec.supportsReasoning": true,
  "spec.extra.thinkingOnly": true,
  "spec.extra.samplingParametersDeprecated": true,
  "routing.tier": "flagship",
  "routing.routingPriority": 35,
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

<!-- source-config: compute/model-specs/moonshot.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `kimi-k3` | 1048576 / 1048576 | 非计价主数据 | `id`→[kimi-pricing](../SOURCES.md#kimi-pricing)、`spec.contextWindow`→[kimi-pricing](../SOURCES.md#kimi-pricing)、`spec.extra.samplingParametersDeprecated`→[kimi-k3](../SOURCES.md#kimi-k3)、`spec.extra.thinkingOnly`→[kimi-k3](../SOURCES.md#kimi-k3)、`spec.maxOutputTokens`→[kimi-k3](../SOURCES.md#kimi-k3) | [kimi-pricing](../SOURCES.md#kimi-pricing)、[kimi-k3](../SOURCES.md#kimi-k3) | partial | `f947390f30eaeb54eeb5e3c20ca0f89cc2e0b11840cb3d9ab38de088fcae91fb` |

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
  "supplier": "moonshot",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
