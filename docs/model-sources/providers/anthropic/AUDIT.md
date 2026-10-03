# anthropic：数据闭环核查

[供应商索引](README.md) · [官网证据](SOURCES.md) · [总体计划](../../../data-maintenance/PLAN.md)

核查日期：2026-10-03。本记录是维护任务清单，不替代单模型字段证明。

## 本轮结论

原厂 API 的窗口、最大输出、标准 USD 价格与默认 effort 按型号文档复核；订阅权限和资源预算不借用直连证据。

移除 Sonnet 5.5 中与嵌套 high 默认冲突的旧 extra.defaultEffort。历史型号的单独文档、完整 effort 表和真实订阅调用仍须分别核查。

## 官方入口读取

| 来源 | 本次结果 | 读取说明 |
| --- | --- | --- |
| [claude-models](https://platform.claude.com/docs/en/models/overview.md) | 正文已读取 | 17143 字节；摘要与 SOURCES.md 同步 |
| [claude-opus55](https://platform.claude.com/docs/en/models/opus-5-5/overview.md) | 正文已读取 | 14275 字节；摘要与 SOURCES.md 同步 |
| [claude-sonnet55](https://platform.claude.com/docs/en/models/sonnet-5-5/overview.md) | 正文已读取 | 14476 字节；摘要与 SOURCES.md 同步 |

## 完成边界

当前单接入面记录：21 条；pending 6、partial 15、historical 0。partial 只证明已列字段。

下一步按各 models 文件逐字段核实；有收费账号授权后做聚焦请求、流式、工具和费用验收。官网读取失败、页面壳与平台差异均不得自动提升为已核实。

## 本轮最终记录统计

本仓记录 21 条：pending 6、partial 15、historical 0；partial 中仅 ID 证明 3 条。此统计反映字段证明覆盖，不是账号调用或整条参数通过数量。
