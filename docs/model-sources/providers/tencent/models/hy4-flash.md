# hy4-flash：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`hy4-flash`。
- 核验日期：2026-11-16；仅下列字段取得官网证明，未执行收费 API 或订阅账号调用。

## 接入合同与核验边界

腾讯 TokenHub 原厂目录列出精确型号、图片理解、思考、结构化输出与工具调用。官网限制仅写 1M 总窗口、960k 最大输入、64k 最大输出，本仓按十进制保守换算为 1000000/960000/64000；精确整数待核。最大输入只在 V2 facts.maxInputTokens 中记录，冻结 V1 不新增键。思考档位未取得型号专属证明，保持未知，不合成推理矩阵。

这条共享规格没有声明旧 Hunyuan API 或旧 Token Plan 端点可用。新 TokenHub 套餐列表与接入地址已读取，但未迁移现有整组 Provider。原厂价格和限时折扣只保存在来源目录，不能写入共享规格，也不套用为 OpenRouter 价格；OpenRouter 精确接入若列出，以平台记录独立核实。

## 字段级来源记录

### compute/model-specs/tencent.json

[查看配置](../../../../../compute/model-specs/tencent.json) · [接入面说明](../access/model-specs--tencent.md)

当前参数详情；路由和默认选择属于本仓策略：

<!-- source-details: {"config":"compute/model-specs/tencent.json","id":"hy4-flash"} -->
```json
{
  "spec": {
    "contextWindow": 1000000,
    "maxOutputTokens": 64000,
    "capabilities": [
      "chat",
      "reasoning",
      "vision",
      "tool_use",
      "long_context"
    ],
    "serviceType": [
      "chat"
    ],
    "supportsReasoning": true,
    "description": "腾讯混元 HY4 Flash，面向高效多模态理解与长上下文任务"
  }
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/tencent.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `hy4-flash` | 1000000 / 64000 | 非计价主数据 | `id`→[tokenhub-models-20261116](../SOURCES.md#tokenhub-models-20261116)、`spec.contextWindow`→[tokenhub-models-20261116](../SOURCES.md#tokenhub-models-20261116)、`spec.maxOutputTokens`→[tokenhub-models-20261116](../SOURCES.md#tokenhub-models-20261116)、`spec.supportsReasoning`→[tokenhub-models-20261116](../SOURCES.md#tokenhub-models-20261116) | [tokenhub-models-20261116](../SOURCES.md#tokenhub-models-20261116) | partial | `9962ec556203e493885f18b261634e1652c29850f7b695ba7a8de48ffc6b6fa0` |

## 待核实项

未列出字段仍为未核实；目录、编译和 Schema 校验不能替代账号调用。不同接入面的价格、限制与协议分别核对；未加入默认自动路由。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "tencent",
  "checkedAt": "2026-11-16",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
