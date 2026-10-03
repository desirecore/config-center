# MiniMax-M2.5：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`MiniMax-M2.5`。
- 核验日期：2026-10-03；本次只迁移记录，没有重新核验或提高状态。

## 适用接入面

- [compute/coding-plans/dashscope-coding.json](../access/coding-plans--dashscope-coding.md)
- [compute/coding-plans/dashscope-token-plan.json](../access/coding-plans--dashscope-token-plan.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/coding-plans/dashscope-coding.json

[查看配置](../../../../../compute/coding-plans/dashscope-coding.json) · [接入面说明](../access/coding-plans--dashscope-coding.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/coding-plans/dashscope-coding.json","id":"MiniMax-M2.5"} -->
```json
{
  "contextWindow": 196608,
  "maxOutputTokens": 8192,
  "serviceType": [
    "chat"
  ],
  "capabilities": [
    "chat",
    "reasoning",
    "code",
    "tool_use",
    "long_context"
  ]
}
```
<!-- source-details:end -->

<!-- source-config: compute/coding-plans/dashscope-coding.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `MiniMax-M2.5` | 196608 / 8192 | 套餐：未声明 / 未声明 | `modelName`→[qwen-pricing](../SOURCES.md#qwen-pricing) | [qwen-pricing](../SOURCES.md#qwen-pricing) | partial | `b8350af7d08d0f710e1aa3c6e53513cc71c01295d614c26b16486bbc19065606` |

### compute/coding-plans/dashscope-token-plan.json

[查看配置](../../../../../compute/coding-plans/dashscope-token-plan.json) · [接入面说明](../access/coding-plans--dashscope-token-plan.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/coding-plans/dashscope-token-plan.json","id":"MiniMax-M2.5"} -->
```json
{
  "contextWindow": 196608,
  "maxOutputTokens": 8192,
  "serviceType": [
    "chat"
  ],
  "capabilities": [
    "chat",
    "reasoning",
    "code",
    "tool_use",
    "long_context"
  ]
}
```
<!-- source-details:end -->

<!-- source-config: compute/coding-plans/dashscope-token-plan.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `MiniMax-M2.5` | 196608 / 8192 | 套餐：未声明 / 未声明 | `modelName`→[qwen-pricing](../SOURCES.md#qwen-pricing) | [qwen-pricing](../SOURCES.md#qwen-pricing) | partial | `bc8c83ca525ea638a5615fc0d846492b82ad3a6b7c57afd80348d536e55395fe` |

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
