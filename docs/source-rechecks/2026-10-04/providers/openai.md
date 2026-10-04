# openai 来源重新核查

核查日期：2026-10-04。覆盖 inventory 中 98 条精确记录。此文是临时候选复核，不修改既有来源状态、数据或 manifest。

API参数与ChatGPT/Codex订阅分开。43个精确API文档可读、7个精确URL404；额外订阅模型页已发生官方跳转并给出独立退役日期。日期不是API停服证据。

## 本次实际读取与失败尝试

### openai-1aa248fc8b83

- 初始链接：[https://developers.openai.com/codex/models](https://developers.openai.com/codex/models)
- 最终链接：[https://learn.chatgpt.com/docs/models](https://learn.chatgpt.com/docs/models)
- 发布者/类型/读取：OpenAI / official-docs / readable
- 适用范围：以ChatGPT登录的Codex、ChatGPT Work及ChatGPT订阅产品模型选择、套餐可用性与退役公告；不证明OpenAI API窗口、价格或停服状态。
- 结果：起始OpenAI Developers链接实际跳转learn.chatgpt.com/docs/models并读取正文。明确区分Codex订阅退役与OpenAI API不受影响；订阅字段仍需各账号/套餐合同。
- 读取方式：`http-get-html-body-text-extraction`；未记录内容哈希，未补造 `contentSha256` 或 `digestKind`。

### openai-b3dc561d4c2e

- 初始链接：[https://developers.openai.com/codex/concepts/context](https://developers.openai.com/codex/concepts/context)
- 最终链接：[https://developers.openai.com/codex/concepts/context](https://developers.openai.com/codex/concepts/context)
- 发布者/类型/读取：OpenAI / official-docs / not-found
- 适用范围：该官网文档明确列出的模型/API；不扩展到其他接入面。
- 结果：HTTP Error 404: Not Found

### openai-0146e86d59d4

- 初始链接：[https://raw.githubusercontent.com/openai/codex/main/codex-rs/core/models.json](https://raw.githubusercontent.com/openai/codex/main/codex-rs/core/models.json)
- 最终链接：[https://raw.githubusercontent.com/openai/codex/main/codex-rs/core/models.json](https://raw.githubusercontent.com/openai/codex/main/codex-rs/core/models.json)
- 发布者/类型/读取：OpenAI / official-repository / not-found
- 适用范围：该官网文档明确列出的模型/API；不扩展到其他接入面。
- 结果：HTTP Error 404: Not Found

### openai-a8230f818291

- 初始链接：[https://raw.githubusercontent.com/openai/whisper/main/README.md](https://raw.githubusercontent.com/openai/whisper/main/README.md)
- 最终链接：[https://raw.githubusercontent.com/openai/whisper/main/README.md](https://raw.githubusercontent.com/openai/whisper/main/README.md)
- 发布者/类型/读取：OpenAI / official-repository / readable
- 适用范围：OpenAI官方Whisper开源权重、模型名称与本地部署说明；不证明同名托管OpenAI API ID、价格或本机已安装/可用。
- 结果：实际读取官方GitHub原始README，large-v3用于本地开源权重身份对照；未将其认证为whisper-large-v3托管API合同。
- 读取方式：`http-get-text-body`；未记录内容哈希，未补造 `contentSha256` 或 `digestKind`。

### openai-21e2b1434ab3

- 初始链接：[https://developers.openai.com/api/docs/models/gpt-5.3-codex-spark](https://developers.openai.com/api/docs/models/gpt-5.3-codex-spark)
- 最终链接：[https://developers.openai.com/api/docs/models/gpt-5.3-codex-spark](https://developers.openai.com/api/docs/models/gpt-5.3-codex-spark)
- 发布者/类型/读取：OpenAI / official-docs / not-found
- 适用范围：该官网文档明确列出的模型/API；不扩展到其他接入面。
- 结果：HTTP Error 404: Not Found

### openai-08eca4aa5ee6

- 初始链接：[https://developers.openai.com/api/docs/guides/pro-mode.md](https://developers.openai.com/api/docs/guides/pro-mode.md)
- 最终链接：[https://developers.openai.com/api/docs/guides/pro-mode.md](https://developers.openai.com/api/docs/guides/pro-mode.md)
- 发布者/类型/读取：OpenAI / official-docs / not-found
- 适用范围：该官网文档明确列出的模型/API；不扩展到其他接入面。
- 结果：HTTP Error 404: Not Found

### openai-7b240f36f35b

- 初始链接：[https://developers.openai.com/api/docs/guides/embeddings.md](https://developers.openai.com/api/docs/guides/embeddings.md)
- 最终链接：[https://developers.openai.com/api/docs/guides/embeddings.md](https://developers.openai.com/api/docs/guides/embeddings.md)
- 发布者/类型/读取：OpenAI / official-docs / readable
- 适用范围：该官网文档明确列出的模型/API；不扩展到其他接入面。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### openai-6d28d1d0210a

- 初始链接：[https://developers.openai.com/api/docs/pricing.md](https://developers.openai.com/api/docs/pricing.md)
- 最终链接：[https://developers.openai.com/api/docs/pricing.md](https://developers.openai.com/api/docs/pricing.md)
- 发布者/类型/读取：OpenAI / official-docs / readable
- 适用范围：该官网文档明确列出的模型/API；不扩展到其他接入面。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### openai-18beea801ab8

- 初始链接：[https://learn.chatgpt.com/docs/changelog](https://learn.chatgpt.com/docs/changelog)
- 最终链接：[https://learn.chatgpt.com/docs/changelog](https://learn.chatgpt.com/docs/changelog)
- 发布者/类型/读取：OpenAI / official-docs / readable
- 适用范围：ChatGPT、ChatGPT Work和Codex产品发布及订阅模型生命周期；涉及API的公告须单独按正文范围区分，不能套用订阅退役到API。
- 结果：实际读取ChatGPT Learn更新日志正文；Spark退役及Codex登录接入历史发布仅作订阅产品证据，不证明API精确规格。
- 读取方式：`http-get-html-body-text-extraction`；未记录内容哈希，未补造 `contentSha256` 或 `digestKind`。

### openai-8a484ebecbb1

- 初始链接：[https://developers.openai.com/api/docs/deprecations.md](https://developers.openai.com/api/docs/deprecations.md)
- 最终链接：[https://developers.openai.com/api/docs/deprecations.md](https://developers.openai.com/api/docs/deprecations.md)
- 发布者/类型/读取：OpenAI / official-docs / readable
- 适用范围：该官网文档明确列出的模型/API；不扩展到其他接入面。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### openai-7827db272dd8

- 初始链接：[https://developers.openai.com/api/docs/models/dall-e-3.md](https://developers.openai.com/api/docs/models/dall-e-3.md)
- 最终链接：[https://developers.openai.com/api/docs/models/dall-e-3.md](https://developers.openai.com/api/docs/models/dall-e-3.md)
- 发布者/类型/读取：OpenAI / official-docs / readable
- 适用范围：原厂 OpenAI API 精确型号；不证明 ChatGPT/Codex 订阅额度或本客户端适配。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### openai-f587a9692fe7

- 初始链接：[https://developers.openai.com/api/docs/models/gpt-4.1.md](https://developers.openai.com/api/docs/models/gpt-4.1.md)
- 最终链接：[https://developers.openai.com/api/docs/models/gpt-4.1.md](https://developers.openai.com/api/docs/models/gpt-4.1.md)
- 发布者/类型/读取：OpenAI / official-docs / readable
- 适用范围：原厂 OpenAI API 精确型号；不证明 ChatGPT/Codex 订阅额度或本客户端适配。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### openai-d45dff9b99e7

- 初始链接：[https://developers.openai.com/api/docs/models/gpt-4.1-mini.md](https://developers.openai.com/api/docs/models/gpt-4.1-mini.md)
- 最终链接：[https://developers.openai.com/api/docs/models/gpt-4.1-mini.md](https://developers.openai.com/api/docs/models/gpt-4.1-mini.md)
- 发布者/类型/读取：OpenAI / official-docs / readable
- 适用范围：原厂 OpenAI API 精确型号；不证明 ChatGPT/Codex 订阅额度或本客户端适配。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### openai-8b8ee68e4732

- 初始链接：[https://developers.openai.com/api/docs/models/gpt-4.1-nano.md](https://developers.openai.com/api/docs/models/gpt-4.1-nano.md)
- 最终链接：[https://developers.openai.com/api/docs/models/gpt-4.1-nano.md](https://developers.openai.com/api/docs/models/gpt-4.1-nano.md)
- 发布者/类型/读取：OpenAI / official-docs / readable
- 适用范围：原厂 OpenAI API 精确型号；不证明 ChatGPT/Codex 订阅额度或本客户端适配。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### openai-9707b5983eeb

- 初始链接：[https://developers.openai.com/api/docs/models/gpt-4o.md](https://developers.openai.com/api/docs/models/gpt-4o.md)
- 最终链接：[https://developers.openai.com/api/docs/models/gpt-4o.md](https://developers.openai.com/api/docs/models/gpt-4o.md)
- 发布者/类型/读取：OpenAI / official-docs / readable
- 适用范围：原厂 OpenAI API 精确型号；不证明 ChatGPT/Codex 订阅额度或本客户端适配。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### openai-58912dd3f499

- 初始链接：[https://developers.openai.com/api/docs/models/gpt-4o-mini.md](https://developers.openai.com/api/docs/models/gpt-4o-mini.md)
- 最终链接：[https://developers.openai.com/api/docs/models/gpt-4o-mini.md](https://developers.openai.com/api/docs/models/gpt-4o-mini.md)
- 发布者/类型/读取：OpenAI / official-docs / readable
- 适用范围：原厂 OpenAI API 精确型号；不证明 ChatGPT/Codex 订阅额度或本客户端适配。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### openai-0375a6cb4c33

- 初始链接：[https://developers.openai.com/api/docs/models/gpt-4o-realtime.md](https://developers.openai.com/api/docs/models/gpt-4o-realtime.md)
- 最终链接：[https://developers.openai.com/api/docs/models/gpt-4o-realtime.md](https://developers.openai.com/api/docs/models/gpt-4o-realtime.md)
- 发布者/类型/读取：OpenAI / official-docs / not-found
- 适用范围：原厂 OpenAI API 精确型号；不证明 ChatGPT/Codex 订阅额度或本客户端适配。
- 结果：HTTP Error 404: Not Found

### openai-77fd4528af52

- 初始链接：[https://developers.openai.com/api/docs/models/gpt-4o-realtime-preview.md](https://developers.openai.com/api/docs/models/gpt-4o-realtime-preview.md)
- 最终链接：[https://developers.openai.com/api/docs/models/gpt-4o-realtime-preview.md](https://developers.openai.com/api/docs/models/gpt-4o-realtime-preview.md)
- 发布者/类型/读取：OpenAI / official-docs / readable
- 适用范围：原厂 OpenAI API 精确型号；不证明 ChatGPT/Codex 订阅额度或本客户端适配。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### openai-5a96a2b0e310

- 初始链接：[https://developers.openai.com/api/docs/models/gpt-5.md](https://developers.openai.com/api/docs/models/gpt-5.md)
- 最终链接：[https://developers.openai.com/api/docs/models/gpt-5.md](https://developers.openai.com/api/docs/models/gpt-5.md)
- 发布者/类型/读取：OpenAI / official-docs / readable
- 适用范围：原厂 OpenAI API 精确型号；不证明 ChatGPT/Codex 订阅额度或本客户端适配。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### openai-68f20c8459ff

- 初始链接：[https://developers.openai.com/api/docs/models/gpt-5-mini.md](https://developers.openai.com/api/docs/models/gpt-5-mini.md)
- 最终链接：[https://developers.openai.com/api/docs/models/gpt-5-mini.md](https://developers.openai.com/api/docs/models/gpt-5-mini.md)
- 发布者/类型/读取：OpenAI / official-docs / readable
- 适用范围：原厂 OpenAI API 精确型号；不证明 ChatGPT/Codex 订阅额度或本客户端适配。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### openai-302d5121f486

- 初始链接：[https://developers.openai.com/api/docs/models/gpt-5-nano.md](https://developers.openai.com/api/docs/models/gpt-5-nano.md)
- 最终链接：[https://developers.openai.com/api/docs/models/gpt-5-nano.md](https://developers.openai.com/api/docs/models/gpt-5-nano.md)
- 发布者/类型/读取：OpenAI / official-docs / readable
- 适用范围：原厂 OpenAI API 精确型号；不证明 ChatGPT/Codex 订阅额度或本客户端适配。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### openai-64014c0edb05

- 初始链接：[https://developers.openai.com/api/docs/models/gpt-5-pro.md](https://developers.openai.com/api/docs/models/gpt-5-pro.md)
- 最终链接：[https://developers.openai.com/api/docs/models/gpt-5-pro.md](https://developers.openai.com/api/docs/models/gpt-5-pro.md)
- 发布者/类型/读取：OpenAI / official-docs / readable
- 适用范围：原厂 OpenAI API 精确型号；不证明 ChatGPT/Codex 订阅额度或本客户端适配。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### openai-9da37f00ee08

- 初始链接：[https://developers.openai.com/api/docs/models/gpt-5.1.md](https://developers.openai.com/api/docs/models/gpt-5.1.md)
- 最终链接：[https://developers.openai.com/api/docs/models/gpt-5.1.md](https://developers.openai.com/api/docs/models/gpt-5.1.md)
- 发布者/类型/读取：OpenAI / official-docs / readable
- 适用范围：原厂 OpenAI API 精确型号；不证明 ChatGPT/Codex 订阅额度或本客户端适配。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### openai-a5846b5cf835

- 初始链接：[https://developers.openai.com/api/docs/models/gpt-5.2.md](https://developers.openai.com/api/docs/models/gpt-5.2.md)
- 最终链接：[https://developers.openai.com/api/docs/models/gpt-5.2.md](https://developers.openai.com/api/docs/models/gpt-5.2.md)
- 发布者/类型/读取：OpenAI / official-docs / readable
- 适用范围：原厂 OpenAI API 精确型号；不证明 ChatGPT/Codex 订阅额度或本客户端适配。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### openai-cba33d553780

- 初始链接：[https://developers.openai.com/api/docs/models/gpt-5.2-pro.md](https://developers.openai.com/api/docs/models/gpt-5.2-pro.md)
- 最终链接：[https://developers.openai.com/api/docs/models/gpt-5.2-pro.md](https://developers.openai.com/api/docs/models/gpt-5.2-pro.md)
- 发布者/类型/读取：OpenAI / official-docs / readable
- 适用范围：原厂 OpenAI API 精确型号；不证明 ChatGPT/Codex 订阅额度或本客户端适配。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### openai-8308d25da0d8

- 初始链接：[https://developers.openai.com/api/docs/models/gpt-5.3-codex-spark.md](https://developers.openai.com/api/docs/models/gpt-5.3-codex-spark.md)
- 最终链接：[https://developers.openai.com/api/docs/models/gpt-5.3-codex-spark.md](https://developers.openai.com/api/docs/models/gpt-5.3-codex-spark.md)
- 发布者/类型/读取：OpenAI / official-docs / not-found
- 适用范围：原厂 OpenAI API 精确型号；不证明 ChatGPT/Codex 订阅额度或本客户端适配。
- 结果：HTTP Error 404: Not Found

### openai-c0ccd4dee9b7

- 初始链接：[https://developers.openai.com/api/docs/models/gpt-5.4.md](https://developers.openai.com/api/docs/models/gpt-5.4.md)
- 最终链接：[https://developers.openai.com/api/docs/models/gpt-5.4.md](https://developers.openai.com/api/docs/models/gpt-5.4.md)
- 发布者/类型/读取：OpenAI / official-docs / readable
- 适用范围：原厂 OpenAI API 精确型号；不证明 ChatGPT/Codex 订阅额度或本客户端适配。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### openai-d6e6144d7c09

- 初始链接：[https://developers.openai.com/api/docs/models/gpt-5.4-mini.md](https://developers.openai.com/api/docs/models/gpt-5.4-mini.md)
- 最终链接：[https://developers.openai.com/api/docs/models/gpt-5.4-mini.md](https://developers.openai.com/api/docs/models/gpt-5.4-mini.md)
- 发布者/类型/读取：OpenAI / official-docs / readable
- 适用范围：原厂 OpenAI API 精确型号；不证明 ChatGPT/Codex 订阅额度或本客户端适配。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### openai-b1422b17000e

- 初始链接：[https://developers.openai.com/api/docs/models/gpt-5.4-nano.md](https://developers.openai.com/api/docs/models/gpt-5.4-nano.md)
- 最终链接：[https://developers.openai.com/api/docs/models/gpt-5.4-nano.md](https://developers.openai.com/api/docs/models/gpt-5.4-nano.md)
- 发布者/类型/读取：OpenAI / official-docs / readable
- 适用范围：原厂 OpenAI API 精确型号；不证明 ChatGPT/Codex 订阅额度或本客户端适配。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### openai-db69792fac93

- 初始链接：[https://developers.openai.com/api/docs/models/gpt-5.4-pro.md](https://developers.openai.com/api/docs/models/gpt-5.4-pro.md)
- 最终链接：[https://developers.openai.com/api/docs/models/gpt-5.4-pro.md](https://developers.openai.com/api/docs/models/gpt-5.4-pro.md)
- 发布者/类型/读取：OpenAI / official-docs / readable
- 适用范围：原厂 OpenAI API 精确型号；不证明 ChatGPT/Codex 订阅额度或本客户端适配。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### openai-b71aef18263f

- 初始链接：[https://developers.openai.com/api/docs/models/gpt-5.5.md](https://developers.openai.com/api/docs/models/gpt-5.5.md)
- 最终链接：[https://developers.openai.com/api/docs/models/gpt-5.5.md](https://developers.openai.com/api/docs/models/gpt-5.5.md)
- 发布者/类型/读取：OpenAI / official-docs / readable
- 适用范围：原厂 OpenAI API 精确型号；不证明 ChatGPT/Codex 订阅额度或本客户端适配。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### openai-f4193889b065

- 初始链接：[https://developers.openai.com/api/docs/models/gpt-5.5-pro.md](https://developers.openai.com/api/docs/models/gpt-5.5-pro.md)
- 最终链接：[https://developers.openai.com/api/docs/models/gpt-5.5-pro.md](https://developers.openai.com/api/docs/models/gpt-5.5-pro.md)
- 发布者/类型/读取：OpenAI / official-docs / readable
- 适用范围：原厂 OpenAI API 精确型号；不证明 ChatGPT/Codex 订阅额度或本客户端适配。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### openai-adea2d95cfef

- 初始链接：[https://developers.openai.com/api/docs/models/gpt-5.6-luna.md](https://developers.openai.com/api/docs/models/gpt-5.6-luna.md)
- 最终链接：[https://developers.openai.com/api/docs/models/gpt-5.6-luna.md](https://developers.openai.com/api/docs/models/gpt-5.6-luna.md)
- 发布者/类型/读取：OpenAI / official-docs / readable
- 适用范围：原厂 OpenAI API 精确型号；不证明 ChatGPT/Codex 订阅额度或本客户端适配。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### openai-3e03032af56c

- 初始链接：[https://developers.openai.com/api/docs/models/gpt-5.6-luna-pro.md](https://developers.openai.com/api/docs/models/gpt-5.6-luna-pro.md)
- 最终链接：[https://developers.openai.com/api/docs/models/gpt-5.6-luna-pro.md](https://developers.openai.com/api/docs/models/gpt-5.6-luna-pro.md)
- 发布者/类型/读取：OpenAI / official-docs / not-found
- 适用范围：原厂 OpenAI API 精确型号；不证明 ChatGPT/Codex 订阅额度或本客户端适配。
- 结果：HTTP Error 404: Not Found

### openai-1e6da1e6275f

- 初始链接：[https://developers.openai.com/api/docs/models/gpt-5.6-sol.md](https://developers.openai.com/api/docs/models/gpt-5.6-sol.md)
- 最终链接：[https://developers.openai.com/api/docs/models/gpt-5.6-sol.md](https://developers.openai.com/api/docs/models/gpt-5.6-sol.md)
- 发布者/类型/读取：OpenAI / official-docs / readable
- 适用范围：原厂 OpenAI API 精确型号；不证明 ChatGPT/Codex 订阅额度或本客户端适配。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### openai-e9238b5b9e58

- 初始链接：[https://developers.openai.com/api/docs/models/gpt-5.6-sol-pro.md](https://developers.openai.com/api/docs/models/gpt-5.6-sol-pro.md)
- 最终链接：[https://developers.openai.com/api/docs/models/gpt-5.6-sol-pro.md](https://developers.openai.com/api/docs/models/gpt-5.6-sol-pro.md)
- 发布者/类型/读取：OpenAI / official-docs / not-found
- 适用范围：原厂 OpenAI API 精确型号；不证明 ChatGPT/Codex 订阅额度或本客户端适配。
- 结果：HTTP Error 404: Not Found

### openai-bfecd345a934

- 初始链接：[https://developers.openai.com/api/docs/models/gpt-5.6-terra.md](https://developers.openai.com/api/docs/models/gpt-5.6-terra.md)
- 最终链接：[https://developers.openai.com/api/docs/models/gpt-5.6-terra.md](https://developers.openai.com/api/docs/models/gpt-5.6-terra.md)
- 发布者/类型/读取：OpenAI / official-docs / readable
- 适用范围：原厂 OpenAI API 精确型号；不证明 ChatGPT/Codex 订阅额度或本客户端适配。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### openai-db963dfea8df

- 初始链接：[https://developers.openai.com/api/docs/models/gpt-5.6-terra-pro.md](https://developers.openai.com/api/docs/models/gpt-5.6-terra-pro.md)
- 最终链接：[https://developers.openai.com/api/docs/models/gpt-5.6-terra-pro.md](https://developers.openai.com/api/docs/models/gpt-5.6-terra-pro.md)
- 发布者/类型/读取：OpenAI / official-docs / not-found
- 适用范围：原厂 OpenAI API 精确型号；不证明 ChatGPT/Codex 订阅额度或本客户端适配。
- 结果：HTTP Error 404: Not Found

### openai-c3657b2de733

- 初始链接：[https://developers.openai.com/api/docs/models/gpt-6-astra.md](https://developers.openai.com/api/docs/models/gpt-6-astra.md)
- 最终链接：[https://developers.openai.com/api/docs/models/gpt-6-astra.md](https://developers.openai.com/api/docs/models/gpt-6-astra.md)
- 发布者/类型/读取：OpenAI / official-docs / readable
- 适用范围：原厂 OpenAI API 精确型号；不证明 ChatGPT/Codex 订阅额度或本客户端适配。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### openai-64e9b8ff2ca6

- 初始链接：[https://developers.openai.com/api/docs/models/gpt-6-luna.md](https://developers.openai.com/api/docs/models/gpt-6-luna.md)
- 最终链接：[https://developers.openai.com/api/docs/models/gpt-6-luna.md](https://developers.openai.com/api/docs/models/gpt-6-luna.md)
- 发布者/类型/读取：OpenAI / official-docs / readable
- 适用范围：原厂 OpenAI API 精确型号；不证明 ChatGPT/Codex 订阅额度或本客户端适配。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### openai-cf90807722ce

- 初始链接：[https://developers.openai.com/api/docs/models/gpt-6-sol.md](https://developers.openai.com/api/docs/models/gpt-6-sol.md)
- 最终链接：[https://developers.openai.com/api/docs/models/gpt-6-sol.md](https://developers.openai.com/api/docs/models/gpt-6-sol.md)
- 发布者/类型/读取：OpenAI / official-docs / readable
- 适用范围：原厂 OpenAI API 精确型号；不证明 ChatGPT/Codex 订阅额度或本客户端适配。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### openai-5869dfcf1073

- 初始链接：[https://developers.openai.com/api/docs/models/gpt-6.1-sol.md](https://developers.openai.com/api/docs/models/gpt-6.1-sol.md)
- 最终链接：[https://developers.openai.com/api/docs/models/gpt-6.1-sol.md](https://developers.openai.com/api/docs/models/gpt-6.1-sol.md)
- 发布者/类型/读取：OpenAI / official-docs / readable
- 适用范围：原厂 OpenAI API 精确型号；不证明 ChatGPT/Codex 订阅额度或本客户端适配。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### openai-3ad3be091501

- 初始链接：[https://developers.openai.com/api/docs/models/gpt-image-2.md](https://developers.openai.com/api/docs/models/gpt-image-2.md)
- 最终链接：[https://developers.openai.com/api/docs/models/gpt-image-2.md](https://developers.openai.com/api/docs/models/gpt-image-2.md)
- 发布者/类型/读取：OpenAI / official-docs / readable
- 适用范围：原厂 OpenAI API 精确型号；不证明 ChatGPT/Codex 订阅额度或本客户端适配。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### openai-b2db80f89601

- 初始链接：[https://developers.openai.com/api/docs/models/gpt-image-2.5-flare.md](https://developers.openai.com/api/docs/models/gpt-image-2.5-flare.md)
- 最终链接：[https://developers.openai.com/api/docs/models/gpt-image-2.5-flare.md](https://developers.openai.com/api/docs/models/gpt-image-2.5-flare.md)
- 发布者/类型/读取：OpenAI / official-docs / readable
- 适用范围：原厂 OpenAI API 精确型号；不证明 ChatGPT/Codex 订阅额度或本客户端适配。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### openai-fc5c907e0c04

- 初始链接：[https://developers.openai.com/api/docs/models/gpt-image-2.5-sunburst.md](https://developers.openai.com/api/docs/models/gpt-image-2.5-sunburst.md)
- 最终链接：[https://developers.openai.com/api/docs/models/gpt-image-2.5-sunburst.md](https://developers.openai.com/api/docs/models/gpt-image-2.5-sunburst.md)
- 发布者/类型/读取：OpenAI / official-docs / readable
- 适用范围：原厂 OpenAI API 精确型号；不证明 ChatGPT/Codex 订阅额度或本客户端适配。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### openai-94089c5bb5b9

- 初始链接：[https://developers.openai.com/api/docs/models/gpt-oss-120b.md](https://developers.openai.com/api/docs/models/gpt-oss-120b.md)
- 最终链接：[https://developers.openai.com/api/docs/models/gpt-oss-120b.md](https://developers.openai.com/api/docs/models/gpt-oss-120b.md)
- 发布者/类型/读取：OpenAI / official-docs / readable
- 适用范围：原厂 OpenAI API 精确型号；不证明 ChatGPT/Codex 订阅额度或本客户端适配。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### openai-cb36f33252bd

- 初始链接：[https://developers.openai.com/api/docs/models/gpt-realtime-2.1.md](https://developers.openai.com/api/docs/models/gpt-realtime-2.1.md)
- 最终链接：[https://developers.openai.com/api/docs/models/gpt-realtime-2.1.md](https://developers.openai.com/api/docs/models/gpt-realtime-2.1.md)
- 发布者/类型/读取：OpenAI / official-docs / readable
- 适用范围：原厂 OpenAI API 精确型号；不证明 ChatGPT/Codex 订阅额度或本客户端适配。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### openai-f68a76695065

- 初始链接：[https://developers.openai.com/api/docs/models/gpt-realtime-2.1-mini.md](https://developers.openai.com/api/docs/models/gpt-realtime-2.1-mini.md)
- 最终链接：[https://developers.openai.com/api/docs/models/gpt-realtime-2.1-mini.md](https://developers.openai.com/api/docs/models/gpt-realtime-2.1-mini.md)
- 发布者/类型/读取：OpenAI / official-docs / readable
- 适用范围：原厂 OpenAI API 精确型号；不证明 ChatGPT/Codex 订阅额度或本客户端适配。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### openai-59f6f29364d1

- 初始链接：[https://developers.openai.com/api/docs/models/gpt-realtime-translate.md](https://developers.openai.com/api/docs/models/gpt-realtime-translate.md)
- 最终链接：[https://developers.openai.com/api/docs/models/gpt-realtime-translate.md](https://developers.openai.com/api/docs/models/gpt-realtime-translate.md)
- 发布者/类型/读取：OpenAI / official-docs / readable
- 适用范围：原厂 OpenAI API 精确型号；不证明 ChatGPT/Codex 订阅额度或本客户端适配。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### openai-9e1242c6b876

- 初始链接：[https://developers.openai.com/api/docs/models/gpt-reserve.md](https://developers.openai.com/api/docs/models/gpt-reserve.md)
- 最终链接：[https://developers.openai.com/api/docs/models/gpt-reserve.md](https://developers.openai.com/api/docs/models/gpt-reserve.md)
- 发布者/类型/读取：OpenAI / official-docs / not-found
- 适用范围：原厂 OpenAI API 精确型号；不证明 ChatGPT/Codex 订阅额度或本客户端适配。
- 结果：HTTP Error 404: Not Found

### openai-ebd9859f5024

- 初始链接：[https://developers.openai.com/api/docs/models/o3.md](https://developers.openai.com/api/docs/models/o3.md)
- 最终链接：[https://developers.openai.com/api/docs/models/o3.md](https://developers.openai.com/api/docs/models/o3.md)
- 发布者/类型/读取：OpenAI / official-docs / readable
- 适用范围：原厂 OpenAI API 精确型号；不证明 ChatGPT/Codex 订阅额度或本客户端适配。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### openai-595481ef3736

- 初始链接：[https://developers.openai.com/api/docs/models/o3-mini.md](https://developers.openai.com/api/docs/models/o3-mini.md)
- 最终链接：[https://developers.openai.com/api/docs/models/o3-mini.md](https://developers.openai.com/api/docs/models/o3-mini.md)
- 发布者/类型/读取：OpenAI / official-docs / readable
- 适用范围：原厂 OpenAI API 精确型号；不证明 ChatGPT/Codex 订阅额度或本客户端适配。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### openai-a961809560e5

- 初始链接：[https://developers.openai.com/api/docs/models/o3-pro.md](https://developers.openai.com/api/docs/models/o3-pro.md)
- 最终链接：[https://developers.openai.com/api/docs/models/o3-pro.md](https://developers.openai.com/api/docs/models/o3-pro.md)
- 发布者/类型/读取：OpenAI / official-docs / readable
- 适用范围：原厂 OpenAI API 精确型号；不证明 ChatGPT/Codex 订阅额度或本客户端适配。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### openai-e106ec329232

- 初始链接：[https://developers.openai.com/api/docs/models/o4-mini.md](https://developers.openai.com/api/docs/models/o4-mini.md)
- 最终链接：[https://developers.openai.com/api/docs/models/o4-mini.md](https://developers.openai.com/api/docs/models/o4-mini.md)
- 发布者/类型/读取：OpenAI / official-docs / readable
- 适用范围：原厂 OpenAI API 精确型号；不证明 ChatGPT/Codex 订阅额度或本客户端适配。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### openai-b019cd28185b

- 初始链接：[https://developers.openai.com/api/docs/models/text-embedding-3-large.md](https://developers.openai.com/api/docs/models/text-embedding-3-large.md)
- 最终链接：[https://developers.openai.com/api/docs/models/text-embedding-3-large.md](https://developers.openai.com/api/docs/models/text-embedding-3-large.md)
- 发布者/类型/读取：OpenAI / official-docs / readable
- 适用范围：原厂 OpenAI API 精确型号；不证明 ChatGPT/Codex 订阅额度或本客户端适配。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### openai-37651a33130d

- 初始链接：[https://developers.openai.com/api/docs/models/text-embedding-3-small.md](https://developers.openai.com/api/docs/models/text-embedding-3-small.md)
- 最终链接：[https://developers.openai.com/api/docs/models/text-embedding-3-small.md](https://developers.openai.com/api/docs/models/text-embedding-3-small.md)
- 发布者/类型/读取：OpenAI / official-docs / readable
- 适用范围：原厂 OpenAI API 精确型号；不证明 ChatGPT/Codex 订阅额度或本客户端适配。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### openai-272ab0c0bb4a

- 初始链接：[https://developers.openai.com/api/docs/models/tts-1.md](https://developers.openai.com/api/docs/models/tts-1.md)
- 最终链接：[https://developers.openai.com/api/docs/models/tts-1.md](https://developers.openai.com/api/docs/models/tts-1.md)
- 发布者/类型/读取：OpenAI / official-docs / readable
- 适用范围：原厂 OpenAI API 精确型号；不证明 ChatGPT/Codex 订阅额度或本客户端适配。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### openai-5828b97f2f75

- 初始链接：[https://developers.openai.com/api/docs/models/tts-1-hd.md](https://developers.openai.com/api/docs/models/tts-1-hd.md)
- 最终链接：[https://developers.openai.com/api/docs/models/tts-1-hd.md](https://developers.openai.com/api/docs/models/tts-1-hd.md)
- 发布者/类型/读取：OpenAI / official-docs / readable
- 适用范围：原厂 OpenAI API 精确型号；不证明 ChatGPT/Codex 订阅额度或本客户端适配。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### openai-c980197d3ede

- 初始链接：[https://developers.openai.com/api/docs/models/whisper-1.md](https://developers.openai.com/api/docs/models/whisper-1.md)
- 最终链接：[https://developers.openai.com/api/docs/models/whisper-1.md](https://developers.openai.com/api/docs/models/whisper-1.md)
- 发布者/类型/读取：OpenAI / official-docs / readable
- 适用范围：原厂 OpenAI API 精确型号；不证明 ChatGPT/Codex 订阅额度或本客户端适配。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### openai-ecd9458843a7

- 初始链接：[https://developers.openai.com/api/docs/models/whisper-large-v3.md](https://developers.openai.com/api/docs/models/whisper-large-v3.md)
- 最终链接：[https://developers.openai.com/api/docs/models/whisper-large-v3.md](https://developers.openai.com/api/docs/models/whisper-large-v3.md)
- 发布者/类型/读取：OpenAI / official-docs / not-found
- 适用范围：原厂 OpenAI API 精确型号；不证明 ChatGPT/Codex 订阅额度或本客户端适配。
- 结果：HTTP Error 404: Not Found

## 逐记录复核

### `compute/model-specs/openai.json#dall-e-3`

- 精确型号：`dall-e-3`
- 接入/规格文件：`compute/model-specs/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/dall-e-3.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `id` | `"dall-e-3"` | `"dall-e-3"` | matches | [openai-7827db272dd8](https://developers.openai.com/api/docs/models/dall-e-3.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `spec.inputModalities` | `null` | `["text"]` | differs | [openai-7827db272dd8](https://developers.openai.com/api/docs/models/dall-e-3.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.outputModalities` | `null` | `["image"]` | differs | [openai-7827db272dd8](https://developers.openai.com/api/docs/models/dall-e-3.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |

剩余缺口：原 inventory 所列缺字段已有候选证据；不代表账号实测或全规格无缺口。

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。

### `compute/providers/openai.json#gpt-4.1-mini`

- 精确型号：`gpt-4.1-mini`
- 接入/规格文件：`compute/providers/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-4.1-mini.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"gpt-4.1-mini"` | `"gpt-4.1-mini"` | matches | [openai-d45dff9b99e7](https://developers.openai.com/api/docs/models/gpt-4.1-mini.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `contextWindow` | `1047576` | `1047576` | matches | [openai-d45dff9b99e7](https://developers.openai.com/api/docs/models/gpt-4.1-mini.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `maxOutputTokens` | `32768` | `32768` | matches | [openai-d45dff9b99e7](https://developers.openai.com/api/docs/models/gpt-4.1-mini.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `inputPrice` | `0.4` | `0.4` | matches | [openai-d45dff9b99e7](https://developers.openai.com/api/docs/models/gpt-4.1-mini.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `outputPrice` | `1.6` | `1.6` | matches | [openai-d45dff9b99e7](https://developers.openai.com/api/docs/models/gpt-4.1-mini.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `extra.cachedInputPrice` | `null` | `0.1` | differs | [openai-d45dff9b99e7](https://developers.openai.com/api/docs/models/gpt-4.1-mini.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `inputModalities` | `null` | `["text","image"]` | differs | [openai-d45dff9b99e7](https://developers.openai.com/api/docs/models/gpt-4.1-mini.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `outputModalities` | `null` | `["text"]` | differs | [openai-d45dff9b99e7](https://developers.openai.com/api/docs/models/gpt-4.1-mini.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |

剩余缺口：`defaultTemperature`, `defaultTopP`, `extra.serverSideWebSearch.searchRequestPriceUsd`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

### `compute/model-specs/openai.json#gpt-4.1-mini`

- 精确型号：`gpt-4.1-mini`
- 接入/规格文件：`compute/model-specs/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-4.1-mini.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `id` | `"gpt-4.1-mini"` | `"gpt-4.1-mini"` | matches | [openai-d45dff9b99e7](https://developers.openai.com/api/docs/models/gpt-4.1-mini.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `spec.contextWindow` | `1047576` | `1047576` | matches | [openai-d45dff9b99e7](https://developers.openai.com/api/docs/models/gpt-4.1-mini.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `spec.maxOutputTokens` | `32768` | `32768` | matches | [openai-d45dff9b99e7](https://developers.openai.com/api/docs/models/gpt-4.1-mini.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `accessReference.inputPrice` | `null` | `0.4` | not-comparable | [openai-d45dff9b99e7](https://developers.openai.com/api/docs/models/gpt-4.1-mini.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.outputPrice` | `null` | `1.6` | not-comparable | [openai-d45dff9b99e7](https://developers.openai.com/api/docs/models/gpt-4.1-mini.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.extra.cachedInputPrice` | `null` | `0.1` | not-comparable | [openai-d45dff9b99e7](https://developers.openai.com/api/docs/models/gpt-4.1-mini.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `spec.inputModalities` | `null` | `["text","image"]` | differs | [openai-d45dff9b99e7](https://developers.openai.com/api/docs/models/gpt-4.1-mini.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.outputModalities` | `null` | `["text"]` | differs | [openai-d45dff9b99e7](https://developers.openai.com/api/docs/models/gpt-4.1-mini.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |

剩余缺口：`spec.defaultTemperature`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

### `compute/providers/openai.json#gpt-4.1-nano`

- 精确型号：`gpt-4.1-nano`
- 接入/规格文件：`compute/providers/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-4.1-nano.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"gpt-4.1-nano"` | `"gpt-4.1-nano"` | matches | [openai-8b8ee68e4732](https://developers.openai.com/api/docs/models/gpt-4.1-nano.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `contextWindow` | `1047576` | `1047576` | matches | [openai-8b8ee68e4732](https://developers.openai.com/api/docs/models/gpt-4.1-nano.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `maxOutputTokens` | `32768` | `32768` | matches | [openai-8b8ee68e4732](https://developers.openai.com/api/docs/models/gpt-4.1-nano.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `inputPrice` | `0.1` | `0.1` | matches | [openai-8b8ee68e4732](https://developers.openai.com/api/docs/models/gpt-4.1-nano.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `outputPrice` | `0.4` | `0.4` | matches | [openai-8b8ee68e4732](https://developers.openai.com/api/docs/models/gpt-4.1-nano.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `extra.cachedInputPrice` | `null` | `0.025` | differs | [openai-8b8ee68e4732](https://developers.openai.com/api/docs/models/gpt-4.1-nano.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `inputModalities` | `null` | `["text","image"]` | differs | [openai-8b8ee68e4732](https://developers.openai.com/api/docs/models/gpt-4.1-nano.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `outputModalities` | `null` | `["text"]` | differs | [openai-8b8ee68e4732](https://developers.openai.com/api/docs/models/gpt-4.1-nano.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |

剩余缺口：`defaultTemperature`, `defaultTopP`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

### `compute/model-specs/openai.json#gpt-4.1-nano`

- 精确型号：`gpt-4.1-nano`
- 接入/规格文件：`compute/model-specs/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-4.1-nano.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `id` | `"gpt-4.1-nano"` | `"gpt-4.1-nano"` | matches | [openai-8b8ee68e4732](https://developers.openai.com/api/docs/models/gpt-4.1-nano.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `spec.contextWindow` | `1047576` | `1047576` | matches | [openai-8b8ee68e4732](https://developers.openai.com/api/docs/models/gpt-4.1-nano.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `spec.maxOutputTokens` | `32768` | `32768` | matches | [openai-8b8ee68e4732](https://developers.openai.com/api/docs/models/gpt-4.1-nano.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `accessReference.inputPrice` | `null` | `0.1` | not-comparable | [openai-8b8ee68e4732](https://developers.openai.com/api/docs/models/gpt-4.1-nano.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.outputPrice` | `null` | `0.4` | not-comparable | [openai-8b8ee68e4732](https://developers.openai.com/api/docs/models/gpt-4.1-nano.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.extra.cachedInputPrice` | `null` | `0.025` | not-comparable | [openai-8b8ee68e4732](https://developers.openai.com/api/docs/models/gpt-4.1-nano.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `spec.inputModalities` | `null` | `["text","image"]` | differs | [openai-8b8ee68e4732](https://developers.openai.com/api/docs/models/gpt-4.1-nano.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.outputModalities` | `null` | `["text"]` | differs | [openai-8b8ee68e4732](https://developers.openai.com/api/docs/models/gpt-4.1-nano.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |

剩余缺口：`spec.defaultTemperature`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

### `compute/providers/openai.json#gpt-4.1`

- 精确型号：`gpt-4.1`
- 接入/规格文件：`compute/providers/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-4.1.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"gpt-4.1"` | `"gpt-4.1"` | matches | [openai-f587a9692fe7](https://developers.openai.com/api/docs/models/gpt-4.1.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `contextWindow` | `1047576` | `1047576` | matches | [openai-f587a9692fe7](https://developers.openai.com/api/docs/models/gpt-4.1.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `maxOutputTokens` | `32768` | `32768` | matches | [openai-f587a9692fe7](https://developers.openai.com/api/docs/models/gpt-4.1.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `inputPrice` | `2` | `2.0` | matches | [openai-f587a9692fe7](https://developers.openai.com/api/docs/models/gpt-4.1.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `outputPrice` | `8` | `8.0` | matches | [openai-f587a9692fe7](https://developers.openai.com/api/docs/models/gpt-4.1.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `extra.cachedInputPrice` | `null` | `0.5` | differs | [openai-f587a9692fe7](https://developers.openai.com/api/docs/models/gpt-4.1.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `inputModalities` | `null` | `["text","image"]` | differs | [openai-f587a9692fe7](https://developers.openai.com/api/docs/models/gpt-4.1.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `outputModalities` | `null` | `["text"]` | differs | [openai-f587a9692fe7](https://developers.openai.com/api/docs/models/gpt-4.1.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |

剩余缺口：`defaultTemperature`, `defaultTopP`, `extra.serverSideWebSearch.searchRequestPriceUsd`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

### `compute/model-specs/openai.json#gpt-4.1`

- 精确型号：`gpt-4.1`
- 接入/规格文件：`compute/model-specs/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-4.1.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `id` | `"gpt-4.1"` | `"gpt-4.1"` | matches | [openai-f587a9692fe7](https://developers.openai.com/api/docs/models/gpt-4.1.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `spec.contextWindow` | `1047576` | `1047576` | matches | [openai-f587a9692fe7](https://developers.openai.com/api/docs/models/gpt-4.1.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `spec.maxOutputTokens` | `32768` | `32768` | matches | [openai-f587a9692fe7](https://developers.openai.com/api/docs/models/gpt-4.1.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `accessReference.inputPrice` | `null` | `2.0` | not-comparable | [openai-f587a9692fe7](https://developers.openai.com/api/docs/models/gpt-4.1.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.outputPrice` | `null` | `8.0` | not-comparable | [openai-f587a9692fe7](https://developers.openai.com/api/docs/models/gpt-4.1.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.extra.cachedInputPrice` | `null` | `0.5` | not-comparable | [openai-f587a9692fe7](https://developers.openai.com/api/docs/models/gpt-4.1.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `spec.inputModalities` | `null` | `["text","image"]` | differs | [openai-f587a9692fe7](https://developers.openai.com/api/docs/models/gpt-4.1.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.outputModalities` | `null` | `["text"]` | differs | [openai-f587a9692fe7](https://developers.openai.com/api/docs/models/gpt-4.1.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |

剩余缺口：`spec.defaultTemperature`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

### `compute/providers/openai.json#gpt-4o-mini`

- 精确型号：`gpt-4o-mini`
- 接入/规格文件：`compute/providers/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-4o-mini.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"gpt-4o-mini"` | `"gpt-4o-mini"` | matches | [openai-58912dd3f499](https://developers.openai.com/api/docs/models/gpt-4o-mini.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `contextWindow` | `128000` | `128000` | matches | [openai-58912dd3f499](https://developers.openai.com/api/docs/models/gpt-4o-mini.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `maxOutputTokens` | `16384` | `16384` | matches | [openai-58912dd3f499](https://developers.openai.com/api/docs/models/gpt-4o-mini.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `inputPrice` | `0.15` | `0.15` | matches | [openai-58912dd3f499](https://developers.openai.com/api/docs/models/gpt-4o-mini.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `outputPrice` | `0.6` | `0.6` | matches | [openai-58912dd3f499](https://developers.openai.com/api/docs/models/gpt-4o-mini.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `extra.cachedInputPrice` | `null` | `0.075` | differs | [openai-58912dd3f499](https://developers.openai.com/api/docs/models/gpt-4o-mini.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `inputModalities` | `null` | `["text","image"]` | differs | [openai-58912dd3f499](https://developers.openai.com/api/docs/models/gpt-4o-mini.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `outputModalities` | `null` | `["text"]` | differs | [openai-58912dd3f499](https://developers.openai.com/api/docs/models/gpt-4o-mini.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |

剩余缺口：`defaultTemperature`, `defaultTopP`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

### `compute/model-specs/openai.json#gpt-4o-mini`

- 精确型号：`gpt-4o-mini`
- 接入/规格文件：`compute/model-specs/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-4o-mini.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `id` | `"gpt-4o-mini"` | `"gpt-4o-mini"` | matches | [openai-58912dd3f499](https://developers.openai.com/api/docs/models/gpt-4o-mini.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `spec.contextWindow` | `128000` | `128000` | matches | [openai-58912dd3f499](https://developers.openai.com/api/docs/models/gpt-4o-mini.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `spec.maxOutputTokens` | `16384` | `16384` | matches | [openai-58912dd3f499](https://developers.openai.com/api/docs/models/gpt-4o-mini.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `accessReference.inputPrice` | `null` | `0.15` | not-comparable | [openai-58912dd3f499](https://developers.openai.com/api/docs/models/gpt-4o-mini.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.outputPrice` | `null` | `0.6` | not-comparable | [openai-58912dd3f499](https://developers.openai.com/api/docs/models/gpt-4o-mini.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.extra.cachedInputPrice` | `null` | `0.075` | not-comparable | [openai-58912dd3f499](https://developers.openai.com/api/docs/models/gpt-4o-mini.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `spec.inputModalities` | `null` | `["text","image"]` | differs | [openai-58912dd3f499](https://developers.openai.com/api/docs/models/gpt-4o-mini.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.outputModalities` | `null` | `["text"]` | differs | [openai-58912dd3f499](https://developers.openai.com/api/docs/models/gpt-4o-mini.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |

剩余缺口：`spec.defaultTemperature`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

### `compute/model-specs/openai.json#gpt-4o-realtime-preview`

- 精确型号：`gpt-4o-realtime-preview`
- 接入/规格文件：`compute/model-specs/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-4o-realtime-preview.md`
- 结论：`historical-only`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `id` | `"gpt-4o-realtime-preview"` | `"gpt-4o-realtime-preview"` | matches | [openai-77fd4528af52](https://developers.openai.com/api/docs/models/gpt-4o-realtime-preview.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `spec.contextWindow` | `32000` | `32000` | matches | [openai-77fd4528af52](https://developers.openai.com/api/docs/models/gpt-4o-realtime-preview.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `spec.maxOutputTokens` | `4096` | `4096` | matches | [openai-77fd4528af52](https://developers.openai.com/api/docs/models/gpt-4o-realtime-preview.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `accessReference.inputPrice` | `null` | `5.0` | not-comparable | [openai-77fd4528af52](https://developers.openai.com/api/docs/models/gpt-4o-realtime-preview.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.outputPrice` | `null` | `20.0` | not-comparable | [openai-77fd4528af52](https://developers.openai.com/api/docs/models/gpt-4o-realtime-preview.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.extra.cachedInputPrice` | `null` | `2.5` | not-comparable | [openai-77fd4528af52](https://developers.openai.com/api/docs/models/gpt-4o-realtime-preview.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `spec.inputModalities` | `null` | `["text","audio"]` | differs | [openai-77fd4528af52](https://developers.openai.com/api/docs/models/gpt-4o-realtime-preview.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.outputModalities` | `null` | `["text","audio"]` | differs | [openai-77fd4528af52](https://developers.openai.com/api/docs/models/gpt-4o-realtime-preview.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.apiLifecycle` | `null` | `{"deprecated":true,"shutdownDate":"2026-05-07"}` | differs | [openai-8a484ebecbb1](https://developers.openai.com/api/docs/deprecations.md)；官网API deprecations表；核查日在未来的日期只是预告，不立即停用。 |

剩余缺口：`spec.defaultTemperature`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- API官方停服日期 2026-05-07；未来日期不等于已退役，专用capacity合同另核。

### `compute/model-specs/openai.json#gpt-4o-realtime`

- 精确型号：`gpt-4o-realtime`
- 接入/规格文件：`compute/model-specs/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-4o-realtime.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `spec.apiLifecycle` | `null` | `{"deprecated":true,"shutdownDate":"2027-01-20"}` | differs | [openai-8a484ebecbb1](https://developers.openai.com/api/docs/deprecations.md)；官网API deprecations表；核查日在未来的日期只是预告，不立即停用。 |

剩余缺口：`id`, `spec.contextWindow`, `spec.defaultTemperature`, `spec.maxOutputTokens`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- 精确 API 模型文档路径返回 HTTP Error 404: Not Found；不能因404认定模型从所有接入面退役。
- API官方停服日期 2027-01-20；未来日期不等于已退役，专用capacity合同另核。

### `compute/providers/openai.json#gpt-4o`

- 精确型号：`gpt-4o`
- 接入/规格文件：`compute/providers/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-4o.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"gpt-4o"` | `"gpt-4o"` | matches | [openai-9707b5983eeb](https://developers.openai.com/api/docs/models/gpt-4o.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `contextWindow` | `128000` | `128000` | matches | [openai-9707b5983eeb](https://developers.openai.com/api/docs/models/gpt-4o.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `maxOutputTokens` | `16384` | `16384` | matches | [openai-9707b5983eeb](https://developers.openai.com/api/docs/models/gpt-4o.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `inputPrice` | `2.5` | `2.5` | matches | [openai-9707b5983eeb](https://developers.openai.com/api/docs/models/gpt-4o.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `outputPrice` | `10` | `10.0` | matches | [openai-9707b5983eeb](https://developers.openai.com/api/docs/models/gpt-4o.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `extra.cachedInputPrice` | `null` | `1.25` | differs | [openai-9707b5983eeb](https://developers.openai.com/api/docs/models/gpt-4o.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `inputModalities` | `null` | `["text","image"]` | differs | [openai-9707b5983eeb](https://developers.openai.com/api/docs/models/gpt-4o.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `outputModalities` | `null` | `["text"]` | differs | [openai-9707b5983eeb](https://developers.openai.com/api/docs/models/gpt-4o.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |

剩余缺口：`defaultTemperature`, `defaultTopP`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

### `compute/model-specs/openai.json#gpt-4o`

- 精确型号：`gpt-4o`
- 接入/规格文件：`compute/model-specs/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-4o.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `id` | `"gpt-4o"` | `"gpt-4o"` | matches | [openai-9707b5983eeb](https://developers.openai.com/api/docs/models/gpt-4o.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `spec.contextWindow` | `128000` | `128000` | matches | [openai-9707b5983eeb](https://developers.openai.com/api/docs/models/gpt-4o.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `spec.maxOutputTokens` | `16384` | `16384` | matches | [openai-9707b5983eeb](https://developers.openai.com/api/docs/models/gpt-4o.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `accessReference.inputPrice` | `null` | `2.5` | not-comparable | [openai-9707b5983eeb](https://developers.openai.com/api/docs/models/gpt-4o.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.outputPrice` | `null` | `10.0` | not-comparable | [openai-9707b5983eeb](https://developers.openai.com/api/docs/models/gpt-4o.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.extra.cachedInputPrice` | `null` | `1.25` | not-comparable | [openai-9707b5983eeb](https://developers.openai.com/api/docs/models/gpt-4o.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `spec.inputModalities` | `null` | `["text","image"]` | differs | [openai-9707b5983eeb](https://developers.openai.com/api/docs/models/gpt-4o.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.outputModalities` | `null` | `["text"]` | differs | [openai-9707b5983eeb](https://developers.openai.com/api/docs/models/gpt-4o.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |

剩余缺口：`spec.defaultTemperature`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

### `compute/providers/openai.json#gpt-5-mini`

- 精确型号：`gpt-5-mini`
- 接入/规格文件：`compute/providers/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-5-mini.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"gpt-5-mini"` | `"gpt-5-mini"` | matches | [openai-68f20c8459ff](https://developers.openai.com/api/docs/models/gpt-5-mini.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `contextWindow` | `400000` | `400000` | matches | [openai-68f20c8459ff](https://developers.openai.com/api/docs/models/gpt-5-mini.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `maxInputTokens` | `null` | `272000` | differs | [openai-68f20c8459ff](https://developers.openai.com/api/docs/models/gpt-5-mini.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `maxOutputTokens` | `128000` | `128000` | matches | [openai-68f20c8459ff](https://developers.openai.com/api/docs/models/gpt-5-mini.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `inputPrice` | `0.25` | `0.25` | matches | [openai-68f20c8459ff](https://developers.openai.com/api/docs/models/gpt-5-mini.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `outputPrice` | `2` | `2.0` | matches | [openai-68f20c8459ff](https://developers.openai.com/api/docs/models/gpt-5-mini.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `extra.cachedInputPrice` | `null` | `0.025` | differs | [openai-68f20c8459ff](https://developers.openai.com/api/docs/models/gpt-5-mini.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `inputModalities` | `null` | `["text","image"]` | differs | [openai-68f20c8459ff](https://developers.openai.com/api/docs/models/gpt-5-mini.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `outputModalities` | `null` | `["text"]` | differs | [openai-68f20c8459ff](https://developers.openai.com/api/docs/models/gpt-5-mini.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `supportsReasoning` | `null` | `true` | differs | [openai-68f20c8459ff](https://developers.openai.com/api/docs/models/gpt-5-mini.md)；模型详情显式Reasoning token support。 |

剩余缺口：原 inventory 所列缺字段已有候选证据；不代表账号实测或全规格无缺口。

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。

### `compute/model-specs/openai.json#gpt-5-mini`

- 精确型号：`gpt-5-mini`
- 接入/规格文件：`compute/model-specs/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-5-mini.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `id` | `"gpt-5-mini"` | `"gpt-5-mini"` | matches | [openai-68f20c8459ff](https://developers.openai.com/api/docs/models/gpt-5-mini.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `spec.contextWindow` | `400000` | `400000` | matches | [openai-68f20c8459ff](https://developers.openai.com/api/docs/models/gpt-5-mini.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `spec.maxInputTokens` | `null` | `272000` | differs | [openai-68f20c8459ff](https://developers.openai.com/api/docs/models/gpt-5-mini.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `spec.maxOutputTokens` | `128000` | `128000` | matches | [openai-68f20c8459ff](https://developers.openai.com/api/docs/models/gpt-5-mini.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `accessReference.inputPrice` | `null` | `0.25` | not-comparable | [openai-68f20c8459ff](https://developers.openai.com/api/docs/models/gpt-5-mini.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.outputPrice` | `null` | `2.0` | not-comparable | [openai-68f20c8459ff](https://developers.openai.com/api/docs/models/gpt-5-mini.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.extra.cachedInputPrice` | `null` | `0.025` | not-comparable | [openai-68f20c8459ff](https://developers.openai.com/api/docs/models/gpt-5-mini.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `spec.inputModalities` | `null` | `["text","image"]` | differs | [openai-68f20c8459ff](https://developers.openai.com/api/docs/models/gpt-5-mini.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.outputModalities` | `null` | `["text"]` | differs | [openai-68f20c8459ff](https://developers.openai.com/api/docs/models/gpt-5-mini.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.supportsReasoning` | `true` | `true` | matches | [openai-68f20c8459ff](https://developers.openai.com/api/docs/models/gpt-5-mini.md)；模型详情显式Reasoning token support。 |

剩余缺口：`spec.defaultTemperature`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

### `compute/providers/openai.json#gpt-5-nano`

- 精确型号：`gpt-5-nano`
- 接入/规格文件：`compute/providers/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-5-nano.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"gpt-5-nano"` | `"gpt-5-nano"` | matches | [openai-302d5121f486](https://developers.openai.com/api/docs/models/gpt-5-nano.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `contextWindow` | `400000` | `400000` | matches | [openai-302d5121f486](https://developers.openai.com/api/docs/models/gpt-5-nano.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `maxInputTokens` | `null` | `272000` | differs | [openai-302d5121f486](https://developers.openai.com/api/docs/models/gpt-5-nano.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `maxOutputTokens` | `128000` | `128000` | matches | [openai-302d5121f486](https://developers.openai.com/api/docs/models/gpt-5-nano.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `inputPrice` | `0.05` | `0.05` | matches | [openai-302d5121f486](https://developers.openai.com/api/docs/models/gpt-5-nano.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `outputPrice` | `0.4` | `0.4` | matches | [openai-302d5121f486](https://developers.openai.com/api/docs/models/gpt-5-nano.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `extra.cachedInputPrice` | `null` | `0.005` | differs | [openai-302d5121f486](https://developers.openai.com/api/docs/models/gpt-5-nano.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `inputModalities` | `null` | `["text","image"]` | differs | [openai-302d5121f486](https://developers.openai.com/api/docs/models/gpt-5-nano.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `outputModalities` | `null` | `["text"]` | differs | [openai-302d5121f486](https://developers.openai.com/api/docs/models/gpt-5-nano.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `supportsReasoning` | `null` | `true` | differs | [openai-302d5121f486](https://developers.openai.com/api/docs/models/gpt-5-nano.md)；模型详情显式Reasoning token support。 |

剩余缺口：原 inventory 所列缺字段已有候选证据；不代表账号实测或全规格无缺口。

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。

### `compute/model-specs/openai.json#gpt-5-nano`

- 精确型号：`gpt-5-nano`
- 接入/规格文件：`compute/model-specs/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-5-nano.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `id` | `"gpt-5-nano"` | `"gpt-5-nano"` | matches | [openai-302d5121f486](https://developers.openai.com/api/docs/models/gpt-5-nano.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `spec.contextWindow` | `400000` | `400000` | matches | [openai-302d5121f486](https://developers.openai.com/api/docs/models/gpt-5-nano.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `spec.maxInputTokens` | `null` | `272000` | differs | [openai-302d5121f486](https://developers.openai.com/api/docs/models/gpt-5-nano.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `spec.maxOutputTokens` | `128000` | `128000` | matches | [openai-302d5121f486](https://developers.openai.com/api/docs/models/gpt-5-nano.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `accessReference.inputPrice` | `null` | `0.05` | not-comparable | [openai-302d5121f486](https://developers.openai.com/api/docs/models/gpt-5-nano.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.outputPrice` | `null` | `0.4` | not-comparable | [openai-302d5121f486](https://developers.openai.com/api/docs/models/gpt-5-nano.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.extra.cachedInputPrice` | `null` | `0.005` | not-comparable | [openai-302d5121f486](https://developers.openai.com/api/docs/models/gpt-5-nano.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `spec.inputModalities` | `null` | `["text","image"]` | differs | [openai-302d5121f486](https://developers.openai.com/api/docs/models/gpt-5-nano.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.outputModalities` | `null` | `["text"]` | differs | [openai-302d5121f486](https://developers.openai.com/api/docs/models/gpt-5-nano.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.supportsReasoning` | `null` | `true` | differs | [openai-302d5121f486](https://developers.openai.com/api/docs/models/gpt-5-nano.md)；模型详情显式Reasoning token support。 |

剩余缺口：`spec.defaultTemperature`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

### `compute/providers/openai.json#gpt-5-pro`

- 精确型号：`gpt-5-pro`
- 接入/规格文件：`compute/providers/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-5-pro.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"gpt-5-pro"` | `"gpt-5-pro"` | matches | [openai-64014c0edb05](https://developers.openai.com/api/docs/models/gpt-5-pro.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `contextWindow` | `400000` | `400000` | matches | [openai-64014c0edb05](https://developers.openai.com/api/docs/models/gpt-5-pro.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `maxOutputTokens` | `272000` | `272000` | matches | [openai-64014c0edb05](https://developers.openai.com/api/docs/models/gpt-5-pro.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `inputPrice` | `15` | `15.0` | matches | [openai-64014c0edb05](https://developers.openai.com/api/docs/models/gpt-5-pro.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `outputPrice` | `120` | `120.0` | matches | [openai-64014c0edb05](https://developers.openai.com/api/docs/models/gpt-5-pro.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `inputModalities` | `null` | `["text","image"]` | differs | [openai-64014c0edb05](https://developers.openai.com/api/docs/models/gpt-5-pro.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `outputModalities` | `null` | `["text"]` | differs | [openai-64014c0edb05](https://developers.openai.com/api/docs/models/gpt-5-pro.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `supportsReasoning` | `null` | `true` | differs | [openai-64014c0edb05](https://developers.openai.com/api/docs/models/gpt-5-pro.md)；模型详情显式Reasoning token support。 |
| `extra.responsesOnly` | `null` | `true` | differs | [openai-64014c0edb05](https://developers.openai.com/api/docs/models/gpt-5-pro.md)；精确型号明确Responses API only。 |

剩余缺口：原 inventory 所列缺字段已有候选证据；不代表账号实测或全规格无缺口。

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。

### `compute/model-specs/openai.json#gpt-5-pro`

- 精确型号：`gpt-5-pro`
- 接入/规格文件：`compute/model-specs/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-5-pro.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `id` | `"gpt-5-pro"` | `"gpt-5-pro"` | matches | [openai-64014c0edb05](https://developers.openai.com/api/docs/models/gpt-5-pro.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `spec.contextWindow` | `400000` | `400000` | matches | [openai-64014c0edb05](https://developers.openai.com/api/docs/models/gpt-5-pro.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `spec.maxOutputTokens` | `272000` | `272000` | matches | [openai-64014c0edb05](https://developers.openai.com/api/docs/models/gpt-5-pro.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `accessReference.inputPrice` | `null` | `15.0` | not-comparable | [openai-64014c0edb05](https://developers.openai.com/api/docs/models/gpt-5-pro.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.outputPrice` | `null` | `120.0` | not-comparable | [openai-64014c0edb05](https://developers.openai.com/api/docs/models/gpt-5-pro.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `spec.inputModalities` | `null` | `["text","image"]` | differs | [openai-64014c0edb05](https://developers.openai.com/api/docs/models/gpt-5-pro.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.outputModalities` | `null` | `["text"]` | differs | [openai-64014c0edb05](https://developers.openai.com/api/docs/models/gpt-5-pro.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.supportsReasoning` | `true` | `true` | matches | [openai-64014c0edb05](https://developers.openai.com/api/docs/models/gpt-5-pro.md)；模型详情显式Reasoning token support。 |
| `spec.extra.responsesOnly` | `null` | `true` | differs | [openai-64014c0edb05](https://developers.openai.com/api/docs/models/gpt-5-pro.md)；精确型号明确Responses API only。 |

剩余缺口：`spec.defaultTemperature`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

### `compute/providers/openai.json#gpt-5.1`

- 精确型号：`gpt-5.1`
- 接入/规格文件：`compute/providers/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-5.1.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"gpt-5.1"` | `"gpt-5.1"` | matches | [openai-9da37f00ee08](https://developers.openai.com/api/docs/models/gpt-5.1.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `contextWindow` | `400000` | `400000` | matches | [openai-9da37f00ee08](https://developers.openai.com/api/docs/models/gpt-5.1.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `maxOutputTokens` | `128000` | `128000` | matches | [openai-9da37f00ee08](https://developers.openai.com/api/docs/models/gpt-5.1.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `inputPrice` | `1.25` | `1.25` | matches | [openai-9da37f00ee08](https://developers.openai.com/api/docs/models/gpt-5.1.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `outputPrice` | `10` | `10.0` | matches | [openai-9da37f00ee08](https://developers.openai.com/api/docs/models/gpt-5.1.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `extra.cachedInputPrice` | `null` | `0.125` | differs | [openai-9da37f00ee08](https://developers.openai.com/api/docs/models/gpt-5.1.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `inputModalities` | `null` | `["text","image"]` | differs | [openai-9da37f00ee08](https://developers.openai.com/api/docs/models/gpt-5.1.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `outputModalities` | `null` | `["text"]` | differs | [openai-9da37f00ee08](https://developers.openai.com/api/docs/models/gpt-5.1.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `supportsReasoning` | `null` | `true` | differs | [openai-9da37f00ee08](https://developers.openai.com/api/docs/models/gpt-5.1.md)；模型详情显式Reasoning token support。 |
| `extra.reasoning.supportedEfforts` | `null` | `["none","low","medium","high"]` | differs | [openai-9da37f00ee08](https://developers.openai.com/api/docs/models/gpt-5.1.md)；精确型号页明确effort支持集；API语义，不自动认证订阅账户。 |
| `extra.reasoning.defaultEffort` | `null` | `"none"` | differs | [openai-9da37f00ee08](https://developers.openai.com/api/docs/models/gpt-5.1.md)；该精确API型号显式default；未声明时不推导。 |
| `apiLifecycle` | `null` | `{"deprecated":true,"shutdownDate":"2027-04-01"}` | differs | [openai-8a484ebecbb1](https://developers.openai.com/api/docs/deprecations.md)；官网API deprecations表；核查日在未来的日期只是预告，不立即停用。 |

剩余缺口：原 inventory 所列缺字段已有候选证据；不代表账号实测或全规格无缺口。

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。

- API官方停服日期 2027-04-01；未来日期不等于已退役，专用capacity合同另核。

### `compute/model-specs/openai.json#gpt-5.1`

- 精确型号：`gpt-5.1`
- 接入/规格文件：`compute/model-specs/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-5.1.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `id` | `"gpt-5.1"` | `"gpt-5.1"` | matches | [openai-9da37f00ee08](https://developers.openai.com/api/docs/models/gpt-5.1.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `spec.contextWindow` | `400000` | `400000` | matches | [openai-9da37f00ee08](https://developers.openai.com/api/docs/models/gpt-5.1.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `spec.maxOutputTokens` | `128000` | `128000` | matches | [openai-9da37f00ee08](https://developers.openai.com/api/docs/models/gpt-5.1.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `accessReference.inputPrice` | `null` | `1.25` | not-comparable | [openai-9da37f00ee08](https://developers.openai.com/api/docs/models/gpt-5.1.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.outputPrice` | `null` | `10.0` | not-comparable | [openai-9da37f00ee08](https://developers.openai.com/api/docs/models/gpt-5.1.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.extra.cachedInputPrice` | `null` | `0.125` | not-comparable | [openai-9da37f00ee08](https://developers.openai.com/api/docs/models/gpt-5.1.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `spec.inputModalities` | `null` | `["text","image"]` | differs | [openai-9da37f00ee08](https://developers.openai.com/api/docs/models/gpt-5.1.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.outputModalities` | `null` | `["text"]` | differs | [openai-9da37f00ee08](https://developers.openai.com/api/docs/models/gpt-5.1.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.supportsReasoning` | `true` | `true` | matches | [openai-9da37f00ee08](https://developers.openai.com/api/docs/models/gpt-5.1.md)；模型详情显式Reasoning token support。 |
| `spec.extra.reasoning.supportedEfforts` | `null` | `["none","low","medium","high"]` | differs | [openai-9da37f00ee08](https://developers.openai.com/api/docs/models/gpt-5.1.md)；精确型号页明确effort支持集；API语义，不自动认证订阅账户。 |
| `spec.extra.reasoning.defaultEffort` | `null` | `"none"` | differs | [openai-9da37f00ee08](https://developers.openai.com/api/docs/models/gpt-5.1.md)；该精确API型号显式default；未声明时不推导。 |
| `spec.apiLifecycle` | `null` | `{"deprecated":true,"shutdownDate":"2027-04-01"}` | differs | [openai-8a484ebecbb1](https://developers.openai.com/api/docs/deprecations.md)；官网API deprecations表；核查日在未来的日期只是预告，不立即停用。 |

剩余缺口：`spec.defaultTemperature`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- API官方停服日期 2027-04-01；未来日期不等于已退役，专用capacity合同另核。

### `compute/providers/openai.json#gpt-5.2-pro`

- 精确型号：`gpt-5.2-pro`
- 接入/规格文件：`compute/providers/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-5.2-pro.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"gpt-5.2-pro"` | `"gpt-5.2-pro"` | matches | [openai-cba33d553780](https://developers.openai.com/api/docs/models/gpt-5.2-pro.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `contextWindow` | `400000` | `400000` | matches | [openai-cba33d553780](https://developers.openai.com/api/docs/models/gpt-5.2-pro.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `maxOutputTokens` | `128000` | `128000` | matches | [openai-cba33d553780](https://developers.openai.com/api/docs/models/gpt-5.2-pro.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `inputPrice` | `21` | `21.0` | matches | [openai-cba33d553780](https://developers.openai.com/api/docs/models/gpt-5.2-pro.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `outputPrice` | `168` | `168.0` | matches | [openai-cba33d553780](https://developers.openai.com/api/docs/models/gpt-5.2-pro.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `inputModalities` | `null` | `["text","image"]` | differs | [openai-cba33d553780](https://developers.openai.com/api/docs/models/gpt-5.2-pro.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `outputModalities` | `null` | `["text"]` | differs | [openai-cba33d553780](https://developers.openai.com/api/docs/models/gpt-5.2-pro.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `supportsReasoning` | `null` | `true` | differs | [openai-cba33d553780](https://developers.openai.com/api/docs/models/gpt-5.2-pro.md)；模型详情显式Reasoning token support。 |
| `extra.responsesOnly` | `null` | `true` | differs | [openai-cba33d553780](https://developers.openai.com/api/docs/models/gpt-5.2-pro.md)；精确型号明确Responses API only。 |

剩余缺口：原 inventory 所列缺字段已有候选证据；不代表账号实测或全规格无缺口。

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。

### `compute/model-specs/openai.json#gpt-5.2-pro`

- 精确型号：`gpt-5.2-pro`
- 接入/规格文件：`compute/model-specs/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-5.2-pro.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `id` | `"gpt-5.2-pro"` | `"gpt-5.2-pro"` | matches | [openai-cba33d553780](https://developers.openai.com/api/docs/models/gpt-5.2-pro.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `spec.contextWindow` | `400000` | `400000` | matches | [openai-cba33d553780](https://developers.openai.com/api/docs/models/gpt-5.2-pro.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `spec.maxOutputTokens` | `128000` | `128000` | matches | [openai-cba33d553780](https://developers.openai.com/api/docs/models/gpt-5.2-pro.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `accessReference.inputPrice` | `null` | `21.0` | not-comparable | [openai-cba33d553780](https://developers.openai.com/api/docs/models/gpt-5.2-pro.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.outputPrice` | `null` | `168.0` | not-comparable | [openai-cba33d553780](https://developers.openai.com/api/docs/models/gpt-5.2-pro.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `spec.inputModalities` | `null` | `["text","image"]` | differs | [openai-cba33d553780](https://developers.openai.com/api/docs/models/gpt-5.2-pro.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.outputModalities` | `null` | `["text"]` | differs | [openai-cba33d553780](https://developers.openai.com/api/docs/models/gpt-5.2-pro.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.supportsReasoning` | `true` | `true` | matches | [openai-cba33d553780](https://developers.openai.com/api/docs/models/gpt-5.2-pro.md)；模型详情显式Reasoning token support。 |
| `spec.extra.responsesOnly` | `null` | `true` | differs | [openai-cba33d553780](https://developers.openai.com/api/docs/models/gpt-5.2-pro.md)；精确型号明确Responses API only。 |

剩余缺口：`spec.defaultTemperature`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

### `compute/providers/openai.json#gpt-5.2`

- 精确型号：`gpt-5.2`
- 接入/规格文件：`compute/providers/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-5.2.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"gpt-5.2"` | `"gpt-5.2"` | matches | [openai-a5846b5cf835](https://developers.openai.com/api/docs/models/gpt-5.2.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `contextWindow` | `400000` | `400000` | matches | [openai-a5846b5cf835](https://developers.openai.com/api/docs/models/gpt-5.2.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `maxOutputTokens` | `128000` | `128000` | matches | [openai-a5846b5cf835](https://developers.openai.com/api/docs/models/gpt-5.2.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `inputPrice` | `1.75` | `1.75` | matches | [openai-a5846b5cf835](https://developers.openai.com/api/docs/models/gpt-5.2.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `outputPrice` | `14` | `14.0` | matches | [openai-a5846b5cf835](https://developers.openai.com/api/docs/models/gpt-5.2.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `extra.cachedInputPrice` | `null` | `0.175` | differs | [openai-a5846b5cf835](https://developers.openai.com/api/docs/models/gpt-5.2.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `inputModalities` | `null` | `["text","image"]` | differs | [openai-a5846b5cf835](https://developers.openai.com/api/docs/models/gpt-5.2.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `outputModalities` | `null` | `["text"]` | differs | [openai-a5846b5cf835](https://developers.openai.com/api/docs/models/gpt-5.2.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `supportsReasoning` | `null` | `true` | differs | [openai-a5846b5cf835](https://developers.openai.com/api/docs/models/gpt-5.2.md)；模型详情显式Reasoning token support。 |
| `extra.reasoning.supportedEfforts` | `null` | `["none","low","medium","high","xhigh"]` | differs | [openai-a5846b5cf835](https://developers.openai.com/api/docs/models/gpt-5.2.md)；精确型号页明确effort支持集；API语义，不自动认证订阅账户。 |
| `extra.reasoning.defaultEffort` | `null` | `"none"` | differs | [openai-a5846b5cf835](https://developers.openai.com/api/docs/models/gpt-5.2.md)；该精确API型号显式default；未声明时不推导。 |

剩余缺口：原 inventory 所列缺字段已有候选证据；不代表账号实测或全规格无缺口。

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。

### `compute/model-specs/openai.json#gpt-5.2`

- 精确型号：`gpt-5.2`
- 接入/规格文件：`compute/model-specs/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-5.2.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `id` | `"gpt-5.2"` | `"gpt-5.2"` | matches | [openai-a5846b5cf835](https://developers.openai.com/api/docs/models/gpt-5.2.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `spec.contextWindow` | `400000` | `400000` | matches | [openai-a5846b5cf835](https://developers.openai.com/api/docs/models/gpt-5.2.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `spec.maxOutputTokens` | `128000` | `128000` | matches | [openai-a5846b5cf835](https://developers.openai.com/api/docs/models/gpt-5.2.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `accessReference.inputPrice` | `null` | `1.75` | not-comparable | [openai-a5846b5cf835](https://developers.openai.com/api/docs/models/gpt-5.2.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.outputPrice` | `null` | `14.0` | not-comparable | [openai-a5846b5cf835](https://developers.openai.com/api/docs/models/gpt-5.2.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.extra.cachedInputPrice` | `null` | `0.175` | not-comparable | [openai-a5846b5cf835](https://developers.openai.com/api/docs/models/gpt-5.2.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `spec.inputModalities` | `null` | `["text","image"]` | differs | [openai-a5846b5cf835](https://developers.openai.com/api/docs/models/gpt-5.2.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.outputModalities` | `null` | `["text"]` | differs | [openai-a5846b5cf835](https://developers.openai.com/api/docs/models/gpt-5.2.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.supportsReasoning` | `true` | `true` | matches | [openai-a5846b5cf835](https://developers.openai.com/api/docs/models/gpt-5.2.md)；模型详情显式Reasoning token support。 |
| `spec.extra.reasoning.supportedEfforts` | `null` | `["none","low","medium","high","xhigh"]` | differs | [openai-a5846b5cf835](https://developers.openai.com/api/docs/models/gpt-5.2.md)；精确型号页明确effort支持集；API语义，不自动认证订阅账户。 |
| `spec.extra.reasoning.defaultEffort` | `null` | `"none"` | differs | [openai-a5846b5cf835](https://developers.openai.com/api/docs/models/gpt-5.2.md)；该精确API型号显式default；未声明时不推导。 |

剩余缺口：`spec.defaultTemperature`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

### `compute/providers/openai-codex.json#gpt-5.3-codex-spark`

- 精确型号：`gpt-5.3-codex-spark`
- 接入/规格文件：`compute/providers/openai-codex.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-5.3-codex-spark.md`
- 结论：`official-conflict`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `accessAvailability` | `"configured"` | `{"retirementDate":"2026-09-14","scope":"Codex with ChatGPT sign-in","apiUnaffected":true}` | differs | [openai-1aa248fc8b83](https://learn.chatgpt.com/docs/models)；核查日GPT5.5未来退役；Spark、GPT5.4/mini已过日期。该证据只适用订阅接入。 |

剩余缺口：`contextWindow`, `modelName`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- 精确 API 模型文档路径返回 HTTP Error 404: Not Found；不能因404认定模型从所有接入面退役。
- 官方 Codex/ChatGPT 订阅说明：2026-09-14 退役（GPT5.5截至核查日尚未来临）；API不受该退役影响。
- 订阅/套餐实际允许型号、窗口、effort、工具与账号限额需独立官方接入合同；本表API参数只作不可比对照，不提升订阅字段状态。

### `compute/model-specs/openai.json#gpt-5.3-codex-spark`

- 精确型号：`gpt-5.3-codex-spark`
- 接入/规格文件：`compute/model-specs/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-5.3-codex-spark.md`
- 结论：`still-unresolved`

未取得可用于该记录字段的同范围官方证据；失败链接见上方，不把404、页面壳或接近型号当成认证。

剩余缺口：`id`, `spec.contextWindow`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- 精确 API 模型文档路径返回 HTTP Error 404: Not Found；不能因404认定模型从所有接入面退役。
- 官方 Codex/ChatGPT 订阅说明：2026-09-14 退役（GPT5.5截至核查日尚未来临）；API不受该退役影响。

### `compute/providers/openai-codex.json#gpt-5.4-mini`

- 精确型号：`gpt-5.4-mini`
- 接入/规格文件：`compute/providers/openai-codex.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-5.4-mini.md`
- 结论：`official-conflict`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"gpt-5.4-mini"` | `"gpt-5.4-mini"` | not-comparable | [openai-d6e6144d7c09](https://developers.openai.com/api/docs/models/gpt-5.4-mini.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 API身份本身不证明订阅账号可用性。 |
| `contextWindow` | `272000` | `400000` | not-comparable | [openai-d6e6144d7c09](https://developers.openai.com/api/docs/models/gpt-5.4-mini.md)；官网明文整数，输入、输出与总窗口分别记录。 原厂API证据不可直接证明本订阅access有效合同。 |
| `maxInputTokens` | `null` | `272000` | not-comparable | [openai-d6e6144d7c09](https://developers.openai.com/api/docs/models/gpt-5.4-mini.md)；官网明文整数，输入、输出与总窗口分别记录。 原厂API证据不可直接证明本订阅access有效合同。 |
| `maxOutputTokens` | `128000` | `128000` | not-comparable | [openai-d6e6144d7c09](https://developers.openai.com/api/docs/models/gpt-5.4-mini.md)；官网明文整数，输入、输出与总窗口分别记录。 原厂API证据不可直接证明本订阅access有效合同。 |
| `inputPrice` | `null` | `0.75` | not-comparable | [openai-d6e6144d7c09](https://developers.openai.com/api/docs/models/gpt-5.4-mini.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 原厂API证据不可直接证明本订阅access有效合同。 |
| `outputPrice` | `null` | `4.5` | not-comparable | [openai-d6e6144d7c09](https://developers.openai.com/api/docs/models/gpt-5.4-mini.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 原厂API证据不可直接证明本订阅access有效合同。 |
| `extra.cachedInputPrice` | `null` | `0.075` | not-comparable | [openai-d6e6144d7c09](https://developers.openai.com/api/docs/models/gpt-5.4-mini.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 原厂API证据不可直接证明本订阅access有效合同。 |
| `inputModalities` | `null` | `["text","image"]` | not-comparable | [openai-d6e6144d7c09](https://developers.openai.com/api/docs/models/gpt-5.4-mini.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 原厂API证据不可直接证明本订阅access有效合同。 |
| `outputModalities` | `null` | `["text"]` | not-comparable | [openai-d6e6144d7c09](https://developers.openai.com/api/docs/models/gpt-5.4-mini.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 原厂API证据不可直接证明本订阅access有效合同。 |
| `supportsReasoning` | `null` | `true` | not-comparable | [openai-d6e6144d7c09](https://developers.openai.com/api/docs/models/gpt-5.4-mini.md)；模型详情显式Reasoning token support。 原厂API证据不可直接证明本订阅access有效合同。 |
| `extra.reasoning.supportedEfforts` | `null` | `["none","low","medium","high","xhigh"]` | not-comparable | [openai-d6e6144d7c09](https://developers.openai.com/api/docs/models/gpt-5.4-mini.md)；精确型号页明确effort支持集；API语义，不自动认证订阅账户。 原厂API证据不可直接证明本订阅access有效合同。 |
| `extra.reasoning.defaultEffort` | `null` | `"none"` | not-comparable | [openai-d6e6144d7c09](https://developers.openai.com/api/docs/models/gpt-5.4-mini.md)；该精确API型号显式default；未声明时不推导。 原厂API证据不可直接证明本订阅access有效合同。 |
| `accessAvailability` | `"configured"` | `{"retirementDate":"2026-08-31","scope":"Codex with ChatGPT sign-in","apiUnaffected":true}` | differs | [openai-1aa248fc8b83](https://learn.chatgpt.com/docs/models)；核查日GPT5.5未来退役；Spark、GPT5.4/mini已过日期。该证据只适用订阅接入。 |

剩余缺口：`contextWindow`, `maxOutputTokens`, `modelName`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- 官方 Codex/ChatGPT 订阅说明：2026-08-31 退役（GPT5.5截至核查日尚未来临）；API不受该退役影响。
- 订阅/套餐实际允许型号、窗口、effort、工具与账号限额需独立官方接入合同；本表API参数只作不可比对照，不提升订阅字段状态。

### `compute/providers/openai.json#gpt-5.4-mini`

- 精确型号：`gpt-5.4-mini`
- 接入/规格文件：`compute/providers/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-5.4-mini.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"gpt-5.4-mini"` | `"gpt-5.4-mini"` | matches | [openai-d6e6144d7c09](https://developers.openai.com/api/docs/models/gpt-5.4-mini.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `contextWindow` | `400000` | `400000` | matches | [openai-d6e6144d7c09](https://developers.openai.com/api/docs/models/gpt-5.4-mini.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `maxInputTokens` | `null` | `272000` | differs | [openai-d6e6144d7c09](https://developers.openai.com/api/docs/models/gpt-5.4-mini.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `maxOutputTokens` | `128000` | `128000` | matches | [openai-d6e6144d7c09](https://developers.openai.com/api/docs/models/gpt-5.4-mini.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `inputPrice` | `0.75` | `0.75` | matches | [openai-d6e6144d7c09](https://developers.openai.com/api/docs/models/gpt-5.4-mini.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `outputPrice` | `4.5` | `4.5` | matches | [openai-d6e6144d7c09](https://developers.openai.com/api/docs/models/gpt-5.4-mini.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `extra.cachedInputPrice` | `0.075` | `0.075` | matches | [openai-d6e6144d7c09](https://developers.openai.com/api/docs/models/gpt-5.4-mini.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `inputModalities` | `null` | `["text","image"]` | differs | [openai-d6e6144d7c09](https://developers.openai.com/api/docs/models/gpt-5.4-mini.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `outputModalities` | `null` | `["text"]` | differs | [openai-d6e6144d7c09](https://developers.openai.com/api/docs/models/gpt-5.4-mini.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `supportsReasoning` | `null` | `true` | differs | [openai-d6e6144d7c09](https://developers.openai.com/api/docs/models/gpt-5.4-mini.md)；模型详情显式Reasoning token support。 |
| `extra.reasoning.supportedEfforts` | `["none","low","medium","high","xhigh"]` | `["none","low","medium","high","xhigh"]` | matches | [openai-d6e6144d7c09](https://developers.openai.com/api/docs/models/gpt-5.4-mini.md)；精确型号页明确effort支持集；API语义，不自动认证订阅账户。 |
| `extra.reasoning.defaultEffort` | `null` | `"none"` | differs | [openai-d6e6144d7c09](https://developers.openai.com/api/docs/models/gpt-5.4-mini.md)；该精确API型号显式default；未声明时不推导。 |

剩余缺口：`extra.serverSideWebSearch.searchRequestPriceUsd`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- 官方 Codex/ChatGPT 订阅说明：2026-08-31 退役（GPT5.5截至核查日尚未来临）；API不受该退役影响。

### `compute/model-specs/openai.json#gpt-5.4-mini`

- 精确型号：`gpt-5.4-mini`
- 接入/规格文件：`compute/model-specs/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-5.4-mini.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `id` | `"gpt-5.4-mini"` | `"gpt-5.4-mini"` | matches | [openai-d6e6144d7c09](https://developers.openai.com/api/docs/models/gpt-5.4-mini.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `spec.contextWindow` | `400000` | `400000` | matches | [openai-d6e6144d7c09](https://developers.openai.com/api/docs/models/gpt-5.4-mini.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `spec.maxInputTokens` | `null` | `272000` | differs | [openai-d6e6144d7c09](https://developers.openai.com/api/docs/models/gpt-5.4-mini.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `spec.maxOutputTokens` | `128000` | `128000` | matches | [openai-d6e6144d7c09](https://developers.openai.com/api/docs/models/gpt-5.4-mini.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `accessReference.inputPrice` | `null` | `0.75` | not-comparable | [openai-d6e6144d7c09](https://developers.openai.com/api/docs/models/gpt-5.4-mini.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.outputPrice` | `null` | `4.5` | not-comparable | [openai-d6e6144d7c09](https://developers.openai.com/api/docs/models/gpt-5.4-mini.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.extra.cachedInputPrice` | `null` | `0.075` | not-comparable | [openai-d6e6144d7c09](https://developers.openai.com/api/docs/models/gpt-5.4-mini.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `spec.inputModalities` | `null` | `["text","image"]` | differs | [openai-d6e6144d7c09](https://developers.openai.com/api/docs/models/gpt-5.4-mini.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.outputModalities` | `null` | `["text"]` | differs | [openai-d6e6144d7c09](https://developers.openai.com/api/docs/models/gpt-5.4-mini.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.supportsReasoning` | `true` | `true` | matches | [openai-d6e6144d7c09](https://developers.openai.com/api/docs/models/gpt-5.4-mini.md)；模型详情显式Reasoning token support。 |
| `spec.extra.reasoning.supportedEfforts` | `null` | `["none","low","medium","high","xhigh"]` | differs | [openai-d6e6144d7c09](https://developers.openai.com/api/docs/models/gpt-5.4-mini.md)；精确型号页明确effort支持集；API语义，不自动认证订阅账户。 |
| `spec.extra.reasoning.defaultEffort` | `null` | `"none"` | differs | [openai-d6e6144d7c09](https://developers.openai.com/api/docs/models/gpt-5.4-mini.md)；该精确API型号显式default；未声明时不推导。 |

剩余缺口：原 inventory 所列缺字段已有候选证据；不代表账号实测或全规格无缺口。

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。

- 官方 Codex/ChatGPT 订阅说明：2026-08-31 退役（GPT5.5截至核查日尚未来临）；API不受该退役影响。

### `compute/providers/openai.json#gpt-5.4-nano`

- 精确型号：`gpt-5.4-nano`
- 接入/规格文件：`compute/providers/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-5.4-nano.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"gpt-5.4-nano"` | `"gpt-5.4-nano"` | matches | [openai-b1422b17000e](https://developers.openai.com/api/docs/models/gpt-5.4-nano.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `contextWindow` | `400000` | `400000` | matches | [openai-b1422b17000e](https://developers.openai.com/api/docs/models/gpt-5.4-nano.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `maxInputTokens` | `null` | `272000` | differs | [openai-b1422b17000e](https://developers.openai.com/api/docs/models/gpt-5.4-nano.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `maxOutputTokens` | `128000` | `128000` | matches | [openai-b1422b17000e](https://developers.openai.com/api/docs/models/gpt-5.4-nano.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `inputPrice` | `0.2` | `0.2` | matches | [openai-b1422b17000e](https://developers.openai.com/api/docs/models/gpt-5.4-nano.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `outputPrice` | `1.25` | `1.25` | matches | [openai-b1422b17000e](https://developers.openai.com/api/docs/models/gpt-5.4-nano.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `extra.cachedInputPrice` | `0.02` | `0.02` | matches | [openai-b1422b17000e](https://developers.openai.com/api/docs/models/gpt-5.4-nano.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `inputModalities` | `null` | `["text","image"]` | differs | [openai-b1422b17000e](https://developers.openai.com/api/docs/models/gpt-5.4-nano.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `outputModalities` | `null` | `["text"]` | differs | [openai-b1422b17000e](https://developers.openai.com/api/docs/models/gpt-5.4-nano.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `supportsReasoning` | `null` | `true` | differs | [openai-b1422b17000e](https://developers.openai.com/api/docs/models/gpt-5.4-nano.md)；模型详情显式Reasoning token support。 |
| `extra.reasoning.supportedEfforts` | `["none","low","medium","high","xhigh"]` | `["none","low","medium","high","xhigh"]` | matches | [openai-b1422b17000e](https://developers.openai.com/api/docs/models/gpt-5.4-nano.md)；精确型号页明确effort支持集；API语义，不自动认证订阅账户。 |
| `extra.reasoning.defaultEffort` | `null` | `"none"` | differs | [openai-b1422b17000e](https://developers.openai.com/api/docs/models/gpt-5.4-nano.md)；该精确API型号显式default；未声明时不推导。 |
| `apiLifecycle` | `null` | `{"deprecated":true,"shutdownDate":"2027-04-01"}` | differs | [openai-8a484ebecbb1](https://developers.openai.com/api/docs/deprecations.md)；官网API deprecations表；核查日在未来的日期只是预告，不立即停用。 |

剩余缺口：`extra.serverSideWebSearch.searchRequestPriceUsd`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- API官方停服日期 2027-04-01；未来日期不等于已退役，专用capacity合同另核。

### `compute/model-specs/openai.json#gpt-5.4-nano`

- 精确型号：`gpt-5.4-nano`
- 接入/规格文件：`compute/model-specs/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-5.4-nano.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `id` | `"gpt-5.4-nano"` | `"gpt-5.4-nano"` | matches | [openai-b1422b17000e](https://developers.openai.com/api/docs/models/gpt-5.4-nano.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `spec.contextWindow` | `400000` | `400000` | matches | [openai-b1422b17000e](https://developers.openai.com/api/docs/models/gpt-5.4-nano.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `spec.maxInputTokens` | `null` | `272000` | differs | [openai-b1422b17000e](https://developers.openai.com/api/docs/models/gpt-5.4-nano.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `spec.maxOutputTokens` | `128000` | `128000` | matches | [openai-b1422b17000e](https://developers.openai.com/api/docs/models/gpt-5.4-nano.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `accessReference.inputPrice` | `null` | `0.2` | not-comparable | [openai-b1422b17000e](https://developers.openai.com/api/docs/models/gpt-5.4-nano.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.outputPrice` | `null` | `1.25` | not-comparable | [openai-b1422b17000e](https://developers.openai.com/api/docs/models/gpt-5.4-nano.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.extra.cachedInputPrice` | `null` | `0.02` | not-comparable | [openai-b1422b17000e](https://developers.openai.com/api/docs/models/gpt-5.4-nano.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `spec.inputModalities` | `null` | `["text","image"]` | differs | [openai-b1422b17000e](https://developers.openai.com/api/docs/models/gpt-5.4-nano.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.outputModalities` | `null` | `["text"]` | differs | [openai-b1422b17000e](https://developers.openai.com/api/docs/models/gpt-5.4-nano.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.supportsReasoning` | `null` | `true` | differs | [openai-b1422b17000e](https://developers.openai.com/api/docs/models/gpt-5.4-nano.md)；模型详情显式Reasoning token support。 |
| `spec.extra.reasoning.supportedEfforts` | `null` | `["none","low","medium","high","xhigh"]` | differs | [openai-b1422b17000e](https://developers.openai.com/api/docs/models/gpt-5.4-nano.md)；精确型号页明确effort支持集；API语义，不自动认证订阅账户。 |
| `spec.extra.reasoning.defaultEffort` | `null` | `"none"` | differs | [openai-b1422b17000e](https://developers.openai.com/api/docs/models/gpt-5.4-nano.md)；该精确API型号显式default；未声明时不推导。 |
| `spec.apiLifecycle` | `null` | `{"deprecated":true,"shutdownDate":"2027-04-01"}` | differs | [openai-8a484ebecbb1](https://developers.openai.com/api/docs/deprecations.md)；官网API deprecations表；核查日在未来的日期只是预告，不立即停用。 |

剩余缺口：原 inventory 所列缺字段已有候选证据；不代表账号实测或全规格无缺口。

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。

- API官方停服日期 2027-04-01；未来日期不等于已退役，专用capacity合同另核。

### `compute/providers/openai.json#gpt-5.4-pro`

- 精确型号：`gpt-5.4-pro`
- 接入/规格文件：`compute/providers/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-5.4-pro.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"gpt-5.4-pro"` | `"gpt-5.4-pro"` | matches | [openai-db69792fac93](https://developers.openai.com/api/docs/models/gpt-5.4-pro.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `contextWindow` | `1050000` | `1050000` | matches | [openai-db69792fac93](https://developers.openai.com/api/docs/models/gpt-5.4-pro.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `maxOutputTokens` | `128000` | `128000` | matches | [openai-db69792fac93](https://developers.openai.com/api/docs/models/gpt-5.4-pro.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `inputPrice` | `30` | `30.0` | matches | [openai-db69792fac93](https://developers.openai.com/api/docs/models/gpt-5.4-pro.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `outputPrice` | `180` | `180.0` | matches | [openai-db69792fac93](https://developers.openai.com/api/docs/models/gpt-5.4-pro.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `inputModalities` | `null` | `["text","image"]` | differs | [openai-db69792fac93](https://developers.openai.com/api/docs/models/gpt-5.4-pro.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `outputModalities` | `null` | `["text"]` | differs | [openai-db69792fac93](https://developers.openai.com/api/docs/models/gpt-5.4-pro.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `supportsReasoning` | `null` | `true` | differs | [openai-db69792fac93](https://developers.openai.com/api/docs/models/gpt-5.4-pro.md)；模型详情显式Reasoning token support。 |
| `extra.reasoning.supportedEfforts` | `["medium","high","xhigh"]` | `["medium","high","xhigh"]` | matches | [openai-db69792fac93](https://developers.openai.com/api/docs/models/gpt-5.4-pro.md)；精确型号页明确effort支持集；API语义，不自动认证订阅账户。 |
| `extra.reasoning.defaultEffort` | `"medium"` | `"medium"` | matches | [openai-db69792fac93](https://developers.openai.com/api/docs/models/gpt-5.4-pro.md)；该精确API型号显式default；未声明时不推导。 |
| `extra.responsesOnly` | `true` | `true` | matches | [openai-db69792fac93](https://developers.openai.com/api/docs/models/gpt-5.4-pro.md)；精确型号明确Responses API only。 |

剩余缺口：`extra.serverSideWebSearch.searchRequestPriceUsd`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

### `compute/model-specs/openai.json#gpt-5.4-pro`

- 精确型号：`gpt-5.4-pro`
- 接入/规格文件：`compute/model-specs/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-5.4-pro.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `id` | `"gpt-5.4-pro"` | `"gpt-5.4-pro"` | matches | [openai-db69792fac93](https://developers.openai.com/api/docs/models/gpt-5.4-pro.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `spec.contextWindow` | `1050000` | `1050000` | matches | [openai-db69792fac93](https://developers.openai.com/api/docs/models/gpt-5.4-pro.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `spec.maxOutputTokens` | `128000` | `128000` | matches | [openai-db69792fac93](https://developers.openai.com/api/docs/models/gpt-5.4-pro.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `accessReference.inputPrice` | `null` | `30.0` | not-comparable | [openai-db69792fac93](https://developers.openai.com/api/docs/models/gpt-5.4-pro.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.outputPrice` | `null` | `180.0` | not-comparable | [openai-db69792fac93](https://developers.openai.com/api/docs/models/gpt-5.4-pro.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `spec.inputModalities` | `null` | `["text","image"]` | differs | [openai-db69792fac93](https://developers.openai.com/api/docs/models/gpt-5.4-pro.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.outputModalities` | `null` | `["text"]` | differs | [openai-db69792fac93](https://developers.openai.com/api/docs/models/gpt-5.4-pro.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.supportsReasoning` | `null` | `true` | differs | [openai-db69792fac93](https://developers.openai.com/api/docs/models/gpt-5.4-pro.md)；模型详情显式Reasoning token support。 |
| `spec.extra.reasoning.supportedEfforts` | `null` | `["medium","high","xhigh"]` | differs | [openai-db69792fac93](https://developers.openai.com/api/docs/models/gpt-5.4-pro.md)；精确型号页明确effort支持集；API语义，不自动认证订阅账户。 |
| `spec.extra.reasoning.defaultEffort` | `null` | `"medium"` | differs | [openai-db69792fac93](https://developers.openai.com/api/docs/models/gpt-5.4-pro.md)；该精确API型号显式default；未声明时不推导。 |
| `spec.extra.responsesOnly` | `null` | `true` | differs | [openai-db69792fac93](https://developers.openai.com/api/docs/models/gpt-5.4-pro.md)；精确型号明确Responses API only。 |

剩余缺口：原 inventory 所列缺字段已有候选证据；不代表账号实测或全规格无缺口。

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。

### `compute/providers/openai-codex.json#gpt-5.4`

- 精确型号：`gpt-5.4`
- 接入/规格文件：`compute/providers/openai-codex.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-5.4.md`
- 结论：`official-conflict`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"gpt-5.4"` | `"gpt-5.4"` | not-comparable | [openai-c0ccd4dee9b7](https://developers.openai.com/api/docs/models/gpt-5.4.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 API身份本身不证明订阅账号可用性。 |
| `contextWindow` | `272000` | `1050000` | not-comparable | [openai-c0ccd4dee9b7](https://developers.openai.com/api/docs/models/gpt-5.4.md)；官网明文整数，输入、输出与总窗口分别记录。 原厂API证据不可直接证明本订阅access有效合同。 |
| `maxOutputTokens` | `128000` | `128000` | not-comparable | [openai-c0ccd4dee9b7](https://developers.openai.com/api/docs/models/gpt-5.4.md)；官网明文整数，输入、输出与总窗口分别记录。 原厂API证据不可直接证明本订阅access有效合同。 |
| `inputPrice` | `null` | `2.5` | not-comparable | [openai-c0ccd4dee9b7](https://developers.openai.com/api/docs/models/gpt-5.4.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 原厂API证据不可直接证明本订阅access有效合同。 |
| `outputPrice` | `null` | `15.0` | not-comparable | [openai-c0ccd4dee9b7](https://developers.openai.com/api/docs/models/gpt-5.4.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 原厂API证据不可直接证明本订阅access有效合同。 |
| `extra.cachedInputPrice` | `null` | `0.25` | not-comparable | [openai-c0ccd4dee9b7](https://developers.openai.com/api/docs/models/gpt-5.4.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 原厂API证据不可直接证明本订阅access有效合同。 |
| `inputModalities` | `null` | `["text","image"]` | not-comparable | [openai-c0ccd4dee9b7](https://developers.openai.com/api/docs/models/gpt-5.4.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 原厂API证据不可直接证明本订阅access有效合同。 |
| `outputModalities` | `null` | `["text"]` | not-comparable | [openai-c0ccd4dee9b7](https://developers.openai.com/api/docs/models/gpt-5.4.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 原厂API证据不可直接证明本订阅access有效合同。 |
| `supportsReasoning` | `null` | `true` | not-comparable | [openai-c0ccd4dee9b7](https://developers.openai.com/api/docs/models/gpt-5.4.md)；模型详情显式Reasoning token support。 原厂API证据不可直接证明本订阅access有效合同。 |
| `extra.reasoning.supportedEfforts` | `null` | `["none","low","medium","high","xhigh"]` | not-comparable | [openai-c0ccd4dee9b7](https://developers.openai.com/api/docs/models/gpt-5.4.md)；精确型号页明确effort支持集；API语义，不自动认证订阅账户。 原厂API证据不可直接证明本订阅access有效合同。 |
| `extra.reasoning.defaultEffort` | `null` | `"none"` | not-comparable | [openai-c0ccd4dee9b7](https://developers.openai.com/api/docs/models/gpt-5.4.md)；该精确API型号显式default；未声明时不推导。 原厂API证据不可直接证明本订阅access有效合同。 |
| `accessAvailability` | `"configured"` | `{"retirementDate":"2026-08-31","scope":"Codex with ChatGPT sign-in","apiUnaffected":true}` | differs | [openai-1aa248fc8b83](https://learn.chatgpt.com/docs/models)；核查日GPT5.5未来退役；Spark、GPT5.4/mini已过日期。该证据只适用订阅接入。 |

剩余缺口：`contextWindow`, `maxOutputTokens`, `modelName`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- 官方 Codex/ChatGPT 订阅说明：2026-08-31 退役（GPT5.5截至核查日尚未来临）；API不受该退役影响。
- 订阅/套餐实际允许型号、窗口、effort、工具与账号限额需独立官方接入合同；本表API参数只作不可比对照，不提升订阅字段状态。

### `compute/providers/openai.json#gpt-5.4`

- 精确型号：`gpt-5.4`
- 接入/规格文件：`compute/providers/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-5.4.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"gpt-5.4"` | `"gpt-5.4"` | matches | [openai-c0ccd4dee9b7](https://developers.openai.com/api/docs/models/gpt-5.4.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `contextWindow` | `1050000` | `1050000` | matches | [openai-c0ccd4dee9b7](https://developers.openai.com/api/docs/models/gpt-5.4.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `maxOutputTokens` | `128000` | `128000` | matches | [openai-c0ccd4dee9b7](https://developers.openai.com/api/docs/models/gpt-5.4.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `inputPrice` | `2.5` | `2.5` | matches | [openai-c0ccd4dee9b7](https://developers.openai.com/api/docs/models/gpt-5.4.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `outputPrice` | `15` | `15.0` | matches | [openai-c0ccd4dee9b7](https://developers.openai.com/api/docs/models/gpt-5.4.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `extra.cachedInputPrice` | `0.25` | `0.25` | matches | [openai-c0ccd4dee9b7](https://developers.openai.com/api/docs/models/gpt-5.4.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `inputModalities` | `null` | `["text","image"]` | differs | [openai-c0ccd4dee9b7](https://developers.openai.com/api/docs/models/gpt-5.4.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `outputModalities` | `null` | `["text"]` | differs | [openai-c0ccd4dee9b7](https://developers.openai.com/api/docs/models/gpt-5.4.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `supportsReasoning` | `null` | `true` | differs | [openai-c0ccd4dee9b7](https://developers.openai.com/api/docs/models/gpt-5.4.md)；模型详情显式Reasoning token support。 |
| `extra.reasoning.supportedEfforts` | `["none","low","medium","high","xhigh"]` | `["none","low","medium","high","xhigh"]` | matches | [openai-c0ccd4dee9b7](https://developers.openai.com/api/docs/models/gpt-5.4.md)；精确型号页明确effort支持集；API语义，不自动认证订阅账户。 |
| `extra.reasoning.defaultEffort` | `null` | `"none"` | differs | [openai-c0ccd4dee9b7](https://developers.openai.com/api/docs/models/gpt-5.4.md)；该精确API型号显式default；未声明时不推导。 |

剩余缺口：`extra.serverSideWebSearch.searchRequestPriceUsd`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- 官方 Codex/ChatGPT 订阅说明：2026-08-31 退役（GPT5.5截至核查日尚未来临）；API不受该退役影响。

### `compute/model-specs/openai.json#gpt-5.4`

- 精确型号：`gpt-5.4`
- 接入/规格文件：`compute/model-specs/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-5.4.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `id` | `"gpt-5.4"` | `"gpt-5.4"` | matches | [openai-c0ccd4dee9b7](https://developers.openai.com/api/docs/models/gpt-5.4.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `spec.contextWindow` | `1050000` | `1050000` | matches | [openai-c0ccd4dee9b7](https://developers.openai.com/api/docs/models/gpt-5.4.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `spec.maxOutputTokens` | `128000` | `128000` | matches | [openai-c0ccd4dee9b7](https://developers.openai.com/api/docs/models/gpt-5.4.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `accessReference.inputPrice` | `null` | `2.5` | not-comparable | [openai-c0ccd4dee9b7](https://developers.openai.com/api/docs/models/gpt-5.4.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.outputPrice` | `null` | `15.0` | not-comparable | [openai-c0ccd4dee9b7](https://developers.openai.com/api/docs/models/gpt-5.4.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.extra.cachedInputPrice` | `null` | `0.25` | not-comparable | [openai-c0ccd4dee9b7](https://developers.openai.com/api/docs/models/gpt-5.4.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `spec.inputModalities` | `null` | `["text","image"]` | differs | [openai-c0ccd4dee9b7](https://developers.openai.com/api/docs/models/gpt-5.4.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.outputModalities` | `null` | `["text"]` | differs | [openai-c0ccd4dee9b7](https://developers.openai.com/api/docs/models/gpt-5.4.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.supportsReasoning` | `true` | `true` | matches | [openai-c0ccd4dee9b7](https://developers.openai.com/api/docs/models/gpt-5.4.md)；模型详情显式Reasoning token support。 |
| `spec.extra.reasoning.supportedEfforts` | `null` | `["none","low","medium","high","xhigh"]` | differs | [openai-c0ccd4dee9b7](https://developers.openai.com/api/docs/models/gpt-5.4.md)；精确型号页明确effort支持集；API语义，不自动认证订阅账户。 |
| `spec.extra.reasoning.defaultEffort` | `null` | `"none"` | differs | [openai-c0ccd4dee9b7](https://developers.openai.com/api/docs/models/gpt-5.4.md)；该精确API型号显式default；未声明时不推导。 |

剩余缺口：`spec.defaultTemperature`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- 官方 Codex/ChatGPT 订阅说明：2026-08-31 退役（GPT5.5截至核查日尚未来临）；API不受该退役影响。

### `compute/providers/openai.json#gpt-5.5-pro`

- 精确型号：`gpt-5.5-pro`
- 接入/规格文件：`compute/providers/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-5.5-pro.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"gpt-5.5-pro"` | `"gpt-5.5-pro"` | matches | [openai-f4193889b065](https://developers.openai.com/api/docs/models/gpt-5.5-pro.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `contextWindow` | `1050000` | `1050000` | matches | [openai-f4193889b065](https://developers.openai.com/api/docs/models/gpt-5.5-pro.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `maxOutputTokens` | `128000` | `128000` | matches | [openai-f4193889b065](https://developers.openai.com/api/docs/models/gpt-5.5-pro.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `inputPrice` | `30` | `30.0` | matches | [openai-f4193889b065](https://developers.openai.com/api/docs/models/gpt-5.5-pro.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `outputPrice` | `180` | `180.0` | matches | [openai-f4193889b065](https://developers.openai.com/api/docs/models/gpt-5.5-pro.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `inputModalities` | `null` | `["text","image"]` | differs | [openai-f4193889b065](https://developers.openai.com/api/docs/models/gpt-5.5-pro.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `outputModalities` | `null` | `["text"]` | differs | [openai-f4193889b065](https://developers.openai.com/api/docs/models/gpt-5.5-pro.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `supportsReasoning` | `null` | `true` | differs | [openai-f4193889b065](https://developers.openai.com/api/docs/models/gpt-5.5-pro.md)；模型详情显式Reasoning token support。 |
| `extra.reasoning.supportedEfforts` | `["medium","high","xhigh"]` | `["medium","high","xhigh"]` | matches | [openai-f4193889b065](https://developers.openai.com/api/docs/models/gpt-5.5-pro.md)；精确型号页明确effort支持集；API语义，不自动认证订阅账户。 |
| `extra.reasoning.defaultEffort` | `"high"` | `"high"` | matches | [openai-f4193889b065](https://developers.openai.com/api/docs/models/gpt-5.5-pro.md)；该精确API型号显式default；未声明时不推导。 |

剩余缺口：`extra.serverSideWebSearch.searchRequestPriceUsd`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

### `compute/providers/openai-codex.json#gpt-5.5`

- 精确型号：`gpt-5.5`
- 接入/规格文件：`compute/providers/openai-codex.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-5.5.md`
- 结论：`official-conflict`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"gpt-5.5"` | `"gpt-5.5"` | not-comparable | [openai-b71aef18263f](https://developers.openai.com/api/docs/models/gpt-5.5.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 API身份本身不证明订阅账号可用性。 |
| `contextWindow` | `272000` | `1050000` | not-comparable | [openai-b71aef18263f](https://developers.openai.com/api/docs/models/gpt-5.5.md)；官网明文整数，输入、输出与总窗口分别记录。 原厂API证据不可直接证明本订阅access有效合同。 |
| `maxOutputTokens` | `128000` | `128000` | not-comparable | [openai-b71aef18263f](https://developers.openai.com/api/docs/models/gpt-5.5.md)；官网明文整数，输入、输出与总窗口分别记录。 原厂API证据不可直接证明本订阅access有效合同。 |
| `inputPrice` | `null` | `5.0` | not-comparable | [openai-b71aef18263f](https://developers.openai.com/api/docs/models/gpt-5.5.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 原厂API证据不可直接证明本订阅access有效合同。 |
| `outputPrice` | `null` | `30.0` | not-comparable | [openai-b71aef18263f](https://developers.openai.com/api/docs/models/gpt-5.5.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 原厂API证据不可直接证明本订阅access有效合同。 |
| `extra.cachedInputPrice` | `null` | `0.5` | not-comparable | [openai-b71aef18263f](https://developers.openai.com/api/docs/models/gpt-5.5.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 原厂API证据不可直接证明本订阅access有效合同。 |
| `inputModalities` | `null` | `["text","image"]` | not-comparable | [openai-b71aef18263f](https://developers.openai.com/api/docs/models/gpt-5.5.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 原厂API证据不可直接证明本订阅access有效合同。 |
| `outputModalities` | `null` | `["text"]` | not-comparable | [openai-b71aef18263f](https://developers.openai.com/api/docs/models/gpt-5.5.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 原厂API证据不可直接证明本订阅access有效合同。 |
| `supportsReasoning` | `null` | `true` | not-comparable | [openai-b71aef18263f](https://developers.openai.com/api/docs/models/gpt-5.5.md)；模型详情显式Reasoning token support。 原厂API证据不可直接证明本订阅access有效合同。 |
| `extra.reasoning.supportedEfforts` | `null` | `["none","low","medium","high","xhigh"]` | not-comparable | [openai-b71aef18263f](https://developers.openai.com/api/docs/models/gpt-5.5.md)；精确型号页明确effort支持集；API语义，不自动认证订阅账户。 原厂API证据不可直接证明本订阅access有效合同。 |
| `extra.reasoning.defaultEffort` | `null` | `"medium"` | not-comparable | [openai-b71aef18263f](https://developers.openai.com/api/docs/models/gpt-5.5.md)；该精确API型号显式default；未声明时不推导。 原厂API证据不可直接证明本订阅access有效合同。 |
| `accessAvailability` | `"configured"` | `{"retirementDate":"2026-10-14","scope":"Codex with ChatGPT sign-in","apiUnaffected":true}` | differs | [openai-1aa248fc8b83](https://learn.chatgpt.com/docs/models)；核查日GPT5.5未来退役；Spark、GPT5.4/mini已过日期。该证据只适用订阅接入。 |

剩余缺口：`contextWindow`, `maxOutputTokens`, `modelName`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- 官方 Codex/ChatGPT 订阅说明：2026-10-14 退役（GPT5.5截至核查日尚未来临）；API不受该退役影响。
- 订阅/套餐实际允许型号、窗口、effort、工具与账号限额需独立官方接入合同；本表API参数只作不可比对照，不提升订阅字段状态。

### `compute/providers/openai.json#gpt-5.5`

- 精确型号：`gpt-5.5`
- 接入/规格文件：`compute/providers/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-5.5.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"gpt-5.5"` | `"gpt-5.5"` | matches | [openai-b71aef18263f](https://developers.openai.com/api/docs/models/gpt-5.5.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `contextWindow` | `1050000` | `1050000` | matches | [openai-b71aef18263f](https://developers.openai.com/api/docs/models/gpt-5.5.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `maxOutputTokens` | `128000` | `128000` | matches | [openai-b71aef18263f](https://developers.openai.com/api/docs/models/gpt-5.5.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `inputPrice` | `5` | `5.0` | matches | [openai-b71aef18263f](https://developers.openai.com/api/docs/models/gpt-5.5.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `outputPrice` | `30` | `30.0` | matches | [openai-b71aef18263f](https://developers.openai.com/api/docs/models/gpt-5.5.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `extra.cachedInputPrice` | `0.5` | `0.5` | matches | [openai-b71aef18263f](https://developers.openai.com/api/docs/models/gpt-5.5.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `inputModalities` | `null` | `["text","image"]` | differs | [openai-b71aef18263f](https://developers.openai.com/api/docs/models/gpt-5.5.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `outputModalities` | `null` | `["text"]` | differs | [openai-b71aef18263f](https://developers.openai.com/api/docs/models/gpt-5.5.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `supportsReasoning` | `null` | `true` | differs | [openai-b71aef18263f](https://developers.openai.com/api/docs/models/gpt-5.5.md)；模型详情显式Reasoning token support。 |
| `extra.reasoning.supportedEfforts` | `["none","low","medium","high","xhigh"]` | `["none","low","medium","high","xhigh"]` | matches | [openai-b71aef18263f](https://developers.openai.com/api/docs/models/gpt-5.5.md)；精确型号页明确effort支持集；API语义，不自动认证订阅账户。 |
| `extra.reasoning.defaultEffort` | `"medium"` | `"medium"` | matches | [openai-b71aef18263f](https://developers.openai.com/api/docs/models/gpt-5.5.md)；该精确API型号显式default；未声明时不推导。 |

剩余缺口：`extra.serverSideWebSearch.searchRequestPriceUsd`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- 官方 Codex/ChatGPT 订阅说明：2026-10-14 退役（GPT5.5截至核查日尚未来临）；API不受该退役影响。

### `compute/model-specs/openai.json#gpt-5.5`

- 精确型号：`gpt-5.5`
- 接入/规格文件：`compute/model-specs/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-5.5.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `id` | `"gpt-5.5"` | `"gpt-5.5"` | matches | [openai-b71aef18263f](https://developers.openai.com/api/docs/models/gpt-5.5.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `spec.contextWindow` | `1050000` | `1050000` | matches | [openai-b71aef18263f](https://developers.openai.com/api/docs/models/gpt-5.5.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `spec.maxOutputTokens` | `128000` | `128000` | matches | [openai-b71aef18263f](https://developers.openai.com/api/docs/models/gpt-5.5.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `accessReference.inputPrice` | `null` | `5.0` | not-comparable | [openai-b71aef18263f](https://developers.openai.com/api/docs/models/gpt-5.5.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.outputPrice` | `null` | `30.0` | not-comparable | [openai-b71aef18263f](https://developers.openai.com/api/docs/models/gpt-5.5.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.extra.cachedInputPrice` | `null` | `0.5` | not-comparable | [openai-b71aef18263f](https://developers.openai.com/api/docs/models/gpt-5.5.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `spec.inputModalities` | `null` | `["text","image"]` | differs | [openai-b71aef18263f](https://developers.openai.com/api/docs/models/gpt-5.5.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.outputModalities` | `null` | `["text"]` | differs | [openai-b71aef18263f](https://developers.openai.com/api/docs/models/gpt-5.5.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.supportsReasoning` | `true` | `true` | matches | [openai-b71aef18263f](https://developers.openai.com/api/docs/models/gpt-5.5.md)；模型详情显式Reasoning token support。 |
| `spec.extra.reasoning.supportedEfforts` | `null` | `["none","low","medium","high","xhigh"]` | differs | [openai-b71aef18263f](https://developers.openai.com/api/docs/models/gpt-5.5.md)；精确型号页明确effort支持集；API语义，不自动认证订阅账户。 |
| `spec.extra.reasoning.defaultEffort` | `null` | `"medium"` | differs | [openai-b71aef18263f](https://developers.openai.com/api/docs/models/gpt-5.5.md)；该精确API型号显式default；未声明时不推导。 |

剩余缺口：`spec.defaultTemperature`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- 官方 Codex/ChatGPT 订阅说明：2026-10-14 退役（GPT5.5截至核查日尚未来临）；API不受该退役影响。

### `compute/model-specs/openai.json#gpt-5.6-luna-pro`

- 精确型号：`gpt-5.6-luna-pro`
- 接入/规格文件：`compute/model-specs/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-5.6-luna-pro.md`
- 结论：`still-unresolved`

未取得可用于该记录字段的同范围官方证据；失败链接见上方，不把404、页面壳或接近型号当成认证。

剩余缺口：`id`, `spec.contextWindow`, `spec.maxOutputTokens`, `spec.supportsReasoning`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- 精确 API 模型文档路径返回 HTTP Error 404: Not Found；不能因404认定模型从所有接入面退役。

### `compute/providers/openai-codex.json#gpt-5.6-luna`

- 精确型号：`gpt-5.6-luna`
- 接入/规格文件：`compute/providers/openai-codex.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-5.6-luna.md`
- 结论：`official-identity-only`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"gpt-5.6-luna"` | `"gpt-5.6-luna"` | not-comparable | [openai-adea2d95cfef](https://developers.openai.com/api/docs/models/gpt-5.6-luna.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 API身份本身不证明订阅账号可用性。 |
| `contextWindow` | `272000` | `1050000` | not-comparable | [openai-adea2d95cfef](https://developers.openai.com/api/docs/models/gpt-5.6-luna.md)；官网明文整数，输入、输出与总窗口分别记录。 原厂API证据不可直接证明本订阅access有效合同。 |
| `maxInputTokens` | `null` | `922000` | not-comparable | [openai-adea2d95cfef](https://developers.openai.com/api/docs/models/gpt-5.6-luna.md)；官网明文整数，输入、输出与总窗口分别记录。 原厂API证据不可直接证明本订阅access有效合同。 |
| `maxOutputTokens` | `128000` | `128000` | not-comparable | [openai-adea2d95cfef](https://developers.openai.com/api/docs/models/gpt-5.6-luna.md)；官网明文整数，输入、输出与总窗口分别记录。 原厂API证据不可直接证明本订阅access有效合同。 |
| `inputPrice` | `null` | `0.2` | not-comparable | [openai-adea2d95cfef](https://developers.openai.com/api/docs/models/gpt-5.6-luna.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 原厂API证据不可直接证明本订阅access有效合同。 |
| `outputPrice` | `null` | `1.2` | not-comparable | [openai-adea2d95cfef](https://developers.openai.com/api/docs/models/gpt-5.6-luna.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 原厂API证据不可直接证明本订阅access有效合同。 |
| `extra.cachedInputPrice` | `null` | `0.02` | not-comparable | [openai-adea2d95cfef](https://developers.openai.com/api/docs/models/gpt-5.6-luna.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 原厂API证据不可直接证明本订阅access有效合同。 |
| `inputModalities` | `null` | `["text","image"]` | not-comparable | [openai-adea2d95cfef](https://developers.openai.com/api/docs/models/gpt-5.6-luna.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 原厂API证据不可直接证明本订阅access有效合同。 |
| `outputModalities` | `null` | `["text"]` | not-comparable | [openai-adea2d95cfef](https://developers.openai.com/api/docs/models/gpt-5.6-luna.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 原厂API证据不可直接证明本订阅access有效合同。 |
| `supportsReasoning` | `null` | `true` | not-comparable | [openai-adea2d95cfef](https://developers.openai.com/api/docs/models/gpt-5.6-luna.md)；模型详情显式Reasoning token support。 原厂API证据不可直接证明本订阅access有效合同。 |
| `extra.reasoning.supportedEfforts` | `["low","medium","high","xhigh","max"]` | `["none","low","medium","high","xhigh","max"]` | not-comparable | [openai-adea2d95cfef](https://developers.openai.com/api/docs/models/gpt-5.6-luna.md)；精确型号页明确effort支持集；API语义，不自动认证订阅账户。 原厂API证据不可直接证明本订阅access有效合同。 |
| `extra.reasoning.defaultEffort` | `"medium"` | `"medium"` | not-comparable | [openai-adea2d95cfef](https://developers.openai.com/api/docs/models/gpt-5.6-luna.md)；该精确API型号显式default；未声明时不推导。 原厂API证据不可直接证明本订阅access有效合同。 |

剩余缺口：`contextWindow`, `extra.reasoning.defaultEffort`, `extra.reasoning.supportedEfforts`, `maxOutputTokens`, `modelName`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- 订阅/套餐实际允许型号、窗口、effort、工具与账号限额需独立官方接入合同；本表API参数只作不可比对照，不提升订阅字段状态。

### `compute/model-specs/openai.json#gpt-5.6-luna`

- 精确型号：`gpt-5.6-luna`
- 接入/规格文件：`compute/model-specs/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-5.6-luna.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `id` | `"gpt-5.6-luna"` | `"gpt-5.6-luna"` | matches | [openai-adea2d95cfef](https://developers.openai.com/api/docs/models/gpt-5.6-luna.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `spec.contextWindow` | `1050000` | `1050000` | matches | [openai-adea2d95cfef](https://developers.openai.com/api/docs/models/gpt-5.6-luna.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `spec.maxInputTokens` | `null` | `922000` | differs | [openai-adea2d95cfef](https://developers.openai.com/api/docs/models/gpt-5.6-luna.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `spec.maxOutputTokens` | `128000` | `128000` | matches | [openai-adea2d95cfef](https://developers.openai.com/api/docs/models/gpt-5.6-luna.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `accessReference.inputPrice` | `null` | `0.2` | not-comparable | [openai-adea2d95cfef](https://developers.openai.com/api/docs/models/gpt-5.6-luna.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.outputPrice` | `null` | `1.2` | not-comparable | [openai-adea2d95cfef](https://developers.openai.com/api/docs/models/gpt-5.6-luna.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.extra.cachedInputPrice` | `null` | `0.02` | not-comparable | [openai-adea2d95cfef](https://developers.openai.com/api/docs/models/gpt-5.6-luna.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `spec.inputModalities` | `null` | `["text","image"]` | differs | [openai-adea2d95cfef](https://developers.openai.com/api/docs/models/gpt-5.6-luna.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.outputModalities` | `null` | `["text"]` | differs | [openai-adea2d95cfef](https://developers.openai.com/api/docs/models/gpt-5.6-luna.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.supportsReasoning` | `true` | `true` | matches | [openai-adea2d95cfef](https://developers.openai.com/api/docs/models/gpt-5.6-luna.md)；模型详情显式Reasoning token support。 |
| `spec.extra.reasoning.supportedEfforts` | `null` | `["none","low","medium","high","xhigh","max"]` | differs | [openai-adea2d95cfef](https://developers.openai.com/api/docs/models/gpt-5.6-luna.md)；精确型号页明确effort支持集；API语义，不自动认证订阅账户。 |
| `spec.extra.reasoning.defaultEffort` | `null` | `"medium"` | differs | [openai-adea2d95cfef](https://developers.openai.com/api/docs/models/gpt-5.6-luna.md)；该精确API型号显式default；未声明时不推导。 |

剩余缺口：原 inventory 所列缺字段已有候选证据；不代表账号实测或全规格无缺口。

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。

### `compute/model-specs/openai.json#gpt-5.6-sol-pro`

- 精确型号：`gpt-5.6-sol-pro`
- 接入/规格文件：`compute/model-specs/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-5.6-sol-pro.md`
- 结论：`still-unresolved`

未取得可用于该记录字段的同范围官方证据；失败链接见上方，不把404、页面壳或接近型号当成认证。

剩余缺口：`id`, `spec.contextWindow`, `spec.maxOutputTokens`, `spec.supportsReasoning`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- 精确 API 模型文档路径返回 HTTP Error 404: Not Found；不能因404认定模型从所有接入面退役。

### `compute/providers/openai-codex.json#gpt-5.6-sol`

- 精确型号：`gpt-5.6-sol`
- 接入/规格文件：`compute/providers/openai-codex.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-5.6-sol.md`
- 结论：`official-identity-only`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"gpt-5.6-sol"` | `"gpt-5.6-sol"` | not-comparable | [openai-1e6da1e6275f](https://developers.openai.com/api/docs/models/gpt-5.6-sol.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 API身份本身不证明订阅账号可用性。 |
| `contextWindow` | `272000` | `1050000` | not-comparable | [openai-1e6da1e6275f](https://developers.openai.com/api/docs/models/gpt-5.6-sol.md)；官网明文整数，输入、输出与总窗口分别记录。 原厂API证据不可直接证明本订阅access有效合同。 |
| `maxInputTokens` | `null` | `922000` | not-comparable | [openai-1e6da1e6275f](https://developers.openai.com/api/docs/models/gpt-5.6-sol.md)；官网明文整数，输入、输出与总窗口分别记录。 原厂API证据不可直接证明本订阅access有效合同。 |
| `maxOutputTokens` | `128000` | `128000` | not-comparable | [openai-1e6da1e6275f](https://developers.openai.com/api/docs/models/gpt-5.6-sol.md)；官网明文整数，输入、输出与总窗口分别记录。 原厂API证据不可直接证明本订阅access有效合同。 |
| `inputPrice` | `null` | `4.0` | not-comparable | [openai-1e6da1e6275f](https://developers.openai.com/api/docs/models/gpt-5.6-sol.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 原厂API证据不可直接证明本订阅access有效合同。 |
| `outputPrice` | `null` | `20.0` | not-comparable | [openai-1e6da1e6275f](https://developers.openai.com/api/docs/models/gpt-5.6-sol.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 原厂API证据不可直接证明本订阅access有效合同。 |
| `extra.cachedInputPrice` | `null` | `0.4` | not-comparable | [openai-1e6da1e6275f](https://developers.openai.com/api/docs/models/gpt-5.6-sol.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 原厂API证据不可直接证明本订阅access有效合同。 |
| `inputModalities` | `null` | `["text","image"]` | not-comparable | [openai-1e6da1e6275f](https://developers.openai.com/api/docs/models/gpt-5.6-sol.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 原厂API证据不可直接证明本订阅access有效合同。 |
| `outputModalities` | `null` | `["text"]` | not-comparable | [openai-1e6da1e6275f](https://developers.openai.com/api/docs/models/gpt-5.6-sol.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 原厂API证据不可直接证明本订阅access有效合同。 |
| `supportsReasoning` | `null` | `true` | not-comparable | [openai-1e6da1e6275f](https://developers.openai.com/api/docs/models/gpt-5.6-sol.md)；模型详情显式Reasoning token support。 原厂API证据不可直接证明本订阅access有效合同。 |
| `extra.reasoning.supportedEfforts` | `["low","medium","high","xhigh","max"]` | `["none","low","medium","high","xhigh","max"]` | not-comparable | [openai-1e6da1e6275f](https://developers.openai.com/api/docs/models/gpt-5.6-sol.md)；精确型号页明确effort支持集；API语义，不自动认证订阅账户。 原厂API证据不可直接证明本订阅access有效合同。 |
| `extra.reasoning.defaultEffort` | `"low"` | `"medium"` | not-comparable | [openai-1e6da1e6275f](https://developers.openai.com/api/docs/models/gpt-5.6-sol.md)；该精确API型号显式default；未声明时不推导。 原厂API证据不可直接证明本订阅access有效合同。 |

剩余缺口：`contextWindow`, `extra.reasoning.defaultEffort`, `extra.reasoning.supportedEfforts`, `maxOutputTokens`, `modelName`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- 订阅/套餐实际允许型号、窗口、effort、工具与账号限额需独立官方接入合同；本表API参数只作不可比对照，不提升订阅字段状态。

### `compute/model-specs/openai.json#gpt-5.6-sol`

- 精确型号：`gpt-5.6-sol`
- 接入/规格文件：`compute/model-specs/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-5.6-sol.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `id` | `"gpt-5.6-sol"` | `"gpt-5.6-sol"` | matches | [openai-1e6da1e6275f](https://developers.openai.com/api/docs/models/gpt-5.6-sol.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `spec.contextWindow` | `1050000` | `1050000` | matches | [openai-1e6da1e6275f](https://developers.openai.com/api/docs/models/gpt-5.6-sol.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `spec.maxInputTokens` | `null` | `922000` | differs | [openai-1e6da1e6275f](https://developers.openai.com/api/docs/models/gpt-5.6-sol.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `spec.maxOutputTokens` | `128000` | `128000` | matches | [openai-1e6da1e6275f](https://developers.openai.com/api/docs/models/gpt-5.6-sol.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `accessReference.inputPrice` | `null` | `4.0` | not-comparable | [openai-1e6da1e6275f](https://developers.openai.com/api/docs/models/gpt-5.6-sol.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.outputPrice` | `null` | `20.0` | not-comparable | [openai-1e6da1e6275f](https://developers.openai.com/api/docs/models/gpt-5.6-sol.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.extra.cachedInputPrice` | `null` | `0.4` | not-comparable | [openai-1e6da1e6275f](https://developers.openai.com/api/docs/models/gpt-5.6-sol.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `spec.inputModalities` | `null` | `["text","image"]` | differs | [openai-1e6da1e6275f](https://developers.openai.com/api/docs/models/gpt-5.6-sol.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.outputModalities` | `null` | `["text"]` | differs | [openai-1e6da1e6275f](https://developers.openai.com/api/docs/models/gpt-5.6-sol.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.supportsReasoning` | `true` | `true` | matches | [openai-1e6da1e6275f](https://developers.openai.com/api/docs/models/gpt-5.6-sol.md)；模型详情显式Reasoning token support。 |
| `spec.extra.reasoning.supportedEfforts` | `null` | `["none","low","medium","high","xhigh","max"]` | differs | [openai-1e6da1e6275f](https://developers.openai.com/api/docs/models/gpt-5.6-sol.md)；精确型号页明确effort支持集；API语义，不自动认证订阅账户。 |
| `spec.extra.reasoning.defaultEffort` | `null` | `"medium"` | differs | [openai-1e6da1e6275f](https://developers.openai.com/api/docs/models/gpt-5.6-sol.md)；该精确API型号显式default；未声明时不推导。 |

剩余缺口：原 inventory 所列缺字段已有候选证据；不代表账号实测或全规格无缺口。

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。

### `compute/model-specs/openai.json#gpt-5.6-terra-pro`

- 精确型号：`gpt-5.6-terra-pro`
- 接入/规格文件：`compute/model-specs/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-5.6-terra-pro.md`
- 结论：`still-unresolved`

未取得可用于该记录字段的同范围官方证据；失败链接见上方，不把404、页面壳或接近型号当成认证。

剩余缺口：`id`, `spec.contextWindow`, `spec.maxOutputTokens`, `spec.supportsReasoning`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- 精确 API 模型文档路径返回 HTTP Error 404: Not Found；不能因404认定模型从所有接入面退役。

### `compute/providers/openai-codex.json#gpt-5.6-terra`

- 精确型号：`gpt-5.6-terra`
- 接入/规格文件：`compute/providers/openai-codex.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-5.6-terra.md`
- 结论：`official-identity-only`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"gpt-5.6-terra"` | `"gpt-5.6-terra"` | not-comparable | [openai-bfecd345a934](https://developers.openai.com/api/docs/models/gpt-5.6-terra.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 API身份本身不证明订阅账号可用性。 |
| `contextWindow` | `272000` | `1050000` | not-comparable | [openai-bfecd345a934](https://developers.openai.com/api/docs/models/gpt-5.6-terra.md)；官网明文整数，输入、输出与总窗口分别记录。 原厂API证据不可直接证明本订阅access有效合同。 |
| `maxInputTokens` | `null` | `922000` | not-comparable | [openai-bfecd345a934](https://developers.openai.com/api/docs/models/gpt-5.6-terra.md)；官网明文整数，输入、输出与总窗口分别记录。 原厂API证据不可直接证明本订阅access有效合同。 |
| `maxOutputTokens` | `128000` | `128000` | not-comparable | [openai-bfecd345a934](https://developers.openai.com/api/docs/models/gpt-5.6-terra.md)；官网明文整数，输入、输出与总窗口分别记录。 原厂API证据不可直接证明本订阅access有效合同。 |
| `inputPrice` | `null` | `2.0` | not-comparable | [openai-bfecd345a934](https://developers.openai.com/api/docs/models/gpt-5.6-terra.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 原厂API证据不可直接证明本订阅access有效合同。 |
| `outputPrice` | `null` | `12.0` | not-comparable | [openai-bfecd345a934](https://developers.openai.com/api/docs/models/gpt-5.6-terra.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 原厂API证据不可直接证明本订阅access有效合同。 |
| `extra.cachedInputPrice` | `null` | `0.2` | not-comparable | [openai-bfecd345a934](https://developers.openai.com/api/docs/models/gpt-5.6-terra.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 原厂API证据不可直接证明本订阅access有效合同。 |
| `inputModalities` | `null` | `["text","image"]` | not-comparable | [openai-bfecd345a934](https://developers.openai.com/api/docs/models/gpt-5.6-terra.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 原厂API证据不可直接证明本订阅access有效合同。 |
| `outputModalities` | `null` | `["text"]` | not-comparable | [openai-bfecd345a934](https://developers.openai.com/api/docs/models/gpt-5.6-terra.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 原厂API证据不可直接证明本订阅access有效合同。 |
| `supportsReasoning` | `null` | `true` | not-comparable | [openai-bfecd345a934](https://developers.openai.com/api/docs/models/gpt-5.6-terra.md)；模型详情显式Reasoning token support。 原厂API证据不可直接证明本订阅access有效合同。 |
| `extra.reasoning.supportedEfforts` | `["low","medium","high","xhigh","max"]` | `["none","low","medium","high","xhigh","max"]` | not-comparable | [openai-bfecd345a934](https://developers.openai.com/api/docs/models/gpt-5.6-terra.md)；精确型号页明确effort支持集；API语义，不自动认证订阅账户。 原厂API证据不可直接证明本订阅access有效合同。 |
| `extra.reasoning.defaultEffort` | `"medium"` | `"medium"` | not-comparable | [openai-bfecd345a934](https://developers.openai.com/api/docs/models/gpt-5.6-terra.md)；该精确API型号显式default；未声明时不推导。 原厂API证据不可直接证明本订阅access有效合同。 |

剩余缺口：`contextWindow`, `extra.reasoning.defaultEffort`, `extra.reasoning.supportedEfforts`, `maxOutputTokens`, `modelName`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- 订阅/套餐实际允许型号、窗口、effort、工具与账号限额需独立官方接入合同；本表API参数只作不可比对照，不提升订阅字段状态。

### `compute/model-specs/openai.json#gpt-5.6-terra`

- 精确型号：`gpt-5.6-terra`
- 接入/规格文件：`compute/model-specs/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-5.6-terra.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `id` | `"gpt-5.6-terra"` | `"gpt-5.6-terra"` | matches | [openai-bfecd345a934](https://developers.openai.com/api/docs/models/gpt-5.6-terra.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `spec.contextWindow` | `1050000` | `1050000` | matches | [openai-bfecd345a934](https://developers.openai.com/api/docs/models/gpt-5.6-terra.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `spec.maxInputTokens` | `null` | `922000` | differs | [openai-bfecd345a934](https://developers.openai.com/api/docs/models/gpt-5.6-terra.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `spec.maxOutputTokens` | `128000` | `128000` | matches | [openai-bfecd345a934](https://developers.openai.com/api/docs/models/gpt-5.6-terra.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `accessReference.inputPrice` | `null` | `2.0` | not-comparable | [openai-bfecd345a934](https://developers.openai.com/api/docs/models/gpt-5.6-terra.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.outputPrice` | `null` | `12.0` | not-comparable | [openai-bfecd345a934](https://developers.openai.com/api/docs/models/gpt-5.6-terra.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.extra.cachedInputPrice` | `null` | `0.2` | not-comparable | [openai-bfecd345a934](https://developers.openai.com/api/docs/models/gpt-5.6-terra.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `spec.inputModalities` | `null` | `["text","image"]` | differs | [openai-bfecd345a934](https://developers.openai.com/api/docs/models/gpt-5.6-terra.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.outputModalities` | `null` | `["text"]` | differs | [openai-bfecd345a934](https://developers.openai.com/api/docs/models/gpt-5.6-terra.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.supportsReasoning` | `true` | `true` | matches | [openai-bfecd345a934](https://developers.openai.com/api/docs/models/gpt-5.6-terra.md)；模型详情显式Reasoning token support。 |
| `spec.extra.reasoning.supportedEfforts` | `null` | `["none","low","medium","high","xhigh","max"]` | differs | [openai-bfecd345a934](https://developers.openai.com/api/docs/models/gpt-5.6-terra.md)；精确型号页明确effort支持集；API语义，不自动认证订阅账户。 |
| `spec.extra.reasoning.defaultEffort` | `null` | `"medium"` | differs | [openai-bfecd345a934](https://developers.openai.com/api/docs/models/gpt-5.6-terra.md)；该精确API型号显式default；未声明时不推导。 |

剩余缺口：原 inventory 所列缺字段已有候选证据；不代表账号实测或全规格无缺口。

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。

### `compute/providers/openai.json#gpt-5`

- 精确型号：`gpt-5`
- 接入/规格文件：`compute/providers/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-5.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"gpt-5"` | `"gpt-5"` | matches | [openai-5a96a2b0e310](https://developers.openai.com/api/docs/models/gpt-5.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `contextWindow` | `400000` | `400000` | matches | [openai-5a96a2b0e310](https://developers.openai.com/api/docs/models/gpt-5.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `maxInputTokens` | `null` | `272000` | differs | [openai-5a96a2b0e310](https://developers.openai.com/api/docs/models/gpt-5.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `maxOutputTokens` | `128000` | `128000` | matches | [openai-5a96a2b0e310](https://developers.openai.com/api/docs/models/gpt-5.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `inputPrice` | `1.25` | `1.25` | matches | [openai-5a96a2b0e310](https://developers.openai.com/api/docs/models/gpt-5.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `outputPrice` | `10` | `10.0` | matches | [openai-5a96a2b0e310](https://developers.openai.com/api/docs/models/gpt-5.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `extra.cachedInputPrice` | `null` | `0.125` | differs | [openai-5a96a2b0e310](https://developers.openai.com/api/docs/models/gpt-5.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `inputModalities` | `null` | `["text","image"]` | differs | [openai-5a96a2b0e310](https://developers.openai.com/api/docs/models/gpt-5.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `outputModalities` | `null` | `["text"]` | differs | [openai-5a96a2b0e310](https://developers.openai.com/api/docs/models/gpt-5.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `supportsReasoning` | `null` | `true` | differs | [openai-5a96a2b0e310](https://developers.openai.com/api/docs/models/gpt-5.md)；模型详情显式Reasoning token support。 |
| `extra.reasoning.supportedEfforts` | `null` | `["minimal","low","medium","high"]` | differs | [openai-5a96a2b0e310](https://developers.openai.com/api/docs/models/gpt-5.md)；精确型号页明确effort支持集；API语义，不自动认证订阅账户。 |

剩余缺口：`extra.serverSideWebSearch.searchRequestPriceUsd`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

### `compute/model-specs/openai.json#gpt-5`

- 精确型号：`gpt-5`
- 接入/规格文件：`compute/model-specs/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-5.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `id` | `"gpt-5"` | `"gpt-5"` | matches | [openai-5a96a2b0e310](https://developers.openai.com/api/docs/models/gpt-5.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `spec.contextWindow` | `400000` | `400000` | matches | [openai-5a96a2b0e310](https://developers.openai.com/api/docs/models/gpt-5.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `spec.maxInputTokens` | `null` | `272000` | differs | [openai-5a96a2b0e310](https://developers.openai.com/api/docs/models/gpt-5.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `spec.maxOutputTokens` | `128000` | `128000` | matches | [openai-5a96a2b0e310](https://developers.openai.com/api/docs/models/gpt-5.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `accessReference.inputPrice` | `null` | `1.25` | not-comparable | [openai-5a96a2b0e310](https://developers.openai.com/api/docs/models/gpt-5.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.outputPrice` | `null` | `10.0` | not-comparable | [openai-5a96a2b0e310](https://developers.openai.com/api/docs/models/gpt-5.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.extra.cachedInputPrice` | `null` | `0.125` | not-comparable | [openai-5a96a2b0e310](https://developers.openai.com/api/docs/models/gpt-5.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `spec.inputModalities` | `null` | `["text","image"]` | differs | [openai-5a96a2b0e310](https://developers.openai.com/api/docs/models/gpt-5.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.outputModalities` | `null` | `["text"]` | differs | [openai-5a96a2b0e310](https://developers.openai.com/api/docs/models/gpt-5.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.supportsReasoning` | `true` | `true` | matches | [openai-5a96a2b0e310](https://developers.openai.com/api/docs/models/gpt-5.md)；模型详情显式Reasoning token support。 |
| `spec.extra.reasoning.supportedEfforts` | `null` | `["minimal","low","medium","high"]` | differs | [openai-5a96a2b0e310](https://developers.openai.com/api/docs/models/gpt-5.md)；精确型号页明确effort支持集；API语义，不自动认证订阅账户。 |

剩余缺口：`spec.defaultTemperature`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

### `compute/providers/openai-codex.json#gpt-6-astra`

- 精确型号：`gpt-6-astra`
- 接入/规格文件：`compute/providers/openai-codex.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-6-astra.md`
- 结论：`official-identity-only`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"gpt-6-astra"` | `"gpt-6-astra"` | not-comparable | [openai-c3657b2de733](https://developers.openai.com/api/docs/models/gpt-6-astra.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 API身份本身不证明订阅账号可用性。 |
| `contextWindow` | `1050000` | `1050000` | not-comparable | [openai-c3657b2de733](https://developers.openai.com/api/docs/models/gpt-6-astra.md)；官网明文整数，输入、输出与总窗口分别记录。 原厂API证据不可直接证明本订阅access有效合同。 |
| `maxInputTokens` | `null` | `922000` | not-comparable | [openai-c3657b2de733](https://developers.openai.com/api/docs/models/gpt-6-astra.md)；官网明文整数，输入、输出与总窗口分别记录。 原厂API证据不可直接证明本订阅access有效合同。 |
| `maxOutputTokens` | `128000` | `128000` | not-comparable | [openai-c3657b2de733](https://developers.openai.com/api/docs/models/gpt-6-astra.md)；官网明文整数，输入、输出与总窗口分别记录。 原厂API证据不可直接证明本订阅access有效合同。 |
| `inputPrice` | `null` | `10.0` | not-comparable | [openai-c3657b2de733](https://developers.openai.com/api/docs/models/gpt-6-astra.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 原厂API证据不可直接证明本订阅access有效合同。 |
| `outputPrice` | `null` | `50.0` | not-comparable | [openai-c3657b2de733](https://developers.openai.com/api/docs/models/gpt-6-astra.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 原厂API证据不可直接证明本订阅access有效合同。 |
| `extra.cachedInputPrice` | `null` | `1.0` | not-comparable | [openai-c3657b2de733](https://developers.openai.com/api/docs/models/gpt-6-astra.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 原厂API证据不可直接证明本订阅access有效合同。 |
| `extra.cacheWritePrice` | `null` | `12.5` | not-comparable | [openai-c3657b2de733](https://developers.openai.com/api/docs/models/gpt-6-astra.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 原厂API证据不可直接证明本订阅access有效合同。 |
| `inputModalities` | `null` | `["text","image"]` | not-comparable | [openai-c3657b2de733](https://developers.openai.com/api/docs/models/gpt-6-astra.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 原厂API证据不可直接证明本订阅access有效合同。 |
| `outputModalities` | `null` | `["text"]` | not-comparable | [openai-c3657b2de733](https://developers.openai.com/api/docs/models/gpt-6-astra.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 原厂API证据不可直接证明本订阅access有效合同。 |
| `supportsReasoning` | `null` | `true` | not-comparable | [openai-c3657b2de733](https://developers.openai.com/api/docs/models/gpt-6-astra.md)；模型详情显式Reasoning token support。 原厂API证据不可直接证明本订阅access有效合同。 |
| `extra.reasoning.supportedEfforts` | `["low","medium","high","xhigh","max"]` | `["low","medium","high","xhigh","max"]` | not-comparable | [openai-c3657b2de733](https://developers.openai.com/api/docs/models/gpt-6-astra.md)；精确型号页明确effort支持集；API语义，不自动认证订阅账户。 原厂API证据不可直接证明本订阅access有效合同。 |

剩余缺口：`contextWindow`, `extra.reasoning.defaultEffort`, `extra.reasoning.supportedEfforts`, `maxOutputTokens`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- 订阅/套餐实际允许型号、窗口、effort、工具与账号限额需独立官方接入合同；本表API参数只作不可比对照，不提升订阅字段状态。

### `compute/providers/openai.json#gpt-6-astra`

- 精确型号：`gpt-6-astra`
- 接入/规格文件：`compute/providers/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-6-astra.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"gpt-6-astra"` | `"gpt-6-astra"` | matches | [openai-c3657b2de733](https://developers.openai.com/api/docs/models/gpt-6-astra.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `contextWindow` | `1050000` | `1050000` | matches | [openai-c3657b2de733](https://developers.openai.com/api/docs/models/gpt-6-astra.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `maxInputTokens` | `null` | `922000` | differs | [openai-c3657b2de733](https://developers.openai.com/api/docs/models/gpt-6-astra.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `maxOutputTokens` | `128000` | `128000` | matches | [openai-c3657b2de733](https://developers.openai.com/api/docs/models/gpt-6-astra.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `inputPrice` | `10` | `10.0` | matches | [openai-c3657b2de733](https://developers.openai.com/api/docs/models/gpt-6-astra.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `outputPrice` | `50` | `50.0` | matches | [openai-c3657b2de733](https://developers.openai.com/api/docs/models/gpt-6-astra.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `extra.cachedInputPrice` | `1` | `1.0` | matches | [openai-c3657b2de733](https://developers.openai.com/api/docs/models/gpt-6-astra.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `extra.cacheWritePrice` | `null` | `12.5` | differs | [openai-c3657b2de733](https://developers.openai.com/api/docs/models/gpt-6-astra.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `inputModalities` | `null` | `["text","image"]` | differs | [openai-c3657b2de733](https://developers.openai.com/api/docs/models/gpt-6-astra.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `outputModalities` | `null` | `["text"]` | differs | [openai-c3657b2de733](https://developers.openai.com/api/docs/models/gpt-6-astra.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `supportsReasoning` | `null` | `true` | differs | [openai-c3657b2de733](https://developers.openai.com/api/docs/models/gpt-6-astra.md)；模型详情显式Reasoning token support。 |
| `extra.reasoning.supportedEfforts` | `["low","medium","high","xhigh","max"]` | `["low","medium","high","xhigh","max"]` | matches | [openai-c3657b2de733](https://developers.openai.com/api/docs/models/gpt-6-astra.md)；精确型号页明确effort支持集；API语义，不自动认证订阅账户。 |

剩余缺口：`extra.reasoning.defaultEffort`, `extra.serverSideWebSearch.searchRequestPriceUsd`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

### `compute/model-specs/openai.json#gpt-6-astra`

- 精确型号：`gpt-6-astra`
- 接入/规格文件：`compute/model-specs/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-6-astra.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `id` | `"gpt-6-astra"` | `"gpt-6-astra"` | matches | [openai-c3657b2de733](https://developers.openai.com/api/docs/models/gpt-6-astra.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `spec.contextWindow` | `1050000` | `1050000` | matches | [openai-c3657b2de733](https://developers.openai.com/api/docs/models/gpt-6-astra.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `spec.maxInputTokens` | `null` | `922000` | differs | [openai-c3657b2de733](https://developers.openai.com/api/docs/models/gpt-6-astra.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `spec.maxOutputTokens` | `128000` | `128000` | matches | [openai-c3657b2de733](https://developers.openai.com/api/docs/models/gpt-6-astra.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `accessReference.inputPrice` | `null` | `10.0` | not-comparable | [openai-c3657b2de733](https://developers.openai.com/api/docs/models/gpt-6-astra.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.outputPrice` | `null` | `50.0` | not-comparable | [openai-c3657b2de733](https://developers.openai.com/api/docs/models/gpt-6-astra.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.extra.cachedInputPrice` | `null` | `1.0` | not-comparable | [openai-c3657b2de733](https://developers.openai.com/api/docs/models/gpt-6-astra.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.extra.cacheWritePrice` | `null` | `12.5` | not-comparable | [openai-c3657b2de733](https://developers.openai.com/api/docs/models/gpt-6-astra.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `spec.inputModalities` | `null` | `["text","image"]` | differs | [openai-c3657b2de733](https://developers.openai.com/api/docs/models/gpt-6-astra.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.outputModalities` | `null` | `["text"]` | differs | [openai-c3657b2de733](https://developers.openai.com/api/docs/models/gpt-6-astra.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.supportsReasoning` | `true` | `true` | matches | [openai-c3657b2de733](https://developers.openai.com/api/docs/models/gpt-6-astra.md)；模型详情显式Reasoning token support。 |
| `spec.extra.reasoning.supportedEfforts` | `null` | `["low","medium","high","xhigh","max"]` | differs | [openai-c3657b2de733](https://developers.openai.com/api/docs/models/gpt-6-astra.md)；精确型号页明确effort支持集；API语义，不自动认证订阅账户。 |

剩余缺口：`spec.extra.thinkingOnly`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

### `compute/providers/openai-codex.json#gpt-6-luna`

- 精确型号：`gpt-6-luna`
- 接入/规格文件：`compute/providers/openai-codex.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-6-luna.md`
- 结论：`official-identity-only`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"gpt-6-luna"` | `"gpt-6-luna"` | not-comparable | [openai-64e9b8ff2ca6](https://developers.openai.com/api/docs/models/gpt-6-luna.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 API身份本身不证明订阅账号可用性。 |
| `contextWindow` | `1050000` | `1050000` | not-comparable | [openai-64e9b8ff2ca6](https://developers.openai.com/api/docs/models/gpt-6-luna.md)；官网明文整数，输入、输出与总窗口分别记录。 原厂API证据不可直接证明本订阅access有效合同。 |
| `maxInputTokens` | `null` | `922000` | not-comparable | [openai-64e9b8ff2ca6](https://developers.openai.com/api/docs/models/gpt-6-luna.md)；官网明文整数，输入、输出与总窗口分别记录。 原厂API证据不可直接证明本订阅access有效合同。 |
| `maxOutputTokens` | `128000` | `128000` | not-comparable | [openai-64e9b8ff2ca6](https://developers.openai.com/api/docs/models/gpt-6-luna.md)；官网明文整数，输入、输出与总窗口分别记录。 原厂API证据不可直接证明本订阅access有效合同。 |
| `inputPrice` | `null` | `0.1` | not-comparable | [openai-64e9b8ff2ca6](https://developers.openai.com/api/docs/models/gpt-6-luna.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 原厂API证据不可直接证明本订阅access有效合同。 |
| `outputPrice` | `null` | `0.5` | not-comparable | [openai-64e9b8ff2ca6](https://developers.openai.com/api/docs/models/gpt-6-luna.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 原厂API证据不可直接证明本订阅access有效合同。 |
| `extra.cachedInputPrice` | `null` | `0.01` | not-comparable | [openai-64e9b8ff2ca6](https://developers.openai.com/api/docs/models/gpt-6-luna.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 原厂API证据不可直接证明本订阅access有效合同。 |
| `extra.cacheWritePrice` | `null` | `0.125` | not-comparable | [openai-64e9b8ff2ca6](https://developers.openai.com/api/docs/models/gpt-6-luna.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 原厂API证据不可直接证明本订阅access有效合同。 |
| `inputModalities` | `null` | `["text","image"]` | not-comparable | [openai-64e9b8ff2ca6](https://developers.openai.com/api/docs/models/gpt-6-luna.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 原厂API证据不可直接证明本订阅access有效合同。 |
| `outputModalities` | `null` | `["text"]` | not-comparable | [openai-64e9b8ff2ca6](https://developers.openai.com/api/docs/models/gpt-6-luna.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 原厂API证据不可直接证明本订阅access有效合同。 |
| `supportsReasoning` | `null` | `true` | not-comparable | [openai-64e9b8ff2ca6](https://developers.openai.com/api/docs/models/gpt-6-luna.md)；模型详情显式Reasoning token support。 原厂API证据不可直接证明本订阅access有效合同。 |
| `extra.reasoning.supportedEfforts` | `["low","medium","high","xhigh","max"]` | `["none","low","medium","high","xhigh","max"]` | not-comparable | [openai-64e9b8ff2ca6](https://developers.openai.com/api/docs/models/gpt-6-luna.md)；精确型号页明确effort支持集；API语义，不自动认证订阅账户。 原厂API证据不可直接证明本订阅access有效合同。 |
| `extra.reasoning.defaultEffort` | `"medium"` | `"medium"` | not-comparable | [openai-64e9b8ff2ca6](https://developers.openai.com/api/docs/models/gpt-6-luna.md)；该精确API型号显式default；未声明时不推导。 原厂API证据不可直接证明本订阅access有效合同。 |
| `toolCallingApi` | `null` | `{"responses":"supported","chatCompletions":"only reasoning_effort=none"}` | not-comparable | [openai-64e9b8ff2ca6](https://developers.openai.com/api/docs/models/gpt-6-luna.md)；精确API限制，不把Providerrecognized协议等同所有模式适配。 原厂API证据不可直接证明本订阅access有效合同。 |

剩余缺口：`contextWindow`, `extra.reasoning.defaultEffort`, `extra.reasoning.supportedEfforts`, `maxOutputTokens`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- 订阅/套餐实际允许型号、窗口、effort、工具与账号限额需独立官方接入合同；本表API参数只作不可比对照，不提升订阅字段状态。

### `compute/providers/openai.json#gpt-6-luna`

- 精确型号：`gpt-6-luna`
- 接入/规格文件：`compute/providers/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-6-luna.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"gpt-6-luna"` | `"gpt-6-luna"` | matches | [openai-64e9b8ff2ca6](https://developers.openai.com/api/docs/models/gpt-6-luna.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `contextWindow` | `1050000` | `1050000` | matches | [openai-64e9b8ff2ca6](https://developers.openai.com/api/docs/models/gpt-6-luna.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `maxInputTokens` | `null` | `922000` | differs | [openai-64e9b8ff2ca6](https://developers.openai.com/api/docs/models/gpt-6-luna.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `maxOutputTokens` | `128000` | `128000` | matches | [openai-64e9b8ff2ca6](https://developers.openai.com/api/docs/models/gpt-6-luna.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `inputPrice` | `0.1` | `0.1` | matches | [openai-64e9b8ff2ca6](https://developers.openai.com/api/docs/models/gpt-6-luna.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `outputPrice` | `0.5` | `0.5` | matches | [openai-64e9b8ff2ca6](https://developers.openai.com/api/docs/models/gpt-6-luna.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `extra.cachedInputPrice` | `0.01` | `0.01` | matches | [openai-64e9b8ff2ca6](https://developers.openai.com/api/docs/models/gpt-6-luna.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `extra.cacheWritePrice` | `null` | `0.125` | differs | [openai-64e9b8ff2ca6](https://developers.openai.com/api/docs/models/gpt-6-luna.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `inputModalities` | `null` | `["text","image"]` | differs | [openai-64e9b8ff2ca6](https://developers.openai.com/api/docs/models/gpt-6-luna.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `outputModalities` | `null` | `["text"]` | differs | [openai-64e9b8ff2ca6](https://developers.openai.com/api/docs/models/gpt-6-luna.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `supportsReasoning` | `null` | `true` | differs | [openai-64e9b8ff2ca6](https://developers.openai.com/api/docs/models/gpt-6-luna.md)；模型详情显式Reasoning token support。 |
| `extra.reasoning.supportedEfforts` | `["none","low","medium","high","xhigh","max"]` | `["none","low","medium","high","xhigh","max"]` | matches | [openai-64e9b8ff2ca6](https://developers.openai.com/api/docs/models/gpt-6-luna.md)；精确型号页明确effort支持集；API语义，不自动认证订阅账户。 |
| `extra.reasoning.defaultEffort` | `"medium"` | `"medium"` | matches | [openai-64e9b8ff2ca6](https://developers.openai.com/api/docs/models/gpt-6-luna.md)；该精确API型号显式default；未声明时不推导。 |
| `toolCallingApi` | `null` | `{"responses":"supported","chatCompletions":"only reasoning_effort=none"}` | differs | [openai-64e9b8ff2ca6](https://developers.openai.com/api/docs/models/gpt-6-luna.md)；精确API限制，不把Providerrecognized协议等同所有模式适配。 |

剩余缺口：`extra.serverSideWebSearch.searchRequestPriceUsd`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

### `compute/model-specs/openai.json#gpt-6-luna`

- 精确型号：`gpt-6-luna`
- 接入/规格文件：`compute/model-specs/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-6-luna.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `id` | `"gpt-6-luna"` | `"gpt-6-luna"` | matches | [openai-64e9b8ff2ca6](https://developers.openai.com/api/docs/models/gpt-6-luna.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `spec.contextWindow` | `1050000` | `1050000` | matches | [openai-64e9b8ff2ca6](https://developers.openai.com/api/docs/models/gpt-6-luna.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `spec.maxInputTokens` | `null` | `922000` | differs | [openai-64e9b8ff2ca6](https://developers.openai.com/api/docs/models/gpt-6-luna.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `spec.maxOutputTokens` | `128000` | `128000` | matches | [openai-64e9b8ff2ca6](https://developers.openai.com/api/docs/models/gpt-6-luna.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `accessReference.inputPrice` | `null` | `0.1` | not-comparable | [openai-64e9b8ff2ca6](https://developers.openai.com/api/docs/models/gpt-6-luna.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.outputPrice` | `null` | `0.5` | not-comparable | [openai-64e9b8ff2ca6](https://developers.openai.com/api/docs/models/gpt-6-luna.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.extra.cachedInputPrice` | `null` | `0.01` | not-comparable | [openai-64e9b8ff2ca6](https://developers.openai.com/api/docs/models/gpt-6-luna.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.extra.cacheWritePrice` | `null` | `0.125` | not-comparable | [openai-64e9b8ff2ca6](https://developers.openai.com/api/docs/models/gpt-6-luna.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `spec.inputModalities` | `null` | `["text","image"]` | differs | [openai-64e9b8ff2ca6](https://developers.openai.com/api/docs/models/gpt-6-luna.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.outputModalities` | `null` | `["text"]` | differs | [openai-64e9b8ff2ca6](https://developers.openai.com/api/docs/models/gpt-6-luna.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.supportsReasoning` | `true` | `true` | matches | [openai-64e9b8ff2ca6](https://developers.openai.com/api/docs/models/gpt-6-luna.md)；模型详情显式Reasoning token support。 |
| `spec.extra.reasoning.supportedEfforts` | `null` | `["none","low","medium","high","xhigh","max"]` | differs | [openai-64e9b8ff2ca6](https://developers.openai.com/api/docs/models/gpt-6-luna.md)；精确型号页明确effort支持集；API语义，不自动认证订阅账户。 |
| `spec.extra.reasoning.defaultEffort` | `null` | `"medium"` | differs | [openai-64e9b8ff2ca6](https://developers.openai.com/api/docs/models/gpt-6-luna.md)；该精确API型号显式default；未声明时不推导。 |
| `spec.toolCallingApi` | `null` | `{"responses":"supported","chatCompletions":"only reasoning_effort=none"}` | differs | [openai-64e9b8ff2ca6](https://developers.openai.com/api/docs/models/gpt-6-luna.md)；精确API限制，不把Providerrecognized协议等同所有模式适配。 |

剩余缺口：原 inventory 所列缺字段已有候选证据；不代表账号实测或全规格无缺口。

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。

### `compute/providers/openai-codex.json#gpt-6-sol`

- 精确型号：`gpt-6-sol`
- 接入/规格文件：`compute/providers/openai-codex.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-6-sol.md`
- 结论：`official-identity-only`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"gpt-6-sol"` | `"gpt-6-sol"` | not-comparable | [openai-cf90807722ce](https://developers.openai.com/api/docs/models/gpt-6-sol.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 API身份本身不证明订阅账号可用性。 |
| `contextWindow` | `1050000` | `1050000` | not-comparable | [openai-cf90807722ce](https://developers.openai.com/api/docs/models/gpt-6-sol.md)；官网明文整数，输入、输出与总窗口分别记录。 原厂API证据不可直接证明本订阅access有效合同。 |
| `maxInputTokens` | `null` | `922000` | not-comparable | [openai-cf90807722ce](https://developers.openai.com/api/docs/models/gpt-6-sol.md)；官网明文整数，输入、输出与总窗口分别记录。 原厂API证据不可直接证明本订阅access有效合同。 |
| `maxOutputTokens` | `128000` | `128000` | not-comparable | [openai-cf90807722ce](https://developers.openai.com/api/docs/models/gpt-6-sol.md)；官网明文整数，输入、输出与总窗口分别记录。 原厂API证据不可直接证明本订阅access有效合同。 |
| `inputPrice` | `null` | `2.0` | not-comparable | [openai-cf90807722ce](https://developers.openai.com/api/docs/models/gpt-6-sol.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 原厂API证据不可直接证明本订阅access有效合同。 |
| `outputPrice` | `null` | `10.0` | not-comparable | [openai-cf90807722ce](https://developers.openai.com/api/docs/models/gpt-6-sol.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 原厂API证据不可直接证明本订阅access有效合同。 |
| `extra.cachedInputPrice` | `null` | `0.2` | not-comparable | [openai-cf90807722ce](https://developers.openai.com/api/docs/models/gpt-6-sol.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 原厂API证据不可直接证明本订阅access有效合同。 |
| `extra.cacheWritePrice` | `null` | `2.5` | not-comparable | [openai-cf90807722ce](https://developers.openai.com/api/docs/models/gpt-6-sol.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 原厂API证据不可直接证明本订阅access有效合同。 |
| `inputModalities` | `null` | `["text","image"]` | not-comparable | [openai-cf90807722ce](https://developers.openai.com/api/docs/models/gpt-6-sol.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 原厂API证据不可直接证明本订阅access有效合同。 |
| `outputModalities` | `null` | `["text"]` | not-comparable | [openai-cf90807722ce](https://developers.openai.com/api/docs/models/gpt-6-sol.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 原厂API证据不可直接证明本订阅access有效合同。 |
| `supportsReasoning` | `null` | `true` | not-comparable | [openai-cf90807722ce](https://developers.openai.com/api/docs/models/gpt-6-sol.md)；模型详情显式Reasoning token support。 原厂API证据不可直接证明本订阅access有效合同。 |
| `extra.reasoning.supportedEfforts` | `["low","medium","high","xhigh","max"]` | `["none","low","medium","high","xhigh","max"]` | not-comparable | [openai-cf90807722ce](https://developers.openai.com/api/docs/models/gpt-6-sol.md)；精确型号页明确effort支持集；API语义，不自动认证订阅账户。 原厂API证据不可直接证明本订阅access有效合同。 |
| `extra.reasoning.defaultEffort` | `"medium"` | `"medium"` | not-comparable | [openai-cf90807722ce](https://developers.openai.com/api/docs/models/gpt-6-sol.md)；该精确API型号显式default；未声明时不推导。 原厂API证据不可直接证明本订阅access有效合同。 |
| `toolCallingApi` | `null` | `{"responses":"supported","chatCompletions":"only reasoning_effort=none"}` | not-comparable | [openai-cf90807722ce](https://developers.openai.com/api/docs/models/gpt-6-sol.md)；精确API限制，不把Providerrecognized协议等同所有模式适配。 原厂API证据不可直接证明本订阅access有效合同。 |

剩余缺口：`contextWindow`, `extra.reasoning.defaultEffort`, `extra.reasoning.supportedEfforts`, `maxOutputTokens`, `modelName`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- 订阅/套餐实际允许型号、窗口、effort、工具与账号限额需独立官方接入合同；本表API参数只作不可比对照，不提升订阅字段状态。

### `compute/providers/openai.json#gpt-6-sol`

- 精确型号：`gpt-6-sol`
- 接入/规格文件：`compute/providers/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-6-sol.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"gpt-6-sol"` | `"gpt-6-sol"` | matches | [openai-cf90807722ce](https://developers.openai.com/api/docs/models/gpt-6-sol.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `contextWindow` | `1050000` | `1050000` | matches | [openai-cf90807722ce](https://developers.openai.com/api/docs/models/gpt-6-sol.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `maxInputTokens` | `null` | `922000` | differs | [openai-cf90807722ce](https://developers.openai.com/api/docs/models/gpt-6-sol.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `maxOutputTokens` | `128000` | `128000` | matches | [openai-cf90807722ce](https://developers.openai.com/api/docs/models/gpt-6-sol.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `inputPrice` | `2` | `2.0` | matches | [openai-cf90807722ce](https://developers.openai.com/api/docs/models/gpt-6-sol.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `outputPrice` | `10` | `10.0` | matches | [openai-cf90807722ce](https://developers.openai.com/api/docs/models/gpt-6-sol.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `extra.cachedInputPrice` | `0.2` | `0.2` | matches | [openai-cf90807722ce](https://developers.openai.com/api/docs/models/gpt-6-sol.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `extra.cacheWritePrice` | `null` | `2.5` | differs | [openai-cf90807722ce](https://developers.openai.com/api/docs/models/gpt-6-sol.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `inputModalities` | `null` | `["text","image"]` | differs | [openai-cf90807722ce](https://developers.openai.com/api/docs/models/gpt-6-sol.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `outputModalities` | `null` | `["text"]` | differs | [openai-cf90807722ce](https://developers.openai.com/api/docs/models/gpt-6-sol.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `supportsReasoning` | `null` | `true` | differs | [openai-cf90807722ce](https://developers.openai.com/api/docs/models/gpt-6-sol.md)；模型详情显式Reasoning token support。 |
| `extra.reasoning.supportedEfforts` | `["none","low","medium","high","xhigh","max"]` | `["none","low","medium","high","xhigh","max"]` | matches | [openai-cf90807722ce](https://developers.openai.com/api/docs/models/gpt-6-sol.md)；精确型号页明确effort支持集；API语义，不自动认证订阅账户。 |
| `extra.reasoning.defaultEffort` | `"medium"` | `"medium"` | matches | [openai-cf90807722ce](https://developers.openai.com/api/docs/models/gpt-6-sol.md)；该精确API型号显式default；未声明时不推导。 |
| `toolCallingApi` | `null` | `{"responses":"supported","chatCompletions":"only reasoning_effort=none"}` | differs | [openai-cf90807722ce](https://developers.openai.com/api/docs/models/gpt-6-sol.md)；精确API限制，不把Providerrecognized协议等同所有模式适配。 |

剩余缺口：`extra.serverSideWebSearch.searchRequestPriceUsd`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

### `compute/model-specs/openai.json#gpt-6-sol`

- 精确型号：`gpt-6-sol`
- 接入/规格文件：`compute/model-specs/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-6-sol.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `id` | `"gpt-6-sol"` | `"gpt-6-sol"` | matches | [openai-cf90807722ce](https://developers.openai.com/api/docs/models/gpt-6-sol.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `spec.contextWindow` | `1050000` | `1050000` | matches | [openai-cf90807722ce](https://developers.openai.com/api/docs/models/gpt-6-sol.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `spec.maxInputTokens` | `null` | `922000` | differs | [openai-cf90807722ce](https://developers.openai.com/api/docs/models/gpt-6-sol.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `spec.maxOutputTokens` | `128000` | `128000` | matches | [openai-cf90807722ce](https://developers.openai.com/api/docs/models/gpt-6-sol.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `accessReference.inputPrice` | `null` | `2.0` | not-comparable | [openai-cf90807722ce](https://developers.openai.com/api/docs/models/gpt-6-sol.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.outputPrice` | `null` | `10.0` | not-comparable | [openai-cf90807722ce](https://developers.openai.com/api/docs/models/gpt-6-sol.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.extra.cachedInputPrice` | `null` | `0.2` | not-comparable | [openai-cf90807722ce](https://developers.openai.com/api/docs/models/gpt-6-sol.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.extra.cacheWritePrice` | `null` | `2.5` | not-comparable | [openai-cf90807722ce](https://developers.openai.com/api/docs/models/gpt-6-sol.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `spec.inputModalities` | `null` | `["text","image"]` | differs | [openai-cf90807722ce](https://developers.openai.com/api/docs/models/gpt-6-sol.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.outputModalities` | `null` | `["text"]` | differs | [openai-cf90807722ce](https://developers.openai.com/api/docs/models/gpt-6-sol.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.supportsReasoning` | `true` | `true` | matches | [openai-cf90807722ce](https://developers.openai.com/api/docs/models/gpt-6-sol.md)；模型详情显式Reasoning token support。 |
| `spec.extra.reasoning.supportedEfforts` | `null` | `["none","low","medium","high","xhigh","max"]` | differs | [openai-cf90807722ce](https://developers.openai.com/api/docs/models/gpt-6-sol.md)；精确型号页明确effort支持集；API语义，不自动认证订阅账户。 |
| `spec.extra.reasoning.defaultEffort` | `null` | `"medium"` | differs | [openai-cf90807722ce](https://developers.openai.com/api/docs/models/gpt-6-sol.md)；该精确API型号显式default；未声明时不推导。 |
| `spec.toolCallingApi` | `null` | `{"responses":"supported","chatCompletions":"only reasoning_effort=none"}` | differs | [openai-cf90807722ce](https://developers.openai.com/api/docs/models/gpt-6-sol.md)；精确API限制，不把Providerrecognized协议等同所有模式适配。 |

剩余缺口：原 inventory 所列缺字段已有候选证据；不代表账号实测或全规格无缺口。

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。

### `compute/providers/openai-codex.json#gpt-6.1-sol`

- 精确型号：`gpt-6.1-sol`
- 接入/规格文件：`compute/providers/openai-codex.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-6.1-sol.md`
- 结论：`official-identity-only`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"gpt-6.1-sol"` | `"gpt-6.1-sol"` | not-comparable | [openai-5869dfcf1073](https://developers.openai.com/api/docs/models/gpt-6.1-sol.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 API身份本身不证明订阅账号可用性。 |
| `contextWindow` | `1050000` | `1050000` | not-comparable | [openai-5869dfcf1073](https://developers.openai.com/api/docs/models/gpt-6.1-sol.md)；官网明文整数，输入、输出与总窗口分别记录。 原厂API证据不可直接证明本订阅access有效合同。 |
| `maxInputTokens` | `null` | `922000` | not-comparable | [openai-5869dfcf1073](https://developers.openai.com/api/docs/models/gpt-6.1-sol.md)；官网明文整数，输入、输出与总窗口分别记录。 原厂API证据不可直接证明本订阅access有效合同。 |
| `maxOutputTokens` | `128000` | `128000` | not-comparable | [openai-5869dfcf1073](https://developers.openai.com/api/docs/models/gpt-6.1-sol.md)；官网明文整数，输入、输出与总窗口分别记录。 原厂API证据不可直接证明本订阅access有效合同。 |
| `inputPrice` | `null` | `2.0` | not-comparable | [openai-5869dfcf1073](https://developers.openai.com/api/docs/models/gpt-6.1-sol.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 原厂API证据不可直接证明本订阅access有效合同。 |
| `outputPrice` | `null` | `10.0` | not-comparable | [openai-5869dfcf1073](https://developers.openai.com/api/docs/models/gpt-6.1-sol.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 原厂API证据不可直接证明本订阅access有效合同。 |
| `extra.cachedInputPrice` | `null` | `0.1` | not-comparable | [openai-5869dfcf1073](https://developers.openai.com/api/docs/models/gpt-6.1-sol.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 原厂API证据不可直接证明本订阅access有效合同。 |
| `extra.cacheWritePrice` | `null` | `2.5` | not-comparable | [openai-5869dfcf1073](https://developers.openai.com/api/docs/models/gpt-6.1-sol.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 原厂API证据不可直接证明本订阅access有效合同。 |
| `inputModalities` | `null` | `["text","image"]` | not-comparable | [openai-5869dfcf1073](https://developers.openai.com/api/docs/models/gpt-6.1-sol.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 原厂API证据不可直接证明本订阅access有效合同。 |
| `outputModalities` | `null` | `["text"]` | not-comparable | [openai-5869dfcf1073](https://developers.openai.com/api/docs/models/gpt-6.1-sol.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 原厂API证据不可直接证明本订阅access有效合同。 |
| `supportsReasoning` | `null` | `true` | not-comparable | [openai-5869dfcf1073](https://developers.openai.com/api/docs/models/gpt-6.1-sol.md)；模型详情显式Reasoning token support。 原厂API证据不可直接证明本订阅access有效合同。 |
| `extra.reasoning.supportedEfforts` | `["low","medium","high","xhigh","max"]` | `["low","medium","high","xhigh","max"]` | not-comparable | [openai-5869dfcf1073](https://developers.openai.com/api/docs/models/gpt-6.1-sol.md)；精确型号页明确effort支持集；API语义，不自动认证订阅账户。 原厂API证据不可直接证明本订阅access有效合同。 |
| `extra.reasoning.defaultEffort` | `"medium"` | `"medium"` | not-comparable | [openai-5869dfcf1073](https://developers.openai.com/api/docs/models/gpt-6.1-sol.md)；该精确API型号显式default；未声明时不推导。 原厂API证据不可直接证明本订阅access有效合同。 |
| `toolCallingApi` | `null` | `"responses-required"` | not-comparable | [openai-5869dfcf1073](https://developers.openai.com/api/docs/models/gpt-6.1-sol.md)；ChatCompletions无工具；Responses才工具。 原厂API证据不可直接证明本订阅access有效合同。 |

剩余缺口：`extra.reasoning.defaultEffort`, `extra.reasoning.supportedEfforts`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- 订阅/套餐实际允许型号、窗口、effort、工具与账号限额需独立官方接入合同；本表API参数只作不可比对照，不提升订阅字段状态。

### `compute/providers/openai.json#gpt-6.1-sol`

- 精确型号：`gpt-6.1-sol`
- 接入/规格文件：`compute/providers/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-6.1-sol.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"gpt-6.1-sol"` | `"gpt-6.1-sol"` | matches | [openai-5869dfcf1073](https://developers.openai.com/api/docs/models/gpt-6.1-sol.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `contextWindow` | `1050000` | `1050000` | matches | [openai-5869dfcf1073](https://developers.openai.com/api/docs/models/gpt-6.1-sol.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `maxInputTokens` | `null` | `922000` | differs | [openai-5869dfcf1073](https://developers.openai.com/api/docs/models/gpt-6.1-sol.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `maxOutputTokens` | `128000` | `128000` | matches | [openai-5869dfcf1073](https://developers.openai.com/api/docs/models/gpt-6.1-sol.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `inputPrice` | `2` | `2.0` | matches | [openai-5869dfcf1073](https://developers.openai.com/api/docs/models/gpt-6.1-sol.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `outputPrice` | `10` | `10.0` | matches | [openai-5869dfcf1073](https://developers.openai.com/api/docs/models/gpt-6.1-sol.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `extra.cachedInputPrice` | `0.1` | `0.1` | matches | [openai-5869dfcf1073](https://developers.openai.com/api/docs/models/gpt-6.1-sol.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `extra.cacheWritePrice` | `null` | `2.5` | differs | [openai-5869dfcf1073](https://developers.openai.com/api/docs/models/gpt-6.1-sol.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `inputModalities` | `null` | `["text","image"]` | differs | [openai-5869dfcf1073](https://developers.openai.com/api/docs/models/gpt-6.1-sol.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `outputModalities` | `null` | `["text"]` | differs | [openai-5869dfcf1073](https://developers.openai.com/api/docs/models/gpt-6.1-sol.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `supportsReasoning` | `null` | `true` | differs | [openai-5869dfcf1073](https://developers.openai.com/api/docs/models/gpt-6.1-sol.md)；模型详情显式Reasoning token support。 |
| `extra.reasoning.supportedEfforts` | `["low","medium","high","xhigh","max"]` | `["low","medium","high","xhigh","max"]` | matches | [openai-5869dfcf1073](https://developers.openai.com/api/docs/models/gpt-6.1-sol.md)；精确型号页明确effort支持集；API语义，不自动认证订阅账户。 |
| `extra.reasoning.defaultEffort` | `"medium"` | `"medium"` | matches | [openai-5869dfcf1073](https://developers.openai.com/api/docs/models/gpt-6.1-sol.md)；该精确API型号显式default；未声明时不推导。 |
| `toolCallingApi` | `null` | `"responses-required"` | differs | [openai-5869dfcf1073](https://developers.openai.com/api/docs/models/gpt-6.1-sol.md)；ChatCompletions无工具；Responses才工具。 |

剩余缺口：`extra.serverSideWebSearch.searchRequestPriceUsd`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

### `compute/model-specs/openai.json#gpt-6.1-sol`

- 精确型号：`gpt-6.1-sol`
- 接入/规格文件：`compute/model-specs/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-6.1-sol.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `id` | `"gpt-6.1-sol"` | `"gpt-6.1-sol"` | matches | [openai-5869dfcf1073](https://developers.openai.com/api/docs/models/gpt-6.1-sol.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `spec.contextWindow` | `1050000` | `1050000` | matches | [openai-5869dfcf1073](https://developers.openai.com/api/docs/models/gpt-6.1-sol.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `spec.maxInputTokens` | `null` | `922000` | differs | [openai-5869dfcf1073](https://developers.openai.com/api/docs/models/gpt-6.1-sol.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `spec.maxOutputTokens` | `128000` | `128000` | matches | [openai-5869dfcf1073](https://developers.openai.com/api/docs/models/gpt-6.1-sol.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `accessReference.inputPrice` | `null` | `2.0` | not-comparable | [openai-5869dfcf1073](https://developers.openai.com/api/docs/models/gpt-6.1-sol.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.outputPrice` | `null` | `10.0` | not-comparable | [openai-5869dfcf1073](https://developers.openai.com/api/docs/models/gpt-6.1-sol.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.extra.cachedInputPrice` | `null` | `0.1` | not-comparable | [openai-5869dfcf1073](https://developers.openai.com/api/docs/models/gpt-6.1-sol.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.extra.cacheWritePrice` | `null` | `2.5` | not-comparable | [openai-5869dfcf1073](https://developers.openai.com/api/docs/models/gpt-6.1-sol.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `spec.inputModalities` | `null` | `["text","image"]` | differs | [openai-5869dfcf1073](https://developers.openai.com/api/docs/models/gpt-6.1-sol.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.outputModalities` | `null` | `["text"]` | differs | [openai-5869dfcf1073](https://developers.openai.com/api/docs/models/gpt-6.1-sol.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.supportsReasoning` | `true` | `true` | matches | [openai-5869dfcf1073](https://developers.openai.com/api/docs/models/gpt-6.1-sol.md)；模型详情显式Reasoning token support。 |
| `spec.extra.reasoning.supportedEfforts` | `null` | `["low","medium","high","xhigh","max"]` | differs | [openai-5869dfcf1073](https://developers.openai.com/api/docs/models/gpt-6.1-sol.md)；精确型号页明确effort支持集；API语义，不自动认证订阅账户。 |
| `spec.extra.reasoning.defaultEffort` | `null` | `"medium"` | differs | [openai-5869dfcf1073](https://developers.openai.com/api/docs/models/gpt-6.1-sol.md)；该精确API型号显式default；未声明时不推导。 |
| `spec.toolCallingApi` | `null` | `"responses-required"` | differs | [openai-5869dfcf1073](https://developers.openai.com/api/docs/models/gpt-6.1-sol.md)；ChatCompletions无工具；Responses才工具。 |

剩余缺口：原 inventory 所列缺字段已有候选证据；不代表账号实测或全规格无缺口。

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。

### `compute/providers/openai.json#gpt-image-2.5-flare`

- 精确型号：`gpt-image-2.5-flare`
- 接入/规格文件：`compute/providers/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-image-2.5-flare.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"gpt-image-2.5-flare"` | `"gpt-image-2.5-flare"` | matches | [openai-b2db80f89601](https://developers.openai.com/api/docs/models/gpt-image-2.5-flare.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `inputPrice` | `5` | `5.0` | matches | [openai-b2db80f89601](https://developers.openai.com/api/docs/models/gpt-image-2.5-flare.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `extra.cachedInputPrice` | `null` | `1.25` | differs | [openai-b2db80f89601](https://developers.openai.com/api/docs/models/gpt-image-2.5-flare.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `inputModalities` | `null` | `["text","image"]` | differs | [openai-b2db80f89601](https://developers.openai.com/api/docs/models/gpt-image-2.5-flare.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `outputModalities` | `null` | `["image"]` | differs | [openai-b2db80f89601](https://developers.openai.com/api/docs/models/gpt-image-2.5-flare.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |

剩余缺口：`extra.imageCachedInputPrice`, `extra.imageInputPrice`, `extra.textCachedInputPrice`, `outputPrice`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- 图像与文本token报价分开；图像输出USD30/1M image tokens不得写成普通文本outputPrice。未公开的context/output整数继续待核。

### `compute/model-specs/openai.json#gpt-image-2.5-flare`

- 精确型号：`gpt-image-2.5-flare`
- 接入/规格文件：`compute/model-specs/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-image-2.5-flare.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `id` | `"gpt-image-2.5-flare"` | `"gpt-image-2.5-flare"` | matches | [openai-b2db80f89601](https://developers.openai.com/api/docs/models/gpt-image-2.5-flare.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `accessReference.inputPrice` | `null` | `5.0` | not-comparable | [openai-b2db80f89601](https://developers.openai.com/api/docs/models/gpt-image-2.5-flare.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.extra.cachedInputPrice` | `null` | `1.25` | not-comparable | [openai-b2db80f89601](https://developers.openai.com/api/docs/models/gpt-image-2.5-flare.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `spec.inputModalities` | `null` | `["text","image"]` | differs | [openai-b2db80f89601](https://developers.openai.com/api/docs/models/gpt-image-2.5-flare.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.outputModalities` | `null` | `["image"]` | differs | [openai-b2db80f89601](https://developers.openai.com/api/docs/models/gpt-image-2.5-flare.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |

剩余缺口：原 inventory 所列缺字段已有候选证据；不代表账号实测或全规格无缺口。

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。

- 图像与文本token报价分开；图像输出USD30/1M image tokens不得写成普通文本outputPrice。未公开的context/output整数继续待核。

### `compute/providers/openai.json#gpt-image-2.5-sunburst`

- 精确型号：`gpt-image-2.5-sunburst`
- 接入/规格文件：`compute/providers/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-image-2.5-sunburst.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"gpt-image-2.5-sunburst"` | `"gpt-image-2.5-sunburst"` | matches | [openai-fc5c907e0c04](https://developers.openai.com/api/docs/models/gpt-image-2.5-sunburst.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `inputPrice` | `5` | `5.0` | matches | [openai-fc5c907e0c04](https://developers.openai.com/api/docs/models/gpt-image-2.5-sunburst.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `extra.cachedInputPrice` | `null` | `1.25` | differs | [openai-fc5c907e0c04](https://developers.openai.com/api/docs/models/gpt-image-2.5-sunburst.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `inputModalities` | `null` | `["text","image"]` | differs | [openai-fc5c907e0c04](https://developers.openai.com/api/docs/models/gpt-image-2.5-sunburst.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `outputModalities` | `null` | `["image"]` | differs | [openai-fc5c907e0c04](https://developers.openai.com/api/docs/models/gpt-image-2.5-sunburst.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |

剩余缺口：`extra.imageCachedInputPrice`, `extra.imageInputPrice`, `extra.textCachedInputPrice`, `outputPrice`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- 图像与文本token报价分开；图像输出USD30/1M image tokens不得写成普通文本outputPrice。未公开的context/output整数继续待核。

### `compute/model-specs/openai.json#gpt-image-2.5-sunburst`

- 精确型号：`gpt-image-2.5-sunburst`
- 接入/规格文件：`compute/model-specs/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-image-2.5-sunburst.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `id` | `"gpt-image-2.5-sunburst"` | `"gpt-image-2.5-sunburst"` | matches | [openai-fc5c907e0c04](https://developers.openai.com/api/docs/models/gpt-image-2.5-sunburst.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `accessReference.inputPrice` | `null` | `5.0` | not-comparable | [openai-fc5c907e0c04](https://developers.openai.com/api/docs/models/gpt-image-2.5-sunburst.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.extra.cachedInputPrice` | `null` | `1.25` | not-comparable | [openai-fc5c907e0c04](https://developers.openai.com/api/docs/models/gpt-image-2.5-sunburst.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `spec.inputModalities` | `null` | `["text","image"]` | differs | [openai-fc5c907e0c04](https://developers.openai.com/api/docs/models/gpt-image-2.5-sunburst.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.outputModalities` | `null` | `["image"]` | differs | [openai-fc5c907e0c04](https://developers.openai.com/api/docs/models/gpt-image-2.5-sunburst.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |

剩余缺口：原 inventory 所列缺字段已有候选证据；不代表账号实测或全规格无缺口。

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。

- 图像与文本token报价分开；图像输出USD30/1M image tokens不得写成普通文本outputPrice。未公开的context/output整数继续待核。

### `compute/providers/openai.json#gpt-image-2`

- 精确型号：`gpt-image-2`
- 接入/规格文件：`compute/providers/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-image-2.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"gpt-image-2"` | `"gpt-image-2"` | matches | [openai-3ad3be091501](https://developers.openai.com/api/docs/models/gpt-image-2.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `inputModalities` | `null` | `["text","image"]` | differs | [openai-3ad3be091501](https://developers.openai.com/api/docs/models/gpt-image-2.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `outputModalities` | `null` | `["image"]` | differs | [openai-3ad3be091501](https://developers.openai.com/api/docs/models/gpt-image-2.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |

剩余缺口：`extra.imageCachedInputPrice`, `extra.imageInputPrice`, `extra.textCachedInputPrice`, `inputPrice`, `outputPrice`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- 图像与文本token报价分开；图像输出USD30/1M image tokens不得写成普通文本outputPrice。未公开的context/output整数继续待核。

### `compute/model-specs/openai.json#gpt-image-2`

- 精确型号：`gpt-image-2`
- 接入/规格文件：`compute/model-specs/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-image-2.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `id` | `"gpt-image-2"` | `"gpt-image-2"` | matches | [openai-3ad3be091501](https://developers.openai.com/api/docs/models/gpt-image-2.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `spec.inputModalities` | `null` | `["text","image"]` | differs | [openai-3ad3be091501](https://developers.openai.com/api/docs/models/gpt-image-2.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.outputModalities` | `null` | `["image"]` | differs | [openai-3ad3be091501](https://developers.openai.com/api/docs/models/gpt-image-2.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |

剩余缺口：`spec.contextWindow`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- 图像与文本token报价分开；图像输出USD30/1M image tokens不得写成普通文本outputPrice。未公开的context/output整数继续待核。

### `compute/model-specs/openai.json#gpt-oss-120b`

- 精确型号：`gpt-oss-120b`
- 接入/规格文件：`compute/model-specs/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-oss-120b.md`
- 结论：`official-conflict`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `id` | `"gpt-oss-120b"` | `"gpt-oss-120b"` | matches | [openai-94089c5bb5b9](https://developers.openai.com/api/docs/models/gpt-oss-120b.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `spec.contextWindow` | `128000` | `131072` | differs | [openai-94089c5bb5b9](https://developers.openai.com/api/docs/models/gpt-oss-120b.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `spec.maxOutputTokens` | `16384` | `131072` | differs | [openai-94089c5bb5b9](https://developers.openai.com/api/docs/models/gpt-oss-120b.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `spec.inputModalities` | `null` | `["text"]` | differs | [openai-94089c5bb5b9](https://developers.openai.com/api/docs/models/gpt-oss-120b.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.outputModalities` | `null` | `["text"]` | differs | [openai-94089c5bb5b9](https://developers.openai.com/api/docs/models/gpt-oss-120b.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.supportsReasoning` | `null` | `true` | differs | [openai-94089c5bb5b9](https://developers.openai.com/api/docs/models/gpt-oss-120b.md)；模型详情显式Reasoning token support。 |

剩余缺口：原 inventory 所列缺字段已有候选证据；不代表账号实测或全规格无缺口。

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。

### `compute/providers/openai.json#gpt-realtime-2.1-mini`

- 精确型号：`gpt-realtime-2.1-mini`
- 接入/规格文件：`compute/providers/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-realtime-2.1-mini.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"gpt-realtime-2.1-mini"` | `"gpt-realtime-2.1-mini"` | matches | [openai-f68a76695065](https://developers.openai.com/api/docs/models/gpt-realtime-2.1-mini.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `contextWindow` | `128000` | `128000` | matches | [openai-f68a76695065](https://developers.openai.com/api/docs/models/gpt-realtime-2.1-mini.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `maxOutputTokens` | `32000` | `32000` | matches | [openai-f68a76695065](https://developers.openai.com/api/docs/models/gpt-realtime-2.1-mini.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `inputPrice` | `0.6` | `0.6` | matches | [openai-f68a76695065](https://developers.openai.com/api/docs/models/gpt-realtime-2.1-mini.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `outputPrice` | `2.4` | `2.4` | matches | [openai-f68a76695065](https://developers.openai.com/api/docs/models/gpt-realtime-2.1-mini.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `extra.cachedInputPrice` | `null` | `0.06` | differs | [openai-f68a76695065](https://developers.openai.com/api/docs/models/gpt-realtime-2.1-mini.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `inputModalities` | `null` | `["text","audio","image"]` | differs | [openai-f68a76695065](https://developers.openai.com/api/docs/models/gpt-realtime-2.1-mini.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `outputModalities` | `null` | `["text","audio"]` | differs | [openai-f68a76695065](https://developers.openai.com/api/docs/models/gpt-realtime-2.1-mini.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `supportsReasoning` | `null` | `true` | differs | [openai-f68a76695065](https://developers.openai.com/api/docs/models/gpt-realtime-2.1-mini.md)；模型详情显式Reasoning token support。 |

剩余缺口：`extra.audioCachedInputPrice`, `extra.audioInputPrice`, `extra.audioOutputPrice`, `extra.imageCachedInputPrice`, `extra.imageInputPrice`, `extra.textCachedInputPrice`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

### `compute/model-specs/openai.json#gpt-realtime-2.1-mini`

- 精确型号：`gpt-realtime-2.1-mini`
- 接入/规格文件：`compute/model-specs/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-realtime-2.1-mini.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `id` | `"gpt-realtime-2.1-mini"` | `"gpt-realtime-2.1-mini"` | matches | [openai-f68a76695065](https://developers.openai.com/api/docs/models/gpt-realtime-2.1-mini.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `spec.contextWindow` | `128000` | `128000` | matches | [openai-f68a76695065](https://developers.openai.com/api/docs/models/gpt-realtime-2.1-mini.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `spec.maxOutputTokens` | `32000` | `32000` | matches | [openai-f68a76695065](https://developers.openai.com/api/docs/models/gpt-realtime-2.1-mini.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `accessReference.inputPrice` | `null` | `0.6` | not-comparable | [openai-f68a76695065](https://developers.openai.com/api/docs/models/gpt-realtime-2.1-mini.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.outputPrice` | `null` | `2.4` | not-comparable | [openai-f68a76695065](https://developers.openai.com/api/docs/models/gpt-realtime-2.1-mini.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.extra.cachedInputPrice` | `null` | `0.06` | not-comparable | [openai-f68a76695065](https://developers.openai.com/api/docs/models/gpt-realtime-2.1-mini.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `spec.inputModalities` | `null` | `["text","audio","image"]` | differs | [openai-f68a76695065](https://developers.openai.com/api/docs/models/gpt-realtime-2.1-mini.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.outputModalities` | `null` | `["text","audio"]` | differs | [openai-f68a76695065](https://developers.openai.com/api/docs/models/gpt-realtime-2.1-mini.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.supportsReasoning` | `null` | `true` | differs | [openai-f68a76695065](https://developers.openai.com/api/docs/models/gpt-realtime-2.1-mini.md)；模型详情显式Reasoning token support。 |

剩余缺口：原 inventory 所列缺字段已有候选证据；不代表账号实测或全规格无缺口。

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。

### `compute/providers/openai.json#gpt-realtime-2.1`

- 精确型号：`gpt-realtime-2.1`
- 接入/规格文件：`compute/providers/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-realtime-2.1.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"gpt-realtime-2.1"` | `"gpt-realtime-2.1"` | matches | [openai-cb36f33252bd](https://developers.openai.com/api/docs/models/gpt-realtime-2.1.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `contextWindow` | `128000` | `128000` | matches | [openai-cb36f33252bd](https://developers.openai.com/api/docs/models/gpt-realtime-2.1.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `maxOutputTokens` | `32000` | `32000` | matches | [openai-cb36f33252bd](https://developers.openai.com/api/docs/models/gpt-realtime-2.1.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `inputPrice` | `4` | `4.0` | matches | [openai-cb36f33252bd](https://developers.openai.com/api/docs/models/gpt-realtime-2.1.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `outputPrice` | `24` | `24.0` | matches | [openai-cb36f33252bd](https://developers.openai.com/api/docs/models/gpt-realtime-2.1.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `extra.cachedInputPrice` | `null` | `0.4` | differs | [openai-cb36f33252bd](https://developers.openai.com/api/docs/models/gpt-realtime-2.1.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `inputModalities` | `null` | `["text","audio","image"]` | differs | [openai-cb36f33252bd](https://developers.openai.com/api/docs/models/gpt-realtime-2.1.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `outputModalities` | `null` | `["text","audio"]` | differs | [openai-cb36f33252bd](https://developers.openai.com/api/docs/models/gpt-realtime-2.1.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `supportsReasoning` | `null` | `true` | differs | [openai-cb36f33252bd](https://developers.openai.com/api/docs/models/gpt-realtime-2.1.md)；模型详情显式Reasoning token support。 |

剩余缺口：`extra.audioCachedInputPrice`, `extra.audioInputPrice`, `extra.audioOutputPrice`, `extra.imageCachedInputPrice`, `extra.imageInputPrice`, `extra.textCachedInputPrice`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

### `compute/model-specs/openai.json#gpt-realtime-2.1`

- 精确型号：`gpt-realtime-2.1`
- 接入/规格文件：`compute/model-specs/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-realtime-2.1.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `id` | `"gpt-realtime-2.1"` | `"gpt-realtime-2.1"` | matches | [openai-cb36f33252bd](https://developers.openai.com/api/docs/models/gpt-realtime-2.1.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `spec.contextWindow` | `128000` | `128000` | matches | [openai-cb36f33252bd](https://developers.openai.com/api/docs/models/gpt-realtime-2.1.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `spec.maxOutputTokens` | `32000` | `32000` | matches | [openai-cb36f33252bd](https://developers.openai.com/api/docs/models/gpt-realtime-2.1.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `accessReference.inputPrice` | `null` | `4.0` | not-comparable | [openai-cb36f33252bd](https://developers.openai.com/api/docs/models/gpt-realtime-2.1.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.outputPrice` | `null` | `24.0` | not-comparable | [openai-cb36f33252bd](https://developers.openai.com/api/docs/models/gpt-realtime-2.1.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.extra.cachedInputPrice` | `null` | `0.4` | not-comparable | [openai-cb36f33252bd](https://developers.openai.com/api/docs/models/gpt-realtime-2.1.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `spec.inputModalities` | `null` | `["text","audio","image"]` | differs | [openai-cb36f33252bd](https://developers.openai.com/api/docs/models/gpt-realtime-2.1.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.outputModalities` | `null` | `["text","audio"]` | differs | [openai-cb36f33252bd](https://developers.openai.com/api/docs/models/gpt-realtime-2.1.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.supportsReasoning` | `null` | `true` | differs | [openai-cb36f33252bd](https://developers.openai.com/api/docs/models/gpt-realtime-2.1.md)；模型详情显式Reasoning token support。 |

剩余缺口：原 inventory 所列缺字段已有候选证据；不代表账号实测或全规格无缺口。

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。

### `compute/providers/openai.json#gpt-realtime-translate`

- 精确型号：`gpt-realtime-translate`
- 接入/规格文件：`compute/providers/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-realtime-translate.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"gpt-realtime-translate"` | `"gpt-realtime-translate"` | matches | [openai-59f6f29364d1](https://developers.openai.com/api/docs/models/gpt-realtime-translate.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `contextWindow` | `16000` | `16000` | matches | [openai-59f6f29364d1](https://developers.openai.com/api/docs/models/gpt-realtime-translate.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `maxOutputTokens` | `2000` | `2000` | matches | [openai-59f6f29364d1](https://developers.openai.com/api/docs/models/gpt-realtime-translate.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `inputModalities` | `null` | `["audio"]` | differs | [openai-59f6f29364d1](https://developers.openai.com/api/docs/models/gpt-realtime-translate.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `outputModalities` | `null` | `["audio","text"]` | differs | [openai-59f6f29364d1](https://developers.openai.com/api/docs/models/gpt-realtime-translate.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |

剩余缺口：`extra.audioOutputPricePerMinute`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

### `compute/model-specs/openai.json#gpt-realtime-translate`

- 精确型号：`gpt-realtime-translate`
- 接入/规格文件：`compute/model-specs/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-realtime-translate.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `id` | `"gpt-realtime-translate"` | `"gpt-realtime-translate"` | matches | [openai-59f6f29364d1](https://developers.openai.com/api/docs/models/gpt-realtime-translate.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `spec.contextWindow` | `16000` | `16000` | matches | [openai-59f6f29364d1](https://developers.openai.com/api/docs/models/gpt-realtime-translate.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `spec.maxOutputTokens` | `2000` | `2000` | matches | [openai-59f6f29364d1](https://developers.openai.com/api/docs/models/gpt-realtime-translate.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `spec.inputModalities` | `null` | `["audio"]` | differs | [openai-59f6f29364d1](https://developers.openai.com/api/docs/models/gpt-realtime-translate.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.outputModalities` | `null` | `["audio","text"]` | differs | [openai-59f6f29364d1](https://developers.openai.com/api/docs/models/gpt-realtime-translate.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |

剩余缺口：原 inventory 所列缺字段已有候选证据；不代表账号实测或全规格无缺口。

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。

### `compute/providers/openai-codex.json#gpt-reserve`

- 精确型号：`gpt-reserve`
- 接入/规格文件：`compute/providers/openai-codex.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-reserve.md`
- 结论：`still-unresolved`

未取得可用于该记录字段的同范围官方证据；失败链接见上方，不把404、页面壳或接近型号当成认证。

剩余缺口：`contextWindow`, `extra.reasoning.defaultEffort`, `extra.reasoning.supportedEfforts`, `maxOutputTokens`, `modelName`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- 精确 API 模型文档路径返回 HTTP Error 404: Not Found；不能因404认定模型从所有接入面退役。
- 订阅/套餐实际允许型号、窗口、effort、工具与账号限额需独立官方接入合同；本表API参数只作不可比对照，不提升订阅字段状态。

### `compute/model-specs/openai.json#gpt-reserve`

- 精确型号：`gpt-reserve`
- 接入/规格文件：`compute/model-specs/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/gpt-reserve.md`
- 结论：`still-unresolved`

未取得可用于该记录字段的同范围官方证据；失败链接见上方，不把404、页面壳或接近型号当成认证。

剩余缺口：`id`, `spec.contextWindow`, `spec.maxOutputTokens`, `spec.supportsReasoning`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- 精确 API 模型文档路径返回 HTTP Error 404: Not Found；不能因404认定模型从所有接入面退役。

### `compute/providers/openai.json#o3-mini`

- 精确型号：`o3-mini`
- 接入/规格文件：`compute/providers/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/o3-mini.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"o3-mini"` | `"o3-mini"` | matches | [openai-595481ef3736](https://developers.openai.com/api/docs/models/o3-mini.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `contextWindow` | `200000` | `200000` | matches | [openai-595481ef3736](https://developers.openai.com/api/docs/models/o3-mini.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `maxOutputTokens` | `100000` | `100000` | matches | [openai-595481ef3736](https://developers.openai.com/api/docs/models/o3-mini.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `inputPrice` | `1.1` | `1.1` | matches | [openai-595481ef3736](https://developers.openai.com/api/docs/models/o3-mini.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `outputPrice` | `4.4` | `4.4` | matches | [openai-595481ef3736](https://developers.openai.com/api/docs/models/o3-mini.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `extra.cachedInputPrice` | `null` | `0.55` | differs | [openai-595481ef3736](https://developers.openai.com/api/docs/models/o3-mini.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `inputModalities` | `null` | `["text"]` | differs | [openai-595481ef3736](https://developers.openai.com/api/docs/models/o3-mini.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `outputModalities` | `null` | `["text"]` | differs | [openai-595481ef3736](https://developers.openai.com/api/docs/models/o3-mini.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `supportsReasoning` | `null` | `true` | differs | [openai-595481ef3736](https://developers.openai.com/api/docs/models/o3-mini.md)；模型详情显式Reasoning token support。 |

剩余缺口：原 inventory 所列缺字段已有候选证据；不代表账号实测或全规格无缺口。

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。

### `compute/model-specs/openai.json#o3-mini`

- 精确型号：`o3-mini`
- 接入/规格文件：`compute/model-specs/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/o3-mini.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `id` | `"o3-mini"` | `"o3-mini"` | matches | [openai-595481ef3736](https://developers.openai.com/api/docs/models/o3-mini.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `spec.contextWindow` | `200000` | `200000` | matches | [openai-595481ef3736](https://developers.openai.com/api/docs/models/o3-mini.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `spec.maxOutputTokens` | `100000` | `100000` | matches | [openai-595481ef3736](https://developers.openai.com/api/docs/models/o3-mini.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `accessReference.inputPrice` | `null` | `1.1` | not-comparable | [openai-595481ef3736](https://developers.openai.com/api/docs/models/o3-mini.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.outputPrice` | `null` | `4.4` | not-comparable | [openai-595481ef3736](https://developers.openai.com/api/docs/models/o3-mini.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.extra.cachedInputPrice` | `null` | `0.55` | not-comparable | [openai-595481ef3736](https://developers.openai.com/api/docs/models/o3-mini.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `spec.inputModalities` | `null` | `["text"]` | differs | [openai-595481ef3736](https://developers.openai.com/api/docs/models/o3-mini.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.outputModalities` | `null` | `["text"]` | differs | [openai-595481ef3736](https://developers.openai.com/api/docs/models/o3-mini.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.supportsReasoning` | `true` | `true` | matches | [openai-595481ef3736](https://developers.openai.com/api/docs/models/o3-mini.md)；模型详情显式Reasoning token support。 |

剩余缺口：`spec.defaultTemperature`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

### `compute/providers/openai.json#o3-pro`

- 精确型号：`o3-pro`
- 接入/规格文件：`compute/providers/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/o3-pro.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"o3-pro"` | `"o3-pro"` | matches | [openai-a961809560e5](https://developers.openai.com/api/docs/models/o3-pro.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `contextWindow` | `200000` | `200000` | matches | [openai-a961809560e5](https://developers.openai.com/api/docs/models/o3-pro.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `maxOutputTokens` | `100000` | `100000` | matches | [openai-a961809560e5](https://developers.openai.com/api/docs/models/o3-pro.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `inputPrice` | `20` | `20.0` | matches | [openai-a961809560e5](https://developers.openai.com/api/docs/models/o3-pro.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `outputPrice` | `80` | `80.0` | matches | [openai-a961809560e5](https://developers.openai.com/api/docs/models/o3-pro.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `inputModalities` | `null` | `["text","image"]` | differs | [openai-a961809560e5](https://developers.openai.com/api/docs/models/o3-pro.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `outputModalities` | `null` | `["text"]` | differs | [openai-a961809560e5](https://developers.openai.com/api/docs/models/o3-pro.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `supportsReasoning` | `null` | `true` | differs | [openai-a961809560e5](https://developers.openai.com/api/docs/models/o3-pro.md)；模型详情显式Reasoning token support。 |
| `extra.responsesOnly` | `null` | `true` | differs | [openai-a961809560e5](https://developers.openai.com/api/docs/models/o3-pro.md)；精确型号明确Responses API only。 |

剩余缺口：原 inventory 所列缺字段已有候选证据；不代表账号实测或全规格无缺口。

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。

### `compute/model-specs/openai.json#o3-pro`

- 精确型号：`o3-pro`
- 接入/规格文件：`compute/model-specs/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/o3-pro.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `id` | `"o3-pro"` | `"o3-pro"` | matches | [openai-a961809560e5](https://developers.openai.com/api/docs/models/o3-pro.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `spec.contextWindow` | `200000` | `200000` | matches | [openai-a961809560e5](https://developers.openai.com/api/docs/models/o3-pro.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `spec.maxOutputTokens` | `100000` | `100000` | matches | [openai-a961809560e5](https://developers.openai.com/api/docs/models/o3-pro.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `accessReference.inputPrice` | `null` | `20.0` | not-comparable | [openai-a961809560e5](https://developers.openai.com/api/docs/models/o3-pro.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.outputPrice` | `null` | `80.0` | not-comparable | [openai-a961809560e5](https://developers.openai.com/api/docs/models/o3-pro.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `spec.inputModalities` | `null` | `["text","image"]` | differs | [openai-a961809560e5](https://developers.openai.com/api/docs/models/o3-pro.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.outputModalities` | `null` | `["text"]` | differs | [openai-a961809560e5](https://developers.openai.com/api/docs/models/o3-pro.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.supportsReasoning` | `true` | `true` | matches | [openai-a961809560e5](https://developers.openai.com/api/docs/models/o3-pro.md)；模型详情显式Reasoning token support。 |
| `spec.extra.responsesOnly` | `null` | `true` | differs | [openai-a961809560e5](https://developers.openai.com/api/docs/models/o3-pro.md)；精确型号明确Responses API only。 |

剩余缺口：`spec.defaultTemperature`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

### `compute/providers/openai.json#o3`

- 精确型号：`o3`
- 接入/规格文件：`compute/providers/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/o3.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"o3"` | `"o3"` | matches | [openai-ebd9859f5024](https://developers.openai.com/api/docs/models/o3.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `contextWindow` | `200000` | `200000` | matches | [openai-ebd9859f5024](https://developers.openai.com/api/docs/models/o3.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `maxOutputTokens` | `100000` | `100000` | matches | [openai-ebd9859f5024](https://developers.openai.com/api/docs/models/o3.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `inputPrice` | `2` | `2.0` | matches | [openai-ebd9859f5024](https://developers.openai.com/api/docs/models/o3.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `outputPrice` | `8` | `8.0` | matches | [openai-ebd9859f5024](https://developers.openai.com/api/docs/models/o3.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `extra.cachedInputPrice` | `null` | `0.5` | differs | [openai-ebd9859f5024](https://developers.openai.com/api/docs/models/o3.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `inputModalities` | `null` | `["text","image"]` | differs | [openai-ebd9859f5024](https://developers.openai.com/api/docs/models/o3.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `outputModalities` | `null` | `["text"]` | differs | [openai-ebd9859f5024](https://developers.openai.com/api/docs/models/o3.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `supportsReasoning` | `null` | `true` | differs | [openai-ebd9859f5024](https://developers.openai.com/api/docs/models/o3.md)；模型详情显式Reasoning token support。 |

剩余缺口：原 inventory 所列缺字段已有候选证据；不代表账号实测或全规格无缺口。

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。

### `compute/model-specs/openai.json#o3`

- 精确型号：`o3`
- 接入/规格文件：`compute/model-specs/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/o3.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `id` | `"o3"` | `"o3"` | matches | [openai-ebd9859f5024](https://developers.openai.com/api/docs/models/o3.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `spec.contextWindow` | `200000` | `200000` | matches | [openai-ebd9859f5024](https://developers.openai.com/api/docs/models/o3.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `spec.maxOutputTokens` | `100000` | `100000` | matches | [openai-ebd9859f5024](https://developers.openai.com/api/docs/models/o3.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `accessReference.inputPrice` | `null` | `2.0` | not-comparable | [openai-ebd9859f5024](https://developers.openai.com/api/docs/models/o3.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.outputPrice` | `null` | `8.0` | not-comparable | [openai-ebd9859f5024](https://developers.openai.com/api/docs/models/o3.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.extra.cachedInputPrice` | `null` | `0.5` | not-comparable | [openai-ebd9859f5024](https://developers.openai.com/api/docs/models/o3.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `spec.inputModalities` | `null` | `["text","image"]` | differs | [openai-ebd9859f5024](https://developers.openai.com/api/docs/models/o3.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.outputModalities` | `null` | `["text"]` | differs | [openai-ebd9859f5024](https://developers.openai.com/api/docs/models/o3.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.supportsReasoning` | `true` | `true` | matches | [openai-ebd9859f5024](https://developers.openai.com/api/docs/models/o3.md)；模型详情显式Reasoning token support。 |

剩余缺口：`spec.defaultTemperature`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

### `compute/providers/openai.json#o4-mini`

- 精确型号：`o4-mini`
- 接入/规格文件：`compute/providers/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/o4-mini.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"o4-mini"` | `"o4-mini"` | matches | [openai-e106ec329232](https://developers.openai.com/api/docs/models/o4-mini.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `contextWindow` | `200000` | `200000` | matches | [openai-e106ec329232](https://developers.openai.com/api/docs/models/o4-mini.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `maxOutputTokens` | `100000` | `100000` | matches | [openai-e106ec329232](https://developers.openai.com/api/docs/models/o4-mini.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `inputPrice` | `1.1` | `1.1` | matches | [openai-e106ec329232](https://developers.openai.com/api/docs/models/o4-mini.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `outputPrice` | `4.4` | `4.4` | matches | [openai-e106ec329232](https://developers.openai.com/api/docs/models/o4-mini.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `extra.cachedInputPrice` | `null` | `0.275` | differs | [openai-e106ec329232](https://developers.openai.com/api/docs/models/o4-mini.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 |
| `inputModalities` | `null` | `["text","image"]` | differs | [openai-e106ec329232](https://developers.openai.com/api/docs/models/o4-mini.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `outputModalities` | `null` | `["text"]` | differs | [openai-e106ec329232](https://developers.openai.com/api/docs/models/o4-mini.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `supportsReasoning` | `null` | `true` | differs | [openai-e106ec329232](https://developers.openai.com/api/docs/models/o4-mini.md)；模型详情显式Reasoning token support。 |

剩余缺口：`extra.serverSideWebSearch.searchRequestPriceUsd`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

### `compute/model-specs/openai.json#o4-mini`

- 精确型号：`o4-mini`
- 接入/规格文件：`compute/model-specs/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/o4-mini.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `id` | `"o4-mini"` | `"o4-mini"` | matches | [openai-e106ec329232](https://developers.openai.com/api/docs/models/o4-mini.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `spec.contextWindow` | `200000` | `200000` | matches | [openai-e106ec329232](https://developers.openai.com/api/docs/models/o4-mini.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `spec.maxOutputTokens` | `100000` | `100000` | matches | [openai-e106ec329232](https://developers.openai.com/api/docs/models/o4-mini.md)；官网明文整数，输入、输出与总窗口分别记录。 |
| `accessReference.inputPrice` | `null` | `1.1` | not-comparable | [openai-e106ec329232](https://developers.openai.com/api/docs/models/o4-mini.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.outputPrice` | `null` | `4.4` | not-comparable | [openai-e106ec329232](https://developers.openai.com/api/docs/models/o4-mini.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `accessReference.extra.cachedInputPrice` | `null` | `0.275` | not-comparable | [openai-e106ec329232](https://developers.openai.com/api/docs/models/o4-mini.md)；标准 API 文本 USD / 1M tokens；长上下文、Fast、Batch、地域费率另算，不代表订阅价格。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `spec.inputModalities` | `null` | `["text","image"]` | differs | [openai-e106ec329232](https://developers.openai.com/api/docs/models/o4-mini.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.outputModalities` | `null` | `["text"]` | differs | [openai-e106ec329232](https://developers.openai.com/api/docs/models/o4-mini.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.supportsReasoning` | `true` | `true` | matches | [openai-e106ec329232](https://developers.openai.com/api/docs/models/o4-mini.md)；模型详情显式Reasoning token support。 |

剩余缺口：`spec.defaultTemperature`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

### `compute/providers/openai.json#text-embedding-3-large`

- 精确型号：`text-embedding-3-large`
- 接入/规格文件：`compute/providers/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/text-embedding-3-large.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"text-embedding-3-large"` | `"text-embedding-3-large"` | matches | [openai-b019cd28185b](https://developers.openai.com/api/docs/models/text-embedding-3-large.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `inputPrice` | `0.13` | `0.13` | matches | [openai-b019cd28185b](https://developers.openai.com/api/docs/models/text-embedding-3-large.md)；embedding 输入 USD / 1M tokens，非chat输入输出报价。 |
| `maxInputTokens` | `null` | `8192` | differs | [openai-7b240f36f35b](https://developers.openai.com/api/docs/guides/embeddings.md)；每条 embedding 输入最大8192 tokens，批量输入不得套Chat总上下文。 |
| `extra.embeddingDimensions` | `null` | `3072` | differs | [openai-7b240f36f35b](https://developers.openai.com/api/docs/guides/embeddings.md)；原厂默认维度，可通过dimensions缩短；接入兼容参数另核。 |
| `inputModalities` | `null` | `["text"]` | differs | [openai-b019cd28185b](https://developers.openai.com/api/docs/models/text-embedding-3-large.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `outputModalities` | `null` | `["text"]` | differs | [openai-b019cd28185b](https://developers.openai.com/api/docs/models/text-embedding-3-large.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |

剩余缺口：`contextWindow`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

### `compute/model-specs/openai.json#text-embedding-3-large`

- 精确型号：`text-embedding-3-large`
- 接入/规格文件：`compute/model-specs/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/text-embedding-3-large.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `id` | `"text-embedding-3-large"` | `"text-embedding-3-large"` | matches | [openai-b019cd28185b](https://developers.openai.com/api/docs/models/text-embedding-3-large.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `accessReference.inputPrice` | `null` | `0.13` | not-comparable | [openai-b019cd28185b](https://developers.openai.com/api/docs/models/text-embedding-3-large.md)；embedding 输入 USD / 1M tokens，非chat输入输出报价。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `spec.maxInputTokens` | `null` | `8192` | differs | [openai-7b240f36f35b](https://developers.openai.com/api/docs/guides/embeddings.md)；每条 embedding 输入最大8192 tokens，批量输入不得套Chat总上下文。 |
| `spec.extra.embeddingDimensions` | `null` | `3072` | differs | [openai-7b240f36f35b](https://developers.openai.com/api/docs/guides/embeddings.md)；原厂默认维度，可通过dimensions缩短；接入兼容参数另核。 |
| `spec.inputModalities` | `null` | `["text"]` | differs | [openai-b019cd28185b](https://developers.openai.com/api/docs/models/text-embedding-3-large.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.outputModalities` | `null` | `["text"]` | differs | [openai-b019cd28185b](https://developers.openai.com/api/docs/models/text-embedding-3-large.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |

剩余缺口：`spec.contextWindow`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

### `compute/providers/openai.json#text-embedding-3-small`

- 精确型号：`text-embedding-3-small`
- 接入/规格文件：`compute/providers/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/text-embedding-3-small.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"text-embedding-3-small"` | `"text-embedding-3-small"` | matches | [openai-37651a33130d](https://developers.openai.com/api/docs/models/text-embedding-3-small.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `inputPrice` | `0.02` | `0.02` | matches | [openai-37651a33130d](https://developers.openai.com/api/docs/models/text-embedding-3-small.md)；embedding 输入 USD / 1M tokens，非chat输入输出报价。 |
| `maxInputTokens` | `null` | `8192` | differs | [openai-7b240f36f35b](https://developers.openai.com/api/docs/guides/embeddings.md)；每条 embedding 输入最大8192 tokens，批量输入不得套Chat总上下文。 |
| `extra.embeddingDimensions` | `null` | `1536` | differs | [openai-7b240f36f35b](https://developers.openai.com/api/docs/guides/embeddings.md)；原厂默认维度，可通过dimensions缩短；接入兼容参数另核。 |
| `inputModalities` | `null` | `["text"]` | differs | [openai-37651a33130d](https://developers.openai.com/api/docs/models/text-embedding-3-small.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `outputModalities` | `null` | `["text"]` | differs | [openai-37651a33130d](https://developers.openai.com/api/docs/models/text-embedding-3-small.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |

剩余缺口：`contextWindow`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

### `compute/model-specs/openai.json#text-embedding-3-small`

- 精确型号：`text-embedding-3-small`
- 接入/规格文件：`compute/model-specs/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/text-embedding-3-small.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `id` | `"text-embedding-3-small"` | `"text-embedding-3-small"` | matches | [openai-37651a33130d](https://developers.openai.com/api/docs/models/text-embedding-3-small.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `accessReference.inputPrice` | `null` | `0.02` | not-comparable | [openai-37651a33130d](https://developers.openai.com/api/docs/models/text-embedding-3-small.md)；embedding 输入 USD / 1M tokens，非chat输入输出报价。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `spec.maxInputTokens` | `null` | `8192` | differs | [openai-7b240f36f35b](https://developers.openai.com/api/docs/guides/embeddings.md)；每条 embedding 输入最大8192 tokens，批量输入不得套Chat总上下文。 |
| `spec.extra.embeddingDimensions` | `null` | `1536` | differs | [openai-7b240f36f35b](https://developers.openai.com/api/docs/guides/embeddings.md)；原厂默认维度，可通过dimensions缩短；接入兼容参数另核。 |
| `spec.inputModalities` | `null` | `["text"]` | differs | [openai-37651a33130d](https://developers.openai.com/api/docs/models/text-embedding-3-small.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.outputModalities` | `null` | `["text"]` | differs | [openai-37651a33130d](https://developers.openai.com/api/docs/models/text-embedding-3-small.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |

剩余缺口：`spec.contextWindow`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

### `compute/providers/openai.json#tts-1-hd`

- 精确型号：`tts-1-hd`
- 接入/规格文件：`compute/providers/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/tts-1-hd.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"tts-1-hd"` | `"tts-1-hd"` | matches | [openai-5828b97f2f75](https://developers.openai.com/api/docs/models/tts-1-hd.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `extra.pricePerMillionChars` | `null` | `30.0` | differs | [openai-5828b97f2f75](https://developers.openai.com/api/docs/models/tts-1-hd.md)；USD / 1M characters；不可转成每百万tokens。 |
| `inputModalities` | `null` | `["text"]` | differs | [openai-5828b97f2f75](https://developers.openai.com/api/docs/models/tts-1-hd.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `outputModalities` | `null` | `["audio"]` | differs | [openai-5828b97f2f75](https://developers.openai.com/api/docs/models/tts-1-hd.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `apiLifecycle` | `null` | `{"deprecated":true,"shutdownDate":"2027-01-06"}` | differs | [openai-8a484ebecbb1](https://developers.openai.com/api/docs/deprecations.md)；官网API deprecations表；核查日在未来的日期只是预告，不立即停用。 |

剩余缺口：`inputPrice`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- API官方停服日期 2027-01-06；未来日期不等于已退役，专用capacity合同另核。

### `compute/model-specs/openai.json#tts-1-hd`

- 精确型号：`tts-1-hd`
- 接入/规格文件：`compute/model-specs/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/tts-1-hd.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `id` | `"tts-1-hd"` | `"tts-1-hd"` | matches | [openai-5828b97f2f75](https://developers.openai.com/api/docs/models/tts-1-hd.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `spec.extra.pricePerMillionChars` | `null` | `30.0` | differs | [openai-5828b97f2f75](https://developers.openai.com/api/docs/models/tts-1-hd.md)；USD / 1M characters；不可转成每百万tokens。 |
| `spec.inputModalities` | `null` | `["text"]` | differs | [openai-5828b97f2f75](https://developers.openai.com/api/docs/models/tts-1-hd.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.outputModalities` | `null` | `["audio"]` | differs | [openai-5828b97f2f75](https://developers.openai.com/api/docs/models/tts-1-hd.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.apiLifecycle` | `null` | `{"deprecated":true,"shutdownDate":"2027-01-06"}` | differs | [openai-8a484ebecbb1](https://developers.openai.com/api/docs/deprecations.md)；官网API deprecations表；核查日在未来的日期只是预告，不立即停用。 |

剩余缺口：原 inventory 所列缺字段已有候选证据；不代表账号实测或全规格无缺口。

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。

- API官方停服日期 2027-01-06；未来日期不等于已退役，专用capacity合同另核。

### `compute/providers/openai.json#tts-1`

- 精确型号：`tts-1`
- 接入/规格文件：`compute/providers/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/tts-1.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"tts-1"` | `"tts-1"` | matches | [openai-272ab0c0bb4a](https://developers.openai.com/api/docs/models/tts-1.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `extra.pricePerMillionChars` | `null` | `15.0` | differs | [openai-272ab0c0bb4a](https://developers.openai.com/api/docs/models/tts-1.md)；USD / 1M characters；不可转成每百万tokens。 |
| `inputModalities` | `null` | `["text"]` | differs | [openai-272ab0c0bb4a](https://developers.openai.com/api/docs/models/tts-1.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `outputModalities` | `null` | `["audio"]` | differs | [openai-272ab0c0bb4a](https://developers.openai.com/api/docs/models/tts-1.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `apiLifecycle` | `null` | `{"deprecated":true,"shutdownDate":"2027-01-06"}` | differs | [openai-8a484ebecbb1](https://developers.openai.com/api/docs/deprecations.md)；官网API deprecations表；核查日在未来的日期只是预告，不立即停用。 |

剩余缺口：`inputPrice`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- API官方停服日期 2027-01-06；未来日期不等于已退役，专用capacity合同另核。

### `compute/model-specs/openai.json#tts-1`

- 精确型号：`tts-1`
- 接入/规格文件：`compute/model-specs/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/tts-1.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `id` | `"tts-1"` | `"tts-1"` | matches | [openai-272ab0c0bb4a](https://developers.openai.com/api/docs/models/tts-1.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `spec.extra.pricePerMillionChars` | `null` | `15.0` | differs | [openai-272ab0c0bb4a](https://developers.openai.com/api/docs/models/tts-1.md)；USD / 1M characters；不可转成每百万tokens。 |
| `spec.inputModalities` | `null` | `["text"]` | differs | [openai-272ab0c0bb4a](https://developers.openai.com/api/docs/models/tts-1.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.outputModalities` | `null` | `["audio"]` | differs | [openai-272ab0c0bb4a](https://developers.openai.com/api/docs/models/tts-1.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.apiLifecycle` | `null` | `{"deprecated":true,"shutdownDate":"2027-01-06"}` | differs | [openai-8a484ebecbb1](https://developers.openai.com/api/docs/deprecations.md)；官网API deprecations表；核查日在未来的日期只是预告，不立即停用。 |

剩余缺口：原 inventory 所列缺字段已有候选证据；不代表账号实测或全规格无缺口。

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。

- API官方停服日期 2027-01-06；未来日期不等于已退役，专用capacity合同另核。

### `compute/providers/openai.json#whisper-1`

- 精确型号：`whisper-1`
- 接入/规格文件：`compute/providers/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/whisper-1.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"whisper-1"` | `"whisper-1"` | matches | [openai-c980197d3ede](https://developers.openai.com/api/docs/models/whisper-1.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `extra.pricePerMinute` | `null` | `0.006` | differs | [openai-c980197d3ede](https://developers.openai.com/api/docs/models/whisper-1.md)；USD / 音频分钟。 |
| `inputModalities` | `null` | `["audio"]` | differs | [openai-c980197d3ede](https://developers.openai.com/api/docs/models/whisper-1.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `outputModalities` | `null` | `["text"]` | differs | [openai-c980197d3ede](https://developers.openai.com/api/docs/models/whisper-1.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `apiLifecycle` | `null` | `{"deprecated":true,"shutdownDate":"2027-02-26"}` | differs | [openai-8a484ebecbb1](https://developers.openai.com/api/docs/deprecations.md)；官网API deprecations表；核查日在未来的日期只是预告，不立即停用。 |

剩余缺口：`inputPrice`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- API官方停服日期 2027-02-26；未来日期不等于已退役，专用capacity合同另核。

### `compute/model-specs/openai.json#whisper-1`

- 精确型号：`whisper-1`
- 接入/规格文件：`compute/model-specs/openai.json`
- 原来源记录：`docs/model-sources/providers/openai/models/whisper-1.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `id` | `"whisper-1"` | `"whisper-1"` | matches | [openai-c980197d3ede](https://developers.openai.com/api/docs/models/whisper-1.md)；官网精确 Model ID；共享规格内部ID可与wire ID不同。 |
| `spec.extra.pricePerMinute` | `null` | `0.006` | differs | [openai-c980197d3ede](https://developers.openai.com/api/docs/models/whisper-1.md)；USD / 音频分钟。 |
| `spec.inputModalities` | `null` | `["audio"]` | differs | [openai-c980197d3ede](https://developers.openai.com/api/docs/models/whisper-1.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.outputModalities` | `null` | `["text"]` | differs | [openai-c980197d3ede](https://developers.openai.com/api/docs/models/whisper-1.md)；模型原生模态；托管工具生成图片不等于该模型原生图片输出。 |
| `spec.apiLifecycle` | `null` | `{"deprecated":true,"shutdownDate":"2027-02-26"}` | differs | [openai-8a484ebecbb1](https://developers.openai.com/api/docs/deprecations.md)；官网API deprecations表；核查日在未来的日期只是预告，不立即停用。 |

剩余缺口：原 inventory 所列缺字段已有候选证据；不代表账号实测或全规格无缺口。

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。

- API官方停服日期 2027-02-26；未来日期不等于已退役，专用capacity合同另核。

### `compute/providers/local-whisper.json#whisper-large-v3`

- 精确型号：`whisper-large-v3`
- 接入/规格文件：`compute/providers/local-whisper.json`
- 原来源记录：`docs/model-sources/providers/openai/models/whisper-large-v3.md`
- 结论：`official-identity-only`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `localWeightIdentity` | `null` | `"large-v3"` | not-comparable | [openai-a8230f818291](https://raw.githubusercontent.com/openai/whisper/main/README.md)；官方开源Whisper权重标识；不证明OpenAI托管API ID whisper-large-v3。 |

剩余缺口：`modelName`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- 精确 API 模型文档路径返回 HTTP Error 404: Not Found；不能因404认定模型从所有接入面退役。
