# speech-2.8-hd：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`speech-2.8-hd`。
- 核验日期：2026-10-03；本次只迁移记录，没有重新核验或提高状态。
- 2026-11-02 补核语音合成接口、输出格式、采样率与预置音色，只读官网正文，未做账号调用；`speech` 中的协议名与版本号是本仓约定，`defaultVoice` 与音色子集是本仓选择。

## 适用接入面

- [compute/providers/minimax.json](../access/providers--minimax.md)
- [compute/coding-plans/minimax-coding.json](../access/coding-plans--minimax-coding.md)
- [compute/model-specs/minimax.json](../access/model-specs--minimax.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/minimax.json

[查看配置](../../../../../compute/providers/minimax.json) · [接入面说明](../access/providers--minimax.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/minimax.json","id":"speech-2.8-hd"} -->
```json
{
  "serviceType": [
    "tts"
  ],
  "capabilities": [
    "tts",
    "multilingual",
    "emotion_control",
    "voice_clone",
    "chinese_optimized"
  ]
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/minimax.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `speech-2.8-hd` | 未声明 / 未声明 | CNY：未声明 / 未声明 | `modelName`→[minimax-models](../SOURCES.md#minimax-models) | [minimax-models](../SOURCES.md#minimax-models) | partial | `a3e49abfd1ecdb1dbbe91ceb8735240b573efae1e09ecdf1af7cb52ab10442c5` |

### compute/coding-plans/minimax-coding.json

[查看配置](../../../../../compute/coding-plans/minimax-coding.json) · [接入面说明](../access/coding-plans--minimax-coding.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/coding-plans/minimax-coding.json","id":"speech-2.8-hd"} -->
```json
{
  "serviceType": [
    "tts"
  ],
  "capabilities": [
    "tts",
    "multilingual",
    "emotion_control",
    "voice_clone"
  ]
}
```
<!-- source-details:end -->

<!-- source-config: compute/coding-plans/minimax-coding.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `speech-2.8-hd` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | `modelName`→[minimax-models](../SOURCES.md#minimax-models) | [minimax-models](../SOURCES.md#minimax-models) | partial | `925434054404483c427688a95dd87f5dc1222d28690ede4c6daa29ab83ad61b5` |

### compute/model-specs/minimax.json

[查看配置](../../../../../compute/model-specs/minimax.json) · [接入面说明](../access/model-specs--minimax.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/minimax.json","id":"speech-2.8-hd"} -->
```json
{
  "spec.serviceType": [
    "tts"
  ],
  "spec.capabilities": [
    "tts",
    "multilingual",
    "emotion_control",
    "voice_clone",
    "chinese_optimized"
  ],
  "spec.extra.modelOrigin": {
    "vendor": "minimax",
    "canonicalModelId": "speech-2.8-hd",
    "family": "minimax-speech"
  },
  "spec.extra.speech": {
    "protocol": "minimax-t2a-http",
    "protocolVersion": "1",
    "modes": [
      "batch",
      "streaming"
    ],
    "outputFormats": [
      "pcm16le",
      "mp3",
      "wav",
      "flac"
    ],
    "sampleRates": [
      8000,
      16000,
      22050,
      24000,
      32000,
      44100
    ],
    "defaultVoice": "female-shaonv",
    "voices": [
      {
        "id": "female-shaonv",
        "label": "少女音色"
      },
      {
        "id": "female-yujie",
        "label": "御姐音色"
      },
      {
        "id": "female-chengshu",
        "label": "成熟女性音色"
      },
      {
        "id": "female-tianmei",
        "label": "甜美女性音色"
      },
      {
        "id": "male-qn-qingse",
        "label": "青涩青年音色"
      },
      {
        "id": "male-qn-jingying",
        "label": "精英青年音色"
      },
      {
        "id": "male-qn-badao",
        "label": "霸道青年音色"
      },
      {
        "id": "male-qn-daxuesheng",
        "label": "青年大学生音色"
      },
      {
        "id": "Chinese (Mandarin)_News_Anchor",
        "label": "新闻女声"
      },
      {
        "id": "Chinese (Mandarin)_Male_Announcer",
        "label": "播报男声"
      },
      {
        "id": "Chinese (Mandarin)_Sweet_Lady",
        "label": "甜美女声"
      },
      {
        "id": "Chinese (Mandarin)_Gentleman",
        "label": "温润男声"
      },
      {
        "id": "Chinese (Mandarin)_Warm_Girl",
        "label": "温暖少女"
      },
      {
        "id": "Chinese (Mandarin)_Radio_Host",
        "label": "电台男主播"
      },
      {
        "id": "English_Graceful_Lady",
        "label": "Graceful Lady"
      },
      {
        "id": "English_Trustworthy_Man",
        "label": "Trustworthy Man"
      }
    ]
  }
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/minimax.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `speech-2.8-hd` | 未声明 / 未声明 | 非计价主数据 | `id`→[minimax-models](../SOURCES.md#minimax-models)、`spec.extra.speech.outputFormats`→[minimax-t2a-http](../SOURCES.md#minimax-t2a-http)、`spec.extra.speech.sampleRates`→[minimax-t2a-http](../SOURCES.md#minimax-t2a-http)、`spec.extra.speech.voices`→[minimax-system-voices](../SOURCES.md#minimax-system-voices) | [minimax-models](../SOURCES.md#minimax-models)、[minimax-t2a-http](../SOURCES.md#minimax-t2a-http)、[minimax-system-voices](../SOURCES.md#minimax-system-voices) | partial | `fba35f56527d531ca68d5b094d3912b2b901eeca0ec8454bfd9dfb6c324c6788` |

## 下次更新核查

- 对照官网核查精确 ID／别名、是否仍列出、上下文／输入／输出限制及单位。
- 分别核查推理档位、默认值、是否可关闭思考、采样和强制工具选择限制、多模态输入／输出。
- 按本接入面核对价格、缓存、阶梯／峰谷、套餐支持；不能把其他平台参数直接复制。
- 只更新真正复核的字段与引用来源；保留其余待核实项及历史记录。
- 同步对应 canonical JSON、回归和模型指纹，再运行来源校验。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "minimax",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
