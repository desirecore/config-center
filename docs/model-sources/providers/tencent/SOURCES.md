# 腾讯混元：官网证据目录

[供应商索引](README.md)

核验日期：2026-10-03。这里只登记可复用的官网证据与适用边界，具体模型与接入面分别记录。

## 官网证据

### tencent

- 入口：[tencent](https://www.tencent.com/tencent-releases-and-open-sources-tencent-hy4-preview/)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`tencent 官方入口；具体地域与接入面待该页面逐字段确认`。

### tokenhub-model-list

- 入口：[tokenhub-model-list](https://cloud.tencent.com/document/product/1823/130051)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：腾讯云 TokenHub 模型列表；2026-10-05 只核对各型号「能力支持」是否含 Function Calling。

### tencent-token-plan-doc

- 入口：[tencent-token-plan-doc](https://cloud.tencent.com/document/product/1823/130060)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：腾讯云 Token Plan 个人版套餐文档；2026-10-05 只核对可用模型名单、Model ID 与适配工具。

## 已知边界与核验说明

已登记官方入口并尝试读取。表中仅标为已核字段的部分有此次核对记录；其余存量参数待逐字段复核。

2026-10-05 工具调用核对：以上 `tokenhub-model-list`、`tencent-token-plan-doc` 只用于核对函数 / 工具调用是否受支持，读取日期 2026-10-05；没有借此复核窗口、价格等其他字段，也没有做账号调用验收。能力标签里只有 `tool_use` 一项以这些来源为依据。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "tencent",
  "checkedAt": "2026-10-03",
  "sources": [
    {
      "id": "tencent",
      "url": "https://www.tencent.com/tencent-releases-and-open-sources-tencent-hy4-preview/",
      "kind": "official-doc",
      "scope": "tencent 官方入口；具体地域与接入面待该页面逐字段确认",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "08770afd8e2b89d4c93be931d0a32b78e2eac1e97821ea86aa125305db5f085a",
      "resolvedUrl": "https://www.tencent.com/tencent-releases-and-open-sources-tencent-hy4-preview/"
    },
    {
      "id": "tokenhub-model-list",
      "url": "https://cloud.tencent.com/document/product/1823/130051",
      "kind": "official-doc",
      "scope": "腾讯云 TokenHub 模型列表；2026-10-05 只核对各型号「能力支持」是否含 Function Calling",
      "retrieval": "fetched",
      "checkedAt": "2026-10-05",
      "contentSha256": "ed3083e94bcf573f9b26d952197a7a1f363dc1a62295c50896d1a21d12abb8ae",
      "resolvedUrl": "https://cloud.tencent.com/document/product/1823/130051"
    },
    {
      "id": "tencent-token-plan-doc",
      "url": "https://cloud.tencent.com/document/product/1823/130060",
      "kind": "official-doc",
      "scope": "腾讯云 Token Plan 个人版套餐文档；2026-10-05 只核对可用模型名单、Model ID 与适配工具",
      "retrieval": "fetched",
      "checkedAt": "2026-10-05",
      "contentSha256": "f6e23cdd02bf3733791e6aafc60e9e263ecd4f1680f42f4a9e828b6ebc795054",
      "resolvedUrl": "https://cloud.tencent.com/document/product/1823/130060"
    }
  ]
}
```
<!-- source-metadata:end -->
