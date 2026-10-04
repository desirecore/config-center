# github-copilot 来源重新核查

核查日期：2026-10-04。覆盖 inventory 中 0 条精确记录。此文是临时候选复核，不修改既有来源状态、数据或 manifest。

inventory中没有静态模型行，因此不伪造model finding。已实际读取GitHub支持模型文档；api.githubcopilot.com/models未鉴权返回HTTP400，不能认证账号目录/套餐资格。IDE版本要求不能直接用作DesireCore最低版本。

## 本次实际读取与失败尝试

### github-copilot-d8d988cfa30a

- 初始链接：[https://docs.github.com/en/copilot/reference/ai-models/supported-models](https://docs.github.com/en/copilot/reference/ai-models/supported-models)
- 最终链接：[https://docs.github.com/en/copilot/reference/ai-models/supported-models](https://docs.github.com/en/copilot/reference/ai-models/supported-models)
- 发布者/类型/读取：GitHub / official-docs / readable
- 适用范围：该官网文档明确列出的模型/API；不扩展到其他接入面。
- 结果：正文已读取；仅用于下方逐字段列明的证据，读取成功不代表全规格核实。

### github-copilot-fb6294869e5b

- 初始链接：[https://api.githubcopilot.com/models](https://api.githubcopilot.com/models)
- 最终链接：[https://api.githubcopilot.com/models](https://api.githubcopilot.com/models)
- 发布者/类型/读取：GitHub / official-platform / blocked
- 适用范围：该官网文档明确列出的模型/API；不扩展到其他接入面。
- 结果：HTTP Error 400: Bad Request

## 动态接入核查

GitHub Copilot支持模型目录是平台/套餐/IDE条件目录；官方网页可公开读取，但账号模型API没有授权，返回HTTP400。未写入虚构静态型号、最低客户端版本或默认窗口。年度个人Pro/Pro+与月付/组织策略可能不同，仍须独立账号目录。

下一步：在明确授权后只读官方账号模型目录，按API原始ID、capabilities、套餐与客户端支持逐条建立接入证据；公开列表不证明登录后的全量权限。

## 逐记录复核
