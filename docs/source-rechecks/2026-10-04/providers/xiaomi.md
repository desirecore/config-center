# xiaomi：2026-10-04来源重核候选

覆盖25条精确模型/接入记录；来源读取4/5可读。核查时间以本轮日期记录，不刷新原核验状态。

本轮只保存核查候选，未更改canonical、既有来源核验状态、指纹或manifest；可读正文和ID存在不是全参数/账号验收。

## 实际来源与读取边界

### xiaomi

- 摘要语义：`sha256-utf8-decoded-response-body`；获取方法：urllib.request HTTPS response read; bytes decoded as UTF-8 with replacement, SHA-256 over decoded text re-encoded as UTF-8 before visible-text extraction; full HTML/Markdown/JSON body, not a raw-byte digest or vendor signature。

- URL：[https://mimo.mi.com/docs/en-US/news/latest/v2-6](https://mimo.mi.com/docs/en-US/news/latest/v2-6)；最终地址：[https://mimo.mi.com/docs/en-US/news/latest/v2-6](https://mimo.mi.com/docs/en-US/news/latest/v2-6)。
- 发布者：xiaomi；类别：`official-docs`；读取：`readable`。
- 范围：只适用于页面明确的原厂/地域/接入，套餐和聚合合同独立。
- 本轮结果：实际读取155672字符，可见正文17487字符；需逐精确ID定位，HTTP成功不代表字段已证。

### xiaomi-models

- 摘要语义：`sha256-utf8-decoded-response-body`；获取方法：urllib.request HTTPS response read; bytes decoded as UTF-8 with replacement, SHA-256 over decoded text re-encoded as UTF-8 before visible-text extraction; full HTML/Markdown/JSON body, not a raw-byte digest or vendor signature。

- URL：[https://mimo.mi.com/docs/en-US/quick-start/summary/model](https://mimo.mi.com/docs/en-US/quick-start/summary/model)；最终地址：[https://mimo.mi.com/docs/en-US/quick-start/summary/model](https://mimo.mi.com/docs/en-US/quick-start/summary/model)。
- 发布者：xiaomi；类别：`official-docs`；读取：`readable`。
- 范围：只适用于页面明确的原厂/地域/接入，套餐和聚合合同独立。
- 本轮结果：实际读取155018字符，可见正文4804字符；需逐精确ID定位，HTTP成功不代表字段已证。

### xiaomi-price

- 摘要语义：`sha256-utf8-decoded-response-body`；获取方法：urllib.request HTTPS response read; bytes decoded as UTF-8 with replacement, SHA-256 over decoded text re-encoded as UTF-8 before visible-text extraction; full HTML/Markdown/JSON body, not a raw-byte digest or vendor signature。

- URL：[https://mimo.mi.com/docs/en-US/price/pay-as-you-go](https://mimo.mi.com/docs/en-US/price/pay-as-you-go)；最终地址：[https://mimo.mi.com/docs/en-US/price/pay-as-you-go](https://mimo.mi.com/docs/en-US/price/pay-as-you-go)。
- 发布者：xiaomi；类别：`official-docs`；读取：`readable`。
- 范围：只适用于页面明确的原厂/地域/接入，套餐和聚合合同独立。
- 本轮结果：实际读取138065字符，可见正文4075字符；需逐精确ID定位，HTTP成功不代表字段已证。

### xiaomi-plan

- 摘要语义：`sha256-utf8-decoded-response-body`；获取方法：urllib.request HTTPS response read; bytes decoded as UTF-8 with replacement, SHA-256 over decoded text re-encoded as UTF-8 before visible-text extraction; full HTML/Markdown/JSON body, not a raw-byte digest or vendor signature。

- URL：[https://mimo.mi.com/docs/en-US/tokenplan/Token%20Plan/subscription](https://mimo.mi.com/docs/en-US/tokenplan/Token%20Plan/subscription)；最终地址：[https://mimo.mi.com/docs/en-US/tokenplan/Token%20Plan/subscription](https://mimo.mi.com/docs/en-US/tokenplan/Token%20Plan/subscription)。
- 发布者：xiaomi；类别：`official-docs`；读取：`readable`。
- 范围：只适用于页面明确的原厂/地域/接入，套餐和聚合合同独立。
- 本轮结果：实际读取155214字符，可见正文10729字符；需逐精确ID定位，HTTP成功不代表字段已证。

### xiaomi-llms

- 摘要语义：`sha256-utf8-decoded-response-body`；获取方法：urllib.request HTTPS response read; bytes decoded as UTF-8 with replacement, SHA-256 over decoded text re-encoded as UTF-8 before visible-text extraction; full HTML/Markdown/JSON body, not a raw-byte digest or vendor signature。

- URL：[https://mimo.mi.com/docs/llms.txt](https://mimo.mi.com/docs/llms.txt)；最终地址：[https://mimo.mi.com/docs/llms.txt](https://mimo.mi.com/docs/llms.txt)。
- 发布者：xiaomi；类别：`official-docs`；读取：`blocked`。
- 范围：只适用于页面明确的原厂/地域/接入，套餐和聚合合同独立。
- 本轮结果：实际读取12723字符，可见正文18字符；需逐精确ID定位，HTTP成功不代表字段已证。

## 逐模型、逐接入记录

### `compute/model-specs/xiaomi.json#mimo-v2-flash`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/xiaomi/models/mimo-v2-flash.md)；本轮结论：`still-unresolved`；原状态 `pending` 保持。
- 本轮来源：`xiaomi`、`xiaomi-models`、`xiaomi-price`、`xiaomi-plan`、`xiaomi-llms`。

未取得该精确型号可用的字段证明，未使用同代/同名其他接入参数补数。

- 仍需核实：`id`、`spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.supportsReasoning`、`spec.capabilities`、`spec.serviceType`。
- 边界：当前支持模型目录未定位该精确旧/预览名称；名称缺失不证明退役或对应新版本，不把mimo-v2与mimo-v2.5及MiMo-X混成alias。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/model-specs/xiaomi.json#mimo-v2-omni`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/xiaomi/models/mimo-v2-omni.md)；本轮结论：`still-unresolved`；原状态 `pending` 保持。
- 本轮来源：`xiaomi`、`xiaomi-models`、`xiaomi-price`、`xiaomi-plan`、`xiaomi-llms`。

未取得该精确型号可用的字段证明，未使用同代/同名其他接入参数补数。

- 仍需核实：`id`、`spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.supportsReasoning`、`spec.capabilities`、`spec.serviceType`。
- 边界：当前支持模型目录未定位该精确旧/预览名称；名称缺失不证明退役或对应新版本，不把mimo-v2与mimo-v2.5及MiMo-X混成alias。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/model-specs/xiaomi.json#mimo-v2-pro`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/xiaomi/models/mimo-v2-pro.md)；本轮结论：`still-unresolved`；原状态 `pending` 保持。
- 本轮来源：`xiaomi`、`xiaomi-models`、`xiaomi-price`、`xiaomi-plan`、`xiaomi-llms`。

未取得该精确型号可用的字段证明，未使用同代/同名其他接入参数补数。

- 仍需核实：`id`、`spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.supportsReasoning`、`spec.capabilities`、`spec.serviceType`。
- 边界：当前支持模型目录未定位该精确旧/预览名称；名称缺失不证明退役或对应新版本，不把mimo-v2与mimo-v2.5及MiMo-X混成alias。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/model-specs/xiaomi.json#mimo-v2-tts`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/xiaomi/models/mimo-v2-tts.md)；本轮结论：`still-unresolved`；原状态 `pending` 保持。
- 本轮来源：`xiaomi`、`xiaomi-models`、`xiaomi-price`、`xiaomi-plan`、`xiaomi-llms`。

未取得该精确型号可用的字段证明，未使用同代/同名其他接入参数补数。

- 仍需核实：`id`、`spec.contextWindow`、`spec.capabilities`、`spec.serviceType`。
- 边界：当前支持模型目录未定位该精确旧/预览名称；名称缺失不证明退役或对应新版本，不把mimo-v2与mimo-v2.5及MiMo-X混成alias。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/providers/xiaomi.json#mimo-v2.5-asr`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/xiaomi/models/mimo-v2.5-asr.md)；本轮结论：`official-identity-only`；原状态 `partial` 保持。
- 本轮来源：`xiaomi-models`、`xiaomi-price`。

| 字段 | 当前值 | 官网候选值 | 判定 | 来源及解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"mimo-v2.5-asr"` | `"mimo-v2.5-asr"` | matches | `xiaomi-models`：本轮正文定位精确标识；只确认该标识在其来源合同出现，不证明其他字段或不同套餐可用性。 |
| `contextWindow` | `8192` | `"8k"` | not-comparable | `xiaomi-models`：当前精确型号表使用K/M长度简写；未将简写自动转成已核整数。 |
| `maxOutputTokens` | `2048` | `"2k"` | not-comparable | `xiaomi-models`：最大输出表仅给K值；voiceclone/voicedesign共用TTS系列合并格，其单独限制仍待确认。 |

- 仍需核实：`capabilities`、`serviceType`、`access.maxInputTokens`、`access.protocol-readiness`。
- 边界：ASR按输入音频时长计费，国内0.5元/小时、海外0.074美元/小时；不能写成token inputPrice。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/model-specs/xiaomi.json#mimo-v2.5-asr`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/xiaomi/models/mimo-v2.5-asr.md)；本轮结论：`official-identity-only`；原状态 `partial` 保持。
- 本轮来源：`xiaomi-models`、`xiaomi-price`。

| 字段 | 当前值 | 官网候选值 | 判定 | 来源及解释 |
| --- | --- | --- | --- | --- |
| `id` | `"mimo-v2.5-asr"` | `"mimo-v2.5-asr"` | matches | `xiaomi-models`：本轮正文定位精确标识；只确认该标识在其来源合同出现，不证明其他字段或不同套餐可用性。 |
| `spec.contextWindow` | `8192` | `"8k"` | not-comparable | `xiaomi-models`：当前精确型号表使用K/M长度简写；未将简写自动转成已核整数。 |
| `spec.maxOutputTokens` | `2048` | `"2k"` | not-comparable | `xiaomi-models`：最大输出表仅给K值；voiceclone/voicedesign共用TTS系列合并格，其单独限制仍待确认。 |

- 仍需核实：`spec.capabilities`、`spec.serviceType`。
- 边界：ASR按输入音频时长计费，国内0.5元/小时、海外0.074美元/小时；不能写成token inputPrice。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/providers/xiaomi.json#mimo-v2.5-pro`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/xiaomi/models/mimo-v2.5-pro.md)；本轮结论：`official-fields-found`；原状态 `partial` 保持。
- 本轮来源：`xiaomi-models`、`xiaomi-price`。

| 字段 | 当前值 | 官网候选值 | 判定 | 来源及解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"mimo-v2.5-pro"` | `"mimo-v2.5-pro"` | matches | `xiaomi-models`：本轮正文定位精确标识；只确认该标识在其来源合同出现，不证明其他字段或不同套餐可用性。 |
| `contextWindow` | `1000000` | `"1M"` | not-comparable | `xiaomi-models`：当前精确型号表使用K/M长度简写；未将简写自动转成已核整数。 |
| `maxOutputTokens` | `131072` | `"128K"` | not-comparable | `xiaomi-models`：最大输出表仅给K值；voiceclone/voicedesign共用TTS系列合并格，其单独限制仍待确认。 |
| `inputPrice` | `3` | `3` | matches | `xiaomi-price`：国内实时API CNY/百万token，非Batch/海外价格，Token Plan不可沿用。 |
| `outputPrice` | `6` | `6` | matches | `xiaomi-price`：国内实时API CNY/百万token，非Batch/海外价格，Token Plan不可沿用。 |
| `extra.cachedInputPrice` | `0.025` | `0.025` | matches | `xiaomi-price`：国内实时API CNY/百万token，非Batch/海外价格，Token Plan不可沿用。 |

- 仍需核实：`capabilities`、`serviceType`、`access.maxInputTokens`、`access.protocol-readiness`。
- 边界：官网明确2026-10-21北京时间10:00停止旧型号，当前2026-10-04尚未到期，不能提前下架；需时区精确门控。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/model-specs/xiaomi.json#mimo-v2.5-pro`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/xiaomi/models/mimo-v2.5-pro.md)；本轮结论：`official-identity-only`；原状态 `partial` 保持。
- 本轮来源：`xiaomi-models`。

| 字段 | 当前值 | 官网候选值 | 判定 | 来源及解释 |
| --- | --- | --- | --- | --- |
| `id` | `"mimo-v2.5-pro"` | `"mimo-v2.5-pro"` | matches | `xiaomi-models`：本轮正文定位精确标识；只确认该标识在其来源合同出现，不证明其他字段或不同套餐可用性。 |
| `spec.contextWindow` | `1000000` | `"1M"` | not-comparable | `xiaomi-models`：当前精确型号表使用K/M长度简写；未将简写自动转成已核整数。 |
| `spec.maxOutputTokens` | `131072` | `"128K"` | not-comparable | `xiaomi-models`：最大输出表仅给K值；voiceclone/voicedesign共用TTS系列合并格，其单独限制仍待确认。 |

- 仍需核实：`spec.defaultTemperature`、`spec.supportsReasoning`、`spec.capabilities`、`spec.serviceType`。
- 边界：官网明确2026-10-21北京时间10:00停止旧型号，当前2026-10-04尚未到期，不能提前下架；需时区精确门控。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/providers/xiaomi.json#mimo-v2.5-tts-voiceclone`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/xiaomi/models/mimo-v2.5-tts-voiceclone.md)；本轮结论：`official-identity-only`；原状态 `partial` 保持。
- 本轮来源：`xiaomi-models`、`xiaomi-price`。

| 字段 | 当前值 | 官网候选值 | 判定 | 来源及解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"mimo-v2.5-tts-voiceclone"` | `"mimo-v2.5-tts-voiceclone"` | matches | `xiaomi-models`：本轮正文定位精确标识；只确认该标识在其来源合同出现，不证明其他字段或不同套餐可用性。 |
| `contextWindow` | `null` | `"8K"` | not-comparable | `xiaomi-models`：当前精确型号表使用K/M长度简写；未将简写自动转成已核整数。 |
| `maxOutputTokens` | `null` | `"8K"` | not-comparable | `xiaomi-models`：最大输出表仅给K值；voiceclone/voicedesign共用TTS系列合并格，其单独限制仍待确认。 |

- 仍需核实：`capabilities`、`serviceType`、`access.maxInputTokens`、`access.protocol-readiness`。
- 边界：TTS价签限时免费，不代表永久0；必须保留限时范围。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/model-specs/xiaomi.json#mimo-v2.5-tts-voiceclone`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/xiaomi/models/mimo-v2.5-tts-voiceclone.md)；本轮结论：`official-identity-only`；原状态 `partial` 保持。
- 本轮来源：`xiaomi-models`、`xiaomi-price`。

| 字段 | 当前值 | 官网候选值 | 判定 | 来源及解释 |
| --- | --- | --- | --- | --- |
| `id` | `"mimo-v2.5-tts-voiceclone"` | `"mimo-v2.5-tts-voiceclone"` | matches | `xiaomi-models`：本轮正文定位精确标识；只确认该标识在其来源合同出现，不证明其他字段或不同套餐可用性。 |
| `spec.contextWindow` | `8192` | `"8K"` | not-comparable | `xiaomi-models`：当前精确型号表使用K/M长度简写；未将简写自动转成已核整数。 |
| `spec.maxOutputTokens` | `null` | `"8K"` | not-comparable | `xiaomi-models`：最大输出表仅给K值；voiceclone/voicedesign共用TTS系列合并格，其单独限制仍待确认。 |

- 仍需核实：`spec.contextWindow`、`spec.capabilities`、`spec.serviceType`。
- 边界：TTS价签限时免费，不代表永久0；必须保留限时范围。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/providers/xiaomi.json#mimo-v2.5-tts-voicedesign`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/xiaomi/models/mimo-v2.5-tts-voicedesign.md)；本轮结论：`official-identity-only`；原状态 `partial` 保持。
- 本轮来源：`xiaomi-models`、`xiaomi-price`。

| 字段 | 当前值 | 官网候选值 | 判定 | 来源及解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"mimo-v2.5-tts-voicedesign"` | `"mimo-v2.5-tts-voicedesign"` | matches | `xiaomi-models`：本轮正文定位精确标识；只确认该标识在其来源合同出现，不证明其他字段或不同套餐可用性。 |
| `contextWindow` | `null` | `"8K"` | not-comparable | `xiaomi-models`：当前精确型号表使用K/M长度简写；未将简写自动转成已核整数。 |
| `maxOutputTokens` | `null` | `"8K"` | not-comparable | `xiaomi-models`：最大输出表仅给K值；voiceclone/voicedesign共用TTS系列合并格，其单独限制仍待确认。 |

- 仍需核实：`capabilities`、`serviceType`、`access.maxInputTokens`、`access.protocol-readiness`。
- 边界：TTS价签限时免费，不代表永久0；必须保留限时范围。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/model-specs/xiaomi.json#mimo-v2.5-tts-voicedesign`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/xiaomi/models/mimo-v2.5-tts-voicedesign.md)；本轮结论：`official-identity-only`；原状态 `partial` 保持。
- 本轮来源：`xiaomi-models`、`xiaomi-price`。

| 字段 | 当前值 | 官网候选值 | 判定 | 来源及解释 |
| --- | --- | --- | --- | --- |
| `id` | `"mimo-v2.5-tts-voicedesign"` | `"mimo-v2.5-tts-voicedesign"` | matches | `xiaomi-models`：本轮正文定位精确标识；只确认该标识在其来源合同出现，不证明其他字段或不同套餐可用性。 |
| `spec.contextWindow` | `8192` | `"8K"` | not-comparable | `xiaomi-models`：当前精确型号表使用K/M长度简写；未将简写自动转成已核整数。 |
| `spec.maxOutputTokens` | `null` | `"8K"` | not-comparable | `xiaomi-models`：最大输出表仅给K值；voiceclone/voicedesign共用TTS系列合并格，其单独限制仍待确认。 |

- 仍需核实：`spec.contextWindow`、`spec.capabilities`、`spec.serviceType`。
- 边界：TTS价签限时免费，不代表永久0；必须保留限时范围。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/providers/xiaomi.json#mimo-v2.5-tts`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/xiaomi/models/mimo-v2.5-tts.md)；本轮结论：`official-identity-only`；原状态 `partial` 保持。
- 本轮来源：`xiaomi-models`、`xiaomi-price`。

| 字段 | 当前值 | 官网候选值 | 判定 | 来源及解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"mimo-v2.5-tts"` | `"mimo-v2.5-tts"` | matches | `xiaomi-models`：本轮正文定位精确标识；只确认该标识在其来源合同出现，不证明其他字段或不同套餐可用性。 |
| `contextWindow` | `null` | `"8K"` | not-comparable | `xiaomi-models`：当前精确型号表使用K/M长度简写；未将简写自动转成已核整数。 |
| `maxOutputTokens` | `null` | `"8K"` | not-comparable | `xiaomi-models`：最大输出表仅给K值；voiceclone/voicedesign共用TTS系列合并格，其单独限制仍待确认。 |

- 仍需核实：`capabilities`、`serviceType`、`access.maxInputTokens`、`access.protocol-readiness`。
- 边界：TTS价签限时免费，不代表永久0；必须保留限时范围。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/model-specs/xiaomi.json#mimo-v2.5-tts`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/xiaomi/models/mimo-v2.5-tts.md)；本轮结论：`official-identity-only`；原状态 `partial` 保持。
- 本轮来源：`xiaomi-models`、`xiaomi-price`。

