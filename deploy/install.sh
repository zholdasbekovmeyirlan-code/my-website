#!/bin/sh
# Prepares a fresh Ubuntu server for Бәрі. Run as root:
#   sh install.sh https://github.com/<owner>/<repo>.git [branch]
set -e
REPO="${1:?Usage: sh install.sh <git-url> [branch]}"
BRANCH="${2:-main}"
apt-get update -y && apt-get install -y git curl
command -v docker >/dev/null 2>&1 || curl -fsSL https://get.docker.com | sh
if [ -d /opt/bari/.git ]; then
  git -C /opt/bari fetch origin "$BRANCH" && git -C /opt/bari checkout "$BRANCH" && git -C /opt/bari pull origin "$BRANCH"
else
  git clone --branch "$BRANCH" "$REPO" /opt/bari
fi
cd /opt/bari/deploy
[ -f .env ] || cp env.example .env
echo
echo "Next: edit /opt/bari/deploy/.env (DOMAIN, ADMIN_PHONES, OTP_SECRET), then run:"
echo "  cd /opt/bari/deploy && docker compose up -d --build"
