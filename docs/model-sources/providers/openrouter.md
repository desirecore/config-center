# OpenRouter：模型数据来源

核验轮次：2026-10-03。这里的日期是访问/复核日期，不是模型发布日期。

## 对应配置

- [openrouter.json](../../../compute/providers/openrouter.json)

## 官网证据

### openrouter-api

- 入口：[openrouter-api](https://openrouter.ai/api/v1/models)
- 类型：`official-api`；当前读取状态：`fetched`；地域/接入面：`OpenRouter 公共 Models API 快照；USD/token 换算为 USD/百万 token`。

## 核验结论与边界

只使用平台自己的 Models API 解释该接入面的 ID、窗口和 token 价格。API 的价格单位是 USD/token，配置乘以 1000000；-1 表示动态路由占位，不代表免费。当前目录缺少 stealth/ox-alpha、openai/gpt-oss-120b:free、qwen/qwen3-coder:free，已从该 Provider 移除并添加 tombstones。缺少于目录只证明此次未列出，不推断原厂模型退役。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

## 当前配置与字段级核验

下表“计价”是配置的 inputPrice/outputPrice 字段快照，不统一代表 token 单价；按张、按秒、search unit 和兼容占位值需查看原配置 extra.pricingNotes 与官网说明。未列为已核字段的数值仍待核实。

### compute/providers/openrouter.json

接入面配置快照：`openai-completions`；端点：`https://openrouter.ai/api/v1`；币种：`USD`。这些平台字段不是整条官网验收结论，核验边界见上文。

<!-- source-config: compute/providers/openrouter.json -->
<!-- source-config-fingerprint: 4028561e796be1b55138b049ab344a07c16e66e75104513276dab4f05342fda7 -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `cohere/command-a-plus` | 192000 / 64000 | USD：0.3 / 1.5 | `contextWindow`→[openrouter-api](#openrouter-api), `inputPrice`→[openrouter-api](#openrouter-api), `maxOutputTokens`→[openrouter-api](#openrouter-api), `modelName`→[openrouter-api](#openrouter-api), `outputPrice`→[openrouter-api](#openrouter-api) | [openrouter-api](#openrouter-api) | partial | `868df11646f2b6102407b49efc9d955cd3405fc8b30a1b6941917ce3f24433d7` |
| `mistralai/mistral-medium-3-5` | 262144 / 209715 | USD：1.5 / 7.5 | `contextWindow`→[openrouter-api](#openrouter-api), `inputPrice`→[openrouter-api](#openrouter-api), `maxOutputTokens`→[openrouter-api](#openrouter-api), `modelName`→[openrouter-api](#openrouter-api), `outputPrice`→[openrouter-api](#openrouter-api) | [openrouter-api](#openrouter-api) | partial | `a255f4a51d7ba5ada2be9694aedc9aae1f6e8ba5317bd6709d6dab7a0756fe16` |
| `google/gemini-3.8-flash` | 1048576 / 65536 | USD：0.75 / 3.75 | `contextWindow`→[openrouter-api](#openrouter-api), `inputPrice`→[openrouter-api](#openrouter-api), `maxOutputTokens`→[openrouter-api](#openrouter-api), `modelName`→[openrouter-api](#openrouter-api), `outputPrice`→[openrouter-api](#openrouter-api) | [openrouter-api](#openrouter-api) | partial | `320a46c379db46e3f52bc928e39ca955056036e9a3a75496edbf56c7d837adff` |
| `minimax/minimax-m3` | 1048576 / 512000 | USD：0.3 / 1.2 | `contextWindow`→[openrouter-api](#openrouter-api), `inputPrice`→[openrouter-api](#openrouter-api), `maxOutputTokens`→[openrouter-api](#openrouter-api), `modelName`→[openrouter-api](#openrouter-api), `outputPrice`→[openrouter-api](#openrouter-api) | [openrouter-api](#openrouter-api) | partial | `1b7bf023792f1bed053347a25e1c4f8ad7bd61139310ce8f796a33eb9bf5502d` |
| `qwen/qwen3.8-omni-flash` | 1000000 / 131072 | USD：0.15 / 0.47 | `contextWindow`→[openrouter-api](#openrouter-api), `inputPrice`→[openrouter-api](#openrouter-api), `maxOutputTokens`→[openrouter-api](#openrouter-api), `modelName`→[openrouter-api](#openrouter-api), `outputPrice`→[openrouter-api](#openrouter-api) | [openrouter-api](#openrouter-api) | partial | `ef0de092f7de7d653440231114e45da4c481d3b7c58d75527126e398aa18e785` |
| `qwen/qwen3.8-max-prime` | 1000000 / 131072 | USD：4 / 12 | `contextWindow`→[openrouter-api](#openrouter-api), `inputPrice`→[openrouter-api](#openrouter-api), `maxOutputTokens`→[openrouter-api](#openrouter-api), `modelName`→[openrouter-api](#openrouter-api), `outputPrice`→[openrouter-api](#openrouter-api) | [openrouter-api](#openrouter-api) | partial | `8834f395e3352f34011b9c4acee1c0c94c275bed582e083c92f25bc6be0de0bb` |
| `deepseek/deepseek-v4.1-flash` | 1048576 / 943718 | USD：0.3 / 1.2 | `contextWindow`→[openrouter-api](#openrouter-api), `inputPrice`→[openrouter-api](#openrouter-api), `maxOutputTokens`→[openrouter-api](#openrouter-api), `modelName`→[openrouter-api](#openrouter-api), `outputPrice`→[openrouter-api](#openrouter-api) | [openrouter-api](#openrouter-api) | partial | `5277c7958a94564f43f5262a9621b0e4bd278ad4d920d0503d0c35c43d71af6b` |
| `tencent/hy4-preview` | 1048576 / 64000 | USD：0.834 / 2.501 | `contextWindow`→[openrouter-api](#openrouter-api), `inputPrice`→[openrouter-api](#openrouter-api), `maxOutputTokens`→[openrouter-api](#openrouter-api), `modelName`→[openrouter-api](#openrouter-api), `outputPrice`→[openrouter-api](#openrouter-api) | [openrouter-api](#openrouter-api) | partial | `1b20ce395eb531733ebdec9e01ccd191e55fd0da0e5812ddf8e5a5117125a0e7` |
| `z-ai/glm-5.3-flash` | 1048576 / 943717 | USD：0.15 / 0.5 | `contextWindow`→[openrouter-api](#openrouter-api), `inputPrice`→[openrouter-api](#openrouter-api), `maxOutputTokens`→[openrouter-api](#openrouter-api), `modelName`→[openrouter-api](#openrouter-api), `outputPrice`→[openrouter-api](#openrouter-api) | [openrouter-api](#openrouter-api) | partial | `8de6679c075ed7cec4f838ae234ac5fb7205f821afc436ff106f9b0998950271` |
| `z-ai/glm-5.3` | 1048576 / 131072 | USD：1.4 / 4.4 | `contextWindow`→[openrouter-api](#openrouter-api), `inputPrice`→[openrouter-api](#openrouter-api), `maxOutputTokens`→[openrouter-api](#openrouter-api), `modelName`→[openrouter-api](#openrouter-api), `outputPrice`→[openrouter-api](#openrouter-api) | [openrouter-api](#openrouter-api) | partial | `c22cb9071ec3d17853a56fce91fb9db617072749d860c73ad78d2f7818ebc30d` |
| `moonshotai/kimi-k3` | 1048576 / 943718 | USD：2.7 / 13.5 | `contextWindow`→[openrouter-api](#openrouter-api), `inputPrice`→[openrouter-api](#openrouter-api), `maxOutputTokens`→[openrouter-api](#openrouter-api), `modelName`→[openrouter-api](#openrouter-api), `outputPrice`→[openrouter-api](#openrouter-api) | [openrouter-api](#openrouter-api) | partial | `999a8dfc6c147790217c22474ae87604c6d727336540cd9f6f6ba53da8e282b4` |
| `anthropic/claude-sonnet-5.5` | 1000000 / 128000 | USD：2 / 10 | `contextWindow`→[openrouter-api](#openrouter-api), `inputPrice`→[openrouter-api](#openrouter-api), `maxOutputTokens`→[openrouter-api](#openrouter-api), `modelName`→[openrouter-api](#openrouter-api), `outputPrice`→[openrouter-api](#openrouter-api) | [openrouter-api](#openrouter-api) | partial | `0f87a0008e8b5bade79b7f768e57be0352c4e24566c8c5ddacbce5924efee397` |
| `anthropic/claude-opus-5.5` | 1000000 / 128000 | USD：4 / 20 | `contextWindow`→[openrouter-api](#openrouter-api), `inputPrice`→[openrouter-api](#openrouter-api), `maxOutputTokens`→[openrouter-api](#openrouter-api), `modelName`→[openrouter-api](#openrouter-api), `outputPrice`→[openrouter-api](#openrouter-api) | [openrouter-api](#openrouter-api) | partial | `79a696f2be1fae80c537c4e14817be7c8a5ec39f67d44d7adcd64bf4e9d9e57f` |
| `openai/gpt-6.1-sol` | 1050000 / 128000 | USD：2 / 10 | `contextWindow`→[openrouter-api](#openrouter-api), `inputPrice`→[openrouter-api](#openrouter-api), `maxOutputTokens`→[openrouter-api](#openrouter-api), `modelName`→[openrouter-api](#openrouter-api), `outputPrice`→[openrouter-api](#openrouter-api) | [openrouter-api](#openrouter-api) | partial | `ce08d474c9407339330f5f9312e79167414d1ab024083e01809801d008a61db7` |
| `openrouter/auto` | 2000000 / 16384 | USD：未声明 / 未声明 | `contextWindow`→[openrouter-api](#openrouter-api), `modelName`→[openrouter-api](#openrouter-api) | [openrouter-api](#openrouter-api) | partial | `f00c22f23fb9f8df157559d612b9c6d07a4df6959580b5da6eddee27b9aadf25` |

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
  "supplier": "openrouter",
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
    }
  ]
}
```
<!-- source-metadata:end -->
