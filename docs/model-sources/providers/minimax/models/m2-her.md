# M2-her：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`M2-her`。
- 核验日期：2026-10-03；本次只迁移记录，没有重新核验或提高状态。
- 2026-10-18 补核：官网模型列表已标为下线，直连接入面已移除并写入 tombstones；规格中与官网矛盾的窗口和输出数值改为未声明，见下方「2026-10-18 下线与参数复核」。

## 适用接入面

- [compute/model-specs/minimax.json](../access/model-specs--minimax.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/model-specs/minimax.json

[查看配置](../../../../../compute/model-specs/minimax.json) · [接入面说明](../access/model-specs--minimax.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/minimax.json","id":"M2-her"} -->
```json
{
  "spec.serviceType": [
    "chat"
  ],
  "spec.capabilities": [
    "chat",
    "roleplay"
  ],
  "spec.defaultTemperature": 1
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/minimax.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `M2-her` | 未声明 / 未声明 | 非计价主数据 | 待核实 | [minimax-models](../SOURCES.md#minimax-models)；[minimax-model-list](../SOURCES.md#minimax-model-list)；[minimax-text-chat](../SOURCES.md#minimax-text-chat) | pending | `91c0e189025a45e5a2c49511266cfa4df39ffd9256f43b73b30bbe9f8a9050fe` |

## 2026-10-18 下线与参数复核

- 下线：[minimax-model-list](../SOURCES.md#minimax-model-list)（模型列表）在「历史模型」表中把 MiniMax-M2.1、MiniMax-M2.1-highspeed、MiniMax-M2 与 M2-her 标为「已下线」，国际站同页写明 Retired 且不再可用；页面没有给出下线日期。[minimax-models](../SOURCES.md#minimax-models) 与调用指南只把它们收进「历史模型」，Messages API 参数参考的 `model` 枚举和定价页「历史模型」仍列出其中的 M2.1、M2.1-highspeed、M2，但这些页面没有说明仍可调用，状态以模型列表页的明确标注为准。直连 `provider-minimax-001` 移除该条目并写入 `tombstones`：客户端合并预置时只真删除本地 `source: preset` 的同名条目，用户自建、云端同步与本地发现来源的条目不受影响；默认映射或显式选择指向该型号时回退到同 Provider 同服务类型的可用模型，固定绑定显示为已下架。
- 接口：[minimax-text-chat](../SOURCES.md#minimax-text-chat)（对话模型指南）说明 M2-her 通过 OpenAI 兼容接口（`https://api.minimax.cn/v1` 的 Chat Completions，或 `/v1/text/chatcompletion_v2`）调用；Messages API 参数参考与 Anthropic SDK 页的支持型号都不含 M2-her，直连条目所用的 `/anthropic` 端点本就不在其官方支持范围内。
- 窗口与输出：该指南型号表把上下文窗口写作「64 K」（简写，未给整数），没有给出单次输出上限；调用示例里的 `max_completion_tokens` 2048 只是示例值。原规格 204800 / 131072 与之矛盾且没有来源，改为未声明（`spec.contextWindow`、`spec.maxOutputTokens` 均缺省），不凭 K 简写换算整数。
- 状态维持 pending：本次没有登记任何新的官网数值；规格仍保留身份与能力标签，生命周期保持 unknown。

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
