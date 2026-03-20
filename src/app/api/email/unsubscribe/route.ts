// Unsubscribe endpoint — handles one-click unsubscribe from email links
// GET: Shows unsubscribe confirmation (redirects to page)
// POST: Processes the unsubscribe

import { NextRequest, NextResponse } from "next/server";
import { unsubscribeEmail } from "@/lib/email-queue";

export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get("email");
  const seq = request.nextUrl.searchParams.get("seq") || "all";

  if (!email) {
    return NextResponse.json(
      { error: "Missing email parameter" },
      { status: 400 }
    );
  }

  // Process the unsubscribe immediately (one-click)
  const success = await unsubscribeEmail(email, seq);

  // Redirect to a simple confirmation page
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://richdadretirement.com";

  if (success) {
    // Return a simple HTML confirmation
    return new NextResponse(
      `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Unsubscribed — Rich Dad Retirement</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f1f5f9; margin: 0; padding: 40px 20px; }
    .card { max-width: 480px; margin: 60px auto; background: white; border-radius: 12px; padding: 40px; text-align: center; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    h1 { color: #000080; font-size: 24px; margin: 0 0 12px; }
    p { color: #64748b; font-size: 15px; line-height: 1.6; margin: 0 0 20px; }
    a { color: #B22234; text-decoration: none; font-weight: 600; }
    a:hover { text-decoration: underline; }
    .check { font-size: 48px; margin-bottom: 16px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="check">✅</div>
    <h1>You've Been Unsubscribed</h1>
    <p>You won't receive any more emails from this sequence. We're sorry to see you go.</p>
    <p><a href="${baseUrl}">← Back to Rich Dad Retirement</a></p>
  </div>
</body>
</html>`,
      {
        headers: { "Content-Type": "text/html" },
      }
    );
  }

  return new NextResponse(
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Unsubscribe — Rich Dad Retirement</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f1f5f9; margin: 0; padding: 40px 20px; }
    .card { max-width: 480px; margin: 60px auto; background: white; border-radius: 12px; padding: 40px; text-align: center; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    h1 { color: #000080; font-size: 24px; margin: 0 0 12px; }
    p { color: #64748b; font-size: 15px; line-height: 1.6; margin: 0 0 20px; }
    a { color: #B22234; text-decoration: none; font-weight: 600; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Something Went Wrong</h1>
    <p>We couldn't process your unsubscribe request. Please try again or contact us.</p>
    <p><a href="${baseUrl}">← Back to Rich Dad Retirement</a></p>
  </div>
</body>
</html>`,
    {
      headers: { "Content-Type": "text/html" },
    }
  );
}
