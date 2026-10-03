# 阿里云百炼 / Qwen / Wan / HappyHorse：模型数据来源

核验轮次：2026-10-03。这里的日期是访问/复核日期，不是模型发布日期。

## 对应配置

- [dashscope.json](../../../compute/providers/dashscope.json)
- [dashscope-coding.json](../../../compute/coding-plans/dashscope-coding.json)
- [dashscope-token-plan.json](../../../compute/coding-plans/dashscope-token-plan.json)
- [happyhorse.json](../../../compute/model-specs/happyhorse.json)
- [qwen.json](../../../compute/model-specs/qwen.json)
- [wan.json](../../../compute/model-specs/wan.json)

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

## 核验结论与边界

Qwen3.7 Max 官网给出 1000000 上下文、131072 最大输出和北京 12/36 元价格，且明确纯文本。已合并两条冲突规格，并同步 API/Token Plan 输出值。Qwen Omni 是多模态输入、文本输出；图片价格按张。套餐支持名单单独引用 Token Plan 文档，不能由原厂型号存在推断套餐开放。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

## 当前配置与字段级核验

下表“计价”是配置的 inputPrice/outputPrice 字段快照，不统一代表 token 单价；按张、按秒、search unit 和兼容占位值需查看原配置 extra.pricingNotes 与官网说明。未列为已核字段的数值仍待核实。

### compute/providers/dashscope.json

