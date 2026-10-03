# MiniMax：官网证据目录

[供应商索引](README.md)

核验日期：2026-10-03。这里只登记可复用的官网证据与适用边界，具体模型与接入面分别记录。

## 官网证据

### minimax-models

- 入口：[minimax-models](https://platform.minimax.cn/docs/guides/models-intro.md)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`MiniMax 国内原生多模态目录；不混用国际套餐`。
### minimax-anthropic

- 入口：[minimax-anthropic](https://platform.minimax.cn/docs/api-reference/text-anthropic-api.md)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`MiniMax 国内 Anthropic 兼容；M Plan 与按量模型开放范围区分`。
### minimax-video

- 入口：[minimax-video](https://platform.minimax.cn/docs/api-reference/video-generation-v2-create.md)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`MiniMax 国内原生视频 V2 任务 API`。
### minimax-hailuo

- 入口：[minimax-hailuo](https://platform.minimax.cn/docs/api-reference/video-generation-t2v.md)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`minimax 官方入口；具体地域与接入面待该页面逐字段确认`。

## 已知边界与核验说明

M3.1 Flash Preview 仅在 M Plan/Code 开放，需 adaptive thinking，none/disabled 被拒绝，effort low 至 max、默认 max。H3 使用视频 V2 原生协议，不通过 Anthropic Messages。合并了 Hailuo 2.3 Fast 的大小写重复规格，保留两个 exact 名称和原有非 Agent 路由策略。未由文档确认的输出上限保持缺省。

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
      "scope": "MiniMax 国内原生多模态目录；不混用国际套餐",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "79aec16c3b99d3871ab75de58087b3d1baa40dd79a33b639ef3bc1c079859a46",
      "resolvedUrl": "https://platform.minimax.cn/docs/guides/models-intro.md"
    },
    {
      "id": "minimax-anthropic",
      "url": "https://platform.minimax.cn/docs/api-reference/text-anthropic-api.md",
      "kind": "official-doc",
      "scope": "MiniMax 国内 Anthropic 兼容；M Plan 与按量模型开放范围区分",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "6daf89aa6798bc504662acdeb6ed2a269fae35f94f1fa14559335c87c4ce7142",
      "resolvedUrl": "https://platform.minimax.cn/docs/api-reference/text-anthropic-api.md"
    },
    {
      "id": "minimax-video",
      "url": "https://platform.minimax.cn/docs/api-reference/video-generation-v2-create.md",
      "kind": "official-doc",
      "scope": "MiniMax 国内原生视频 V2 任务 API",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "4dbb502b654cc136930a55285108aa18fec0702db40397431f7058deccb793a5",
      "resolvedUrl": "https://platform.minimax.cn/docs/api-reference/video-generation-v2-create.md"
    },
    {
      "id": "minimax-hailuo",
      "url": "https://platform.minimax.cn/docs/api-reference/video-generation-t2v.md",
      "kind": "official-doc",
      "scope": "minimax 官方入口；具体地域与接入面待该页面逐字段确认",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "cf0a461b04259a227db2ea3ca31ec62086775736afce5cb6e8d0d42c5c8b74fa",
      "resolvedUrl": "https://platform.minimax.cn/docs/api-reference/video-generation-t2v.md"
    }
  ]
}
```
<!-- source-metadata:end -->
