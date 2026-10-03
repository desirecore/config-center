# 视觉模型（OpenAI 兼容，复用默认映射）

OpenAI Docs 明示 Chat Completions 的 image_url 内容块与 choices.message.content。只证明 OpenAI 原生格式；任意兼容网关、所选模型和动态 baseUrl 需分别验收。

数据区中的 claims 是复核边界，pending 字段是当前配置快照，不能当官方证明。enabled/priority/timeout 是产品策略，未复制到合同中。更新合同必须重新读官方正文、记录实际证明字段；结构校验不等于账号可用。

<!-- data-source:start -->
```json
{
  "kind": "api-contract",
  "config": "api-providers/image-understanding/configured-vision-openai.json",
  "checkedAt": "2026-10-03",
  "status": "partial",
  "sources": [
    {
      "url": "https://developers.openai.com/api/docs/guides/images-vision",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "resolvedUrl": "https://developers.openai.com/api/docs/guides/images-vision",
      "contentSha256": "be92335e88c4af71534c352bb82f67040afac9fc96bcef3c2b5a7a103fd5163a"
    }
  ],
  "verifiedFields": [
    "request.bodyTemplate.messages.0.content.1.type",
    "response.textPath"
  ],
  "claims": {
    "endpoint": "${baseUrl}/chat/completions",
    "method": "POST",
    "auth": {
      "type": "bearer"
    },
    "request": {
      "imageMode": "url",
      "bodyTemplate": {
        "model": "${model}",
        "messages": [
          {
            "role": "user",
            "content": [
              {
                "type": "text",
                "text": "${prompt}"
              },
              {
                "type": "image_url",
                "image_url": {
                  "url": "${imageUrl}"
                }
              }
            ]
          }
        ]
      }
    },
    "response": {
      "textPath": "choices.0.message.content"
    }
  }
}
```
<!-- data-source:end -->
