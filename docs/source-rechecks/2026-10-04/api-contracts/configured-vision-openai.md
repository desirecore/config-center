# configured-vision-openai：API合同重新检索

检索日期：2026-10-04。原记录：[configured-vision-openai](../../../data-sources/api-providers/configured-vision-openai.md)。原状态 partial 保留；本页为待复核候选。

## 来源

- [openai-vision](https://developers.openai.com/api/docs/guides/images-vision)：official-docs，readable。原platform域名跳转官方developers域名；Chat Completions示例含image_url和choices[0].message.content。 原生Chat Completions视觉合同，不能覆盖Responses-only型号和任意兼容网关。

## 字段对照

| 字段 | 当前值 | 来源支持值 | 对照 | 来源ID |
| --- | --- | --- | --- | --- |
| `request.bodyTemplate.messages.0.content.1.type` | `"image_url"` | `"image_url"` | matches | openai-vision |
| `response.textPath` | `"choices.0.message.content"` | `"choices.0.message.content"` | matches | openai-vision |

## 仍待证明

- 动态baseUrl和实际型号
- Responses-only适配
- Bearer/网关认证
- 客户端变量插值及输入输出预算

原生官方合同、可信SDK旁证、模板插值与账号验收分别处理。未执行收费调用，未修改API配置或原来源状态。
