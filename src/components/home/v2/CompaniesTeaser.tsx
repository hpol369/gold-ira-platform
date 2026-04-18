"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, CheckCircle2, ArrowRight, Crown } from "lucide-react";
import { Card } from "@/components/ui/CardV2";
import { Badge } from "@/components/ui/BadgeV2";
import { Button } from "@/components/ui/Button";

type Company = {
  rank: number;
  name: string;
  slug: string;
  rating: number;
  minimum: string;
  bestFor: string;
  pros: string[];
  featured?: boolean;
  badge?: string;
};

const COMPANIES: Company[] = [
  {
    rank: 1,
    name: "Augusta Precious Metals",
    slug: "augusta",
    rating: 5.0,
    minimum: "$50,000",
    bestFor: "Premium IRA rollovers ($100k+)",
    pros: [
      "Lifetime customer service · dedicated agent",
      "Harvard-trained economist webinar",
      "Zero fees for up to 10 years (qualifying)",
    ],
    featured: true,
    badge: "Editor's Choice 2026",
  },
  {
    rank: 2,
    name: "Goldco",
    slug: "goldco",
    rating: 4.9,
    minimum: "$25,000",
    bestFor: "Mid-range IRAs seeking speed",
    pros: [
      "10% back in free silver (qualifying)",
      "48-hour rollover processing",
      "A+ BBB, AAA BCA, 1000s of reviews",
    ],
  },
  {
    rank: 3,
    name: "Noble Gold Investments",
    slug: "noble-gold",
    rating: 4.8,
    minimum: "$20,000",
    bestFor: "First-time gold buyers",
    pros: [
      "Lowest minimum of top-tier",
      "Texas-based IRS-approved depository",
      "Rare coin & Royal Survival Pack options",
    ],
  },
  {
    rank: 4,
    name: "American Hartford Gold",
    slug: "american-hartford",
    rating: 4.7,
    minimum: "$10,000",
    bestFor: "Accessible entry points",
    pros: [
      "No minimum on direct purchases",
      "Free shipping & buyback commitment",
      "Endorsed by Bill O'Reilly · Lou Dobbs",
    ],
  },
];

export function CompaniesTeaser() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container-x mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">2026 Head-to-Head Rankings</p>
            <h2 className="editorial text-4xl md:text-5xl text-[#F6F4EF] mb-4">
              The 4 Gold IRA custodians that
              <br />
              <span className="italic text-[#D4A94E] font-normal">
                actually passed our audit.
              </span>
            </h2>
            <p className="text-[16px] md:text-[17px] text-[#D0CCC4] leading-[1.6]">
              We reviewed 12 custodians against fee transparency, BBB rating,
              storage security, and buyback guarantees. Only these four survived.
            </p>
          </div>
          <Button asChild variant="outline" size="lg" className="shrink-0">
            <Link href="/compare">
              See all 12 companies
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-2">
          {COMPANIES.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
            >
              <Card
                variant={c.featured ? "featured" : "default"}
                padding="lg"
                hoverable
                className="h-full"
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-start gap-4">
                    <div
                      className={[
                        "flex h-14 w-14 shrink-0 items-center justify-center rounded-xl font-serif text-2xl font-bold",
                        c.featured
                          ? "bg-gradient-to-br from-[#D4A94E] to-[#A67D24] text-[#0C0D18] shadow-[0_8px_24px_rgba(197,149,46,0.32)]"
                          : "bg-[#1E2134] border border-[#2A2D42] text-[#D4A94E]",
                      ].join(" ")}
                    >
                      #{c.rank}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                        <h3 className="font-serif text-[1.5rem] md:text-[1.65rem] text-[#F6F4EF] leading-tight tracking-[-0.015em]">
                          {c.name}
                        </h3>
                        {c.badge && (
                          <Badge variant="gold" size="sm">
                            <Crown className="size-3" />
                            {c.badge}
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-sm text-[#D0CCC4]">
                        <span className="inline-flex items-center gap-1.5">
                          <div className="flex">
                            {Array.from({ length: 5 }).map((_, idx) => (
                              <Star
                                key={idx}
                                className={[
                                  "size-3.5",
                                  idx < Math.floor(c.rating)
                                    ? "fill-[#D4A94E] text-[#D4A94E]"
                                    : "text-[#3F4460]",
                                ].join(" ")}
                              />
                            ))}
                          </div>
                          <span className="tactical text-[#F6F4EF]">{c.rating.toFixed(1)}</span>
                        </span>
                        <span className="text-[#3F4460]">·</span>
                        <span>Min. {c.minimum}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-[13px] text-[#A8A39A] uppercase tracking-[0.16em] mb-3">
                  Best for · <span className="text-[#D4A94E]">{c.bestFor}</span>
                </p>

                <ul className="space-y-2.5 mb-6">
                  {c.pros.map((pro) => (
                    <li key={pro} className="flex items-start gap-2.5 text-[14px] text-[#D0CCC4] leading-[1.55]">
                      <CheckCircle2 className="size-4 text-[#C5952E] shrink-0 mt-0.5" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3 flex-wrap pt-4 border-t border-[#2A2D42]">
                  <Button asChild variant={c.featured ? "primary" : "secondary"} size="md">
                    <Link href={`/reviews/${c.slug}`}>
                      Read full review
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" size="md">
                    <Link href={`/compare/${c.slug}`}>Compare fees →</Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
