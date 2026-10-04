# stability 来源重新核查

核查日期：2026-10-04。覆盖 inventory 中 3 条精确记录。此文是临时候选复核，不修改既有来源状态、数据或 manifest。

HTTP原始读取有JS页面壳，已用真实浏览器读取渲染API和pricing。展示产品名与wire model枚举不同，图片、音频合同分别记录；未绕过HF登录门槛。

## 本次实际读取与失败尝试

### stability-60d00034055d

- 初始链接：[https://stability.ai/news-updates](https://stability.ai/news-updates)
- 最终链接：[https://stability.ai/news-updates](https://stability.ai/news-updates)
- 发布者/类型/读取：Stability AI / official-docs / readable
- 适用范围：该官网文档明确列出的模型/API；不扩展到其他接入面。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### stability-d4656e52aa54

- 初始链接：[https://platform.stability.ai/pricing](https://platform.stability.ai/pricing)
- 最终链接：[https://platform.stability.ai/pricing](https://platform.stability.ai/pricing)
- 发布者/类型/读取：Stability AI / official-platform / readable
- 适用范围：该平台成功generation计费；模型别名与工具适配另核。
- 结果：实际浏览器读取：1creditUSD0.01，SD3.5large6.5credits，StableAudio3.026credits。

### stability-a840d66caddd

- 初始链接：[https://platform.stability.ai/docs/api-reference](https://platform.stability.ai/docs/api-reference)
- 最终链接：[https://platform.stability.ai/docs/api-reference](https://platform.stability.ai/docs/api-reference)
- 发布者/类型/读取：Stability AI / official-docs / blocked
- 适用范围：该官网文档明确列出的模型/API；不扩展到其他接入面。
- 结果：HTTP返回JavaScript页面壳，未提供模型正文；随后使用浏览器渲染读取，见独立浏览器来源。

### stability-2ca29ecf5c94

- 初始链接：[https://huggingface.co/stabilityai/stable-diffusion-3.5-large/raw/main/README.md](https://huggingface.co/stabilityai/stable-diffusion-3.5-large/raw/main/README.md)
- 最终链接：[https://huggingface.co/stabilityai/stable-diffusion-3.5-large/raw/main/README.md](https://huggingface.co/stabilityai/stable-diffusion-3.5-large/raw/main/README.md)
- 发布者/类型/读取：Stability AI / official-model-card / blocked
- 适用范围：该官网文档明确列出的模型/API；不扩展到其他接入面。
- 结果：HTTP Error 401: Unauthorized

### stability-6e084c8f9e0e

- 初始链接：[https://platform.stability.ai/docs/api-reference#tag/Generate/paths/~1v2beta~1stable-image~1generate~1sd3/post](https://platform.stability.ai/docs/api-reference#tag/Generate/paths/~1v2beta~1stable-image~1generate~1sd3/post)
- 最终链接：[https://platform.stability.ai/docs/api-reference#tag/Generate/paths/~1v2beta~1stable-image~1generate~1sd3/post](https://platform.stability.ai/docs/api-reference#tag/Generate/paths/~1v2beta~1stable-image~1generate~1sd3/post)
- 发布者/类型/读取：Stability AI / official-docs / readable
- 适用范围：Stability原生v2beta multipart接口；不证明OpenAI协议适配。
- 结果：Edge浏览器实际读取渲染API正文：sd3.5-large、styles枚举、audio model stable-audio-3、duration1..380、26credits。HTTP原始请求仅页面壳已另记。

## 逐记录复核

### `compute/model-specs/stability.json#stable-audio-3.0`

- 精确型号：`stable-audio-3.0`
- 接入/规格文件：`compute/model-specs/stability.json`
- 原来源记录：`docs/model-sources/providers/stability/models/stable-audio-3.0.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `id` | `"stable-audio-3.0"` | `"stable-audio-3"` | not-comparable | [stability-6e084c8f9e0e](https://platform.stability.ai/docs/api-reference#tag/Generate/paths/~1v2beta~1stable-image~1generate~1sd3/post)；产品展示名称与原生请求model枚举不同，需显式wirealias不能直接发送配置展示ID。 本仓spec内部ID非必然wireID，请核match.exact。 |
| `accessReference.generationPriceUsd` | `null` | `0.26` | not-comparable | [stability-d4656e52aa54](https://platform.stability.ai/pricing)；6.5/26credits×USD0.01，按成功生成，不是tokens/秒。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `spec.audioDurationSeconds` | `null` | `{"min":1,"max":380,"default":190}` | differs | [stability-6e084c8f9e0e](https://platform.stability.ai/docs/api-reference#tag/Generate/paths/~1v2beta~1stable-image~1generate~1sd3/post)；API参数明确1..380；概述写up to six minutes近似，与380精确参数有文案差异，采取参数值作为候选。 |

剩余缺口：`id`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- 原生audio异步HTTP202→GET /v2beta/audio/results/{id}，不是现有Stability图像协议；需要专用adapter。

### `compute/providers/stability.json#stable-diffusion-3.5-large`

- 精确型号：`stable-diffusion-3.5-large`
- 接入/规格文件：`compute/providers/stability.json`
- 原来源记录：`docs/model-sources/providers/stability/models/stable-diffusion-3.5-large.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `modelName` | `"stable-diffusion-3.5-large"` | `"sd3.5-large"` | not-comparable | [stability-6e084c8f9e0e](https://platform.stability.ai/docs/api-reference#tag/Generate/paths/~1v2beta~1stable-image~1generate~1sd3/post)；产品展示名称与原生请求model枚举不同，需显式wirealias不能直接发送配置展示ID。 |
| `generationPriceUsd` | `null` | `0.065` | differs | [stability-d4656e52aa54](https://platform.stability.ai/pricing)；6.5/26credits×USD0.01，按成功生成，不是tokens/秒。 |
| `extra.supportedStyles` | `["photographic","digital-art","anime","comic-book"]` | `["photographic","digital-art","anime","comic-book"]` | matches | [stability-6e084c8f9e0e](https://platform.stability.ai/docs/api-reference#tag/Generate/paths/~1v2beta~1stable-image~1generate~1sd3/post)；本仓四项均在官方style_preset枚举内，是支持项子集。 |

剩余缺口：`modelName`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- 官方使用aspect_ratio枚举、约1MP生成；不能直接证明本仓每个supportedImageSizes精确像素组合。HF card未登录401并未绕过。

### `compute/model-specs/stability.json#stable-diffusion-3.5-large`

- 精确型号：`stable-diffusion-3.5-large`
- 接入/规格文件：`compute/model-specs/stability.json`
- 原来源记录：`docs/model-sources/providers/stability/models/stable-diffusion-3.5-large.md`
- 结论：`official-fields-found`

| 字段 | 本仓当前值 | 官方支持值/候选 | 判定 | 来源与适用解释 |
| --- | --- | --- | --- | --- |
| `id` | `"stable-diffusion-3.5-large"` | `"sd3.5-large"` | not-comparable | [stability-6e084c8f9e0e](https://platform.stability.ai/docs/api-reference#tag/Generate/paths/~1v2beta~1stable-image~1generate~1sd3/post)；产品展示名称与原生请求model枚举不同，需显式wirealias不能直接发送配置展示ID。 本仓spec内部ID非必然wireID，请核match.exact。 |
| `accessReference.generationPriceUsd` | `null` | `0.065` | not-comparable | [stability-d4656e52aa54](https://platform.stability.ai/pricing)；6.5/26credits×USD0.01，按成功生成，不是tokens/秒。 仅原厂接入计价参考，共享ModelSpec禁止写入价格。 |
| `spec.extra.supportedStyles` | `null` | `["photographic","digital-art","anime","comic-book"]` | differs | [stability-6e084c8f9e0e](https://platform.stability.ai/docs/api-reference#tag/Generate/paths/~1v2beta~1stable-image~1generate~1sd3/post)；本仓四项均在官方style_preset枚举内，是支持项子集。 |

剩余缺口：`id`

下一步：逐字段审查上表候选；只有同一接入合同且语义/单位一致的证据才用于后续canonical更新。 剩余字段需精确型号页/官方API schema或已授权账号目录核查，不推导默认值。

- 官方使用aspect_ratio枚举、约1MP生成；不能直接证明本仓每个supportedImageSizes精确像素组合。HF card未登录401并未绕过。
