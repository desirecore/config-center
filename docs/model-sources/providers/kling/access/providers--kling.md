# 可灵：kling 接入面

[供应商索引](../README.md) · [官网证据](../SOURCES.md)

- 配置文件：[compute/providers/kling.json](../../../../../compute/providers/kling.json)
- 核验日期：2026-10-03。
- 接入类别：`providers`。

## 平台配置快照

- API 协议：`kling-task-api`。
- 端点：`https://api.klingai.com/v1`。
- 计价币种：`CNY`。
- 访问模式：`普通 API`。

以上是配置快照，不能据此宣布该端点或账号已实际验收。核查地域、套餐支持、凭据来源及协议时，对照官网证据目录并记录结论。

<!-- source-config: compute/providers/kling.json -->
<!-- source-config-fingerprint: 724a2269ba664381282a3d8c7cde80f513230d727a63158474b30202168fc66c -->

## 关联模型

- [`kling-v3`](../models/kling-v3.md)
- [`kling-v2-5-turbo`](../models/kling-v2-5-turbo.md)
- [`kling-v2-5-turbo-pro`](../models/kling-v2-5-turbo-pro.md)
- [`kling-v2`](../models/kling-v2.md)
- [`kling-v2-master`](../models/kling-v2-master.md)

## 更新前检查

- 核对端点和地域、API 格式、凭据来源、版本要求及套餐实际支持名单。
- 修改平台字段后复核本文件；修改模型字段后更新对应单模型文件。
- 未取得官网参数或账号实测证据时，保留 pending / 未实测说明，不以表格快照代替证据。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "kling",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
