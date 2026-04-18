"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  ShieldCheck,
  TrendingUp,
  Lock,
  Landmark,
  Coins,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/CardV2";
import { Badge } from "@/components/ui/BadgeV2";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] as [number, number, number, number] },
};

const fadeUpDelayed = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.25, 1, 0.5, 1] as [number, number, number, number] },
});

export function HeroSectionV2() {
  return (
    <section className="hero-gradient relative overflow-hidden border-b border-[#2A2D42]">
      <div className="container-x mx-auto">
        <div className="grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:py-24">
          {/* LEFT: Copy + CTAs */}
          <motion.div {...fadeUp} className="max-w-[640px]">
            <Badge variant="live" size="md" pulse className="mb-6 max-w-full">
              <span className="truncate">Gold <span className="tactical normal-case tracking-normal text-[#F6F4EF] ml-1">$2,348.12</span> <span className="text-[#4ADE80] ml-1">+0.84%</span></span>
            </Badge>

            <p className="eyebrow mb-5">
              Wealth Preservation · Retirement Security
            </p>

            <h1 className="editorial text-[2.25rem] sm:text-[2.75rem] md:text-5xl lg:text-[4.5rem] leading-[0.98] text-[#F6F4EF] mb-6 break-words">
              Protect your retirement with{" "}
              <span className="italic text-[#D4A94E] font-normal">physical gold.</span>
            </h1>

            <p className="text-[17px] md:text-[19px] leading-[1.7] text-[#D0CCC4] mb-9 max-w-[580px]">
              Compare the top Gold IRA custodians, estimate a rollover outcome in under a
              minute, and hedge paper-risk with bullion-backed retirement strategies built
              for long-term capital preservation.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button asChild variant="primary" size="lg">
                <Link href="/quiz">
                  Find My Best Gold IRA Match
                  <ChevronRight className="size-5" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/tools">
                  Run Retirement Hedge Calculator
                </Link>
              </Button>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-[#A8A39A]">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="size-4 text-[#C5952E]" />
                IRS-compliant rollover guidance
              </span>
              <span className="hidden sm:inline text-[#3F4460]">·</span>
              <span className="inline-flex items-center gap-2">
                <Award className="size-4 text-[#C5952E]" />
                Only A+ BBB-rated custodians
              </span>
              <span className="hidden md:inline text-[#3F4460]">·</span>
              <span className="inline-flex items-center gap-2">
                <Lock className="size-4 text-[#C5952E]" />
                Built for ages 55–70
              </span>
            </div>

            {/* Stat row */}
            <div className="grid gap-3 sm:grid-cols-3 mt-9">
              {[
                { label: "$1.2B+", note: "reader portfolio allocated" },
                { label: "12,400+", note: "guided rollover matches" },
                { label: "A+ only", note: "BBB-rated custodians" },
              ].map((s, i) => (
                <motion.div key={s.label} {...fadeUpDelayed(0.25 + i * 0.08)}>
                  <Card variant="stat" padding="sm">
                    <div className="tactical text-[24px] text-[#F6F4EF] leading-none mb-1">
                      {s.label}
                    </div>
                    <div className="text-[13px] text-[#A8A39A] leading-tight">
                      {s.note}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Calculator widget */}
          <motion.div {...fadeUpDelayed(0.2)} className="relative">
            <div className="relative mx-auto w-full max-w-[560px]">
              {/* Background glow */}
              <div className="pointer-events-none absolute -inset-6 rounded-[32px] bg-[radial-gradient(circle_at_30%_20%,rgba(197,149,46,0.18),transparent_55%)]" />

              {/* Floating portfolio card (desktop only) */}
              <motion.div
                initial={{ opacity: 0, y: 30, rotate: 8 }}
                animate={{ opacity: 1, y: 0, rotate: 8 }}
                transition={{ delay: 0.4, duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                className="absolute -right-6 top-2 hidden lg:block w-[200px] z-20"
              >
                <Card variant="glass" padding="md" className="!rounded-2xl">
                  <div className="flex items-center gap-2 text-xs text-[#D0CCC4] mb-3">
                    <Coins className="size-4 text-[#D4A94E]" />
                    <span className="eyebrow !text-[10px]">Allocation Snapshot</span>
                  </div>
                  <div className="space-y-2.5">
                    <Bar label="Physical Gold" value={18} tone="gold" />
                    <Bar label="Silver" value={6} tone="silver" />
                    <Bar label="Paper Assets" value={76} tone="paper" />
                  </div>
                </Card>
              </motion.div>

              {/* Main calculator widget */}
              <Card variant="hero" padding="lg" className="gold-ring relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="eyebrow mb-2">Gold IRA Calculator</p>
                    <h3 className="font-serif text-[1.75rem] md:text-[2rem] leading-tight text-[#F6F4EF] tracking-[-0.02em]">
                      Estimate your rollover hedge
                    </h3>
                  </div>
                  <Badge variant="live" size="sm" pulse>
                    Live Tool
                  </Badge>
                </div>

                <div className="space-y-5">
                  {/* Input + output panels */}
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border border-[#2A2D42] bg-[rgba(255,255,255,0.02)] p-4">
                      <div className="text-[12px] uppercase tracking-[0.18em] text-[#A8A39A] mb-2">
                        Current 401(k) / IRA
                      </div>
                      <div className="tactical text-[28px] font-semibold text-[#F6F4EF] leading-none">
                        $350,000
                      </div>
                    </div>
                    <div className="rounded-xl border border-[rgba(197,149,46,0.32)] bg-[rgba(197,149,46,0.06)] p-4">
                      <div className="text-[12px] uppercase tracking-[0.18em] text-[#D4A94E] mb-2">
                        Suggested metals
                      </div>
                      <div className="tactical text-[28px] font-semibold text-[#D4A94E] leading-none">
                        $52,500
                      </div>
                    </div>
                  </div>

                  {/* Allocation slider */}
                  <div>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="text-[#D0CCC4]">Allocation target</span>
                      <span className="tactical text-[#F6F4EF]">15%</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-white/[0.05] overflow-hidden">
                      <div className="h-2.5 w-[15%] rounded-full bg-gradient-to-r from-[#A67D24] to-[#D4A94E]" />
                    </div>
                  </div>

                  {/* Ticker mini-grid */}
                  <div className="grid gap-2 grid-cols-3">
                    {[
                      { label: "Gold", value: "$2,348", tone: "text-[#D4A94E]" },
                      { label: "Silver", value: "$28.41", tone: "text-[#F6F4EF]" },
                      { label: "Inflation", value: "3.4%", tone: "text-[#FCA5A5]" },
                    ].map((t) => (
                      <div
                        key={t.label}
                        className="rounded-lg bg-[#121423] border border-[#2A2D42] p-3"
                      >
                        <div className="text-[10px] uppercase tracking-[0.18em] text-[#A8A39A] mb-1">
                          {t.label}
                        </div>
                        <div className={`tactical text-[16px] leading-none ${t.tone}`}>
                          {t.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button asChild variant="primary" size="lg" fullWidth>
                    <Link href="/tools">
                      Open Full Calculator
                      <ChevronRight className="size-5" />
                    </Link>
                  </Button>

                  <div className="flex items-start gap-3 rounded-xl border border-[#2A2D42] bg-[rgba(255,255,255,0.015)] p-4">
                    <Landmark className="size-5 text-[#C5952E] shrink-0 mt-0.5" />
                    <p className="text-[13px] leading-[1.55] text-[#D0CCC4]">
                      Built for rollover education, custodian comparison, and conservative
                      retirement planning. Not investment advice.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Live ticker floating chip (mobile visible) */}
              <motion.div
                initial={{ opacity: 0, y: 20, rotate: -6 }}
                animate={{ opacity: 1, y: 0, rotate: -6 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="absolute -left-4 sm:-left-8 -bottom-5 w-[180px]"
              >
                <Card variant="glass" padding="sm" className="!rounded-xl">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="size-4 text-[#2E8B57]" />
                    <span className="eyebrow !text-[10px]">Gold 30D</span>
                  </div>
                  <div className="tactical text-[20px] text-[#F6F4EF] leading-tight">
                    +4.1%
                  </div>
                  <div className="text-[11px] text-[#A8A39A]">vs S&amp;P 500 -1.3%</div>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Bar({ label, value, tone }: { label: string; value: number; tone: "gold" | "silver" | "paper" }) {
  const barColor =
    tone === "gold" ? "bg-[#C5952E]" : tone === "silver" ? "bg-[#B6B3AD]" : "bg-[#44506A]";
  return (
    <div>
      <div className="mb-1 flex justify-between text-[12px]">
        <span className="text-[#D0CCC4]">{label}</span>
        <span className="tactical text-[#F6F4EF]">{value}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/[0.05] overflow-hidden">
        <div className={`h-1.5 rounded-full ${barColor}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
