"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FileSearch, ArrowRightLeft, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/CardV2";
import { Button } from "@/components/ui/Button";

const STEPS = [
  {
    step: "01",
    icon: FileSearch,
    title: "Take the 60-second match quiz",
    body:
      "We ask 9 short questions about your current 401(k)/IRA size, target retirement age, and tax exposure. No personal financial data leaves your browser.",
  },
  {
    step: "02",
    icon: ArrowRightLeft,
    title: "Get your rollover playbook",
    body:
      "Receive a free, IRS-aware PDF that maps your account type (401k, 403b, TSP, IRA) to the 1–2 custodians most aligned with your situation — plus the estimated bullion allocation.",
  },
  {
    step: "03",
    icon: ShieldCheck,
    title: "Roll over with zero tax penalty",
    body:
      "Your chosen custodian handles the 60-day rollover paperwork directly with your existing provider. Physical gold goes to an IRS-approved depository in your name — you never touch it.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="section-wash relative py-20 md:py-28 border-y border-[#2A2D42]">
      <div className="container-x mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <p className="eyebrow mb-4">A Simpler Path</p>
          <h2 className="editorial text-4xl md:text-5xl text-[#F6F4EF] mb-5">
            Three steps. No tax penalty.
            <br />
            <span className="italic text-[#D4A94E] font-normal">
              No guesswork.
            </span>
          </h2>
          <p className="text-[17px] text-[#D0CCC4] leading-[1.65]">
            The Gold IRA rollover process is older than your 401(k). Our readers
            typically finish it in under 14 days from first click to depositoried bullion.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3 mb-12">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="relative"
            >
              <Card variant="default" padding="lg" className="h-full">
                <div className="flex items-baseline gap-4 mb-5">
                  <span className="tactical text-[48px] text-[#D4A94E] leading-none opacity-70">
                    {s.step}
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-[rgba(197,149,46,0.4)] to-transparent" />
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[rgba(197,149,46,0.28)] bg-[rgba(197,149,46,0.08)] text-[#D4A94E]">
                    <s.icon className="size-5" />
                  </div>
                </div>
                <h3 className="font-serif text-[1.5rem] leading-tight text-[#F6F4EF] mb-3 tracking-[-0.02em]">
                  {s.title}
                </h3>
                <p className="text-[15px] leading-[1.65] text-[#D0CCC4]">
                  {s.body}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button asChild variant="primary" size="lg">
            <Link href="/quiz">Start the 60-second match →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
