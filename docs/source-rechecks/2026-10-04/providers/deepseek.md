# deepseek：2026-10-04来源重核候选

覆盖12条精确模型/接入记录；来源读取3/3可读。核查时间以本轮日期记录，不刷新原核验状态。

本轮只保存核查候选，未更改canonical、既有来源核验状态、指纹或manifest；可读正文和ID存在不是全参数/账号验收。

## 实际来源与读取边界

### deepseek-pricing

- 摘要语义：`sha256-utf8-decoded-response-body`；获取方法：urllib.request HTTPS response read; bytes decoded as UTF-8 with replacement, SHA-256 over decoded text re-encoded as UTF-8 before visible-text extraction; full HTML/Markdown/JSON body, not a raw-byte digest or vendor signature。

- URL：[https://api-docs.deepseek.com/zh-cn/quick_start/pricing/](https://api-docs.deepseek.com/zh-cn/quick_start/pricing/)；最终地址：[https://api-docs.deepseek.com/zh-cn/quick_start/pricing/](https://api-docs.deepseek.com/zh-cn/quick_start/pricing/)。
- 发布者：deepseek；类别：`official-docs`；读取：`readable`。
- 范围：只适用于页面明确的原厂/地域/接入，套餐和聚合合同独立。
- 本轮结果：实际读取22232字符，可见正文1483字符；需逐精确ID定位，HTTP成功不代表字段已证。

### deepseek-thinking

- 摘要语义：`sha256-utf8-decoded-response-body`；获取方法：urllib.request HTTPS response read; bytes decoded as UTF-8 with replacement, SHA-256 over decoded text re-encoded as UTF-8 before visible-text extraction; full HTML/Markdown/JSON body, not a raw-byte digest or vendor signature。

- URL：[https://api-docs.deepseek.com/guides/thinking_mode/](https://api-docs.deepseek.com/guides/thinking_mode/)；最终地址：[https://api-docs.deepseek.com/guides/thinking_mode/](https://api-docs.deepseek.com/guides/thinking_mode/)。
- 发布者：deepseek；类别：`official-docs`；读取：`readable`。
- 范围：只适用于页面明确的原厂/地域/接入，套餐和聚合合同独立。
- 本轮结果：实际读取113644字符，可见正文11939字符；需逐精确ID定位，HTTP成功不代表字段已证。

### deepseek-models

- 摘要语义：`sha256-utf8-decoded-response-body`；获取方法：urllib.request HTTPS response read; bytes decoded as UTF-8 with replacement, SHA-256 over decoded text re-encoded as UTF-8 before visible-text extraction; full HTML/Markdown/JSON body, not a raw-byte digest or vendor signature。

- URL：[https://api-docs.deepseek.com/api/list-models](https://api-docs.deepseek.com/api/list-models)；最终地址：[https://api-docs.deepseek.com/api/list-models/](https://api-docs.deepseek.com/api/list-models/)。
- 发布者：deepseek；类别：`official-docs`；读取：`readable`。
- 范围：只适用于页面明确的原厂/地域/接入，套餐和聚合合同独立。
- 本轮结果：实际读取39282字符，可见正文4402字符；需逐精确ID定位，HTTP成功不代表字段已证。

## 逐模型、逐接入记录

### `compute/model-specs/deepseek.json#deepseek-chat`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/deepseek/models/deepseek-chat.md)；本轮结论：`still-unresolved`；原状态 `pending` 保持。
- 本轮来源：`deepseek-pricing`、`deepseek-thinking`、`deepseek-models`。

未取得该精确型号可用的字段证明，未使用同代/同名其他接入参数补数。

- 仍需核实：`id`、`spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.capabilities`、`spec.serviceType`。
- 边界：当前价签未逐精确旧版本给参数/退出时间，不能用新Flash参数替代历史身份。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/providers/deepseek.json#deepseek-flash`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/deepseek/models/deepseek-flash.md)；本轮结论：`official-fields-found`；原状态 `partial` 保持。
- 本轮来源：`deepseek-pricing`。

| 字段 | 当前值 | 官网候选值 | 判定 | 来源及解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"deepseek-flash"` | `"deepseek-flash"` | matches | `deepseek-pricing`：本轮正文定位精确标识；只确认该标识在其来源合同出现，不证明其他字段或不同套餐可用性。 |
| `contextWindow` | `1000000` | `"1M"` | not-comparable | `deepseek-pricing`：价格页使用1M简写，无本次明文整数；不能凭简写把1000000与1048576的差异消除。 |
| `maxOutputTokens` | `384000` | `"384K"` | not-comparable | `deepseek-pricing`：当前API写最大384K，输入/输出均为简写，保留单位换算待核。 |
| `inputPrice` | `1` | `1` | matches | `deepseek-pricing`：空闲时段CNY/百万token，与本仓默认价对应；高峰2/8/.04应保留独立阶梯，不把高峰与空闲标量当冲突。 |
| `outputPrice` | `4` | `4` | matches | `deepseek-pricing`：空闲时段CNY/百万token，与本仓默认价对应；高峰2/8/.04应保留独立阶梯，不把高峰与空闲标量当冲突。 |
| `extra.cacheHitPrice` | `0.02` | `0.02` | matches | `deepseek-pricing`：空闲时段CNY/百万token，与本仓默认价对应；高峰2/8/.04应保留独立阶梯，不把高峰与空闲标量当冲突。 |

- 仍需核实：`defaultTemperature`、`defaultTopP`、`extra.pricingTiers`、`capabilities`、`serviceType`、`access.maxInputTokens`、`access.protocol-readiness`。
- 边界：本轮未在可读页面定位完整精确型号合同；缺失不判定停服。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/model-specs/deepseek.json#deepseek-flash`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/deepseek/models/deepseek-flash.md)；本轮结论：`official-identity-only`；原状态 `partial` 保持。
- 本轮来源：`deepseek-pricing`。

| 字段 | 当前值 | 官网候选值 | 判定 | 来源及解释 |
| --- | --- | --- | --- | --- |
| `id` | `"deepseek-flash"` | `"deepseek-flash"` | matches | `deepseek-pricing`：本轮正文定位精确标识；只确认该标识在其来源合同出现，不证明其他字段或不同套餐可用性。 |
| `spec.contextWindow` | `1000000` | `"1M"` | not-comparable | `deepseek-pricing`：价格页使用1M简写，无本次明文整数；不能凭简写把1000000与1048576的差异消除。 |
| `spec.maxOutputTokens` | `384000` | `"384K"` | not-comparable | `deepseek-pricing`：当前API写最大384K，输入/输出均为简写，保留单位换算待核。 |

- 仍需核实：`spec.defaultTemperature`、`spec.supportsReasoning`、`spec.capabilities`、`spec.serviceType`。
- 边界：本轮未在可读页面定位完整精确型号合同；缺失不判定停服。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/model-specs/deepseek.json#deepseek-reasoner`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/deepseek/models/deepseek-reasoner.md)；本轮结论：`still-unresolved`；原状态 `pending` 保持。
- 本轮来源：`deepseek-pricing`、`deepseek-thinking`、`deepseek-models`。

未取得该精确型号可用的字段证明，未使用同代/同名其他接入参数补数。

- 仍需核实：`id`、`spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.supportsReasoning`、`spec.capabilities`、`spec.serviceType`。
- 边界：当前价签未逐精确旧版本给参数/退出时间，不能用新Flash参数替代历史身份。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/model-specs/deepseek.json#deepseek-v4-flash-0731`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/deepseek/models/deepseek-v4-flash-0731.md)；本轮结论：`still-unresolved`；原状态 `pending` 保持。
- 本轮来源：`deepseek-pricing`、`deepseek-thinking`、`deepseek-models`。

未取得该精确型号可用的字段证明，未使用同代/同名其他接入参数补数。

- 仍需核实：`id`、`spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.supportsReasoning`、`spec.capabilities`、`spec.serviceType`。
- 边界：当前价签未逐精确旧版本给参数/退出时间，不能用新Flash参数替代历史身份。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/providers/deepseek.json#deepseek-v4-flash-vision-exp`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/deepseek/models/deepseek-v4-flash-vision-exp.md)；本轮结论：`official-identity-only`；原状态 `partial` 保持。
- 本轮来源：`deepseek-pricing`。

| 字段 | 当前值 | 官网候选值 | 判定 | 来源及解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"deepseek-v4-flash-vision-exp"` | `"deepseek-v4-flash-vision-exp"` | matches | `deepseek-pricing`：本轮正文定位精确标识；只确认该标识在其来源合同出现，不证明其他字段或不同套餐可用性。 |
| `contextWindow` | `1000000` | `"1M"` | not-comparable | `deepseek-pricing`：价格页使用1M简写，无本次明文整数；不能凭简写把1000000与1048576的差异消除。 |
| `maxOutputTokens` | `384000` | `"384K"` | not-comparable | `deepseek-pricing`：当前API写最大384K，输入/输出均为简写，保留单位换算待核。 |

- 仍需核实：`contextWindow`、`defaultTemperature`、`defaultTopP`、`extra.cacheHitPrice`、`extra.reasoning.defaultEffort`、`extra.reasoning.supportedEfforts`、`inputPrice`、`maxOutputTokens`、`outputPrice`、`capabilities`、`serviceType`、`access.maxInputTokens`、`access.protocol-readiness`。
- 边界：官方明确旧模型名仍可调用，但对应旧模型已下线，请求由V4.1-Flash服务并按Flash计费。旧ID可调用不等于旧模型版本仍有效。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/model-specs/deepseek.json#deepseek-v4-flash-vision-exp`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/deepseek/models/deepseek-v4-flash-vision-exp.md)；本轮结论：`official-identity-only`；原状态 `partial` 保持。
- 本轮来源：`deepseek-pricing`。

| 字段 | 当前值 | 官网候选值 | 判定 | 来源及解释 |
| --- | --- | --- | --- | --- |
| `id` | `"deepseek-v4-flash-vision-exp"` | `"deepseek-v4-flash-vision-exp"` | matches | `deepseek-pricing`：本轮正文定位精确标识；只确认该标识在其来源合同出现，不证明其他字段或不同套餐可用性。 |
| `spec.contextWindow` | `1000000` | `"1M"` | not-comparable | `deepseek-pricing`：价格页使用1M简写，无本次明文整数；不能凭简写把1000000与1048576的差异消除。 |
| `spec.maxOutputTokens` | `384000` | `"384K"` | not-comparable | `deepseek-pricing`：当前API写最大384K，输入/输出均为简写，保留单位换算待核。 |

- 仍需核实：`spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.supportsReasoning`、`spec.capabilities`、`spec.serviceType`。
- 边界：官方明确旧模型名仍可调用，但对应旧模型已下线，请求由V4.1-Flash服务并按Flash计费。旧ID可调用不等于旧模型版本仍有效。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/providers/deepseek.json#deepseek-v4-flash`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/deepseek/models/deepseek-v4-flash.md)；本轮结论：`official-identity-only`；原状态 `partial` 保持。
- 本轮来源：`deepseek-pricing`。

| 字段 | 当前值 | 官网候选值 | 判定 | 来源及解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"deepseek-v4-flash"` | `"deepseek-v4-flash"` | matches | `deepseek-pricing`：本轮正文定位精确标识；只确认该标识在其来源合同出现，不证明其他字段或不同套餐可用性。 |
| `contextWindow` | `1000000` | `"1M"` | not-comparable | `deepseek-pricing`：价格页使用1M简写，无本次明文整数；不能凭简写把1000000与1048576的差异消除。 |
| `maxOutputTokens` | `384000` | `"384K"` | not-comparable | `deepseek-pricing`：当前API写最大384K，输入/输出均为简写，保留单位换算待核。 |

- 仍需核实：`contextWindow`、`defaultTemperature`、`defaultTopP`、`extra.cacheHitPrice`、`extra.reasoning.defaultEffort`、`extra.reasoning.supportedEfforts`、`inputPrice`、`maxOutputTokens`、`outputPrice`、`capabilities`、`serviceType`、`access.maxInputTokens`、`access.protocol-readiness`。
- 边界：官方明确旧模型名仍可调用，但对应旧模型已下线，请求由V4.1-Flash服务并按Flash计费。旧ID可调用不等于旧模型版本仍有效。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/model-specs/deepseek.json#deepseek-v4-flash`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/deepseek/models/deepseek-v4-flash.md)；本轮结论：`official-identity-only`；原状态 `partial` 保持。
- 本轮来源：`deepseek-pricing`。

