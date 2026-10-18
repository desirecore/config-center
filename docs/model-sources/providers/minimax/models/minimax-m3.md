# MiniMax-M3：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`MiniMax-M3`。
- 核验日期：2026-10-03；本轮增量复核仅覆盖明确列出的字段，其余接入面和参数保持各自状态。
- 2026-10-18 补核：三个接入面的输出上限与上下文窗口，见下方「2026-10-18 输出上限与窗口复核」；其余字段未重新核验。

## 适用接入面

- [compute/providers/minimax.json](../access/providers--minimax.md)
- [compute/coding-plans/minimax-coding.json](../access/coding-plans--minimax-coding.md)
- [compute/model-specs/minimax.json](../access/model-specs--minimax.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/minimax.json

[查看配置](../../../../../compute/providers/minimax.json) · [接入面说明](../access/providers--minimax.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/minimax.json","id":"MiniMax-M3"} -->
```json
{
  "contextWindow": 1000000,
  "maxOutputTokens": 524288,
  "serviceType": [
    "chat",
    "reasoning",
    "vision"
  ],
  "capabilities": [
    "chat",
    "reasoning",
    "code",
    "tool_use",
    "agent",
    "vision",
    "long_context"
  ],
  "defaultTemperature": 1,
  "defaultTopP": 0.95,
  "inputPrice": 2.1,
  "outputPrice": 8.4,
  "extra.pricingTiers": [
    {
      "maxInputTokens": 512000,
      "inputPrice": 2.1,
      "outputPrice": 8.4,
      "cacheReadPrice": 0.42
    },
    {
      "maxInputTokens": 1000000,
      "inputPrice": 4.2,
      "outputPrice": 16.8,
      "cacheReadPrice": 0.84
    }
  ],
  "extra.pricingNotes": "MiniMax 国内开放平台按量计费永久五折价格。"
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/minimax.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `MiniMax-M3` | 1000000 / 524288 | CNY：2.1 / 8.4 | `modelName`→[minimax-models](../SOURCES.md#minimax-models)；`contextWindow`→[minimax-anthropic](../SOURCES.md#minimax-anthropic)；`maxOutputTokens`→[minimax-messages-api](../SOURCES.md#minimax-messages-api) | [minimax-models](../SOURCES.md#minimax-models)；[minimax-anthropic](../SOURCES.md#minimax-anthropic)；[minimax-messages-api](../SOURCES.md#minimax-messages-api) | partial | `eb5c56c9141d711d78c9bf9e6a7ab856976966805a6fc35ce9b30512d063635c` |

### compute/coding-plans/minimax-coding.json

[查看配置](../../../../../compute/coding-plans/minimax-coding.json) · [接入面说明](../access/coding-plans--minimax-coding.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/coding-plans/minimax-coding.json","id":"MiniMax-M3"} -->
```json
{
  "contextWindow": 1000000,
  "maxOutputTokens": 524288,
  "serviceType": [
    "chat",
    "reasoning"
  ],
  "capabilities": [
    "chat",
    "reasoning",
    "code",
    "tool_use",
    "vision",
    "agent",
    "long_context"
  ]
}
```
<!-- source-details:end -->

<!-- source-config: compute/coding-plans/minimax-coding.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `MiniMax-M3` | 1000000 / 524288 | 套餐：未声明 / 未声明 | `modelName`→[minimax-models](../SOURCES.md#minimax-models)；`contextWindow`→[minimax-anthropic](../SOURCES.md#minimax-anthropic)；`maxOutputTokens`→[minimax-messages-api](../SOURCES.md#minimax-messages-api) | [minimax-models](../SOURCES.md#minimax-models)；[minimax-anthropic](../SOURCES.md#minimax-anthropic)；[minimax-messages-api](../SOURCES.md#minimax-messages-api) | partial | `9bc450cfdc32b06a96d9c07bf34cbc2ac3633ac8e073ee67fc02b62a90319538` |

### compute/model-specs/minimax.json

[查看配置](../../../../../compute/model-specs/minimax.json) · [接入面说明](../access/model-specs--minimax.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/minimax.json","id":"MiniMax-M3"} -->
```json
{
  "spec.contextWindow": 1000000,
  "spec.maxOutputTokens": 524288,
  "spec.serviceType": [
    "chat"
  ],
  "spec.capabilities": [
    "chat",
    "reasoning",
    "code",
    "vision",
    "video_understanding",
    "tool_use",
    "long_context"
  ],
  "spec.supportsReasoning": true,
  "spec.defaultTemperature": 1,
  "routing.tier": "balanced",
  "routing.routingPriority": 30,
  "routing.eligibleForAgent": true,
  "routing.reasoning": {
    "supportedModes": [
      "auto",
      "off",
      "minimal",
      "low",
      "medium",
      "high",
      "xhigh"
    ],
    "defaultMode": "medium"
  }
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/minimax.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `MiniMax-M3` | 1000000 / 524288 | 非计价主数据 | `id`→[minimax-models](../SOURCES.md#minimax-models)；`spec.contextWindow`→[minimax-anthropic](../SOURCES.md#minimax-anthropic)；`spec.maxOutputTokens`→[minimax-messages-api](../SOURCES.md#minimax-messages-api) | [minimax-models](../SOURCES.md#minimax-models)；[minimax-anthropic](../SOURCES.md#minimax-anthropic)；[minimax-messages-api](../SOURCES.md#minimax-messages-api) | partial | `a098b8ab3ea7179283d0e84d7a6e89e03f91d3d88cb25d3af78fe2c9eb60d240` |

## 本轮补充核验

本轮读取官方Anthropic SDK型号表明文上下文：M3为1000000，M2.7/2.5/2.1及highspeed为204800。M2.x仅文本和工具相关块，不支持图片/视频；清理API/套餐/sharedspec中误列的vision能力。输出上限、价格、套餐账号可用性不因窗口核验提高状态。

## 本轮补充核验

本轮读取官方Anthropic SDK型号表明文上下文：M3为1000000，M2.7/2.5/2.1及highspeed为204800。M2.x仅文本和工具相关块，不支持图片/视频；清理API/套餐/sharedspec中误列的vision能力。输出上限、价格、套餐账号可用性不因窗口核验提高状态。

## 2026-10-18 输出上限与窗口复核

- 输出上限：[minimax-messages-api](../SOURCES.md#minimax-messages-api) 的 `max_tokens` 说明写明 MiniMax-M3 推荐值 131072（128K）、上限 524288（512K），思考 token 计入该上限；国际站同页与 OpenAI 兼容 `max_completion_tokens` 数值相同。`maxOutputTokens` 登记上限 524288：规格由 512000 更正为 524288；直连（`provider-minimax-001`）与 Token Plan（`provider-minimax-coding-001`）两个接入面原先的 131072 来自旧副本，二者同为 `/anthropic` 端点，官网未按 Key 类型另设单次输出上限，V2 删除这两条接入覆盖、改为继承规格。
- 上下文窗口：[minimax-anthropic](../SOURCES.md#minimax-anthropic) 型号表仍为 1,000,000，三个接入面一致，数值不变。
- 边界：Token Plan 接入面只核对了端点级的参数合同。M Plan 上线后现行套餐文档只列 M3.1 Flash Preview，没有再逐个列出 M3；Token Plan 账号下 M3 是否仍可调用未做账号实测。推荐值 131072 不是硬上限，客户端请求多大的 `max_tokens` 属于客户端策略，不由本条目表达。

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
