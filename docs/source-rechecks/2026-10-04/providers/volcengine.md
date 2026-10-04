# volcengine：2026-10-04来源重新核查

覆盖 66 条接入/规格记录。仅保存可审阅候选，不修改canonical、原来源状态、manifest。未做账号调用。

## 来源导航与读取边界

- [volc-static-model-list](https://docs.volcengine.com/docs/ark/model-list?lang=zh)：`official-docs` / `blocked`。公共目录静态抓取；web timeout；HTTP只返回启用JavaScript页面壳。
- [volc-rendered-model-list](https://docs.volcengine.com/docs/ark/model-list?lang=zh)：`official-docs` / `readable`。火山方舟后付费API目录，按精确日期wire ID；非套餐；实际Edge渲染DOM表格，更新时间2026-09-28；小写k换算没有在可见正文找到明确说明，保原文不猜整数。
- [volc-rendered-coding](https://docs.volcengine.com/docs/ark/coding-plan-personal-plan-overview?lang=zh)：`official-docs` / `readable`。Coding Plan个人版，北京兼容端点；Edge实际读取，更新时间2026-09-29；套餐Pro和Turbo限制不同于后付费日期型号；按个人编程工具订阅合同。
- [volc-rendered-coding-retirements](https://docs.volcengine.com/docs/ark/coding-plan-personal-model-deprecation?lang=zh)：`official-docs` / `readable`。仅Coding Plan型号退役与新用户限制；Edge读取2026-09-23公告正文与已下线表；不适用于后付费API或整个供应商域名。
- [volc-openviking](https://raw.githubusercontent.com/volcengine/OpenViking/main/docs/zh/guides/02-volcengine-purchase-guide.md)：`official-repository` / `readable`。官方OpenViking部署示例，不是所有原厂规格；官方仓库实际读取，提供日期ID样例与北京区域端点；不从示例声明最大模型容量。
- [seed21-origin](https://seed.bytedance.com/zh/blog/seed2-1-officially-released-advancing-ai-productivity)：`official-docs` / `readable`。Seed2.1原厂产品发布，不是精确日期API合同；原厂正文确认Pro/Turbo产品在火山上线，无精确token/价格数字。

## 每条记录的证据与剩余缺口

### `compute/coding-plans/volcengine-coding.json#ark-code-latest`

结果：`official-identity-only`。原模型记录：[ark-code-latest](../../../model-sources/providers/volcengine/models/ark-code-latest.md)。

- `modelName`：当前 `"ark-code-latest"`；官网候选 `"ark-code-latest"`；`matches`。[volc-rendered-coding](https://docs.volcengine.com/docs/ark/coding-plan-personal-plan-overview?lang=zh)。正文明确允许ark-code-latest在控制台切换底层型号，不能固定到猜测原厂。

剩余字段：`capabilities`。

- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/providers/volcengine.json#deepseek-r1`

结果：`official-access-only`。原模型记录：[deepseek-r1](../../../model-sources/providers/volcengine/models/deepseek-r1.md)。

- `baseUrl`：当前 `null`；官网候选 `"https://ark.cn-beijing.volces.com/api/v3"`；`not-comparable`。[volc-openviking](https://raw.githubusercontent.com/volcengine/OpenViking/main/docs/zh/guides/02-volcengine-purchase-guide.md)。官方仓库北京端点证据，只确认接入入口，不确认本型号可调用。

剩余字段：`contextWindow`、`inputPrice`、`maxOutputTokens`、`modelName`、`outputPrice`、`capabilities`。

- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

- official-access-only只说明找到官方接入/产品入口，不计本条精确模型身份或容量已核。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/model-specs/volcengine.json#deepseek-r1`

结果：`still-unresolved`。原模型记录：[deepseek-r1](../../../model-sources/providers/volcengine/models/deepseek-r1.md)。


剩余字段：`id`、`spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.supportsReasoning`、`spec.capabilities`。

- 渲染官网目录已读，但本条精确ID、旧别名或其他产品协议没有逐字支持；没有因文档可读就宣布本型号已核。
- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/providers/volcengine.json#deepseek-v3.2`

结果：`official-access-only`。原模型记录：[deepseek-v3.2](../../../model-sources/providers/volcengine/models/deepseek-v3.2.md)。

- `baseUrl`：当前 `null`；官网候选 `"https://ark.cn-beijing.volces.com/api/v3"`；`not-comparable`。[volc-openviking](https://raw.githubusercontent.com/volcengine/OpenViking/main/docs/zh/guides/02-volcengine-purchase-guide.md)。官方仓库北京端点证据，只确认接入入口，不确认本型号可调用。

剩余字段：`contextWindow`、`defaultTemperature`、`defaultTopP`、`inputPrice`、`maxOutputTokens`、`modelName`、`outputPrice`、`capabilities`。

- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

- official-access-only只说明找到官方接入/产品入口，不计本条精确模型身份或容量已核。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/coding-plans/volcengine-coding.json#deepseek-v3.2`

结果：`official-conflict`。原模型记录：[deepseek-v3.2](../../../model-sources/providers/volcengine/models/deepseek-v3.2.md)。

- `access.lifecycle`：当前 `null`；官网候选 `{"status": "retired", "dateAsPrinted": "06.30", "scope": "Coding Plan"}`；`differs`。[volc-rendered-coding-retirements](https://docs.volcengine.com/docs/ark/coding-plan-personal-model-deprecation?lang=zh)。已下线表逐字列本ID及月日；不外推原厂/后付费API退休。

剩余字段：`modelName`、`capabilities`。

- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

下一步：核实年份/确切时刻并按Coding Plan限定停用或迁移；保留API/原厂规格独立审计。

### `compute/model-specs/volcengine.json#deepseek-v3.2`

结果：`still-unresolved`。原模型记录：[deepseek-v3.2](../../../model-sources/providers/volcengine/models/deepseek-v3.2.md)。


剩余字段：`id`、`spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.capabilities`。

- 渲染官网目录已读，但本条精确ID、旧别名或其他产品协议没有逐字支持；没有因文档可读就宣布本型号已核。
- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/providers/volcengine.json#doubao-embedding-large`

结果：`official-access-only`。原模型记录：[doubao-embedding-large](../../../model-sources/providers/volcengine/models/doubao-embedding-large.md)。

- `baseUrl`：当前 `null`；官网候选 `"https://ark.cn-beijing.volces.com/api/v3"`；`not-comparable`。[volc-openviking](https://raw.githubusercontent.com/volcengine/OpenViking/main/docs/zh/guides/02-volcengine-purchase-guide.md)。官方仓库北京端点证据，只确认接入入口，不确认本型号可调用。

剩余字段：`contextWindow`、`inputPrice`、`modelName`、`capabilities`。

- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

- official-access-only只说明找到官方接入/产品入口，不计本条精确模型身份或容量已核。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/model-specs/volcengine.json#doubao-embedding-large`

结果：`still-unresolved`。原模型记录：[doubao-embedding-large](../../../model-sources/providers/volcengine/models/doubao-embedding-large.md)。


剩余字段：`id`、`spec.contextWindow`、`spec.capabilities`。

- 渲染官网目录已读，但本条精确ID、旧别名或其他产品协议没有逐字支持；没有因文档可读就宣布本型号已核。
- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/providers/volcengine.json#doubao-embedding`

结果：`official-access-only`。原模型记录：[doubao-embedding](../../../model-sources/providers/volcengine/models/doubao-embedding.md)。

- `baseUrl`：当前 `null`；官网候选 `"https://ark.cn-beijing.volces.com/api/v3"`；`not-comparable`。[volc-openviking](https://raw.githubusercontent.com/volcengine/OpenViking/main/docs/zh/guides/02-volcengine-purchase-guide.md)。官方仓库北京端点证据，只确认接入入口，不确认本型号可调用。

剩余字段：`contextWindow`、`inputPrice`、`modelName`、`capabilities`。

- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

- official-access-only只说明找到官方接入/产品入口，不计本条精确模型身份或容量已核。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/model-specs/volcengine.json#doubao-embedding`

结果：`still-unresolved`。原模型记录：[doubao-embedding](../../../model-sources/providers/volcengine/models/doubao-embedding.md)。


剩余字段：`id`、`spec.contextWindow`、`spec.capabilities`。

- 渲染官网目录已读，但本条精确ID、旧别名或其他产品协议没有逐字支持；没有因文档可读就宣布本型号已核。
- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/providers/volcengine.json#doubao-seed-1.6-flash`

结果：`official-access-only`。原模型记录：[doubao-seed-1.6-flash](../../../model-sources/providers/volcengine/models/doubao-seed-1.6-flash.md)。

- `baseUrl`：当前 `null`；官网候选 `"https://ark.cn-beijing.volces.com/api/v3"`；`not-comparable`。[volc-openviking](https://raw.githubusercontent.com/volcengine/OpenViking/main/docs/zh/guides/02-volcengine-purchase-guide.md)。官方仓库北京端点证据，只确认接入入口，不确认本型号可调用。

剩余字段：`contextWindow`、`defaultTemperature`、`defaultTopP`、`inputPrice`、`maxOutputTokens`、`modelName`、`outputPrice`、`capabilities`、`extra.deprecated`、`extra.deprecationNotice`、`extra.replacedBy`。

- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

- official-access-only只说明找到官方接入/产品入口，不计本条精确模型身份或容量已核。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/model-specs/volcengine.json#doubao-seed-1.6-flash`

结果：`still-unresolved`。原模型记录：[doubao-seed-1.6-flash](../../../model-sources/providers/volcengine/models/doubao-seed-1.6-flash.md)。


剩余字段：`id`、`spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.capabilities`。

- 渲染官网目录已读，但本条精确ID、旧别名或其他产品协议没有逐字支持；没有因文档可读就宣布本型号已核。
- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/providers/volcengine.json#doubao-seed-1.6-lite`

结果：`official-access-only`。原模型记录：[doubao-seed-1.6-lite](../../../model-sources/providers/volcengine/models/doubao-seed-1.6-lite.md)。

- `baseUrl`：当前 `null`；官网候选 `"https://ark.cn-beijing.volces.com/api/v3"`；`not-comparable`。[volc-openviking](https://raw.githubusercontent.com/volcengine/OpenViking/main/docs/zh/guides/02-volcengine-purchase-guide.md)。官方仓库北京端点证据，只确认接入入口，不确认本型号可调用。

剩余字段：`contextWindow`、`defaultTemperature`、`defaultTopP`、`extra.pricingTiers`、`inputPrice`、`maxOutputTokens`、`modelName`、`outputPrice`、`capabilities`、`extra.deprecated`、`extra.deprecationNotice`、`extra.replacedBy`。

- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

- official-access-only只说明找到官方接入/产品入口，不计本条精确模型身份或容量已核。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/model-specs/volcengine.json#doubao-seed-1.6-lite`

结果：`still-unresolved`。原模型记录：[doubao-seed-1.6-lite](../../../model-sources/providers/volcengine/models/doubao-seed-1.6-lite.md)。


剩余字段：`id`、`spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.capabilities`。

- 渲染官网目录已读，但本条精确ID、旧别名或其他产品协议没有逐字支持；没有因文档可读就宣布本型号已核。
- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/providers/volcengine.json#doubao-seed-1.6-thinking`

结果：`official-access-only`。原模型记录：[doubao-seed-1.6-thinking](../../../model-sources/providers/volcengine/models/doubao-seed-1.6-thinking.md)。

- `baseUrl`：当前 `null`；官网候选 `"https://ark.cn-beijing.volces.com/api/v3"`；`not-comparable`。[volc-openviking](https://raw.githubusercontent.com/volcengine/OpenViking/main/docs/zh/guides/02-volcengine-purchase-guide.md)。官方仓库北京端点证据，只确认接入入口，不确认本型号可调用。

剩余字段：`contextWindow`、`defaultTemperature`、`defaultTopP`、`inputPrice`、`maxOutputTokens`、`modelName`、`outputPrice`、`capabilities`、`extra.deprecated`、`extra.deprecationNotice`、`extra.replacedBy`。

- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

- official-access-only只说明找到官方接入/产品入口，不计本条精确模型身份或容量已核。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/model-specs/volcengine.json#doubao-seed-1.6-thinking`

结果：`still-unresolved`。原模型记录：[doubao-seed-1.6-thinking](../../../model-sources/providers/volcengine/models/doubao-seed-1.6-thinking.md)。


剩余字段：`id`、`spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.supportsReasoning`、`spec.capabilities`。

- 渲染官网目录已读，但本条精确ID、旧别名或其他产品协议没有逐字支持；没有因文档可读就宣布本型号已核。
- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/providers/volcengine.json#doubao-seed-1.6-vision`

结果：`official-access-only`。原模型记录：[doubao-seed-1.6-vision](../../../model-sources/providers/volcengine/models/doubao-seed-1.6-vision.md)。

- `baseUrl`：当前 `null`；官网候选 `"https://ark.cn-beijing.volces.com/api/v3"`；`not-comparable`。[volc-openviking](https://raw.githubusercontent.com/volcengine/OpenViking/main/docs/zh/guides/02-volcengine-purchase-guide.md)。官方仓库北京端点证据，只确认接入入口，不确认本型号可调用。

剩余字段：`contextWindow`、`defaultTemperature`、`defaultTopP`、`inputPrice`、`maxOutputTokens`、`modelName`、`outputPrice`、`capabilities`、`extra.deprecated`、`extra.deprecationNotice`、`extra.replacedBy`。

- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

- official-access-only只说明找到官方接入/产品入口，不计本条精确模型身份或容量已核。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/model-specs/volcengine.json#doubao-seed-1.6-vision`

结果：`still-unresolved`。原模型记录：[doubao-seed-1.6-vision](../../../model-sources/providers/volcengine/models/doubao-seed-1.6-vision.md)。


剩余字段：`id`、`spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.capabilities`。

- 渲染官网目录已读，但本条精确ID、旧别名或其他产品协议没有逐字支持；没有因文档可读就宣布本型号已核。
- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/providers/volcengine.json#doubao-seed-1.6`

结果：`official-access-only`。原模型记录：[doubao-seed-1.6](../../../model-sources/providers/volcengine/models/doubao-seed-1.6.md)。

- `baseUrl`：当前 `null`；官网候选 `"https://ark.cn-beijing.volces.com/api/v3"`；`not-comparable`。[volc-openviking](https://raw.githubusercontent.com/volcengine/OpenViking/main/docs/zh/guides/02-volcengine-purchase-guide.md)。官方仓库北京端点证据，只确认接入入口，不确认本型号可调用。

剩余字段：`contextWindow`、`defaultTemperature`、`defaultTopP`、`extra.pricingTiers`、`inputPrice`、`maxOutputTokens`、`modelName`、`outputPrice`、`capabilities`、`extra.deprecated`、`extra.deprecationNotice`、`extra.replacedBy`。

- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

- official-access-only只说明找到官方接入/产品入口，不计本条精确模型身份或容量已核。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/model-specs/volcengine.json#doubao-seed-1.6`

结果：`still-unresolved`。原模型记录：[doubao-seed-1.6](../../../model-sources/providers/volcengine/models/doubao-seed-1.6.md)。


剩余字段：`id`、`spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.capabilities`。

- 渲染官网目录已读，但本条精确ID、旧别名或其他产品协议没有逐字支持；没有因文档可读就宣布本型号已核。
- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/providers/volcengine.json#doubao-seed-1.8`

结果：`official-access-only`。原模型记录：[doubao-seed-1.8](../../../model-sources/providers/volcengine/models/doubao-seed-1.8.md)。

- `baseUrl`：当前 `null`；官网候选 `"https://ark.cn-beijing.volces.com/api/v3"`；`not-comparable`。[volc-openviking](https://raw.githubusercontent.com/volcengine/OpenViking/main/docs/zh/guides/02-volcengine-purchase-guide.md)。官方仓库北京端点证据，只确认接入入口，不确认本型号可调用。

剩余字段：`contextWindow`、`defaultTemperature`、`defaultTopP`、`extra.pricingTiers`、`inputPrice`、`maxOutputTokens`、`modelName`、`outputPrice`、`capabilities`、`extra.deprecated`、`extra.deprecationNotice`、`extra.replacedBy`。

- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

- official-access-only只说明找到官方接入/产品入口，不计本条精确模型身份或容量已核。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/model-specs/volcengine.json#doubao-seed-1.8`

结果：`still-unresolved`。原模型记录：[doubao-seed-1.8](../../../model-sources/providers/volcengine/models/doubao-seed-1.8.md)。


剩余字段：`id`、`spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.capabilities`。

- 渲染官网目录已读，但本条精确ID、旧别名或其他产品协议没有逐字支持；没有因文档可读就宣布本型号已核。
- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/providers/volcengine.json#doubao-seed-2.0-code`

结果：`official-access-only`。原模型记录：[doubao-seed-2.0-code](../../../model-sources/providers/volcengine/models/doubao-seed-2.0-code.md)。

- `baseUrl`：当前 `null`；官网候选 `"https://ark.cn-beijing.volces.com/api/v3"`；`not-comparable`。[volc-openviking](https://raw.githubusercontent.com/volcengine/OpenViking/main/docs/zh/guides/02-volcengine-purchase-guide.md)。官方仓库北京端点证据，只确认接入入口，不确认本型号可调用。

剩余字段：`contextWindow`、`defaultTemperature`、`defaultTopP`、`extra.pricingTiers`、`inputPrice`、`maxOutputTokens`、`modelName`、`outputPrice`、`capabilities`。

- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

- official-access-only只说明找到官方接入/产品入口，不计本条精确模型身份或容量已核。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/coding-plans/volcengine-coding.json#doubao-seed-2.0-code`

结果：`official-conflict`。原模型记录：[doubao-seed-2.0-code](../../../model-sources/providers/volcengine/models/doubao-seed-2.0-code.md)。

- `access.lifecycle`：当前 `null`；官网候选 `{"status": "retired", "dateAsPrinted": "08.08", "scope": "Coding Plan"}`；`differs`。[volc-rendered-coding-retirements](https://docs.volcengine.com/docs/ark/coding-plan-personal-model-deprecation?lang=zh)。已下线表逐字列本ID及月日；不外推原厂/后付费API退休。

剩余字段：`modelName`、`capabilities`。

- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

下一步：核实年份/确切时刻并按Coding Plan限定停用或迁移；保留API/原厂规格独立审计。

### `compute/model-specs/volcengine.json#doubao-seed-2.0-code`

结果：`still-unresolved`。原模型记录：[doubao-seed-2.0-code](../../../model-sources/providers/volcengine/models/doubao-seed-2.0-code.md)。


剩余字段：`id`、`spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.capabilities`。

- 渲染官网目录已读，但本条精确ID、旧别名或其他产品协议没有逐字支持；没有因文档可读就宣布本型号已核。
- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/providers/volcengine.json#doubao-seed-2.0-lite`

结果：`official-access-only`。原模型记录：[doubao-seed-2.0-lite](../../../model-sources/providers/volcengine/models/doubao-seed-2.0-lite.md)。

- `baseUrl`：当前 `null`；官网候选 `"https://ark.cn-beijing.volces.com/api/v3"`；`not-comparable`。[volc-openviking](https://raw.githubusercontent.com/volcengine/OpenViking/main/docs/zh/guides/02-volcengine-purchase-guide.md)。官方仓库北京端点证据，只确认接入入口，不确认本型号可调用。

剩余字段：`contextWindow`、`defaultTemperature`、`defaultTopP`、`extra.pricingTiers`、`inputPrice`、`maxOutputTokens`、`modelName`、`outputPrice`、`capabilities`。

- 官网是带日期和连字符ID；本条点分无日期调用名未取得别名证明。官方新日期型号的参数不得直接套用。
- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

- official-access-only只说明找到官方接入/产品入口，不计本条精确模型身份或容量已核。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/coding-plans/volcengine-coding.json#doubao-seed-2.0-lite`

结果：`official-conflict`。原模型记录：[doubao-seed-2.0-lite](../../../model-sources/providers/volcengine/models/doubao-seed-2.0-lite.md)。

- `access.lifecycle`：当前 `null`；官网候选 `{"newUsersBlockedAt": "2026-09-23T10:00:00+08:00", "retiredAt": "2026-10-09T14:00:00+08:00"}`；`differs`。[volc-rendered-coding-retirements](https://docs.volcengine.com/docs/ark/coding-plan-personal-model-deprecation?lang=zh)。两条型号共享公告日期；当前10/4尚未全量停服，但新用户已有门控。

剩余字段：`modelName`、`capabilities`。

- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。
- 10月4日不等于公告10月9日；未来停服记录不用于宣称当前对所有旧用户已停服。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/model-specs/volcengine.json#doubao-seed-2.0-lite`

结果：`still-unresolved`。原模型记录：[doubao-seed-2.0-lite](../../../model-sources/providers/volcengine/models/doubao-seed-2.0-lite.md)。


剩余字段：`id`、`spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.capabilities`。

- 官网是带日期和连字符ID；本条点分无日期调用名未取得别名证明。官方新日期型号的参数不得直接套用。
- 渲染官网目录已读，但本条精确ID、旧别名或其他产品协议没有逐字支持；没有因文档可读就宣布本型号已核。
- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/providers/volcengine.json#doubao-seed-2.0-mini`

结果：`official-access-only`。原模型记录：[doubao-seed-2.0-mini](../../../model-sources/providers/volcengine/models/doubao-seed-2.0-mini.md)。

- `baseUrl`：当前 `null`；官网候选 `"https://ark.cn-beijing.volces.com/api/v3"`；`not-comparable`。[volc-openviking](https://raw.githubusercontent.com/volcengine/OpenViking/main/docs/zh/guides/02-volcengine-purchase-guide.md)。官方仓库北京端点证据，只确认接入入口，不确认本型号可调用。

剩余字段：`contextWindow`、`defaultTemperature`、`defaultTopP`、`extra.pricingTiers`、`inputPrice`、`maxOutputTokens`、`modelName`、`outputPrice`、`capabilities`。

- 官网是带日期和连字符ID；本条点分无日期调用名未取得别名证明。官方新日期型号的参数不得直接套用。
- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

- official-access-only只说明找到官方接入/产品入口，不计本条精确模型身份或容量已核。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/model-specs/volcengine.json#doubao-seed-2.0-mini`

结果：`still-unresolved`。原模型记录：[doubao-seed-2.0-mini](../../../model-sources/providers/volcengine/models/doubao-seed-2.0-mini.md)。


剩余字段：`id`、`spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.capabilities`。

- 官网是带日期和连字符ID；本条点分无日期调用名未取得别名证明。官方新日期型号的参数不得直接套用。
- 渲染官网目录已读，但本条精确ID、旧别名或其他产品协议没有逐字支持；没有因文档可读就宣布本型号已核。
- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/providers/volcengine.json#doubao-seed-2.0-pro`

结果：`official-access-only`。原模型记录：[doubao-seed-2.0-pro](../../../model-sources/providers/volcengine/models/doubao-seed-2.0-pro.md)。

- `baseUrl`：当前 `null`；官网候选 `"https://ark.cn-beijing.volces.com/api/v3"`；`not-comparable`。[volc-openviking](https://raw.githubusercontent.com/volcengine/OpenViking/main/docs/zh/guides/02-volcengine-purchase-guide.md)。官方仓库北京端点证据，只确认接入入口，不确认本型号可调用。

剩余字段：`contextWindow`、`defaultTemperature`、`defaultTopP`、`extra.pricingTiers`、`inputPrice`、`maxOutputTokens`、`modelName`、`outputPrice`、`capabilities`。

- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

- official-access-only只说明找到官方接入/产品入口，不计本条精确模型身份或容量已核。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/coding-plans/volcengine-coding.json#doubao-seed-2.0-pro`

结果：`official-conflict`。原模型记录：[doubao-seed-2.0-pro](../../../model-sources/providers/volcengine/models/doubao-seed-2.0-pro.md)。

- `access.lifecycle`：当前 `null`；官网候选 `{"status": "retired", "dateAsPrinted": "08.08", "scope": "Coding Plan"}`；`differs`。[volc-rendered-coding-retirements](https://docs.volcengine.com/docs/ark/coding-plan-personal-model-deprecation?lang=zh)。已下线表逐字列本ID及月日；不外推原厂/后付费API退休。

剩余字段：`modelName`、`capabilities`。

- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

下一步：核实年份/确切时刻并按Coding Plan限定停用或迁移；保留API/原厂规格独立审计。

### `compute/model-specs/volcengine.json#doubao-seed-2.0-pro`

结果：`still-unresolved`。原模型记录：[doubao-seed-2.0-pro](../../../model-sources/providers/volcengine/models/doubao-seed-2.0-pro.md)。


剩余字段：`id`、`spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.capabilities`。

- 渲染官网目录已读，但本条精确ID、旧别名或其他产品协议没有逐字支持；没有因文档可读就宣布本型号已核。
- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/providers/volcengine.json#doubao-seed-2.1-pro`

结果：`official-identity-only`。原模型记录：[doubao-seed-2.1-pro](../../../model-sources/providers/volcengine/models/doubao-seed-2.1-pro.md)。

- `apiModelId`：当前 `"doubao-seed-2-1-pro-260628"`；官网候选 `"doubao-seed-2-1-pro-260628"`；`matches`。[volc-rendered-model-list](https://docs.volcengine.com/docs/ark/model-list?lang=zh)。官网当前目录逐字出现实际wire ID；显示别名不代替实参。
- `contextWindow`：当前 `256000`；官网候选 `"256k"`；`not-comparable`。[volc-rendered-model-list](https://docs.volcengine.com/docs/ark/model-list?lang=zh)。官方原文token数量；k是否1000/1024本次未确认，保候选原值不机械换算。
- `maxInputTokens`：当前 `null`；官网候选 `"256k"`；`not-comparable`。[volc-rendered-model-list](https://docs.volcengine.com/docs/ark/model-list?lang=zh)。官方原文token数量；k是否1000/1024本次未确认，保候选原值不机械换算。
- `maxOutputTokens`：当前 `262144`；官网候选 `"256k"`；`not-comparable`。[volc-rendered-model-list](https://docs.volcengine.com/docs/ark/model-list?lang=zh)。官方原文token数量；k是否1000/1024本次未确认，保候选原值不机械换算。
- `baseUrl`：当前 `null`；官网候选 `"https://ark.cn-beijing.volces.com/api/v3"`；`not-comparable`。[volc-openviking](https://raw.githubusercontent.com/volcengine/OpenViking/main/docs/zh/guides/02-volcengine-purchase-guide.md)。官方仓库北京端点证据，只确认接入入口，不确认本型号可调用。

剩余字段：`contextWindow`、`defaultTemperature`、`defaultTopP`、`extra.cacheHitPrice`、`extra.cacheStoragePricePerMillionTokenHour`、`inputPrice`、`maxOutputTokens`、`modelName`、`outputPrice`、`capabilities`、`extra.supportsResponsesApi`、`extra.supportsChatApi`。

- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/coding-plans/volcengine-coding.json#doubao-seed-2.1-pro`

结果：`official-conflict`。原模型记录：[doubao-seed-2.1-pro](../../../model-sources/providers/volcengine/models/doubao-seed-2.1-pro.md)。

- `contextWindow`：当前 `256000`；官网候选 `"1024k"`；`differs`。[volc-rendered-coding](https://docs.volcengine.com/docs/ark/coding-plan-personal-plan-overview?lang=zh)。套餐同名Pro升级后的官方原文；当前256000不匹配该数量级，不借API260628参数替代。
- `maxOutputTokens`：当前 `262144`；官网候选 `"256k"`；`not-comparable`。[volc-rendered-coding](https://docs.volcengine.com/docs/ark/coding-plan-personal-plan-overview?lang=zh)。k换算未确认，保留官网写法。

剩余字段：`maxOutputTokens`、`modelName`、`capabilities`。

- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/model-specs/volcengine.json#doubao-seed-2.1-pro`

结果：`still-unresolved`。原模型记录：[doubao-seed-2.1-pro](../../../model-sources/providers/volcengine/models/doubao-seed-2.1-pro.md)。


剩余字段：`id`、`spec.contextWindow`、`spec.maxOutputTokens`、`spec.supportsReasoning`、`spec.capabilities`。

- 渲染官网目录已读，但本条精确ID、旧别名或其他产品协议没有逐字支持；没有因文档可读就宣布本型号已核。
- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/providers/volcengine.json#doubao-seed-2.1-turbo`

结果：`official-identity-only`。原模型记录：[doubao-seed-2.1-turbo](../../../model-sources/providers/volcengine/models/doubao-seed-2.1-turbo.md)。

- `apiModelId`：当前 `"doubao-seed-2-1-turbo-260628"`；官网候选 `"doubao-seed-2-1-turbo-260628"`；`matches`。[volc-rendered-model-list](https://docs.volcengine.com/docs/ark/model-list?lang=zh)。官网当前目录逐字出现实际wire ID；显示别名不代替实参。
- `contextWindow`：当前 `256000`；官网候选 `"256k"`；`not-comparable`。[volc-rendered-model-list](https://docs.volcengine.com/docs/ark/model-list?lang=zh)。官方原文token数量；k是否1000/1024本次未确认，保候选原值不机械换算。
- `maxInputTokens`：当前 `null`；官网候选 `"256k"`；`not-comparable`。[volc-rendered-model-list](https://docs.volcengine.com/docs/ark/model-list?lang=zh)。官方原文token数量；k是否1000/1024本次未确认，保候选原值不机械换算。
- `maxOutputTokens`：当前 `262144`；官网候选 `"256k"`；`not-comparable`。[volc-rendered-model-list](https://docs.volcengine.com/docs/ark/model-list?lang=zh)。官方原文token数量；k是否1000/1024本次未确认，保候选原值不机械换算。
- `baseUrl`：当前 `null`；官网候选 `"https://ark.cn-beijing.volces.com/api/v3"`；`not-comparable`。[volc-openviking](https://raw.githubusercontent.com/volcengine/OpenViking/main/docs/zh/guides/02-volcengine-purchase-guide.md)。官方仓库北京端点证据，只确认接入入口，不确认本型号可调用。

剩余字段：`contextWindow`、`defaultTemperature`、`defaultTopP`、`extra.cacheHitPrice`、`extra.cacheStoragePricePerMillionTokenHour`、`inputPrice`、`maxOutputTokens`、`modelName`、`outputPrice`、`capabilities`、`extra.supportsResponsesApi`、`extra.supportsChatApi`。

- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/coding-plans/volcengine-coding.json#doubao-seed-2.1-turbo`

结果：`official-conflict`。原模型记录：[doubao-seed-2.1-turbo](../../../model-sources/providers/volcengine/models/doubao-seed-2.1-turbo.md)。

- `access.lifecycle`：当前 `null`；官网候选 `{"newUsersBlockedAt": "2026-09-23T10:00:00+08:00", "retiredAt": "2026-10-09T14:00:00+08:00"}`；`differs`。[volc-rendered-coding-retirements](https://docs.volcengine.com/docs/ark/coding-plan-personal-model-deprecation?lang=zh)。两条型号共享公告日期；当前10/4尚未全量停服，但新用户已有门控。
- `maxOutputTokens`：当前 `262144`；官网候选 `"64k"`；`not-comparable`。[volc-rendered-coding](https://docs.volcengine.com/docs/ark/coding-plan-personal-plan-overview?lang=zh)。套餐Turbo输出64k，独立于后付费Turbo日期ID的256k。

剩余字段：`contextWindow`、`maxOutputTokens`、`modelName`、`capabilities`。

- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。
- 10月4日不等于公告10月9日；未来停服记录不用于宣称当前对所有旧用户已停服。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/model-specs/volcengine.json#doubao-seed-2.1-turbo`

结果：`still-unresolved`。原模型记录：[doubao-seed-2.1-turbo](../../../model-sources/providers/volcengine/models/doubao-seed-2.1-turbo.md)。


剩余字段：`id`、`spec.contextWindow`、`spec.maxOutputTokens`、`spec.supportsReasoning`、`spec.capabilities`。

- 渲染官网目录已读，但本条精确ID、旧别名或其他产品协议没有逐字支持；没有因文档可读就宣布本型号已核。
- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/providers/volcengine.json#doubao-seed-code`

结果：`official-access-only`。原模型记录：[doubao-seed-code](../../../model-sources/providers/volcengine/models/doubao-seed-code.md)。

- `baseUrl`：当前 `null`；官网候选 `"https://ark.cn-beijing.volces.com/api/v3"`；`not-comparable`。[volc-openviking](https://raw.githubusercontent.com/volcengine/OpenViking/main/docs/zh/guides/02-volcengine-purchase-guide.md)。官方仓库北京端点证据，只确认接入入口，不确认本型号可调用。

剩余字段：`contextWindow`、`defaultTemperature`、`defaultTopP`、`inputPrice`、`maxOutputTokens`、`modelName`、`outputPrice`、`capabilities`。

- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

- official-access-only只说明找到官方接入/产品入口，不计本条精确模型身份或容量已核。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/coding-plans/volcengine-coding.json#doubao-seed-code`

结果：`official-conflict`。原模型记录：[doubao-seed-code](../../../model-sources/providers/volcengine/models/doubao-seed-code.md)。

- `access.lifecycle`：当前 `null`；官网候选 `{"status": "retired", "dateAsPrinted": "08.05", "scope": "Coding Plan"}`；`differs`。[volc-rendered-coding-retirements](https://docs.volcengine.com/docs/ark/coding-plan-personal-model-deprecation?lang=zh)。已下线表逐字列本ID及月日；不外推原厂/后付费API退休。

剩余字段：`modelName`、`capabilities`。

- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

下一步：核实年份/确切时刻并按Coding Plan限定停用或迁移；保留API/原厂规格独立审计。

### `compute/model-specs/volcengine.json#doubao-seed-code`

结果：`still-unresolved`。原模型记录：[doubao-seed-code](../../../model-sources/providers/volcengine/models/doubao-seed-code.md)。


剩余字段：`id`、`spec.contextWindow`、`spec.defaultTemperature`、`spec.maxOutputTokens`、`spec.capabilities`。

- 渲染官网目录已读，但本条精确ID、旧别名或其他产品协议没有逐字支持；没有因文档可读就宣布本型号已核。
- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/providers/volcengine.json#doubao-seed-evolving`

结果：`official-identity-only`。原模型记录：[doubao-seed-evolving](../../../model-sources/providers/volcengine/models/doubao-seed-evolving.md)。

- `modelName`：当前 `"doubao-seed-evolving"`；官网候选 `"doubao-seed-evolving"`；`matches`。[volc-rendered-model-list](https://docs.volcengine.com/docs/ark/model-list?lang=zh)。官网当前目录逐字出现实际wire ID；显示别名不代替实参。
- `contextWindow`：当前 `1000000`；官网候选 `"1024k"`；`not-comparable`。[volc-rendered-model-list](https://docs.volcengine.com/docs/ark/model-list?lang=zh)。官方原文token数量；k是否1000/1024本次未确认，保候选原值不机械换算。
- `maxInputTokens`：当前 `null`；官网候选 `"1024k"`；`not-comparable`。[volc-rendered-model-list](https://docs.volcengine.com/docs/ark/model-list?lang=zh)。官方原文token数量；k是否1000/1024本次未确认，保候选原值不机械换算。
- `maxOutputTokens`：当前 `null`；官网候选 `"256k"`；`not-comparable`。[volc-rendered-model-list](https://docs.volcengine.com/docs/ark/model-list?lang=zh)。官方原文token数量；k是否1000/1024本次未确认，保候选原值不机械换算。
- `baseUrl`：当前 `null`；官网候选 `"https://ark.cn-beijing.volces.com/api/v3"`；`not-comparable`。[volc-openviking](https://raw.githubusercontent.com/volcengine/OpenViking/main/docs/zh/guides/02-volcengine-purchase-guide.md)。官方仓库北京端点证据，只确认接入入口，不确认本型号可调用。

剩余字段：`contextWindow`、`capabilities`。

- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/model-specs/volcengine.json#doubao-seed-evolving`

结果：`official-identity-only`。原模型记录：[doubao-seed-evolving](../../../model-sources/providers/volcengine/models/doubao-seed-evolving.md)。

- `id`：当前 `"doubao-seed-evolving"`；官网候选 `"doubao-seed-evolving"`；`matches`。[volc-rendered-model-list](https://docs.volcengine.com/docs/ark/model-list?lang=zh)。官网当前目录逐字出现实际wire ID；显示别名不代替实参。
- `spec.contextWindow`：当前 `1000000`；官网候选 `"1024k"`；`not-comparable`。[volc-rendered-model-list](https://docs.volcengine.com/docs/ark/model-list?lang=zh)。官方原文token数量；k是否1000/1024本次未确认，保候选原值不机械换算。
- `spec.maxInputTokens`：当前 `null`；官网候选 `"1024k"`；`not-comparable`。[volc-rendered-model-list](https://docs.volcengine.com/docs/ark/model-list?lang=zh)。官方原文token数量；k是否1000/1024本次未确认，保候选原值不机械换算。
- `spec.maxOutputTokens`：当前 `null`；官网候选 `"256k"`；`not-comparable`。[volc-rendered-model-list](https://docs.volcengine.com/docs/ark/model-list?lang=zh)。官方原文token数量；k是否1000/1024本次未确认，保候选原值不机械换算。

剩余字段：`spec.contextWindow`、`spec.supportsReasoning`、`spec.capabilities`。

- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/model-specs/volcengine.json#doubao-seedance-1.0-pro-fast`

结果：`still-unresolved`。原模型记录：[doubao-seedance-1.0-pro-fast](../../../model-sources/providers/volcengine/models/doubao-seedance-1.0-pro-fast.md)。


剩余字段：`id`、`spec.capabilities`。

- 渲染官网目录已读，但本条精确ID、旧别名或其他产品协议没有逐字支持；没有因文档可读就宣布本型号已核。
- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/model-specs/volcengine.json#doubao-seedance-1.0-pro`

结果：`official-identity-only`。原模型记录：[doubao-seedance-1.0-pro](../../../model-sources/providers/volcengine/models/doubao-seedance-1.0-pro.md)。

- `match.exact`：当前 `["doubao-seedance-1-0-pro-250528", "doubao-seedance-1.0-pro"]`；官网候选 `"doubao-seedance-1-0-pro-250528"`；`not-comparable`。[volc-rendered-model-list](https://docs.volcengine.com/docs/ark/model-list?lang=zh)。已有exact映射命中官网日期型号，目录标即将下线但没有本文停服时刻。

剩余字段：`id`、`spec.capabilities`。

- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/model-specs/volcengine.json#doubao-seedance-1.5-pro`

结果：`still-unresolved`。原模型记录：[doubao-seedance-1.5-pro](../../../model-sources/providers/volcengine/models/doubao-seedance-1.5-pro.md)。


剩余字段：`id`、`spec.capabilities`。

- 渲染官网目录已读，但本条精确ID、旧别名或其他产品协议没有逐字支持；没有因文档可读就宣布本型号已核。
- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/providers/volcengine.json#doubao-seedance-2-0-260128`

结果：`official-conflict`。原模型记录：[doubao-seedance-2-0-260128](../../../model-sources/providers/volcengine/models/doubao-seedance-2-0-260128.md)。

- `modelName`：当前 `"doubao-seedance-2-0-260128"`；官网候选 `"doubao-seedance-2-0-260128"`；`matches`。[volc-rendered-model-list](https://docs.volcengine.com/docs/ark/model-list?lang=zh)。官网精确日期ID；不并到无日期2.0别名。
- `extra.maxVideoDuration`：当前 `15`；官网候选 `15`；`matches`。[volc-rendered-model-list](https://docs.volcengine.com/docs/ark/model-list?lang=zh)。视频目录时长4~15秒。
- `extra.supportedResolutions`：当前 `["720p", "1080p"]`；官网候选 `["480p", "720p", "1080p", "4k"]`；`differs`。[volc-rendered-model-list](https://docs.volcengine.com/docs/ark/model-list?lang=zh)。官网目录含4k且位深不同，客户端旧列表缺480p/4k；能否启用需原生协议验收。
- `baseUrl`：当前 `null`；官网候选 `"https://ark.cn-beijing.volces.com/api/v3"`；`not-comparable`。[volc-openviking](https://raw.githubusercontent.com/volcengine/OpenViking/main/docs/zh/guides/02-volcengine-purchase-guide.md)。官方仓库北京端点证据，只确认接入入口，不确认本型号可调用。

剩余字段：`capabilities`、`extra.endpoint`、`extra.maxReferenceImages`、`extra.asyncMode`。

- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/model-specs/volcengine.json#doubao-seedance-2.0-fast`

结果：`still-unresolved`。原模型记录：[doubao-seedance-2.0-fast](../../../model-sources/providers/volcengine/models/doubao-seedance-2.0-fast.md)。


剩余字段：`id`、`spec.capabilities`。

- 渲染官网目录已读，但本条精确ID、旧别名或其他产品协议没有逐字支持；没有因文档可读就宣布本型号已核。
- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/model-specs/volcengine.json#doubao-seedance-2.0-mini`

结果：`still-unresolved`。原模型记录：[doubao-seedance-2.0-mini](../../../model-sources/providers/volcengine/models/doubao-seedance-2.0-mini.md)。


剩余字段：`id`、`spec.capabilities`。

- 渲染官网目录已读，但本条精确ID、旧别名或其他产品协议没有逐字支持；没有因文档可读就宣布本型号已核。
- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/model-specs/volcengine.json#doubao-seedance-2.0`

结果：`still-unresolved`。原模型记录：[doubao-seedance-2.0](../../../model-sources/providers/volcengine/models/doubao-seedance-2.0.md)。


剩余字段：`id`、`spec.capabilities`。

- 渲染官网目录已读，但本条精确ID、旧别名或其他产品协议没有逐字支持；没有因文档可读就宣布本型号已核。
- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/providers/volcengine.json#doubao-seedream-4-0-250828`

结果：`official-identity-only`。原模型记录：[doubao-seedream-4-0-250828](../../../model-sources/providers/volcengine/models/doubao-seedream-4-0-250828.md)。

- `modelName`：当前 `"doubao-seedream-4-0-250828"`；官网候选 `"doubao-seedream-4-0-250828"`；`matches`。[volc-rendered-model-list](https://docs.volcengine.com/docs/ark/model-list?lang=zh)。精确ID存在，当前目录标即将下线，不能称已停服。
- `baseUrl`：当前 `null`；官网候选 `"https://ark.cn-beijing.volces.com/api/v3"`；`not-comparable`。[volc-openviking](https://raw.githubusercontent.com/volcengine/OpenViking/main/docs/zh/guides/02-volcengine-purchase-guide.md)。官方仓库北京端点证据，只确认接入入口，不确认本型号可调用。

剩余字段：`capabilities`、`extra.endpoint`、`extra.supportedSizes`、`extra.maxFusionImages`。

- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/coding-plans/volcengine-coding.json#glm-4.7`

结果：`official-conflict`。原模型记录：[glm-4.7](../../../model-sources/providers/volcengine/models/glm-4.7.md)。

- `access.lifecycle`：当前 `null`；官网候选 `{"status": "retired", "dateAsPrinted": "06.08", "scope": "Coding Plan"}`；`differs`。[volc-rendered-coding-retirements](https://docs.volcengine.com/docs/ark/coding-plan-personal-model-deprecation?lang=zh)。已下线表逐字列本ID及月日；不外推原厂/后付费API退休。

剩余字段：`modelName`、`capabilities`。

- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

下一步：核实年份/确切时刻并按Coding Plan限定停用或迁移；保留API/原厂规格独立审计。

### `compute/coding-plans/volcengine-coding.json#glm-5.1`

结果：`official-conflict`。原模型记录：[glm-5.1](../../../model-sources/providers/volcengine/models/glm-5.1.md)。

- `access.lifecycle`：当前 `null`；官网候选 `{"status": "retired", "dateAsPrinted": "06.30", "scope": "Coding Plan"}`；`differs`。[volc-rendered-coding-retirements](https://docs.volcengine.com/docs/ark/coding-plan-personal-model-deprecation?lang=zh)。已下线表逐字列本ID及月日；不外推原厂/后付费API退休。

剩余字段：`modelName`、`capabilities`。

- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

下一步：核实年份/确切时刻并按Coding Plan限定停用或迁移；保留API/原厂规格独立审计。

### `compute/coding-plans/volcengine-coding.json#kimi-k2.5`

结果：`official-conflict`。原模型记录：[kimi-k2.5](../../../model-sources/providers/volcengine/models/kimi-k2.5.md)。

- `access.lifecycle`：当前 `null`；官网候选 `{"status": "retired", "dateAsPrinted": "06.08", "scope": "Coding Plan"}`；`differs`。[volc-rendered-coding-retirements](https://docs.volcengine.com/docs/ark/coding-plan-personal-model-deprecation?lang=zh)。已下线表逐字列本ID及月日；不外推原厂/后付费API退休。

剩余字段：`modelName`、`capabilities`。

- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

下一步：核实年份/确切时刻并按Coding Plan限定停用或迁移；保留API/原厂规格独立审计。

### `compute/coding-plans/volcengine-coding.json#kimi-k2.6`

结果：`official-conflict`。原模型记录：[kimi-k2.6](../../../model-sources/providers/volcengine/models/kimi-k2.6.md)。

- `access.lifecycle`：当前 `null`；官网候选 `{"status": "retired", "dateAsPrinted": "08.18", "scope": "Coding Plan"}`；`differs`。[volc-rendered-coding-retirements](https://docs.volcengine.com/docs/ark/coding-plan-personal-model-deprecation?lang=zh)。已下线表逐字列本ID及月日；不外推原厂/后付费API退休。

剩余字段：`modelName`、`capabilities`。

- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

下一步：核实年份/确切时刻并按Coding Plan限定停用或迁移；保留API/原厂规格独立审计。

### `compute/coding-plans/volcengine-coding.json#minimax-m2.5`

结果：`official-conflict`。原模型记录：[minimax-m2.5](../../../model-sources/providers/volcengine/models/minimax-m2.5.md)。

- `access.lifecycle`：当前 `null`；官网候选 `{"status": "retired", "dateAsPrinted": "06.08", "scope": "Coding Plan"}`；`differs`。[volc-rendered-coding-retirements](https://docs.volcengine.com/docs/ark/coding-plan-personal-model-deprecation?lang=zh)。已下线表逐字列本ID及月日；不外推原厂/后付费API退休。

剩余字段：`modelName`、`capabilities`。

- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

下一步：核实年份/确切时刻并按Coding Plan限定停用或迁移；保留API/原厂规格独立审计。

### `compute/coding-plans/volcengine-coding.json#minimax-m2.7`

结果：`official-conflict`。原模型记录：[minimax-m2.7](../../../model-sources/providers/volcengine/models/minimax-m2.7.md)。

- `access.lifecycle`：当前 `null`；官网候选 `{"status": "retired", "dateAsPrinted": "08.18", "scope": "Coding Plan"}`；`differs`。[volc-rendered-coding-retirements](https://docs.volcengine.com/docs/ark/coding-plan-personal-model-deprecation?lang=zh)。已下线表逐字列本ID及月日；不外推原厂/后付费API退休。

剩余字段：`modelName`、`capabilities`。

- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

下一步：核实年份/确切时刻并按Coding Plan限定停用或迁移；保留API/原厂规格独立审计。

### `compute/providers/volcengine.json#volc-mega-tts-clone`

结果：`official-access-only`。原模型记录：[volc-mega-tts-clone](../../../model-sources/providers/volcengine/models/volc-mega-tts-clone.md)。

- `baseUrl`：当前 `null`；官网候选 `"https://ark.cn-beijing.volces.com/api/v3"`；`not-comparable`。[volc-openviking](https://raw.githubusercontent.com/volcengine/OpenViking/main/docs/zh/guides/02-volcengine-purchase-guide.md)。官方仓库北京端点证据，只确认接入入口，不确认本型号可调用。

剩余字段：`modelName`、`capabilities`、`extra.maxCloneSamples`、`extra.minCloneDuration`。

- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

- official-access-only只说明找到官方接入/产品入口，不计本条精确模型身份或容量已核。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/model-specs/volcengine.json#volc-mega-tts-clone`

结果：`still-unresolved`。原模型记录：[volc-mega-tts-clone](../../../model-sources/providers/volcengine/models/volc-mega-tts-clone.md)。


剩余字段：`id`、`spec.capabilities`。

- 渲染官网目录已读，但本条精确ID、旧别名或其他产品协议没有逐字支持；没有因文档可读就宣布本型号已核。
- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/providers/volcengine.json#volc-realtime-voice`

结果：`official-access-only`。原模型记录：[volc-realtime-voice](../../../model-sources/providers/volcengine/models/volc-realtime-voice.md)。

- `baseUrl`：当前 `null`；官网候选 `"https://ark.cn-beijing.volces.com/api/v3"`；`not-comparable`。[volc-openviking](https://raw.githubusercontent.com/volcengine/OpenViking/main/docs/zh/guides/02-volcengine-purchase-guide.md)。官方仓库北京端点证据，只确认接入入口，不确认本型号可调用。

剩余字段：`modelName`、`capabilities`、`extra.supportedModes`、`extra.latencyMs`。

- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

- official-access-only只说明找到官方接入/产品入口，不计本条精确模型身份或容量已核。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/model-specs/volcengine.json#volc-realtime-voice`

结果：`still-unresolved`。原模型记录：[volc-realtime-voice](../../../model-sources/providers/volcengine/models/volc-realtime-voice.md)。


剩余字段：`id`、`spec.capabilities`。

- 渲染官网目录已读，但本条精确ID、旧别名或其他产品协议没有逐字支持；没有因文档可读就宣布本型号已核。
- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/providers/volcengine.json#volc-simultaneous`

结果：`official-access-only`。原模型记录：[volc-simultaneous](../../../model-sources/providers/volcengine/models/volc-simultaneous.md)。

- `baseUrl`：当前 `null`；官网候选 `"https://ark.cn-beijing.volces.com/api/v3"`；`not-comparable`。[volc-openviking](https://raw.githubusercontent.com/volcengine/OpenViking/main/docs/zh/guides/02-volcengine-purchase-guide.md)。官方仓库北京端点证据，只确认接入入口，不确认本型号可调用。

剩余字段：`modelName`、`capabilities`、`extra.streamingSupported`。

- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

- official-access-only只说明找到官方接入/产品入口，不计本条精确模型身份或容量已核。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/model-specs/volcengine.json#volc-simultaneous`

结果：`still-unresolved`。原模型记录：[volc-simultaneous](../../../model-sources/providers/volcengine/models/volc-simultaneous.md)。


剩余字段：`id`、`spec.capabilities`。

- 渲染官网目录已读，但本条精确ID、旧别名或其他产品协议没有逐字支持；没有因文档可读就宣布本型号已核。
- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/providers/volcengine.json#volc-translation`

结果：`official-access-only`。原模型记录：[volc-translation](../../../model-sources/providers/volcengine/models/volc-translation.md)。

- `baseUrl`：当前 `null`；官网候选 `"https://ark.cn-beijing.volces.com/api/v3"`；`not-comparable`。[volc-openviking](https://raw.githubusercontent.com/volcengine/OpenViking/main/docs/zh/guides/02-volcengine-purchase-guide.md)。官方仓库北京端点证据，只确认接入入口，不确认本型号可调用。

剩余字段：`modelName`、`capabilities`。

- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

- official-access-only只说明找到官方接入/产品入口，不计本条精确模型身份或容量已核。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。

### `compute/model-specs/volcengine.json#volc-translation`

结果：`still-unresolved`。原模型记录：[volc-translation](../../../model-sources/providers/volcengine/models/volc-translation.md)。


剩余字段：`id`、`spec.capabilities`。

- 渲染官网目录已读，但本条精确ID、旧别名或其他产品协议没有逐字支持；没有因文档可读就宣布本型号已核。
- HTTP/搜索正文壳已单列；本条证明仅使用实际浏览器正文/官方仓库，不采用搜索摘要容量。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。
