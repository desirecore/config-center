# Brave Search API

本轮读取失败，以下仅锁定现有待核合同，尚未证明字段有效。补官网正文并核实字段后再提升状态。

数据区中的 claims 是复核边界，pending 字段是当前配置快照，不能当官方证明。enabled/priority/timeout 是产品策略，未复制到合同中。更新合同必须重新读官方正文、记录实际证明字段；结构校验不等于账号可用。

<!-- data-source:start -->
```json
{
  "kind": "api-contract",
  "config": "api-providers/web-search/brave.json",
  "checkedAt": "2026-10-03",
  "status": "pending",
  "sources": [
    {
      "url": "https://api.search.brave.com/app/documentation/web-search/get-started",
      "retrieval": "failed",
      "checkedAt": "2026-10-03",
      "resolvedUrl": null,
      "contentSha256": null,
      "failure": "HTTP Error 403: Forbidden"
    }
  ],
  "verifiedFields": [],
  "claims": {
    "endpoint": "https://api.search.brave.com/res/v1/web/search",
    "method": "GET",
    "auth": {
      "type": "header",
      "headerName": "X-Subscription-Token",
      "apiKeyRef": "brave"
    },
    "request": {
      "headers": {
        "Accept": "application/json",
        "Accept-Encoding": "gzip"
      },
      "queryParams": {
        "q": "${query}",
        "count": "${maxResults}"
      }
    },
    "response": {
      "resultsPath": "web.results",
      "item": {
        "titlePath": "title",
        "urlPath": "url",
        "snippetPath": "description",
        "pageAgePath": "page_age"
      }
    }
  }
}
```
<!-- data-source:end -->
