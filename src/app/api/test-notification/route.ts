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
    });
  } catch (error) {
    console.error("[TEST NOTIFICATION ERROR]", error);
    return NextResponse.json({
      success: false,
      message: "Error sending test notification",
    }, { status: 500 });
  }
}
