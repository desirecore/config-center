# Cohere：官网证据目录

[供应商索引](README.md)

核验日期：2026-10-03。这里只登记可复用的官网证据与适用边界，具体模型与接入面分别记录。

## 官网证据

### cohere-models

- 入口：[cohere-models](https://docs.cohere.com/docs/models.md)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`Cohere 原厂型号/规格目录；不证明所有接入面开放`。
### cohere-command

- 入口：[cohere-command](https://docs.cohere.com/docs/command-a-plus.md)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`Cohere 原厂 Command A+；兼容 reasoning 档位另核`。
### cohere-embed

- 入口：[cohere-embed](https://docs.cohere.com/v2/docs/cohere-embed.md)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`Cohere 原生多模态 Embed；兼容端点只核实文本 Embed`。
### cohere-compat

- 入口：[cohere-compat](https://docs.cohere.com/docs/compatibility-api.md)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`Cohere /compatibility/v1；OpenAI 兼容 Chat/文本 Embed`。
### cohere-rerank

- 入口：[cohere-rerank](https://docs.cohere.com/docs/rerank.md)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`Cohere 原生 Rerank；未接入当前兼容 Provider`。

### north-mini-doc

- 入口：[north-mini-doc](https://docs.cohere.com/docs/north-mini-code-1.0.md)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：Cohere原厂North Mini Code独立说明；精确API ID见cohere-models型号表。

### north-translate-doc

- 入口：[north-translate-doc](https://docs.cohere.com/docs/north-small-translate-1.0.md)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：Cohere原厂North Small Translate；代码示例明确API ID，16K为窗口简写。

## 已知边界与核验说明

当前兼容 API 支持 Embed 5 的文本 embeddings；原厂多模态 Embed 能力不等于兼容端点支持图片输入。Compatibility API 官网明确不支持 `dimensions` 参数，Provider 移除可选维度列表；默认输出维度保留为响应元数据，共享规格继续记录原生支持的多维度。A+ 的 compatibility reasoning_effort 仅 none/high。Rerank 4 只保留共享规格。单位简写 128k/64k 按该记录既有十进制值展示，官网未返回 token 单价，不填写。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "cohere",
  "checkedAt": "2026-10-03",
  "sources": [
    {
      "id": "cohere-models",
      "url": "https://docs.cohere.com/docs/models.md",
      "kind": "official-doc",
      "scope": "本轮读取 cohere 官方 cohere-models 页面；按单模型记录限定字段与接入面",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "ada3af943113fdaaaada15b61d7b537f9ec2e340ca51adba6bfab852933dd8f1",
      "resolvedUrl": "https://docs.cohere.com/docs/models.md"
    },
    {
      "id": "cohere-command",
      "url": "https://docs.cohere.com/docs/command-a-plus.md",
      "kind": "official-doc",
      "scope": "本轮读取 cohere 官方 cohere-command 页面；按单模型记录限定字段与接入面",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "b1156c3b9e2229046dc672aa2dc44de3b41aaab5de8bbe26e4dab85d11546c9b",
      "resolvedUrl": "https://docs.cohere.com/docs/command-a-plus.md"
    },
    {
      "id": "cohere-embed",
      "url": "https://docs.cohere.com/v2/docs/cohere-embed.md",
      "kind": "official-doc",
      "scope": "本轮读取 cohere 官方 cohere-embed 页面；按单模型记录限定字段与接入面",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "f5fc5abd4a5891a635069c8767a4570464310db33dbb9dc1ba68ee048b45fa90",
      "resolvedUrl": "https://docs.cohere.com/v2/docs/cohere-embed.md"
    },
    {
      "id": "cohere-compat",
      "url": "https://docs.cohere.com/docs/compatibility-api.md",
      "kind": "official-doc",
      "scope": "本轮读取 cohere 官方 cohere-compat 页面；按单模型记录限定字段与接入面",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "351a667d388039ee2724fae229b1cb6653ede0d41e6175d36cda76b483a1b07d",
      "resolvedUrl": "https://docs.cohere.com/docs/compatibility-api.md"
    },
    {
      "id": "cohere-rerank",
      "url": "https://docs.cohere.com/docs/rerank.md",
      "kind": "official-doc",
      "scope": "本轮读取 cohere 官方 cohere-rerank 页面；按单模型记录限定字段与接入面",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "f3118586467d700939f82151110632e8271cc50fbadcf9a2943fcc1a333d82c0",
      "resolvedUrl": "https://docs.cohere.com/docs/rerank.md"
    },
    {
      "id": "north-mini-doc",
      "url": "https://docs.cohere.com/docs/north-mini-code-1.0.md",
      "kind": "official-doc",
      "scope": "Cohere原厂North Mini Code独立说明；精确API ID见cohere-models型号表",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "22a6ee1c7ce4a2339066f4ade915836c5e464252dfa15c1cc01a1aeeedfe57d4",
      "resolvedUrl": "https://docs.cohere.com/docs/north-mini-code-1.0.md"
    },
    {
      "id": "north-translate-doc",
      "url": "https://docs.cohere.com/docs/north-small-translate-1.0.md",
      "kind": "official-doc",
      "scope": "Cohere原厂North Small Translate；代码示例明确API ID，16K为窗口简写",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "3104fc5e8efbc7f218ecf70b7202985b9ba9ca9c2aa7979d8a38dc05198694c4",
      "resolvedUrl": "https://docs.cohere.com/docs/north-small-translate-1.0.md"
    }
  ]
}
```
<!-- source-metadata:end -->
