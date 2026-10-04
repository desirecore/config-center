# tavily：API合同重新检索

检索日期：2026-10-04。原记录：[tavily](../../../data-sources/api-providers/tavily.md)。原状态 partial 保留；本页为待复核候选。

## 来源

- [tavily-reference](https://docs.tavily.com/documentation/api-reference/endpoint/search)：official-docs，readable。官方cURL与响应示例已读取，POST/Bearer/query/max_results/basic/results明确。 原生Tavily API，不证明客户端变量转换或账号资格。

## 字段对照

| 字段 | 当前值 | 来源支持值 | 对照 | 来源ID |
| --- | --- | --- | --- | --- |
| `endpoint` | `"https://api.tavily.com/search"` | `"https://api.tavily.com/search"` | matches | tavily-reference |
| `method` | `"POST"` | `"POST"` | matches | tavily-reference |
| `auth.type` | `"bearer"` | `"bearer"` | matches | tavily-reference |
| `request.bodyTemplate.search_depth` | `"basic"` | `"basic"` | matches | tavily-reference |
| `response.resultsPath` | `"results"` | `"results"` | matches | tavily-reference |
| `response.item.titlePath` | `"title"` | `"title"` | matches | tavily-reference |
| `response.item.urlPath` | `"url"` | `"url"` | matches | tavily-reference |
| `response.item.snippetPath` | `"content"` | `"content"` | matches | tavily-reference |

## 仍待证明

- request.bodyTemplate.query:变量插值
- request.bodyTemplate.max_results:整数转换
- 账号及额度

原生官方合同、可信SDK旁证、模板插值与账号验收分别处理。未执行收费调用，未修改API配置或原来源状态。
