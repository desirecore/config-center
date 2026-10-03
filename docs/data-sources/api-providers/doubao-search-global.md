# 豆包搜索 Global

火山文档读取失败；不能认定其证明 feedcoopapi 的合同。需确认该具体域名所属服务、地域、认证和结果映射。

数据区中的 claims 是复核边界，pending 字段是当前配置快照，不能当官方证明。enabled/priority/timeout 是产品策略，未复制到合同中。更新合同必须重新读官方正文、记录实际证明字段；结构校验不等于账号可用。

<!-- data-source:start -->
```json
{
  "kind": "api-contract",
  "config": "api-providers/web-search/doubao-search-global.json",
  "checkedAt": "2026-10-03",
  "status": "pending",
  "sources": [
    {
      "url": "https://www.volcengine.com/docs/85508/1650263",
      "retrieval": "shell",
      "checkedAt": "2026-10-03",
      "resolvedUrl": "https://docs.volcengine.com/docs/NetworkedQAAgent/FusionInformationSearchAPI?lang=zh",
      "contentSha256": "98f4de231487390a83d6929b01e41e83de77b884dccc3f93e2adeb8036eb1bcc"
    }
  ],
  "verifiedFields": [],
  "claims": {
    "endpoint": "https://open.feedcoopapi.com/search_api/global_search",
    "method": "POST",
    "auth": {
      "type": "bearer",
      "apiKeyRef": "doubao-search-global"
    },
    "request": {
      "bodyTemplate": {
        "Query": "${query}",
        "SearchType": "web",
        "DocCount": "${maxResults}",
        "MaxSnippetLength": 500
      }
    },
    "response": {
      "resultsPath": "Result.Documents",
      "item": {
        "titlePath": "Title",
        "urlPath": "Url",
        "snippetPath": "Snippet.0.Text",
        "pageAgePath": "DocumentInfo.PublishTime"
      },
      "successCondition": {
        "path": "Result.ErrorCode",
        "equals": 0
      }
    }
  }
}
```
<!-- data-source:end -->
