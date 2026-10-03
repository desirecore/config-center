# ModelSpec匹配与数值差异基线

[PLAN](PLAN.md) · [职责/合成设计](MODEL-SPECS.md)

使用正式发布tag v10.0.177的model-spec-matcher.ts纯函数，对本仓V127进行离线只读匹配，未调用模型API。该检查说明数据可匹配性，不证明所有运行时入口会以覆盖模式调用applySpec，也不证明差异全是错误。

340接入记录/279规格：303 exact、3 normalized、1 stripped、9 pattern、7 family、17 none；45条记录有窗口或输出数值差异。

## 无匹配（17条）与family（7条）

| 接入配置 | 模型ID | 匹配 | 当前落入规格 | 分类与处理 |
| --- | --- | --- | --- | --- |
| `compute/providers/openai.json` | `gpt-realtime-2.1` | none | 无 | P0区分固定型号补exact、动态别名、family保守兜底或待协议适配；不据此自动补参数 |
| `compute/providers/openai.json` | `gpt-realtime-2.1-mini` | none | 无 | P0区分固定型号补exact、动态别名、family保守兜底或待协议适配；不据此自动补参数 |
| `compute/providers/openai.json` | `gpt-realtime-translate` | none | 无 | P0区分固定型号补exact、动态别名、family保守兜底或待协议适配；不据此自动补参数 |
| `compute/providers/dashscope.json` | `qwen-mt-plus` | none | 无 | P0区分固定型号补exact、动态别名、family保守兜底或待协议适配；不据此自动补参数 |
| `compute/providers/volcengine.json` | `doubao-seedream-4-0-250828` | none | 无 | P0区分固定型号补exact、动态别名、family保守兜底或待协议适配；不据此自动补参数 |
| `compute/providers/moonshot.json` | `moonshot-v1-8k-vision-preview` | family | moonshot-v1-8k | P0区分固定型号补exact、动态别名、family保守兜底或待协议适配；不据此自动补参数 |
| `compute/providers/moonshot.json` | `moonshot-v1-32k-vision-preview` | family | moonshot-v1-8k | P0区分固定型号补exact、动态别名、family保守兜底或待协议适配；不据此自动补参数 |
| `compute/providers/moonshot.json` | `moonshot-v1-128k-vision-preview` | family | moonshot-v1-8k | P0区分固定型号补exact、动态别名、family保守兜底或待协议适配；不据此自动补参数 |
| `compute/providers/zhipu.json` | `glm-4.7-flashx` | family | glm-4.7 | P0区分固定型号补exact、动态别名、family保守兜底或待协议适配；不据此自动补参数 |
| `compute/providers/siliconflow.json` | `BAAI/bge-m3` | none | 无 | P0区分固定型号补exact、动态别名、family保守兜底或待协议适配；不据此自动补参数 |
| `compute/providers/local-whisper.json` | `whisper-large-v3` | family | whisper-1 | P0区分固定型号补exact、动态别名、family保守兜底或待协议适配；不据此自动补参数 |
| `compute/providers/ollama.json` | `llama3.1:70b` | none | 无 | P0区分固定型号补exact、动态别名、family保守兜底或待协议适配；不据此自动补参数 |
| `compute/providers/xai.json` | `grok-build-0.1` | none | 无 | P0区分固定型号补exact、动态别名、family保守兜底或待协议适配；不据此自动补参数 |
| `compute/providers/openrouter.json` | `cohere/command-a-plus` | none | 无 | P0区分固定型号补exact、动态别名、family保守兜底或待协议适配；不据此自动补参数 |
| `compute/providers/openrouter.json` | `openrouter/auto` | none | 无 | P0区分固定型号补exact、动态别名、family保守兜底或待协议适配；不据此自动补参数 |
| `compute/coding-plans/dashscope-coding.json` | `qwen3-coder-plus` | family | qwen3-coder | P0区分固定型号补exact、动态别名、family保守兜底或待协议适配；不据此自动补参数 |
| `compute/coding-plans/dashscope-coding.json` | `qwen3-coder-next` | family | qwen3-coder | P0区分固定型号补exact、动态别名、family保守兜底或待协议适配；不据此自动补参数 |
| `compute/coding-plans/volcengine-coding.json` | `ark-code-latest` | none | 无 | P0区分固定型号补exact、动态别名、family保守兜底或待协议适配；不据此自动补参数 |
| `compute/coding-plans/tencent-token.json` | `tc-code-latest` | none | 无 | P0区分固定型号补exact、动态别名、family保守兜底或待协议适配；不据此自动补参数 |
| `compute/coding-plans/moonshot-coding.json` | `kimi-for-coding` | none | 无 | P0区分固定型号补exact、动态别名、family保守兜底或待协议适配；不据此自动补参数 |
| `compute/coding-plans/baidu-coding.json` | `qianfan-code-latest` | none | 无 | P0区分固定型号补exact、动态别名、family保守兜底或待协议适配；不据此自动补参数 |
| `compute/coding-plans/infini-coding.json` | `deepseek-v3` | none | 无 | P0区分固定型号补exact、动态别名、family保守兜底或待协议适配；不据此自动补参数 |
| `compute/coding-plans/moorethread-coding.json` | `mt-coder` | none | 无 | P0区分固定型号补exact、动态别名、family保守兜底或待协议适配；不据此自动补参数 |
| `compute/coding-plans/kwai-coding.json` | `kwai-coder` | none | 无 | P0区分固定型号补exact、动态别名、family保守兜底或待协议适配；不据此自动补参数 |

