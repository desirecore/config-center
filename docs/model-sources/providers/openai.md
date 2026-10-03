# OpenAI：模型数据来源

核验轮次：2026-10-03。这里的日期是访问/复核日期，不是模型发布日期。

## 对应配置

- [local-whisper.json](../../../compute/providers/local-whisper.json)
- [openai-codex.json](../../../compute/providers/openai-codex.json)
- [openai.json](../../../compute/providers/openai.json)
- [openai.json](../../../compute/model-specs/openai.json)

## 官网证据

### openai-models

- 入口：[openai-models](https://developers.openai.com/api/docs/models)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`OpenAI 直连 API 模型目录；价格为 USD，订阅可用性另核`。
### openai-sol61

- 入口：[openai-sol61](https://developers.openai.com/api/docs/models/gpt-6.1-sol.md)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`OpenAI 直连 API；标准 USD token 计价；内在规格可跨接入面参考`。
### whisper

- 入口：[whisper](https://github.com/openai/whisper)
- 类型：`official-repository`；当前读取状态：`fetched`；地域/接入面：`OpenAI 官方开源仓库；本地模型安装与实际服务另核`。

## 核验结论与边界

GPT-6.1 Sol 的窗口、输出、推理档位与直连计价已再次核对。API 参数不能自动套用到订阅后端；订阅的档位限制保留接入面记录。其他旧型号尚未在本次逐字段复核。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

`extra.responsesOnly` 是为工具调用采用的保守协议收紧。官网要求工具调用走 Responses；普通无工具的 Chat Completions 仍支持，不能把此配置理解为原厂完全不支持 Chat Completions。

## 当前配置与字段级核验

下表“计价”是配置的 inputPrice/outputPrice 字段快照，不统一代表 token 单价；按张、按秒、search unit 和兼容占位值需查看原配置 extra.pricingNotes 与官网说明。未列为已核字段的数值仍待核实。

### compute/providers/local-whisper.json

<!-- source-config: compute/providers/local-whisper.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `whisper-large-v3` | 未声明 / 未声明 | USD：未声明 / 未声明 | 待核实 | [openai-models](#openai-models) | pending | `f70d5b2a9f32872c27eb812a004a8d7f273b3bfaa466a907fd71ba824b2a4722` |

### compute/providers/openai-codex.json

<!-- source-config: compute/providers/openai-codex.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `gpt-6.1-sol` | 1050000 / 128000 | USD：未声明 / 未声明 | `contextWindow`→[openai-sol61](#openai-sol61), `maxOutputTokens`→[openai-sol61](#openai-sol61), `modelName`→[openai-models](#openai-models) | [openai-models](#openai-models), [openai-sol61](#openai-sol61) | partial | `3527505f9acb6a84d43acf690d8ede9b78252d5af336af5189d6092711dc5f02` |
| `gpt-6-sol` | 1050000 / 128000 | USD：未声明 / 未声明 | 待核实 | [openai-models](#openai-models) | pending | `ba7bcc6126a0506eada05e520b2746e9a55ba5466eb51f7bf9d7fbebfb9e4bda` |
| `gpt-6-luna` | 1050000 / 128000 | USD：未声明 / 未声明 | `modelName`→[openai-models](#openai-models) | [openai-models](#openai-models) | partial | `0149d5e531630f51fd64c24df6cd7a78cc2ca21034af09e1dee706bda0ef65f1` |
| `gpt-6-astra` | 1050000 / 128000 | USD：未声明 / 未声明 | `modelName`→[openai-models](#openai-models) | [openai-models](#openai-models) | partial | `8e958e8a76f90b126b2a3aed30fb7abb2cd2ae16d9df51fa3238518581dcc787` |
| `gpt-reserve` | 272000 / 128000 | USD：未声明 / 未声明 | 待核实 | [openai-models](#openai-models) | pending | `51eb1a1ba49b545eba97e2ae1ceb60d7e36b19a7e31ba018e31b4f33ba788bda` |
| `gpt-5.6-sol` | 272000 / 128000 | USD：未声明 / 未声明 | 待核实 | [openai-models](#openai-models) | pending | `724764899f661614cd8caebe78972d5795a48be0b8d5dfc087a7848f99753da3` |
| `gpt-5.6-terra` | 272000 / 128000 | USD：未声明 / 未声明 | 待核实 | [openai-models](#openai-models) | pending | `cf85035f456598f2fc12cd04fc277af0329e9d838221dd6ed21253850c20dd02` |
| `gpt-5.6-luna` | 272000 / 128000 | USD：未声明 / 未声明 | 待核实 | [openai-models](#openai-models) | pending | `93c616f629edcb11750fe6771d2cb8b64e69b63329636bbade10f11a982a2716` |
| `gpt-5.5` | 272000 / 128000 | USD：未声明 / 未声明 | 待核实 | [openai-models](#openai-models) | pending | `8220a3c48314d62e29e5401f9e8c00ba636d98719ab45a775a30bf2cbd5b479a` |
| `gpt-5.4` | 272000 / 128000 | USD：未声明 / 未声明 | 待核实 | [openai-models](#openai-models) | pending | `037edb8fbb6c446ce132d10c7539bc9fb7260c0dd17169a874942e4f2999369d` |
| `gpt-5.4-mini` | 272000 / 128000 | USD：未声明 / 未声明 | 待核实 | [openai-models](#openai-models) | pending | `021e6f647c868b9c5385aad2a8de08e14c3bc2b900fd2664e3af4b41ee8af386` |
| `gpt-5.3-codex-spark` | 128000 / 未声明 | USD：未声明 / 未声明 | 待核实 | [openai-models](#openai-models) | pending | `0590655d6add95714b4106106d7475846a7ea22ae220cf9f5b2c72d5e51caf71` |

### compute/providers/openai.json

<!-- source-config: compute/providers/openai.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `gpt-6.1-sol` | 1050000 / 128000 | USD：2 / 10 | `contextWindow`→[openai-sol61](#openai-sol61), `extra.cachedInputPrice`→[openai-sol61](#openai-sol61), `extra.reasoning.defaultEffort`→[openai-sol61](#openai-sol61), `extra.reasoning.supportedEfforts`→[openai-sol61](#openai-sol61), `extra.responsesOnly`→[openai-sol61](#openai-sol61), `inputPrice`→[openai-sol61](#openai-sol61), `maxOutputTokens`→[openai-sol61](#openai-sol61), `modelName`→[openai-models](#openai-models), `outputPrice`→[openai-sol61](#openai-sol61) | [openai-models](#openai-models), [openai-sol61](#openai-sol61) | partial | `9d807c32156ff0d5b59b60701799e935b8cbe6927ff968efefb8c7d22cf48e0a` |
| `gpt-image-2.5-sunburst` | 未声明 / 未声明 | USD：5 / 30 | 待核实 | [openai-models](#openai-models) | pending | `1887dc0a8953e82adb85ae659912427e9d3152b1541e71be0ea50f3c256252ca` |
| `gpt-image-2.5-flare` | 未声明 / 未声明 | USD：5 / 30 | 待核实 | [openai-models](#openai-models) | pending | `237068880cc16f6de272e1434be409d05d82e9649f0103c5f38fd90d79790135` |
| `gpt-6-sol` | 1050000 / 128000 | USD：2 / 10 | 待核实 | [openai-models](#openai-models) | pending | `b58cff20b620b9c2f735338d3dfdc91d3f1561851cfa24103e3dad65d25ef9b4` |
| `gpt-6-luna` | 1050000 / 128000 | USD：0.1 / 0.5 | `modelName`→[openai-models](#openai-models) | [openai-models](#openai-models) | partial | `8db050e3af15294084918d9670b57b3d03b8dc34833b2111dab588096e65b212` |
| `gpt-6-astra` | 1050000 / 128000 | USD：10 / 50 | `modelName`→[openai-models](#openai-models) | [openai-models](#openai-models) | partial | `bcb8c3cc3c3cb4cb972f27881fc2fc7a54e0dc04c36c827f3e85ddecdb98cacc` |
| `gpt-5.5` | 1050000 / 128000 | USD：5 / 30 | 待核实 | [openai-models](#openai-models) | pending | `e6abbb49560a8c28c600008835b498d054520ce7e1de109ea30f57360aba4eb8` |
| `gpt-5.5-pro` | 1050000 / 128000 | USD：30 / 180 | 待核实 | [openai-models](#openai-models) | pending | `48f5f5800e7d35f7b74e1937521fa1fd9c8fcc50cab7f62a9407a6a95932d298` |
| `gpt-5.4` | 1050000 / 128000 | USD：2.5 / 15 | 待核实 | [openai-models](#openai-models) | pending | `3b7dfb8901c12eae785d26e34e091bf06928b5523962b34ef07ad8b5ecd99048` |
| `gpt-5.4-pro` | 1050000 / 128000 | USD：30 / 180 | 待核实 | [openai-models](#openai-models) | pending | `206f598a6646bf7f0c3b4643385adb70ffaa798f06b56a32ce46e090fd4a51f6` |
| `gpt-5.4-mini` | 400000 / 128000 | USD：0.75 / 4.5 | 待核实 | [openai-models](#openai-models) | pending | `b14b746d46d9a0e03d4998ebdb31644d3620121d265bd657e3b9447fc0349dde` |
| `gpt-5.4-nano` | 400000 / 128000 | USD：0.2 / 1.25 | 待核实 | [openai-models](#openai-models) | pending | `bde978b68ce6cabc702357129947f2d078feefe42a0dc84537a3897d6dbf4d70` |
| `gpt-image-2` | 未声明 / 未声明 | USD：5 / 30 | 待核实 | [openai-models](#openai-models) | pending | `f79f9eea0f11cc24cfc030c81d6ae935dc32256e6330e61b6267c64b711a6610` |
| `gpt-realtime-2.1` | 128000 / 32000 | USD：4 / 24 | `modelName`→[openai-models](#openai-models) | [openai-models](#openai-models) | partial | `cc8b841e5906d75dede2db4650f157d4dc1c18968987256658a1639ef08eb145` |
| `gpt-realtime-2.1-mini` | 128000 / 32000 | USD：0.6 / 2.4 | 待核实 | [openai-models](#openai-models) | pending | `7ac9cf494f393bee751fef43a156e03e736d7b415ea5d9a01d2f181a0eaee123` |
| `gpt-realtime-translate` | 16000 / 2000 | USD：未声明 / 未声明 | `modelName`→[openai-models](#openai-models) | [openai-models](#openai-models) | partial | `8509625abb490c7d5a8e62d116d878f319e49d4ef5b4cc57602c8df52d9ccb1a` |
| `gpt-5.2` | 400000 / 128000 | USD：1.75 / 14 | 待核实 | [openai-models](#openai-models) | pending | `b0cac596bba5ca5e12651328d4799327298df18019c5f9ecaa246ee03c0d22b4` |
| `gpt-5.2-pro` | 400000 / 128000 | USD：21 / 168 | 待核实 | [openai-models](#openai-models) | pending | `e11d88b8593be9431d6d96a5f9b0cbbd466d14656476974c99f65105ba0c865b` |
| `gpt-5.1` | 400000 / 128000 | USD：1.25 / 10 | 待核实 | [openai-models](#openai-models) | pending | `18c69fb7ddfecac0d5995bfa85afa37639d006a8bd86e978ada243f4ddd93c01` |
| `gpt-5` | 400000 / 128000 | USD：1.25 / 10 | 待核实 | [openai-models](#openai-models) | pending | `7c497a4d107dadc1a677f4a338e276be4dad305a8a13b0fb1f7bd1e0089549e5` |
| `gpt-5-pro` | 400000 / 272000 | USD：15 / 120 | 待核实 | [openai-models](#openai-models) | pending | `644c27f963b553e3ad36f1b1f14f8c56f6689b98d43e53a27858f08b5b42c15b` |
| `gpt-5-mini` | 400000 / 128000 | USD：0.25 / 2 | 待核实 | [openai-models](#openai-models) | pending | `3ac3708cc1880699ad04494bc1cd16b300c6ab8df1c59344b86f85aa889fd023` |
| `gpt-5-nano` | 400000 / 128000 | USD：0.05 / 0.4 | 待核实 | [openai-models](#openai-models) | pending | `90af0d7d4b1a5df561d95e574e1ebc1c4c974d42175a6a1a3046135edb5f80b8` |
| `gpt-4.1` | 1047576 / 32768 | USD：2 / 8 | 待核实 | [openai-models](#openai-models) | pending | `18435fc4eefa2ad36145414078cf0a012616c35f5ae17e12a35dc233ae247b3a` |
| `gpt-4.1-mini` | 1047576 / 32768 | USD：0.4 / 1.6 | 待核实 | [openai-models](#openai-models) | pending | `6b52ec6993140f8e96e6f2a1131e8a2c73f04a81db2b86d1a390c68dee719806` |
| `gpt-4.1-nano` | 1047576 / 32768 | USD：0.1 / 0.4 | 待核实 | [openai-models](#openai-models) | pending | `41339189c0645800f9be182f997c45ba1928d751f2d827a3767056c66c9bdd8f` |
| `gpt-4o` | 128000 / 16384 | USD：2.5 / 10 | `modelName`→[openai-models](#openai-models) | [openai-models](#openai-models) | partial | `a5d6d4e83829908bcaae96ac2cccbd6bfe6f1f2043b863302671c9b1c39f4e74` |
| `gpt-4o-mini` | 128000 / 16384 | USD：0.15 / 0.6 | 待核实 | [openai-models](#openai-models) | pending | `3447b778ee958556851d66eed8968fffbd74a98bc12f077279456947ea773fdf` |
| `text-embedding-3-small` | 8192 / 未声明 | USD：0.02 / 未声明 | 待核实 | [openai-models](#openai-models) | pending | `492c68d7e6bb6a013813ffaddf804f19c531b0a19d141d93585a4ea1a4763f9a` |
| `text-embedding-3-large` | 8192 / 未声明 | USD：0.13 / 未声明 | 待核实 | [openai-models](#openai-models) | pending | `ceee564cdb298fae911c16c64a3845e33437b4b7a20fc9940bc016cc077de6d6` |
| `tts-1` | 未声明 / 未声明 | USD：15 / 未声明 | 待核实 | [openai-models](#openai-models) | pending | `9436a8b23a058f707163bddebb8dd006a3a667fe9af81bc59b5a679868b271c6` |
| `tts-1-hd` | 未声明 / 未声明 | USD：30 / 未声明 | 待核实 | [openai-models](#openai-models) | pending | `530a53d762e5320e20de873ecff12f605f497d0a9bdc0f872219875362edce68` |
| `whisper-1` | 未声明 / 未声明 | USD：0.006 / 未声明 | 待核实 | [openai-models](#openai-models) | pending | `50b3aee5e7487a50beb562a148359b6524ac60bf3415aea7de532885c1b138f1` |
| `o3` | 200000 / 100000 | USD：2 / 8 | 待核实 | [openai-models](#openai-models) | pending | `2964e57c256f01621ac8d607d3ef74648629c4dfa25b8afbfcc87a937a186ad5` |
| `o3-pro` | 200000 / 100000 | USD：20 / 80 | 待核实 | [openai-models](#openai-models) | pending | `8d07cd9071fd343981145713cfef8c3006e863b02ca931a89b38bec210fc4bcc` |
| `o3-mini` | 200000 / 100000 | USD：1.1 / 4.4 | 待核实 | [openai-models](#openai-models) | pending | `eff6dafc00d6db610ae161993de6d9b111b2c0bb4a8cf00843350f3e34f09bd3` |
| `o4-mini` | 200000 / 100000 | USD：1.1 / 4.4 | 待核实 | [openai-models](#openai-models) | pending | `ea0b126f36dd54e516055865544058d32d9afb3b7ca921846a8afdbdc8e75e78` |

### compute/model-specs/openai.json

<!-- source-config: compute/model-specs/openai.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `gpt-6.1-sol` | 1050000 / 128000 | 非计价主数据 | `id`→[openai-models](#openai-models), `spec.contextWindow`→[openai-sol61](#openai-sol61), `spec.maxOutputTokens`→[openai-sol61](#openai-sol61) | [openai-models](#openai-models), [openai-sol61](#openai-sol61) | partial | `0f555c292b6c9b8bea4093c2f9afb12aa7ed58874b63c5c0e1063c7943a2f4e7` |
| `gpt-image-2.5-sunburst` | 未声明 / 未声明 | 非计价主数据 | 待核实 | [openai-models](#openai-models) | pending | `2f21291b27cb2d43b340c43d7cf7611e95d19a28b792ec0fe7f6eb736e405157` |
| `gpt-image-2.5-flare` | 未声明 / 未声明 | 非计价主数据 | 待核实 | [openai-models](#openai-models) | pending | `c23db8709aa26d33bc230c8079883074416abb373c4bd9d5a96d825fb1ea7132` |
| `gpt-6-sol` | 1050000 / 128000 | 非计价主数据 | 待核实 | [openai-models](#openai-models) | pending | `1cf6f14599a255a98e427301b58729b24823d75243938f20c86db3db07f565e0` |
| `gpt-6-luna` | 1050000 / 128000 | 非计价主数据 | `id`→[openai-models](#openai-models) | [openai-models](#openai-models) | partial | `b8ce7f595090e2796e58aa69420c878b072d8b104f8efe5c61a08623ebca7452` |
| `gpt-6-astra` | 1050000 / 128000 | 非计价主数据 | `id`→[openai-models](#openai-models) | [openai-models](#openai-models) | partial | `11483d9d9822c28148540e5b3aac06614fc2fec0ceb63c16ecd3b8c22e7adfdf` |
| `gpt-reserve` | 1050000 / 128000 | 非计价主数据 | 待核实 | [openai-models](#openai-models) | pending | `b07665e638e562cf09ec384af9299b4fe3389a1cecea833b1f01e7806797078e` |
| `gpt-image-2` | 400000 / 未声明 | 非计价主数据 | 待核实 | [openai-models](#openai-models) | pending | `79e25b30945455348024efa9a83a0a65c5c6cf9f4c8cb80681c2f63f36acea46` |
| `gpt-5.5` | 1050000 / 128000 | 非计价主数据 | 待核实 | [openai-models](#openai-models) | pending | `20f9386334e9504466ab789409aa6769b8d381ee306a97c42b92e9a2743370ec` |
| `gpt-5.4` | 1050000 / 128000 | 非计价主数据 | 待核实 | [openai-models](#openai-models) | pending | `0d0981e9f7c721fe920d732cd24fb349a81e9ef4ffec5d1c809c9bf315e09fa5` |
| `gpt-5.2` | 400000 / 128000 | 非计价主数据 | 待核实 | [openai-models](#openai-models) | pending | `8836944c6fe2f1674516343b080ae6eee9094eabb4a75f17fdd51a996910e3ce` |
| `gpt-5.1` | 400000 / 128000 | 非计价主数据 | 待核实 | [openai-models](#openai-models) | pending | `497b464571284b8c5a83ede641032997d1b0fcf22a132d239aa329df2f70c918` |
| `gpt-5` | 400000 / 128000 | 非计价主数据 | 待核实 | [openai-models](#openai-models) | pending | `483f421e0f4abf5c5f062978835cb07288268407beacf98e6a364a33df1eff22` |
| `gpt-5-mini` | 400000 / 128000 | 非计价主数据 | 待核实 | [openai-models](#openai-models) | pending | `a488fa78a6ffc8d6414a03f678ac2240d06d27b76676ca272fc9ba47dccff10d` |
| `gpt-5-nano` | 400000 / 128000 | 非计价主数据 | 待核实 | [openai-models](#openai-models) | pending | `bf4ea84c497783cfbb7eaf471b5b23f8799e85a8b8fd660c6832fa12fd390173` |
| `gpt-4.1` | 1047576 / 32768 | 非计价主数据 | 待核实 | [openai-models](#openai-models) | pending | `ceb8df6276daeff3aff0d2e52bbac46c047bf67b1a62bb2b49cab39460b0531a` |
| `gpt-4o` | 128000 / 16384 | 非计价主数据 | `id`→[openai-models](#openai-models) | [openai-models](#openai-models) | partial | `f0832a0fa743faf4f87895483584822f4138157b174490ff934312d4e6587393` |
| `gpt-4o-mini` | 128000 / 16384 | 非计价主数据 | 待核实 | [openai-models](#openai-models) | pending | `035b7b88a675a7b66c62b09d75adc8ff0008596a219ff69cc529b69be2fdefb2` |
| `o3` | 200000 / 100000 | 非计价主数据 | 待核实 | [openai-models](#openai-models) | pending | `a88597c6a4269b892c5999c745e462c8327b2fa47ca07740e72804b788fc17b4` |
| `o3-mini` | 200000 / 100000 | 非计价主数据 | 待核实 | [openai-models](#openai-models) | pending | `5bc5f814b749c3fcc9de14716ef29f5a4ca38dfcdd7701882f8908e239316f9e` |
| `o4-mini` | 200000 / 100000 | 非计价主数据 | 待核实 | [openai-models](#openai-models) | pending | `5161cbdf2f8c7030bcc1c2487c7cb385664da6294738742034fe7ac1ac2c4d50` |
| `gpt-5.2-pro` | 400000 / 128000 | 非计价主数据 | 待核实 | [openai-models](#openai-models) | pending | `18b690628f44a59c130a4e8ae41a6ace4a1caad5a6234963a60ea5ed1456dfc0` |
| `gpt-5-pro` | 400000 / 272000 | 非计价主数据 | 待核实 | [openai-models](#openai-models) | pending | `b75b1cb2feb347a23ae41b1062d9f54198b0562cb287d40b76c263a034c2eb30` |
| `gpt-4.1-mini` | 1047576 / 32768 | 非计价主数据 | 待核实 | [openai-models](#openai-models) | pending | `4755a7febc56973c29e88e112b85c8568b8f873ea9e78304e868586473edba7b` |
| `gpt-4.1-nano` | 1047576 / 32768 | 非计价主数据 | 待核实 | [openai-models](#openai-models) | pending | `10391c540c483d083065285db7767352c94a881f8cb6288fd590f5334bb3eed1` |
| `text-embedding-3-small` | 8192 / 未声明 | 非计价主数据 | 待核实 | [openai-models](#openai-models) | pending | `9047608ab8629ce50f1902ce8ac44bee650f828593574f84b2a1097785a8d062` |
| `text-embedding-3-large` | 8192 / 未声明 | 非计价主数据 | 待核实 | [openai-models](#openai-models) | pending | `90a3d0970c65cd5ac4c2739015bd46c59c5055b7914a75959fe83d227573690e` |
| `tts-1` | 未声明 / 未声明 | 非计价主数据 | 待核实 | [openai-models](#openai-models) | pending | `d9a0b98b0d4f3d52a949199ef3845e7a3592b22d3456d5ce99c7e9918f6e8f8d` |
| `tts-1-hd` | 未声明 / 未声明 | 非计价主数据 | 待核实 | [openai-models](#openai-models) | pending | `9f1c92fd2c9a5c898a881d6055ca6b054defb4e40f61e7973d44f0fb4b21c39f` |
| `whisper-1` | 未声明 / 未声明 | 非计价主数据 | 待核实 | [openai-models](#openai-models) | pending | `1dee3ac7f8e5ba204e6d9f570802686666143bd596c6b8a0ddccec1b53f80b85` |
| `o3-pro` | 200000 / 100000 | 非计价主数据 | 待核实 | [openai-models](#openai-models) | pending | `9053d8e0be39ea24bb76e636bbd15e4007cff45f270d6696281564b4e4d4a8f0` |
| `dall-e-3` | 未声明 / 未声明 | 非计价主数据 | 待核实 | [openai-models](#openai-models) | pending | `e3cf1bb3e7c0ddd22ca967d5e8c48a9d90cde6b7e7a54dbe1d4a34f6324f98e5` |
| `gpt-4o-realtime` | 32000 / 4096 | 非计价主数据 | 待核实 | [openai-models](#openai-models) | pending | `8fefdf45c38c788b9b7d10f5d849559592541495899f0932ea48c4cc903b1da8` |
| `gpt-4o-realtime-preview` | 32000 / 4096 | 非计价主数据 | 待核实 | [openai-models](#openai-models) | pending | `13c2d7c7d00b2f06835025a544b06d7f1a3efe51bd33e9d29505d4ea4a772db6` |
| `gpt-oss-120b` | 128000 / 16384 | 非计价主数据 | 待核实 | [openai-models](#openai-models) | pending | `72d4d1688e4cccad25cb26f3fbaa100da07eff743b5b48dd1c4194221a996513` |
| `gpt-5.6-sol` | 1050000 / 128000 | 非计价主数据 | 待核实 | [openai-models](#openai-models) | pending | `b302b146ef83103d40bee13dba0268bf9049fe1bccab783e873bf2b92c6513cb` |
| `gpt-5.6-sol-pro` | 1050000 / 128000 | 非计价主数据 | 待核实 | [openai-models](#openai-models) | pending | `ad1c5f20e4315049e8b54c0a0a38592c8956b43b2ad3e76d1229beec4474ae42` |
| `gpt-5.6-terra` | 1050000 / 128000 | 非计价主数据 | 待核实 | [openai-models](#openai-models) | pending | `baa15e3c114a51f23ff38e9ddf85eb3e12e0fc36a965aac735894ca12e48241d` |
| `gpt-5.6-terra-pro` | 1050000 / 128000 | 非计价主数据 | 待核实 | [openai-models](#openai-models) | pending | `179dd992b5398aecd8b6d8c946ca7a40e8795411a1aba8d90d2f3d005352270f` |
| `gpt-5.6-luna` | 1050000 / 128000 | 非计价主数据 | 待核实 | [openai-models](#openai-models) | pending | `0bbc623ae4a38aa0fd2e3d38cfb1bb9d562221bbaececcab78bf8c6e9224aef6` |
| `gpt-5.6-luna-pro` | 1050000 / 128000 | 非计价主数据 | 待核实 | [openai-models](#openai-models) | pending | `5e7d1387d8256a00c0a4f46adfa1a31813e9e6f72c8ecca8b654cf29890d355e` |
| `gpt-5.4-mini` | 400000 / 128000 | 非计价主数据 | 待核实 | [openai-models](#openai-models) | pending | `fea5519f807fe1a18b9ee8f79d556da357f78b8c00f2898b6ea5cf1b7fcc72d5` |
| `gpt-5.3-codex-spark` | 128000 / 未声明 | 非计价主数据 | 待核实 | [openai-models](#openai-models) | pending | `929093bb5d6d7dc9371275566214f155aefd42f6111ee0fb16132c65f8fe9218` |

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
  "supplier": "openai",
  "checkedAt": "2026-10-03",
  "sources": [
    {
      "id": "openai-models",
      "url": "https://developers.openai.com/api/docs/models",
      "kind": "official-doc",
      "scope": "OpenAI 直连 API 模型目录；价格为 USD，订阅可用性另核",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "f67d25aba18df1639fa04c9f56d4c06a22bc374a1b2251b5a7d6506ee4197edc",
      "resolvedUrl": "https://developers.openai.com/api/docs/models"
    },
    {
      "id": "openai-sol61",
      "url": "https://developers.openai.com/api/docs/models/gpt-6.1-sol.md",
      "kind": "official-doc",
      "scope": "OpenAI 直连 API；标准 USD token 计价；内在规格可跨接入面参考",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "972f4265295eea723d5332016dc22cde03f46173fafcbcba5c23b24c8cee90c6",
      "resolvedUrl": "https://developers.openai.com/api/docs/models/gpt-6.1-sol.md"
    },
    {
      "id": "whisper",
      "url": "https://github.com/openai/whisper",
      "kind": "official-repository",
      "scope": "OpenAI 官方开源仓库；本地模型安装与实际服务另核",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "00141f69ddad540f79bf3c2e89420f204a3350a940848574d6c26879a261a925",
      "resolvedUrl": "https://github.com/openai/whisper"
    }
  ]
}
```
<!-- source-metadata:end -->
