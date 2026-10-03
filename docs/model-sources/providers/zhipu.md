# 智谱：模型数据来源

核验轮次：2026-10-03。这里的日期是访问/复核日期，不是模型发布日期。

## 对应配置

- [zhipu-embedding.json](../../../compute/providers/zhipu-embedding.json)
- [zhipu.json](../../../compute/providers/zhipu.json)
- [zhipu-coding.json](../../../compute/coding-plans/zhipu-coding.json)
- [zhipu.json](../../../compute/model-specs/zhipu.json)

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

## 核验结论与边界

国内官方价格页确认 5.3/Flash/FlashX 为 8/28、0.8/2.8、2/7 元/百万 tokens。官网给出的窗口简写 1M/128K 未直接作为跨接入面字节级精确值证明；本次不改已有换算。低/高/max、默认 max 和始终思考已核对。Coding Plan 提供 5.3 与 Flash，不提供 FlashX；国际套餐端点的账号实际可用性仍需验证。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

## 当前配置与字段级核验

下表“计价”是配置的 inputPrice/outputPrice 字段快照，不统一代表 token 单价；按张、按秒、search unit 和兼容占位值需查看原配置 extra.pricingNotes 与官网说明。未列为已核字段的数值仍待核实。

### compute/providers/zhipu-embedding.json

接入面配置快照：`openai-completions`；端点：`https://open.bigmodel.cn/api/paas/v4`；币种：`CNY`。这些平台字段不是整条官网验收结论，核验边界见上文。

