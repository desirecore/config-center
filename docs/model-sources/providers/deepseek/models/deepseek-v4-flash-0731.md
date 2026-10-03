# deepseek-v4-flash-0731：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`deepseek-v4-flash-0731`。
- 核验日期：2026-10-03；本次只迁移记录，没有重新核验或提高状态。

## 适用接入面

- [compute/model-specs/deepseek.json](../access/model-specs--deepseek.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/model-specs/deepseek.json

[查看配置](../../../../../compute/model-specs/deepseek.json) · [接入面说明](../access/model-specs--deepseek.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/deepseek.json","id":"deepseek-v4-flash-0731"} -->
```json
{
  "spec.contextWindow": 1000000,
  "spec.maxOutputTokens": 384000,
  "spec.serviceType": [
    "chat",
    "reasoning"
  ],
  "spec.capabilities": [
    "chat",
    "code",
    "reasoning",
    "deep_thinking",
    "multilingual",
    "tool_use"
  ],
  "spec.supportsReasoning": true,
  "spec.defaultTemperature": 1,
  "routing.tier": "lightweight",
  "routing.routingPriority": 35,
  "routing.eligibleForAgent": true,
  "routing.reasoning": {
    "supportedModes": [
      "auto",
      "high",
      "max"
    ],
    "defaultMode": "high"
  }
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/deepseek.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `deepseek-v4-flash-0731` | 1000000 / 384000 | 非计价主数据 | 待核实 | [deepseek-pricing](../SOURCES.md#deepseek-pricing) | pending | `78655b7df315439489b83557a8add0821837471cfab1177f24765323dd87f26e` |

## 下次更新核查

- 对照官网核查精确 ID／别名、是否仍列出、上下文／输入／输出限制及单位。
- 分别核查推理档位、默认值、是否可关闭思考、采样和强制工具选择限制、多模态输入／输出。
- 按本接入面核对价格、缓存、阶梯／峰谷、套餐支持；不能把其他平台参数直接复制。
- 只更新真正复核的字段与引用来源；保留其余待核实项及历史记录。
- 同步对应 canonical JSON、回归和模型指纹，再运行来源校验。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "deepseek",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->

## 本轮接入合同清理

共享规格的 spec.extra.reasoningEffort 已移除：它属于具体网关可接受的请求档位，不能作为内在规格下发。保留既有 routing.reasoning 策略及其他参数，不借此提高官方核验状态。百炼套餐已有生效的 extra.reasoning high/max；只删除并列旧键，不把原厂或按量 API 的 low 档位自动套用到套餐。
