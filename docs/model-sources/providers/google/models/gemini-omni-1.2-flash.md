# gemini-omni-1.2-flash：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`gemini-omni-1.2-flash`。
- 核验日期：2026-11-16；仅下列字段取得官网证明，未执行收费 API 或订阅账号调用。

## 接入合同与核验边界

原厂独立最大输入 131072 token、最大输出 65536 token，不是统一总窗口；maxInputTokens 仅保留在 canonical V2 facts，冻结 V1 没有该键，contextWindow 未知不填。支持文字/图像/视频输入；1.2 输出带原生音频的视频和文字，生成视频3–15秒，编辑输入视频最多15秒，扩展回看10秒。

该模型使用 Interactions 视频生成和编辑合同，当前未适配；本批只登记规格，不加入文本 Provider 或自动路由。1.1 仍为 Stable，官网说明2026-12-03起路由至1.2；该未来别名迁移不是本日已退役。价格未进入共享规格，也未用其他视频平台价格代填。

## 字段级来源记录

### compute/model-specs/google.json

[查看配置](../../../../../compute/model-specs/google.json) · [接入面说明](../access/model-specs--google.md)

当前参数详情；路由和默认选择属于本仓策略：

<!-- source-details: {"config":"compute/model-specs/google.json","id":"gemini-omni-1.2-flash"} -->
```json
{
  "spec": {
    "maxOutputTokens": 65536,
    "capabilities": [
      "video_generation",
      "video_editing",
      "audio_generation"
    ],
    "serviceType": [
      "video_gen"
    ],
    "description": "Gemini Omni 1.2 Flash，支持原生音频的视频生成与编辑模型"
  }
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/google.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `gemini-omni-1.2-flash` | 未声明 / 65536 | 非计价主数据 | `id`→[google-omni-flash](../SOURCES.md#google-omni-flash)、`spec.maxOutputTokens`→[google-omni-flash](../SOURCES.md#google-omni-flash)、`spec.capabilities`→[google-omni-flash](../SOURCES.md#google-omni-flash) | [google-omni-flash](../SOURCES.md#google-omni-flash) | partial | `cca067ef334a2f0da32ef659192a4721e580f773f24ac9ec91d7248fe17f0667` |

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
