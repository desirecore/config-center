# spark-x：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`spark-x`。
- 核验日期：2026-10-03；本次只迁移记录，没有重新核验或提高状态。

## 适用接入面

- [compute/providers/xunfei.json](../access/providers--xunfei.md)
- [compute/model-specs/xunfei.json](../access/model-specs--xunfei.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/xunfei.json

[查看配置](../../../../../compute/providers/xunfei.json) · [接入面说明](../access/providers--xunfei.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/xunfei.json","id":"spark-x"} -->
```json
{
  "contextWindow": 65536,
  "maxOutputTokens": 128000,
  "serviceType": [
    "reasoning"
  ],
  "capabilities": [
    "chat",
    "reasoning",
    "deep_thinking",
    "math",
    "code"
  ],
  "defaultTemperature": 1.2,
  "defaultTopP": 0.95
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/xunfei.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `spark-x` | 65536 / 128000 | CNY：未声明 / 未声明 | `modelName`→[xunfei](../SOURCES.md#xunfei) | [xunfei](../SOURCES.md#xunfei) | partial | `e86e73c51d95392d5a755647f74010d21d4b40ab7928853deecbbd39c27a5432` |

### compute/model-specs/xunfei.json

[查看配置](../../../../../compute/model-specs/xunfei.json) · [接入面说明](../access/model-specs--xunfei.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/xunfei.json","id":"spark-x"} -->
```json
{
  "spec.contextWindow": 65536,
  "spec.maxOutputTokens": 128000,
  "spec.serviceType": [
    "reasoning"
  ],
  "spec.capabilities": [
    "chat",
    "reasoning",
    "deep_thinking",
    "math",
    "code"
  ],
  "spec.supportsReasoning": true,
  "spec.defaultTemperature": 1.2
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/xunfei.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `spark-x` | 65536 / 128000 | 非计价主数据 | `id`→[xunfei](../SOURCES.md#xunfei) | [xunfei](../SOURCES.md#xunfei) | partial | `12a6e5633db6604800f759bf1a6323ccc745fd574af632d937f67b6efb08754a` |

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
  "supplier": "xunfei",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
