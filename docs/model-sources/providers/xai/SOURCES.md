# xAI：官网证据目录

[供应商索引](README.md)

核验日期：2026-10-03。这里只登记可复用的官网证据与适用边界，具体模型与接入面分别记录。

## 官网证据

### xai

- 入口：[xai](https://docs.x.ai/developers/release-notes)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`xai 官方入口；具体地域与接入面待该页面逐字段确认`。

### grok43-model

- 入口：[grok43-model](https://docs.x.ai/developers/models/grok-4.3)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：xAI Grok4.3 直连 API；USD 标准价格。

## 已知边界与核验说明

已登记官方入口并尝试读取。表中仅标为已核字段的部分有此次核对记录；其余存量参数待逐字段复核。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "xai",
  "checkedAt": "2026-10-03",
  "sources": [
    {
      "id": "xai",
      "url": "https://docs.x.ai/developers/release-notes",
      "kind": "official-doc",
      "scope": "xai 官方入口；具体地域与接入面待该页面逐字段确认",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "15620ca6445ab3d08a0bfb7e42ea5ade12bac808ef11df763a99cd865ae6c7ae",
      "resolvedUrl": "https://docs.x.ai/developers/release-notes"
    },
    {
      "id": "grok43-model",
      "url": "https://docs.x.ai/developers/models/grok-4.3",
      "kind": "official-doc",
      "scope": "xAI Grok4.3 直连 API；USD 标准价格",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "bd44aac101032c9eb9cc2896d86c19f2f3233301ac86a32c2efa0249239bbf32",
      "resolvedUrl": "https://docs.x.ai/developers/models/grok-4.3"
    }
  ]
}
```
<!-- source-metadata:end -->

## Grok 4.3 档位差异

本轮模型页 Capabilities 明确 none/low/medium/high；Details 表另列 xhigh，存在同页差异。仅采用四个一致档位，默认 low 有明确记录。xhigh 需取得稳定 API 规格或授权请求证据后再开放；未做账号调用验收。
