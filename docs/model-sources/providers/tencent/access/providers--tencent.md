# 腾讯混元：tencent 接入面

[供应商索引](../README.md) · [官网证据](../SOURCES.md)

- 配置文件：[compute/providers/tencent.json](../../../../../compute/providers/tencent.json)
- 核验日期：2026-10-03。
- 接入类别：`providers`。

## 平台配置快照

- API 协议：`openai-completions`。
- 端点：`https://api.hunyuan.cloud.tencent.com/v1`。
- 计价币种：`CNY`。
- 访问模式：`普通 API`。

以上是配置快照，不能据此宣布该端点或账号已实际验收。核查地域、套餐支持、凭据来源及协议时，对照官网证据目录并记录结论。

<!-- source-config: compute/providers/tencent.json -->
<!-- source-config-fingerprint: d4792fa81dfb99080a2903c9da371eaabebd9d13bf32b98cad47734520ae9fb0 -->

## 关联模型

- [`hunyuan-2.0-thinking-20251109`](../models/hunyuan-2.0-thinking-20251109.md)
- [`hunyuan-2.0-instruct-20251111`](../models/hunyuan-2.0-instruct-20251111.md)
- [`hunyuan-turbos-latest`](../models/hunyuan-turbos-latest.md)
- [`hunyuan-t1-latest`](../models/hunyuan-t1-latest.md)
- [`hunyuan-t1-vision`](../models/hunyuan-t1-vision.md)
- [`hunyuan-turbos-vision`](../models/hunyuan-turbos-vision.md)

## 更新前检查

- 核对端点和地域、API 格式、凭据来源、版本要求及套餐实际支持名单。
- 修改平台字段后复核本文件；修改模型字段后更新对应单模型文件。
- 未取得官网参数或账号实测证据时，保留 pending / 未实测说明，不以表格快照代替证据。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "tencent",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
