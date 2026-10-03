# 退役判定与实施范围

依据：本仓 #84 / commit a998e18；原配置 provider-lingyiwanwu-001，baseUrl=https://api.lingyiwanwu.com/v1。本轮核查使用Git历史，未把官网正文读取失败当作厂商域名停服。

已形成候选数据规则 catalog/v2/retirements.json：受管旧Provider身份与原host/path同时匹配，2026-08-28起本产品预置接入已退役。保留凭据，不按label模糊匹配，不封AgentBox、官网或其他同厂产品。客户端实现/正式版本与验证证据将追加在EXECUTION.md。

MiniMax旧/new域名、讯飞/v1/v2/x2、Perplexity路径迁移和87条不可读官网记录没有获得整域停服证明，本轮不将它们加入停服域名denylist。所有已下架模型的tombstones仍按各接入面保留。
