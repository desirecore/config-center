# 月之暗面 Kimi：moonshot 接入面

[供应商索引](../README.md) · [官网证据](../SOURCES.md)

- 配置文件：[compute/providers/moonshot.json](../../../../../compute/providers/moonshot.json)
- 核验日期：2026-10-03。
- 接入类别：`providers`。

## 平台配置快照

- API 协议：`openai-completions`。
- 端点：`https://api.moonshot.cn/v1`。
- 计价币种：`CNY`。
- 访问模式：`普通 API`。

以上是配置快照，不能据此宣布该端点或账号已实际验收。核查地域、套餐支持、凭据来源及协议时，对照官网证据目录并记录结论。

<!-- source-config: compute/providers/moonshot.json -->
<!-- source-config-fingerprint: 4f9bc01560572949497a23b270586cbdaa4d7686be62ca81d32986001505af52 -->

## 关联模型

- [`kimi-k3`](../models/kimi-k3.md)
- [`kimi-k2.7-code`](../models/kimi-k2.7-code.md)
- [`kimi-k2.7-code-highspeed`](../models/kimi-k2.7-code-highspeed.md)
- [`kimi-k2.6`](../models/kimi-k2.6.md)
- [`kimi-k2.5`](../models/kimi-k2.5.md)
- [`moonshot-v1-8k`](../models/moonshot-v1-8k.md)
- [`moonshot-v1-32k`](../models/moonshot-v1-32k.md)
- [`moonshot-v1-128k`](../models/moonshot-v1-128k.md)
- [`moonshot-v1-8k-vision-preview`](../models/moonshot-v1-8k-vision-preview.md)
- [`moonshot-v1-32k-vision-preview`](../models/moonshot-v1-32k-vision-preview.md)
- [`moonshot-v1-128k-vision-preview`](../models/moonshot-v1-128k-vision-preview.md)

## 更新前检查

- 核对端点和地域、API 格式、凭据来源、版本要求及套餐实际支持名单。
- 修改平台字段后复核本文件；修改模型字段后更新对应单模型文件。
- 未取得官网参数或账号实测证据时，保留 pending / 未实测说明，不以表格快照代替证据。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "moonshot",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
