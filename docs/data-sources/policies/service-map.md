# 默认模型选择

默认映射属于本仓产品策略，最新型号不自动替换旧默认。所有本地 providerId/modelName 必须实际存在；云端动态目录例外逐项记录。引用校验不代表新模型质量、成本、延迟或协议实测。

当前保留 GPT-5.4 Mini/Nano、Sonnet 5 等默认；summary 于 2026-10-03 由 MiMo V2.5 调整为 MiMo V2.6 Flash。下一次调整前对所选接入做质量、成本、延迟、工具/多模态和失败回退比较，登记选择理由与测量日期；没有客户端实测证据时不改变默认。新增型号、退役、端点迁移后触发复查。逐模型官方事实继续使用 ../../model-sources/README.md 的分供应商来源。

调整记录（2026-10-03，summary）：`desirecore-cloud/mimo-v2.5` 已不在云端动态目录中（2026-09-30 客户端云端同步后模型列表不再包含该型号），客户端钉选落空后回退主查询模型，后台话题分析/摘要常被推理模型拖到超时。改指同系后继 `mimo-v2.6-flash`（model-specs/xiaomi.json：balanced 档，思考模式支持 off，可供辅助调用关闭思考）。本次为产品决策替换已下架型号，尚未做专门的质量、成本、延迟对比；后续以客户端审计中 callPurpose=matter-analysis / conversation-summary 的成功率与耗时复查。

<!-- data-source:start -->
```json
{
  "kind": "routing-policy",
  "config": "compute/service-map.json",
  "checkedAt": "2026-10-03",
  "status": "policy",
  "externalProviders": [
    {
      "id": "desirecore-cloud",
      "reason": "云端动态目录不在本仓 Provider 文件中，需部署方独立确认 summary 模型可用。"
    }
  ],
  "claims": {
    "chat": {
      "modelName": "gpt-5.4-mini",
      "providerId": "provider-openai-001"
    },
    "reasoning": {
      "modelName": "deepseek-flash",
      "providerId": "provider-deepseek-001"
    },
    "fast": {
      "modelName": "gpt-5.4-nano",
      "providerId": "provider-openai-001"
    },
    "embedding": {
      "modelName": "text-embedding-3-small",
      "providerId": "provider-openai-001"
    },
    "rerank": {
      "modelName": "qwen3-rerank",
      "providerId": "provider-dashscope-001"
    },
    "vision": {
      "modelName": "gpt-5.4-mini",
      "providerId": "provider-openai-001"
    },
    "tts": {
      "modelName": "tts-1",
      "providerId": "provider-openai-001"
    },
    "asr": {
      "modelName": "whisper-large-v3",
      "providerId": "provider-local-whisper"
    },
    "ocr": {
      "modelName": "qwen3-vl-plus",
      "providerId": "provider-dashscope-001"
    },
    "responses": {
      "modelName": "gpt-5.5",
      "providerId": "provider-openai-001"
    },
    "image_gen": {
      "modelName": "image-01",
      "providerId": "provider-minimax-001"
    },
    "video_gen": {
      "modelName": "MiniMax-Hailuo-2.3",
      "providerId": "provider-minimax-001"
    },
    "omni": {
      "modelName": "gpt-realtime-2.1",
      "providerId": "provider-openai-001"
    },
    "voice_clone": {
      "modelName": "cosyvoice-clone",
      "providerId": "provider-dashscope-001"
    },
    "realtime_voice": {
      "modelName": "gpt-realtime-2.1",
      "providerId": "provider-openai-001"
    },
    "simultaneous_interpret": {
      "modelName": "volc-simultaneous",
      "providerId": "provider-volcengine-001"
    },
    "translation": {
      "modelName": "qwen-mt-plus",
      "providerId": "provider-dashscope-001"
    },
    "computer_use": {
      "modelName": "claude-sonnet-5",
      "providerId": "provider-anthropic-001"
    },
    "music_gen": {
      "modelName": "music-2.6",
      "providerId": "provider-minimax-001"
    },
    "summary": {
      "modelName": "mimo-v2.6-flash",
      "providerId": "desirecore-cloud"
    }
  }
}
```
<!-- data-source:end -->