| 字段 | 当前值 | 官网候选值 | 判定 | 来源及解释 |
| --- | --- | --- | --- | --- |
| `id` | `"deepseek-v4-flash"` | `"deepseek-v4-flash"` | matches | `deepseek-pricing`：本轮正文定位精确标识；只确认该标识在其来源合同出现，不证明其他字段或不同套餐可用性。 |
| `spec.contextWindow` | `1000000` | `"1M"` | not-comparable | `deepseek-pricing`：价格页使用1M简写，无本次明文整数；不能凭简写把1000000与1048576的差异消除。 |
| `spec.maxOutputTokens` | `384000` | `"384K"` | not-comparable | `deepseek-pricing`：当前API写最大384K，输入/输出均为简写，保留单位换算待核。 |

- 仍需核实：`spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.supportsReasoning`、`spec.capabilities`、`spec.serviceType`。
- 边界：官方明确旧模型名仍可调用，但对应旧模型已下线，请求由V4.1-Flash服务并按Flash计费。旧ID可调用不等于旧模型版本仍有效。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/model-specs/deepseek.json#deepseek-v4-pro-0813`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/deepseek/models/deepseek-v4-pro-0813.md)；本轮结论：`still-unresolved`；原状态 `partial` 保持。
- 本轮来源：`deepseek-pricing`。

