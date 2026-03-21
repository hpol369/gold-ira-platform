import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { sendTelegramNotification } from "@/lib/notifications";
import { sendMissedCallSMS, isTwilioConfigured } from "@/lib/sms";

/**
 * Email status feedback endpoint
 * Called from "Did you connect with Augusta?" email (high-intent Day 3)
 *
 * GET /api/email/status?email=dave@email.com&action=connected
 * Actions: connected | not-connected | reschedule
 *
 * On "connected": updates lead status, skips remaining nurture emails (4-5)
 * On "not-connected": updates status, keeps all emails active
 * On "reschedule": same as not-connected, shows phone number
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email")?.toLowerCase();
  const action = searchParams.get("action");

  if (!email || !action) {
    return new NextResponse(statusPage("Missing Parameters", "Invalid link. Please try again from your email."), {
      headers: { "Content-Type": "text/html" },
    });
  }

  if (!["connected", "not-connected", "reschedule"].includes(action)) {
    return new NextResponse(statusPage("Invalid Action", "This link appears to be broken. Please try again from your email."), {
      headers: { "Content-Type": "text/html" },
    });
  }

  try {
    // Find the lead
    const { data: lead } = await supabase
      .from("leads")
      .select("id, first_name, status")
      .eq("email", email)
      .maybeSingle();

    if (!lead) {
      return new NextResponse(statusPage("Not Found", "We couldn't find your information. Please contact us if you need help."), {
        headers: { "Content-Type": "text/html" },
      });
    }

    if (action === "connected") {
      // Update lead status
      await supabase
        .from("leads")
        .update({ status: "contacted", notes: "Confirmed Augusta connection via email check-in" })
        .eq("id", lead.id);

      // Skip remaining nurture emails (steps 3 and 4 — the call-push ones)
      // Keep steps 5 and 6 (Kiyosaki + final resources — brand value)
      await supabase
        .from("email_sequence_queue")
        .update({ status: "skipped" })
        .eq("email", email)
        .eq("sequence", "high-intent")
        .eq("status", "pending")
        .in("step", [3, 4]);

      // Telegram notification
      await sendTelegramNotification(
        `🎯 <b>Lead Confirmed Augusta Connection!</b>\n\n👤 ${lead.first_name || "Unknown"}\n📧 ${email}\n\n✅ Status → contacted\n⏭️ Skipped emails 4-5 (no longer needed)`,
        true
      );

      return new NextResponse(
        statusPage(
          "Thanks for Letting Us Know!",
          `Great news, ${lead.first_name || ""}! We're glad you connected with Augusta. If you have any follow-up questions, feel free to reply to any of our emails — we read every response.`,
          true
        ),
        { headers: { "Content-Type": "text/html" } }
      );
    }

    if (action === "not-connected" || action === "reschedule") {
      // Update status to call-pending
      await supabase
        .from("leads")
        .update({ status: "new", notes: "Hasn't connected with Augusta yet — email check-in Day 3" })
        .eq("id", lead.id);

      // Send missed-call SMS if we have their phone number
      if (isTwilioConfigured()) {
        const { data: fullLead } = await supabase
          .from("leads")
          .select("phone")
          .eq("id", lead.id)
          .single();

        if (fullLead?.phone) {
          try {
            await sendMissedCallSMS(fullLead.phone, lead.first_name || undefined);
            console.log("[EMAIL-STATUS] Missed-call SMS sent to", fullLead.phone);
          } catch (err) {
            console.error("[EMAIL-STATUS] SMS failed:", err);
          }
        }
      }

      // Telegram notification
      await sendTelegramNotification(
        `📞 <b>Lead Hasn't Connected Yet</b>\n\n👤 ${lead.first_name || "Unknown"}\n📧 ${email}\n\n🔄 Status → call-pending\n📧 Continuing nurture emails\n📱 Missed-call SMS sent`,
        false
      );

      const phoneMessage = action === "reschedule"
        ? "You can call Augusta directly at <strong>844-405-3908</strong> — ask for the Gold IRA education team. The call is free and there's zero obligation."
        : "No worries! Augusta will try to reach you again. You can also call them directly at <strong>844-405-3908</strong> (Gold IRA education team) whenever you're ready.";

      return new NextResponse(
        statusPage(
          "No Problem!",
          `${phoneMessage}<br><br>In the meantime, we'll keep sending you helpful resources.`,
          false
        ),
        { headers: { "Content-Type": "text/html" } }
      );
    }
  } catch (error) {
    console.error("[EMAIL-STATUS] Error:", error);
    return new NextResponse(statusPage("Something Went Wrong", "Please try again later or contact us directly."), {
      headers: { "Content-Type": "text/html" },
    });
  }

  return new NextResponse(statusPage("Error", "Unknown error occurred."), {
    headers: { "Content-Type": "text/html" },
  });
}

/** Simple branded HTML response page */
function statusPage(title: string, message: string, success?: boolean): string {
  const emoji = success === true ? "✅" : success === false ? "📞" : "⚠️";
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} — Rich Dad Retirement</title>
  <style>
    body { margin:0; padding:0; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif; background:#f1f5f9; display:flex; align-items:center; justify-content:center; min-height:100vh; }
    .card { background:#fff; border-radius:16px; padding:48px; max-width:480px; width:90%; text-align:center; box-shadow:0 4px 24px rgba(0,0,0,0.08); }
    .emoji { font-size:48px; margin-bottom:16px; }
    h1 { color:#1e293b; font-size:24px; margin:0 0 12px; }
    p { color:#64748b; font-size:16px; line-height:1.6; margin:0 0 24px; }
    a.btn { display:inline-block; padding:12px 24px; background:#000080; color:#fff; text-decoration:none; border-radius:8px; font-weight:600; }
    a.btn:hover { background:#000060; }
  </style>
</head>
<body>
  <div class="card">
    <div class="emoji">${emoji}</div>
    <h1>${title}</h1>
    <p>${message}</p>
    <a href="https://richdadretirement.com" class="btn">Visit richdadretirement.com</a>
  </div>
</body>
</html>`;
}
