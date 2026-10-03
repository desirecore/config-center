# 匿名模型历史兼容：官网证据目录

[供应商索引](README.md)

核验日期：2026-10-03。这里只登记可复用的官网证据与适用边界，具体模型与接入面分别记录。

## 官网证据

### openrouter-api

- 入口：[openrouter-api](https://openrouter.ai/api/v1/models)
- 类型：`official-api`；当前读取状态：`fetched`；地域/接入面：`OpenRouter 公共 Models API 快照；USD/token 换算为 USD/百万 token`。
### glm53-flash

- 入口：[glm53-flash](https://docs.bigmodel.cn/cn/guide/models/vlm/glm-5.3-flash.md)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`智谱原厂 Flash/FlashX 参数及中国区套餐限制`。

## 已知边界与核验说明

本页仅记录历史兼容规格。当前 OpenRouter 官网 API 已不列出 Ox Alpha；历史别名来源及揭晓关系未获得本次可读官网材料确认。共享规格保留供其他网关兼容，不把它当当前官方平台可用性证明。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "stealth",
  "checkedAt": "2026-10-03",
  "sources": [
    {
      "id": "openrouter-api",
      "url": "https://openrouter.ai/api/v1/models",
      "kind": "official-api",
      "scope": "OpenRouter 公共 Models API 快照；USD/token 换算为 USD/百万 token",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "38864160760c394d4d81864581a33adbced3c582fdd8732809f90ec7e911f032",
      "resolvedUrl": "https://openrouter.ai/api/v1/models"
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
    }
  ]
}
```
<!-- source-metadata:end -->
