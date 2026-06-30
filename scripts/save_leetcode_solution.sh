#!/bin/zsh
set -euo pipefail

REPO_DIR="/Users/thisisgulshanshah/Documents/SPACE FOR UTM"
LEETCODE_DIR="$REPO_DIR/LEET CODE"

if [ "$#" -lt 3 ]; then
  echo "Usage: scripts/save_leetcode_solution.sh problem-slug language path-to-solution-file"
  echo "Example: scripts/save_leetcode_solution.sh two-sum cpp ~/Desktop/two-sum.cpp"
  exit 1
fi

PROBLEM_SLUG="$1"
LANGUAGE="$2"
SOURCE_FILE="$3"

case "$LANGUAGE" in
  c++) EXT="cpp" ;;
  cpp) EXT="cpp" ;;
  java) EXT="java" ;;
  python) EXT="py" ;;
  py) EXT="py" ;;
  javascript) EXT="js" ;;
  js) EXT="js" ;;
  typescript) EXT="ts" ;;
  ts) EXT="ts" ;;
  go) EXT="go" ;;
  rust) EXT="rs" ;;
  *) EXT="$LANGUAGE" ;;
esac

DEST_DIR="$LEETCODE_DIR/$PROBLEM_SLUG"
DEST_FILE="$DEST_DIR/solution.$EXT"

mkdir -p "$DEST_DIR"
cp "$SOURCE_FILE" "$DEST_FILE"

cd "$REPO_DIR"
git add "$DEST_FILE"
git commit -m "leetcode: add $PROBLEM_SLUG solution"
git push origin HEAD

echo "Saved and pushed: $DEST_FILE"
