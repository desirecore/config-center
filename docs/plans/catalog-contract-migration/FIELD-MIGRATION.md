# 字段迁移：全量清单与规则

[PLAN](PLAN.md) · [149种现有extra路径清单](FIELD-INVENTORY.md)

## 全量的含义

覆盖 Provider、套餐、ModelSpec、索引/manifest、API-provider合同、客户端本地compute.json、构建内置包、云端同步结果、编辑API和UI保存路径。每个字段登记“来源位置 → schema → 写入点 → 运行时读取点 → 首个正式支持版本 → 新位置 → 冲突规则 → 迁移方式 → 测试”。仅rg命中注释、schema或i18n不算证明字段被运行时消费。

当前149种extra叶路径是盘点起点，不是149个废弃字段。所有路径都须归类：有效规范字段保留；旧别名映射；记录性字段转metadata；接入协议专用字段有独立owner；未识别字段隔离待审。禁止为了“全迁移”把有意义的有效字段重新命名一遍。

## 首批映射与禁止的转换

以下目标中除已存在的extra.reasoning、ModelSpec.extra.speech等外，其余是待P1客户端/schema实现的V2结构建议，不得现在写入预设。

| 当前字段/形态 | 分类/目标 | 转换约束 |
| --- | --- | --- |
| extra.reasoningEffort、defaultReasoningEffort、扁平defaultEffort | 已清除仓内残留；存量受管配置迁至extra.reasoning的明确支持集合/默认值 | API编辑DTO的reasoningEffort可能是有效输入名，不按同名全部删除；必须追到落盘位置。新旧同存时规范字段优先并记录冲突，不丢掉high/none |
| thinkingDefault、supportsThinking、thinkingMaxTokens、extra.thinking.* | 分开处理官方默认说明、固有“不能关闭”、接入开关/预算及本仓默认；归入相应V2思考/请求约束或metadata | v10.0.177的thinkingDefault明确不改变行为，true不能推导effort或thinkingOnly；supportsThinking没有消费证明前不用于扩大能力 |
| cachedInputPrice、cacheHitPrice、cacheReadPrice、cachePricing.read | 接入面V2 billing/cache-read价签，同币种/模态/计价单位才可规范 | 原价、平台价、加价后的价格分开；不混USD/CNY或每token/每百万token；有阶梯/过期条件必须保留 |
| cacheWritePrice、cachePricing.write5m/write1h、cacheStoragePrice* | 分别规范为写入TTL价/缓存存储价，仍属接入面 | 5分钟与1小时写价不能合并；缓存存储计费必须保留时间维度 |
| pricePerImage、pricePerGeneration、pricePerMillionCharacters、pricePerSong*、audioOutputPricePerMinute、requestPricingPer1k | 接入面统一计价条目，保留unit、currency、modality、tier、effective范围 | 不生成虚假的inputPrice/outputPrice；未知价缺省，动态API -1不变成免费 |
| Provider.contextWindow/maxOutputTokens/defaultTemperature/defaultTopP等规格副本 | 作者数据迁到canonical规格；合法平台差异改为显式access override；旧Provider字段由编译投影生成 | 45处不同值不是45个错误；先分型。最大输入、总窗口、输出独立，不能output<=input一刀切 |
| audioFormats、supportedAudioFormats、supportedFormats、outputFormats、voices、sampleRate、endpoint、authHeader等 | 先按ASR/TTS/图像/视频具体语义分组；稳定语音profile可复用extra.speech；端点/认证留Provider协议绑定 | 同名格式不同模态不能合并；声音ID/采样率/默认声音、batch与streaming、协议版本均须保留；不能把http auth字段移进原厂身份 |
| dimensions、vectorDimensions、defaultDimension | 规范embedding维度与接入限制，原厂可选集合和当前端点支持集合分别记录 | Cohere原生Embed维度不能让compatibility端点发送dimensions；默认返回维度不等于可选择该参数 |
| legacy、deprecated、replacedBy、deprecationNotice、retiredAt | V2模型/接入生命周期与本仓兼容状态分开 | legacy不等于退役；客户端软deprecated不等于原厂停服；retiredAt当前仅记录性，需P1运行时门控 |
| ModelSpec内的reasoning/thinkingRoundTrip/thinkingToolTurnValidation/serverSideWebSearch | 不属于原厂统一规格，回到接入面合同；已有合法声明保留 | 已发布applySpec会排除这些接入键，不能通过“补Spec”来使其生效；平台搜索价同样留接入面 |

## 存量迁移

1. 基于正式发布包与实际读写路径生成dry-run，不仅扫描本仓JSON；受管preset、synced/cloud、自建和userOverrides分别处理。
2. 新客户端读旧值后内存规范化，运行时只读规范结构；保存时仅写新结构，记录migrationEpoch并保留一次可恢复的本地基线。基线包含敏感配置时沿用已有保护，不提交或回显。
3. 规范值存在优先保留；无法判断的旧值进入待处理记录，不用静默覆盖来制造幂等。用户覆写与厂商原值分别保存。
4. 第二次迁移结果应逐字段一致；自建ID、providerId、apiModelId、凭据引用、币种/单位和用户选择保持。未覆盖的任意自定义extra不按名称猜测删除。
5. 回滚时必须能从新结构安全恢复受支持的旧投影，且不能让退役域名或停服模型再次可调用。兼容读取退出与历史文件保留分别制定期限。

## 防回流

增加V2旧键拒写名单和“新字段有消费点/版本声明”校验；对受管数据的未知行为键失败，不依赖开放extra静默忽略。记录性metadata与自定义参数扩展留各自明确边界。CLI、UI保存、Provider发现/同步和云端pricing转换都必须使用同一规范化入口。

V1投影继续遵守frozen契约：defaultTemperature/defaultTopP不能写null，必填字段和已知enum不能提前删除/扩展。V2明确“不支持采样”后由新客户端请求约束落实，不能把Spec里的null直接复制到旧Provider造成整份配置拒收。
