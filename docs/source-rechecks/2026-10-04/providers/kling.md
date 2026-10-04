# kling：2026-10-04来源重核候选

覆盖11条精确模型/接入记录；来源读取0/3可读。核查时间以本轮日期记录，不刷新原核验状态。

本轮只保存核查候选，未更改canonical、既有来源核验状态、指纹或manifest；可读正文和ID存在不是全参数/账号验收。

## 实际来源与读取边界

### kling

- 摘要语义：`sha256-utf8-decoded-response-body`；获取方法：urllib.request HTTPS response read; bytes decoded as UTF-8 with replacement, SHA-256 over decoded text re-encoded as UTF-8 before visible-text extraction; full HTML/Markdown/JSON body, not a raw-byte digest or vendor signature。

- URL：[https://kling.ai/document-api/api/video/3-0-omni/text-to-video/legacy](https://kling.ai/document-api/api/video/3-0-omni/text-to-video/legacy)；最终地址：[https://kling.ai/document-api/api/video/3-0-omni/text-to-video/legacy](https://kling.ai/document-api/api/video/3-0-omni/text-to-video/legacy)。
- 发布者：kling；类别：`official-docs`；读取：`blocked`。
- 范围：只适用于页面明确的原厂/地域/接入，套餐和聚合合同独立。
- 本轮结果：实际读取75910字符，可见正文45字符；需逐精确ID定位，HTTP成功不代表字段已证。；web.open同样仅标题壳；尝试渲染浏览器失败：iab browser unavailable，未登录/未读账号内容。

### kling-legacy-docs

- 摘要语义：`not-recorded`；获取方法：urllib.request HTTPS attempt failed before a usable response body was saved; error recorded, no content digest。

- URL：[https://app.klingai.com/global/dev/document-api/apiReference/model/textToVideo](https://app.klingai.com/global/dev/document-api/apiReference/model/textToVideo)；最终地址：[https://app.klingai.com/global/dev/document-api/apiReference/model/textToVideo](https://app.klingai.com/global/dev/document-api/apiReference/model/textToVideo)。
- 发布者：kling；类别：`official-docs`；读取：`blocked`。
- 范围：只适用于页面明确的原厂/地域/接入，套餐和聚合合同独立。
- 本轮结果：<urlopen error [SSL: UNEXPECTED_EOF_WHILE_READING] EOF occurred in violation of protocol (_ssl.c:1081)>；web.open同样仅标题壳；尝试渲染浏览器失败：iab browser unavailable，未登录/未读账号内容。

### kling-cap-map

- 摘要语义：`sha256-utf8-decoded-response-body`；获取方法：urllib.request HTTPS response read; bytes decoded as UTF-8 with replacement, SHA-256 over decoded text re-encoded as UTF-8 before visible-text extraction; full HTML/Markdown/JSON body, not a raw-byte digest or vendor signature。

- URL：[https://kling.ai/document-api/guides/capability-map/video](https://kling.ai/document-api/guides/capability-map/video)；最终地址：[https://kling.ai/document-api/guides/capability-map/video](https://kling.ai/document-api/guides/capability-map/video)。
- 发布者：kling；类别：`official-docs`；读取：`blocked`。
- 范围：只适用于页面明确的原厂/地域/接入，套餐和聚合合同独立。
- 本轮结果：实际读取75910字符，可见正文45字符；需逐精确ID定位，HTTP成功不代表字段已证。；web.open同样仅标题壳；尝试渲染浏览器失败：iab browser unavailable，未登录/未读账号内容。

## 逐模型、逐接入记录

### `compute/model-specs/kling.json#kling-3.0-turbo`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/kling/models/kling-3.0-turbo.md)；本轮结论：`still-unresolved`；原状态 `pending` 保持。
- 本轮来源：`kling`、`kling-legacy-docs`、`kling-cap-map`。

未取得该精确型号可用的字段证明，未使用同代/同名其他接入参数补数。

- 仍需核实：`id`、`spec.capabilities`、`spec.serviceType`。
- 边界：本轮未在可读页面定位完整精确型号合同；缺失不判定停服。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/providers/kling.json#kling-v2-5-turbo-pro`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/kling/models/kling-v2-5-turbo-pro.md)；本轮结论：`still-unresolved`；原状态 `pending` 保持。
- 本轮来源：`kling`、`kling-legacy-docs`、`kling-cap-map`。

未取得该精确型号可用的字段证明，未使用同代/同名其他接入参数补数。

- 仍需核实：`extra.pricePerGeneration`、`modelName`、`capabilities`、`serviceType`、`access.maxInputTokens`、`access.protocol-readiness`。
- 边界：本轮未在可读页面定位完整精确型号合同；缺失不判定停服。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/model-specs/kling.json#kling-v2-5-turbo-pro`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/kling/models/kling-v2-5-turbo-pro.md)；本轮结论：`still-unresolved`；原状态 `pending` 保持。
- 本轮来源：`kling`、`kling-legacy-docs`、`kling-cap-map`。

未取得该精确型号可用的字段证明，未使用同代/同名其他接入参数补数。

- 仍需核实：`id`、`spec.capabilities`、`spec.serviceType`。
- 边界：本轮未在可读页面定位完整精确型号合同；缺失不判定停服。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/providers/kling.json#kling-v2-5-turbo`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/kling/models/kling-v2-5-turbo.md)；本轮结论：`still-unresolved`；原状态 `pending` 保持。
- 本轮来源：`kling`、`kling-legacy-docs`、`kling-cap-map`。

未取得该精确型号可用的字段证明，未使用同代/同名其他接入参数补数。

- 仍需核实：`extra.pricePerGeneration`、`modelName`、`capabilities`、`serviceType`、`access.maxInputTokens`、`access.protocol-readiness`。
- 边界：本轮未在可读页面定位完整精确型号合同；缺失不判定停服。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/model-specs/kling.json#kling-v2-5-turbo`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/kling/models/kling-v2-5-turbo.md)；本轮结论：`still-unresolved`；原状态 `pending` 保持。
- 本轮来源：`kling`、`kling-legacy-docs`、`kling-cap-map`。

未取得该精确型号可用的字段证明，未使用同代/同名其他接入参数补数。

- 仍需核实：`id`、`spec.capabilities`、`spec.serviceType`。
- 边界：本轮未在可读页面定位完整精确型号合同；缺失不判定停服。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/providers/kling.json#kling-v2-master`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/kling/models/kling-v2-master.md)；本轮结论：`still-unresolved`；原状态 `pending` 保持。
- 本轮来源：`kling`、`kling-legacy-docs`、`kling-cap-map`。

未取得该精确型号可用的字段证明，未使用同代/同名其他接入参数补数。

- 仍需核实：`modelName`、`capabilities`、`serviceType`、`access.maxInputTokens`、`access.protocol-readiness`。
- 边界：本轮未在可读页面定位完整精确型号合同；缺失不判定停服。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/model-specs/kling.json#kling-v2-master`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/kling/models/kling-v2-master.md)；本轮结论：`still-unresolved`；原状态 `pending` 保持。
- 本轮来源：`kling`、`kling-legacy-docs`、`kling-cap-map`。

未取得该精确型号可用的字段证明，未使用同代/同名其他接入参数补数。

- 仍需核实：`id`、`spec.capabilities`、`spec.serviceType`。
- 边界：本轮未在可读页面定位完整精确型号合同；缺失不判定停服。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/providers/kling.json#kling-v2`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/kling/models/kling-v2.md)；本轮结论：`still-unresolved`；原状态 `pending` 保持。
- 本轮来源：`kling`、`kling-legacy-docs`、`kling-cap-map`。

未取得该精确型号可用的字段证明，未使用同代/同名其他接入参数补数。

- 仍需核实：`modelName`、`capabilities`、`serviceType`、`access.maxInputTokens`、`access.protocol-readiness`。
- 边界：本轮未在可读页面定位完整精确型号合同；缺失不判定停服。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/model-specs/kling.json#kling-v2`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/kling/models/kling-v2.md)；本轮结论：`still-unresolved`；原状态 `pending` 保持。
- 本轮来源：`kling`、`kling-legacy-docs`、`kling-cap-map`。

未取得该精确型号可用的字段证明，未使用同代/同名其他接入参数补数。

- 仍需核实：`id`、`spec.capabilities`、`spec.serviceType`。
- 边界：本轮未在可读页面定位完整精确型号合同；缺失不判定停服。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/providers/kling.json#kling-v3`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/kling/models/kling-v3.md)；本轮结论：`still-unresolved`；原状态 `pending` 保持。
- 本轮来源：`kling`、`kling-legacy-docs`、`kling-cap-map`。

未取得该精确型号可用的字段证明，未使用同代/同名其他接入参数补数。

- 仍需核实：`modelName`、`capabilities`、`serviceType`、`access.maxInputTokens`、`access.protocol-readiness`。
- 边界：本轮未在可读页面定位完整精确型号合同；缺失不判定停服。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/model-specs/kling.json#kling-v3`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/kling/models/kling-v3.md)；本轮结论：`still-unresolved`；原状态 `pending` 保持。
- 本轮来源：`kling`、`kling-legacy-docs`、`kling-cap-map`。

未取得该精确型号可用的字段证明，未使用同代/同名其他接入参数补数。

- 仍需核实：`id`、`spec.capabilities`、`spec.serviceType`。
- 边界：本轮未在可读页面定位完整精确型号合同；缺失不判定停服。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。
