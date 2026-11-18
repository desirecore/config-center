# openai/gpt-6.2-astra：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`openai/gpt-6.2-astra`。
- 核验日期：2026-11-18；仅下列字段取得官网证明，未执行收费 API 或订阅账号调用。

## 接入合同与核验边界

这是 OpenRouter 独立平台合同：1050000 总窗口、128000 最大输出，文本/图片/文件输入与文本输出；文件处理仍需客户端与账号验收。[OpenAI endpoint](../SOURCES.md#openrouter-gpt-6.2-astra-endpoints-20261118) 明文最大输入 922000，只在 V2 记录；V1 不新增根 maxInputTokens 字段。平台支持 tools/tool_choice 与结构化输出，推理 mandatory=true，low/medium/high/xhigh/max 默认 medium；不支持关闭思考的声明来自平台目录，不能当作 Codex 订阅合同。该型号的 supported_parameters 未列 temperature、top_p，默认参数为空；据此配置 extra.samplingParametersDeprecated=true 作为本仓禁发采样参数的保守收紧。未取得网关单独宣告这些参数废弃的型号正文，该标记不列为官网明确废弃的已核字段。

本条精确绑定对应原厂基础型号，计价、推理矩阵与接入限制仍以 OpenRouter 独立合同为准；没有改变现有 Provider 首模型或默认自动路由。

计价只写 Standard USD/百万 tokens。长输入覆盖源字段 min_prompt_tokens=272000 及读/写/输入/输出价分别记在定价说明与 canonical metadata，不声称现有客户端会按阶或缓存写入自动估算。OpenAI Fast/Ultrafast 是端点层级，分别为 Standard token 价的 2/3 倍；未给当前条目固定这些层级，也不把它们当新模型或合并价。当前只证明官网公共目录和参数合同，不代表账号调用通过。

## 字段级来源记录

### compute/providers/openrouter.json

[查看配置](../../../../../compute/providers/openrouter.json) · [接入面说明](../access/providers--openrouter.md)

当前参数详情；路由和默认选择属于本仓策略：

<!-- source-details: {"config":"compute/providers/openrouter.json","id":"openai/gpt-6.2-astra"} -->
```json
{
  "serviceType": [
    "chat"
  ],
  "description": "GPT-6.2 Astra，OpenRouter 多模态推理入口",
  "contextWindow": 1050000,
  "maxOutputTokens": 128000,
  "capabilities": [
    "chat",
    "reasoning",
    "vision",
    "tool_use",
    "long_context"
  ],
  "inputPrice": 8,
  "outputPrice": 40,
  "extra": {
    "reasoning": {
      "supportedEfforts": [
        "low",
        "medium",
        "high",
        "xhigh",
        "max"
      ],
      "defaultEffort": "medium"
    },
    "thinkingOnly": true,
    "cachedInputPrice": 0.4,
    "cacheWritePrice": 10,
    "pricingNotes": "OpenRouter官方Models/Endpoints API 2026-11-18快照；Standard USD/token×1000000。长输入价阶按源字段min_prompt_tokens=272000记录于来源与非运行元数据，USD/M输入/输出/缓存读/写为16.0/60.0/0.8/20.0；阈值开闭以平台计费为准。OpenAI Fast/Ultrafast是独立Provider端点，token价分别为Standard的2倍/3倍；当前模型未固定该层级，不把它们混入Standard费率。其他工具计量项不并入token费率；不声称客户端已按长阶或缓存写入自动估算账单。",
    "samplingParametersDeprecated": true
  }
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/openrouter.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `openai/gpt-6.2-astra` | 1050000 / 128000 | USD：8 / 40 | `modelName`→[openrouter-20261118](../SOURCES.md#openrouter-20261118)、`contextWindow`→[openrouter-20261118](../SOURCES.md#openrouter-20261118)、`maxOutputTokens`→[openrouter-20261118](../SOURCES.md#openrouter-20261118)、`capabilities`→[openrouter-20261118](../SOURCES.md#openrouter-20261118)、`inputPrice`→[openrouter-20261118](../SOURCES.md#openrouter-20261118)、`outputPrice`→[openrouter-20261118](../SOURCES.md#openrouter-20261118)、`extra.cachedInputPrice`→[openrouter-20261118](../SOURCES.md#openrouter-20261118)、`extra.cacheWritePrice`→[openrouter-20261118](../SOURCES.md#openrouter-20261118)、`extra.reasoning.supportedEfforts`→[openrouter-20261118](../SOURCES.md#openrouter-20261118)、`extra.reasoning.defaultEffort`→[openrouter-20261118](../SOURCES.md#openrouter-20261118)、`extra.thinkingOnly`→[openrouter-20261118](../SOURCES.md#openrouter-20261118) | [openrouter-20261118](../SOURCES.md#openrouter-20261118) | partial | `fc25e29193e2a37d93dfec483f8a15ae3390fcf07905ea231dd79514e8eedf19` |

## 待核实项

未列出字段仍为未核实；目录、编译和 Schema 校验不能替代账号调用。不同接入面的价格、限制与协议分别核对；未加入默认自动路由。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "openrouter",
  "checkedAt": "2026-11-18",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
