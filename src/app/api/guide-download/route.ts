import { NextResponse } from "next/server";
import { supabase, type Lead } from "@/lib/supabase";
import { enrollInSequence } from "@/lib/email-queue";
import { sendTelegramNotification } from "@/lib/notifications";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, email } = body;

    // Validate
    if (!firstName || !email) {
      return NextResponse.json(
        { success: false, message: "First name and email are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email address" },
        { status: 400 }
      );
    }

    // Check if this email already exists as a lead
    const { data: existingLead } = await supabase
      .from("leads")
      .select("id, email, status")
      .eq("email", email.toLowerCase())
      .maybeSingle();

    if (existingLead) {
      // Already a lead — check if they're in content-nurture (better sequence, don't downgrade)
      const { data: activeSequence } = await supabase
        .from("email_sequence_queue")
        .select("sequence")
        .eq("email", email.toLowerCase())
        .eq("status", "pending")
        .limit(1)
        .maybeSingle();

      if (!activeSequence || activeSequence.sequence !== "content-nurture") {
        // Not in content-nurture — enroll in guide-nurture
        await enrollInSequence(email.toLowerCase(), "guide-nurture", "guide-landing-page", firstName);
      }
      // If already in content-nurture, let that better sequence continue

      return NextResponse.json({
        success: true,
        message: "Guide sent! Check your email.",
      });
    }

    // Insert as new lead (guide-download status — no phone, not sent to Augusta)
    const lead: Partial<Lead> = {
      first_name: firstName,
      email: email.toLowerCase(),
      source: "guide-landing-page",
      status: "new",
      notes: "Guide download only — no phone number provided",
    };

    // Get IP/geo from headers
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "";
    const userAgent = request.headers.get("user-agent") || "";

    const { error: insertError } = await supabase
      .from("leads")
      .insert({
        ...lead,
        ip_address: ip,
        user_agent: userAgent,
      });

    if (insertError) {
      console.error("[GUIDE-DOWNLOAD] Insert error:", insertError);
      return NextResponse.json(
        { success: false, message: "Something went wrong. Please try again." },
        { status: 500 }
      );
    }

    // Enroll in content-nurture (better than guide-nurture for new leads)
    // Falls back to guide-nurture if content-nurture doesn't exist
    try {
      await enrollInSequence(email.toLowerCase(), "content-nurture", "guide-landing-page", firstName, { topicSlug: "guide-free" });
    } catch {
      await enrollInSequence(email.toLowerCase(), "guide-nurture", "guide-landing-page", firstName);
    }

    // Also add to email_subscribers
    await supabase
      .from("email_subscribers")
      .upsert(
        { email: email.toLowerCase(), source: "guide-landing-page", status: "active" },
        { onConflict: "email" }
      );

    // Send Telegram notification
    try {
      await sendTelegramNotification(
        [
          "📖 <b>Guide Download</b>",
          "",
          `👤 ${firstName}`,
          `📧 ${email}`,
          `📍 Source: Guide Landing Page`,
          "",
          "💡 Low-friction lead — no phone. In <b>guide-nurture</b> sequence.",
          `🕐 ${new Date().toLocaleString("nl-NL", { timeZone: "Europe/Amsterdam" })}`,
        ].join("\n"),
        false
      );
    } catch {
      console.error("[GUIDE-DOWNLOAD] Telegram notification failed");
    }

    return NextResponse.json({
      success: true,
      message: "Guide sent! Check your email.",
    });
  } catch (error) {
    console.error("[GUIDE-DOWNLOAD] Error:", error);
    return NextResponse.json(
      { success: false, message: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
