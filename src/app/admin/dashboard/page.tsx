"use client";

import { useState, useEffect, useCallback } from "react";
import { Container } from "@/components/ui/Container";
import {
  Lock,
  RefreshCw,
  Users,
  Target,
  DollarSign,
  Mail,
  MousePointer2,
  TrendingUp,
  ArrowUpRight,
  Clock,
  Shield,
  BarChart3,
  Inbox,
  Send,
  AlertCircle,
} from "lucide-react";

const ADMIN_PIN = "6903";

// Types for API response
interface OverviewData {
  totalLeads: number;
  monthlyLeads: number;
  weeklyLeads: number;
  qualifiedLeads: number;
  augustaSubmitted: number;
  totalSubscribers: number;
  totalClicks: number;
  monthlyClicks: number;
  revenueMin: number;
  revenueMax: number;
}

interface RecentLead {
  id: string;
  name: string;
  email: string;
  phone: string;
  source: string;
  status: string;
  savingsTier: string | null;
  concern: string | null;
  routedTo: string | null;
  dealMin: number | null;
  dealMax: number | null;
  createdAt: string;
}

interface EmailSequenceStats {
  total: number;
  pending: number;
  sent: number;
  failed: number;
  unsubscribed: number;
  bySequence: Record<string, { pending: number; sent: number }>;
}

interface PostbackStats {
  total: number;
  leadCapture: number;
  qualifiedLead: number;
  tradeComplete: number;
}

interface RecentPostback {
  type: string;
  subId: string | null;
  leadId: string | null;
  createdAt: string;
}

interface ABVariantStats {
  total: number;
  qualified: number;
  submitted: number;
}

interface DashboardData {
  overview: OverviewData;
  breakdowns: {
    tier: Record<string, number>;
    source: Record<string, number>;
    concern: Record<string, number>;
    status: Record<string, number>;
    clickSource: Record<string, number>;
    subscriberSource: Record<string, number>;
  };
  trends: {
    dailyLeads: Record<string, number>;
    dailyClicks: Record<string, number>;
    dailySubs: Record<string, number>;
  };
  emailSequences: EmailSequenceStats;
  postbacks: PostbackStats;
  recentPostbacks: RecentPostback[];
  abTest: Record<string, ABVariantStats>;
  recentLeads: RecentLead[];
  timestamp: string;
}

function formatCurrency(amount: number): string {
  if (amount >= 1000000) return `$${(amount / 1000000).toFixed(1)}M`;
  if (amount >= 1000) return `$${(amount / 1000).toFixed(0)}k`;
  return `$${amount}`;
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    new: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    sent_to_augusta: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    qualified: "bg-green-500/20 text-green-300 border-green-500/30",
    converted: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    contacted: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    declined_call: "bg-red-500/20 text-red-300 border-red-500/30",
    unqualified: "bg-slate-500/20 text-slate-300 border-slate-500/30",
  };

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${colors[status] || colors.new}`}>
      {status.replace(/_/g, " ")}
    </span>
  );
}

function TierBadge({ tier }: { tier: string | null }) {
  if (!tier) return <span className="text-slate-500 text-xs">—</span>;

  const isQualified = ["$50k-$100k", "$100k-$250k", "$250k+"].includes(tier);
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${
      isQualified
        ? "bg-green-500/20 text-green-300 border-green-500/30"
        : "bg-slate-500/20 text-slate-400 border-slate-500/30"
    }`}>
      {tier}
    </span>
  );
}

// Simple bar chart component (no external deps needed)
function MiniBarChart({ data, color }: { data: Record<string, number>; color: string }) {
  const entries = Object.entries(data).slice(-14); // Last 14 days
  const max = Math.max(...entries.map(([, v]) => v), 1);

  return (
    <div className="flex items-end gap-1 h-16">
      {entries.map(([date, value]) => (
        <div
          key={date}
          className="flex-1 rounded-t transition-all hover:opacity-80"
          style={{
            height: `${Math.max((value / max) * 100, 4)}%`,
            backgroundColor: value > 0 ? color : "rgba(100,116,139,0.2)",
          }}
          title={`${date}: ${value}`}
        />
      ))}
    </div>
  );
}

