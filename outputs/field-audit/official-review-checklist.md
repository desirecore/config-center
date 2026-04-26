# Official Review Checklist

GeneratedAt: 2026-04-25T16:15:04.854Z
Source: /Users/xieyuanxiang/config-center/outputs/field-audit/zenmux-sync-report.json

Purpose: verify unresolved models with official vendor docs before write-back.

## Summary

- actual models: **160**
- unresolved models: **103**
- providers involved: **27**
- null sampling fields: **0**

## Provider: baichuan
- official docs:
  - https://platform.baichuan-ai.com/docs
- pending models:
  - `Baichuan-M3-Plus` (compute/providers/baichuan.json) -> no ZenMux match
  - `Baichuan-M3` (compute/providers/baichuan.json) -> no ZenMux match
  - `Baichuan-M2-Plus` (compute/providers/baichuan.json) -> no ZenMux match
  - `Baichuan-M2` (compute/providers/baichuan.json) -> no ZenMux match

## Provider: baidu
- official docs:
  - https://cloud.baidu.com/doc/qianfan/
- pending models:
  - `ernie-4.5-turbo-128k` (compute/providers/baidu.json) -> no ZenMux match
  - `ernie-4.5-turbo-20260402` (compute/providers/baidu.json) -> no ZenMux match

## Provider: cohere
- official docs:
  - https://docs.cohere.com/docs/models
  - https://cohere.com/pricing
- pending models:
  - `command-a-03-2025` (compute/providers/cohere.json) -> no ZenMux match
  - `command-r7b-12-2024` (compute/providers/cohere.json) -> no ZenMux match
  - `embed-v4.0` (compute/providers/cohere.json) -> no ZenMux match
  - `rerank-v3.5` (compute/providers/cohere.json) -> no ZenMux match

## Provider: dashscope
- official docs:
  - https://help.aliyun.com/zh/model-studio/getting-started/models
  - https://help.aliyun.com/zh/model-studio/pricing
- pending models:
  - `qwen3.6-flash` (compute/providers/dashscope.json) -> ambiguous match candidates: qwen/qwen3.6-plus,qwen/qwen3.5-flash
  - `qwen-max` (compute/providers/dashscope.json) -> no ZenMux match
  - `qwen-plus` (compute/providers/dashscope.json) -> no ZenMux match
  - `qwen-turbo` (compute/providers/dashscope.json) -> no ZenMux match
  - `qwen-long` (compute/providers/dashscope.json) -> no ZenMux match
  - `qwen3-vl-flash` (compute/providers/dashscope.json) -> ambiguous match candidates: qwen/qwen3.5-flash,qwen/qwen3-vl-plus
  - `text-embedding-v3` (compute/providers/dashscope.json) -> no ZenMux match
  - `text-embedding-v4` (compute/providers/dashscope.json) -> no ZenMux match
  - `qwen3-rerank` (compute/providers/dashscope.json) -> no ZenMux match
  - `cosyvoice-v2` (compute/providers/dashscope.json) -> no ZenMux match
  - `paraformer-v2` (compute/providers/dashscope.json) -> no ZenMux match
  - `wanx-v2` (compute/providers/dashscope.json) -> no ZenMux match
  - `wanx-video` (compute/providers/dashscope.json) -> no ZenMux match
  - `cosyvoice-clone` (compute/providers/dashscope.json) -> no ZenMux match
  - `qwen-omni-turbo` (compute/providers/dashscope.json) -> no ZenMux match

## Provider: google
- official docs:
  - https://ai.google.dev/gemini-api/docs/models
  - https://ai.google.dev/pricing
- pending models:
  - `text-embedding-005` (compute/providers/google.json) -> no ZenMux match

## Provider: infini
- official docs:
  - (add link manually)
- pending models:
  - `deepseek-v3` (compute/coding-plans/infini-coding.json) -> no ZenMux match

## Provider: internal-testing
- official docs:
  - (add link manually)
