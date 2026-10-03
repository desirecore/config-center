# command-a-03-2025：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`command-a-03-2025`。
- 核验日期：2026-10-03；本次只迁移记录，没有重新核验或提高状态。

## 适用接入面

- [compute/providers/cohere.json](../access/providers--cohere.md)
- [compute/model-specs/cohere.json](../access/model-specs--cohere.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/cohere.json

[查看配置](../../../../../compute/providers/cohere.json) · [接入面说明](../access/providers--cohere.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/cohere.json","id":"command-a-03-2025"} -->
```json
{
  "contextWindow": 256000,
  "maxOutputTokens": 8000,
  "serviceType": [
    "chat"
  ],
  "capabilities": [
    "chat",
    "code",
    "tool_use",
    "rag",
    "long_context"
  ],
  "defaultTemperature": 0.3,
  "defaultTopP": 0.75,
  "inputPrice": 2.5,
  "outputPrice": 10,
  "extra.pricingNotes": "Prices are per 1M tokens."
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/cohere.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `command-a-03-2025` | 256000 / 8000 | USD：2.5 / 10 | `modelName`→[cohere-models](../SOURCES.md#cohere-models) | [cohere-models](../SOURCES.md#cohere-models) | partial | `4db4e4c6797c90558e9427f34561eb910fa86627dca5459db5de273332045886` |

### compute/model-specs/cohere.json

[查看配置](../../../../../compute/model-specs/cohere.json) · [接入面说明](../access/model-specs--cohere.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/cohere.json","id":"command-a-03-2025"} -->
```json
{
  "spec.contextWindow": 256000,
  "spec.maxOutputTokens": 8000,
  "spec.serviceType": [
    "chat"
  ],
  "spec.capabilities": [
    "chat",
    "code",
    "tool_use",
    "rag",
    "long_context"
  ],
  "spec.defaultTemperature": 0.3
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/cohere.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `command-a-03-2025` | 256000 / 8000 | 非计价主数据 | `id`→[cohere-models](../SOURCES.md#cohere-models) | [cohere-models](../SOURCES.md#cohere-models) | partial | `8ba57e678a3465ac6e202d39af63ada73b440f1e028de9e93f435975e897a55c` |

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
