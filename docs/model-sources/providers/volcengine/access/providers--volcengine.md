# 火山引擎：volcengine 接入面

[供应商索引](../README.md) · [官网证据](../SOURCES.md)

- 配置文件：[compute/providers/volcengine.json](../../../../../compute/providers/volcengine.json)
- 核验日期：2026-10-03。
- 接入类别：`providers`。

## 平台配置快照

- API 协议：`openai-completions`。
- 端点：`https://ark.cn-beijing.volces.com/api/v3`。
- 计价币种：`CNY`。
- 访问模式：`普通 API`。

以上是配置快照，不能据此宣布该端点或账号已实际验收。核查地域、套餐支持、凭据来源及协议时，对照官网证据目录并记录结论。

<!-- source-config: compute/providers/volcengine.json -->
<!-- source-config-fingerprint: 39994a8a21672ddaf8da1a02ea806b9281be0b7b2c8c02c70e24c565a4e68257 -->

## 关联模型

- [`doubao-seed-evolving`](../models/doubao-seed-evolving.md)
- [`doubao-seed-2.1-pro`](../models/doubao-seed-2.1-pro.md)
- [`doubao-seed-2.1-turbo`](../models/doubao-seed-2.1-turbo.md)
- [`doubao-seed-2.0-pro`](../models/doubao-seed-2.0-pro.md)
- [`doubao-seed-2.0-lite`](../models/doubao-seed-2.0-lite.md)
- [`doubao-seed-2.0-mini`](../models/doubao-seed-2.0-mini.md)
- [`doubao-seed-2.0-code`](../models/doubao-seed-2.0-code.md)
- [`doubao-seed-1.8`](../models/doubao-seed-1.8.md)
- [`doubao-seed-1.6`](../models/doubao-seed-1.6.md)
- [`doubao-seed-1.6-thinking`](../models/doubao-seed-1.6-thinking.md)
- [`doubao-seed-1.6-flash`](../models/doubao-seed-1.6-flash.md)
- [`doubao-seed-1.6-lite`](../models/doubao-seed-1.6-lite.md)
- [`doubao-seed-1.6-vision`](../models/doubao-seed-1.6-vision.md)
- [`doubao-seed-code`](../models/doubao-seed-code.md)
- [`deepseek-v3.2`](../models/deepseek-v3.2.md)
- [`deepseek-r1`](../models/deepseek-r1.md)
- [`doubao-embedding`](../models/doubao-embedding.md)
- [`doubao-embedding-large`](../models/doubao-embedding-large.md)
- [`volc-mega-tts-clone`](../models/volc-mega-tts-clone.md)
- [`volc-realtime-voice`](../models/volc-realtime-voice.md)
- [`volc-simultaneous`](../models/volc-simultaneous.md)
- [`volc-translation`](../models/volc-translation.md)
- [`doubao-seedream-4-0-250828`](../models/doubao-seedream-4-0-250828.md)
- [`doubao-seedance-2-0-260128`](../models/doubao-seedance-2-0-260128.md)

## 更新前检查

- 核对端点和地域、API 格式、凭据来源、版本要求及套餐实际支持名单。
- 修改平台字段后复核本文件；修改模型字段后更新对应单模型文件。
- 未取得官网参数或账号实测证据时，保留 pending / 未实测说明，不以表格快照代替证据。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "volcengine",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
