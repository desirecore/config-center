# 阿里云百炼 / Qwen / Wan / HappyHorse：dashscope-token-plan 接入面

[供应商索引](../README.md) · [官网证据](../SOURCES.md)

- 配置文件：[compute/coding-plans/dashscope-token-plan.json](../../../../../compute/coding-plans/dashscope-token-plan.json)
- 核验日期：2026-10-03。
- 接入类别：`coding-plans`。

## 平台配置快照

- API 协议：`openai-completions`。
- 端点：`https://token-plan.cn-beijing.maas.aliyuncs.com/compatible-mode/v1`。
- 计价币种：`套餐`。
- 访问模式：`token-plan`。

以上是配置快照，不能据此宣布该端点或账号已实际验收。核查地域、套餐支持、凭据来源及协议时，对照官网证据目录并记录结论。

<!-- source-config: compute/coding-plans/dashscope-token-plan.json -->
<!-- source-config-fingerprint: 5379eb428a6fcb3efc34aad315cd9ff2ea66c5817de3bcb1caca17c4945b57f7 -->

## 关联模型

- [`deepseek-v4.1-flash`](../models/deepseek-v4.1-flash.md)
- [`wan2.7-image-pro`](../models/wan2.7-image-pro.md)
- [`wan2.7-image`](../models/wan2.7-image.md)
- [`qwen-image-3.0-pro`](../models/qwen-image-3.0-pro.md)
- [`happyhorse-1.1-t2v`](../models/happyhorse-1.1-t2v.md)
- [`happyhorse-1.1-r2v`](../models/happyhorse-1.1-r2v.md)
- [`happyhorse-1.1-i2v`](../models/happyhorse-1.1-i2v.md)
- [`glm-5.3`](../models/glm-5.3.md)
- [`glm-5.2`](../models/glm-5.2.md)
- [`deepseek-v4-pro-0813`](../models/deepseek-v4-pro-0813.md)
- [`deepseek-v4-pro`](../models/deepseek-v4-pro.md)
- [`deepseek-v4-flash-0731`](../models/deepseek-v4-flash-0731.md)
- [`qwen3.8-max`](../models/qwen3.8-max.md)
- [`qwen3.8-flash`](../models/qwen3.8-flash.md)
- [`qwen3.7-max`](../models/qwen3.7-max.md)
- [`qwen3.7-plus`](../models/qwen3.7-plus.md)
- [`qwen3.6-plus`](../models/qwen3.6-plus.md)
- [`qwen3.6-flash`](../models/qwen3.6-flash.md)
- [`kimi-k2.5`](../models/kimi-k2.5.md)
- [`glm-5`](../models/glm-5.md)
- [`MiniMax-M2.5`](../models/minimax-m2.5.md)
- [`glm-4.7`](../models/glm-4.7.md)

## 更新前检查

- 核对端点和地域、API 格式、凭据来源、版本要求及套餐实际支持名单。
- 修改平台字段后复核本文件；修改模型字段后更新对应单模型文件。
- 未取得官网参数或账号实测证据时，保留 pending / 未实测说明，不以表格快照代替证据。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "alibaba",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
