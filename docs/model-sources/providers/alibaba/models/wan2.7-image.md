# wan2.7-image：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`wan2.7-image`。
- 核验日期：2026-10-03；本次只迁移记录，没有重新核验或提高状态。

## 适用接入面

- [compute/providers/dashscope.json](../access/providers--dashscope.md)
- [compute/coding-plans/dashscope-token-plan.json](../access/coding-plans--dashscope-token-plan.md)
- [compute/model-specs/qwen.json](../access/model-specs--qwen.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/dashscope.json

[查看配置](../../../../../compute/providers/dashscope.json) · [接入面说明](../access/providers--dashscope.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/dashscope.json","id":"wan2.7-image"} -->
```json
{
  "serviceType": [
    "image_gen"
  ],
  "capabilities": [
    "image_generation",
    "chinese_optimized"
  ]
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/dashscope.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `wan2.7-image` | 未声明 / 未声明 | CNY：未声明 / 未声明 | 待核实 | [qwen-models](../SOURCES.md#qwen-models) | pending | `f9f60e10e376176462649edb9b542e14a3bd407cef49ea24dc07f0ca4e928422` |

### compute/coding-plans/dashscope-token-plan.json

[查看配置](../../../../../compute/coding-plans/dashscope-token-plan.json) · [接入面说明](../access/coding-plans--dashscope-token-plan.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/coding-plans/dashscope-token-plan.json","id":"wan2.7-image"} -->
```json
{
  "serviceType": [
    "image_gen"
  ],
  "capabilities": [
    "image_generation",
    "chinese_optimized"
  ]
}
```
<!-- source-details:end -->

<!-- source-config: compute/coding-plans/dashscope-token-plan.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `wan2.7-image` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | 待核实 | [qwen-models](../SOURCES.md#qwen-models) | pending | `8f40d359e7ae38bad346c9170d0e5251d5c7f0e7b4c67245044bd46d12c32446` |

### compute/model-specs/qwen.json

[查看配置](../../../../../compute/model-specs/qwen.json) · [接入面说明](../access/model-specs--qwen.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/qwen.json","id":"wan2.7-image"} -->
```json
{
  "spec.serviceType": [
    "image_gen"
  ],
  "spec.capabilities": [
    "image_generation",
    "chinese_optimized"
  ],
  "routing.tier": "balanced",
  "routing.routingPriority": 107,
  "routing.eligibleForAgent": false,
  "routing.reasoning": {
    "supportedModes": [
      "auto"
    ],
    "defaultMode": "auto"
  }
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/qwen.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `wan2.7-image` | 未声明 / 未声明 | 非计价主数据 | 待核实 | [qwen-models](../SOURCES.md#qwen-models) | pending | `f276801e9eeed2e2ab289fd4ae55d03c7786732b7f32f2112d3cc0c4ef1fd217` |

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
  "supplier": "alibaba",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
