# 原生协议适配核查决定

本次是源码注册/真实派发路径核查，未作账号或媒体生成实测。机器明细：[ADAPTER-DECISIONS.json](ADAPTER-DECISIONS.json)。

openai-responses/openai-completions只声明通用对话协议。Realtime WebSocket/实时翻译、原生图像/视频任务、批量ASR/TTS各有不同endpoint、请求/响应和流式状态机；同域/Bearer认证或同名apiFormat不证明模型协议适配。

- 3条Realtime、21条媒体和12条ASR/TTS接入确认当前没有对应注册适配器，保留候选信息，标记protocol unsupported；不猜最低版本。
- 图像/视频工具在findProvider后按实际provider slug查getAdapter，undefined立即返回失败，没有通用Provider.apiFormat兜底。
- Speech Registry仅TTS/ASR；OpenAI兼容表只tts-1/tts-1-hd/whisper-1，三个Realtime型号既不在兼容表，也无独立session/WebSocket/翻译实现。
- 已注册MiniMax/火山/百炼视频、云/NewAPI图像视频、六类语音协议未因本清单被误关。新型号是否完全符合这些已注册协议仍需其单型号协议/账号验收，当前核查没有把provider slug注册当全部型号实测。

| 配置 | 型号 | 缺少适配 |
| --- | --- | --- |
| `compute/providers/dashscope.json` | `qwen-image-3.0` | no-registered-image_gen-provider-adapter |
| `compute/providers/dashscope.json` | `qwen-image-3.0-pro` | no-registered-image_gen-provider-adapter |
| `compute/providers/dashscope.json` | `paraformer-v2` | missing-speech-profile-and-compatibility |
| `compute/providers/dashscope.json` | `wan2.7-image-pro` | no-registered-image_gen-provider-adapter |
| `compute/providers/dashscope.json` | `wan2.7-image` | no-registered-image_gen-provider-adapter |
| `compute/providers/dashscope.json` | `wan2.6-t2i` | no-registered-image_gen-provider-adapter |
| `compute/providers/dashscope.json` | `wan2.2-t2i-plus` | no-registered-image_gen-provider-adapter |
| `compute/providers/dashscope.json` | `wan2.2-t2i-flash` | no-registered-image_gen-provider-adapter |
| `compute/providers/dashscope.json` | `qwen-image-2.0-pro` | no-registered-image_gen-provider-adapter |
| `compute/providers/dashscope.json` | `qwen-image-2.0` | no-registered-image_gen-provider-adapter |
| `compute/providers/kling.json` | `kling-v3` | no-registered-video_gen-provider-adapter |
| `compute/providers/kling.json` | `kling-v2-5-turbo` | no-registered-video_gen-provider-adapter |
| `compute/providers/kling.json` | `kling-v2-5-turbo-pro` | no-registered-video_gen-provider-adapter |
| `compute/providers/kling.json` | `kling-v2` | no-registered-video_gen-provider-adapter |
| `compute/providers/kling.json` | `kling-v2-master` | no-registered-video_gen-provider-adapter |
| `compute/providers/local-whisper.json` | `whisper-large-v3` | missing-speech-profile-and-compatibility |
| `compute/providers/minimax.json` | `speech-2.8-hd` | missing-speech-profile-and-compatibility |
| `compute/providers/minimax.json` | `speech-2.8-turbo` | missing-speech-profile-and-compatibility |
| `compute/providers/minimax.json` | `speech-2.6-hd` | missing-speech-profile-and-compatibility |
| `compute/providers/minimax.json` | `speech-2.6-turbo` | missing-speech-profile-and-compatibility |
| `compute/providers/minimax.json` | `speech-02-hd` | missing-speech-profile-and-compatibility |
| `compute/providers/minimax.json` | `speech-02-turbo` | missing-speech-profile-and-compatibility |
| `compute/providers/openai.json` | `gpt-image-2.5-sunburst` | no-registered-image_gen-provider-adapter |
| `compute/providers/openai.json` | `gpt-image-2.5-flare` | no-registered-image_gen-provider-adapter |
| `compute/providers/openai.json` | `gpt-image-2` | no-registered-image_gen-provider-adapter |
| `compute/providers/openai.json` | `gpt-realtime-2.1` | no-model-specific-realtime-adapter |
| `compute/providers/openai.json` | `gpt-realtime-2.1-mini` | no-model-specific-realtime-adapter |
| `compute/providers/openai.json` | `gpt-realtime-translate` | no-model-specific-realtime-adapter |
| `compute/providers/stability.json` | `stable-diffusion-3.5-large` | no-registered-image_gen-provider-adapter |
| `compute/providers/xiaomi.json` | `mimo-v2.5-tts-voicedesign` | missing-speech-profile-and-compatibility |
| `compute/providers/xiaomi.json` | `mimo-v2.5-tts-voiceclone` | missing-speech-profile-and-compatibility |
| `compute/coding-plans/dashscope-token-plan.json` | `wan2.7-image-pro` | no-registered-image_gen-provider-adapter |
| `compute/coding-plans/dashscope-token-plan.json` | `wan2.7-image` | no-registered-image_gen-provider-adapter |
| `compute/coding-plans/dashscope-token-plan.json` | `qwen-image-3.0-pro` | no-registered-image_gen-provider-adapter |
| `compute/coding-plans/minimax-coding.json` | `speech-2.8-hd` | missing-speech-profile-and-compatibility |
| `compute/coding-plans/minimax-coding.json` | `speech-2.8-turbo` | missing-speech-profile-and-compatibility |

## 真实派发证据

- `packages/agent-service/src/media/adapters/registry.ts`：getImageAdapter/getVideoAdapter只查映射。
- `packages/agent-service/src/builtin-tools/generate-image.ts`：execute调用后无adapter立即返回失败。
- `packages/agent-service/src/builtin-tools/generate-video.ts`：同样无adapter返回失败。
- `packages/speech-core/src/providers/index.ts`：六类已注册ASR/TTS协议。
- `packages/speech-core/src/model-compatibility.ts`：精确OpenAI语音兼容表，不含Realtime。
- `packages/agent-service/src/speech/speech-resolver.ts`：无speech profile/兼容项时fail，不猜协议。

源文件路径相对客户端工作区 `/Users/wangyi/.codex/worktrees/catalog-contract-client/desirecore`；机器清单保存实际读取文件摘要，便于适配新增后重新核查。

ASR/TTS额外12条由实际recognize/synthesize → resolveSpeechCompute → resolveProfile核实：无显式modelOrigin/speech且兼容表精确/前缀均不命中，立即报missing_model_profile。包括paraformer-v2、whisper-large-v3、MiniMax六种speech版本（含两条套餐副本）和MiMo voicedesign/voiceclone。不是据供应商slug缺失推断；也未发现local-whisper按名称另走本地执行的特殊分派。默认service-map引用whisper-large-v3仍须完成实际profile适配，不能仅凭默认映射声明ASR可用。
