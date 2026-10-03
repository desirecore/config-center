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

## 已知边界与核验说明

Qwen3.7 Max 官网给出 1000000 上下文、131072 最大输出和北京 12/36 元价格，且明确纯文本。已合并两条冲突规格，并同步 API/Token Plan 输出值。Qwen Omni 是多模态输入、文本输出；图片价格按张。套餐支持名单单独引用 Token Plan 文档，不能由原厂型号存在推断套餐开放。

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
    }
  ]
}
```
<!-- source-metadata:end -->
