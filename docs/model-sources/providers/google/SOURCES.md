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
      "scope": "google 官方入口；具体地域与接入面待该页面逐字段确认",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "4075eec253ae128a90047a245782171c0fa7661547ee57c58d480c5720adbbb6",
      "resolvedUrl": "https://ai.google.dev/gemini-api/docs/models"
    },
    {
      "id": "google-embedding",
      "url": "https://ai.google.dev/gemini-api/docs/embeddings",
      "kind": "official-doc",
      "scope": "Gemini Developer API 原生 Embedding 2；输入限额与输出向量维度",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "a77debcbe84ab080c4e1fa7ca70b34c74f2b9c4dde3bdcfaaed24b8368cf0e82",
      "resolvedUrl": "https://ai.google.dev/gemini-api/docs/embeddings"
    },
    {
      "id": "google-tts",
      "url": "https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash-tts",
      "kind": "official-doc",
      "scope": "Gemini Developer API 原生 TTS；输入和输出分别限额",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "7bd15a9d4430fefb6772aa9a8c9b314aa3be86968e9f6a36743b497eb1bc6d3f",
      "resolvedUrl": "https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash-tts"
    },
    {
      "id": "google-transcribe",
      "url": "https://ai.google.dev/gemini-api/docs/models/gemini-3.5-transcribe",
      "kind": "official-doc",
      "scope": "Gemini Developer API 原生转写，客户端协议适配另核",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "2482c6436e9cae98619b62ecaf291772974f23f22be59dbbf2ecce79dc376983",
      "resolvedUrl": "https://ai.google.dev/gemini-api/docs/models/gemini-3.5-transcribe"
    }
  ]
}
```
<!-- source-metadata:end -->
