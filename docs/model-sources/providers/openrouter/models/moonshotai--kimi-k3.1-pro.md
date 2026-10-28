# moonshotai/kimi-k3.1-pro：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`moonshotai/kimi-k3.1-pro`。
- 核验日期：2026-10-28；仅下表列出的字段取得官网证明，未进行收费 API 或订阅账号调用。

## 接入合同与核验边界

只新增 gpt-6.1-terra、claude-haiku-5.5、minimax-m3.1-flash、kimi-k3.1-pro、gemini-4-argon 和 mistral-large-4-0 六个托管条目，不添加 batch 变体、Terra Pro 或本次未取得原厂精确身份证明的其他目录项。价格以 Decimal 等价十进制换算 USD/token × 1000000；不得把媒体、search 单位视为 token 费。MiniMax 平台窗口 1048576 与原厂 1000000 不同，Kimi/Argon 输出 943718 均为独立平台合同；无账号调用验收。

## 字段级来源记录

### compute/providers/openrouter.json

[查看配置](../../../../../compute/providers/openrouter.json) · [接入面说明](../access/providers--openrouter.md)

当前参数详情；路由、默认选择与产品策略不作为官网事实：

<!-- source-details: {"config":"compute/providers/openrouter.json","id":"moonshotai/kimi-k3.1-pro"} -->
```json
{
  "serviceType": [
    "reasoning"
  ],
  "description": "Kimi K3.1 Pro，OpenRouter 独立托管入口；参数与美元计价以平台目录为准",
  "contextWindow": 1048576,
  "maxOutputTokens": 943718,
  "capabilities": [
    "chat",
    "reasoning",
    "code",
    "vision",
    "tool_use",
    "long_context",
    "video_understanding"
  ],
  "inputPrice": 2,
  "outputPrice": 10,
  "extra": {
    "cachedInputPrice": 0.2,
    "pricingNotes": "OpenRouter 官方 Models API 2026-10-28 快照；USD/token 乘 1000000；窗口与输出是该平台独立托管合同，不反写原厂或订阅接入。"
  }
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/openrouter.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `moonshotai/kimi-k3.1-pro` | 1048576 / 943718 | USD：2 / 10 | `modelName`→[openrouter-20261028](../SOURCES.md#openrouter-20261028)、`contextWindow`→[openrouter-20261028](../SOURCES.md#openrouter-20261028)、`maxOutputTokens`→[openrouter-20261028](../SOURCES.md#openrouter-20261028)、`capabilities`→[openrouter-20261028](../SOURCES.md#openrouter-20261028)、`inputPrice`→[openrouter-20261028](../SOURCES.md#openrouter-20261028)、`outputPrice`→[openrouter-20261028](../SOURCES.md#openrouter-20261028)、`extra.cachedInputPrice`→[openrouter-20261028](../SOURCES.md#openrouter-20261028) | [openrouter-20261028](../SOURCES.md#openrouter-20261028) | partial | `b250f2c8f44a67bfc79b9f688997128954cf4d25194e30814253211181ecbef8` |

## 待核实项

- 未列入字段来源的参数维持待核实；本地 Schema、编译与 resolver 对照不能替代账号调用。
- 原厂、订阅、聚合平台分别复核；不能从模型名称、目录存在或 HTTP 200 推导全部协议能力。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "openrouter",
  "checkedAt": "2026-10-28",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
