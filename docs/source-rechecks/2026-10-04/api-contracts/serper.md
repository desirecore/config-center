# serper：API合同重新检索

检索日期：2026-10-04。原记录：[serper](../../../data-sources/api-providers/serper.md)。原状态 pending 保留；本页为待复核候选。

## 来源

- [serper-main](https://serper.dev/)：official-docs，readable。官网Search示例明确organic及title/link/snippet。页面没有证明请求endpoint/header。 公开搜索响应示例，不能证明所有选项或收费调用。
- [serper-sdk](https://github.com/langchain-ai/langchain-community/blob/main/libs/community/langchain_community/utilities/google_serper.py)：trusted-secondary，readable。维护者SDK以POST调用google.serper.dev，使用X-API-KEY，并用query params发送q/num。 可信实现旁证；非Serper发布者合同；不证明JSON bodyTemplate或当前账号可用性。
- [serper-reference](https://reference.langchain.com/python/langchain-community/utilities/google_serper/GoogleSerperAPIWrapper)：trusted-secondary，blocked。搜索发现入口，但本轮正文读取Internal Error。 不作为字段证明。

## 字段对照

| 字段 | 当前值 | 来源支持值 | 对照 | 来源ID |
| --- | --- | --- | --- | --- |
| `response.resultsPath` | `"organic"` | `"organic"` | matches | serper-main |
| `response.item.titlePath` | `"title"` | `"title"` | matches | serper-main |
| `response.item.urlPath` | `"link"` | `"link"` | matches | serper-main |
| `response.item.snippetPath` | `"snippet"` | `"snippet"` | matches | serper-main |
| `endpoint` | `"https://google.serper.dev/search"` | `"https://google.serper.dev/search"` | matches | serper-sdk |
| `method` | `"POST"` | `"POST"` | matches | serper-sdk |
| `auth.headerName` | `"X-API-KEY"` | `"X-API-KEY"` | matches | serper-sdk |

## 仍待证明

- request.bodyTemplate:官方JSON正文合同未取得，SDK示例使用params
- request.bodyTemplate.num:类型/上限
- 账号及额度

原生官方合同、可信SDK旁证、模板插值与账号验收分别处理。未执行收费调用，未修改API配置或原来源状态。
