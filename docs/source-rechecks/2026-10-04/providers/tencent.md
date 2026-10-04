# tencent：2026-10-04来源重新核查

覆盖 25 条接入/规格记录。仅保存可审阅候选，不修改canonical、原来源状态、manifest。未做账号调用。

## 来源导航与读取边界

- [page-tencent-model-list](https://cloud.tencent.com/document/product/1823/130051)：`official-docs` / `readable`。分别为TokenHub目录/套餐/旧混元产品/旧API；不能跨合同继承。；已读取HTTP正文；模型数字只按该页精确型号和接入记录。
- [page-tencent-plan](https://cloud.tencent.com/document/product/1823/130060)：`official-docs` / `readable`。分别为TokenHub目录/套餐/旧混元产品/旧API；不能跨合同继承。；已读取HTTP正文；模型数字只按该页精确型号和接入记录。
- [page-tencent-legacy-status](https://cloud.tencent.com/document/product/1729/97765)：`official-docs` / `readable`。分别为TokenHub目录/套餐/旧混元产品/旧API；不能跨合同继承。；已读取HTTP正文；模型数字只按该页精确型号和接入记录。
- [page-tencent-legacy-api](https://cloud.tencent.com/document/api/1729/105701)：`official-docs` / `readable`。分别为TokenHub目录/套餐/旧混元产品/旧API；不能跨合同继承。；已读取HTTP正文；模型数字只按该页精确型号和接入记录。
- [page-tencent-hy3-redirect](https://cloud.tencent.com/announce/detail/2384)：`official-docs` / `readable`。分别为TokenHub目录/套餐/旧混元产品/旧API；不能跨合同继承。；已读取HTTP正文；模型数字只按该页精确型号和接入记录。

## 每条记录的证据与剩余缺口

### `compute/coding-plans/tencent-token.json#glm-5.1`

结果：`official-conflict`。原模型记录：[glm-5.1](../../../model-sources/providers/tencent/models/glm-5.1.md)。

- `modelName`：当前 `"glm-5.1"`；官网候选 `"glm-5.1"`；`matches`。[page-tencent-plan](https://cloud.tencent.com/document/product/1823/130060)。9/30官方个人套餐精确ID，不从API价格页转入套餐收费。
- `baseUrl`：当前 `null`；官网候选 `"https://api.lkeap.cloud.tencent.com/plan/v3"`；`not-comparable`。[page-tencent-plan](https://cloud.tencent.com/document/product/1823/130060)。个人套餐OpenAI兼容端点；需专属套餐账号合同。
- `access.lifecycle`：当前 `null`；官网候选 `{"retiredAt": "2026-10-09", "scope": "Token Plan personal"}`；`differs`。[page-tencent-plan](https://cloud.tencent.com/document/product/1823/130060)。套餐官方行注明10/9下线；没有精确时刻，本次不编造。

剩余字段：`capabilities`。


下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/coding-plans/tencent-token.json#glm-5`

结果：`official-conflict`。原模型记录：[glm-5](../../../model-sources/providers/tencent/models/glm-5.md)。

- `modelName`：当前 `"glm-5"`；官网候选 `"glm-5"`；`matches`。[page-tencent-plan](https://cloud.tencent.com/document/product/1823/130060)。9/30官方个人套餐精确ID，不从API价格页转入套餐收费。
- `baseUrl`：当前 `null`；官网候选 `"https://api.lkeap.cloud.tencent.com/plan/v3"`；`not-comparable`。[page-tencent-plan](https://cloud.tencent.com/document/product/1823/130060)。个人套餐OpenAI兼容端点；需专属套餐账号合同。
- `access.lifecycle`：当前 `null`；官网候选 `{"retiredAt": "2026-10-09", "scope": "Token Plan personal"}`；`differs`。[page-tencent-plan](https://cloud.tencent.com/document/product/1823/130060)。套餐官方行注明10/9下线；没有精确时刻，本次不编造。

剩余字段：`capabilities`。


下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/providers/tencent.json#hunyuan-2.0-instruct-20251111`

结果：`still-unresolved`。原模型记录：[hunyuan-2.0-instruct-20251111](../../../model-sources/providers/tencent/models/hunyuan-2.0-instruct-20251111.md)。


剩余字段：`contextWindow`、`defaultTemperature`、`defaultTopP`、`extra.pricingTiers`、`inputPrice`、`maxOutputTokens`、`modelName`、`outputPrice`、`capabilities`。

- 旧混元1729产品动态6/22说旧生文版本下线并建议迁TokenHub，但未在这段读到本条逐字清单；不以TokenHub新目录替旧API型号补参数。
- 旧原生API文档预计下线12/21且旧控制台9/30下线；控制台/原生API/OpenAI兼容端点是不同范围，不据此封整个hunyuan域。

下一步：优先读旧API到TokenHub的具体型号迁移公告；套餐下架需账号范围确认，历史规格参数勿套用。

### `compute/model-specs/tencent.json#hunyuan-2.0-instruct-20251111`

结果：`still-unresolved`。原模型记录：[hunyuan-2.0-instruct-20251111](../../../model-sources/providers/tencent/models/hunyuan-2.0-instruct-20251111.md)。


剩余字段：`id`、`spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.capabilities`。

- 旧混元1729产品动态6/22说旧生文版本下线并建议迁TokenHub，但未在这段读到本条逐字清单；不以TokenHub新目录替旧API型号补参数。
- 旧原生API文档预计下线12/21且旧控制台9/30下线；控制台/原生API/OpenAI兼容端点是不同范围，不据此封整个hunyuan域。

下一步：优先读旧API到TokenHub的具体型号迁移公告；套餐下架需账号范围确认，历史规格参数勿套用。

### `compute/coding-plans/tencent-token.json#hunyuan-2.0-instruct`

结果：`still-unresolved`。原模型记录：[hunyuan-2.0-instruct](../../../model-sources/providers/tencent/models/hunyuan-2.0-instruct.md)。


剩余字段：`modelName`、`capabilities`。

- 当期套餐正文未再列本精确ID；缺失不等于全域停服。需服务公告或账号目录确认旧别名是否仍路由。

下一步：优先读旧API到TokenHub的具体型号迁移公告；套餐下架需账号范围确认，历史规格参数勿套用。

### `compute/providers/tencent.json#hunyuan-2.0-thinking-20251109`

结果：`still-unresolved`。原模型记录：[hunyuan-2.0-thinking-20251109](../../../model-sources/providers/tencent/models/hunyuan-2.0-thinking-20251109.md)。


剩余字段：`contextWindow`、`defaultTemperature`、`defaultTopP`、`extra.pricingTiers`、`inputPrice`、`maxOutputTokens`、`modelName`、`outputPrice`、`capabilities`。

- 旧混元1729产品动态6/22说旧生文版本下线并建议迁TokenHub，但未在这段读到本条逐字清单；不以TokenHub新目录替旧API型号补参数。
- 旧原生API文档预计下线12/21且旧控制台9/30下线；控制台/原生API/OpenAI兼容端点是不同范围，不据此封整个hunyuan域。

下一步：优先读旧API到TokenHub的具体型号迁移公告；套餐下架需账号范围确认，历史规格参数勿套用。

### `compute/model-specs/tencent.json#hunyuan-2.0-thinking-20251109`

结果：`still-unresolved`。原模型记录：[hunyuan-2.0-thinking-20251109](../../../model-sources/providers/tencent/models/hunyuan-2.0-thinking-20251109.md)。


剩余字段：`id`、`spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.supportsReasoning`、`spec.capabilities`。

- 旧混元1729产品动态6/22说旧生文版本下线并建议迁TokenHub，但未在这段读到本条逐字清单；不以TokenHub新目录替旧API型号补参数。
- 旧原生API文档预计下线12/21且旧控制台9/30下线；控制台/原生API/OpenAI兼容端点是不同范围，不据此封整个hunyuan域。

下一步：优先读旧API到TokenHub的具体型号迁移公告；套餐下架需账号范围确认，历史规格参数勿套用。

### `compute/coding-plans/tencent-token.json#hunyuan-2.0-thinking`

结果：`still-unresolved`。原模型记录：[hunyuan-2.0-thinking](../../../model-sources/providers/tencent/models/hunyuan-2.0-thinking.md)。


剩余字段：`modelName`、`capabilities`。

- 当期套餐正文未再列本精确ID；缺失不等于全域停服。需服务公告或账号目录确认旧别名是否仍路由。

下一步：优先读旧API到TokenHub的具体型号迁移公告；套餐下架需账号范围确认，历史规格参数勿套用。

### `compute/providers/tencent.json#hunyuan-t1-latest`

结果：`still-unresolved`。原模型记录：[hunyuan-t1-latest](../../../model-sources/providers/tencent/models/hunyuan-t1-latest.md)。


剩余字段：`contextWindow`、`defaultTemperature`、`defaultTopP`、`inputPrice`、`maxOutputTokens`、`modelName`、`outputPrice`、`capabilities`。

- 旧混元1729产品动态6/22说旧生文版本下线并建议迁TokenHub，但未在这段读到本条逐字清单；不以TokenHub新目录替旧API型号补参数。
- 旧原生API文档预计下线12/21且旧控制台9/30下线；控制台/原生API/OpenAI兼容端点是不同范围，不据此封整个hunyuan域。

下一步：优先读旧API到TokenHub的具体型号迁移公告；套餐下架需账号范围确认，历史规格参数勿套用。

### `compute/model-specs/tencent.json#hunyuan-t1-latest`

结果：`still-unresolved`。原模型记录：[hunyuan-t1-latest](../../../model-sources/providers/tencent/models/hunyuan-t1-latest.md)。


剩余字段：`id`、`spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.supportsReasoning`、`spec.capabilities`。

- 旧混元1729产品动态6/22说旧生文版本下线并建议迁TokenHub，但未在这段读到本条逐字清单；不以TokenHub新目录替旧API型号补参数。
- 旧原生API文档预计下线12/21且旧控制台9/30下线；控制台/原生API/OpenAI兼容端点是不同范围，不据此封整个hunyuan域。

下一步：优先读旧API到TokenHub的具体型号迁移公告；套餐下架需账号范围确认，历史规格参数勿套用。

### `compute/providers/tencent.json#hunyuan-t1-vision`

结果：`still-unresolved`。原模型记录：[hunyuan-t1-vision](../../../model-sources/providers/tencent/models/hunyuan-t1-vision.md)。


剩余字段：`contextWindow`、`defaultTemperature`、`defaultTopP`、`inputPrice`、`maxOutputTokens`、`modelName`、`outputPrice`、`capabilities`。

- 旧混元1729产品动态6/22说旧生文版本下线并建议迁TokenHub，但未在这段读到本条逐字清单；不以TokenHub新目录替旧API型号补参数。
- 旧原生API文档预计下线12/21且旧控制台9/30下线；控制台/原生API/OpenAI兼容端点是不同范围，不据此封整个hunyuan域。

下一步：优先读旧API到TokenHub的具体型号迁移公告；套餐下架需账号范围确认，历史规格参数勿套用。

### `compute/model-specs/tencent.json#hunyuan-t1-vision`

结果：`still-unresolved`。原模型记录：[hunyuan-t1-vision](../../../model-sources/providers/tencent/models/hunyuan-t1-vision.md)。


剩余字段：`id`、`spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.supportsReasoning`、`spec.capabilities`。

- 旧混元1729产品动态6/22说旧生文版本下线并建议迁TokenHub，但未在这段读到本条逐字清单；不以TokenHub新目录替旧API型号补参数。
- 旧原生API文档预计下线12/21且旧控制台9/30下线；控制台/原生API/OpenAI兼容端点是不同范围，不据此封整个hunyuan域。

下一步：优先读旧API到TokenHub的具体型号迁移公告；套餐下架需账号范围确认，历史规格参数勿套用。

### `compute/coding-plans/tencent-token.json#hunyuan-t1`

结果：`still-unresolved`。原模型记录：[hunyuan-t1](../../../model-sources/providers/tencent/models/hunyuan-t1.md)。


剩余字段：`modelName`、`capabilities`。

- 当期套餐正文未再列本精确ID；缺失不等于全域停服。需服务公告或账号目录确认旧别名是否仍路由。

下一步：优先读旧API到TokenHub的具体型号迁移公告；套餐下架需账号范围确认，历史规格参数勿套用。

### `compute/providers/tencent.json#hunyuan-turbos-latest`

结果：`still-unresolved`。原模型记录：[hunyuan-turbos-latest](../../../model-sources/providers/tencent/models/hunyuan-turbos-latest.md)。


剩余字段：`contextWindow`、`defaultTemperature`、`defaultTopP`、`inputPrice`、`maxOutputTokens`、`modelName`、`outputPrice`、`capabilities`。

- 旧混元1729产品动态6/22说旧生文版本下线并建议迁TokenHub，但未在这段读到本条逐字清单；不以TokenHub新目录替旧API型号补参数。
- 旧原生API文档预计下线12/21且旧控制台9/30下线；控制台/原生API/OpenAI兼容端点是不同范围，不据此封整个hunyuan域。

下一步：优先读旧API到TokenHub的具体型号迁移公告；套餐下架需账号范围确认，历史规格参数勿套用。

### `compute/model-specs/tencent.json#hunyuan-turbos-latest`

结果：`still-unresolved`。原模型记录：[hunyuan-turbos-latest](../../../model-sources/providers/tencent/models/hunyuan-turbos-latest.md)。


剩余字段：`id`、`spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.capabilities`。

- 旧混元1729产品动态6/22说旧生文版本下线并建议迁TokenHub，但未在这段读到本条逐字清单；不以TokenHub新目录替旧API型号补参数。
- 旧原生API文档预计下线12/21且旧控制台9/30下线；控制台/原生API/OpenAI兼容端点是不同范围，不据此封整个hunyuan域。

下一步：优先读旧API到TokenHub的具体型号迁移公告；套餐下架需账号范围确认，历史规格参数勿套用。

### `compute/providers/tencent.json#hunyuan-turbos-vision`

结果：`still-unresolved`。原模型记录：[hunyuan-turbos-vision](../../../model-sources/providers/tencent/models/hunyuan-turbos-vision.md)。


剩余字段：`contextWindow`、`defaultTemperature`、`defaultTopP`、`inputPrice`、`maxOutputTokens`、`modelName`、`outputPrice`、`capabilities`。

- 旧混元1729产品动态6/22说旧生文版本下线并建议迁TokenHub，但未在这段读到本条逐字清单；不以TokenHub新目录替旧API型号补参数。
- 旧原生API文档预计下线12/21且旧控制台9/30下线；控制台/原生API/OpenAI兼容端点是不同范围，不据此封整个hunyuan域。

下一步：优先读旧API到TokenHub的具体型号迁移公告；套餐下架需账号范围确认，历史规格参数勿套用。

### `compute/model-specs/tencent.json#hunyuan-turbos-vision`

结果：`still-unresolved`。原模型记录：[hunyuan-turbos-vision](../../../model-sources/providers/tencent/models/hunyuan-turbos-vision.md)。


剩余字段：`id`、`spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.capabilities`。

- 旧混元1729产品动态6/22说旧生文版本下线并建议迁TokenHub，但未在这段读到本条逐字清单；不以TokenHub新目录替旧API型号补参数。
- 旧原生API文档预计下线12/21且旧控制台9/30下线；控制台/原生API/OpenAI兼容端点是不同范围，不据此封整个hunyuan域。

下一步：优先读旧API到TokenHub的具体型号迁移公告；套餐下架需账号范围确认，历史规格参数勿套用。

### `compute/coding-plans/tencent-token.json#hunyuan-turbos`

结果：`still-unresolved`。原模型记录：[hunyuan-turbos](../../../model-sources/providers/tencent/models/hunyuan-turbos.md)。


剩余字段：`modelName`、`capabilities`。

- 当期套餐正文未再列本精确ID；缺失不等于全域停服。需服务公告或账号目录确认旧别名是否仍路由。

下一步：优先读旧API到TokenHub的具体型号迁移公告；套餐下架需账号范围确认，历史规格参数勿套用。

### `compute/model-specs/tencent.json#hy3-preview`

结果：`official-access-only`。原模型记录：[hy3-preview](../../../model-sources/providers/tencent/models/hy3-preview.md)。

- `access.aliasRouting`：当前 `null`；官网候选 `{"hy3-preview": "hy3", "effectiveAt": "2026-07-24T14:00:00+08:00", "scope": "Hy Token Plan"}`；`not-comparable`。[page-tencent-hy3-redirect](https://cloud.tencent.com/announce/detail/2384)。官方通知仅Hy Token Plan；不能直接据此删除原厂Preview或宣称普通API同样路由。

剩余字段：`id`、`spec.contextWindow`、`spec.defaultTemperature`、`spec.supportsReasoning`、`spec.capabilities`。


- official-access-only只说明找到官方接入/产品入口，不计本条精确模型身份或容量已核。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/model-specs/tencent.json#hy3`

结果：`official-identity-only`。原模型记录：[hy3](../../../model-sources/providers/tencent/models/hy3.md)。

- `id`：当前 `"hy3"`；官网候选 `"hy3"`；`matches`。[page-tencent-model-list](https://cloud.tencent.com/document/product/1823/130051)。9月TokenHub模型目录精确ID；原厂Spec与TokenHub开放范围分别确认。
- `spec.contextWindow`：当前 `262144`；官网候选 `"256k"`；`not-comparable`。[page-tencent-model-list](https://cloud.tencent.com/document/product/1823/130051)。目录原文K/M未本轮换算，托管输入与总窗口独立。
- `spec.maxInputTokens`：当前 `null`；官网候选 `"192k"`；`not-comparable`。[page-tencent-model-list](https://cloud.tencent.com/document/product/1823/130051)。目录原文K/M未本轮换算，托管输入与总窗口独立。
- `spec.maxOutputTokens`：当前 `128000`；官网候选 `"128k"`；`not-comparable`。[page-tencent-model-list](https://cloud.tencent.com/document/product/1823/130051)。目录原文K/M未本轮换算，托管输入与总窗口独立。

剩余字段：`spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.supportsReasoning`、`spec.capabilities`。


下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/model-specs/tencent.json#hy4-preview`

结果：`official-identity-only`。原模型记录：[hy4-preview](../../../model-sources/providers/tencent/models/hy4-preview.md)。

- `id`：当前 `"hy4-preview"`；官网候选 `"hy4-preview"`；`matches`。[page-tencent-model-list](https://cloud.tencent.com/document/product/1823/130051)。9月TokenHub模型目录精确ID；原厂Spec与TokenHub开放范围分别确认。
- `spec.contextWindow`：当前 `1048576`；官网候选 `"1M"`；`not-comparable`。[page-tencent-model-list](https://cloud.tencent.com/document/product/1823/130051)。目录原文K/M未本轮换算，托管输入与总窗口独立。
- `spec.maxInputTokens`：当前 `null`；官网候选 `"960k"`；`not-comparable`。[page-tencent-model-list](https://cloud.tencent.com/document/product/1823/130051)。目录原文K/M未本轮换算，托管输入与总窗口独立。
- `spec.maxOutputTokens`：当前 `null`；官网候选 `"64k"`；`not-comparable`。[page-tencent-model-list](https://cloud.tencent.com/document/product/1823/130051)。目录原文K/M未本轮换算，托管输入与总窗口独立。

剩余字段：`spec.contextWindow`、`spec.capabilities`。


下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/coding-plans/tencent-token.json#kimi-k2.5`

结果：`still-unresolved`。原模型记录：[kimi-k2.5](../../../model-sources/providers/tencent/models/kimi-k2.5.md)。


剩余字段：`modelName`、`capabilities`。

- 当期套餐正文未再列本精确ID；缺失不等于全域停服。需服务公告或账号目录确认旧别名是否仍路由。

下一步：优先读旧API到TokenHub的具体型号迁移公告；套餐下架需账号范围确认，历史规格参数勿套用。

### `compute/coding-plans/tencent-token.json#minimax-m2.5`

结果：`still-unresolved`。原模型记录：[minimax-m2.5](../../../model-sources/providers/tencent/models/minimax-m2.5.md)。


剩余字段：`modelName`、`capabilities`。

- 当期套餐正文未再列本精确ID；缺失不等于全域停服。需服务公告或账号目录确认旧别名是否仍路由。

下一步：优先读旧API到TokenHub的具体型号迁移公告；套餐下架需账号范围确认，历史规格参数勿套用。

### `compute/coding-plans/tencent-token.json#minimax-m2.7`

结果：`official-identity-only`。原模型记录：[minimax-m2.7](../../../model-sources/providers/tencent/models/minimax-m2.7.md)。

- `modelName`：当前 `"minimax-m2.7"`；官网候选 `"minimax-m2.7"`；`matches`。[page-tencent-plan](https://cloud.tencent.com/document/product/1823/130060)。9/30官方个人套餐精确ID，不从API价格页转入套餐收费。
- `baseUrl`：当前 `null`；官网候选 `"https://api.lkeap.cloud.tencent.com/plan/v3"`；`not-comparable`。[page-tencent-plan](https://cloud.tencent.com/document/product/1823/130060)。个人套餐OpenAI兼容端点；需专属套餐账号合同。

剩余字段：`capabilities`。


下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/coding-plans/tencent-token.json#tc-code-latest`

结果：`official-identity-only`。原模型记录：[tc-code-latest](../../../model-sources/providers/tencent/models/tc-code-latest.md)。

- `modelName`：当前 `"tc-code-latest"`；官网候选 `"tc-code-latest"`；`matches`。[page-tencent-plan](https://cloud.tencent.com/document/product/1823/130060)。9/30官方个人套餐精确ID，不从API价格页转入套餐收费。
- `baseUrl`：当前 `null`；官网候选 `"https://api.lkeap.cloud.tencent.com/plan/v3"`；`not-comparable`。[page-tencent-plan](https://cloud.tencent.com/document/product/1823/130060)。个人套餐OpenAI兼容端点；需专属套餐账号合同。

剩余字段：`capabilities`。


下一步：按精确型号和本接入面继续核对；候选证据不自动应用。
