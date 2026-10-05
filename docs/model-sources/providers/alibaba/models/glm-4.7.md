# glm-4.7：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`glm-4.7`。
- 核验日期：2026-10-03；本次只迁移记录，没有重新核验或提高状态。

## 适用接入面

- [compute/coding-plans/dashscope-coding.json](../access/coding-plans--dashscope-coding.md)
- [compute/coding-plans/dashscope-token-plan.json](../access/coding-plans--dashscope-token-plan.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/coding-plans/dashscope-coding.json

[查看配置](../../../../../compute/coding-plans/dashscope-coding.json) · [接入面说明](../access/coding-plans--dashscope-coding.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/coding-plans/dashscope-coding.json","id":"glm-4.7"} -->
```json
{
  "contextWindow": 202752,
  "maxOutputTokens": 131072,
  "serviceType": [
    "chat"
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

<!-- source-config: compute/coding-plans/dashscope-coding.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `glm-4.7` | 202752 / 131072 | 套餐：未声明 / 未声明 | `modelName`→[qwen-pricing](../SOURCES.md#qwen-pricing) | [qwen-pricing](../SOURCES.md#qwen-pricing), [bailian-glm-4-7-caps](../SOURCES.md#bailian-glm-4-7-caps), [bailian-coding-plan-tools](../SOURCES.md#bailian-coding-plan-tools), [bailian-function-calling](../SOURCES.md#bailian-function-calling) | partial | `6176023da60e0822986ef3dd927fad84d1d1e07eef6c9af3b98fb7a860616945` |

- 2026-10-05 工具调用核对：`capabilities` 增加 `tool_use`。百炼 glm-4.7 型号页模型能力表 Function Calling 支持；Coding Plan 概述的支持模型含 glm-4.7。百炼 Function Calling 指南注明调用 GLM 系列需在请求中传 tool_stream=true，否则不返回 tool_calls；套餐端点是否同样要求未核。依据：[bailian-glm-4-7-caps](../SOURCES.md#bailian-glm-4-7-caps)、[bailian-coding-plan-tools](../SOURCES.md#bailian-coding-plan-tools)、[bailian-function-calling](../SOURCES.md#bailian-function-calling)。本次只核对工具调用一项，其余标签仍是本仓产品标签，核验状态不变。

### compute/coding-plans/dashscope-token-plan.json

[查看配置](../../../../../compute/coding-plans/dashscope-token-plan.json) · [接入面说明](../access/coding-plans--dashscope-token-plan.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/coding-plans/dashscope-token-plan.json","id":"glm-4.7"} -->
```json
{
  "contextWindow": 200000,
  "maxOutputTokens": 131072,
  "serviceType": [
    "chat"
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

<!-- source-config: compute/coding-plans/dashscope-token-plan.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `glm-4.7` | 200000 / 131072 | 套餐：未声明 / 未声明 | `modelName`→[qwen-pricing](../SOURCES.md#qwen-pricing) | [qwen-pricing](../SOURCES.md#qwen-pricing) | partial | `edb6d1644b051d34288744e827e6cfce1fa61fa49f23844a64e8cd6decc41e23` |

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
