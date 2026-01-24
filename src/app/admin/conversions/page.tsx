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
  Lock
} from "lucide-react";

const ADMIN_PIN = "6903";

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

export default function ConversionsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState("");
  const [pinError, setPinError] = useState(false);
  const [conversions, setConversions] = useState<Conversion[]>([]);
  const [loading, setLoading] = useState(true);
  const [notificationStatus, setNotificationStatus] = useState<NotificationStatus | null>(null);
  const [testingSent, setTestingSent] = useState(false);

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
    }
  }, [isAuthenticated]);

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

          {/* Postback URLs */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8">
            <h2 className="font-semibold text-white mb-4">Augusta Postback URLs</h2>
            <p className="text-sm text-slate-400 mb-4">
              Copy these URLs into your Augusta affiliate dashboard:
            </p>
            <div className="space-y-3">
              <div>
                <label className="text-xs text-slate-500 uppercase">Lead Capture</label>
                <code className="block bg-slate-800 text-green-400 p-3 rounded-lg text-sm mt-1 overflow-x-auto">
                  https://richdadretirement.com/api/postback?type=lead_capture&sub_id={"{sub_id}"}&lead_id={"{lead_id}"}
                </code>
              </div>
              <div>
                <label className="text-xs text-slate-500 uppercase">Qualified Lead</label>
                <code className="block bg-slate-800 text-amber-400 p-3 rounded-lg text-sm mt-1 overflow-x-auto">
                  https://richdadretirement.com/api/postback?type=qualified_lead&sub_id={"{sub_id}"}&lead_id={"{lead_id}"}
                </code>
              </div>
              <div>
                <label className="text-xs text-slate-500 uppercase">Trade Complete</label>
                <code className="block bg-slate-800 text-green-400 p-3 rounded-lg text-sm mt-1 overflow-x-auto">
                  https://richdadretirement.com/api/postback?type=trade_complete&sub_id={"{sub_id}"}&lead_id={"{lead_id}"}
                </code>
              </div>
            </div>
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