- pending models:
  - `MiniMax-M2.7-highspeed` (compute/providers/internal-testing.json) -> no ZenMux match
  - `glm-5.1` (compute/providers/internal-testing.json) -> no ZenMux match
  - `glm-5` (compute/providers/internal-testing.json) -> no ZenMux match
  - `glm-5-turbo` (compute/providers/internal-testing.json) -> no ZenMux match
  - `glm-4.7` (compute/providers/internal-testing.json) -> no ZenMux match
  - `kimi-k2.6-code-preview` (compute/providers/internal-testing.json) -> no ZenMux match
  - `kimi-k2.5` (compute/providers/internal-testing.json) -> no ZenMux match
  - `MiniMax-M2.5` (compute/providers/internal-testing.json) -> no ZenMux match
  - `qwen3.6-plus` (compute/providers/internal-testing.json) -> no ZenMux match
  - `qwen3.5-plus` (compute/providers/internal-testing.json) -> no ZenMux match
  - `qwen3.5-35b-a3b` (compute/providers/internal-testing.json) -> no ZenMux match
  - `qwen3.5-27b` (compute/providers/internal-testing.json) -> no ZenMux match
  - `qwen3-max-2026-01-23` (compute/providers/internal-testing.json) -> no ZenMux match
  - `doubao-seed-2-0-code-preview-260215` (compute/providers/internal-testing.json) -> no ZenMux match

## Provider: kling
- official docs:
  - (add link manually)
- pending models:
  - `kling-v2-5-turbo` (compute/providers/kling.json) -> no ZenMux match
  - `kling-v2-5-turbo-pro` (compute/providers/kling.json) -> no ZenMux match
  - `kling-v2` (compute/providers/kling.json) -> no ZenMux match
  - `kling-v2-master` (compute/providers/kling.json) -> no ZenMux match

## Provider: kwai
- official docs:
  - (add link manually)
- pending models:
  - `kwai-coder` (compute/coding-plans/kwai-coding.json) -> no ZenMux match

## Provider: lingyiwanwu
- official docs:
  - (add link manually)
- pending models:
  - `yi-lightning` (compute/providers/lingyiwanwu.json) -> no ZenMux match
  - `yi-vision-v2` (compute/providers/lingyiwanwu.json) -> no ZenMux match

## Provider: local-whisper
- official docs:
  - (add link manually)
- pending models:
  - `whisper-large-v3` (compute/providers/local-whisper.json) -> no ZenMux match

## Provider: minimax
- official docs:
  - https://platform.minimax.io/docs/api-reference/api-overview
  - https://platform.minimax.io/docs/guides/pricing-paygo
- pending models:
  - `MiniMax-M1` (compute/coding-plans/minimax-coding.json) -> no ZenMux match
  - `MiniMax-M2.5-highspeed` (compute/providers/minimax.json) -> ambiguous match candidates: minimax/minimax-m2.5,minimax/minimax-m2.7-highspeed,minimax/minimax-m2.5-lightning,minimax/minimax-m2,minimax/minimax-m2.7
  - `MiniMax-M2.1-highspeed` (compute/providers/minimax.json) -> ambiguous match candidates: minimax/minimax-m2.1,minimax/minimax-m2.7-highspeed,minimax/minimax-m2,minimax/minimax-m2.7,minimax/minimax-m2.5
  - `MiniMax-Text-01` (compute/providers/minimax.json) -> no ZenMux match

## Provider: mistral
- official docs:
  - https://docs.mistral.ai/getting-started/models
  - https://mistral.ai/pricing
- pending models:
  - `mistral-small-latest` (compute/providers/mistral.json) -> no ZenMux match
  - `codestral-latest` (compute/providers/mistral.json) -> no ZenMux match

## Provider: moonshot
- official docs:
  - https://platform.moonshot.cn/docs/guide/overview
  - https://platform.moonshot.cn/docs/pricing/chat
