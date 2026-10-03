# deepseek-v3.2：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`deepseek-v3.2`。
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

<!-- source-details: {"config":"compute/providers/volcengine.json","id":"deepseek-v3.2"} -->
```json
{
  "contextWindow": 128000,
  "maxOutputTokens": 32000,
  "serviceType": [
    "chat"
  ],
  "capabilities": [
    "chat",
    "reasoning",
    "code",
    "multilingual"
  ],
  "defaultTemperature": 1,
  "defaultTopP": 1,
  "inputPrice": 2,
  "outputPrice": 3
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/volcengine.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `deepseek-v3.2` | 128000 / 32000 | CNY：2 / 3 | 待核实 | [volcengine-models](../SOURCES.md#volcengine-models) | pending | `c796a179f036da1b41b9ec57b8584b0d72b8f4f7875d6c180135e891eb8b4c4d` |

### compute/coding-plans/volcengine-coding.json

[查看配置](../../../../../compute/coding-plans/volcengine-coding.json) · [接入面说明](../access/coding-plans--volcengine-coding.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/coding-plans/volcengine-coding.json","id":"deepseek-v3.2"} -->
```json
{
  "serviceType": [
    "chat"
  ],
  "capabilities": [
    "code",
    "reasoning",
    "chat"
  ]
}
```
<!-- source-details:end -->

<!-- source-config: compute/coding-plans/volcengine-coding.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `deepseek-v3.2` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | 待核实 | [volcengine-models](../SOURCES.md#volcengine-models) | pending | `069855abddb7617b6893fe36da35eb3627179b430eda53dd3e16f7c242585924` |

### compute/model-specs/volcengine.json

[查看配置](../../../../../compute/model-specs/volcengine.json) · [接入面说明](../access/model-specs--volcengine.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/volcengine.json","id":"deepseek-v3.2"} -->
```json
{
  "spec.contextWindow": 128000,
  "spec.maxOutputTokens": 32000,
  "spec.serviceType": [
    "chat"
  ],
  "spec.capabilities": [
    "chat",
    "reasoning",
    "code",
    "multilingual"
  ],
  "spec.defaultTemperature": 1
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/volcengine.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `deepseek-v3.2` | 128000 / 32000 | 非计价主数据 | 待核实 | [volcengine-models](../SOURCES.md#volcengine-models) | pending | `77bd6b66420dcca1fc4213b3d4b27b9bb6ef42af2d946e9ab54862355aad207a` |

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
