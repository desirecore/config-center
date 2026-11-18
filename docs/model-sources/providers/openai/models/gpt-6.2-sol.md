# gpt-6.2-sol：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`gpt-6.2-sol`。
- 核验日期：2026-11-18；仅下列字段取得官网证明，未执行收费 API 或订阅账号调用。

## 接入合同与核验边界

原厂 API 确认精确 ID gpt-6.2-sol，型号页的 Model IDs 只列自身；未据此虚构日期快照或原厂 Pro 型号。Work 官方发布记录为2026-11-17，实际读取为2026-11-18。原厂为1050000总窗口、922000独立最大输入、128000最大输出；文字/图像输入与文字输出，不支持音频/视频。最大输入保留在canonical V2事实，冻结V1没有该字段，不能用总窗口代替。

两款API均明确拒none；迁移指南建议none/minimal用户改low。共享thinkingOnly与samplingParametersDeprecated根据原厂型号页/6.2迁移指南保守投影，保护只经过Spec enrich的动态精确模型，不从OpenRouter倒推。low/medium/high/xhigh/max仅是官方通用语法和现有消费者可传的保守子集；未取得独立账号的逐档调用证明，不将该tuple单独列为“完整矩阵已核”。指南推荐medium并不是硬默认，因此API和Codex都不填defaultEffort；routing.defaultMode=auto、tier/priority及不自动选型属于本仓策略。

原厂API基础Chat Completions可用，工具调用必须Responses；本批新行同时显式responsesOnly和V1实际消费的apiFormatOverride=openai-responses，保留旧Provider全局协议与旧模型。移除temperature/top_p/top_logprobs以及include中的message.output_text.logprobs。当前默认short请求不发旧retention，SDK固定store:false与6.2官方ZDR合同相容；本地协议回归不是厂商账号验收。环境变量long产生的旧24h retention、12h/显式缓存、Pro reasoning.mode、多Agent beta与Ultrafast没有在本次声明已适配，不用未来版本号代替消费证明。

Standard USD/百万token短上下文：输入2、输出10、缓存读0.1、30分钟写2.5、12小时写5；缓存写入不是叠加费。原页272K按十进制1000换算为272000，输入超过272000时整次请求输入/缓存费率×2、输出×1.5。Fast同窗口×2、Batch×0.5；Ultrafast截至2027-02-28为Standard×3、2027-03-01起×6（Pacific time）。这是原厂USD合同，不套用Work/Codex套餐点数，也不将可选服务层级自动启用。

Work/Codex接入只采用官网默认上下文500000；官网说可配置最多1 million（按十进制1000000记录，这是原厂客户端配置能力，不代表本客户端已提供升窗设置），本次不将API1050000冒称订阅默认或硬上限。订阅独立最大输入/输出尚无型号专属字段证据：独立最大输入canonical覆盖为null；独立订阅输出在metadata.knownContract.subscriptionMaxOutputTokens保留null未知。raw/canonical maxOutputTokens=128000仅是本仓预算规划天花板，采用同型号已核API上限并保持既有V1共享规格补缺行为；不是订阅官方上限，也不承诺Codex wire强制发送此值，因此不将该字段列为订阅官网已核。Work的消费端Light与Enterprise Medium默认有条件，CLI/各客户端的具体默认由实际账号和工作区决定，不在这里猜单一hard default。

Ultra是上层subagents编排，Ultrafast是速度层级；二者都不作为新effort枚举，Pro也不新造原厂模型ID。6.2的前缀/模型降级/账号变化可能丢弃reasoning items、影响质量/费用，但不是Fable式prefix400。当前客户端可能编辑系统/工具/历史，未声明完整保持前缀或缓存命中。原厂、订阅与聚合平台独立记录；未进行收费API、订阅账号或安装GUI验收。

## 字段级来源记录

### compute/model-specs/openai.json

[查看配置](../../../../../compute/model-specs/openai.json) · [接入面说明](../access/model-specs--openai.md)

当前参数详情；路由和默认选择属于本仓策略：

