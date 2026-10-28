# mistral-large-4：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`mistral-large-4`。
- 核验日期：2026-10-28；仅下表列出的字段取得官网证明，未进行收费 API 或订阅账号调用。

## 接入合同与核验边界

Large 4 为 Public Preview。原厂模型页仅写 1M，精确窗口和输出上限保持 unknown，不把 OpenRouter 的 1048576/262144 复制成原厂硬上限。标准 USD/M 1.36/4.18/0.14，发布后两周五折已结束。本仓原生接入只暴露 none，以使用普通字符串响应；high 的 thinking/text chunk 数组尚未做客户端账号验收，不能凭通用 Chat Completions 名称宣布适配完成。OpenRouter 由平台正规化响应，独立记录其托管限额。

新型号的 tier、routingPriority、eligibleForAgent=false 与 defaultReference=false 是本仓策略；保持手动选择，未扩大默认自动路由。

## 字段级来源记录

### compute/model-specs/mistral.json

[查看配置](../../../../../compute/model-specs/mistral.json) · [接入面说明](../access/model-specs--mistral.md)

当前参数详情；路由、默认选择与产品策略不作为官网事实：

<!-- source-details: {"config":"compute/model-specs/mistral.json","id":"mistral-large-4"} -->
```json
{
  "spec": {
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
    "description": "Mistral Large 4（Public Preview），原厂文档窗口为 1M 简写、精确整数及输出上限未取得证明；原厂高强度思考返回 chunk 数组，本接入暂使用 none"
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
        "high"
      ],
      "defaultMode": "off"
    }
  }
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/mistral.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `mistral-large-4` | 未声明 / 未声明 | 非计价主数据 | `id`→[mistral-large4](../SOURCES.md#mistral-large4)、`spec.capabilities`→[mistral-large4](../SOURCES.md#mistral-large4)、`spec.supportsReasoning`→[mistral-large4-reasoning](../SOURCES.md#mistral-large4-reasoning) | [mistral-large4](../SOURCES.md#mistral-large4)、[mistral-large4-reasoning](../SOURCES.md#mistral-large4-reasoning) | partial | `823d7c7157522a606ab50c8d2439298f78e78781e0bc2ae04df0ef0263c4c588` |

### compute/providers/mistral.json

[查看配置](../../../../../compute/providers/mistral.json) · [接入面说明](../access/providers--mistral.md)

当前参数详情；路由、默认选择与产品策略不作为官网事实：

<!-- source-details: {"config":"compute/providers/mistral.json","id":"mistral-large-4"} -->
```json
{
  "serviceType": [
    "chat"
  ],
  "description": "Mistral Large 4（Public Preview），原厂文档窗口为 1M 简写、精确整数及输出上限未取得证明；原厂高强度思考返回 chunk 数组，本接入暂使用 none",
  "capabilities": [
    "chat",
    "reasoning",
    "code",
    "vision",
    "tool_use",
    "long_context"
  ],
  "inputPrice": 1.36,
  "outputPrice": 4.18,
  "extra": {
    "reasoning": {
      "supportedEfforts": [
        "none"
      ]
    },
    "cachedInputPrice": 0.14,
    "pricingNotes": "USD/百万 tokens 标准原价；发布后两周五折活动已结束。原厂窗口只取得 1M 简写，精确整数与输出上限保持未知；高强度思考返回 thinking/text chunk 数组，当前直连接入暂只暴露 none，未进行账号调用验收。"
  }
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/mistral.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `mistral-large-4` | 未声明 / 未声明 | USD：1.36 / 4.18 | `modelName`→[mistral-large4](../SOURCES.md#mistral-large4)、`capabilities`→[mistral-large4](../SOURCES.md#mistral-large4)、`inputPrice`→[mistral-large4](../SOURCES.md#mistral-large4)、`outputPrice`→[mistral-large4](../SOURCES.md#mistral-large4)、`extra.cachedInputPrice`→[mistral-large4](../SOURCES.md#mistral-large4) | [mistral-large4](../SOURCES.md#mistral-large4)、[mistral-large4-reasoning](../SOURCES.md#mistral-large4-reasoning) | partial | `477753bfba7fee9e64cce8d640b0baaea6830f1ccecfc28e6f893021253a02ff` |

## 待核实项

- 未列入字段来源的参数维持待核实；本地 Schema、编译与 resolver 对照不能替代账号调用。
- 原厂、订阅、聚合平台分别复核；不能从模型名称、目录存在或 HTTP 200 推导全部协议能力。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "mistral",
  "checkedAt": "2026-10-28",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
