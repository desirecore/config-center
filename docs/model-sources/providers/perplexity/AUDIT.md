# perplexity：数据闭环核查

[供应商索引](README.md) · [官网证据](SOURCES.md) · [总体计划](../../../data-maintenance/PLAN.md)

核查日期：2026-10-03。本记录是维护任务清单，不替代单模型字段证明。

## 本轮结论

官网迁移页说明 Sonar 同步/流式请求由平台逐步重写为 Agent API，旧异步模式不再支持；Agent API 用 input/output 和 preset。

保留现有同步兼容型号，不将其直接改成 Agent 型号。需客户端支持 /v1/agent、typed output、search_results、背景任务、工具事件和 preset 语义后再登记独立 Provider。

## 官方入口读取

| 来源 | 本次结果 | 读取说明 |
| --- | --- | --- |
| [perplexity](https://docs.perplexity.ai/docs/agent-api/migrate-from-sonar/overview) | 正文已读取 | 10483 字节；摘要与 SOURCES.md 同步 |

## 完成边界

当前单接入面记录：6 条；pending 4、partial 2、historical 0。partial 只证明已列字段。

下一步按各 models 文件逐字段核实；有收费账号授权后做聚焦请求、流式、工具和费用验收。官网读取失败、页面壳与平台差异均不得自动提升为已核实。

## 本轮最终记录统计

本仓记录 6 条：pending 4、partial 2、historical 0；partial 中仅 ID 证明 2 条。此统计反映字段证明覆盖，不是账号调用或整条参数通过数量。
