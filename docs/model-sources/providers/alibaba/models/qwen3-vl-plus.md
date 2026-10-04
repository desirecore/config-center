# qwen3-vl-plus：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`qwen3-vl-plus`。
- 核验日期：2026-10-03；本次只迁移记录，没有重新核验或提高状态。

## 适用接入面

- [compute/providers/dashscope.json](../access/providers--dashscope.md)
- [compute/model-specs/qwen.json](../access/model-specs--qwen.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/dashscope.json

[查看配置](../../../../../compute/providers/dashscope.json) · [接入面说明](../access/providers--dashscope.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/dashscope.json","id":"qwen3-vl-plus"} -->
```json
{
  "contextWindow": 262144,
  "maxOutputTokens": 32768,
  "serviceType": [
    "vision"
  ],
  "capabilities": [
    "chat",
    "vision",
    "image_understanding",
    "ocr",
    "chart_analysis",
    "tool_use"
  ],
  "defaultTemperature": 0.7,
  "defaultTopP": 0.8,
  "inputPrice": 1.5,
  "outputPrice": 6
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/dashscope.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `qwen3-vl-plus` | 262144 / 32768 | CNY：1.5 / 6 | `modelName`→[qwen-pricing](../SOURCES.md#qwen-pricing) | [qwen-pricing](../SOURCES.md#qwen-pricing), [bailian-qwen3-vl-plus-caps](../SOURCES.md#bailian-qwen3-vl-plus-caps), [bailian-function-calling](../SOURCES.md#bailian-function-calling) | partial | `1109e206fb6c0925d0f7aaf9ad49aaee4af64d8549b2c7abb1ff19891d19b885` |

- 2026-10-05 工具调用核对：`capabilities` 增加 `tool_use`。随共享规格继承。本接入是华北 2（北京）兼容端点，型号页北京地域 Function Calling 支持。依据：[bailian-qwen3-vl-plus-caps](../SOURCES.md#bailian-qwen3-vl-plus-caps)、[bailian-function-calling](../SOURCES.md#bailian-function-calling)。本次只核对工具调用一项，其余标签仍是本仓产品标签，核验状态不变。

### compute/model-specs/qwen.json

[查看配置](../../../../../compute/model-specs/qwen.json) · [接入面说明](../access/model-specs--qwen.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/qwen.json","id":"qwen3-vl-plus"} -->
```json
{
  "spec.contextWindow": 262144,
  "spec.maxOutputTokens": 32768,
  "spec.serviceType": [
    "vision"
  ],
  "spec.capabilities": [
    "chat",
    "vision",
    "image_understanding",
    "ocr",
    "chart_analysis",
    "tool_use"
  ],
  "spec.defaultTemperature": 0.7
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/qwen.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `qwen3-vl-plus` | 262144 / 32768 | 非计价主数据 | `id`→[qwen-pricing](../SOURCES.md#qwen-pricing) | [qwen-pricing](../SOURCES.md#qwen-pricing), [bailian-qwen3-vl-plus-caps](../SOURCES.md#bailian-qwen3-vl-plus-caps), [bailian-function-calling](../SOURCES.md#bailian-function-calling) | partial | `c7672b30f4e396e8f3635e12553d9df4edff9390d792e99acc1de8d133600a35` |

- 2026-10-05 工具调用核对：`spec.capabilities` 增加 `tool_use`。百炼型号页模型能力表：华北 2（北京）Function Calling 支持，新加坡、法兰克福、弗吉尼亚、中国香港不支持；Function Calling 指南的支持清单列有 Qwen3-VL-Plus 系列。标签按北京地域记，其他地域接入不适用。依据：[bailian-qwen3-vl-plus-caps](../SOURCES.md#bailian-qwen3-vl-plus-caps)、[bailian-function-calling](../SOURCES.md#bailian-function-calling)。本次只核对工具调用一项，其余标签仍是本仓产品标签，核验状态不变。

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
