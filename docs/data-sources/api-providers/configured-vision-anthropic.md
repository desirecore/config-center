# 视觉模型（Anthropic 兼容，复用默认映射）

旧 docs.anthropic.com 跳转至此官方域名，正文证明 Messages 的 image/base64/media_type/data 结构；max_tokens=1024 是本仓输出预算策略，官网示例使用该值不证明它是默认或上限。认证、API 版本和 content.0.text 不因本篇已读而视作全部核验；任意网关仍需验收。

数据区中的 claims 是复核边界，pending 字段是当前配置快照，不能当官方证明。enabled/priority/timeout 是产品策略，未复制到合同中。更新合同必须重新读官方正文、记录实际证明字段；结构校验不等于账号可用。

<!-- data-source:start -->
```json
{
  "kind": "api-contract",
  "config": "api-providers/image-understanding/configured-vision-anthropic.json",
  "checkedAt": "2026-10-03",
  "status": "partial",
  "sources": [
    {
      "url": "https://platform.claude.com/docs/en/build-with-claude/vision",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "resolvedUrl": "https://platform.claude.com/docs/en/build-with-claude/vision",
      "contentSha256": "b35b04f339283acf2d250590830e7c552575c27d78c9b694523a6417a7a58044"
    }
  ],
  "verifiedFields": [
    "request.bodyTemplate.messages.0.content.0.type",
    "request.bodyTemplate.messages.0.content.0.source.type"
  ],
  "claims": {
    "endpoint": "${baseUrl}/messages",
    "method": "POST",
    "auth": {
      "type": "header",
      "headerName": "x-api-key"
    },
    "request": {
      "imageMode": "base64",
      "headers": {
        "anthropic-version": "2023-06-01"
      },
      "bodyTemplate": {
        "model": "${model}",
        "max_tokens": 1024,
        "messages": [
          {
            "role": "user",
            "content": [
              {
                "type": "image",
                "source": {
                  "type": "base64",
                  "media_type": "${imageMime}",
                  "data": "${imageBase64}"
                }
              },
              {
                "type": "text",
                "text": "${prompt}"
              }
            ]
          }
        ]
      }
    },
    "response": {
      "textPath": "content.0.text"
    }
  }
}
```
<!-- data-source:end -->
