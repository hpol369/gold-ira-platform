"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { TrendingDown, AlertTriangle, Flame, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/CardV2";

const THREATS = [
  {
    icon: Flame,
    eyebrow: "Silent Tax",
    title: "Inflation erodes 401(k) purchasing power",
    body:
      "A 3.4% inflation rate quietly removes six-figure value from a paper-heavy retirement account over 10 years. Gold has historically outpaced every major fiat currency in the long run.",
    stat: "-38%",
    statLabel: "real purchasing power lost (2000–2024)",
    href: "/guide/inflation-retirement",
    cta: "See the inflation math",
    accent: "from-[#B7791F]",
  },
  {
    icon: TrendingDown,
    eyebrow: "Market Volatility",
    title: "One bad year can delay retirement by 5+ years",
    body:
      "Sequence-of-returns risk is the quiet killer for 55–70 year-olds. A 30%+ drawdown in the first years of retirement can permanently impair a paper-only portfolio's ability to recover.",
    stat: "2x",
    statLabel: "recovery time for withdrawing accounts",
    href: "/scenarios",
    cta: "View crisis scenarios",
    accent: "from-[#DC2626]",
  },
  {
    icon: AlertTriangle,
    eyebrow: "Dollar Risk",
    title: "Central banks are buying record amounts of gold",
    body:
      "If the world's most informed institutional buyers — sovereign central banks — are quietly de-dollarizing, the prudent retail investor's response is to hedge a measured portion of their IRA the same way.",
    stat: "1,137T",
    statLabel: "central bank gold purchased (2022–2024)",
    href: "/guide/central-banks-gold",
    cta: "Read the data",
    accent: "from-[#C5952E]",
  },
];

export function ProblemSection() {
  return (
    <section className="section-wash-alt relative py-20 md:py-28">
      <div className="container-x mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <p className="eyebrow mb-5">The Three Silent Threats</p>
          <h2 className="editorial text-4xl md:text-5xl lg:text-[3.5rem] text-[#F6F4EF] mb-6">
            You worked 30 years for this.
            <br />
            <span className="italic text-[#D4A94E] font-normal">
              Don't hand it to Wall Street.
            </span>
          </h2>
          <p className="text-[17px] md:text-[19px] text-[#D0CCC4] leading-[1.65] max-w-[680px]">
            Three forces are quietly compounding against every paper-heavy
            retirement account. A small, IRS-compliant allocation to physical
            gold neutralises all three at once.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {THREATS.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
            >
              <Link href={t.href} className="block group h-full">
                <Card variant="default" padding="lg" hoverable className="h-full">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${t.accent} via-transparent to-transparent opacity-[0.06] pointer-events-none`}
                  />
                  <div className="relative flex h-full flex-col">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[rgba(197,149,46,0.28)] bg-[rgba(197,149,46,0.08)] text-[#D4A94E]">
                        <t.icon className="size-6" />
                      </div>
                      <div className="text-right">
                        <div className="tactical text-[26px] text-[#F6F4EF] leading-none">
                          {t.stat}
                        </div>
                        <div className="text-[11px] text-[#A8A39A] uppercase tracking-[0.14em] mt-1 max-w-[150px]">
                          {t.statLabel}
                        </div>
                      </div>
                    </div>

                    <p className="eyebrow mb-3 !text-[#D4A94E]">{t.eyebrow}</p>

                    <h3 className="font-serif text-[1.6rem] leading-[1.15] text-[#F6F4EF] mb-4 tracking-[-0.02em]">
                      {t.title}
                    </h3>

                    <p className="text-[15px] leading-[1.65] text-[#D0CCC4] mb-6 flex-1">
                      {t.body}
                    </p>

                    <span className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#D4A94E] group-hover:text-[#F6F4EF] transition-colors">
                      {t.cta}
                      <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
