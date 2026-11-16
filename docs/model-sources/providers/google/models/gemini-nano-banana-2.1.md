# gemini-nano-banana-2.1：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`gemini-nano-banana-2.1`。
- 核验日期：2026-11-16；仅下列字段取得官网证明，未执行收费 API 或订阅账号调用。

## 接入合同与核验边界

官方模型页列为 Stable、2026年10月更新。独立最大输入131072、最大输出32768，不把独立输入混作统一窗口；maxInputTokens 仅保留在 canonical V2 facts，冻结 V1 无该键，contextWindow未知不填。支持文字/图像/视频/PDF输入，图像和文字输出；thinking为minimal/medium/high、默认medium，支持Google Search，函数调用和结构化输出不支持。

本批只登记规格，不增加未适配的图像调用接入，不参与默认自动路由；未取得本接入价目或账号调用验收，不向共享规格写入价格。

## 字段级来源记录

### compute/model-specs/google.json

[查看配置](../../../../../compute/model-specs/google.json) · [接入面说明](../access/model-specs--google.md)

当前参数详情；路由和默认选择属于本仓策略：

<!-- source-details: {"config":"compute/model-specs/google.json","id":"gemini-nano-banana-2.1"} -->
```json
{
  "spec": {
    "maxOutputTokens": 32768,
    "capabilities": [
      "image_generation",
      "image_editing",
      "text_rendering"
    ],
    "serviceType": [
      "image_gen"
    ],
    "description": "Gemini Nano Banana 2.1，支持文字、图像、视频和 PDF 输入的图像生成与编辑模型",
    "supportsReasoning": true
  }
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/google.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `gemini-nano-banana-2.1` | 未声明 / 32768 | 非计价主数据 | `id`→[google-nano-banana21](../SOURCES.md#google-nano-banana21)、`spec.maxOutputTokens`→[google-nano-banana21](../SOURCES.md#google-nano-banana21)、`spec.capabilities`→[google-nano-banana21](../SOURCES.md#google-nano-banana21)、`spec.supportsReasoning`→[google-nano-banana21](../SOURCES.md#google-nano-banana21) | [google-nano-banana21](../SOURCES.md#google-nano-banana21) | partial | `3b4653b8526a09ec144a8ba5727249ecfb35f821db68247c063f940ecac232cc` |

## 待核实项

未列出字段仍为未核实；目录、编译和 Schema 校验不能替代账号调用。不同接入面的价格、限制与协议分别核对；未加入默认自动路由。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "google",
  "checkedAt": "2026-11-16",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
