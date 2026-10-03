# 智谱：zhipu 接入面

[供应商索引](../README.md) · [官网证据](../SOURCES.md)

- 配置文件：[compute/providers/zhipu.json](../../../../../compute/providers/zhipu.json)
- 核验日期：2026-10-03。
- 接入类别：`providers`。

## 平台配置快照

- API 协议：`anthropic-messages`。
- 端点：`https://open.bigmodel.cn/api/anthropic`。
- 计价币种：`CNY`。
- 访问模式：`普通 API`。

以上是配置快照，不能据此宣布该端点或账号已实际验收。核查地域、套餐支持、凭据来源及协议时，对照官网证据目录并记录结论。

<!-- source-config: compute/providers/zhipu.json -->
<!-- source-config-fingerprint: aa075cfecf5cbf9b45a071d440262bf38b521e05480cbdf7f67ba4e46d974e67 -->

## 关联模型

- [`glm-5.3-flashx`](../models/glm-5.3-flashx.md)
- [`glm-5.3-flash`](../models/glm-5.3-flash.md)
- [`glm-5.3`](../models/glm-5.3.md)
- [`glm-5.2`](../models/glm-5.2.md)
- [`glm-5.1`](../models/glm-5.1.md)
- [`glm-5-turbo`](../models/glm-5-turbo.md)
- [`glm-5`](../models/glm-5.md)
- [`glm-4.7`](../models/glm-4.7.md)
- [`glm-4.7-flashx`](../models/glm-4.7-flashx.md)
- [`glm-5v-turbo`](../models/glm-5v-turbo.md)
- [`glm-4.6v`](../models/glm-4.6v.md)
- [`glm-4.6`](../models/glm-4.6.md)

## 更新前检查

- 核对端点和地域、API 格式、凭据来源、版本要求及套餐实际支持名单。
- 修改平台字段后复核本文件；修改模型字段后更新对应单模型文件。
- 未取得官网参数或账号实测证据时，保留 pending / 未实测说明，不以表格快照代替证据。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "zhipu",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
