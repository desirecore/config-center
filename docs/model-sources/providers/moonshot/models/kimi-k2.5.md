# kimi-k2.5：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`kimi-k2.5`。
- 核验日期：2026-10-03；本次只迁移记录，没有重新核验或提高状态。

## 适用接入面

- [compute/providers/moonshot.json](../access/providers--moonshot.md)
- [compute/model-specs/moonshot.json](../access/model-specs--moonshot.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/moonshot.json

[查看配置](../../../../../compute/providers/moonshot.json) · [接入面说明](../access/providers--moonshot.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/moonshot.json","id":"kimi-k2.5"} -->
```json
{
  "contextWindow": 262144,
  "maxOutputTokens": 32768,
  "serviceType": [
    "chat",
    "reasoning"
  ],
  "capabilities": [
    "chat",
    "reasoning",
    "deep_thinking",
    "code",
    "tool_use",
    "agent",
    "long_context",
    "vision",
    "video_understanding",
    "image_understanding"
  ],
  "defaultTemperature": 1,
  "defaultTopP": 0.95,
  "inputPrice": 4,
  "outputPrice": 21,
  "extra.cacheHitPrice": 0.7
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/moonshot.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `kimi-k2.5` | 262144 / 32768 | CNY：4 / 21 | 待核实 | [kimi-k3](../SOURCES.md#kimi-k3) | pending | `bc4d624b267c8b2b4975c72162636d2ce86f2ee763ce1837b613c644d78331d5` |

### compute/model-specs/moonshot.json

[查看配置](../../../../../compute/model-specs/moonshot.json) · [接入面说明](../access/model-specs--moonshot.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/moonshot.json","id":"kimi-k2.5"} -->
```json
{
  "spec.contextWindow": 256000,
  "spec.maxOutputTokens": 32768,
  "spec.serviceType": [
    "chat"
  ],
  "spec.capabilities": [
    "chat",
    "reasoning",
    "code",
    "tool_use",
    "agent",
    "long_context",
    "vision"
  ],
  "spec.supportsReasoning": true,
  "spec.defaultTemperature": 1
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/moonshot.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `kimi-k2.5` | 256000 / 32768 | 非计价主数据 | 待核实 | [kimi-k3](../SOURCES.md#kimi-k3) | pending | `a0b1f089cec067813b19347e664fa4c96bc609472ff86f249eacaf38e5142385` |

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
  "supplier": "moonshot",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
