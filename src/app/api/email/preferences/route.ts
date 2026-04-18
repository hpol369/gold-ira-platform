// Email Preference Center API
// Replaces binary unsubscribe with options:
// 1. Pause for 30 days
// 2. Weekly digest only (reduce frequency)
// 3. Unsubscribe from sequences but keep newsletter
// 4. Unsubscribe from everything

import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { sendTelegramNotification } from "@/lib/notifications";

export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get("email");
  const seq = request.nextUrl.searchParams.get("seq") || "all";

  if (!email) {
    return new NextResponse(preferencePage("Missing email", "", "error"), {
      headers: { "Content-Type": "text/html" },
    });
  }

  // Show the preference center page
  return new NextResponse(preferencePage("", email, "form", seq), {
    headers: { "Content-Type": "text/html" },
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, action } = body;

    if (!email || !action) {
      return NextResponse.json({ success: false, error: "Missing fields" }, { status: 400 });
    }

    switch (action) {
      case "pause-30": {
        // Pause all emails for 30 days
        const resumeDate = new Date();
        resumeDate.setDate(resumeDate.getDate() + 30);

        await supabase
          .from("email_subscribers")
          .update({
            status: "paused",
            paused_until: resumeDate.toISOString(),
          })
          .eq("email", email.toLowerCase());

        // Also pause any pending sequence emails
        await supabase
          .from("email_sequence_queue")
          .update({ status: "paused" })
          .eq("email", email.toLowerCase())
          .eq("status", "pending");

        await sendTelegramNotification(
          `⏸️ <b>Email Paused (30 days)</b>\n📧 ${email}\n📅 Resumes: ${resumeDate.toLocaleDateString("en-US")}`,
          false
        );

        return NextResponse.json({ success: true, message: "paused" });
      }

      case "newsletter-only": {
        // Cancel sequences but keep newsletter
        await supabase
          .from("email_sequence_queue")
          .update({ status: "cancelled" })
          .eq("email", email.toLowerCase())
          .eq("status", "pending");

        await supabase
          .from("email_subscribers")
          .update({ status: "newsletter-only" })
          .eq("email", email.toLowerCase());

        await sendTelegramNotification(
          `📬 <b>Switched to Newsletter Only</b>\n📧 ${email}\n❌ Sequences cancelled, newsletter active`,
          false
        );

        return NextResponse.json({ success: true, message: "newsletter-only" });
      }

      case "unsubscribe-all": {
        // Full unsubscribe
        await supabase
          .from("email_sequence_queue")
          .update({ status: "cancelled" })
          .eq("email", email.toLowerCase())
          .eq("status", "pending");

        await supabase
          .from("email_subscribers")
          .update({ status: "unsubscribed" })
          .eq("email", email.toLowerCase());

        await sendTelegramNotification(
          `🚫 <b>Full Unsubscribe</b>\n📧 ${email}`,
          false
        );

        return NextResponse.json({ success: true, message: "unsubscribed" });
      }

      default:
        return NextResponse.json({ success: false, error: "Invalid action" }, { status: 400 });
    }
  } catch (error) {
    console.error("[PREFERENCES] Error:", error);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}

function preferencePage(error: string, email: string, mode: "form" | "error", seq?: string): string {
  if (mode === "error") {
    return basePage("Something Went Wrong", `<p style="color:#64748b;">${error}</p>`);
  }

  return basePage("Email Preferences", `
    <p style="color:#64748b;margin-bottom:32px;">Choose how you'd like to hear from us, <strong>${email}</strong>:</p>

    <div id="options" style="text-align:left;">
      <button onclick="choose('pause-30')" class="option">
        <div class="option-icon">⏸️</div>
        <div>
          <div class="option-title">Pause for 30 Days</div>
          <div class="option-desc">Take a break. We'll automatically resume in 30 days.</div>
        </div>
      </button>

      <button onclick="choose('newsletter-only')" class="option">
        <div class="option-icon">📬</div>
        <div>
          <div class="option-title">Newsletter Only</div>
          <div class="option-desc">Stop the nurture sequence but keep getting weekly market updates.</div>
        </div>
      </button>

      <button onclick="choose('unsubscribe-all')" class="option" style="border-color:#fee2e2;">
        <div class="option-icon">🚫</div>
        <div>
          <div class="option-title">Unsubscribe from Everything</div>
          <div class="option-desc">No more emails. You can always re-subscribe on our site.</div>
        </div>
      </button>
    </div>

    <div id="result" style="display:none;text-align:center;padding:24px 0;">
      <div style="font-size:48px;margin-bottom:16px;" id="result-icon"></div>
      <h2 style="color:#1e293b;margin:0 0 8px;" id="result-title"></h2>
      <p style="color:#64748b;" id="result-desc"></p>
    </div>

    <script>
      async function choose(action) {
        document.getElementById('options').style.display = 'none';
        const res = await fetch('/api/email/preferences', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: '${email}', action: action })
        });
        const data = await res.json();
        const result = document.getElementById('result');
        result.style.display = 'block';

        const messages = {
          'paused': { icon: '⏸️', title: 'Emails Paused', desc: "You won't hear from us for 30 days. We'll automatically resume after that." },
          'newsletter-only': { icon: '📬', title: 'Switched to Newsletter Only', desc: "You'll only get our weekly market updates. No more nurture emails." },
          'unsubscribed': { icon: '✅', title: "You're Unsubscribed", desc: "You won't receive any more emails from us. We're sorry to see you go." }
        };

        const msg = messages[data.message] || { icon: '⚠️', title: 'Error', desc: 'Something went wrong. Please try again.' };
        document.getElementById('result-icon').textContent = msg.icon;
        document.getElementById('result-title').textContent = msg.title;
        document.getElementById('result-desc').innerHTML = msg.desc;
      }
    </script>
  `);
}

function basePage(title: string, content: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} — Rich Dad Retirement</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f1f5f9; margin: 0; padding: 40px 20px; }
    .card { max-width: 520px; margin: 40px auto; background: white; border-radius: 16px; padding: 40px; box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
    .header { text-align: center; margin-bottom: 24px; }
    .header h1 { color: #000080; font-size: 22px; margin: 0; }
    .header .brand { color: #94a3b8; font-size: 12px; margin-top: 4px; letter-spacing: 0.5px; text-transform: uppercase; }
    .option { display: flex; align-items: flex-start; gap: 16px; width: 100%; padding: 16px; margin-bottom: 12px; background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 12px; cursor: pointer; text-align: left; font-family: inherit; transition: all 0.15s; }
    .option:hover { border-color: #000080; background: #eff6ff; }
    .option-icon { font-size: 24px; flex-shrink: 0; margin-top: 2px; }
    .option-title { font-weight: 600; color: #1e293b; font-size: 15px; margin-bottom: 4px; }
    .option-desc { color: #64748b; font-size: 13px; line-height: 1.4; }
    a.back { display: inline-block; margin-top: 24px; color: #000080; text-decoration: none; font-weight: 600; font-size: 14px; }
    a.back:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>${title}</h1>
      <div class="brand">Rich Dad Retirement</div>
    </div>
    ${content}
    <div style="text-align:center;">
      <a href="https://richdadretirement.com" class="back">← Back to richdadretirement.com</a>
    </div>
  </div>
</body>
</html>`;
}
