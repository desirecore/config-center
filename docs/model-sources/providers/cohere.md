# Cohere：模型数据来源

核验轮次：2026-10-03。这里的日期是访问/复核日期，不是模型发布日期。

## 对应配置

- [cohere.json](../../../compute/providers/cohere.json)
- [cohere.json](../../../compute/model-specs/cohere.json)

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

## 核验结论与边界

当前兼容 API 支持 Embed 5 的文本 embeddings；原厂多模态 Embed 能力不等于兼容端点支持图片输入。Compatibility API 官网明确不支持 `dimensions` 参数，Provider 移除可选维度列表；默认输出维度保留为响应元数据，共享规格继续记录原生支持的多维度。A+ 的 compatibility reasoning_effort 仅 none/high。Rerank 4 只保留共享规格。单位简写 128k/64k 按该记录既有十进制值展示，官网未返回 token 单价，不填写。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

## 当前配置与字段级核验

下表“计价”是配置的 inputPrice/outputPrice 字段快照，不统一代表 token 单价；按张、按秒、search unit 和兼容占位值需查看原配置 extra.pricingNotes 与官网说明。未列为已核字段的数值仍待核实。

### compute/providers/cohere.json

接入面配置快照：`openai-completions`；端点：`https://api.cohere.ai/compatibility/v1`；币种：`USD`。这些平台字段不是整条官网验收结论，核验边界见上文。

