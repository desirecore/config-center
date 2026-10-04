# siliconflow：2026-10-04来源重核候选

覆盖3条精确模型/接入记录；来源读取4/6可读。核查时间以本轮日期记录，不刷新原核验状态。

本轮只保存核查候选，未更改canonical、既有来源核验状态、指纹或manifest；可读正文和ID存在不是全参数/账号验收。

## 实际来源与读取边界

### siliconflow

- 摘要语义：`sha256-utf8-decoded-response-body`；获取方法：urllib.request HTTPS response read; bytes decoded as UTF-8 with replacement, SHA-256 over decoded text re-encoded as UTF-8 before visible-text extraction; full HTML/Markdown/JSON body, not a raw-byte digest or vendor signature。

- URL：[https://www.siliconflow.cn/models](https://www.siliconflow.cn/models)；最终地址：[https://www.siliconflow.cn/models](https://www.siliconflow.cn/models)。
- 发布者：siliconflow；类别：`official-docs`；读取：`readable`。
- 范围：硅基国内公开产品目录；动态价签/托管参数需精确型号页或授权API响应。
- 本轮结果：实际读取472688字符，可见正文9556字符；需逐精确ID定位，HTTP成功不代表字段已证。

### siliconflow-models

- 摘要语义：`not-recorded`；获取方法：urllib.request HTTPS attempt failed before a usable response body was saved; error recorded, no content digest。

- URL：[https://docs.siliconflow.cn/cn/userguide/models](https://docs.siliconflow.cn/cn/userguide/models)；最终地址：[https://docs.siliconflow.cn/cn/userguide/models](https://docs.siliconflow.cn/cn/userguide/models)。
- 发布者：siliconflow；类别：`official-docs`；读取：`not-found`。
- 范围：只适用于页面明确的原厂/地域/接入，套餐和聚合合同独立。
- 本轮结果：HTTP Error 404: Not Found

### siliconflow-model-directory

- 摘要语义：`not-recorded`；获取方法：urllib.request HTTPS attempt failed before a usable response body was saved; error recorded, no content digest。

- URL：[https://api.siliconflow.cn/v1/models](https://api.siliconflow.cn/v1/models)；最终地址：[https://api.siliconflow.cn/v1/models](https://api.siliconflow.cn/v1/models)。
- 发布者：siliconflow；类别：`official-platform`；读取：`blocked`。
- 范围：只适用于页面明确的原厂/地域/接入，套餐和聚合合同独立。
- 本轮结果：HTTP Error 401: Unauthorized

### qwen-coder-card

- 摘要语义：`sha256-utf8-decoded-response-body`；获取方法：urllib.request HTTPS response read; bytes decoded as UTF-8 with replacement, SHA-256 over decoded text re-encoded as UTF-8 before visible-text extraction; full HTML/Markdown/JSON body, not a raw-byte digest or vendor signature。

- URL：[https://huggingface.co/Qwen/Qwen3-Coder-480B-A35B-Instruct/raw/main/README.md](https://huggingface.co/Qwen/Qwen3-Coder-480B-A35B-Instruct/raw/main/README.md)；最终地址：[https://huggingface.co/Qwen/Qwen3-Coder-480B-A35B-Instruct/raw/main/README.md](https://huggingface.co/Qwen/Qwen3-Coder-480B-A35B-Instruct/raw/main/README.md)。
- 发布者：Qwen official organization；类别：`official-model-card`；读取：`readable`。
- 范围：原厂开放权重模型卡；不证明硅基流动国内平台提供此精确托管型号、价格或输出上限。
- 本轮结果：实际读取5500字符，可见正文5098字符；需逐精确ID定位，HTTP成功不代表字段已证。

### qwen-instruct-card

- 摘要语义：`sha256-utf8-decoded-response-body`；获取方法：urllib.request HTTPS response read; bytes decoded as UTF-8 with replacement, SHA-256 over decoded text re-encoded as UTF-8 before visible-text extraction; full HTML/Markdown/JSON body, not a raw-byte digest or vendor signature。

- URL：[https://huggingface.co/Qwen/Qwen3-235B-A22B-Instruct-2507/raw/main/README.md](https://huggingface.co/Qwen/Qwen3-235B-A22B-Instruct-2507/raw/main/README.md)；最终地址：[https://huggingface.co/Qwen/Qwen3-235B-A22B-Instruct-2507/raw/main/README.md](https://huggingface.co/Qwen/Qwen3-235B-A22B-Instruct-2507/raw/main/README.md)。
- 发布者：Qwen official organization；类别：`official-model-card`；读取：`readable`。
- 范围：原厂开放权重模型卡；不证明硅基流动国内平台提供此精确托管型号、价格或输出上限。
- 本轮结果：实际读取16211字符，可见正文15687字符；需逐精确ID定位，HTTP成功不代表字段已证。

### bge-card

- 摘要语义：`sha256-utf8-decoded-response-body`；获取方法：urllib.request HTTPS response read; bytes decoded as UTF-8 with replacement, SHA-256 over decoded text re-encoded as UTF-8 before visible-text extraction; full HTML/Markdown/JSON body, not a raw-byte digest or vendor signature。

- URL：[https://huggingface.co/BAAI/bge-m3/raw/main/README.md](https://huggingface.co/BAAI/bge-m3/raw/main/README.md)；最终地址：[https://huggingface.co/BAAI/bge-m3/raw/main/README.md](https://huggingface.co/BAAI/bge-m3/raw/main/README.md)。
- 发布者：BAAI official organization；类别：`official-model-card`；读取：`readable`。
- 范围：原厂开放权重模型卡；不证明硅基流动国内平台提供此精确托管型号、价格或输出上限。
- 本轮结果：实际读取15822字符，可见正文15244字符；需逐精确ID定位，HTTP成功不代表字段已证。

## 逐模型、逐接入记录

### `compute/providers/siliconflow.json#BAAI/bge-m3`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/siliconflow/models/baai--bge-m3.md)；本轮结论：`official-identity-only`；原状态 `pending` 保持。
- 本轮来源：`bge-card`。

| 字段 | 当前值 | 官网候选值 | 判定 | 来源及解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"BAAI/bge-m3"` | `"BAAI/bge-m3"` | matches | `bge-card`：本轮正文定位精确标识；只确认该标识在其来源合同出现，不证明其他字段或不同套餐可用性。 |
| `contextWindow` | `8192` | `8192` | not-comparable | `bge-card`：官方BAAI模型卡原厂序列长度8192，不证明硅基实际托管输入上限或免费计价。 |

- 仍需核实：`contextWindow`、`inputPrice`、`maxOutputTokens`、`outputPrice`、`capabilities`、`serviceType`、`access.maxInputTokens`、`access.protocol-readiness`。
- 边界：国内公共models API返回401，本轮未使用凭据；原厂模型卡不能证明该平台当前白名单、maxOutputTokens或价格，0价/免费描述仍需平台独立证明。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/providers/siliconflow.json#Qwen/Qwen3-235B-A22B-Instruct-2507`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/siliconflow/models/qwen--qwen3-235b-a22b-instruct-2507.md)；本轮结论：`official-identity-only`；原状态 `pending` 保持。
- 本轮来源：`qwen-instruct-card`。

| 字段 | 当前值 | 官网候选值 | 判定 | 来源及解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"Qwen/Qwen3-235B-A22B-Instruct-2507"` | `"Qwen/Qwen3-235B-A22B-Instruct-2507"` | matches | `qwen-instruct-card`：本轮正文定位精确标识；只确认该标识在其来源合同出现，不证明其他字段或不同套餐可用性。 |
| `contextWindow` | `262144` | `262144` | not-comparable | `qwen-instruct-card`：官方Qwen开放模型卡支持262144原生上下文/外推另论；不证明硅基该区域托管上限。 |

- 仍需核实：`contextWindow`、`defaultTemperature`、`defaultTopP`、`inputPrice`、`maxOutputTokens`、`outputPrice`、`capabilities`、`serviceType`、`access.maxInputTokens`、`access.protocol-readiness`。
- 边界：国内公共models API返回401，本轮未使用凭据；原厂模型卡不能证明该平台当前白名单、maxOutputTokens或价格，0价/免费描述仍需平台独立证明。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/providers/siliconflow.json#Qwen/Qwen3-Coder-480B-A35B-Instruct`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/siliconflow/models/qwen--qwen3-coder-480b-a35b-instruct.md)；本轮结论：`official-identity-only`；原状态 `pending` 保持。
- 本轮来源：`qwen-coder-card`。

| 字段 | 当前值 | 官网候选值 | 判定 | 来源及解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"Qwen/Qwen3-Coder-480B-A35B-Instruct"` | `"Qwen/Qwen3-Coder-480B-A35B-Instruct"` | matches | `qwen-coder-card`：本轮正文定位精确标识；只确认该标识在其来源合同出现，不证明其他字段或不同套餐可用性。 |
| `contextWindow` | `262144` | `262144` | not-comparable | `qwen-coder-card`：官方Qwen开放模型卡支持262144原生上下文/外推另论；不证明硅基该区域托管上限。 |

- 仍需核实：`contextWindow`、`defaultTemperature`、`defaultTopP`、`inputPrice`、`maxOutputTokens`、`outputPrice`、`capabilities`、`serviceType`、`access.maxInputTokens`、`access.protocol-readiness`。
- 边界：国内公共models API返回401，本轮未使用凭据；原厂模型卡不能证明该平台当前白名单、maxOutputTokens或价格，0价/免费描述仍需平台独立证明。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。
