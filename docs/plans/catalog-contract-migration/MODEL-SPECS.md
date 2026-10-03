# ModelSpec 完善与 Provider 取舍

[PLAN](PLAN.md) · [真实匹配/差异基线](SPEC-BASELINE.md)

## 方案选择

| 方案 | 收益 | 问题 | 决策 |
| --- | --- | --- | --- |
| Provider和Spec各自完整手工维护 | 兼容现有客户端，修改直接 | 相同事实重复、45处数值差异难追踪，不能区分正确覆盖和错误 | 退出手工双写 |
| 只保留Provider | 端点/账号/价格可直接读取 | 原厂身份/参数重复到各套餐，动态云目录无统一规格，匹配和路由继续靠名字猜测 | 不采用 |
| 只保留ModelSpec | 原厂规格集中 | 无法代表不同地域/套餐价格、凭据、协议、实际可用模型；spec-only不是可调用 | 不采用 |
| ModelSpec canonical + 接入绑定/覆盖 + 自动编译投影 | 各事实只维护一次，可解释平台差异，兼顾动态发现和旧客户端 | 需要客户端resolver、版本化schema和生成工具先实现 | 推荐 |

## 作者数据和运行时对象

建议V2增加版本化目录（如compute/v2/model-specs、providers、coding-plans、retirements及manifest，具体路径P1确定），保留根目录V1兼容投影。新增的字段/目录都是设计提案，不是当前已实现API。

- **ModelSpec**：稳定modelRef、vendor/canonicalModelId、明确版本/变体、exact与经过证实的aliases、原厂spec、逐字段证据、生命周期；routing仍为模型域中的明确产品政策，来源不能伪装成官网参数。
- **AccessModel**：实际apiModelId/modelName、指向modelRef的绑定、是否当前可用、区域/套餐、协议/adapterVersion、认证/媒体/任务端点、billing、已证实的limit/capability/request override、所需客户端版本。
- **EffectiveModel**：客户端/编译器按同一规则计算；identity/请求ID分开，原厂声明/平台合同/用户覆写分开，并带字段来源、覆盖理由和匹配层级用于诊断。用户配置读取和云端同步使用同一resolver。

旧Provider中必须的displayName/serviceType/capabilities等并不马上删；生成器从V2对象投影到frozen V1 schema。V2作者数据不再人工复制它们。一个编译输入产生两个按版本选择的格式，兼容副本不是第二份真相源。

## 有效值规则

| 字段类别 | 合成规则 |
| --- | --- |
| 身份 | access精确绑定优先；实际请求ID原样保留。显示别名不等于原厂调用实参；不通过剥离preview/free/日期等自动宣布两个型号是同一合同 |
| 输入/窗口/输出 | 每个限制独立表达。已证实的access限定值优先于通用原厂默认，并保留理由/证据；请求预算再受有效上限约束。平台经验证可有不同上下文、tokenizer或托管变体，不用机械min/全相等抹掉差异 |
| 能力 | 原厂事实与已验证接入开放范围组合；接入明确不支持时为不可用，不做capabilities并集。未声明/待核是unknown，不能自动转成false或全支持；用户标签不扩大官方受管调用权限 |
| 思考模式 | routing的标准模式与接入supportedEfforts映射/集合求交，固有不能关闭约束仍成立；原厂默认、平台默认和产品默认分别记录。none与off的产品映射不直接改成所有上游相同参数 |
| 请求限制 | 模型拒绝采样/强制工具等固有限制按精确身份生效；adaptive/budget/Responses形状、thinking回放、平台搜索与参数名称由协议绑定落实。 family不得带高风险约束到不同代际 |
| 价格 | 直连/套餐从各自官方价签，动态云端从实际计价平台合同；billing唯一在access，Spec无价格。不要沿用“所有价格都来自NewAPI”来描述直连预设 |
| 用户覆写 | 保留显式合法偏好；不能突破上游硬上限/停服/客户端门槛。覆写的本地数值不冒充官方证明；冲突给可理解原因 |
| 推断兜底 | family仅展示/保守补缺，不能新增Agent资格、未知工具/模态或强制协议转换。未命中精确合同的动态模型保持未知或授权探测，不自动注册虚假Spec |

当前v10.0.177 applySpec在普通精确合并可覆盖数值，但provider-management/compute-routes强制inferred=true只补缺；capabilities却始终并集，extra整体浅合并。P1要统一这些路径，给每种字段明确合成规则，避免不同入口拿到不同能力。不能只改JSON就宣布合成语义已经统一。

## 完善内容与顺序

1. **身份与匹配优先**：补GPT-5.4 Nano独立规格、收窄gpt-5.4 pattern；17未匹配和7family逐条分类，见基线。普通固定型号应有精确绑定，ark-code-latest等动态套餐别名必须通过其实际目录/合同解析，不能永久绑定某个猜测原厂。
2. **完整输入预算**：新增独立maxInputTokens与总context、maxOutput字段；窗口单位、tokenizer、独立限制/组合预算、默认max_tokens与reasoning预算均分开。讯飞不能拿65536输入证明总窗口；未知总窗口不补造。
3. **45处差异分类**：A官方错误需修，B有证据的平台覆盖需保留，C单位换算需明确，D旧假定/没有证据需待核。每项登记决定与原值/新值，单供应商提交；不批量复制最大值。
4. **模态/工具与协议**：明确输入/输出模态、tools/结构化结果、native/transcode路径和适配状态；Spec描述型号并不宣布客户端已适配。原生TTS/Live/转写/视频/Rerank完善规格后，仍须独立接入验收。
5. **生命周期可执行**：preview、active、deprecated、retired、historical、unknown及其证据分开；原厂生命周期与某接入账户/地域/套餐开放状态分开。对已确认retired/未适配/缺最低版本的对象禁止自动路由和出站。
6. **路由完整性**：仅当前access可用、版本支持、合同足够且用户策略允许的精确型号成为候选；metadata和ID存在不授权调用。pending可保留检索/手动候选与说明，不借补Spec扩大自动权限。
7. **58条无静态接入规格**：分别标记动态云目录服务、family保守兜底、历史兼容、待协议适配、可能孤立。只有真正无使用方且原厂/别名生命周期已核才归档，不用静态Provider是否存在直接删除。
8. **缓存更新**：Spec/绑定/生命周期的变更用catalog digest或明确版本失效；退出依赖修改_index描述来触发mtime的维护惯例。原地换文件、离线缓存和回滚均须验证。

来源仍沿用每供应商SOURCES、单模型、单接入和source-gaps细分；新增字段的每一条已核声明要能指向确切接入面证据。不将当前132条部分参数已核自动标成完整Spec。
