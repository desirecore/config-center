# MiniMax-M2.5：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`MiniMax-M2.5`。
- 核验日期：2026-10-03；本次只迁移记录，没有重新核验或提高状态。

## 适用接入面

- [compute/providers/minimax.json](../access/providers--minimax.md)
- [compute/model-specs/minimax.json](../access/model-specs--minimax.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/minimax.json

[查看配置](../../../../../compute/providers/minimax.json) · [接入面说明](../access/providers--minimax.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/minimax.json","id":"MiniMax-M2.5"} -->
```json
{
  "contextWindow": 204800,
  "maxOutputTokens": 131072,
  "serviceType": [
    "chat",
    "reasoning"
  ],
  "capabilities": [
    "chat",
    "reasoning",
    "code",
    "tool_use",
    "long_context"
  ],
  "defaultTemperature": 1,
  "defaultTopP": 0.95,
  "inputPrice": 2.1,
  "outputPrice": 8.4
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/minimax.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `MiniMax-M2.5` | 204800 / 131072 | CNY：2.1 / 8.4 | `modelName`→[minimax-models](../SOURCES.md#minimax-models) | [minimax-models](../SOURCES.md#minimax-models) | partial | `b9a8560a8a36de43974f12b92517b4e008b8859423969839e8f4d30e3f4e048c` |

### compute/model-specs/minimax.json

[查看配置](../../../../../compute/model-specs/minimax.json) · [接入面说明](../access/model-specs--minimax.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/minimax.json","id":"MiniMax-M2.5"} -->
```json
{
  "spec.contextWindow": 204800,
  "spec.maxOutputTokens": 131072,
  "spec.serviceType": [
    "chat",
    "reasoning"
  ],
  "spec.capabilities": [
    "chat",
    "reasoning",
    "code",
    "tool_use",
    "long_context"
  ],
  "spec.supportsReasoning": true,
  "spec.defaultTemperature": 1
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/minimax.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `MiniMax-M2.5` | 204800 / 131072 | 非计价主数据 | `id`→[minimax-models](../SOURCES.md#minimax-models) | [minimax-models](../SOURCES.md#minimax-models) | partial | `af99f444afa3dec4bec7e5b18e600bd5bb6324e5f778429fa7d61bea677fc873` |

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
  "supplier": "minimax",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
