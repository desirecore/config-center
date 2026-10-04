# infini：2026-10-04来源重新核查

覆盖 1 条接入/规格记录。仅保存可审阅候选，不修改canonical、原来源状态、manifest。未做账号调用。

## 来源导航与读取边界

- [infini-obisidian](https://docs.infini-ai.com/gen-studio/integrations/use-obsidian.html)：`official-docs` / `readable`。GenStudio兼容API旧示例；web读取deepseek-v3示例与maas/v1；历史示例不保证当前可用。
- [infini-changelog](https://docs.infini-ai.com/changelog.html)：`official-docs` / `readable`。GenStudio官方更新日志精确型号下架；web实际读取8/28删除目录，逐字含deepseek-v3；官网页尾注明离线文档，正式应用前复核在线账号模型目录。
- [infini-current-model-guide](https://docs.infini-ai.com/gen-studio/models/)：`official-docs` / `readable`。当前模型目录操作指南；web正文要求账号服务列表和model详情确认规格；公开页面不提供账户当前价格/窗口。

## 每条记录的证据与剩余缺口

### `compute/coding-plans/infini-coding.json#deepseek-v3`

结果：`official-conflict`。原模型记录：[deepseek-v3](../../../model-sources/providers/infini/models/deepseek-v3.md)。

- `modelName`：当前 `"deepseek-v3"`；官网候选 `"deepseek-v3"`；`matches`。[infini-obisidian](https://docs.infini-ai.com/gen-studio/integrations/use-obsidian.html)。官方历史兼容示例逐字ID；不宣称现行可用。
- `access.lifecycle`：当前 `null`；官网候选 `{"status": "retired", "date": "2026-08-28", "scope": "GenStudio"}`；`differs`。[infini-changelog](https://docs.infini-ai.com/changelog.html)。官方更新日志明确列已下线型号，需处理现preset模型；不是整个domain停服。

剩余字段：`contextWindow`、`maxOutputTokens`、`capabilities`。

- 资料页末离线副本免责声明已保留，未把历史示例当当前账号调用证明。

下一步：先核对在线GenStudio目录，按精确Provider/model下架并选已适配替代模型；不要直接迁移凭据至新接入。
