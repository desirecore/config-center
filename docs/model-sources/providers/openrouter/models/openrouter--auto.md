# openrouter/auto：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`openrouter/auto`。
- 核验日期：2026-10-03；本次只迁移记录，没有重新核验或提高状态。

## 适用接入面

- [compute/providers/openrouter.json](../access/providers--openrouter.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/openrouter.json

[查看配置](../../../../../compute/providers/openrouter.json) · [接入面说明](../access/providers--openrouter.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/openrouter.json","id":"openrouter/auto"} -->
```json
{
  "contextWindow": 2000000,
  "maxOutputTokens": 16384,
  "serviceType": [
    "chat"
  ],
  "capabilities": [
    "chat",
    "auto_routing",
    "tool_use"
  ],
  "defaultTemperature": 1,
  "defaultTopP": 1,
  "extra.pricingNotes": "OpenRouter Models API 的 prompt/completion=-1 为动态路由占位值，实际价格取决于选中的模型，不代表免费。"
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/openrouter.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `openrouter/auto` | 2000000 / 16384 | USD：未声明 / 未声明 | `contextWindow`→[openrouter-api](../SOURCES.md#openrouter-api), `modelName`→[openrouter-api](../SOURCES.md#openrouter-api) | [openrouter-api](../SOURCES.md#openrouter-api), [openrouter-models-tools](../SOURCES.md#openrouter-models-tools) | partial | `d368331999e51b59f268f3405e5a948cd815fb471035b725e5b5d83648a2bc5f` |

- 2026-10-05 工具调用核对：`capabilities` 增加 `tool_use`。OpenRouter 官方模型目录 API 中 openrouter/auto 的 supported_parameters 含 tools、tool_choice。实际能力取决于被路由到的后端模型。依据：[openrouter-models-tools](../SOURCES.md#openrouter-models-tools)。本次只核对工具调用一项，其余标签仍是本仓产品标签，核验状态不变。

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
  "supplier": "openrouter",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
