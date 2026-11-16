# z-ai/glm-5.3-flashx-legal：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`z-ai/glm-5.3-flashx-legal`。
- 核验日期：2026-11-16；仅下列字段取得官网证明，未执行收费 API 或订阅账号调用。

## 接入合同与核验边界

本条窗口、最大输出、effort、模态和价格仅描述 OpenRouter 官方目录本次快照；不同原厂或套餐限制分别记录。USD/token 价格按精确十进制乘以 1000000，web_search、音视频及缓存写入等不同计量项不并入 token 单价。新型号保持手动选择。

## 字段级来源记录

### compute/providers/openrouter.json

[查看配置](../../../../../compute/providers/openrouter.json) · [接入面说明](../access/providers--openrouter.md)

当前参数详情；路由和默认选择属于本仓策略：

<!-- source-details: {"config":"compute/providers/openrouter.json","id":"z-ai/glm-5.3-flashx-legal"} -->
```json
{
  "serviceType": [
    "chat"
  ],
  "description": "GLM 5.3 FlashX Legal，OpenRouter 独立托管入口；参数与美元计价以平台目录为准",
  "contextWindow": 1048576,
  "maxOutputTokens": 131072,
  "capabilities": [
    "chat",
    "reasoning",
    "tool_use",
    "long_context",
    "vision",
    "video_understanding"
  ],
  "inputPrice": 0.37,
  "outputPrice": 1.25,
  "extra": {
    "reasoning": {
      "supportedEfforts": [
        "max",
        "high",
        "low"
      ],
      "defaultEffort": "max"
    },
    "thinkingOnly": true,
    "cachedInputPrice": 0.075,
    "pricingNotes": "OpenRouter 官方 Models API 2026-11-16 快照；USD/token × 1000000；窗口、输出、effort 与计价属于独立托管合同，不反写原厂或订阅。"
  }
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/openrouter.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `z-ai/glm-5.3-flashx-legal` | 1048576 / 131072 | USD：0.37 / 1.25 | `modelName`→[openrouter-20261116](../SOURCES.md#openrouter-20261116)、`contextWindow`→[openrouter-20261116](../SOURCES.md#openrouter-20261116)、`maxOutputTokens`→[openrouter-20261116](../SOURCES.md#openrouter-20261116)、`capabilities`→[openrouter-20261116](../SOURCES.md#openrouter-20261116)、`inputPrice`→[openrouter-20261116](../SOURCES.md#openrouter-20261116)、`outputPrice`→[openrouter-20261116](../SOURCES.md#openrouter-20261116)、`extra.reasoning`→[openrouter-20261116](../SOURCES.md#openrouter-20261116)、`extra.cachedInputPrice`→[openrouter-20261116](../SOURCES.md#openrouter-20261116)、`extra.thinkingOnly`→[openrouter-20261116](../SOURCES.md#openrouter-20261116) | [openrouter-20261116](../SOURCES.md#openrouter-20261116) | partial | `637f6df5ba1da06e2a91ae436d24b61c98a6d15cd24af4e0312714fcbc5a4fb1` |

## 待核实项

未列出字段仍为未核实；目录、编译和 Schema 校验不能替代账号调用。不同接入面的价格、限制与协议分别核对；未加入默认自动路由。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "openrouter",
  "checkedAt": "2026-11-16",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
