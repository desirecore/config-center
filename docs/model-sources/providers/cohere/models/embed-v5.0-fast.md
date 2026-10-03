# embed-v5.0-fast：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`embed-v5.0-fast`。
- 核验日期：2026-10-03；本次只迁移记录，没有重新核验或提高状态。

## 适用接入面

- [compute/providers/cohere.json](../access/providers--cohere.md)
- [compute/model-specs/cohere.json](../access/model-specs--cohere.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/cohere.json

[查看配置](../../../../../compute/providers/cohere.json) · [接入面说明](../access/providers--cohere.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/cohere.json","id":"embed-v5.0-fast"} -->
```json
{
  "contextWindow": 128000,
  "serviceType": [
    "embedding"
  ],
  "capabilities": [
    "text_embedding",
    "multilingual"
  ],
  "extra.defaultDimension": 2048,
  "extra.pricingNotes": "Token 单价未由当前官方价格页公开确认；Model Vault 按实例计价。 Compatibility API 不接受 dimensions 参数；返回默认维度，多维度选择需原生 Embed API。"
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/cohere.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `embed-v5.0-fast` | 128000 / 未声明 | USD：未声明 / 未声明 | `extra.defaultDimension`→[cohere-embed](../SOURCES.md#cohere-embed), `modelName`→[cohere-models](../SOURCES.md#cohere-models) | [cohere-embed](../SOURCES.md#cohere-embed), [cohere-models](../SOURCES.md#cohere-models) | partial | `0028df6b24ded4e2557122d597dd9e79699bb8590aaa53c950d5cb61a32a2c15` |

### compute/model-specs/cohere.json

[查看配置](../../../../../compute/model-specs/cohere.json) · [接入面说明](../access/model-specs--cohere.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/cohere.json","id":"embed-v5.0-fast"} -->
```json
{
  "spec.contextWindow": 128000,
  "spec.serviceType": [
    "embedding"
  ],
  "spec.capabilities": [
    "text_embedding",
    "vision",
    "multilingual"
  ],
  "spec.releasedAt": "2026-09-30",
  "spec.extra.dimensions": [
    256,
    512,
    768,
    1024,
    1536,
    2048
  ],
  "spec.extra.defaultDimension": 2048
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/cohere.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `embed-v5.0-fast` | 128000 / 未声明 | 非计价主数据 | `id`→[cohere-models](../SOURCES.md#cohere-models), `spec.extra.defaultDimension`→[cohere-embed](../SOURCES.md#cohere-embed), `spec.extra.dimensions`→[cohere-embed](../SOURCES.md#cohere-embed) | [cohere-embed](../SOURCES.md#cohere-embed), [cohere-models](../SOURCES.md#cohere-models) | partial | `df36c5648277525a4ea74d15747684b65a8df39795ab121f8f1814fa45c16864` |

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
  "supplier": "cohere",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
