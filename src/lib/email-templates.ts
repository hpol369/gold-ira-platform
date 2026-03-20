// Branded HTML email templates for Rich Dad Retirement
// All emails use consistent branding: navy header, clean body, red CTA button

const SITE_URL = "https://richdadretirement.com";
const UNSUBSCRIBE_URL = `${SITE_URL}/api/email/unsubscribe`;

interface EmailLayoutOptions {
  preheader?: string;
  body: string;
  ctaText?: string;
  ctaUrl?: string;
  email: string;
  sequence?: string;
}

/**
 * Wraps email content in branded layout with header, footer, unsubscribe link
 */
export function emailLayout({ preheader, body, ctaText, ctaUrl, email, sequence }: EmailLayoutOptions): string {
  const unsubLink = `${UNSUBSCRIBE_URL}?email=${encodeURIComponent(email)}&seq=${encodeURIComponent(sequence || "all")}`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rich Dad Retirement</title>
  ${preheader ? `<span style="display:none;font-size:1px;color:#ffffff;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">${preheader}</span>` : ""}
</head>
<body style="margin:0;padding:0;background-color:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color:#f1f5f9;">
    <tr>
      <td align="center" style="padding:24px 16px;">
        <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:#000080;padding:24px 32px;border-radius:12px 12px 0 0;text-align:center;">
              <h1 style="margin:0;font-size:22px;font-weight:700;color:#ffffff;letter-spacing:0.5px;">
                Rich Dad Retirement
              </h1>
              <p style="margin:4px 0 0;font-size:12px;color:#94a3b8;">
                Protecting American Retirement Savings
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#ffffff;padding:32px;border-left:1px solid #e2e8f0;border-right:1px solid #e2e8f0;">
              ${body}

              ${ctaText && ctaUrl ? `
              <!-- CTA Button -->
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin:28px 0;">
                <tr>
                  <td align="center">
                    <a href="${ctaUrl}" target="_blank" style="display:inline-block;padding:14px 32px;background-color:#B22234;color:#ffffff;font-size:16px;font-weight:700;text-decoration:none;border-radius:8px;letter-spacing:0.3px;">
                      ${ctaText}
                    </a>
                  </td>
                </tr>
              </table>
              ` : ""}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f8fafc;padding:24px 32px;border-radius:0 0 12px 12px;border:1px solid #e2e8f0;border-top:0;">
              <p style="margin:0 0 8px;font-size:12px;color:#94a3b8;text-align:center;">
                Rich Dad Retirement · Educational resource for American retirees
              </p>
              <p style="margin:0 0 8px;font-size:12px;color:#94a3b8;text-align:center;">
                <a href="${SITE_URL}" style="color:#64748b;text-decoration:underline;">Visit our site</a>
                &nbsp;·&nbsp;
                <a href="${unsubLink}" style="color:#64748b;text-decoration:underline;">Unsubscribe</a>
              </p>
              <p style="margin:0;font-size:11px;color:#cbd5e1;text-align:center;">
                You're receiving this because you signed up at richdadretirement.com
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/**
 * Paragraph helper for consistent email body text
 */
export function p(text: string): string {
  return `<p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#334155;">${text}</p>`;
}

/**
 * Heading helper
 */
export function h2(text: string): string {
  return `<h2 style="margin:0 0 12px;font-size:20px;font-weight:700;color:#000080;">${text}</h2>`;
}

/**
 * Bullet list helper
 */
export function ul(items: string[]): string {
  const lis = items.map(item => `<li style="margin:0 0 8px;font-size:15px;line-height:1.5;color:#334155;">${item}</li>`).join("");
  return `<ul style="margin:0 0 16px;padding-left:20px;">${lis}</ul>`;
}

/**
 * Divider
 */
export function hr(): string {
  return `<hr style="margin:24px 0;border:none;border-top:1px solid #e2e8f0;">`;
}

/**
 * Trust signal badge
 */
export function trustBadge(): string {
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin:20px 0 0;">
      <tr>
        <td align="center">
          <p style="margin:0;font-size:12px;color:#94a3b8;">
            🔒 SSL Encrypted · A+ BBB Partners · 10,000+ Americans Educated
          </p>
        </td>
      </tr>
    </table>
  `;
}
