# ollama 来源重新核查

核查日期：2026-10-04。覆盖 inventory 中 1 条精确记录。此文是临时候选复核，不修改既有来源状态、数据或 manifest。

官方库tag/modelcard只证明模型能力。安装、实际num_ctx、内存/显存、默认参数和输出预算另有运行时合同，没有本机实测。

## 本次实际读取与失败尝试

### ollama-14866557b877

- 初始链接：[https://ollama.com/blog](https://ollama.com/blog)
- 最终链接：[https://ollama.com/blog](https://ollama.com/blog)
- 发布者/类型/读取：Ollama / Meta / official-docs / readable
- 适用范围：该官网文档明确列出的模型/API；不扩展到其他接入面。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### ollama-e125d24f450e

- 初始链接：[https://ollama.com/library/llama3.1:70b](https://ollama.com/library/llama3.1:70b)
- 最终链接：[https://ollama.com/library/llama3.1:70b](https://ollama.com/library/llama3.1:70b)
- 发布者/类型/读取：Ollama / Meta / official-docs / readable
- 适用范围：该官网文档明确列出的模型/API；不扩展到其他接入面。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### ollama-3c2fd0f2f6f3

- 初始链接：[https://raw.githubusercontent.com/meta-llama/llama-models/main/models/llama3_1/MODEL_CARD.md](https://raw.githubusercontent.com/meta-llama/llama-models/main/models/llama3_1/MODEL_CARD.md)
- 最终链接：[https://raw.githubusercontent.com/meta-llama/llama-models/main/models/llama3_1/MODEL_CARD.md](https://raw.githubusercontent.com/meta-llama/llama-models/main/models/llama3_1/MODEL_CARD.md)
- 发布者/类型/读取：Ollama / Meta / official-repository / readable
- 适用范围：该官网文档明确列出的模型/API；不扩展到其他接入面。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### ollama-80aadbbb2a16

- 初始链接：[https://docs.ollama.com/context-length](https://docs.ollama.com/context-length)
- 最终链接：[https://docs.ollama.com/context-length](https://docs.ollama.com/context-length)
- 发布者/类型/读取：Ollama / Meta / official-docs / readable
- 适用范围：该官网文档明确列出的模型/API；不扩展到其他接入面。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

## 逐记录复核

### `compute/providers/ollama.json#llama3.1:70b`

- 精确型号：`llama3.1:70b`
- 接入/规格文件：`compute/providers/ollama.json`
- 原来源记录：`docs/model-sources/providers/ollama/models/llama3.1--70b.md`
- 结论：`official-identity-only`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"llama3.1:70b"` | `"llama3.1:70b"` | matches | [ollama-e125d24f450e](https://ollama.com/library/llama3.1:70b)；官方精确tag，43GB/digest711a9e8463af；不代表本机已安装。 |
| `contextWindow` | `131072` | `"128K"` | not-comparable | [ollama-e125d24f450e](https://ollama.com/library/llama3.1:70b)；目录声明模型能力，未证明本机实际num_ctx；仅官方缩写，不能直接宣称有效131072。 |

剩余缺口：`contextWindow`, `defaultTemperature`, `defaultTopP`, `maxOutputTokens`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- 需分别核模型最大window、运行时num_ctx、num_predict和硬件显存；未执行安装/私有API或推理实测。8192maxOutput、0.8temperature、0.9topP保留未证明。
