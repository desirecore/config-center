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

### qianfan-function-calling

- 入口：[qianfan-function-calling](https://cloud.baidu.com/doc/qianfan-docs/s/xm95lyys5)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：千帆 Function calling 文档的支持模型范围（页面更新时间 2026-07-09）；千帆 V2 接口。

### qianfan-coding-plan-tools

- 入口：[qianfan-coding-plan-tools](https://cloud.baidu.com/doc/qianfan/s/imlg0beiu)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：千帆 Coding Plan 文档（页面更新时间 2026-06-03）；2026-10-05 只核对可配置的 Model Name 与适用工具，套餐已于 2026-07-13 停止新购。

## 已知边界与核验说明

已登记官方入口并尝试读取。表中仅标为已核字段的部分有此次核对记录；其余存量参数待逐字段复核。

2026-10-05 工具调用核对：以上 `qianfan-function-calling`、`qianfan-coding-plan-tools` 只用于核对函数 / 工具调用是否受支持，读取日期 2026-10-05；没有借此复核窗口、价格等其他字段，也没有做账号调用验收。能力标签里只有 `tool_use` 一项以这些来源为依据。

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
    },
    {
      "id": "qianfan-function-calling",
      "url": "https://cloud.baidu.com/doc/qianfan-docs/s/xm95lyys5",
      "kind": "official-doc",
      "scope": "千帆 Function calling 文档的支持模型范围（页面更新时间 2026-07-09）；千帆 V2 接口",
      "retrieval": "fetched",
      "checkedAt": "2026-10-05",
      "contentSha256": "db0c016665da14a9a8739d7749ca349bbb4136d92030e380614dace1c2b9940b",
      "resolvedUrl": "https://cloud.baidu.com/doc/qianfan-docs/s/xm95lyys5"
    },
    {
      "id": "qianfan-coding-plan-tools",
      "url": "https://cloud.baidu.com/doc/qianfan/s/imlg0beiu",
      "kind": "official-doc",
      "scope": "千帆 Coding Plan 文档（页面更新时间 2026-06-03）；2026-10-05 只核对可配置的 Model Name 与适用工具，套餐已于 2026-07-13 停止新购",
      "retrieval": "fetched",
      "checkedAt": "2026-10-05",
      "contentSha256": "a366e76ee3aeeecc787ba6d314076c20c1b960e03f47d82aef3cdb8b685ad595",
      "resolvedUrl": "https://cloud.baidu.com/doc/qianfan/s/imlg0beiu"
    }
  ]
}
```
<!-- source-metadata:end -->
