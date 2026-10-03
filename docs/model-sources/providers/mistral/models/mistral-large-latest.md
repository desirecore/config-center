# mistral-large-latest：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`mistral-large-latest`。
- 核验日期：2026-10-03；本次只迁移记录，没有重新核验或提高状态。

## 适用接入面

- [compute/providers/mistral.json](../access/providers--mistral.md)
- [compute/model-specs/mistral.json](../access/model-specs--mistral.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/mistral.json

[查看配置](../../../../../compute/providers/mistral.json) · [接入面说明](../access/providers--mistral.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/mistral.json","id":"mistral-large-latest"} -->
```json
{
  "contextWindow": 256000,
  "serviceType": [
    "chat"
  ],
  "capabilities": [
    "chat",
    "reasoning",
    "code",
    "vision",
    "tool_use",
    "long_context"
  ],
  "defaultTemperature": 0.7,
  "defaultTopP": 1,
  "inputPrice": 0.5,
  "outputPrice": 1.5
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/mistral.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `mistral-large-latest` | 256000 / 未声明 | USD：0.5 / 1.5 | `inputPrice`→[mistral-large](../SOURCES.md#mistral-large), `outputPrice`→[mistral-large](../SOURCES.md#mistral-large) | [mistral-large](../SOURCES.md#mistral-large) | partial | `91e199925e391a548a231121e9409dc659027766ea39b538cdc13d9fb5efc5d4` |

### compute/model-specs/mistral.json

[查看配置](../../../../../compute/model-specs/mistral.json) · [接入面说明](../access/model-specs--mistral.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/mistral.json","id":"mistral-large-latest"} -->
```json
{
  "spec.contextWindow": 256000,
  "spec.serviceType": [
    "chat"
  ],
  "spec.capabilities": [
    "chat",
    "reasoning",
    "code",
    "vision",
    "tool_use",
    "long_context"
  ],
  "spec.defaultTemperature": 0.7
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/mistral.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `mistral-large-latest` | 256000 / 未声明 | 非计价主数据 | 待核实 | [mistral-models](../SOURCES.md#mistral-models) | pending | `d6c0702472de17f66f49109510b3ec5fdc3da291252c3c20bf8b02c7a72ecaeb` |

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
  "supplier": "mistral",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
