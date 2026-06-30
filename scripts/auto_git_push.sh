#!/bin/zsh
set -euo pipefail

REPO_DIR="/Users/thisisgulshanshah/Documents/SPACE FOR UTM"
LOG_FILE="$REPO_DIR/.auto-git-sync.log"

cd "$REPO_DIR"

{
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] auto sync started"

  if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
    echo "Not a git repository. Stopping."
    exit 1
  fi

  if ! git remote get-url origin >/dev/null 2>&1; then
    echo "No origin remote configured. Stopping."
    exit 1
  fi

  git add --all

  if git diff --cached --quiet; then
    echo "No changes to commit."
    exit 0
  fi

  git commit -m "auto: sync programming changes $(date '+%Y-%m-%d %H:%M:%S')"
  git push origin HEAD

  echo "Auto sync finished."
} >> "$LOG_FILE" 2>&1
