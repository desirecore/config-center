# 摩尔线程：官网证据目录

[供应商索引](README.md)

核验日期：2026-10-03。这里只登记可复用的官网证据与适用边界，具体模型与接入面分别记录。

## 官网证据

### moorethread

- 入口：[moorethread](https://code.mthreads.com/)
- 类型：`official-doc`；当前读取状态：`shell`；地域/接入面：`moorethread 官方入口；具体地域与接入面待该页面逐字段确认`。

## 已知边界与核验说明

官网当前只返回应用壳。模型路由别名与服务端映射需要账号模型清单确认。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "moorethread",
  "checkedAt": "2026-10-03",
  "sources": [
    {
      "id": "moorethread",
      "url": "https://code.mthreads.com/",
      "kind": "official-doc",
      "scope": "moorethread 官方入口；具体地域与接入面待该页面逐字段确认",
      "retrieval": "shell",
      "checkedAt": "2026-10-03",
      "contentSha256": "9e00ed825718527aa14241054147d5ee0db12e59cd630b0ae559df4678262a52",
      "resolvedUrl": "https://code.mthreads.com/"
    }
  ]
}
```
<!-- source-metadata:end -->
