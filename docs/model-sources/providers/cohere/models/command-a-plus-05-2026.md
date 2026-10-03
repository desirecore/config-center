# command-a-plus-05-2026：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`command-a-plus-05-2026`。
- 核验日期：2026-10-03；本次只迁移记录，没有重新核验或提高状态。

## 适用接入面

- [compute/providers/cohere.json](../access/providers--cohere.md)
- [compute/model-specs/cohere.json](../access/model-specs--cohere.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/cohere.json

[查看配置](../../../../../compute/providers/cohere.json) · [接入面说明](../access/providers--cohere.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/cohere.json","id":"command-a-plus-05-2026"} -->
```json
{
  "contextWindow": 128000,
  "maxOutputTokens": 64000,
  "serviceType": [
    "chat"
  ],
  "capabilities": [
    "chat",
    "reasoning",
    "vision",
    "tool_use",
    "multilingual",
    "long_context"
  ],
  "extra.reasoning": {
    "supportedEfforts": [
      "none",
      "high"
    ]
  },
  "extra.pricingNotes": "官方文档声明限流额度内免费；生产 Model Vault 按实例单独计价，不预填 token 单价。"
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/cohere.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `command-a-plus-05-2026` | 128000 / 64000 | USD：未声明 / 未声明 | `extra.reasoning.supportedEfforts`→[cohere-compat](../SOURCES.md#cohere-compat), `modelName`→[cohere-models](../SOURCES.md#cohere-models) | [cohere-compat](../SOURCES.md#cohere-compat), [cohere-models](../SOURCES.md#cohere-models) | partial | `6228712281ee27601c0b0f7c60cdd85e4d882e8041288c27a06105e27b580641` |

### compute/model-specs/cohere.json

[查看配置](../../../../../compute/model-specs/cohere.json) · [接入面说明](../access/model-specs--cohere.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/cohere.json","id":"command-a-plus-05-2026"} -->
```json
{
  "spec.contextWindow": 128000,
  "spec.maxOutputTokens": 64000,
  "spec.serviceType": [
    "chat"
  ],
  "spec.capabilities": [
    "chat",
    "reasoning",
    "vision",
    "tool_use",
    "multilingual",
    "long_context"
  ],
  "spec.supportsReasoning": true
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/cohere.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `command-a-plus-05-2026` | 128000 / 64000 | 非计价主数据 | `id`→[cohere-models](../SOURCES.md#cohere-models) | [cohere-models](../SOURCES.md#cohere-models) | partial | `67d42211584e059cf7d73cd6a2b69d58c6b9a02977beb44e2ee1e3dff8832974` |

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
  "supplier": "cohere",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
