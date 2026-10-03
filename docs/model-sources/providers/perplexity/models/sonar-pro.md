# sonar-pro：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`sonar-pro`。
- 核验日期：2026-10-03；本次只迁移记录，没有重新核验或提高状态。

## 适用接入面

- [compute/providers/perplexity.json](../access/providers--perplexity.md)
- [compute/model-specs/perplexity.json](../access/model-specs--perplexity.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/perplexity.json

[查看配置](../../../../../compute/providers/perplexity.json) · [接入面说明](../access/providers--perplexity.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/perplexity.json","id":"sonar-pro"} -->
```json
{
  "contextWindow": 200000,
  "maxOutputTokens": 8192,
  "serviceType": [
    "chat"
  ],
  "capabilities": [
    "chat",
    "web_search",
    "reasoning",
    "citation"
  ],
  "inputPrice": 3,
  "outputPrice": 15,
  "extra.pricingNotes": "Total Sonar API cost includes token costs plus a request fee based on search context size."
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/perplexity.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `sonar-pro` | 200000 / 8192 | USD：3 / 15 | 待核实 | [perplexity](../SOURCES.md#perplexity) | pending | `2cc4bd973047d00f734e5ef7ec62baca0f83c8e34db26ef26283161610504be1` |

### compute/model-specs/perplexity.json

[查看配置](../../../../../compute/model-specs/perplexity.json) · [接入面说明](../access/model-specs--perplexity.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/perplexity.json","id":"sonar-pro"} -->
```json
{
  "spec.contextWindow": 200000,
  "spec.maxOutputTokens": 8192,
  "spec.serviceType": [
    "chat"
  ],
  "spec.capabilities": [
    "chat",
    "web_search",
    "reasoning",
    "citation"
  ]
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/perplexity.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `sonar-pro` | 200000 / 8192 | 非计价主数据 | 待核实 | [perplexity](../SOURCES.md#perplexity) | pending | `333bdfa39e2d5f1c07040e470408ed5a1efd68bc22d31a2ee524465cd84ca8d9` |

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
  "supplier": "perplexity",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
