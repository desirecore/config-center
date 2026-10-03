# ModelSpec实施决定

本文件记录P0/P3逐项处置，机器清单为 [SPEC-DECISIONS.json](SPEC-DECISIONS.json)。未知值保留unknown并禁止family扩权，不把分类完成称作官网事实全部完成。

- 340条接入重新用正式tag真实匹配器核对；当前14 none、5 family、43条数值差异。
- Nano和Pro独立精确规格；删除基础GPT-5.4宽泛pattern，实时三型号补官方窗口/输出。
- Coding Plan官方正文确认qwen3-coder-plus/next ID，仅加identity-only精确规格，无参数/路由授权。
- 其他19条明确access-local例外：实际请求ID/局部数值保留，V2不从family制造身份、能力或自动路由；原V1已发布匹配器历史行为不能仅靠此文件修复。
- 独立maxInputTokens：本次模型页只证明总窗口，272000不能凭预算相减假定为原厂输入硬上限；V2支持该字段，具体新值未知保留null。
- 本次官方读取日期2026-10-03；Nano公告deprecated、停止2027-04-01，当前不得以deprecated当已停服。

## 原24条匹配异常

| 接入 | ID | 原匹配 → 当前 | 决定 |
| --- | --- | --- | --- |
| `compute/providers/openai.json` | `gpt-realtime-2.1` | none → exact | exact-official-facts |
| `compute/providers/openai.json` | `gpt-realtime-2.1-mini` | none → exact | exact-official-facts |
| `compute/providers/openai.json` | `gpt-realtime-translate` | none → exact | exact-official-facts |
| `compute/providers/dashscope.json` | `qwen-mt-plus` | none → none | access-local-no-inheritance |
| `compute/providers/volcengine.json` | `doubao-seedream-4-0-250828` | none → none | access-local-no-inheritance |
| `compute/providers/moonshot.json` | `moonshot-v1-8k-vision-preview` | family → family | access-local-no-inheritance |
| `compute/providers/moonshot.json` | `moonshot-v1-32k-vision-preview` | family → family | access-local-no-inheritance |
| `compute/providers/moonshot.json` | `moonshot-v1-128k-vision-preview` | family → family | access-local-no-inheritance |
| `compute/providers/zhipu.json` | `glm-4.7-flashx` | family → family | access-local-no-inheritance |
| `compute/providers/siliconflow.json` | `BAAI/bge-m3` | none → none | access-local-no-inheritance |
| `compute/providers/local-whisper.json` | `whisper-large-v3` | family → family | access-local-no-inheritance |
| `compute/providers/ollama.json` | `llama3.1:70b` | none → none | access-local-no-inheritance |
| `compute/providers/xai.json` | `grok-build-0.1` | none → none | access-local-no-inheritance |
| `compute/providers/openrouter.json` | `cohere/command-a-plus` | none → none | access-local-no-inheritance |
| `compute/providers/openrouter.json` | `openrouter/auto` | none → none | access-local-no-inheritance |
| `compute/coding-plans/dashscope-coding.json` | `qwen3-coder-plus` | family → exact | exact-identity-only |
| `compute/coding-plans/dashscope-coding.json` | `qwen3-coder-next` | family → exact | exact-identity-only |
| `compute/coding-plans/volcengine-coding.json` | `ark-code-latest` | none → none | access-local-no-inheritance |
| `compute/coding-plans/tencent-token.json` | `tc-code-latest` | none → none | access-local-no-inheritance |
| `compute/coding-plans/moonshot-coding.json` | `kimi-for-coding` | none → none | access-local-no-inheritance |
| `compute/coding-plans/baidu-coding.json` | `qianfan-code-latest` | none → none | access-local-no-inheritance |
| `compute/coding-plans/infini-coding.json` | `deepseek-v3` | none → none | access-local-no-inheritance |
| `compute/coding-plans/moorethread-coding.json` | `mt-coder` | none → none | access-local-no-inheritance |
| `compute/coding-plans/kwai-coding.json` | `kwai-coder` | none → none | access-local-no-inheritance |

## 原45条参数差异

