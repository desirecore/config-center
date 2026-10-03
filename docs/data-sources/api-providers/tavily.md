# Tavily

官网明示 POST /search、Bearer、query/max_results/search_depth 与 results 的 title/url/content；本仓模板仍需客户端插值为正确类型。未进行账号调用。

数据区中的 claims 是复核边界，pending 字段是当前配置快照，不能当官方证明。enabled/priority/timeout 是产品策略，未复制到合同中。更新合同必须重新读官方正文、记录实际证明字段；结构校验不等于账号可用。

<!-- data-source:start -->
```json
{
  "kind": "api-contract",
  "config": "api-providers/web-search/tavily.json",
  "checkedAt": "2026-10-03",
  "status": "partial",
  "sources": [
    {
      "url": "https://docs.tavily.com/documentation/api-reference/endpoint/search",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "resolvedUrl": "https://docs.tavily.com/documentation/api-reference/endpoint/search",
      "contentSha256": "66af3f0a8b6a72650ba5a1e99a8f72818dc2e8dab81ae8dcd88437330181f912"
    }
  ],
  "verifiedFields": [
    "endpoint",
    "method",
    "auth.type",
    "request.bodyTemplate.search_depth",
    "response.resultsPath",
    "response.item.titlePath",
    "response.item.urlPath",
    "response.item.snippetPath"
  ],
  "claims": {
    "endpoint": "https://api.tavily.com/search",
    "method": "POST",
    "auth": {
      "type": "bearer",
      "apiKeyRef": "tavily"
    },
    "request": {
      "bodyTemplate": {
        "query": "${query}",
        "max_results": "${maxResults}",
        "search_depth": "basic"
      }
    },
    "response": {
      "resultsPath": "results",
      "item": {
        "titlePath": "title",
        "urlPath": "url",
        "snippetPath": "content"
      }
    }
  }
}
```
<!-- data-source:end -->
