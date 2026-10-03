# doubao-embedding：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`doubao-embedding`。
- 核验日期：2026-10-03；本次只迁移记录，没有重新核验或提高状态。

## 适用接入面

- [compute/providers/volcengine.json](../access/providers--volcengine.md)
- [compute/model-specs/volcengine.json](../access/model-specs--volcengine.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/volcengine.json

[查看配置](../../../../../compute/providers/volcengine.json) · [接入面说明](../access/providers--volcengine.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/volcengine.json","id":"doubao-embedding"} -->
```json
{
  "contextWindow": 4096,
  "serviceType": [
    "embedding"
  ],
  "capabilities": [
    "text_embedding",
    "semantic_search",
    "rag",
    "chinese_optimized"
  ],
  "inputPrice": 0.5
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/volcengine.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `doubao-embedding` | 4096 / 未声明 | CNY：0.5 / 未声明 | 待核实 | [volcengine-models](../SOURCES.md#volcengine-models) | pending | `9020891c5eadf98e1cee233c54f8600fa5a8ed84edf7681c78e51ebe8d0e763e` |

### compute/model-specs/volcengine.json

[查看配置](../../../../../compute/model-specs/volcengine.json) · [接入面说明](../access/model-specs--volcengine.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/volcengine.json","id":"doubao-embedding"} -->
```json
{
  "spec.contextWindow": 4096,
  "spec.serviceType": [
    "embedding"
  ],
  "spec.capabilities": [
    "text_embedding",
    "semantic_search",
    "rag",
    "chinese_optimized"
  ]
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/volcengine.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `doubao-embedding` | 4096 / 未声明 | 非计价主数据 | 待核实 | [volcengine-models](../SOURCES.md#volcengine-models) | pending | `c71b9d32840c48cfc49eee9e27b45e7132a722d04320a4e9ab898db12354aaea` |

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
  "supplier": "volcengine",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
