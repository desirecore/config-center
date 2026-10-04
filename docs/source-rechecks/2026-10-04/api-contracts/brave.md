# brave：API合同重新检索

检索日期：2026-10-04。原记录：[brave](../../../data-sources/api-providers/brave.md)。原状态 pending 保留；本页为待复核候选。

## 来源

- [brave-reference](https://api-dashboard.search.brave.com/api-reference/web/search/get)：official-docs，readable。GET与鉴权、查询参数和web.results结构已读取。 Brave Web Search GET；不证明账号额度、套餐或本仓变量插值。
- [brave-main](https://brave.com/search/api/)：official-docs，readable。官网GET示例含Accept和gzip请求头。 官方请求示例。

## 字段对照

| 字段 | 当前值 | 来源支持值 | 对照 | 来源ID |
| --- | --- | --- | --- | --- |
| `endpoint` | `"https://api.search.brave.com/res/v1/web/search"` | `"https://api.search.brave.com/res/v1/web/search"` | matches | brave-reference |
| `method` | `"GET"` | `"GET"` | matches | brave-reference |
| `auth.type` | `"header"` | `"header"` | matches | brave-reference |
| `auth.headerName` | `"X-Subscription-Token"` | `"X-Subscription-Token"` | matches | brave-reference |
| `request.headers.Accept` | `"application/json"` | `"application/json"` | matches | brave-main |
| `request.headers.Accept-Encoding` | `"gzip"` | `"gzip"` | matches | brave-main |
| `response.resultsPath` | `"web.results"` | `"web.results"` | matches | brave-reference |
| `response.item.titlePath` | `"title"` | `"title"` | matches | brave-reference |
| `response.item.urlPath` | `"url"` | `"url"` | matches | brave-reference |
| `response.item.snippetPath` | `"description"` | `"description"` | matches | brave-reference |
| `response.item.pageAgePath` | `"page_age"` | `"page_age"` | matches | brave-reference |

## 仍待证明

- request.queryParams.q:客户端变量插值
- request.queryParams.count:整数转换和最大20
- 账号资格及配额

原生官方合同、可信SDK旁证、模板插值与账号验收分别处理。未执行收费调用，未修改API配置或原来源状态。