| 接入 / 型号 | 分类 | 决定及依据边界 |
| --- | --- | --- |
| `compute/providers/openai.json#gpt-5.4-nano` | corrected-identity | 官网400000/128000；基础GPT-5.4的1050000属于另一型号，已消除误吞。 |
| `compute/providers/openai-codex.json#gpt-reserve` | unverified-preserved | 订阅接入272000并非原厂API总窗口；暂无订阅字段证明，作为未核接入限制保留，不提升到1050000。 |
| `compute/providers/openai-codex.json#gpt-5.6-sol` | unverified-preserved | 订阅接入272000并非原厂API总窗口；暂无订阅字段证明，作为未核接入限制保留，不提升到1050000。 |
| `compute/providers/openai-codex.json#gpt-5.6-terra` | unverified-preserved | 订阅接入272000并非原厂API总窗口；暂无订阅字段证明，作为未核接入限制保留，不提升到1050000。 |
| `compute/providers/openai-codex.json#gpt-5.6-luna` | unverified-preserved | 订阅接入272000并非原厂API总窗口；暂无订阅字段证明，作为未核接入限制保留，不提升到1050000。 |
| `compute/providers/openai-codex.json#gpt-5.5` | unverified-preserved | 订阅接入272000并非原厂API总窗口；暂无订阅字段证明，作为未核接入限制保留，不提升到1050000。 |
| `compute/providers/openai-codex.json#gpt-5.4` | unverified-preserved | 订阅接入272000并非原厂API总窗口；暂无订阅字段证明，作为未核接入限制保留，不提升到1050000。 |
| `compute/providers/openai-codex.json#gpt-5.4-mini` | unverified-preserved | 订阅接入272000并非原厂API总窗口；暂无订阅字段证明，作为未核接入限制保留，不提升到1050000。 |
| `compute/providers/volcengine.json#doubao-seed-2.1-turbo` | unverified-preserved | 官方正文读取边界仍存在，输入/输出和总窗口不可混用；不把套餐262144或旧共享128000/32000判定为已核。 |
| `compute/providers/volcengine.json#doubao-seed-2.0-lite` | unverified-preserved | 官方正文读取边界仍存在，输入/输出和总窗口不可混用；不把套餐262144或旧共享128000/32000判定为已核。 |
| `compute/providers/volcengine.json#doubao-seed-2.0-mini` | unverified-preserved | 官方正文读取边界仍存在，输入/输出和总窗口不可混用；不把套餐262144或旧共享128000/32000判定为已核。 |
| `compute/providers/moonshot.json#kimi-k2.7-code` | unverified-preserved | 缺少精确接入字段证明；原厂与接入值均不冒充已核，不用最大值或机械min覆盖。 |
| `compute/providers/moonshot.json#kimi-k2.7-code-highspeed` | unverified-preserved | 缺少精确接入字段证明；原厂与接入值均不冒充已核，不用最大值或机械min覆盖。 |
| `compute/providers/moonshot.json#kimi-k2.6` | unverified-preserved | 缺少精确接入字段证明；原厂与接入值均不冒充已核，不用最大值或机械min覆盖。 |
| `compute/providers/moonshot.json#kimi-k2.5` | unverified-preserved | 缺少精确接入字段证明；原厂与接入值均不冒充已核，不用最大值或机械min覆盖。 |
| `compute/providers/moonshot.json#moonshot-v1-32k-vision-preview` | family-binding-rejected | 旧family错误落入8K文本型号，视觉版本窗口不能继承该规格；V2仅使用现有局部值，身份待核。 |
| `compute/providers/moonshot.json#moonshot-v1-128k-vision-preview` | family-binding-rejected | 旧family错误落入8K文本型号，视觉版本窗口不能继承该规格；V2仅使用现有局部值，身份待核。 |
| `compute/providers/zhipu.json#glm-5.2` | unverified-preserved | 1000000/1048576、128000/131072等不能凭K/M简写推断换算；平台与原厂各值保留，精确整数待官网同页证明。 |
| `compute/providers/zhipu.json#glm-5.1` | unverified-preserved | 1000000/1048576、128000/131072等不能凭K/M简写推断换算；平台与原厂各值保留，精确整数待官网同页证明。 |
| `compute/providers/zhipu.json#glm-5-turbo` | unverified-preserved | 1000000/1048576、128000/131072等不能凭K/M简写推断换算；平台与原厂各值保留，精确整数待官网同页证明。 |
| `compute/providers/zhipu.json#glm-5` | unverified-preserved | 1000000/1048576、128000/131072等不能凭K/M简写推断换算；平台与原厂各值保留，精确整数待官网同页证明。 |
| `compute/providers/zhipu.json#glm-4.7` | unverified-preserved | 1000000/1048576、128000/131072等不能凭K/M简写推断换算；平台与原厂各值保留，精确整数待官网同页证明。 |
| `compute/providers/zhipu.json#glm-4.7-flashx` | unverified-preserved | 1000000/1048576、128000/131072等不能凭K/M简写推断换算；平台与原厂各值保留，精确整数待官网同页证明。 |
| `compute/providers/zhipu.json#glm-5v-turbo` | unverified-preserved | 1000000/1048576、128000/131072等不能凭K/M简写推断换算；平台与原厂各值保留，精确整数待官网同页证明。 |
| `compute/providers/zhipu.json#glm-4.6` | unverified-preserved | 1000000/1048576、128000/131072等不能凭K/M简写推断换算；平台与原厂各值保留，精确整数待官网同页证明。 |
| `compute/providers/minimax.json#MiniMax-M3` | unverified-preserved | 直连/套餐131072与共享512000缺少同一语义输出证明；保持分开、unknown覆盖，不把其解释为thinking预算或默认max_tokens。 |
| `compute/providers/xai.json#grok-4.20-0309-reasoning` | unverified-preserved | 缺少精确接入字段证明；原厂与接入值均不冒充已核，不用最大值或机械min覆盖。 |
| `compute/providers/openrouter.json#minimax/minimax-m3` | platform-contract-preserved | OpenRouter托管合同独立于原厂；以本次官方目录核对接入值，不能反写为原厂固有上限。 |
| `compute/providers/openrouter.json#deepseek/deepseek-v4.1-flash` | platform-contract-preserved | OpenRouter托管合同独立于原厂；以本次官方目录核对接入值，不能反写为原厂固有上限。 |
| `compute/providers/openrouter.json#z-ai/glm-5.3-flash` | platform-contract-preserved | OpenRouter托管合同独立于原厂；以本次官方目录核对接入值，不能反写为原厂固有上限。 |
| `compute/providers/openrouter.json#moonshotai/kimi-k3` | platform-contract-preserved | OpenRouter托管合同独立于原厂；以本次官方目录核对接入值，不能反写为原厂固有上限。 |
| `compute/coding-plans/zhipu-coding.json#glm-5.2` | unverified-preserved | 1000000/1048576、128000/131072等不能凭K/M简写推断换算；平台与原厂各值保留，精确整数待官网同页证明。 |
| `compute/coding-plans/zhipu-coding.json#glm-5-turbo` | unverified-preserved | 1000000/1048576、128000/131072等不能凭K/M简写推断换算；平台与原厂各值保留，精确整数待官网同页证明。 |
| `compute/coding-plans/zhipu-coding.json#glm-4.7` | unverified-preserved | 1000000/1048576、128000/131072等不能凭K/M简写推断换算；平台与原厂各值保留，精确整数待官网同页证明。 |
| `compute/coding-plans/dashscope-coding.json#qwen3-coder-plus` | identity-isolated | 当前Coding Plan官网正文列出该精确ID；并未证明窗口，新增无参数exact规格阻止262144家族值覆盖1000000。 |
| `compute/coding-plans/dashscope-coding.json#kimi-k2.5` | unverified-preserved | 缺少精确接入字段证明；原厂与接入值均不冒充已核，不用最大值或机械min覆盖。 |
| `compute/coding-plans/dashscope-coding.json#glm-5` | unverified-preserved | 1000000/1048576、128000/131072等不能凭K/M简写推断换算；平台与原厂各值保留，精确整数待官网同页证明。 |
| `compute/coding-plans/dashscope-coding.json#glm-4.7` | unverified-preserved | 1000000/1048576、128000/131072等不能凭K/M简写推断换算；平台与原厂各值保留，精确整数待官网同页证明。 |
| `compute/coding-plans/dashscope-coding.json#MiniMax-M2.5` | unverified-preserved | 缺少精确接入字段证明；原厂与接入值均不冒充已核，不用最大值或机械min覆盖。 |
| `compute/coding-plans/dashscope-token-plan.json#kimi-k2.5` | unverified-preserved | 缺少精确接入字段证明；原厂与接入值均不冒充已核，不用最大值或机械min覆盖。 |
| `compute/coding-plans/dashscope-token-plan.json#glm-5` | unverified-preserved | 1000000/1048576、128000/131072等不能凭K/M简写推断换算；平台与原厂各值保留，精确整数待官网同页证明。 |
| `compute/coding-plans/dashscope-token-plan.json#MiniMax-M2.5` | unverified-preserved | 缺少精确接入字段证明；原厂与接入值均不冒充已核，不用最大值或机械min覆盖。 |
| `compute/coding-plans/dashscope-token-plan.json#glm-4.7` | unverified-preserved | 1000000/1048576、128000/131072等不能凭K/M简写推断换算；平台与原厂各值保留，精确整数待官网同页证明。 |
| `compute/coding-plans/volcengine-coding.json#doubao-seed-2.1-turbo` | unverified-preserved | 官方正文读取边界仍存在，输入/输出和总窗口不可混用；不把套餐262144或旧共享128000/32000判定为已核。 |
| `compute/coding-plans/minimax-coding.json#MiniMax-M3` | unverified-preserved | 直连/套餐131072与共享512000缺少同一语义输出证明；保持分开、unknown覆盖，不把其解释为thinking预算或默认max_tokens。 |