| 字段 | 当前值 | 官网候选值 | 判定 | 来源及解释 |
| --- | --- | --- | --- | --- |
| `id` | `"mimo-v2.5-tts"` | `"mimo-v2.5-tts"` | matches | `xiaomi-models`：本轮正文定位精确标识；只确认该标识在其来源合同出现，不证明其他字段或不同套餐可用性。 |
| `spec.contextWindow` | `8192` | `"8K"` | not-comparable | `xiaomi-models`：当前精确型号表使用K/M长度简写；未将简写自动转成已核整数。 |
| `spec.maxOutputTokens` | `8192` | `"8K"` | not-comparable | `xiaomi-models`：最大输出表仅给K值；voiceclone/voicedesign共用TTS系列合并格，其单独限制仍待确认。 |

- 仍需核实：`spec.contextWindow`、`spec.maxOutputTokens`、`spec.capabilities`、`spec.serviceType`。
- 边界：TTS价签限时免费，不代表永久0；必须保留限时范围。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/model-specs/xiaomi.json#mimo-v2.5`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/xiaomi/models/mimo-v2.5.md)；本轮结论：`official-identity-only`；原状态 `partial` 保持。
- 本轮来源：`xiaomi-models`。

| 字段 | 当前值 | 官网候选值 | 判定 | 来源及解释 |
| --- | --- | --- | --- | --- |
| `id` | `"mimo-v2.5"` | `"mimo-v2.5"` | matches | `xiaomi-models`：本轮正文定位精确标识；只确认该标识在其来源合同出现，不证明其他字段或不同套餐可用性。 |
| `spec.contextWindow` | `1000000` | `"1M"` | not-comparable | `xiaomi-models`：当前精确型号表使用K/M长度简写；未将简写自动转成已核整数。 |
| `spec.maxOutputTokens` | `131072` | `"128K"` | not-comparable | `xiaomi-models`：最大输出表仅给K值；voiceclone/voicedesign共用TTS系列合并格，其单独限制仍待确认。 |

