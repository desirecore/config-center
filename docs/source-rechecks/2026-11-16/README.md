# 2026-11-16 新型号增量核查

基线为 `origin/main` 的 `2a042fa`，远端预设数据版本 139；本批更新为 140。以上次新增模型批次（2026-10-28）作为增量目录参照，核查已配置供应商近期尚未收录的型号；读取官方正文、型号目录或平台 API，没有执行收费模型或订阅账号调用。既有 296 条规格和 354 条接入的值保持不变；新增后为 309 条规格、365 条接入，V2 仍为 candidate。读取日期不是模型发布日期，未取得发布日期的条目不据此补写发布时间。

## 本批写入

| 供应商 | 精确原厂型号 | 接入决定 |
| --- | --- | --- |
| Qwen | `qwen4-max` | 北京 API、Token Plan 与 OpenRouter 各自记录；不把 Preview 当作正式版别名 |
| Qwen | `qwen4-max-preview` | 独立规格阻止旧客户端 stripped 匹配误吞；官方别名 `qwen4.0-max-preview` 只绑定预览版，不新增接入 |
| 智谱 | `glm-5.3-flashx-legal` | 规格与 OpenRouter；原厂 Chat Completion 说明不证明现有 Anthropic 端点的 Legal 合同 |
| 腾讯 | `hy4`、`hy4-flash` | 规格；HY4 另有 OpenRouter 接入，不误用旧混元 API 或旧套餐端点 |
| Anthropic | `claude-fable-5-2` | 仅规格；当前客户端会按轮更新 system/工具，尚未验收新的 preserved-thinking prefix 校验 |
| Google | `gemini-4-carbon`、`gemini-4-hydrogen` | 原生 API 与 OpenRouter 分开；原生单次输出分别保守设为 32768、65536，托管平台为 943718 |
| Google | `gemini-omni-1.1-flash`、`gemini-omni-1.2-flash`、`gemini-nano-banana-2.1` | 仅规格；独立输入、输出不相加为总窗口，不新增尚未适配的 Interactions/媒体接入 |
| OpenAI | `gpt-image-2.6-flare`、`gpt-image-2.6-sunburst` | 仅规格；Images API 不冒充 Responses/Chat 图片输出 |

OpenRouter 另新增 `baidu/ernie-5.5-flash-preview:free`、`baidu/ernie-light-dt-1.0-intl` 两条平台局部精确合同。`modelRef=null`，不继承原厂规格、不自动路由。免费条目的零价来自平台明确数值，不将动态占位视为免费，也不承诺持续免费。来源仅支持该托管入口，不能反填百度国内请求 ID。

## 保留的差异与缺口

- Qwen 原厂最大输出在思考/非思考模式分别为 262144/131072；两条原生接入均采用可跨模式使用的 131072。V2 最大输入取两模式较小值 983616；冻结 V1 不新增字段。现客户端 Qwen 方言使用 thinking_budget，官方也接受该参数；原生接入只开放 none/high（关闭映射 enable_thinking:false，high 依赖上游默认档位），不把 low/xhigh 的 budget 变化冒充原生 effort 透传；思考回放未做账号验收。
- Hydrogen 原厂默认 high，OpenRouter 默认 medium。原厂声明 xhigh，但已核 pi-ai 1.0.2 与最新 dev 锁定的 1.5.0 都没有该原生档位的明确透传，原生接入只开放 low/medium/high；1.5.0 已将 Gemini 4 从兼容 budget 切到原生 thinkingLevel，不把旧安装状态冒充最新锁文件行为或正式发布证据。Carbon 的限时价格与 2026-12-01 起标准价分别记录，未把优惠写成永久价格。
- Fable 5.2 的 always-adaptive、采样与强制 tool_choice 限制已记录；新的历史消息前缀绑定尚未验收，不能沿用 Fable 5.1 的可调用结论。没有用未来版本号替代适配。
- HY4 原厂资料指向 TokenHub 新端点；本批不迁移现有腾讯 Provider、旧套餐及其既有模型。Legal 的通用 Claude 兼容页没有该精确型号的专属合同。
- 百度官方新品页可确认产品名称，国内精确 API ID 和部分输出限制仍缺证据。Qwen4 Preview 在北京时间 2026-11-25 24:00（UTC 2026-11-25 16:00）结束试用；截止瞬间仅记录在 metadata，不虚构 UTC 日期门控已经实现。独立规格防止误继承正式版 262144 输出，未加入静态接入或正式版别名。
- OpenAI 音频/Live、Google 其他媒体型号缺少本轮可确认的发布时间或适配；OpenRouter batch、动态 auto-code 与新供应商条目没有加入本轮已配置供应商的增量。

DeepSeek、Kimi、MiniMax、MiMo、火山、xAI、Mistral 的官方目录/更新说明已做增量检索，未找到需要在本批新增的其他已确认精确文本型号。此结论仅限本次已读取的官方页面，不等于全部账号目录与套餐穷尽验证；未刷新存量模型的核验日期。

## 证据与策略

各供应商的 SOURCES 保留本轮来源入口、最终域名、读取日期、SHA-256 与适用范围；单模型文件逐字段绑定来源并保存参数快照。新增 `aistudio.google.com` 精确官方域名及拒绝仿冒域名的回归，没有放宽跨供应商归属检查。

新型号的 tier、priority、默认选择与 Agent 可选性是本仓策略。本批不修改 service-map，不扩展默认自动路由，不增加未知 schema 键或 credentialSource 枚举。来源校验和配置测试不能替代真实账号、已安装客户端与后台同步验收。

## 本地验证

`validate:sources`、`validate:data-sources`、`validate:runtimes`、`validate`、`catalog:check` 与 `git diff --check` 均通过；来源覆盖 674 条记录，365 条实际 resolver 对照一致。`npm test` 共 174 项通过，包含新型号的身份隔离、原厂/套餐/平台差异、未适配接入保护及 Preview 防误匹配回归。2026-11-16 本地验收时重新拉取的 `origin/main` 为 `2a042fa`、远端预设版本为 139；当时本批 140 为未提交候选。

2026-11-17 提交前再次核对，远端基线与版本未变化，预设更新日期改为本日；本轮官网核验日期仍保留 2026-11-16，不因提交而刷新。审查发现供应商未指定型号的路径按数组首个 chat 条目兜底，因此将所有新增接入追加到各自旧条目之后，并补充四个接入面首个对话模型保持不变的回归；本日完整复跑 175 项测试全部通过。正式合入及运行时发布结果以对应 PR、远端分支和发布工作流回执为准，不能由本地测试代替。
