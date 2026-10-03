# Mistral：官网证据目录

[供应商索引](README.md)

核验日期：2026-10-03。这里只登记可复用的官网证据与适用边界，具体模型与接入面分别记录。

## 官网证据

### mistral-models

- 入口：[mistral-models](https://docs.mistral.ai/models)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`mistral 官方入口；具体地域与接入面待该页面逐字段确认`。
### mistral-medium

- 入口：[mistral-medium](https://docs.mistral.ai/models/mistral-medium-3-5-26-04)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`Mistral 原厂 Medium 3.5；USD 原价，窗口 256k 是简写`。
### mistral-small

- 入口：[mistral-small](https://docs.mistral.ai/models/mistral-small-4-0-26-03)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`Mistral 原厂 Small 4；USD 原价，窗口 256k 是简写`。
### mistral-large

- 入口：[mistral-large](https://docs.mistral.ai/models/mistral-large-3-25-12)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`Mistral 原厂 Large 3；USD 原价，窗口 256k 是简写`。

### codestral2508

- 入口：[codestral2508](https://docs.mistral.ai/models/codestral-25-08)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：Mistral Codestral2508原厂页；USD每百万token标准价，128k简写。

## 已知边界与核验说明

官网确认 Medium 3.5、Small 4、Large 3 的名称、版本和价格；256k 是官网简写，262144 的精确换算仍列为未逐字段证明。匹配 family 已收窄，避免旧型号继承新规格；无法确认的 maxOutputTokens 不填。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "mistral",
  "checkedAt": "2026-10-03",
  "sources": [
    {
      "id": "mistral-models",
      "url": "https://docs.mistral.ai/models",
      "kind": "official-doc",
      "scope": "本轮读取 mistral 官方 mistral-models 页面；按单模型记录限定字段与接入面",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "df08b65bf8c3f26c8c1de0c194b0c82e77b7aa58af7428779fdbe8db33534deb",
      "resolvedUrl": "https://docs.mistral.ai/models"
    },
    {
      "id": "mistral-medium",
      "url": "https://docs.mistral.ai/models/mistral-medium-3-5-26-04",
      "kind": "official-doc",
      "scope": "本轮读取 mistral 官方 mistral-medium 页面；按单模型记录限定字段与接入面",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "e9ecf8fd0ceb99e755e164bed57be8b91cea7a544504b0f62bfeea0b1f41df07",
      "resolvedUrl": "https://docs.mistral.ai/models/mistral-medium-3-5-26-04"
    },
    {
      "id": "mistral-small",
      "url": "https://docs.mistral.ai/models/mistral-small-4-0-26-03",
      "kind": "official-doc",
      "scope": "本轮读取 mistral 官方 mistral-small 页面；按单模型记录限定字段与接入面",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "63ae9e27aaeab6923ef30f53daa7d623c97d6d903a90f028e26fe00cd7f83112",
      "resolvedUrl": "https://docs.mistral.ai/models/mistral-small-4-0-26-03"
    },
    {
      "id": "mistral-large",
      "url": "https://docs.mistral.ai/models/mistral-large-3-25-12",
      "kind": "official-doc",
      "scope": "本轮读取 mistral 官方 mistral-large 页面；按单模型记录限定字段与接入面",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "34293e7a12d40b4f1c8e31d7c9bd8cbb4f59c4b0db978728d332f1c1749b09e3",
      "resolvedUrl": "https://docs.mistral.ai/models/mistral-large-3-25-12"
    },
    {
      "id": "codestral2508",
      "url": "https://docs.mistral.ai/models/codestral-25-08",
      "kind": "official-doc",
      "scope": "Mistral Codestral2508原厂页；USD每百万token标准价，128k简写",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "3248f36c4eca93679cc8507daf04d24e07aa9d51a06c10f2feec9415a62687d5",
      "resolvedUrl": "https://docs.mistral.ai/models/codestral-25-08"
    }
  ]
}
```
<!-- source-metadata:end -->
