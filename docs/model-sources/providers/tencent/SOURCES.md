# 腾讯混元：官网证据目录

[供应商索引](README.md)

核验日期：2026-10-03。这里只登记可复用的官网证据与适用边界，具体模型与接入面分别记录。

## 官网证据

### tencent

- 入口：[tencent](https://www.tencent.com/tencent-releases-and-open-sources-tencent-hy4-preview/)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`tencent 官方入口；具体地域与接入面待该页面逐字段确认`。

### tokenhub-model-list

- 入口：[tokenhub-model-list](https://cloud.tencent.com/document/product/1823/130051)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：腾讯云 TokenHub 模型列表；2026-10-05 只核对各型号「能力支持」是否含 Function Calling。

### tencent-token-plan-doc

- 入口：[tencent-token-plan-doc](https://cloud.tencent.com/document/product/1823/130060)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：腾讯云 Token Plan 个人版套餐文档；2026-10-05 只核对可用模型名单、Model ID 与适配工具。

## 已知边界与核验说明

已登记官方入口并尝试读取。表中仅标为已核字段的部分有此次核对记录；其余存量参数待逐字段复核。

2026-10-05 工具调用核对：以上 `tokenhub-model-list`、`tencent-token-plan-doc` 只用于核对函数 / 工具调用是否受支持，读取日期 2026-10-05；没有借此复核窗口、价格等其他字段，也没有做账号调用验收。能力标签里只有 `tool_use` 一项以这些来源为依据。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

## 2026-11-16 Hy4 正式版与 Flash 核对

TokenHub 官方模型列表明确 `hy4`、`hy4-flash`，均为 1M 总窗口、960k 最大输入、64k 最大输出，支持思考、结构化输出、Function Calling、缓存和图片理解。本批采用十进制保守换算 1000000/960000/64000；没有取得更精确整数。与 `hy4-preview` 分开；预览版公告停止日为 2026-12-07，当前尚未停止。

刊例价分别为 Hy4 CNY 6/18/cache 0.3，Flash CNY 0.5/2/cache 0.02 每百万 tokens；Hy4 五折至 2026-12-31 23:59:59（北京时间），Flash 五折至 2026-11-30 12:00:00。计价不写入共享规格。Token Plan 当前明确列出两型号且给出 `https://tokenhub.tencentmaas.com/plan/v3`，但本仓旧套餐端点与模型名单属于历史合同；不通过切换整组 baseUrl 迁移，也不据此向旧 Hunyuan Provider 增加型号。本批只补精确共享规格，OpenRouter 接入以其官方目录独立核验。未做账号调用。

### tokenhub-models-20261116

- 入口：[tokenhub-models-20261116](https://cloud.tencent.com/document/product/1823/130051)。
- 读取日期：2026-11-16；状态：`fetched`；最终地址：https://cloud.tencent.com/document/product/1823/130051。
- 适用范围：腾讯 TokenHub 当前模型身份、窗口/输入/输出和工具/视觉能力；不证明旧 Hunyuan 端点可用。

### tokenhub-pricing-20261116

- 入口：[tokenhub-pricing-20261116](https://cloud.tencent.com/document/product/1823/130055/)。
- 读取日期：2026-11-16；状态：`fetched`；最终地址：https://cloud.tencent.com/document/product/1823/130055/。
- 适用范围：腾讯 TokenHub 国内在线按量刊例价及 Hy4/Flash 各自五折结束时间；与订阅积分分开。

### tokenhub-token-plan-20261116

- 入口：[tokenhub-token-plan-20261116](https://cloud.tencent.com/document/product/1823/130060)。
- 读取日期：2026-11-16；状态：`fetched`；最终地址：https://cloud.tencent.com/document/product/1823/130060。
- 适用范围：腾讯当前 Token Plan 支持 Hy4/Flash 和新接入地址；旧套餐端点兼容性未核实。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "tencent",
  "checkedAt": "2026-10-03",
  "sources": [
    {
      "id": "tencent",
      "url": "https://www.tencent.com/tencent-releases-and-open-sources-tencent-hy4-preview/",
      "kind": "official-doc",
      "scope": "tencent 官方入口；具体地域与接入面待该页面逐字段确认",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "08770afd8e2b89d4c93be931d0a32b78e2eac1e97821ea86aa125305db5f085a",
      "resolvedUrl": "https://www.tencent.com/tencent-releases-and-open-sources-tencent-hy4-preview/"
    },
    {
      "id": "tokenhub-model-list",
      "url": "https://cloud.tencent.com/document/product/1823/130051",
      "kind": "official-doc",
      "scope": "腾讯云 TokenHub 模型列表；2026-10-05 只核对各型号「能力支持」是否含 Function Calling",
      "retrieval": "fetched",
      "checkedAt": "2026-10-05",
      "contentSha256": "ed3083e94bcf573f9b26d952197a7a1f363dc1a62295c50896d1a21d12abb8ae",
      "resolvedUrl": "https://cloud.tencent.com/document/product/1823/130051"
    },
    {
      "id": "tencent-token-plan-doc",
      "url": "https://cloud.tencent.com/document/product/1823/130060",
      "kind": "official-doc",
      "scope": "腾讯云 Token Plan 个人版套餐文档；2026-10-05 只核对可用模型名单、Model ID 与适配工具",
      "retrieval": "fetched",
      "checkedAt": "2026-10-05",
      "contentSha256": "f6e23cdd02bf3733791e6aafc60e9e263ecd4f1680f42f4a9e828b6ebc795054",
      "resolvedUrl": "https://cloud.tencent.com/document/product/1823/130060"
    },
    {
      "id": "tokenhub-models-20261116",
      "url": "https://cloud.tencent.com/document/product/1823/130051",
      "kind": "official-doc",
      "scope": "腾讯 TokenHub 当前模型身份、窗口/输入/输出和工具/视觉能力；不证明旧 Hunyuan 端点可用",
      "retrieval": "fetched",
      "checkedAt": "2026-11-16",
      "contentSha256": "ce76ca2478a38694804ee8d4bef0676bbfc084cc79eac19e67b81b97e9fbf521",
      "resolvedUrl": "https://cloud.tencent.com/document/product/1823/130051"
    },
    {
      "id": "tokenhub-pricing-20261116",
      "url": "https://cloud.tencent.com/document/product/1823/130055/",
      "kind": "official-doc",
      "scope": "腾讯 TokenHub 国内在线按量刊例价及 Hy4/Flash 各自五折结束时间；与订阅积分分开",
      "retrieval": "fetched",
      "checkedAt": "2026-11-16",
      "contentSha256": "30d75ab7e526e8358207820ed8b3b3c0b2fa34b8bbbb8d3e2f02d437fd52666c",
      "resolvedUrl": "https://cloud.tencent.com/document/product/1823/130055/"
    },
    {
      "id": "tokenhub-token-plan-20261116",
      "url": "https://cloud.tencent.com/document/product/1823/130060",
      "kind": "official-doc",
      "scope": "腾讯当前 Token Plan 支持 Hy4/Flash 和新接入地址；旧套餐端点兼容性未核实",
      "retrieval": "fetched",
      "checkedAt": "2026-11-16",
      "contentSha256": "eba2987c922e98ffa80f79605c0a088ffc8e6079230ccd1bd665b78d19217f09",
      "resolvedUrl": "https://cloud.tencent.com/document/product/1823/130060"
    }
  ]
}
```
<!-- source-metadata:end -->
