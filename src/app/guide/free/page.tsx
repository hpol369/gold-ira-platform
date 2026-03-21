"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, BookOpen, AlertTriangle, Lock, CheckCircle, Loader2, Download } from "lucide-react";
import { AnswerFirst } from "@/components/seo/AnswerFirst";

export default function FreeGuidePage() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/guide-download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName: firstName.trim(), email: email.trim().toLowerCase() }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Connection error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#000040] via-[#000060] to-[#000080] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl p-8 md:p-12 max-w-lg w-full text-center shadow-2xl"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Your Guide Is Ready</h2>
          <p className="text-slate-600 mb-6">
            Check your email for the download link. If you want to start reading right now:
          </p>
          <a
            href="/guides/gold-ira-protection-guide-2026.pdf"
            className="inline-flex items-center gap-2 bg-[#B22234] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#9a1e2d] transition-colors"
          >
            <Download className="w-5 h-5" />
            Download the Guide (PDF)
          </a>
          <p className="text-sm text-slate-500 mt-6">
            We also sent a copy to your inbox for easy access later.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000040] via-[#000060] to-[#000080]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "headline": "Free 2026 Gold IRA Protection Guide",
              "description": "Free 10-chapter Gold IRA guide covering rollovers, fees, scams to avoid, and IRS rules. No phone call required.",
              "author": { "@type": "Organization", "name": "Rich Dad Retirement" },
              "publisher": { "@type": "Organization", "name": "Rich Dad Retirement", "logo": { "@type": "ImageObject", "url": "https://richdadretirement.com/logo.png" } },
              "datePublished": "2026-01-01",
              "dateModified": "2026-03-01"
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://richdadretirement.com/" },
                { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://richdadretirement.com/guide" },
                { "@type": "ListItem", "position": 3, "name": "Free Gold IRA Kit", "item": "https://richdadretirement.com/guide/free" }
              ]
            }
          ]
        }) }}
      />
      <div className="max-w-6xl mx-auto px-4 pt-8 pb-4">
        <AnswerFirst
          answer="Our free 2026 Gold IRA Protection Guide is a 10-chapter PDF covering how rollovers work, what fees are fair, and scams to avoid. No phone call required — just enter your email for instant download."
          keyFacts={[
            "10 chapters covering Gold IRA rollovers, fees, IRS rules, and scam prevention",
            "Instant PDF download — no phone call, no sales pitch required",
            "Chapter 9 on scams alone could save you thousands in hidden dealer markups",
            "Over 10,000 downloads from A+ BBB-rated partner companies",
          ]}
          variant="dark"
          className="max-w-3xl mx-auto"
        />
      </div>
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Free Download — No Phone Required
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4 font-[family-name:var(--font-playfair)]">
              The 2026 Gold IRA Protection Guide
            </h1>

            <p className="text-xl text-slate-300 mb-8">
              10 chapters. Zero sales pitch. Free.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: Shield,
                  text: "How a Gold IRA rollover actually works (step by step)",
                },
                {
                  icon: AlertTriangle,
                  text: "The real fees — what's fair and what's a ripoff",
                },
                {
                  icon: BookOpen,
                  text: "Scams to avoid (Chapter 9 could save you thousands)",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4 text-amber-400" />
                  </div>
                  <p className="text-slate-200 text-lg">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 text-slate-400 text-sm">
              <div className="flex items-center gap-1">
                <Lock className="w-4 h-4" />
                <span>SSL Encrypted</span>
              </div>
              <span>·</span>
              <span>10,000+ Downloads</span>
              <span>·</span>
              <span>A+ BBB Partners</span>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl"
            >
              <h2 className="text-2xl font-bold text-white mb-2 text-center">
                Get Your Free Guide
              </h2>
              <p className="text-slate-300 text-center mb-6">
                Instant download. No phone call. No spam.
              </p>

              <div className="space-y-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-300 mb-1">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Dave"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="dave@email.com"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-sm text-center">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-500 hover:bg-amber-400 disabled:bg-amber-500/50 text-slate-900 font-bold py-4 px-6 rounded-xl text-lg transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "GET YOUR FREE GUIDE →"
                  )}
                </button>
              </div>

              <p className="text-xs text-slate-400 text-center mt-4 flex items-center justify-center gap-1">
                <Lock className="w-3 h-3" />
                No phone required. No spam. Unsubscribe anytime.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
