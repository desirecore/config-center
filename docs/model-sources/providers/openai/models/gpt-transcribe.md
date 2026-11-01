# gpt-transcribe：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`gpt-transcribe`。
- 核验日期：2026-11-01；仅下表列出的字段取得官网证明，未进行收费 API 调用。

## 接入合同与核验边界

官网把 `gpt-transcribe` 列为录音转写的推荐模型，`whisper-1`、`gpt-4o-transcribe`、`gpt-4o-mini-transcribe`、`gpt-4o-transcribe-diarize` 已标弃用，2027-02-26 停服。公告的另一个替代项 `gpt-live-transcribe` 面向实时转写，客户端没有对应协议，所以不预置。

`gpt-transcribe` 用 `languages` 数组取代单值 `language`（官网要求不要同时发送），不传语言时自动识别。客户端协议 `openai-audio-transcriptions@1` 只会发 `language`，所以规格声明 `languageHints: false`；是否因此拒绝 `language` 未经账号实测。

`extra.speech` 的协议名和 `inputFormats` 是本仓声明：格式取官网列表与客户端适配器的交集（webm、wav、mp3），`modes` 只写客户端实现的整段识别。官网支持的流式输出和 Realtime 转写，客户端都未接入。价格按音频时长 0.0045 美元/分钟，不是按 token，因此写在 `pricingNotes` 而不是 `inputPrice`。

## 适用接入面

- [compute/providers/openai.json](../access/providers--openai.md)
- [compute/model-specs/openai.json](../access/model-specs--openai.md)

## 字段级来源记录

### compute/providers/openai.json

[查看配置](../../../../../compute/providers/openai.json) · [接入面说明](../access/providers--openai.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/openai.json","id":"gpt-transcribe"} -->
```json
{
  "serviceType": [
    "asr"
  ],
  "capabilities": [
    "asr",
    "multilingual"
  ],
  "extra": {
    "supportedInputFormats": [
      "mp3",
      "mp4",
      "mpeg",
      "mpga",
      "m4a",
      "wav",
      "webm"
    ],
    "streamingSupported": true,
    "pricingNotes": "OpenAI lists this model at $0.0045 per minute of transcription audio."
  }
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/openai.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `gpt-transcribe` | 未声明 / 未声明 | USD：未声明 / 未声明 | `modelName`→[openai-gpt-transcribe](../SOURCES.md#openai-gpt-transcribe)、`extra.supportedInputFormats`→[openai-file-transcription](../SOURCES.md#openai-file-transcription)、`extra.streamingSupported`→[openai-file-transcription](../SOURCES.md#openai-file-transcription)、`extra.pricingNotes`→[openai-gpt-transcribe](../SOURCES.md#openai-gpt-transcribe) | [openai-gpt-transcribe](../SOURCES.md#openai-gpt-transcribe)、[openai-file-transcription](../SOURCES.md#openai-file-transcription) | partial | `ac9eee87ae8991bc9e531ec224877a8a35ebadaf8c8b8087cbf72b273c67a9a5` |

### compute/model-specs/openai.json

[查看配置](../../../../../compute/model-specs/openai.json) · [接入面说明](../access/model-specs--openai.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/openai.json","id":"gpt-transcribe"} -->
```json
{
  "spec": {
    "capabilities": [
      "asr",
      "multilingual"
    ],
    "serviceType": [
      "asr"
    ],
    "description": "OpenAI 推荐的录音转写模型，支持多语言音频，自动识别语言",
    "extra": {
      "modelOrigin": {
        "vendor": "openai",
        "canonicalModelId": "gpt-transcribe",
        "family": "gpt-transcribe"
      },
      "speech": {
        "protocol": "openai-audio-transcriptions",
        "protocolVersion": "1",
        "modes": [
          "batch"
        ],
        "inputFormats": [
          "webm",
          "wav",
          "mp3"
        ],
        "languageHints": false
      }
    }
  }
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/openai.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `gpt-transcribe` | 未声明 / 未声明 | 非计价主数据 | `id`→[openai-gpt-transcribe](../SOURCES.md#openai-gpt-transcribe)、`spec.serviceType`→[openai-gpt-transcribe](../SOURCES.md#openai-gpt-transcribe)、`spec.extra.speech.languageHints`→[openai-file-transcription](../SOURCES.md#openai-file-transcription) | [openai-gpt-transcribe](../SOURCES.md#openai-gpt-transcribe)、[openai-file-transcription](../SOURCES.md#openai-file-transcription)、[openai-audio-transcriptions-api](../SOURCES.md#openai-audio-transcriptions-api) | partial | `ba1582c3e64648f898b5dbe3e4561f2f676f47a36352a2a9e366ea3e8c172dc5` |

## 下次更新核查

- 对照官网核查精确 ID／别名、是否仍列出、音频格式、采样率与语言提示参数。
- 按本接入面核对价格与地域；不能把其他平台参数直接复制。
- 只更新真正复核的字段与引用来源；保留其余待核实项及历史记录。
- 同步对应 canonical JSON、回归和模型指纹，再运行来源校验。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "openai",
  "checkedAt": "2026-11-01",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