## 数值差异（45条）

| 接入配置 | 模型ID | 规格/匹配 | 接入值 → Spec值 | 处置状态 |
| --- | --- | --- | --- | --- |
| `compute/providers/openai.json` | `gpt-5.4-nano` | gpt-5.4 (pattern) | contextWindow: 400000 → 1050000 | 待分型：平台覆盖/错误/单位/缺证，不要求全部相等 |
| `compute/providers/openai-codex.json` | `gpt-reserve` | gpt-reserve (exact) | contextWindow: 272000 → 1050000 | 待分型：平台覆盖/错误/单位/缺证，不要求全部相等 |
| `compute/providers/openai-codex.json` | `gpt-5.6-sol` | gpt-5.6-sol (exact) | contextWindow: 272000 → 1050000 | 待分型：平台覆盖/错误/单位/缺证，不要求全部相等 |
| `compute/providers/openai-codex.json` | `gpt-5.6-terra` | gpt-5.6-terra (exact) | contextWindow: 272000 → 1050000 | 待分型：平台覆盖/错误/单位/缺证，不要求全部相等 |
| `compute/providers/openai-codex.json` | `gpt-5.6-luna` | gpt-5.6-luna (exact) | contextWindow: 272000 → 1050000 | 待分型：平台覆盖/错误/单位/缺证，不要求全部相等 |
| `compute/providers/openai-codex.json` | `gpt-5.5` | gpt-5.5 (exact) | contextWindow: 272000 → 1050000 | 待分型：平台覆盖/错误/单位/缺证，不要求全部相等 |
| `compute/providers/openai-codex.json` | `gpt-5.4` | gpt-5.4 (exact) | contextWindow: 272000 → 1050000 | 待分型：平台覆盖/错误/单位/缺证，不要求全部相等 |
| `compute/providers/openai-codex.json` | `gpt-5.4-mini` | gpt-5.4-mini (exact) | contextWindow: 272000 → 400000 | 待分型：平台覆盖/错误/单位/缺证，不要求全部相等 |
| `compute/providers/volcengine.json` | `doubao-seed-2.1-turbo` | doubao-seed-2.1-turbo (exact) | maxOutputTokens: 262144 → 128000 | 待分型：平台覆盖/错误/单位/缺证，不要求全部相等 |
| `compute/providers/volcengine.json` | `doubao-seed-2.0-lite` | doubao-seed-2.0-lite (exact) | maxOutputTokens: 128000 → 32000 | 待分型：平台覆盖/错误/单位/缺证，不要求全部相等 |
| `compute/providers/volcengine.json` | `doubao-seed-2.0-mini` | doubao-seed-2.0-mini (exact) | maxOutputTokens: 128000 → 32000 | 待分型：平台覆盖/错误/单位/缺证，不要求全部相等 |
| `compute/providers/moonshot.json` | `kimi-k2.7-code` | kimi-k2.7-code (exact) | maxOutputTokens: 32768 → 16384 | 待分型：平台覆盖/错误/单位/缺证，不要求全部相等 |
| `compute/providers/moonshot.json` | `kimi-k2.7-code-highspeed` | kimi-k2.7-code (pattern) | maxOutputTokens: 32768 → 16384 | 待分型：平台覆盖/错误/单位/缺证，不要求全部相等 |
| `compute/providers/moonshot.json` | `kimi-k2.6` | kimi-k2.6 (exact) | maxOutputTokens: 32768 → 16384 | 待分型：平台覆盖/错误/单位/缺证，不要求全部相等 |
| `compute/providers/moonshot.json` | `kimi-k2.5` | kimi-k2.5 (exact) | contextWindow: 262144 → 256000 | 待分型：平台覆盖/错误/单位/缺证，不要求全部相等 |
| `compute/providers/moonshot.json` | `moonshot-v1-32k-vision-preview` | moonshot-v1-8k (family) | contextWindow: 32768 → 8192 | 待分型：平台覆盖/错误/单位/缺证，不要求全部相等 |
| `compute/providers/moonshot.json` | `moonshot-v1-128k-vision-preview` | moonshot-v1-8k (family) | contextWindow: 131072 → 8192 | 待分型：平台覆盖/错误/单位/缺证，不要求全部相等 |
| `compute/providers/zhipu.json` | `glm-5.2` | glm-5.2 (exact) | contextWindow: 1000000 → 1048576；maxOutputTokens: 131072 → 32768 | 待分型：平台覆盖/错误/单位/缺证，不要求全部相等 |
| `compute/providers/zhipu.json` | `glm-5.1` | glm-5.1 (exact) | maxOutputTokens: 131072 → 128000 | 待分型：平台覆盖/错误/单位/缺证，不要求全部相等 |
| `compute/providers/zhipu.json` | `glm-5-turbo` | glm-5-turbo (exact) | maxOutputTokens: 131072 → 128000 | 待分型：平台覆盖/错误/单位/缺证，不要求全部相等 |
| `compute/providers/zhipu.json` | `glm-5` | glm-5 (exact) | maxOutputTokens: 131072 → 128000 | 待分型：平台覆盖/错误/单位/缺证，不要求全部相等 |
| `compute/providers/zhipu.json` | `glm-4.7` | glm-4.7 (exact) | maxOutputTokens: 131072 → 128000 | 待分型：平台覆盖/错误/单位/缺证，不要求全部相等 |
| `compute/providers/zhipu.json` | `glm-4.7-flashx` | glm-4.7 (family) | maxOutputTokens: 131072 → 128000 | 待分型：平台覆盖/错误/单位/缺证，不要求全部相等 |
| `compute/providers/zhipu.json` | `glm-5v-turbo` | glm-5v-turbo (exact) | maxOutputTokens: 131072 → 128000 | 待分型：平台覆盖/错误/单位/缺证，不要求全部相等 |
| `compute/providers/zhipu.json` | `glm-4.6` | glm-4.6 (exact) | maxOutputTokens: 131072 → 128000 | 待分型：平台覆盖/错误/单位/缺证，不要求全部相等 |
| `compute/providers/minimax.json` | `MiniMax-M3` | MiniMax-M3 (exact) | maxOutputTokens: 131072 → 512000 | 待分型：平台覆盖/错误/单位/缺证，不要求全部相等 |
| `compute/providers/xai.json` | `grok-4.20-0309-reasoning` | grok-4.20-0309-reasoning (exact) | contextWindow: 1000000 → 2000000 | 待分型：平台覆盖/错误/单位/缺证，不要求全部相等 |
| `compute/providers/openrouter.json` | `minimax/minimax-m3` | MiniMax-M3 (normalized) | contextWindow: 1048576 → 1000000 | 待分型：平台覆盖/错误/单位/缺证，不要求全部相等 |
| `compute/providers/openrouter.json` | `deepseek/deepseek-v4.1-flash` | deepseek-flash (exact) | contextWindow: 1048576 → 1000000；maxOutputTokens: 943718 → 384000 | 待分型：平台覆盖/错误/单位/缺证，不要求全部相等 |
| `compute/providers/openrouter.json` | `z-ai/glm-5.3-flash` | glm-5.3-flash (exact) | maxOutputTokens: 943717 → 131072 | 待分型：平台覆盖/错误/单位/缺证，不要求全部相等 |
| `compute/providers/openrouter.json` | `moonshotai/kimi-k3` | kimi-k3 (exact) | maxOutputTokens: 943718 → 1048576 | 待分型：平台覆盖/错误/单位/缺证，不要求全部相等 |
| `compute/coding-plans/zhipu-coding.json` | `glm-5.2` | glm-5.2 (exact) | contextWindow: 1000000 → 1048576；maxOutputTokens: 131072 → 32768 | 待分型：平台覆盖/错误/单位/缺证，不要求全部相等 |
| `compute/coding-plans/zhipu-coding.json` | `glm-5-turbo` | glm-5-turbo (exact) | maxOutputTokens: 131072 → 128000 | 待分型：平台覆盖/错误/单位/缺证，不要求全部相等 |
| `compute/coding-plans/zhipu-coding.json` | `glm-4.7` | glm-4.7 (exact) | maxOutputTokens: 131072 → 128000 | 待分型：平台覆盖/错误/单位/缺证，不要求全部相等 |
| `compute/coding-plans/dashscope-coding.json` | `qwen3-coder-plus` | qwen3-coder (family) | contextWindow: 1000000 → 262144 | 待分型：平台覆盖/错误/单位/缺证，不要求全部相等 |
| `compute/coding-plans/dashscope-coding.json` | `kimi-k2.5` | kimi-k2.5 (exact) | contextWindow: 262144 → 256000 | 待分型：平台覆盖/错误/单位/缺证，不要求全部相等 |
| `compute/coding-plans/dashscope-coding.json` | `glm-5` | glm-5 (exact) | contextWindow: 202752 → 200000；maxOutputTokens: 131072 → 128000 | 待分型：平台覆盖/错误/单位/缺证，不要求全部相等 |
| `compute/coding-plans/dashscope-coding.json` | `glm-4.7` | glm-4.7 (exact) | contextWindow: 202752 → 200000；maxOutputTokens: 131072 → 128000 | 待分型：平台覆盖/错误/单位/缺证，不要求全部相等 |
| `compute/coding-plans/dashscope-coding.json` | `MiniMax-M2.5` | MiniMax-M2.5 (exact) | contextWindow: 196608 → 204800；maxOutputTokens: 8192 → 131072 | 待分型：平台覆盖/错误/单位/缺证，不要求全部相等 |
| `compute/coding-plans/dashscope-token-plan.json` | `kimi-k2.5` | kimi-k2.5 (exact) | contextWindow: 262144 → 256000 | 待分型：平台覆盖/错误/单位/缺证，不要求全部相等 |
| `compute/coding-plans/dashscope-token-plan.json` | `glm-5` | glm-5 (exact) | contextWindow: 202752 → 200000；maxOutputTokens: 131072 → 128000 | 待分型：平台覆盖/错误/单位/缺证，不要求全部相等 |
| `compute/coding-plans/dashscope-token-plan.json` | `MiniMax-M2.5` | MiniMax-M2.5 (exact) | contextWindow: 196608 → 204800；maxOutputTokens: 8192 → 131072 | 待分型：平台覆盖/错误/单位/缺证，不要求全部相等 |
| `compute/coding-plans/dashscope-token-plan.json` | `glm-4.7` | glm-4.7 (exact) | maxOutputTokens: 131072 → 128000 | 待分型：平台覆盖/错误/单位/缺证，不要求全部相等 |
| `compute/coding-plans/volcengine-coding.json` | `doubao-seed-2.1-turbo` | doubao-seed-2.1-turbo (exact) | maxOutputTokens: 262144 → 128000 | 待分型：平台覆盖/错误/单位/缺证，不要求全部相等 |
| `compute/coding-plans/minimax-coding.json` | `MiniMax-M3` | MiniMax-M3 (exact) | maxOutputTokens: 131072 → 512000 | 待分型：平台覆盖/错误/单位/缺证，不要求全部相等 |