- 仍需核实：`spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.supportsReasoning`、`spec.capabilities`、`spec.serviceType`。
- 边界：官网明确2026-10-21北京时间10:00停止旧型号，当前2026-10-04尚未到期，不能提前下架；需时区精确门控。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/providers/xiaomi.json#mimo-v2.6-flash`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/xiaomi/models/mimo-v2.6-flash.md)；本轮结论：`official-fields-found`；原状态 `partial` 保持。
- 本轮来源：`xiaomi`、`xiaomi-models`、`xiaomi-price`。

| 字段 | 当前值 | 官网候选值 | 判定 | 来源及解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"mimo-v2.6-flash"` | `"mimo-v2.6-flash"` | matches | `xiaomi`：本轮正文定位精确标识；只确认该标识在其来源合同出现，不证明其他字段或不同套餐可用性。 |
| `contextWindow` | `1000000` | `"1M"` | not-comparable | `xiaomi-models`：当前精确型号表使用K/M长度简写；未将简写自动转成已核整数。 |
| `maxOutputTokens` | `131072` | `"128K"` | not-comparable | `xiaomi-models`：最大输出表仅给K值；voiceclone/voicedesign共用TTS系列合并格，其单独限制仍待确认。 |
| `inputPrice` | `1` | `1` | matches | `xiaomi-price`：国内实时API CNY/百万token，非Batch/海外价格，Token Plan不可沿用。 |
| `outputPrice` | `2` | `2` | matches | `xiaomi-price`：国内实时API CNY/百万token，非Batch/海外价格，Token Plan不可沿用。 |
| `extra.cachedInputPrice` | `0.02` | `0.02` | matches | `xiaomi-price`：国内实时API CNY/百万token，非Batch/海外价格，Token Plan不可沿用。 |

- 仍需核实：`capabilities`、`serviceType`、`access.maxInputTokens`、`access.protocol-readiness`。
- 边界：本轮未在可读页面定位完整精确型号合同；缺失不判定停服。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/model-specs/xiaomi.json#mimo-v2.6-flash`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/xiaomi/models/mimo-v2.6-flash.md)；本轮结论：`official-identity-only`；原状态 `partial` 保持。
- 本轮来源：`xiaomi`、`xiaomi-models`。

