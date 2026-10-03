# 计价策略

markupRatio=1.5 为仓库产品加价系数；usdToCny=7.2 为现有固定美元折人民币结算假设，不能称为实时市场汇率，也不是供应商原价。历史批准依据与生效日期未记录，本次保留原值，不补造批准记录。

变更前确认结算负责人给出的系数、币种、是否追踪市场、取值来源/日期及生效范围；核对上下游舍入与单位，评估旧客户端影响并更新 manifest。每次计价变更和全供应商刷新时复查，本次未从汇率网站自动替换。

<!-- data-source:start -->
```json
{
  "kind": "policy",
  "config": "compute/pricing.json",
  "checkedAt": "2026-10-03",
  "status": "policy",
  "claims": {
    "markupRatio": 1.5,
    "usdToCny": 7.2
  }
}
```
<!-- data-source:end -->
