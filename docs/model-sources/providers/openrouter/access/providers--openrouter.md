# OpenRouter：openrouter 接入面

[供应商索引](../README.md) · [官网证据](../SOURCES.md)

- 配置文件：[compute/providers/openrouter.json](../../../../../compute/providers/openrouter.json)
- 核验日期：2026-10-03。
- 接入类别：`providers`。

## 平台配置快照

- API 协议：`openai-completions`。
- 端点：`https://openrouter.ai/api/v1`。
- 计价币种：`USD`。
- 访问模式：`普通 API`。

以上是配置快照，不能据此宣布该端点或账号已实际验收。核查地域、套餐支持、凭据来源及协议时，对照官网证据目录并记录结论。

<!-- source-config: compute/providers/openrouter.json -->
<!-- source-config-fingerprint: 4028561e796be1b55138b049ab344a07c16e66e75104513276dab4f05342fda7 -->

## 关联模型

- [`cohere/command-a-plus`](../models/cohere--command-a-plus.md)
- [`mistralai/mistral-medium-3-5`](../models/mistralai--mistral-medium-3-5.md)
- [`google/gemini-3.8-flash`](../models/google--gemini-3.8-flash.md)
- [`minimax/minimax-m3`](../models/minimax--minimax-m3.md)
- [`qwen/qwen3.8-omni-flash`](../models/qwen--qwen3.8-omni-flash.md)
- [`qwen/qwen3.8-max-prime`](../models/qwen--qwen3.8-max-prime.md)
- [`deepseek/deepseek-v4.1-flash`](../models/deepseek--deepseek-v4.1-flash.md)
- [`tencent/hy4-preview`](../models/tencent--hy4-preview.md)
- [`z-ai/glm-5.3-flash`](../models/z-ai--glm-5.3-flash.md)
- [`z-ai/glm-5.3`](../models/z-ai--glm-5.3.md)
- [`moonshotai/kimi-k3`](../models/moonshotai--kimi-k3.md)
- [`anthropic/claude-sonnet-5.5`](../models/anthropic--claude-sonnet-5.5.md)
- [`anthropic/claude-opus-5.5`](../models/anthropic--claude-opus-5.5.md)
- [`openai/gpt-6.1-sol`](../models/openai--gpt-6.1-sol.md)
- [`openrouter/auto`](../models/openrouter--auto.md)

## 更新前检查

- 核对端点和地域、API 格式、凭据来源、版本要求及套餐实际支持名单。
- 修改平台字段后复核本文件；修改模型字段后更新对应单模型文件。
- 未取得官网参数或账号实测证据时，保留 pending / 未实测说明，不以表格快照代替证据。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "openrouter",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
