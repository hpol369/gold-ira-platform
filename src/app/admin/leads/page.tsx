"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Container } from "@/components/ui/Container";
import {
  Lock,
  RefreshCw,
  User,
  Mail,
  Phone,
  DollarSign,
  Shield,
  CheckCircle,
  XCircle,
  Clock,
  AlertTriangle,
  ChevronDown,
  Activity,
  Database,
  Bell,
  ChevronRight,
} from "lucide-react";

// --- Types matching API response ---

interface LeadData {
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

interface EmailQueueItem {
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

interface PostbackEvent {
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
  leads: LeadData[];
  emailQueue: EmailQueueItem[];
  postbacks: PostbackEvent[];
  systemHealth: SystemHealth;
  timestamp: string;
}

// --- Activity feed event ---

interface ActivityEvent {
  id: string;
  type: "lead" | "email" | "postback";
  description: string;
  email: string;
  timestamp: string;
}

// --- Filter tabs ---

type StatusFilter = "all" | "new" | "sent_to_augusta" | "qualified" | "converted" | "errors";

const STATUS_FILTERS: { key: StatusFilter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "new", label: "New" },
  { key: "sent_to_augusta", label: "Sent to Augusta" },
  { key: "qualified", label: "Qualified" },
  { key: "converted", label: "Converted" },
  { key: "errors", label: "Errors" },
];

// --- Helpers ---

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

function timeAgo(dateStr: string): string {
  const now = Date.now();
  const then = new Date(dateStr).getTime();
  const diffMs = now - then;
  const diffMinutes = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffMinutes < 1) return "just now";
  if (diffMinutes < 60) return `${diffMinutes}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  return formatDate(dateStr);
}

function getStatusDotColor(status: string): string {
  switch (status) {
    case "converted":
    case "qualified":
      return "bg-green-500";
    case "sent_to_augusta":
      return "bg-blue-500";
    case "new":
      return "bg-yellow-500";
    case "declined_call":
    case "unqualified":
      return "bg-slate-400";
    default:
      return "bg-red-500";
  }
}

function getLeadName(lead: LeadData): string {
  const first = lead.firstName || "";
  const lastInitial = lead.lastName ? `${lead.lastName.charAt(0)}.` : "";
  return `${first} ${lastInitial}`.trim() || "Unknown";
}

function getLeadFullName(lead: LeadData): string {
  return `${lead.firstName || ""} ${lead.lastName || ""}`.trim() || "Unknown";
}

function maskEmail(email: string): string {
  const parts = email.split("@");
  if (parts.length !== 2) return email;
  const local = parts[0];
  if (local.length <= 3) return email;
  return `${local.substring(0, 3)}...@${parts[1]}`;
}

// --- Pipeline status helpers ---

interface PipelineStep {
  label: string;
  shortLabel: string;
  status: "success" | "pending" | "failed" | "skipped" | "na";
}

function getPipelineSteps(
  lead: LeadData,
  emailItems: EmailQueueItem[],
  postbackItems: PostbackEvent[],
  smsConfigured: boolean
): PipelineStep[] {
  const steps: PipelineStep[] = [];

  // DB - always success if lead exists
  steps.push({ label: "Saved to database", shortLabel: "DB", status: "success" });

  // Telegram
  const hasTelegram = lead.telegramMessageIds !== null && lead.telegramMessageIds !== "";
  steps.push({
    label: "Telegram notification",
    shortLabel: "TG",
    status: hasTelegram ? "success" : "failed",
  });

  // Augusta
  const augustaStatuses = ["sent_to_augusta", "qualified", "converted", "contacted"];
  const isAugustaQualified = lead.qualificationTier?.startsWith("augusta");
  const isSecondaryOrStarter = lead.qualificationTier === "secondary" || lead.qualificationTier === "starter";

  let augustaStatus: PipelineStep["status"] = "pending";
  if (augustaStatuses.includes(lead.status)) {
    augustaStatus = "success";
  } else if (isSecondaryOrStarter) {
    augustaStatus = "skipped";
  } else if (lead.status === "new" && isAugustaQualified) {
    augustaStatus = "failed"; // should have been sent but wasn't
  }

  steps.push({
    label: augustaStatus === "skipped" ? "Augusta (skipped - not qualified)" : "Sent to Augusta",
    shortLabel: "AUG",
    status: augustaStatus,
  });

  // Email steps
  if (emailItems.length > 0) {
    const sorted = [...emailItems].sort((a, b) => a.stepNumber - b.stepNumber);
    for (const eq of sorted) {
      let emailStatus: PipelineStep["status"] = "pending";
      if (eq.status === "sent") emailStatus = "success";
      else if (eq.status === "failed") emailStatus = "failed";
      else if (eq.status === "skipped") emailStatus = "skipped";

      steps.push({
        label: `Email ${eq.stepNumber}: "${eq.subject}"`,
        shortLabel: `E${eq.stepNumber}`,
        status: emailStatus,
      });
    }
  }

  // SMS
  steps.push({
    label: smsConfigured ? "SMS notification" : "SMS (not configured)",
    shortLabel: "SMS",
    status: smsConfigured ? "pending" : "failed",
  });

  // Postback
  if (postbackItems.length > 0) {
    for (const pb of postbackItems) {
      steps.push({
        label: `Postback: ${pb.type.replace(/_/g, " ")}`,
        shortLabel: "PB",
        status: "success",
      });
    }
  }

  return steps;
}

function PipelineIcon({ status }: { status: PipelineStep["status"] }) {
  switch (status) {
    case "success":
      return <CheckCircle className="h-3.5 w-3.5 text-green-500 flex-shrink-0" />;
    case "pending":
      return <Clock className="h-3.5 w-3.5 text-amber-400 flex-shrink-0" />;
    case "failed":
      return <XCircle className="h-3.5 w-3.5 text-red-500 flex-shrink-0" />;
    case "skipped":
      return <ChevronRight className="h-3.5 w-3.5 text-slate-400 flex-shrink-0" />;
    case "na":
      return <span className="h-3.5 w-3.5 text-slate-500 flex-shrink-0 text-xs text-center">--</span>;
  }
}

function PipelineIconCompact({ status }: { status: PipelineStep["status"] }) {
  switch (status) {
    case "success":
      return <span className="text-green-500 text-xs font-bold">&#10003;</span>;
    case "pending":
      return <span className="text-amber-400 text-xs">&#9719;</span>;
    case "failed":
      return <span className="text-red-500 text-xs font-bold">&#10007;</span>;
    case "skipped":
      return <span className="text-slate-400 text-xs">&#9654;</span>;
    case "na":
      return <span className="text-slate-500 text-xs">--</span>;
  }
}

// --- System Health Bar ---

function SystemHealthBar({ health }: { health: SystemHealth }) {
  const services: { key: keyof SystemHealth; label: string }[] = [
    { key: "supabase", label: "Database" },
    { key: "telegram", label: "Telegram" },
    { key: "augusta", label: "Augusta Webhook" },
    { key: "email", label: "Email (Resend)" },
    { key: "sms", label: "SMS (Twilio)" },
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {services.map(({ key, label }) => {
        const ok = health[key];
        return (
          <div
            key={key}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border ${
              ok
                ? "bg-green-50 text-green-700 border-green-200"
                : "bg-red-50 text-red-700 border-red-200"
            }`}
          >
            {ok ? (
              <CheckCircle className="h-3.5 w-3.5" />
            ) : (
              <XCircle className="h-3.5 w-3.5" />
            )}
            {label}
          </div>
        );
      })}
    </div>
  );
}

