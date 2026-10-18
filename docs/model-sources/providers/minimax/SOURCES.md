# MiniMax：官网证据目录

[供应商索引](README.md)

核验日期：2026-10-03；2026-10-18 补核 MiniMax-M3 输出上限与窗口。这里只登记可复用的官网证据与适用边界，具体模型与接入面分别记录。

## 官网证据

### minimax-models

- 入口：[minimax-models](https://platform.minimax.cn/docs/guides/models-intro.md)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`MiniMax 国内原生多模态目录；不混用国际套餐`。
### minimax-anthropic

- 入口：[minimax-anthropic](https://platform.minimax.cn/docs/api-reference/text-anthropic-api.md)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`MiniMax 国内 Anthropic 兼容；M Plan 与按量模型开放范围区分`。
### minimax-messages-api

- 入口：[minimax-messages-api](https://platform.minimax.cn/docs/api-reference/text-chat-anthropic.md)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`MiniMax 国内 Anthropic 兼容 Messages API 参数参考（/anthropic/v1/messages）；按模型给出 max_tokens 推荐值与上限，不区分按量与订阅 Key`。
### minimax-video

- 入口：[minimax-video](https://platform.minimax.cn/docs/api-reference/video-generation-v2-create.md)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`MiniMax 国内原生视频 V2 任务 API`。
### minimax-hailuo

- 入口：[minimax-hailuo](https://platform.minimax.cn/docs/api-reference/video-generation-t2v.md)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`minimax 官方入口；具体地域与接入面待该页面逐字段确认`。

## 已知边界与核验说明

M3.1 Flash Preview 仅在 M Plan/Code 开放，需 adaptive thinking，none/disabled 被拒绝，effort low 至 max、默认 max。H3 使用视频 V2 原生协议，不通过 Anthropic Messages。合并了 Hailuo 2.3 Fast 的大小写重复规格，保留两个 exact 名称和原有非 Agent 路由策略。未由文档确认的输出上限保持缺省。

2026-10-18 输出上限核对：`minimax-messages-api`（Messages API 参数参考）的 `max_tokens` 字段说明写明 MiniMax-M3.1-Flash-Preview 和 MiniMax-M3 推荐值 131072（128K）、上限 524288（512K），其他模型推荐值 65536（64K）、上限 204800（200K），思考 token 计入该上限；国际站同页（platform.minimax.io）英文说明数值相同，OpenAI 兼容 Chat Completions 参考的 `max_completion_tokens` 也是同一组数值。本仓 `maxOutputTokens` 表示单次输出上限（客户端出站准入按它拒绝超额请求），登记官网上限而非推荐值，据此把 MiniMax-M3 规格由 512000 更正为 524288；直连与 Token Plan 两个接入面原先的 131072 只是沿用旧副本（V2 标注 `inherited-not-reverified`），二者都走同一 `/anthropic` 端点，官网没有按 Key 类型另设单次输出上限，于是删去接入覆盖、改为继承规格。同日复读 `minimax-anthropic`：MiniMax-M3 上下文仍为 1,000,000。M Plan 上线后现行套餐文档只列 M3.1 Flash Preview，Token Plan 老用户「可以持续使用最新模型」，没有再逐个列出 M3；Token Plan 账号下 M3 是否仍可调用未做账号实测。本次只核对输出上限与窗口，M2.x 的 131072 与官网上限 204800 的差异未处理。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "minimax",
  "checkedAt": "2026-10-03",
  "sources": [
    {
      "id": "minimax-models",
      "url": "https://platform.minimax.cn/docs/guides/models-intro.md",
      "kind": "official-doc",
      "scope": "本轮读取 minimax 官方 minimax-models 页面；按单模型记录限定字段与接入面",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "79aec16c3b99d3871ab75de58087b3d1baa40dd79a33b639ef3bc1c079859a46",
      "resolvedUrl": "https://platform.minimax.cn/docs/guides/models-intro.md"
    },
    {
      "id": "minimax-anthropic",
      "url": "https://platform.minimax.cn/docs/api-reference/text-anthropic-api.md",
      "kind": "official-doc",
      "scope": "本轮读取 minimax 官方 minimax-anthropic 页面；按单模型记录限定字段与接入面",
      "retrieval": "fetched",
      "checkedAt": "2026-10-18",
      "contentSha256": "723f562c60592f444e17cf087bd3ccfe6dc4e8b0e8c3438c2c08144aed6853ed",
      "resolvedUrl": "https://platform.minimax.cn/docs/api-reference/text-anthropic-api.md"
    },
    {
      "id": "minimax-messages-api",
      "url": "https://platform.minimax.cn/docs/api-reference/text-chat-anthropic.md",
      "kind": "official-doc",
      "scope": "MiniMax 国内 Anthropic 兼容 Messages API 参数参考；max_tokens 推荐值与上限按模型给出，不区分按量与订阅 Key",
      "retrieval": "fetched",
      "checkedAt": "2026-10-18",
      "contentSha256": "8519abe21561aa22065f1c9b2559b93e1aa922f5c9af92406798b7972c09c063",
      "resolvedUrl": "https://platform.minimax.cn/docs/api-reference/text-chat-anthropic.md"
    },
    {
      "id": "minimax-video",
      "url": "https://platform.minimax.cn/docs/api-reference/video-generation-v2-create.md",
      "kind": "official-doc",
      "scope": "本轮读取 minimax 官方 minimax-video 页面；按单模型记录限定字段与接入面",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "4dbb502b654cc136930a55285108aa18fec0702db40397431f7058deccb793a5",
      "resolvedUrl": "https://platform.minimax.cn/docs/api-reference/video-generation-v2-create.md"
    },
    {
      "id": "minimax-hailuo",
      "url": "https://platform.minimax.cn/docs/api-reference/video-generation-t2v.md",
      "kind": "official-doc",
      "scope": "本轮读取 minimax 官方 minimax-hailuo 页面；按单模型记录限定字段与接入面",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "cf0a461b04259a227db2ea3ca31ec62086775736afce5cb6e8d0d42c5c8b74fa",
      "resolvedUrl": "https://platform.minimax.cn/docs/api-reference/video-generation-t2v.md"
    }
  ]
}
```
<!-- source-metadata:end -->
