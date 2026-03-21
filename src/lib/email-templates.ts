// Branded HTML email templates for Rich Dad Retirement — V2.2
// Premium design: navy header with gold accent, callout boxes, responsive CTA,
// trust signals, mobile-optimized, proper preheader padding

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
 * V2.2: Gold accent bar, responsive CTA, trust footer, mobile padding
 */
export function emailLayout({ preheader, body, ctaText, ctaUrl, email, sequence }: EmailLayoutOptions): string {
  const unsubLink = `${UNSUBSCRIBE_URL}?email=${encodeURIComponent(email)}&seq=${encodeURIComponent(sequence || "all")}`;

  // Pad preheader to prevent email clients from pulling body text into preview
  const paddedPreheader = preheader
    ? `${preheader}${"&nbsp;&zwnj;".repeat(40)}`
    : "";

  return `<!DOCTYPE html>
<html lang="en" xmlns:v="urn:schemas-microsoft-com:vml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="x-apple-disable-message-reformatting">
  <title>Rich Dad Retirement</title>
  <!--[if mso]>
  <style>table{border-collapse:collapse;}td{font-family:Arial,sans-serif;}</style>
  <![endif]-->
  <style>
    @media only screen and (max-width: 620px) {
      .email-container { width: 100% !important; }
      .email-body { padding: 24px 20px !important; }
      .cta-button { display: block !important; width: 100% !important; text-align: center !important; padding: 16px 24px !important; }
      .header-pad { padding: 20px 20px !important; }
      .footer-pad { padding: 20px !important; }
      .callout-pad { padding: 16px !important; }
      .stat-table td { display: block !important; width: 100% !important; padding: 8px 0 !important; text-align: center !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background-color:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
  ${paddedPreheader ? `<div style="display:none;font-size:1px;color:#f1f5f9;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">${paddedPreheader}</div>` : ""}
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color:#f1f5f9;">
    <tr>
      <td align="center" style="padding:24px 16px;">
        <table role="presentation" cellpadding="0" cellspacing="0" width="600" class="email-container" style="max-width:600px;width:100%;">

          <!-- Gold accent bar -->
          <tr>
            <td style="background:linear-gradient(90deg,#d4a017,#f0c040,#d4a017);height:4px;border-radius:12px 12px 0 0;font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- Header -->
          <tr>
            <td class="header-pad" style="background:#000080;padding:24px 32px;text-align:center;">
              <h1 style="margin:0;font-size:22px;font-weight:700;color:#ffffff;letter-spacing:0.5px;">
                Rich<span style="color:#f0c040;">Dad</span>Retirement
              </h1>
              <p style="margin:6px 0 0;font-size:12px;color:#94a3b8;letter-spacing:0.3px;">
                PROTECTING AMERICAN RETIREMENT SAVINGS
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td class="email-body" style="background:#ffffff;padding:32px 36px;border-left:1px solid #e2e8f0;border-right:1px solid #e2e8f0;">
              ${body}

              ${ctaText && ctaUrl ? `
              <!-- CTA Button — full-width on mobile -->
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin:28px 0 8px;">
                <tr>
                  <td align="center">
                    <!--[if mso]>
                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" href="${ctaUrl}" style="height:50px;v-text-anchor:middle;width:320px;" arcsize="16%" fillcolor="#B22234" stroke="f">
                    <center style="color:#ffffff;font-family:Arial,sans-serif;font-size:16px;font-weight:bold;">${ctaText}</center>
                    </v:roundrect>
                    <![endif]-->
                    <!--[if !mso]><!-->
                    <a href="${ctaUrl}" target="_blank" class="cta-button" style="display:inline-block;padding:15px 36px;background-color:#B22234;color:#ffffff;font-size:16px;font-weight:700;text-decoration:none;border-radius:8px;letter-spacing:0.3px;mso-hide:all;">
                      ${ctaText}
                    </a>
                    <!--<![endif]-->
                  </td>
                </tr>
              </table>
              ` : ""}
            </td>
          </tr>

          <!-- Trust bar -->
          <tr>
            <td style="background:#f8fafc;padding:16px 32px;border-left:1px solid #e2e8f0;border-right:1px solid #e2e8f0;text-align:center;">
              <p style="margin:0;font-size:12px;color:#64748b;">
                &#128274; SSL Encrypted &nbsp;&middot;&nbsp; A+ BBB Rated Partners &nbsp;&middot;&nbsp; 10,000+ Americans Educated
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td class="footer-pad" style="background:#f8fafc;padding:20px 32px 24px;border-radius:0 0 12px 12px;border:1px solid #e2e8f0;border-top:none;">
              <p style="margin:0 0 8px;font-size:12px;color:#94a3b8;text-align:center;">
                <a href="${SITE_URL}" style="color:#64748b;text-decoration:underline;">Visit our site</a>
                &nbsp;&middot;&nbsp;
                <a href="${SITE_URL}/best-gold-ira-companies" style="color:#64748b;text-decoration:underline;">Company reviews</a>
                &nbsp;&middot;&nbsp;
                <a href="${SITE_URL}/tools" style="color:#64748b;text-decoration:underline;">Free calculators</a>
                &nbsp;&middot;&nbsp;
                <a href="${unsubLink}" style="color:#64748b;text-decoration:underline;">Unsubscribe</a>
              </p>
              <p style="margin:0;font-size:11px;color:#cbd5e1;text-align:center;">
                Rich Dad Retirement &middot; You're receiving this because you signed up at richdadretirement.com
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
  return `<p style="margin:0 0 16px;font-size:15px;line-height:1.65;color:#334155;">${text}</p>`;
}

/**
 * Heading helper — navy blue with subtle bottom border
 */
export function h2(text: string): string {
  return `<h2 style="margin:24px 0 12px;font-size:19px;font-weight:700;color:#000080;border-bottom:2px solid #f0c040;padding-bottom:6px;display:inline-block;">${text}</h2>`;
}

/**
 * Bullet list helper — gold bullet markers
 */
export function ul(items: string[]): string {
  const lis = items.map(item =>
    `<li style="margin:0 0 10px;font-size:15px;line-height:1.55;color:#334155;padding-left:4px;">${item}</li>`
  ).join("");
  return `<ul style="margin:0 0 16px;padding-left:20px;list-style-type:disc;">${lis}</ul>`;
}

/**
 * Divider — subtle gold-tinted line
 */
export function hr(): string {
  return `<hr style="margin:28px 0;border:none;border-top:2px solid #f0c04020;">`;
}

/**
 * Callout box — highlighted info block with left gold border
 * Use for key stats, warnings, or important highlights
 */
export function callout(content: string, type: "info" | "warning" | "success" = "info"): string {
  const colors = {
    info: { bg: "#eff6ff", border: "#000080", text: "#1e3a5f" },
    warning: { bg: "#fef3c7", border: "#d4a017", text: "#78350f" },
    success: { bg: "#ecfdf5", border: "#059669", text: "#064e3b" },
  };
  const c = colors[type];
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin:20px 0;">
      <tr>
        <td class="callout-pad" style="background:${c.bg};border-left:4px solid ${c.border};padding:16px 20px;border-radius:0 8px 8px 0;">
          <p style="margin:0;font-size:14px;line-height:1.55;color:${c.text};">${content}</p>
        </td>
      </tr>
    </table>
  `;
}

