# github-copilot：数据闭环核查

[供应商索引](README.md) · [官网证据](SOURCES.md) · [总体计划](../../../data-maintenance/PLAN.md)

核查日期：2026-10-03。本记录是维护任务清单，不替代单模型字段证明。

## 本轮结论

本次官方支持型号文档可读取，但产品支持列表不等于每个订阅账号的 /models 结果。

保持登录后动态发现。验收需按订阅/组织策略读取官方认证模型目录并验证 endpoint，不能预置整个官网列表。

## 官方入口读取

| 来源 | 本次结果 | 读取说明 |
| --- | --- | --- |
| [copilot](https://docs.github.com/en/copilot/reference/ai-models/supported-models) | 正文已读取 | 415569 字节；摘要与 SOURCES.md 同步 |

## 完成边界

当前单接入面记录：0 条；pending 0、partial 0、historical 0。partial 只证明已列字段。

下一步按各 models 文件逐字段核实；有收费账号授权后做聚焦请求、流式、工具和费用验收。官网读取失败、页面壳与平台差异均不得自动提升为已核实。

## 本轮最终记录统计

本仓记录 0 条：pending 0、partial 0、historical 0；partial 中仅 ID 证明 0 条。此统计反映字段证明覆盖，不是账号调用或整条参数通过数量。
