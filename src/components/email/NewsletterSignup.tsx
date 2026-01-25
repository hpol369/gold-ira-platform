"use client";

import { useState } from "react";
import { Mail, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface NewsletterSignupProps {
  variant?: "default" | "inline" | "footer" | "popup";
  headline?: string;
  description?: string;
  className?: string;
}

export function NewsletterSignup({
  variant = "default",
  headline,
  description,
  className,
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Failed to subscribe");

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  const defaultHeadline = "The Sovereign Weekly";
  const defaultDescription = "Get weekly insights on gold, Fed policy, and protecting your retirement. Join 10,000+ informed investors.";

  // Inline variant - compact for sidebar/within content
  if (variant === "inline") {
    return (
      <div className={cn("bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5", className)}>
        <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm mb-2">
          <Mail className="h-4 w-4" />
          FREE NEWSLETTER
        </div>
        <h4 className="font-bold text-white mb-2">{headline || defaultHeadline}</h4>
        <p className="text-slate-400 text-sm mb-4">{description || "Weekly gold market insights delivered to your inbox."}</p>

        {status === "success" ? (
          <div className="flex items-center gap-2 text-green-400 text-sm">
            <CheckCircle2 className="h-4 w-4" />
            You&apos;re subscribed!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-slate-800 border border-white/10 rounded-lg text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full px-4 py-2 bg-amber-500 hover:bg-amber-600 disabled:bg-amber-500/50 text-slate-900 font-semibold rounded-lg text-sm transition-colors flex items-center justify-center gap-2"
            >
              {status === "loading" ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                "Subscribe Free"
              )}
            </button>
            {status === "error" && (
              <p className="text-red-400 text-xs flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {errorMessage}
              </p>
            )}
          </form>
        )}
      </div>
    );
  }

  // Footer variant - horizontal layout
  if (variant === "footer") {
    return (
      <div className={cn("bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/20 rounded-2xl p-6 md:p-8", className)}>
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm mb-2">
              <Mail className="h-4 w-4" />
              FREE WEEKLY NEWSLETTER
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              {headline || defaultHeadline}
            </h3>
            <p className="text-slate-300 text-sm">
              {description || defaultDescription}
            </p>
          </div>

          {status === "success" ? (
            <div className="flex items-center gap-2 text-green-400 bg-green-500/10 px-6 py-3 rounded-xl">
              <CheckCircle2 className="h-5 w-5" />
              <span className="font-semibold">You&apos;re on the list!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 min-w-[300px]">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-6 py-3 bg-amber-500 hover:bg-amber-600 disabled:bg-amber-500/50 text-slate-900 font-bold rounded-xl transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
              >
                {status === "loading" ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  "Subscribe"
                )}
              </button>
            </form>
          )}
        </div>
        {status === "error" && (
          <p className="text-red-400 text-sm mt-3 flex items-center gap-1">
            <AlertCircle className="h-4 w-4" />
            {errorMessage}
          </p>
        )}
      </div>
    );
  }

  // Default variant - full card
  return (
    <div className={cn("bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 rounded-2xl p-8 text-center", className)}>
      <div className="w-16 h-16 bg-amber-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
        <Mail className="h-8 w-8 text-amber-400" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-3">
        {headline || defaultHeadline}
      </h3>
      <p className="text-slate-400 mb-6 max-w-md mx-auto">
        {description || defaultDescription}
      </p>

      {status === "success" ? (
        <div className="flex items-center justify-center gap-2 text-green-400 bg-green-500/10 px-6 py-4 rounded-xl">
          <CheckCircle2 className="h-6 w-6" />
          <span className="font-semibold text-lg">Welcome! Check your inbox.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full px-5 py-4 bg-slate-800 border border-white/10 rounded-xl text-white placeholder-slate-500 text-center focus:outline-none focus:border-amber-500"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full px-6 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 disabled:from-amber-500/50 disabled:to-amber-600/50 text-slate-900 font-bold text-lg rounded-xl transition-all flex items-center justify-center gap-2"
          >
            {status === "loading" ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              "Join Free"
            )}
          </button>
          {status === "error" && (
            <p className="text-red-400 text-sm flex items-center justify-center gap-1">
              <AlertCircle className="h-4 w-4" />
              {errorMessage}
            </p>
          )}
          <p className="text-slate-500 text-xs">
            No spam. Unsubscribe anytime.
          </p>
        </form>
      )}
    </div>
  );
}
