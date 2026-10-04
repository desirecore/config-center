# mistral 来源重新核查

核查日期：2026-10-04。覆盖 inventory 中 9 条精确记录。此文是临时候选复核，不修改既有来源状态、数据或 manifest。

latest别名会移动。官方known-limits只给K缩写，保留该原值，未将256k自动认证为262144；API精确连字符ID与共享内部ID分开。

## 本次实际读取与失败尝试

### mistral-d844075da16b

- 初始链接：[https://docs.mistral.ai/models](https://docs.mistral.ai/models)
- 最终链接：[https://docs.mistral.ai/models](https://docs.mistral.ai/models)
- 发布者/类型/读取：Mistral AI / official-docs / readable
- 适用范围：该官网文档明确列出的模型/API；不扩展到其他接入面。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### mistral-9936c2015c06

- 初始链接：[https://docs.mistral.ai/models/codestral-25-08](https://docs.mistral.ai/models/codestral-25-08)
- 最终链接：[https://docs.mistral.ai/models/codestral-25-08](https://docs.mistral.ai/models/codestral-25-08)
- 发布者/类型/读取：Mistral AI / official-docs / readable
- 适用范围：该官网文档明确列出的模型/API；不扩展到其他接入面。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### mistral-3ab28585a19b

- 初始链接：[https://docs.mistral.ai/models/mistral-large-3-25-12](https://docs.mistral.ai/models/mistral-large-3-25-12)
- 最终链接：[https://docs.mistral.ai/models/mistral-large-3-25-12](https://docs.mistral.ai/models/mistral-large-3-25-12)
- 发布者/类型/读取：Mistral AI / official-docs / readable
- 适用范围：该官网文档明确列出的模型/API；不扩展到其他接入面。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### mistral-ece7a0a55f7b

- 初始链接：[https://docs.mistral.ai/models/mistral-medium-3-5-26-04](https://docs.mistral.ai/models/mistral-medium-3-5-26-04)
- 最终链接：[https://docs.mistral.ai/models/mistral-medium-3-5-26-04](https://docs.mistral.ai/models/mistral-medium-3-5-26-04)
- 发布者/类型/读取：Mistral AI / official-docs / readable
- 适用范围：该官网文档明确列出的模型/API；不扩展到其他接入面。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### mistral-b0218078301d

- 初始链接：[https://docs.mistral.ai/models/mistral-small-4-0-26-03](https://docs.mistral.ai/models/mistral-small-4-0-26-03)
- 最终链接：[https://docs.mistral.ai/models/mistral-small-4-0-26-03](https://docs.mistral.ai/models/mistral-small-4-0-26-03)
- 发布者/类型/读取：Mistral AI / official-docs / readable
- 适用范围：该官网文档明确列出的模型/API；不扩展到其他接入面。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### mistral-d8f92d5709d6

- 初始链接：[https://docs.mistral.ai/resources/known-limitations](https://docs.mistral.ai/resources/known-limitations)
- 最终链接：[https://docs.mistral.ai/resources/known-limitations](https://docs.mistral.ai/resources/known-limitations)
- 发布者/类型/读取：Mistral AI / official-docs / readable
- 适用范围：该官网文档明确列出的模型/API；不扩展到其他接入面。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

## 逐记录复核

### `compute/providers/mistral.json#codestral-latest`

- 精确型号：`codestral-latest`
- 接入/规格文件：`compute/providers/mistral.json`
- 原来源记录：`docs/model-sources/providers/mistral/models/codestral-latest.md`
- 结论：`official-identity-only`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `contextWindow` | `128000` | `"128k"` | not-comparable | [mistral-d8f92d5709d6](https://docs.mistral.ai/resources/known-limitations)；官方known-limits总context包含输入输出；只给缩写，尚未证明本仓131072/262144精确整数。 |

剩余缺口：`contextWindow`, `defaultTemperature`, `defaultTopP`, `maxOutputTokens`, `modelName`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- 仅latest名称不足以长期固定代际；默认temperature/top_p与最大输出须查对应endpoint schema/真实GET models，不能从网页读取成功推定。

### `compute/model-specs/mistral.json#codestral-latest`

- 精确型号：`codestral-latest`
- 接入/规格文件：`compute/model-specs/mistral.json`
- 原来源记录：`docs/model-sources/providers/mistral/models/codestral-latest.md`
- 结论：`official-identity-only`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `spec.contextWindow` | `128000` | `"128k"` | not-comparable | [mistral-d8f92d5709d6](https://docs.mistral.ai/resources/known-limitations)；官方known-limits总context包含输入输出；只给缩写，尚未证明本仓131072/262144精确整数。 |

剩余缺口：`id`, `spec.contextWindow`, `spec.defaultTemperature`, `spec.maxOutputTokens`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- 仅latest名称不足以长期固定代际；默认temperature/top_p与最大输出须查对应endpoint schema/真实GET models，不能从网页读取成功推定。

### `compute/providers/mistral.json#mistral-large-latest`

- 精确型号：`mistral-large-latest`
- 接入/规格文件：`compute/providers/mistral.json`
- 原来源记录：`docs/model-sources/providers/mistral/models/mistral-large-latest.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `contextWindow` | `256000` | `"256k"` | not-comparable | [mistral-d8f92d5709d6](https://docs.mistral.ai/resources/known-limitations)；官方known-limits总context包含输入输出；只给缩写，尚未证明本仓131072/262144精确整数。 |
| `inputPrice` | `0.5` | `0.5` | matches | [mistral-3ab28585a19b](https://docs.mistral.ai/models/mistral-large-3-25-12)；Large3当前报价 |
| `outputPrice` | `1.5` | `1.5` | matches | [mistral-3ab28585a19b](https://docs.mistral.ai/models/mistral-large-3-25-12)；Large3当前报价 |

剩余缺口：`contextWindow`, `defaultTemperature`, `defaultTopP`, `modelName`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- 仅latest名称不足以长期固定代际；默认temperature/top_p与最大输出须查对应endpoint schema/真实GET models，不能从网页读取成功推定。

### `compute/model-specs/mistral.json#mistral-large-latest`

- 精确型号：`mistral-large-latest`
- 接入/规格文件：`compute/model-specs/mistral.json`
- 原来源记录：`docs/model-sources/providers/mistral/models/mistral-large-latest.md`
- 结论：`official-identity-only`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `spec.contextWindow` | `256000` | `"256k"` | not-comparable | [mistral-d8f92d5709d6](https://docs.mistral.ai/resources/known-limitations)；官方known-limits总context包含输入输出；只给缩写，尚未证明本仓131072/262144精确整数。 |
| `accessReference.inputPrice` | `null` | `0.5` | not-comparable | [mistral-3ab28585a19b](https://docs.mistral.ai/models/mistral-large-3-25-12)；Large3当前报价 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.outputPrice` | `null` | `1.5` | not-comparable | [mistral-3ab28585a19b](https://docs.mistral.ai/models/mistral-large-3-25-12)；Large3当前报价 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |

剩余缺口：`id`, `spec.contextWindow`, `spec.defaultTemperature`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- 仅latest名称不足以长期固定代际；默认temperature/top_p与最大输出须查对应endpoint schema/真实GET models，不能从网页读取成功推定。

### `compute/providers/mistral.json#mistral-medium-3-5`

- 精确型号：`mistral-medium-3-5`
- 接入/规格文件：`compute/providers/mistral.json`
- 原来源记录：`docs/model-sources/providers/mistral/models/mistral-medium-3-5.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"mistral-medium-3-5"` | `"mistral-medium-3-5"` | matches | [mistral-ece7a0a55f7b](https://docs.mistral.ai/models/mistral-medium-3-5-26-04)；共享内部显示ID与API连字符ID须分离；latest为可移动alias。 |
| `contextWindow` | `262144` | `"256k"` | not-comparable | [mistral-d8f92d5709d6](https://docs.mistral.ai/resources/known-limitations)；官方known-limits总context包含输入输出；只给缩写，尚未证明本仓131072/262144精确整数。 |
| `inputPrice` | `1.5` | `1.5` | matches | [mistral-ece7a0a55f7b](https://docs.mistral.ai/models/mistral-medium-3-5-26-04)；当前Medium3.5原厂USD / milliontokens |
| `outputPrice` | `7.5` | `7.5` | matches | [mistral-ece7a0a55f7b](https://docs.mistral.ai/models/mistral-medium-3-5-26-04)；当前Medium3.5原厂USD / milliontokens |

剩余缺口：`contextWindow`, `defaultTemperature`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- 仅latest名称不足以长期固定代际；默认temperature/top_p与最大输出须查对应endpoint schema/真实GET models，不能从网页读取成功推定。

### `compute/model-specs/mistral.json#mistral-medium-3.5`

- 精确型号：`mistral-medium-3.5`
- 接入/规格文件：`compute/model-specs/mistral.json`
- 原来源记录：`docs/model-sources/providers/mistral/models/mistral-medium-3.5.md`
- 结论：`official-identity-only`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `id` | `"mistral-medium-3.5"` | `"mistral-medium-3-5"` | not-comparable | [mistral-ece7a0a55f7b](https://docs.mistral.ai/models/mistral-medium-3-5-26-04)；共享内部显示ID与API连字符ID须分离；latest为可移动alias。 本仓spec内部ID非必然wireID，请核match.exact。 |
| `spec.contextWindow` | `262144` | `"256k"` | not-comparable | [mistral-d8f92d5709d6](https://docs.mistral.ai/resources/known-limitations)；官方known-limits总context包含输入输出；只给缩写，尚未证明本仓131072/262144精确整数。 |
| `accessReference.inputPrice` | `null` | `1.5` | not-comparable | [mistral-ece7a0a55f7b](https://docs.mistral.ai/models/mistral-medium-3-5-26-04)；当前Medium3.5原厂USD / milliontokens 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.outputPrice` | `null` | `7.5` | not-comparable | [mistral-ece7a0a55f7b](https://docs.mistral.ai/models/mistral-medium-3-5-26-04)；当前Medium3.5原厂USD / milliontokens 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |

剩余缺口：`id`, `spec.contextWindow`, `spec.defaultTemperature`, `spec.supportsReasoning`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- 仅latest名称不足以长期固定代际；默认temperature/top_p与最大输出须查对应endpoint schema/真实GET models，不能从网页读取成功推定。

### `compute/providers/mistral.json#mistral-medium-latest`

- 精确型号：`mistral-medium-latest`
- 接入/规格文件：`compute/providers/mistral.json`
- 原来源记录：`docs/model-sources/providers/mistral/models/mistral-medium-latest.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `contextWindow` | `262144` | `"256k"` | not-comparable | [mistral-d8f92d5709d6](https://docs.mistral.ai/resources/known-limitations)；官方known-limits总context包含输入输出；只给缩写，尚未证明本仓131072/262144精确整数。 |
| `inputPrice` | `1.5` | `1.5` | matches | [mistral-ece7a0a55f7b](https://docs.mistral.ai/models/mistral-medium-3-5-26-04)；当前Medium3.5原厂USD / milliontokens |
| `outputPrice` | `7.5` | `7.5` | matches | [mistral-ece7a0a55f7b](https://docs.mistral.ai/models/mistral-medium-3-5-26-04)；当前Medium3.5原厂USD / milliontokens |

剩余缺口：`contextWindow`, `defaultTemperature`, `defaultTopP`, `modelName`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- 仅latest名称不足以长期固定代际；默认temperature/top_p与最大输出须查对应endpoint schema/真实GET models，不能从网页读取成功推定。

### `compute/providers/mistral.json#mistral-small-latest`

- 精确型号：`mistral-small-latest`
- 接入/规格文件：`compute/providers/mistral.json`
- 原来源记录：`docs/model-sources/providers/mistral/models/mistral-small-latest.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `contextWindow` | `262144` | `"256k"` | not-comparable | [mistral-d8f92d5709d6](https://docs.mistral.ai/resources/known-limitations)；官方known-limits总context包含输入输出；只给缩写，尚未证明本仓131072/262144精确整数。 |
| `inputPrice` | `0.15` | `0.15` | matches | [mistral-b0218078301d](https://docs.mistral.ai/models/mistral-small-4-0-26-03)；Small4当前报价 |
| `outputPrice` | `0.6` | `0.6` | matches | [mistral-b0218078301d](https://docs.mistral.ai/models/mistral-small-4-0-26-03)；Small4当前报价 |

剩余缺口：`contextWindow`, `defaultTemperature`, `defaultTopP`, `modelName`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- 仅latest名称不足以长期固定代际；默认temperature/top_p与最大输出须查对应endpoint schema/真实GET models，不能从网页读取成功推定。

### `compute/model-specs/mistral.json#mistral-small-latest`

- 精确型号：`mistral-small-latest`
- 接入/规格文件：`compute/model-specs/mistral.json`
- 原来源记录：`docs/model-sources/providers/mistral/models/mistral-small-latest.md`
- 结论：`official-identity-only`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `spec.contextWindow` | `262144` | `"256k"` | not-comparable | [mistral-d8f92d5709d6](https://docs.mistral.ai/resources/known-limitations)；官方known-limits总context包含输入输出；只给缩写，尚未证明本仓131072/262144精确整数。 |
| `accessReference.inputPrice` | `null` | `0.15` | not-comparable | [mistral-b0218078301d](https://docs.mistral.ai/models/mistral-small-4-0-26-03)；Small4当前报价 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.outputPrice` | `null` | `0.6` | not-comparable | [mistral-b0218078301d](https://docs.mistral.ai/models/mistral-small-4-0-26-03)；Small4当前报价 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |

剩余缺口：`id`, `spec.contextWindow`, `spec.defaultTemperature`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- 仅latest名称不足以长期固定代际；默认temperature/top_p与最大输出须查对应endpoint schema/真实GET models，不能从网页读取成功推定。
