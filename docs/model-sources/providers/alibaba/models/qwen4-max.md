# qwen4-max：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`qwen4-max`。
- 核验日期：2026-11-16；仅下列字段取得官网证明，未执行收费 API 或订阅账号调用。

## 接入合同与核验边界

正式版的按量 API 与 Token Plan 分开记录。官网明确 1000000 总窗口；非思考最大输入 991808、输出 131072，思考最大输入 983616、输出 262144。V2 原厂 facts.maxInputTokens 按跨模式较小值 983616 设置，冻结 V1 没有该字段；不能把总窗口当作可发送输入上限。共享规格保存思考最大输出 262144，两接入保守限制 131072。默认开启思考，官方 effort 为 low/high/xhigh、默认 high；默认采样随思考模式变化，本批没有固定采样。现客户端 Qwen 方言不透传 reasoning_effort，只发送 enable_thinking 与 thinking_budget；两条原生接入因此只开放关闭和 high。none 是本仓关闭语义，在线映射 enable_thinking:false 并删除 budget/effort；high 使用上游默认 high 与本仓既有预算。low/xhigh 仅保留原厂规格和独立 OpenRouter 合同，不声称原生已实现。思考回放仍未做账号验收。

API 价格仅采用北京 CNY 10/30 元每百万 tokens；套餐没有按量价格。短期 qwen4-max-preview 有独立期限与输出合同，未作为此正式版的别名或接入。新型号保持手动选择。

## 字段级来源记录

### compute/providers/dashscope.json

[查看配置](../../../../../compute/providers/dashscope.json) · [接入面说明](../access/providers--dashscope.md)

当前参数详情；路由和默认选择属于本仓策略：

<!-- source-details: {"config":"compute/providers/dashscope.json","id":"qwen4-max"} -->
```json
{
  "serviceType": [
    "chat"
  ],
  "description": "Qwen4 Max，支持图像与视频理解的通义千问旗舰推理模型",
  "contextWindow": 1000000,
  "maxOutputTokens": 131072,
  "capabilities": [
    "chat",
    "reasoning",
    "code",
    "vision",
    "video_understanding",
    "tool_use",
    "long_context"
  ],
  "extra": {
    "reasoning": {
      "supportedEfforts": [
        "none",
        "high"
      ],
      "defaultEffort": "high"
    },
    "pricingNotes": "北京CNY每百万Token标准价；思考输出允许262144，当前接入保守131072；非思考默认采样与思考不同，未固定默认采样。"
  },
  "source": "preset",
  "inputPrice": 10,
  "outputPrice": 30
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/dashscope.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `qwen4-max` | 1000000 / 131072 | CNY：10 / 30 | `modelName`→[qwen4-max-20261116](../SOURCES.md#qwen4-max-20261116)、`contextWindow`→[qwen4-max-20261116](../SOURCES.md#qwen4-max-20261116)、`maxOutputTokens`→[qwen4-max-20261116](../SOURCES.md#qwen4-max-20261116)、`extra.reasoning.supportedEfforts`→[qwen4-max-20261116](../SOURCES.md#qwen4-max-20261116)、`extra.reasoning.defaultEffort`→[qwen4-max-20261116](../SOURCES.md#qwen4-max-20261116)、`inputPrice`→[qwen4-max-20261116](../SOURCES.md#qwen4-max-20261116)、`outputPrice`→[qwen4-max-20261116](../SOURCES.md#qwen4-max-20261116) | [qwen4-max-20261116](../SOURCES.md#qwen4-max-20261116) | partial | `59db6ba9cb089858185b5118f5736e365a5415a6697e286512318336125cc1af` |

### compute/coding-plans/dashscope-token-plan.json

[查看配置](../../../../../compute/coding-plans/dashscope-token-plan.json) · [接入面说明](../access/coding-plans--dashscope-token-plan.md)

当前参数详情；路由和默认选择属于本仓策略：

<!-- source-details: {"config":"compute/coding-plans/dashscope-token-plan.json","id":"qwen4-max"} -->
```json
{
  "serviceType": [
    "chat"
  ],
  "description": "Qwen4 Max，支持图像与视频理解的通义千问旗舰推理模型",
  "contextWindow": 1000000,
  "maxOutputTokens": 131072,
  "capabilities": [
    "chat",
    "reasoning",
    "code",
    "vision",
    "video_understanding",
    "tool_use",
    "long_context"
  ],
  "extra": {
    "reasoning": {
      "supportedEfforts": [
        "none",
        "high"
      ],
      "defaultEffort": "high"
    }
  },
  "source": "preset"
}
```
<!-- source-details:end -->

<!-- source-config: compute/coding-plans/dashscope-token-plan.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `qwen4-max` | 1000000 / 131072 | 套餐：未声明 / 未声明 | `modelName`→[qwen-token-plan-20261116](../SOURCES.md#qwen-token-plan-20261116)、`contextWindow`→[qwen4-max-20261116](../SOURCES.md#qwen4-max-20261116)、`maxOutputTokens`→[qwen4-max-20261116](../SOURCES.md#qwen4-max-20261116)、`extra.reasoning.supportedEfforts`→[qwen4-max-20261116](../SOURCES.md#qwen4-max-20261116)、`extra.reasoning.defaultEffort`→[qwen4-max-20261116](../SOURCES.md#qwen4-max-20261116) | [qwen-token-plan-20261116](../SOURCES.md#qwen-token-plan-20261116)、[qwen4-max-20261116](../SOURCES.md#qwen4-max-20261116) | partial | `14b64f95e2714370c3401655afa30a4381749592f6e46604e904b179967414a3` |

### compute/model-specs/qwen.json

[查看配置](../../../../../compute/model-specs/qwen.json) · [接入面说明](../access/model-specs--qwen.md)

当前参数详情；路由和默认选择属于本仓策略：

<!-- source-details: {"config":"compute/model-specs/qwen.json","id":"qwen4-max"} -->
```json
{
  "spec": {
    "contextWindow": 1000000,
    "maxOutputTokens": 262144,
    "capabilities": [
      "chat",
      "reasoning",
      "code",
      "vision",
      "video_understanding",
      "tool_use",
      "long_context"
    ],
    "serviceType": [
      "chat"
    ],
    "supportsReasoning": true,
    "description": "Qwen4 Max，支持图像与视频理解的通义千问旗舰推理模型"
  },
  "routing": {
    "tier": "flagship",
    "routingPriority": 50,
    "eligibleForAgent": false,
    "defaultReference": false,
    "reasoning": {
      "supportedModes": [
        "auto",
        "off",
        "low",
        "high",
        "xhigh"
      ],
      "defaultMode": "high"
    }
  }
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/qwen.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `qwen4-max` | 1000000 / 262144 | 非计价主数据 | `id`→[qwen4-max-20261116](../SOURCES.md#qwen4-max-20261116)、`spec.contextWindow`→[qwen4-max-20261116](../SOURCES.md#qwen4-max-20261116)、`spec.maxOutputTokens`→[qwen4-max-20261116](../SOURCES.md#qwen4-max-20261116)、`spec.supportsReasoning`→[qwen4-max-20261116](../SOURCES.md#qwen4-max-20261116) | [qwen4-max-20261116](../SOURCES.md#qwen4-max-20261116) | partial | `866451a553003b299664b7ea4e017862273c8d5b8a2cb7f06acc10f82866e52b` |

## 待核实项

未列出字段仍为未核实；目录、编译和 Schema 校验不能替代账号调用。不同接入面的价格、限制与协议分别核对；未加入默认自动路由。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "alibaba",
  "checkedAt": "2026-11-16",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