- pending models:
  - `kimi-k2` (compute/coding-plans/moonshot-coding.json) -> ambiguous match candidates: moonshotai/kimi-k2.6,moonshotai/kimi-k2.5,moonshotai/kimi-k2-thinking,moonshotai/kimi-k2-0905,moonshotai/kimi-k2-0711
  - `kimi-k2` (compute/providers/moonshot.json) -> ambiguous match candidates: moonshotai/kimi-k2.6,moonshotai/kimi-k2.5,moonshotai/kimi-k2-thinking,moonshotai/kimi-k2-0905,moonshotai/kimi-k2-0711
  - `moonshot-v1-8k` (compute/providers/moonshot.json) -> no ZenMux match
  - `moonshot-v1-32k` (compute/providers/moonshot.json) -> no ZenMux match
  - `moonshot-v1-128k` (compute/providers/moonshot.json) -> no ZenMux match

## Provider: moorethread
- official docs:
  - (add link manually)
- pending models:
  - `mt-coder` (compute/coding-plans/moorethread-coding.json) -> no ZenMux match

## Provider: ollama
- official docs:
  - (add link manually)
- pending models:
  - `llama3.1:70b` (compute/providers/ollama.json) -> no ZenMux match

## Provider: openai
- official docs:
  - https://platform.openai.com/docs/models
  - https://platform.openai.com/docs/pricing
- pending models:
  - `text-embedding-3-small` (compute/providers/openai.json) -> no ZenMux match
  - `text-embedding-3-large` (compute/providers/openai.json) -> no ZenMux match
  - `tts-1` (compute/providers/openai.json) -> no ZenMux match
  - `tts-1-hd` (compute/providers/openai.json) -> no ZenMux match
  - `whisper-1` (compute/providers/openai.json) -> no ZenMux match
  - `o3` (compute/providers/openai.json) -> no ZenMux match
  - `o3-pro` (compute/providers/openai.json) -> no ZenMux match
  - `o3-mini` (compute/providers/openai.json) -> no ZenMux match
  - `dall-e-3` (compute/providers/openai.json) -> no ZenMux match
  - `gpt-4o-realtime` (compute/providers/openai.json) -> ambiguous match candidates: openai/gpt-4o,openai/gpt-4o-mini
  - `gpt-4o-realtime-preview` (compute/providers/openai.json) -> ambiguous match candidates: openai/gpt-4o,openai/gpt-4o-mini

## Provider: openrouter
- official docs:
  - https://openrouter.ai/models
- pending models:
  - `openrouter/auto` (compute/providers/openrouter.json) -> no ZenMux match
  - `openai/gpt-oss-120b:free` (compute/providers/openrouter.json) -> no ZenMux match
  - `qwen/qwen3-coder:free` (compute/providers/openrouter.json) -> no ZenMux match

## Provider: perplexity
- official docs:
  - https://docs.perplexity.ai
- pending models:
  - `sonar-pro` (compute/providers/perplexity.json) -> no ZenMux match
  - `sonar-reasoning-pro` (compute/providers/perplexity.json) -> no ZenMux match
  - `sonar` (compute/providers/perplexity.json) -> no ZenMux match

## Provider: siliconflow
- official docs:
  - https://www.siliconflow.com/models
  - https://siliconflow.cn/pricing
- pending models:
  - `Qwen/Qwen3-Coder-480B-A35B-Instruct` (compute/providers/siliconflow.json) -> no ZenMux match
  - `Qwen/Qwen3-235B-A22B-Instruct-2507` (compute/providers/siliconflow.json) -> ambiguous match candidates: qwen/qwen3-235b-a22b-2507,qwen/qwen3-235b-a22b-thinking-2507
  - `BAAI/bge-m3` (compute/providers/siliconflow.json) -> no ZenMux match

## Provider: stability
- official docs:
  - (add link manually)
- pending models:
  - `stable-diffusion-3.5-large` (compute/providers/stability.json) -> no ZenMux match

## Provider: tencent
- official docs:
  - https://cloud.tencent.com/document/product/1729