| 字段 | 当前值 | 官网候选值 | 判定 | 来源及解释 |
| --- | --- | --- | --- | --- |
| `id` | `"mimo-v2.6-flash"` | `"mimo-v2.6-flash"` | matches | `xiaomi`：本轮正文定位精确标识；只确认该标识在其来源合同出现，不证明其他字段或不同套餐可用性。 |
| `spec.contextWindow` | `1000000` | `"1M"` | not-comparable | `xiaomi-models`：当前精确型号表使用K/M长度简写；未将简写自动转成已核整数。 |
| `spec.maxOutputTokens` | `131072` | `"128K"` | not-comparable | `xiaomi-models`：最大输出表仅给K值；voiceclone/voicedesign共用TTS系列合并格，其单独限制仍待确认。 |

- 仍需核实：`spec.supportsReasoning`、`spec.capabilities`、`spec.serviceType`。
- 边界：本轮未在可读页面定位完整精确型号合同；缺失不判定停服。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/providers/xiaomi.json#mimo-v2.6-pro-ultraspeed`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/xiaomi/models/mimo-v2.6-pro-ultraspeed.md)；本轮结论：`official-fields-found`；原状态 `partial` 保持。
- 本轮来源：`xiaomi-models`、`xiaomi-price`。

| 字段 | 当前值 | 官网候选值 | 判定 | 来源及解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"mimo-v2.6-pro-ultraspeed"` | `"mimo-v2.6-pro-ultraspeed"` | matches | `xiaomi-models`：本轮正文定位精确标识；只确认该标识在其来源合同出现，不证明其他字段或不同套餐可用性。 |
| `contextWindow` | `1000000` | `"1M"` | not-comparable | `xiaomi-models`：当前精确型号表使用K/M长度简写；未将简写自动转成已核整数。 |
| `maxOutputTokens` | `131072` | `"128K"` | not-comparable | `xiaomi-models`：最大输出表仅给K值；voiceclone/voicedesign共用TTS系列合并格，其单独限制仍待确认。 |
| `inputPrice` | `30` | `30` | matches | `xiaomi-price`：国内实时API CNY/百万token，非Batch/海外价格，Token Plan不可沿用。 |
| `outputPrice` | `60` | `60` | matches | `xiaomi-price`：国内实时API CNY/百万token，非Batch/海外价格，Token Plan不可沿用。 |
| `extra.cachedInputPrice` | `0.25` | `0.25` | matches | `xiaomi-price`：国内实时API CNY/百万token，非Batch/海外价格，Token Plan不可沿用。 |

- 仍需核实：`capabilities`、`serviceType`、`access.maxInputTokens`、`access.protocol-readiness`。
- 边界：本轮未在可读页面定位完整精确型号合同；缺失不判定停服。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/model-specs/xiaomi.json#mimo-v2.6-pro-ultraspeed`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/xiaomi/models/mimo-v2.6-pro-ultraspeed.md)；本轮结论：`official-identity-only`；原状态 `partial` 保持。
- 本轮来源：`xiaomi-models`。

