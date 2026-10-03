# 火山引擎：模型数据来源

核验轮次：2026-10-03。这里的日期是访问/复核日期，不是模型发布日期。

## 对应配置

- [volcengine.json](../../../compute/providers/volcengine.json)
- [volcengine-coding.json](../../../compute/coding-plans/volcengine-coding.json)
- [volcengine.json](../../../compute/model-specs/volcengine.json)

## 官网证据

### volcengine-models

- 入口：[volcengine-models](https://docs.volcengine.com/docs/ark/model-list?lang=zh)
- 类型：`official-doc`；当前读取状态：`shell`；地域/接入面：`volcengine 官方入口；具体地域与接入面待该页面逐字段确认`。
### volcengine-latest

- 入口：[volcengine-latest](https://docs.volcengine.com/docs/ark/latest-model?lang=zh)
- 类型：`official-doc`；当前读取状态：`shell`；地域/接入面：`volcengine 官方入口；具体地域与接入面待该页面逐字段确认`。
### volcengine-plan

- 入口：[volcengine-plan](https://docs.volcengine.com/docs/ark/coding-plan-personal-model-release?lang=zh)
- 类型：`official-doc`；当前读取状态：`shell`；地域/接入面：`volcengine 官方入口；具体地域与接入面待该页面逐字段确认`。
### volcengine-seed

- 入口：[volcengine-seed](https://docs.volcengine.com/docs/82379/2549861)
- 类型：`official-doc`；当前读取状态：`unreadable`；地域/接入面：`volcengine 官方入口；具体地域与接入面待该页面逐字段确认`。

## 核验结论与边界

官方页面本次返回 JavaScript 页面壳，不能把 HTTP 200 当参数证明。Seed 2.1 Pro/Turbo 当前配置的输入/输出数字与官网最新值需通过控制台或正文继续核实；本次不采用开发者社区文章补数。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

## 当前配置与字段级核验

下表“计价”是配置的 inputPrice/outputPrice 字段快照，不统一代表 token 单价；按张、按秒、search unit 和兼容占位值需查看原配置 extra.pricingNotes 与官网说明。未列为已核字段的数值仍待核实。

### compute/providers/volcengine.json

<!-- source-config: compute/providers/volcengine.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `doubao-seed-evolving` | 1000000 / 未声明 | CNY：未声明 / 未声明 | 待核实 | [volcengine-models](#volcengine-models) | pending | `552ecab2f1043f0f0b73c3fa0eae0d0d7b1913e1b6e7c7bac0f0beaa8f9b735e` |
| `doubao-seed-2.1-pro` | 256000 / 262144 | CNY：6 / 30 | 待核实 | [volcengine-models](#volcengine-models) | pending | `10fadd132f559bb4da401bc244f00c2e190639129b1d204a1e1f461976092c54` |
| `doubao-seed-2.1-turbo` | 256000 / 262144 | CNY：3 / 15 | 待核实 | [volcengine-models](#volcengine-models) | pending | `04c47b104f3f02ce84131904c86c73bebc6352021266b905b7e69dab24142518` |
| `doubao-seed-2.0-pro` | 256000 / 128000 | CNY：3.2 / 16 | 待核实 | [volcengine-models](#volcengine-models) | pending | `af1cbf467667eeb0606fce2f05aa2d3bfb01f48b99bc867ae230c5ee0f7964b8` |
| `doubao-seed-2.0-lite` | 256000 / 128000 | CNY：0.6 / 3.6 | 待核实 | [volcengine-models](#volcengine-models) | pending | `eaa9eaf1e2f0b91cd5f9d8cf46f3b59efb5f1cd0378d770958f1b443ef4c222e` |
| `doubao-seed-2.0-mini` | 256000 / 128000 | CNY：0.2 / 2 | 待核实 | [volcengine-models](#volcengine-models) | pending | `d23c0d95874871e1df52a7127488107dfbb7e6823434ab4906fe1429ae720e9d` |
| `doubao-seed-2.0-code` | 256000 / 128000 | CNY：3.2 / 16 | 待核实 | [volcengine-models](#volcengine-models) | pending | `31638b64bb784e6aa0cdbdd3288c116b61d5e6014907cdd1960770e50f449a2f` |
| `doubao-seed-1.8` | 256000 / 16000 | CNY：0.8 / 8 | 待核实 | [volcengine-models](#volcengine-models) | pending | `d17797b3fee09402a1acb30a728fed749c8fd395aadb6c7ebb7f3eeb15ebb2ac` |
| `doubao-seed-1.6` | 256000 / 32000 | CNY：0.8 / 8 | 待核实 | [volcengine-models](#volcengine-models) | pending | `41c611d182caa20e180519815b8204fffd54b9514542c115bc75b351955c898e` |
| `doubao-seed-1.6-thinking` | 256000 / 16000 | CNY：0.8 / 8 | 待核实 | [volcengine-models](#volcengine-models) | pending | `c527f408573fc7291c8e42245f64c014e8adb0acfac0f899bf57b3b0a61e27e8` |
| `doubao-seed-1.6-flash` | 256000 / 16000 | CNY：0.15 / 1.5 | 待核实 | [volcengine-models](#volcengine-models) | pending | `0149131b7325ed471f4a78e5514ff387f042ce5a48414c7f68558dc946abe43e` |
| `doubao-seed-1.6-lite` | 256000 / 32000 | CNY：0.3 / 2.4 | 待核实 | [volcengine-models](#volcengine-models) | pending | `d90318ef79c129cdd82ab96771014ea187129e2f97a941d8ede4d63d93215fb6` |
| `doubao-seed-1.6-vision` | 256000 / 32000 | CNY：0.8 / 8 | 待核实 | [volcengine-models](#volcengine-models) | pending | `b5b2ec2be7a4328941fc7e953226aedff548cc43f866d5828fb8e9bfb4f1640c` |
| `doubao-seed-code` | 256000 / 32768 | CNY：1.2 / 8 | 待核实 | [volcengine-models](#volcengine-models) | pending | `1161bbe3aa651bc85ebca7ce073be1428017b9ce36786d7595d6ca9f63a3a51c` |
| `deepseek-v3.2` | 128000 / 32000 | CNY：2 / 3 | 待核实 | [volcengine-models](#volcengine-models) | pending | `c796a179f036da1b41b9ec57b8584b0d72b8f4f7875d6c180135e891eb8b4c4d` |
| `deepseek-r1` | 128000 / 65536 | CNY：4 / 16 | 待核实 | [volcengine-models](#volcengine-models) | pending | `0bd20f829484a6bd4b3fa03c566ed4866c498607dab6824375a23830abebc3bb` |
| `doubao-embedding` | 4096 / 未声明 | CNY：0.5 / 未声明 | 待核实 | [volcengine-models](#volcengine-models) | pending | `9020891c5eadf98e1cee233c54f8600fa5a8ed84edf7681c78e51ebe8d0e763e` |
| `doubao-embedding-large` | 4096 / 未声明 | CNY：0.5 / 未声明 | 待核实 | [volcengine-models](#volcengine-models) | pending | `a2ff6b5211d8cf40ff3915b64495e16ef3e018b04fabcf4557df3a87c6d6a3b4` |
| `volc-mega-tts-clone` | 未声明 / 未声明 | CNY：未声明 / 未声明 | 待核实 | [volcengine-models](#volcengine-models) | pending | `96105d9f0987cbf4bf3142571bd209611253422c1f7d737fd77321ca42de5e10` |
| `volc-realtime-voice` | 未声明 / 未声明 | CNY：未声明 / 未声明 | 待核实 | [volcengine-models](#volcengine-models) | pending | `2846a78337f50bcd601ba07b7b4430f0c7fd2bb685f02686823cb368348f8b7e` |
| `volc-simultaneous` | 未声明 / 未声明 | CNY：未声明 / 未声明 | 待核实 | [volcengine-models](#volcengine-models) | pending | `f17575f711397767a93f8119a3a43b654de2b44defc5c2f74acc7e6b24a24607` |
| `volc-translation` | 未声明 / 未声明 | CNY：未声明 / 未声明 | 待核实 | [volcengine-models](#volcengine-models) | pending | `db122b875c7b59baec587c6f6396f19ae87f927a8ed70a80fb255b17daa2fa41` |
| `doubao-seedream-4-0-250828` | 未声明 / 未声明 | CNY：未声明 / 未声明 | 待核实 | [volcengine-models](#volcengine-models) | pending | `6e8a87f8cba9a8f466f54571da1b8bc719a0e8a3f65b0a6e8fcbde6c1eaa31d1` |
| `doubao-seedance-2-0-260128` | 未声明 / 未声明 | CNY：未声明 / 未声明 | 待核实 | [volcengine-models](#volcengine-models) | pending | `a95a20d81bb8080a004c156a0d477848793fa2ae83a4172fd7089d0618f3b69e` |

### compute/coding-plans/volcengine-coding.json

<!-- source-config: compute/coding-plans/volcengine-coding.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `doubao-seed-2.1-pro` | 256000 / 262144 | 套餐：未声明 / 未声明 | 待核实 | [volcengine-models](#volcengine-models) | pending | `85a61b4d42c530c33c59a14f8f60f10e090794905ac4f31f9d29d5efeb66c4c4` |
| `doubao-seed-2.1-turbo` | 256000 / 262144 | 套餐：未声明 / 未声明 | 待核实 | [volcengine-models](#volcengine-models) | pending | `ebc959aff5369a94b8cbb9af265d156818367e1288d940b82f7f5d5efa867003` |
| `ark-code-latest` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | 待核实 | [volcengine-models](#volcengine-models) | pending | `be9dd39891377694e9dc4cd374dd621c7e95f522e01c6bb85fda4fe4ab005d8a` |
| `doubao-seed-2.0-code` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | 待核实 | [volcengine-models](#volcengine-models) | pending | `0c83fd2fa83a9961f6bddaf3e088f61bf910e1bf3577c7faaea0239caff232eb` |
| `doubao-seed-2.0-pro` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | 待核实 | [volcengine-models](#volcengine-models) | pending | `bca01f9e9cb8fefe1f9cc5d9538413d31e19b32580ff571a1580a7e98f9eeb6b` |
| `doubao-seed-2.0-lite` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | 待核实 | [volcengine-models](#volcengine-models) | pending | `1b2641bdca614aea9f263b5ba9765a0b956a20298767a2749fd5f70e09c1210d` |
| `doubao-seed-code` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | 待核实 | [volcengine-models](#volcengine-models) | pending | `d58ab6521d8eba0de4e7bce40bcc49ce5efcdd4a47a47ef06dbf44d12c2c7a94` |
| `glm-4.7` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | 待核实 | [volcengine-models](#volcengine-models) | pending | `8cc42790c13b45c33d469c953eefda17ffc6b14c7c5424c4c6ced3b2c60e5fd9` |
| `deepseek-v3.2` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | 待核实 | [volcengine-models](#volcengine-models) | pending | `069855abddb7617b6893fe36da35eb3627179b430eda53dd3e16f7c242585924` |
| `kimi-k2.5` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | 待核实 | [volcengine-models](#volcengine-models) | pending | `6dd6947fce300feb5a5fb581ba6ec91e5cdfa76dd84ec68de3aed09654cc0779` |
| `glm-5.1` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | 待核实 | [volcengine-models](#volcengine-models) | pending | `1ed6d3ca995fcea2ff2f08fa3cb96bcd4d3c70c4bef85bf0616e747c6c9f8215` |
| `kimi-k2.6` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | 待核实 | [volcengine-models](#volcengine-models) | pending | `ee81caae0dd1b38588769dfc65b0b6ac2b2cf0e09e5a1bfb72240a98e1e6756e` |
| `minimax-m2.5` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | 待核实 | [volcengine-models](#volcengine-models) | pending | `2235d1f0ecc196fb9e69e9c7aaacebe54fb40633be147b34ef5ab19a6348f70b` |
| `minimax-m2.7` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | 待核实 | [volcengine-models](#volcengine-models) | pending | `3e1eb61f1ce2ed6c73f1164446e4ef9b9eaa39cb128362c39eb8fc544b77bcd1` |

### compute/model-specs/volcengine.json

<!-- source-config: compute/model-specs/volcengine.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `doubao-seed-evolving` | 1000000 / 未声明 | 非计价主数据 | 待核实 | [volcengine-models](#volcengine-models) | pending | `660e020907b69b5702ed349da13fe551507d37e8d30b91ed63ec868612ea3d8b` |
| `doubao-seed-2.1-pro` | 256000 / 262144 | 非计价主数据 | 待核实 | [volcengine-models](#volcengine-models) | pending | `0f99e47b8ecba9cdbff037f8d1bc1852e8ada369754b595bfcbde49a9c8809db` |
| `doubao-seed-2.0-pro` | 256000 / 128000 | 非计价主数据 | 待核实 | [volcengine-models](#volcengine-models) | pending | `9a6e5f7752fb6a3a8a45a61be385b1fa31808f06094f8eff7280113aeb9a814c` |
| `doubao-seed-2.0-lite` | 256000 / 32000 | 非计价主数据 | 待核实 | [volcengine-models](#volcengine-models) | pending | `91de1ccd58f2492036c2160fa6f044bfed55f9aebdc80c5bc4351b2ae1857be3` |
| `doubao-seed-2.0-mini` | 256000 / 32000 | 非计价主数据 | 待核实 | [volcengine-models](#volcengine-models) | pending | `ed4e6b530891073e23b5a274d02fea972188c593ff3c951b1ae43d872c05b732` |
| `doubao-seed-2.0-code` | 256000 / 128000 | 非计价主数据 | 待核实 | [volcengine-models](#volcengine-models) | pending | `cf70b712624ad35352dfd19f8d906fb50adfc457d3b39391456f564361fb9df6` |
| `doubao-seed-1.8` | 256000 / 16000 | 非计价主数据 | 待核实 | [volcengine-models](#volcengine-models) | pending | `3d281c1137ef4f798aa8a22e7b3bf68ccf617c70991bd2caeda7a75b55246bdc` |
| `doubao-seed-1.6` | 256000 / 32000 | 非计价主数据 | 待核实 | [volcengine-models](#volcengine-models) | pending | `1884c26b902f8cdad0f679ee7fb1927df8ac878eb4901392153893552a56226a` |
| `doubao-seed-1.6-thinking` | 256000 / 16000 | 非计价主数据 | 待核实 | [volcengine-models](#volcengine-models) | pending | `43d679cc3f45c674933c54f4149c98c78947cbe92e3ac77c2d1b344d1c68302b` |
| `doubao-seed-1.6-flash` | 256000 / 16000 | 非计价主数据 | 待核实 | [volcengine-models](#volcengine-models) | pending | `741e3d542cb1c65f18dc55e7501f9c01857cfa66ed59c231634baddd8a25c327` |
| `doubao-seed-1.6-lite` | 256000 / 32000 | 非计价主数据 | 待核实 | [volcengine-models](#volcengine-models) | pending | `e01f28f85eb87c29e8b3f92402f25942014bd3566ec4ad73866ee0c4f09ca992` |
| `doubao-seed-1.6-vision` | 256000 / 32000 | 非计价主数据 | 待核实 | [volcengine-models](#volcengine-models) | pending | `054ec057c328f16fdd6789c4cf9646cae56814281312a325687fadfb2802ea47` |
| `doubao-seed-code` | 256000 / 32768 | 非计价主数据 | 待核实 | [volcengine-models](#volcengine-models) | pending | `95363d19b782dd3cda5c27c1e41bc74f289e120f7a734a1d9eba269c8a72ea28` |
| `deepseek-v3.2` | 128000 / 32000 | 非计价主数据 | 待核实 | [volcengine-models](#volcengine-models) | pending | `77bd6b66420dcca1fc4213b3d4b27b9bb6ef42af2d946e9ab54862355aad207a` |
| `deepseek-r1` | 128000 / 65536 | 非计价主数据 | 待核实 | [volcengine-models](#volcengine-models) | pending | `4fbfe540953f4dd270e4d915057560a1a54396ab2d2ac34166b35d5ec39e3a50` |
| `doubao-embedding` | 4096 / 未声明 | 非计价主数据 | 待核实 | [volcengine-models](#volcengine-models) | pending | `c71b9d32840c48cfc49eee9e27b45e7132a722d04320a4e9ab898db12354aaea` |
| `doubao-embedding-large` | 4096 / 未声明 | 非计价主数据 | 待核实 | [volcengine-models](#volcengine-models) | pending | `f8ae30c17a3d24ab2479535ede18d9e917c0deda8b116b902c8128a992eaa25d` |
| `volc-mega-tts-clone` | 未声明 / 未声明 | 非计价主数据 | 待核实 | [volcengine-models](#volcengine-models) | pending | `184791d990ba768f7f64bf9c93da592c712c35ee424f2cb99af70baf888134f3` |
| `volc-realtime-voice` | 未声明 / 未声明 | 非计价主数据 | 待核实 | [volcengine-models](#volcengine-models) | pending | `bff4fb32b24b366a2392efb5ad3e20b9cfcdb597617f153cae36e227ab770331` |
| `volc-simultaneous` | 未声明 / 未声明 | 非计价主数据 | 待核实 | [volcengine-models](#volcengine-models) | pending | `b50ab2732cda30b882d6d58a8af583b007d2077fafdf03f909f5ca6ba4be1b3b` |
| `volc-translation` | 未声明 / 未声明 | 非计价主数据 | 待核实 | [volcengine-models](#volcengine-models) | pending | `6d7a8eb0de1238718b1363aed9e105bef3de13e253e8e7bcb7fd9c9cdc9012c1` |
| `doubao-seedance-2.0` | 未声明 / 未声明 | 非计价主数据 | 待核实 | [volcengine-models](#volcengine-models) | pending | `f40da2385abf1e96ecf330e760aea91c8a9a692ec67b40f3cb41adbde9586432` |
| `doubao-seedance-2.0-fast` | 未声明 / 未声明 | 非计价主数据 | 待核实 | [volcengine-models](#volcengine-models) | pending | `c741ec5f9c71a16c3dd130ea3580779094e8848a117af4a8bdb116ea3d7184be` |
| `doubao-seedance-2.0-mini` | 未声明 / 未声明 | 非计价主数据 | 待核实 | [volcengine-models](#volcengine-models) | pending | `81a4c37ace729bfe9d29ff639ebb2ee0793011ca1ff9668a66d262b24a57ed31` |
| `doubao-seedance-1.5-pro` | 未声明 / 未声明 | 非计价主数据 | 待核实 | [volcengine-models](#volcengine-models) | pending | `23575f8a657305fe9f3327258222333fd6bb0816b059fa01bc11f146f0ce6b9b` |
| `doubao-seedance-1.0-pro` | 未声明 / 未声明 | 非计价主数据 | 待核实 | [volcengine-models](#volcengine-models) | pending | `32051a9f04462e68b7bcc122f2ecc86e97165caaf57498eb130c5464f5aeab24` |
| `doubao-seedance-1.0-pro-fast` | 未声明 / 未声明 | 非计价主数据 | 待核实 | [volcengine-models](#volcengine-models) | pending | `7015f87f390953cd4f69df320f178afd455eefaabce0de000204593f2e1f24e0` |
| `doubao-seed-2.1-turbo` | 256000 / 128000 | 非计价主数据 | 待核实 | [volcengine-models](#volcengine-models) | pending | `e1880f0f1399ca206066da2239ff08112daa522032bf434c304a69cc06f1b876` |

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
  "supplier": "volcengine",
  "checkedAt": "2026-10-03",
  "sources": [
    {
      "id": "volcengine-models",
      "url": "https://docs.volcengine.com/docs/ark/model-list?lang=zh",
      "kind": "official-doc",
      "scope": "volcengine 官方入口；具体地域与接入面待该页面逐字段确认",
      "retrieval": "shell",
      "checkedAt": "2026-10-03",
      "contentSha256": "f778a4ab9ca6a777e6b48c061c18aca14d3b9c25a02d0415d9375bcb6b7eba9d",
      "resolvedUrl": "https://docs.volcengine.com/docs/ark/model-list?lang=zh"
    },
    {
      "id": "volcengine-latest",
      "url": "https://docs.volcengine.com/docs/ark/latest-model?lang=zh",
      "kind": "official-doc",
      "scope": "volcengine 官方入口；具体地域与接入面待该页面逐字段确认",
      "retrieval": "shell",
      "checkedAt": "2026-10-03",
      "contentSha256": "ec23e84786c64869d37af1ce3ad95ed0ccceeabf47c1b8dce92fae81c62919f1",
      "resolvedUrl": "https://docs.volcengine.com/docs/ark/latest-model?lang=zh"
    },
    {
      "id": "volcengine-plan",
      "url": "https://docs.volcengine.com/docs/ark/coding-plan-personal-model-release?lang=zh",
      "kind": "official-doc",
      "scope": "volcengine 官方入口；具体地域与接入面待该页面逐字段确认",
      "retrieval": "shell",
      "checkedAt": "2026-10-03",
      "contentSha256": "5c92f4be6cd794f2fc3390f4c06c75b965f604bbc2daa1f118de65bf58a0ad38",
      "resolvedUrl": "https://docs.volcengine.com/docs/ark/coding-plan-personal-model-release?lang=zh"
    },
    {
      "id": "volcengine-seed",
      "url": "https://docs.volcengine.com/docs/82379/2549861",
      "kind": "official-doc",
      "scope": "volcengine 官方入口；具体地域与接入面待该页面逐字段确认",
      "retrieval": "unreadable",
      "checkedAt": "2026-10-03",
      "contentSha256": null,
      "resolvedUrl": null
    }
  ]
}
```
<!-- source-metadata:end -->
