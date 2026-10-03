# MiniMax：模型数据来源

核验轮次：2026-10-03。这里的日期是访问/复核日期，不是模型发布日期。

## 对应配置

- [minimax.json](../../../compute/providers/minimax.json)
- [minimax-coding.json](../../../compute/coding-plans/minimax-coding.json)
- [minimax.json](../../../compute/model-specs/minimax.json)

## 官网证据

### minimax-models

- 入口：[minimax-models](https://platform.minimax.cn/docs/guides/models-intro.md)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`MiniMax 国内原生多模态目录；不混用国际套餐`。
### minimax-anthropic

- 入口：[minimax-anthropic](https://platform.minimax.cn/docs/api-reference/text-anthropic-api.md)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`MiniMax 国内 Anthropic 兼容；M Plan 与按量模型开放范围区分`。
### minimax-video

- 入口：[minimax-video](https://platform.minimax.cn/docs/api-reference/video-generation-v2-create.md)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`MiniMax 国内原生视频 V2 任务 API`。
### minimax-hailuo

- 入口：[minimax-hailuo](https://platform.minimax.cn/docs/api-reference/video-generation-t2v.md)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`minimax 官方入口；具体地域与接入面待该页面逐字段确认`。

## 核验结论与边界

M3.1 Flash Preview 仅在 M Plan/Code 开放，需 adaptive thinking，none/disabled 被拒绝，effort low 至 max、默认 max。H3 使用视频 V2 原生协议，不通过 Anthropic Messages。合并了 Hailuo 2.3 Fast 的大小写重复规格，保留两个 exact 名称和原有非 Agent 路由策略。未由文档确认的输出上限保持缺省。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

## 当前配置与字段级核验

下表“计价”是配置的 inputPrice/outputPrice 字段快照，不统一代表 token 单价；按张、按秒、search unit 和兼容占位值需查看原配置 extra.pricingNotes 与官网说明。未列为已核字段的数值仍待核实。

### compute/providers/minimax.json

<!-- source-config: compute/providers/minimax.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `MiniMax-M3` | 1000000 / 131072 | CNY：2.1 / 8.4 | `modelName`→[minimax-models](#minimax-models) | [minimax-models](#minimax-models) | partial | `3d69bfddacd9274c5ff25807ae276e83226841074ded1abcf8a8aab476d083b4` |
| `MiniMax-M2.7` | 204800 / 131072 | CNY：2.1 / 8.4 | `modelName`→[minimax-models](#minimax-models) | [minimax-models](#minimax-models) | partial | `1b735417a021d9fa70298ce981f02452db9b7892393ee7dfd7ad6e7cf5379ab2` |
| `MiniMax-M2.7-highspeed` | 204800 / 131072 | CNY：4.2 / 16.8 | `modelName`→[minimax-models](#minimax-models) | [minimax-models](#minimax-models) | partial | `860f3218d418ff71d1e23c749a49befb8182e83f37c6ac15961aabfcc071b803` |
| `MiniMax-M2.5` | 204800 / 131072 | CNY：2.1 / 8.4 | `modelName`→[minimax-models](#minimax-models) | [minimax-models](#minimax-models) | partial | `b9a8560a8a36de43974f12b92517b4e008b8859423969839e8f4d30e3f4e048c` |
| `MiniMax-M2.5-highspeed` | 204800 / 131072 | CNY：4.2 / 16.8 | `modelName`→[minimax-models](#minimax-models) | [minimax-models](#minimax-models) | partial | `ec2193bc5976b056493f99f09f3145d3edb02d871c9f6e5d3470753a193aa00d` |
| `MiniMax-M2.1` | 204800 / 131072 | CNY：2.1 / 8.4 | `modelName`→[minimax-models](#minimax-models) | [minimax-models](#minimax-models) | partial | `25962a63327c36c091f1845d7718e16f6255273163f958011af0aff4210fab5a` |
| `MiniMax-M2.1-highspeed` | 204800 / 131072 | CNY：4.2 / 16.8 | `modelName`→[minimax-models](#minimax-models) | [minimax-models](#minimax-models) | partial | `34210e815ca9cc74d27b61ac99f0dc7a3eeccea06b951677f41efee497cac50f` |
| `MiniMax-M2` | 204800 / 131072 | CNY：2.1 / 8.4 | `modelName`→[minimax-models](#minimax-models) | [minimax-models](#minimax-models) | partial | `2e56c0b8f13cf765776e25396979f9be1a7a1ce86f52b2b40c8a8a6d65f43312` |
| `M2-her` | 204800 / 131072 | CNY：2.1 / 8.4 | 待核实 | [minimax-models](#minimax-models) | pending | `fdca76dc8fa57153b9a8923d326f49bf44c29f6af366570ee6ce5963306ce3a3` |
| `image-01` | 未声明 / 未声明 | CNY：未声明 / 未声明 | `modelName`→[minimax-models](#minimax-models) | [minimax-models](#minimax-models) | partial | `06b51ce557de6fc165769d2921568e0e8b6b564592f1c15d225b3af6ff904f59` |
| `image-01-live` | 未声明 / 未声明 | CNY：未声明 / 未声明 | `modelName`→[minimax-models](#minimax-models) | [minimax-models](#minimax-models) | partial | `fa44a2001d65f5aebbbd9bed87337d5ab6ee57e0fb0c2d7a7379bdfa0ef0270a` |
| `speech-2.8-hd` | 未声明 / 未声明 | CNY：未声明 / 未声明 | `modelName`→[minimax-models](#minimax-models) | [minimax-models](#minimax-models) | partial | `a3e49abfd1ecdb1dbbe91ceb8735240b573efae1e09ecdf1af7cb52ab10442c5` |
| `speech-2.8-turbo` | 未声明 / 未声明 | CNY：未声明 / 未声明 | `modelName`→[minimax-models](#minimax-models) | [minimax-models](#minimax-models) | partial | `cb357aa6845056f179778c5adaeeefba91580405883033055f08326a85977376` |
| `speech-2.6-hd` | 未声明 / 未声明 | CNY：未声明 / 未声明 | `modelName`→[minimax-models](#minimax-models) | [minimax-models](#minimax-models) | partial | `a945953551b756ca7857c39a1462376ea5292ea9481aa6c03a76a56e1bc275cc` |
| `speech-2.6-turbo` | 未声明 / 未声明 | CNY：未声明 / 未声明 | `modelName`→[minimax-models](#minimax-models) | [minimax-models](#minimax-models) | partial | `9c6a34232a66045823dd4836fbc1de0ca623ca041b687a6c8b5ab7e3cbbece8c` |
| `speech-02-hd` | 未声明 / 未声明 | CNY：未声明 / 未声明 | `modelName`→[minimax-models](#minimax-models) | [minimax-models](#minimax-models) | partial | `ab749319c588d8e7b6cf5c7a06d0d132dea1f33b115932646217017399787145` |
| `speech-02-turbo` | 未声明 / 未声明 | CNY：未声明 / 未声明 | `modelName`→[minimax-models](#minimax-models) | [minimax-models](#minimax-models) | partial | `495c18e55fd774656840f232b967fc607d81fb55bfc4bb126912dec47cf39857` |
| `MiniMax-Hailuo-2.3` | 未声明 / 未声明 | CNY：未声明 / 未声明 | `modelName`→[minimax-hailuo](#minimax-hailuo) | [minimax-hailuo](#minimax-hailuo) | partial | `1d1c5bc34172b924fd749fe4b84bbd3591ed4594332d482d791f349a761cdcd9` |
| `MiniMax-Hailuo-2.3-Fast` | 未声明 / 未声明 | CNY：未声明 / 未声明 | 待核实 | [minimax-models](#minimax-models) | pending | `c0dcfe88ad19e56bd78ab48e5a8c5bbb5f9246f58926155991596192e6e0a7b6` |
| `T2V-01-Director` | 未声明 / 未声明 | CNY：未声明 / 未声明 | `modelName`→[minimax-hailuo](#minimax-hailuo) | [minimax-hailuo](#minimax-hailuo) | partial | `f30748008c9482444561d044efa60f2d0dabcd58f606700e97814a8ca57b6875` |
| `MiniMax-Hailuo-02` | 未声明 / 未声明 | CNY：未声明 / 未声明 | `modelName`→[minimax-hailuo](#minimax-hailuo) | [minimax-hailuo](#minimax-hailuo) | partial | `f0319ac78d4b71315b8cf74ec6a8190270bc918994300bf6f75ea4568b85d9b9` |
| `S2V-01` | 未声明 / 未声明 | CNY：未声明 / 未声明 | 待核实 | [minimax-models](#minimax-models) | pending | `82c023a8ecfb43be748d16e531b657dc601907ee92bb57eac51e2ea0ebba5905` |
| `music-2.6` | 未声明 / 未声明 | CNY：未声明 / 未声明 | `modelName`→[minimax-models](#minimax-models) | [minimax-models](#minimax-models) | partial | `1233a724344182a4ec6d2f4eff93f9688b2efca5809171440ea0dd14460fccbe` |
| `music-2.5+` | 未声明 / 未声明 | CNY：未声明 / 未声明 | 待核实 | [minimax-models](#minimax-models) | pending | `3ebd24a88f998a1443c5d2a2bb862b0da94231481e67bceff52c3332de262539` |
| `music-2.5` | 未声明 / 未声明 | CNY：未声明 / 未声明 | 待核实 | [minimax-models](#minimax-models) | pending | `dcfdc6773cb2651b747ee1d7439508faf8d0a2ddb658063f82b59535462898c8` |
| `music-cover` | 未声明 / 未声明 | CNY：未声明 / 未声明 | `modelName`→[minimax-models](#minimax-models) | [minimax-models](#minimax-models) | partial | `48d05ec6aa5e222cc794e61fe26ddcae25b5d80ea1664e440f96a6262dde2436` |

### compute/coding-plans/minimax-coding.json

<!-- source-config: compute/coding-plans/minimax-coding.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `MiniMax-M3.1-Flash-Preview` | 1000000 / 未声明 | 套餐：未声明 / 未声明 | `contextWindow`→[minimax-anthropic](#minimax-anthropic), `extra.adaptiveThinking`→[minimax-anthropic](#minimax-anthropic), `extra.reasoning.defaultEffort`→[minimax-anthropic](#minimax-anthropic), `extra.reasoning.supportedEfforts`→[minimax-anthropic](#minimax-anthropic), `extra.thinkingOnly`→[minimax-anthropic](#minimax-anthropic), `modelName`→[minimax-models](#minimax-models) | [minimax-anthropic](#minimax-anthropic), [minimax-models](#minimax-models) | partial | `7e0cc90e1db63586b645a419cf0857279670f8786ade3ed2c97267dbedeadff5` |
| `MiniMax-M3` | 1000000 / 131072 | 套餐：未声明 / 未声明 | `modelName`→[minimax-models](#minimax-models) | [minimax-models](#minimax-models) | partial | `33efe987e47345eea3b5c6741b4f118283a8858121d6f5d3d7b77e3632bb6b75` |
| `MiniMax-M2.7` | 204800 / 131072 | 套餐：未声明 / 未声明 | `modelName`→[minimax-models](#minimax-models) | [minimax-models](#minimax-models) | partial | `30c8ad1e18f8d58e6fd2acebf2d7f91eefc20c0e9d04416324709fef403060c0` |
| `MiniMax-M2.7-highspeed` | 204800 / 131072 | 套餐：未声明 / 未声明 | `modelName`→[minimax-models](#minimax-models) | [minimax-models](#minimax-models) | partial | `d8c859c1abac6ee87cbf95d5dc39e1eac497368f4597c0a0551cddfc1e891040` |
| `speech-2.8-hd` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | `modelName`→[minimax-models](#minimax-models) | [minimax-models](#minimax-models) | partial | `925434054404483c427688a95dd87f5dc1222d28690ede4c6daa29ab83ad61b5` |
| `speech-2.8-turbo` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | `modelName`→[minimax-models](#minimax-models) | [minimax-models](#minimax-models) | partial | `6f94603dc0e754f72198805d61970505d9b145360821161455b1944e22aaf10c` |
| `image-01` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | `modelName`→[minimax-models](#minimax-models) | [minimax-models](#minimax-models) | partial | `998850a3fd732aac58766b1f0295c4123c32a055cae21b774fc64abac44119ce` |
| `image-01-live` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | `modelName`→[minimax-models](#minimax-models) | [minimax-models](#minimax-models) | partial | `435ab2a34f355e8ee77438bb06398fb58bfcfe6967660a2b625fadfd0196eb3e` |
| `MiniMax-Hailuo-2.3` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | `modelName`→[minimax-hailuo](#minimax-hailuo) | [minimax-hailuo](#minimax-hailuo) | partial | `67e9631b20839098e8d124a37e9defdaea080b0b9c447aa146d340892485f958` |
| `MiniMax-Hailuo-2.3-Fast` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | 待核实 | [minimax-models](#minimax-models) | pending | `b49d69df3725862965a3f90670a2f6653758bc9c97e0561e0543c262902ce250` |
| `music-2.6` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | `modelName`→[minimax-models](#minimax-models) | [minimax-models](#minimax-models) | partial | `33b5ee5bedb785fe1ac432125064164248cad868b97532ab9111005b20d817f8` |

### compute/model-specs/minimax.json

<!-- source-config: compute/model-specs/minimax.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `MiniMax-H3-Max` | 未声明 / 未声明 | 非计价主数据 | `id`→[minimax-video](#minimax-video) | [minimax-video](#minimax-video) | partial | `6a4b991edc97b9b80bc91b0f7ce5cbdfab2fd4fc2ea178c6217afeb3157336ba` |
| `MiniMax-H3` | 未声明 / 未声明 | 非计价主数据 | `id`→[minimax-video](#minimax-video) | [minimax-video](#minimax-video) | partial | `51d2f11fda5496710dee7ae1149e0e394ee7da9e0c24e7509e9e9227b23b23e8` |
| `MiniMax-M3.1-Flash-Preview` | 1000000 / 未声明 | 非计价主数据 | `id`→[minimax-models](#minimax-models), `spec.contextWindow`→[minimax-anthropic](#minimax-anthropic), `spec.extra.adaptiveThinking`→[minimax-anthropic](#minimax-anthropic), `spec.extra.thinkingOnly`→[minimax-anthropic](#minimax-anthropic) | [minimax-anthropic](#minimax-anthropic), [minimax-models](#minimax-models) | partial | `7d1e887b030492d126387ca4eb1b557c628bfc86aa7298757f3aea1250abcd73` |
| `MiniMax-M3` | 1048576 / 512000 | 非计价主数据 | `id`→[minimax-models](#minimax-models) | [minimax-models](#minimax-models) | partial | `3d4e178769d146dfd89122bf684ed199052fee140ce3b3af094f8844540e266b` |
| `MiniMax-M2.7` | 204800 / 131072 | 非计价主数据 | `id`→[minimax-models](#minimax-models) | [minimax-models](#minimax-models) | partial | `b43bd21eb81cb37efc361377c399a6a89a670b34d3df04c2e8ee9d139f4dad8b` |
| `MiniMax-M2.5` | 204800 / 131072 | 非计价主数据 | `id`→[minimax-models](#minimax-models) | [minimax-models](#minimax-models) | partial | `af99f444afa3dec4bec7e5b18e600bd5bb6324e5f778429fa7d61bea677fc873` |
| `MiniMax-M2` | 204800 / 131072 | 非计价主数据 | `id`→[minimax-models](#minimax-models) | [minimax-models](#minimax-models) | partial | `9f427353c9e29ac250e7f3ffa2f431bcd05a6ab1b19b615632e6a700c92846ae` |
| `MiniMax-M2.7-highspeed` | 204800 / 131072 | 非计价主数据 | `id`→[minimax-models](#minimax-models) | [minimax-models](#minimax-models) | partial | `2fc7956fcfa436a76559587007b751d12c1df843156e5ff53d44660545ea65ed` |
| `MiniMax-M2.5-highspeed` | 204800 / 131072 | 非计价主数据 | `id`→[minimax-models](#minimax-models) | [minimax-models](#minimax-models) | partial | `ac2025b4e33145d35d353e869d9273eccd92b20b4775a7295a5283fe8818ef66` |
| `MiniMax-M2.1` | 204800 / 131072 | 非计价主数据 | `id`→[minimax-models](#minimax-models) | [minimax-models](#minimax-models) | partial | `781c8a7a5af2a9902efd5507d2f50186af6a5e2bfdf46e66daff5b53307317c7` |
| `MiniMax-M2.1-highspeed` | 204800 / 131072 | 非计价主数据 | `id`→[minimax-models](#minimax-models) | [minimax-models](#minimax-models) | partial | `d1a9cc4120ae5ff821cc753e1e7bf50402c3c0f6390c1e3d7f4da4b49afff45f` |
| `M2-her` | 204800 / 131072 | 非计价主数据 | 待核实 | [minimax-models](#minimax-models) | pending | `0b0b73a83d1eeb79b432792b2e1a907246f1fc63a7e13b914cb62bae8266af16` |
| `MiniMax-Text-01` | 1000000 / 131072 | 非计价主数据 | 待核实 | [minimax-models](#minimax-models) | pending | `d8eddc0bd84be7970db38d5e5c12f2ed98dfb5dedda0dc6ea834f06aca32b71c` |
| `image-01` | 未声明 / 未声明 | 非计价主数据 | `id`→[minimax-models](#minimax-models) | [minimax-models](#minimax-models) | partial | `1a92120bd165c0b646c70a101b3f15c5069e9f35e4a788564d241a3e88b11a40` |
| `image-01-live` | 未声明 / 未声明 | 非计价主数据 | `id`→[minimax-models](#minimax-models) | [minimax-models](#minimax-models) | partial | `d65736ce0901b4b19479c266e909f570ad2736dabea611a0a04ccbb9928a62c3` |
| `speech-2.8-hd` | 未声明 / 未声明 | 非计价主数据 | `id`→[minimax-models](#minimax-models) | [minimax-models](#minimax-models) | partial | `9ddcba71614169cc0fa2053a4bca6a005fcdcf5e143f8d85e491577fae0720b5` |
| `speech-2.8-turbo` | 未声明 / 未声明 | 非计价主数据 | `id`→[minimax-models](#minimax-models) | [minimax-models](#minimax-models) | partial | `eb3521e3f770066dff39f43dccaa0c5f049e9e3d47c43f03b5135e0fa68406ca` |
| `speech-2.6-hd` | 未声明 / 未声明 | 非计价主数据 | `id`→[minimax-models](#minimax-models) | [minimax-models](#minimax-models) | partial | `fe321c4f4755e0c341ba401e812102b210262f975f9d092bd365e6418e81d7c9` |
| `speech-2.6-turbo` | 未声明 / 未声明 | 非计价主数据 | `id`→[minimax-models](#minimax-models) | [minimax-models](#minimax-models) | partial | `d518704e697e66c8aee3e227f6e6783ee600f6f7e9b62436e615a8b3931868c4` |
| `speech-02-hd` | 未声明 / 未声明 | 非计价主数据 | `id`→[minimax-models](#minimax-models) | [minimax-models](#minimax-models) | partial | `10e9b291111a8fdb4a5c3f07ce2833913b0529286e5d6b31755252978b3377c8` |
| `speech-02-turbo` | 未声明 / 未声明 | 非计价主数据 | `id`→[minimax-models](#minimax-models) | [minimax-models](#minimax-models) | partial | `2d1e85ba0502c633004fbb58f1fcbf3a07e8c5b826f74cb109162591c9d059d7` |
| `MiniMax-Hailuo-2.3` | 未声明 / 未声明 | 非计价主数据 | `id`→[minimax-hailuo](#minimax-hailuo) | [minimax-hailuo](#minimax-hailuo) | partial | `496d4d43fc6907da077d142f30cf22a94f779010ecaa44f61608362f25ac3a89` |
| `MiniMax-Hailuo-2.3-Fast` | 未声明 / 未声明 | 非计价主数据 | 待核实 | [minimax-models](#minimax-models) | pending | `ac5e58a233b8b17193afc0b62cf7072715c39f00f6ad597138992015612784d7` |
| `T2V-01-Director` | 未声明 / 未声明 | 非计价主数据 | `id`→[minimax-hailuo](#minimax-hailuo) | [minimax-hailuo](#minimax-hailuo) | partial | `0f2049c2c710bea11995021ada06ca598cf80619496733b1e63d1f740b2c92da` |
| `MiniMax-Hailuo-02` | 未声明 / 未声明 | 非计价主数据 | `id`→[minimax-hailuo](#minimax-hailuo) | [minimax-hailuo](#minimax-hailuo) | partial | `40ee8bbe7bea40c153ed318c49127df56afaa9f53652219e10a60526b275c643` |
| `S2V-01` | 未声明 / 未声明 | 非计价主数据 | 待核实 | [minimax-models](#minimax-models) | pending | `8963acc4d78a1a407cf26a2fac94cddef5cd1f706a41ee58080ea4f4d8b99fed` |
| `music-2.6` | 未声明 / 未声明 | 非计价主数据 | `id`→[minimax-models](#minimax-models) | [minimax-models](#minimax-models) | partial | `ad60546c353e79623ed8f0d386b79bdf1aa4ba6048a4615c0f0c81a3277c6056` |
| `music-2.5+` | 未声明 / 未声明 | 非计价主数据 | 待核实 | [minimax-models](#minimax-models) | pending | `54dd9ac6c5650713a4ea847f533ae28e4d7c4ad7a1670a7bfa0a9ada2a557a68` |
| `music-2.5` | 未声明 / 未声明 | 非计价主数据 | 待核实 | [minimax-models](#minimax-models) | pending | `b655915659c7ed630e289f2a82eebc2986f2ff2df8e811a572e63d9dd5311378` |
| `music-cover` | 未声明 / 未声明 | 非计价主数据 | `id`→[minimax-models](#minimax-models) | [minimax-models](#minimax-models) | partial | `3e3e893c904eb8df379f46502cd44680f5c9295ababc3ee6ce01d6b81bdf4bc6` |

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
  "supplier": "minimax",
  "checkedAt": "2026-10-03",
  "sources": [
    {
      "id": "minimax-models",
      "url": "https://platform.minimax.cn/docs/guides/models-intro.md",
      "kind": "official-doc",
      "scope": "MiniMax 国内原生多模态目录；不混用国际套餐",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "79aec16c3b99d3871ab75de58087b3d1baa40dd79a33b639ef3bc1c079859a46",
      "resolvedUrl": "https://platform.minimax.cn/docs/guides/models-intro.md"
    },
    {
      "id": "minimax-anthropic",
      "url": "https://platform.minimax.cn/docs/api-reference/text-anthropic-api.md",
      "kind": "official-doc",
      "scope": "MiniMax 国内 Anthropic 兼容；M Plan 与按量模型开放范围区分",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "6daf89aa6798bc504662acdeb6ed2a269fae35f94f1fa14559335c87c4ce7142",
      "resolvedUrl": "https://platform.minimax.cn/docs/api-reference/text-anthropic-api.md"
    },
    {
      "id": "minimax-video",
      "url": "https://platform.minimax.cn/docs/api-reference/video-generation-v2-create.md",
      "kind": "official-doc",
      "scope": "MiniMax 国内原生视频 V2 任务 API",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "4dbb502b654cc136930a55285108aa18fec0702db40397431f7058deccb793a5",
      "resolvedUrl": "https://platform.minimax.cn/docs/api-reference/video-generation-v2-create.md"
    },
    {
      "id": "minimax-hailuo",
      "url": "https://platform.minimax.cn/docs/api-reference/video-generation-t2v.md",
      "kind": "official-doc",
      "scope": "minimax 官方入口；具体地域与接入面待该页面逐字段确认",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "cf0a461b04259a227db2ea3ca31ec62086775736afce5cb6e8d0d42c5c8b74fa",
      "resolvedUrl": "https://platform.minimax.cn/docs/api-reference/video-generation-t2v.md"
    }
  ]
}
```
<!-- source-metadata:end -->
