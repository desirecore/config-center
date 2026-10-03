# MiniMax-M2.7：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`MiniMax-M2.7`。
- 核验日期：2026-10-03；本轮增量复核仅覆盖明确列出的字段，其余接入面和参数保持各自状态。

## 适用接入面

- [compute/providers/minimax.json](../access/providers--minimax.md)
- [compute/coding-plans/minimax-coding.json](../access/coding-plans--minimax-coding.md)
- [compute/model-specs/minimax.json](../access/model-specs--minimax.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/minimax.json

[查看配置](../../../../../compute/providers/minimax.json) · [接入面说明](../access/providers--minimax.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/minimax.json","id":"MiniMax-M2.7"} -->
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
    "tool_use"
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
| `MiniMax-M2.7` | 204800 / 131072 | CNY：2.1 / 8.4 | `modelName`→[minimax-models](../SOURCES.md#minimax-models)；`contextWindow`→[minimax-anthropic](../SOURCES.md#minimax-anthropic) |[minimax-models](../SOURCES.md#minimax-models)；[minimax-anthropic](../SOURCES.md#minimax-anthropic) | partial | `b9700df4e1624bec6513944a1cdc570e7ed8dfb62224d210206c516980b5ea3c` |

### compute/coding-plans/minimax-coding.json

[查看配置](../../../../../compute/coding-plans/minimax-coding.json) · [接入面说明](../access/coding-plans--minimax-coding.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/coding-plans/minimax-coding.json","id":"MiniMax-M2.7"} -->
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
    "tool_use"
  ]
}
```
<!-- source-details:end -->

<!-- source-config: compute/coding-plans/minimax-coding.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `MiniMax-M2.7` | 204800 / 131072 | 套餐：未声明 / 未声明 | `modelName`→[minimax-models](../SOURCES.md#minimax-models) | [minimax-models](../SOURCES.md#minimax-models) | partial | `3cae6396e60ce0de40c47509168d516cf464820996ffdaa96776976598aa6111` |

### compute/model-specs/minimax.json

[查看配置](../../../../../compute/model-specs/minimax.json) · [接入面说明](../access/model-specs--minimax.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/minimax.json","id":"MiniMax-M2.7"} -->
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
    "tool_use"
  ],
  "spec.supportsReasoning": true,
  "spec.defaultTemperature": 1
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/minimax.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `MiniMax-M2.7` | 204800 / 131072 | 非计价主数据 | `id`→[minimax-models](../SOURCES.md#minimax-models)；`spec.contextWindow`→[minimax-anthropic](../SOURCES.md#minimax-anthropic) |[minimax-models](../SOURCES.md#minimax-models)；[minimax-anthropic](../SOURCES.md#minimax-anthropic) | partial | `b634190fb5f5efc5803b40a3f13e755601e829d347dc0d036ef789602374a11b` |

## 本轮补充核验

本轮读取官方Anthropic SDK型号表明文上下文：M3为1000000，M2.7/2.5/2.1及highspeed为204800。M2.x仅文本和工具相关块，不支持图片/视频；清理API/套餐/sharedspec中误列的vision能力。输出上限、价格、套餐账号可用性不因窗口核验提高状态。

## 本轮补充核验

本轮读取官方Anthropic SDK型号表明文上下文：M3为1000000，M2.7/2.5/2.1及highspeed为204800。M2.x仅文本和工具相关块，不支持图片/视频；清理API/套餐/sharedspec中误列的vision能力。输出上限、价格、套餐账号可用性不因窗口核验提高状态。

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
