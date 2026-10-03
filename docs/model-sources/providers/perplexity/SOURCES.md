# Perplexity：官网证据目录

[供应商索引](README.md)

核验日期：2026-10-03。这里只登记可复用的官网证据与适用边界，具体模型与接入面分别记录。

## 官网证据

### perplexity

- 入口：[perplexity](https://docs.perplexity.ai/docs/agent-api/migrate-from-sonar/overview)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`perplexity 官方入口；具体地域与接入面待该页面逐字段确认`。

## 已知边界与核验说明

官网迁移文档确认平台正在转向 Agent API；旧 Sonar 型号规格与当前账号可调用性必须独立核对，不能只修改 model 字符串。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "perplexity",
  "checkedAt": "2026-10-03",
  "sources": [
    {
      "id": "perplexity",
      "url": "https://docs.perplexity.ai/docs/agent-api/migrate-from-sonar/overview",
      "kind": "official-doc",
      "scope": "perplexity 官方入口；具体地域与接入面待该页面逐字段确认",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "1b0fcd7be3f09329357b1d99b50f41833d0614f57fccdf0aa367552018923cb8",
      "resolvedUrl": "https://docs.perplexity.ai/docs/agent-api/migrate-from-sonar/overview"
    }
  ]
}
```
<!-- source-metadata:end -->