| 字段 | 当前值 | 官网候选值 | 判定 | 来源及解释 |
| --- | --- | --- | --- | --- |
| `id` | `"mimo-v2.6-pro-ultraspeed"` | `"mimo-v2.6-pro-ultraspeed"` | matches | `xiaomi-models`：本轮正文定位精确标识；只确认该标识在其来源合同出现，不证明其他字段或不同套餐可用性。 |
| `spec.contextWindow` | `1000000` | `"1M"` | not-comparable | `xiaomi-models`：当前精确型号表使用K/M长度简写；未将简写自动转成已核整数。 |
| `spec.maxOutputTokens` | `131072` | `"128K"` | not-comparable | `xiaomi-models`：最大输出表仅给K值；voiceclone/voicedesign共用TTS系列合并格，其单独限制仍待确认。 |

- 仍需核实：`spec.supportsReasoning`、`spec.capabilities`、`spec.serviceType`。
- 边界：本轮未在可读页面定位完整精确型号合同；缺失不判定停服。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/providers/xiaomi.json#mimo-v2.6-pro`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/xiaomi/models/mimo-v2.6-pro.md)；本轮结论：`official-fields-found`；原状态 `partial` 保持。
- 本轮来源：`xiaomi`、`xiaomi-models`、`xiaomi-price`。

