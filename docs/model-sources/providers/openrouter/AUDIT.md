# openrouter：数据闭环核查

[供应商索引](README.md) · [官网证据](SOURCES.md) · [总体计划](../../../data-maintenance/PLAN.md)

核查日期：2026-10-03。本记录是维护任务清单，不替代单模型字段证明。

## 本轮结论

公共 Models API 中现有 15 个精确 ID 均列出；14 个固定模型的窗口、输出、USD/token 换算单价与本仓一致。auto 的 -1 保持动态计价。

auto 无固定输出上限证据，本仓 16384 属保守预设，不能宣称路由目标最大输出；账号权限/实际路由供应商需调用验证，不扩大本轮已核范围。

## 官方入口读取

| 来源 | 本次结果 | 读取说明 |
| --- | --- | --- |
| [openrouter-api](https://openrouter.ai/api/v1/models) | 正文已读取 | 764719 字节；摘要与 SOURCES.md 同步 |

## 完成边界

当前单接入面记录：15 条；pending 0、partial 15、historical 0。partial 只证明已列字段。

下一步按各 models 文件逐字段核实；有收费账号授权后做聚焦请求、流式、工具和费用验收。官网读取失败、页面壳与平台差异均不得自动提升为已核实。

## 本轮最终记录统计

本仓记录 15 条：pending 0、partial 15、historical 0；partial 中仅 ID 证明 0 条。此统计反映字段证明覆盖，不是账号调用或整条参数通过数量。
