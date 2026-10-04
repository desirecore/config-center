# baichuan：2026-10-04来源重核候选

覆盖8条精确模型/接入记录；来源读取2/6可读。核查时间以本轮日期记录，不刷新原核验状态。

本轮只保存核查候选，未更改canonical、既有来源核验状态、指纹或manifest；可读正文和ID存在不是全参数/账号验收。

## 实际来源与读取边界

### baichuan

- 摘要语义：`not-recorded`；获取方法：urllib.request HTTPS attempt failed before a usable response body was saved; error recorded, no content digest。

- URL：[https://www.baichuan-ai.com/blog/baichuan-M3](https://www.baichuan-ai.com/blog/baichuan-M3)；最终地址：[https://www.baichuan-ai.com/blog/baichuan-M3](https://www.baichuan-ai.com/blog/baichuan-M3)。
- 发布者：baichuan；类别：`official-docs`；读取：`blocked`。
- 范围：只适用于页面明确的原厂/地域/接入，套餐和聚合合同独立。
- 本轮结果：<urlopen error [SSL: UNEXPECTED_EOF_WHILE_READING] EOF occurred in violation of protocol (_ssl.c:1081)>

### baichuan-platform

- 摘要语义：`not-recorded`；获取方法：urllib.request HTTPS attempt failed before a usable response body was saved; error recorded, no content digest。

- URL：[https://platform.baichuan-ai.com/docs/api](https://platform.baichuan-ai.com/docs/api)；最终地址：[https://platform.baichuan-ai.com/docs/api](https://platform.baichuan-ai.com/docs/api)。
- 发布者：baichuan；类别：`official-docs`；读取：`blocked`。
- 范围：只适用于页面明确的原厂/地域/接入，套餐和聚合合同独立。
- 本轮结果：<urlopen error [SSL: UNEXPECTED_EOF_WHILE_READING] EOF occurred in violation of protocol (_ssl.c:1081)>

### baichuan-home

- 摘要语义：`not-recorded`；获取方法：urllib.request HTTPS attempt failed before a usable response body was saved; error recorded, no content digest。

- URL：[https://www.baichuan-ai.com/](https://www.baichuan-ai.com/)；最终地址：[https://www.baichuan-ai.com/](https://www.baichuan-ai.com/)。
- 发布者：baichuan；类别：`official-docs`；读取：`blocked`。
- 范围：只适用于页面明确的原厂/地域/接入，套餐和聚合合同独立。
- 本轮结果：<urlopen error [SSL: UNEXPECTED_EOF_WHILE_READING] EOF occurred in violation of protocol (_ssl.c:1081)>

### baichuan-prices

- 摘要语义：`not-recorded`；获取方法：urllib.request HTTPS attempt failed before a usable response body was saved; error recorded, no content digest。

- URL：[https://platform.baichuan-ai.com/prices](https://platform.baichuan-ai.com/prices)；最终地址：[https://platform.baichuan-ai.com/prices](https://platform.baichuan-ai.com/prices)。
- 发布者：baichuan；类别：`official-docs`；读取：`blocked`。
- 范围：只适用于页面明确的原厂/地域/接入，套餐和聚合合同独立。
- 本轮结果：<urlopen error [SSL: UNEXPECTED_EOF_WHILE_READING] EOF occurred in violation of protocol (_ssl.c:1081)>

### baichuan-model-card

- 摘要语义：`sha256-utf8-decoded-response-body`；获取方法：urllib.request HTTPS response read; bytes decoded as UTF-8 with replacement, SHA-256 over decoded text re-encoded as UTF-8 before visible-text extraction; full HTML/Markdown/JSON body, not a raw-byte digest or vendor signature。

- URL：[https://huggingface.co/baichuan-inc/Baichuan-M3-235B/raw/main/README.md](https://huggingface.co/baichuan-inc/Baichuan-M3-235B/raw/main/README.md)；最终地址：[https://huggingface.co/baichuan-inc/Baichuan-M3-235B/raw/main/README.md](https://huggingface.co/baichuan-inc/Baichuan-M3-235B/raw/main/README.md)。
- 发布者：baichuan-inc official organization；类别：`official-model-card`；读取：`readable`。
- 范围：开放权重Baichuan-M3-235B模型卡，不等同托管Baichuan-M3-Plus API合同。
- 本轮结果：实际读取8794字符，可见正文8651字符；需逐精确ID定位，HTTP成功不代表字段已证。

### baichuan-prices-web

- 摘要语义：`not-recorded`；获取方法：web.run open official page; readable page extraction; no original HTTP body or HTTP-byte digest obtained。

- URL：[https://platform.baichuan-ai.com/prices](https://platform.baichuan-ai.com/prices)；最终地址：[https://platform.baichuan-ai.com/prices](https://platform.baichuan-ai.com/prices)。
- 发布者：Baichuan official platform；类别：`official-platform`；读取：`readable`。
- 范围：国内百川按量API；千token→百万token价格乘1000，32k上下文未明确定义k换算。
- 本轮结果：通过网页正文读取独立取得完整官方价格表：M3Plus输入0.005/输出0.009元每千token，M3 0.01/0.03，M2Plus0.01/0.03，M2 0.002/0.02；窗口均标32k；此页不证明最大输出、采样或视觉能力。Python请求该页仍TLS失败，两条读取记录分开。

## 逐模型、逐接入记录

### `compute/providers/baichuan.json#Baichuan-M2-Plus`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/baichuan/models/baichuan-m2-plus.md)；本轮结论：`official-fields-found`；原状态 `pending` 保持。
- 本轮来源：`baichuan-prices-web`。

| 字段 | 当前值 | 官网候选值 | 判定 | 来源及解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"Baichuan-M2-Plus"` | `"Baichuan-M2-Plus"` | matches | `baichuan-prices-web`：官网价格表精确列出API模型名；主站旧文章TLS失败不妨碍此独立官方证据。 |
| `contextWindow` | `32000` | `"32k"` | not-comparable | `baichuan-prices-web`：官网上下文32k未明确定义换算；最大输出并未给，不能把32k上下文同时填输出。 |
| `inputPrice` | `10` | `10` | matches | `baichuan-prices-web`：官网元/千token乘1000→元/百万token；Plus另有医疗搜索0.03元/次，不含在token价。 |
| `outputPrice` | `30` | `30` | matches | `baichuan-prices-web`：官网元/千token乘1000→元/百万token；Plus另有医疗搜索0.03元/次，不含在token价。 |

- 仍需核实：`contextWindow`、`defaultTemperature`、`defaultTopP`、`maxOutputTokens`、`capabilities`、`serviceType`、`access.maxInputTokens`、`access.protocol-readiness`。
- 边界：模型卡Baichuan-M3-235B的开放权重、训练与医疗能力不是托管M3-Plus规格；当前视觉/最大输出/采样默认没有取得字段证明。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/model-specs/baichuan.json#Baichuan-M2-Plus`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/baichuan/models/baichuan-m2-plus.md)；本轮结论：`official-identity-only`；原状态 `pending` 保持。
- 本轮来源：`baichuan-prices-web`。

| 字段 | 当前值 | 官网候选值 | 判定 | 来源及解释 |
| --- | --- | --- | --- | --- |
| `id` | `"Baichuan-M2-Plus"` | `"Baichuan-M2-Plus"` | matches | `baichuan-prices-web`：官网价格表精确列出API模型名；主站旧文章TLS失败不妨碍此独立官方证据。 |
| `spec.contextWindow` | `32000` | `"32k"` | not-comparable | `baichuan-prices-web`：官网上下文32k未明确定义换算；最大输出并未给，不能把32k上下文同时填输出。 |

- 仍需核实：`spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.capabilities`、`spec.serviceType`。
- 边界：模型卡Baichuan-M3-235B的开放权重、训练与医疗能力不是托管M3-Plus规格；当前视觉/最大输出/采样默认没有取得字段证明。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/providers/baichuan.json#Baichuan-M2`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/baichuan/models/baichuan-m2.md)；本轮结论：`official-fields-found`；原状态 `pending` 保持。
- 本轮来源：`baichuan-model-card`、`baichuan-prices-web`。

| 字段 | 当前值 | 官网候选值 | 判定 | 来源及解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"Baichuan-M2"` | `"Baichuan-M2"` | matches | `baichuan-model-card`：本轮正文定位精确标识；只确认该标识在其来源合同出现，不证明其他字段或不同套餐可用性。 |
| `modelName` | `"Baichuan-M2"` | `"Baichuan-M2"` | matches | `baichuan-prices-web`：官网价格表精确列出API模型名；主站旧文章TLS失败不妨碍此独立官方证据。 |
| `contextWindow` | `32000` | `"32k"` | not-comparable | `baichuan-prices-web`：官网上下文32k未明确定义换算；最大输出并未给，不能把32k上下文同时填输出。 |
| `inputPrice` | `2` | `2` | matches | `baichuan-prices-web`：官网元/千token乘1000→元/百万token；Plus另有医疗搜索0.03元/次，不含在token价。 |
| `outputPrice` | `20` | `20` | matches | `baichuan-prices-web`：官网元/千token乘1000→元/百万token；Plus另有医疗搜索0.03元/次，不含在token价。 |

- 仍需核实：`contextWindow`、`defaultTemperature`、`defaultTopP`、`maxOutputTokens`、`capabilities`、`serviceType`、`access.maxInputTokens`、`access.protocol-readiness`。
- 边界：模型卡Baichuan-M3-235B的开放权重、训练与医疗能力不是托管M3-Plus规格；当前视觉/最大输出/采样默认没有取得字段证明。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/model-specs/baichuan.json#Baichuan-M2`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/baichuan/models/baichuan-m2.md)；本轮结论：`official-identity-only`；原状态 `pending` 保持。
- 本轮来源：`baichuan-model-card`、`baichuan-prices-web`。

| 字段 | 当前值 | 官网候选值 | 判定 | 来源及解释 |
| --- | --- | --- | --- | --- |
| `id` | `"Baichuan-M2"` | `"Baichuan-M2"` | matches | `baichuan-model-card`：本轮正文定位精确标识；只确认该标识在其来源合同出现，不证明其他字段或不同套餐可用性。 |
| `id` | `"Baichuan-M2"` | `"Baichuan-M2"` | matches | `baichuan-prices-web`：官网价格表精确列出API模型名；主站旧文章TLS失败不妨碍此独立官方证据。 |
| `spec.contextWindow` | `32000` | `"32k"` | not-comparable | `baichuan-prices-web`：官网上下文32k未明确定义换算；最大输出并未给，不能把32k上下文同时填输出。 |

- 仍需核实：`spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.capabilities`、`spec.serviceType`。
- 边界：模型卡Baichuan-M3-235B的开放权重、训练与医疗能力不是托管M3-Plus规格；当前视觉/最大输出/采样默认没有取得字段证明。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/providers/baichuan.json#Baichuan-M3-Plus`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/baichuan/models/baichuan-m3-plus.md)；本轮结论：`official-fields-found`；原状态 `pending` 保持。
- 本轮来源：`baichuan-prices-web`。

| 字段 | 当前值 | 官网候选值 | 判定 | 来源及解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"Baichuan-M3-Plus"` | `"Baichuan-M3-Plus"` | matches | `baichuan-prices-web`：官网价格表精确列出API模型名；主站旧文章TLS失败不妨碍此独立官方证据。 |
| `contextWindow` | `32000` | `"32k"` | not-comparable | `baichuan-prices-web`：官网上下文32k未明确定义换算；最大输出并未给，不能把32k上下文同时填输出。 |
| `inputPrice` | `5` | `5` | matches | `baichuan-prices-web`：官网元/千token乘1000→元/百万token；Plus另有医疗搜索0.03元/次，不含在token价。 |
| `outputPrice` | `9` | `9` | matches | `baichuan-prices-web`：官网元/千token乘1000→元/百万token；Plus另有医疗搜索0.03元/次，不含在token价。 |

- 仍需核实：`contextWindow`、`defaultTemperature`、`defaultTopP`、`maxOutputTokens`、`capabilities`、`serviceType`、`access.maxInputTokens`、`access.protocol-readiness`。
- 边界：模型卡Baichuan-M3-235B的开放权重、训练与医疗能力不是托管M3-Plus规格；当前视觉/最大输出/采样默认没有取得字段证明。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/model-specs/baichuan.json#Baichuan-M3-Plus`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/baichuan/models/baichuan-m3-plus.md)；本轮结论：`official-identity-only`；原状态 `pending` 保持。
- 本轮来源：`baichuan-prices-web`。

| 字段 | 当前值 | 官网候选值 | 判定 | 来源及解释 |
| --- | --- | --- | --- | --- |
| `id` | `"Baichuan-M3-Plus"` | `"Baichuan-M3-Plus"` | matches | `baichuan-prices-web`：官网价格表精确列出API模型名；主站旧文章TLS失败不妨碍此独立官方证据。 |
| `spec.contextWindow` | `32000` | `"32k"` | not-comparable | `baichuan-prices-web`：官网上下文32k未明确定义换算；最大输出并未给，不能把32k上下文同时填输出。 |

- 仍需核实：`spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.capabilities`、`spec.serviceType`。
- 边界：模型卡Baichuan-M3-235B的开放权重、训练与医疗能力不是托管M3-Plus规格；当前视觉/最大输出/采样默认没有取得字段证明。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/providers/baichuan.json#Baichuan-M3`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/baichuan/models/baichuan-m3.md)；本轮结论：`official-fields-found`；原状态 `pending` 保持。
- 本轮来源：`baichuan-model-card`、`baichuan-prices-web`。

| 字段 | 当前值 | 官网候选值 | 判定 | 来源及解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"Baichuan-M3"` | `"Baichuan-M3"` | matches | `baichuan-model-card`：本轮正文定位精确标识；只确认该标识在其来源合同出现，不证明其他字段或不同套餐可用性。 |
| `modelName` | `"Baichuan-M3"` | `"Baichuan-M3"` | matches | `baichuan-prices-web`：官网价格表精确列出API模型名；主站旧文章TLS失败不妨碍此独立官方证据。 |
| `contextWindow` | `32000` | `"32k"` | not-comparable | `baichuan-prices-web`：官网上下文32k未明确定义换算；最大输出并未给，不能把32k上下文同时填输出。 |
| `inputPrice` | `10` | `10` | matches | `baichuan-prices-web`：官网元/千token乘1000→元/百万token；Plus另有医疗搜索0.03元/次，不含在token价。 |
| `outputPrice` | `30` | `30` | matches | `baichuan-prices-web`：官网元/千token乘1000→元/百万token；Plus另有医疗搜索0.03元/次，不含在token价。 |

- 仍需核实：`contextWindow`、`defaultTemperature`、`defaultTopP`、`maxOutputTokens`、`capabilities`、`serviceType`、`access.maxInputTokens`、`access.protocol-readiness`。
- 边界：模型卡Baichuan-M3-235B的开放权重、训练与医疗能力不是托管M3-Plus规格；当前视觉/最大输出/采样默认没有取得字段证明。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。

### `compute/model-specs/baichuan.json#Baichuan-M3`

- 原来源：[单模型记录](../../../../docs/model-sources/providers/baichuan/models/baichuan-m3.md)；本轮结论：`official-identity-only`；原状态 `pending` 保持。
- 本轮来源：`baichuan-model-card`、`baichuan-prices-web`。

| 字段 | 当前值 | 官网候选值 | 判定 | 来源及解释 |
| --- | --- | --- | --- | --- |
| `id` | `"Baichuan-M3"` | `"Baichuan-M3"` | matches | `baichuan-model-card`：本轮正文定位精确标识；只确认该标识在其来源合同出现，不证明其他字段或不同套餐可用性。 |
| `id` | `"Baichuan-M3"` | `"Baichuan-M3"` | matches | `baichuan-prices-web`：官网价格表精确列出API模型名；主站旧文章TLS失败不妨碍此独立官方证据。 |
| `spec.contextWindow` | `32000` | `"32k"` | not-comparable | `baichuan-prices-web`：官网上下文32k未明确定义换算；最大输出并未给，不能把32k上下文同时填输出。 |

- 仍需核实：`spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.capabilities`、`spec.serviceType`。
- 边界：模型卡Baichuan-M3-235B的开放权重、训练与医疗能力不是托管M3-Plus规格；当前视觉/最大输出/采样默认没有取得字段证明。
- 后续：人工逐字段复核本次候选；只将matches且精确接入适用的字段迁入原来源文档，differs先审单位/阶梯/产品默认；缺项需精确模型页、官方版本卡或授权目录，不猜填。
