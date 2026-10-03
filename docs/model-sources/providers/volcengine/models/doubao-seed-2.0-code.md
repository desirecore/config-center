# doubao-seed-2.0-code：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`doubao-seed-2.0-code`。
- 核验日期：2026-10-03；本次只迁移记录，没有重新核验或提高状态。

## 适用接入面

- [compute/providers/volcengine.json](../access/providers--volcengine.md)
- [compute/coding-plans/volcengine-coding.json](../access/coding-plans--volcengine-coding.md)
- [compute/model-specs/volcengine.json](../access/model-specs--volcengine.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/volcengine.json

[查看配置](../../../../../compute/providers/volcengine.json) · [接入面说明](../access/providers--volcengine.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/volcengine.json","id":"doubao-seed-2.0-code"} -->
```json
{
  "contextWindow": 256000,
  "maxOutputTokens": 128000,
  "serviceType": [
    "chat"
  ],
  "capabilities": [
    "chat",
    "reasoning",
    "code",
    "long_context",
    "tool_use",
    "vision",
    "deep_thinking"
  ],
  "defaultTemperature": 1,
  "defaultTopP": 0.7,
  "inputPrice": 3.2,
  "outputPrice": 16,
  "extra.pricingTiers": [
    {
      "maxInputTokens": 32000,
      "inputPrice": 3.2,
      "outputPrice": 16
    },
    {
      "maxInputTokens": 128000,
      "inputPrice": 4.8,
      "outputPrice": 24
    },
    {
      "maxInputTokens": 256000,
      "inputPrice": 9.6,
      "outputPrice": 48
    }
  ]
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/volcengine.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `doubao-seed-2.0-code` | 256000 / 128000 | CNY：3.2 / 16 | 待核实 | [volcengine-models](../SOURCES.md#volcengine-models) | pending | `31638b64bb784e6aa0cdbdd3288c116b61d5e6014907cdd1960770e50f449a2f` |

### compute/coding-plans/volcengine-coding.json

[查看配置](../../../../../compute/coding-plans/volcengine-coding.json) · [接入面说明](../access/coding-plans--volcengine-coding.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/coding-plans/volcengine-coding.json","id":"doubao-seed-2.0-code"} -->
```json
{
  "serviceType": [
    "chat"
  ],
  "capabilities": [
    "code",
    "reasoning",
    "chat",
    "long_context"
  ]
}
```
<!-- source-details:end -->

<!-- source-config: compute/coding-plans/volcengine-coding.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `doubao-seed-2.0-code` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | 待核实 | [volcengine-models](../SOURCES.md#volcengine-models) | pending | `0c83fd2fa83a9961f6bddaf3e088f61bf910e1bf3577c7faaea0239caff232eb` |

### compute/model-specs/volcengine.json

[查看配置](../../../../../compute/model-specs/volcengine.json) · [接入面说明](../access/model-specs--volcengine.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/volcengine.json","id":"doubao-seed-2.0-code"} -->
```json
{
  "spec.contextWindow": 256000,
  "spec.maxOutputTokens": 128000,
  "spec.serviceType": [
    "chat"
  ],
  "spec.capabilities": [
    "chat",
    "reasoning",
    "code",
    "long_context",
    "tool_use",
    "vision",
    "deep_thinking"
  ],
  "spec.defaultTemperature": 1
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/volcengine.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `doubao-seed-2.0-code` | 256000 / 128000 | 非计价主数据 | 待核实 | [volcengine-models](../SOURCES.md#volcengine-models) | pending | `cf70b712624ad35352dfd19f8d906fb50adfc457d3b39391456f564361fb9df6` |

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
  "supplier": "volcengine",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
