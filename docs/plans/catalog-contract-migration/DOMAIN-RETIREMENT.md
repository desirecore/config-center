# 域名与接入下架计划

[PLAN](PLAN.md)

## 判定边界

退役单位优先为 Provider/地域/协议/host/path，而不是整个供应商或根域。模型下架、官网换域、API路径迁移、暂时失败、停服域名是不同事件。DNS失败、证书错误、403/404、JS页面壳或公共目录缺少一个ID都不足以宣布整个域名停服。

官方停止服务/迁移公告、官方文档明确替代端点与生效时间、官方支持确认是主证据；DNS/TLS/不带凭据的HTTP结果只能补充。是否已实际下架预设则用本仓Git历史证明，两类证据分开登记。

## 首批清单

| 对象 | 当前已知 | P0/P4动作 |
| --- | --- | --- |
| api.lingyiwanwu.com/v1；provider-lingyiwanwu-001 | 本仓commit a998e18（#84）已移除Provider和索引；v10.0.177退役名单仅见provider-internal-testing-001 | 查受管旧compute配置、别名/默认引用和启动迁移；补本产品接入退役记录。官方域名停止服务时间本轮未取得，不据此封锁整个lingyiwanwu.com及AgentBox子域 |
| api.minimaxi.com 与 api.minimax.cn 等MiniMax域名 | 当前预设仍用minimaxi；来源文档出现minimax.cn。官方minimaxi平台仍可读，未取得旧API域名退役公告 | 核国内/国际和key账号范围、官方端点变更及媒体baseUrl，确认哪些是别名/迁移而非停服；不得仅按拼写统一域名。官方参考：[平台](https://platform.minimaxi.com/zh/cooperate)、[套餐入口](https://platform.minimaxi.com/subscribe/coding-plan) |
| spark-api-open.xf-yun.com 的/v1、/v2、/x2 | X2已独立/x2，旧/v1保留Ultra，/v2同名spark-x指X1.5 | 保留按路径/型号限定的合同，不因X2推出封锁同一host上所有旧有效接入 |
| 百川、Infini、摩尔线程、可灵、火山文档入口 | 87条记录的入口不可读；不是API域名退役证明 | 继续列为待核，获取公告/官方合同后决定，不使用读取失败自动下架 |
| Perplexity Sonar→Agent API | 记录的是协议/接口迁移，旧同步/流式兼容与异步服务状态不同 | 核路径和请求形状，先适配Agent API；不是删除api.perplexity.ai根域 |

实施P0时完整扫描baseUrl、mediaBaseUrl、coding/tokenPlan余额/额度endpoint、模型端点和taskQueryEndpoint、API-provider、云端下发端点、已发客户端内置包及受管存量配置。历史来源页与tools归档引用不计作活跃残留。

## 退役注册与迁移

新增版本化退役注册（建议字段）：规则ID、providerId/受管来源、exactHost、可选路径/地域/协议、产品退役理由、官方证据/状态、effectiveAt、替代接入、credential迁移边界、最低客户端版本。产品决定下架但厂家未停服时必须显式区分。

- 仓库：移除活跃Provider/索引，清理services/默认映射；模型移除用tombstones。ModelSpec按原厂生命周期/历史用途处置，不因一个网关下架就删原厂规格。
- 客户端：受管旧Provider退役/停用、缓存与动态发现过滤、任务轮询停止、默认引用修复；由统一出站resolver检查host/path，禁止透明redirect把Authorization带到未经确认的其他域。
- 用户数据：保护自建Provider和用户覆写，不能根据label模糊删除；对确证停止服务的host阻止调用并给原因。默认保留Key引用和秘密值，不复用当前cleanupRetiredProviders的自动删Key行为去清所有厂商。
- 替代端点：核相同主体/地域/账号与key适用范围后再给可审阅迁移；不自动把不同币种、不同套餐、不同接收域名的凭据转发过去。
- 验收：退役规则生效前/后、离线/缓存、直接SDK和后台请求、同host其他有效路径、共享apiKeyRef、自建同名Provider、重复迁移、回滚全部覆盖。确认退役范围出站为零，但审计来源历史链接保留。

当前仅能确认上述历史预置接入下架；需要P0补证之后才能给出完整“厂商已停止服务的域名”名单，本PLAN不伪造新域名退役结论。
