# DeepSeek：官网证据目录

[供应商索引](README.md)

核验日期：2026-10-03。这里只登记可复用的官网证据与适用边界，具体模型与接入面分别记录。

## 官网证据

### deepseek-pricing

- 入口：[deepseek-pricing](https://api-docs.deepseek.com/zh-cn/quick_start/pricing/)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`DeepSeek 国内 CNY 按量 API；峰谷价格分别列出`。
### deepseek-thinking

- 入口：[deepseek-thinking](https://api-docs.deepseek.com/guides/thinking_mode/)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`DeepSeek 原厂 Chat/Anthropic/Responses 的思考合同`。

## 已知边界与核验说明

已登记官方入口并尝试读取。表中仅标为已核字段的部分有此次核对记录；其余存量参数待逐字段复核。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

官网窗口/输出使用 1M/384K 简写，本仓保留十进制 1000000/384000 的保守解释；不是官网返回的逐 token 精确整数。若未来 API 返回明文上限，应以对应接入面的明文值复核。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "deepseek",
  "checkedAt": "2026-10-03",
  "sources": [
    {
      "id": "deepseek-pricing",
      "url": "https://api-docs.deepseek.com/zh-cn/quick_start/pricing/",
      "kind": "official-doc",
      "scope": "DeepSeek 国内 CNY 按量 API；峰谷价格分别列出",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "5a7b1832592387340f2fc456399b34b89b05f3fa167c2e35909e2fa4afe021e3",
      "resolvedUrl": "https://api-docs.deepseek.com/zh-cn/quick_start/pricing/"
    },
    {
      "id": "deepseek-thinking",
      "url": "https://api-docs.deepseek.com/guides/thinking_mode/",
      "kind": "official-doc",
      "scope": "DeepSeek 原厂 Chat/Anthropic/Responses 的思考合同",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "35350389e59872d3733f7b7f99f5485c6cbc95f1bc2a71a47ba3ecf30bd7a060",
      "resolvedUrl": "https://api-docs.deepseek.com/guides/thinking_mode/"
    }
  ]
}
```
<!-- source-metadata:end -->
