# xunfei：2026-10-04来源重新核查

覆盖 4 条接入/规格记录。仅保存可审阅候选，不修改canonical、原来源状态、manifest。未做账号调用。

## 来源导航与读取边界

- [page-xunfei-x2](https://www.xfyun.cn/doc/spark/X1http.html)：`official-docs` / `readable`。X2 /x2 和 X1.5 /v2 HTTP合同，正文分别注明max_tokens；已读取HTTP正文；模型数字只按该页精确型号和接入记录。
- [page-xunfei-ultra](https://www.xfyun.cn/doc/spark/HTTP%E8%B0%83%E7%94%A8%E6%96%87%E6%A1%A3.html)：`official-docs` / `readable`。Ultra /v1非思考HTTP合同，不适用于X2。；已读取HTTP正文；模型数字只按该页精确型号和接入记录。

## 每条记录的证据与剩余缺口

### `compute/providers/xunfei.json#4.0Ultra`

结果：`official-identity-only`。原模型记录：[4.0Ultra](../../../model-sources/providers/xunfei/models/4.0ultra.md)。

- `modelName`：当前 `"4.0Ultra"`；官网候选 `"4.0Ultra"`；`matches`。[page-xunfei-ultra](https://www.xfyun.cn/doc/spark/HTTP%E8%B0%83%E7%94%A8%E6%96%87%E6%A1%A3.html)。model枚举精确大小写且明确对应Ultra。
- `maxOutputTokens`：当前 `32768`；官网候选 `"32K"`；`not-comparable`。[page-xunfei-ultra](https://www.xfyun.cn/doc/spark/HTTP%E8%B0%83%E7%94%A8%E6%96%87%E6%A1%A3.html)。Ultra输出官网原文K；不将请求max_tokens默认值冒充硬最大。
- `maxInputTokens`：当前 `null`；官网候选 `"32K"`；`not-comparable`。[page-xunfei-ultra](https://www.xfyun.cn/doc/spark/HTTP%E8%B0%83%E7%94%A8%E6%96%87%E6%A1%A3.html)。输入独立于输出，不证明总窗口32K。

剩余字段：`contextWindow`、`defaultTemperature`、`defaultTopP`、`maxOutputTokens`、`capabilities`、`extra.pricingNote`。

- 采样默认不是用户选用温度；API价格未在这两页取得，保持待核。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/model-specs/xunfei.json#4.0Ultra`

结果：`official-identity-only`。原模型记录：[4.0Ultra](../../../model-sources/providers/xunfei/models/4.0ultra.md)。

- `id`：当前 `"4.0Ultra"`；官网候选 `"4.0Ultra"`；`matches`。[page-xunfei-ultra](https://www.xfyun.cn/doc/spark/HTTP%E8%B0%83%E7%94%A8%E6%96%87%E6%A1%A3.html)。model枚举精确大小写且明确对应Ultra。
- `spec.maxOutputTokens`：当前 `32768`；官网候选 `"32K"`；`not-comparable`。[page-xunfei-ultra](https://www.xfyun.cn/doc/spark/HTTP%E8%B0%83%E7%94%A8%E6%96%87%E6%A1%A3.html)。Ultra输出官网原文K；不将请求max_tokens默认值冒充硬最大。
- `spec.maxInputTokens`：当前 `null`；官网候选 `"32K"`；`not-comparable`。[page-xunfei-ultra](https://www.xfyun.cn/doc/spark/HTTP%E8%B0%83%E7%94%A8%E6%96%87%E6%A1%A3.html)。输入独立于输出，不证明总窗口32K。

剩余字段：`spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.capabilities`。

- 采样默认不是用户选用温度；API价格未在这两页取得，保持待核。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/providers/xunfei-x2.json#spark-x`

结果：`official-fields-found`。原模型记录：[spark-x](../../../model-sources/providers/xunfei/models/spark-x.md)。

- `modelName`：当前 `"spark-x"`；官网候选 `"spark-x"`；`matches`。[page-xunfei-x2](https://www.xfyun.cn/doc/spark/X1http.html)。正文X2与X1.5均使用同一spark-x参数；实际型号必须结合baseUrl。
- `maxOutputTokens`：当前 `131072`；官网候选 `131072`；`matches`。[page-xunfei-x2](https://www.xfyun.cn/doc/spark/X1http.html)。按对应/x2或/v2的max_tokens明文区间和默认值，不混不同协议。
- `defaultTemperature`：当前 `1.2`；官网候选 `1.2`；`matches`。[page-xunfei-x2](https://www.xfyun.cn/doc/spark/X1http.html)。本条按description和端点限定X2，请求表明文温度默认1.2。
- `defaultTopP`：当前 `0.95`；官网候选 `0.95`；`not-comparable`。[page-xunfei-x2](https://www.xfyun.cn/doc/spark/X1http.html)。官方默认TopP；仓库用户建议值与原厂默认需分开标注。

剩余字段：`contextWindow`、`capabilities`、`defaultTopP`、`extra.pricingNote`。

- 采样默认不是用户选用温度；API价格未在这两页取得，保持待核。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/model-specs/xunfei.json#spark-x`

结果：`official-fields-found`。原模型记录：[spark-x](../../../model-sources/providers/xunfei/models/spark-x.md)。

- `id`：当前 `"spark-x"`；官网候选 `"spark-x"`；`not-comparable`。[page-xunfei-x2](https://www.xfyun.cn/doc/spark/X1http.html)。正文X2与X1.5均使用同一spark-x参数；实际型号必须结合baseUrl。
- `spec.maxOutputTokens`：当前 `131072`；官网候选 `131072`；`matches`。[page-xunfei-x2](https://www.xfyun.cn/doc/spark/X1http.html)。本条Spec description明确限定X2 /x2，因此采用X2明文max_tokens131072，不误用同名X1.5的65535。
- `spec.defaultTemperature`：当前 `1.2`；官网候选 `1.2`；`matches`。[page-xunfei-x2](https://www.xfyun.cn/doc/spark/X1http.html)。本条按description和端点限定X2，请求表明文温度默认1.2。
- `spec.defaultTopP`：当前 `null`；官网候选 `0.95`；`not-comparable`。[page-xunfei-x2](https://www.xfyun.cn/doc/spark/X1http.html)。官方默认TopP；仓库用户建议值与原厂默认需分开标注。

剩余字段：`spec.contextWindow`、`spec.supportsReasoning`、`spec.capabilities`。

- 采样默认不是用户选用温度；API价格未在这两页取得，保持待核。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。
