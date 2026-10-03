# ernie-4.5-turbo-20260402：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`ernie-4.5-turbo-20260402`。
- 核验日期：2026-10-03；本次只迁移记录，没有重新核验或提高状态。

## 适用接入面

- [compute/providers/baidu.json](../access/providers--baidu.md)
- [compute/coding-plans/baidu-coding.json](../access/coding-plans--baidu-coding.md)
- [compute/model-specs/baidu.json](../access/model-specs--baidu.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/baidu.json

[查看配置](../../../../../compute/providers/baidu.json) · [接入面说明](../access/providers--baidu.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/baidu.json","id":"ernie-4.5-turbo-20260402"} -->
```json
{
  "contextWindow": 131072,
  "maxOutputTokens": 12288,
  "serviceType": [
    "chat"
  ],
  "capabilities": [
    "chat",
    "code",
    "vision",
    "long_context",
    "fast"
  ],
  "defaultTemperature": 0.8,
  "defaultTopP": 1,
  "inputPrice": 0.8,
  "outputPrice": 3.2,
  "extra.cacheHitPrice": 0.2
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/baidu.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `ernie-4.5-turbo-20260402` | 131072 / 12288 | CNY：0.8 / 3.2 | `modelName`→[baidu-plan](../SOURCES.md#baidu-plan) | [baidu-plan](../SOURCES.md#baidu-plan) | partial | `ecaf8fa1f2121c25a95999bdf4a9b513561a6a993e4a96b73b6cf3b49096a592` |

### compute/coding-plans/baidu-coding.json

[查看配置](../../../../../compute/coding-plans/baidu-coding.json) · [接入面说明](../access/coding-plans--baidu-coding.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/coding-plans/baidu-coding.json","id":"ernie-4.5-turbo-20260402"} -->
```json
{
  "serviceType": [
    "chat"
  ],
  "capabilities": [
    "chat",
    "code",
    "vision",
    "fast"
  ]
}
```
<!-- source-details:end -->

<!-- source-config: compute/coding-plans/baidu-coding.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `ernie-4.5-turbo-20260402` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | `modelName`→[baidu-plan](../SOURCES.md#baidu-plan) | [baidu-plan](../SOURCES.md#baidu-plan) | partial | `ec09b5b3ba218316c6e5f71cf06ca9a11b788ac8c1d2fe0aa0a73f5e47d02007` |

### compute/model-specs/baidu.json

[查看配置](../../../../../compute/model-specs/baidu.json) · [接入面说明](../access/model-specs--baidu.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/baidu.json","id":"ernie-4.5-turbo-20260402"} -->
```json
{
  "spec.contextWindow": 131072,
  "spec.maxOutputTokens": 12288,
  "spec.serviceType": [
    "chat"
  ],
  "spec.capabilities": [
    "chat",
    "code",
    "vision",
    "long_context",
    "fast"
  ],
  "spec.defaultTemperature": 0.8
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/baidu.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `ernie-4.5-turbo-20260402` | 131072 / 12288 | 非计价主数据 | `id`→[baidu-plan](../SOURCES.md#baidu-plan) | [baidu-plan](../SOURCES.md#baidu-plan) | partial | `41652e73e47acc3553d0214becda9e5522a520c966591ecbcfa7bfab29c9d16c` |

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
  "supplier": "baidu",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
