# 需要客户端或账号验收的数据任务

[维护计划](PLAN.md) · [执行结果](RESULTS.md)

本轮只修改 config-center。以下事项不因单模型官网字段已核或本仓校验通过而视为客户端已实现。

## 原生协议接入

| 原厂/型号 | 本仓状态 | 实施步骤与验收条件 |
| --- | --- | --- |
| Google：gemini-3.8-flash-tts、gemini-3.8-flash-lite-tts | 原生语音型号仅共享规格 | 核音频响应和输入/输出独立预算；实现原生请求、音频解码、流式与声音参数；固定 fixture 后用授权账号验证，再设置已支持的客户端版本门槛并增加 Provider |
| Google：gemini-3.8-live、gemini-3.8-live-extended-thinking | 原生 Live 规格 | 核 WebSocket 会话、身份验证、实时输入/输出和中断；验证流式事件、断线重连及工具事件；不能放入普通 Chat Completions Provider |
| Google：gemini-3.5-transcribe、gemini-3.5-transcribe-live | 转写规格 | 实现文件/流式转写、语言检测、时间戳、说话人字段与错误处理；验收音频时长/格式/费用，不把它们当普通文本 Chat |
| MiniMax：MiniMax-H3、MiniMax-H3-Max | 视频 V2 共享规格 | 核 submit/query 原生任务、参数约束、时长/分辨率与下载结果；完成异步轮询和计费后单独接入，不通过 Anthropic Messages |
| Kling：kling-3.0-turbo | 新协议共享规格，官网入口页面壳 | 先获取可读取官方任务 API 合同，再实现 submit/query、凭据、视频参数和超时；既有 kling-v3 名称不证明新型号同协议 |
| Cohere：rerank-v3.5、rerank-v4.0-pro、rerank-v4.0-fast | 原生共享规格，兼容 Provider 不提供 Rerank | 核原生 /v2/rerank、query/documents/top_n/返回排序和 search unit 单位；从客户端计费到响应映射独立验收后再增加接入 |
| Cohere：Embed 4/5 的多模态与可选维度 | 原生能力与文本兼容端点分开 | 原生文本/图片/PDF输入、返回默认/指定维度和费用分别验收；兼容端点不发送 dimensions |
| Cohere：north-mini-code-1-0、north-small-translate-1-0 | 原厂精确 ID 共享规格 | 核原生 Chat 与兼容 API 开放名单和账号授权，验证窗口/输出明文整数；旧 north-mini-code 仅本仓历史匹配，不作为调用实参 |
| Stability：stable-audio-3.0 | 发布公告与共享规格 | 获取官方 API 身份、音频参数、输出形状和计价；授权账号验收后接入，不凭发布公告推算端点 |
| Tencent：hy4-preview | 原厂规格；OpenRouter 已有独立前缀接入 | 国内 Hunyuan、TokenHub、OpenRouter 的 ID/币种/窗口分别核；不把 Tencent 新闻价格直接填国内现有 Provider |
| Perplexity：Agent API | 旧 Sonar 同步/流式兼容保留 | 实现 /v1/agent 的 input/preset、typed output、search_results、工具/背景任务和费用；对照旧同步兼容响应回归，不能只换 model 字符串 |

## 预算、安装和默认策略

| 事项 | 当前处理 | 后续完成条件 |
| --- | --- | --- |
| GPT-5.4 Mini/Nano 独立输入预算 | 总窗口不冒充最大输入，官方输入 272000/总窗口 400000 差异已记录 | 客户端独立输入预算字段及 schema 消费；先发布客户端再声明新字段，回归输入截断与输出预留 |
| GPT-5.4 系列默认 none | supportedEfforts 包含 none，defaultEffort 当前 frozen schema 不接受 none | 复核客户端默认推理模式及现有产品策略；按兼容规范发布支持 none 默认值的客户端，不能先扩本仓 enum |
| Python 推荐归档与 Hatch pin | 推荐 3.14.8 官网摘要真实；fallback 保留 Hatch 1.16.5 映射 3.14.0 | 首启导入、重复安装/更新幂等、路径识别及 minClientVersion 验收；不能为表面一致修改 pin 表 |
| 默认 service-map | 原默认保留，完整策略映射绑定校验 | 选取代表性任务与明确费用/延迟预算，比较同接入新旧模型、工具/模态、错误回退；记录测量日期和选择理由后更新默认 |
| 真实账号调用 | 本轮没有收费账号调用 | 获得对应账号授权后逐接入面做最小请求、流式、工具、推理、媒体任务及用量核对；保存不含凭据的结果摘要 |

## 同步与字段移除边界

本轮对照 DesireCore 远端 main `412e05b043656d1f3ba2b56307ef5ceabbf8a77a`：预置模型合并会用新预置对象替换 preset 模型，保留用户覆写；保护 user-added/synced 模型。共享规格从官方目录重读并替换缓存，不是把 extra 逐键合并到旧规格。因此本轮不下发未证实的 Ox Alpha modelOrigin，未覆盖用户自建配置。

该版本共享规格缓存使用 `_index.json` 的 mtime 失效；本轮同时更新规格索引的批次说明以触发重读。以后修改共享规格时需一并更新索引，或客户端完成更细粒度的缓存失效；不同历史客户端不能据此宣布全部行为已验收。
