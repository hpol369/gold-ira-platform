import type { Metadata } from "next";
import {
  LPHeader,
  LPHero,
  LPTrustBar,
  LPFeeExpose,
  LPComparisonTable,
  LPProcess,
  LPFAQ,
  LPFinalCTA,
  LPFooter,
  type FAQItem,
  type Step,
} from "@/components/lp";

// noindex for paid landing pages - don't compete with SEO pages
export const metadata: Metadata = {
  title: "Gold IRA Fees: What Companies Don't Tell You | 2026 Guide",
  description:
    "Discover hidden gold IRA fees most companies don't disclose. Buyback spreads, premium markups, storage fees explained. Get the transparent choice.",
  robots: {
    index: false,
    follow: false,
  },
};

// Track source for all CTAs on this page
const TRACK_SOURCE = "lp-gold-ira-fees";

// Fee-focused process steps
const processSteps: Step[] = [
  {
    icon: "phone",
    title: "Free Consultation",
    description:
      "Speak with a specialist who will explain all fees honestly. No sales pressure.",
  },
  {
    icon: "file-text",
    title: "Get Full Transparency",
    description:
      "See exactly what you'll pay - all costs laid out upfront before you decide.",
  },
  {
    icon: "check-circle",
    title: "Open Your Account",
    description:
      "Know all costs upfront. No surprises, no hidden charges.",
  },
];

// Fee-specific FAQ content
const faqs: FAQItem[] = [
  {
    question: "What are typical gold IRA fees?",
    answer:
      "Typical gold IRA fees include: account setup ($50-$150), annual custodian fees ($75-$300), storage fees ($100-$300/year or 0.5% of value), and transaction fees ($25-$50 per trade). However, the largest hidden cost is often the buyback spread - the difference between what you pay for gold and what a company will pay you when you sell. Some companies have spreads of 10-30%, meaning you could lose thousands when liquidating.",
  },
  {
    question: "What hidden fees should I watch for?",
    answer:
      "The biggest hidden fees in gold IRAs are: (1) Buyback spreads - many companies buy back gold at 10-30% below spot price; (2) Premium markups - inflated prices hidden in 'per ounce' pricing; (3) Percentage-based storage that grows with your account; (4) Liquidation fees when you need to sell; (5) Wire transfer fees on every transaction. Always ask for a complete fee schedule in writing before opening an account.",
  },
  {
    question: "Why do some companies have higher premiums?",
    answer:
      "Higher premiums often hide commission payments to salespeople and marketing costs. Some companies mark up gold 15-20% above spot price, while transparent companies like Augusta keep premiums competitive. Always compare the total cost per ounce to the current spot price - a difference of more than 5-8% for common coins should raise questions.",
  },
  {
    question: "How much do buyback spreads really cost?",
    answer:
      "Buyback spreads can cost you 10-30% of your investment when you sell. On a $100,000 gold IRA, that's $10,000-$30,000 you'll never see. For example, if you buy gold at $2,000/oz and the company only offers $1,700/oz when you sell (a 15% spread), you've lost $300 per ounce regardless of whether gold prices went up. This is the single largest hidden cost in the industry.",
  },
  {
    question: "Is Augusta's $50K minimum worth it for the transparency?",
    answer:
      "For investors with $50,000 or more to protect, Augusta's transparent pricing typically saves money compared to companies with lower minimums but hidden fees. The combination of fair buyback pricing, competitive premiums, flat $180/year storage, and no liquidation fees often results in thousands saved over time. Augusta also provides free educational resources and lifetime customer support.",
  },
  {
    question: "Can I negotiate gold IRA fees?",
    answer:
      "Some fees are negotiable, especially for larger accounts. However, the fees you see advertised are often the least important costs. Instead of negotiating small annual fees, focus on: (1) Getting buyback pricing in writing; (2) Comparing premium markups across companies; (3) Understanding the total cost when you eventually sell. These 'hidden' costs dwarf the advertised fees.",
  },
];

// Generate FAQPage schema
function generateFAQSchema(faqItems: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export default function GoldIRAFeesLandingPage() {
  const faqSchema = generateFAQSchema(faqs);

  return (
    <div className="min-h-screen bg-slate-900">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Sticky Header */}
      <LPHeader />

      {/* Hero Section */}
      <LPHero
        headline="Gold IRA Fees: What Companies Don't Tell You"
        subheadline="Most providers hide costs in buyback spreads and premium markups. Get the truth before you invest."
        ctaText="Get Your Free Consultation"
        linkContext="fees"
        trackSource={TRACK_SOURCE}
        urgencyBadge="2026 Fee Guide"
      />

      {/* Trust Bar */}
      <LPTrustBar rating={4.9} reviewCount={2847} bbbRating="A+" />

      {/* Fee Expose Section - NEW */}
      <LPFeeExpose />

      {/* Company Comparison Table */}
      <LPComparisonTable headline="Compare Gold IRA Fees (2026)" trackSource={TRACK_SOURCE} />

      {/* How It Works */}
      <LPProcess
        headline="Get Complete Fee Transparency"
        steps={processSteps}
        ctaText="Get Your Free Consultation"
        linkContext="fees"
        trackSource={TRACK_SOURCE}
      />

      {/* FAQ Section */}
      <LPFAQ headline="Gold IRA Fee Questions Answered" faqs={faqs} />

      {/* Final CTA */}
      <LPFinalCTA
        headline="Stop Overpaying for Your Gold IRA"
        subheadline="Get complete fee transparency with Augusta"
        ctaText="Get Your Free Consultation"
        trustPoints={[
          "100% transparent pricing",
          "No hidden buyback fees",
          "Flat annual fees",
        ]}
        linkContext="fees"
        trackSource={TRACK_SOURCE}
      />

      {/* Minimal Footer */}
      <LPFooter />
    </div>
  );
}
