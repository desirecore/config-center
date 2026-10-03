# gpt-5.4：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`gpt-5.4`。
- 核验日期：2026-10-03；本轮增量核验下列字段；未列字段及其他接入面的状态保持独立。

## 适用接入面

- [compute/providers/openai-codex.json](../access/providers--openai-codex.md)
- [compute/providers/openai.json](../access/providers--openai.md)
- [compute/model-specs/openai.json](../access/model-specs--openai.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/openai-codex.json

[查看配置](../../../../../compute/providers/openai-codex.json) · [接入面说明](../access/providers--openai-codex.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/openai-codex.json","id":"gpt-5.4"} -->
```json
{
  "contextWindow": 272000,
  "maxOutputTokens": 128000,
  "serviceType": [
    "chat"
  ],
  "capabilities": [
    "chat",
    "reasoning",
    "code",
    "vision",
    "long_context",
    "tool_use",
    "agent"
  ]
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/openai-codex.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `gpt-5.4` | 272000 / 128000 | USD：未声明 / 未声明 | 待核实 | [openai-models](../SOURCES.md#openai-models) | pending | `037edb8fbb6c446ce132d10c7539bc9fb7260c0dd17169a874942e4f2999369d` |

### compute/providers/openai.json

[查看配置](../../../../../compute/providers/openai.json) · [接入面说明](../access/providers--openai.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/openai.json","id":"gpt-5.4"} -->
```json
{
  "contextWindow": 1050000,
  "maxOutputTokens": 128000,
  "serviceType": [
    "chat",
    "responses"
  ],
  "capabilities": [
    "chat",
    "reasoning",
    "code",
    "vision",
    "ultra_long_context",
    "tool_use"
  ],
  "inputPrice": 2.5,
  "outputPrice": 15,
  "extra.cachedInputPrice": 0.25,
  "extra.pricingNotes": "Prices are per 1M tokens; long-context requests may use higher-tier pricing per OpenAI pricing page.",
  "extra.reasoning": {
    "supportedEfforts": [
      "none",
      "low",
      "medium",
      "high",
      "xhigh"
    ]
  }
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/openai.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `gpt-5.4` | 1050000 / 128000 | USD：2.5 / 15 | `modelName`→[gpt-5-4-api](../SOURCES.md#gpt-5-4-api)；`contextWindow`→[gpt-5-4-api](../SOURCES.md#gpt-5-4-api)；`maxOutputTokens`→[gpt-5-4-api](../SOURCES.md#gpt-5-4-api)；`inputPrice`→[gpt-5-4-api](../SOURCES.md#gpt-5-4-api)；`outputPrice`→[gpt-5-4-api](../SOURCES.md#gpt-5-4-api)；`extra.reasoning.supportedEfforts`→[gpt-5-4-api](../SOURCES.md#gpt-5-4-api)；`extra.cachedInputPrice`→[gpt-5-4-api](../SOURCES.md#gpt-5-4-api) | [gpt-5-4-api](../SOURCES.md#gpt-5-4-api) | partial | `1e81f5a324608c153767fb8665b13e3773dc24dc23fa45554e111ad4e45d8510` |

### compute/model-specs/openai.json

[查看配置](../../../../../compute/model-specs/openai.json) · [接入面说明](../access/model-specs--openai.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/openai.json","id":"gpt-5.4"} -->
```json
{
  "spec.contextWindow": 1050000,
  "spec.maxOutputTokens": 128000,
  "spec.serviceType": [
    "chat"
  ],
  "spec.capabilities": [
    "chat",
    "reasoning",
    "code",
    "vision",
    "long_context",
    "tool_use"
  ],
  "spec.supportsReasoning": true,
  "spec.defaultTemperature": 1,
  "routing.tier": "balanced",
  "routing.routingPriority": 60,
  "routing.eligibleForAgent": true,
  "routing.reasoning": {
    "supportedModes": [
      "auto",
      "off",
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

<!-- source-config: compute/model-specs/openai.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `gpt-5.4` | 1050000 / 128000 | 非计价主数据 | `id`→[gpt-5-4-api](../SOURCES.md#gpt-5-4-api)；`spec.contextWindow`→[gpt-5-4-api](../SOURCES.md#gpt-5-4-api)；`spec.maxOutputTokens`→[gpt-5-4-api](../SOURCES.md#gpt-5-4-api) | [gpt-5-4-api](../SOURCES.md#gpt-5-4-api) | partial | `cd59f54965cdd4dd1a82ca3045c38f8d9e97e6ccc20d81ba71454dfec7cab9ac` |

本轮读取该模型官方明文规格页，确认原厂直连窗口、输出、标准价格与推理合同。Pro 仅限 Responses；GPT-5.4 Pro 官方默认 medium，修正旧 high。none 在产品层映射 off，schema 不接受将 none 写成 defaultEffort，故未伪造其他显式默认档。

共享规格只复核内在窗口和输出；Provider 推理矩阵不复制到共享规格。

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
  "supplier": "openai",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
