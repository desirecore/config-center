# qwen4-max-preview：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`qwen4-max-preview`。
- 核验日期：2026-11-16；仅下列字段取得官网证明，未执行收费 API 或订阅账号调用。

## 接入合同与核验边界

这是 Token Plan 专属预览合同，不能继承正式 qwen4-max 的输出和推理参数。官网明确 1M 上下文、393216 最大输出，思考内容与最终回答共享输出预算；1M 按十进制 1000000 解释。精确调用 ID 为 qwen4-max-preview，Token Plan 页明文给出别名 qwen4.0-max-preview；两者均显式绑定本预览规格，避免客户端去掉 preview 后缀时误命中正式版。没有新增静态接入，routing 保持手动且只声明 auto，不以规格记录宣称客户端已适配原生 low/medium/xhigh 档位。

官方预览期为北京时间 2026-11-11 10:00 至 2026-11-25 24:00（UTC+8），结束后下线。结束瞬间对应 2026-11-25T16:00:00Z，仅在 canonical metadata.previewPeriod.endsAt 保存；本仓执行性 retiredAt 只有 UTC 日期粒度，不能表达该瞬间，因此没有填写一个虚构的停服日期。metadata 不参与运行时门控，精确期限控制仍待客户端适配；本批未承诺自动在该瞬间停用自定义模型。

官网写明仅供 Token Plan、不提供按量计费；不能将正式版 API 价格用于本预览。思考默认开启、原生档位 low/medium/xhigh 默认 xhigh，reasoning_effort 与 thinking_budget 不能同时设置；preserve_thinking 默认开启且须完整回传 reasoning_content，相关协议与账号调用未验收。

## 字段级来源记录

### compute/model-specs/qwen.json

[查看配置](../../../../../compute/model-specs/qwen.json) · [接入面说明](../access/model-specs--qwen.md)

当前参数详情；路由和默认选择属于本仓策略：

<!-- source-details: {"config":"compute/model-specs/qwen.json","id":"qwen4-max-preview"} -->
```json
{
  "spec": {
    "contextWindow": 1000000,
    "maxOutputTokens": 393216,
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
    "description": "Qwen4 Max Preview，通义千问旗舰推理模型的独立限时预览版"
  },
  "routing": {
    "tier": "flagship",
    "routingPriority": 50,
    "eligibleForAgent": false,
    "defaultReference": false,
    "reasoning": {
      "supportedModes": [
        "auto"
      ],
      "defaultMode": "auto"
    }
  }
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/qwen.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `qwen4-max-preview` | 1000000 / 393216 | 非计价主数据 | `id`→[qwen4-preview-20261116](../SOURCES.md#qwen4-preview-20261116)、`match.exact`→[qwen-token-plan-20261116](../SOURCES.md#qwen-token-plan-20261116)、`spec.contextWindow`→[qwen4-preview-20261116](../SOURCES.md#qwen4-preview-20261116)、`spec.maxOutputTokens`→[qwen4-preview-20261116](../SOURCES.md#qwen4-preview-20261116)、`spec.supportsReasoning`→[qwen4-preview-20261116](../SOURCES.md#qwen4-preview-20261116) | [qwen4-preview-20261116](../SOURCES.md#qwen4-preview-20261116)、[qwen-token-plan-20261116](../SOURCES.md#qwen-token-plan-20261116) | partial | `36c7624809df528fd7109adecbc3019752efa94883c1aaccd6aa2793c50c3f89` |

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
