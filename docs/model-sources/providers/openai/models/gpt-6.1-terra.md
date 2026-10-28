# gpt-6.1-terra：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`gpt-6.1-terra`。
- 核验日期：2026-10-28；仅下表列出的字段取得官网证明，未进行收费 API 或订阅账号调用。

## 接入合同与核验边界

Terra 原厂 API 明确窗口 1050000、最大输入 922000、最大输出 128000。最大输入保存在 V2 facts.maxInputTokens，冻结 V1 契约没有新增键。原厂启用已有 responsesOnly；Codex 不声明 none 档，保留原订阅协议，不把 CLI 0.159.0 写成 DesireCore 版本门槛。长上下文倍率、缓存写入与不同服务层级记录在计价说明。

新型号的 tier、routingPriority、eligibleForAgent=false 与 defaultReference=false 是本仓策略；保持手动选择，未扩大默认自动路由。

## 字段级来源记录

### compute/model-specs/openai.json

[查看配置](../../../../../compute/model-specs/openai.json) · [接入面说明](../access/model-specs--openai.md)

当前参数详情；路由、默认选择与产品策略不作为官网事实：

<!-- source-details: {"config":"compute/model-specs/openai.json","id":"gpt-6.1-terra"} -->
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
    "description": "GPT-6.1 Terra，视觉推理、电脑操作与写作；工具调用使用 Responses API，支持关闭推理"
  },
  "routing": {
    "tier": "balanced",
    "routingPriority": 50,
    "eligibleForAgent": false,
    "defaultReference": false,
    "reasoning": {
      "supportedModes": [
        "auto",
        "off",
        "low",
        "medium",
        "high",
        "xhigh",
        "max"
      ],
      "defaultMode": "medium"
    }
  }
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/openai.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `gpt-6.1-terra` | 1050000 / 128000 | 非计价主数据 | `id`→[openai-terra61](../SOURCES.md#openai-terra61)、`spec.contextWindow`→[openai-terra61](../SOURCES.md#openai-terra61)、`spec.maxOutputTokens`→[openai-terra61](../SOURCES.md#openai-terra61)、`spec.capabilities`→[openai-terra61](../SOURCES.md#openai-terra61)、`spec.supportsReasoning`→[openai-terra61](../SOURCES.md#openai-terra61) | [openai-terra61](../SOURCES.md#openai-terra61) | partial | `600e44770d85c43d0c540133f6b151d7e2baf53c4a17715388c9ac66d6ad50ae` |

### compute/providers/openai-codex.json

[查看配置](../../../../../compute/providers/openai-codex.json) · [接入面说明](../access/providers--openai-codex.md)

当前参数详情；路由、默认选择与产品策略不作为官网事实：

<!-- source-details: {"config":"compute/providers/openai-codex.json","id":"gpt-6.1-terra"} -->
```json
{
  "serviceType": [
    "chat"
  ],
  "description": "GPT-6.1 Terra，ChatGPT/Codex 订阅模型；实际可用性与额度以账户为准，未执行订阅账号调用验收",
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
    }
  },
  "source": "preset"
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/openai-codex.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `gpt-6.1-terra` | 1050000 / 128000 | USD：未声明 / 未声明 | `modelName`→[openai-terra61-codex](../SOURCES.md#openai-terra61-codex) | [openai-terra61-codex](../SOURCES.md#openai-terra61-codex) | partial | `76d5a9c2a279cd82b2c750f86bbcaf5e0bbd21cbafe58e3c3fdf121fa41bf64d` |

### compute/providers/openai.json

[查看配置](../../../../../compute/providers/openai.json) · [接入面说明](../access/providers--openai.md)

当前参数详情；路由、默认选择与产品策略不作为官网事实：

<!-- source-details: {"config":"compute/providers/openai.json","id":"gpt-6.1-terra"} -->
```json
{
  "serviceType": [
    "chat"
  ],
  "description": "GPT-6.1 Terra，视觉推理、电脑操作与写作；工具调用使用 Responses API，支持关闭推理",
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
  "inputPrice": 1,
  "outputPrice": 5,
  "extra": {
    "responsesOnly": true,
    "reasoning": {
      "supportedEfforts": [
        "none",
        "low",
        "medium",
        "high",
        "xhigh",
        "max"
      ],
      "defaultEffort": "medium"
    },
    "cachedInputPrice": 0.05,
    "pricingNotes": "USD/百万 tokens，Standard：输入 1、缓存读取 0.05、输出 5；30 分钟缓存写入 1.25，12 小时写入 2.50。输入超过 272000 tokens 时整次请求输入与缓存费率 2 倍、输出 1.5 倍；Batch/Flex、Fast 及地域费率另计。"
  }
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/openai.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `gpt-6.1-terra` | 1050000 / 128000 | USD：1 / 5 | `modelName`→[openai-terra61](../SOURCES.md#openai-terra61)、`contextWindow`→[openai-terra61](../SOURCES.md#openai-terra61)、`maxOutputTokens`→[openai-terra61](../SOURCES.md#openai-terra61)、`capabilities`→[openai-terra61](../SOURCES.md#openai-terra61)、`extra.reasoning`→[openai-terra61](../SOURCES.md#openai-terra61)、`inputPrice`→[openai-terra61](../SOURCES.md#openai-terra61)、`outputPrice`→[openai-terra61](../SOURCES.md#openai-terra61)、`extra.responsesOnly`→[openai-terra61](../SOURCES.md#openai-terra61)、`extra.cachedInputPrice`→[openai-terra61](../SOURCES.md#openai-terra61) | [openai-terra61](../SOURCES.md#openai-terra61) | partial | `7b854fe9ce7d522d0be1edd9fe8606fbfdfe359ba42f7a0ec80e1b5279653556` |

## 待核实项

- 未列入字段来源的参数维持待核实；本地 Schema、编译与 resolver 对照不能替代账号调用。
- 原厂、订阅、聚合平台分别复核；不能从模型名称、目录存在或 HTTP 200 推导全部协议能力。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "openai",
  "checkedAt": "2026-10-28",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
