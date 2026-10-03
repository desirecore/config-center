# 硅基流动：官网证据目录

[供应商索引](README.md)

核验日期：2026-10-03。这里只登记可复用的官网证据与适用边界，具体模型与接入面分别记录。

## 官网证据

### siliconflow

- 入口：[siliconflow](https://www.siliconflow.cn/models)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`硅基流动国内目录；国际站价格不覆盖该接入面`。

## 已知边界与核验说明

本次读取国内官网入口，价格和 ID 按该接入面核实。国际博客的美元价格不能覆盖国内 CNY 配置；未核字段保持 pending。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "siliconflow",
  "checkedAt": "2026-10-03",
  "sources": [
    {
      "id": "siliconflow",
      "url": "https://www.siliconflow.cn/models",
      "kind": "official-doc",
      "scope": "硅基流动国内目录；国际站价格不覆盖该接入面",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "aaad9fc65c3be42daaca8f935a4c969478c58f7043ef4bf0644d5c18a447e918",
      "resolvedUrl": "https://www.siliconflow.cn/models"
    }
  ]
}
```
<!-- source-metadata:end -->
