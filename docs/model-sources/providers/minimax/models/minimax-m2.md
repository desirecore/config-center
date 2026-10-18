# MiniMax-M2：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`MiniMax-M2`。
- 核验日期：2026-10-03；本次只迁移记录，没有重新核验或提高状态。
- 2026-10-18 补核：官网模型列表已标为下线，直连接入面已移除并写入 tombstones；规格的单次输出上限按官网更正，见下方「2026-10-18 下线与输出上限复核」。

## 适用接入面

- [compute/model-specs/minimax.json](../access/model-specs--minimax.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/model-specs/minimax.json

[查看配置](../../../../../compute/model-specs/minimax.json) · [接入面说明](../access/model-specs--minimax.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/minimax.json","id":"MiniMax-M2"} -->
```json
{
  "spec.contextWindow": 204800,
  "spec.maxOutputTokens": 204800,
  "spec.serviceType": [
    "chat"
  ],
  "spec.capabilities": [
    "chat",
    "code",
    "tool_use"
  ],
  "spec.defaultTemperature": 1
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/minimax.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `MiniMax-M2` | 204800 / 204800 | 非计价主数据 | `id`→[minimax-models](../SOURCES.md#minimax-models)；`spec.contextWindow`→[minimax-anthropic](../SOURCES.md#minimax-anthropic)；`spec.maxOutputTokens`→[minimax-messages-api](../SOURCES.md#minimax-messages-api) | [minimax-models](../SOURCES.md#minimax-models)；[minimax-anthropic](../SOURCES.md#minimax-anthropic)；[minimax-messages-api](../SOURCES.md#minimax-messages-api)；[minimax-model-list](../SOURCES.md#minimax-model-list) | partial | `eeff2303efede003e555afd457fb66ce657b9fdff4acb7e21c8556a626bfb1ed` |

## 2026-10-18 下线与输出上限复核

- 下线：[minimax-model-list](../SOURCES.md#minimax-model-list)（模型列表）在「历史模型」表中把 MiniMax-M2.1、MiniMax-M2.1-highspeed、MiniMax-M2 与 M2-her 标为「已下线」，国际站同页写明 Retired 且不再可用；页面没有给出下线日期。[minimax-models](../SOURCES.md#minimax-models) 与调用指南只把它们收进「历史模型」，Messages API 参数参考的 `model` 枚举和定价页「历史模型」仍列出其中的 M2.1、M2.1-highspeed、M2，但这些页面没有说明仍可调用，状态以模型列表页的明确标注为准。直连 `provider-minimax-001` 移除该条目并写入 `tombstones`：客户端合并预置时只真删除本地 `source: preset` 的同名条目，用户自建、云端同步与本地发现来源的条目不受影响；默认映射或显式选择指向该型号时回退到同 Provider 同服务类型的可用模型，固定绑定显示为已下架。
- 规格保留：共享规格仍用于其他网关或用户自建条目的精确匹配，生命周期保持 unknown，不因原厂开放平台下线把规格标为退役；不授权任何接入调用。
- 输出上限：[minimax-messages-api](../SOURCES.md#minimax-messages-api) 的 `max_tokens` 说明写明，除 MiniMax-M3.1-Flash-Preview 与 MiniMax-M3 外的其他模型推荐值 65536（64K）、上限 204800（200K），超过上限的内容会被截断；同页 `model` 枚举列出 M2.7、M2.5、M2.1、M2 及各 highspeed，国际站同页（platform.minimax.io）与 OpenAI 兼容 Chat Completions 参考的 `max_completion_tokens` 数值相同。`maxOutputTokens` 表示单次输出上限（客户端出站准入按它拒绝超额请求），登记上限而非推荐值：规格由 131072 更正为 204800。
- 上下文窗口：[minimax-anthropic](../SOURCES.md#minimax-anthropic) 型号表列出 MiniMax-M2 上下文 204,800，与规格一致，本次补记为已核字段。输出上限与窗口数值相同，单次实际可用的输出仍受窗口余量约束。

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
