# Anthropic：anthropic-claude 接入面

[供应商索引](../README.md) · [官网证据](../SOURCES.md)

- 配置文件：[compute/providers/anthropic-claude.json](../../../../../compute/providers/anthropic-claude.json)
- 核验日期：2026-10-03。
- 接入类别：`providers`。

## 平台配置快照

- API 协议：`anthropic-messages`。
- 端点：`https://api.anthropic.com`。
- 计价币种：`USD`。
- 访问模式：`coding-plan`。

以上是配置快照，不能据此宣布该端点或账号已实际验收。核查地域、套餐支持、凭据来源及协议时，对照官网证据目录并记录结论。

<!-- source-config: compute/providers/anthropic-claude.json -->
<!-- source-config-fingerprint: 9e31624db1bc71c15ce7b841fba444c1aae51c25cf21d7df8f9bfee373aa0771 -->

## 关联模型

- [`claude-opus-5-5`](../models/claude-opus-5-5.md)
- [`claude-fable-5-1`](../models/claude-fable-5-1.md)
- [`claude-opus-5`](../models/claude-opus-5.md)
- [`claude-sonnet-5-5`](../models/claude-sonnet-5-5.md)
- [`claude-sonnet-5`](../models/claude-sonnet-5.md)

## 更新前检查

- 核对端点和地域、API 格式、凭据来源、版本要求及套餐实际支持名单。
- 修改平台字段后复核本文件；修改模型字段后更新对应单模型文件。
- 未取得官网参数或账号实测证据时，保留 pending / 未实测说明，不以表格快照代替证据。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "anthropic",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
