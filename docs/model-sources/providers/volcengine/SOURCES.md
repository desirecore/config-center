# 火山引擎：官网证据目录

[供应商索引](README.md)

核验日期：2026-10-03。这里只登记可复用的官网证据与适用边界，具体模型与接入面分别记录。

## 官网证据

### volcengine-models

- 入口：[volcengine-models](https://docs.volcengine.com/docs/ark/model-list?lang=zh)
- 类型：`official-doc`；当前读取状态：`shell`；地域/接入面：`volcengine 官方入口；具体地域与接入面待该页面逐字段确认`。
### volcengine-latest

- 入口：[volcengine-latest](https://docs.volcengine.com/docs/ark/latest-model?lang=zh)
- 类型：`official-doc`；当前读取状态：`shell`；地域/接入面：`volcengine 官方入口；具体地域与接入面待该页面逐字段确认`。
### volcengine-plan

- 入口：[volcengine-plan](https://docs.volcengine.com/docs/ark/coding-plan-personal-model-release?lang=zh)
- 类型：`official-doc`；当前读取状态：`shell`；地域/接入面：`volcengine 官方入口；具体地域与接入面待该页面逐字段确认`。
### volcengine-seed

- 入口：[volcengine-seed](https://docs.volcengine.com/docs/82379/2549861)
- 类型：`official-doc`；当前读取状态：`unreadable`；地域/接入面：`volcengine 官方入口；具体地域与接入面待该页面逐字段确认`。

### volcengine-coding-get-started

- 入口：[volcengine-coding-get-started](https://docs.volcengine.com/docs/ark/coding-plan-personal-get-started?lang=zh)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：方舟 Coding Plan 个人版快速开始（浏览器渲染后读取，摘要为渲染正文；页面更新时间 2026-09-23）。

### volcengine-coding-overview

- 入口：[volcengine-coding-overview](https://docs.volcengine.com/docs/ark/coding-plan-personal-plan-overview?lang=zh)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：方舟 Coding Plan 个人版套餐概览（浏览器渲染后读取，摘要为渲染正文；页面更新时间 2026-09-29）。

### volcengine-models-rendered

- 入口：[volcengine-models-rendered](https://docs.volcengine.com/docs/ark/model-list?lang=zh)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：方舟模型列表（浏览器渲染后读取，摘要为渲染正文；页面更新时间 2026-09-28）；2026-10-05 只核对「工具调用能力」表。

## 已知边界与核验说明

官方页面本次返回 JavaScript 页面壳，不能把 HTTP 200 当参数证明。Seed 2.1 Pro/Turbo 当前配置的输入/输出数字与官网最新值需通过控制台或正文继续核实；本次不采用开发者社区文章补数。

2026-10-05 工具调用核对：以上 `volcengine-coding-get-started`、`volcengine-coding-overview`、`volcengine-models-rendered` 只用于核对函数 / 工具调用是否受支持，读取日期 2026-10-05；没有借此复核窗口、价格等其他字段，也没有做账号调用验收。能力标签里只有 `tool_use` 一项以这些来源为依据。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "volcengine",
  "checkedAt": "2026-10-03",
  "sources": [
    {
      "id": "volcengine-models",
      "url": "https://docs.volcengine.com/docs/ark/model-list?lang=zh",
      "kind": "official-doc",
      "scope": "volcengine 官方入口；具体地域与接入面待该页面逐字段确认",
      "retrieval": "shell",
      "checkedAt": "2026-10-03",
      "contentSha256": "f778a4ab9ca6a777e6b48c061c18aca14d3b9c25a02d0415d9375bcb6b7eba9d",
      "resolvedUrl": "https://docs.volcengine.com/docs/ark/model-list?lang=zh"
    },
    {
      "id": "volcengine-latest",
      "url": "https://docs.volcengine.com/docs/ark/latest-model?lang=zh",
      "kind": "official-doc",
      "scope": "volcengine 官方入口；具体地域与接入面待该页面逐字段确认",
      "retrieval": "shell",
      "checkedAt": "2026-10-03",
      "contentSha256": "ec23e84786c64869d37af1ce3ad95ed0ccceeabf47c1b8dce92fae81c62919f1",
      "resolvedUrl": "https://docs.volcengine.com/docs/ark/latest-model?lang=zh"
    },
    {
      "id": "volcengine-plan",
      "url": "https://docs.volcengine.com/docs/ark/coding-plan-personal-model-release?lang=zh",
      "kind": "official-doc",
      "scope": "volcengine 官方入口；具体地域与接入面待该页面逐字段确认",
      "retrieval": "shell",
      "checkedAt": "2026-10-03",
      "contentSha256": "5c92f4be6cd794f2fc3390f4c06c75b965f604bbc2daa1f118de65bf58a0ad38",
      "resolvedUrl": "https://docs.volcengine.com/docs/ark/coding-plan-personal-model-release?lang=zh"
    },
    {
      "id": "volcengine-seed",
      "url": "https://docs.volcengine.com/docs/82379/2549861",
      "kind": "official-doc",
      "scope": "volcengine 官方入口；具体地域与接入面待该页面逐字段确认",
      "retrieval": "unreadable",
      "checkedAt": "2026-10-03",
      "contentSha256": null,
      "resolvedUrl": null
    },
    {
      "id": "volcengine-coding-get-started",
      "url": "https://docs.volcengine.com/docs/ark/coding-plan-personal-get-started?lang=zh",
      "kind": "official-doc",
      "scope": "方舟 Coding Plan 个人版快速开始（浏览器渲染后读取，摘要为渲染正文；页面更新时间 2026-09-23）",
      "retrieval": "fetched",
      "checkedAt": "2026-10-05",
      "contentSha256": "dbd6bc539e6671be232d086ff0c0a9d57314dd534b7151369184b2b40a89f461",
      "resolvedUrl": "https://docs.volcengine.com/docs/ark/coding-plan-personal-get-started?lang=zh"
    },
    {
      "id": "volcengine-coding-overview",
      "url": "https://docs.volcengine.com/docs/ark/coding-plan-personal-plan-overview?lang=zh",
      "kind": "official-doc",
      "scope": "方舟 Coding Plan 个人版套餐概览（浏览器渲染后读取，摘要为渲染正文；页面更新时间 2026-09-29）",
      "retrieval": "fetched",
      "checkedAt": "2026-10-05",
      "contentSha256": "5fd7c037c21f6c8072abd7cbbc31078a7c22c7b2abd35f14826241c636ece4d4",
      "resolvedUrl": "https://docs.volcengine.com/docs/ark/coding-plan-personal-plan-overview?lang=zh"
    },
    {
      "id": "volcengine-models-rendered",
      "url": "https://docs.volcengine.com/docs/ark/model-list?lang=zh",
      "kind": "official-doc",
      "scope": "方舟模型列表（浏览器渲染后读取，摘要为渲染正文；页面更新时间 2026-09-28）；2026-10-05 只核对「工具调用能力」表",
      "retrieval": "fetched",
      "checkedAt": "2026-10-05",
      "contentSha256": "5092413aad51eb2271bef9dfff5e756bd0d28e492efb0569a5311300a43616ba",
      "resolvedUrl": "https://docs.volcengine.com/docs/ark/model-list?lang=zh"
    }
  ]
}
```
<!-- source-metadata:end -->
