# MiniMax：官网证据目录

[供应商索引](README.md)

核验日期：2026-10-03；2026-10-18 补核 MiniMax-M3 输出上限与窗口，同日补核 M2.x 输出上限与型号下线状态。这里只登记可复用的官网证据与适用边界，具体模型与接入面分别记录。

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
### minimax-model-list

- 入口：[minimax-model-list](https://platform.minimax.cn/docs/faq/models.md)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`MiniMax 国内开放平台模型列表；分「可用模型」与「历史模型（均已下线）」，不给下线日期`。
### minimax-text-chat

- 入口：[minimax-text-chat](https://platform.minimax.cn/docs/guides/text-chat.md)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`M2-her 对话模型指南；OpenAI 兼容接口调用，型号表上下文写作 64 K（简写）`。
### minimax-video

- 入口：[minimax-video](https://platform.minimax.cn/docs/api-reference/video-generation-v2-create.md)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`MiniMax 国内原生视频 V2 任务 API`。
### minimax-hailuo

- 入口：[minimax-hailuo](https://platform.minimax.cn/docs/api-reference/video-generation-t2v.md)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`minimax 官方入口；具体地域与接入面待该页面逐字段确认`。

## 已知边界与核验说明

M3.1 Flash Preview 仅在 M Plan/Code 开放，需 adaptive thinking，none/disabled 被拒绝，effort low 至 max、默认 max。H3 使用视频 V2 原生协议，不通过 Anthropic Messages。合并了 Hailuo 2.3 Fast 的大小写重复规格，保留两个 exact 名称和原有非 Agent 路由策略。未由文档确认的输出上限保持缺省。

2026-10-18 输出上限核对：`minimax-messages-api`（Messages API 参数参考）的 `max_tokens` 字段说明写明 MiniMax-M3.1-Flash-Preview 和 MiniMax-M3 推荐值 131072（128K）、上限 524288（512K），其他模型推荐值 65536（64K）、上限 204800（200K），思考 token 计入该上限；国际站同页（platform.minimax.io）英文说明数值相同，OpenAI 兼容 Chat Completions 参考的 `max_completion_tokens` 也是同一组数值。本仓 `maxOutputTokens` 表示单次输出上限（客户端出站准入按它拒绝超额请求），登记官网上限而非推荐值，据此把 MiniMax-M3 规格由 512000 更正为 524288；直连与 Token Plan 两个接入面原先的 131072 只是沿用旧副本（V2 标注 `inherited-not-reverified`），二者都走同一 `/anthropic` 端点，官网没有按 Key 类型另设单次输出上限，于是删去接入覆盖、改为继承规格。同日复读 `minimax-anthropic`：MiniMax-M3 上下文仍为 1,000,000。M Plan 上线后现行套餐文档只列 M3.1 Flash Preview，Token Plan 老用户「可以持续使用最新模型」，没有再逐个列出 M3；Token Plan 账号下 M3 是否仍可调用未做账号实测。本次只核对输出上限与窗口，M2.x 的 131072 与官网上限 204800 的差异未处理。

2026-10-18 M2.x 输出上限与下线核对：`minimax-messages-api` 同一 `max_tokens` 说明中「其他模型」推荐值 65536、上限 204800（200K），同页 `model` 枚举列出 M2.7、M2.5、M2.1、M2 及各 highspeed，国际站同页与 OpenAI 兼容 `max_completion_tokens` 数值相同；据此把 7 个 M2.x 规格的 `maxOutputTokens` 由 131072 更正为 204800，直连与 Token Plan 条目没有输出覆盖、随规格变化。`minimax-model-list` 把 MiniMax-M2.1、MiniMax-M2.1-highspeed、MiniMax-M2、M2-her 列为已下线（国际站同页 Retired），直连 Provider 移除这 4 条并写入 tombstones，共享规格保留；Messages API 参数参考与 Anthropic SDK 页的 `model` 枚举、定价页「历史模型」仍列出 M2.1、M2.1-highspeed、M2，这些页面没有说明仍可调用，状态以模型列表页为准。M2-her 的官方指南 `minimax-text-chat` 只给出 64 K 上下文（简写）、未给输出上限，且走 OpenAI 兼容接口、不在 `/anthropic` 支持型号内，原规格 204800 / 131072 没有来源，改为未声明。`minimax-models` 页首通知 M2.5、M2.7 系列 2026-10-19 起停止向新用户开放调用、2026-11-18 正式下线，M Plan 与 Token Plan 中这两个系列的请求自 2026-10-19 起统一路由至 M3.1 Flash Preview、原名称保留为兼容入口；尚未到下线日，本次只在直连与 Token Plan 条目描述中写明，正式下线后另行按 tombstones 处置。本次未处理：Anthropic SDK 页写明 M2.x 的 `top_p` 默认值 0.9，直连条目 `defaultTopP` 0.95 为沿用值（V2 标 inherited-not-reverified）；模型列表页与定价页把 music-2.6、music-cover、Music-2.5+、Music-2.5 等音乐型号标为已下线，而 `minimax-models` 的音乐通知与本仓条目描述仍写「历史付费用户可继续使用」，官网两处说法不一致，需另行核对后再处置。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

## 2026-10-28 新型号核对

本轮补入 M3.1 Flash 正式版：原厂 1000000 窗口、524288 单次输出（131072 是推荐值），强制 adaptive thinking，low/medium/high/xhigh/max，默认 max；采样固定并忽略入参。国内价格为 CNY 1/4/0.1，不能换用国际 USD 0.15/0.60/0.015。M Plan 三档均可用，Preview 已下线且旧名转发正式版：预置改用正式 ID，旧名写入该套餐 tombstones，原规格仅作历史解析；未以新模型添加为由移除其他存量条目。

### minimax-flash31-sdk

- 入口：[minimax-flash31-sdk](https://platform.minimax.cn/docs/api-reference/text-anthropic-api.md)。
- 读取日期：2026-10-28；状态：`fetched`；最终地址：https://platform.minimax.cn/docs/api-reference/text-anthropic-api.md。
- 适用范围：国内 Anthropic 兼容接口；正式 ID、1,000,000 窗口、文本/图像/视频/工具、强制 adaptive、五档默认 max、固定采样。

### minimax-flash31-messages

- 入口：[minimax-flash31-messages](https://platform.minimax.cn/docs/api-reference/text-chat-anthropic.md)。
- 读取日期：2026-10-28；状态：`fetched`；最终地址：https://platform.minimax.cn/docs/api-reference/text-chat-anthropic.md。
- 适用范围：MiniMax-M3.1-Flash 单次 max_tokens 推荐 131072、允许上限 524288；思考计入输出预算。

### minimax-flash31-pricing

- 入口：[minimax-flash31-pricing](https://platform.minimax.cn/docs/pricing/overview.md)。
- 读取日期：2026-10-28；状态：`fetched`；最终地址：https://platform.minimax.cn/docs/pricing/overview.md。
- 适用范围：国内 CNY/百万 tokens Standard；输入 1、输出 4、缓存读取 0.1。

### minimax-flash31-plan

- 入口：[minimax-flash31-plan](https://platform.minimax.cn/docs/m-plan/intro.md)。
- 读取日期：2026-10-28；状态：`fetched`；最终地址：https://platform.minimax.cn/docs/m-plan/intro.md。
- 适用范围：M Plan 各档支持正式 M3.1 Flash；Preview 已下线且旧名转发正式版。

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
      "checkedAt": "2026-10-18",
      "contentSha256": "8c7dd5559f403cd0bf67915a4b1866885c8524dce67e48280f9643b729c9f073",
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
      "id": "minimax-model-list",
      "url": "https://platform.minimax.cn/docs/faq/models.md",
      "kind": "official-doc",
      "scope": "MiniMax 国内开放平台模型列表；区分可用模型与已下线的历史模型，不给下线日期",
      "retrieval": "fetched",
      "checkedAt": "2026-10-18",
      "contentSha256": "c146a865975cbbabaa3da441484c5e8d78fb274b8e3d03847907fbc08c30bc8f",
      "resolvedUrl": "https://platform.minimax.cn/docs/faq/models.md"
    },
    {
      "id": "minimax-text-chat",
      "url": "https://platform.minimax.cn/docs/guides/text-chat.md",
      "kind": "official-doc",
      "scope": "M2-her 对话模型指南；OpenAI 兼容接口调用，型号表上下文写作 64 K（简写），未给输出上限",
      "retrieval": "fetched",
      "checkedAt": "2026-10-18",
      "contentSha256": "cff2ffbcd0e0ae00cbc32d6baf5332700023f9692d690515b23538fdedf969a4",
      "resolvedUrl": "https://platform.minimax.cn/docs/guides/text-chat.md"
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
    },
    {
      "id": "minimax-flash31-sdk",
      "url": "https://platform.minimax.cn/docs/api-reference/text-anthropic-api.md",
      "kind": "official-doc",
      "scope": "国内 Anthropic 兼容接口；正式 ID、1,000,000 窗口、文本/图像/视频/工具、强制 adaptive、五档默认 max、固定采样",
      "retrieval": "fetched",
      "checkedAt": "2026-10-28",
      "contentSha256": "40fcb7555eb76c26ac57f5ea27111fb4c669f25b32db81ecf8fa58c645ebc6d2",
      "resolvedUrl": "https://platform.minimax.cn/docs/api-reference/text-anthropic-api.md"
    },
    {
      "id": "minimax-flash31-messages",
      "url": "https://platform.minimax.cn/docs/api-reference/text-chat-anthropic.md",
      "kind": "official-doc",
      "scope": "MiniMax-M3.1-Flash 单次 max_tokens 推荐 131072、允许上限 524288；思考计入输出预算",
      "retrieval": "fetched",
      "checkedAt": "2026-10-28",
      "contentSha256": "14d65b5a7d61f728066ad7c33bf80f938184da5fcbe659db0234a1cf5fadbb29",
      "resolvedUrl": "https://platform.minimax.cn/docs/api-reference/text-chat-anthropic.md"
    },
    {
      "id": "minimax-flash31-pricing",
      "url": "https://platform.minimax.cn/docs/pricing/overview.md",
      "kind": "official-doc",
      "scope": "国内 CNY/百万 tokens Standard；输入 1、输出 4、缓存读取 0.1",
      "retrieval": "fetched",
      "checkedAt": "2026-10-28",
      "contentSha256": "4e761390e9f6e0371d59c3595efcdd0d74b91a488b93a5837126f912102a4d1d",
      "resolvedUrl": "https://platform.minimax.cn/docs/pricing/overview.md"
    },
    {
      "id": "minimax-flash31-plan",
      "url": "https://platform.minimax.cn/docs/m-plan/intro.md",
      "kind": "official-doc",
      "scope": "M Plan 各档支持正式 M3.1 Flash；Preview 已下线且旧名转发正式版",
      "retrieval": "fetched",
      "checkedAt": "2026-10-28",
      "contentSha256": "4cfd6c85bbbf4fa5cc5832733e7a84bd4d9beacf3cd8d28651200b3d69422d95",
      "resolvedUrl": "https://platform.minimax.cn/docs/m-plan/intro.md"
    }
  ]
}
```
<!-- source-metadata:end -->
