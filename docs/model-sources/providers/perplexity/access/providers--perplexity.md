# Perplexity：perplexity 接入面

[供应商索引](../README.md) · [官网证据](../SOURCES.md)

- 配置文件：[compute/providers/perplexity.json](../../../../../compute/providers/perplexity.json)
- 核验日期：2026-10-03。
- 接入类别：`providers`。

## 平台配置快照

- API 协议：`openai-completions`。
- 端点：`https://api.perplexity.ai`。
- 计价币种：`USD`。
- 访问模式：`普通 API`。

以上是配置快照，不能据此宣布该端点或账号已实际验收。核查地域、套餐支持、凭据来源及协议时，对照官网证据目录并记录结论。

<!-- source-config: compute/providers/perplexity.json -->
<!-- source-config-fingerprint: 2e86809aa786094beabf698af599985f4ffcd34fec8f78c33c29ae9968081397 -->

## 关联模型

- [`sonar-pro`](../models/sonar-pro.md)
- [`sonar-reasoning-pro`](../models/sonar-reasoning-pro.md)
- [`sonar`](../models/sonar.md)

## 更新前检查

- 核对端点和地域、API 格式、凭据来源、版本要求及套餐实际支持名单。
- 修改平台字段后复核本文件；修改模型字段后更新对应单模型文件。
- 未取得官网参数或账号实测证据时，保留 pending / 未实测说明，不以表格快照代替证据。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "perplexity",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
