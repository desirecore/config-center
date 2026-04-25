# Official Review Checklist

GeneratedAt: 2026-04-22T07:21:49.517Z
Source: /Users/xieyuanxiang/config-center/outputs/field-audit/zenmux-sync-report.json

Purpose: verify unresolved models with official vendor docs before next write-back.

## Summary

- unresolved models: **104**
- providers involved: **28**

## Provider: anthropic
- official docs:
  - https://docs.anthropic.com/en/docs/about-claude/models/all-models
  - https://docs.anthropic.com/en/docs/about-claude/pricing
- pending models:
  - `claude-sonnet-4-5-computer` (compute/providers/anthropic.json) -> no ZenMux match

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
  - `ernie-4.5-turbo-128k-latest` (compute/providers/baidu.json) -> no ZenMux match

## Provider: cohere
- official docs:
  - https://docs.cohere.com/docs/models
  - https://cohere.com/pricing
- pending models:
  - `command-a-03-2025` (compute/providers/cohere.json) -> no ZenMux match
  - `embed-v4.0` (compute/providers/cohere.json) -> no ZenMux match
  - `rerank-v3.5` (compute/providers/cohere.json) -> no ZenMux match

## Provider: dashscope
- official docs:
  - https://help.aliyun.com/zh/model-studio/getting-started/models
  - https://help.aliyun.com/zh/model-studio/pricing
- pending models:
  - `qwen3-max-2026-01-23` (compute/coding-plans/dashscope-coding.json) -> ambiguous match candidates: `qwen/qwen3-max,qwen/qwen3-max-preview`
  - `qwen-max` (compute/providers/dashscope.json) -> no ZenMux match
  - `qwen-plus` (compute/providers/dashscope.json) -> no ZenMux match
  - `qwen-turbo` (compute/providers/dashscope.json) -> no ZenMux match
  - `qwen-long` (compute/providers/dashscope.json) -> no ZenMux match
  - `qwen3-vl-flash` (compute/providers/dashscope.json) -> no ZenMux match
  - `text-embedding-v3` (compute/providers/dashscope.json) -> no ZenMux match
  - `text-embedding-v4` (compute/providers/dashscope.json) -> no ZenMux match
  - `qwen3-rerank` (compute/providers/dashscope.json) -> no ZenMux match
  - `cosyvoice-v2` (compute/providers/dashscope.json) -> no ZenMux match
  - `paraformer-v2` (compute/providers/dashscope.json) -> no ZenMux match
  - `wanx-v2` (compute/providers/dashscope.json) -> no ZenMux match
  - `wanx-video` (compute/providers/dashscope.json) -> no ZenMux match
  - `cosyvoice-clone` (compute/providers/dashscope.json) -> no ZenMux match
  - `qwen-omni-turbo` (compute/providers/dashscope.json) -> no ZenMux match
  - `qwen3-max-trans` (compute/providers/dashscope.json) -> no ZenMux match

## Provider: google
- official docs:
  - https://ai.google.dev/gemini-api/docs/models
  - https://ai.google.dev/pricing
- pending models:
  - `text-embedding-005` (compute/providers/google.json) -> no ZenMux match

## Provider: infini
- official docs: (add link manually)
- pending models:
  - `deepseek-v3` (compute/coding-plans/infini-coding.json) -> no ZenMux match

## Provider: internal-testing
- official docs: (add link manually)
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
- official docs: (add link manually)
- pending models:
  - `kling-v2-5-turbo` (compute/providers/kling.json) -> no ZenMux match
  - `kling-v2-5-turbo-pro` (compute/providers/kling.json) -> no ZenMux match
  - `kling-v2` (compute/providers/kling.json) -> no ZenMux match
  - `kling-v2-master` (compute/providers/kling.json) -> no ZenMux match

## Provider: kwai
- official docs: (add link manually)
- pending models:
  - `kwai-coder` (compute/coding-plans/kwai-coding.json) -> no ZenMux match

## Provider: lingyiwanwu
- official docs: (add link manually)
- pending models:
  - `yi-lightning` (compute/providers/lingyiwanwu.json) -> no ZenMux match
  - `yi-vision-v2` (compute/providers/lingyiwanwu.json) -> no ZenMux match

