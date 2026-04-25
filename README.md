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

### 关键规则：新增字段需先升级老客户端 schema

`provider` 和 `model` 顶层均启用 `additionalProperties: false`。如需新增字段：

1. 先在 desirecore 主仓 `lib/schemas/agent-service/compute.ts` 升级 schema 接受新字段
2. 发布新版本客户端
3. 等大部分用户升级
4. 再更新本仓库的 frozen schema 和数据

否则老客户端会因未知字段校验失败死锁。

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

1. 编辑 `compute/providers/<name>.json`、`compute/coding-plans/<name>.json` 或 `compute/service-map.json`
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
