# Mistral：mistral 接入面

[供应商索引](../README.md) · [官网证据](../SOURCES.md)

- 配置文件：[compute/providers/mistral.json](../../../../../compute/providers/mistral.json)
- 核验日期：2026-10-03。
- 接入类别：`providers`。

## 平台配置快照

- API 协议：`openai-completions`。
- 端点：`https://api.mistral.ai/v1`。
- 计价币种：`USD`。
- 访问模式：`普通 API`。

以上是配置快照，不能据此宣布该端点或账号已实际验收。核查地域、套餐支持、凭据来源及协议时，对照官网证据目录并记录结论。

<!-- source-config: compute/providers/mistral.json -->
<!-- source-config-fingerprint: 3ac1dc9699af3a662e59037cb08de245e9f2f87c305c7df345445d4e3754b07a -->

## 关联模型

- [`mistral-medium-3-5`](../models/mistral-medium-3-5.md)
- [`mistral-medium-latest`](../models/mistral-medium-latest.md)
- [`mistral-large-latest`](../models/mistral-large-latest.md)
- [`mistral-small-latest`](../models/mistral-small-latest.md)
- [`codestral-latest`](../models/codestral-latest.md)

## 更新前检查

- 核对端点和地域、API 格式、凭据来源、版本要求及套餐实际支持名单。
- 修改平台字段后复核本文件；修改模型字段后更新对应单模型文件。
- 未取得官网参数或账号实测证据时，保留 pending / 未实测说明，不以表格快照代替证据。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "mistral",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
