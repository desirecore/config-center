# Google Gemini：模型数据来源

核验轮次：2026-10-03。这里的日期是访问/复核日期，不是模型发布日期。

## 对应配置

- [google.json](../../../compute/providers/google.json)
- [google.json](../../../compute/model-specs/google.json)

## 官网证据

### google-models

- 入口：[google-models](https://ai.google.dev/gemini-api/docs/models)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`google 官方入口；具体地域与接入面待该页面逐字段确认`。
### google-embedding

- 入口：[google-embedding](https://ai.google.dev/gemini-api/docs/embeddings)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`Gemini Developer API 原生 Embedding 2；输入限额与输出向量维度`。
### google-tts

- 入口：[google-tts](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash-tts)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`Gemini Developer API 原生 TTS；输入和输出分别限额`。
### google-transcribe

- 入口：[google-transcribe](https://ai.google.dev/gemini-api/docs/models/gemini-3.5-transcribe)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`Gemini Developer API 原生转写，客户端协议适配另核`。

## 核验结论与边界

Embedding 2 的最大输入 8192 和推荐维度 768/1536/3072 已再次核对。新 TTS 的输入 8192 与输出 16384 是分别的限制，不用 output<=input 判断错误。新音频协议只有共享规格，不能宣称客户端已适配。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

## 当前配置与字段级核验

下表“计价”是配置的 inputPrice/outputPrice 字段快照，不统一代表 token 单价；按张、按秒、search unit 和兼容占位值需查看原配置 extra.pricingNotes 与官网说明。未列为已核字段的数值仍待核实。

### compute/providers/google.json

接入面配置快照：`google-generative-ai`；端点：`https://generativelanguage.googleapis.com/v1beta`；币种：`USD`。这些平台字段不是整条官网验收结论，核验边界见上文。

<!-- source-config: compute/providers/google.json -->
<!-- source-config-fingerprint: 8bb31962eb527147305e75f9e7f07349a354a90cac8196365d22c7932fd2d93b -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `gemini-embedding-2` | 8192 / 未声明 | USD：未声明 / 未声明 | `contextWindow`→[google-embedding](#google-embedding), `extra.defaultDimension`→[google-embedding](#google-embedding), `extra.dimensions`→[google-embedding](#google-embedding) | [google-embedding](#google-embedding), [google-models](#google-models) | partial | `e9032f9d57889c940e2e02238034a7667e318cd82df48b6abf06195131402c06` |
| `gemini-3.8-flash` | 1048576 / 65536 | USD：0.75 / 3.75 | `modelName`→[google-models](#google-models) | [google-models](#google-models) | partial | `9d5a25d19ff7e9d6b9ebe25a34b5e7b94d58548283a513920067d853bd182454` |
| `gemini-3.7-flash` | 1048576 / 65536 | USD：0.75 / 3.75 | `modelName`→[google-models](#google-models) | [google-models](#google-models) | partial | `bb6f8f4c6068eda2e4cfbf11ccd73946eca0b7f425e0d162765cf15a9c303b0f` |
| `gemini-3.5-flash-lite` | 1048576 / 65536 | USD：0.3 / 2.5 | `modelName`→[google-models](#google-models) | [google-models](#google-models) | partial | `0e891cbbf2af69ee07da9c4febdae81d0dc86f9d00472150b14ba4a60e7b2cfd` |
| `gemini-3.5-flash` | 1048576 / 65536 | USD：1.5 / 9 | `modelName`→[google-models](#google-models) | [google-models](#google-models) | partial | `28cc479cd067575aa5465a6e91f9226b7540892a654dc7122528ad84ee88e054` |
| `gemini-3.1-flash-lite` | 1048576 / 65536 | USD：0.25 / 1.5 | `modelName`→[google-models](#google-models) | [google-models](#google-models) | partial | `0bc291abaf42630b9129274538fa483184805ef0060a1a6edc8064aa0df059fa` |
| `gemini-3.1-pro-preview` | 1048576 / 65536 | USD：2 / 12 | `modelName`→[google-models](#google-models) | [google-models](#google-models) | partial | `e0ff474a5b961de0689767ccf1cf0940b39073b2047cc6c2007630a7b9e00b2e` |
| `gemini-3-flash-preview` | 1048576 / 65536 | USD：0.5 / 3 | `modelName`→[google-models](#google-models) | [google-models](#google-models) | partial | `1284ca213f087183f56a40f4a07744f0a233b8c632ed6df09804f47be104f791` |
| `gemini-2.5-pro` | 1048576 / 65536 | USD：1.25 / 10 | `modelName`→[google-models](#google-models) | [google-models](#google-models) | partial | `279a602a413df050eb26dcd4bc0fba8e0959a9cbc9d5f9e4d214254e436496fe` |
| `gemini-2.5-flash` | 1048576 / 65536 | USD：0.3 / 2.5 | `modelName`→[google-models](#google-models) | [google-models](#google-models) | partial | `0d86d9b041dfb7e5480c6d27fdcdfbbf5bd57273af980a83eb794b389750861a` |
| `text-embedding-005` | 2048 / 未声明 | USD：0.1 / 未声明 | 待核实 | [google-models](#google-models) | pending | `202a654167663b887a6d44de2273df2fb07e0aac9b9d3d46b6ed205b7626a8de` |

### compute/model-specs/google.json

<!-- source-config: compute/model-specs/google.json -->
<!-- source-config-fingerprint: a3f84b38bef347808a425fb1c191273696638b8265f55ffa244154ba65edbb99 -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `gemini-embedding-2` | 8192 / 未声明 | 非计价主数据 | `spec.contextWindow`→[google-embedding](#google-embedding), `spec.extra.defaultDimension`→[google-embedding](#google-embedding), `spec.extra.dimensions`→[google-embedding](#google-embedding) | [google-embedding](#google-embedding), [google-models](#google-models) | partial | `81a58be67897733f466b9305241a810e3ffa43f7078d0e0beb77a83b03f03819` |
| `gemini-3.5-transcribe-live` | 未声明 / 未声明 | 非计价主数据 | `id`→[google-models](#google-models) | [google-models](#google-models) | partial | `7f6905e778e382ae48d6529c5df7cc015a591184883c2815831b9830e0bdd3fd` |
| `gemini-3.5-transcribe` | 未声明 / 未声明 | 非计价主数据 | `id`→[google-models](#google-models) | [google-models](#google-models) | partial | `fe5c67268c1eed0d19c77de5d939a3a03059e468390da7906f2dbf429dc118df` |
| `gemini-3.8-live-extended-thinking` | 未声明 / 未声明 | 非计价主数据 | `id`→[google-models](#google-models) | [google-models](#google-models) | partial | `d3b2c27db43106206c8b2e71d01daea32c470ecf701e1a23ff6b6dc63a16ab1e` |
| `gemini-3.8-live` | 未声明 / 未声明 | 非计价主数据 | `id`→[google-models](#google-models) | [google-models](#google-models) | partial | `96717871e2de7dda6ab76de22699d47253e08b237416fa87414de46d8909016b` |
| `gemini-3.8-flash-lite-tts` | 未声明 / 未声明 | 非计价主数据 | `id`→[google-models](#google-models) | [google-models](#google-models) | partial | `b28ee963b0339b8c5c3146926f37e8d7e9e101e3bb93a079173a9b60516a70b1` |
| `gemini-3.8-flash-tts` | 8192 / 16384 | 非计价主数据 | `id`→[google-models](#google-models), `spec.contextWindow`→[google-tts](#google-tts), `spec.maxOutputTokens`→[google-tts](#google-tts) | [google-models](#google-models), [google-tts](#google-tts) | partial | `a75a5d972a1cdd9c3a692e78b607cf4405d14869650d748c34332275aebadd54` |
| `gemini-3.8-flash` | 1048576 / 65536 | 非计价主数据 | `id`→[google-models](#google-models) | [google-models](#google-models) | partial | `60f05148792c14f1c6db7ff16b6f8e69a2903dfeed1b0585b1b8b3f60fa8ca63` |
| `gemini-3.7-flash` | 1048576 / 65536 | 非计价主数据 | `id`→[google-models](#google-models) | [google-models](#google-models) | partial | `41b312b6191649ae61949f1bb26fd863b6d85f2d6351e640717dd3f5fa796f33` |
| `gemini-3.5-flash-lite` | 1048576 / 65536 | 非计价主数据 | `id`→[google-models](#google-models) | [google-models](#google-models) | partial | `b0ecfb99c59f4f8ccaba348794f9f6e0c41f2919f032fe03e1bd4f72c655cbc0` |
| `gemini-3.1-flash-lite-image` | 65536 / 4096 | 非计价主数据 | `id`→[google-models](#google-models) | [google-models](#google-models) | partial | `49ab18e2d07ece4c88a2b23c93fe741ed0f5426330ed4f0ef6272c0b0024cd33` |
| `gemini-3.5-flash` | 1048576 / 65536 | 非计价主数据 | `id`→[google-models](#google-models) | [google-models](#google-models) | partial | `c8029230918f8b2e7ad90c279c083b22555467d92d0055681ad56dd91d94646f` |
| `gemini-3.1-flash-image` | 131072 / 32768 | 非计价主数据 | `id`→[google-models](#google-models) | [google-models](#google-models) | partial | `b4dafff1ad4b5d79f71001965eaf9f6de6e72f3b783e742ed2880c8429eba5b4` |
| `gemini-3.1-pro-preview` | 1048576 / 65536 | 非计价主数据 | `id`→[google-models](#google-models) | [google-models](#google-models) | partial | `956b2a0f20fd0a6a949cef14361095fb5e913353878890549110db469e0aa77d` |
| `gemini-3-flash-preview` | 1048576 / 65536 | 非计价主数据 | `id`→[google-models](#google-models) | [google-models](#google-models) | partial | `f65fed502e4ec44d76e84e0ad84fbc528537399cc9887cd0386ccb45f76cdea7` |
| `gemini-2.5-pro` | 1048576 / 65536 | 非计价主数据 | `id`→[google-models](#google-models) | [google-models](#google-models) | partial | `60befa10269058a2885f56e99514b6b7b2d22612538f3dc7e5f9e91ae14bf940` |
| `gemini-2.5-flash` | 1048576 / 65536 | 非计价主数据 | `id`→[google-models](#google-models) | [google-models](#google-models) | partial | `a1284981557da3f541a483a6f9e043878a70206720163aaa03e2e3e5e43ac5f0` |
| `gemini-3.1-flash-lite-preview` | 1048576 / 65536 | 非计价主数据 | `id`→[google-models](#google-models) | [google-models](#google-models) | partial | `54b9b1c69b0ec40aee8338a5e8ae5e898ef11632c35a094ca37de475ed8d05b7` |
| `text-embedding-005` | 2048 / 未声明 | 非计价主数据 | 待核实 | [google-models](#google-models) | pending | `18b20213216fbd2c002ceecd99f4fc540d8770fd52ac0e2d9960c8abc20ba1d3` |

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
  "supplier": "google",
  "checkedAt": "2026-10-03",
  "sources": [
    {
      "id": "google-models",
      "url": "https://ai.google.dev/gemini-api/docs/models",
      "kind": "official-doc",
      "scope": "google 官方入口；具体地域与接入面待该页面逐字段确认",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "4075eec253ae128a90047a245782171c0fa7661547ee57c58d480c5720adbbb6",
      "resolvedUrl": "https://ai.google.dev/gemini-api/docs/models"
    },
    {
      "id": "google-embedding",
      "url": "https://ai.google.dev/gemini-api/docs/embeddings",
      "kind": "official-doc",
      "scope": "Gemini Developer API 原生 Embedding 2；输入限额与输出向量维度",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "a77debcbe84ab080c4e1fa7ca70b34c74f2b9c4dde3bdcfaaed24b8368cf0e82",
      "resolvedUrl": "https://ai.google.dev/gemini-api/docs/embeddings"
    },
    {
      "id": "google-tts",
      "url": "https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash-tts",
      "kind": "official-doc",
      "scope": "Gemini Developer API 原生 TTS；输入和输出分别限额",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "7bd15a9d4430fefb6772aa9a8c9b314aa3be86968e9f6a36743b497eb1bc6d3f",
      "resolvedUrl": "https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash-tts"
    },
    {
      "id": "google-transcribe",
      "url": "https://ai.google.dev/gemini-api/docs/models/gemini-3.5-transcribe",
      "kind": "official-doc",
      "scope": "Gemini Developer API 原生转写，客户端协议适配另核",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "2482c6436e9cae98619b62ecaf291772974f23f22be59dbbf2ecce79dc376983",
      "resolvedUrl": "https://ai.google.dev/gemini-api/docs/models/gemini-3.5-transcribe"
    }
  ]
}
```
<!-- source-metadata:end -->
