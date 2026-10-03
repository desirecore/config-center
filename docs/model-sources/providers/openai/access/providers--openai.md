# OpenAI：openai 接入面

[供应商索引](../README.md) · [官网证据](../SOURCES.md)

- 配置文件：[compute/providers/openai.json](../../../../../compute/providers/openai.json)
- 核验日期：2026-10-03。
- 接入类别：`providers`。

## 平台配置快照

- API 协议：`openai-completions`。
- 端点：`https://api.openai.com/v1`。
- 计价币种：`USD`。
- 访问模式：`普通 API`。

以上是配置快照，不能据此宣布该端点或账号已实际验收。核查地域、套餐支持、凭据来源及协议时，对照官网证据目录并记录结论。

<!-- source-config: compute/providers/openai.json -->
<!-- source-config-fingerprint: 76effc95007445f14e914faa73da171dfce0fad8c2ba4ef88bfed67a5271d588 -->

## 关联模型

- [`gpt-6.1-sol`](../models/gpt-6.1-sol.md)
- [`gpt-image-2.5-sunburst`](../models/gpt-image-2.5-sunburst.md)
- [`gpt-image-2.5-flare`](../models/gpt-image-2.5-flare.md)
- [`gpt-6-sol`](../models/gpt-6-sol.md)
- [`gpt-6-luna`](../models/gpt-6-luna.md)
- [`gpt-6-astra`](../models/gpt-6-astra.md)
- [`gpt-5.5`](../models/gpt-5.5.md)
- [`gpt-5.5-pro`](../models/gpt-5.5-pro.md)
- [`gpt-5.4`](../models/gpt-5.4.md)
- [`gpt-5.4-pro`](../models/gpt-5.4-pro.md)
- [`gpt-5.4-mini`](../models/gpt-5.4-mini.md)
- [`gpt-5.4-nano`](../models/gpt-5.4-nano.md)
- [`gpt-image-2`](../models/gpt-image-2.md)
- [`gpt-realtime-2.1`](../models/gpt-realtime-2.1.md)
- [`gpt-realtime-2.1-mini`](../models/gpt-realtime-2.1-mini.md)
- [`gpt-realtime-translate`](../models/gpt-realtime-translate.md)
- [`gpt-5.2`](../models/gpt-5.2.md)
- [`gpt-5.2-pro`](../models/gpt-5.2-pro.md)
- [`gpt-5.1`](../models/gpt-5.1.md)
- [`gpt-5`](../models/gpt-5.md)
- [`gpt-5-pro`](../models/gpt-5-pro.md)
- [`gpt-5-mini`](../models/gpt-5-mini.md)
- [`gpt-5-nano`](../models/gpt-5-nano.md)
- [`gpt-4.1`](../models/gpt-4.1.md)
- [`gpt-4.1-mini`](../models/gpt-4.1-mini.md)
- [`gpt-4.1-nano`](../models/gpt-4.1-nano.md)
- [`gpt-4o`](../models/gpt-4o.md)
- [`gpt-4o-mini`](../models/gpt-4o-mini.md)
- [`text-embedding-3-small`](../models/text-embedding-3-small.md)
- [`text-embedding-3-large`](../models/text-embedding-3-large.md)
- [`tts-1`](../models/tts-1.md)
- [`tts-1-hd`](../models/tts-1-hd.md)
- [`whisper-1`](../models/whisper-1.md)
- [`o3`](../models/o3.md)
- [`o3-pro`](../models/o3-pro.md)
- [`o3-mini`](../models/o3-mini.md)
- [`o4-mini`](../models/o4-mini.md)

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
