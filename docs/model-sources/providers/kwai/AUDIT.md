# kwai：数据闭环核查

[供应商索引](README.md) · [官网证据](SOURCES.md) · [总体计划](../../../data-maintenance/PLAN.md)

核查日期：2026-10-03。本记录是维护任务清单，不替代单模型字段证明。

## 本轮结论

可读取的是 StreamLake 国际 Coding Plan，与国内 wanqing 别名并非同一合同。

补国内 endpoint/modelName 映射及人民币价格，或单独建国际接入；国际价格不能覆盖国内现值。

## 官方入口读取

| 来源 | 本次结果 | 读取说明 |
| --- | --- | --- |
| [kwai-current](https://www.streamlake.ai/document/DOC/mg6k6nlp8j6qxicx4c9) | 正文已读取 | 217736 字节；摘要与 SOURCES.md 同步 |

## 完成边界

当前单接入面记录：1 条；pending 1、partial 0、historical 0。partial 只证明已列字段。

下一步按各 models 文件逐字段核实；有收费账号授权后做聚焦请求、流式、工具和费用验收。官网读取失败、页面壳与平台差异均不得自动提升为已核实。

## 本轮最终记录统计

本仓记录 1 条：pending 1、partial 0、historical 0；partial 中仅 ID 证明 0 条。此统计反映字段证明覆盖，不是账号调用或整条参数通过数量。