| 字段 | 当前值 | 官网候选值 | 判定 | 来源及解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"mimo-v2.6-pro"` | `"mimo-v2.6-pro"` | matches | `xiaomi`：本轮正文定位精确标识；只确认该标识在其来源合同出现，不证明其他字段或不同套餐可用性。 |
| `contextWindow` | `1000000` | `"1M"` | not-comparable | `xiaomi-models`：当前精确型号表使用K/M长度简写；未将简写自动转成已核整数。 |
| `maxOutputTokens` | `131072` | `"128K"` | not-comparable | `xiaomi-models`：最大输出表仅给K值；voiceclone/voicedesign共用TTS系列合并格，其单独限制仍待确认。 |
| `inputPrice` | `3` | `3` | matches | `xiaomi-price`：国内实时API CNY/百万token，非Batch/海外价格，Token Plan不可沿用。 |
| `outputPrice` | `6` | `6` | matches | `xiaomi-price`：国内实时API CNY/百万token，非Batch/海外价格，Token Plan不可沿用。 |
| `extra.cachedInputPrice` | `0.025` | `0.025` | matches | `xiaomi-price`：国内实时API CNY/百万token，非Batch/海外价格，Token Plan不可沿用。 |

- 仍需核实：`capabilities`、`serviceType`、`access.maxInputTokens`、`access.protocol-readiness`。
- 边界：本轮未在可读页面定位完整精确型号合同；缺失不判定停服。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/model-specs/xiaomi.json#mimo-v2.6-pro`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/xiaomi/models/mimo-v2.6-pro.md)；本轮结论：`official-identity-only`；原状态 `partial` 保持。
- 本轮来源：`xiaomi`、`xiaomi-models`。

