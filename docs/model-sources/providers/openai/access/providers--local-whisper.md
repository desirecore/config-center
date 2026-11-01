# OpenAI：local-whisper 接入面

[供应商索引](../README.md) · [官网证据](../SOURCES.md)

- 配置文件：[compute/providers/local-whisper.json](../../../../../compute/providers/local-whisper.json)
- 核验日期：2026-10-03。
- 接入类别：`providers`。

## 平台配置快照

- API 协议：`openai-completions`。
- 端点：`http://localhost:8080`。
- 计价币种：`USD`。
- 访问模式：`普通 API`。
- 凭据模式：`none`，本地服务无需密钥。这个字段只写入 V1 Provider 投影（目录作者数据的 `metadata.v1Connection`）：已发布客户端的 V2 连接 Schema 不接受它，放进 `compute/v2` 会让整份配置中心数据被拒收。

以上是配置快照，不能据此宣布该端点或账号已实际验收。核查地域、套餐支持、凭据来源及协议时，对照官网证据目录并记录结论。

<!-- source-config: compute/providers/local-whisper.json -->
<!-- source-config-fingerprint: a606867c2871ad8ed7343d5b1629140fa319f391f5f6236d20c64234634a50a5 -->

## 关联模型

- [`whisper-large-v3`](../models/whisper-large-v3.md)

## 更新前检查

- 核对端点和地域、API 格式、凭据来源、版本要求及套餐实际支持名单。
- 修改平台字段后复核本文件；修改模型字段后更新对应单模型文件。
- 未取得官网参数或账号实测证据时，保留 pending / 未实测说明，不以表格快照代替证据。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "openai",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
