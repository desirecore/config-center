# glm-4.7-flashx：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`glm-4.7-flashx`。
- 核验日期：2026-10-03；本次只迁移记录，没有重新核验或提高状态。

## 适用接入面

- [compute/providers/zhipu.json](../access/providers--zhipu.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/zhipu.json

[查看配置](../../../../../compute/providers/zhipu.json) · [接入面说明](../access/providers--zhipu.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/zhipu.json","id":"glm-4.7-flashx"} -->
```json
{
  "contextWindow": 200000,
  "maxOutputTokens": 131072,
  "serviceType": [
    "chat",
    "fast"
  ],
  "capabilities": [
    "chat",
    "fast",
    "long_context",
    "multilingual",
    "tool_use"
  ],
  "defaultTemperature": 1,
  "defaultTopP": 0.95,
  "inputPrice": 0.5,
  "outputPrice": 3,
  "extra.cacheHitPrice": 0.1
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/zhipu.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `glm-4.7-flashx` | 200000 / 131072 | CNY：0.5 / 3 | `modelName`→[glm-pricing](../SOURCES.md#glm-pricing) | [glm-pricing](../SOURCES.md#glm-pricing), [zhipu-glm-4-7-page](../SOURCES.md#zhipu-glm-4-7-page), [zhipu-model-overview](../SOURCES.md#zhipu-model-overview) | partial | `1f1692079bcaa050d7c6ce699b527af6a215cca735befcf11b19e736e26538c6` |

- 2026-10-05 工具调用核对：`capabilities` 增加 `tool_use`。官网 GLM-4.7 系列页含 GLM-4.7-FlashX 页签，系列「能力支持」列有 Function Calling；模型概览的 GLM-4.7-FlashX 条目指向该页。精确 API ID 仍未单独证实，绑定方式不变。依据：[zhipu-glm-4-7-page](../SOURCES.md#zhipu-glm-4-7-page)、[zhipu-model-overview](../SOURCES.md#zhipu-model-overview)。本次只核对工具调用一项，其余标签仍是本仓产品标签，核验状态不变。

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
  "supplier": "zhipu",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