- pending models:
  - `hunyuan-turbos-latest` (compute/providers/tencent.json) -> no ZenMux match

## Provider: volcengine
- official docs:
  - https://www.volcengine.com/docs/82379
- pending models:
  - `ark-code-latest` (compute/coding-plans/volcengine-coding.json) -> no ZenMux match
  - `doubao-2.0-pro` (compute/providers/volcengine.json) -> ambiguous match candidates: bytedance/doubao-seed-2.0-pro,bytedance/doubao-seed-2.0-mini,bytedance/doubao-seed-2.0-lite,bytedance/doubao-seed-2.0-code
  - `doubao-seed-1.6` (compute/providers/volcengine.json) -> ambiguous match candidates: bytedance/doubao-seed-1.8,bytedance/doubao-seed-code
  - `doubao-seed-1.6-lite` (compute/providers/volcengine.json) -> ambiguous match candidates: bytedance/doubao-seed-1.8,bytedance/doubao-seed-2.0-lite
  - `deepseek-v3.2` (compute/providers/volcengine.json) -> no ZenMux match
  - `deepseek-r1` (compute/providers/volcengine.json) -> no ZenMux match
  - `kimi-k2-volcengine` (compute/providers/volcengine.json) -> no ZenMux match
  - `glm-4-7` (compute/providers/volcengine.json) -> no ZenMux match
  - `doubao-embedding` (compute/providers/volcengine.json) -> no ZenMux match
  - `volc-mega-tts-clone` (compute/providers/volcengine.json) -> no ZenMux match
  - `volc-realtime-voice` (compute/providers/volcengine.json) -> no ZenMux match
  - `volc-simultaneous` (compute/providers/volcengine.json) -> no ZenMux match
  - `volc-translation` (compute/providers/volcengine.json) -> no ZenMux match

## Provider: xai
- official docs:
  - https://docs.x.ai/docs/models
- pending models:
  - `grok-4.20-0309-reasoning` (compute/providers/xai.json) -> ambiguous match candidates: x-ai/grok-4-fast-non-reasoning,x-ai/grok-4,x-ai/grok-4.2-fast-non-reasoning,x-ai/grok-4.1-fast-non-reasoning
  - `grok-4-1-fast-reasoning` (compute/providers/xai.json) -> ambiguous match candidates: x-ai/grok-4.1-fast-non-reasoning,x-ai/grok-4.1-fast,x-ai/grok-4-fast-non-reasoning,x-ai/grok-4-fast,x-ai/grok-4.2-fast-non-reasoning

## Provider: xunfei
- official docs:
  - https://www.xfyun.cn/doc/
- pending models:
  - `spark-x` (compute/providers/xunfei.json) -> no ZenMux match
  - `4.0Ultra` (compute/providers/xunfei.json) -> no ZenMux match

## Provider: zhipu
- official docs:
  - https://docs.bigmodel.cn/cn/guide/models/text/
  - https://www.bigmodel.cn/pricing
- pending models:
  - `glm-4.7-thinking` (compute/providers/zhipu.json) -> ambiguous match candidates: z-ai/glm-4.7,z-ai/glm-4.7-flashx,z-ai/glm-4.7-flash-free,z-ai/glm-4.6v,z-ai/glm-4.6

## Provider: zhipu-embedding
- official docs:
  - https://docs.bigmodel.cn/cn/guide/models/embedding
- pending models:
  - `embedding-3` (compute/providers/zhipu-embedding.json) -> no ZenMux match

## Field-by-Field Verification Rule

- `modelName`: must exactly match provider API model ID or official alias rule.
- `contextWindow`: use official model spec limit.
- `maxOutputTokens`: use official output cap; do not infer from context.
- `inputPrice`/`outputPrice`: use official published API pricing and the provider currency.
- `capabilities`: project taxonomy field; keep local semantics unless official docs clearly contradict the capability.
- `defaultTemperature`/`defaultTopP`: only fill with numeric values when provider docs define a safe default; omit unsupported fields instead of using `null`.
