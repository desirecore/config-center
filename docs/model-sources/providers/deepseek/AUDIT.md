# DeepSeek：2026-10-03 数据核验与后续计划

[官网证据](SOURCES.md) · [供应商模型索引](README.md)

本轮清除共享DeepSeekV4Flash0731中的网关effort旧字段；接入合同由Provider定义，已有路由策略保持。百炼TokenPlan并列旧字段删除，保留已生效high/max矩阵，不把原厂档位抄入套餐。

| 待完成 | 验收标准 |
| --- | --- |
| 动态原厂flash身份 | 当前官方API参考使用deepseek-flash，核与固定0731/V4.1身份差异，不跨代合并 |
| 百炼输出393216与历史384000 | 百炼按量官方明确393216，但套餐合同独立；先核套餐表再改，不直接套原厂spec |
| 原厂1M/384K精确换算 | 取得Models API明文整数，区别输入/总窗口/输出与thinking共享预算 |
| 旧chat/reasoner生命周期 | 官方change log已列退役计划，更新前确认当前可用性、映射与tombstone |

没有账号调用；本轮字段删除不提高未知参数的来源状态。

## 本轮最终记录统计

本仓记录 12 条：pending 3、partial 9、historical 0；partial 中仅 ID 证明 5 条。此统计反映字段证明覆盖，不是账号调用或整条参数通过数量。