<!-- source-config: compute/providers/cohere.json -->
<!-- source-config-fingerprint: 90a11e2c69ccbe6ea4c3d312589acf16757abbd0b8ac5e7e4d9269dee2215124 -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `embed-v5.0-fast` | 128000 / 未声明 | USD：未声明 / 未声明 | `extra.defaultDimension`→[cohere-embed](#cohere-embed), `modelName`→[cohere-models](#cohere-models) | [cohere-embed](#cohere-embed), [cohere-models](#cohere-models) | partial | `0028df6b24ded4e2557122d597dd9e79699bb8590aaa53c950d5cb61a32a2c15` |
| `embed-v5.0-pro` | 128000 / 未声明 | USD：未声明 / 未声明 | `extra.defaultDimension`→[cohere-embed](#cohere-embed), `modelName`→[cohere-models](#cohere-models) | [cohere-embed](#cohere-embed), [cohere-models](#cohere-models) | partial | `c39dbf7e430873ac18f25292da6308ced9910764055d5a1558c965731d556564` |
| `command-a-plus-05-2026` | 128000 / 64000 | USD：未声明 / 未声明 | `extra.reasoning.supportedEfforts`→[cohere-compat](#cohere-compat), `modelName`→[cohere-models](#cohere-models) | [cohere-compat](#cohere-compat), [cohere-models](#cohere-models) | partial | `6228712281ee27601c0b0f7c60cdd85e4d882e8041288c27a06105e27b580641` |
| `command-a-03-2025` | 256000 / 8000 | USD：2.5 / 10 | `modelName`→[cohere-models](#cohere-models) | [cohere-models](#cohere-models) | partial | `4db4e4c6797c90558e9427f34561eb910fa86627dca5459db5de273332045886` |
| `command-r7b-12-2024` | 128000 / 4000 | USD：0.0375 / 0.15 | `modelName`→[cohere-models](#cohere-models) | [cohere-models](#cohere-models) | partial | `0b51e6c9831229781c89b72cae23fb95533aa2ebaa0c06db2dd21225710d356e` |
| `embed-v4.0` | 128000 / 0 | USD：0.12 / 0 | `modelName`→[cohere-models](#cohere-models) | [cohere-models](#cohere-models) | partial | `1b14287bc87b2f32efa8a5a8eafc13c972fa2e4fd7bc3fa4c00262dfe33ecf0d` |
| `rerank-v3.5` | 4096 / 0 | USD：2 / 0 | `modelName`→[cohere-models](#cohere-models) | [cohere-models](#cohere-models) | partial | `aa55d4660b80ea3f2a34ede077aee72bc4f22d505fc5dc212439ea37ce74474a` |

### compute/model-specs/cohere.json

<!-- source-config: compute/model-specs/cohere.json -->
<!-- source-config-fingerprint: 29565d0355fe4e5371821e02d8502a72e3ff58ca961ab79ef8c41a732d19a4b8 -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `rerank-v4.0-fast` | 未声明 / 未声明 | 非计价主数据 | `id`→[cohere-models](#cohere-models) | [cohere-models](#cohere-models) | partial | `171b079b8ff550ba4e61aef9c6e27cab203fb200e35d5593e3a568f1b29cd406` |
| `embed-v5.0-fast` | 128000 / 未声明 | 非计价主数据 | `id`→[cohere-models](#cohere-models), `spec.extra.defaultDimension`→[cohere-embed](#cohere-embed), `spec.extra.dimensions`→[cohere-embed](#cohere-embed) | [cohere-embed](#cohere-embed), [cohere-models](#cohere-models) | partial | `df36c5648277525a4ea74d15747684b65a8df39795ab121f8f1814fa45c16864` |
| `rerank-v4.0-pro` | 未声明 / 未声明 | 非计价主数据 | `id`→[cohere-models](#cohere-models) | [cohere-models](#cohere-models) | partial | `455a06767e01922cae1ee95436432a5366ce2447ed2ace2cecd29b1955f05b8d` |
| `embed-v5.0-pro` | 128000 / 未声明 | 非计价主数据 | `id`→[cohere-models](#cohere-models), `spec.extra.defaultDimension`→[cohere-embed](#cohere-embed), `spec.extra.dimensions`→[cohere-embed](#cohere-embed) | [cohere-embed](#cohere-embed), [cohere-models](#cohere-models) | partial | `da0a4136e27363bcc3c73806d7c2ef3f696698f3373799b7aad4a378d3a3bc4d` |
| `command-a-plus-05-2026` | 128000 / 64000 | 非计价主数据 | `id`→[cohere-models](#cohere-models) | [cohere-models](#cohere-models) | partial | `67d42211584e059cf7d73cd6a2b69d58c6b9a02977beb44e2ee1e3dff8832974` |
| `north-mini-code` | 256000 / 64000 | 非计价主数据 | 待核实 | [cohere-models](#cohere-models) | pending | `23b56d984a044c5bd5a19eeb85485485a1aded65c92332bdf247b3dcbf7d81b9` |
| `command-a-03-2025` | 256000 / 8000 | 非计价主数据 | `id`→[cohere-models](#cohere-models) | [cohere-models](#cohere-models) | partial | `8ba57e678a3465ac6e202d39af63ada73b440f1e028de9e93f435975e897a55c` |
| `command-r7b-12-2024` | 128000 / 4000 | 非计价主数据 | `id`→[cohere-models](#cohere-models) | [cohere-models](#cohere-models) | partial | `d099504d0bbed341d961b706e024f785b3a25f0a030ed0f47797e5768d155d1b` |
| `embed-v4.0` | 128000 / 未声明 | 非计价主数据 | `id`→[cohere-models](#cohere-models) | [cohere-models](#cohere-models) | partial | `1d31441bbfbb712efab4911ea9e1274b254356ba5432c93348666bc769d54dca` |
| `rerank-v3.5` | 4096 / 未声明 | 非计价主数据 | `id`→[cohere-models](#cohere-models) | [cohere-models](#cohere-models) | partial | `dfb7f20fb7d49a6a6188859b78c4d5f6b58a405cb06cf8fac18d02d9a4a057d4` |

## 待核实项与更新步骤

1. 按模型 ID 打开上面的官方页面，定位对应型号/地域/接入面，不以页脚日期或目录存在代替参数证明。
2. 先核对上下文、单次输出、推理和多模态输入，再核对计价单位；套餐可用性单独核对。
3. 修改 canonical JSON、对应 Provider 副本及本页中实际变化的记录；只更新真实核实字段及来源，不将 pending 批量改成 partial。
4. 用 `node scripts/validate-sources.mjs --fingerprints` 查看新指纹；同步本页受影响的表格行。
5. 运行 `npm run validate` 与 `npm test`，必要时在已授权账号做聚焦调用；无实测时保留限制说明。

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
      "scope": "Cohere 原厂型号/规格目录；不证明所有接入面开放",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "ada3af943113fdaaaada15b61d7b537f9ec2e340ca51adba6bfab852933dd8f1",
      "resolvedUrl": "https://docs.cohere.com/docs/models.md"
    },
    {
      "id": "cohere-command",
      "url": "https://docs.cohere.com/docs/command-a-plus.md",
      "kind": "official-doc",
      "scope": "Cohere 原厂 Command A+；兼容 reasoning 档位另核",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "b1156c3b9e2229046dc672aa2dc44de3b41aaab5de8bbe26e4dab85d11546c9b",
      "resolvedUrl": "https://docs.cohere.com/docs/command-a-plus.md"
    },
    {
      "id": "cohere-embed",
      "url": "https://docs.cohere.com/v2/docs/cohere-embed.md",
      "kind": "official-doc",
      "scope": "Cohere 原生多模态 Embed；兼容端点只核实文本 Embed",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "f5fc5abd4a5891a635069c8767a4570464310db33dbb9dc1ba68ee048b45fa90",
      "resolvedUrl": "https://docs.cohere.com/v2/docs/cohere-embed.md"
    },
    {
      "id": "cohere-compat",
      "url": "https://docs.cohere.com/docs/compatibility-api.md",
      "kind": "official-doc",
      "scope": "Cohere /compatibility/v1；OpenAI 兼容 Chat/文本 Embed",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "351a667d388039ee2724fae229b1cb6653ede0d41e6175d36cda76b483a1b07d",
      "resolvedUrl": "https://docs.cohere.com/docs/compatibility-api.md"
    },
    {
      "id": "cohere-rerank",
      "url": "https://docs.cohere.com/docs/rerank.md",
      "kind": "official-doc",
      "scope": "Cohere 原生 Rerank；未接入当前兼容 Provider",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "f3118586467d700939f82151110632e8271cc50fbadcf9a2943fcc1a333d82c0",
      "resolvedUrl": "https://docs.cohere.com/docs/rerank.md"
    }
  ]
}
```
<!-- source-metadata:end -->
