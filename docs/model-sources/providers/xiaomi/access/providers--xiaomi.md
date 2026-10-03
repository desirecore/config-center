# 小米 MiMo：xiaomi 接入面

[供应商索引](../README.md) · [官网证据](../SOURCES.md)

- 配置文件：[compute/providers/xiaomi.json](../../../../../compute/providers/xiaomi.json)
- 核验日期：2026-10-03。
- 接入类别：`providers`。

## 平台配置快照

- API 协议：`openai-completions`。
- 端点：`https://api.xiaomimimo.com/v1`。
- 计价币种：`CNY`。
- 访问模式：`api`。

以上是配置快照，不能据此宣布该端点或账号已实际验收。核查地域、套餐支持、凭据来源及协议时，对照官网证据目录并记录结论。

<!-- source-config: compute/providers/xiaomi.json -->
<!-- source-config-fingerprint: 0da21c8140becb6f59e5beed5bd93d8a8957846129eb6c2044a3f25c30738686 -->

## 关联模型

- [`mimo-v2.6-pro`](../models/mimo-v2.6-pro.md)
- [`mimo-v2.6-flash`](../models/mimo-v2.6-flash.md)
- [`mimo-v2.6-pro-ultraspeed`](../models/mimo-v2.6-pro-ultraspeed.md)
- [`mimo-x-flash-preview`](../models/mimo-x-flash-preview.md)
- [`mimo-x-pro-preview`](../models/mimo-x-pro-preview.md)
- [`mimo-v2.5-pro`](../models/mimo-v2.5-pro.md)
- [`mimo-v2.5-tts`](../models/mimo-v2.5-tts.md)
- [`mimo-v2.5-asr`](../models/mimo-v2.5-asr.md)
- [`mimo-v2.5-tts-voicedesign`](../models/mimo-v2.5-tts-voicedesign.md)
- [`mimo-v2.5-tts-voiceclone`](../models/mimo-v2.5-tts-voiceclone.md)

## 更新前检查

- 核对端点和地域、API 格式、凭据来源、版本要求及套餐实际支持名单。
- 修改平台字段后复核本文件；修改模型字段后更新对应单模型文件。
- 未取得官网参数或账号实测证据时，保留 pending / 未实测说明，不以表格快照代替证据。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "xiaomi",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
