# grok-4.3：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`grok-4.3`。
- 核验日期：2026-10-03；本轮增量核验下列字段；未列字段及其他接入面的状态保持独立。

## 适用接入面

- [compute/providers/xai.json](../access/providers--xai.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/xai.json

[查看配置](../../../../../compute/providers/xai.json) · [接入面说明](../access/providers--xai.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/xai.json","id":"grok-4.3"} -->
```json
{
  "contextWindow": 1000000,
  "serviceType": [
    "chat",
    "reasoning"
  ],
  "capabilities": [
    "chat",
    "reasoning",
    "vision",
    "tool_use",
    "structured_output",
    "long_context"
  ],
  "defaultTemperature": 1,
  "defaultTopP": 1,
  "inputPrice": 1.25,
  "outputPrice": 2.5,
  "extra.cachedInputPrice": 0.2,
  "extra.reasoning": {
    "supportedEfforts": [
      "none",
      "low",
      "medium",
      "high"
    ],
    "defaultEffort": "low"
  }
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/xai.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `grok-4.3` | 1000000 / 未声明 | USD：1.25 / 2.5 | `modelName`→[grok43-model](../SOURCES.md#grok43-model)；`contextWindow`→[grok43-model](../SOURCES.md#grok43-model)；`inputPrice`→[grok43-model](../SOURCES.md#grok43-model)；`outputPrice`→[grok43-model](../SOURCES.md#grok43-model)；`extra.cachedInputPrice`→[grok43-model](../SOURCES.md#grok43-model)；`extra.reasoning.supportedEfforts`→[grok43-model](../SOURCES.md#grok43-model)；`extra.reasoning.defaultEffort`→[grok43-model](../SOURCES.md#grok43-model) | [grok43-model](../SOURCES.md#grok43-model) | partial | `cd5e64db1ae28c111960f2e47fe82fdefceb06079261396a214ad89578a02ee1` |

官方同页 Capabilities 列 none/low/medium/high，Details 额外列 xhigh，存在口径差异；保留四个无争议档位，默认 low。不能据此扩张 xhigh。

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
  "supplier": "xai",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
