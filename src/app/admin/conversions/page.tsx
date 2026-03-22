"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import {
  Target,
  Star,
  DollarSign,
  RefreshCw,
  Bell,
  CheckCircle2,
  XCircle,
  Lock,
  BarChart3,
  MousePointer2,
  Eye,
  ExternalLink,
  ArrowDown,
  TrendingUp,
  Mail,
  Phone,
} from "lucide-react";

// PIN verified server-side via /api/admin/auth

interface Conversion {
  type: "lead_capture" | "qualified_lead" | "trade_complete";
  sub_id?: string;
  lead_id?: string;
  timestamp: string;
}

interface NotificationStatus {
  telegram: boolean;
  email: boolean;
}

interface PipelineData {
  totalLeads: number;
  sentToAugusta: number;
  qualified: number;
  trades: number;
  totalClicks: number;
  emailsSent: number;
  emailsPending: number;
  emailsFailed: number;
  revenueMin: number;
  revenueMax: number;
}

export default function ConversionsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState("");
  const [pinError, setPinError] = useState(false);
  const [conversions, setConversions] = useState<Conversion[]>([]);
  const [loading, setLoading] = useState(true);
  const [notificationStatus, setNotificationStatus] = useState<NotificationStatus | null>(null);
  const [testingSent, setTestingSent] = useState(false);
  const [pipeline, setPipeline] = useState<PipelineData | null>(null);

  useEffect(() => {
    // Check if already authenticated in this session
    const saved = sessionStorage.getItem("admin_auth");
    if (saved === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchConversions();
      checkNotificationStatus();
      fetchPipeline();
    }
  }, [isAuthenticated]);

  async function handlePinSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pin }),
      });
      if (res.ok) {
        setIsAuthenticated(true);
        sessionStorage.setItem("admin_auth", "true");
        sessionStorage.setItem("admin_pin", pin);
        setPinError(false);
      } else {
        setPinError(true);
        setPin("");
      }
    } catch {
      setPinError(true);
      setPin("");
    }
  }

  // PIN Entry Screen
  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-sm w-full mx-4">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="h-8 w-8 text-amber-400" />
            </div>
            <h1 className="text-2xl font-bold text-white">Admin Access</h1>
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
            {pinError && (
              <p className="text-red-400 text-sm text-center mt-2">Incorrect PIN</p>
            )}
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

  async function fetchConversions() {
    try {
      const res = await fetch("/api/postback", { method: "OPTIONS" });
      const data = await res.json();
      setConversions(data.conversions || []);
    } catch (error) {
      console.error("Failed to fetch conversions:", error);
    } finally {
      setLoading(false);
    }
  }

  async function checkNotificationStatus() {
    try {
      const res = await fetch("/api/test-notification");
      const data = await res.json();
      setNotificationStatus(data.configured);
    } catch {
      // Ignore
    }
  }

  async function fetchPipeline() {
    try {
      const savedPin = sessionStorage.getItem("admin_pin") || "";
      const res = await fetch("/api/admin/dashboard", {
        headers: { "x-admin-pin": savedPin },
      });
      if (res.ok) {
        const data = await res.json();
        setPipeline({
          totalLeads: data.overview?.totalLeads || 0,
          sentToAugusta: data.overview?.augustaSubmitted || 0,
          qualified: data.overview?.qualifiedLeads || 0,
          trades: data.postbacks?.trades || 0,
          totalClicks: data.overview?.totalClicks || 0,
          emailsSent: data.emailSequences?.sent || 0,
          emailsPending: data.emailSequences?.pending || 0,
          emailsFailed: data.emailSequences?.failed || 0,
          revenueMin: data.overview?.revenueMin || 0,
          revenueMax: data.overview?.revenueMax || 0,
        });
      }
    } catch {
      // Ignore — pipeline data is supplementary
    }
  }

  async function sendTestNotification() {
    setTestingSent(true);
    try {
      await fetch("/api/test-notification");
      alert("Test notification sent! Check your Telegram/Email.");
    } catch {
      alert("Failed to send test notification");
    }
    setTimeout(() => setTestingSent(false), 3000);
  }

  const stats = {
    leads: conversions.filter(c => c.type === "lead_capture").length,
    qualified: conversions.filter(c => c.type === "qualified_lead").length,
    trades: conversions.filter(c => c.type === "trade_complete").length,
  };

  const typeConfig = {
    lead_capture: { icon: Target, color: "blue", label: "Lead" },
    qualified_lead: { icon: Star, color: "amber", label: "Qualified" },
    trade_complete: { icon: DollarSign, color: "green", label: "Trade" },
  };

  return (
    <main className="min-h-screen bg-slate-900 py-12">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white">Conversion Tracking</h1>
              <p className="text-slate-400 mt-1">Augusta Precious Metals Postbacks</p>
            </div>
            <button
              onClick={fetchConversions}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
            >
              <RefreshCw className="h-4 w-4" />
              Refresh
            </button>
          </div>

          {/* Notification Status */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5 text-amber-400" />
                <span className="font-semibold text-white">Notification Status</span>
              </div>
              <button
                onClick={sendTestNotification}
                disabled={testingSent}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-600 disabled:bg-amber-500/50 text-slate-900 font-semibold rounded-lg transition-colors text-sm"
              >
                {testingSent ? "Sent!" : "Send Test"}
              </button>
            </div>
            {notificationStatus && (
              <div className="flex gap-6 mt-4">
                <div className="flex items-center gap-2">
                  {notificationStatus.telegram ? (
                    <CheckCircle2 className="h-4 w-4 text-green-400" />
                  ) : (
                    <XCircle className="h-4 w-4 text-red-400" />
                  )}
                  <span className={notificationStatus.telegram ? "text-green-400" : "text-red-400"}>
                    Telegram {notificationStatus.telegram ? "Connected" : "Not Configured"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {notificationStatus.email ? (
                    <CheckCircle2 className="h-4 w-4 text-green-400" />
                  ) : (
                    <XCircle className="h-4 w-4 text-red-400" />
                  )}
                  <span className={notificationStatus.email ? "text-green-400" : "text-red-400"}>
                    Email {notificationStatus.email ? "Connected" : "Not Configured"}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Analytics Tools */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="h-5 w-5 text-purple-400" />
              <span className="font-semibold text-white">Analytics & Tracking</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Microsoft Clarity */}
              <a
                href="https://clarity.microsoft.com/projects/view/v816rr21t5/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 rounded-xl p-4 hover:border-purple-500/40 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <Eye className="h-6 w-6 text-purple-400" />
                  <ExternalLink className="h-4 w-4 text-slate-500 group-hover:text-purple-400 transition-colors" />
                </div>
                <h3 className="font-semibold text-white">Microsoft Clarity</h3>
                <p className="text-sm text-slate-400 mt-1">Session recordings & heatmaps</p>
              </a>

              {/* Google Analytics */}
              <a
                href="https://analytics.google.com/analytics/web/#/p/G-5Q1485P9KS"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 rounded-xl p-4 hover:border-orange-500/40 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <BarChart3 className="h-6 w-6 text-orange-400" />
                  <ExternalLink className="h-4 w-4 text-slate-500 group-hover:text-orange-400 transition-colors" />
                </div>
                <h3 className="font-semibold text-white">Google Analytics</h3>
                <p className="text-sm text-slate-400 mt-1">Traffic, events & conversions</p>
              </a>

              {/* Google Tag Manager */}
              <a
                href="https://tagmanager.google.com/#/container/accounts/7873696963/containers/GTM-TPC628G9"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-xl p-4 hover:border-blue-500/40 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <MousePointer2 className="h-6 w-6 text-blue-400" />
                  <ExternalLink className="h-4 w-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
                </div>
                <h3 className="font-semibold text-white">Tag Manager</h3>
                <p className="text-sm text-slate-400 mt-1">Manage tracking tags</p>
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 text-center">
              <Target className="h-8 w-8 text-blue-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">{stats.leads}</div>
              <div className="text-sm text-blue-300">Leads Captured</div>
            </div>
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-6 text-center">
              <Star className="h-8 w-8 text-amber-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">{stats.qualified}</div>
              <div className="text-sm text-amber-300">Qualified Leads</div>
            </div>
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 text-center">
              <DollarSign className="h-8 w-8 text-green-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">{stats.trades}</div>
              <div className="text-sm text-green-300">Trades Completed</div>
            </div>
          </div>

          {/* Revenue Pipeline Funnel */}
          {pipeline && (
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="h-5 w-5 text-emerald-400" />
                <span className="font-semibold text-white">Revenue Pipeline</span>
              </div>

              {/* Funnel Steps */}
              <div className="space-y-1">
                {[
                  { label: "Affiliate Clicks", value: pipeline.totalClicks, color: "slate", icon: MousePointer2 },
                  { label: "Leads Submitted", value: pipeline.totalLeads, color: "blue", icon: Target },
                  { label: "Sent to Augusta", value: pipeline.sentToAugusta, color: "amber", icon: Phone },
                  { label: "Qualified by Augusta", value: pipeline.qualified, color: "green", icon: Star },
                  { label: "Trades Completed", value: pipeline.trades, color: "emerald", icon: DollarSign },
                ].map((step, i, arr) => {
                  const prevValue = i > 0 ? arr[i - 1].value : step.value;
                  const convRate = prevValue > 0 ? ((step.value / prevValue) * 100).toFixed(0) : "—";
                  const Icon = step.icon;
                  const widthPct = arr[0].value > 0 ? Math.max(15, (step.value / Math.max(arr[0].value, 1)) * 100) : 100;

                  return (
                    <div key={step.label}>
                      {i > 0 && (
                        <div className="flex items-center gap-2 py-1 pl-8">
                          <ArrowDown className="h-3 w-3 text-slate-600" />
                          <span className="text-[10px] text-slate-500">
                            {convRate}% conversion
                          </span>
                        </div>
                      )}
                      <div
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg bg-${step.color}-500/10 border border-${step.color}-500/20`}
                        style={{ width: `${widthPct}%`, minWidth: "200px" }}
                      >
                        <Icon className={`h-4 w-4 text-${step.color}-400 flex-shrink-0`} />
                        <span className="text-sm text-slate-300 flex-1">{step.label}</span>
                        <span className={`text-lg font-bold text-${step.color}-400`}>{step.value}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Revenue Estimate */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Revenue Potential (from qualified leads)</span>
                  <span className="text-lg font-bold text-emerald-400">
                    {pipeline.revenueMin > 0
                      ? `$${(pipeline.revenueMin / 1000).toFixed(0)}k–$${(pipeline.revenueMax / 1000).toFixed(0)}k`
                      : "No qualified leads yet"}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  Based on Augusta&apos;s $200 CPA for qualified leads. Actual commission depends on trade completion.
                </p>
              </div>
            </div>
          )}

          {/* Email Nurture Stats */}
          {pipeline && (pipeline.emailsSent > 0 || pipeline.emailsPending > 0) && (
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="h-5 w-5 text-cyan-400" />
                <span className="font-semibold text-white">Email Nurture Pipeline</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{pipeline.emailsSent}</div>
                  <div className="text-xs text-slate-400 mt-1">Sent</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-400">{pipeline.emailsPending}</div>
                  <div className="text-xs text-slate-400 mt-1">Pending</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-400">{pipeline.emailsFailed}</div>
                  <div className="text-xs text-slate-400 mt-1">Failed</div>
                </div>
              </div>
              {pipeline.emailsFailed > 0 && (
                <div className="mt-3 p-2 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <p className="text-xs text-red-300">⚠ {pipeline.emailsFailed} failed emails — check Resend dashboard for bounces</p>
                </div>
              )}
            </div>
          )}

          {/* Postback URLs */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8">
            <h2 className="font-semibold text-white mb-4">Augusta Postback URLs</h2>
            <p className="text-sm text-slate-400 mb-4">
              Copy these URLs into your Augusta affiliate dashboard (Postbacks section):
            </p>
            <div className="space-y-3">
              <div>
                <label className="text-xs text-slate-500 uppercase">Postback - Lead Capture</label>
                <code className="block bg-slate-800 text-green-400 p-3 rounded-lg text-sm mt-1 overflow-x-auto select-all cursor-pointer">
                  https://richdadretirement.com/api/postback?type=lead_capture
                </code>
              </div>
              <div>
                <label className="text-xs text-slate-500 uppercase">Postback - Qualified Lead</label>
                <code className="block bg-slate-800 text-amber-400 p-3 rounded-lg text-sm mt-1 overflow-x-auto select-all cursor-pointer">
                  https://richdadretirement.com/api/postback?type=qualified_lead
                </code>
              </div>
              <div>
                <label className="text-xs text-slate-500 uppercase">Postback - Trade Complete</label>
                <code className="block bg-slate-800 text-green-400 p-3 rounded-lg text-sm mt-1 overflow-x-auto select-all cursor-pointer">
                  https://richdadretirement.com/api/postback?type=trade_complete
                </code>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-4">
              Augusta will automatically send sub_id and other tracking data with each postback.
            </p>
          </div>

          {/* Recent Conversions */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
            <div className="p-4 border-b border-white/10">
              <h2 className="font-semibold text-white">Recent Conversions</h2>
            </div>
            {loading ? (
              <div className="p-8 text-center text-slate-400">
                <RefreshCw className="h-6 w-6 animate-spin mx-auto mb-2" />
                Loading...
              </div>
            ) : conversions.length === 0 ? (
              <div className="p-8 text-center text-slate-400">
                No conversions yet. They&apos;ll appear here when Augusta sends postbacks.
              </div>
            ) : (
              <div className="divide-y divide-white/5">
                {conversions.slice().reverse().map((conversion, index) => {
                  const config = typeConfig[conversion.type];
                  const Icon = config.icon;
                  return (
                    <div key={index} className="p-4 flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg bg-${config.color}-500/20 flex items-center justify-center`}>
                        <Icon className={`h-5 w-5 text-${config.color}-400`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className={`text-${config.color}-400 font-semibold`}>
                            {config.label}
                          </span>
                          {conversion.lead_id && (
                            <span className="text-xs text-slate-500">
                              #{conversion.lead_id}
                            </span>
                          )}
                        </div>
                        <div className="text-sm text-slate-400">
                          Source: {conversion.sub_id || "Unknown"}
                        </div>
                      </div>
                      <div className="text-sm text-slate-500">
                        {new Date(conversion.timestamp).toLocaleString()}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </Container>
    </main>
  );
}
