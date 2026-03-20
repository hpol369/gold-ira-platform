// Admin stats API — returns lead quality metrics, funnel stats, email sequence data
// Protected by CRON_SECRET or admin PIN header

import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { getQueueStats } from "@/lib/email-queue";

function isAuthorized(request: NextRequest): boolean {
  const authHeader = request.headers.get("x-admin-pin");
  if (process.env.ADMIN_PIN && authHeader === process.env.ADMIN_PIN) return true;

  const cronSecret = request.headers.get("authorization");
  if (cronSecret === `Bearer ${process.env.CRON_SECRET}`) return true;

  if (process.env.NODE_ENV === "development") return true;

  return false;
}

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
}

interface PostbackRow {
  id: string;
  type: string;
  sub_id: string | null;
  lead_id: string | null;
  created_at: string;
}

interface SubscriberRow {
  id: string;
  email: string;
  source: string;
  created_at: string;
  status: string | null;
}

interface ClickRow {
  id: string;
  source: string;
  created_at: string;
  campaign: string | null;
}

export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Fetch all data in parallel
    const [leadsResult, subscribersResult, clicksResult, postbacksResult, emailStats] = await Promise.all([
      supabase.from("leads").select("*").order("created_at", { ascending: false }).limit(200),
      supabase.from("email_subscribers").select("*").order("created_at", { ascending: false }).limit(500),
      supabase.from("source_clicks").select("*").order("created_at", { ascending: false }).limit(1000),
      supabase.from("postback_events").select("*").order("created_at", { ascending: false }).limit(200),
      getQueueStats(),
    ]);

    const leads = (leadsResult.data || []) as LeadRow[];
    const subscribers = (subscribersResult.data || []) as SubscriberRow[];
    const clicks = (clicksResult.data || []) as ClickRow[];
    const postbacks = (postbacksResult.data || []) as PostbackRow[];

    // Calculate lead metrics
    const now = new Date();
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

    const recentLeads = leads.filter((l) => new Date(l.created_at) > thirtyDaysAgo);
    const weekLeads = leads.filter((l) => new Date(l.created_at) > sevenDaysAgo);

    // Savings tier breakdown
    const tierBreakdown: Record<string, number> = {};
    for (const lead of leads) {
      const tier = lead.savings_tier || "Unknown";
      tierBreakdown[tier] = (tierBreakdown[tier] || 0) + 1;
    }

    // Source breakdown
    const sourceBreakdown: Record<string, number> = {};
    for (const lead of leads) {
      const source = lead.source || "Unknown";
      sourceBreakdown[source] = (sourceBreakdown[source] || 0) + 1;
    }

    // Concern breakdown
    const concernBreakdown: Record<string, number> = {};
    for (const lead of leads) {
      if (lead.concern) {
        concernBreakdown[lead.concern] = (concernBreakdown[lead.concern] || 0) + 1;
      }
    }

    // Status breakdown
    const statusBreakdown: Record<string, number> = {};
    for (const lead of leads) {
      const status = lead.status || "unknown";
      statusBreakdown[status] = (statusBreakdown[status] || 0) + 1;
    }

    // Qualified leads (50k+)
    const qualifiedTiers = ["$50k-$100k", "$100k-$250k", "$250k+"];
    const qualifiedLeads = leads.filter((l) => l.savings_tier && qualifiedTiers.includes(l.savings_tier));
    const augustaLeads = leads.filter((l) => l.status === "sent_to_augusta");

    // Revenue potential
    const totalDealMin = leads.reduce((sum, l) => sum + (l.potential_deal_min || 0), 0);
    const totalDealMax = leads.reduce((sum, l) => sum + (l.potential_deal_max || 0), 0);

    // Click sources
    const clickSourceBreakdown: Record<string, number> = {};
    for (const click of clicks) {
      const source = click.source || "Unknown";
      clickSourceBreakdown[source] = (clickSourceBreakdown[source] || 0) + 1;
    }

    // Subscriber sources
    const subSourceBreakdown: Record<string, number> = {};
    for (const sub of subscribers) {
      const source = sub.source || "Unknown";
      subSourceBreakdown[source] = (subSourceBreakdown[source] || 0) + 1;
    }

    // Daily lead trend (last 30 days)
    const dailyLeads: Record<string, number> = {};
    const dailyClicks: Record<string, number> = {};
    const dailySubs: Record<string, number> = {};

    for (let i = 29; i >= 0; i--) {
      const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
      const key = date.toISOString().split("T")[0];
      dailyLeads[key] = 0;
      dailyClicks[key] = 0;
      dailySubs[key] = 0;
    }

    for (const lead of recentLeads) {
      const key = lead.created_at.split("T")[0];
      if (dailyLeads[key] !== undefined) dailyLeads[key]++;
    }

    const recentClicks = clicks.filter((c) => new Date(c.created_at) > thirtyDaysAgo);
    for (const click of recentClicks) {
      const key = click.created_at.split("T")[0];
      if (dailyClicks[key] !== undefined) dailyClicks[key]++;
    }

    const recentSubs = subscribers.filter((s) => new Date(s.created_at) > thirtyDaysAgo);
    for (const sub of recentSubs) {
      const key = sub.created_at.split("T")[0];
      if (dailySubs[key] !== undefined) dailySubs[key]++;
    }

    // Postback stats
    const postbackStats = {
      total: postbacks.length,
      leadCapture: postbacks.filter((p) => p.type === "lead_capture").length,
      qualifiedLead: postbacks.filter((p) => p.type === "qualified_lead").length,
      tradeComplete: postbacks.filter((p) => p.type === "trade_complete").length,
    };

    const recentPostbacks = postbacks.slice(0, 10).map((p) => ({
      type: p.type,
      subId: p.sub_id,
      leadId: p.lead_id,
      createdAt: p.created_at,
    }));

    // A/B test stats
    const abVariants: Record<string, { total: number; qualified: number; submitted: number }> = {};
    for (const lead of leads) {
      const variant = lead.ab_variant || "none";
      if (!abVariants[variant]) {
        abVariants[variant] = { total: 0, qualified: 0, submitted: 0 };
      }
      abVariants[variant].total++;
      if (lead.savings_tier && qualifiedTiers.includes(lead.savings_tier)) {
        abVariants[variant].qualified++;
      }
      if (lead.status === "sent_to_augusta") {
        abVariants[variant].submitted++;
      }
    }

    // Recent leads for the table (last 20)
    const recentLeadsList = leads.slice(0, 20).map((l) => ({
      id: l.id,
      name: `${l.first_name} ${l.last_name || ""}`.trim(),
      email: l.email,
      phone: l.phone,
      source: l.source,
      status: l.status,
      savingsTier: l.savings_tier,
      concern: l.concern,
      routedTo: l.routed_to,
      dealMin: l.potential_deal_min,
      dealMax: l.potential_deal_max,
      createdAt: l.created_at,
    }));

    return NextResponse.json({
      success: true,
      overview: {
        totalLeads: leads.length,
        monthlyLeads: recentLeads.length,
        weeklyLeads: weekLeads.length,
        qualifiedLeads: qualifiedLeads.length,
        augustaSubmitted: augustaLeads.length,
        totalSubscribers: subscribers.length,
        totalClicks: clicks.length,
        monthlyClicks: recentClicks.length,
        revenueMin: totalDealMin,
        revenueMax: totalDealMax,
      },
      breakdowns: {
        tier: tierBreakdown,
        source: sourceBreakdown,
        concern: concernBreakdown,
        status: statusBreakdown,
        clickSource: clickSourceBreakdown,
        subscriberSource: subSourceBreakdown,
      },
      trends: {
        dailyLeads,
        dailyClicks,
        dailySubs,
      },
      emailSequences: emailStats,
      postbacks: postbackStats,
      recentPostbacks,
      abTest: abVariants,
      recentLeads: recentLeadsList,
      timestamp: now.toISOString(),
    });
  } catch (error) {
    console.error("[ADMIN_STATS] Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch stats" },
      { status: 500 }
    );
  }
}
