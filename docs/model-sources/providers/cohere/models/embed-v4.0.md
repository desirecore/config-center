# embed-v4.0：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`embed-v4.0`。
- 核验日期：2026-10-03；本轮增量复核仅覆盖明确列出的字段，其余接入面和参数保持各自状态。

## 适用接入面

- [compute/providers/cohere.json](../access/providers--cohere.md)
- [compute/model-specs/cohere.json](../access/model-specs--cohere.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/cohere.json

[查看配置](../../../../../compute/providers/cohere.json) · [接入面说明](../access/providers--cohere.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/cohere.json","id":"embed-v4.0"} -->
```json
{
  "contextWindow": 128000,
  "maxOutputTokens": 0,
  "serviceType": [
    "embedding"
  ],
  "capabilities": [
    "text_embedding",
    "multilingual"
  ],
  "inputPrice": 0.12,
  "outputPrice": 0,
  "extra.defaultDimension": 1536,
  "extra.pricingNotes": "Embedding models are priced by embedded tokens; price is per 1M tokens. Compatibility API 不接受 dimensions 参数；返回默认维度，多维度选择需原生 Embed API。"
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/cohere.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `embed-v4.0` | 128000 / 0 | USD：0.12 / 0 | `modelName`→[cohere-models](../SOURCES.md#cohere-models)；`extra.defaultDimension`→[cohere-models](../SOURCES.md#cohere-models) | [cohere-models](../SOURCES.md#cohere-models) | partial | `1b14287bc87b2f32efa8a5a8eafc13c972fa2e4fd7bc3fa4c00262dfe33ecf0d` |

### compute/model-specs/cohere.json

[查看配置](../../../../../compute/model-specs/cohere.json) · [接入面说明](../access/model-specs--cohere.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/cohere.json","id":"embed-v4.0"} -->
```json
{
  "spec.contextWindow": 128000,
  "spec.serviceType": [
    "embedding"
  ],
  "spec.capabilities": [
    "text_embedding",
    "multilingual"
  ],
  "spec.extra.dimensions": [
    256,
    512,
    1024,
    1536
  ],
  "spec.extra.defaultDimension": 1536
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/cohere.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `embed-v4.0` | 128000 / 未声明 | 非计价主数据 | `id`→[cohere-models](../SOURCES.md#cohere-models)；`spec.extra.dimensions`→[cohere-models](../SOURCES.md#cohere-models)；`spec.extra.defaultDimension`→[cohere-models](../SOURCES.md#cohere-models) | [cohere-models](../SOURCES.md#cohere-models) | partial | `46794dc51487aa6af50a9bc92e9aae5e38dc9de06e8104669a28a225e6e8a0cd` |

## 本轮补充核验

官方型号表逐一给出原生向量维度与默认值；兼容接口不支持 dimensions 请求参数，Provider 不因此新增可选维度。128k 为简写，未提高精确窗口证明。

## 本轮补充核验

官方原生默认向量维度已核；兼容 API 不接受 dimensions 参数，本文不把原生多模态与可变维度等同于兼容端点。

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