<!-- source-config: compute/providers/zhipu-embedding.json -->
<!-- source-config-fingerprint: d0f26d59bd09806744d873d2f958870136e5c77b792d3d756cf2653aeae2c7e9 -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `embedding-3` | 8192 / 未声明 | CNY：0.5 / 未声明 | `modelName`→[glm-pricing](#glm-pricing) | [glm-pricing](#glm-pricing) | partial | `29448d4c373e3eeb547369795df9488e4dc50e3fa20a32e646b255116d2df602` |

### compute/providers/zhipu.json

接入面配置快照：`anthropic-messages`；端点：`https://open.bigmodel.cn/api/anthropic`；币种：`CNY`。这些平台字段不是整条官网验收结论，核验边界见上文。

<!-- source-config: compute/providers/zhipu.json -->
<!-- source-config-fingerprint: aa075cfecf5cbf9b45a071d440262bf38b521e05480cbdf7f67ba4e46d974e67 -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `glm-5.3-flashx` | 1000000 / 128000 | CNY：2 / 7 | `extra.cacheHitPrice`→[glm-pricing](#glm-pricing), `extra.reasoning.defaultEffort`→[glm53-flash](#glm53-flash), `extra.reasoning.supportedEfforts`→[glm53-flash](#glm53-flash), `extra.thinkingOnly`→[glm53-flash](#glm53-flash), `inputPrice`→[glm-pricing](#glm-pricing), `modelName`→[glm53-flash](#glm53-flash), `outputPrice`→[glm-pricing](#glm-pricing) | [glm-pricing](#glm-pricing), [glm53-flash](#glm53-flash) | partial | `90198f90256cc40ac50dd2ac6f395ba1a0f6062cdefd392f61840c1569b6f8e1` |
| `glm-5.3-flash` | 1048576 / 131072 | CNY：0.8 / 2.8 | `extra.cacheHitPrice`→[glm-pricing](#glm-pricing), `extra.reasoning.defaultEffort`→[glm53-flash](#glm53-flash), `extra.reasoning.supportedEfforts`→[glm53-flash](#glm53-flash), `extra.thinkingOnly`→[glm53-flash](#glm53-flash), `inputPrice`→[glm-pricing](#glm-pricing), `modelName`→[glm53-flash](#glm53-flash), `outputPrice`→[glm-pricing](#glm-pricing) | [glm-pricing](#glm-pricing), [glm53-flash](#glm53-flash) | partial | `7ac4fc2d14893734f4e120e594d3f7a434166e27e64fc2f34da94fbb6296c9fe` |
| `glm-5.3` | 1048576 / 131072 | CNY：8 / 28 | `extra.cacheHitPrice`→[glm-pricing](#glm-pricing), `extra.reasoning.defaultEffort`→[glm53](#glm53), `extra.reasoning.supportedEfforts`→[glm53](#glm53), `extra.thinkingOnly`→[glm53](#glm53), `inputPrice`→[glm-pricing](#glm-pricing), `modelName`→[glm53](#glm53), `outputPrice`→[glm-pricing](#glm-pricing) | [glm-pricing](#glm-pricing), [glm53](#glm53) | partial | `4db175a86ebfcecbf4dacc3c3f5efe58b10d136aa09d8cac190c955b47fc550b` |
| `glm-5.2` | 1000000 / 131072 | CNY：8 / 28 | `modelName`→[glm53](#glm53) | [glm53](#glm53) | partial | `0b8a1fd762b821b3c9a26e0cc9a7dcbd7bfef8e3899999782b17e262a99fb6ca` |
| `glm-5.1` | 200000 / 131072 | CNY：6 / 24 | `modelName`→[glm-pricing](#glm-pricing) | [glm-pricing](#glm-pricing) | partial | `a33341eef062449272b0329c9d76dbb20d972d911e2d42176727e0b4a6209f53` |
| `glm-5-turbo` | 200000 / 131072 | CNY：5 / 22 | `modelName`→[glm-pricing](#glm-pricing) | [glm-pricing](#glm-pricing) | partial | `efc04fc9c569e5de94f5f4a1b7a4a2d7474d0c85258ea6b153b1f29551b065e5` |
| `glm-5` | 200000 / 131072 | CNY：4 / 18 | 待核实 | [glm53](#glm53) | pending | `69cc6dba70a0417f1c9a9df9069c36f75087419fb96271edb2dd448df02c32c4` |
| `glm-4.7` | 200000 / 131072 | CNY：2 / 8 | `modelName`→[glm-pricing](#glm-pricing) | [glm-pricing](#glm-pricing) | partial | `49e0f611e87b4863717517ff8d7b148da8f8c9fbff0ba78a02d57e2942d0bb15` |
| `glm-4.7-flashx` | 200000 / 131072 | CNY：0.5 / 3 | `modelName`→[glm-pricing](#glm-pricing) | [glm-pricing](#glm-pricing) | partial | `60dcdbc2f8c517e20d6b926d0c38c84fd6b139ce3b5331ad0dc5eb8c801e9509` |
| `glm-5v-turbo` | 200000 / 131072 | CNY：5 / 22 | `modelName`→[glm-pricing](#glm-pricing) | [glm-pricing](#glm-pricing) | partial | `3f6fb8c4655444565b7b55989ea463ffbda1d3ff5fa6036ce6a28226c7d03de2` |
| `glm-4.6v` | 128000 / 32768 | CNY：1 / 3 | `modelName`→[glm-pricing](#glm-pricing) | [glm-pricing](#glm-pricing) | partial | `22e3fa121c2b99ff0bb73e833bd5cbe5ec454fdbd77aed984cb262f21af9d654` |
| `glm-4.6` | 200000 / 131072 | CNY：2 / 8 | `modelName`→[glm-pricing](#glm-pricing) | [glm-pricing](#glm-pricing) | partial | `460734a0f8ea0b533c4a84513b71cadca2a3dc2d0c541b42df37551c659d62ad` |

### compute/coding-plans/zhipu-coding.json

接入面配置快照：`anthropic-messages`；端点：`https://api.z.ai/api/anthropic`；币种：`套餐`。这些平台字段不是整条官网验收结论，核验边界见上文。

<!-- source-config: compute/coding-plans/zhipu-coding.json -->
<!-- source-config-fingerprint: 216545d9735d82aa449095af877d4bb8a714615e74771238553b32765dce2201 -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `glm-5.3` | 1048576 / 131072 | 套餐：未声明 / 未声明 | `extra.reasoning.defaultEffort`→[glm53](#glm53), `extra.reasoning.supportedEfforts`→[glm53](#glm53), `extra.thinkingOnly`→[glm53](#glm53), `modelName`→[glm53](#glm53) | [glm53](#glm53) | partial | `639b9e9b3d7f8eff6d533c1b36f09ea7bea64f09bc4f20157fd01e779cda1016` |
| `glm-5.3-flash` | 1048576 / 131072 | 套餐：未声明 / 未声明 | `extra.reasoning.defaultEffort`→[glm53-flash](#glm53-flash), `extra.reasoning.supportedEfforts`→[glm53-flash](#glm53-flash), `extra.thinkingOnly`→[glm53-flash](#glm53-flash), `modelName`→[glm53-flash](#glm53-flash) | [glm53-flash](#glm53-flash) | partial | `38f4c09e9f3aa0fd17481b40d42378de63362ebbf714ae82222dbcbd0510e7f4` |
| `glm-5.2` | 1000000 / 131072 | 套餐：未声明 / 未声明 | `modelName`→[glm53](#glm53) | [glm53](#glm53) | partial | `e47c693d232b87b074df1aef74935bab47099d5397abfec032c003ac3b230a82` |
| `glm-5-turbo` | 200000 / 131072 | 套餐：未声明 / 未声明 | `modelName`→[glm-pricing](#glm-pricing) | [glm-pricing](#glm-pricing) | partial | `41fdfbd5eb7489abc53c3e22f3ed43da4190829948a205eb9dab32d74a8dd448` |
| `glm-4.7` | 200000 / 131072 | 套餐：未声明 / 未声明 | `modelName`→[glm-pricing](#glm-pricing) | [glm-pricing](#glm-pricing) | partial | `49d5f2959e49581837bfa1b14785506dc1a26973bd08665fdd416c4fc73ec0d0` |

### compute/model-specs/zhipu.json

<!-- source-config: compute/model-specs/zhipu.json -->
<!-- source-config-fingerprint: 4c31c8aa9fc2bb31b2aa8f5ddd43e305953b746fc79e89119dc2f66572613bab -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `glm-5.3-flashx` | 1000000 / 128000 | 非计价主数据 | `id`→[glm53-flash](#glm53-flash), `spec.extra.thinkingOnly`→[glm53-flash](#glm53-flash) | [glm53-flash](#glm53-flash) | partial | `6d10e6cf17f4461142a1827d036c3cb2b7d798d5e579398e1d4ca9bc4d00394b` |
| `glm-5.3` | 1048576 / 131072 | 非计价主数据 | `id`→[glm53](#glm53), `spec.extra.thinkingOnly`→[glm53](#glm53) | [glm53](#glm53) | partial | `a626e0690b06921d5f41fcf764a7e295e75acface2d3ed005f664aaacc38411d` |
| `glm-5.3-flash` | 1048576 / 131072 | 非计价主数据 | `id`→[glm53-flash](#glm53-flash), `spec.extra.thinkingOnly`→[glm53-flash](#glm53-flash) | [glm53-flash](#glm53-flash) | partial | `28114bb8b0a40a61668f84c0edbefc7a70d5dba44102ae184b16098798fa0609` |
| `glm-5.2` | 1048576 / 32768 | 非计价主数据 | `id`→[glm53](#glm53) | [glm53](#glm53) | partial | `0ec480a9cc2984161ac129d087c28b3c9a561d55b7b595c16d9b0ffb4a5cadf5` |
| `glm-5.1` | 200000 / 128000 | 非计价主数据 | `id`→[glm-pricing](#glm-pricing) | [glm-pricing](#glm-pricing) | partial | `2cd6ed51e011c7f1a288cd4c69e90dd7a71b70929feaa188a8abca39d126e6ee` |
| `glm-5` | 200000 / 128000 | 非计价主数据 | 待核实 | [glm53](#glm53) | pending | `49f1065adba0caf776e6b1609e02d103c25a6bcdc4d4fe84bdc8c44917185cd8` |
| `glm-5-turbo` | 200000 / 128000 | 非计价主数据 | `id`→[glm-pricing](#glm-pricing) | [glm-pricing](#glm-pricing) | partial | `33478015d6aa4e54f70f8a7dcb7f72da10e628ab7b3d7b4033ce35da7a38557b` |
| `glm-4.7` | 200000 / 128000 | 非计价主数据 | `id`→[glm-pricing](#glm-pricing) | [glm-pricing](#glm-pricing) | partial | `42354b385f9bd49016a82d38221a7cd7a354a5d66703c6ee446cb84744bbefd6` |
| `glm-4.6` | 200000 / 128000 | 非计价主数据 | `id`→[glm-pricing](#glm-pricing) | [glm-pricing](#glm-pricing) | partial | `d000dbabac9ef3f752bc3afb854a3e84655dd496591354f05ffd9e93c5f46233` |
| `glm-4.7-thinking` | 200000 / 128000 | 非计价主数据 | 待核实 | [glm53](#glm53) | pending | `60eafbd64407f997aea54f8ae38eafecc813f3c1a6e60fa8ee6115b75ae1f12b` |
| `glm-5v-turbo` | 200000 / 128000 | 非计价主数据 | `id`→[glm-pricing](#glm-pricing) | [glm-pricing](#glm-pricing) | partial | `ed725e26eeade7a3cd34906ab09403a2e02fae7ec72903827275df531a1f7af6` |
| `glm-4.6v` | 128000 / 32768 | 非计价主数据 | `id`→[glm-pricing](#glm-pricing) | [glm-pricing](#glm-pricing) | partial | `e5d4be8ddf789ee361efc03be459136c98b617d5aa3432e2c15742d98c115aeb` |
| `embedding-3` | 8192 / 未声明 | 非计价主数据 | `id`→[glm-pricing](#glm-pricing) | [glm-pricing](#glm-pricing) | partial | `b962bc9c46a4242a20256c8906630ff545e4a8b883a475107091011818b4ef5e` |

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
    }
  ]
}
```
<!-- source-metadata:end -->
