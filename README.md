# DesireCore Config Center

DesireCore 官方配置中心：托管 Provider / Model / Pricing / ServiceMap 数据，由
[desirecore](https://github.com/desirecore/desirecore) 客户端通过 `npm run sync-config-center`
脚本和运行时后台 fetch 拉取。

---

## 数据契约（Frozen Schema）

`schemas/` 目录下的 JSON Schema 是**已发布客户端的兼容契约**。所有写入此仓库的数据必须通过
`schemas/` 校验，否则会破坏老版本客户端。

### 历史背景

PR #1 曾把 reasoning 模型的 `defaultTemperature` / `defaultTopP` 写为 `null`，
导致已发布客户端（schema 严格 `number`）`readComputeConfig` 校验失败 → 同步路径死锁
→ 远程数据 revert 也救不了已污染的本地用户。详见 desirecore PR #471。

为防止此类事故重演，本仓库引入 frozen schema + CI 自动校验。

### 校验规则

| Schema | 适用文件 | 关键约束 |
|--------|---------|---------|
| `provider.schema.json` | `compute/providers/*.json`、`compute/coding-plans/*.json` | `defaultTemperature`/`defaultTopP` 必须是 number，禁止 null/string；`additionalProperties: false` |
| `manifest.schema.json` | `manifest.json` | `presetDataVersion` 必须是递增整数 |
| `service-map.schema.json` | `compute/service-map.json` | 每条映射须含 `modelName` + `providerId` |
| `smart-model-catalog.schema.json` | `compute/smart-routing/model-catalog.json` | 智能路由三档量级、接入面、exact model 能力和稳定优先级 |
| `providers-index.schema.json` | 两个 `_index.json` | `order` 数组无重复 |
| `pricing.schema.json` | `compute/pricing.json` | `markupRatio` / `usdToCny` 为正数 |

### 关键规则：reasoning 模型的温度参数

**禁止**：`"defaultTemperature": null`、`"defaultTopP": null`

**正确做法**：完全省略字段。

```jsonc
// ❌ 错误：会破坏 fix #471 之前的客户端
{ "modelName": "deepseek-reasoner", "defaultTemperature": null }

// ✅ 正确：reasoning 模型省略温度字段
{ "modelName": "deepseek-reasoner", "displayName": "DeepSeek Reasoner", ... }
```

### 关键规则：计价币种按 Provider 归属决定

- 国内 Provider 必须使用 `priceCurrency: "CNY"`，并写入国内平台人民币价格。
- 国外 Provider 必须使用 `priceCurrency: "USD"`，并写入美元价格。
- Provider 归属与其托管模型的产地冲突时，以 Provider 为准。例如，OpenRouter
  托管的 Qwen 模型仍按 USD 计价；国内 Provider 托管的国外模型仍按 CNY 计价。
- 新增 Provider 时必须同步更新全量币种归属测试，避免未分类数据进入预置。

### 关键规则：新增字段需先升级老客户端 schema

`provider` 和 `model` 顶层均启用 `additionalProperties: false`。如需新增字段：

1. 先在 desirecore 主仓 `lib/schemas/agent-service/compute.ts` 升级 schema 接受新字段
2. 发布新版本客户端
3. 等大部分用户升级
4. 再更新本仓库的 frozen schema 和数据

否则老客户端会因未知字段校验失败死锁。

### 智能路由目录的边界

`compute/smart-routing/model-catalog.json` 是路由器直接消费的、按接入面核对过的策略快照：

- `tier`、`routingPriority`、`eligibleForAgent` 和 `defaultReference` 属于路由策略；
- `capabilities`、上下文和 reasoning 是该 `providerId + model` 接入面的可用能力快照；
- 它不声明 API key、baseUrl、登录状态、用户额度或实时计价；`desirecore-cloud` 的连接与计费状态仍由登录后的 Provider 接口动态下发；
- Codex、Claude 条目必须能在对应 `compute/providers/*.json` 中按 exact model 找到，测试会阻止已下线模型继续参与路由。

客户端把本文件作为可热更新主数据源，并保留同 Schema 的内置离线兜底。调整 Provider 或 model-spec 的能力事实时，应同步审阅本目录，避免路由快照漂移。

---

## 本地校验

```bash
npm install
npm run validate     # 校验所有数据文件
npm test             # 跑单元测试（含反例测试）
```

CI（GitHub Actions）会在每个 PR 自动运行 `validate` 和 `test`，不通过禁止合并。

---

## 数据修改流程

1. 编辑 `compute/providers/<name>.json`、`compute/coding-plans/<name>.json`、`compute/service-map.json` 或 `compute/smart-routing/model-catalog.json`
2. 编辑 `compute/providers/_index.json` 或 `coding-plans/_index.json`（新增/删除 provider 时）
3. **必须**递增 `manifest.json#presetDataVersion`，并更新 `updatedAt`
4. `npm run validate` 本地确认通过
5. 提 PR，等 CI 校验通过
6. 合并到 main 后客户端会在下次后台 fetch（最长 30 分钟）拾取更新

---

## 客户端拉取机制

详见 [desirecore CLAUDE.md](https://github.com/desirecore/desirecore/blob/main/CLAUDE.md)
"Config Center" 章节。

- **构建期同步**：`npm run sync-config-center` 把数据复制到 desirecore 主仓 `lib/agent-service/defaults/`
- **运行时同步**：客户端启动后后台 git fetch 本仓库，每 30 分钟检查一次远程更新
- **版本比对**：`presetDataVersion`（递增整数）+ digest（SHA-256）双重校验
- **智能路由目录**：新客户端按文件 mtime 热加载 `compute/smart-routing/model-catalog.json`；缺失或校验失败时使用随客户端发布的内置 JSON
