import { createClient, SupabaseClient } from "@supabase/supabase-js";

// Lazy-initialized server-side Supabase client with service role (full access).
// Lazy init is critical: during `next build`, page data collection may load
// modules that import this file even when env vars aren't available — which
// used to throw "supabaseUrl is required" at module evaluation and break the
// build. Instantiating on first use pushes any missing-env failure to request
// time, where it can be handled gracefully.
//
// Supports both env var naming conventions:
//   - SUPABASE_URL / SUPABASE_SERVICE_KEY (legacy, used in existing Vercel env)
//   - NEXT_PUBLIC_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY (modern, .env.example)
let _client: SupabaseClient | null = null;

function getClient(): SupabaseClient {
  if (_client) return _client;

  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error(
      "[SUPABASE] Missing env: set SUPABASE_URL (or NEXT_PUBLIC_SUPABASE_URL) and SUPABASE_SERVICE_KEY (or SUPABASE_SERVICE_ROLE_KEY)"
    );
  }

  _client = createClient(url, key);
  return _client;
}

// Proxy that defers client creation until first property access.
// Preserves `import { supabase }` usage across the codebase.
export const supabase = new Proxy({} as SupabaseClient, {
  get(_target, prop) {
    const client = getClient() as unknown as Record<string | symbol, unknown>;
    const value = client[prop];
    return typeof value === "function" ? value.bind(client) : value;
  },
});

// Lead type matching our database schema
export interface Lead {
  id?: string;
  created_at?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  source: string;
  ip_address?: string;
  user_agent?: string;
  status?: "new" | "sent_to_augusta" | "contacted" | "qualified" | "unqualified" | "converted" | "declined_call";
  augusta_submitted_at?: string;
  notes?: string;
  total_retirement_savings?: string;
  percentage_to_protect?: string;
  potential_deal_min?: number;
  potential_deal_max?: number;
  is_qualified?: boolean;
  telegram_message_id?: number;
  telegram_message_ids?: string; // JSON: {"chatId": messageId, ...}
  // Qualification funnel fields
  savings_tier?: string;
  concern?: string;
  qualification_tier?: string;
  routed_to?: string;
  email_sequence?: string;
  ab_variant?: string;
  // Metal preference for precious metals leads
  metal_preference?: "gold" | "silver" | "both";
}

// Insert a new lead
export async function insertLead(lead: Omit<Lead, "id" | "created_at">): Promise<Lead | null> {
  const { data, error } = await supabase
    .from("leads")
    .insert([lead])
    .select()
    .single();

  if (error) {
    console.error("[SUPABASE] Insert error:", error);
    return null;
  }

  console.log("[SUPABASE] Lead inserted:", data.id);
  return data;
}

// Update lead status
export async function updateLeadStatus(
  id: string,
  status: Lead["status"],
  additionalFields?: Partial<Lead>
): Promise<boolean> {
  const { error } = await supabase
    .from("leads")
    .update({ status, ...additionalFields })
    .eq("id", id);

  if (error) {
    console.error("[SUPABASE] Update error:", error);
    return false;
  }

  console.log("[SUPABASE] Lead updated:", id, status);
  return true;
}

// Generic update lead
export async function updateLead(
  id: string,
  updates: Partial<Lead>
): Promise<boolean> {
  const { error } = await supabase
    .from("leads")
    .update(updates)
    .eq("id", id);

  if (error) {
    console.error("[SUPABASE] Update error:", error);
    return false;
  }

  console.log("[SUPABASE] Lead updated generic:", id);
  return true;
}

// Get lead by ID
export async function getLeadById(id: string): Promise<Lead | null> {
  const { data, error } = await supabase
    .from("leads")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("[SUPABASE] Get error:", error);
    return null;
  }

  return data;
}

// Get lead by email (for deduplication)
export async function getLeadByEmail(email: string): Promise<Lead | null> {
  const { data, error } = await supabase
    .from("leads")
    .select("*")
    .eq("email", email)
    .order("created_at", { ascending: false })
    .limit(1)
    .single();

  if (error && error.code !== "PGRST116") { // PGRST116 = no rows returned
    console.error("[SUPABASE] Get by email error:", error);
    return null;
  }

  return data;
}

// Source click tracking
export interface SourceClick {
  id?: string;
  created_at?: string;
  source: string;
  campaign?: string;
  ip_address?: string;
  user_agent?: string;
  device?: string;
  country?: string;
  city?: string;
  referer?: string;
}

// Track a source click (YouTube, Facebook, etc.)
export async function trackSourceClick(click: Omit<SourceClick, "id" | "created_at">): Promise<boolean> {
  const { error } = await supabase
    .from("source_clicks")
    .insert([click]);

  if (error) {
    console.error("[SUPABASE] Track click error:", error);
    return false;
  }

  console.log("[SUPABASE] Click tracked:", click.source, click.campaign);
  return true;
}

// Get click stats by source
export async function getClickStats(source?: string): Promise<{ source: string; count: number }[]> {
  let query = supabase
    .from("source_clicks")
    .select("source");

  if (source) {
    query = query.eq("source", source);
  }

  const { data, error } = await query;

  if (error) {
    console.error("[SUPABASE] Get click stats error:", error);
    return [];
  }

  // Count by source
  const counts: Record<string, number> = {};
  for (const row of data || []) {
    counts[row.source] = (counts[row.source] || 0) + 1;
  }

  return Object.entries(counts).map(([source, count]) => ({ source, count }));
}
