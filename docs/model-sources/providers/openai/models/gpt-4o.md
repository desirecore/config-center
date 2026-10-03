# gpt-4o：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`gpt-4o`。
- 核验日期：2026-10-03；本次只迁移记录，没有重新核验或提高状态。

## 适用接入面

- [compute/providers/openai.json](../access/providers--openai.md)
- [compute/model-specs/openai.json](../access/model-specs--openai.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/openai.json

[查看配置](../../../../../compute/providers/openai.json) · [接入面说明](../access/providers--openai.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/openai.json","id":"gpt-4o"} -->
```json
{
  "contextWindow": 128000,
  "maxOutputTokens": 16384,
  "serviceType": [
    "vision"
  ],
  "capabilities": [
    "chat",
    "vision",
    "image_understanding",
    "tool_use"
  ],
  "defaultTemperature": 1,
  "defaultTopP": 1,
  "inputPrice": 2.5,
  "outputPrice": 10
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/openai.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `gpt-4o` | 128000 / 16384 | USD：2.5 / 10 | `modelName`→[openai-models](../SOURCES.md#openai-models) | [openai-models](../SOURCES.md#openai-models) | partial | `a5d6d4e83829908bcaae96ac2cccbd6bfe6f1f2043b863302671c9b1c39f4e74` |

### compute/model-specs/openai.json

[查看配置](../../../../../compute/model-specs/openai.json) · [接入面说明](../access/model-specs--openai.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/openai.json","id":"gpt-4o"} -->
```json
{
  "spec.contextWindow": 128000,
  "spec.maxOutputTokens": 16384,
  "spec.serviceType": [
    "vision"
  ],
  "spec.capabilities": [
    "chat",
    "vision",
    "image_understanding",
    "tool_use"
  ],
  "spec.defaultTemperature": 1
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/openai.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `gpt-4o` | 128000 / 16384 | 非计价主数据 | `id`→[openai-models](../SOURCES.md#openai-models) | [openai-models](../SOURCES.md#openai-models) | partial | `f0832a0fa743faf4f87895483584822f4138157b174490ff934312d4e6587393` |

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
