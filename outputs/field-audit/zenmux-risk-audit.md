# ZenMux Risk Audit

GeneratedAt: 2026-04-25T16:15:04.854Z
Source: /Users/xieyuanxiang/config-center/outputs/field-audit/zenmux-sync-report.json

- HIGH: 0
- MEDIUM: 15
- LOW: 88

## Notes

- HIGH covers schema-breaking sampling defaults such as `null`.
- MEDIUM covers ambiguous third-party model matches.
- LOW covers models without a ZenMux match; these require official-doc review but do not by themselves indicate JSON invalidity.
