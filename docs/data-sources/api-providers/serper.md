# Serper

首页可读，但未找到认证请求与完整响应契约，本轮不能据此确认 X-API-KEY、organic 等字段。需官方控制台文档或示例。

数据区中的 claims 是复核边界，pending 字段是当前配置快照，不能当官方证明。enabled/priority/timeout 是产品策略，未复制到合同中。更新合同必须重新读官方正文、记录实际证明字段；结构校验不等于账号可用。

<!-- data-source:start -->
```json
{
  "kind": "api-contract",
  "config": "api-providers/web-search/serper.json",
  "checkedAt": "2026-10-03",
  "status": "pending",
  "sources": [
    {
      "url": "https://serper.dev/",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "resolvedUrl": "https://serper.dev/",
      "contentSha256": "ad5b407c075ef4357fc4674cafb1b215d2713dc17d65d0607504bfec29b62c6c"
    }
  ],
  "verifiedFields": [],
  "claims": {
    "endpoint": "https://google.serper.dev/search",
    "method": "POST",
    "auth": {
      "type": "header",
      "headerName": "X-API-KEY",
      "apiKeyRef": "serper"
    },
    "request": {
      "bodyTemplate": {
        "q": "${query}",
        "num": "${maxResults}"
      }
    },
    "response": {
      "resultsPath": "organic",
      "item": {
        "titlePath": "title",
        "urlPath": "link",
        "snippetPath": "snippet"
      }
    }
  }
}
```
<!-- data-source:end -->
