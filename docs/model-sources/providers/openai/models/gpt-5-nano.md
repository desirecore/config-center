# gpt-5-nano：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`gpt-5-nano`。
- 核验日期：2026-10-03；本次只迁移记录，没有重新核验或提高状态。

## 适用接入面

- [compute/providers/openai.json](../access/providers--openai.md)
- [compute/model-specs/openai.json](../access/model-specs--openai.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/openai.json

[查看配置](../../../../../compute/providers/openai.json) · [接入面说明](../access/providers--openai.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/openai.json","id":"gpt-5-nano"} -->
```json
{
  "contextWindow": 400000,
  "maxOutputTokens": 128000,
  "serviceType": [
    "fast"
  ],
  "capabilities": [
    "chat",
    "code",
    "fast",
    "tool_use"
  ],
  "inputPrice": 0.05,
  "outputPrice": 0.4
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/openai.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `gpt-5-nano` | 400000 / 128000 | USD：0.05 / 0.4 | 待核实 | [openai-models](../SOURCES.md#openai-models), [openai-gpt-5-nano-tools](../SOURCES.md#openai-gpt-5-nano-tools) | pending | `439b0250c82f3a9d0caeca732c4b993353e2ef8e98898dd4ed120a3f8f0fb79c` |

- 2026-10-05 工具调用核对：`capabilities` 增加 `tool_use`。随共享规格继承。官网型号页 Supported features 列有 function_calling，Chat Completions 端点为 Supported。依据：[openai-gpt-5-nano-tools](../SOURCES.md#openai-gpt-5-nano-tools)。本次只核对工具调用一项，其余标签仍是本仓产品标签，核验状态不变。

### compute/model-specs/openai.json

[查看配置](../../../../../compute/model-specs/openai.json) · [接入面说明](../access/model-specs--openai.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/openai.json","id":"gpt-5-nano"} -->
```json
{
  "spec.contextWindow": 400000,
  "spec.maxOutputTokens": 128000,
  "spec.serviceType": [
    "fast"
  ],
  "spec.capabilities": [
    "chat",
    "code",
    "fast",
    "tool_use"
  ],
  "spec.defaultTemperature": 1
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/openai.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `gpt-5-nano` | 400000 / 128000 | 非计价主数据 | 待核实 | [openai-models](../SOURCES.md#openai-models), [openai-gpt-5-nano-tools](../SOURCES.md#openai-gpt-5-nano-tools) | pending | `662dfdfc1ce5bd7fff2097242c6f5087d8e2c0706d4c65aa3bcb8000e347f276` |

- 2026-10-05 工具调用核对：`spec.capabilities` 增加 `tool_use`。官网型号页 Supported features 列有 function_calling，Chat Completions 与 Responses 端点均为 Supported。依据：[openai-gpt-5-nano-tools](../SOURCES.md#openai-gpt-5-nano-tools)。本次只核对工具调用一项，其余标签仍是本仓产品标签，核验状态不变。

## 下次更新核查

- 对照官网核查精确 ID／别名、是否仍列出、上下文／输入／输出限制及单位。
- 分别核查推理档位、默认值、是否可关闭思考、采样和强制工具选择限制、多模态输入／输出。
- 按本接入面核对价格、缓存、阶梯／峰谷、套餐支持；不能把其他平台参数直接复制。
- 只更新真正复核的字段与引用来源；保留其余待核实项及历史记录。
- 同步对应 canonical JSON、回归和模型指纹，再运行来源校验。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "openai",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
