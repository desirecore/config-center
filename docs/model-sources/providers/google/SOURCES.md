# Google Gemini：官网证据目录

[供应商索引](README.md)

核验日期：2026-10-03。这里只登记可复用的官网证据与适用边界，具体模型与接入面分别记录。

## 官网证据

### google-models

- 入口：[google-models](https://ai.google.dev/gemini-api/docs/models)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`google 官方入口；具体地域与接入面待该页面逐字段确认`。
### google-embedding

- 入口：[google-embedding](https://ai.google.dev/gemini-api/docs/embeddings)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`Gemini Developer API 原生 Embedding 2；输入限额与输出向量维度`。
### google-tts

- 入口：[google-tts](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash-tts)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`Gemini Developer API 原生 TTS；输入和输出分别限额`。
### google-transcribe

- 入口：[google-transcribe](https://ai.google.dev/gemini-api/docs/models/gemini-3.5-transcribe)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`Gemini Developer API 原生转写，客户端协议适配另核`。

### gemini-3-8-flash-limits

- 入口：[gemini-3-8-flash-limits](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：Gemini Developer API 精确模型页；input 与 output 限额独立。

### gemini-3-7-flash-limits

- 入口：[gemini-3-7-flash-limits](https://ai.google.dev/gemini-api/docs/models/gemini-3.7-flash)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：Gemini Developer API 精确模型页；input 与 output 限额独立。

### gemini-3-5-flash-lite-limits

- 入口：[gemini-3-5-flash-lite-limits](https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash-lite)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：Gemini Developer API 精确模型页；input 与 output 限额独立。

### gemini-3-5-flash-limits

- 入口：[gemini-3-5-flash-limits](https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：Gemini Developer API 精确模型页；input 与 output 限额独立。

### gemini-3-1-flash-lite-limits

- 入口：[gemini-3-1-flash-lite-limits](https://ai.google.dev/gemini-api/docs/models/gemini-3.1-flash-lite)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：Gemini Developer API 精确模型页；input 与 output 限额独立。

### gemini-3-1-pro-preview-limits

- 入口：[gemini-3-1-pro-preview-limits](https://ai.google.dev/gemini-api/docs/models/gemini-3.1-pro-preview)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：Gemini Developer API 精确模型页；input 与 output 限额独立。

### gemini-3-flash-preview-limits

- 入口：[gemini-3-flash-preview-limits](https://ai.google.dev/gemini-api/docs/models/gemini-3-flash-preview)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：Gemini Developer API 精确模型页；input 与 output 限额独立。

### gemini-2-5-pro-limits

- 入口：[gemini-2-5-pro-limits](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-pro)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：Gemini Developer API 精确模型页；input 与 output 限额独立。

### gemini-2-5-flash-limits

- 入口：[gemini-2-5-flash-limits](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-flash)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：Gemini Developer API 精确模型页；input 与 output 限额独立。

## 已知边界与核验说明

Embedding 2 的最大输入 8192 和推荐维度 768/1536/3072 已再次核对。新 TTS 的输入 8192 与输出 16384 是分别的限制，不用 output<=input 判断错误。新音频协议只有共享规格，不能宣称客户端已适配。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "google",
  "checkedAt": "2026-10-03",
  "sources": [
    {
      "id": "google-models",
      "url": "https://ai.google.dev/gemini-api/docs/models",
      "kind": "official-doc",
      "scope": "本轮读取 google 官方 google-models 页面；按单模型记录限定字段与接入面",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "6e733f05dd42bc5645b98f0c7e882d39992043a01ef70409c4046b44525b0f62",
      "resolvedUrl": "https://ai.google.dev/gemini-api/docs/models"
    },
    {
      "id": "google-embedding",
      "url": "https://ai.google.dev/gemini-api/docs/embeddings",
      "kind": "official-doc",
      "scope": "本轮读取 google 官方 google-embedding 页面；按单模型记录限定字段与接入面",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "8c689e5b0d6efc4877bf8bee2c47d86a6aa95a4759f753f70909b72d7731575d",
      "resolvedUrl": "https://ai.google.dev/gemini-api/docs/embeddings"
    },
    {
      "id": "google-tts",
      "url": "https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash-tts",
      "kind": "official-doc",
      "scope": "本轮读取 google 官方 google-tts 页面；按单模型记录限定字段与接入面",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "85dd9fcd358abbfe7a60eddb2e555bd575e9e67f8619101cc221bdc8dbbb0e96",
      "resolvedUrl": "https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash-tts"
    },
    {
      "id": "google-transcribe",
      "url": "https://ai.google.dev/gemini-api/docs/models/gemini-3.5-transcribe",
      "kind": "official-doc",
      "scope": "本轮读取 google 官方 google-transcribe 页面；按单模型记录限定字段与接入面",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "5bc7197abb570de7d97328156ae6945e5ac2f4bc4f71b25241af356003779b63",
      "resolvedUrl": "https://ai.google.dev/gemini-api/docs/models/gemini-3.5-transcribe"
    },
    {
      "id": "gemini-3-8-flash-limits",
      "url": "https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash",
      "kind": "official-doc",
      "scope": "Gemini Developer API 精确模型页；input 与 output 限额独立",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "501054658f82eef3a1b77fa07dba4f7e9a2707d2e05967edfd5c4f86d9cb8b94",
      "resolvedUrl": "https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash"
    },
    {
      "id": "gemini-3-7-flash-limits",
      "url": "https://ai.google.dev/gemini-api/docs/models/gemini-3.7-flash",
      "kind": "official-doc",
      "scope": "Gemini Developer API 精确模型页；input 与 output 限额独立",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "cbf8b675f6646f7ad9531ded395231116852649da894b9dedfdc443649de2c4c",
      "resolvedUrl": "https://ai.google.dev/gemini-api/docs/models/gemini-3.7-flash"
    },
    {
      "id": "gemini-3-5-flash-lite-limits",
      "url": "https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash-lite",
      "kind": "official-doc",
      "scope": "Gemini Developer API 精确模型页；input 与 output 限额独立",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "f882612c75dc5c05dd3a81731a74619b43ada1f6e0299d78410ef997735e4cdb",
      "resolvedUrl": "https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash-lite"
    },
    {
      "id": "gemini-3-5-flash-limits",
      "url": "https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash",
      "kind": "official-doc",
      "scope": "Gemini Developer API 精确模型页；input 与 output 限额独立",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "9064efb36a594cac683f0bc8e485ef9ed2af6d4819dc4519b371b880e91e05fc",
      "resolvedUrl": "https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash"
    },
    {
      "id": "gemini-3-1-flash-lite-limits",
      "url": "https://ai.google.dev/gemini-api/docs/models/gemini-3.1-flash-lite",
      "kind": "official-doc",
      "scope": "Gemini Developer API 精确模型页；input 与 output 限额独立",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "b3eb09cfc8702dec2304a0040d80da4340afbf9832b5420f7b9fa0b6c6ef629b",
      "resolvedUrl": "https://ai.google.dev/gemini-api/docs/models/gemini-3.1-flash-lite"
    },
    {
      "id": "gemini-3-1-pro-preview-limits",
      "url": "https://ai.google.dev/gemini-api/docs/models/gemini-3.1-pro-preview",
      "kind": "official-doc",
      "scope": "Gemini Developer API 精确模型页；input 与 output 限额独立",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "a23d9b5e92d9bc2f600442b71e564758836c5f6581f447eed9d36e0a83b7e085",
      "resolvedUrl": "https://ai.google.dev/gemini-api/docs/models/gemini-3.1-pro-preview"
    },
    {
      "id": "gemini-3-flash-preview-limits",
      "url": "https://ai.google.dev/gemini-api/docs/models/gemini-3-flash-preview",
      "kind": "official-doc",
      "scope": "Gemini Developer API 精确模型页；input 与 output 限额独立",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "f2dfffd80a12490e9d5955adfd76243802237c118748f6f3aefa05109cab8732",
      "resolvedUrl": "https://ai.google.dev/gemini-api/docs/models/gemini-3-flash-preview"
    },
    {
      "id": "gemini-2-5-pro-limits",
      "url": "https://ai.google.dev/gemini-api/docs/models/gemini-2.5-pro",
      "kind": "official-doc",
      "scope": "Gemini Developer API 精确模型页；input 与 output 限额独立",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "0d16c0b445ced4f8999f6d1013ae2462b4f4415faf4928e3b94fc20e07bab418",
      "resolvedUrl": "https://ai.google.dev/gemini-api/docs/models/gemini-2.5-pro"
    },
    {
      "id": "gemini-2-5-flash-limits",
      "url": "https://ai.google.dev/gemini-api/docs/models/gemini-2.5-flash",
      "kind": "official-doc",
      "scope": "Gemini Developer API 精确模型页；input 与 output 限额独立",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "e362b28bbf49e3baf48f6e8b97dd01c00456c0a23ca0f84badc5f5218eca8679",
      "resolvedUrl": "https://ai.google.dev/gemini-api/docs/models/gemini-2.5-flash"
    }
  ]
}
```
<!-- source-metadata:end -->
