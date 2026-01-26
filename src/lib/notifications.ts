import type { PostbackEvent, PostbackType } from "@/app/api/postback/route";

// Configuration - Set these in your .env.local file
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
const EMAIL_TO = process.env.NOTIFICATION_EMAIL;
const RESEND_API_KEY = process.env.RESEND_API_KEY;

// Emoji and labels for different event types
const eventConfig: Record<PostbackType, { emoji: string; label: string; priority: string }> = {
  lead_capture: {
    emoji: "🎯",
    label: "New Lead Captured",
    priority: "normal"
  },
  qualified_lead: {
    emoji: "⭐",
    label: "Lead Qualified",
    priority: "high"
  },
  trade_complete: {
    emoji: "💰",
    label: "TRADE COMPLETED - COMMISSION!",
    priority: "urgent"
  }
};

export async function sendNotification(event: PostbackEvent): Promise<void> {
  const config = eventConfig[event.type];

  // Build message
  const message = formatMessage(event, config);

  // Send to all configured channels in parallel
  const promises: Promise<void>[] = [];

  if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
    promises.push(sendTelegram(message, config.priority === "urgent"));
  }

  if (RESEND_API_KEY && EMAIL_TO) {
    promises.push(sendEmail(event, config));
  }

  // Wait for all notifications to send
  await Promise.allSettled(promises);
}

function formatMessage(
  event: PostbackEvent,
  config: { emoji: string; label: string }
): string {
  const lines = [
    `${config.emoji} ${config.label}`,
    ``,
    `📅 Time: ${new Date(event.timestamp).toLocaleString()}`,
    `📄 Source: ${event.sub_id || "Unknown"}`,
  ];

  if (event.lead_id) {
    lines.push(`🆔 Lead ID: ${event.lead_id}`);
  }

  // Add any extra fields
  const skipFields = ["type", "sub_id", "lead_id", "timestamp", "ip", "user_agent"];
  Object.entries(event).forEach(([key, value]) => {
    if (!skipFields.includes(key) && value) {
      lines.push(`📌 ${key}: ${value}`);
    }
  });

  // Add motivational message for trade complete
  if (event.type === "trade_complete") {
    lines.push(``);
    lines.push(`🎉🎉🎉 NICE! Commission incoming! 🎉🎉🎉`);
  }

  return lines.join("\n");
}

async function sendTelegram(message: string, urgent: boolean): Promise<void> {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.log("[TELEGRAM] Not configured, skipping");
    return;
  }

  try {
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "HTML",
        // Disable notification sound for normal leads, enable for urgent
        disable_notification: !urgent
      })
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("[TELEGRAM ERROR]", error);
    } else {
      console.log("[TELEGRAM] Notification sent");
    }
  } catch (error) {
    console.error("[TELEGRAM ERROR]", error);
  }
}

async function sendEmail(
  event: PostbackEvent,
  config: { emoji: string; label: string; priority: string }
): Promise<void> {
  if (!RESEND_API_KEY || !EMAIL_TO) {
    console.log("[EMAIL] Not configured, skipping");
    return;
  }

  try {
    // Using Resend API (https://resend.com)
    // You can swap this for SendGrid, Postmark, or SMTP
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: "Rich Dad Retirement <notifications@richdadretirement.com>",
        to: EMAIL_TO,
        subject: `${config.emoji} ${config.label} - Rich Dad Retirement`,
        html: formatEmailHtml(event, config)
      })
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("[EMAIL ERROR]", error);
    } else {
      console.log("[EMAIL] Notification sent");
    }
  } catch (error) {
    console.error("[EMAIL ERROR]", error);
  }
}

function formatEmailHtml(
  event: PostbackEvent,
  config: { emoji: string; label: string }
): string {
  const bgColor = event.type === "trade_complete" ? "#10b981" :
                  event.type === "qualified_lead" ? "#f59e0b" : "#3b82f6";

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
        .container { max-width: 500px; margin: 0 auto; padding: 20px; }
        .header { background: ${bgColor}; color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
        .content { background: #f8fafc; padding: 20px; border-radius: 0 0 8px 8px; }
        .row { padding: 10px 0; border-bottom: 1px solid #e2e8f0; }
        .label { color: #64748b; font-size: 12px; text-transform: uppercase; }
        .value { color: #1e293b; font-size: 16px; font-weight: 500; }
        .celebration { text-align: center; font-size: 24px; padding: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="margin: 0; font-size: 24px;">${config.emoji} ${config.label}</h1>
        </div>
        <div class="content">
          <div class="row">
            <div class="label">Time</div>
            <div class="value">${new Date(event.timestamp).toLocaleString()}</div>
          </div>
          <div class="row">
            <div class="label">Source Page</div>
            <div class="value">${event.sub_id || "Unknown"}</div>
          </div>
          ${event.lead_id ? `
          <div class="row">
            <div class="label">Lead ID</div>
            <div class="value">${event.lead_id}</div>
          </div>
          ` : ""}
          ${event.type === "trade_complete" ? `
          <div class="celebration">
            🎉🎉🎉<br>
            <strong>Commission Earned!</strong>
          </div>
          ` : ""}
        </div>
      </div>
    </body>
    </html>
  `;
}

// Test function - call from /api/test-notification
export async function sendTestNotification(): Promise<void> {
  const testEvent: PostbackEvent = {
    type: "lead_capture",
    sub_id: "test-page",
    lead_id: "TEST-123",
    timestamp: new Date().toISOString(),
  };

  await sendNotification(testEvent);
}

/**
 * Simple function to send a Telegram notification message
 * Used for high-value lead alerts and other direct notifications
 */
export async function sendTelegramNotification(message: string, urgent: boolean = false): Promise<void> {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.log("[TELEGRAM] Not configured, skipping notification");
    return;
  }

  try {
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "HTML",
        disable_notification: !urgent
      })
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("[TELEGRAM ERROR]", error);
    } else {
      console.log("[TELEGRAM] Direct notification sent");
    }
  } catch (error) {
    console.error("[TELEGRAM ERROR]", error);
  }
}
