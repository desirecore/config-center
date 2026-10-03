# Baichuan-M3：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`Baichuan-M3`。
- 核验日期：2026-10-03；本次只迁移记录，没有重新核验或提高状态。

## 适用接入面

- [compute/providers/baichuan.json](../access/providers--baichuan.md)
- [compute/model-specs/baichuan.json](../access/model-specs--baichuan.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/baichuan.json

[查看配置](../../../../../compute/providers/baichuan.json) · [接入面说明](../access/providers--baichuan.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/baichuan.json","id":"Baichuan-M3"} -->
```json
{
  "contextWindow": 32000,
  "maxOutputTokens": 32000,
  "serviceType": [
    "chat"
  ],
  "capabilities": [
    "chat",
    "reasoning",
    "code",
    "multilingual",
    "vision",
    "medical"
  ],
  "defaultTemperature": 0.3,
  "defaultTopP": 0.85,
  "inputPrice": 10,
  "outputPrice": 30
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/baichuan.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `Baichuan-M3` | 32000 / 32000 | CNY：10 / 30 | 待核实 | [baichuan](../SOURCES.md#baichuan) | pending | `e9a46b8b942ba918475cbf86a726ed7c7903bc1b0dc01b04fd31613e73eca19a` |

### compute/model-specs/baichuan.json

[查看配置](../../../../../compute/model-specs/baichuan.json) · [接入面说明](../access/model-specs--baichuan.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/baichuan.json","id":"Baichuan-M3"} -->
```json
{
  "spec.contextWindow": 32000,
  "spec.maxOutputTokens": 32000,
  "spec.serviceType": [
    "chat"
  ],
  "spec.capabilities": [
    "chat",
    "reasoning",
    "code",
    "multilingual",
    "vision",
    "medical"
  ],
  "spec.defaultTemperature": 0.3
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/baichuan.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `Baichuan-M3` | 32000 / 32000 | 非计价主数据 | 待核实 | [baichuan](../SOURCES.md#baichuan) | pending | `761f21cce007a66ded84dd3e0919666afa2677f891ff08e6055963c4b8c30101` |

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
  "supplier": "baichuan",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
