# 纯运行配置发布工具

作者 `main` 保留完整资料、生成器与测试。客户端消费独立 `runtime` 历史，不从作者树过滤ZIP后复用原Git历史。

`publisher.cjs` 是经审阅的自包含 Node 24 工具，不安装依赖、不读取私有应用仓库、不执行本仓的来源脚本。生成源提交、精确输入清单和字节摘要在 `publisher.metadata.json`；第一方与第三方许可保留在同目录，不重新许可。生成源维护于 DesireCore 主仓 `scripts/sync/config-center-runtime-standalone-entry.ts`，不是独立手改的一份规则。

工作流仅在同仓 main 的精确 `Schema Validation` 运行与必需 validator/test 步骤成功后派生。只读取已通过的固定来源SHA；工具来自工作流自身的可信提交，不从PR或运行产物下载。仅发布job取得本仓 `contents: write`，不使用或复制用户PAT。

运行字节未变不创建runtime提交，来源/时间不进入数据摘要。运行数据变化必须提升原 `presetDataVersion`，否则失败。发布器只重建准入blob，唯一父提交来自已核验的runtime，不导入main对象；同一数据发布线用于随包种子和后续更新。

本地手工执行默认dry-run；`--apply`只写指定的独立bare目录，仍不会联网推送。完整开发校验是调用前置，不因这个工具成功而自动成立。工作流普通快进push只发送runtime一个ref，不写main、不force；仓库管理应保护runtime不被回退或删除，不能把普通push当成防管理员外部回退的绝对租约。

更新工具必须从准确生成源重建，审查第一方闭包、锁定依赖及许可、只允许Node内建external、拒绝SourceMap/私有路径/无关应用模块，再连同metadata和许可提交PR。运行文件白名单、信封与完整性算法只在生成源维护，禁止直接编辑bundle修补门禁。

## 文档、测试与数据更新的区别

文档或测试变更仍经过作者仓库的正常 PR 与 main 校验；不要为了规避发布而跳过这些校验。自动发布会对已验证的固定 main SHA 重新派生纯运行文件，并比较运行字节摘要。只有文档、测试或工具说明变化而运行字节相同时，应明确输出“纯运行字节未改变；没有新增 runtime 提交。”和“无运行内容变化；跳过推送。”，不提升 `manifest.json#presetDataVersion`，也不改写运行信封的来源或时间。

核验时记录来源 main SHA、对应 `Schema Validation` 和 `Publish Runtime Data` run，并比较前后 `refs/heads/runtime`、`.desirecore-runtime.json` 的 `dataVersion`、`payloadDigest` 与文件清单。发布任务被跳过、过时来源被拒绝或仅来源校验成功，都不能当成已执行的无变化验证。验证多个来源时应等待上一来源自动发布完成，再合入下一变更，避免当前 main 已前移而无法验证精确来源。

## 首用、复启与失败恢复边界

使用此发布线的客户端，首用的随包种子与后续候选都来自同一纯运行合同；作者仓库的资料和 Git 历史不应进入种子或更新下载。复启复用已安装的有效运行快照，远端更新在后台处理，不算首次安装步骤。实际客户端是否已采用此发布线仍须核对对应代码与发行版本，工作流部署不等于客户端已经发布。

数据或发布失败时保留原 runtime ref，不手工强推覆盖、回退或删除发布历史。需要修正已发布数据时，在作者 main 上经正常 PR 修正并递增 `presetDataVersion`，通过校验后发布新的运行提交。客户端候选校验失败或离线时应保留原有效数据；这属于客户端验收边界，不能用工作流成功替代验证。