<!-- source-details: {"config":"compute/model-specs/openai.json","id":"gpt-6.2-sol"} -->
```json
{
  "spec": {
    "contextWindow": 1050000,
    "maxOutputTokens": 128000,
    "capabilities": [
      "chat",
      "reasoning",
      "code",
      "vision",
      "tool_use",
      "long_context"
    ],
    "serviceType": [
      "chat"
    ],
    "supportsReasoning": true,
    "description": "GPT-6.2 Sol，面向日常编程、写作与智能体任务的多模态推理模型",
    "extra": {
      "thinkingOnly": true,
      "samplingParametersDeprecated": true
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
        "medium",
        "high",
        "xhigh",
        "max"
      ],
      "defaultMode": "auto"
    }
  }
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/openai.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `gpt-6.2-sol` | 1050000 / 128000 | 非计价主数据 | `id`→[openai-models-20261118](../SOURCES.md#openai-models-20261118)、`spec.contextWindow`→[openai-sol62-20261118](../SOURCES.md#openai-sol62-20261118)、`spec.maxOutputTokens`→[openai-sol62-20261118](../SOURCES.md#openai-sol62-20261118)、`spec.capabilities`→[openai-sol62-20261118](../SOURCES.md#openai-sol62-20261118)、`spec.supportsReasoning`→[openai-sol62-20261118](../SOURCES.md#openai-sol62-20261118)、`spec.extra.thinkingOnly`→[openai-sol62-20261118](../SOURCES.md#openai-sol62-20261118)、`spec.extra.samplingParametersDeprecated`→[openai-latest62-20261118](../SOURCES.md#openai-latest62-20261118) | [openai-models-20261118](../SOURCES.md#openai-models-20261118)、[openai-sol62-20261118](../SOURCES.md#openai-sol62-20261118)、[openai-latest62-20261118](../SOURCES.md#openai-latest62-20261118) | partial | `c0f3494f0a7524d4e6ad01ded61a5ff520af599a676a3a494dd6190251d2e7c3` |

### compute/providers/openai.json

[查看配置](../../../../../compute/providers/openai.json) · [接入面说明](../access/providers--openai.md)

当前参数详情；路由和默认选择属于本仓策略：

<!-- source-details: {"config":"compute/providers/openai.json","id":"gpt-6.2-sol"} -->
```json
{
  "serviceType": [
    "chat"
  ],
  "description": "GPT-6.2 Sol，面向日常编程、写作与智能体任务的多模态推理模型",
  "contextWindow": 1050000,
  "maxOutputTokens": 128000,
  "capabilities": [
    "chat",
    "reasoning",
    "code",
    "vision",
    "tool_use",
    "long_context"
  ],
  "inputPrice": 2,
  "outputPrice": 10,
  "extra": {
    "responsesOnly": true,
    "apiFormatOverride": "openai-responses",
    "reasoning": {
      "supportedEfforts": [
        "low",
        "medium",
        "high",
        "xhigh",
        "max"
      ]
    },
    "thinkingOnly": true,
    "samplingParametersDeprecated": true,
    "cachedInputPrice": 0.1,
    "pricingNotes": "USD/百万 tokens，Standard短上下文：输入2、输出10、缓存读0.1、30分钟缓存写2.5、12小时缓存写5。原页272K按十进制1000换算为272000；输入>272000时整次请求输入/缓存费率×2、输出×1.5；Fast同窗口×2，Batch×0.5。Ultrafast截至2027-02-28为Standard×3，2027-03-01起×6（Pacific time）。缓存写非叠加收费。默认缓存沿用上游隐式设置；不宣称旧24h retention、12h/显式缓存、Pro mode或Ultrafast已适配。"
  }
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/openai.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `gpt-6.2-sol` | 1050000 / 128000 | USD：2 / 10 | `modelName`→[openai-sol62-20261118](../SOURCES.md#openai-sol62-20261118)、`contextWindow`→[openai-sol62-20261118](../SOURCES.md#openai-sol62-20261118)、`maxOutputTokens`→[openai-sol62-20261118](../SOURCES.md#openai-sol62-20261118)、`capabilities`→[openai-sol62-20261118](../SOURCES.md#openai-sol62-20261118)、`inputPrice`→[openai-pricing62-20261118](../SOURCES.md#openai-pricing62-20261118)、`outputPrice`→[openai-pricing62-20261118](../SOURCES.md#openai-pricing62-20261118)、`extra.cachedInputPrice`→[openai-pricing62-20261118](../SOURCES.md#openai-pricing62-20261118)、`extra.responsesOnly`→[openai-latest62-20261118](../SOURCES.md#openai-latest62-20261118)、`extra.apiFormatOverride`→[openai-latest62-20261118](../SOURCES.md#openai-latest62-20261118)、`extra.thinkingOnly`→[openai-sol62-20261118](../SOURCES.md#openai-sol62-20261118)、`extra.samplingParametersDeprecated`→[openai-latest62-20261118](../SOURCES.md#openai-latest62-20261118) | [openai-sol62-20261118](../SOURCES.md#openai-sol62-20261118)、[openai-pricing62-20261118](../SOURCES.md#openai-pricing62-20261118)、[openai-latest62-20261118](../SOURCES.md#openai-latest62-20261118) | partial | `fd9b6e47b75d1dbb2e58423b10bfb50e47bf6d57f3aee3bec1b826c783f23334` |

### compute/providers/openai-codex.json

[查看配置](../../../../../compute/providers/openai-codex.json) · [接入面说明](../access/providers--openai-codex.md)

当前参数详情；路由和默认选择属于本仓策略：

<!-- source-details: {"config":"compute/providers/openai-codex.json","id":"gpt-6.2-sol"} -->
```json
{
  "serviceType": [
    "chat"
  ],
  "description": "GPT-6.2 Sol，面向日常编程、写作与智能体任务的多模态推理模型；订阅接入的独立输出上限待核",
  "contextWindow": 500000,
  "maxOutputTokens": 128000,
  "capabilities": [
    "chat",
    "reasoning",
    "code",
    "vision",
    "tool_use",
    "long_context"
  ],
  "extra": {
    "reasoning": {
      "supportedEfforts": [
        "low",
        "medium",
        "high",
        "xhigh",
        "max"
      ]
    }
  },
  "source": "preset"
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/openai-codex.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `gpt-6.2-sol` | 500000 / 128000 | USD：未声明 / 未声明 | `modelName`→[openai-work-models-20261118](../SOURCES.md#openai-work-models-20261118)、`contextWindow`→[openai-work-models-20261118](../SOURCES.md#openai-work-models-20261118) | [openai-work-models-20261118](../SOURCES.md#openai-work-models-20261118) | partial | `731d395178dd38a1b31eae651fb5a53b5d518dc09933e1796303871b98bdf080` |

## 待核实项

未列出字段仍为未核实；目录、编译和 Schema 校验不能替代账号调用。不同接入面的价格、限制与协议分别核对；未加入默认自动路由。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "openai",
  "checkedAt": "2026-11-18",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
