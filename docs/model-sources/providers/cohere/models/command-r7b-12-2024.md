# command-r7b-12-2024：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`command-r7b-12-2024`。
- 核验日期：2026-10-03；本次只迁移记录，没有重新核验或提高状态。

## 适用接入面

- [compute/providers/cohere.json](../access/providers--cohere.md)
- [compute/model-specs/cohere.json](../access/model-specs--cohere.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/cohere.json

[查看配置](../../../../../compute/providers/cohere.json) · [接入面说明](../access/providers--cohere.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/cohere.json","id":"command-r7b-12-2024"} -->
```json
{
  "contextWindow": 128000,
  "maxOutputTokens": 4000,
  "serviceType": [
    "fast"
  ],
  "capabilities": [
    "chat",
    "reasoning",
    "tool_use",
    "rag",
    "fast"
  ],
  "defaultTemperature": 0.3,
  "defaultTopP": 0.75,
  "inputPrice": 0.0375,
  "outputPrice": 0.15,
  "extra.pricingNotes": "Prices are per 1M tokens."
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/cohere.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `command-r7b-12-2024` | 128000 / 4000 | USD：0.0375 / 0.15 | `modelName`→[cohere-models](../SOURCES.md#cohere-models) | [cohere-models](../SOURCES.md#cohere-models) | partial | `0b51e6c9831229781c89b72cae23fb95533aa2ebaa0c06db2dd21225710d356e` |

### compute/model-specs/cohere.json

[查看配置](../../../../../compute/model-specs/cohere.json) · [接入面说明](../access/model-specs--cohere.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/cohere.json","id":"command-r7b-12-2024"} -->
```json
{
  "spec.contextWindow": 128000,
  "spec.maxOutputTokens": 4000,
  "spec.serviceType": [
    "fast"
  ],
  "spec.capabilities": [
    "chat",
    "reasoning",
    "tool_use",
    "rag",
    "fast"
  ],
  "spec.defaultTemperature": 0.3
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/cohere.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `command-r7b-12-2024` | 128000 / 4000 | 非计价主数据 | `id`→[cohere-models](../SOURCES.md#cohere-models) | [cohere-models](../SOURCES.md#cohere-models) | partial | `d099504d0bbed341d961b706e024f785b3a25f0a030ed0f47797e5768d155d1b` |

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
