# OpenAI：openai-codex 接入面

[供应商索引](../README.md) · [官网证据](../SOURCES.md)

- 配置文件：[compute/providers/openai-codex.json](../../../../../compute/providers/openai-codex.json)
- 核验日期：2026-10-03。
- 接入类别：`providers`。

## 平台配置快照

- API 协议：`openai-codex-responses`。
- 端点：`https://chatgpt.com/backend-api`。
- 计价币种：`USD`。
- 访问模式：`coding-plan`。

以上是配置快照，不能据此宣布该端点或账号已实际验收。核查地域、套餐支持、凭据来源及协议时，对照官网证据目录并记录结论。

<!-- source-config: compute/providers/openai-codex.json -->
<!-- source-config-fingerprint: e9be93466eef34a6ad0c41421b15bb7e59476a7b74594a262187ba8114912484 -->

## 关联模型

- [`gpt-6.1-sol`](../models/gpt-6.1-sol.md)
- [`gpt-6-sol`](../models/gpt-6-sol.md)
- [`gpt-6-luna`](../models/gpt-6-luna.md)
- [`gpt-6-astra`](../models/gpt-6-astra.md)
- [`gpt-reserve`](../models/gpt-reserve.md)
- [`gpt-5.6-sol`](../models/gpt-5.6-sol.md)
- [`gpt-5.6-terra`](../models/gpt-5.6-terra.md)
- [`gpt-5.6-luna`](../models/gpt-5.6-luna.md)
- [`gpt-5.5`](../models/gpt-5.5.md)
- [`gpt-5.4`](../models/gpt-5.4.md)
- [`gpt-5.4-mini`](../models/gpt-5.4-mini.md)
- [`gpt-5.3-codex-spark`](../models/gpt-5.3-codex-spark.md)

## 更新前检查

- 核对端点和地域、API 格式、凭据来源、版本要求及套餐实际支持名单。
- 修改平台字段后复核本文件；修改模型字段后更新对应单模型文件。
- 未取得官网参数或账号实测证据时，保留 pending / 未实测说明，不以表格快照代替证据。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "openai",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