<!-- source-config: compute/providers/dashscope.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `qwen-image-3.0` | 未声明 / 未声明 | CNY：未声明 / 未声明 | 待核实 | [qwen-models](#qwen-models) | pending | `5355a6ff200537c12750362533bed980c8173cd9eec622344adaf5cddc04f318` |
| `qwen-image-3.0-pro` | 未声明 / 未声明 | CNY：未声明 / 未声明 | `modelName`→[qwen-models](#qwen-models) | [qwen-models](#qwen-models) | partial | `ae0851c081b3dbbc129ce9289b73627d680ae182f8898838ca6a86199892d1f4` |
| `qwen3.7-text-rerank` | 未声明 / 未声明 | CNY：未声明 / 未声明 | `modelName`→[qwen-models](#qwen-models) | [qwen-models](#qwen-models) | partial | `b35b1c8bb4c87eaff458ac0d1374c771cae827e240d77f231707e9758414c0e1` |
| `qwen3.7-text-embedding-flash` | 未声明 / 未声明 | CNY：0.125 / 0 | `inputPrice`→[qwen-pricing](#qwen-pricing), `modelName`→[qwen-models](#qwen-models) | [qwen-models](#qwen-models), [qwen-pricing](#qwen-pricing) | partial | `1dc2f47c2abb4801e2defecff32a2e41d20cb7f4e767ab40723c2c16d9f87960` |
| `qwen3.7-text-embedding` | 未声明 / 未声明 | CNY：0.5 / 0 | `inputPrice`→[qwen-pricing](#qwen-pricing), `modelName`→[qwen-models](#qwen-models) | [qwen-models](#qwen-models), [qwen-pricing](#qwen-pricing) | partial | `0afc1be3f581606a9f35e49edc2e89d1f6b593d610e4ec7732c6e80983b615c6` |
| `qwen3.8-omni-flash` | 1000000 / 131072 | CNY：0.8 / 2.7 | `contextWindow`→[qwen-omni](#qwen-omni), `extra.cachedInputPrice`→[qwen-pricing](#qwen-pricing), `inputPrice`→[qwen-pricing](#qwen-pricing), `maxOutputTokens`→[qwen-omni](#qwen-omni), `modelName`→[qwen-models](#qwen-models), `outputPrice`→[qwen-pricing](#qwen-pricing) | [qwen-models](#qwen-models), [qwen-omni](#qwen-omni), [qwen-pricing](#qwen-pricing) | partial | `4ceed292c08cabaf22bf8b9a8f026826d93f14c19257c57fc84b7f431f45de40` |
| `qwen3.8-max` | 1000000 / 131072 | CNY：12 / 36 | `modelName`→[qwen-models](#qwen-models) | [qwen-models](#qwen-models) | partial | `94c998740373672c42cacb0bb087ab1a4d94a7e76932c93e8fbfd9ee0df4ae94` |
| `qwen3.8-flash` | 1000000 / 131072 | CNY：0.8 / 2.7 | `modelName`→[qwen-models](#qwen-models) | [qwen-models](#qwen-models) | partial | `0cd69defad23918637fcf9c7f319a5b6a6a32d3fd224a6fe120b718044e296a3` |
| `qwen3.7-max` | 1000000 / 131072 | CNY：12 / 36 | `contextWindow`→[qwen37-max](#qwen37-max), `extra.cacheHitPrice`→[qwen37-max](#qwen37-max), `inputPrice`→[qwen37-max](#qwen37-max), `maxOutputTokens`→[qwen37-max](#qwen37-max), `modelName`→[qwen-pricing](#qwen-pricing), `outputPrice`→[qwen37-max](#qwen37-max) | [qwen-pricing](#qwen-pricing), [qwen37-max](#qwen37-max) | partial | `1e7cb930a7686fb53d7e4f4bbc76b6ee54b3981b2f151124692361accd03011e` |
| `qwen3.7-plus` | 1000000 / 65536 | CNY：2 / 8 | `modelName`→[qwen-models](#qwen-models) | [qwen-models](#qwen-models) | partial | `e22859c462816e34629585b7454fdd677c54f2ba269da6ab557bf00035ffab10` |
| `qwen3.6-flash` | 1000000 / 65536 | CNY：1.2 / 7.2 | `modelName`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `5a1607c14afe780a0418dd5062697687f0aa8ba21869be7a686ceabd91454522` |
| `qwen-long` | 10000000 / 32768 | CNY：0.5 / 2 | `modelName`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `cb05834da608977c47a02e1369356ddbed2b94b105d510011903e24b8f7a8f62` |
| `qwen3-vl-plus` | 262144 / 32768 | CNY：1.5 / 6 | `modelName`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `51cc65a021a99eba029e212ea519c0d2a2e116d63f12522809ae51adba7126c0` |
| `qwen3-vl-flash` | 262144 / 32768 | CNY：0.8 / 3 | `modelName`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `735e6fd04d6f3d60bdc440cca46565afbbfcabd3f27079e7a6f12255a45eca1f` |
| `text-embedding-v3` | 8192 / 未声明 | CNY：0.7 / 未声明 | `modelName`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `c7807fdcb731c5326334b17946d459285a82ba1354b5da8ec6bea1f3e3667ad9` |
| `text-embedding-v4` | 8192 / 未声明 | CNY：0.5 / 未声明 | `modelName`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `15bb4d126a1c6613ad86429e758f4d49bfd1b8fbe2944dfc173e01a2d6a293ae` |
| `qwen3-rerank` | 120000 / 未声明 | CNY：1 / 未声明 | `modelName`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `5ad8a7fe1476143704d3af9e062d5a00ac5578ae4342ba24c5685788de2d0160` |
| `cosyvoice-v2` | 未声明 / 未声明 | CNY：未声明 / 未声明 | `modelName`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `a976104888d0d49d15e6d3010d254f639835a79a693497d340e65367a3e5573a` |
| `paraformer-v2` | 未声明 / 未声明 | CNY：未声明 / 未声明 | `modelName`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `ed64ce6df19898de8b5a81ccfe0ac703d0c2ede2ebd68f2260d1cd3160b3a32f` |
| `wan2.7-image-pro` | 未声明 / 未声明 | CNY：未声明 / 未声明 | `modelName`→[qwen-models](#qwen-models) | [qwen-models](#qwen-models) | partial | `de82385bed28a3dada2a6e79a5a4d4776fe4bedf81161aad5dfc4eac4127d209` |
| `wan2.7-image` | 未声明 / 未声明 | CNY：未声明 / 未声明 | 待核实 | [qwen-models](#qwen-models) | pending | `f9f60e10e376176462649edb9b542e14a3bd407cef49ea24dc07f0ca4e928422` |
| `wan2.6-t2i` | 未声明 / 未声明 | CNY：未声明 / 未声明 | `modelName`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `7577a780a5fb3482eddafc898f7efa22149d81b3ad32a54724c3fc72db6f915f` |
| `wan2.2-t2i-plus` | 未声明 / 未声明 | CNY：未声明 / 未声明 | `modelName`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `9583fcd42f7dfd09cf0fecec1102094afcebc0308aa5780c4790eec545cef538` |
| `wan2.2-t2i-flash` | 未声明 / 未声明 | CNY：未声明 / 未声明 | `modelName`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `c5c94043ba663f2d51603172fcd98cc4c5f341d22e0531c90c97cef4a0a62dfc` |
| `qwen-image-2.0-pro` | 未声明 / 未声明 | CNY：未声明 / 未声明 | `modelName`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `6ab49641c0c7433aa6e60d05b25c659d9b9459155df56feda21174f689c9499c` |
| `qwen-image-2.0` | 未声明 / 未声明 | CNY：未声明 / 未声明 | `modelName`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `8a7e0b00931998d0e8bb4fdd5508074ed03e3e2d5c5747cd5b87c49b1519b973` |
| `wan3.0-video-prime` | 未声明 / 未声明 | CNY：未声明 / 未声明 | `modelName`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `7f66c887b4168ae3c95b86f5fd0f911b51abedad3e33dab8a097fb5485cb2ec0` |
| `wan3.0-video` | 未声明 / 未声明 | CNY：未声明 / 未声明 | `modelName`→[qwen-models](#qwen-models) | [qwen-models](#qwen-models) | partial | `836febd67db928c025fee1c6b1a646d810043dc5631cb643a2447a79ffdcbf11` |
| `wan2.6-t2v` | 未声明 / 未声明 | CNY：未声明 / 未声明 | `modelName`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `db7ee7a028fe7efde9ac8adcfaf68c82a7bfd3456b6fa16284cd6953dde4e88e` |
| `cosyvoice-clone` | 未声明 / 未声明 | CNY：未声明 / 未声明 | 待核实 | [qwen-models](#qwen-models) | pending | `6f7bae6d80a01b3138f02536add7e440f1c597207eee9c34136c44f25150f604` |
| `qwen-omni-turbo` | 32768 / 2048 | CNY：未声明 / 未声明 | `modelName`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `56ef481fe082dd0a1f804dc04d548092f30ece58f5a169227a9f4632dfd4f5aa` |
| `qwen-mt-plus` | 16384 / 8192 | CNY：1.8 / 5.4 | `modelName`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `71bd311b8e8c70b7eafac58f01d262f3a926c4fa7096f28897901942a1955356` |
| `happyhorse-1.0-t2v` | 未声明 / 未声明 | CNY：未声明 / 未声明 | `modelName`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `162a33a922cb4f6359459b6d7803ff4b49032be205bad249e652f7cfb4d3bf95` |
| `happyhorse-1.0-i2v` | 未声明 / 未声明 | CNY：未声明 / 未声明 | `modelName`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `b9c840e45dd52577b2a34a50ab8db8a0e6ad938711040c717af4648a5545aaa9` |
| `happyhorse-1.0-r2v` | 未声明 / 未声明 | CNY：未声明 / 未声明 | `modelName`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `00ff8ca6b5125589da14d3cd694fe1bb756b814421bd9f726312361401a6e2b2` |

### compute/coding-plans/dashscope-coding.json

<!-- source-config: compute/coding-plans/dashscope-coding.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `qwen3.7-plus` | 1000000 / 65536 | 套餐：未声明 / 未声明 | `modelName`→[qwen-models](#qwen-models) | [qwen-models](#qwen-models) | partial | `bc66cfd4f155eb82ee4e772a05a81223d6cafaaea5c2887643bedc52611ebe6b` |
| `qwen3.6-plus` | 1000000 / 65536 | 套餐：未声明 / 未声明 | `modelName`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `d76cc30dcc6f33aa4e09ff2bcdf03dcb4cb95ff3df07ec8d0c1b94cde4afba9c` |
| `qwen3.5-plus` | 1000000 / 65536 | 套餐：未声明 / 未声明 | `modelName`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `4afffb7ff798559948a916a9874265048a1ac2a5f612eee9b0acf599dba52f69` |
| `qwen3-coder-plus` | 1000000 / 65536 | 套餐：未声明 / 未声明 | `modelName`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `7393f6dd047b0e760e981319cc1e784669f122886631e02ebd0d51166c4dc768` |
| `qwen3-coder-next` | 262144 / 65536 | 套餐：未声明 / 未声明 | `modelName`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `19e213ea21c5e4fe6666ed2899a2006c9fe9ff61f0d05646173db8f401fb7b58` |
| `qwen3-max-2026-01-23` | 262144 / 65536 | 套餐：未声明 / 未声明 | `modelName`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `0a05faf8b6c057960758bd13749c998d9cc3c071ab7202c8f3371677b5bf137b` |
| `kimi-k2.5` | 262144 / 32768 | 套餐：未声明 / 未声明 | `modelName`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `7b5b0b5ac707e4d400e5320ef6f9989bb6696423a191b551a9a51982d89ff15a` |
| `glm-5` | 202752 / 131072 | 套餐：未声明 / 未声明 | 待核实 | [qwen-models](#qwen-models) | pending | `66a69e048be7ea1eca4abca4d9e464d9afd690fd5e823a25d191c7214ae4405c` |
| `glm-4.7` | 202752 / 131072 | 套餐：未声明 / 未声明 | `modelName`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `ee9d1b36d9a055b5c3429e95261eeb0ad63ec3046a5c606c14ec147e6e6bf3e4` |
| `MiniMax-M2.5` | 196608 / 8192 | 套餐：未声明 / 未声明 | `modelName`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `b8350af7d08d0f710e1aa3c6e53513cc71c01295d614c26b16486bbc19065606` |

### compute/coding-plans/dashscope-token-plan.json

<!-- source-config: compute/coding-plans/dashscope-token-plan.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `deepseek-v4.1-flash` | 1000000 / 384000 | 套餐：未声明 / 未声明 | `modelName`→[qwen-models](#qwen-models) | [qwen-models](#qwen-models) | partial | `a5f2ce1443618ddacd5108626a93ccd173c147b797101ebbdc8ca3e5d83f2001` |
| `wan2.7-image-pro` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | `modelName`→[qwen-models](#qwen-models) | [qwen-models](#qwen-models) | partial | `9540567b0bce27884ed6e6c6655e3898df01972fc292aa4b3f2d41a1e531636f` |
| `wan2.7-image` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | 待核实 | [qwen-models](#qwen-models) | pending | `8f40d359e7ae38bad346c9170d0e5251d5c7f0e7b4c67245044bd46d12c32446` |
| `qwen-image-3.0-pro` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | `modelName`→[qwen-models](#qwen-models) | [qwen-models](#qwen-models) | partial | `99bc9c6ed48d087f40d8fc0c5e4dd4a7be67b838b1928ee9d7bc9bb0af118656` |
| `happyhorse-1.1-t2v` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | `modelName`→[qwen-models](#qwen-models) | [qwen-models](#qwen-models) | partial | `036ee790f2781efd4c7f8d7adfac85b9b0cec6bbb1ea53a464739734f887b547` |
| `happyhorse-1.1-r2v` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | `modelName`→[qwen-models](#qwen-models) | [qwen-models](#qwen-models) | partial | `24f69cc7f98d169af9915d0ee8b34b9032ae98cf1a3afb37a2330a9f7972ac1f` |
| `happyhorse-1.1-i2v` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | `modelName`→[qwen-models](#qwen-models) | [qwen-models](#qwen-models) | partial | `f43b5ed9d1e40261ce5a15d1edd3382c682a817be1a13b3fbf151f159e17c2f0` |
| `glm-5.3` | 1048576 / 131072 | 套餐：未声明 / 未声明 | 待核实 | [qwen-models](#qwen-models) | pending | `ad341a96786a299dfa55b0fd469b8aae1b51283337ac4b7710e7b33c2aa9a7dd` |
| `glm-5.2` | 1048576 / 32768 | 套餐：未声明 / 未声明 | `modelName`→[qwen-models](#qwen-models) | [qwen-models](#qwen-models) | partial | `5da6f79dfa79e56e5120dd437dab939b91ef3cb14d5b4c14fe3762890305afa5` |
| `deepseek-v4-pro-0813` | 1000000 / 384000 | 套餐：未声明 / 未声明 | `modelName`→[qwen-models](#qwen-models) | [qwen-models](#qwen-models) | partial | `dd2d23d065384444ba07c8934d4de6b024540560a28e87b8f8daf6b75e228283` |
| `deepseek-v4-pro` | 1000000 / 384000 | 套餐：未声明 / 未声明 | 待核实 | [qwen-models](#qwen-models) | pending | `aaad353baf996e86839098c03b20cea9a722bab3679c133294eb066e7e8e277b` |
| `deepseek-v4-flash-0731` | 1000000 / 384000 | 套餐：未声明 / 未声明 | `modelName`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `668722afd2a91f31c52d3d0684b357171b00ef0f7f59c8bef4b9fa83736f51d4` |
| `qwen3.8-max` | 1000000 / 131072 | 套餐：未声明 / 未声明 | `modelName`→[qwen-models](#qwen-models) | [qwen-models](#qwen-models) | partial | `83e667966e487cf59cd1016f47d468f4e3411955f5d30cf62b1791c1b3ad3071` |
| `qwen3.8-flash` | 1000000 / 131072 | 套餐：未声明 / 未声明 | `modelName`→[qwen-models](#qwen-models) | [qwen-models](#qwen-models) | partial | `c970d11813e282b030abd43126cccc17a142c920d66eac7e5d94da9936b334d3` |
| `qwen3.7-max` | 1000000 / 131072 | 套餐：未声明 / 未声明 | `contextWindow`→[qwen37-max](#qwen37-max), `maxOutputTokens`→[qwen37-max](#qwen37-max), `modelName`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing), [qwen37-max](#qwen37-max) | partial | `0b9278497ce60aac05088e34b4b4f32494973d170fd1daa3040960dbe876b1ef` |
| `qwen3.7-plus` | 1000000 / 65536 | 套餐：未声明 / 未声明 | `modelName`→[qwen-models](#qwen-models) | [qwen-models](#qwen-models) | partial | `9ed28aa74d6214b89b428431e5556e67ccc516a041598dfa2b2857892d0a3b94` |
| `qwen3.6-plus` | 1000000 / 65536 | 套餐：未声明 / 未声明 | `modelName`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `5c9f5313bfc5c72ef2c9c88a440bf850b9f1425909b2ac7a7be52eba3c01e4c4` |
| `qwen3.6-flash` | 1000000 / 65536 | 套餐：未声明 / 未声明 | `modelName`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `22e4fee5e3ddcff028782ee9ea3e5f6d53599628bd2bb19584b96a3e410adeb4` |
| `kimi-k2.5` | 262144 / 32768 | 套餐：未声明 / 未声明 | `modelName`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `b2704f6138d088bda2837efd9bdade61f29970e16a8a9d885d649399443df4b9` |
| `glm-5` | 202752 / 131072 | 套餐：未声明 / 未声明 | 待核实 | [qwen-models](#qwen-models) | pending | `77d4a0be1359765ee70e1d19303dd4dbc2e925094890dd058630eee2dade5d54` |
| `MiniMax-M2.5` | 196608 / 8192 | 套餐：未声明 / 未声明 | `modelName`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `bc8c83ca525ea638a5615fc0d846492b82ad3a6b7c57afd80348d536e55395fe` |
| `glm-4.7` | 200000 / 131072 | 套餐：未声明 / 未声明 | `modelName`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `edb6d1644b051d34288744e827e6cfce1fa61fa49f23844a64e8cd6decc41e23` |

### compute/model-specs/happyhorse.json

<!-- source-config: compute/model-specs/happyhorse.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `happyhorse-1.1-t2v` | 未声明 / 未声明 | 非计价主数据 | `id`→[qwen-models](#qwen-models) | [qwen-models](#qwen-models) | partial | `c859b54c76379049a564dd9fe1d5bd694af9aa4af324780d486081de0b1aa69f` |
| `happyhorse-1.0-t2v` | 未声明 / 未声明 | 非计价主数据 | `id`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `f735f65fed76fdd83e769b8347b81aa0ad03dd94a8ab3698787acb1011238e86` |
| `happyhorse-1.1-i2v` | 未声明 / 未声明 | 非计价主数据 | `id`→[qwen-models](#qwen-models) | [qwen-models](#qwen-models) | partial | `0e4212a41493d2c5697351048fd6ced07985aab18fb909c8e79667b48dfe2b47` |
| `happyhorse-1.0-i2v` | 未声明 / 未声明 | 非计价主数据 | `id`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `b4efb684144b5206cf626afbe4cc4ea994bbf7ae0eb2c3fcaf102dc3f3d8aba8` |
| `happyhorse-1.1-r2v` | 未声明 / 未声明 | 非计价主数据 | `id`→[qwen-models](#qwen-models) | [qwen-models](#qwen-models) | partial | `4e6b89f8791c508c4442ebbc6d4bcb97609a98b051ad118b476215407af2c63d` |
| `happyhorse-1.0-r2v` | 未声明 / 未声明 | 非计价主数据 | `id`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `f0aeb07b3b2210010e50678d64487682ed0967825b1ab5e42d6a2a8c90645d82` |

### compute/model-specs/qwen.json

<!-- source-config: compute/model-specs/qwen.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `qwen3.7-max` | 1000000 / 131072 | 非计价主数据 | `id`→[qwen-pricing](#qwen-pricing), `spec.contextWindow`→[qwen37-max](#qwen37-max), `spec.maxOutputTokens`→[qwen37-max](#qwen37-max) | [qwen-pricing](#qwen-pricing), [qwen37-max](#qwen37-max) | partial | `9b7ee439bfd8c4c970d31439fdb871a73974a47bfac9e814425110f9f590b38d` |
| `qwen3.8-max-prime` | 1000000 / 未声明 | 非计价主数据 | `id`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `e93017da4e52835bd99919c56c10ceabbcf9afd0b3c93ba57f3e67d783d0af7f` |
| `qwen-image-3.0` | 未声明 / 未声明 | 非计价主数据 | 待核实 | [qwen-models](#qwen-models) | pending | `a96256b63a9b53f7759b3848954fd2e76aae3e07ae958289a593866373073f21` |
| `qwen-image-3.0-pro` | 未声明 / 未声明 | 非计价主数据 | `id`→[qwen-models](#qwen-models) | [qwen-models](#qwen-models) | partial | `ffd3bdfd1f922b773782c2a1e9260ccf98dfebec13e76cdd4b425482bd01d638` |
| `qwen3.7-text-rerank` | 未声明 / 未声明 | 非计价主数据 | `id`→[qwen-models](#qwen-models) | [qwen-models](#qwen-models) | partial | `63c17d41771fe31ad1948284def7e1108f1000a7f94f21a6ca7b4d186108df4c` |
| `qwen3.7-text-embedding-flash` | 未声明 / 未声明 | 非计价主数据 | `id`→[qwen-models](#qwen-models) | [qwen-models](#qwen-models) | partial | `68712d12631bc0faf6031943c4f574eefc1a932177bf15a58957641e1569fee5` |
| `qwen3.7-text-embedding` | 未声明 / 未声明 | 非计价主数据 | `id`→[qwen-models](#qwen-models) | [qwen-models](#qwen-models) | partial | `c8484a0ab9552f73cf1dc0f9ec8b5528cfd1fcf507c4cebdda8bc6cde232c3b5` |
| `qwen3.8-omni-flash` | 1000000 / 131072 | 非计价主数据 | `id`→[qwen-models](#qwen-models), `spec.contextWindow`→[qwen-omni](#qwen-omni), `spec.maxOutputTokens`→[qwen-omni](#qwen-omni) | [qwen-models](#qwen-models), [qwen-omni](#qwen-omni) | partial | `5d6ecfabec1d9f2f1f0bff4c7117dddbc7de5b52b96cbd1add473df700b799b4` |
| `qwen3.8-max` | 1000000 / 131072 | 非计价主数据 | `id`→[qwen-models](#qwen-models) | [qwen-models](#qwen-models) | partial | `ef512ea06c71245df5bd2adca133a8ec0ce4e1c8051ff0900af3a810b078e2ab` |
| `qwen3.8-flash` | 1000000 / 131072 | 非计价主数据 | `id`→[qwen-models](#qwen-models) | [qwen-models](#qwen-models) | partial | `d5845de5effb40061fbf50bf3aac30e560dd972d0ec2ad3e2ed58b60fb825026` |
| `qwen3.8-max-preview` | 1000000 / 65536 | 非计价主数据 | `id`→[qwen-token-plan](#qwen-token-plan) | [qwen-token-plan](#qwen-token-plan) | partial | `a83b7c3fa8a4774a7245df8edcb8521cf4355ff939b76934039affe695cb6db8` |
| `qwen3.7-plus` | 1000000 / 65536 | 非计价主数据 | `id`→[qwen-models](#qwen-models) | [qwen-models](#qwen-models) | partial | `d540672ec68894c23169cb034c124a7bdc70316b25717b5a421a0e5324ad0231` |
| `qwen-max` | 32768 / 8192 | 非计价主数据 | `id`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `63f3d8412534f5a0fc5f00a68dd4db043e16d1597f164803f0a77b1e538709dc` |
| `qwen-plus` | 1000000 / 32768 | 非计价主数据 | `id`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `87b14206bafb51b5b464c85cd120f6c0f4d8fd393c4cd095a6247431f22a6726` |
| `qwen-turbo` | 1000000 / 16384 | 非计价主数据 | `id`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `cd41901d39da803700ba412dee08d76136d303b26195b66234e5aefe8d75018c` |
| `qwen3-max` | 262144 / 65536 | 非计价主数据 | `id`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `95ab79fbcfd56e816f21d32d23cb439e622525dceb6a3ebdcc1abe53a39fe183` |
| `qwen3.5-plus` | 1000000 / 65536 | 非计价主数据 | `id`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `65379800316faa89e331dad915274bc6bbb4bf07b939590645fee65b62017537` |
| `qwen3.6-plus` | 1000000 / 65536 | 非计价主数据 | `id`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `a4396604fcdf44aa065a733e1bd02de996d5ca58f1e76a84b5634b14ace9d8aa` |
| `qwen3.6-flash` | 1000000 / 65536 | 非计价主数据 | `id`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `88ee559f4997291ecf16e23204f982e98478deba7d63837affc26baffa0b9adb` |
| `qwen-long` | 10000000 / 32768 | 非计价主数据 | `id`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `bd3587befc52032616c6560571c761a08fbadff008dd475da9c75be98ba6836b` |
| `qwen3-vl-plus` | 262144 / 32768 | 非计价主数据 | `id`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `d9fe3780a0249b4bacb26e4f63420359265c3f5f14526960c50d21292f5e233b` |
| `qwen3-vl-flash` | 262144 / 32768 | 非计价主数据 | `id`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `92f4f43392b9b1c78a7a8555e75e1307140c8d8333b81a0eb15718130fa7db0e` |
| `text-embedding-v3` | 8192 / 未声明 | 非计价主数据 | `id`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `792aae9f44eadadf6a15e32cace1396e55a259b01d76f96cc62096e831655300` |
| `text-embedding-v4` | 8192 / 未声明 | 非计价主数据 | `id`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `a0c809ecbe9d46f8a7df2572699f06f1d9d36006f2b9f1db1b1a8416f7d07f5e` |
| `qwen3-rerank` | 120000 / 未声明 | 非计价主数据 | `id`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `848783e768d341bba881241a2d3cf68b120c008705c341fc17748d6138da3296` |
| `cosyvoice-v2` | 未声明 / 未声明 | 非计价主数据 | `id`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `f6f6eace842ba79a629e71b1bf8a2e645e58f9f3b2a0174621d5814dd8b10fd5` |
| `paraformer-v2` | 未声明 / 未声明 | 非计价主数据 | `id`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `4426a86b57495d9047ad1e5f3e8d66ef5c5bb1e9c2853c58eae5f98a8b572ed8` |
| `wan2.7-image-pro` | 未声明 / 未声明 | 非计价主数据 | `id`→[qwen-models](#qwen-models) | [qwen-models](#qwen-models) | partial | `40e949f0d49e1cd4914ecae46b3dc586322aedc59f53b247f97c815896bdae32` |
| `wan2.7-image` | 未声明 / 未声明 | 非计价主数据 | 待核实 | [qwen-models](#qwen-models) | pending | `f276801e9eeed2e2ab289fd4ae55d03c7786732b7f32f2112d3cc0c4ef1fd217` |
| `wan2.6-t2i` | 未声明 / 未声明 | 非计价主数据 | `id`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `f613777952baeacb59e495a54205e726d6700bf3b34844cc8fdcf535a8737c25` |
| `wan2.2-t2i-plus` | 未声明 / 未声明 | 非计价主数据 | `id`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `3d3a4d36f62d602b2640e69d2ccabf19d9d14361cbcc70b891d1e9e8776ce623` |
| `wan2.2-t2i-flash` | 未声明 / 未声明 | 非计价主数据 | `id`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `c3ba4340289f405fa6c99db558e666a42a722fcdc5af505c7adc9a82e6a33070` |
| `wan2.6-t2v` | 未声明 / 未声明 | 非计价主数据 | `id`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `d63a6c2189f83690fedd7b43e8986b7a2ff9dd4c6bac484366fdc55ee2ea4be9` |
| `cosyvoice-clone` | 未声明 / 未声明 | 非计价主数据 | 待核实 | [qwen-models](#qwen-models) | pending | `e621e40bc3fe6ef290c157646388562988fc8e608d565b7c2b566f34dda27335` |
| `qwen-omni-turbo` | 32768 / 2048 | 非计价主数据 | `id`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `801c093ebd3df7df5219d4468a32335adf74ef99c792ed6f37fc133e88226b7d` |
| `qwen3-max-trans` | 131072 / 8192 | 非计价主数据 | 待核实 | [qwen-models](#qwen-models) | pending | `4e7eb4c5a4698bfde2f7ba190688e589e772a8909fbb90e57fabaed1af34f022` |
| `qwen3-coder` | 262144 / 65536 | 非计价主数据 | 待核实 | [qwen-pricing](#qwen-pricing) | pending | `8c0b5c39fbb499a9bc9429d4ee7fa1aa6ff6a43ae8bb24bdba48c2493cc4c5bd` |
| `qwen3.5-35b-a3b` | 131072 / 65536 | 非计价主数据 | `id`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `980dbf067f0e7787b49395a5837adefe40d6a5819cfa2c7f153b7e232cbd4e6f` |
| `qwen3.5-27b` | 131072 / 65536 | 非计价主数据 | `id`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `2bed58cac57a2c2b4c0b18038cf06e98e9d6bb41ec6514c2d7290212b0b84d25` |
| `qwen3-coder-480b` | 262144 / 262144 | 非计价主数据 | 待核实 | [qwen-pricing](#qwen-pricing) | pending | `95a6f8061b8af088ee0ab049de5bdef1761c7fb2e2e45172597a22175d27438b` |
| `qwen3-235b` | 262144 / 262144 | 非计价主数据 | 待核实 | [qwen-pricing](#qwen-pricing) | pending | `3482335c92bc6595dcc201a4af47ce94baf3333fc22779d07208374cce60e217` |
| `qwen-image-2.0-pro` | 未声明 / 未声明 | 非计价主数据 | `id`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `d0b8e9fc76040803985bc291eae44b70f1e3524a83ddcd2448e3d3950d37f335` |
| `qwen-image-2.0` | 未声明 / 未声明 | 非计价主数据 | `id`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `ce566bae01411a1857ffd95206e176c7b801fa79e3474ae693d001d72ffa41c3` |

### compute/model-specs/wan.json

<!-- source-config: compute/model-specs/wan.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `wan3.0-video-prime` | 未声明 / 未声明 | 非计价主数据 | `id`→[qwen-pricing](#qwen-pricing) | [qwen-pricing](#qwen-pricing) | partial | `d385fb4f8fbdd7a72bf5138af63068c635ef289ae92eb62e2c1e99dfdd58c970` |
| `wan3.0-video` | 未声明 / 未声明 | 非计价主数据 | `id`→[qwen-models](#qwen-models) | [qwen-models](#qwen-models) | partial | `a2d78f301b63bcac0f73c534b0d3000952fa04f18aae8366cd33371f65de4c8a` |

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
