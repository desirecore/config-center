# fun-asr-realtime：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`fun-asr-realtime`（稳定版）。
- 核验日期：2026-11-01；仅下表列出的字段取得官网证明，未进行账号调用。

## 接入合同与核验边界

官网列出 `fun-asr-realtime`（稳定版）与 `fun-asr-realtime-2026-02-28`（最新快照版），音频格式 pcm、wav、mp3、opus、speex、aac、amr。预置只收稳定版；带日期的快照由客户端兼容表按前缀放行。

`extra.speech` 是本仓协议声明，不是官网字段：协议名 `dashscope-websocket-asr` 对应客户端适配器。官网对该模型的采样率不设上限，`sampleRates` 收窄为 16000 是因为适配器按 16 kHz 推流；`inputFormats` 是官网格式与适配器的交集，其中 `webm` 由适配器按 opus 提交。

官网推荐迁移到业务空间专属域名，客户端适配器目前固定连接 `dashscope.aliyuncs.com`，新加坡地域需要另行适配。价格是华北2（北京）的 0.00033 元/秒，新加坡为 0.00066 元/秒，这里只记北京。

## 适用接入面

- [compute/providers/dashscope.json](../access/providers--dashscope.md)
- [compute/model-specs/qwen.json](../access/model-specs--qwen.md)

## 字段级来源记录

### compute/providers/dashscope.json

[查看配置](../../../../../compute/providers/dashscope.json) · [接入面说明](../access/providers--dashscope.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/dashscope.json","id":"fun-asr-realtime"} -->
```json
{
  "serviceType": [
    "asr"
  ],
  "capabilities": [
    "asr",
    "chinese_optimized",
    "multilingual"
  ],
  "extra": {
    "supportedInputFormats": [
      "pcm",
      "wav",
      "mp3",
      "opus",
      "speex",
      "aac",
      "amr"
    ],
    "streamingSupported": true,
    "pricingNotes": "华北2（北京）按输入音频秒数计费 0.00033 元/秒，输出不计费。"
  }
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/dashscope.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `fun-asr-realtime` | 未声明 / 未声明 | CNY：未声明 / 未声明 | `modelName`→[bailian-asr-realtime](../SOURCES.md#bailian-asr-realtime)、`extra.supportedInputFormats`→[bailian-asr-realtime](../SOURCES.md#bailian-asr-realtime)、`extra.streamingSupported`→[bailian-asr-realtime](../SOURCES.md#bailian-asr-realtime)、`extra.pricingNotes`→[bailian-asr-pricing](../SOURCES.md#bailian-asr-pricing) | [bailian-asr-realtime](../SOURCES.md#bailian-asr-realtime)、[bailian-asr-pricing](../SOURCES.md#bailian-asr-pricing) | partial | `0566fb01bd4e9726c4a0b73cabd61ff1309bfcca5f4f45bd2e666d9593f84f0d` |

### compute/model-specs/qwen.json

[查看配置](../../../../../compute/model-specs/qwen.json) · [接入面说明](../access/model-specs--qwen.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/qwen.json","id":"fun-asr-realtime"} -->
```json
{
  "spec": {
    "capabilities": [
      "asr",
      "chinese_optimized",
      "multilingual"
    ],
    "serviceType": [
      "asr"
    ],
    "description": "通义 Fun-ASR 实时语音识别，WebSocket 流式转写",
    "extra": {
      "modelOrigin": {
        "vendor": "alibaba",
        "canonicalModelId": "fun-asr-realtime",
        "family": "fun-asr-realtime"
      },
      "speech": {
        "protocol": "dashscope-websocket-asr",
        "protocolVersion": "1",
        "modes": [
          "batch",
          "streaming"
        ],
        "inputFormats": [
          "webm",
          "wav",
          "pcm",
          "mp3"
        ],
        "sampleRates": [
          16000
        ],
        "languageHints": true
      }
    }
  }
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/qwen.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `fun-asr-realtime` | 未声明 / 未声明 | 非计价主数据 | `id`→[bailian-asr-realtime](../SOURCES.md#bailian-asr-realtime)、`spec.serviceType`→[bailian-asr-realtime](../SOURCES.md#bailian-asr-realtime)、`spec.extra.speech.languageHints`→[bailian-fun-asr-sdk](../SOURCES.md#bailian-fun-asr-sdk) | [bailian-asr-realtime](../SOURCES.md#bailian-asr-realtime)、[bailian-fun-asr-websocket](../SOURCES.md#bailian-fun-asr-websocket)、[bailian-fun-asr-sdk](../SOURCES.md#bailian-fun-asr-sdk) | partial | `9f9699cc8eedda4f555b3460e5c6f50e4dee002b84c0592cb22c172774962d0d` |

## 下次更新核查

- 对照官网核查精确 ID／别名、是否仍列出、音频格式、采样率与语言提示参数。
- 按本接入面核对价格与地域；不能把其他平台参数直接复制。
- 只更新真正复核的字段与引用来源；保留其余待核实项及历史记录。
- 同步对应 canonical JSON、回归和模型指纹，再运行来源校验。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "alibaba",
  "checkedAt": "2026-11-01",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