| 字段 | 当前值 | 官网候选值 | 判定 | 来源及解释 |
| --- | --- | --- | --- | --- |
| `id` | `"mimo-v2.6-pro"` | `"mimo-v2.6-pro"` | matches | `xiaomi`：本轮正文定位精确标识；只确认该标识在其来源合同出现，不证明其他字段或不同套餐可用性。 |
| `spec.contextWindow` | `1000000` | `"1M"` | not-comparable | `xiaomi-models`：当前精确型号表使用K/M长度简写；未将简写自动转成已核整数。 |
| `spec.maxOutputTokens` | `131072` | `"128K"` | not-comparable | `xiaomi-models`：最大输出表仅给K值；voiceclone/voicedesign共用TTS系列合并格，其单独限制仍待确认。 |

- 仍需核实：`spec.supportsReasoning`、`spec.capabilities`、`spec.serviceType`。
- 边界：本轮未在可读页面定位完整精确型号合同；缺失不判定停服。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/providers/xiaomi.json#mimo-x-flash-preview`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/xiaomi/models/mimo-x-flash-preview.md)；本轮结论：`still-unresolved`；原状态 `pending` 保持。
- 本轮来源：`xiaomi`、`xiaomi-models`、`xiaomi-price`、`xiaomi-plan`、`xiaomi-llms`。

