# doubao-seed-2.1-pro：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`doubao-seed-2.1-pro`。
- 核验日期：2026-10-03；本次只迁移记录，没有重新核验或提高状态。

## 适用接入面

- [compute/providers/volcengine.json](../access/providers--volcengine.md)
- [compute/coding-plans/volcengine-coding.json](../access/coding-plans--volcengine-coding.md)
- [compute/model-specs/volcengine.json](../access/model-specs--volcengine.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/volcengine.json

[查看配置](../../../../../compute/providers/volcengine.json) · [接入面说明](../access/providers--volcengine.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/volcengine.json","id":"doubao-seed-2.1-pro"} -->
```json
{
  "contextWindow": 256000,
  "maxOutputTokens": 262144,
  "serviceType": [
    "chat",
    "reasoning",
    "vision"
  ],
  "capabilities": [
    "chat",
    "reasoning",
    "code",
    "vision",
    "multilingual",
    "long_context",
    "tool_use",
    "agent",
    "deep_thinking"
  ],
  "defaultTemperature": 1,
  "defaultTopP": 0.7,
  "inputPrice": 6,
  "outputPrice": 30,
  "extra.cacheHitPrice": 1.2
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/volcengine.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `doubao-seed-2.1-pro` | 256000 / 262144 | CNY：6 / 30 | 待核实 | [volcengine-models](../SOURCES.md#volcengine-models) | pending | `10fadd132f559bb4da401bc244f00c2e190639129b1d204a1e1f461976092c54` |

### compute/coding-plans/volcengine-coding.json

[查看配置](../../../../../compute/coding-plans/volcengine-coding.json) · [接入面说明](../access/coding-plans--volcengine-coding.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/coding-plans/volcengine-coding.json","id":"doubao-seed-2.1-pro"} -->
```json
{
  "contextWindow": 256000,
  "maxOutputTokens": 262144,
  "serviceType": [
    "chat"
  ],
  "capabilities": [
    "chat",
    "reasoning",
    "code",
    "vision",
    "tool_use",
    "agent",
    "long_context"
  ]
}
```
<!-- source-details:end -->

<!-- source-config: compute/coding-plans/volcengine-coding.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `doubao-seed-2.1-pro` | 256000 / 262144 | 套餐：未声明 / 未声明 | 待核实 | [volcengine-models](../SOURCES.md#volcengine-models) | pending | `85a61b4d42c530c33c59a14f8f60f10e090794905ac4f31f9d29d5efeb66c4c4` |

### compute/model-specs/volcengine.json

[查看配置](../../../../../compute/model-specs/volcengine.json) · [接入面说明](../access/model-specs--volcengine.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/volcengine.json","id":"doubao-seed-2.1-pro"} -->
```json
{
  "spec.contextWindow": 256000,
  "spec.maxOutputTokens": 262144,
  "spec.serviceType": [
    "chat",
    "reasoning",
    "vision"
  ],
  "spec.capabilities": [
    "chat",
    "reasoning",
    "code",
    "vision",
    "multilingual",
    "long_context",
    "tool_use",
    "agent",
    "deep_thinking"
  ],
  "spec.supportsReasoning": true
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/volcengine.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `doubao-seed-2.1-pro` | 256000 / 262144 | 非计价主数据 | 待核实 | [volcengine-models](../SOURCES.md#volcengine-models) | pending | `0f99e47b8ecba9cdbff037f8d1bc1852e8ada369754b595bfcbde49a9c8809db` |

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
