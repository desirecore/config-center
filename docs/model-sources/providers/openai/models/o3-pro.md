# o3-pro：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`o3-pro`。
- 核验日期：2026-10-03；本次只迁移记录，没有重新核验或提高状态。

## 适用接入面

- [compute/providers/openai.json](../access/providers--openai.md)
- [compute/model-specs/openai.json](../access/model-specs--openai.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/openai.json

[查看配置](../../../../../compute/providers/openai.json) · [接入面说明](../access/providers--openai.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/openai.json","id":"o3-pro"} -->
```json
{
  "contextWindow": 200000,
  "maxOutputTokens": 100000,
  "serviceType": [
    "responses"
  ],
  "capabilities": [
    "reasoning",
    "deep_thinking",
    "code",
    "math",
    "science"
  ],
  "inputPrice": 20,
  "outputPrice": 80
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/openai.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `o3-pro` | 200000 / 100000 | USD：20 / 80 | 待核实 | [openai-models](../SOURCES.md#openai-models) | pending | `8d07cd9071fd343981145713cfef8c3006e863b02ca931a89b38bec210fc4bcc` |

### compute/model-specs/openai.json

[查看配置](../../../../../compute/model-specs/openai.json) · [接入面说明](../access/model-specs--openai.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/openai.json","id":"o3-pro"} -->
```json
{
  "spec.contextWindow": 200000,
  "spec.maxOutputTokens": 100000,
  "spec.serviceType": [
    "reasoning"
  ],
  "spec.capabilities": [
    "reasoning",
    "deep_thinking",
    "code",
    "math",
    "science"
  ],
  "spec.supportsReasoning": true,
  "spec.defaultTemperature": null
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/openai.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `o3-pro` | 200000 / 100000 | 非计价主数据 | 待核实 | [openai-models](../SOURCES.md#openai-models) | pending | `9053d8e0be39ea24bb76e636bbd15e4007cff45f270d6696281564b4e4d4a8f0` |

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
