# kwai：2026-10-04来源重新核查

覆盖 1 条接入/规格记录。仅保存可审阅候选，不修改canonical、原来源状态、manifest。未做账号调用。

## 来源导航与读取边界

- [page-kwai-intl](https://www.streamlake.ai/document/DOC/mg6k6nlp8j6qxicx4c9)：`official-docs` / `readable`。国际vanchin Coding Plan / kat-coder-pro-v2.5；不是国内wanqing kwai-coder；已读取HTTP正文；模型数字只按该页精确型号和接入记录。
- [page-kwai-domestic](https://www.streamlake.com/document/WANQING/mdptab9x4xn2v4vyo9v)：`official-docs` / `readable`。国内万擎操作流程；没有本条精确调用别名；已读取HTTP正文；模型数字只按该页精确型号和接入记录。

## 每条记录的证据与剩余缺口

### `compute/coding-plans/kwai-coding.json#kwai-coder`

结果：`official-access-only`。原模型记录：[kwai-coder](../../../model-sources/providers/kwai/models/kwai-coder.md)。

- `baseUrl`：当前 `null`；官网候选 `"https://vanchin.streamlake.ai/api/gateway/coding/v1"`；`not-comparable`。[page-kwai-intl](https://www.streamlake.ai/document/DOC/mg6k6nlp8j6qxicx4c9)。国际官网入口，当前国内wanqing地址；地域/账号/型号不同，不是可直接替换的冲突。

剩余字段：`modelName`、`capabilities`。

- 官方model ID为kat-coder-pro-v2.5，不证明kwai-coder别名映射；不能跨域透明迁移Key。

- official-access-only只说明找到官方接入/产品入口，不计本条精确模型身份或容量已核。

下一步：按精确型号和本接入面继续核对；候选证据不自动应用。
