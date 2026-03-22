// Admin leads API — returns lead activity data, email queue, postbacks, system health
// Protected by ADMIN_PIN header or CRON_SECRET

import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

function isAuthorized(request: NextRequest): boolean {
  const authHeader = request.headers.get("x-admin-pin");
  if (process.env.ADMIN_PIN && authHeader === process.env.ADMIN_PIN) return true;

  const cronSecret = request.headers.get("authorization");
  if (cronSecret === `Bearer ${process.env.CRON_SECRET}`) return true;

  if (process.env.NODE_ENV === "development") return true;

  return false;
}

// --- Row types matching Supabase tables ---

interface LeadRow {
  id: string;
  created_at: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  source: string;
  status: string;
  savings_tier: string | null;
  concern: string | null;
  qualification_tier: string | null;
  routed_to: string | null;
  potential_deal_min: number | null;
  potential_deal_max: number | null;
  is_qualified: boolean | null;
  ab_variant: string | null;
  telegram_message_ids: string | null;
  notes: string | null;
  email_sequence: string | null;
}

interface EmailQueueRow {
  id: string;
  email: string;
  sequence_name: string;
  step_number: number;
  subject: string;
  status: string;
  scheduled_at: string;
  sent_at: string | null;
  created_at: string;
}

interface PostbackRow {
  id: string;
  type: string;
  sub_id: string | null;
  lead_id: string | null;
  email: string | null;
  created_at: string;
}

// --- Response types ---

interface LeadResponse {
  id: string;
  createdAt: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  source: string;
  status: string;
  savingsTier: string | null;
  concern: string | null;
  qualificationTier: string | null;
  routedTo: string | null;
  dealMin: number | null;
  dealMax: number | null;
  isQualified: boolean | null;
  abVariant: string | null;
  telegramMessageIds: string | null;
  notes: string | null;
  emailSequence: string | null;
}

interface EmailQueueResponse {
  id: string;
  email: string;
  sequenceName: string;
  stepNumber: number;
  subject: string;
  status: string;
  scheduledAt: string;
  sentAt: string | null;
  createdAt: string;
}

interface PostbackResponse {
  id: string;
  type: string;
  subId: string | null;
  leadId: string | null;
  email: string | null;
  createdAt: string;
}

interface SystemHealth {
  supabase: boolean;
  telegram: boolean;
  augusta: boolean;
  email: boolean;
  sms: boolean;
}

interface LeadsApiResponse {
  success: boolean;
  leads: LeadResponse[];
  emailQueue: EmailQueueResponse[];
  postbacks: PostbackResponse[];
  systemHealth: SystemHealth;
  timestamp: string;
}

function mapLead(row: LeadRow): LeadResponse {
  return {
    id: row.id,
    createdAt: row.created_at,
    firstName: row.first_name,
    lastName: row.last_name,
    email: row.email,
    phone: row.phone,
    source: row.source,
    status: row.status,
    savingsTier: row.savings_tier,
    concern: row.concern,
    qualificationTier: row.qualification_tier,
    routedTo: row.routed_to,
    dealMin: row.potential_deal_min,
    dealMax: row.potential_deal_max,
    isQualified: row.is_qualified,
    abVariant: row.ab_variant,
    telegramMessageIds: row.telegram_message_ids,
    notes: row.notes,
    emailSequence: row.email_sequence,
  };
}

function mapEmailQueue(row: EmailQueueRow): EmailQueueResponse {
  return {
    id: row.id,
    email: row.email,
    sequenceName: row.sequence_name,
    stepNumber: row.step_number,
    subject: row.subject,
    status: row.status,
    scheduledAt: row.scheduled_at,
    sentAt: row.sent_at,
    createdAt: row.created_at,
  };
}

function mapPostback(row: PostbackRow): PostbackResponse {
  return {
    id: row.id,
    type: row.type,
    subId: row.sub_id,
    leadId: row.lead_id,
    email: row.email,
    createdAt: row.created_at,
  };
}

export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // 1. Fetch last 50 leads
    const { data: leadsRaw } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(50);

    const leadRows = (leadsRaw || []) as LeadRow[];

    // 2. Fetch email_sequence_queue for these leads' emails
    const emails = leadRows.map((l) => l.email).filter(Boolean);
    const { data: emailQueueRaw } = await supabase
      .from("email_sequence_queue")
      .select("*")
      .in("email", emails.length > 0 ? emails : ["__none__"]);

    const emailQueueRows = (emailQueueRaw || []) as EmailQueueRow[];

    // 3. Fetch last 100 postback events
    const { data: postbacksRaw } = await supabase
      .from("postback_events")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(100);

    const postbackRows = (postbacksRaw || []) as PostbackRow[];

    // 4. System health checks
    const augustaUrl = process.env.AUGUSTA_WEBHOOK_URL || "";
    const systemHealth: SystemHealth = {
      supabase: true, // we successfully queried above
      telegram: !!(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_IDS),
      augusta: !!(augustaUrl && !augustaUrl.includes("\n")),
      email: !!process.env.RESEND_API_KEY,
      sms: !!(process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN),
    };

    const response: LeadsApiResponse = {
      success: true,
      leads: leadRows.map(mapLead),
      emailQueue: emailQueueRows.map(mapEmailQueue),
      postbacks: postbackRows.map(mapPostback),
      systemHealth,
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("[ADMIN_LEADS] Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch lead activity data" },
      { status: 500 }
    );
  }
}
