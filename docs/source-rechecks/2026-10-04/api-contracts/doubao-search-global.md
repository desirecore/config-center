# doubao-search-global：API合同重新检索

检索日期：2026-10-04。原记录：[doubao-search-global](../../../data-sources/api-providers/doubao-search-global.md)。原状态 pending 保留；本页为待复核候选。

## 来源

- [doubao-original](https://www.volcengine.com/docs/85508/1650263)：official-docs，blocked。原入口重定向后工具无法读取正文。 不能拿另一签名或地域的Fusion API替代feedcoopapi合同。
- [doubao-current](https://docs.volcengine.com/docs/NetworkedQAAgent/FusionInformationSearchAPI?lang=zh)：official-docs，blocked。本轮正文读取Internal Error；也试过.md入口，未取得可读正文。 endpoint/Bearer/Result映射仍待证明。
- [doubao-global-rendered](https://docs.volcengine.com/docs/Networkedsearch/doubao-search-global-edition?lang=zh)：official-docs，readable。SubAgent实际浏览器渲染读取Global独立页：POST/global_search、Bearer、Query/SearchType/DocCount/MaxSnippetLength及Result.Documents。 仅Global按量后付费；不证明Custom、订阅或TOP网关。

## 字段对照

| 字段 | 当前值 | 来源支持值 | 对照 | 来源ID |
| --- | --- | --- | --- | --- |
| `endpoint` | `"https://open.feedcoopapi.com/search_api/global_search"` | `"https://open.feedcoopapi.com/search_api/global_search"` | matches | doubao-global-rendered |
| `method` | `"POST"` | `"POST"` | matches | doubao-global-rendered |
| `auth.type` | `"bearer"` | `"bearer"` | matches | doubao-global-rendered |
| `request.bodyTemplate.SearchType` | `"web"` | `"web"` | matches | doubao-global-rendered |
| `request.bodyTemplate.MaxSnippetLength` | `500` | `500` | matches | doubao-global-rendered |
| `response.resultsPath` | `"Result.Documents"` | `"Result.Documents"` | matches | doubao-global-rendered |
| `response.item.titlePath` | `"Title"` | `"Title"` | matches | doubao-global-rendered |
| `response.item.urlPath` | `"Url"` | `"Url"` | matches | doubao-global-rendered |
| `response.item.pageAgePath` | `"DocumentInfo.PublishTime"` | `"DocumentInfo.PublishTime"` | matches | doubao-global-rendered |
| `response.item.snippetPath` | `"Snippet.0.Text"` | `{"array":"Snippet","discriminator":"Type","textField":"Text"}` | not-comparable | doubao-global-rendered |
| `response.successCondition.equals` | `0` | `0` | not-comparable | doubao-global-rendered |

## 仍待证明

- Query必填1~100字符与客户端插值
- DocCount web默认10最多20及整数转换
- Snippet.0.Text不保证首项为text，需按Type选择
- ErrorCode=0仅官方成功示例，完整错误规则待核
- DocumentInfo.PublishTime非必填且样例空值
- MaxSnippetLength单位tokens默认500/最大3000

原生官方合同、可信SDK旁证、模板插值与账号验收分别处理。未执行收费调用，未修改API配置或原来源状态。
