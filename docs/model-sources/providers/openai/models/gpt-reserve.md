# gpt-reserve：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`gpt-reserve`。
- 核验日期：2026-10-03；本次只迁移记录，没有重新核验或提高状态。

## 适用接入面

- [compute/providers/openai-codex.json](../access/providers--openai-codex.md)
- [compute/model-specs/openai.json](../access/model-specs--openai.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/openai-codex.json

[查看配置](../../../../../compute/providers/openai-codex.json) · [接入面说明](../access/providers--openai-codex.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/openai-codex.json","id":"gpt-reserve"} -->
```json
{
  "contextWindow": 272000,
  "maxOutputTokens": 128000,
  "serviceType": [
    "chat"
  ],
  "capabilities": [
    "chat",
    "reasoning",
    "code",
    "vision",
    "long_context",
    "tool_use",
    "fast"
  ],
  "extra.reasoning": {
    "supportedEfforts": [
      "low",
      "medium",
      "high",
      "xhigh",
      "max"
    ],
    "defaultEffort": "medium"
  }
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/openai-codex.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `gpt-reserve` | 272000 / 128000 | USD：未声明 / 未声明 | 待核实 | [openai-models](../SOURCES.md#openai-models) | pending | `51eb1a1ba49b545eba97e2ae1ceb60d7e36b19a7e31ba018e31b4f33ba788bda` |

### compute/model-specs/openai.json

[查看配置](../../../../../compute/model-specs/openai.json) · [接入面说明](../access/model-specs--openai.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/openai.json","id":"gpt-reserve"} -->
```json
{
  "spec.contextWindow": 1050000,
  "spec.maxOutputTokens": 128000,
  "spec.serviceType": [
    "chat"
  ],
  "spec.capabilities": [
    "chat",
    "reasoning",
    "code",
    "vision",
    "long_context",
    "tool_use",
    "fast"
  ],
  "spec.supportsReasoning": true,
  "routing.tier": "lightweight",
  "routing.routingPriority": 10,
  "routing.eligibleForAgent": false,
  "routing.reasoning": {
    "supportedModes": [
      "auto",
      "off",
      "low",
      "medium",
      "high",
      "xhigh",
      "max"
    ],
    "defaultMode": "medium"
  }
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/openai.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `gpt-reserve` | 1050000 / 128000 | 非计价主数据 | 待核实 | [openai-models](../SOURCES.md#openai-models) | pending | `5798fa677d14df133dc99ed0d8624da2f1e750125e0358ed6d004767d0f4c065` |

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

## 临时规格的路由边界

官方模型页与检索未取得 GPT-Reserve 规格证据。沿用先前显式要求的手动配置，不删除模型；shared spec 的 eligibleForAgent 改为 false，限制自动选型。上下文与能力仍是既有假定值，状态维持 pending；需要原厂正式规格与订阅合同分别核实后才能解开门控。
