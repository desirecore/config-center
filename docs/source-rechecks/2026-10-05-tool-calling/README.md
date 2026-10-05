# 2026-10-05：工具调用标签核对

基线 main `a94a751078f81a69436e05e29b751dfea163f685`，数据版本 128 → 129。

范围：`capabilities` 含 `chat`、但没有 `tool_use` / `tools` / `function_calling` 的 36 个共享规格与 70 个 Provider / 套餐预置条目（同一型号在不同接入面分别计数）。逐条读取供应商官方文档，分地域、分接入面判断；没有调用任何模型，也没有做账号调用验收。

结果：25 条补 `tool_use`（规格 9、随规格继承的接入条目 5、接入覆盖 11），81 条保持原样。只改 `capabilities`，没有改 `routing`；新补标签的规格都没有路由策略，自动路由范围不变。

## 判据

| 情况 | 处理 |
| --- | --- |
| 官方页面写明该型号（或所属系列）在该接入面支持函数 / 工具调用 | 补 `tool_use` |
| 套餐别名：官方套餐文档把它作为 Claude Code 等编程工具里配置的模型名，且套餐内可选型号在同平台文档里都标注支持 | 补 `tool_use`，依据类型记为套餐文档 |
| 官方写明不支持、官方页面互相矛盾、官方当前文档里没有该型号 | 不改 |
| 官方已下线或公告数日内下线 | 不改 |
| 官网读取失败 | 不改 |

来源只取各供应商官方域名上成功读取的正文。能力标签里只有 `tool_use` 一项以这些来源为依据，其余标签仍是本仓产品标签；各记录的核验状态没有因此提高。

## 已补 `tool_use`（25 条）

