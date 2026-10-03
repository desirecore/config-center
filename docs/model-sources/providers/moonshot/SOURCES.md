# 月之暗面 Kimi：官网证据目录

[供应商索引](README.md)

核验日期：2026-10-03。这里只登记可复用的官网证据与适用边界，具体模型与接入面分别记录。

## 官网证据

### kimi-k3

- 入口：[kimi-k3](https://platform.kimi.com/docs/guide/kimi-k3-quickstart.md)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`Kimi 国内 api.moonshot.cn/v1；K3 固定采样/思考合同`。
### kimi-pricing

- 入口：[kimi-pricing](https://platform.kimi.com/docs/pricing/chat.md)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`Kimi 国内人民币计价；本次页面未返回模型单价`。

## 已知边界与核验说明

K3 国内端点和 low/high/max（默认 max）、始终思考、固定采样参数已核对。max_completion_tokens 的默认值 131072 与允许设置上限 1048576 分开记录；实际输出受剩余窗口约束。国内价格表未返回单价，因此未填零或换算国际美元价。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "moonshot",
  "checkedAt": "2026-10-03",
  "sources": [
    {
      "id": "kimi-k3",
      "url": "https://platform.kimi.com/docs/guide/kimi-k3-quickstart.md",
      "kind": "official-doc",
      "scope": "Kimi 国内 api.moonshot.cn/v1；K3 固定采样/思考合同",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "58cefbeb0d2707c8297c762aa64e3f36879d4074de2dba32006920dcb3fa944d",
      "resolvedUrl": "https://platform.kimi.com/docs/guide/kimi-k3-quickstart.md"
    },
    {
      "id": "kimi-pricing",
      "url": "https://platform.kimi.com/docs/pricing/chat.md",
      "kind": "official-doc",
      "scope": "Kimi 国内人民币计价；本次页面未返回模型单价",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "fe0dad2bcf7ac9c6de011eb6d18f8e33b01b67e1aef7a9154664acc1b7225262",
      "resolvedUrl": "https://platform.kimi.com/docs/pricing/chat.md"
    }
  ]
}
```
<!-- source-metadata:end -->
