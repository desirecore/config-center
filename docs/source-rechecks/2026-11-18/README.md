# 2026-11-18 OpenAI 6.2 增量核查

目录基线为最新 `origin/main` 的 `5f08ae8`、预设版本 140。本批原厂型号为 `gpt-6.2-sol`、`gpt-6.2-astra`，官方发布日 2026-11-17，读取日 2026-11-18。新增后为 311 条共享规格、373 条接入，预设版本 141；V2 仍保持 candidate/null，不借型号更新启用未发布合同。

| 接入 | 本批条目 | 窗口及独立限制 | 默认与计价边界 |
| --- | --- | --- | --- |
| OpenAI API | 两款 base 精确 ID | 窗口1050000；独立最大输入922000、输出128000 | 未把推荐 medium 当硬默认；Standard Sol 2/10、Astra 8/40 USD/百万 tokens |
| Work/Codex | 两款同名订阅 ID | 官网默认 Sol500000、Astra272000；独立输入/输出上限未公布 | 输出128000仅本仓规划天花板；不套用API美元价、不猜单一账户默认 |
| OpenRouter | 两款 base + 两款 `-pro` listing | 平台窗口1050000/输出128000，Endpoints明确最大输入922000 | 平台默认medium；Standard价、长输入阶和可选速度分开 |

## 实际消费与兼容边界

- 新 API 条目同时保留 `responsesOnly` 与 `apiFormatOverride=openai-responses`。稳定客户端 V1 实际仅读后者，单独 responsesOnly 不能保证工具调用进入 Responses。原 Provider 全局协议和所有旧条目保持原样，OR 继续其独立 Chat Completions 合同，订阅继续 native 协议。
- 根据原厂页面和迁移指南给共享规格保守投影 thinkingOnly 与 samplingParametersDeprecated，防止只靠 Spec enrich 的动态精确模型发送关闭或自定义采样参数；API 与 OR 另保留接入约束。官方明确拒绝 none；minimal 迁移到 low 是指南建议，不能把所有排除项都写成已实测 400。五档 low/medium/high/xhigh/max 是本批已发布消费者可编码的兼容子集，未做逐账号、逐档调用验收。
- API/订阅没有取得型号专属硬默认，本批不写其 defaultEffort；ModelSpec 的 auto 是本仓策略。OR 的 medium 则来自独立官方 Models API 字段。Ultra 是上层编排，Ultrafast 是速度层级，都不写入冻结 effort 枚举或伪装新模型 ID。
- 静态订阅 raw context 经 resolver 与发送检查点仍保留500000/272000；通用强匹配 enrich 另可能回填 API 窗口，不能将其显示当订阅证据。V1 省略 maxOutput 仍会在 current-model-contract 回填128000，本批把该值显式记录为已有行为对应的本仓预算规划天花板，不称上游独立限额、也不保证 native wire 强制此值。订阅官方上限仍为未知，不能由 V2 null 或字段省略假称 V1 已保留 unknown。冻结预置不能承载用户自己的 userOverrides，托管 UI 也没有通用预算编辑入口。
- 默认 Responses 请求不强制 long 缓存，真实 SDK 离线捕获确认只带缓存 key、store:false，不带旧 retention/options。store:false 与官方 ZDR 说明相容。外部 `PI_CACHE_RETENTION=long` 会产生旧24h字段，现客户端没有按模型转换或关闭它的数据字段；记录此缺口，不新增假扩展键、不猜 future requiredClientVersion。原厂前缀变化会丢弃 reasoning items、影响费用/质量，但不是 Fable 5.2 式 prefix400。

## 平台模式与价格

OR 官方 Reasoning Tokens 文档明确：直接调用 `*-pro` listing 与 base 加 reasoning.mode=pro 等价，因此现有消费者直接保留 Pro slug 可调用，不必新增请求键。它是接入模式，不是新的原厂 ModelSpec；V1 matcher 的 volatile suffix 不含 pro，family 补缺保留真实 slug 与既有显示名，Smart 不以 family 获得自动资格。

所有 token 价按精确 USD/token×1000000 换算。原厂 272K 按十进制1000换算272000；API 超过该值整请求输入/缓存×2、输出×1.5，缓存写不是叠加费；可选 Fast、Batch、Ultrafast与地区条件分别看来源。OR 保留原始 `min_prompt_tokens=272000`、完整长阶费率在来源/metadata与价格说明，不转换未知临界点开闭，也不把未消费的长阶键当自动计费实现。Pro每token价相同不代表单次费用相同，其额外推理会消耗更多tokens。Fast/Ultrafast为端点层级，本批不固定选择、不并入Standard价，也不承诺动态估算或账户结算。

## 基线保护与证据

原有309规格和365条接入的值与相对顺序保留；新增条目统一追加，所有既有首个对话模型、provider/index、service-map及默认自动路由保持。API型号页只列 base ID，没有凭发布日期造 snapshot 或原厂 Pro ID。官方文档、接口、最终URL、SHA与字段证明见 OpenAI/OR 各自 SOURCES 和单模型文档。

实际消费者核到稳定 `v10.0.203`（SDK1.4.0）、Alpha `v10.0.205`（SDK1.5.2）与当前 dev；两通道的发布清单及rollout声明不代替安装包字节、真实安装或账号可用性。新模型使用已存在协议与字段，没有新凭据源、枚举扩值、未来版本门槛或客户端源码改动。本轮测试与来源校验不代替收费账号、安装 GUI 或客户端后台同步验收。

## 提交前验证

`validate:sources`、`validate:data-sources`、`validate:runtimes`、`validate`、`catalog:check` 和 `git diff --check` 通过，覆盖684条来源记录、373条实际解析对照。完整180项测试通过，独立审查亦复跑180/180。新增回归验证原厂V1/V2显式Responses、订阅窗口与本仓输出策略、原厂/平台独立计价与Pro身份、受支持档位子集及首个对话模型不变。旧309规格和365条接入语义、连接与相对顺序均已逐项对照，无扩大默认调用范围；发布结果另以PR和运行分支回执为准。
