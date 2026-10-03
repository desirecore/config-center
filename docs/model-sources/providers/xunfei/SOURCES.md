# 讯飞星火：官网证据目录

[供应商索引](README.md)

核验日期：2026-10-03。这里只登记可复用的官网证据与适用边界，具体模型与接入面分别记录。

## 官网证据

### xunfei

- 入口：[xunfei](https://www.xfyun.cn/doc/spark/X1http.html)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`讯飞 X2/X1.5 的 HTTP 文档；端点与独立输入/输出限制`。

## 已知边界与核验说明

X2 的 65536 是最大输入，不是已公开的总窗口；本仓 contextWindow 保留为现有客户端的保守预算，未登记为已核字段。输出上限有明文整数 131072。独立最大输入预算须按客户端/schema 兼容规范另行完成。

已登记官方入口并尝试读取。表中仅标为已核字段的部分有此次核对记录；其余存量参数待逐字段复核。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "xunfei",
  "checkedAt": "2026-10-03",
  "sources": [
    {
      "id": "xunfei",
      "url": "https://www.xfyun.cn/doc/spark/X1http.html",
      "kind": "official-doc",
      "scope": "讯飞 X2/X1.5 的 HTTP 文档；端点与独立输入/输出限制",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "324d06b132ff4ab16a0543157467283dc789153303cf456b44af45d1fc6f1548",
      "resolvedUrl": "https://www.xfyun.cn/doc/spark/X1http.html"
    }
  ]
}
```
<!-- source-metadata:end -->
