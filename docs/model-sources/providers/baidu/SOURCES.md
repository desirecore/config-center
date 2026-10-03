# 百度千帆：官网证据目录

[供应商索引](README.md)

核验日期：2026-10-03。这里只登记可复用的官网证据与适用边界，具体模型与接入面分别记录。

## 官网证据

### baidu-models

- 入口：[baidu-models](https://intl.cloud.baidu.com/en/doc/qianfan/s/7m95lyy43-intl-en)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`baidu 官方入口；具体地域与接入面待该页面逐字段确认`。
### baidu-plan

- 入口：[baidu-plan](https://cloud.baidu.com/doc/qianfan/s/imlg0beiu)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`baidu 官方入口；具体地域与接入面待该页面逐字段确认`。

## 已知边界与核验说明

已登记官方入口并尝试读取。表中仅标为已核字段的部分有此次核对记录；其余存量参数待逐字段复核。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "baidu",
  "checkedAt": "2026-10-03",
  "sources": [
    {
      "id": "baidu-models",
      "url": "https://intl.cloud.baidu.com/en/doc/qianfan/s/7m95lyy43-intl-en",
      "kind": "official-doc",
      "scope": "baidu 官方入口；具体地域与接入面待该页面逐字段确认",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "9cf13493afc8d6ce4b21222066b4bd7fad8005631f6ec661dcc9d70e2d9cb5e9",
      "resolvedUrl": "https://intl.cloud.baidu.com/en/doc/qianfan/s/7m95lyy43-intl-en"
    },
    {
      "id": "baidu-plan",
      "url": "https://cloud.baidu.com/doc/qianfan/s/imlg0beiu",
      "kind": "official-doc",
      "scope": "baidu 官方入口；具体地域与接入面待该页面逐字段确认",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "a366e76ee3aeeecc787ba6d314076c20c1b960e03f47d82aef3cdb8b685ad595",
      "resolvedUrl": "https://cloud.baidu.com/doc/qianfan/s/imlg0beiu"
    }
  ]
}
```
<!-- source-metadata:end -->
