# rerank-v3.5：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`rerank-v3.5`。
- 核验日期：2026-10-03；本轮增量复核仅覆盖明确列出的字段，其余接入面和参数保持各自状态。

## 适用接入面

- [compute/model-specs/cohere.json](../access/model-specs--cohere.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/model-specs/cohere.json

[查看配置](../../../../../compute/model-specs/cohere.json) · [接入面说明](../access/model-specs--cohere.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/cohere.json","id":"rerank-v3.5"} -->
```json
{
  "spec.contextWindow": 4096,
  "spec.serviceType": [
    "rerank"
  ],
  "spec.capabilities": [
    "rerank",
    "semantic_reranking"
  ]
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/cohere.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `rerank-v3.5` | 4096 / 未声明 | 非计价主数据 | `id`→[cohere-models](../SOURCES.md#cohere-models)；`spec.contextWindow`→[cohere-rerank](../SOURCES.md#cohere-rerank) |[cohere-models](../SOURCES.md#cohere-models)；[cohere-rerank](../SOURCES.md#cohere-rerank) | partial | `dfb7f20fb7d49a6a6188859b78c4d5f6b58a405cb06cf8fac18d02d9a4a057d4` |

## 本轮补充核验

官网 Rerank 页明确 context4096。移除错误单位的 token 单价；服务需要原生 /v2/rerank，当前 compatibility/v1 没有对应端点，不能把结构校验通过宣称为可调用。

## 本轮补充核验

官网 Rerank 页明文4096，本轮确认共享参数；接口与计价独立。

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

## 历史兼容接入下架

2026-10-03 从 OpenAI compatibility/v1 Provider 移除 rerank-v3.5，并加入 tombstones。旧条目 inputPrice=2/outputPrice=0 把 search unit 误装入 token 价字段，已随错误接入条目移除；不宣称它是免费 token 输出。原生共享规格保留；未来应在客户端支持原生 /v2/rerank 后增加独立接入面，核验 search unit 单位与实际请求。
