# 本仓策略：历史依据未明确单列

[缺口总目录](README.md)

产品策略不需要伪装为供应商官网事实，但应能追溯批准或评估依据。当前配置保留原值，本表不新增批准记录。

| 数据 | 当前值/选择 | 尚未明确的来源 | 后续补证 |
| --- | --- | --- | --- |
| markupRatio | 1.5 | 历史批准依据、生效时间和适用范围未登记 | 由结算负责人确认加价系数及单位/舍入规则，见[计价策略](../data-sources/policies/pricing.md) |
| usdToCny | 7.2 | 固定折算假设的取值/批准依据未登记，不能视为实时汇率 | 确认是固定结算假设还是跟踪市场，记录取值来源、日期和生效范围，见[计价策略](../data-sources/policies/pricing.md) |
| service-map 默认模型 | 现有 GPT-5.4 Mini/Nano、Sonnet 5 等 | 默认保留/升级的质量、费用、延迟评测与选择理由尚待补齐 | 建立代表性任务评测，记录同接入面的测量结果与决策；配置快照和引用有效性只证明仓内一致，见[默认策略](../data-sources/policies/service-map.md) |

运行时官网归档与摘要已有记录；Python 推荐与 Hatch pin 的差异属于客户端安装契约待验收，见[依赖清单](../data-maintenance/CLIENT-DEPENDENCIES.md)，不列为“没有官网来源”。
