# xAI：xai 接入面

[供应商索引](../README.md) · [官网证据](../SOURCES.md)

- 配置文件：[compute/providers/xai.json](../../../../../compute/providers/xai.json)
- 核验日期：2026-10-03。
- 接入类别：`providers`。

## 平台配置快照

- API 协议：`openai-completions`。
- 端点：`https://api.x.ai/v1`。
- 计价币种：`USD`。
- 访问模式：`普通 API`。

以上是配置快照，不能据此宣布该端点或账号已实际验收。核查地域、套餐支持、凭据来源及协议时，对照官网证据目录并记录结论。

<!-- source-config: compute/providers/xai.json -->
<!-- source-config-fingerprint: 0201d4cd147c510c9bd8540ad292b29d4afffc67e42566f4bf0aee3a1f8f77a2 -->

## 关联模型

- [`grok-4.7`](../models/grok-4.7.md)
- [`grok-4.3`](../models/grok-4.3.md)
- [`grok-build-0.1`](../models/grok-build-0.1.md)
- [`grok-4.20-0309-reasoning`](../models/grok-4.20-0309-reasoning.md)

## 更新前检查

- 核对端点和地域、API 格式、凭据来源、版本要求及套餐实际支持名单。
- 修改平台字段后复核本文件；修改模型字段后更新对应单模型文件。
- 未取得官网参数或账号实测证据时，保留 pending / 未实测说明，不以表格快照代替证据。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "xai",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
