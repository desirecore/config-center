# gemini-2.5-pro：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`gemini-2.5-pro`。
- 核验日期：2026-10-03；本次只迁移记录，没有重新核验或提高状态。

## 适用接入面

- [compute/providers/google.json](../access/providers--google.md)
- [compute/model-specs/google.json](../access/model-specs--google.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/google.json

[查看配置](../../../../../compute/providers/google.json) · [接入面说明](../access/providers--google.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/google.json","id":"gemini-2.5-pro"} -->
```json
{
  "contextWindow": 1048576,
  "maxOutputTokens": 65536,
  "serviceType": [
    "chat"
  ],
  "capabilities": [
    "chat",
    "reasoning",
    "code",
    "vision",
    "ultra_long_context",
    "tool_use"
  ],
  "defaultTemperature": 1,
  "defaultTopP": 0.95,
  "inputPrice": 1.25,
  "outputPrice": 10
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/google.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `gemini-2.5-pro` | 1048576 / 65536 | USD：1.25 / 10 | `modelName`→[google-models](../SOURCES.md#google-models) | [google-models](../SOURCES.md#google-models) | partial | `279a602a413df050eb26dcd4bc0fba8e0959a9cbc9d5f9e4d214254e436496fe` |

### compute/model-specs/google.json

[查看配置](../../../../../compute/model-specs/google.json) · [接入面说明](../access/model-specs--google.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/google.json","id":"gemini-2.5-pro"} -->
```json
{
  "spec.contextWindow": 1048576,
  "spec.maxOutputTokens": 65536,
  "spec.serviceType": [
    "chat"
  ],
  "spec.capabilities": [
    "chat",
    "reasoning",
    "code",
    "vision",
    "ultra_long_context",
    "tool_use"
  ],
  "spec.supportsReasoning": true,
  "spec.defaultTemperature": 1
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/google.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `gemini-2.5-pro` | 1048576 / 65536 | 非计价主数据 | `id`→[google-models](../SOURCES.md#google-models) | [google-models](../SOURCES.md#google-models) | partial | `60befa10269058a2885f56e99514b6b7b2d22612538f3dc7e5f9e91ae14bf940` |

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
  "supplier": "google",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
