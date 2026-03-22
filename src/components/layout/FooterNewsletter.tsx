"use client";

import { useState, FormEvent } from "react";
import { trackEmailSignup } from "@/lib/analytics";

export function FooterNewsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email || status === "loading") return;

    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "footer-newsletter" }),
      });

      const data = await res.json();
      if (data.success) {
        trackEmailSignup('footer-newsletter', 'footer');
        setStatus("success");
        setMessage("You're in! Check your inbox for a welcome email.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.message || "Something went wrong. Try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="max-w-xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/20 mb-4">
          <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-white font-semibold text-lg">{message}</p>
        <p className="text-gray-400 text-sm mt-2">Weekly gold & silver updates, guides, and tools — no spam.</p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto text-center">
      <h3 className="text-lg font-serif font-bold text-white mb-2">
        Get Weekly Gold & Silver Updates
      </h3>
      <p className="text-gray-400 text-sm mb-5">
        Market moves, new guides, and tools — delivered weekly. Join 10,000+ American savers.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setStatus("idle"); }}
          placeholder="Your email address"
          required
          className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-6 py-3 rounded-lg bg-[#B22234] hover:bg-[#8b1c2a] text-white font-semibold text-sm transition-colors disabled:opacity-50 whitespace-nowrap"
        >
          {status === "loading" ? "Joining..." : "Subscribe Free"}
        </button>
      </form>
      {status === "error" && (
        <p className="text-red-400 text-xs mt-2">{message}</p>
      )}
      <p className="text-gray-500 text-xs mt-3">No spam. Unsubscribe anytime. We respect your inbox.</p>
    </div>
  );
}
