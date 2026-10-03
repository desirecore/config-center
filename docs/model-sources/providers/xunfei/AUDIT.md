# xunfei：数据闭环核查

[供应商索引](README.md) · [官网证据](SOURCES.md) · [总体计划](../../../data-maintenance/PLAN.md)

核查日期：2026-10-03。本记录是维护任务清单，不替代单模型字段证明。

## 本轮结论

X2 官方 HTTP 文档明确 /x2/chat/completions、spark-x、65536 输入、131072 输出和采样默认值。旧 /v1 与 X2 不能混用。

新增独立 X2 接入，旧 Provider 保留 Ultra 并 tombstone 错放的 spark-x；修正共享规格和展示名。实际账号调用、动态 thinking 请求转译仍需客户端验收；不声称旧 Ultra 参数已核。

## 官方入口读取

| 来源 | 本次结果 | 读取说明 |
| --- | --- | --- |
| [xunfei](https://www.xfyun.cn/doc/spark/X1http.html) | 正文已读取 | 121939 字节；摘要与 SOURCES.md 同步 |

## 完成边界

当前单接入面记录：4 条；pending 2、partial 2、historical 0。partial 只证明已列字段。

下一步按各 models 文件逐字段核实；有收费账号授权后做聚焦请求、流式、工具和费用验收。官网读取失败、页面壳与平台差异均不得自动提升为已核实。

## 本轮最终记录统计

本仓记录 4 条：pending 2、partial 2、historical 0；partial 中仅 ID 证明 0 条。此统计反映字段证明覆盖，不是账号调用或整条参数通过数量。

总窗口未公开：现有 contextWindow=65536 是保守输入预算，不是官网总窗口证明；字段级引用已移除该证明。独立 maxInput 表达需客户端支持后再声明。