/**
 * Stat block — 2-3 numbers in a row (responsive: stacks on mobile)
 * Use for gold prices, savings numbers, etc.
 */
export function statRow(stats: { label: string; value: string }[]): string {
  const cells = stats.map(s =>
    `<td style="padding:12px 16px;text-align:center;vertical-align:top;">
      <p style="margin:0;font-size:24px;font-weight:700;color:#000080;">${s.value}</p>
      <p style="margin:4px 0 0;font-size:12px;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">${s.label}</p>
    </td>`
  ).join("");

  return `
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" class="stat-table" style="margin:20px 0;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;">
      <tr>${cells}</tr>
    </table>
  `;
}

/**
 * Quote block — testimonial/social proof
 */
export function quote(text: string, attribution: string): string {
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin:20px 0;">
      <tr>
        <td style="padding:20px 24px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;">
          <p style="margin:0 0 8px;font-size:15px;line-height:1.6;color:#334155;font-style:italic;">&ldquo;${text}&rdquo;</p>
          <p style="margin:0;font-size:13px;color:#64748b;font-weight:600;">— ${attribution}</p>
        </td>
      </tr>
    </table>
  `;
}

/**
 * Secondary CTA — lighter, text-link style button
 * Use below main CTA for alternative actions
 */
export function secondaryCta(text: string, url: string): string {
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin:0 0 16px;">
      <tr>
        <td align="center">
          <a href="${url}" style="display:inline-block;padding:10px 24px;background:transparent;color:#000080;font-size:14px;font-weight:600;text-decoration:underline;border-radius:6px;">
            ${text}
          </a>
        </td>
      </tr>
    </table>
  `;
}

/**
 * UTM-tagged link for email attribution tracking
 * Appends utm_source=email, utm_medium=sequence, utm_campaign=sequenceId, utm_content=step-N
 */
export function utmLink(url: string, sequence: string, step: number): string {
  // Don't add UTMs to external affiliate links, phone links, or PDFs
  if (!url.includes("richdadretirement.com") || url.startsWith("tel:") || url.endsWith(".pdf")) {
    return url;
  }
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}utm_source=email&utm_medium=sequence&utm_campaign=${encodeURIComponent(sequence)}&utm_content=step-${step}`;
}

/**
 * Trust signal badge — legacy compat
 */
export function trustBadge(): string {
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin:20px 0 0;">
      <tr>
        <td align="center">
          <p style="margin:0;font-size:12px;color:#94a3b8;">
            &#128274; SSL Encrypted &middot; A+ BBB Partners &middot; 10,000+ Americans Educated
          </p>
        </td>
      </tr>
    </table>
  `;
}
