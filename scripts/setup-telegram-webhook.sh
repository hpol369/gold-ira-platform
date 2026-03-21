#!/bin/bash
# Set up Telegram bot webhook for inline button callbacks
# Run once after deploy: ./scripts/setup-telegram-webhook.sh

if [ -z "$TELEGRAM_BOT_TOKEN" ]; then
  echo "Error: TELEGRAM_BOT_TOKEN env var not set"
  echo "Usage: TELEGRAM_BOT_TOKEN=your_token ./scripts/setup-telegram-webhook.sh"
  exit 1
fi

WEBHOOK_URL="https://richdadretirement.com/api/telegram/webhook"

echo "Setting Telegram webhook to: $WEBHOOK_URL"

curl -s "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/setWebhook?url=${WEBHOOK_URL}" | python3 -m json.tool 2>/dev/null || curl -s "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/setWebhook?url=${WEBHOOK_URL}"

echo ""
echo "Verifying webhook info:"
curl -s "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getWebhookInfo" | python3 -m json.tool 2>/dev/null || curl -s "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getWebhookInfo"
