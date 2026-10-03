# Stability AI：官网证据目录

[供应商索引](README.md)

核验日期：2026-10-03。这里只登记可复用的官网证据与适用边界，具体模型与接入面分别记录。

## 官网证据

### stability

- 入口：[stability](https://stability.ai/news-updates)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`stability 官方入口；具体地域与接入面待该页面逐字段确认`。

### sd35-release

- 入口：[sd35-release](https://stability.ai/news-updates/introducing-stable-diffusion-3-5)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：Stability原厂SD3.5发布公告；本地权重与PlatformAPI端点可用性分开核。

## 已知边界与核验说明

已登记官方入口并尝试读取。表中仅标为已核字段的部分有此次核对记录；其余存量参数待逐字段复核。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "stability",
  "checkedAt": "2026-10-03",
  "sources": [
    {
      "id": "stability",
      "url": "https://stability.ai/news-updates",
      "kind": "official-doc",
      "scope": "本轮读取 stability 官方 stability 页面；按单模型记录限定字段与接入面",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "89d63195c184b398f48647563610a8918eefff9b65b999ace04d543f152d2cfa",
      "resolvedUrl": "https://stability.ai/news-updates"
    },
    {
      "id": "sd35-release",
      "url": "https://stability.ai/news-updates/introducing-stable-diffusion-3-5",
      "kind": "official-doc",
      "scope": "Stability原厂SD3.5发布公告；本地权重与PlatformAPI端点可用性分开核",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "87614737504ac9cf47baf41287092121031b02c759e12c4d5a824bd4b86a07c6",
      "resolvedUrl": "https://stability.ai/news-updates/introducing-stable-diffusion-3-5"
    }
  ]
}
```
<!-- source-metadata:end -->
