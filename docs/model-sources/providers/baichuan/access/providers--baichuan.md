# 百川：baichuan 接入面

[供应商索引](../README.md) · [官网证据](../SOURCES.md)

- 配置文件：[compute/providers/baichuan.json](../../../../../compute/providers/baichuan.json)
- 核验日期：2026-10-03。
- 接入类别：`providers`。

## 平台配置快照

- API 协议：`openai-completions`。
- 端点：`https://api.baichuan-ai.com/v1`。
- 计价币种：`CNY`。
- 访问模式：`普通 API`。

以上是配置快照，不能据此宣布该端点或账号已实际验收。核查地域、套餐支持、凭据来源及协议时，对照官网证据目录并记录结论。

<!-- source-config: compute/providers/baichuan.json -->
<!-- source-config-fingerprint: 99031f2bd57df78204a63535fdcd3fd7718770c3ea940c2d34cd51c1832f4a41 -->

## 关联模型

- [`Baichuan-M3-Plus`](../models/baichuan-m3-plus.md)
- [`Baichuan-M3`](../models/baichuan-m3.md)
- [`Baichuan-M2-Plus`](../models/baichuan-m2-plus.md)
- [`Baichuan-M2`](../models/baichuan-m2.md)

## 更新前检查

- 核对端点和地域、API 格式、凭据来源、版本要求及套餐实际支持名单。
- 修改平台字段后复核本文件；修改模型字段后更新对应单模型文件。
- 未取得官网参数或账号实测证据时，保留 pending / 未实测说明，不以表格快照代替证据。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "baichuan",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
