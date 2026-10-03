# 模型数据来源导航

[更新前核查清单](../../AGENTS.md) · [维护规则](MAINTENANCE.md) · [模板](TEMPLATE.md)

本目录按供应商、官网证据、单模型、单接入面分层记录。索引不承载全部参数表；模型差异和核验状态在对应文件中维护。

```text
providers/<supplier>/
  README.md                 # 供应商导航
  SOURCES.md                # 官网证据与适用边界
  models/<model-id>.md       # 单模型参数及接入差异
  access/<category>--<id>.md # 单接入面平台配置
```

本次结构迁移：28 个供应商目录、360 个单模型文件、62 个单接入面文件。619 条记录及 317 partial / 301 pending / 1 historical 的状态原样保留；未重新核验或提高状态。

## 供应商

| 供应商 | 模型文件 | 接入面文件 |
| --- | ---: | ---: |
| [阿里云百炼 / Qwen / Wan / HappyHorse](providers/alibaba/README.md) | 65 | 6 |
| [Anthropic](providers/anthropic/README.md) | 11 | 3 |
| [百川](providers/baichuan/README.md) | 4 | 2 |
| [百度千帆](providers/baidu/README.md) | 14 | 3 |
| [Cohere](providers/cohere/README.md) | 10 | 2 |
| [DeepSeek](providers/deepseek/README.md) | 8 | 2 |
| [GitHub Copilot](providers/github-copilot/README.md) | 0 | 1 |
| [Google Gemini](providers/google/README.md) | 20 | 2 |
| [无问芯穹](providers/infini/README.md) | 1 | 1 |
| [可灵](providers/kling/README.md) | 6 | 2 |
| [快手 StreamLake Coding](providers/kwai/README.md) | 1 | 1 |
| [MiniMax](providers/minimax/README.md) | 30 | 3 |
| [Mistral](providers/mistral/README.md) | 6 | 2 |
| [月之暗面 Kimi](providers/moonshot/README.md) | 14 | 3 |
| [摩尔线程](providers/moorethread/README.md) | 1 | 1 |
| [Ollama](providers/ollama/README.md) | 1 | 1 |
| [OpenAI](providers/openai/README.md) | 50 | 4 |
| [OpenRouter](providers/openrouter/README.md) | 15 | 1 |
| [Perplexity](providers/perplexity/README.md) | 3 | 2 |
| [硅基流动](providers/siliconflow/README.md) | 3 | 1 |
| [Stability AI](providers/stability/README.md) | 2 | 2 |
| [匿名模型历史兼容](providers/stealth/README.md) | 1 | 1 |
| [腾讯混元](providers/tencent/README.md) | 19 | 3 |
| [火山引擎](providers/volcengine/README.md) | 37 | 3 |
| [xAI](providers/xai/README.md) | 7 | 2 |
| [小米 MiMo](providers/xiaomi/README.md) | 15 | 2 |
| [讯飞星火](providers/xunfei/README.md) | 2 | 2 |
| [智谱](providers/zhipu/README.md) | 14 | 4 |

## 阅读示例

- [GPT-6.1 Sol](providers/openai/models/gpt-6.1-sol.md)：原厂与订阅接入分别列出。
- [OpenAI API 接入](providers/openai/access/providers--openai.md)：端点、协议、币种与关联模型。
- [OpenAI 官网证据](providers/openai/SOURCES.md)：可复用证据与边界。

来源校验入口：`npm run validate:sources`。任何模型遗漏、来源引用错误、参数详情或指纹陈旧都会失败。完整工作流程见维护规则和 AGENTS.md。
