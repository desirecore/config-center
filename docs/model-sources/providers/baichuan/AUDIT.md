# baichuan：数据闭环核查

[供应商索引](README.md) · [官网证据](SOURCES.md) · [总体计划](../../../data-maintenance/PLAN.md)

核查日期：2026-10-03。本记录是维护任务清单，不替代单模型字段证明。

## 本轮结论

本次原官网入口仍发生 TLS EOF，未取得正文。

按官方可读取的模型/API 文档补上下文、输出、价格和版本；当前 8 条 pending 不提高状态，不以第三方替代。

## 官方入口读取

| 来源 | 本次结果 | 读取说明 |
| --- | --- | --- |
| [baichuan](https://www.baichuan-ai.com/blog/baichuan-M3) | 读取失败 | <urlopen error [SSL: UNEXPECTED_EOF_WHILE_READING] EOF occurred in violation of protocol (_ssl.c:1081)> |

## 完成边界

当前单接入面记录：8 条；pending 8、partial 0、historical 0。partial 只证明已列字段。

下一步按各 models 文件逐字段核实；有收费账号授权后做聚焦请求、流式、工具和费用验收。官网读取失败、页面壳与平台差异均不得自动提升为已核实。

## 本轮最终记录统计

本仓记录 8 条：pending 8、partial 0、historical 0；partial 中仅 ID 证明 0 条。此统计反映字段证明覆盖，不是账号调用或整条参数通过数量。
