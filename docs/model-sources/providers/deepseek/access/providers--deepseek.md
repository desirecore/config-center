# DeepSeek：deepseek 接入面

[供应商索引](../README.md) · [官网证据](../SOURCES.md)

- 配置文件：[compute/providers/deepseek.json](../../../../../compute/providers/deepseek.json)
- 核验日期：2026-10-03。
- 接入类别：`providers`。

## 平台配置快照

- API 协议：`openai-completions`。
- 端点：`https://api.deepseek.com`。
- 计价币种：`CNY`。
- 访问模式：`普通 API`。

以上是配置快照，不能据此宣布该端点或账号已实际验收。核查地域、套餐支持、凭据来源及协议时，对照官网证据目录并记录结论。

<!-- source-config: compute/providers/deepseek.json -->
<!-- source-config-fingerprint: a2aed3a448e8daa4f1c6e71da7a1e850d91f6f2a8de84be9394df5bd4a44bceb -->

## 关联模型

- [`deepseek-flash`](../models/deepseek-flash.md)
- [`deepseek-v4-flash-vision-exp`](../models/deepseek-v4-flash-vision-exp.md)
- [`deepseek-v4-flash`](../models/deepseek-v4-flash.md)
- [`deepseek-v4-pro`](../models/deepseek-v4-pro.md)

## 更新前检查

- 核对端点和地域、API 格式、凭据来源、版本要求及套餐实际支持名单。
- 修改平台字段后复核本文件；修改模型字段后更新对应单模型文件。
- 未取得官网参数或账号实测证据时，保留 pending / 未实测说明，不以表格快照代替证据。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "deepseek",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
