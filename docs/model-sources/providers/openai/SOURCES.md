# OpenAI：官网证据目录

[供应商索引](README.md)

核验日期：2026-10-03。这里只登记可复用的官网证据与适用边界，具体模型与接入面分别记录。

## 官网证据

### openai-models

- 入口：[openai-models](https://developers.openai.com/api/docs/models)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`OpenAI 直连 API 模型目录；价格为 USD，订阅可用性另核`。
### openai-sol61

- 入口：[openai-sol61](https://developers.openai.com/api/docs/models/gpt-6.1-sol.md)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`OpenAI 直连 API；标准 USD token 计价；内在规格可跨接入面参考`。
### whisper

- 入口：[whisper](https://github.com/openai/whisper)
- 类型：`official-repository`；当前读取状态：`fetched`；地域/接入面：`OpenAI 官方开源仓库；本地模型安装与实际服务另核`。

### gpt-5-5-api

- 入口：[gpt-5-5-api](https://developers.openai.com/api/docs/models/gpt-5.5.md)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：OpenAI 直连 API；USD 每百万 token，不能证明 Codex 订阅窗口或可用性。

### gpt-5-5-pro-api

- 入口：[gpt-5-5-pro-api](https://developers.openai.com/api/docs/models/gpt-5.5-pro.md)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：OpenAI 直连 API；USD 每百万 token，不能证明 Codex 订阅窗口或可用性。

### gpt-5-4-api

- 入口：[gpt-5-4-api](https://developers.openai.com/api/docs/models/gpt-5.4.md)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：OpenAI 直连 API；USD 每百万 token，不能证明 Codex 订阅窗口或可用性。

### gpt-5-4-pro-api

- 入口：[gpt-5-4-pro-api](https://developers.openai.com/api/docs/models/gpt-5.4-pro.md)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：OpenAI 直连 API；USD 每百万 token，不能证明 Codex 订阅窗口或可用性。

### gpt-5-4-mini-api

- 入口：[gpt-5-4-mini-api](https://developers.openai.com/api/docs/models/gpt-5.4-mini.md)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：OpenAI 直连 API；USD 每百万 token，不能证明 Codex 订阅窗口或可用性。

### gpt-5-4-nano-api

- 入口：[gpt-5-4-nano-api](https://developers.openai.com/api/docs/models/gpt-5.4-nano.md)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：OpenAI 直连 API；USD 每百万 token，不能证明 Codex 订阅窗口或可用性。

### openai-gpt-5-nano-tools

- 入口：[openai-gpt-5-nano-tools](https://developers.openai.com/api/docs/models/gpt-5-nano.md)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：OpenAI 直连 API 型号页；2026-10-05 只核对 Supported features 是否含 function_calling 与端点支持情况。

### openai-gpt-4-1-nano-tools

- 入口：[openai-gpt-4-1-nano-tools](https://developers.openai.com/api/docs/models/gpt-4.1-nano.md)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：OpenAI 直连 API 型号页；2026-10-05 只核对 Supported features 是否含 function_calling 与端点支持情况。

### openai-gpt-5-4-nano-tools

- 入口：[openai-gpt-5-4-nano-tools](https://developers.openai.com/api/docs/models/gpt-5.4-nano.md)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：OpenAI 直连 API 型号页；2026-10-05 只核对 Supported features 是否含 function_calling 与端点支持情况。

### openai-gpt-oss-120b-tools

- 入口：[openai-gpt-oss-120b-tools](https://developers.openai.com/api/docs/models/gpt-oss-120b.md)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：OpenAI 开放权重型号页；直连只有 Responses 端点，其他托管平台另核；2026-10-05 只核对 function_calling。

## 已知边界与核验说明

GPT-6.1 Sol 的窗口、输出、推理档位与直连计价已再次核对。API 参数不能自动套用到订阅后端；订阅的档位限制保留接入面记录。其他旧型号尚未在本次逐字段复核。

2026-10-05 工具调用核对：以上 `openai-gpt-5-nano-tools`、`openai-gpt-4-1-nano-tools`、`openai-gpt-5-4-nano-tools`、`openai-gpt-oss-120b-tools` 只用于核对函数 / 工具调用是否受支持，读取日期 2026-10-05；没有借此复核窗口、价格等其他字段，也没有做账号调用验收。能力标签里只有 `tool_use` 一项以这些来源为依据。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

`extra.responsesOnly` 是为工具调用采用的保守协议收紧。官网要求工具调用走 Responses；普通无工具的 Chat Completions 仍支持，不能把此配置理解为原厂完全不支持 Chat Completions。

### realtime21-spec

- 入口：[realtime21-spec](https://developers.openai.com/api/docs/models/gpt-realtime-2.1.md)
- 读取状态：`fetched`；只确认精确型号、总窗口与最大输出；不证明接入协议已验收。

### realtime21mini-spec

- 入口：[realtime21mini-spec](https://developers.openai.com/api/docs/models/gpt-realtime-2.1-mini.md)
- 读取状态：`fetched`；只确认精确型号、总窗口与最大输出；不证明接入协议已验收。

### realtimetranslate-spec

- 入口：[realtimetranslate-spec](https://developers.openai.com/api/docs/models/gpt-realtime-translate.md)
- 读取状态：`fetched`；只确认精确型号、总窗口与最大输出；不证明接入协议已验收。

### openai-deprecations

- 入口：[openai-deprecations](https://developers.openai.com/api/docs/deprecations.md)；本轮读取正文，Nano停止日2027-04-01，当前只deprecated。

## 2026-10-28 新型号核对

Terra 原厂 API 明确窗口 1050000、最大输入 922000、最大输出 128000。最大输入保存在 V2 facts.maxInputTokens，冻结 V1 契约没有新增键。原厂启用已有 responsesOnly；Codex 不声明 none 档，保留原订阅协议，不把 CLI 0.159.0 写成 DesireCore 版本门槛。长上下文倍率、缓存写入与不同服务层级记录在计价说明。

### openai-terra61

- 入口：[openai-terra61](https://developers.openai.com/api/docs/models/gpt-6.1-terra.md)。
- 读取日期：2026-10-28；状态：`fetched`；最终地址：https://developers.openai.com/api/docs/models/gpt-6.1-terra.md。
- 适用范围：OpenAI API 原厂 GPT-6.1 Terra；精确窗口、输入与输出上限、模态、Responses 工具合同和 USD Standard 计价。

### openai-terra61-codex

- 入口：[openai-terra61-codex](https://developers.openai.com/codex/models.md)。
- 读取日期：2026-10-28；状态：`fetched`；最终地址：https://learn.chatgpt.com/docs/models.md。
- 适用范围：Work/Codex 官方型号目录；仅证明订阅产品列出 Terra，不证明订阅账号、独立窗口或每个推理档位。

## 2026-11-01 语音转写核对

核对转写模型的弃用公告、新模型 ID、端点、格式、语言参数与计价，未进行收费 API 调用。同日重读官方仓库 [whisper](#whisper) 的 README：列出 `large-v3`，没有 `whisper-large-v3` 这个 ID，也不提供 HTTP 服务。

### openai-gpt-transcribe

- 入口：[openai-gpt-transcribe](https://developers.openai.com/api/docs/models/gpt-transcribe.md)。
- 读取日期：2026-11-01；状态：`fetched`；最终地址：https://developers.openai.com/api/docs/models/gpt-transcribe.md。
- 适用范围：OpenAI API 原厂 gpt-transcribe 型号页；精确 ID、模态、端点支持与按音频分钟计价。

### openai-file-transcription

- 入口：[openai-file-transcription](https://developers.openai.com/api/docs/guides/speech-to-text.md)。
- 读取日期：2026-11-01；状态：`fetched`；最终地址：https://developers.openai.com/api/docs/guides/speech-to-text.md。
- 适用范围：OpenAI 文件转写指南；推荐模型、输入格式、25 MB 上限、languages 取代 language、流式输出。

### openai-audio-transcriptions-api

- 入口：[openai-audio-transcriptions-api](https://developers.openai.com/api/reference/resources/audio/subresources/transcriptions/methods/create.md)。
- 读取日期：2026-11-01；状态：`fetched`；最终地址：https://developers.openai.com/api/reference/resources/audio/subresources/transcriptions/methods/create.md。
- 适用范围：OpenAI Audio Transcriptions 请求与响应字段；language、languages、text。

### openai-transcription-deprecations

- 入口：[openai-transcription-deprecations](https://developers.openai.com/api/docs/deprecations.md)。
- 读取日期：2026-11-01；状态：`fetched`；最终地址：https://developers.openai.com/api/docs/deprecations.md。
- 适用范围：OpenAI 弃用公告的 2026-08-26 转写模型段；whisper-1 等 2027-02-26 停服及推荐替代。

## 2026-11-16 新型号核对

新增 Image 2.6 Flare/Sunburst 官方 Images API 规格。两者仅支持 images/generations 与 images/edits，不支持 Responses/Chat Completions；本批只记录共享规格，未向无媒体适配的文本 Provider 新增可调用条目。USD/M：文字输入5/缓存1.25，图像输入8/缓存2、输出30。contextWindow/maxOutputTokens 官网未声明，保持 unknown；价格不进入共享规格。

### openai-image26-flare

- 入口：[openai-image26-flare](https://developers.openai.com/api/docs/models/gpt-image-2.6-flare.md)。
- 读取日期：2026-11-16；状态：`fetched`；最终地址：https://developers.openai.com/api/docs/models/gpt-image-2.6-flare.md。
- 适用范围：OpenAI Images API Flare 2.6；精确ID、文字/图像输入、图像输出、端点及USD token价格。

### openai-image26-sunburst

- 入口：[openai-image26-sunburst](https://developers.openai.com/api/docs/models/gpt-image-2.6-sunburst.md)。
- 读取日期：2026-11-16；状态：`fetched`；最终地址：https://developers.openai.com/api/docs/models/gpt-image-2.6-sunburst.md。
- 适用范围：OpenAI Images API Sunburst 2.6；精确ID、文字/图像输入、图像输出、端点及USD token价格。

### openai-image26-guide

- 入口：[openai-image26-guide](https://developers.openai.com/api/docs/guides/image-generation.md)。
- 读取日期：2026-11-16；状态：`fetched`；最终地址：https://developers.openai.com/api/docs/guides/image-generation.md。
- 适用范围：OpenAI Images API 2.6；complexity、图像生成/编辑等请求合同，当前客户端适配另核。

## 2026-11-18 GPT-6.2 增量核对

本轮读取两款精确 API 型号页、API 总目录、迁移/推理/计价/缓存/前缀指南，以及 Work/Codex 的型号和发布记录。正式发布记录为 2026-11-17，实际读取日期为 2026-11-18；不将读取日期当作发布日期。公开型号页各只列 `gpt-6.2-sol`、`gpt-6.2-astra`，没有据此虚构日期快照或 6.2 Pro 原厂 ID。

原厂两款均为 1050000 总窗口、922000 独立最大输入、128000 最大输出；文字/图像输入、文字输出。基础 Chat Completions 仍支持，工具调用必须使用 Responses。新原厂接入同时声明 `responsesOnly` 和实际被 V1 消费的 `apiFormatOverride=openai-responses`，不改 Provider 全局协议或旧模型。API 明确拒绝 none，迁移指南建议原 none/minimal 用户改用 low。共享规格据两原厂型号页及 6.2 迁移指南保守投影 thinkingOnly 与 samplingParametersDeprecated，保护只经过 Spec enrich 的动态精确模型；这是原厂接口硬约束，不从 OpenRouter 反推，也不冒称完整的推理档位矩阵。仅列出现有消费者可传且官方通用配置语法覆盖的 low/medium/high/xhigh/max 子集，不宣称逐模型全部档位或账号已验收；指南中的 medium 是集成建议，不冒充硬默认值，因此不写 defaultEffort。shared routing 的 auto 是本仓策略。

原厂 Responses 请求应移除 temperature/top_p/top_logprobs 及 include 中的 message.output_text.logprobs；Pro 模式、Multi-agent beta、Ultrafast 与显式缓存均不因官网支持便声明本仓已适配。6.2 支持符合资格的 ZDR，迁移指南明确此时 Responses 将 store 视作 false，不能把“store 键含 false 一律拒绝”当作事实。默认缓存请求与设置 `PI_CACHE_RETENTION=long` 的旧 24h retention 路径分别审计；官网要求迁移到 prompt_cache_options.ttl=30m，当前没有据此声称旧 long 或 12h 缓存已适配。缓存写入不是在正常输入价之上叠加收费。前缀、模型降级、用户或组织变更可能令 reasoning items 被服务端丢弃，影响质量、用量与缓存；不是 Fable 5.2 的 prefix 400 合同。

Work/Codex 独立记录：Sol 默认上下文 500000，Astra 默认 272000；官网说可配置最多 1 million，不把原厂 1050000 改称订阅默认值。未取得订阅独立最大输入/输出的型号专属证明，独立最大输入 canonical 为 null；独立订阅输出上限继续在 metadata.knownContract 中记为 unknown。raw/canonical 的 maxOutputTokens=128000 仅是本仓预算规划天花板，采用同型号已核 API 上限并保持既有 V1 共享规格补缺行为；不是订阅官方上限，也不承诺 Codex wire 强制发送此上限，不把该字段列为订阅官网已核。Work 消费端 Light/Enterprise Medium、CLI 或客户端默认各自有条件，不填单一 defaultEffort。五档只作兼容子集，none/minimal/ultra 不加入；Ultra 的多智能体编排、Ultrafast 的服务速度与原厂 reasoning.mode=pro 分别记录。未执行收费 API、真实订阅账号或已安装客户端验收。


数值换算：原厂长输入价格阈值272K按十进制1000换算为272000；Work可配置的1 million按十进制1000000记录。二者不当作官网给出不同接入面相同的硬输入/输出限制，OR的min_prompt_tokens原字段另行保存。

### openai-sol62-20261118

- 入口：[openai-sol62-20261118](https://developers.openai.com/api/docs/models/gpt-6.2-sol.md)。
- 读取日期：2026-11-18；状态：`fetched`；最终地址：https://developers.openai.com/api/docs/models/gpt-6.2-sol.md。
- 适用范围：OpenAI API GPT-6.2 Sol；精确ID、模态、上下文1050000、独立输入922000/输出128000、端点与USD Standard价。

### openai-astra62-20261118

- 入口：[openai-astra62-20261118](https://developers.openai.com/api/docs/models/gpt-6.2-astra.md)。
- 读取日期：2026-11-18；状态：`fetched`；最终地址：https://developers.openai.com/api/docs/models/gpt-6.2-astra.md。
- 适用范围：OpenAI API GPT-6.2 Astra；精确ID、模态、上下文1050000、独立输入922000/输出128000、端点与USD Standard价。

### openai-models-20261118

- 入口：[openai-models-20261118](https://developers.openai.com/api/docs/models.md)。
- 读取日期：2026-11-18；状态：`fetched`；最终地址：https://developers.openai.com/api/docs/models.md。
- 适用范围：OpenAI原厂公共API目录；确认两条6.2精确ID，不作为ChatGPT订阅预算证明。

### openai-latest62-20261118

- 入口：[openai-latest62-20261118](https://developers.openai.com/api/docs/guides/latest-model.md)。
- 读取日期：2026-11-18；状态：`fetched`；最终地址：https://developers.openai.com/api/docs/guides/latest-model.md。
- 适用范围：6.2原厂迁移指南；工具调用要求Responses、采样/logprobs限制、缓存迁移和ZDR的store:false边界。

### openai-reasoning62-20261118

- 入口：[openai-reasoning62-20261118](https://developers.openai.com/api/docs/guides/reasoning.md)。
- 读取日期：2026-11-18；状态：`fetched`；最终地址：https://developers.openai.com/api/docs/guides/reasoning.md。
- 适用范围：OpenAI API推理参数语法与6.2 none拒绝；通用effort列表不是逐模型全档账号验收；pro是reasoning.mode。

### openai-pricing62-20261118

- 入口：[openai-pricing62-20261118](https://developers.openai.com/api/docs/pricing.md)。
- 读取日期：2026-11-18；状态：`fetched`；最终地址：https://developers.openai.com/api/docs/pricing.md。
- 适用范围：OpenAI API Standard/Batch/Fast/Ultrafast按服务层及长短上下文独立计价，USD每百万tokens。

### openai-cache62-20261118

- 入口：[openai-cache62-20261118](https://developers.openai.com/api/docs/guides/prompt-caching.md)。
- 读取日期：2026-11-18；状态：`fetched`；最终地址：https://developers.openai.com/api/docs/guides/prompt-caching.md。
- 适用范围：OpenAI API缓存合同；30m/12h、cache-write非叠加收费与prompt_cache_key账户分组；旧retention迁移另核。

### openai-prefix62-20261118

- 入口：[openai-prefix62-20261118](https://developers.openai.com/api/docs/guides/keep-prefix-unchanged.md)。
- 读取日期：2026-11-18；状态：`fetched`；最终地址：https://developers.openai.com/api/docs/guides/keep-prefix-unchanged.md。
- 适用范围：OpenAI API多轮前缀变更；6.2会丢弃不匹配的reasoning items，不冒称Fable式400拒绝。

### openai-work-models-20261118

- 入口：[openai-work-models-20261118](https://developers.openai.com/codex/models.md)。
- 读取日期：2026-11-18；状态：`fetched`；最终地址：https://learn.chatgpt.com/docs/models.md。
- 适用范围：Work/Codex官网型号目录；6.2 Sol默认上下文500000、Astra272000；不证明API128000输出是订阅上限。

### work-whatsnew62-20261118

- 入口：[work-whatsnew62-20261118](https://learn.chatgpt.com/docs/whats-new/gpt-62-astra-sol.md)。
- 读取日期：2026-11-18；状态：`fetched`；最终地址：https://learn.chatgpt.com/docs/whats-new/gpt-62-astra-sol.md。
- 适用范围：OpenAI Work官方2026-11-17发布记录；6.2两款在Work/Codex/API推出、套餐与工作区门控。

### work-prompt62-20261118

- 入口：[work-prompt62-20261118](https://learn.chatgpt.com/guides/prompting-gpt-6-2-astra.md)。
- 读取日期：2026-11-18；状态：`fetched`；最终地址：https://learn.chatgpt.com/guides/prompting-gpt-6-2-astra.md。
- 适用范围：Work/Codex 6.2官方提示指南；Ultra使用subagents编排，不等同单模型effort或原厂独立Pro模型ID。

### work-speed62-20261118

- 入口：[work-speed62-20261118](https://learn.chatgpt.com/docs/agent-configuration/speed.md)。
- 读取日期：2026-11-18；状态：`fetched`；最终地址：https://learn.chatgpt.com/docs/agent-configuration/speed.md。
- 适用范围：Work/Codex 6.2 Fast/Ultrafast可用性与额外额度，Ultra编排与Ultrafast服务速度是不同功能。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "openai",
  "checkedAt": "2026-10-03",
  "sources": [
    {
      "id": "openai-models",
      "url": "https://developers.openai.com/api/docs/models",
      "kind": "official-doc",
      "scope": "OpenAI 直连 API 模型目录；价格为 USD，订阅可用性另核",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "f67d25aba18df1639fa04c9f56d4c06a22bc374a1b2251b5a7d6506ee4197edc",
      "resolvedUrl": "https://developers.openai.com/api/docs/models"
    },
    {
      "id": "openai-sol61",
      "url": "https://developers.openai.com/api/docs/models/gpt-6.1-sol.md",
      "kind": "official-doc",
      "scope": "OpenAI 直连 API；标准 USD token 计价；内在规格可跨接入面参考",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "972f4265295eea723d5332016dc22cde03f46173fafcbcba5c23b24c8cee90c6",
      "resolvedUrl": "https://developers.openai.com/api/docs/models/gpt-6.1-sol.md"
    },
    {
      "id": "whisper",
      "url": "https://github.com/openai/whisper",
      "kind": "official-repository",
      "scope": "OpenAI 官方开源仓库；本地模型安装与实际服务另核",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "00141f69ddad540f79bf3c2e89420f204a3350a940848574d6c26879a261a925",
      "resolvedUrl": "https://github.com/openai/whisper"
    },
    {
      "id": "gpt-5-5-api",
      "url": "https://developers.openai.com/api/docs/models/gpt-5.5.md",
      "kind": "official-doc",
      "scope": "OpenAI 直连 API；USD 每百万 token，不能证明 Codex 订阅窗口或可用性",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "fdb0fc8fe9ea7f276716c2a5b49b902e7e676ff262bb8adfdf2d5b8911bad3ba",
      "resolvedUrl": "https://developers.openai.com/api/docs/models/gpt-5.5.md"
    },
    {
      "id": "gpt-5-5-pro-api",
      "url": "https://developers.openai.com/api/docs/models/gpt-5.5-pro.md",
      "kind": "official-doc",
      "scope": "OpenAI 直连 API；USD 每百万 token，不能证明 Codex 订阅窗口或可用性",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "a61a55e1d58cfbbf56fa075936c77fbfd59e41df4463f41056f9c6a7461f1b57",
      "resolvedUrl": "https://developers.openai.com/api/docs/models/gpt-5.5-pro.md"
    },
    {
      "id": "gpt-5-4-api",
      "url": "https://developers.openai.com/api/docs/models/gpt-5.4.md",
      "kind": "official-doc",
      "scope": "OpenAI 直连 API；USD 每百万 token，不能证明 Codex 订阅窗口或可用性",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "c30e86b38bc6ceacb3d6db269aa6ba4a09c3c5e1322bfaf90f924fddce4013a5",
      "resolvedUrl": "https://developers.openai.com/api/docs/models/gpt-5.4.md"
    },
    {
      "id": "gpt-5-4-pro-api",
      "url": "https://developers.openai.com/api/docs/models/gpt-5.4-pro.md",
      "kind": "official-doc",
      "scope": "OpenAI 直连 API；USD 每百万 token，不能证明 Codex 订阅窗口或可用性",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "7d4e6f56440cf9cebd56c7384118be317d30d3d2f0c33e1254c4b906fb972e22",
      "resolvedUrl": "https://developers.openai.com/api/docs/models/gpt-5.4-pro.md"
    },
    {
      "id": "gpt-5-4-mini-api",
      "url": "https://developers.openai.com/api/docs/models/gpt-5.4-mini.md",
      "kind": "official-doc",
      "scope": "OpenAI 直连 API；USD 每百万 token，不能证明 Codex 订阅窗口或可用性",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "97dbda29af4009ed275112e92037a5b46f313caf0d1232ff9b54b899b4fb65a7",
      "resolvedUrl": "https://developers.openai.com/api/docs/models/gpt-5.4-mini.md"
    },
    {
      "id": "gpt-5-4-nano-api",
      "url": "https://developers.openai.com/api/docs/models/gpt-5.4-nano.md",
      "kind": "official-doc",
      "scope": "OpenAI 直连 API；USD 每百万 token，不能证明 Codex 订阅窗口或可用性",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "3dd20e2c95f09f3efb19c6255387a4e07d4d7c213367cca0a015e162a8f5b4e0",
      "resolvedUrl": "https://developers.openai.com/api/docs/models/gpt-5.4-nano.md"
    },
    {
      "id": "realtime21-spec",
      "url": "https://developers.openai.com/api/docs/models/gpt-realtime-2.1.md",
      "kind": "official-doc",
      "scope": "原厂精确模型、窗口与输出；接入协议独立验收",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "4ab3318598ef8f29b919a3da13125b84b54c463ad71e67dee644aa6adc78a408",
      "resolvedUrl": "https://developers.openai.com/api/docs/models/gpt-realtime-2.1.md"
    },
    {
      "id": "realtime21mini-spec",
      "url": "https://developers.openai.com/api/docs/models/gpt-realtime-2.1-mini.md",
      "kind": "official-doc",
      "scope": "原厂精确模型、窗口与输出；接入协议独立验收",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "bec9dbe2d4ea92540cbc688f85a935916dbe6b0f3605405dc8ae2bc034e1094b",
      "resolvedUrl": "https://developers.openai.com/api/docs/models/gpt-realtime-2.1-mini.md"
    },
    {
      "id": "realtimetranslate-spec",
      "url": "https://developers.openai.com/api/docs/models/gpt-realtime-translate.md",
      "kind": "official-doc",
      "scope": "原厂精确模型、窗口与输出；接入协议独立验收",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "a95860e250772faa38ba78b08834abde51619679962f081c9c3b1b2f0636ab13",
      "resolvedUrl": "https://developers.openai.com/api/docs/models/gpt-realtime-translate.md"
    },
    {
      "id": "openai-deprecations",
      "url": "https://developers.openai.com/api/docs/deprecations.md",
      "kind": "official-doc",
      "scope": "原厂宣布deprecated与正式停止服务日期分开；不把未来停止日当当前退役",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "ac78c7daedd9543728f7a2c6ed453afce3bcbdcf590535fb4b65a7d2e7c43481",
      "resolvedUrl": "https://developers.openai.com/api/docs/deprecations.md"
    },
    {
      "id": "openai-gpt-5-nano-tools",
      "url": "https://developers.openai.com/api/docs/models/gpt-5-nano.md",
      "kind": "official-doc",
      "scope": "OpenAI 直连 API 型号页；2026-10-05 只核对 Supported features 是否含 function_calling 与端点支持情况",
      "retrieval": "fetched",
      "checkedAt": "2026-10-05",
      "contentSha256": "81508b2800ec4c9da22cf057ad4d6c2ba9237d98ec6a3915b5bc1df0ce45d131",
      "resolvedUrl": "https://developers.openai.com/api/docs/models/gpt-5-nano.md"
    },
    {
      "id": "openai-gpt-4-1-nano-tools",
      "url": "https://developers.openai.com/api/docs/models/gpt-4.1-nano.md",
      "kind": "official-doc",
      "scope": "OpenAI 直连 API 型号页；2026-10-05 只核对 Supported features 是否含 function_calling 与端点支持情况",
      "retrieval": "fetched",
      "checkedAt": "2026-10-05",
      "contentSha256": "b7bd756c48509d7eaa8187100fc682537c78eec6c3ff099ad6d3e28ace1a86eb",
      "resolvedUrl": "https://developers.openai.com/api/docs/models/gpt-4.1-nano.md"
    },
    {
      "id": "openai-gpt-5-4-nano-tools",
      "url": "https://developers.openai.com/api/docs/models/gpt-5.4-nano.md",
      "kind": "official-doc",
      "scope": "OpenAI 直连 API 型号页；2026-10-05 只核对 Supported features 是否含 function_calling 与端点支持情况",
      "retrieval": "fetched",
      "checkedAt": "2026-10-05",
      "contentSha256": "3dd20e2c95f09f3efb19c6255387a4e07d4d7c213367cca0a015e162a8f5b4e0",
      "resolvedUrl": "https://developers.openai.com/api/docs/models/gpt-5.4-nano.md"
    },
    {
      "id": "openai-gpt-oss-120b-tools",
      "url": "https://developers.openai.com/api/docs/models/gpt-oss-120b.md",
      "kind": "official-doc",
      "scope": "OpenAI 开放权重型号页；直连只有 Responses 端点，其他托管平台另核；2026-10-05 只核对 function_calling",
      "retrieval": "fetched",
      "checkedAt": "2026-10-05",
      "contentSha256": "2b57ea5a172afd293be49e3acb3d270c060a31ade355f04a4b7c4f45d37fae72",
      "resolvedUrl": "https://developers.openai.com/api/docs/models/gpt-oss-120b.md"
    },
    {
      "id": "openai-terra61",
      "url": "https://developers.openai.com/api/docs/models/gpt-6.1-terra.md",
      "kind": "official-doc",
      "scope": "OpenAI API 原厂 GPT-6.1 Terra；精确窗口、输入与输出上限、模态、Responses 工具合同和 USD Standard 计价",
      "retrieval": "fetched",
      "checkedAt": "2026-10-28",
      "contentSha256": "cd34faa8904d85961ab5fe270f079b8be45a9c876af6c809b38b2c069f687a7a",
      "resolvedUrl": "https://developers.openai.com/api/docs/models/gpt-6.1-terra.md"
    },
    {
      "id": "openai-terra61-codex",
      "url": "https://developers.openai.com/codex/models.md",
      "kind": "official-doc",
      "scope": "Work/Codex 官方型号目录；仅证明订阅产品列出 Terra，不证明订阅账号、独立窗口或每个推理档位",
      "retrieval": "fetched",
      "checkedAt": "2026-10-28",
      "contentSha256": "87a2915f285b10cafd7e5bc8875edd640d273fe63a4ec0cd13a62866e75828fb",
      "resolvedUrl": "https://learn.chatgpt.com/docs/models.md"
    },
    {
      "id": "openai-gpt-transcribe",
      "url": "https://developers.openai.com/api/docs/models/gpt-transcribe.md",
      "kind": "official-doc",
      "scope": "OpenAI API 原厂 gpt-transcribe 型号页；精确 ID、模态、端点支持与按音频分钟计价",
      "retrieval": "fetched",
      "checkedAt": "2026-11-01",
      "contentSha256": "b17461ab4c993823ab8eb6f12e44a7bec3f54ce34ddceb84ad52fb0048de01bb",
      "resolvedUrl": "https://developers.openai.com/api/docs/models/gpt-transcribe.md"
    },
    {
      "id": "openai-file-transcription",
      "url": "https://developers.openai.com/api/docs/guides/speech-to-text.md",
      "kind": "official-doc",
      "scope": "OpenAI 文件转写指南；推荐模型、输入格式、25 MB 上限、languages 取代 language、流式输出",
      "retrieval": "fetched",
      "checkedAt": "2026-11-01",
      "contentSha256": "bffa0b8c1fca2ac545a311cb32f7ae082898853a1347700f149462119017e4bb",
      "resolvedUrl": "https://developers.openai.com/api/docs/guides/speech-to-text.md"
    },
    {
      "id": "openai-audio-transcriptions-api",
      "url": "https://developers.openai.com/api/reference/resources/audio/subresources/transcriptions/methods/create.md",
      "kind": "official-doc",
      "scope": "OpenAI Audio Transcriptions 请求与响应字段；language、languages、text",
      "retrieval": "fetched",
      "checkedAt": "2026-11-01",
      "contentSha256": "a33a451c88abac5d50e63f24ba12011def2b4d834b6334d63b4350773c759f30",
      "resolvedUrl": "https://developers.openai.com/api/reference/resources/audio/subresources/transcriptions/methods/create.md"
    },
    {
      "id": "openai-transcription-deprecations",
      "url": "https://developers.openai.com/api/docs/deprecations.md",
      "kind": "official-doc",
      "scope": "OpenAI 弃用公告的 2026-08-26 转写模型段；whisper-1 等 2027-02-26 停服及推荐替代",
      "retrieval": "fetched",
      "checkedAt": "2026-11-01",
      "contentSha256": "3fddf4c625d689e43e559c236bcdd675de8a3b3d035070ba205827d8ad0a2fc2",
      "resolvedUrl": "https://developers.openai.com/api/docs/deprecations.md"
    },
    {
      "id": "openai-image26-flare",
      "url": "https://developers.openai.com/api/docs/models/gpt-image-2.6-flare.md",
      "kind": "official-doc",
      "scope": "OpenAI Images API Flare 2.6；精确ID、文字/图像输入、图像输出、端点及USD token价格",
      "retrieval": "fetched",
      "checkedAt": "2026-11-16",
      "contentSha256": "f3fe213ed849fda17ef940665c5acd3ac5f105e08982a2547a6f7abf1c4a5f28",
      "resolvedUrl": "https://developers.openai.com/api/docs/models/gpt-image-2.6-flare.md"
    },
    {
      "id": "openai-image26-sunburst",
      "url": "https://developers.openai.com/api/docs/models/gpt-image-2.6-sunburst.md",
      "kind": "official-doc",
      "scope": "OpenAI Images API Sunburst 2.6；精确ID、文字/图像输入、图像输出、端点及USD token价格",
      "retrieval": "fetched",
      "checkedAt": "2026-11-16",
      "contentSha256": "d2cd79c636d6dba6ed0dbf1cc5bc9b6dada80a5c7cf25ebbfdc1af3606f8c27f",
      "resolvedUrl": "https://developers.openai.com/api/docs/models/gpt-image-2.6-sunburst.md"
    },
    {
      "id": "openai-image26-guide",
      "url": "https://developers.openai.com/api/docs/guides/image-generation.md",
      "kind": "official-doc",
      "scope": "OpenAI Images API 2.6；complexity、图像生成/编辑等请求合同，当前客户端适配另核",
      "retrieval": "fetched",
      "checkedAt": "2026-11-16",
      "contentSha256": "5194462789c0348f288a68e50aa3ba6d69058bddcea5cf0be6379484acbb2e36",
      "resolvedUrl": "https://developers.openai.com/api/docs/guides/image-generation.md"
    },
    {
      "id": "openai-sol62-20261118",
      "url": "https://developers.openai.com/api/docs/models/gpt-6.2-sol.md",
      "kind": "official-doc",
      "scope": "OpenAI API GPT-6.2 Sol；精确ID、模态、上下文1050000、独立输入922000/输出128000、端点与USD Standard价",
      "retrieval": "fetched",
      "checkedAt": "2026-11-18",
      "contentSha256": "3c1aa626387fc854be2560f16620f0c913f4a2aa97e8208d4239efd3279fe913",
      "resolvedUrl": "https://developers.openai.com/api/docs/models/gpt-6.2-sol.md"
    },
    {
      "id": "openai-astra62-20261118",
      "url": "https://developers.openai.com/api/docs/models/gpt-6.2-astra.md",
      "kind": "official-doc",
      "scope": "OpenAI API GPT-6.2 Astra；精确ID、模态、上下文1050000、独立输入922000/输出128000、端点与USD Standard价",
      "retrieval": "fetched",
      "checkedAt": "2026-11-18",
      "contentSha256": "89611cfc6a48262e6e73d2bca8e9aed9c6694b9ae2955a12d16f0d949081d639",
      "resolvedUrl": "https://developers.openai.com/api/docs/models/gpt-6.2-astra.md"
    },
    {
      "id": "openai-models-20261118",
      "url": "https://developers.openai.com/api/docs/models.md",
      "kind": "official-doc",
      "scope": "OpenAI原厂公共API目录；确认两条6.2精确ID，不作为ChatGPT订阅预算证明",
      "retrieval": "fetched",
      "checkedAt": "2026-11-18",
      "contentSha256": "c9d3616bd43cdc89b7f0794cc26a1c8e02645190e0077a4f99173b904da5b399",
      "resolvedUrl": "https://developers.openai.com/api/docs/models.md"
    },
    {
      "id": "openai-latest62-20261118",
      "url": "https://developers.openai.com/api/docs/guides/latest-model.md",
      "kind": "official-doc",
      "scope": "6.2原厂迁移指南；工具调用要求Responses、采样/logprobs限制、缓存迁移和ZDR的store:false边界",
      "retrieval": "fetched",
      "checkedAt": "2026-11-18",
      "contentSha256": "2b61930a36a6d9631e6c304c9f9eea5ebc2121e68e5b7fe389ca417bdf67e5b5",
      "resolvedUrl": "https://developers.openai.com/api/docs/guides/latest-model.md"
    },
    {
      "id": "openai-reasoning62-20261118",
      "url": "https://developers.openai.com/api/docs/guides/reasoning.md",
      "kind": "official-doc",
      "scope": "OpenAI API推理参数语法与6.2 none拒绝；通用effort列表不是逐模型全档账号验收；pro是reasoning.mode",
      "retrieval": "fetched",
      "checkedAt": "2026-11-18",
      "contentSha256": "41279ffe43e21d54f1a3a76117f20e95bb7737644a26623ab424d176689e0d54",
      "resolvedUrl": "https://developers.openai.com/api/docs/guides/reasoning.md"
    },
    {
      "id": "openai-pricing62-20261118",
      "url": "https://developers.openai.com/api/docs/pricing.md",
      "kind": "official-doc",
      "scope": "OpenAI API Standard/Batch/Fast/Ultrafast按服务层及长短上下文独立计价，USD每百万tokens",
      "retrieval": "fetched",
      "checkedAt": "2026-11-18",
      "contentSha256": "427698a0c4f1cf4abb2569cb0f9a4ca7fcacfa2f45d61a75f221f0b590ac5114",
      "resolvedUrl": "https://developers.openai.com/api/docs/pricing.md"
    },
    {
      "id": "openai-cache62-20261118",
      "url": "https://developers.openai.com/api/docs/guides/prompt-caching.md",
      "kind": "official-doc",
      "scope": "OpenAI API缓存合同；30m/12h、cache-write非叠加收费与prompt_cache_key账户分组；旧retention迁移另核",
      "retrieval": "fetched",
      "checkedAt": "2026-11-18",
      "contentSha256": "248c29075e1790bf644f6c40ffe1df6ad71f30dc036c0632e06e467e7556cf30",
      "resolvedUrl": "https://developers.openai.com/api/docs/guides/prompt-caching.md"
    },
    {
      "id": "openai-prefix62-20261118",
      "url": "https://developers.openai.com/api/docs/guides/keep-prefix-unchanged.md",
      "kind": "official-doc",
      "scope": "OpenAI API多轮前缀变更；6.2会丢弃不匹配的reasoning items，不冒称Fable式400拒绝",
      "retrieval": "fetched",
      "checkedAt": "2026-11-18",
      "contentSha256": "7f7ec10168698229e05d4206562410aff0773fd84a2b7a8769b24796fd399c12",
      "resolvedUrl": "https://developers.openai.com/api/docs/guides/keep-prefix-unchanged.md"
    },
    {
      "id": "openai-work-models-20261118",
      "url": "https://developers.openai.com/codex/models.md",
      "kind": "official-doc",
      "scope": "Work/Codex官网型号目录；6.2 Sol默认上下文500000、Astra272000；不证明API128000输出是订阅上限",
      "retrieval": "fetched",
      "checkedAt": "2026-11-18",
      "contentSha256": "56dc4b791e918727a0ad69386c2781e7f530ccf083766f8e14ac368abf7fec23",
      "resolvedUrl": "https://learn.chatgpt.com/docs/models.md"
    },
    {
      "id": "work-whatsnew62-20261118",
      "url": "https://learn.chatgpt.com/docs/whats-new/gpt-62-astra-sol.md",
      "kind": "official-doc",
      "scope": "OpenAI Work官方2026-11-17发布记录；6.2两款在Work/Codex/API推出、套餐与工作区门控",
      "retrieval": "fetched",
      "checkedAt": "2026-11-18",
      "contentSha256": "334568dfedf5ebea74a844fcc7af862cbb4af15995d2681555e8448b3dec8e32",
      "resolvedUrl": "https://learn.chatgpt.com/docs/whats-new/gpt-62-astra-sol.md"
    },
    {
      "id": "work-prompt62-20261118",
      "url": "https://learn.chatgpt.com/guides/prompting-gpt-6-2-astra.md",
      "kind": "official-doc",
      "scope": "Work/Codex 6.2官方提示指南；Ultra使用subagents编排，不等同单模型effort或原厂独立Pro模型ID",
      "retrieval": "fetched",
      "checkedAt": "2026-11-18",
      "contentSha256": "aa56ad6955220a6e7aeccd980a18ccb94fd144e3f7e8bcdb91f33be9dc6041bf",
      "resolvedUrl": "https://learn.chatgpt.com/guides/prompting-gpt-6-2-astra.md"
    },
    {
      "id": "work-speed62-20261118",
      "url": "https://learn.chatgpt.com/docs/agent-configuration/speed.md",
      "kind": "official-doc",
      "scope": "Work/Codex 6.2 Fast/Ultrafast可用性与额外额度，Ultra编排与Ultrafast服务速度是不同功能",
      "retrieval": "fetched",
      "checkedAt": "2026-11-18",
      "contentSha256": "ea46b8409f45d012b23bf385f7f515e4c99785ccb852ce4b000dd26eb3d623ce",
      "resolvedUrl": "https://learn.chatgpt.com/docs/agent-configuration/speed.md"
    }
  ]
}
```
<!-- source-metadata:end -->

## 本轮增量核验与临时模型边界

2026-10-03 逐一读取 GPT-5.5、5.5 Pro、5.4、5.4 Pro、5.4 Mini/Nano 明文规格页。已核字段见各单模型记录；这不能证明 Codex 订阅的参数或可用性。Mini/Nano 的总窗口 400000 与最大输入 272000 是两个不同限制，当前 schema 未声明独立最大输入字段，先记录此边界，不把 400000 宣称为可发送的输入上限。

GPT-Reserve 的官方模型页本次无法读取，官方模型搜索没有取得参数证据。保留既有手动配置和假定参数供明确选择，不删除用户先前要求的模型；共享规格将 eligibleForAgent 设为 false，正式规格取得前不参与 Agent 自动选型。1050000 共享假定窗口与 Codex 272000 接入限制仍分别待核，不能互相作为证据。
