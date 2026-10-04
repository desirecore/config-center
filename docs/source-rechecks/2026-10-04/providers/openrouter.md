# openrouter 来源重新核查

核查日期：2026-10-04。覆盖 inventory 中 15 条精确记录。此文是临时候选复核，不修改既有来源状态、数据或 manifest。

实际读取公共Models API；所有参数/价格限于OpenRouter平台当前目录。动态auto负价占位不是免费；后端最大completion不等于原厂统一规格。

## 本次实际读取与失败尝试

### openrouter-051e0609abb5

- 初始链接：[https://openrouter.ai/api/v1/models](https://openrouter.ai/api/v1/models)
- 最终链接：[https://openrouter.ai/api/v1/models](https://openrouter.ai/api/v1/models)
- 发布者/类型/读取：OpenRouter / official-platform / readable
- 适用范围：该官网文档明确列出的模型/API；不扩展到其他接入面。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

## 逐记录复核

### `compute/providers/openrouter.json#anthropic/claude-opus-5.5`

- 精确型号：`anthropic/claude-opus-5.5`
- 接入/规格文件：`compute/providers/openrouter.json`
- 原来源记录：`docs/model-sources/providers/openrouter/models/anthropic--claude-opus-5.5.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"anthropic/claude-opus-5.5"` | `"anthropic/claude-opus-5.5"` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；公共目录精确id，不证明账号有权或指定后端可用。 |
| `contextWindow` | `1000000` | `1000000` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；该平台目录context_length；不反推原厂合同。 |
| `maxOutputTokens` | `128000` | `128000` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；top_provider当前max_completion_tokens，可随后端变化。 |
| `inputPrice` | `4` | `4.0` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；OpenRouter USD/token×1,000,000；不得套用原厂价格。 |
| `outputPrice` | `20` | `20.0` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；OpenRouter USD/token×1,000,000；不得套用原厂价格。 |
| `extra.cachedInputPrice` | `null` | `0.2` | differs | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；OpenRouter USD/token×1,000,000；不得套用原厂价格。 |
| `supportedParameters` | `null` | `["include_reasoning","max_completion_tokens","max_tokens","reasoning","reasoning_effort","response_format","stop","structured_outputs","temperature","tool_choice","tools","verbosity"]` | differs | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；平台目录声明支持参数，不同后端/账号仍需验收。 |

剩余缺口：原 inventory 所列缺字段已有候选证据；不代表账号实测或全规格无缺口。

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。

### `compute/providers/openrouter.json#anthropic/claude-sonnet-5.5`

- 精确型号：`anthropic/claude-sonnet-5.5`
- 接入/规格文件：`compute/providers/openrouter.json`
- 原来源记录：`docs/model-sources/providers/openrouter/models/anthropic--claude-sonnet-5.5.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"anthropic/claude-sonnet-5.5"` | `"anthropic/claude-sonnet-5.5"` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；公共目录精确id，不证明账号有权或指定后端可用。 |
| `contextWindow` | `1000000` | `1000000` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；该平台目录context_length；不反推原厂合同。 |
| `maxOutputTokens` | `128000` | `128000` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；top_provider当前max_completion_tokens，可随后端变化。 |
| `inputPrice` | `2` | `2.0` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；OpenRouter USD/token×1,000,000；不得套用原厂价格。 |
| `outputPrice` | `10` | `10.0` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；OpenRouter USD/token×1,000,000；不得套用原厂价格。 |
| `extra.cachedInputPrice` | `null` | `0.2` | differs | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；OpenRouter USD/token×1,000,000；不得套用原厂价格。 |
| `supportedParameters` | `null` | `["include_reasoning","max_completion_tokens","max_tokens","reasoning","reasoning_effort","response_format","stop","structured_outputs","temperature","tool_choice","tools","verbosity"]` | differs | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；平台目录声明支持参数，不同后端/账号仍需验收。 |

剩余缺口：原 inventory 所列缺字段已有候选证据；不代表账号实测或全规格无缺口。

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。

### `compute/providers/openrouter.json#cohere/command-a-plus`

- 精确型号：`cohere/command-a-plus`
- 接入/规格文件：`compute/providers/openrouter.json`
- 原来源记录：`docs/model-sources/providers/openrouter/models/cohere--command-a-plus.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"cohere/command-a-plus"` | `"cohere/command-a-plus"` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；公共目录精确id，不证明账号有权或指定后端可用。 |
| `contextWindow` | `192000` | `192000` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；该平台目录context_length；不反推原厂合同。 |
| `maxOutputTokens` | `64000` | `64000` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；top_provider当前max_completion_tokens，可随后端变化。 |
| `inputPrice` | `0.3` | `0.3` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；OpenRouter USD/token×1,000,000；不得套用原厂价格。 |
| `outputPrice` | `1.5` | `1.5` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；OpenRouter USD/token×1,000,000；不得套用原厂价格。 |
| `extra.cachedInputPrice` | `null` | `0.15` | differs | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；OpenRouter USD/token×1,000,000；不得套用原厂价格。 |
| `supportedParameters` | `null` | `["frequency_penalty","include_reasoning","max_tokens","presence_penalty","reasoning","response_format","seed","stop","structured_outputs","temperature","tools","top_k","top_p"]` | differs | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；平台目录声明支持参数，不同后端/账号仍需验收。 |

剩余缺口：原 inventory 所列缺字段已有候选证据；不代表账号实测或全规格无缺口。

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。

### `compute/providers/openrouter.json#deepseek/deepseek-v4.1-flash`

- 精确型号：`deepseek/deepseek-v4.1-flash`
- 接入/规格文件：`compute/providers/openrouter.json`
- 原来源记录：`docs/model-sources/providers/openrouter/models/deepseek--deepseek-v4.1-flash.md`
- 结论：`official-conflict`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"deepseek/deepseek-v4.1-flash"` | `"deepseek/deepseek-v4.1-flash"` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；公共目录精确id，不证明账号有权或指定后端可用。 |
| `contextWindow` | `1048576` | `1048576` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；该平台目录context_length；不反推原厂合同。 |
| `maxOutputTokens` | `943718` | `943718` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；top_provider当前max_completion_tokens，可随后端变化。 |
| `inputPrice` | `0.3` | `0.003` | differs | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；OpenRouter USD/token×1,000,000；不得套用原厂价格。 |
| `outputPrice` | `1.2` | `2.4` | differs | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；OpenRouter USD/token×1,000,000；不得套用原厂价格。 |
| `extra.cachedInputPrice` | `null` | `0.003` | differs | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；OpenRouter USD/token×1,000,000；不得套用原厂价格。 |
| `supportedParameters` | `null` | `["frequency_penalty","include_reasoning","logit_bias","logprobs","max_tokens","min_p","presence_penalty","reasoning","reasoning_effort","repetition_penalty","response_format","seed","stop","structured_outputs","temperature","tool_choice","tools","top_k","top_logprobs","top_p"]` | differs | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；平台目录声明支持参数，不同后端/账号仍需验收。 |

剩余缺口：原 inventory 所列缺字段已有候选证据；不代表账号实测或全规格无缺口。

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。

### `compute/providers/openrouter.json#google/gemini-3.8-flash`

- 精确型号：`google/gemini-3.8-flash`
- 接入/规格文件：`compute/providers/openrouter.json`
- 原来源记录：`docs/model-sources/providers/openrouter/models/google--gemini-3.8-flash.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"google/gemini-3.8-flash"` | `"google/gemini-3.8-flash"` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；公共目录精确id，不证明账号有权或指定后端可用。 |
| `contextWindow` | `1048576` | `1048576` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；该平台目录context_length；不反推原厂合同。 |
| `maxOutputTokens` | `65536` | `65536` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；top_provider当前max_completion_tokens，可随后端变化。 |
| `inputPrice` | `0.75` | `0.75` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；OpenRouter USD/token×1,000,000；不得套用原厂价格。 |
| `outputPrice` | `3.75` | `3.75` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；OpenRouter USD/token×1,000,000；不得套用原厂价格。 |
| `extra.cachedInputPrice` | `null` | `0.075` | differs | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；OpenRouter USD/token×1,000,000；不得套用原厂价格。 |
| `supportedParameters` | `null` | `["include_reasoning","max_tokens","reasoning","reasoning_effort","response_format","seed","stop","structured_outputs","temperature","tool_choice","tools","top_p"]` | differs | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；平台目录声明支持参数，不同后端/账号仍需验收。 |

剩余缺口：原 inventory 所列缺字段已有候选证据；不代表账号实测或全规格无缺口。

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。

### `compute/providers/openrouter.json#minimax/minimax-m3`

- 精确型号：`minimax/minimax-m3`
- 接入/规格文件：`compute/providers/openrouter.json`
- 原来源记录：`docs/model-sources/providers/openrouter/models/minimax--minimax-m3.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"minimax/minimax-m3"` | `"minimax/minimax-m3"` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；公共目录精确id，不证明账号有权或指定后端可用。 |
| `contextWindow` | `1048576` | `1048576` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；该平台目录context_length；不反推原厂合同。 |
| `maxOutputTokens` | `512000` | `512000` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；top_provider当前max_completion_tokens，可随后端变化。 |
| `inputPrice` | `0.3` | `0.3` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；OpenRouter USD/token×1,000,000；不得套用原厂价格。 |
| `outputPrice` | `1.2` | `1.2` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；OpenRouter USD/token×1,000,000；不得套用原厂价格。 |
| `extra.cachedInputPrice` | `null` | `0.06` | differs | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；OpenRouter USD/token×1,000,000；不得套用原厂价格。 |
| `supportedParameters` | `null` | `["frequency_penalty","include_reasoning","logit_bias","logprobs","max_tokens","min_p","presence_penalty","reasoning","repetition_penalty","response_format","seed","stop","structured_outputs","temperature","tool_choice","tools","top_k","top_logprobs","top_p"]` | differs | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；平台目录声明支持参数，不同后端/账号仍需验收。 |

剩余缺口：原 inventory 所列缺字段已有候选证据；不代表账号实测或全规格无缺口。

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。

### `compute/providers/openrouter.json#mistralai/mistral-medium-3-5`

- 精确型号：`mistralai/mistral-medium-3-5`
- 接入/规格文件：`compute/providers/openrouter.json`
- 原来源记录：`docs/model-sources/providers/openrouter/models/mistralai--mistral-medium-3-5.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"mistralai/mistral-medium-3-5"` | `"mistralai/mistral-medium-3-5"` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；公共目录精确id，不证明账号有权或指定后端可用。 |
| `contextWindow` | `262144` | `262144` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；该平台目录context_length；不反推原厂合同。 |
| `maxOutputTokens` | `209715` | `209715` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；top_provider当前max_completion_tokens，可随后端变化。 |
| `inputPrice` | `1.5` | `1.5` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；OpenRouter USD/token×1,000,000；不得套用原厂价格。 |
| `outputPrice` | `7.5` | `7.5` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；OpenRouter USD/token×1,000,000；不得套用原厂价格。 |
| `supportedParameters` | `null` | `["frequency_penalty","include_reasoning","max_tokens","presence_penalty","reasoning","reasoning_effort","response_format","seed","stop","structured_outputs","temperature","tool_choice","tools","top_p"]` | differs | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；平台目录声明支持参数，不同后端/账号仍需验收。 |

剩余缺口：原 inventory 所列缺字段已有候选证据；不代表账号实测或全规格无缺口。

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。

### `compute/providers/openrouter.json#moonshotai/kimi-k3`

- 精确型号：`moonshotai/kimi-k3`
- 接入/规格文件：`compute/providers/openrouter.json`
- 原来源记录：`docs/model-sources/providers/openrouter/models/moonshotai--kimi-k3.md`
- 结论：`official-conflict`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"moonshotai/kimi-k3"` | `"moonshotai/kimi-k3"` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；公共目录精确id，不证明账号有权或指定后端可用。 |
| `contextWindow` | `1048576` | `1048576` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；该平台目录context_length；不反推原厂合同。 |
| `maxOutputTokens` | `943718` | `943718` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；top_provider当前max_completion_tokens，可随后端变化。 |
| `inputPrice` | `2.7` | `0.72` | differs | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；OpenRouter USD/token×1,000,000；不得套用原厂价格。 |
| `outputPrice` | `13.5` | `13.0` | differs | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；OpenRouter USD/token×1,000,000；不得套用原厂价格。 |
| `extra.cachedInputPrice` | `null` | `0.7` | differs | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；OpenRouter USD/token×1,000,000；不得套用原厂价格。 |
| `supportedParameters` | `null` | `["frequency_penalty","include_reasoning","logit_bias","logprobs","max_tokens","min_p","presence_penalty","reasoning","reasoning_effort","repetition_penalty","response_format","seed","stop","structured_outputs","temperature","tool_choice","tools","top_k","top_logprobs","top_p"]` | differs | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；平台目录声明支持参数，不同后端/账号仍需验收。 |

剩余缺口：原 inventory 所列缺字段已有候选证据；不代表账号实测或全规格无缺口。

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。

### `compute/providers/openrouter.json#openai/gpt-6.1-sol`

- 精确型号：`openai/gpt-6.1-sol`
- 接入/规格文件：`compute/providers/openrouter.json`
- 原来源记录：`docs/model-sources/providers/openrouter/models/openai--gpt-6.1-sol.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"openai/gpt-6.1-sol"` | `"openai/gpt-6.1-sol"` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；公共目录精确id，不证明账号有权或指定后端可用。 |
| `contextWindow` | `1050000` | `1050000` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；该平台目录context_length；不反推原厂合同。 |
| `maxOutputTokens` | `128000` | `128000` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；top_provider当前max_completion_tokens，可随后端变化。 |
| `inputPrice` | `2` | `2.0` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；OpenRouter USD/token×1,000,000；不得套用原厂价格。 |
| `outputPrice` | `10` | `10.0` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；OpenRouter USD/token×1,000,000；不得套用原厂价格。 |
| `extra.cachedInputPrice` | `null` | `0.1` | differs | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；OpenRouter USD/token×1,000,000；不得套用原厂价格。 |
| `supportedParameters` | `null` | `["include_reasoning","max_completion_tokens","max_tokens","reasoning","reasoning_effort","response_format","seed","structured_outputs","tool_choice","tools","verbosity"]` | differs | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；平台目录声明支持参数，不同后端/账号仍需验收。 |

剩余缺口：原 inventory 所列缺字段已有候选证据；不代表账号实测或全规格无缺口。

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。

### `compute/providers/openrouter.json#openrouter/auto`

- 精确型号：`openrouter/auto`
- 接入/规格文件：`compute/providers/openrouter.json`
- 原来源记录：`docs/model-sources/providers/openrouter/models/openrouter--auto.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"openrouter/auto"` | `"openrouter/auto"` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；公共目录精确id，不证明账号有权或指定后端可用。 |
| `contextWindow` | `2000000` | `2000000` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；该平台目录context_length；不反推原厂合同。 |
| `supportedParameters` | `null` | `["frequency_penalty","include_reasoning","logit_bias","logprobs","max_tokens","min_p","prediction","presence_penalty","reasoning","reasoning_effort","repetition_penalty","response_format","seed","stop","structured_outputs","temperature","tool_choice","tools","top_a","top_k","top_logprobs","top_p","web_search_options"]` | differs | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；平台目录声明支持参数，不同后端/账号仍需验收。 |

剩余缺口：`defaultTemperature`, `defaultTopP`, `maxOutputTokens`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- prompt=-1 是动态占位，不能判免费或固定USD价格。
- completion=-1 是动态占位，不能判免费或固定USD价格。

### `compute/providers/openrouter.json#qwen/qwen3.8-max-prime`

- 精确型号：`qwen/qwen3.8-max-prime`
- 接入/规格文件：`compute/providers/openrouter.json`
- 原来源记录：`docs/model-sources/providers/openrouter/models/qwen--qwen3.8-max-prime.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"qwen/qwen3.8-max-prime"` | `"qwen/qwen3.8-max-prime"` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；公共目录精确id，不证明账号有权或指定后端可用。 |
| `contextWindow` | `1000000` | `1000000` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；该平台目录context_length；不反推原厂合同。 |
| `maxOutputTokens` | `131072` | `131072` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；top_provider当前max_completion_tokens，可随后端变化。 |
| `inputPrice` | `4` | `4.0` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；OpenRouter USD/token×1,000,000；不得套用原厂价格。 |
| `outputPrice` | `12` | `12.0` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；OpenRouter USD/token×1,000,000；不得套用原厂价格。 |
| `extra.cachedInputPrice` | `null` | `0.5` | differs | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；OpenRouter USD/token×1,000,000；不得套用原厂价格。 |
| `supportedParameters` | `null` | `["frequency_penalty","include_reasoning","logprobs","max_tokens","presence_penalty","reasoning","reasoning_effort","response_format","seed","stop","structured_outputs","temperature","tool_choice","tools","top_k","top_logprobs","top_p"]` | differs | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；平台目录声明支持参数，不同后端/账号仍需验收。 |

剩余缺口：原 inventory 所列缺字段已有候选证据；不代表账号实测或全规格无缺口。

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。

### `compute/providers/openrouter.json#qwen/qwen3.8-omni-flash`

- 精确型号：`qwen/qwen3.8-omni-flash`
- 接入/规格文件：`compute/providers/openrouter.json`
- 原来源记录：`docs/model-sources/providers/openrouter/models/qwen--qwen3.8-omni-flash.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"qwen/qwen3.8-omni-flash"` | `"qwen/qwen3.8-omni-flash"` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；公共目录精确id，不证明账号有权或指定后端可用。 |
| `contextWindow` | `1000000` | `1000000` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；该平台目录context_length；不反推原厂合同。 |
| `maxOutputTokens` | `131072` | `131072` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；top_provider当前max_completion_tokens，可随后端变化。 |
| `inputPrice` | `0.15` | `0.15` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；OpenRouter USD/token×1,000,000；不得套用原厂价格。 |
| `outputPrice` | `0.47` | `0.47` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；OpenRouter USD/token×1,000,000；不得套用原厂价格。 |
| `extra.cachedInputPrice` | `null` | `0.016` | differs | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；OpenRouter USD/token×1,000,000；不得套用原厂价格。 |
| `supportedParameters` | `null` | `["frequency_penalty","include_reasoning","logprobs","max_tokens","presence_penalty","reasoning","response_format","seed","stop","structured_outputs","temperature","tool_choice","tools","top_k","top_logprobs","top_p"]` | differs | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；平台目录声明支持参数，不同后端/账号仍需验收。 |

剩余缺口：原 inventory 所列缺字段已有候选证据；不代表账号实测或全规格无缺口。

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。

### `compute/providers/openrouter.json#tencent/hy4-preview`

- 精确型号：`tencent/hy4-preview`
- 接入/规格文件：`compute/providers/openrouter.json`
- 原来源记录：`docs/model-sources/providers/openrouter/models/tencent--hy4-preview.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"tencent/hy4-preview"` | `"tencent/hy4-preview"` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；公共目录精确id，不证明账号有权或指定后端可用。 |
| `contextWindow` | `1048576` | `1048576` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；该平台目录context_length；不反推原厂合同。 |
| `maxOutputTokens` | `64000` | `64000` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；top_provider当前max_completion_tokens，可随后端变化。 |
| `inputPrice` | `0.834` | `0.834` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；OpenRouter USD/token×1,000,000；不得套用原厂价格。 |
| `outputPrice` | `2.501` | `2.501` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；OpenRouter USD/token×1,000,000；不得套用原厂价格。 |
| `extra.cachedInputPrice` | `null` | `0.042` | differs | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；OpenRouter USD/token×1,000,000；不得套用原厂价格。 |
| `supportedParameters` | `null` | `["frequency_penalty","include_reasoning","logit_bias","max_completion_tokens","max_tokens","min_p","presence_penalty","reasoning","reasoning_effort","repetition_penalty","response_format","seed","stop","structured_outputs","temperature","tool_choice","tools","top_k","top_p"]` | differs | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；平台目录声明支持参数，不同后端/账号仍需验收。 |

剩余缺口：原 inventory 所列缺字段已有候选证据；不代表账号实测或全规格无缺口。

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。

### `compute/providers/openrouter.json#z-ai/glm-5.3-flash`

- 精确型号：`z-ai/glm-5.3-flash`
- 接入/规格文件：`compute/providers/openrouter.json`
- 原来源记录：`docs/model-sources/providers/openrouter/models/z-ai--glm-5.3-flash.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"z-ai/glm-5.3-flash"` | `"z-ai/glm-5.3-flash"` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；公共目录精确id，不证明账号有权或指定后端可用。 |
| `contextWindow` | `1048576` | `1048576` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；该平台目录context_length；不反推原厂合同。 |
| `maxOutputTokens` | `943717` | `943717` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；top_provider当前max_completion_tokens，可随后端变化。 |
| `inputPrice` | `0.15` | `0.15` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；OpenRouter USD/token×1,000,000；不得套用原厂价格。 |
| `outputPrice` | `0.5` | `0.5` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；OpenRouter USD/token×1,000,000；不得套用原厂价格。 |
| `extra.cachedInputPrice` | `null` | `0.03` | differs | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；OpenRouter USD/token×1,000,000；不得套用原厂价格。 |
| `supportedParameters` | `null` | `["frequency_penalty","include_reasoning","logit_bias","logprobs","max_tokens","min_p","parallel_tool_calls","presence_penalty","reasoning","reasoning_effort","repetition_penalty","response_format","seed","stop","structured_outputs","temperature","tool_choice","tools","top_k","top_logprobs","top_p"]` | differs | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；平台目录声明支持参数，不同后端/账号仍需验收。 |

剩余缺口：原 inventory 所列缺字段已有候选证据；不代表账号实测或全规格无缺口。

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。

### `compute/providers/openrouter.json#z-ai/glm-5.3`

- 精确型号：`z-ai/glm-5.3`
- 接入/规格文件：`compute/providers/openrouter.json`
- 原来源记录：`docs/model-sources/providers/openrouter/models/z-ai--glm-5.3.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"z-ai/glm-5.3"` | `"z-ai/glm-5.3"` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；公共目录精确id，不证明账号有权或指定后端可用。 |
| `contextWindow` | `1048576` | `1048576` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；该平台目录context_length；不反推原厂合同。 |
| `maxOutputTokens` | `131072` | `131072` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；top_provider当前max_completion_tokens，可随后端变化。 |
| `inputPrice` | `1.4` | `1.4` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；OpenRouter USD/token×1,000,000；不得套用原厂价格。 |
| `outputPrice` | `4.4` | `4.4` | matches | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；OpenRouter USD/token×1,000,000；不得套用原厂价格。 |
| `extra.cachedInputPrice` | `null` | `0.14` | differs | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；OpenRouter USD/token×1,000,000；不得套用原厂价格。 |
| `supportedParameters` | `null` | `["frequency_penalty","include_reasoning","logit_bias","logprobs","max_tokens","min_p","parallel_tool_calls","presence_penalty","reasoning","reasoning_effort","repetition_penalty","response_format","seed","stop","structured_outputs","temperature","tool_choice","tools","top_k","top_logprobs","top_p"]` | differs | [openrouter-051e0609abb5](https://openrouter.ai/api/v1/models)；平台目录声明支持参数，不同后端/账号仍需验收。 |

剩余缺口：原 inventory 所列缺字段已有候选证据；不代表账号实测或全规格无缺口。

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。
