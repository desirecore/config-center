# MiniMax-M2.7：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`MiniMax-M2.7`。
- 核验日期：2026-10-03；本轮增量复核仅覆盖明确列出的字段，其余接入面和参数保持各自状态。
- 2026-10-18 补核：三个接入面的单次输出上限与上下文窗口，以及官网下线通知，见下方「2026-10-18 输出上限与下线通知复核」；其余字段未重新核验。

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
  "maxOutputTokens": 204800,
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
| `MiniMax-M2.7` | 204800 / 204800 | CNY：2.1 / 8.4 | `modelName`→[minimax-models](../SOURCES.md#minimax-models)；`contextWindow`→[minimax-anthropic](../SOURCES.md#minimax-anthropic)；`maxOutputTokens`→[minimax-messages-api](../SOURCES.md#minimax-messages-api) | [minimax-models](../SOURCES.md#minimax-models)；[minimax-anthropic](../SOURCES.md#minimax-anthropic)；[minimax-messages-api](../SOURCES.md#minimax-messages-api) | partial | `60211ae0b2f635b621fc1e4934b57899e980803ead71fd8cf71553603b83c354` |

### compute/coding-plans/minimax-coding.json

[查看配置](../../../../../compute/coding-plans/minimax-coding.json) · [接入面说明](../access/coding-plans--minimax-coding.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/coding-plans/minimax-coding.json","id":"MiniMax-M2.7"} -->
```json
{
  "contextWindow": 204800,
  "maxOutputTokens": 204800,
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
| `MiniMax-M2.7` | 204800 / 204800 | 套餐：未声明 / 未声明 | `modelName`→[minimax-models](../SOURCES.md#minimax-models)；`contextWindow`→[minimax-anthropic](../SOURCES.md#minimax-anthropic)；`maxOutputTokens`→[minimax-messages-api](../SOURCES.md#minimax-messages-api) | [minimax-models](../SOURCES.md#minimax-models)；[minimax-anthropic](../SOURCES.md#minimax-anthropic)；[minimax-messages-api](../SOURCES.md#minimax-messages-api) | partial | `146669f1cf9a059cc4dce24ff8a1094a2af2aa84b3ea7f4f1dccee80225f5795` |

### compute/model-specs/minimax.json

[查看配置](../../../../../compute/model-specs/minimax.json) · [接入面说明](../access/model-specs--minimax.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/minimax.json","id":"MiniMax-M2.7"} -->
```json
{
  "spec.contextWindow": 204800,
  "spec.maxOutputTokens": 204800,
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
| `MiniMax-M2.7` | 204800 / 204800 | 非计价主数据 | `id`→[minimax-models](../SOURCES.md#minimax-models)；`spec.contextWindow`→[minimax-anthropic](../SOURCES.md#minimax-anthropic)；`spec.maxOutputTokens`→[minimax-messages-api](../SOURCES.md#minimax-messages-api) | [minimax-models](../SOURCES.md#minimax-models)；[minimax-anthropic](../SOURCES.md#minimax-anthropic)；[minimax-messages-api](../SOURCES.md#minimax-messages-api) | partial | `a8f175f5b432e6e82240c629886b420746a14a148281646ff76797f23c532839` |

## 本轮补充核验

本轮读取官方Anthropic SDK型号表明文上下文：M3为1000000，M2.7/2.5/2.1及highspeed为204800。M2.x仅文本和工具相关块，不支持图片/视频；清理API/套餐/sharedspec中误列的vision能力。输出上限、价格、套餐账号可用性不因窗口核验提高状态。

## 本轮补充核验

本轮读取官方Anthropic SDK型号表明文上下文：M3为1000000，M2.7/2.5/2.1及highspeed为204800。M2.x仅文本和工具相关块，不支持图片/视频；清理API/套餐/sharedspec中误列的vision能力。输出上限、价格、套餐账号可用性不因窗口核验提高状态。

## 2026-10-18 输出上限与下线通知复核

- 输出上限：[minimax-messages-api](../SOURCES.md#minimax-messages-api) 的 `max_tokens` 说明写明，除 MiniMax-M3.1-Flash-Preview 与 MiniMax-M3 外的其他模型推荐值 65536（64K）、上限 204800（200K），超过上限的内容会被截断；同页 `model` 枚举列出 M2.7、M2.5、M2.1、M2 及各 highspeed，国际站同页（platform.minimax.io）与 OpenAI 兼容 Chat Completions 参考的 `max_completion_tokens` 数值相同。`maxOutputTokens` 表示单次输出上限（客户端出站准入按它拒绝超额请求），登记上限而非推荐值：规格由 131072 更正为 204800。直连（`provider-minimax-001`）与 Token Plan（`provider-minimax-coding-001`）两个接入面都走 `/anthropic` 端点、没有输出覆盖，随规格变为 204800；官网未按 Key 类型另设单次输出上限。
- 上下文窗口：[minimax-anthropic](../SOURCES.md#minimax-anthropic) 型号表仍为 204,800，数值不变。输出上限与窗口数值相同，单次实际可用的输出仍受窗口余量约束。
- 下线通知：[minimax-models](../SOURCES.md#minimax-models) 页首通知 MiniMax M2.5、M2.7 系列 2026-10-19 起停止向新用户开放调用、2026-11-18 正式下线（国际站同页日期相同）；按量付费的存量用户可调用至正式下线日；M Plan 与 Token Plan 中这两个系列的请求自 2026-10-19 起统一路由至 M3.1 Flash Preview，原模型名称保留为兼容入口。尚未到正式下线日，本次不删除条目，只在直连与 Token Plan 条目描述中写明通知；正式下线后再按 tombstones 处置。
- Token Plan 边界：2026-10-19 起该名称在 Token Plan 下实际由 M3.1 Flash Preview 处理，本条目的窗口与输出仍按 M2.7 合同登记（小于 M3.1 Flash Preview 的合同，不会放大请求）；路由后思考参数等行为差异与套餐账号可用性未做账号实测。
- 其他平台：火山方舟、腾讯云、百度千帆套餐里的同名条目（`minimax-m2.5`、`minimax-m2.7`）没有本地窗口和输出数值，旧版客户端规格匹配器会让它们继承本规格，输出上限随之由 131072 变为 204800；这些平台自己的上限未核，客户端从上游「max_tokens 过大」报错学习的输出上限仍只收紧。阿里云百炼两套餐的 MiniMax-M2.5 有本地 8192 覆盖，不受影响。

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
