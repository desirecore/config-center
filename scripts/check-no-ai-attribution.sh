#!/usr/bin/env bash
# 在指定 git 范围内拦截 AI 贡献痕迹。
#
# 检测三类位置（使用 ai-attribution-patterns.txt 中的关键字）：
#   1) commit author / committer 的 name 或 email
#   2) commit message 中的 Co-Authored-By: trailer
#   3) commit message 中的 "Generated/Authored/Written/Created/Powered (with|by|using) <X>" 声明
# 此外单独检测：
#   4) 🤖 emoji（极少在合法 commit 中出现，常用于 AI 自动生成签名）
set -euo pipefail

range="${1:-}"
if [ -z "$range" ]; then
  echo "Usage: $0 <git-range>" >&2
  exit 2
fi

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
patterns_file="${script_dir}/ai-attribution-patterns.txt"

if [ ! -f "$patterns_file" ]; then
  echo "Patterns file missing: $patterns_file" >&2
  exit 2
fi

# 把 patterns 文件转成 ERE 交替式：去除注释/空行/前后空白，转义正则元字符，再用 | 拼接。
regex=$(sed -E '
  /^[[:space:]]*#/d
  /^[[:space:]]*$/d
  s/^[[:space:]]+//
  s/[[:space:]]+$//
  s/[][\\.^$|*+?{}()]/\\&/g
' "$patterns_file" | paste -sd'|' -)

if [ -z "$regex" ]; then
  echo "Patterns file has no active entries: $patterns_file" >&2
  exit 2
fi

tmp="$(mktemp)"
trap 'rm -f "$tmp"' EXIT

git log --pretty=format:'COMMIT %H%nAUTH %an <%ae>%nCOMM %cn <%ce>%nMSG-BEGIN%n%B%nMSG-END%n' "$range" > "$tmp"

fail=0

# 1. author / committer 身份
if grep -nEi "^(AUTH|COMM) .*(${regex})" "$tmp"; then
  echo "::error::Detected AI-related identity in commit author/committer"
  fail=1
fi

# 提取消息体，复用给 trailer / 声明 / emoji 检测
msgs="$(awk '/^MSG-BEGIN$/{flag=1;next}/^MSG-END$/{flag=0}flag' "$tmp")"

# 2. Co-Authored-By trailer
if printf '%s\n' "$msgs" | grep -nEi "^[[:space:]]*co-authored-by:.*(${regex})"; then
  echo "::error::Detected Co-Authored-By trailer referencing AI"
  fail=1
fi

# 3. AI 生成 / 编写 / 驱动声明
if printf '%s\n' "$msgs" \
    | grep -nEi "(generated|authored|written|created|produced|powered)[[:space:]]+(with|by|using)[[:space:]].*(${regex})"; then
  echo "::error::Detected AI generation/authoring statement"
  fail=1
fi

# 4. 🤖 emoji
if printf '%s\n' "$msgs" | grep -nF '🤖'; then
  echo "::error::Detected 🤖 emoji in commit message (commonly used as AI signature)"
  fail=1
fi

if [ "$fail" -ne 0 ]; then
  echo
  echo "Range scanned: $range"
  echo "Patterns file: $patterns_file"
  echo "Adjust the offending commits (e.g., 'git rebase -i' to drop the trailer/footer) and re-push."
fi

exit "$fail"
