# 实施任务与证据

权威Plan：PLAN.md revision 3。以下为当前任务进度，不替代已核字段来源。

| 阶段 | 状态 | 负责人 | 完成证据 |
| --- | --- | --- | --- |
| P0 字段/能力/来源清单 | 分类已完成；实际消费验收中 | 编译工作线与主工作线 | FIELD-DECISIONS、SPEC-DECISIONS，正式版本待发布验收 |
| P1 客户端加载、迁移、版本与出站门控 | 实现及真实服务验证完成，等待合并发布 | 客户端工作线 | 340条解析一致、迁移及预算回归、版本426/退役400，客户端构建通过 |
| P2 canonical/兼容编译与旧字段迁移 | 编译完成；存量迁移验收中 | 编译工作线 | 286 Spec/40接入/340模型，13项编译反例回归，完整V1投影一致 |
| P3 规格精确身份/参数差异完善 | 已完成分类与有证修正 | 规格工作线 | 新增7条Spec，45差异及58spec-only均有决定；缺证保持unknown |
| P4 受管退役接入/域名规则 | 实现及实际出站拦截验证完成 | 客户端工作线与主工作线 | 受管零一万物原host/path规则，保留凭据，自建接入不按名称删除 |
| P5 正式客户端、数据发布和远端复查 | 等待P1验收 | 主工作线 | 不预填已发布版本 |

保留原工作区logs；客户端原checkout的docs改动未触碰。客户端隔离worktree的子模块更新结果与无关gitlink将单独记录。

客户端worktree子模块已按--remote更新：docs=b1394223efe77583330dbe51b961d868306b3256、drawio=88ee1f5ab4d40603a8f3aaa0d9d6dc3794c6b3f0。docs较初始dev gitlink前进，原checkout用户docs改动未触碰；本任务所需文档将在该已拉最新子模块上增量编辑后单独发布。

## 截至2026-10-04的消费验证

- 原始626来源记录维持353 partial/272 pending/1 historical，216仅ID，137有其他字段证明。缺证事实没有被编译伪装官方核验。
- canonical/编译与V1完整投影16项反例通过；340条实际resolver结果与客户端比较，40接入/286规格Schema逐条通过。
- 36条原生协议未适配（含原默认ASR）明确禁止调用但保留记录；3条API实参别名单独保留，不由metadata恢复入wire。
- 客户端已通过changed typecheck消费闭包与完整构建；目前SDK真实正文预算、存量迁移、最后有效配置/启动、权限版本和retirement为范围回归，正式发布还未执行。
- 实际token计数或保守文本份额检查与媒体估算区分；embedding逐item预算、ASR不把base64当文本token，多模态不是厂商精确usage验收。

真实standalone重启与HTTP证明：higher-floor incoming目录不破坏合法local配置，GET config200保留2测试Provider，未来Provider changing-keyref返回426，retired managed原域changing-keyref返回400，原测试Key保留。证据仅提供fakeKeys，没有厂商账号调用。

文档先行发布：desirecore-docs PR #535 已合并，客户端 docs gitlink 为 `3e600afc3b3da2686e83981f72090966b3ea0f93`。包含 ADR 207、算力模块说明及隔离真实服务验证报告。目录首批版本128为 candidate；客户端正式版本未核实前 requiredClientVersion 维持 null。
