# 讯飞星火：xunfei-x2 接入面

[供应商索引](../README.md) · [官网证据](../SOURCES.md)

- 配置文件：[compute/providers/xunfei-x2.json](../../../../../compute/providers/xunfei-x2.json)
- 核验日期：2026-10-03。
- 接入类别：`providers`。

## 平台配置快照

- API 协议：`openai-completions`。
- 端点：`https://spark-api-open.xf-yun.com/x2`。
- 计价币种：`CNY`。
- 访问模式：`普通 API`。

官方 HTTP 文档明确 X2 使用 `/x2/chat/completions`，输入 65536、输出上限 131072，通用 Bearer 认证与 OpenAI Chat/SSE 形状。未执行账号调用；不与旧 `/v1` 的 Ultra 模型混用端点。

以上是配置快照，不能据此宣布该端点或账号已实际验收。核查地域、套餐支持、凭据来源及协议时，对照官网证据目录并记录结论。

<!-- source-config: compute/providers/xunfei-x2.json -->
<!-- source-config-fingerprint: f4675c8f311b69a932ce2fdcb332ecc899e77c24d3ddf6cd32f348b04d092d40 -->

## 关联模型

- [`spark-x`](../models/spark-x.md)

## 更新前检查

- 核对端点和地域、API 格式、凭据来源、版本要求及套餐实际支持名单。
- 修改平台字段后复核本文件；修改模型字段后更新对应单模型文件。
- 未取得官网参数或账号实测证据时，保留 pending / 未实测说明，不以表格快照代替证据。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "xunfei",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
