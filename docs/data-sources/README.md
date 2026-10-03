# 非模型数据来源导航

模型事实见 [模型来源](../model-sources/README.md)。这里按政策和具体 API 接入拆分；不将产品决策伪装为官网事实。

- [计价策略](policies/pricing.md)
- [默认服务映射](policies/service-map.md)
- [Tavily](api-providers/tavily.md)
- [Brave](api-providers/brave.md)
- [Serper](api-providers/serper.md)
- [豆包搜索 Global](api-providers/doubao-search-global.md)
- [OpenAI 格式视觉](api-providers/configured-vision-openai.md)
- [Anthropic 格式视觉](api-providers/configured-vision-anthropic.md)

`npm run validate:data-sources` 检查 API 接入覆盖、记录的合同字段与 JSON 一致、供应商官网归属、政策值以及默认映射引用。不检查账号可用性。官方证据不足仍为 pending；partial 仅证明 verifiedFields，且正文说明更细限制。运行时来源仍由其独立维护文档负责，不在此声称已覆盖。

每次 API 合同变化先读官方文档/官方仓库（记录最终 URL、日期、读取失败），保留未核项，再更新本页所属单接入文件。新接入必须建立对应文档。不得用更新 claims、日期或状态绕过复核。
