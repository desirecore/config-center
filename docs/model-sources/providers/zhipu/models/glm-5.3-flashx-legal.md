# glm-5.3-flashx-legal：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`glm-5.3-flashx-legal`。
- 核验日期：2026-11-16；仅下列字段取得官网证明，未执行收费 API 或订阅账号调用。

## 接入合同与核验边界

官方 Flash 型号页明确列出法律模型的精确 Model Code；窗口 1M、最大输出 128K 依既有十进制保守约定换算为 1000000/128000，不冒充官网逐 token 明文整数。Legal 暂保守声明文本、推理与工具能力；没有把同页普通 Flash 的多模态介绍当作 Legal 专用的图像/视频合同。

同页文本参数遵循 GLM-5.3：始终思考，low/high/max、默认 max。国内原厂 CNY 2/7、cache 0.57 元每百万 tokens 仅记在来源说明，不放入共享规格。原厂 Legal 页明确链接 Chat API，尚未取得本仓智谱 Anthropic 入口对 Legal 的请求参数合同，因此没有新增智谱直连或 Coding Plan 接入。OpenRouter 的独立合同在平台来源另记；未知原厂适配不以同代模型推定。

## 字段级来源记录

### compute/model-specs/zhipu.json

[查看配置](../../../../../compute/model-specs/zhipu.json) · [接入面说明](../access/model-specs--zhipu.md)

当前参数详情；路由和默认选择属于本仓策略：

<!-- source-details: {"config":"compute/model-specs/zhipu.json","id":"glm-5.3-flashx-legal"} -->
```json
{
  "spec": {
    "contextWindow": 1000000,
    "maxOutputTokens": 128000,
    "capabilities": [
      "chat",
      "reasoning",
      "tool_use",
      "long_context"
    ],
    "serviceType": [
      "chat"
    ],
    "supportsReasoning": true,
    "description": "GLM-5.3-FlashX-Legal，面向法律专业工作流，始终开启思考",
    "extra": {
      "thinkingOnly": true
    }
  },
  "routing": {
    "tier": "balanced",
    "routingPriority": 50,
    "eligibleForAgent": false,
    "defaultReference": false,
    "reasoning": {
      "supportedModes": [
        "auto",
        "low",
        "high",
        "max"
      ],
      "defaultMode": "max"
    }
  }
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/zhipu.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `glm-5.3-flashx-legal` | 1000000 / 128000 | 非计价主数据 | `id`→[glm-legal-20261116](../SOURCES.md#glm-legal-20261116)、`spec.contextWindow`→[glm-legal-20261116](../SOURCES.md#glm-legal-20261116)、`spec.maxOutputTokens`→[glm-legal-20261116](../SOURCES.md#glm-legal-20261116)、`spec.supportsReasoning`→[glm-legal-20261116](../SOURCES.md#glm-legal-20261116)、`spec.extra.thinkingOnly`→[glm-legal-20261116](../SOURCES.md#glm-legal-20261116) | [glm-legal-20261116](../SOURCES.md#glm-legal-20261116) | partial | `77cba43e3be0b52de99cde2e93d145cd56f356cc3b56e96ea5a3e0d3faf5d602` |

## 待核实项

未列出字段仍为未核实；目录、编译和 Schema 校验不能替代账号调用。不同接入面的价格、限制与协议分别核对；未加入默认自动路由。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "zhipu",
  "checkedAt": "2026-11-16",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
