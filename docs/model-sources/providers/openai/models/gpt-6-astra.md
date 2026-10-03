# gpt-6-astra：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`gpt-6-astra`。
- 核验日期：2026-10-03；本次只迁移记录，没有重新核验或提高状态。

## 适用接入面

- [compute/providers/openai-codex.json](../access/providers--openai-codex.md)
- [compute/providers/openai.json](../access/providers--openai.md)
- [compute/model-specs/openai.json](../access/model-specs--openai.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/openai-codex.json

[查看配置](../../../../../compute/providers/openai-codex.json) · [接入面说明](../access/providers--openai-codex.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/openai-codex.json","id":"gpt-6-astra"} -->
```json
{
  "contextWindow": 1050000,
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
  ],
  "extra.reasoning": {
    "supportedEfforts": [
      "low",
      "medium",
      "high",
      "xhigh",
      "max"
    ],
    "defaultEffort": "medium"
  }
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/openai-codex.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `gpt-6-astra` | 1050000 / 128000 | USD：未声明 / 未声明 | `modelName`→[openai-models](../SOURCES.md#openai-models) | [openai-models](../SOURCES.md#openai-models) | partial | `8e958e8a76f90b126b2a3aed30fb7abb2cd2ae16d9df51fa3238518581dcc787` |

### compute/providers/openai.json

[查看配置](../../../../../compute/providers/openai.json) · [接入面说明](../access/providers--openai.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/openai.json","id":"gpt-6-astra"} -->
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
    "tool_use",
    "agent"
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
    "defaultEffort": "medium"
  },
  "extra.cachedInputPrice": 1,
  "extra.pricingNotes": "Prices are per 1M tokens. Cache writes cost $12.50. Above 272K input tokens, input and cache rates are 2x and output rates are 1.5x for the full request."
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/openai.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `gpt-6-astra` | 1050000 / 128000 | USD：10 / 50 | `modelName`→[openai-models](../SOURCES.md#openai-models) | [openai-models](../SOURCES.md#openai-models) | partial | `bcb8c3cc3c3cb4cb972f27881fc2fc7a54e0dc04c36c827f3e85ddecdb98cacc` |

### compute/model-specs/openai.json

[查看配置](../../../../../compute/model-specs/openai.json) · [接入面说明](../access/model-specs--openai.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/openai.json","id":"gpt-6-astra"} -->
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
    "tool_use",
    "agent"
  ],
  "spec.supportsReasoning": true,
  "spec.extra.thinkingOnly": true,
  "routing.tier": "flagship",
  "routing.routingPriority": 10,
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
    "defaultMode": "medium"
  }
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/openai.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `gpt-6-astra` | 1050000 / 128000 | 非计价主数据 | `id`→[openai-models](../SOURCES.md#openai-models) | [openai-models](../SOURCES.md#openai-models) | partial | `11483d9d9822c28148540e5b3aac06614fc2fec0ceb63c16ecd3b8c22e7adfdf` |

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
