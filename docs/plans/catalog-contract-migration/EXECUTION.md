# 实施任务与证据

权威Plan：PLAN.md revision 3。以下为当前任务进度，不替代已核字段来源。

| 阶段 | 状态 | 负责人 | 完成证据 |
| --- | --- | --- | --- |
| P0 字段/能力/来源清单 | 分类与消费回归完成；等待正式发布 | 编译工作线与主工作线 | FIELD-DECISIONS、SPEC-DECISIONS，正式版本待发布验收 |
| P1 客户端加载、迁移、版本与出站门控 | 实现及真实服务验证完成，等待合并发布 | 客户端工作线 | 340条解析一致、迁移及预算回归、版本426/退役400，客户端构建通过 |
| P2 canonical/兼容编译与旧字段迁移 | 编译与存量迁移回归完成；等待上线 | 编译工作线 | 286 Spec/40接入/340模型，编译及根正文漂移反例回归，完整V1投影一致 |
| P3 规格精确身份/参数差异完善 | 已完成分类与有证修正 | 规格工作线 | 新增7条Spec，45差异及58spec-only均有决定；缺证保持unknown |
| P4 受管退役接入/域名规则 | 实现及实际出站拦截验证完成 | 客户端工作线与主工作线 | 受管零一万物原host/path规则，保留凭据，自建接入不按名称删除 |
| P5 正式客户端、数据发布和远端复查 | 客户端CI排队阻塞 | 主工作线 | 不预填已发布版本 |

保留原工作区logs；客户端原checkout的docs改动未触碰。客户端隔离worktree的子模块更新结果与无关gitlink将单独记录。

客户端worktree子模块已按--remote更新：docs=b1394223efe77583330dbe51b961d868306b3256、drawio=88ee1f5ab4d40603a8f3aaa0d9d6dc3794c6b3f0。docs较初始dev gitlink前进，原checkout用户docs改动未触碰；本任务所需文档将在该已拉最新子模块上增量编辑后单独发布。

## 截至2026-10-04的消费验证

- 原始626来源记录维持353 partial/272 pending/1 historical，216仅ID，137有其他字段证明。缺证事实没有被编译伪装官方核验。
- canonical/编译与V1完整投影及根正文漂移反例通过；340条实际resolver结果与客户端比较，40接入/286规格Schema逐条通过。
- 36条原生协议未适配（含原默认ASR）明确禁止调用但保留记录；3条API实参别名单独保留，不由metadata恢复入wire。
- 客户端已通过changed typecheck消费闭包与完整构建；目前SDK真实正文预算、存量迁移、最后有效配置/启动、权限版本和retirement为范围回归，正式发布还未执行。
- 实际token计数或保守文本份额检查与媒体估算区分；embedding逐item预算、ASR不把base64当文本token，多模态不是厂商精确usage验收。

真实standalone重启与HTTP证明：higher-floor incoming目录不破坏合法local配置，GET config200保留2测试Provider，未来Provider changing-keyref返回426，retired managed原域changing-keyref返回400，原测试Key保留。证据仅提供fakeKeys，没有厂商账号调用。

文档先行发布：desirecore-docs PR #535 已合并，客户端 docs gitlink 为 `3e600afc3b3da2686e83981f72090966b3ea0f93`。包含 ADR 207、算力模块说明及隔离真实服务验证报告。目录首批版本128为 candidate；客户端正式版本未核实前 requiredClientVersion 维持 null。

## 候选发布与客户端终审

- 配置中心 PR #116 已合并为 `7f4073a769d3ddb0b1e5225b6b26e6974004d34f`，远端 main manifest 为128/2026-10-04；合并后 Schema 与发布同步检查通过。143项数据回归通过。
- 客户端 PR #4042 面向 dev，包含 V2 Reader/共享resolver、版本/退役门控、独立预算、存量迁移、选择器及内置128候选包。
- 终审补齐旧 Relay token 和新增 availability Probe 读取凭据前门控；统一合法用户覆写预算。真实HTTP与340模型Schema/解析对照通过。
- 最新dev基础中存在静态闭包及Smart候选回归，已同步上游PR #4044修复并复用其纯路由判定叶子；2处旧网络测试夹具按Schema默认修复，不提高测试阈值。正式结论以最终PR head的CI为准。
- 本地验证使用 `.nvmrc` 指定 Node22.23.2，官方darwin-arm64包 SHA256 为 `5eff7a9011895aae3f29d06f167b84a62b028a591370c7cafb59103559fd26e1`。最新lockfile重装后构建通过。
- V2保持candidate；尚无包含本轮代码的正式发布产物，不能填写正式最低版本或宣称P5完成。

最终集成快照（2026-10-04）：客户端 PR #4042 head `70bb85ae2c4ee44fed8a15a7020751b6bbdc9ab8`，基线 dev `e30783e20d1b4d69fd1183b09d3a20d10710103a`。Node22.23.2下121项集成回归、全部受影响类型边界、完整构建通过。包括Smart路由/候选回退、静态闭包、真实Relay及Probe零出站、预算与340模型Schema对照。独立重跑旧终端超时用例通过。此前大范围本地快照因上游变更停止，不能作为全量通过证据。

当前发布阻塞：该精确head的gate-static/gate-unit/gate-resource、standalone-smoke、Claude SDK Native Smoke Gate均排队，组织在线自托管runner处于busy；PR可合并、无未解决review线程，但未达到流程合并门禁。尚未合并客户端、创建正式发布或启用V2；待CI通过后按P5继续。不得将候选目录与代码PR等同于正式发布。
