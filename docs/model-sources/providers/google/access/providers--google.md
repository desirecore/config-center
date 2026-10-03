# Google Gemini：google 接入面

[供应商索引](../README.md) · [官网证据](../SOURCES.md)

- 配置文件：[compute/providers/google.json](../../../../../compute/providers/google.json)
- 核验日期：2026-10-03。
- 接入类别：`providers`。

## 平台配置快照

- API 协议：`google-generative-ai`。
- 端点：`https://generativelanguage.googleapis.com/v1beta`。
- 计价币种：`USD`。
- 访问模式：`普通 API`。

以上是配置快照，不能据此宣布该端点或账号已实际验收。核查地域、套餐支持、凭据来源及协议时，对照官网证据目录并记录结论。

<!-- source-config: compute/providers/google.json -->
<!-- source-config-fingerprint: 8bb31962eb527147305e75f9e7f07349a354a90cac8196365d22c7932fd2d93b -->

## 关联模型

- [`gemini-embedding-2`](../models/gemini-embedding-2.md)
- [`gemini-3.8-flash`](../models/gemini-3.8-flash.md)
- [`gemini-3.7-flash`](../models/gemini-3.7-flash.md)
- [`gemini-3.5-flash-lite`](../models/gemini-3.5-flash-lite.md)
- [`gemini-3.5-flash`](../models/gemini-3.5-flash.md)
- [`gemini-3.1-flash-lite`](../models/gemini-3.1-flash-lite.md)
- [`gemini-3.1-pro-preview`](../models/gemini-3.1-pro-preview.md)
- [`gemini-3-flash-preview`](../models/gemini-3-flash-preview.md)
- [`gemini-2.5-pro`](../models/gemini-2.5-pro.md)
- [`gemini-2.5-flash`](../models/gemini-2.5-flash.md)
- [`text-embedding-005`](../models/text-embedding-005.md)

## 更新前检查

- 核对端点和地域、API 格式、凭据来源、版本要求及套餐实际支持名单。
- 修改平台字段后复核本文件；修改模型字段后更新对应单模型文件。
- 未取得官网参数或账号实测证据时，保留 pending / 未实测说明，不以表格快照代替证据。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "google",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
