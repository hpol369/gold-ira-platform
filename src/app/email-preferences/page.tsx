"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Suspense } from "react";

// Separate component that uses useSearchParams (requires Suspense boundary)
function PreferenceCenterContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";
  const seq = searchParams.get("seq") || "all";

  const [status, setStatus] = useState<"loading" | "form" | "success" | "error">("loading");
  const [selectedAction, setSelectedAction] = useState<string | null>(null);
  const [resultMessage, setResultMessage] = useState({ title: "", description: "" });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!email) {
      setStatus("error");
    } else {
      setStatus("form");
    }
  }, [email]);

  async function handleSubmit(action: string) {
    setSubmitting(true);
    setSelectedAction(action);

    try {
      const res = await fetch("/api/email/preferences", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, action }),
      });

      const data = await res.json();

      if (data.success) {
        const messages: Record<string, { title: string; description: string }> = {
          paused: {
            title: "Emails Paused for 30 Days",
            description:
              "You won't hear from us for the next 30 days. We'll automatically resume sending after that.",
          },
          "newsletter-only": {
            title: "Switched to Monthly Digest",
            description:
              "You'll only receive our monthly market updates and gold price alerts. No more nurture sequences.",
          },
          unsubscribed: {
            title: "You've Been Unsubscribed",
            description:
              "You won't receive any more emails from us. We're sorry to see you go. You can always re-subscribe on our site.",
          },
        };

        const msg = messages[data.message] || {
          title: "Preferences Updated",
          description: "Your email preferences have been saved.",
        };

        setResultMessage(msg);
        setStatus("success");
      } else {
        setResultMessage({
          title: "Something Went Wrong",
          description: "We couldn't update your preferences. Please try again.",
        });
        setStatus("error");
      }
    } catch {
      setResultMessage({
        title: "Connection Error",
        description: "We couldn't reach our servers. Please check your connection and try again.",
      });
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  }

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#2A2D42] border-t-[#000080]" />
      </div>
    );
  }

  if (status === "error" && !email) {
    return (
      <div className="max-w-lg mx-auto text-center py-20">
        <div className="text-5xl mb-4">&#9888;&#65039;</div>
        <h2 className="text-xl font-bold text-[#F6F4EF] mb-2">Missing Email</h2>
        <p className="text-[#A8A39A] text-sm">
          This page requires a valid email parameter. If you followed a link from one of our emails,
          please try clicking it again.
        </p>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="max-w-lg mx-auto text-center py-20">
        <div className="bg-[#161828] rounded-2xl shadow-sm border border-[#2A2D42] p-10">
          <div className="text-5xl mb-5">
            {selectedAction === "unsubscribe-all" ? "\u2705" : selectedAction === "pause-30" ? "\u23F8\uFE0F" : "\uD83D\uDCEC"}
          </div>
          <h2 className="text-xl font-bold text-[#F6F4EF] mb-3">{resultMessage.title}</h2>
          <p className="text-[#A8A39A] text-sm leading-relaxed mb-6">{resultMessage.description}</p>
          <a
            href="https://richdadretirement.com"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#D4A94E] hover:underline"
          >
            &larr; Back to Rich Dad Retirement
          </a>
        </div>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="max-w-lg mx-auto text-center py-20">
        <div className="bg-[#161828] rounded-2xl shadow-sm border border-[#2A2D42] p-10">
          <div className="text-5xl mb-5">&#9888;&#65039;</div>
          <h2 className="text-xl font-bold text-[#F6F4EF] mb-3">{resultMessage.title}</h2>
          <p className="text-[#A8A39A] text-sm leading-relaxed mb-6">{resultMessage.description}</p>
          <button
            onClick={() => setStatus("form")}
            className="text-sm font-semibold text-[#F6F4EF] hover:underline"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  // Form state
  return (
    <div className="max-w-lg mx-auto py-16">
      <div className="bg-[#161828] rounded-2xl shadow-sm border border-[#2A2D42] p-8 md:p-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-[#F6F4EF] mb-1">Email Preferences</h1>
          <p className="text-xs text-[#A8A39A] uppercase tracking-wider font-medium">
            Rich Dad Retirement
          </p>
        </div>

        <p className="text-[#A8A39A] text-sm mb-8 text-center">
          Choose how you&apos;d like to hear from us,{" "}
          <strong className="text-[#D0CCC4]">{email}</strong>:
        </p>

        {/* Option: Keep receiving */}
        <a
          href="https://richdadretirement.com"
          className="flex items-start gap-4 w-full p-4 mb-3 bg-emerald-50 border-2 border-emerald-200 rounded-xl hover:border-emerald-400 transition-colors text-left group"
        >
          <span className="text-2xl flex-shrink-0 mt-0.5">{"\u2705"}</span>
          <div>
            <div className="font-semibold text-[#F6F4EF] text-sm group-hover:text-emerald-700">
              Keep Receiving Emails
            </div>
            <div className="text-[#A8A39A] text-xs mt-1 leading-relaxed">
              No changes needed. Continue getting retirement planning tips and market updates.
            </div>
          </div>
        </a>

        {/* Option: Pause 30 days */}
        <button
          onClick={() => handleSubmit("pause-30")}
          disabled={submitting}
          className="flex items-start gap-4 w-full p-4 mb-3 bg-[#0C0D18] border-2 border-[#2A2D42] rounded-xl hover:border-[rgba(197,149,46,0.55)] hover:bg-[#121423]/50 transition-colors text-left cursor-pointer disabled:opacity-50 disabled:cursor-wait"
        >
          <span className="text-2xl flex-shrink-0 mt-0.5">{"\u23F8\uFE0F"}</span>
          <div>
            <div className="font-semibold text-[#F6F4EF] text-sm">Pause for 30 Days</div>
            <div className="text-[#A8A39A] text-xs mt-1 leading-relaxed">
              Take a break. We&apos;ll automatically resume sending after 30 days.
            </div>
          </div>
        </button>

        {/* Option: Monthly digest only */}
        <button
          onClick={() => handleSubmit("newsletter-only")}
          disabled={submitting}
          className="flex items-start gap-4 w-full p-4 mb-3 bg-[#0C0D18] border-2 border-[#2A2D42] rounded-xl hover:border-[rgba(197,149,46,0.55)] hover:bg-[#121423]/50 transition-colors text-left cursor-pointer disabled:opacity-50 disabled:cursor-wait"
        >
          <span className="text-2xl flex-shrink-0 mt-0.5">{"\uD83D\uDCEC"}</span>
          <div>
            <div className="font-semibold text-[#F6F4EF] text-sm">Monthly Digest Only</div>
            <div className="text-[#A8A39A] text-xs mt-1 leading-relaxed">
              Stop the nurture sequence but keep getting monthly market updates and gold price alerts.
            </div>
          </div>
        </button>

        {/* Option: Unsubscribe from all */}
        <button
          onClick={() => handleSubmit("unsubscribe-all")}
          disabled={submitting}
          className="flex items-start gap-4 w-full p-4 mb-3 bg-[rgba(220,38,38,0.08)]/50 border-2 border-red-100 rounded-xl hover:border-red-300 transition-colors text-left cursor-pointer disabled:opacity-50 disabled:cursor-wait"
        >
          <span className="text-2xl flex-shrink-0 mt-0.5">{"\uD83D\uDEAB"}</span>
          <div>
            <div className="font-semibold text-[#F6F4EF] text-sm">Unsubscribe from All</div>
            <div className="text-[#A8A39A] text-xs mt-1 leading-relaxed">
              No more emails. You can always re-subscribe on our site.
            </div>
          </div>
        </button>

        {/* Submitting overlay */}
        {submitting && (
          <div className="flex items-center justify-center gap-2 pt-4 text-sm text-[#A8A39A]">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-[#2A2D42] border-t-[#000080]" />
            Updating your preferences...
          </div>
        )}

        {/* Sequence info */}
        {seq && seq !== "all" && (
          <p className="text-xs text-[#3F4460] text-center mt-6">
            Sequence: {seq}
          </p>
        )}
      </div>

      {/* Back link */}
      <div className="text-center mt-6">
        <a
          href="https://richdadretirement.com"
          className="text-sm font-semibold text-[#F6F4EF] hover:underline"
        >
          &larr; Back to richdadretirement.com
        </a>
      </div>
    </div>
  );
}

// Main page component with metadata-compatible structure
export default function EmailPreferencesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0C0D18]">
        <Container>
          <Suspense
            fallback={
              <div className="flex items-center justify-center py-24">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#2A2D42] border-t-[#000080]" />
              </div>
            }
          >
            <PreferenceCenterContent />
          </Suspense>
        </Container>
      </main>
      <Footer />
    </>
  );
}
