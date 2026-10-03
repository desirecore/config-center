# 最低生效客户端版本

[PLAN](PLAN.md)

## 已确认与尚未确定

| 项目 | 已核状态 |
| --- | --- |
| 最新正式release（本次读取） | v10.0.177，2026-09-27发布，非draft/prerelease，targetCommitish=dev；[发布页](https://github.com/desirecore/desirecore/releases/tag/v10.0.177) |
| 主仓main | 412e05b043656d1f3ba2b56307ef5ceabbf8a77a，package.json仍为10.0.100，不能拿它或目录里的工作树作为已发布能力证明 |
| 既有Provider要求 | anthropic-claude=10.0.83、github-copilot=10.0.132；其余38份Provider/套餐未声明。既有数字需在P0查当时发布包重新确认，不自动沿用 |
| v10.0.177实际门控 | getProviderGating、前端选择器、InspectModels及Smart候选使用Provider级门控；不能据此宣布显式调用、媒体/后台任务全覆盖 |
| Spec/模型/数据集版本门控 | 当前本仓model-specs schema没有对应字段；V2和迁移器仍需实现 |
| V_contract | 待P1代码与正式发布确认的实际版本；本PLAN不猜10.0.178或其他未来版本 |

## 版本计算

P0为每种字段、协议、凭据、能力和迁移登记“实现commit、第一个包含该commit的正式tag、对应实际行为测试”。必要时以一个已验证的较新版本作保守下限，并明确这不是历史最早版本。不能用release标题、主仓版本字符串或schema存在代替实际出站行为。

V_contract取支持整个V2合同和迁移器的首个已验收正式版本。每个接入模型的有效最低版本取 max(数据格式/迁移下限、Provider协议/凭据下限、模型绑定能力下限、相关退役规则实现下限)。适配器不存在时为“不可用/待适配”，不能填一个未来版本号假装支持。

## 生效位置

1. **加载前**：读取版本化manifest后，检查formatVersion与客户端兼容性，再解析/合并ModelSpec和Provider。遇到不支持的新格式保留最后已知可消费快照，不破坏compute.json和启动。
2. **同步/保存**：受管条目写入、动态模型发现、构建默认包、编辑API和客户端迁移都检查；新模型自己的门槛不能因为Provider整体已支持而漏掉。
3. **实际调用**：统一resolver在发请求、验证Key、余额检查、媒体submit/poll、后台摘要、SDK与工作流调用前再判定。调用方传明确providerId不能绕过。
4. **UI/Agent**：同一结果派生“需更新客户端”及原因，不向Agent提供实际不可用候选；取消/升级路径不依赖隐藏整个供应商。
5. **异常版本**：受管已发布数据的非法最低版本/未知格式拒绝；自建配置给明确错误和修复入口。当前compareSemver非法要求fail-open的行为需P1决定并测试，不直接一刀切覆盖所有用户数据。

## 过渡方案

- 旧客户端不认识新门控，单加requiredClientVersion不能阻止它读取新字段。因此先发布会识别V2目录和门控的客户端；V1路径保持受frozen schema约束的兼容投影/冻结快照。
- 只支持Provider级门控的客户端如果需要精确到模型，应先升级；临时只能在不可安全拆分时提高该Provider整体门槛，清楚记录受影响的仍可用旧型号。默认方案为新客户端的逐模型门控。
- 未铺开的客户端不能先收到已知enum扩值或删除required字段。现有frozen provider schema与manifest schema不直接改造成V2；新增版本化schema后分别校验。
- 下发V2、停止旧写入、删除旧读取兜底和归档旧投影是四个独立动作。发布报告写明低于V_contract的行为与无法远程强制修复的旧二进制范围。

## 跨版本验收

覆盖门控前旧版、现有正式版177、V_contract-1、V_contract、最新版、缺失/非法版本、离线启动、不支持format、已有用户覆写，以及直接指定Provider/SDK/后台/媒体绕过反例。测试版本指构建产物有效__APP_VERSION__，不是测试源码package.json中的常量。
