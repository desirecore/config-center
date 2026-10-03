# 阿里云百炼 / Qwen / Wan / HappyHorse：dashscope 接入面

[供应商索引](../README.md) · [官网证据](../SOURCES.md)

- 配置文件：[compute/providers/dashscope.json](../../../../../compute/providers/dashscope.json)
- 核验日期：2026-10-03。
- 接入类别：`providers`。

## 平台配置快照

- API 协议：`openai-completions`。
- 端点：`https://dashscope.aliyuncs.com/compatible-mode/v1`。
- 计价币种：`CNY`。
- 访问模式：`普通 API`。

以上是配置快照，不能据此宣布该端点或账号已实际验收。核查地域、套餐支持、凭据来源及协议时，对照官网证据目录并记录结论。

<!-- source-config: compute/providers/dashscope.json -->
<!-- source-config-fingerprint: 797eda38b6c888337dd6531be55395e2f0ef4f9abcf442b2d0fd53c74fd3f5b8 -->

## 关联模型

- [`qwen-image-3.0`](../models/qwen-image-3.0.md)
- [`qwen-image-3.0-pro`](../models/qwen-image-3.0-pro.md)
- [`qwen3.7-text-rerank`](../models/qwen3.7-text-rerank.md)
- [`qwen3.7-text-embedding-flash`](../models/qwen3.7-text-embedding-flash.md)
- [`qwen3.7-text-embedding`](../models/qwen3.7-text-embedding.md)
- [`qwen3.8-omni-flash`](../models/qwen3.8-omni-flash.md)
- [`qwen3.8-max`](../models/qwen3.8-max.md)
- [`qwen3.8-flash`](../models/qwen3.8-flash.md)
- [`qwen3.7-max`](../models/qwen3.7-max.md)
- [`qwen3.7-plus`](../models/qwen3.7-plus.md)
- [`qwen3.6-flash`](../models/qwen3.6-flash.md)
- [`qwen-long`](../models/qwen-long.md)
- [`qwen3-vl-plus`](../models/qwen3-vl-plus.md)
- [`qwen3-vl-flash`](../models/qwen3-vl-flash.md)
- [`text-embedding-v3`](../models/text-embedding-v3.md)
- [`text-embedding-v4`](../models/text-embedding-v4.md)
- [`qwen3-rerank`](../models/qwen3-rerank.md)
- [`cosyvoice-v2`](../models/cosyvoice-v2.md)
- [`paraformer-v2`](../models/paraformer-v2.md)
- [`wan2.7-image-pro`](../models/wan2.7-image-pro.md)
- [`wan2.7-image`](../models/wan2.7-image.md)
- [`wan2.6-t2i`](../models/wan2.6-t2i.md)
- [`wan2.2-t2i-plus`](../models/wan2.2-t2i-plus.md)
- [`wan2.2-t2i-flash`](../models/wan2.2-t2i-flash.md)
- [`qwen-image-2.0-pro`](../models/qwen-image-2.0-pro.md)
- [`qwen-image-2.0`](../models/qwen-image-2.0.md)
- [`wan3.0-video-prime`](../models/wan3.0-video-prime.md)
- [`wan3.0-video`](../models/wan3.0-video.md)
- [`wan2.6-t2v`](../models/wan2.6-t2v.md)
- [`cosyvoice-clone`](../models/cosyvoice-clone.md)
- [`qwen-omni-turbo`](../models/qwen-omni-turbo.md)
- [`qwen-mt-plus`](../models/qwen-mt-plus.md)
- [`happyhorse-1.0-t2v`](../models/happyhorse-1.0-t2v.md)
- [`happyhorse-1.0-i2v`](../models/happyhorse-1.0-i2v.md)
- [`happyhorse-1.0-r2v`](../models/happyhorse-1.0-r2v.md)

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
