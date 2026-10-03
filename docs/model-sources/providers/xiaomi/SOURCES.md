# 小米 MiMo：官网证据目录

[供应商索引](README.md)

核验日期：2026-10-03。这里只登记可复用的官网证据与适用边界，具体模型与接入面分别记录。

## 官网证据

### xiaomi

- 入口：[xiaomi](https://mimo.mi.com/docs/en-US/news/latest/v2-6)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`xiaomi 官方入口；具体地域与接入面待该页面逐字段确认`。

### xiaomi-models

- 入口：[xiaomi-models](https://mimo.mi.com/docs/en-US/quick-start/summary/model)
- 本轮实际读取正文；MiMo API 模型目录；窗口/输出K换算取现有二进制K，1M按百万。

### xiaomi-price

- 入口：[xiaomi-price](https://mimo.mi.com/docs/en-US/price/pay-as-you-go)
- 本轮实际读取正文；国内实时API CNY/M 与海外USD/M 分表；不是Token Plan额度。

### xiaomi-plan

- 入口：[xiaomi-plan](https://mimo.mi.com/docs/en-US/tokenplan/Token%20Plan/subscription)
- 本轮实际读取正文；MiMo Token Plan独立Credit额度和编程工具限制。

## 已知边界与核验说明

已登记官方入口并尝试读取。表中仅标为已核字段的部分有此次核对记录；其余存量参数待逐字段复核。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

## 2026-10-03 字段复核：xiaomi-models

目录明示当前文本型号1M上下文、128K输出，ASR 8K/2K，TTS 8K/8K。1M采用1000000，128K采用131072、8K8192、2K2048；短写换算是明确的本仓约定，精确整数与API响应仍需进一步核实。V2.5两型号北京时间2026-10-21 10:00退役；未到期不删除历史模型。

## 2026-10-03 字段复核：xiaomi-price

实际读取国内实时单价：Pro 3/6/cache0.025，Flash1/2/cache0.02，UltraSpeed30/60/cache0.25；V2.5-Pro沿用Pro单价。ASR按小时、TTS限时免费、Batch价格不同，不能套入每百万token字段。

## 2026-10-03 字段复核：xiaomi-plan

明确列8个模型，套餐与普通API余额不互通；没有UltraSpeed。仅提升实际列出的套餐modelName证明，不把API价格/窗口直接作为套餐合同。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "xiaomi",
  "checkedAt": "2026-10-03",
  "sources": [
    {
      "id": "xiaomi",
      "url": "https://mimo.mi.com/docs/en-US/news/latest/v2-6",
      "kind": "official-doc",
      "scope": "xiaomi 官方入口；具体地域与接入面待该页面逐字段确认",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "101d0e7233e16966073506c525bc95ae192b906eb7d2e31659598e04b22a94b0",
      "resolvedUrl": "https://mimo.mi.com/docs/en-US/news/latest/v2-6"
    },
    {
      "id": "xiaomi-models",
      "url": "https://mimo.mi.com/docs/en-US/quick-start/summary/model",
      "kind": "official-doc",
      "scope": "MiMo API 模型目录；窗口/输出K换算取现有二进制K，1M按百万",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "b1237c793e11793d5b0dfc7451af0c0efe8319bdca6b8be2720ace532dfe93be",
      "resolvedUrl": "https://mimo.mi.com/docs/en-US/quick-start/summary/model"
    },
    {
      "id": "xiaomi-price",
      "url": "https://mimo.mi.com/docs/en-US/price/pay-as-you-go",
      "kind": "official-doc",
      "scope": "国内实时API CNY/M 与海外USD/M 分表；不是Token Plan额度",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "d0292517cfd66072dc8d11bda632aa0bb9f21e9f295b6e5a9129b404a4b62319",
      "resolvedUrl": "https://mimo.mi.com/docs/en-US/price/pay-as-you-go"
    },
    {
      "id": "xiaomi-plan",
      "url": "https://mimo.mi.com/docs/en-US/tokenplan/Token%20Plan/subscription",
      "kind": "official-doc",
      "scope": "MiMo Token Plan独立Credit额度和编程工具限制",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "757af8dfd5c3ec8ab8576349e072489fc2bcf2ab436ed9f427e21ca8a44a335c",
      "resolvedUrl": "https://mimo.mi.com/docs/en-US/tokenplan/Token%20Plan/subscription"
    }
  ]
}
```
<!-- source-metadata:end -->