// --- Activity Feed ---

function buildActivityFeed(
  leads: LeadData[],
  emailQueue: EmailQueueItem[],
  postbacks: PostbackEvent[]
): ActivityEvent[] {
  const events: ActivityEvent[] = [];

  // Lead submissions
  for (const lead of leads) {
    events.push({
      id: `lead-${lead.id}`,
      type: "lead",
      description: `${getLeadName(lead)} submitted lead`,
      email: lead.email,
      timestamp: lead.createdAt,
    });
  }

  // Email sends (only sent ones)
  for (const eq of emailQueue) {
    if (eq.status === "sent" && eq.sentAt) {
      events.push({
        id: `email-${eq.id}`,
        type: "email",
        description: `Email ${eq.stepNumber} sent to ${maskEmail(eq.email)}`,
        email: eq.email,
        timestamp: eq.sentAt,
      });
    }
  }

  // Postback events
  for (const pb of postbacks) {
    events.push({
      id: `pb-${pb.id}`,
      type: "postback",
      description: `Augusta ${pb.type.replace(/_/g, " ")}${pb.email ? ` for ${maskEmail(pb.email)}` : ""}`,
      email: pb.email || "",
      timestamp: pb.createdAt,
    });
  }

  // Sort by timestamp descending
  events.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

  return events.slice(0, 30);
}

