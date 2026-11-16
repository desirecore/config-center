# claude-fable-5-2：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`claude-fable-5-2`。
- 核验日期：2026-11-16；仅下列字段取得官网证明，未执行收费 API 或订阅账号调用。

## 接入合同与核验边界

原厂 Claude API 已确认精确 ID、Active、文字/图像输入与文字输出。官网 1M/128K 是简写，沿本仓 Anthropic 十进制约定记录为 1000000/128000，不宣称官网给出明文整数。始终开启 adaptive，支持 low/medium/high/xhigh/max，默认 high；禁止 disabled、manual budget 和强制 tool_choice；移除采样入参。原厂 USD/M 输入8、输出40、5分钟缓存写10、1小时写16、读0.20，价格不进入共享规格。

本批只登记规格，保持手动选择。Fable 5.2 对 system、tools 和历史消息的 prefix 不匹配返回400；思考块保留、历史压缩/改写和账户保留期尚需客户端专项验收，不因与 Fable 5.1 同协议而直接加入原厂或订阅可调用 Provider。以后新增 OpenRouter 接入时须独立核对平台合同，不能据此推断原厂适配已完成。

## 字段级来源记录

### compute/model-specs/anthropic.json

[查看配置](../../../../../compute/model-specs/anthropic.json) · [接入面说明](../access/model-specs--anthropic.md)

当前参数详情；路由和默认选择属于本仓策略：

<!-- source-details: {"config":"compute/model-specs/anthropic.json","id":"claude-fable-5-2"} -->
```json
{
  "spec": {
    "contextWindow": 1000000,
    "maxOutputTokens": 128000,
    "capabilities": [
      "chat",
      "reasoning",
      "deep_thinking",
      "code",
      "vision",
      "tool_use",
      "long_context"
    ],
    "serviceType": [
      "chat"
    ],
    "supportsReasoning": true,
    "description": "Claude Fable 5.2，支持视觉输入、复杂推理与长程智能体任务，始终开启自适应思考",
    "extra": {
      "adaptiveThinking": true,
      "thinkingOnly": true,
      "samplingParametersDeprecated": true,
      "forcedToolChoiceUnsupported": true
    }
  },
  "routing": {
    "tier": "flagship",
    "routingPriority": 20,
    "eligibleForAgent": false,
    "defaultReference": false,
    "reasoning": {
      "supportedModes": [
        "auto",
        "low",
        "medium",
        "high",
        "xhigh",
        "max"
      ],
      "defaultMode": "high"
    }
  }
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/anthropic.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `claude-fable-5-2` | 1000000 / 128000 | 非计价主数据 | `id`→[claude-fable52](../SOURCES.md#claude-fable52)、`spec.contextWindow`→[claude-fable52](../SOURCES.md#claude-fable52)、`spec.maxOutputTokens`→[claude-fable52](../SOURCES.md#claude-fable52)、`spec.capabilities`→[claude-fable52](../SOURCES.md#claude-fable52)、`spec.supportsReasoning`→[claude-fable52](../SOURCES.md#claude-fable52)、`spec.extra.thinkingOnly`→[claude-fable52-changes](../SOURCES.md#claude-fable52-changes)、`spec.extra.adaptiveThinking`→[claude-fable52-changes](../SOURCES.md#claude-fable52-changes)、`spec.extra.forcedToolChoiceUnsupported`→[claude-fable52-changes](../SOURCES.md#claude-fable52-changes)、`spec.extra.samplingParametersDeprecated`→[claude-fable52-migration](../SOURCES.md#claude-fable52-migration) | [claude-fable52](../SOURCES.md#claude-fable52)、[claude-fable52-changes](../SOURCES.md#claude-fable52-changes)、[claude-fable52-migration](../SOURCES.md#claude-fable52-migration) | partial | `eebd3501508233f4ed95344c098ccf5453a412a2bfad220ec0e2b9d37ed2607f` |

## 待核实项

未列出字段仍为未核实；目录、编译和 Schema 校验不能替代账号调用。不同接入面的价格、限制与协议分别核对；未加入默认自动路由。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "anthropic",
  "checkedAt": "2026-11-16",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