未取得该精确型号可用的字段证明，未使用同代/同名其他接入参数补数。

- 仍需核实：`contextWindow`、`modelName`、`capabilities`、`serviceType`、`access.maxInputTokens`、`access.protocol-readiness`。
- 边界：当前支持模型目录未定位该精确旧/预览名称；名称缺失不证明退役或对应新版本，不把mimo-v2与mimo-v2.5及MiMo-X混成alias。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/model-specs/xiaomi.json#mimo-x-flash-preview`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/xiaomi/models/mimo-x-flash-preview.md)；本轮结论：`still-unresolved`；原状态 `pending` 保持。
- 本轮来源：`xiaomi`、`xiaomi-models`、`xiaomi-price`、`xiaomi-plan`、`xiaomi-llms`。

未取得该精确型号可用的字段证明，未使用同代/同名其他接入参数补数。

- 仍需核实：`id`、`spec.contextWindow`、`spec.capabilities`、`spec.serviceType`。
- 边界：当前支持模型目录未定位该精确旧/预览名称；名称缺失不证明退役或对应新版本，不把mimo-v2与mimo-v2.5及MiMo-X混成alias。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/providers/xiaomi.json#mimo-x-pro-preview`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/xiaomi/models/mimo-x-pro-preview.md)；本轮结论：`still-unresolved`；原状态 `pending` 保持。
- 本轮来源：`xiaomi`、`xiaomi-models`、`xiaomi-price`、`xiaomi-plan`、`xiaomi-llms`。

未取得该精确型号可用的字段证明，未使用同代/同名其他接入参数补数。

- 仍需核实：`contextWindow`、`modelName`、`capabilities`、`serviceType`、`access.maxInputTokens`、`access.protocol-readiness`。
- 边界：当前支持模型目录未定位该精确旧/预览名称；名称缺失不证明退役或对应新版本，不把mimo-v2与mimo-v2.5及MiMo-X混成alias。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/model-specs/xiaomi.json#mimo-x-pro-preview`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/xiaomi/models/mimo-x-pro-preview.md)；本轮结论：`still-unresolved`；原状态 `pending` 保持。
- 本轮来源：`xiaomi`、`xiaomi-models`、`xiaomi-price`、`xiaomi-plan`、`xiaomi-llms`。

未取得该精确型号可用的字段证明，未使用同代/同名其他接入参数补数。

- 仍需核实：`id`、`spec.contextWindow`、`spec.capabilities`、`spec.serviceType`。
- 边界：当前支持模型目录未定位该精确旧/预览名称；名称缺失不证明退役或对应新版本，不把mimo-v2与mimo-v2.5及MiMo-X混成alias。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。
