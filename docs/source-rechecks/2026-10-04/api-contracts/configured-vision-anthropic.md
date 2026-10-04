# configured-vision-anthropic：API合同重新检索

检索日期：2026-10-04。原记录：[configured-vision-anthropic](../../../data-sources/api-providers/configured-vision-anthropic.md)。原状态 partial 保留；本页为待复核候选。

## 来源

- [anthropic-vision](https://platform.claude.com/docs/en/build-with-claude/vision)：official-docs，readable。旧docs域名跳转官方platform域名；实际读取image/source/base64/media_type/data示例。 仅原生视觉请求形状；1024不是厂商最大或默认输出限制。

## 字段对照

| 字段 | 当前值 | 来源支持值 | 对照 | 来源ID |
| --- | --- | --- | --- | --- |
| `request.bodyTemplate.messages.0.content.0.type` | `"image"` | `"image"` | matches | anthropic-vision |
| `request.bodyTemplate.messages.0.content.0.source.type` | `"base64"` | `"base64"` | matches | anthropic-vision |

## 仍待证明

- 动态baseUrl和实际型号
- auth/anthropic-version
- response.textPath
- 客户端变量插值
- max_tokens=1024为产品预算非厂商上限

原生官方合同、可信SDK旁证、模板插值与账号验收分别处理。未执行收费调用，未修改API配置或原来源状态。
