# stealth：2026-10-04来源重核候选

覆盖1条精确模型/接入记录；来源读取2/2可读。核查时间以本轮日期记录，不刷新原核验状态。

本轮只保存核查候选，未更改canonical、既有来源核验状态、指纹或manifest；可读正文和ID存在不是全参数/账号验收。

## 实际来源与读取边界

### openrouter-api

- 摘要语义：`sha256-utf8-decoded-response-body`；获取方法：urllib.request HTTPS response read; bytes decoded as UTF-8 with replacement, SHA-256 over decoded text re-encoded as UTF-8 before visible-text extraction; full HTML/Markdown/JSON body, not a raw-byte digest or vendor signature。

- URL：[https://openrouter.ai/api/v1/models](https://openrouter.ai/api/v1/models)；最终地址：[https://openrouter.ai/api/v1/models](https://openrouter.ai/api/v1/models)。
- 发布者：stealth；类别：`official-platform`；读取：`readable`。
- 范围：只适用于页面明确的原厂/地域/接入，套餐和聚合合同独立。
- 本轮结果：实际读取763590字符，可见正文763589字符；需逐精确ID定位，HTTP成功不代表字段已证。

### glm53-flash

- 摘要语义：`sha256-utf8-decoded-response-body`；获取方法：urllib.request HTTPS response read; bytes decoded as UTF-8 with replacement, SHA-256 over decoded text re-encoded as UTF-8 before visible-text extraction; full HTML/Markdown/JSON body, not a raw-byte digest or vendor signature。

- URL：[https://docs.bigmodel.cn/cn/guide/models/vlm/glm-5.3-flash.md](https://docs.bigmodel.cn/cn/guide/models/vlm/glm-5.3-flash.md)；最终地址：[https://docs.bigmodel.cn/cn/guide/models/vlm/glm-5.3-flash.md](https://docs.bigmodel.cn/cn/guide/models/vlm/glm-5.3-flash.md)。
- 发布者：stealth；类别：`official-docs`；读取：`readable`。
- 范围：只适用于页面明确的原厂/地域/接入，套餐和聚合合同独立。
- 本轮结果：实际读取10927字符，可见正文10652字符；需逐精确ID定位，HTTP成功不代表字段已证。

## 逐模型、逐接入记录

### `compute/model-specs/stealth.json#ox-alpha`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/stealth/models/ox-alpha.md)；本轮结论：`historical-only`；原状态 `historical` 保持。
- 本轮来源：`openrouter-api`、`glm53-flash`。

未取得该精确型号可用的字段证明，未使用同代/同名其他接入参数补数。

- 仍需核实：`id`、`spec.contextWindow`、`spec.defaultTemperature`、`spec.defaultTopP`、`spec.extra.thinkingOnly`、`spec.maxOutputTokens`、`spec.supportsReasoning`、`spec.capabilities`、`spec.serviceType`。
- 边界：当前OpenRouter公共API没有ox-alpha或stealth/ox-alpha；未找到官方身份揭示。GLM5.3Flash官页只证明GLM自身，不能证明Ox Alpha真身；历史窗口/输出/发布日期仍未重新取得证据。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。
