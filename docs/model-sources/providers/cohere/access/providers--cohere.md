# Cohere：cohere 接入面

[供应商索引](../README.md) · [官网证据](../SOURCES.md)

- 配置文件：[compute/providers/cohere.json](../../../../../compute/providers/cohere.json)
- 核验日期：2026-10-03。
- 接入类别：`providers`。

## 平台配置快照

- API 协议：`openai-completions`。
- 端点：`https://api.cohere.ai/compatibility/v1`。
- 计价币种：`USD`。
- 访问模式：`普通 API`。

以上是配置快照，不能据此宣布该端点或账号已实际验收。核查地域、套餐支持、凭据来源及协议时，对照官网证据目录并记录结论。

<!-- source-config: compute/providers/cohere.json -->
<!-- source-config-fingerprint: 90a11e2c69ccbe6ea4c3d312589acf16757abbd0b8ac5e7e4d9269dee2215124 -->

## 关联模型

- [`embed-v5.0-fast`](../models/embed-v5.0-fast.md)
- [`embed-v5.0-pro`](../models/embed-v5.0-pro.md)
- [`command-a-plus-05-2026`](../models/command-a-plus-05-2026.md)
- [`command-a-03-2025`](../models/command-a-03-2025.md)
- [`command-r7b-12-2024`](../models/command-r7b-12-2024.md)
- [`embed-v4.0`](../models/embed-v4.0.md)
- [`rerank-v3.5`](../models/rerank-v3.5.md)

## 更新前检查

- 核对端点和地域、API 格式、凭据来源、版本要求及套餐实际支持名单。
- 修改平台字段后复核本文件；修改模型字段后更新对应单模型文件。
- 未取得官网参数或账号实测证据时，保留 pending / 未实测说明，不以表格快照代替证据。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "cohere",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