## 未被静态接入记录命中的规格（58条）

其中4条具有routing。静态未命中不证明无云端使用方、不证明退役。分别核动态目录、家族兜底、历史兼容、原生协议待适配与真正孤立后决定保留或归档。

| 规格文件 | ID | 当前routing存在 |
| --- | --- | --- |
| `compute/model-specs/anthropic.json` | `claude-opus-4-8` | 否 |
| `compute/model-specs/anthropic.json` | `claude-opus-4-7` | 否 |
| `compute/model-specs/anthropic.json` | `claude-opus` | 否 |
| `compute/model-specs/anthropic.json` | `claude-sonnet-4-6` | 否 |
| `compute/model-specs/anthropic.json` | `claude-sonnet-4-5` | 否 |
| `compute/model-specs/anthropic.json` | `claude-sonnet` | 否 |
| `compute/model-specs/openai.json` | `dall-e-3` | 否 |
| `compute/model-specs/openai.json` | `gpt-4o-realtime` | 否 |
| `compute/model-specs/openai.json` | `gpt-4o-realtime-preview` | 否 |
| `compute/model-specs/openai.json` | `gpt-oss-120b` | 否 |
| `compute/model-specs/openai.json` | `gpt-5.6-sol-pro` | 否 |
| `compute/model-specs/openai.json` | `gpt-5.6-terra-pro` | 否 |
| `compute/model-specs/openai.json` | `gpt-5.6-luna-pro` | 否 |
| `compute/model-specs/google.json` | `gemini-3.5-transcribe-live` | 否 |
| `compute/model-specs/google.json` | `gemini-3.5-transcribe` | 否 |
| `compute/model-specs/google.json` | `gemini-3.8-live-extended-thinking` | 否 |
| `compute/model-specs/google.json` | `gemini-3.8-live` | 否 |
| `compute/model-specs/google.json` | `gemini-3.8-flash-lite-tts` | 否 |
| `compute/model-specs/google.json` | `gemini-3.8-flash-tts` | 否 |
| `compute/model-specs/google.json` | `gemini-3.1-flash-lite-image` | 否 |
| `compute/model-specs/google.json` | `gemini-3.1-flash-image` | 否 |
| `compute/model-specs/deepseek.json` | `deepseek-chat` | 否 |
| `compute/model-specs/deepseek.json` | `deepseek-reasoner` | 否 |
| `compute/model-specs/qwen.json` | `qwen3.8-max-preview` | 是 |
| `compute/model-specs/qwen.json` | `qwen-max` | 否 |
| `compute/model-specs/qwen.json` | `qwen-plus` | 否 |
| `compute/model-specs/qwen.json` | `qwen-turbo` | 否 |
| `compute/model-specs/qwen.json` | `qwen3-max-trans` | 否 |
| `compute/model-specs/qwen.json` | `qwen3.5-35b-a3b` | 否 |
| `compute/model-specs/qwen.json` | `qwen3.5-27b` | 否 |
| `compute/model-specs/moonshot.json` | `kimi-k2-thinking` | 否 |
| `compute/model-specs/moonshot.json` | `kimi-k2` | 否 |
| `compute/model-specs/zhipu.json` | `glm-4.7-thinking` | 否 |
| `compute/model-specs/minimax.json` | `MiniMax-H3-Max` | 否 |
| `compute/model-specs/minimax.json` | `MiniMax-H3` | 否 |
| `compute/model-specs/minimax.json` | `MiniMax-Text-01` | 否 |
| `compute/model-specs/xai.json` | `grok-4.5` | 否 |
| `compute/model-specs/xai.json` | `grok-4-1-fast-reasoning` | 否 |
| `compute/model-specs/xiaomi.json` | `mimo-v2.5` | 是 |
| `compute/model-specs/xiaomi.json` | `mimo-v2-pro` | 否 |
| `compute/model-specs/xiaomi.json` | `mimo-v2-omni` | 否 |
| `compute/model-specs/xiaomi.json` | `mimo-v2-flash` | 否 |
| `compute/model-specs/xiaomi.json` | `mimo-v2-tts` | 否 |
| `compute/model-specs/cohere.json` | `rerank-v4.0-fast` | 否 |
| `compute/model-specs/cohere.json` | `rerank-v4.0-pro` | 否 |
| `compute/model-specs/cohere.json` | `north-mini-code-1-0` | 否 |
| `compute/model-specs/cohere.json` | `north-small-translate-1-0` | 否 |
| `compute/model-specs/cohere.json` | `rerank-v3.5` | 否 |
| `compute/model-specs/kling.json` | `kling-3.0-turbo` | 否 |
| `compute/model-specs/stability.json` | `stable-audio-3.0` | 否 |
| `compute/model-specs/tencent.json` | `hy3` | 否 |
| `compute/model-specs/tencent.json` | `hy3-preview` | 否 |
| `compute/model-specs/volcengine.json` | `doubao-seedance-2.0-fast` | 是 |
| `compute/model-specs/volcengine.json` | `doubao-seedance-2.0-mini` | 是 |
| `compute/model-specs/volcengine.json` | `doubao-seedance-1.5-pro` | 否 |
| `compute/model-specs/volcengine.json` | `doubao-seedance-1.0-pro` | 否 |
| `compute/model-specs/volcengine.json` | `doubao-seedance-1.0-pro-fast` | 否 |
| `compute/model-specs/stealth.json` | `ox-alpha` | 否 |
