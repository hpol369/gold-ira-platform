"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, ShieldCheck, Clock } from "lucide-react";
import { Card } from "@/components/ui/CardV2";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container-x mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <Card
            variant="featured"
            padding="none"
            className="relative overflow-hidden"
          >
            <div className="relative grid gap-10 p-8 md:p-14 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
              {/* Background flourishes */}
              <div className="pointer-events-none absolute inset-0 opacity-80">
                <div className="absolute -top-24 -right-20 w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(197,149,46,0.22),transparent_68%)]" />
                <div className="absolute -bottom-20 -left-10 w-[360px] h-[360px] rounded-full bg-[radial-gradient(circle,rgba(197,149,46,0.10),transparent_70%)]" />
              </div>

              {/* LEFT: message + CTAs */}
              <div className="relative">
                <p className="eyebrow mb-5">Your 60-Second First Step</p>
                <h2 className="editorial text-4xl md:text-5xl lg:text-[3.5rem] text-[#F6F4EF] mb-6 leading-[0.98]">
                  Match with the right
                  <br />
                  Gold IRA custodian
                  <br />
                  <span className="italic text-[#D4A94E] font-normal">
                    in under a minute.
                  </span>
                </h2>
                <p className="text-[17px] md:text-[18px] text-[#D0CCC4] leading-[1.65] mb-8 max-w-[520px]">
                  Answer 9 short questions. Get a personalised rollover playbook
                  with the 1–2 custodians best aligned to your account type,
                  target age, and tax situation. Free. No call required.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                  <Button asChild variant="primary" size="xl">
                    <Link href="/quiz">
                      Start the 60-second Match
                      <ArrowRight className="size-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="secondary" size="xl">
                    <Link href="/compare">Browse all custodians</Link>
                  </Button>
                </div>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-[#A8A39A]">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="size-4 text-[#C5952E]" /> 60 seconds
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <ShieldCheck className="size-4 text-[#C5952E]" /> No personal data stored
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Mail className="size-4 text-[#C5952E]" /> Instant email playbook
                  </span>
                </div>
              </div>

              {/* RIGHT: secondary newsletter pane */}
              <div className="relative">
                <Card variant="glass" padding="lg" className="!rounded-[24px]">
                  <p className="eyebrow mb-4">Weekly Insight</p>
                  <h3 className="font-serif text-[1.75rem] leading-tight text-[#F6F4EF] mb-3 tracking-[-0.02em]">
                    The Rich Dad
                    <br />
                    <span className="italic text-[#D4A94E] font-normal">
                      Friday Briefing
                    </span>
                  </h3>
                  <p className="text-[14px] text-[#D0CCC4] leading-[1.6] mb-5">
                    Every Friday: spot-price context, central-bank activity, and
                    the single most important retirement news of the week. 4-minute read.
                  </p>

                  <form
                    action="/api/newsletter"
                    method="POST"
                    className="space-y-3"
                  >
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-[#A8A39A]" />
                      <input
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full h-12 pl-10 pr-4 rounded-lg bg-[#0C0D18] border border-[#2A2D42] text-[#F6F4EF] placeholder:text-[#7E7A72] focus:outline-none focus:border-[rgba(197,149,46,0.55)] focus:ring-2 focus:ring-[rgba(197,149,46,0.2)] transition-all"
                      />
                    </div>
                    <Button type="submit" variant="primary" size="md" fullWidth>
                      Get the Friday Briefing
                    </Button>
                    <p className="text-[12px] text-[#A8A39A] text-center">
                      No spam. Unsubscribe one-click. 48,000+ subscribers.
                    </p>
                  </form>
                </Card>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