| 配置 | 型号 | 依据 |
| --- | --- | --- |
| `model-specs/openai.json` | `gpt-5-nano` | 官网型号页 Supported features 列有 function_calling，Chat Completions 与 Responses 端点均为 Supported。来源：[developers.openai.com](https://developers.openai.com/api/docs/models/gpt-5-nano.md) |
| `model-specs/openai.json` | `gpt-4.1-nano` | 官网型号页 Supported features 列有 function_calling，Chat Completions 与 Responses 端点均为 Supported。来源：[developers.openai.com](https://developers.openai.com/api/docs/models/gpt-4.1-nano.md) |
| `model-specs/openai.json` | `gpt-oss-120b` | 官网型号页 Supported features 列有 function_calling；OpenAI 直连只有 Responses 端点为 Supported（Chat Completions 为 Not supported），其他托管平台另核。来源：[developers.openai.com](https://developers.openai.com/api/docs/models/gpt-oss-120b.md) |
| `model-specs/qwen.json` | `qwen-max` | 百炼型号页模型能力表：华北 2（北京）Function Calling 支持，新加坡（国际）不支持；Function Calling 指南的支持清单列有 Qwen-Max 系列。标签按北京地域记，国际站接入不适用。来源：[help.aliyun.com](https://help.aliyun.com/zh/model-studio/qwen-max)、[help.aliyun.com](https://help.aliyun.com/zh/model-studio/qwen-function-calling) |
| `model-specs/qwen.json` | `qwen-plus` | 百炼型号页模型能力表：华北 2（北京）Function Calling 支持，新加坡、法兰克福、弗吉尼亚、中国香港不支持；Function Calling 指南的支持清单列有 Qwen-Plus 系列。标签按北京地域记，其他地域接入不适用。来源：[help.aliyun.com](https://help.aliyun.com/zh/model-studio/qwen-plus)、[help.aliyun.com](https://help.aliyun.com/zh/model-studio/qwen-function-calling) |
| `model-specs/qwen.json` | `qwen3-vl-plus` | 百炼型号页模型能力表：华北 2（北京）Function Calling 支持，新加坡、法兰克福、弗吉尼亚、中国香港不支持；Function Calling 指南的支持清单列有 Qwen3-VL-Plus 系列。标签按北京地域记，其他地域接入不适用。来源：[help.aliyun.com](https://help.aliyun.com/zh/model-studio/qwen3-vl-plus)、[help.aliyun.com](https://help.aliyun.com/zh/model-studio/qwen-function-calling) |
| `model-specs/qwen.json` | `qwen3-vl-flash` | 百炼型号页模型能力表：华北 2（北京）Function Calling 支持，新加坡、法兰克福、弗吉尼亚不支持；Function Calling 指南的支持清单列有 Qwen3-VL-Flash 系列。标签按北京地域记，其他地域接入不适用。来源：[help.aliyun.com](https://help.aliyun.com/zh/model-studio/qwen3-vl-flash)、[help.aliyun.com](https://help.aliyun.com/zh/model-studio/qwen-function-calling) |
| `model-specs/zhipu.json` | `glm-4.6` | 官网 GLM-4.6 型号页「能力支持」列有 Function Calling。来源：[docs.bigmodel.cn](https://docs.bigmodel.cn/cn/guide/models/text/glm-4.6.md) |
| `model-specs/baidu.json` | `ernie-x1.1` | 千帆 Function calling 文档「支持模型范围」的 ERNIE 系列列有 ernie-x1.1。来源：[cloud.baidu.com](https://cloud.baidu.com/doc/qianfan-docs/s/xm95lyys5) |
| `providers/openai.json` | `gpt-5-nano` | 随共享规格继承。官网型号页 Supported features 列有 function_calling，Chat Completions 端点为 Supported。来源：[developers.openai.com](https://developers.openai.com/api/docs/models/gpt-5-nano.md) |
| `providers/openai.json` | `gpt-4.1-nano` | 随共享规格继承。官网型号页 Supported features 列有 function_calling，Chat Completions 端点为 Supported。来源：[developers.openai.com](https://developers.openai.com/api/docs/models/gpt-4.1-nano.md) |
| `providers/dashscope.json` | `qwen3-vl-plus` | 随共享规格继承。本接入是华北 2（北京）兼容端点，型号页北京地域 Function Calling 支持。来源：[help.aliyun.com](https://help.aliyun.com/zh/model-studio/qwen3-vl-plus)、[help.aliyun.com](https://help.aliyun.com/zh/model-studio/qwen-function-calling) |
| `providers/dashscope.json` | `qwen3-vl-flash` | 随共享规格继承。本接入是华北 2（北京）兼容端点，型号页北京地域 Function Calling 支持。来源：[help.aliyun.com](https://help.aliyun.com/zh/model-studio/qwen3-vl-flash)、[help.aliyun.com](https://help.aliyun.com/zh/model-studio/qwen-function-calling) |
| `providers/baidu.json` | `ernie-x1.1` | 随共享规格继承。千帆 Function calling 文档「支持模型范围」的 ERNIE 系列列有 ernie-x1.1。来源：[cloud.baidu.com](https://cloud.baidu.com/doc/qianfan-docs/s/xm95lyys5) |
| `providers/openai.json` | `gpt-5.4-nano` | 官网型号页 Supported features 列有 function_calling，Chat Completions 与 Responses 端点均为 Supported。来源：[developers.openai.com](https://developers.openai.com/api/docs/models/gpt-5.4-nano.md) |
| `providers/zhipu.json` | `glm-4.7-flashx` | 官网 GLM-4.7 系列页含 GLM-4.7-FlashX 页签，系列「能力支持」列有 Function Calling；模型概览的 GLM-4.7-FlashX 条目指向该页。精确 API ID 仍未单独证实，绑定方式不变。来源：[docs.bigmodel.cn](https://docs.bigmodel.cn/cn/guide/models/text/glm-4.7.md)、[docs.bigmodel.cn](https://docs.bigmodel.cn/cn/guide/start/model-overview.md) |
| `providers/ollama.json` | `llama3.1:70b` | Ollama 官方模型库 llama3.1:70b 页带 tools 能力标记。本地实际能力取决于用户拉取的权重与 Ollama 版本。来源：[ollama.com](https://ollama.com/library/llama3.1:70b) |
| `providers/openrouter.json` | `openrouter/auto` | OpenRouter 官方模型目录 API 中 openrouter/auto 的 supported_parameters 含 tools、tool_choice。实际能力取决于被路由到的后端模型。来源：[openrouter.ai](https://openrouter.ai/api/v1/models) |
| `coding-plans/dashscope-coding.json` | `glm-4.7` | 百炼 glm-4.7 型号页模型能力表 Function Calling 支持；Coding Plan 概述的支持模型含 glm-4.7。百炼 Function Calling 指南注明调用 GLM 系列需在请求中传 tool_stream=true，否则不返回 tool_calls；套餐端点是否同样要求未核。来源：[help.aliyun.com](https://help.aliyun.com/zh/model-studio/glm-4-7)、[help.aliyun.com](https://help.aliyun.com/zh/model-studio/coding-plan)、[help.aliyun.com](https://help.aliyun.com/zh/model-studio/qwen-function-calling) |
| `coding-plans/volcengine-coding.json` | `ark-code-latest` | Coding Plan 快速开始把 ark-code-latest 作为 Claude Code 的 ANTHROPIC_MODEL 配置；套餐概览写明套餐额度仅在 AI 编程工具中生效；方舟模型列表「工具调用能力」表里套餐内的豆包、GLM、DeepSeek 型号函数调用均为支持。别名本身没有单独的能力表，依据是套餐文档。来源：[docs.volcengine.com](https://docs.volcengine.com/docs/ark/coding-plan-personal-get-started?lang=zh)、[docs.volcengine.com](https://docs.volcengine.com/docs/ark/coding-plan-personal-plan-overview?lang=zh)、[docs.volcengine.com](https://docs.volcengine.com/docs/ark/model-list?lang=zh) |
| `coding-plans/tencent-token.json` | `tc-code-latest` | Token Plan 文档把 tc-code-latest 列为 Auto 智能路由的 Model ID，套餐适配 Claude Code、OpenCode 等编程工具；TokenHub 模型列表里套餐当前可用型号的能力支持均含 Function Calling。别名本身没有单独的能力表，依据是套餐文档。来源：[cloud.tencent.com](https://cloud.tencent.com/document/product/1823/130060)、[cloud.tencent.com](https://cloud.tencent.com/document/product/1823/130051) |
| `coding-plans/tencent-token.json` | `minimax-m2.7` | TokenHub 模型列表 MiniMax-M2.7（minimax-m2.7）的能力支持含 Function Calling；Token Plan 文档的可用模型含 minimax-m2.7。来源：[cloud.tencent.com](https://cloud.tencent.com/document/product/1823/130051)、[cloud.tencent.com](https://cloud.tencent.com/document/product/1823/130060) |
| `coding-plans/baidu-coding.json` | `kimi-k2.5` | 千帆 Function calling 文档「支持模型范围」列有 kimi-k2.5；Coding Plan 文档可配置的 Model Name 含 kimi-k2.5。套餐当前可用性未重新核实。来源：[cloud.baidu.com](https://cloud.baidu.com/doc/qianfan-docs/s/xm95lyys5)、[cloud.baidu.com](https://cloud.baidu.com/doc/qianfan/s/imlg0beiu) |
| `coding-plans/baidu-coding.json` | `glm-5` | 千帆 Function calling 文档「支持模型范围」列有 glm-5；Coding Plan 文档可配置的 Model Name 含 glm-5。套餐当前可用性未重新核实。来源：[cloud.baidu.com](https://cloud.baidu.com/doc/qianfan-docs/s/xm95lyys5)、[cloud.baidu.com](https://cloud.baidu.com/doc/qianfan/s/imlg0beiu) |
| `coding-plans/baidu-coding.json` | `minimax-m2.5` | 千帆 Function calling 文档「支持模型范围」列有 minimax-m2.5；Coding Plan 文档可配置的 Model Name 含 minimax-m2.5（套餐表标注即将下线）。套餐当前可用性未重新核实。来源：[cloud.baidu.com](https://cloud.baidu.com/doc/qianfan-docs/s/xm95lyys5)、[cloud.baidu.com](https://cloud.baidu.com/doc/qianfan/s/imlg0beiu) |

## 保持原样（81 条）

### 官方写明不支持，或官方页面互相矛盾（10 条）

| 配置 | 型号 | 原因 |
| --- | --- | --- |
| `model-specs/qwen.json` | `qwen-turbo` | 型号页模型能力表里华北 2（北京）与新加坡都写 Function Calling 不支持；Function Calling 指南的支持清单又列有 Qwen-Turbo 系列。两份官方页面不一致，不改。来源：[help.aliyun.com](https://help.aliyun.com/zh/model-studio/qwen-turbo)、[help.aliyun.com](https://help.aliyun.com/zh/model-studio/qwen-function-calling) |
| `model-specs/qwen.json` | `qwen-long` | 型号页模型能力表写 Function Calling 不支持；Function Calling 指南的支持清单也没有 Qwen-Long。来源：[help.aliyun.com](https://help.aliyun.com/zh/model-studio/qwen-long)、[help.aliyun.com](https://help.aliyun.com/zh/model-studio/qwen-function-calling) |
| `model-specs/perplexity.json` | `sonar-pro` | 官网「Sonar vs Agent API」对比里，自定义函数与 MCP 只属于 Agent API；Sonar Chat Completions 的支持已于 2026-09-27 结束。来源：[docs.perplexity.ai](https://docs.perplexity.ai/docs/agent-api/migrate-from-sonar/overview.md) |
| `model-specs/perplexity.json` | `sonar-reasoning-pro` | 官网「Sonar vs Agent API」对比里，自定义函数与 MCP 只属于 Agent API；Sonar Chat Completions 的支持已于 2026-09-27 结束。来源：[docs.perplexity.ai](https://docs.perplexity.ai/docs/agent-api/migrate-from-sonar/overview.md) |
| `model-specs/perplexity.json` | `sonar` | 官网「Sonar vs Agent API」对比里，自定义函数与 MCP 只属于 Agent API；Sonar Chat Completions 的支持已于 2026-09-27 结束。来源：[docs.perplexity.ai](https://docs.perplexity.ai/docs/agent-api/migrate-from-sonar/overview.md) |
| `providers/dashscope.json` | `qwen-long` | 型号页模型能力表写 Function Calling 不支持；Function Calling 指南的支持清单也没有 Qwen-Long。来源：[help.aliyun.com](https://help.aliyun.com/zh/model-studio/qwen-long)、[help.aliyun.com](https://help.aliyun.com/zh/model-studio/qwen-function-calling) |
| `providers/perplexity.json` | `sonar-pro` | 官网「Sonar vs Agent API」对比里，自定义函数与 MCP 只属于 Agent API；Sonar Chat Completions 的支持已于 2026-09-27 结束。来源：[docs.perplexity.ai](https://docs.perplexity.ai/docs/agent-api/migrate-from-sonar/overview.md) |
| `providers/perplexity.json` | `sonar-reasoning-pro` | 官网「Sonar vs Agent API」对比里，自定义函数与 MCP 只属于 Agent API；Sonar Chat Completions 的支持已于 2026-09-27 结束。来源：[docs.perplexity.ai](https://docs.perplexity.ai/docs/agent-api/migrate-from-sonar/overview.md) |
| `providers/perplexity.json` | `sonar` | 官网「Sonar vs Agent API」对比里，自定义函数与 MCP 只属于 Agent API；Sonar Chat Completions 的支持已于 2026-09-27 结束。来源：[docs.perplexity.ai](https://docs.perplexity.ai/docs/agent-api/migrate-from-sonar/overview.md) |
| `coding-plans/baidu-coding.json` | `qianfan-code-latest` | 别名由控制台选择实际型号；可选型号里 ernie-4.5-turbo-20260402、deepseek-v4-flash、glm-5.1 不在千帆 Function calling 的支持模型范围内，依据不一致。来源：[cloud.baidu.com](https://cloud.baidu.com/doc/qianfan/s/imlg0beiu)、[cloud.baidu.com](https://cloud.baidu.com/doc/qianfan-docs/s/xm95lyys5) |

### 官方已下线或公告数日内下线（26 条）

| 配置 | 型号 | 原因 |
| --- | --- | --- |
| `model-specs/moonshot.json` | `moonshot-v1-8k` | 官网模型列表：moonshot-v1 系列（含 -vision-preview）已于 2026-08-31 下线。来源：[platform.kimi.com](https://platform.kimi.com/docs/models.md) |
| `model-specs/moonshot.json` | `moonshot-v1-32k` | 官网模型列表：moonshot-v1 系列（含 -vision-preview）已于 2026-08-31 下线。来源：[platform.kimi.com](https://platform.kimi.com/docs/models.md) |
| `model-specs/moonshot.json` | `moonshot-v1-128k` | 官网模型列表：moonshot-v1 系列（含 -vision-preview）已于 2026-08-31 下线。来源：[platform.kimi.com](https://platform.kimi.com/docs/models.md) |
| `model-specs/tencent.json` | `hunyuan-2.0-thinking-20251109` | 官方下线公告：2026-06-22 起正式下线；原腾讯混元大模型平台 2026-09-30 全面停服。来源：[cloud.tencent.com](https://cloud.tencent.com/document/product/1729/131925) |
| `model-specs/tencent.json` | `hunyuan-t1-latest` | 官方下线公告：2026-06-22 起正式下线；原腾讯混元大模型平台 2026-09-30 全面停服。来源：[cloud.tencent.com](https://cloud.tencent.com/document/product/1729/131925) |
| `providers/moonshot.json` | `moonshot-v1-8k` | 官网模型列表：moonshot-v1 系列（含 -vision-preview）已于 2026-08-31 下线。来源：[platform.kimi.com](https://platform.kimi.com/docs/models.md) |
| `providers/moonshot.json` | `moonshot-v1-32k` | 官网模型列表：moonshot-v1 系列（含 -vision-preview）已于 2026-08-31 下线。来源：[platform.kimi.com](https://platform.kimi.com/docs/models.md) |
| `providers/moonshot.json` | `moonshot-v1-128k` | 官网模型列表：moonshot-v1 系列（含 -vision-preview）已于 2026-08-31 下线。来源：[platform.kimi.com](https://platform.kimi.com/docs/models.md) |
| `providers/moonshot.json` | `moonshot-v1-8k-vision-preview` | 官网模型列表：moonshot-v1 系列（含 -vision-preview）已于 2026-08-31 下线。来源：[platform.kimi.com](https://platform.kimi.com/docs/models.md) |
| `providers/moonshot.json` | `moonshot-v1-32k-vision-preview` | 官网模型列表：moonshot-v1 系列（含 -vision-preview）已于 2026-08-31 下线。来源：[platform.kimi.com](https://platform.kimi.com/docs/models.md) |
| `providers/moonshot.json` | `moonshot-v1-128k-vision-preview` | 官网模型列表：moonshot-v1 系列（含 -vision-preview）已于 2026-08-31 下线。来源：[platform.kimi.com](https://platform.kimi.com/docs/models.md) |
| `providers/tencent.json` | `hunyuan-2.0-thinking-20251109` | 官方下线公告：2026-06-22 起正式下线；原腾讯混元大模型平台 2026-09-30 全面停服。来源：[cloud.tencent.com](https://cloud.tencent.com/document/product/1729/131925) |
| `providers/tencent.json` | `hunyuan-t1-latest` | 官方下线公告：2026-06-22 起正式下线；原腾讯混元大模型平台 2026-09-30 全面停服。来源：[cloud.tencent.com](https://cloud.tencent.com/document/product/1729/131925) |
| `coding-plans/volcengine-coding.json` | `doubao-seed-2.0-code` | Coding Plan 模型下线公告的「已下线模型」：08.08 下线。来源：[docs.volcengine.com](https://docs.volcengine.com/docs/ark/coding-plan-personal-model-deprecation?lang=zh) |
| `coding-plans/volcengine-coding.json` | `doubao-seed-2.0-pro` | Coding Plan 模型下线公告的「已下线模型」：08.08 下线。来源：[docs.volcengine.com](https://docs.volcengine.com/docs/ark/coding-plan-personal-model-deprecation?lang=zh) |
| `coding-plans/volcengine-coding.json` | `doubao-seed-2.0-lite` | Coding Plan 模型下线公告：2026-10-09 下线。来源：[docs.volcengine.com](https://docs.volcengine.com/docs/ark/coding-plan-personal-model-deprecation?lang=zh) |
| `coding-plans/volcengine-coding.json` | `doubao-seed-code` | Coding Plan 模型下线公告的「已下线模型」：08.05 下线。来源：[docs.volcengine.com](https://docs.volcengine.com/docs/ark/coding-plan-personal-model-deprecation?lang=zh) |
| `coding-plans/volcengine-coding.json` | `glm-4.7` | Coding Plan 模型下线公告的「已下线模型」：06.08 下线。来源：[docs.volcengine.com](https://docs.volcengine.com/docs/ark/coding-plan-personal-model-deprecation?lang=zh) |
| `coding-plans/volcengine-coding.json` | `deepseek-v3.2` | Coding Plan 模型下线公告的「已下线模型」：06.30 下线。来源：[docs.volcengine.com](https://docs.volcengine.com/docs/ark/coding-plan-personal-model-deprecation?lang=zh) |
| `coding-plans/volcengine-coding.json` | `kimi-k2.5` | Coding Plan 模型下线公告的「已下线模型」：06.08 下线。来源：[docs.volcengine.com](https://docs.volcengine.com/docs/ark/coding-plan-personal-model-deprecation?lang=zh) |
| `coding-plans/volcengine-coding.json` | `glm-5.1` | Coding Plan 模型下线公告的「已下线模型」：06.30 下线。来源：[docs.volcengine.com](https://docs.volcengine.com/docs/ark/coding-plan-personal-model-deprecation?lang=zh) |
| `coding-plans/volcengine-coding.json` | `kimi-k2.6` | Coding Plan 模型下线公告的「已下线模型」：08.18 下线。来源：[docs.volcengine.com](https://docs.volcengine.com/docs/ark/coding-plan-personal-model-deprecation?lang=zh) |
| `coding-plans/volcengine-coding.json` | `minimax-m2.5` | Coding Plan 模型下线公告的「已下线模型」：06.08 下线。来源：[docs.volcengine.com](https://docs.volcengine.com/docs/ark/coding-plan-personal-model-deprecation?lang=zh) |
| `coding-plans/volcengine-coding.json` | `minimax-m2.7` | Coding Plan 模型下线公告的「已下线模型」：08.18 下线。来源：[docs.volcengine.com](https://docs.volcengine.com/docs/ark/coding-plan-personal-model-deprecation?lang=zh) |
| `coding-plans/tencent-token.json` | `glm-5.1` | TokenHub 模型列表的能力支持含 Function Calling，但套餐文档注明 2026-10-09 下线（模型列表写 2026-10-08）。来源：[cloud.tencent.com](https://cloud.tencent.com/document/product/1823/130060)、[cloud.tencent.com](https://cloud.tencent.com/document/product/1823/130051) |
| `coding-plans/tencent-token.json` | `glm-5` | TokenHub 模型列表的能力支持含 Function Calling，但套餐文档注明 2026-10-09 下线（模型列表写 2026-10-08）。来源：[cloud.tencent.com](https://cloud.tencent.com/document/product/1823/130060)、[cloud.tencent.com](https://cloud.tencent.com/document/product/1823/130051) |

### 官方当前文档里没有该型号，或没有它的工具调用说明（34 条）

| 配置 | 型号 | 原因 |
| --- | --- | --- |
| `model-specs/minimax.json` | `M2-her` | 官网 M2-her 指南的参数表只有 model、messages、temperature、top_p、max_completion_tokens、stream，没有 tools。来源：[platform.minimax.cn](https://platform.minimax.cn/docs/guides/text-chat.md) |
| `model-specs/minimax.json` | `MiniMax-Text-01` | 当前对话接口文档的 model 可选值不含 MiniMax-Text-01，tools 参数也没有按型号说明。来源：[platform.minimax.cn](https://platform.minimax.cn/docs/api-reference/text-post.md) |
| `model-specs/xiaomi.json` | `mimo-x-flash-preview` | 官网模型列表页没有这个型号。来源：[mimo.mi.com](https://mimo.mi.com/docs/en-US/quick-start/summary/model) |
| `model-specs/xiaomi.json` | `mimo-x-pro-preview` | 官网模型列表页没有这个型号。来源：[mimo.mi.com](https://mimo.mi.com/docs/en-US/quick-start/summary/model) |
| `model-specs/baidu.json` | `ernie-4.5-turbo-128k` | 千帆 Function calling 文档的「支持模型范围」（2026-07-09）没有 ERNIE 4.5 Turbo。来源：[cloud.baidu.com](https://cloud.baidu.com/doc/qianfan-docs/s/xm95lyys5) |
| `model-specs/baidu.json` | `ernie-4.5-turbo-20260402` | 千帆 Function calling 文档的「支持模型范围」（2026-07-09）没有 ERNIE 4.5 Turbo。来源：[cloud.baidu.com](https://cloud.baidu.com/doc/qianfan-docs/s/xm95lyys5) |
| `model-specs/cohere.json` | `north-small-translate-1-0` | 官网型号页只描述机器翻译用途，没有工具调用内容。来源：[docs.cohere.com](https://docs.cohere.com/docs/north-small-translate-1.0.md) |
| `model-specs/tencent.json` | `hunyuan-t1-vision` | 不在文生文下线清单里，但没有找到写明该型号支持工具调用的页面（接口文档的 Tools 说明只提到 hunyuan-turbos、hunyuan-t1、hunyuan-functioncall）；原混元平台 2026-09-30 全面停服。来源：[cloud.tencent.com](https://cloud.tencent.com/document/api/1729/105701)、[cloud.tencent.com](https://cloud.tencent.com/document/product/1729/131925) |
| `model-specs/volcengine.json` | `doubao-seed-1.6-flash` | 方舟模型列表（2026-09-28）及其「工具调用能力」表里已经没有这个型号。来源：[docs.volcengine.com](https://docs.volcengine.com/docs/ark/model-list?lang=zh) |
| `model-specs/volcengine.json` | `doubao-seed-1.6-lite` | 方舟模型列表（2026-09-28）及其「工具调用能力」表里已经没有这个型号。来源：[docs.volcengine.com](https://docs.volcengine.com/docs/ark/model-list?lang=zh) |
| `model-specs/volcengine.json` | `doubao-seed-1.6-vision` | 方舟模型列表（2026-09-28）及其「工具调用能力」表里已经没有这个型号。来源：[docs.volcengine.com](https://docs.volcengine.com/docs/ark/model-list?lang=zh) |
| `model-specs/volcengine.json` | `deepseek-v3.2` | 方舟模型列表（2026-09-28）及其「工具调用能力」表里已经没有这个型号。来源：[docs.volcengine.com](https://docs.volcengine.com/docs/ark/model-list?lang=zh) |
| `providers/volcengine.json` | `doubao-seed-1.6-flash` | 方舟模型列表（2026-09-28）及其「工具调用能力」表里已经没有这个型号。来源：[docs.volcengine.com](https://docs.volcengine.com/docs/ark/model-list?lang=zh) |
| `providers/volcengine.json` | `doubao-seed-1.6-lite` | 方舟模型列表（2026-09-28）及其「工具调用能力」表里已经没有这个型号。来源：[docs.volcengine.com](https://docs.volcengine.com/docs/ark/model-list?lang=zh) |
| `providers/volcengine.json` | `doubao-seed-1.6-vision` | 方舟模型列表（2026-09-28）及其「工具调用能力」表里已经没有这个型号。来源：[docs.volcengine.com](https://docs.volcengine.com/docs/ark/model-list?lang=zh) |
| `providers/volcengine.json` | `deepseek-v3.2` | 方舟模型列表（2026-09-28）及其「工具调用能力」表里已经没有这个型号。来源：[docs.volcengine.com](https://docs.volcengine.com/docs/ark/model-list?lang=zh) |
| `providers/minimax.json` | `M2-her` | 官网 M2-her 指南的参数表只有 model、messages、temperature、top_p、max_completion_tokens、stream，没有 tools。来源：[platform.minimax.cn](https://platform.minimax.cn/docs/guides/text-chat.md) |
| `providers/xiaomi.json` | `mimo-x-flash-preview` | 官网模型列表页没有这个型号。来源：[mimo.mi.com](https://mimo.mi.com/docs/en-US/quick-start/summary/model) |
| `providers/xiaomi.json` | `mimo-x-pro-preview` | 官网模型列表页没有这个型号。来源：[mimo.mi.com](https://mimo.mi.com/docs/en-US/quick-start/summary/model) |
| `providers/baidu.json` | `ernie-4.5-turbo-128k` | 千帆 Function calling 文档的「支持模型范围」（2026-07-09）没有 ERNIE 4.5 Turbo。来源：[cloud.baidu.com](https://cloud.baidu.com/doc/qianfan-docs/s/xm95lyys5) |
| `providers/baidu.json` | `ernie-4.5-turbo-20260402` | 千帆 Function calling 文档的「支持模型范围」（2026-07-09）没有 ERNIE 4.5 Turbo。来源：[cloud.baidu.com](https://cloud.baidu.com/doc/qianfan-docs/s/xm95lyys5) |
| `providers/tencent.json` | `hunyuan-t1-vision` | 不在文生文下线清单里，但没有找到写明该型号支持工具调用的页面（接口文档的 Tools 说明只提到 hunyuan-turbos、hunyuan-t1、hunyuan-functioncall）；原混元平台 2026-09-30 全面停服。来源：[cloud.tencent.com](https://cloud.tencent.com/document/api/1729/105701)、[cloud.tencent.com](https://cloud.tencent.com/document/product/1729/131925) |
| `coding-plans/tencent-token.json` | `hunyuan-2.0-thinking` | 套餐文档当前的可用模型里没有这个型号。来源：[cloud.tencent.com](https://cloud.tencent.com/document/product/1823/130060) |
| `coding-plans/tencent-token.json` | `hunyuan-t1` | 套餐文档当前的可用模型里没有这个型号。来源：[cloud.tencent.com](https://cloud.tencent.com/document/product/1823/130060) |
| `coding-plans/tencent-token.json` | `hunyuan-turbos` | 套餐文档当前的可用模型里没有这个型号。来源：[cloud.tencent.com](https://cloud.tencent.com/document/product/1823/130060) |
| `coding-plans/tencent-token.json` | `minimax-m2.5` | 套餐文档当前的可用模型里没有这个型号。来源：[cloud.tencent.com](https://cloud.tencent.com/document/product/1823/130060) |
| `coding-plans/tencent-token.json` | `kimi-k2.5` | 套餐文档当前的可用模型里没有这个型号。来源：[cloud.tencent.com](https://cloud.tencent.com/document/product/1823/130060) |
| `coding-plans/baidu-coding.json` | `deepseek-v4-flash` | 在 Coding Plan 可配置的 Model Name 里，但千帆 Function calling 文档的「支持模型范围」（2026-07-09）没有它。来源：[cloud.baidu.com](https://cloud.baidu.com/doc/qianfan/s/imlg0beiu)、[cloud.baidu.com](https://cloud.baidu.com/doc/qianfan-docs/s/xm95lyys5) |
| `coding-plans/baidu-coding.json` | `ernie-4.5-turbo-20260402` | 在 Coding Plan 可配置的 Model Name 里，但千帆 Function calling 文档的「支持模型范围」（2026-07-09）没有它。来源：[cloud.baidu.com](https://cloud.baidu.com/doc/qianfan/s/imlg0beiu)、[cloud.baidu.com](https://cloud.baidu.com/doc/qianfan-docs/s/xm95lyys5) |
| `coding-plans/baidu-coding.json` | `glm-5.1` | 在 Coding Plan 可配置的 Model Name 里，但千帆 Function calling 文档的「支持模型范围」（2026-07-09）没有它。来源：[cloud.baidu.com](https://cloud.baidu.com/doc/qianfan/s/imlg0beiu)、[cloud.baidu.com](https://cloud.baidu.com/doc/qianfan-docs/s/xm95lyys5) |
| `coding-plans/baidu-coding.json` | `kimi-k2.6` | Coding Plan 文档可配置的 Model Name 里没有这个型号。来源：[cloud.baidu.com](https://cloud.baidu.com/doc/qianfan/s/imlg0beiu) |
| `coding-plans/baidu-coding.json` | `minimax-m2.7` | Coding Plan 文档可配置的 Model Name 里没有这个型号。来源：[cloud.baidu.com](https://cloud.baidu.com/doc/qianfan/s/imlg0beiu) |
| `coding-plans/moorethread-coding.json` | `mt-coder` | 官方套餐指南只出现 GLM-4.7，没有 mt-coder 这个别名。来源：[docs.mthreads.com](https://docs.mthreads.com/kuaecloud/kuaecloud-doc-online/coding_plan/user_guide/) |
| `coding-plans/kwai-coding.json` | `kwai-coder` | 官方接入指南使用的模型 ID 是 kat-coder-pro-v2.5，没有 kwai-coder。来源：[www.streamlake.ai](https://www.streamlake.ai/document/DOC/mg6k6nlp8j6qxicx4c9) |

### 只在本仓未适配的接口上支持（2 条）

| 配置 | 型号 | 原因 |
| --- | --- | --- |
| `model-specs/openai.json` | `gpt-4o-realtime` | 官网的精确 ID 是 gpt-4o-realtime-preview；function_calling 只在 Realtime 端点提供，Chat Completions / Responses 为 Not supported。客户端没有 Realtime 适配器，Provider 已 tombstone 该型号。来源：[developers.openai.com](https://developers.openai.com/api/docs/models/gpt-4o-realtime-preview.md) |
| `providers/openai.json` | `gpt-realtime-2.1-mini` | 官网 Supported features 列有 function_calling，但只有 Realtime 端点为 Supported；本接入是 Chat Completions 协议，catalog 已标记该型号协议不受支持。来源：[developers.openai.com](https://developers.openai.com/api/docs/models/gpt-realtime-2.1-mini.md) |

### 官网读取失败（9 条）

| 配置 | 型号 | 原因 |
| --- | --- | --- |
| `model-specs/baichuan.json` | `Baichuan-M3-Plus` | 官网读取失败：curl、浏览器与抓取工具都在 TLS 握手阶段被对端断开，没有取得依据。来源：[platform.baichuan-ai.com](https://platform.baichuan-ai.com/docs/api) |
| `model-specs/baichuan.json` | `Baichuan-M3` | 官网读取失败：curl、浏览器与抓取工具都在 TLS 握手阶段被对端断开，没有取得依据。来源：[platform.baichuan-ai.com](https://platform.baichuan-ai.com/docs/api) |
| `model-specs/baichuan.json` | `Baichuan-M2-Plus` | 官网读取失败：curl、浏览器与抓取工具都在 TLS 握手阶段被对端断开，没有取得依据。来源：[platform.baichuan-ai.com](https://platform.baichuan-ai.com/docs/api) |
| `model-specs/baichuan.json` | `Baichuan-M2` | 官网读取失败：curl、浏览器与抓取工具都在 TLS 握手阶段被对端断开，没有取得依据。来源：[platform.baichuan-ai.com](https://platform.baichuan-ai.com/docs/api) |
| `providers/baichuan.json` | `Baichuan-M3-Plus` | 官网读取失败：curl、浏览器与抓取工具都在 TLS 握手阶段被对端断开，没有取得依据。来源：[platform.baichuan-ai.com](https://platform.baichuan-ai.com/docs/api) |
| `providers/baichuan.json` | `Baichuan-M3` | 官网读取失败：curl、浏览器与抓取工具都在 TLS 握手阶段被对端断开，没有取得依据。来源：[platform.baichuan-ai.com](https://platform.baichuan-ai.com/docs/api) |
| `providers/baichuan.json` | `Baichuan-M2-Plus` | 官网读取失败：curl、浏览器与抓取工具都在 TLS 握手阶段被对端断开，没有取得依据。来源：[platform.baichuan-ai.com](https://platform.baichuan-ai.com/docs/api) |
| `providers/baichuan.json` | `Baichuan-M2` | 官网读取失败：curl、浏览器与抓取工具都在 TLS 握手阶段被对端断开，没有取得依据。来源：[platform.baichuan-ai.com](https://platform.baichuan-ai.com/docs/api) |
| `coding-plans/infini-coding.json` | `deepseek-v3` | 官网本次读取失败（TLS 握手被断开）；2026-10-04 的重检记录其更新日志已删除该型号。来源：[docs.infini-ai.com](https://docs.infini-ai.com/changelog.html) |

## 地域与接入面差异

- `qwen-max`、`qwen-plus`、`qwen3-vl-plus`、`qwen3-vl-flash`：百炼型号页只在华北 2（北京）写支持 Function Calling，新加坡、法兰克福、弗吉尼亚、中国香港写不支持。共享规格按北京地域记；预置的 `provider-dashscope-001` 是北京兼容端点。用户自建的国际站接入会匹配到同一份规格，标签对它不适用。
- `gpt-oss-120b`：OpenAI 直连只有 Responses 端点，Chat Completions 为 Not supported；其他托管平台另核。
- `dashscope-coding` 的 `glm-4.7`：百炼 Function Calling 指南注明调用 GLM 系列要在请求里传 `tool_stream=true`，否则不返回 tool_calls。套餐端点是否同样要求没有核实。
- `ark-code-latest`、`tc-code-latest`：别名本身没有能力表，依据是套餐文档加同平台模型列表，证据强度低于逐型号写明的条目。

## 顺带看到、没有在本次处理的过期预置

以下是核对过程中读到的官方下线信息，本次只据此决定不改标签，没有修改生命周期或移除条目：

- 月之暗面：`moonshot-v1` 系列（含 vision-preview）与 `kimi-k2.5` 已于 2026-08-31 下线。
- 腾讯混元：`hunyuan-2.0-thinking-20251109`、`hunyuan-t1-latest`、`hunyuan-turbos-latest` 等旧版文生文模型 2026-06-22 下线，原混元平台 2026-09-30 全面停服；Token Plan 当前可用模型里已经没有 `hunyuan-2.0-thinking`、`hunyuan-t1`、`hunyuan-turbos`、`minimax-m2.5`、`kimi-k2.5`，`glm-5` 与 `glm-5.1` 公告 2026-10-09 下线。
- 火山方舟 Coding Plan：`doubao-seed-2.0-code`、`doubao-seed-2.0-pro`、`doubao-seed-code`、`glm-4.7`、`deepseek-v3.2`、`kimi-k2.5`、`glm-5.1`、`kimi-k2.6`、`minimax-m2.5`、`minimax-m2.7` 已下线，`doubao-seed-2.0-lite` 公告 2026-10-09 下线；方舟模型列表里也已经没有 `doubao-seed-1.6` 系列与 `deepseek-v3.2`。
- 百度千帆：Coding Plan 自 2026-07-13 停止新购，由 Token Plan 个人版接替（接入地址不同）；模型列表把 `ernie-x1.1` 标为即将下线。
- Perplexity：Sonar Chat Completions 的支持已于 2026-09-27 结束，同步与流式请求被改写为 Agent API 请求。