## 原58条spec-only用途

| 规格 / 型号 | 分类 | 保留理由 |
| --- | --- | --- |
| `compute/model-specs/anthropic.json#claude-opus-4-8` | dynamic-directory-candidate | 保留用于动态目录精确匹配；静态未命中不证明退役，也不授权接入调用。 |
| `compute/model-specs/anthropic.json#claude-opus-4-7` | dynamic-directory-candidate | 保留用于动态目录精确匹配；静态未命中不证明退役，也不授权接入调用。 |
| `compute/model-specs/anthropic.json#claude-opus` | family-display-fallback | 家族/滚动名称仅展示或保守补缺，不能对未知型号继承高风险能力/身份。 |
| `compute/model-specs/anthropic.json#claude-sonnet-4-6` | dynamic-directory-candidate | 保留用于动态目录精确匹配；静态未命中不证明退役，也不授权接入调用。 |
| `compute/model-specs/anthropic.json#claude-sonnet-4-5` | dynamic-directory-candidate | 保留用于动态目录精确匹配；静态未命中不证明退役，也不授权接入调用。 |
| `compute/model-specs/anthropic.json#claude-sonnet` | family-display-fallback | 家族/滚动名称仅展示或保守补缺，不能对未知型号继承高风险能力/身份。 |
| `compute/model-specs/openai.json#dall-e-3` | dynamic-directory-candidate | 保留用于动态目录精确匹配；静态未命中不证明退役，也不授权接入调用。 |
| `compute/model-specs/openai.json#gpt-4o-realtime` | legacy-compatibility | 旧精确别名/版本保留兼容；未取得退役日期证明，不据静态缺失删除，不能当成当前接入可用性。 |
| `compute/model-specs/openai.json#gpt-4o-realtime-preview` | legacy-compatibility | 旧精确别名/版本保留兼容；未取得退役日期证明，不据静态缺失删除，不能当成当前接入可用性。 |
| `compute/model-specs/openai.json#gpt-oss-120b` | dynamic-directory-candidate | 保留用于动态目录精确匹配；静态未命中不证明退役，也不授权接入调用。 |
| `compute/model-specs/openai.json#gpt-5.6-sol-pro` | dynamic-directory-candidate | 保留用于动态目录精确匹配；静态未命中不证明退役，也不授权接入调用。 |
| `compute/model-specs/openai.json#gpt-5.6-terra-pro` | dynamic-directory-candidate | 保留用于动态目录精确匹配；静态未命中不证明退役，也不授权接入调用。 |
| `compute/model-specs/openai.json#gpt-5.6-luna-pro` | dynamic-directory-candidate | 保留用于动态目录精确匹配；静态未命中不证明退役，也不授权接入调用。 |
| `compute/model-specs/google.json#gemini-3.5-transcribe-live` | native-adapter-required | 原生或媒体协议需独立适配及版本验收；保持spec-only，不新增Provider，不扩大自动路由。 |
| `compute/model-specs/google.json#gemini-3.5-transcribe` | native-adapter-required | 原生或媒体协议需独立适配及版本验收；保持spec-only，不新增Provider，不扩大自动路由。 |
| `compute/model-specs/google.json#gemini-3.8-live-extended-thinking` | native-adapter-required | 原生或媒体协议需独立适配及版本验收；保持spec-only，不新增Provider，不扩大自动路由。 |
| `compute/model-specs/google.json#gemini-3.8-live` | native-adapter-required | 原生或媒体协议需独立适配及版本验收；保持spec-only，不新增Provider，不扩大自动路由。 |
| `compute/model-specs/google.json#gemini-3.8-flash-lite-tts` | native-adapter-required | 原生或媒体协议需独立适配及版本验收；保持spec-only，不新增Provider，不扩大自动路由。 |
| `compute/model-specs/google.json#gemini-3.8-flash-tts` | native-adapter-required | 原生或媒体协议需独立适配及版本验收；保持spec-only，不新增Provider，不扩大自动路由。 |
| `compute/model-specs/google.json#gemini-3.1-flash-lite-image` | dynamic-directory-candidate | 保留用于动态目录精确匹配；静态未命中不证明退役，也不授权接入调用。 |
| `compute/model-specs/google.json#gemini-3.1-flash-image` | dynamic-directory-candidate | 保留用于动态目录精确匹配；静态未命中不证明退役，也不授权接入调用。 |
| `compute/model-specs/deepseek.json#deepseek-chat` | legacy-compatibility | 旧精确别名/版本保留兼容；未取得退役日期证明，不据静态缺失删除，不能当成当前接入可用性。 |
| `compute/model-specs/deepseek.json#deepseek-reasoner` | legacy-compatibility | 旧精确别名/版本保留兼容；未取得退役日期证明，不据静态缺失删除，不能当成当前接入可用性。 |
| `compute/model-specs/qwen.json#qwen3.8-max-preview` | dynamic-directory-candidate | 保留用于动态目录精确匹配；静态未命中不证明退役，也不授权接入调用。 |
| `compute/model-specs/qwen.json#qwen-max` | family-display-fallback | 家族/滚动名称仅展示或保守补缺，不能对未知型号继承高风险能力/身份。 |
| `compute/model-specs/qwen.json#qwen-plus` | family-display-fallback | 家族/滚动名称仅展示或保守补缺，不能对未知型号继承高风险能力/身份。 |
| `compute/model-specs/qwen.json#qwen-turbo` | family-display-fallback | 家族/滚动名称仅展示或保守补缺，不能对未知型号继承高风险能力/身份。 |
| `compute/model-specs/qwen.json#qwen3-max-trans` | dynamic-directory-candidate | 保留用于动态目录精确匹配；静态未命中不证明退役，也不授权接入调用。 |
| `compute/model-specs/qwen.json#qwen3.5-35b-a3b` | dynamic-directory-candidate | 保留用于动态目录精确匹配；静态未命中不证明退役，也不授权接入调用。 |
| `compute/model-specs/qwen.json#qwen3.5-27b` | dynamic-directory-candidate | 保留用于动态目录精确匹配；静态未命中不证明退役，也不授权接入调用。 |
| `compute/model-specs/moonshot.json#kimi-k2-thinking` | dynamic-directory-candidate | 保留用于动态目录精确匹配；静态未命中不证明退役，也不授权接入调用。 |
| `compute/model-specs/moonshot.json#kimi-k2` | dynamic-directory-candidate | 保留用于动态目录精确匹配；静态未命中不证明退役，也不授权接入调用。 |
| `compute/model-specs/zhipu.json#glm-4.7-thinking` | dynamic-directory-candidate | 保留用于动态目录精确匹配；静态未命中不证明退役，也不授权接入调用。 |
| `compute/model-specs/minimax.json#MiniMax-H3-Max` | native-adapter-required | 原生或媒体协议需独立适配及版本验收；保持spec-only，不新增Provider，不扩大自动路由。 |
| `compute/model-specs/minimax.json#MiniMax-H3` | native-adapter-required | 原生或媒体协议需独立适配及版本验收；保持spec-only，不新增Provider，不扩大自动路由。 |
| `compute/model-specs/minimax.json#MiniMax-Text-01` | dynamic-directory-candidate | 保留用于动态目录精确匹配；静态未命中不证明退役，也不授权接入调用。 |
| `compute/model-specs/xai.json#grok-4.5` | dynamic-directory-candidate | 保留用于动态目录精确匹配；静态未命中不证明退役，也不授权接入调用。 |
| `compute/model-specs/xai.json#grok-4-1-fast-reasoning` | dynamic-directory-candidate | 保留用于动态目录精确匹配；静态未命中不证明退役，也不授权接入调用。 |
| `compute/model-specs/xiaomi.json#mimo-v2.5` | dynamic-directory-candidate | 保留用于动态目录精确匹配；静态未命中不证明退役，也不授权接入调用。 |
| `compute/model-specs/xiaomi.json#mimo-v2-pro` | dynamic-directory-candidate | 保留用于动态目录精确匹配；静态未命中不证明退役，也不授权接入调用。 |
| `compute/model-specs/xiaomi.json#mimo-v2-omni` | dynamic-directory-candidate | 保留用于动态目录精确匹配；静态未命中不证明退役，也不授权接入调用。 |
| `compute/model-specs/xiaomi.json#mimo-v2-flash` | dynamic-directory-candidate | 保留用于动态目录精确匹配；静态未命中不证明退役，也不授权接入调用。 |
| `compute/model-specs/xiaomi.json#mimo-v2-tts` | native-adapter-required | 原生或媒体协议需独立适配及版本验收；保持spec-only，不新增Provider，不扩大自动路由。 |
| `compute/model-specs/cohere.json#rerank-v4.0-fast` | native-adapter-required | 原生或媒体协议需独立适配及版本验收；保持spec-only，不新增Provider，不扩大自动路由。 |
| `compute/model-specs/cohere.json#rerank-v4.0-pro` | native-adapter-required | 原生或媒体协议需独立适配及版本验收；保持spec-only，不新增Provider，不扩大自动路由。 |
| `compute/model-specs/cohere.json#north-mini-code-1-0` | dynamic-directory-candidate | 保留用于动态目录精确匹配；静态未命中不证明退役，也不授权接入调用。 |
| `compute/model-specs/cohere.json#north-small-translate-1-0` | dynamic-directory-candidate | 保留用于动态目录精确匹配；静态未命中不证明退役，也不授权接入调用。 |
| `compute/model-specs/cohere.json#rerank-v3.5` | native-adapter-required | 原生或媒体协议需独立适配及版本验收；保持spec-only，不新增Provider，不扩大自动路由。 |
| `compute/model-specs/kling.json#kling-3.0-turbo` | native-adapter-required | 原生或媒体协议需独立适配及版本验收；保持spec-only，不新增Provider，不扩大自动路由。 |
| `compute/model-specs/stability.json#stable-audio-3.0` | native-adapter-required | 原生或媒体协议需独立适配及版本验收；保持spec-only，不新增Provider，不扩大自动路由。 |
| `compute/model-specs/tencent.json#hy3` | dynamic-directory-candidate | 保留用于动态目录精确匹配；静态未命中不证明退役，也不授权接入调用。 |
| `compute/model-specs/tencent.json#hy3-preview` | dynamic-directory-candidate | 保留用于动态目录精确匹配；静态未命中不证明退役，也不授权接入调用。 |
| `compute/model-specs/volcengine.json#doubao-seedance-2.0-fast` | dynamic-directory-candidate | 保留用于动态目录精确匹配；静态未命中不证明退役，也不授权接入调用。 |
| `compute/model-specs/volcengine.json#doubao-seedance-2.0-mini` | dynamic-directory-candidate | 保留用于动态目录精确匹配；静态未命中不证明退役，也不授权接入调用。 |
| `compute/model-specs/volcengine.json#doubao-seedance-1.5-pro` | legacy-compatibility | 旧精确别名/版本保留兼容；未取得退役日期证明，不据静态缺失删除，不能当成当前接入可用性。 |
| `compute/model-specs/volcengine.json#doubao-seedance-1.0-pro` | legacy-compatibility | 旧精确别名/版本保留兼容；未取得退役日期证明，不据静态缺失删除，不能当成当前接入可用性。 |
| `compute/model-specs/volcengine.json#doubao-seedance-1.0-pro-fast` | legacy-compatibility | 旧精确别名/版本保留兼容；未取得退役日期证明，不据静态缺失删除，不能当成当前接入可用性。 |
| `compute/model-specs/stealth.json#ox-alpha` | historical-identity | 原入口已下架；历史身份映射证据不足，保留兼容记录而不重新上架或扩大路由。 |

## V2严格绑定补充

旧matcher的normalized/stripped/pattern匹配不自动提升为V2已证identity。首次严格导入列出的36条均已逐项记录strictExactExceptions，保留access-local，不造原厂modelRef，不继承路由授权。

讯飞X2官方正文确认输入64K/输出128K，同页输出整数131072，按该页1024单位换算输入65536。V2使用独立maxInputTokens，总窗口unknown；不能把输入65536继续解释为总窗口。该换算与原厂明文整数证据分开。
