import { NextRequest, NextResponse } from "next/server";
import { sendNotification } from "@/lib/notifications";

// Store subscribers (in production, use a database or email service like Mailchimp/ConvertKit)
const subscribers: Set<string> = new Set();

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes("@") || !email.includes(".")) {
      return NextResponse.json(
        { success: false, message: "Invalid email address" },
        { status: 400 }
      );
    }

    // Check if already subscribed
    if (subscribers.has(email.toLowerCase())) {
      return NextResponse.json({
        success: true,
        message: "Already subscribed",
      });
    }

    // Add to subscribers
    subscribers.add(email.toLowerCase());

    // Send Telegram notification
    try {
      await sendNotification({
        type: "lead_capture",
        sub_id: "newsletter",
        timestamp: new Date().toISOString(),
        email: email,
      });
    } catch {
      // Don't fail if notification fails
      console.error("Failed to send newsletter notification");
    }

    // Log for debugging
    console.log(`[NEWSLETTER] New subscriber: ${email}`);
    console.log(`[NEWSLETTER] Total subscribers: ${subscribers.size}`);

    // In production, you would:
    // 1. Add to Mailchimp/ConvertKit/Resend audience
    // 2. Store in database
    // 3. Send welcome email

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed",
    });
  } catch (error) {
    console.error("[NEWSLETTER ERROR]", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

// GET endpoint to check subscriber count (for admin)
export async function GET() {
  return NextResponse.json({
    count: subscribers.size,
    // Don't expose actual emails
  });
}
