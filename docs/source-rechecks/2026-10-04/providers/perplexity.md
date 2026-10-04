# perplexity 来源重新核查

核查日期：2026-10-04。覆盖 inventory 中 6 条精确记录。此文是临时候选复核，不修改既有来源状态、数据或 manifest。

原Sonar规格页跳到Agent迁移指南。Sonar Chat Completions支持于2026-09-27结束，同步/流式逐型号重写仍可工作，Async不再支持。不能封整个域名或将旧规格当现合同。

## 本次实际读取与失败尝试

### perplexity-9ed2d545486b

- 初始链接：[https://docs.perplexity.ai/docs/agent-api/migrate-from-sonar/overview](https://docs.perplexity.ai/docs/agent-api/migrate-from-sonar/overview)
- 最终链接：[https://docs.perplexity.ai/docs/agent-api/migrate-from-sonar/overview](https://docs.perplexity.ai/docs/agent-api/migrate-from-sonar/overview)
- 发布者/类型/读取：Perplexity / official-docs / readable
- 适用范围：该官网文档明确列出的模型/API；不扩展到其他接入面。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### perplexity-bbb973120d73

- 初始链接：[https://docs.perplexity.ai/getting-started/models/models/sonar](https://docs.perplexity.ai/getting-started/models/models/sonar)
- 最终链接：[https://docs.perplexity.ai/docs/agent-api/migrate-from-sonar/overview](https://docs.perplexity.ai/docs/agent-api/migrate-from-sonar/overview)
- 发布者/类型/读取：Perplexity / official-docs / readable
- 适用范围：该官网文档明确列出的模型/API；不扩展到其他接入面。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### perplexity-1206d983ba8d

- 初始链接：[https://docs.perplexity.ai/getting-started/models/models/sonar-pro](https://docs.perplexity.ai/getting-started/models/models/sonar-pro)
- 最终链接：[https://docs.perplexity.ai/docs/agent-api/migrate-from-sonar/overview](https://docs.perplexity.ai/docs/agent-api/migrate-from-sonar/overview)
- 发布者/类型/读取：Perplexity / official-docs / readable
- 适用范围：该官网文档明确列出的模型/API；不扩展到其他接入面。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### perplexity-dd781f6a6830

- 初始链接：[https://docs.perplexity.ai/getting-started/models/models/sonar-reasoning-pro](https://docs.perplexity.ai/getting-started/models/models/sonar-reasoning-pro)
- 最终链接：[https://docs.perplexity.ai/docs/agent-api/migrate-from-sonar/overview](https://docs.perplexity.ai/docs/agent-api/migrate-from-sonar/overview)
- 发布者/类型/读取：Perplexity / official-docs / readable
- 适用范围：该官网文档明确列出的模型/API；不扩展到其他接入面。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### perplexity-1e37729ca50c

- 初始链接：[https://docs.perplexity.ai/docs/agent-api/migrate-from-sonar/overview.md](https://docs.perplexity.ai/docs/agent-api/migrate-from-sonar/overview.md)
- 最终链接：[https://docs.perplexity.ai/docs/agent-api/migrate-from-sonar/overview.md](https://docs.perplexity.ai/docs/agent-api/migrate-from-sonar/overview.md)
- 发布者/类型/读取：Perplexity / official-docs / readable
- 适用范围：该官网文档明确列出的模型/API；不扩展到其他接入面。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### perplexity-1bc53630033a

- 初始链接：[https://docs.perplexity.ai/docs/getting-started/pricing.md](https://docs.perplexity.ai/docs/getting-started/pricing.md)
- 最终链接：[https://docs.perplexity.ai/docs/getting-started/pricing.md](https://docs.perplexity.ai/docs/getting-started/pricing.md)
- 发布者/类型/读取：Perplexity / official-docs / readable
- 适用范围：该官网文档明确列出的模型/API；不扩展到其他接入面。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

## 逐记录复核

### `compute/providers/perplexity.json#sonar-pro`

- 精确型号：`sonar-pro`
- 接入/规格文件：`compute/providers/perplexity.json`
- 原来源记录：`docs/model-sources/providers/perplexity/models/sonar-pro.md`
- 结论：`official-conflict`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `accessAvailability` | `null` | `{"sonarChatCompletionsSupportEnded":"2026-09-27","syncAndStreaming":"reformulated-gradually-to-AgentAPI","async":"unsupported","preset":"fast"}` | not-comparable | [perplexity-bbb973120d73](https://docs.perplexity.ai/docs/agent-api/migrate-from-sonar/overview)；官方迁移说明明确同步/流式兼容与异步停用区别，不证明旧token窗口/价格仍生效。 |

剩余缺口：`contextWindow`, `currentAccessContract`, `currentContextWindow`, `currentPricing`, `extra.requestPricingPer1k.high`, `extra.requestPricingPer1k.low`, `extra.requestPricingPer1k.medium`, `inputPrice`, `maxOutputTokens`, `modelName`, `outputPrice`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- 旧规格页最终跳转官方Agent迁移指南；原模型名称仅历史入口/重写路由。不能把域名有响应或旧套餐归为完整参数已核；需查Agentpreset最终model及pricing。

### `compute/model-specs/perplexity.json#sonar-pro`

- 精确型号：`sonar-pro`
- 接入/规格文件：`compute/model-specs/perplexity.json`
- 原来源记录：`docs/model-sources/providers/perplexity/models/sonar-pro.md`
- 结论：`official-conflict`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `spec.accessAvailability` | `null` | `{"sonarChatCompletionsSupportEnded":"2026-09-27","syncAndStreaming":"reformulated-gradually-to-AgentAPI","async":"unsupported","preset":"fast"}` | not-comparable | [perplexity-bbb973120d73](https://docs.perplexity.ai/docs/agent-api/migrate-from-sonar/overview)；官方迁移说明明确同步/流式兼容与异步停用区别，不证明旧token窗口/价格仍生效。 |

剩余缺口：`currentAccessContract`, `currentContextWindow`, `currentPricing`, `id`, `spec.contextWindow`, `spec.maxOutputTokens`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- 旧规格页最终跳转官方Agent迁移指南；原模型名称仅历史入口/重写路由。不能把域名有响应或旧套餐归为完整参数已核；需查Agentpreset最终model及pricing。

### `compute/providers/perplexity.json#sonar-reasoning-pro`

- 精确型号：`sonar-reasoning-pro`
- 接入/规格文件：`compute/providers/perplexity.json`
- 原来源记录：`docs/model-sources/providers/perplexity/models/sonar-reasoning-pro.md`
- 结论：`official-conflict`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `accessAvailability` | `null` | `{"sonarChatCompletionsSupportEnded":"2026-09-27","syncAndStreaming":"reformulated-gradually-to-AgentAPI","async":"unsupported","preset":"low"}` | not-comparable | [perplexity-bbb973120d73](https://docs.perplexity.ai/docs/agent-api/migrate-from-sonar/overview)；官方迁移说明明确同步/流式兼容与异步停用区别，不证明旧token窗口/价格仍生效。 |

剩余缺口：`contextWindow`, `currentAccessContract`, `currentContextWindow`, `currentPricing`, `extra.requestPricingPer1k.high`, `extra.requestPricingPer1k.low`, `extra.requestPricingPer1k.medium`, `inputPrice`, `maxOutputTokens`, `modelName`, `outputPrice`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- 旧规格页最终跳转官方Agent迁移指南；原模型名称仅历史入口/重写路由。不能把域名有响应或旧套餐归为完整参数已核；需查Agentpreset最终model及pricing。

### `compute/model-specs/perplexity.json#sonar-reasoning-pro`

- 精确型号：`sonar-reasoning-pro`
- 接入/规格文件：`compute/model-specs/perplexity.json`
- 原来源记录：`docs/model-sources/providers/perplexity/models/sonar-reasoning-pro.md`
- 结论：`official-conflict`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `spec.accessAvailability` | `null` | `{"sonarChatCompletionsSupportEnded":"2026-09-27","syncAndStreaming":"reformulated-gradually-to-AgentAPI","async":"unsupported","preset":"low"}` | not-comparable | [perplexity-bbb973120d73](https://docs.perplexity.ai/docs/agent-api/migrate-from-sonar/overview)；官方迁移说明明确同步/流式兼容与异步停用区别，不证明旧token窗口/价格仍生效。 |

剩余缺口：`currentAccessContract`, `currentContextWindow`, `currentPricing`, `id`, `spec.contextWindow`, `spec.defaultTemperature`, `spec.maxOutputTokens`, `spec.supportsReasoning`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- 旧规格页最终跳转官方Agent迁移指南；原模型名称仅历史入口/重写路由。不能把域名有响应或旧套餐归为完整参数已核；需查Agentpreset最终model及pricing。

### `compute/providers/perplexity.json#sonar`

- 精确型号：`sonar`
- 接入/规格文件：`compute/providers/perplexity.json`
- 原来源记录：`docs/model-sources/providers/perplexity/models/sonar.md`
- 结论：`official-conflict`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `accessAvailability` | `null` | `{"sonarChatCompletionsSupportEnded":"2026-09-27","syncAndStreaming":"reformulated-gradually-to-AgentAPI","async":"unsupported","preset":"fast"}` | not-comparable | [perplexity-bbb973120d73](https://docs.perplexity.ai/docs/agent-api/migrate-from-sonar/overview)；官方迁移说明明确同步/流式兼容与异步停用区别，不证明旧token窗口/价格仍生效。 |

剩余缺口：`contextWindow`, `currentAccessContract`, `currentContextWindow`, `currentPricing`, `extra.requestPricingPer1k.high`, `extra.requestPricingPer1k.low`, `extra.requestPricingPer1k.medium`, `inputPrice`, `maxOutputTokens`, `outputPrice`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- 旧规格页最终跳转官方Agent迁移指南；原模型名称仅历史入口/重写路由。不能把域名有响应或旧套餐归为完整参数已核；需查Agentpreset最终model及pricing。

### `compute/model-specs/perplexity.json#sonar`

- 精确型号：`sonar`
- 接入/规格文件：`compute/model-specs/perplexity.json`
- 原来源记录：`docs/model-sources/providers/perplexity/models/sonar.md`
- 结论：`official-conflict`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `spec.accessAvailability` | `null` | `{"sonarChatCompletionsSupportEnded":"2026-09-27","syncAndStreaming":"reformulated-gradually-to-AgentAPI","async":"unsupported","preset":"fast"}` | not-comparable | [perplexity-bbb973120d73](https://docs.perplexity.ai/docs/agent-api/migrate-from-sonar/overview)；官方迁移说明明确同步/流式兼容与异步停用区别，不证明旧token窗口/价格仍生效。 |

剩余缺口：`currentAccessContract`, `currentContextWindow`, `currentPricing`, `spec.contextWindow`, `spec.maxOutputTokens`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- 旧规格页最终跳转官方Agent迁移指南；原模型名称仅历史入口/重写路由。不能把域名有响应或旧套餐归为完整参数已核；需查Agentpreset最终model及pricing。