## Provider: local-whisper
- official docs: (add link manually)
- pending models:
  - `whisper-large-v3` (compute/providers/local-whisper.json) -> no ZenMux match

## Provider: minimax
- official docs:
  - https://platform.minimax.io/docs/api-reference/api-overview
  - https://platform.minimax.io/docs/guides/pricing-paygo
- pending models:
  - `MiniMax-M2.5-highspeed` (compute/providers/minimax.json) -> no ZenMux match
  - `MiniMax-M2.1-highspeed` (compute/providers/minimax.json) -> no ZenMux match
  - `MiniMax-Text-01` (compute/providers/minimax.json) -> no ZenMux match

## Provider: mistral
- official docs:
  - https://docs.mistral.ai/getting-started/models
  - https://mistral.ai/pricing
- pending models:
  - `mistral-large-latest` (compute/providers/mistral.json) -> no ZenMux match
  - `mistral-small-latest` (compute/providers/mistral.json) -> no ZenMux match
  - `codestral-latest` (compute/providers/mistral.json) -> no ZenMux match

## Provider: moonshot
- official docs:
  - https://platform.moonshot.cn/docs/guide/overview
  - https://platform.moonshot.cn/docs/pricing/chat
- pending models:
  - `kimi-k2` (compute/providers/moonshot.json) -> no ZenMux match
  - `moonshot-v1-8k` (compute/providers/moonshot.json) -> no ZenMux match
  - `moonshot-v1-32k` (compute/providers/moonshot.json) -> no ZenMux match
  - `moonshot-v1-128k` (compute/providers/moonshot.json) -> no ZenMux match

## Provider: moorethread
- official docs: (add link manually)
- pending models:
  - `mt-coder` (compute/coding-plans/moorethread-coding.json) -> no ZenMux match

## Provider: ollama
- official docs: (add link manually)
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
  - `gpt-4o-realtime` (compute/providers/openai.json) -> no ZenMux match
  - `gpt-4o-realtime-preview` (compute/providers/openai.json) -> no ZenMux match

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
  - https://siliconflow.cn/pricing
- pending models:
  - `Qwen/Qwen3-Coder-480B-A35B-Instruct` (compute/providers/siliconflow.json) -> no ZenMux match
  - `Qwen/Qwen3-235B-A22B-Instruct` (compute/providers/siliconflow.json) -> no ZenMux match
  - `BAAI/bge-m3` (compute/providers/siliconflow.json) -> no ZenMux match

## Provider: stability
- official docs: (add link manually)
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
  - `doubao-2.0-pro` (compute/providers/volcengine.json) -> no ZenMux match
  - `doubao-seed-1.6` (compute/providers/volcengine.json) -> no ZenMux match
  - `doubao-seed-1.6-thinking` (compute/providers/volcengine.json) -> no ZenMux match
  - `doubao-seed-1.6-flash` (compute/providers/volcengine.json) -> no ZenMux match
  - `doubao-seed-1.6-lite` (compute/providers/volcengine.json) -> no ZenMux match
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
  - `grok-4.20-0309-reasoning` (compute/providers/xai.json) -> no ZenMux match
  - `grok-4-1-fast-reasoning` (compute/providers/xai.json) -> no ZenMux match

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
  - `glm-4.7-thinking` (compute/providers/zhipu.json) -> no ZenMux match

## Provider: zhipu-embedding
- official docs: (add link manually)
- pending models:
  - `embedding-3` (compute/providers/zhipu-embedding.json) -> no ZenMux match

## Field-by-Field Verification Rule

- `modelName`: must exactly match provider API model ID or official alias rule.
- `contextWindow`: use official model spec limit.
- `maxOutputTokens`: use official output cap; do not infer from context.
- `inputPrice`/`outputPrice`: use official published API pricing (USD/1M tokens).
- `capabilities.reasoning`: set only when official docs explicitly expose reasoning mode/model.
- `defaultTemperature`/`defaultTopP`: only fill if provider documents defaults.

