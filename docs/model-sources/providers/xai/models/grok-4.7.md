# grok-4.7：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`grok-4.7`。
- 核验日期：2026-10-03；本次只迁移记录，没有重新核验或提高状态。

## 适用接入面

- [compute/providers/xai.json](../access/providers--xai.md)
- [compute/model-specs/xai.json](../access/model-specs--xai.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/xai.json

[查看配置](../../../../../compute/providers/xai.json) · [接入面说明](../access/providers--xai.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/xai.json","id":"grok-4.7"} -->
```json
{
  "contextWindow": 500000,
  "serviceType": [
    "chat",
    "reasoning"
  ],
  "capabilities": [
    "chat",
    "reasoning",
    "code",
    "vision",
    "tool_use",
    "structured_output",
    "long_context"
  ],
  "inputPrice": 2,
  "outputPrice": 6,
  "extra.reasoning": {
    "supportedEfforts": [
      "low",
      "medium",
      "high",
      "xhigh"
    ],
    "defaultEffort": "high"
  },
  "extra.cachedInputPrice": 0.5,
  "extra.pricingNotes": "Prices are per 1M tokens below 200K prompt tokens; above 200K, input and cache rates are 2x and output rates are 2x. No text output limit is documented."
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/xai.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `grok-4.7` | 500000 / 未声明 | USD：2 / 6 | `modelName`→[xai](../SOURCES.md#xai) | [xai](../SOURCES.md#xai) | partial | `5fd96154879e4600be87236cf9a12b2c3026dd6286d4288afcb70edd7e9e6661` |

### compute/model-specs/xai.json

[查看配置](../../../../../compute/model-specs/xai.json) · [接入面说明](../access/model-specs--xai.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/xai.json","id":"grok-4.7"} -->
```json
{
  "spec.contextWindow": 500000,
  "spec.serviceType": [
    "chat",
    "reasoning"
  ],
  "spec.capabilities": [
    "chat",
    "reasoning",
    "code",
    "vision",
    "tool_use",
    "long_context"
  ],
  "spec.supportsReasoning": true,
  "routing.tier": "flagship",
  "routing.routingPriority": 30,
  "routing.eligibleForAgent": true,
  "routing.reasoning": {
    "supportedModes": [
      "auto",
      "low",
      "medium",
      "high",
      "xhigh"
    ],
    "defaultMode": "high"
  }
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/xai.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `grok-4.7` | 500000 / 未声明 | 非计价主数据 | `id`→[xai](../SOURCES.md#xai) | [xai](../SOURCES.md#xai) | partial | `a5d32750e0ae4157df10b5e495e002d64ceff291f57d2972421249942f8d3606` |

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
  "supplier": "xai",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
