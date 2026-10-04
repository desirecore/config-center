# 阿里云百炼 / Qwen / Wan / HappyHorse：官网证据目录

[供应商索引](README.md)

核验日期：2026-10-03。这里只登记可复用的官网证据与适用边界，具体模型与接入面分别记录。

## 官网证据

### qwen-models

- 入口：[qwen-models](https://help.aliyun.com/zh/model-studio/models)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`alibaba 官方入口；具体地域与接入面待该页面逐字段确认`。
### qwen-pricing

- 入口：[qwen-pricing](https://help.aliyun.com/zh/model-studio/model-pricing)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`阿里云百炼多地域价格页；本轮填值采用北京 CNY`。
### qwen-omni

- 入口：[qwen-omni](https://help.aliyun.com/zh/model-studio/qwen3-8-omni-flash)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`百炼 Omni Flash 非实时 Chat Completions/Responses；文本输出`。
### qwen37-max

- 入口：[qwen37-max](https://help.aliyun.com/zh/model-studio/qwen3-7-max)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`百炼 Qwen3.7 Max；规格为正式版，北京 CNY 原价`。
### qwen-token-plan

- 入口：[qwen-token-plan](https://help.aliyun.com/zh/model-studio/token-plan-personal-overview)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`百炼个人 Token Plan；北京专用订阅接入`。
### qwen-coding

- 入口：[qwen-coding](https://help.aliyun.com/zh/model-studio/coding-plan)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`百炼旧 Coding Plan；与个人 Token Plan 分开`。
### glm53-alibaba

- 入口：[glm53-alibaba](https://www.alibabacloud.com/help/en/model-studio/glm-5-3)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`阿里云国际托管 GLM-5.3；不作为智谱直连价证据`。

### bailian-function-calling

- 入口：[bailian-function-calling](https://help.aliyun.com/zh/model-studio/qwen-function-calling)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：百炼 Function Calling 指南的支持模型清单；清单按系列列出、不分地域，地域差异以型号页为准。

### bailian-qwen-max-caps

- 入口：[bailian-qwen-max-caps](https://help.aliyun.com/zh/model-studio/qwen-max)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：百炼 qwen-max 型号页模型能力表；华北 2（北京）支持 Function Calling，新加坡（国际）不支持。

### bailian-qwen-plus-caps

- 入口：[bailian-qwen-plus-caps](https://help.aliyun.com/zh/model-studio/qwen-plus)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：百炼 qwen-plus 型号页模型能力表；华北 2（北京）支持 Function Calling，新加坡、法兰克福、弗吉尼亚、中国香港不支持。

### bailian-qwen3-vl-plus-caps

- 入口：[bailian-qwen3-vl-plus-caps](https://help.aliyun.com/zh/model-studio/qwen3-vl-plus)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：百炼 qwen3-vl-plus 型号页模型能力表；华北 2（北京）支持 Function Calling，新加坡、法兰克福、弗吉尼亚、中国香港不支持。

### bailian-qwen3-vl-flash-caps

- 入口：[bailian-qwen3-vl-flash-caps](https://help.aliyun.com/zh/model-studio/qwen3-vl-flash)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：百炼 qwen3-vl-flash 型号页模型能力表；华北 2（北京）支持 Function Calling，新加坡、法兰克福、弗吉尼亚不支持。

### bailian-glm-4-7-caps

- 入口：[bailian-glm-4-7-caps](https://help.aliyun.com/zh/model-studio/glm-4-7)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：百炼托管 glm-4.7 型号页模型能力表；不作为智谱直连证据。

### bailian-coding-plan-tools

- 入口：[bailian-coding-plan-tools](https://help.aliyun.com/zh/model-studio/coding-plan)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：百炼 Coding Plan 概述；2026-10-05 只核对支持模型名单与适用的编程工具。

## 已知边界与核验说明

Qwen3.7 Max 官网给出 1000000 上下文、131072 最大输出和北京 12/36 元价格，且明确纯文本。已合并两条冲突规格，并同步 API/Token Plan 输出值。Qwen Omni 是多模态输入、文本输出；图片价格按张。套餐支持名单单独引用 Token Plan 文档，不能由原厂型号存在推断套餐开放。

2026-10-05 工具调用核对：以上 `bailian-function-calling`、`bailian-qwen-max-caps`、`bailian-qwen-plus-caps`、`bailian-qwen3-vl-plus-caps`、`bailian-qwen3-vl-flash-caps`、`bailian-glm-4-7-caps`、`bailian-coding-plan-tools` 只用于核对函数 / 工具调用是否受支持，读取日期 2026-10-05；没有借此复核窗口、价格等其他字段，也没有做账号调用验收。能力标签里只有 `tool_use` 一项以这些来源为依据。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "alibaba",
  "checkedAt": "2026-10-03",
  "sources": [
    {
      "id": "qwen-models",
      "url": "https://help.aliyun.com/zh/model-studio/models",
      "kind": "official-doc",
      "scope": "alibaba 官方入口；具体地域与接入面待该页面逐字段确认",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "7cc566ed4c74de59c8541e2433fc64865d7bc18f7159dca8342adbe93dd4b043",
      "resolvedUrl": "https://help.aliyun.com/zh/model-studio/models"
    },
    {
      "id": "qwen-pricing",
      "url": "https://help.aliyun.com/zh/model-studio/model-pricing",
      "kind": "official-doc",
      "scope": "阿里云百炼多地域价格页；本轮填值采用北京 CNY",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "108d8d56626e60f4e41b56be421161b9203714dd001d5e026941bbf6d0a83778",
      "resolvedUrl": "https://help.aliyun.com/zh/model-studio/model-pricing"
    },
    {
      "id": "qwen-omni",
      "url": "https://help.aliyun.com/zh/model-studio/qwen3-8-omni-flash",
      "kind": "official-doc",
      "scope": "百炼 Omni Flash 非实时 Chat Completions/Responses；文本输出",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "9d8699565c08178ff4bd274a6a12db1512be49f1b337d7909a5f4ecde08ce4cf",
      "resolvedUrl": "https://help.aliyun.com/zh/model-studio/qwen3-8-omni-flash"
    },
    {
      "id": "qwen37-max",
      "url": "https://help.aliyun.com/zh/model-studio/qwen3-7-max",
      "kind": "official-doc",
      "scope": "百炼 Qwen3.7 Max；规格为正式版，北京 CNY 原价",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "684c403bacce3df61f1236d5a767ffa23c33dcfd592cb74fdb7bcab8d6470bb0",
      "resolvedUrl": "https://help.aliyun.com/zh/model-studio/qwen3-7-max"
    },
    {
      "id": "qwen-token-plan",
      "url": "https://help.aliyun.com/zh/model-studio/token-plan-personal-overview",
      "kind": "official-doc",
      "scope": "百炼个人 Token Plan；北京专用订阅接入",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "a052621a333141bb5ad398947ac7faabe2ea29cf02e4abfbfbdf338e682250f0",
      "resolvedUrl": "https://help.aliyun.com/zh/model-studio/token-plan-personal-overview"
    },
    {
      "id": "qwen-coding",
      "url": "https://help.aliyun.com/zh/model-studio/coding-plan",
      "kind": "official-doc",
      "scope": "百炼旧 Coding Plan；与个人 Token Plan 分开",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "0b562dca023c551b9befc04a8afa14b8ab4d2d549ba5c34e34413c6f5ccd910d",
      "resolvedUrl": "https://help.aliyun.com/zh/model-studio/coding-plan"
    },
    {
      "id": "glm53-alibaba",
      "url": "https://www.alibabacloud.com/help/en/model-studio/glm-5-3",
      "kind": "official-doc",
      "scope": "阿里云国际托管 GLM-5.3；不作为智谱直连价证据",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "10220b6d17ba456d7370f05953dff5fd9ee701d09a59002e87623221f15d3792",
      "resolvedUrl": "https://www.alibabacloud.com/help/en/model-studio/glm-5-3"
    },
    {
      "id": "bailian-function-calling",
      "url": "https://help.aliyun.com/zh/model-studio/qwen-function-calling",
      "kind": "official-doc",
      "scope": "百炼 Function Calling 指南的支持模型清单；清单按系列列出、不分地域，地域差异以型号页为准",
      "retrieval": "fetched",
      "checkedAt": "2026-10-05",
      "contentSha256": "eaa582b988cb485c01f2f76ca307c5874a1115fc4313be1aa009f44bc3aa17fd",
      "resolvedUrl": "https://help.aliyun.com/zh/model-studio/qwen-function-calling"
    },
    {
      "id": "bailian-qwen-max-caps",
      "url": "https://help.aliyun.com/zh/model-studio/qwen-max",
      "kind": "official-doc",
      "scope": "百炼 qwen-max 型号页模型能力表；华北 2（北京）支持 Function Calling，新加坡（国际）不支持",
      "retrieval": "fetched",
      "checkedAt": "2026-10-05",
      "contentSha256": "a447759fba7a97afd75b9465cf45f7a8d90dfb26176bdc26c53a685688a0b857",
      "resolvedUrl": "https://help.aliyun.com/zh/model-studio/qwen-max"
    },
    {
      "id": "bailian-qwen-plus-caps",
      "url": "https://help.aliyun.com/zh/model-studio/qwen-plus",
      "kind": "official-doc",
      "scope": "百炼 qwen-plus 型号页模型能力表；华北 2（北京）支持 Function Calling，新加坡、法兰克福、弗吉尼亚、中国香港不支持",
      "retrieval": "fetched",
      "checkedAt": "2026-10-05",
      "contentSha256": "cc82b2d5846d87b1745a628cdcf6613cb80c9e54a51dd1694515c7d35d64db1b",
      "resolvedUrl": "https://help.aliyun.com/zh/model-studio/qwen-plus"
    },
    {
      "id": "bailian-qwen3-vl-plus-caps",
      "url": "https://help.aliyun.com/zh/model-studio/qwen3-vl-plus",
      "kind": "official-doc",
      "scope": "百炼 qwen3-vl-plus 型号页模型能力表；华北 2（北京）支持 Function Calling，新加坡、法兰克福、弗吉尼亚、中国香港不支持",
      "retrieval": "fetched",
      "checkedAt": "2026-10-05",
      "contentSha256": "193ff38139e8f7cf99fae00b67c8b5876c1c0df68011ae8fa0030e24d777d830",
      "resolvedUrl": "https://help.aliyun.com/zh/model-studio/qwen3-vl-plus"
    },
    {
      "id": "bailian-qwen3-vl-flash-caps",
      "url": "https://help.aliyun.com/zh/model-studio/qwen3-vl-flash",
      "kind": "official-doc",
      "scope": "百炼 qwen3-vl-flash 型号页模型能力表；华北 2（北京）支持 Function Calling，新加坡、法兰克福、弗吉尼亚不支持",
      "retrieval": "fetched",
      "checkedAt": "2026-10-05",
      "contentSha256": "657d5c0c935568ad9153f3bd32ecc498de389cc2bb7614f9aa4dcc03f3a9777d",
      "resolvedUrl": "https://help.aliyun.com/zh/model-studio/qwen3-vl-flash"
    },
    {
      "id": "bailian-glm-4-7-caps",
      "url": "https://help.aliyun.com/zh/model-studio/glm-4-7",
      "kind": "official-doc",
      "scope": "百炼托管 glm-4.7 型号页模型能力表；不作为智谱直连证据",
      "retrieval": "fetched",
      "checkedAt": "2026-10-05",
      "contentSha256": "b34aa5913f4a963f8580193b441af15baf6157d6f4a564263b26641d0f6765a9",
      "resolvedUrl": "https://help.aliyun.com/zh/model-studio/glm-4-7"
    },
    {
      "id": "bailian-coding-plan-tools",
      "url": "https://help.aliyun.com/zh/model-studio/coding-plan",
      "kind": "official-doc",
      "scope": "百炼 Coding Plan 概述；2026-10-05 只核对支持模型名单与适用的编程工具",
      "retrieval": "fetched",
      "checkedAt": "2026-10-05",
      "contentSha256": "21bb14508f06ea365a249f572b652e6424dcc2055d3e49c55b4af2448d3fcec8",
      "resolvedUrl": "https://help.aliyun.com/zh/model-studio/coding-plan"
    }
  ]
}
```
<!-- source-metadata:end -->
