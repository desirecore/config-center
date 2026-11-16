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

## 2026-11-16 新品与来源缺口

官方新品页和计费页确认 ERNIE-5.5-Flash-Preview、ERNIE-Light-DT-1.0 已上架。前者是文本模型，官网写 1M 总窗口、默认输出 64K；默认值不能当作最大输出。后者写最大输出 128K、思考可开关，但本次未取得总窗口和精确国内 API `model` 参数的专属证明。通用 Chat API 文档可读，未在其正文找到这两个新型号的精确调用代码。

国内 Flash Preview 有峰谷与限时五折（至 2026-11-30 23:59:59），Light DT 1.0 按量 CNY 8/28/cache 0.8 每百万 tokens。这些国内报价不能直接套给 OpenRouter 的国际型号 `ernie-light-dt-1.0-intl`，也不能据展示名猜国内请求 ID。此次保存可读官网证据并保留身份/输出字段缺口，不新增国内 API 接入；OpenRouter 的精确身份和独立限额另记在平台来源。视频新品 ERNIE-Wizshot-ME 的异步原生协议未适配，本批不新增调用配置。

### baidu-newmodels-20261116

- 入口：[baidu-newmodels-20261116](https://cloud.baidu.com/product/qianfan_home/model_3.html)。
- 读取日期：2026-11-16；状态：`fetched`；最终地址：https://cloud.baidu.com/product/qianfan_home/model_3.html。
- 适用范围：百度国内新品公告；文本/视频型号展示名、部分规格与国内价格，非精确 API 模型参数证明。

### baidu-newpricing-20261116

- 入口：[baidu-newpricing-20261116](https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya)。
- 读取日期：2026-11-16；状态：`fetched`；最终地址：https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya。
- 适用范围：百度国内新文本模型价格；峰谷、限时优惠与元/千 tokens 原始单位。

### baidu-chat-api-20261116

- 入口：[baidu-chat-api-20261116](https://cloud.baidu.com/doc/qianfan-api/s/3m7of64lb)。
- 读取日期：2026-11-16；状态：`fetched`；最终地址：https://cloud.baidu.com/doc/qianfan-api/s/3m7of64lb。
- 适用范围：百度通用 Chat Completions API；本次正文不含新型号精确请求代码。

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
    },
    {
      "id": "baidu-newmodels-20261116",
      "url": "https://cloud.baidu.com/product/qianfan_home/model_3.html",
      "kind": "official-doc",
      "scope": "百度国内新品公告；文本/视频型号展示名、部分规格与国内价格，非精确 API 模型参数证明",
      "retrieval": "fetched",
      "checkedAt": "2026-11-16",
      "contentSha256": "695e8cff9b3d1d6fbd0b4f69ea4718ea163487d7aeabebd5d8c0268c0b77d07c",
      "resolvedUrl": "https://cloud.baidu.com/product/qianfan_home/model_3.html"
    },
    {
      "id": "baidu-newpricing-20261116",
      "url": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "kind": "official-doc",
      "scope": "百度国内新文本模型价格；峰谷、限时优惠与元/千 tokens 原始单位",
      "retrieval": "fetched",
      "checkedAt": "2026-11-16",
      "contentSha256": "9f8e12e3e1b719bf99db7b4df321c4d9da09e33070ad16af022565055788c5b9",
      "resolvedUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya"
    },
    {
      "id": "baidu-chat-api-20261116",
      "url": "https://cloud.baidu.com/doc/qianfan-api/s/3m7of64lb",
      "kind": "official-doc",
      "scope": "百度通用 Chat Completions API；本次正文不含新型号精确请求代码",
      "retrieval": "fetched",
      "checkedAt": "2026-11-16",
      "contentSha256": "1404d478a721699fb3cfd5db220024813ba1b4cd60e19a8dd96e94031690907f",
      "resolvedUrl": "https://cloud.baidu.com/doc/qianfan-api/s/3m7of64lb"
    }
  ]
}
```
<!-- source-metadata:end -->
