# 官网缺失与来源不明：独立清单

本清单只汇总当前仓内证据状态，不声称本轮重新搜索官网。数据主文件和来源状态不变；同一模型在 API、订阅、套餐与共享规格分别计数。

供应商官网入口均已登记；“没有找到供应商官网”目前没有已登记案例。能明确单列的是官网入口读取失败/页面壳、未取得型号专属规格或身份揭示证据，以及缺少字段级证明。不能把这些情况混为“没有官网”。

- 未登记官方入口：**0 条**。
- 未取得可读官网证据：**87 条**。
- 入口有读取记录，但本条模型无字段证明：**185 条**。
- 仅确认 ID，参数来源未登记：**216 条**。
- 已有部分参数证明，仍需区分未证明字段：**137 条**。
- 历史身份/参数不证明当前可用性：**1 条**。

总计 626 条：前四类需要补证；partial 类逐条列出已有数据中尚未登记证明的关键字段，不能全部当作数据已核；historical 另列。

| 供应商清单 | 未登记入口 | 入口不可读 | 无字段证明 | 仅 ID | 参数部分已核 | 历史 |
| --- | --- | --- | --- | --- | --- | --- |
| [alibaba](providers/alibaba.md) | 0 | 0 | 15 | 98 | 7 | 0 |
| [anthropic](providers/anthropic.md) | 0 | 0 | 6 | 3 | 12 | 0 |
| [baichuan](providers/baichuan.md) | 0 | 8 | 0 | 0 | 0 | 0 |
| [baidu](providers/baidu.md) | 0 | 0 | 5 | 13 | 2 | 0 |
| [cohere](providers/cohere.md) | 0 | 0 | 0 | 9 | 8 | 0 |
| [deepseek](providers/deepseek.md) | 0 | 0 | 3 | 5 | 4 | 0 |
| [github-copilot](providers/github-copilot.md) | 0 | 0 | 0 | 0 | 0 | 0 |
| [google](providers/google.md) | 0 | 0 | 2 | 8 | 20 | 0 |
| [infini](providers/infini.md) | 0 | 1 | 0 | 0 | 0 | 0 |
| [kling](providers/kling.md) | 0 | 11 | 0 | 0 | 0 | 0 |
| [kwai](providers/kwai.md) | 0 | 0 | 1 | 0 | 0 | 0 |
| [minimax](providers/minimax.md) | 0 | 0 | 12 | 39 | 16 | 0 |
| [mistral](providers/mistral.md) | 0 | 0 | 4 | 0 | 5 | 0 |
| [moonshot](providers/moonshot.md) | 0 | 0 | 14 | 0 | 7 | 0 |
| [moorethread](providers/moorethread.md) | 0 | 1 | 0 | 0 | 0 | 0 |
| [ollama](providers/ollama.md) | 0 | 0 | 1 | 0 | 0 | 0 |
| [openai](providers/openai.md) | 0 | 0 | 71 | 10 | 17 | 0 |
| [openrouter](providers/openrouter.md) | 0 | 0 | 0 | 0 | 15 | 0 |
| [perplexity](providers/perplexity.md) | 0 | 0 | 4 | 2 | 0 | 0 |
| [siliconflow](providers/siliconflow.md) | 0 | 0 | 3 | 0 | 0 | 0 |
| [stability](providers/stability.md) | 0 | 0 | 3 | 0 | 0 | 0 |
| [stealth](providers/stealth.md) | 0 | 0 | 0 | 0 | 0 | 1 |
| [tencent](providers/tencent.md) | 0 | 0 | 23 | 1 | 1 | 0 |
| [volcengine](providers/volcengine.md) | 0 | 66 | 0 | 0 | 0 | 0 |
| [xai](providers/xai.md) | 0 | 0 | 5 | 3 | 1 | 0 |
| [xiaomi](providers/xiaomi.md) | 0 | 0 | 8 | 7 | 10 | 0 |
| [xunfei](providers/xunfei.md) | 0 | 0 | 2 | 0 | 2 | 0 |
| [zhipu](providers/zhipu.md) | 0 | 0 | 3 | 18 | 10 | 0 |

另外单列：[型号/身份专属证据缺口](identities.md)、[非模型 API 证据不足](api-contracts.md)、[本仓策略历史依据缺失](policy-origins.md)。供应商记录详见上述细分文件，不在总目录堆全部模型。

更新来源登记后运行 `npm run sources:gaps` 重新生成本目录及供应商清单；`npm run sources:gaps:check` 检查是否过期。生成器不会增加已核字段、改来源状态或写入主数据。
