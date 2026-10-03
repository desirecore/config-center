# qwen3.7-text-embedding：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`qwen3.7-text-embedding`。
- 核验日期：2026-10-03；本次只迁移记录，没有重新核验或提高状态。

## 适用接入面

- [compute/providers/dashscope.json](../access/providers--dashscope.md)
- [compute/model-specs/qwen.json](../access/model-specs--qwen.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/dashscope.json

[查看配置](../../../../../compute/providers/dashscope.json) · [接入面说明](../access/providers--dashscope.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/dashscope.json","id":"qwen3.7-text-embedding"} -->
```json
{
  "serviceType": [
    "embedding"
  ],
  "capabilities": [
    "text_embedding",
    "multilingual"
  ],
  "inputPrice": 0.5,
  "outputPrice": 0
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/dashscope.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `qwen3.7-text-embedding` | 未声明 / 未声明 | CNY：0.5 / 0 | `inputPrice`→[qwen-pricing](../SOURCES.md#qwen-pricing), `modelName`→[qwen-models](../SOURCES.md#qwen-models) | [qwen-models](../SOURCES.md#qwen-models), [qwen-pricing](../SOURCES.md#qwen-pricing) | partial | `0afc1be3f581606a9f35e49edc2e89d1f6b593d610e4ec7732c6e80983b615c6` |

### compute/model-specs/qwen.json

[查看配置](../../../../../compute/model-specs/qwen.json) · [接入面说明](../access/model-specs--qwen.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/qwen.json","id":"qwen3.7-text-embedding"} -->
```json
{
  "spec.serviceType": [
    "embedding"
  ],
  "spec.capabilities": [
    "text_embedding",
    "multilingual"
  ]
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/qwen.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `qwen3.7-text-embedding` | 未声明 / 未声明 | 非计价主数据 | `id`→[qwen-models](../SOURCES.md#qwen-models) | [qwen-models](../SOURCES.md#qwen-models) | partial | `c8484a0ab9552f73cf1dc0f9ec8b5528cfd1fcf507c4cebdda8bc6cde232c3b5` |

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
  "supplier": "alibaba",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
