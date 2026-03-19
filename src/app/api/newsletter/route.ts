import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { sendTelegramNotification } from "@/lib/notifications";

export async function POST(request: NextRequest) {
  try {
    const { email, source } = await request.json();

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email) || email.length > 254) {
      return NextResponse.json(
        { success: false, message: "Invalid email address" },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();
    const cleanSource = (source || "unknown").replace(/<[^>]*>/g, "").trim().slice(0, 100);

    // Upsert to Supabase (ignore duplicate)
    const { error } = await supabase
      .from("email_subscribers")
      .upsert(
        { email: cleanEmail, source: cleanSource },
        { onConflict: "email", ignoreDuplicates: true }
      );

    if (error) {
      console.error("[NEWSLETTER] Supabase error:", error);
      return NextResponse.json(
        { success: false, message: "Database error" },
        { status: 500 }
      );
    }

    // Send Telegram notification
    try {
      await sendTelegramNotification(
        [
          "📧 <b>New Email Subscriber</b>",
          "",
          `📩 ${cleanEmail}`,
          `📄 Source: ${cleanSource}`,
          `🕐 ${new Date().toLocaleString("nl-NL", { timeZone: "Europe/Amsterdam" })}`,
        ].join("\n"),
        false
      );
    } catch {
      console.error("[NEWSLETTER] Telegram notification failed");
    }

    console.log(`[NEWSLETTER] Subscriber: ${cleanEmail} from ${cleanSource}`);

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
