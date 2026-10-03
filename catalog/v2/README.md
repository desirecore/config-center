# V2作者数据

`catalog.json` 是迁移后的唯一模型/接入作者数据。`field-decisions.json` 为149路径静态消费核查记录，`retirements.json` 为独立退役注册（若存在）。编译器只读取这里，不从旧Provider再次推导。

- `node scripts/catalog-v2/compile.mjs` 生成 `compute/v2/catalog.json`、版本manifest、诊断、`compute/v2/compatibility/**`，并将同一冻结V1投影发布到根 `compute/providers`、`compute/coding-plans`、`compute/model-specs` 正文。索引、manifest、来源记录仍按各自维护规则更新，编译器不重写。
- `node scripts/catalog-v2/compile.mjs --check` 校验可复现结果、根V1完整字段与canonical投影一致、frozen schema、旧键回流、绑定和覆盖说明。根V1任何手工数值更改都会失败，不能将那里作为第二个作者位置。根文件已有序列化不影响语义一致时保留，避免无意义的key顺序变更。
- `migrate.mjs --write --client-root <client repo>` 是首次摄取工具，**不能作为日常编译入口**。重新摄取会丢掉人工canonical编辑，必须先保存基线、review差异；当前批次允许在并行官网规格修正结束后重新摄取一次。

当前 `publication.state=candidate` 与 `requiredClientVersion=null` 是刻意失败关闭，尚未启用线上V2。正式发布版本和行为验收后才能将发布状态及最低版本一起更新；未知协议/动态身份不能借发布变成精确可调用。

metadata不消费。V1布局及历史未消费extra保存在canonical metadata，完整回投影；运行时产物删除布局信息。迁移不刷新官方核验日期、不提升proof等级。价格币种和原数值保持，复杂价阶/注释保留sourceKey和源单位；没有转换为零或统一按token收费。

客户端用户配置迁移不由这个仓库对用户磁盘执行，由客户端迁移器保留秘密、用户覆写与一次回滚基线；本工具只迁移受管作者数据。

## 实施后的执行边界

- `access-local` / `dynamic` 是明确的接入合同，不虚构原厂Spec。已知适配器上的现存显式模型可手动调用；保留全部340条记录，禁止Spec/family继承、Smart自动路由。未知/未实现适配器仍门控，不将无Spec条目静默丢弃。
- 原厂硬约束（强制思考、拒绝采样、拒绝强制tool_choice）不能被接入false放松。未核的更大输入/窗口/输出不突破已核Spec限制；保留原候选与pending解释，只允许本次已核的独立平台合同扩大。
- `protocolProfiles` 保存严格作用于指定协议的合同，例如8条adaptive thinking仅适用于anthropic-messages。V1 adaptive副本从profile生成，动态云目录的精确身份也必须经过同一协议resolver。
- 只有执行性 `lifecycle.retiredAt` 会按UTC日00:00门控；旧且缺字段证明的日期保存在 `metadata.recordedFacts`，不冒充正式停服执行证据。Nano官网退役日期已纳入执行性生命周期。
- `compute/v2/resolver-parity.json` 为真实340条配置生成消费摘要；其中999.0.0/0.0.0只用于测试，不是实际发布或最低版本。客户端用相同纯resolver与固定时间验证，不能维护第二套不同算法。

## 日常修改顺序

只编辑 `catalog/v2` 中相应事实、接入覆盖或计价，运行 `npm run catalog:compile` 同步根V1与V2产物；随后更新对应官方来源记录、规格索引缓存标记及发布manifest，运行全套校验。禁止改根Provider/Spec后通过重新import制造双写或提升证明等级。`catalog:check` 会拒绝根V1漂移；用户本地compute与秘密不在生成范围。
