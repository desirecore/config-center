# 非模型 API：官方合同证据不足单列

[缺口总目录](README.md) · [API 来源总导航](../data-sources/README.md)

本表依据已经登记的读取状态；没有本轮重读或账号调用。3 个 pending 接入如下：

| 接入 | 当前证据状态 | 来源不明的范围 | 补证条件 |
| --- | --- | --- | --- |
| [Brave](../data-sources/api-providers/brave.md) | 已登记官方文档入口；上次返回 HTTP 403 | 尚无已核合同字段，现有端点、鉴权、请求和结果映射只是配置快照 | 取得官方正文/API schema，逐字段核对后再提高状态 |
| [豆包搜索 Global](../data-sources/api-providers/doubao-search-global.md) | 官方地址跳转后只返回页面壳 | 尚无已核合同字段，不能用 HTTP 成功或网页摘要证明 endpoint、签名、body 与 results path | 读取官方 API 正文与响应示例，验证地域与账号接入合同 |
| [Serper](../data-sources/api-providers/serper.md) | 官方首页已读，未取得足够 API 合同正文 | endpoint、鉴权、请求及 organic 结果字段尚无逐字段证明 | 取得正式 API 文档或控制台公开可验证合同，不能把主页介绍当参数证据 |

[Tavily](../data-sources/api-providers/tavily.md)、[OpenAI 格式视觉](../data-sources/api-providers/configured-vision-openai.md)、[Anthropic 格式视觉](../data-sources/api-providers/configured-vision-anthropic.md) 为 partial，仅其 `verifiedFields` 有证明；其他字段继续按原文的边界复核。模板插值、任意网关认证、API 版本、预算和账号可用性不因读取通用官方指南就算全部已核。