// Horizontal breakdown bar
function BreakdownBar({ data, colors }: { data: Record<string, number>; colors?: Record<string, string> }) {
  const total = Object.values(data).reduce((sum, v) => sum + v, 0);
  if (total === 0) return <p className="text-slate-500 text-sm">No data yet</p>;

  const sorted = Object.entries(data).sort(([, a], [, b]) => b - a);
  const defaultColors = ["#3b82f6", "#f59e0b", "#10b981", "#8b5cf6", "#ef4444", "#06b6d4", "#f97316", "#ec4899"];

  return (
    <div className="space-y-2">
      {sorted.slice(0, 8).map(([label, value], i) => {
        const pct = ((value / total) * 100).toFixed(0);
        const barColor = colors?.[label] || defaultColors[i % defaultColors.length];
        return (
          <div key={label}>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-300 truncate max-w-[70%]">{label}</span>
              <span className="text-slate-400">{value} ({pct}%)</span>
            </div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all"
                style={{ width: `${pct}%`, backgroundColor: barColor }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function DashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState("");
  const [pinError, setPinError] = useState(false);
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [lastRefresh, setLastRefresh] = useState<Date | null>(null);

  useEffect(() => {
    const saved = sessionStorage.getItem("admin_auth");
    if (saved === "true") setIsAuthenticated(true);
  }, []);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/stats", {
        headers: { "x-admin-pin": ADMIN_PIN },
      });
      const json = await res.json();
      if (json.success) {
        setData(json);
        setLastRefresh(new Date());
      }
    } catch (err) {
      console.error("Failed to fetch dashboard data:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) fetchData();
  }, [isAuthenticated, fetchData]);

  function handlePinSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (pin === ADMIN_PIN) {
      setIsAuthenticated(true);
      sessionStorage.setItem("admin_auth", "true");
      setPinError(false);
    } else {
      setPinError(true);
      setPin("");
    }
  }

  // PIN Screen
  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-sm w-full mx-4">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="h-8 w-8 text-amber-400" />
            </div>
            <h1 className="text-2xl font-bold text-white">Lead Dashboard</h1>
            <p className="text-slate-400 text-sm mt-2">Enter PIN to continue</p>
          </div>
          <form onSubmit={handlePinSubmit}>
            <input
              type="password"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={4}
              value={pin}
              onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))}
              placeholder="••••"
              className={`w-full text-center text-2xl tracking-[0.5em] bg-slate-800 border ${
                pinError ? "border-red-500" : "border-white/10"
              } rounded-xl px-4 py-4 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors`}
              autoFocus
            />
            {pinError && <p className="text-red-400 text-sm text-center mt-2">Incorrect PIN</p>}
            <button
              type="submit"
              className="w-full mt-4 px-4 py-3 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-xl transition-colors"
            >
              Access Dashboard
            </button>
          </form>
        </div>
      </main>
    );
  }

  if (loading && !data) {
    return (
      <main className="min-h-screen bg-slate-900 flex items-center justify-center">
        <RefreshCw className="h-8 w-8 text-amber-400 animate-spin" />
      </main>
    );
  }

  if (!data) {
    return (
      <main className="min-h-screen bg-slate-900 flex items-center justify-center">
        <p className="text-slate-400">Failed to load dashboard data</p>
      </main>
    );
  }

  const { overview, breakdowns, trends, emailSequences, postbacks, recentPostbacks, abTest, recentLeads } = data;

  return (
    <main className="min-h-screen bg-slate-900 py-8">
      <Container>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white">Lead Quality Dashboard</h1>
              <p className="text-slate-400 mt-1">
                {lastRefresh && `Updated ${lastRefresh.toLocaleTimeString()}`}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="/admin/conversions"
                className="px-4 py-2 bg-white/5 hover:bg-white/10 text-slate-300 rounded-lg transition-colors text-sm border border-white/10"
              >
                Conversions →
              </a>
              <button
                onClick={fetchData}
                disabled={loading}
                className="flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold rounded-lg transition-colors"
              >
                <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
                Refresh
              </button>
            </div>
          </div>

          {/* Top-level KPIs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <Users className="h-4 w-4 text-blue-400" />
                <span className="text-xs text-blue-300 uppercase font-medium">Total Leads</span>
              </div>
              <div className="text-3xl font-bold text-white">{overview.totalLeads}</div>
              <div className="text-sm text-slate-400 mt-1">
                <span className="text-blue-300">{overview.weeklyLeads}</span> this week
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <Target className="h-4 w-4 text-green-400" />
                <span className="text-xs text-green-300 uppercase font-medium">Qualified ($50k+)</span>
              </div>
              <div className="text-3xl font-bold text-white">{overview.qualifiedLeads}</div>
              <div className="text-sm text-slate-400 mt-1">
                {overview.totalLeads > 0 ? ((overview.qualifiedLeads / overview.totalLeads) * 100).toFixed(0) : 0}% qualification rate
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/20 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <Send className="h-4 w-4 text-amber-400" />
                <span className="text-xs text-amber-300 uppercase font-medium">Sent to Augusta</span>
              </div>
              <div className="text-3xl font-bold text-white">{overview.augustaSubmitted}</div>
              <div className="text-sm text-slate-400 mt-1">
                {overview.qualifiedLeads > 0 ? ((overview.augustaSubmitted / overview.qualifiedLeads) * 100).toFixed(0) : 0}% of qualified
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="h-4 w-4 text-purple-400" />
                <span className="text-xs text-purple-300 uppercase font-medium">Revenue Potential</span>
              </div>
              <div className="text-2xl font-bold text-white">
                {formatCurrency(overview.revenueMin)}–{formatCurrency(overview.revenueMax)}
              </div>
              <div className="text-sm text-slate-400 mt-1">from qualified leads</div>
            </div>
          </div>

          {/* Secondary KPIs */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <Mail className="h-4 w-4 text-cyan-400" />
                <span className="text-xs text-slate-400 uppercase font-medium">Email Subscribers</span>
              </div>
              <div className="text-2xl font-bold text-white">{overview.totalSubscribers}</div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <MousePointer2 className="h-4 w-4 text-orange-400" />
                <span className="text-xs text-slate-400 uppercase font-medium">Affiliate Clicks</span>
              </div>
              <div className="text-2xl font-bold text-white">{overview.totalClicks}</div>
              <div className="text-sm text-slate-400 mt-1">
                <span className="text-orange-300">{overview.monthlyClicks}</span> this month
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-4 w-4 text-emerald-400" />
                <span className="text-xs text-slate-400 uppercase font-medium">Click→Lead Rate</span>
              </div>
              <div className="text-2xl font-bold text-white">
                {overview.totalClicks > 0 ? ((overview.totalLeads / overview.totalClicks) * 100).toFixed(1) : 0}%
              </div>
            </div>
          </div>

          {/* Trend Charts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <h3 className="text-sm font-medium text-slate-300 mb-3">Daily Leads (14d)</h3>
              <MiniBarChart data={trends.dailyLeads} color="#3b82f6" />
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <h3 className="text-sm font-medium text-slate-300 mb-3">Daily Clicks (14d)</h3>
              <MiniBarChart data={trends.dailyClicks} color="#f59e0b" />
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <h3 className="text-sm font-medium text-slate-300 mb-3">Daily Subscribers (14d)</h3>
              <MiniBarChart data={trends.dailySubs} color="#06b6d4" />
            </div>
          </div>

          {/* Breakdowns + Email Sequences */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {/* Savings Tier */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-4 w-4 text-green-400" />
                <h3 className="text-sm font-medium text-white">Savings Tier Breakdown</h3>
              </div>
              <BreakdownBar
                data={breakdowns.tier}
                colors={{
                  "$250k+": "#10b981",
                  "$100k-$250k": "#22c55e",
                  "$50k-$100k": "#84cc16",
                  "$25k-$50k": "#f59e0b",
                  "Under $25k": "#ef4444",
                  Unknown: "#64748b",
                }}
              />
            </div>

            {/* Lead Source */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <ArrowUpRight className="h-4 w-4 text-blue-400" />
                <h3 className="text-sm font-medium text-white">Lead Source</h3>
              </div>
              <BreakdownBar data={breakdowns.source} />
            </div>

            {/* Concern */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="h-4 w-4 text-amber-400" />
                <h3 className="text-sm font-medium text-white">Primary Concern</h3>
              </div>
              <BreakdownBar data={breakdowns.concern} />
            </div>

            {/* Lead Status */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <BarChart3 className="h-4 w-4 text-purple-400" />
                <h3 className="text-sm font-medium text-white">Lead Status</h3>
              </div>
              <BreakdownBar
                data={breakdowns.status}
                colors={{
                  new: "#3b82f6",
                  sent_to_augusta: "#f59e0b",
                  qualified: "#10b981",
                  converted: "#059669",
                  contacted: "#8b5cf6",
                  declined_call: "#ef4444",
                }}
              />
            </div>

            {/* Email Sequences */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <Inbox className="h-4 w-4 text-cyan-400" />
                <h3 className="text-sm font-medium text-white">Email Sequences</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Total queued</span>
                  <span className="text-white font-medium">{emailSequences.total}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Sent</span>
                  <span className="text-green-400 font-medium">{emailSequences.sent}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Pending</span>
                  <span className="text-amber-400 font-medium">{emailSequences.pending}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Failed</span>
                  <span className="text-red-400 font-medium">{emailSequences.failed}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Unsubscribed</span>
                  <span className="text-slate-500 font-medium">{emailSequences.unsubscribed}</span>
                </div>
                {Object.entries(emailSequences.bySequence).length > 0 && (
                  <>
                    <hr className="border-white/10" />
                    {Object.entries(emailSequences.bySequence).map(([seq, stats]) => (
                      <div key={seq} className="flex justify-between text-xs">
                        <span className="text-slate-500 truncate max-w-[60%]">{seq}</span>
                        <span className="text-slate-400">{stats.sent} sent / {stats.pending} pending</span>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>

            {/* Click Sources */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <MousePointer2 className="h-4 w-4 text-orange-400" />
                <h3 className="text-sm font-medium text-white">Top Click Sources</h3>
              </div>
              <BreakdownBar data={breakdowns.clickSource} />
            </div>
          </div>

          {/* Augusta Postbacks + A/B Test */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {/* Postback Stats */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <DollarSign className="h-4 w-4 text-green-400" />
                <h3 className="text-sm font-medium text-white">Augusta Postbacks</h3>
                <a href="/admin/conversions" className="ml-auto text-xs text-slate-500 hover:text-slate-300">Details →</a>
              </div>
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="text-center p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <div className="text-xl font-bold text-white">{postbacks.leadCapture}</div>
                  <div className="text-xs text-blue-300">Captured</div>
                </div>
                <div className="text-center p-3 bg-amber-500/10 rounded-lg border border-amber-500/20">
                  <div className="text-xl font-bold text-white">{postbacks.qualifiedLead}</div>
                  <div className="text-xs text-amber-300">Qualified</div>
                </div>
                <div className="text-center p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                  <div className="text-xl font-bold text-white">{postbacks.tradeComplete}</div>
                  <div className="text-xs text-green-300">Traded</div>
                </div>
              </div>
              {recentPostbacks.length > 0 && (
                <div className="space-y-2">
                  <p className="text-xs text-slate-500 uppercase font-medium">Recent</p>
                  {recentPostbacks.slice(0, 5).map((pb, i) => (
                    <div key={i} className="flex items-center justify-between text-xs">
                      <span className={`font-medium ${
                        pb.type === "trade_complete" ? "text-green-400" :
                        pb.type === "qualified_lead" ? "text-amber-400" : "text-blue-400"
                      }`}>
                        {pb.type.replace(/_/g, " ")}
                      </span>
                      <span className="text-slate-500">{formatDate(pb.createdAt)}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* A/B Test Results */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <BarChart3 className="h-4 w-4 text-pink-400" />
                <h3 className="text-sm font-medium text-white">A/B Test: Funnel Order</h3>
              </div>
              <p className="text-xs text-slate-500 mb-4">Control = savings first · Variant = concern first</p>
              {Object.keys(abTest).length === 0 || (Object.keys(abTest).length === 1 && abTest["none"]) ? (
                <p className="text-sm text-slate-500">No A/B test data yet. Results will appear when leads come through the funnel.</p>
              ) : (
                <div className="space-y-3">
                  {Object.entries(abTest)
                    .filter(([key]) => key !== "none")
                    .map(([variantName, stats]) => {
                      const convRate = stats.total > 0 ? ((stats.submitted / stats.total) * 100).toFixed(1) : "0.0";
                      const qualRate = stats.total > 0 ? ((stats.qualified / stats.total) * 100).toFixed(1) : "0.0";
                      const label = variantName.includes("control") ? "Control (savings→concern)" : "Variant (concern→savings)";
                      const isWinning = parseFloat(convRate) > 0;

                      return (
                        <div key={variantName} className="p-3 bg-white/5 rounded-lg border border-white/10">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-white">{label}</span>
                            <span className="text-xs text-slate-400">{stats.total} leads</span>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <div className="text-xs text-slate-500">Qualified Rate</div>
                              <div className={`text-sm font-bold ${isWinning ? "text-green-400" : "text-slate-300"}`}>{qualRate}%</div>
                            </div>
                            <div>
                              <div className="text-xs text-slate-500">Augusta Submit</div>
                              <div className={`text-sm font-bold ${isWinning ? "text-green-400" : "text-slate-300"}`}>{convRate}%</div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  {abTest["none"] && abTest["none"].total > 0 && (
                    <p className="text-xs text-slate-500">{abTest["none"].total} leads without A/B variant (pre-test)</p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Recent Leads Table */}
          <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
            <div className="p-4 border-b border-white/10 flex items-center gap-2">
              <Clock className="h-4 w-4 text-slate-400" />
              <h2 className="font-semibold text-white">Recent Leads</h2>
              <span className="text-xs text-slate-500 ml-auto">Last 20</span>
            </div>
            {recentLeads.length === 0 ? (
              <div className="p-8 text-center text-slate-500">
                No leads yet. They&apos;ll appear here when visitors submit the form.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/5">
                      <th className="text-left p-3 text-xs text-slate-500 uppercase font-medium">Name</th>
                      <th className="text-left p-3 text-xs text-slate-500 uppercase font-medium">Source</th>
                      <th className="text-left p-3 text-xs text-slate-500 uppercase font-medium">Tier</th>
                      <th className="text-left p-3 text-xs text-slate-500 uppercase font-medium">Status</th>
                      <th className="text-left p-3 text-xs text-slate-500 uppercase font-medium">Deal</th>
                      <th className="text-left p-3 text-xs text-slate-500 uppercase font-medium">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {recentLeads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-white/5 transition-colors">
                        <td className="p-3">
                          <div className="text-white font-medium">{lead.name}</div>
                          <div className="text-xs text-slate-500">{lead.email}</div>
                        </td>
                        <td className="p-3 text-slate-400 text-xs max-w-[120px] truncate">{lead.source}</td>
                        <td className="p-3"><TierBadge tier={lead.savingsTier} /></td>
                        <td className="p-3"><StatusBadge status={lead.status} /></td>
                        <td className="p-3 text-slate-400 text-xs">
                          {lead.dealMin && lead.dealMax
                            ? `${formatCurrency(lead.dealMin)}–${formatCurrency(lead.dealMax)}`
                            : "—"}
                        </td>
                        <td className="p-3 text-slate-500 text-xs whitespace-nowrap">{formatDate(lead.createdAt)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </Container>
    </main>
  );
}
