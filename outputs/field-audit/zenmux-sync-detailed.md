# ZenMux Sync Detailed Report

GeneratedAt: 2026-04-25T16:15:04.854Z

## Summary

- actualModels: 160
- sourceModels: 133
- matchedModels: 57
- unmatchedModels: 88
- ambiguousModels: 15
- nullSamplingFields: 0

## Current Model Inventory

| File | Provider | Model | Match | ZenMux |
|---|---|---|---|---|
| compute/coding-plans/dashscope-coding.json | dashscope | `qwen3-coder-plus` | exact | `qwen/qwen3-coder-plus` |
| compute/coding-plans/dashscope-coding.json | dashscope | `qwen3-max` | exact | `qwen/qwen3-max` |
| compute/coding-plans/infini-coding.json | infini | `deepseek-v3` | none |  |
| compute/coding-plans/kwai-coding.json | kwai | `kwai-coder` | none |  |
| compute/coding-plans/minimax-coding.json | minimax | `MiniMax-M1` | none |  |
| compute/coding-plans/moonshot-coding.json | moonshot | `kimi-k2` | ambiguous |  |
| compute/coding-plans/moorethread-coding.json | moorethread | `mt-coder` | none |  |
| compute/coding-plans/volcengine-coding.json | volcengine | `ark-code-latest` | none |  |
| compute/coding-plans/zhipu-coding.json | zhipu | `glm-5` | exact | `z-ai/glm-5` |
| compute/coding-plans/zhipu-coding.json | zhipu | `glm-4.7` | exact | `z-ai/glm-4.7` |
| compute/providers/anthropic.json | anthropic | `claude-opus-4-7` | normalized | `anthropic/claude-opus-4.7` |
| compute/providers/anthropic.json | anthropic | `claude-sonnet-4-6` | normalized | `anthropic/claude-sonnet-4.6` |
| compute/providers/anthropic.json | anthropic | `claude-haiku-4-5` | normalized | `anthropic/claude-haiku-4.5` |
| compute/providers/baichuan.json | baichuan | `Baichuan-M3-Plus` | none |  |
| compute/providers/baichuan.json | baichuan | `Baichuan-M3` | none |  |
| compute/providers/baichuan.json | baichuan | `Baichuan-M2-Plus` | none |  |
| compute/providers/baichuan.json | baichuan | `Baichuan-M2` | none |  |
| compute/providers/baidu.json | baidu | `ernie-5.0-thinking-latest` | stripped | `baidu/ernie-5.0-thinking-preview` |
| compute/providers/baidu.json | baidu | `ernie-5.0` | similar | `baidu/ernie-5.0-thinking-preview` |
| compute/providers/baidu.json | baidu | `ernie-4.5-turbo-128k` | none |  |
| compute/providers/baidu.json | baidu | `ernie-4.5-turbo-20260402` | none |  |
| compute/providers/baidu.json | baidu | `ernie-x1.1` | stripped | `baidu/ernie-x1.1-preview` |
| compute/providers/cohere.json | cohere | `command-a-03-2025` | none |  |
| compute/providers/cohere.json | cohere | `command-r7b-12-2024` | none |  |
| compute/providers/cohere.json | cohere | `embed-v4.0` | none |  |
| compute/providers/cohere.json | cohere | `rerank-v3.5` | none |  |
| compute/providers/dashscope.json | dashscope | `qwen3.6-plus` | exact | `qwen/qwen3.6-plus` |
| compute/providers/dashscope.json | dashscope | `qwen3.6-flash` | ambiguous |  |
| compute/providers/dashscope.json | dashscope | `qwen3.5-plus` | exact | `qwen/qwen3.5-plus` |
| compute/providers/dashscope.json | dashscope | `qwen-max` | none |  |
| compute/providers/dashscope.json | dashscope | `qwen-plus` | none |  |
| compute/providers/dashscope.json | dashscope | `qwen-turbo` | none |  |
| compute/providers/dashscope.json | dashscope | `qwen-long` | none |  |
| compute/providers/dashscope.json | dashscope | `qwen3-max` | exact | `qwen/qwen3-max` |
| compute/providers/dashscope.json | dashscope | `qwen3-vl-plus` | exact | `qwen/qwen3-vl-plus` |
| compute/providers/dashscope.json | dashscope | `qwen3-vl-flash` | ambiguous |  |
| compute/providers/dashscope.json | dashscope | `text-embedding-v3` | none |  |
| compute/providers/dashscope.json | dashscope | `text-embedding-v4` | none |  |
| compute/providers/dashscope.json | dashscope | `qwen3-rerank` | none |  |
| compute/providers/dashscope.json | dashscope | `cosyvoice-v2` | none |  |
| compute/providers/dashscope.json | dashscope | `paraformer-v2` | none |  |
| compute/providers/dashscope.json | dashscope | `wanx-v2` | none |  |
| compute/providers/dashscope.json | dashscope | `wanx-video` | none |  |
| compute/providers/dashscope.json | dashscope | `cosyvoice-clone` | none |  |
| compute/providers/dashscope.json | dashscope | `qwen-omni-turbo` | none |  |
| compute/providers/dashscope.json | dashscope | `qwen3-max-trans` | similar | `qwen/qwen3-max` |
| compute/providers/deepseek.json | deepseek | `deepseek-chat` | exact | `deepseek/deepseek-chat` |
| compute/providers/deepseek.json | deepseek | `deepseek-reasoner` | exact | `deepseek/deepseek-reasoner` |
| compute/providers/google.json | google | `gemini-3.1-pro-preview` | exact | `google/gemini-3.1-pro-preview` |
| compute/providers/google.json | google | `gemini-3-flash-preview` | exact | `google/gemini-3-flash-preview` |
| compute/providers/google.json | google | `gemini-3.1-flash-lite-preview` | exact | `google/gemini-3.1-flash-lite-preview` |
| compute/providers/google.json | google | `gemini-2.5-pro` | exact | `google/gemini-2.5-pro` |
| compute/providers/google.json | google | `gemini-2.5-flash` | exact | `google/gemini-2.5-flash` |
| compute/providers/google.json | google | `text-embedding-005` | none |  |
| compute/providers/internal-testing.json | internal-testing | `MiniMax-M2.7-highspeed` | none |  |
| compute/providers/internal-testing.json | internal-testing | `glm-5.1` | none |  |
| compute/providers/internal-testing.json | internal-testing | `glm-5` | none |  |
| compute/providers/internal-testing.json | internal-testing | `glm-5-turbo` | none |  |
| compute/providers/internal-testing.json | internal-testing | `glm-4.7` | none |  |
| compute/providers/internal-testing.json | internal-testing | `kimi-k2.6-code-preview` | none |  |
| compute/providers/internal-testing.json | internal-testing | `kimi-k2.5` | none |  |
| compute/providers/internal-testing.json | internal-testing | `MiniMax-M2.5` | none |  |
| compute/providers/internal-testing.json | internal-testing | `qwen3.6-plus` | none |  |
| compute/providers/internal-testing.json | internal-testing | `qwen3.5-plus` | none |  |
| compute/providers/internal-testing.json | internal-testing | `qwen3.5-35b-a3b` | none |  |
| compute/providers/internal-testing.json | internal-testing | `qwen3.5-27b` | none |  |
| compute/providers/internal-testing.json | internal-testing | `qwen3-max-2026-01-23` | none |  |
| compute/providers/internal-testing.json | internal-testing | `doubao-seed-2-0-code-preview-260215` | none |  |
| compute/providers/kling.json | kling | `kling-v2-5-turbo` | none |  |
| compute/providers/kling.json | kling | `kling-v2-5-turbo-pro` | none |  |
| compute/providers/kling.json | kling | `kling-v2` | none |  |
| compute/providers/kling.json | kling | `kling-v2-master` | none |  |
| compute/providers/lingyiwanwu.json | lingyiwanwu | `yi-lightning` | none |  |
| compute/providers/lingyiwanwu.json | lingyiwanwu | `yi-vision-v2` | none |  |
| compute/providers/local-whisper.json | local-whisper | `whisper-large-v3` | none |  |
| compute/providers/minimax.json | minimax | `MiniMax-M2.7` | normalized | `minimax/minimax-m2.7` |
| compute/providers/minimax.json | minimax | `MiniMax-M2.7-highspeed` | normalized | `minimax/minimax-m2.7-highspeed` |
| compute/providers/minimax.json | minimax | `MiniMax-M2.5` | normalized | `minimax/minimax-m2.5` |
| compute/providers/minimax.json | minimax | `MiniMax-M2.5-highspeed` | ambiguous |  |
| compute/providers/minimax.json | minimax | `MiniMax-M2.1` | normalized | `minimax/minimax-m2.1` |
| compute/providers/minimax.json | minimax | `MiniMax-M2.1-highspeed` | ambiguous |  |
| compute/providers/minimax.json | minimax | `MiniMax-Text-01` | none |  |
| compute/providers/mistral.json | mistral | `mistral-large-latest` | similar | `mistralai/mistral-large-2512` |
| compute/providers/mistral.json | mistral | `mistral-small-latest` | none |  |
| compute/providers/mistral.json | mistral | `codestral-latest` | none |  |
| compute/providers/moonshot.json | moonshot | `kimi-k2.6` | exact | `moonshotai/kimi-k2.6` |
| compute/providers/moonshot.json | moonshot | `kimi-k2.5` | exact | `moonshotai/kimi-k2.5` |
| compute/providers/moonshot.json | moonshot | `kimi-k2` | ambiguous |  |
| compute/providers/moonshot.json | moonshot | `kimi-k2-thinking` | exact | `moonshotai/kimi-k2-thinking` |
| compute/providers/moonshot.json | moonshot | `moonshot-v1-8k` | none |  |
| compute/providers/moonshot.json | moonshot | `moonshot-v1-32k` | none |  |
| compute/providers/moonshot.json | moonshot | `moonshot-v1-128k` | none |  |
| compute/providers/ollama.json | ollama | `llama3.1:70b` | none |  |
| compute/providers/openai.json | openai | `gpt-5.2` | exact | `openai/gpt-5.2` |
| compute/providers/openai.json | openai | `gpt-5.2-pro` | exact | `openai/gpt-5.2-pro` |
| compute/providers/openai.json | openai | `gpt-5.1` | exact | `openai/gpt-5.1` |
| compute/providers/openai.json | openai | `gpt-5` | exact | `openai/gpt-5` |
| compute/providers/openai.json | openai | `gpt-5-pro` | exact | `openai/gpt-5-pro` |
| compute/providers/openai.json | openai | `gpt-5-mini` | exact | `openai/gpt-5-mini` |
| compute/providers/openai.json | openai | `gpt-5-nano` | exact | `openai/gpt-5-nano` |
| compute/providers/openai.json | openai | `gpt-4.1` | exact | `openai/gpt-4.1` |
| compute/providers/openai.json | openai | `gpt-4.1-mini` | exact | `openai/gpt-4.1-mini` |
| compute/providers/openai.json | openai | `gpt-4.1-nano` | exact | `openai/gpt-4.1-nano` |
| compute/providers/openai.json | openai | `gpt-4o` | exact | `openai/gpt-4o` |
| compute/providers/openai.json | openai | `gpt-4o-mini` | exact | `openai/gpt-4o-mini` |
| compute/providers/openai.json | openai | `text-embedding-3-small` | none |  |
| compute/providers/openai.json | openai | `text-embedding-3-large` | none |  |
| compute/providers/openai.json | openai | `tts-1` | none |  |
| compute/providers/openai.json | openai | `tts-1-hd` | none |  |
| compute/providers/openai.json | openai | `whisper-1` | none |  |
| compute/providers/openai.json | openai | `o3` | none |  |
| compute/providers/openai.json | openai | `o3-pro` | none |  |
| compute/providers/openai.json | openai | `o3-mini` | none |  |
| compute/providers/openai.json | openai | `o4-mini` | exact | `openai/o4-mini` |
| compute/providers/openai.json | openai | `dall-e-3` | none |  |
| compute/providers/openai.json | openai | `gpt-4o-realtime` | ambiguous |  |
| compute/providers/openai.json | openai | `gpt-4o-realtime-preview` | ambiguous |  |
| compute/providers/openrouter.json | openrouter | `openrouter/auto` | none |  |
| compute/providers/openrouter.json | openrouter | `openai/gpt-oss-120b:free` | none |  |
| compute/providers/openrouter.json | openrouter | `qwen/qwen3-coder:free` | none |  |
| compute/providers/perplexity.json | perplexity | `sonar-pro` | none |  |
| compute/providers/perplexity.json | perplexity | `sonar-reasoning-pro` | none |  |
| compute/providers/perplexity.json | perplexity | `sonar` | none |  |
| compute/providers/siliconflow.json | siliconflow | `Qwen/Qwen3-Coder-480B-A35B-Instruct` | none |  |
| compute/providers/siliconflow.json | siliconflow | `Qwen/Qwen3-235B-A22B-Instruct-2507` | ambiguous |  |
| compute/providers/siliconflow.json | siliconflow | `BAAI/bge-m3` | none |  |
| compute/providers/stability.json | stability | `stable-diffusion-3.5-large` | none |  |
| compute/providers/tencent.json | tencent | `hunyuan-2.0-thinking-20251109` | stripped | `tencent/hunyuan-2.0-thinking` |
| compute/providers/tencent.json | tencent | `hunyuan-2.0-instruct-20251111` | similar | `tencent/hunyuan-2.0-thinking` |
| compute/providers/tencent.json | tencent | `hunyuan-turbos-latest` | none |  |
| compute/providers/volcengine.json | volcengine | `doubao-2.0-pro` | ambiguous |  |
| compute/providers/volcengine.json | volcengine | `doubao-seed-1.8` | exact | `bytedance/doubao-seed-1.8` |
| compute/providers/volcengine.json | volcengine | `doubao-seed-1.6` | ambiguous |  |
| compute/providers/volcengine.json | volcengine | `doubao-seed-1.6-thinking` | similar | `bytedance/doubao-seed-1.8` |
| compute/providers/volcengine.json | volcengine | `doubao-seed-1.6-flash` | similar | `bytedance/doubao-seed-1.8` |
| compute/providers/volcengine.json | volcengine | `doubao-seed-1.6-lite` | ambiguous |  |
| compute/providers/volcengine.json | volcengine | `doubao-seed-1.6-vision` | similar | `bytedance/doubao-seed-1.8` |
| compute/providers/volcengine.json | volcengine | `doubao-seed-code` | exact | `bytedance/doubao-seed-code` |
| compute/providers/volcengine.json | volcengine | `deepseek-v3.2` | none |  |
| compute/providers/volcengine.json | volcengine | `deepseek-r1` | none |  |
| compute/providers/volcengine.json | volcengine | `kimi-k2-volcengine` | none |  |
| compute/providers/volcengine.json | volcengine | `glm-4-7` | none |  |
| compute/providers/volcengine.json | volcengine | `doubao-embedding` | none |  |
| compute/providers/volcengine.json | volcengine | `volc-mega-tts-clone` | none |  |
| compute/providers/volcengine.json | volcengine | `volc-realtime-voice` | none |  |
| compute/providers/volcengine.json | volcengine | `volc-simultaneous` | none |  |
| compute/providers/volcengine.json | volcengine | `volc-translation` | none |  |
| compute/providers/xai.json | xai | `grok-4.20-0309-reasoning` | ambiguous |  |
| compute/providers/xai.json | xai | `grok-4-1-fast-reasoning` | ambiguous |  |
| compute/providers/xunfei.json | xunfei | `spark-x` | none |  |
| compute/providers/xunfei.json | xunfei | `4.0Ultra` | none |  |
| compute/providers/zhipu-embedding.json | zhipu-embedding | `embedding-3` | none |  |
| compute/providers/zhipu.json | zhipu | `glm-5.1` | exact | `z-ai/glm-5.1` |
| compute/providers/zhipu.json | zhipu | `glm-5-turbo` | exact | `z-ai/glm-5-turbo` |
| compute/providers/zhipu.json | zhipu | `glm-5` | exact | `z-ai/glm-5` |
| compute/providers/zhipu.json | zhipu | `glm-4.7` | exact | `z-ai/glm-4.7` |
| compute/providers/zhipu.json | zhipu | `glm-4.7-thinking` | ambiguous |  |
| compute/providers/zhipu.json | zhipu | `glm-5v-turbo` | exact | `z-ai/glm-5v-turbo` |
| compute/providers/zhipu.json | zhipu | `glm-4.6v` | exact | `z-ai/glm-4.6v` |
| compute/providers/zhipu.json | zhipu | `glm-4.6` | exact | `z-ai/glm-4.6` |
