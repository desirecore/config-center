# Mistral：2026-10-03 数据核验与后续计划

[官网证据](SOURCES.md) · [供应商模型索引](README.md)

## 本轮完成

再次实读Medium3.5、Small4、Large3官网，保留此前已核价格，刷新实际读取的来源内容摘要。补读Codestral2508独立官网页：输入0.3、输出0.9美元/百万tokens，与现有Provider价格一致，增加该字段证明。没有凭128k/256k简写提高精确token窗口状态。

## 待完成与验收标准

| 事项 | 当前边界 | 下一步与完成条件 |
| --- | --- | --- |
| latest别名 | 官方页展示日期版本，既有Provider使用latest | 读取官方Models API或明确alias表确认当前解析，不凭最新发布日期推断alias |
| 精确窗口 | 当前有256000/262144不同换算 | 取得明文整数或API元数据并同步Provider/shared spec；不把简写当精确值 |
| 输出限制 | Codestral旧32768及其他型号未完整核 | 逐模型取得输出限额，未知维持待核 |
| 推理/采样 | hybrid支持不等于每种网关接受同一effort | 核具体API的reasoning、temperature及工具行为；不只迁移键名 |
| 生命周期 | 旧版本与新latest不能混成一个family | 保持精确匹配，读取官方退役公告后再删除、tombstone |

本轮未做账号请求；仅确认标注字段。

## 本轮最终记录统计

本仓记录 9 条：pending 4、partial 5、historical 0；partial 中仅 ID 证明 0 条。此统计反映字段证明覆盖，不是账号调用或整条参数通过数量。
