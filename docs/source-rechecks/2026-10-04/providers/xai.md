# xai 来源重新核查

核查日期：2026-10-04。覆盖 inventory 中 9 条精确记录。此文是临时候选复核，不修改既有来源状态、数据或 manifest。

以当前精确模型卡和pricing表为准；移走的Fast页面不能用当前其他Grok规格替代；无textoutputlimit不代表另造450000官方cap。

## 本次实际读取与失败尝试

### xai-2b950d5a745e

- 初始链接：[https://docs.x.ai/developers/release-notes](https://docs.x.ai/developers/release-notes)
- 最终链接：[https://docs.x.ai/developers/release-notes](https://docs.x.ai/developers/release-notes)
- 发布者/类型/读取：xAI / official-docs / readable
- 适用范围：该官网文档明确列出的模型/API；不扩展到其他接入面。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### xai-e5cb19c82793

- 初始链接：[https://docs.x.ai/developers/models/grok-4.3](https://docs.x.ai/developers/models/grok-4.3)
- 最终链接：[https://docs.x.ai/developers/models/grok-4.3](https://docs.x.ai/developers/models/grok-4.3)
- 发布者/类型/读取：xAI / official-docs / readable
- 适用范围：该官网文档明确列出的模型/API；不扩展到其他接入面。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### xai-d14fea025626

- 初始链接：[https://docs.x.ai/developers/models/grok-4.7](https://docs.x.ai/developers/models/grok-4.7)
- 最终链接：[https://docs.x.ai/developers/models/grok-4.7](https://docs.x.ai/developers/models/grok-4.7)
- 发布者/类型/读取：xAI / official-docs / readable
- 适用范围：该官网文档明确列出的模型/API；不扩展到其他接入面。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### xai-3a49ad558f18

- 初始链接：[https://docs.x.ai/developers/grok-4-7](https://docs.x.ai/developers/grok-4-7)
- 最终链接：[https://docs.x.ai/developers/grok-4-7](https://docs.x.ai/developers/grok-4-7)
- 发布者/类型/读取：xAI / official-docs / readable
- 适用范围：该官网文档明确列出的模型/API；不扩展到其他接入面。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### xai-80640d2f1b4e

- 初始链接：[https://docs.x.ai/developers/models/grok-4.5](https://docs.x.ai/developers/models/grok-4.5)
- 最终链接：[https://docs.x.ai/developers/models/grok-4.5](https://docs.x.ai/developers/models/grok-4.5)
- 发布者/类型/读取：xAI / official-docs / readable
- 适用范围：该官网文档明确列出的模型/API；不扩展到其他接入面。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### xai-01af808259ff

- 初始链接：[https://docs.x.ai/developers/models/grok-4-1-fast-reasoning](https://docs.x.ai/developers/models/grok-4-1-fast-reasoning)
- 最终链接：[https://docs.x.ai/developers/models](https://docs.x.ai/developers/models)
- 发布者/类型/读取：xAI / official-docs / readable
- 适用范围：该官网文档明确列出的模型/API；不扩展到其他接入面。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### xai-8b07c23a42f9

- 初始链接：[https://docs.x.ai/developers/models/grok-4.20-0309-reasoning](https://docs.x.ai/developers/models/grok-4.20-0309-reasoning)
- 最终链接：[https://docs.x.ai/developers/models/grok-4.20-0309-reasoning](https://docs.x.ai/developers/models/grok-4.20-0309-reasoning)
- 发布者/类型/读取：xAI / official-docs / readable
- 适用范围：该官网文档明确列出的模型/API；不扩展到其他接入面。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### xai-dedf56167aa3

- 初始链接：[https://docs.x.ai/developers/pricing](https://docs.x.ai/developers/pricing)
- 最终链接：[https://docs.x.ai/developers/pricing](https://docs.x.ai/developers/pricing)
- 发布者/类型/读取：xAI / official-docs / readable
- 适用范围：该官网文档明确列出的模型/API；不扩展到其他接入面。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

## 逐记录复核

### `compute/model-specs/xai.json#grok-4-1-fast-reasoning`

- 精确型号：`grok-4-1-fast-reasoning`
- 接入/规格文件：`compute/model-specs/xai.json`
- 原来源记录：`docs/model-sources/providers/xai/models/grok-4-1-fast-reasoning.md`
- 结论：`still-unresolved`

未取得可用于该记录字段的同范围官方证据；失败链接见上方，不把404、页面壳或接近型号当成认证。

剩余缺口：`id`, `spec.contextWindow`, `spec.defaultTemperature`, `spec.maxOutputTokens`, `spec.supportsReasoning`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- 官方精确型号页跳转模型总目录，未取得旧型号独立规格；旧2M/16384/defaulttemperature不得据当前4.3代替。

### `compute/model-specs/xai.json#grok-4-3`

- 精确型号：`grok-4-3`
- 接入/规格文件：`compute/model-specs/xai.json`
- 原来源记录：`docs/model-sources/providers/xai/models/grok-4-3.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `id` | `"grok-4-3"` | `"grok-4.3"` | not-comparable | [xai-e5cb19c82793](https://docs.x.ai/developers/models/grok-4.3)；官方API ID；共享内部id可能不同。 本仓spec内部ID非必然wireID，请核match.exact。 |
| `spec.contextWindow` | `1000000` | `1000000` | matches | [xai-e5cb19c82793](https://docs.x.ai/developers/models/grok-4.3)；原厂正文精确整数。 |
| `accessReference.inputPrice` | `null` | `1.25` | not-comparable | [xai-e5cb19c82793](https://docs.x.ai/developers/models/grok-4.3)；USD / 1Mtokens标准短上下文；>=200k的阶梯另算。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.outputPrice` | `null` | `2.5` | not-comparable | [xai-e5cb19c82793](https://docs.x.ai/developers/models/grok-4.3)；USD / 1Mtokens标准短上下文；>=200k的阶梯另算。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.extra.cachedInputPrice` | `null` | `0.2` | not-comparable | [xai-e5cb19c82793](https://docs.x.ai/developers/models/grok-4.3)；USD / 1Mtokens标准短上下文；>=200k的阶梯另算。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `spec.supportsReasoning` | `true` | `true` | matches | [xai-e5cb19c82793](https://docs.x.ai/developers/models/grok-4.3)；官方该型号能力表支持reasoning。 |

剩余缺口：`id`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

### `compute/providers/xai.json#grok-4.20-0309-reasoning`

- 精确型号：`grok-4.20-0309-reasoning`
- 接入/规格文件：`compute/providers/xai.json`
- 原来源记录：`docs/model-sources/providers/xai/models/grok-4.20-0309-reasoning.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"grok-4.20-0309-reasoning"` | `"grok-4.20-0309-reasoning"` | matches | [xai-8b07c23a42f9](https://docs.x.ai/developers/models/grok-4.20-0309-reasoning)；官方API ID；共享内部id可能不同。 |
| `contextWindow` | `1000000` | `1000000` | matches | [xai-8b07c23a42f9](https://docs.x.ai/developers/models/grok-4.20-0309-reasoning)；原厂正文精确整数。 |
| `inputPrice` | `1.25` | `1.25` | matches | [xai-8b07c23a42f9](https://docs.x.ai/developers/models/grok-4.20-0309-reasoning)；USD / 1Mtokens标准短上下文；>=200k的阶梯另算。 |
| `outputPrice` | `2.5` | `2.5` | matches | [xai-8b07c23a42f9](https://docs.x.ai/developers/models/grok-4.20-0309-reasoning)；USD / 1Mtokens标准短上下文；>=200k的阶梯另算。 |
| `extra.cachedInputPrice` | `0.2` | `0.2` | matches | [xai-8b07c23a42f9](https://docs.x.ai/developers/models/grok-4.20-0309-reasoning)；USD / 1Mtokens标准短上下文；>=200k的阶梯另算。 |
| `supportsReasoning` | `null` | `true` | differs | [xai-8b07c23a42f9](https://docs.x.ai/developers/models/grok-4.20-0309-reasoning)；官方该型号能力表支持reasoning。 |

剩余缺口：`defaultTemperature`, `defaultTopP`, `maxOutputTokens`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

### `compute/model-specs/xai.json#grok-4.20-0309-reasoning`

- 精确型号：`grok-4.20-0309-reasoning`
- 接入/规格文件：`compute/model-specs/xai.json`
- 原来源记录：`docs/model-sources/providers/xai/models/grok-4.20-0309-reasoning.md`
- 结论：`official-conflict`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `id` | `"grok-4.20-0309-reasoning"` | `"grok-4.20-0309-reasoning"` | matches | [xai-8b07c23a42f9](https://docs.x.ai/developers/models/grok-4.20-0309-reasoning)；官方API ID；共享内部id可能不同。 |
| `spec.contextWindow` | `2000000` | `1000000` | differs | [xai-8b07c23a42f9](https://docs.x.ai/developers/models/grok-4.20-0309-reasoning)；原厂正文精确整数。 |
| `accessReference.inputPrice` | `null` | `1.25` | not-comparable | [xai-8b07c23a42f9](https://docs.x.ai/developers/models/grok-4.20-0309-reasoning)；USD / 1Mtokens标准短上下文；>=200k的阶梯另算。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.outputPrice` | `null` | `2.5` | not-comparable | [xai-8b07c23a42f9](https://docs.x.ai/developers/models/grok-4.20-0309-reasoning)；USD / 1Mtokens标准短上下文；>=200k的阶梯另算。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.extra.cachedInputPrice` | `null` | `0.2` | not-comparable | [xai-8b07c23a42f9](https://docs.x.ai/developers/models/grok-4.20-0309-reasoning)；USD / 1Mtokens标准短上下文；>=200k的阶梯另算。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `spec.supportsReasoning` | `true` | `true` | matches | [xai-8b07c23a42f9](https://docs.x.ai/developers/models/grok-4.20-0309-reasoning)；官方该型号能力表支持reasoning。 |

剩余缺口：`spec.defaultTemperature`, `spec.maxOutputTokens`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

### `compute/providers/xai.json#grok-4.3`

- 精确型号：`grok-4.3`
- 接入/规格文件：`compute/providers/xai.json`
- 原来源记录：`docs/model-sources/providers/xai/models/grok-4.3.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"grok-4.3"` | `"grok-4.3"` | matches | [xai-e5cb19c82793](https://docs.x.ai/developers/models/grok-4.3)；官方API ID；共享内部id可能不同。 |
| `contextWindow` | `1000000` | `1000000` | matches | [xai-e5cb19c82793](https://docs.x.ai/developers/models/grok-4.3)；原厂正文精确整数。 |
| `inputPrice` | `1.25` | `1.25` | matches | [xai-e5cb19c82793](https://docs.x.ai/developers/models/grok-4.3)；USD / 1Mtokens标准短上下文；>=200k的阶梯另算。 |
| `outputPrice` | `2.5` | `2.5` | matches | [xai-e5cb19c82793](https://docs.x.ai/developers/models/grok-4.3)；USD / 1Mtokens标准短上下文；>=200k的阶梯另算。 |
| `extra.cachedInputPrice` | `0.2` | `0.2` | matches | [xai-e5cb19c82793](https://docs.x.ai/developers/models/grok-4.3)；USD / 1Mtokens标准短上下文；>=200k的阶梯另算。 |
| `supportsReasoning` | `null` | `true` | differs | [xai-e5cb19c82793](https://docs.x.ai/developers/models/grok-4.3)；官方该型号能力表支持reasoning。 |

剩余缺口：`defaultTemperature`, `defaultTopP`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

### `compute/model-specs/xai.json#grok-4.5`

- 精确型号：`grok-4.5`
- 接入/规格文件：`compute/model-specs/xai.json`
- 原来源记录：`docs/model-sources/providers/xai/models/grok-4.5.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `id` | `"grok-4.5"` | `"grok-4.5"` | matches | [xai-80640d2f1b4e](https://docs.x.ai/developers/models/grok-4.5)；官方API ID；共享内部id可能不同。 |
| `spec.contextWindow` | `500000` | `500000` | matches | [xai-80640d2f1b4e](https://docs.x.ai/developers/models/grok-4.5)；原厂正文精确整数。 |
| `accessReference.inputPrice` | `null` | `2.0` | not-comparable | [xai-80640d2f1b4e](https://docs.x.ai/developers/models/grok-4.5)；USD / 1Mtokens标准短上下文；>=200k的阶梯另算。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.outputPrice` | `null` | `6.0` | not-comparable | [xai-80640d2f1b4e](https://docs.x.ai/developers/models/grok-4.5)；USD / 1Mtokens标准短上下文；>=200k的阶梯另算。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.extra.cachedInputPrice` | `null` | `0.3` | not-comparable | [xai-80640d2f1b4e](https://docs.x.ai/developers/models/grok-4.5)；USD / 1Mtokens标准短上下文；>=200k的阶梯另算。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `spec.supportsReasoning` | `true` | `true` | matches | [xai-80640d2f1b4e](https://docs.x.ai/developers/models/grok-4.5)；官方该型号能力表支持reasoning。 |

剩余缺口：`spec.extra.thinkingOnly`, `spec.maxOutputTokens`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- 官方发布页说明No text output limit；本仓450000上限没有该整数证据，应区分本仓安全策略和原厂硬cap。

### `compute/providers/xai.json#grok-4.7`

- 精确型号：`grok-4.7`
- 接入/规格文件：`compute/providers/xai.json`
- 原来源记录：`docs/model-sources/providers/xai/models/grok-4.7.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"grok-4.7"` | `"grok-4.7"` | matches | [xai-d14fea025626](https://docs.x.ai/developers/models/grok-4.7)；官方API ID；共享内部id可能不同。 |
| `contextWindow` | `500000` | `500000` | matches | [xai-d14fea025626](https://docs.x.ai/developers/models/grok-4.7)；原厂正文精确整数。 |
| `inputPrice` | `2` | `2.0` | matches | [xai-d14fea025626](https://docs.x.ai/developers/models/grok-4.7)；USD / 1Mtokens标准短上下文；>=200k的阶梯另算。 |
| `outputPrice` | `6` | `6.0` | matches | [xai-d14fea025626](https://docs.x.ai/developers/models/grok-4.7)；USD / 1Mtokens标准短上下文；>=200k的阶梯另算。 |
| `extra.cachedInputPrice` | `0.5` | `0.5` | matches | [xai-d14fea025626](https://docs.x.ai/developers/models/grok-4.7)；USD / 1Mtokens标准短上下文；>=200k的阶梯另算。 |
| `supportsReasoning` | `null` | `true` | differs | [xai-d14fea025626](https://docs.x.ai/developers/models/grok-4.7)；官方该型号能力表支持reasoning。 |
| `extra.reasoning.supportedEfforts` | `["low","medium","high","xhigh"]` | `["low","medium","high","xhigh"]` | matches | [xai-3a49ad558f18](https://docs.x.ai/developers/grok-4-7)；该精确型号/平台字段的官方正文证据；未核其他参数。 |
| `extra.reasoning.defaultEffort` | `"high"` | `"high"` | matches | [xai-3a49ad558f18](https://docs.x.ai/developers/grok-4-7)；该精确型号/平台字段的官方正文证据；未核其他参数。 |
| `maxOutputTokens` | `null` | `"no-text-output-limit"` | not-comparable | [xai-3a49ad558f18](https://docs.x.ai/developers/grok-4-7)；官方明确无textoutputlimit，不制造新整数。 |

剩余缺口：原 inventory 所列缺字段已有候选证据；不代表账号实测或全规格无缺口。

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。

### `compute/model-specs/xai.json#grok-4.7`

- 精确型号：`grok-4.7`
- 接入/规格文件：`compute/model-specs/xai.json`
- 原来源记录：`docs/model-sources/providers/xai/models/grok-4.7.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `id` | `"grok-4.7"` | `"grok-4.7"` | matches | [xai-d14fea025626](https://docs.x.ai/developers/models/grok-4.7)；官方API ID；共享内部id可能不同。 |
| `spec.contextWindow` | `500000` | `500000` | matches | [xai-d14fea025626](https://docs.x.ai/developers/models/grok-4.7)；原厂正文精确整数。 |
| `accessReference.inputPrice` | `null` | `2.0` | not-comparable | [xai-d14fea025626](https://docs.x.ai/developers/models/grok-4.7)；USD / 1Mtokens标准短上下文；>=200k的阶梯另算。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.outputPrice` | `null` | `6.0` | not-comparable | [xai-d14fea025626](https://docs.x.ai/developers/models/grok-4.7)；USD / 1Mtokens标准短上下文；>=200k的阶梯另算。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.extra.cachedInputPrice` | `null` | `0.5` | not-comparable | [xai-d14fea025626](https://docs.x.ai/developers/models/grok-4.7)；USD / 1Mtokens标准短上下文；>=200k的阶梯另算。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `spec.supportsReasoning` | `true` | `true` | matches | [xai-d14fea025626](https://docs.x.ai/developers/models/grok-4.7)；官方该型号能力表支持reasoning。 |
| `spec.extra.reasoning.supportedEfforts` | `null` | `["low","medium","high","xhigh"]` | differs | [xai-3a49ad558f18](https://docs.x.ai/developers/grok-4-7)；该精确型号/平台字段的官方正文证据；未核其他参数。 |
| `spec.extra.reasoning.defaultEffort` | `null` | `"high"` | differs | [xai-3a49ad558f18](https://docs.x.ai/developers/grok-4-7)；该精确型号/平台字段的官方正文证据；未核其他参数。 |
| `spec.maxOutputTokens` | `null` | `"no-text-output-limit"` | not-comparable | [xai-3a49ad558f18](https://docs.x.ai/developers/grok-4-7)；官方明确无textoutputlimit，不制造新整数。 |

剩余缺口：原 inventory 所列缺字段已有候选证据；不代表账号实测或全规格无缺口。

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。

### `compute/providers/xai.json#grok-build-0.1`

- 精确型号：`grok-build-0.1`
- 接入/规格文件：`compute/providers/xai.json`
- 原来源记录：`docs/model-sources/providers/xai/models/grok-build-0.1.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"grok-build-0.1"` | `"grok-build-0.1"` | matches | [xai-dedf56167aa3](https://docs.x.ai/developers/pricing)；该精确型号/平台字段的官方正文证据；未核其他参数。 |
| `contextWindow` | `256000` | `"256k"` | not-comparable | [xai-dedf56167aa3](https://docs.x.ai/developers/pricing)；官网pricing表仅缩写，不证明精确256000/262144。 |
| `inputPrice` | `1` | `1` | matches | [xai-dedf56167aa3](https://docs.x.ai/developers/pricing)；该精确ID pricing行USD/1M，>=200k分别2/0.4/4。 |
| `outputPrice` | `2` | `2` | matches | [xai-dedf56167aa3](https://docs.x.ai/developers/pricing)；该精确ID pricing行USD/1M，>=200k分别2/0.4/4。 |
| `extra.cachedInputPrice` | `0.2` | `0.2` | matches | [xai-dedf56167aa3](https://docs.x.ai/developers/pricing)；该精确ID pricing行USD/1M，>=200k分别2/0.4/4。 |

剩余缺口：`contextWindow`, `defaultTemperature`, `defaultTopP`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。
