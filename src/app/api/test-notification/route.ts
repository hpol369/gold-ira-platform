import { NextResponse } from "next/server";
import { sendTestNotification } from "@/lib/notifications";

// Test endpoint - send a test notification
// Visit: /api/test-notification to test your Telegram/Email setup
export async function GET() {
  try {
    await sendTestNotification();

    return NextResponse.json({
      success: true,
      message: "Test notification sent! Check your Telegram/Email.",
      configured: {
        telegram: !!(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID),
        email: !!(process.env.RESEND_API_KEY && process.env.NOTIFICATION_EMAIL)
      }
    });
  } catch (error) {
    console.error("[TEST NOTIFICATION ERROR]", error);
    return NextResponse.json({
      success: false,
      message: "Error sending test notification",
      error: String(error)
    }, { status: 500 });
  }
}
