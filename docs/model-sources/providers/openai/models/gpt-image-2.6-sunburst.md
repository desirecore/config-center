# gpt-image-2.6-sunburst：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`gpt-image-2.6-sunburst`。
- 核验日期：2026-11-16；仅下列字段取得官网证明，未执行收费 API 或订阅账号调用。

## 接入合同与核验边界

官方模型页确认文字和图像输入、图像输出；只支持 Images API 的 images/generations 与 images/edits，不支持 Responses 或 Chat Completions。本批仅登记原厂规格，不在未适配媒体协议的 Provider 新增可调用模型。官网未声明 contextWindow/maxOutputTokens，保持 unknown。

原厂 USD/百万 tokens：文字输入5、缓存1.25；图像输入8、缓存2、输出30。复杂度、markup 编辑、SVG/动画等新合同须单独适配验收；价格不进入共享规格，未进行收费调用。

## 字段级来源记录

### compute/model-specs/openai.json

[查看配置](../../../../../compute/model-specs/openai.json) · [接入面说明](../access/model-specs--openai.md)

当前参数详情；路由和默认选择属于本仓策略：

<!-- source-details: {"config":"compute/model-specs/openai.json","id":"gpt-image-2.6-sunburst"} -->
```json
{
  "spec": {
    "capabilities": [
      "image_generation",
      "image_editing",
      "vision"
    ],
    "serviceType": [
      "image_gen"
    ],
    "description": "GPT Image 2.6 Sunburst，支持文字与图像输入的图像生成和编辑模型"
  }
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/openai.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `gpt-image-2.6-sunburst` | 未声明 / 未声明 | 非计价主数据 | `id`→[openai-image26-sunburst](../SOURCES.md#openai-image26-sunburst)、`spec.capabilities`→[openai-image26-sunburst](../SOURCES.md#openai-image26-sunburst)、`spec.capabilities`→[openai-image26-guide](../SOURCES.md#openai-image26-guide) | [openai-image26-sunburst](../SOURCES.md#openai-image26-sunburst)、[openai-image26-guide](../SOURCES.md#openai-image26-guide) | partial | `3f754005eae99da1f564879d0d9e29e26a57ab10b98a4dad0fca52ad24145de9` |

## 待核实项

未列出字段仍为未核实；目录、编译和 Schema 校验不能替代账号调用。不同接入面的价格、限制与协议分别核对；未加入默认自动路由。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "openai",
  "checkedAt": "2026-11-16",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
