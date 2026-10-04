# baidu：2026-10-04来源重新核查

覆盖 20 条接入/规格记录。仅保存可审阅候选，不修改canonical、原来源状态、manifest。未做账号调用。

## 来源导航与读取边界

- [page-baidu-model-list](https://cloud.baidu.com/doc/qianfan/s/rmh4stp0j)：`official-docs` / `readable`。千帆API模型表/旧Coding Plan/新Token Plan/停售公告分别适用。；已读取HTTP正文；模型数字只按该页精确型号和接入记录。
- [page-baidu-code](https://cloud.baidu.com/doc/qianfan/s/imlg0beiu)：`official-docs` / `readable`。千帆API模型表/旧Coding Plan/新Token Plan/停售公告分别适用。；已读取HTTP正文；模型数字只按该页精确型号和接入记录。
- [page-baidu-token](https://cloud.baidu.com/doc/qianfan/s/Dmrabu8b6)：`official-docs` / `readable`。千帆API模型表/旧Coding Plan/新Token Plan/停售公告分别适用。；已读取HTTP正文；模型数字只按该页精确型号和接入记录。
- [page-baidu-stop-new](https://cloud.baidu.com/doc/qianfan/s/Fmrexuejc)：`official-docs` / `readable`。千帆API模型表/旧Coding Plan/新Token Plan/停售公告分别适用。；已读取HTTP正文；模型数字只按该页精确型号和接入记录。

## 每条记录的证据与剩余缺口

### `compute/coding-plans/baidu-coding.json#deepseek-v3.2`

结果：`official-identity-only`。原模型记录：[deepseek-v3.2](../../../model-sources/providers/baidu/models/deepseek-v3.2.md)。

- `modelName`：当前 `"deepseek-v3.2"`；官网候选 `"deepseek-v3.2"`；`matches`。[page-baidu-code](https://cloud.baidu.com/doc/qianfan/s/imlg0beiu)。Coding Plan正文精确Model参数/示例；不能借此宣布TokenPlan套餐参数相同。
- `access.newPurchase`：当前 `null`；官网候选 `{"available": false, "effectiveAt": "2026-07-13T10:00:00+08:00", "product": "Coding Plan"}`；`not-comparable`。[page-baidu-stop-new](https://cloud.baidu.com/doc/qianfan/s/Fmrexuejc)。停售公告只停止新购；既有订阅处置需读迁移与权益，不直接当API模型停服。

剩余字段：`capabilities`。


下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/coding-plans/baidu-coding.json#deepseek-v4-flash`

结果：`official-identity-only`。原模型记录：[deepseek-v4-flash](../../../model-sources/providers/baidu/models/deepseek-v4-flash.md)。

- `modelName`：当前 `"deepseek-v4-flash"`；官网候选 `"deepseek-v4-flash"`；`matches`。[page-baidu-code](https://cloud.baidu.com/doc/qianfan/s/imlg0beiu)。Coding Plan正文精确Model参数/示例；不能借此宣布TokenPlan套餐参数相同。
- `access.newPurchase`：当前 `null`；官网候选 `{"available": false, "effectiveAt": "2026-07-13T10:00:00+08:00", "product": "Coding Plan"}`；`not-comparable`。[page-baidu-stop-new](https://cloud.baidu.com/doc/qianfan/s/Fmrexuejc)。停售公告只停止新购；既有订阅处置需读迁移与权益，不直接当API模型停服。

剩余字段：`capabilities`。


下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/providers/baidu.json#ernie-4.5-turbo-128k`

结果：`official-fields-found`。原模型记录：[ernie-4.5-turbo-128k](../../../model-sources/providers/baidu/models/ernie-4.5-turbo-128k.md)。

- `modelName`：当前 `"ernie-4.5-turbo-128k"`；官网候选 `"ernie-4.5-turbo-128k"`；`matches`。[page-baidu-model-list](https://cloud.baidu.com/doc/qianfan/s/rmh4stp0j)。本轮千帆模型表model参数列精确出现。
- `contextWindow`：当前 `131072`；官网候选 `"128k"`；`not-comparable`。[page-baidu-model-list](https://cloud.baidu.com/doc/qianfan/s/rmh4stp0j)。官网原文K；未猜1000/1024，只列候选。
- `maxInputTokens`：当前 `null`；官网候选 `"123k"`；`not-comparable`。[page-baidu-model-list](https://cloud.baidu.com/doc/qianfan/s/rmh4stp0j)。官网独立输入预算，不混作总窗口。
- `maxOutputTokens`：当前 `12288`；官网候选 `12288`；`matches`。[page-baidu-model-list](https://cloud.baidu.com/doc/qianfan/s/rmh4stp0j)。官方max_tokens区间的明文上界。

剩余字段：`contextWindow`、`defaultTemperature`、`defaultTopP`、`extra.cacheHitPrice`、`inputPrice`、`outputPrice`、`capabilities`。


下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/model-specs/baidu.json#ernie-4.5-turbo-128k`

结果：`official-fields-found`。原模型记录：[ernie-4.5-turbo-128k](../../../model-sources/providers/baidu/models/ernie-4.5-turbo-128k.md)。

- `id`：当前 `"ernie-4.5-turbo-128k"`；官网候选 `"ernie-4.5-turbo-128k"`；`matches`。[page-baidu-model-list](https://cloud.baidu.com/doc/qianfan/s/rmh4stp0j)。本轮千帆模型表model参数列精确出现。
- `spec.contextWindow`：当前 `131072`；官网候选 `"128k"`；`not-comparable`。[page-baidu-model-list](https://cloud.baidu.com/doc/qianfan/s/rmh4stp0j)。官网原文K；未猜1000/1024，只列候选。
- `spec.maxInputTokens`：当前 `null`；官网候选 `"123k"`；`not-comparable`。[page-baidu-model-list](https://cloud.baidu.com/doc/qianfan/s/rmh4stp0j)。官网独立输入预算，不混作总窗口。
- `spec.maxOutputTokens`：当前 `12288`；官网候选 `12288`；`matches`。[page-baidu-model-list](https://cloud.baidu.com/doc/qianfan/s/rmh4stp0j)。官方max_tokens区间的明文上界。

剩余字段：`spec.contextWindow`、`spec.defaultTemperature`、`spec.capabilities`。


下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/providers/baidu.json#ernie-4.5-turbo-20260402`

结果：`official-fields-found`。原模型记录：[ernie-4.5-turbo-20260402](../../../model-sources/providers/baidu/models/ernie-4.5-turbo-20260402.md)。

- `modelName`：当前 `"ernie-4.5-turbo-20260402"`；官网候选 `"ernie-4.5-turbo-20260402"`；`matches`。[page-baidu-model-list](https://cloud.baidu.com/doc/qianfan/s/rmh4stp0j)。本轮千帆模型表model参数列精确出现。
- `contextWindow`：当前 `131072`；官网候选 `"128k"`；`not-comparable`。[page-baidu-model-list](https://cloud.baidu.com/doc/qianfan/s/rmh4stp0j)。官网原文K；未猜1000/1024，只列候选。
- `maxInputTokens`：当前 `null`；官网候选 `"123k"`；`not-comparable`。[page-baidu-model-list](https://cloud.baidu.com/doc/qianfan/s/rmh4stp0j)。官网独立输入预算，不混作总窗口。
- `maxOutputTokens`：当前 `12288`；官网候选 `12288`；`matches`。[page-baidu-model-list](https://cloud.baidu.com/doc/qianfan/s/rmh4stp0j)。官方max_tokens区间的明文上界。

剩余字段：`contextWindow`、`defaultTemperature`、`defaultTopP`、`extra.cacheHitPrice`、`inputPrice`、`outputPrice`、`capabilities`。


下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/coding-plans/baidu-coding.json#ernie-4.5-turbo-20260402`

结果：`official-identity-only`。原模型记录：[ernie-4.5-turbo-20260402](../../../model-sources/providers/baidu/models/ernie-4.5-turbo-20260402.md)。

- `modelName`：当前 `"ernie-4.5-turbo-20260402"`；官网候选 `"ernie-4.5-turbo-20260402"`；`matches`。[page-baidu-code](https://cloud.baidu.com/doc/qianfan/s/imlg0beiu)。Coding Plan正文精确Model参数/示例；不能借此宣布TokenPlan套餐参数相同。
- `access.newPurchase`：当前 `null`；官网候选 `{"available": false, "effectiveAt": "2026-07-13T10:00:00+08:00", "product": "Coding Plan"}`；`not-comparable`。[page-baidu-stop-new](https://cloud.baidu.com/doc/qianfan/s/Fmrexuejc)。停售公告只停止新购；既有订阅处置需读迁移与权益，不直接当API模型停服。

剩余字段：`capabilities`。


下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/model-specs/baidu.json#ernie-4.5-turbo-20260402`

结果：`official-fields-found`。原模型记录：[ernie-4.5-turbo-20260402](../../../model-sources/providers/baidu/models/ernie-4.5-turbo-20260402.md)。

- `id`：当前 `"ernie-4.5-turbo-20260402"`；官网候选 `"ernie-4.5-turbo-20260402"`；`matches`。[page-baidu-model-list](https://cloud.baidu.com/doc/qianfan/s/rmh4stp0j)。本轮千帆模型表model参数列精确出现。
- `spec.contextWindow`：当前 `131072`；官网候选 `"128k"`；`not-comparable`。[page-baidu-model-list](https://cloud.baidu.com/doc/qianfan/s/rmh4stp0j)。官网原文K；未猜1000/1024，只列候选。
- `spec.maxInputTokens`：当前 `null`；官网候选 `"123k"`；`not-comparable`。[page-baidu-model-list](https://cloud.baidu.com/doc/qianfan/s/rmh4stp0j)。官网独立输入预算，不混作总窗口。
- `spec.maxOutputTokens`：当前 `12288`；官网候选 `12288`；`matches`。[page-baidu-model-list](https://cloud.baidu.com/doc/qianfan/s/rmh4stp0j)。官方max_tokens区间的明文上界。

剩余字段：`spec.contextWindow`、`spec.defaultTemperature`、`spec.capabilities`。


下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/providers/baidu.json#ernie-5.0-thinking-latest`

结果：`official-fields-found`。原模型记录：[ernie-5.0-thinking-latest](../../../model-sources/providers/baidu/models/ernie-5.0-thinking-latest.md)。

- `modelName`：当前 `"ernie-5.0-thinking-latest"`；官网候选 `"ernie-5.0-thinking-latest"`；`matches`。[page-baidu-model-list](https://cloud.baidu.com/doc/qianfan/s/rmh4stp0j)。本轮千帆模型表model参数列精确出现。
- `contextWindow`：当前 `128000`；官网候选 `"128k"`；`not-comparable`。[page-baidu-model-list](https://cloud.baidu.com/doc/qianfan/s/rmh4stp0j)。官网原文K；未猜1000/1024，只列候选。
- `maxInputTokens`：当前 `null`；官网候选 `"119k"`；`not-comparable`。[page-baidu-model-list](https://cloud.baidu.com/doc/qianfan/s/rmh4stp0j)。官网独立输入预算，不混作总窗口。
- `maxOutputTokens`：当前 `65536`；官网候选 `65536`；`matches`。[page-baidu-model-list](https://cloud.baidu.com/doc/qianfan/s/rmh4stp0j)。官方max_tokens区间的明文上界。

剩余字段：`contextWindow`、`extra.pricingTiers`、`inputPrice`、`outputPrice`、`capabilities`、`extra.thinkingMaxTokens`。


下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/model-specs/baidu.json#ernie-5.0-thinking-latest`

结果：`official-fields-found`。原模型记录：[ernie-5.0-thinking-latest](../../../model-sources/providers/baidu/models/ernie-5.0-thinking-latest.md)。

- `id`：当前 `"ernie-5.0-thinking-latest"`；官网候选 `"ernie-5.0-thinking-latest"`；`matches`。[page-baidu-model-list](https://cloud.baidu.com/doc/qianfan/s/rmh4stp0j)。本轮千帆模型表model参数列精确出现。
- `spec.contextWindow`：当前 `128000`；官网候选 `"128k"`；`not-comparable`。[page-baidu-model-list](https://cloud.baidu.com/doc/qianfan/s/rmh4stp0j)。官网原文K；未猜1000/1024，只列候选。
- `spec.maxInputTokens`：当前 `null`；官网候选 `"119k"`；`not-comparable`。[page-baidu-model-list](https://cloud.baidu.com/doc/qianfan/s/rmh4stp0j)。官网独立输入预算，不混作总窗口。
- `spec.maxOutputTokens`：当前 `65536`；官网候选 `65536`；`matches`。[page-baidu-model-list](https://cloud.baidu.com/doc/qianfan/s/rmh4stp0j)。官方max_tokens区间的明文上界。

剩余字段：`spec.contextWindow`、`spec.supportsReasoning`、`spec.capabilities`。


下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/providers/baidu.json#ernie-5.0`

结果：`official-fields-found`。原模型记录：[ernie-5.0](../../../model-sources/providers/baidu/models/ernie-5.0.md)。

- `modelName`：当前 `"ernie-5.0"`；官网候选 `"ernie-5.0"`；`matches`。[page-baidu-model-list](https://cloud.baidu.com/doc/qianfan/s/rmh4stp0j)。本轮千帆模型表model参数列精确出现。
- `contextWindow`：当前 `131072`；官网候选 `"128k"`；`not-comparable`。[page-baidu-model-list](https://cloud.baidu.com/doc/qianfan/s/rmh4stp0j)。官网原文K；未猜1000/1024，只列候选。
- `maxInputTokens`：当前 `null`；官网候选 `"119k"`；`not-comparable`。[page-baidu-model-list](https://cloud.baidu.com/doc/qianfan/s/rmh4stp0j)。官网独立输入预算，不混作总窗口。
- `maxOutputTokens`：当前 `65536`；官网候选 `65536`；`matches`。[page-baidu-model-list](https://cloud.baidu.com/doc/qianfan/s/rmh4stp0j)。官方max_tokens区间的明文上界。

剩余字段：`contextWindow`、`defaultTemperature`、`defaultTopP`、`extra.pricingTiers`、`inputPrice`、`outputPrice`、`capabilities`。


下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/model-specs/baidu.json#ernie-5.0`

结果：`official-fields-found`。原模型记录：[ernie-5.0](../../../model-sources/providers/baidu/models/ernie-5.0.md)。

- `id`：当前 `"ernie-5.0"`；官网候选 `"ernie-5.0"`；`matches`。[page-baidu-model-list](https://cloud.baidu.com/doc/qianfan/s/rmh4stp0j)。本轮千帆模型表model参数列精确出现。
- `spec.contextWindow`：当前 `131072`；官网候选 `"128k"`；`not-comparable`。[page-baidu-model-list](https://cloud.baidu.com/doc/qianfan/s/rmh4stp0j)。官网原文K；未猜1000/1024，只列候选。
- `spec.maxInputTokens`：当前 `null`；官网候选 `"119k"`；`not-comparable`。[page-baidu-model-list](https://cloud.baidu.com/doc/qianfan/s/rmh4stp0j)。官网独立输入预算，不混作总窗口。
- `spec.maxOutputTokens`：当前 `65536`；官网候选 `65536`；`matches`。[page-baidu-model-list](https://cloud.baidu.com/doc/qianfan/s/rmh4stp0j)。官方max_tokens区间的明文上界。

剩余字段：`spec.contextWindow`、`spec.defaultTemperature`、`spec.capabilities`。


下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/providers/baidu.json#ernie-x1.1`

结果：`official-fields-found`。原模型记录：[ernie-x1.1](../../../model-sources/providers/baidu/models/ernie-x1.1.md)。

- `modelName`：当前 `"ernie-x1.1"`；官网候选 `"ernie-x1.1"`；`matches`。[page-baidu-model-list](https://cloud.baidu.com/doc/qianfan/s/rmh4stp0j)。本轮千帆模型表model参数列精确出现。
- `contextWindow`：当前 `65536`；官网候选 `"64k"`；`not-comparable`。[page-baidu-model-list](https://cloud.baidu.com/doc/qianfan/s/rmh4stp0j)。官网原文K；未猜1000/1024，只列候选。
- `maxInputTokens`：当前 `null`；官网候选 `"55k"`；`not-comparable`。[page-baidu-model-list](https://cloud.baidu.com/doc/qianfan/s/rmh4stp0j)。官网独立输入预算，不混作总窗口。
- `maxOutputTokens`：当前 `65536`；官网候选 `65536`；`matches`。[page-baidu-model-list](https://cloud.baidu.com/doc/qianfan/s/rmh4stp0j)。官方max_tokens区间的明文上界。
- `access.notice`：当前 `null`；官网候选 `"即将下线"`；`not-comparable`。[page-baidu-model-list](https://cloud.baidu.com/doc/qianfan/s/rmh4stp0j)。模型目录明文注释，缺停服日期则不编造retiredAt。

剩余字段：`contextWindow`、`inputPrice`、`outputPrice`、`capabilities`、`extra.thinkingMaxTokens`。


下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/model-specs/baidu.json#ernie-x1.1`

结果：`official-fields-found`。原模型记录：[ernie-x1.1](../../../model-sources/providers/baidu/models/ernie-x1.1.md)。

- `id`：当前 `"ernie-x1.1"`；官网候选 `"ernie-x1.1"`；`matches`。[page-baidu-model-list](https://cloud.baidu.com/doc/qianfan/s/rmh4stp0j)。本轮千帆模型表model参数列精确出现。
- `spec.contextWindow`：当前 `65536`；官网候选 `"64k"`；`not-comparable`。[page-baidu-model-list](https://cloud.baidu.com/doc/qianfan/s/rmh4stp0j)。官网原文K；未猜1000/1024，只列候选。
- `spec.maxInputTokens`：当前 `null`；官网候选 `"55k"`；`not-comparable`。[page-baidu-model-list](https://cloud.baidu.com/doc/qianfan/s/rmh4stp0j)。官网独立输入预算，不混作总窗口。
- `spec.maxOutputTokens`：当前 `65536`；官网候选 `65536`；`matches`。[page-baidu-model-list](https://cloud.baidu.com/doc/qianfan/s/rmh4stp0j)。官方max_tokens区间的明文上界。
- `access.notice`：当前 `null`；官网候选 `"即将下线"`；`not-comparable`。[page-baidu-model-list](https://cloud.baidu.com/doc/qianfan/s/rmh4stp0j)。模型目录明文注释，缺停服日期则不编造retiredAt。

剩余字段：`spec.contextWindow`、`spec.defaultTemperature`、`spec.supportsReasoning`、`spec.capabilities`。


下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/coding-plans/baidu-coding.json#glm-5.1`

结果：`official-identity-only`。原模型记录：[glm-5.1](../../../model-sources/providers/baidu/models/glm-5.1.md)。

- `modelName`：当前 `"glm-5.1"`；官网候选 `"glm-5.1"`；`matches`。[page-baidu-code](https://cloud.baidu.com/doc/qianfan/s/imlg0beiu)。Coding Plan正文精确Model参数/示例；不能借此宣布TokenPlan套餐参数相同。
- `access.newPurchase`：当前 `null`；官网候选 `{"available": false, "effectiveAt": "2026-07-13T10:00:00+08:00", "product": "Coding Plan"}`；`not-comparable`。[page-baidu-stop-new](https://cloud.baidu.com/doc/qianfan/s/Fmrexuejc)。停售公告只停止新购；既有订阅处置需读迁移与权益，不直接当API模型停服。

剩余字段：`capabilities`。

- 新TokenPlan也列此精确ID，但与本条旧CodingPlan不同合同，不用其目录替代旧套餐证明。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/coding-plans/baidu-coding.json#glm-5`

结果：`official-identity-only`。原模型记录：[glm-5](../../../model-sources/providers/baidu/models/glm-5.md)。

- `modelName`：当前 `"glm-5"`；官网候选 `"glm-5"`；`matches`。[page-baidu-code](https://cloud.baidu.com/doc/qianfan/s/imlg0beiu)。Coding Plan正文精确Model参数/示例；不能借此宣布TokenPlan套餐参数相同。
- `access.newPurchase`：当前 `null`；官网候选 `{"available": false, "effectiveAt": "2026-07-13T10:00:00+08:00", "product": "Coding Plan"}`；`not-comparable`。[page-baidu-stop-new](https://cloud.baidu.com/doc/qianfan/s/Fmrexuejc)。停售公告只停止新购；既有订阅处置需读迁移与权益，不直接当API模型停服。

剩余字段：`capabilities`。


下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/coding-plans/baidu-coding.json#kimi-k2.5`

结果：`official-identity-only`。原模型记录：[kimi-k2.5](../../../model-sources/providers/baidu/models/kimi-k2.5.md)。

- `modelName`：当前 `"kimi-k2.5"`；官网候选 `"kimi-k2.5"`；`matches`。[page-baidu-code](https://cloud.baidu.com/doc/qianfan/s/imlg0beiu)。Coding Plan正文精确Model参数/示例；不能借此宣布TokenPlan套餐参数相同。
- `access.newPurchase`：当前 `null`；官网候选 `{"available": false, "effectiveAt": "2026-07-13T10:00:00+08:00", "product": "Coding Plan"}`；`not-comparable`。[page-baidu-stop-new](https://cloud.baidu.com/doc/qianfan/s/Fmrexuejc)。停售公告只停止新购；既有订阅处置需读迁移与权益，不直接当API模型停服。

剩余字段：`capabilities`。


下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/coding-plans/baidu-coding.json#kimi-k2.6`

结果：`official-access-only`。原模型记录：[kimi-k2.6](../../../model-sources/providers/baidu/models/kimi-k2.6.md)。

- `access.newPurchase`：当前 `null`；官网候选 `{"available": false, "effectiveAt": "2026-07-13T10:00:00+08:00", "product": "Coding Plan"}`；`not-comparable`。[page-baidu-stop-new](https://cloud.baidu.com/doc/qianfan/s/Fmrexuejc)。停售公告只停止新购；既有订阅处置需读迁移与权益，不直接当API模型停服。

剩余字段：`capabilities`。


- official-access-only只说明找到官方接入/产品入口，不计本条精确模型身份或容量已核。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/coding-plans/baidu-coding.json#minimax-m2.5`

结果：`official-identity-only`。原模型记录：[minimax-m2.5](../../../model-sources/providers/baidu/models/minimax-m2.5.md)。

- `modelName`：当前 `"minimax-m2.5"`；官网候选 `"minimax-m2.5"`；`matches`。[page-baidu-code](https://cloud.baidu.com/doc/qianfan/s/imlg0beiu)。Coding Plan正文精确Model参数/示例；不能借此宣布TokenPlan套餐参数相同。
- `access.newPurchase`：当前 `null`；官网候选 `{"available": false, "effectiveAt": "2026-07-13T10:00:00+08:00", "product": "Coding Plan"}`；`not-comparable`。[page-baidu-stop-new](https://cloud.baidu.com/doc/qianfan/s/Fmrexuejc)。停售公告只停止新购；既有订阅处置需读迁移与权益，不直接当API模型停服。

剩余字段：`capabilities`。


下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/coding-plans/baidu-coding.json#minimax-m2.7`

结果：`official-access-only`。原模型记录：[minimax-m2.7](../../../model-sources/providers/baidu/models/minimax-m2.7.md)。

- `access.newPurchase`：当前 `null`；官网候选 `{"available": false, "effectiveAt": "2026-07-13T10:00:00+08:00", "product": "Coding Plan"}`；`not-comparable`。[page-baidu-stop-new](https://cloud.baidu.com/doc/qianfan/s/Fmrexuejc)。停售公告只停止新购；既有订阅处置需读迁移与权益，不直接当API模型停服。

剩余字段：`modelName`、`capabilities`。


- official-access-only只说明找到官方接入/产品入口，不计本条精确模型身份或容量已核。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/coding-plans/baidu-coding.json#qianfan-code-latest`

结果：`official-identity-only`。原模型记录：[qianfan-code-latest](../../../model-sources/providers/baidu/models/qianfan-code-latest.md)。

- `modelName`：当前 `"qianfan-code-latest"`；官网候选 `"qianfan-code-latest"`；`matches`。[page-baidu-code](https://cloud.baidu.com/doc/qianfan/s/imlg0beiu)。Coding Plan正文精确Model参数/示例；不能借此宣布TokenPlan套餐参数相同。
- `access.newPurchase`：当前 `null`；官网候选 `{"available": false, "effectiveAt": "2026-07-13T10:00:00+08:00", "product": "Coding Plan"}`；`not-comparable`。[page-baidu-stop-new](https://cloud.baidu.com/doc/qianfan/s/Fmrexuejc)。停售公告只停止新购；既有订阅处置需读迁移与权益，不直接当API模型停服。

剩余字段：`capabilities`。

- 新TokenPlan也列此精确ID，但与本条旧CodingPlan不同合同，不用其目录替代旧套餐证明。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。