| 字段 | 当前值 | 官网候选值 | 判定 | 来源及解释 |
| --- | --- | --- | --- | --- |
| `spec.contextWindow` | `1000000` | `"1M"` | not-comparable | `deepseek-pricing`：价格页使用1M简写，无本次明文整数；不能凭简写把1000000与1048576的差异消除。 |
| `spec.maxOutputTokens` | `384000` | `"384K"` | not-comparable | `deepseek-pricing`：当前API写最大384K，输入/输出均为简写，保留单位换算待核。 |

- 仍需核实：`spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.supportsReasoning`、`spec.capabilities`、`spec.serviceType`。
- 边界：本轮未在可读页面定位完整精确型号合同；缺失不判定停服。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/providers/deepseek.json#deepseek-v4-pro`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/deepseek/models/deepseek-v4-pro.md)；本轮结论：`official-identity-only`；原状态 `partial` 保持。
- 本轮来源：`deepseek-pricing`。

| 字段 | 当前值 | 官网候选值 | 判定 | 来源及解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"deepseek-v4-pro"` | `"deepseek-v4-pro"` | matches | `deepseek-pricing`：本轮正文定位精确标识；只确认该标识在其来源合同出现，不证明其他字段或不同套餐可用性。 |
| `contextWindow` | `1000000` | `"1M"` | not-comparable | `deepseek-pricing`：价格页使用1M简写，无本次明文整数；不能凭简写把1000000与1048576的差异消除。 |
| `maxOutputTokens` | `384000` | `"384K"` | not-comparable | `deepseek-pricing`：当前API写最大384K，输入/输出均为简写，保留单位换算待核。 |

- 仍需核实：`defaultTemperature`、`defaultTopP`、`capabilities`、`serviceType`、`access.maxInputTokens`、`access.protocol-readiness`。
- 边界：本轮未在可读页面定位完整精确型号合同；缺失不判定停服。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/model-specs/deepseek.json#deepseek-v4-pro`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/deepseek/models/deepseek-v4-pro.md)；本轮结论：`official-identity-only`；原状态 `partial` 保持。
- 本轮来源：`deepseek-pricing`。

| 字段 | 当前值 | 官网候选值 | 判定 | 来源及解释 |
| --- | --- | --- | --- | --- |
| `id` | `"deepseek-v4-pro"` | `"deepseek-v4-pro"` | matches | `deepseek-pricing`：本轮正文定位精确标识；只确认该标识在其来源合同出现，不证明其他字段或不同套餐可用性。 |
| `spec.contextWindow` | `1000000` | `"1M"` | not-comparable | `deepseek-pricing`：价格页使用1M简写，无本次明文整数；不能凭简写把1000000与1048576的差异消除。 |
| `spec.maxOutputTokens` | `384000` | `"384K"` | not-comparable | `deepseek-pricing`：当前API写最大384K，输入/输出均为简写，保留单位换算待核。 |

- 仍需核实：`spec.defaultTemperature`、`spec.supportsReasoning`、`spec.capabilities`、`spec.serviceType`。
- 边界：本轮未在可读页面定位完整精确型号合同；缺失不判定停服。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。
