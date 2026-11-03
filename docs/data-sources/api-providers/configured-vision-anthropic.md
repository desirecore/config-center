# 视觉模型（Anthropic 兼容，复用默认映射）

旧 docs.anthropic.com 跳转至此官方域名，正文证明 Messages 的 image/base64/media_type/data 结构；max_tokens=1024 是本仓输出预算策略，官网示例使用该值不证明它是默认或上限。认证和 API 版本不因本篇已读而视作全部核验；任意网关仍需验收。

2026-11-03 重新读取官方 Vision 和 Messages API 正文。Messages 的响应 `content` 是异构内容块数组，文本块使用 `type=text` 与字符串 `text`，推理块另有独立类型；不能假定首块就是文本。因此将提取路径改为 `content`，显式使用客户端的 `text-blocks` 格式，仅顺序连接顶层文本块并忽略推理等其他块。`textFormat` 和换行连接是 DesireCore 的声明式消费契约，不是 Anthropic 请求参数。该配置依赖主仓新增的消费支持；旧 Schema 应拒绝候选并继续使用原有效快照，不允许把数组转换成字符串。本仓校验不代表新客户端已正式发布，也不代表任意兼容网关实测通过。

数据区中的 claims 是复核边界，pending 字段是当前配置快照，不能当官方证明。enabled/priority/timeout 是产品策略，未复制到合同中。更新合同必须重新读官方正文、记录实际证明字段；结构校验不等于账号可用。

<!-- data-source:start -->
```json
{
  "kind": "api-contract",
  "config": "api-providers/image-understanding/configured-vision-anthropic.json",
  "checkedAt": "2026-11-03",
  "status": "partial",
  "sources": [
    {
      "url": "https://platform.claude.com/docs/en/build-with-claude/vision",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "resolvedUrl": "https://platform.claude.com/docs/en/build-with-claude/vision",
      "contentSha256": "b35b04f339283acf2d250590830e7c552575c27d78c9b694523a6417a7a58044"
    },
    {
      "url": "https://platform.claude.com/docs/en/build-with-claude/vision.md",
      "retrieval": "fetched",
      "checkedAt": "2026-11-03",
      "resolvedUrl": "https://platform.claude.com/docs/en/build-with-claude/vision.md",
      "contentSha256": "f67ae8c652f2fc05bf681e7020268d186c5f34b7c713852934b533548c9108ed"
    },
    {
      "url": "https://platform.claude.com/docs/en/api/messages/create.md",
      "retrieval": "fetched",
      "checkedAt": "2026-11-03",
      "resolvedUrl": "https://platform.claude.com/docs/en/api/messages/create.md",
      "contentSha256": "7bdae71980a2aff09491755da1744932b5cf722f459c1d4a2a8c818539f82ce3"
    }
  ],
  "verifiedFields": [
    "request.bodyTemplate.messages.0.content.0.type",
    "request.bodyTemplate.messages.0.content.0.source.type",
    "response.textPath"
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
      "textPath": "content",
      "textFormat": "text-blocks"
    }
  }
}
```
<!-- data-source:end -->
