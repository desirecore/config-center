# 百度千帆：baidu 接入面

[供应商索引](../README.md) · [官网证据](../SOURCES.md)

- 配置文件：[compute/providers/baidu.json](../../../../../compute/providers/baidu.json)
- 核验日期：2026-10-03。
- 接入类别：`providers`。

## 平台配置快照

- API 协议：`openai-completions`。
- 端点：`https://qianfan.baidubce.com/v2`。
- 计价币种：`CNY`。
- 访问模式：`普通 API`。

以上是配置快照，不能据此宣布该端点或账号已实际验收。核查地域、套餐支持、凭据来源及协议时，对照官网证据目录并记录结论。

<!-- source-config: compute/providers/baidu.json -->
<!-- source-config-fingerprint: b72869de848e1fe3dfebd68468e2c1305501298a6343b9a7ee28267c859ebd78 -->

## 关联模型

- [`ernie-5.0-thinking-latest`](../models/ernie-5.0-thinking-latest.md)
- [`ernie-5.0`](../models/ernie-5.0.md)
- [`ernie-4.5-turbo-128k`](../models/ernie-4.5-turbo-128k.md)
- [`ernie-4.5-turbo-20260402`](../models/ernie-4.5-turbo-20260402.md)
- [`ernie-x1.1`](../models/ernie-x1.1.md)

## 更新前检查

- 核对端点和地域、API 格式、凭据来源、版本要求及套餐实际支持名单。
- 修改平台字段后复核本文件；修改模型字段后更新对应单模型文件。
- 未取得官网参数或账号实测证据时，保留 pending / 未实测说明，不以表格快照代替证据。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "baidu",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