function ActivityFeedIcon({ type }: { type: ActivityEvent["type"] }) {
  switch (type) {
    case "lead":
      return (
        <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
          <User className="h-3.5 w-3.5 text-blue-600" />
        </div>
      );
    case "email":
      return (
        <div className="w-7 h-7 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
          <Mail className="h-3.5 w-3.5 text-cyan-600" />
        </div>
      );
    case "postback":
      return (
        <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
          <Bell className="h-3.5 w-3.5 text-amber-600" />
        </div>
      );
  }
}

// --- Lead Card ---

function LeadCard({
  lead,
  emailItems,
  postbackItems,
  smsConfigured,
}: {
  lead: LeadData;
  emailItems: EmailQueueItem[];
  postbackItems: PostbackEvent[];
  smsConfigured: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const pipeline = getPipelineSteps(lead, emailItems, postbackItems, smsConfigured);
  const statusDot = getStatusDotColor(lead.status);

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Collapsed view */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left px-4 py-3 hover:bg-slate-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          {/* Status dot */}
          <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${statusDot}`} />

          {/* Name + tier + routed */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-semibold text-slate-900 text-sm">{getLeadName(lead)}</span>
              <span className="text-slate-400 text-xs">--</span>
              <span className="text-xs text-slate-600">{lead.savingsTier || "No tier"}</span>
              <span className="text-slate-400 text-xs">--</span>
              <span className="text-xs text-slate-500">{lead.routedTo || "Unrouted"}</span>
            </div>
            {/* Compact pipeline */}
            <div className="flex items-center gap-1.5 mt-1">
              <span className="text-xs text-slate-400 mr-1">Pipeline:</span>
              {pipeline.map((step, i) => (
                <span key={i} className="flex items-center gap-0.5" title={step.label}>
                  <PipelineIconCompact status={step.status} />
                  <span className="text-[10px] text-slate-400">{step.shortLabel}</span>
                </span>
              ))}
            </div>
            {/* Source + time */}
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[11px] text-slate-400 truncate max-w-[200px]">
                Source: {lead.source}
              </span>
              <span className="text-[11px] text-slate-300">&bull;</span>
              <span className="text-[11px] text-slate-400">{timeAgo(lead.createdAt)}</span>
            </div>
          </div>

          {/* Expand arrow */}
          <ChevronDown
            className={`h-4 w-4 text-slate-400 flex-shrink-0 transition-transform ${
              expanded ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>

      {/* Expanded view */}
      {expanded && (
        <div className="px-4 pb-4 border-t border-slate-100">
          {/* Contact info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-slate-400" />
              <span className="text-sm text-slate-800">{getLeadFullName(lead)}</span>
            </div>
            <a
              href={`mailto:${lead.email}`}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm"
            >
              <Mail className="h-4 w-4" />
              {lead.email}
            </a>
            <a
              href={`tel:${lead.phone}`}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm"
            >
              <Phone className="h-4 w-4" />
              {lead.phone}
            </a>
          </div>

          {/* Details grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
            <div>
              <div className="text-[11px] text-slate-400 uppercase font-medium">Savings Tier</div>
              <div className="text-sm text-slate-700 font-medium mt-0.5">
                {lead.savingsTier || "Unknown"}
              </div>
            </div>
            <div>
              <div className="text-[11px] text-slate-400 uppercase font-medium">Concern</div>
              <div className="text-sm text-slate-700 mt-0.5">{lead.concern || "None"}</div>
            </div>
            <div>
              <div className="text-[11px] text-slate-400 uppercase font-medium">Qualification</div>
              <div className="text-sm text-slate-700 mt-0.5">
                {lead.qualificationTier || "Unqualified"}
              </div>
            </div>
            <div>
              <div className="text-[11px] text-slate-400 uppercase font-medium">A/B Variant</div>
              <div className="text-sm text-slate-700 mt-0.5">{lead.abVariant || "None"}</div>
            </div>
          </div>

          {/* Deal range */}
          {lead.dealMin !== null && lead.dealMax !== null && (
            <div className="flex items-center gap-2 mt-3 p-2 bg-green-50 rounded-lg border border-green-100">
              <DollarSign className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium text-green-800">
                Deal Range: {formatCurrency(lead.dealMin)} &ndash; {formatCurrency(lead.dealMax)}
              </span>
            </div>
          )}

          {/* Notes */}
          {lead.notes && (
            <div className="mt-3 p-2 bg-slate-50 rounded-lg border border-slate-100">
              <div className="text-[11px] text-slate-400 uppercase font-medium mb-1">Notes</div>
              <div className="text-sm text-slate-700">{lead.notes}</div>
            </div>
          )}

          {/* Pipeline timeline */}
          <div className="mt-4">
            <div className="text-[11px] text-slate-400 uppercase font-medium mb-2">
              Pipeline Timeline
            </div>
            <div className="space-y-1.5">
              {pipeline.map((step, i) => (
                <div key={i} className="flex items-center gap-2">
                  <PipelineIcon status={step.status} />
                  <span className="text-sm text-slate-700">{step.label}</span>
                  {step.status === "success" && i === 0 && (
                    <span className="text-xs text-slate-400 ml-auto">
                      {formatDate(lead.createdAt)}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// --- Main Page ---

export default function LeadsActivityPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState("");
  const [pinError, setPinError] = useState(false);
  const [data, setData] = useState<LeadsApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastRefresh, setLastRefresh] = useState<Date | null>(null);
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const pinRef = useRef<string>("");

  // Check session storage for saved auth
  useEffect(() => {
    const saved = sessionStorage.getItem("admin_auth");
    const savedPin = sessionStorage.getItem("admin_pin");
    if (saved === "true" && savedPin) {
      pinRef.current = savedPin;
      setIsAuthenticated(true);
    }
  }, []);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/leads", {
        headers: { "x-admin-pin": pinRef.current },
      });
      if (!res.ok) {
        throw new Error(`API returned ${res.status}`);
      }
      const json: LeadsApiResponse = await res.json();
      if (json.success) {
        setData(json);
        setLastRefresh(new Date());
      } else {
        throw new Error("API returned success: false");
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to fetch data";
      setError(message);
      console.error("Failed to fetch leads data:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch on auth
  useEffect(() => {
    if (isAuthenticated) fetchData();
  }, [isAuthenticated, fetchData]);

  // Auto-refresh every 30 seconds
  useEffect(() => {
    if (!isAuthenticated) return;
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, [isAuthenticated, fetchData]);

  async function handlePinSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pin }),
      });
      if (res.ok) {
        pinRef.current = pin;
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

  // --- PIN Screen ---
  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="bg-white border border-slate-200 rounded-2xl p-8 max-w-sm w-full mx-4 shadow-lg">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900">Lead Activity</h1>
            <p className="text-slate-500 text-sm mt-2">Enter PIN to continue</p>
          </div>
          <form onSubmit={handlePinSubmit}>
            <input
              type="password"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={4}
              value={pin}
              onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))}
              placeholder="----"
              className={`w-full text-center text-2xl tracking-[0.5em] bg-slate-50 border ${
                pinError ? "border-red-400" : "border-slate-200"
              } rounded-xl px-4 py-4 text-slate-900 placeholder-slate-300 focus:outline-none focus:border-blue-500 transition-colors`}
              autoFocus
            />
            {pinError && (
              <p className="text-red-500 text-sm text-center mt-2">Incorrect PIN</p>
            )}
            <button
              type="submit"
              className="w-full mt-4 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors"
            >
              Access Leads
            </button>
          </form>
        </div>
      </main>
    );
  }

  // --- Loading ---
  if (loading && !data) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center">
        <RefreshCw className="h-8 w-8 text-blue-600 animate-spin" />
      </main>
    );
  }

  // --- Error ---
  if (error && !data) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <AlertTriangle className="h-8 w-8 text-red-500 mx-auto mb-2" />
          <p className="text-slate-700 font-medium">Failed to load data</p>
          <p className="text-slate-500 text-sm mt-1">{error}</p>
          <button
            onClick={fetchData}
            className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm"
          >
            Retry
          </button>
        </div>
      </main>
    );
  }

  if (!data) return null;

  const { leads, emailQueue, postbacks, systemHealth } = data;

  // Build activity feed
  const activityFeed = buildActivityFeed(leads, emailQueue, postbacks);

  // Filter leads by status
  const filteredLeads = leads.filter((lead) => {
    if (statusFilter === "all") return true;
    if (statusFilter === "errors") {
      return lead.status === "declined_call" || lead.status === "unqualified";
    }
    return lead.status === statusFilter;
  });

  // Helpers for lead-specific email and postback data
  function getEmailItemsForLead(lead: LeadData): EmailQueueItem[] {
    return emailQueue.filter((eq) => eq.email === lead.email);
  }

  function getPostbacksForLead(lead: LeadData): PostbackEvent[] {
    return postbacks.filter((pb) => pb.email === lead.email || pb.leadId === lead.id);
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Admin Navigation */}
      <div className="bg-white border-b border-slate-200">
        <Container>
          <div className="max-w-7xl mx-auto flex items-center gap-1 py-2">
            <a
              href="/admin/dashboard"
              className="px-3 py-1.5 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            >
              Dashboard
            </a>
            <a
              href="/admin/leads"
              className="px-3 py-1.5 text-sm font-semibold text-blue-700 bg-blue-50 rounded-lg"
            >
              Leads
            </a>
            <a
              href="/admin/conversions"
              className="px-3 py-1.5 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            >
              Conversions
            </a>
          </div>
        </Container>
      </div>

      <Container>
        <div className="max-w-7xl mx-auto py-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Lead Activity</h1>
              <p className="text-slate-500 text-sm mt-1">
                {lastRefresh && `Updated ${lastRefresh.toLocaleTimeString()}`}
                {loading && " (refreshing...)"}
              </p>
            </div>
            <button
              onClick={fetchData}
              disabled={loading}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors text-sm"
            >
              <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
              Refresh
            </button>
          </div>

          {/* Section 1: System Health */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="h-4 w-4 text-slate-500" />
              <h2 className="text-sm font-semibold text-slate-700 uppercase">System Health</h2>
            </div>
            <SystemHealthBar health={systemHealth} />
          </div>

          {/* Two-column layout: Activity Feed + Lead Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Section 2: Activity Feed (sidebar) */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden sticky top-4">
                <div className="px-4 py-3 border-b border-slate-100 flex items-center gap-2">
                  <Activity className="h-4 w-4 text-slate-500" />
                  <h2 className="text-sm font-semibold text-slate-700 uppercase">Activity Feed</h2>
                  <span className="text-xs text-slate-400 ml-auto">Recent 30</span>
                </div>
                <div className="max-h-[600px] overflow-y-auto">
                  {activityFeed.length === 0 ? (
                    <div className="p-6 text-center text-slate-400 text-sm">No activity yet</div>
                  ) : (
                    <div className="divide-y divide-slate-50">
                      {activityFeed.map((event) => (
                        <div key={event.id} className="flex items-start gap-3 px-4 py-3">
                          <ActivityFeedIcon type={event.type} />
                          <div className="min-w-0 flex-1">
                            <p className="text-sm text-slate-700 leading-snug">
                              {event.description}
                            </p>
                            <p className="text-[11px] text-slate-400 mt-0.5">
                              {timeAgo(event.timestamp)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Main content: Filter tabs + Lead cards */}
            <div className="lg:col-span-2">
              {/* Section 3: Status Filter Tabs */}
              <div className="flex items-center gap-1 mb-4 overflow-x-auto pb-1">
                {STATUS_FILTERS.map(({ key, label }) => {
                  const count =
                    key === "all"
                      ? leads.length
                      : key === "errors"
                        ? leads.filter(
                            (l) => l.status === "declined_call" || l.status === "unqualified"
                          ).length
                        : leads.filter((l) => l.status === key).length;
                  return (
                    <button
                      key={key}
                      onClick={() => setStatusFilter(key)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                        statusFilter === key
                          ? "bg-blue-600 text-white"
                          : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      {label}
                      <span className="ml-1.5 text-xs opacity-70">{count}</span>
                    </button>
                  );
                })}
              </div>

              {/* Section 4: Lead Persona Cards */}
              {filteredLeads.length === 0 ? (
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8 text-center">
                  <Database className="h-8 w-8 text-slate-300 mx-auto mb-2" />
                  <p className="text-slate-500 font-medium">No leads found</p>
                  <p className="text-slate-400 text-sm mt-1">
                    {statusFilter === "all"
                      ? "Leads will appear here when visitors submit the form."
                      : `No leads with status "${statusFilter.replace(/_/g, " ")}".`}
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredLeads.map((lead) => (
                    <LeadCard
                      key={lead.id}
                      lead={lead}
                      emailItems={getEmailItemsForLead(lead)}
                      postbackItems={getPostbacksForLead(lead)}
                      smsConfigured={systemHealth.sms}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
