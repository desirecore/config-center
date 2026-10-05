# 智谱：官网证据目录

[供应商索引](README.md)

核验日期：2026-10-03。这里只登记可复用的官网证据与适用边界，具体模型与接入面分别记录。

## 官网证据

### glm53

- 入口：[glm53](https://docs.bigmodel.cn/cn/guide/models/text/glm-5.3.md)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`智谱原厂 GLM-5.3 参数；套餐与账号权限独立核对`。
### glm53-flash

- 入口：[glm53-flash](https://docs.bigmodel.cn/cn/guide/models/vlm/glm-5.3-flash.md)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`智谱原厂 Flash/FlashX 参数及中国区套餐限制`。
### glm-pricing

- 入口：[glm-pricing](https://docs.bigmodel.cn/cn/guide/start/pricing.md)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`智谱中国区按量 API；CNY 标准价，不含限时折扣`。
### glm-plan

- 入口：[glm-plan](https://docs.bigmodel.cn/cn/coding-plan/latest-model.md)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`中国区 GLM Coding Plan 文档；国际 api.z.ai 可用性另核`。

### glm52-cn-api

- 入口：[glm52-cn-api](https://docs.bigmodel.cn/api-reference/%E6%A8%A1%E5%9E%8B-api/%E5%AF%B9%E8%AF%9D%E8%A1%A5%E5%85%A8.md)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：智谱中国原厂通用 Chat API；GLM5.2 的 effort 参数合同，不能证明国际套餐权限。

### glm52-intl-api

- 入口：[glm52-intl-api](https://docs.z.ai/api-reference/llm/chat-completion.md)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：Z.AI 国际原厂 Chat API 的 GLM5.2 effort 合同；套餐实际账号权限另核。

### zhipu-glm-4-6-page

- 入口：[zhipu-glm-4-6-page](https://docs.bigmodel.cn/cn/guide/models/text/glm-4.6.md)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：智谱开放平台 GLM-4.6 型号页；2026-10-05 只核对「能力支持」中的 Function Calling。

### zhipu-glm-4-7-page

- 入口：[zhipu-glm-4-7-page](https://docs.bigmodel.cn/cn/guide/models/text/glm-4.7.md)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：智谱开放平台 GLM-4.7 系列页（含 GLM-4.7-FlashX 页签）；2026-10-05 只核对系列「能力支持」中的 Function Calling。

### zhipu-model-overview

- 入口：[zhipu-model-overview](https://docs.bigmodel.cn/cn/guide/start/model-overview.md)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：智谱开放平台模型概览；GLM-4.7-FlashX 条目指向 GLM-4.7 系列页。

## 已知边界与核验说明

国内官方价格页确认 5.3/Flash/FlashX 为 8/28、0.8/2.8、2/7 元/百万 tokens。官网给出的窗口简写 1M/128K 未直接作为跨接入面字节级精确值证明；本次不改已有换算。低/高/max、默认 max 和始终思考已核对。Coding Plan 提供 5.3 与 Flash，不提供 FlashX；国际套餐端点的账号实际可用性仍需验证。

2026-10-05 工具调用核对：以上 `zhipu-glm-4-6-page`、`zhipu-glm-4-7-page`、`zhipu-model-overview` 只用于核对函数 / 工具调用是否受支持，读取日期 2026-10-05；没有借此复核窗口、价格等其他字段，也没有做账号调用验收。能力标签里只有 `tool_use` 一项以这些来源为依据。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "zhipu",
  "checkedAt": "2026-10-03",
  "sources": [
    {
      "id": "glm53",
      "url": "https://docs.bigmodel.cn/cn/guide/models/text/glm-5.3.md",
      "kind": "official-doc",
      "scope": "智谱原厂 GLM-5.3 参数；套餐与账号权限独立核对",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "2ae550297e839b51498db0f487d9ba5cb0c44f996236546d0eb2e07ce43ef8d8",
      "resolvedUrl": "https://docs.bigmodel.cn/cn/guide/models/text/glm-5.3.md"
    },
    {
      "id": "glm53-flash",
      "url": "https://docs.bigmodel.cn/cn/guide/models/vlm/glm-5.3-flash.md",
      "kind": "official-doc",
      "scope": "智谱原厂 Flash/FlashX 参数及中国区套餐限制",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "d9e2d56363f9e04e18c5bb60756edffaf565d2ccb28c420552da2ead3eecef9c",
      "resolvedUrl": "https://docs.bigmodel.cn/cn/guide/models/vlm/glm-5.3-flash.md"
    },
    {
      "id": "glm-pricing",
      "url": "https://docs.bigmodel.cn/cn/guide/start/pricing.md",
      "kind": "official-doc",
      "scope": "智谱中国区按量 API；CNY 标准价，不含限时折扣",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "7224d9566404ed86a97dbfb41cf1703f1f31a25d2b4e91953018ceb5be638d0b",
      "resolvedUrl": "https://docs.bigmodel.cn/cn/guide/start/pricing.md"
    },
    {
      "id": "glm-plan",
      "url": "https://docs.bigmodel.cn/cn/coding-plan/latest-model.md",
      "kind": "official-doc",
      "scope": "中国区 GLM Coding Plan 文档；国际 api.z.ai 可用性另核",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "d5c5eb7ef0ddf5a89128018fffb1d96a7e4a6745c8c16dc53c5c4453e59891fc",
      "resolvedUrl": "https://docs.bigmodel.cn/cn/coding-plan/latest-model.md"
    },
    {
      "id": "glm52-cn-api",
      "url": "https://docs.bigmodel.cn/api-reference/%E6%A8%A1%E5%9E%8B-api/%E5%AF%B9%E8%AF%9D%E8%A1%A5%E5%85%A8.md",
      "kind": "official-doc",
      "scope": "智谱中国原厂通用 Chat API；GLM5.2 的 effort 参数合同，不能证明国际套餐权限",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "9844803948f2c1fd80562d9c617b7cb9bc0ddbac66e97db7a3d65279c9753a8a",
      "resolvedUrl": "https://docs.bigmodel.cn/api-reference/%E6%A8%A1%E5%9E%8B-api/%E5%AF%B9%E8%AF%9D%E8%A1%A5%E5%85%A8.md"
    },
    {
      "id": "glm52-intl-api",
      "url": "https://docs.z.ai/api-reference/llm/chat-completion.md",
      "kind": "official-doc",
      "scope": "Z.AI 国际原厂 Chat API 的 GLM5.2 effort 合同；套餐实际账号权限另核",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "b05ada5d25382772edafd1b12dd2ead1da430a8817b5b748f2fb8dee2d7a6c10",
      "resolvedUrl": "https://docs.z.ai/api-reference/llm/chat-completion.md"
    },
    {
      "id": "zhipu-glm-4-6-page",
      "url": "https://docs.bigmodel.cn/cn/guide/models/text/glm-4.6.md",
      "kind": "official-doc",
      "scope": "智谱开放平台 GLM-4.6 型号页；2026-10-05 只核对「能力支持」中的 Function Calling",
      "retrieval": "fetched",
      "checkedAt": "2026-10-05",
      "contentSha256": "07cdc1b271155ccf16d43a1c21b6c690e32c826c902fa92bac9f4cab367f53e6",
      "resolvedUrl": "https://docs.bigmodel.cn/cn/guide/models/text/glm-4.6.md"
    },
    {
      "id": "zhipu-glm-4-7-page",
      "url": "https://docs.bigmodel.cn/cn/guide/models/text/glm-4.7.md",
      "kind": "official-doc",
      "scope": "智谱开放平台 GLM-4.7 系列页（含 GLM-4.7-FlashX 页签）；2026-10-05 只核对系列「能力支持」中的 Function Calling",
      "retrieval": "fetched",
      "checkedAt": "2026-10-05",
      "contentSha256": "25ce7e68aa5afe76ee9d768f2556ff0a9577020244f8edc42a599eec181e41ba",
      "resolvedUrl": "https://docs.bigmodel.cn/cn/guide/models/text/glm-4.7.md"
    },
    {
      "id": "zhipu-model-overview",
      "url": "https://docs.bigmodel.cn/cn/guide/start/model-overview.md",
      "kind": "official-doc",
      "scope": "智谱开放平台模型概览；GLM-4.7-FlashX 条目指向 GLM-4.7 系列页",
      "retrieval": "fetched",
      "checkedAt": "2026-10-05",
      "contentSha256": "0b00f14c6071ef69fe48956d1199f534652309d63e859fae04c602dd734c6466",
      "resolvedUrl": "https://docs.bigmodel.cn/cn/guide/start/model-overview.md"
    }
  ]
}
```
<!-- source-metadata:end -->

## GLM-5.2 推理合同

本轮分别读取中国与国际 Chat API 明文参考，双方均明确七个接受值与默认 max；none/minimal 跳过思考，low/medium 映射 high，xhigh 映射 max。已把旧 ignored 字段迁移为 Provider 可读取的 extra.reasoning。国际通用接口参考只能证明参数合同，不能代替 Coding Plan 账号权限或长上下文别名的调用验收。
