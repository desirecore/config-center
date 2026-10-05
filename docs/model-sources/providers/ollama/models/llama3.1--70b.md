# llama3.1:70b：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`llama3.1:70b`。
- 核验日期：2026-10-03；本次只迁移记录，没有重新核验或提高状态。

## 适用接入面

- [compute/providers/ollama.json](../access/providers--ollama.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/ollama.json

[查看配置](../../../../../compute/providers/ollama.json) · [接入面说明](../access/providers--ollama.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/ollama.json","id":"llama3.1:70b"} -->
```json
{
  "contextWindow": 131072,
  "maxOutputTokens": 8192,
  "serviceType": [
    "chat"
  ],
  "capabilities": [
    "chat",
    "code",
    "reasoning",
    "tool_use"
  ],
  "defaultTemperature": 0.8,
  "defaultTopP": 0.9
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/ollama.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `llama3.1:70b` | 131072 / 8192 | USD：未声明 / 未声明 | 待核实 | [ollama](../SOURCES.md#ollama), [ollama-llama31-70b](../SOURCES.md#ollama-llama31-70b) | pending | `875fdb8c434149be5fa974c0baa22f6e2e5399a43f79ea45b98412e9c944b61f` |

- 2026-10-05 工具调用核对：`capabilities` 增加 `tool_use`。Ollama 官方模型库 llama3.1:70b 页带 tools 能力标记。本地实际能力取决于用户拉取的权重与 Ollama 版本。依据：[ollama-llama31-70b](../SOURCES.md#ollama-llama31-70b)。本次只核对工具调用一项，其余标签仍是本仓产品标签，核验状态不变。

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
  "supplier": "ollama",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
