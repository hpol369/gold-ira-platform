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
  title: "Silver IRA Fees: What Companies Don't Tell You | 2026 Guide",
  description:
    "Discover hidden silver IRA fees most companies don't disclose. Buyback spreads, premium markups, storage fees explained. Get the transparent choice.",
  robots: {
    index: false,
    follow: false,
  },
};

// Track source for all CTAs on this page
const TRACK_SOURCE = "lp-silver-ira-fees";

// Fee-focused process steps
const processSteps: Step[] = [
  {
    icon: "phone",
    title: "Free Consultation",
    description:
      "Speak with a silver specialist who will explain all fees honestly. No sales pressure.",
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

// Silver-specific hidden fees
const silverHiddenFees = [
  {
    title: "Buyback Spreads",
    description: "When you sell silver, some companies buy back at 15-35% below spot price",
  },
  {
    title: "Premium Markups",
    description: "Hidden in the 'price per ounce' - often 8-20% over spot for silver",
  },
  {
    title: "Percentage Storage",
    description: "0.5% of holdings - adds up fast as silver takes more space than gold",
  },
  {
    title: "Liquidation Fees",
    description: "Surprise charges when you need to sell your silver",
  },
  {
    title: "Wire Transfer Fees",
    description: "Nickel-and-dime charges on every transaction",
  },
];

// Augusta transparent fees
const augustaTransparentFees = [
  {
    title: "Fair Buyback",
    description: "Competitive spreads shown upfront before purchase",
  },
  {
    title: "Clear Premiums",
    description: "All silver pricing transparent, no hidden markups",
  },
  {
    title: "Flat Storage",
    description: "$180/year total - same whether $50K or $500K in silver",
  },
  {
    title: "No Liquidation Fees",
    description: "Sell your silver anytime without penalty",
  },
  {
    title: "Minimal Transaction Fees",
    description: "Standard wire fees only when needed",
  },
];

// Fee-specific FAQ content for silver
const faqs: FAQItem[] = [
  {
    question: "What are typical silver IRA fees?",
    answer:
      "Typical silver IRA fees include: account setup ($50-$150), annual custodian fees ($75-$300), storage fees ($100-$300/year or 0.5% of value), and transaction fees ($25-$50 per trade). Silver often has higher percentage-based storage costs than gold because it requires more vault space per dollar of value. The biggest hidden cost is the buyback spread - some companies buy back silver at 15-35% below spot.",
  },
  {
    question: "Why are silver IRA fees sometimes higher than gold?",
    answer:
      "Silver requires significantly more storage space per dollar of value compared to gold. A $50,000 silver investment weighs about 100 lbs vs just 1 lb for gold. This means higher shipping costs, more vault space, and potentially higher insurance. Companies with percentage-based storage fees charge more for silver accounts. Augusta's flat $180/year fee is the same regardless of whether you hold gold or silver.",
  },
  {
    question: "What hidden fees should I watch for with silver IRAs?",
    answer:
      "The biggest hidden fees in silver IRAs are: (1) Buyback spreads - many companies buy back silver at 15-35% below spot price; (2) Premium markups - silver premiums are often higher than gold, ranging from 8-20% over spot; (3) Percentage-based storage that grows with your account; (4) Liquidation fees when you sell; (5) Shipping fees for larger silver volumes.",
  },
  {
    question: "How much do silver buyback spreads really cost?",
    answer:
      "Silver buyback spreads can cost you 15-35% of your investment when you sell. On a $50,000 silver IRA, that's $7,500-$17,500 you'll never see. Silver spreads are typically wider than gold because of lower liquidity and higher handling costs. Always ask for buyback pricing in writing before opening an account.",
  },
  {
    question: "Is Augusta's $50K minimum worth it for silver?",
    answer:
      "For investors with $50,000 or more to protect, Augusta's transparent pricing typically saves significant money compared to companies with lower minimums but hidden fees. The flat $180/year storage fee is especially valuable for silver investors, since percentage-based storage would cost much more. Augusta also provides free educational resources specifically about silver investing.",
  },
  {
    question: "Can I hold both gold and silver in the same IRA?",
    answer:
      "Yes, you can hold both gold and silver in the same self-directed IRA. Many investors diversify between the two metals. Augusta's flat annual fee covers both gold and silver storage, making it cost-effective to hold a mix. Their specialists can help you determine the right allocation based on your goals.",
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

export default function SilverIRAFeesLandingPage() {
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
        headline="Silver IRA Fees: What Companies Don't Tell You"
        subheadline="Most providers hide costs in buyback spreads and premium markups. Get the truth before you invest in silver."
        ctaText="Get Your Free Consultation"
        linkContext="silver"
        trackSource={TRACK_SOURCE}
        urgencyBadge="2026 Fee Guide"
      />

      {/* Trust Bar */}
      <LPTrustBar rating={4.9} reviewCount={2847} bbbRating="A+" />

      {/* Fee Expose Section */}
      <LPFeeExpose
        headline="The Hidden Silver IRA Fees Others Won't Tell You About"
        hiddenFees={silverHiddenFees}
        transparentFees={augustaTransparentFees}
        impactCallout="On a $50,000 silver IRA, hidden buyback spreads alone can cost you $7,500-$17,500 when you sell. Silver spreads are often wider than gold - choose a transparent provider."
      />

      {/* Company Comparison Table */}
      <LPComparisonTable headline="Compare Silver IRA Fees (2026)" trackSource={TRACK_SOURCE} />

      {/* How It Works */}
      <LPProcess
        headline="Get Complete Fee Transparency"
        steps={processSteps}
        ctaText="Get Your Free Consultation"
        linkContext="silver"
        trackSource={TRACK_SOURCE}
      />

      {/* FAQ Section */}
      <LPFAQ headline="Silver IRA Fee Questions Answered" faqs={faqs} />

      {/* Final CTA */}
      <LPFinalCTA
        headline="Stop Overpaying for Your Silver IRA"
        subheadline="Get complete fee transparency with Augusta"
        ctaText="Get Your Free Consultation"
        trustPoints={[
          "100% transparent pricing",
          "No hidden buyback fees",
          "Flat annual fees",
        ]}
        linkContext="silver"
        trackSource={TRACK_SOURCE}
      />

      {/* Minimal Footer */}
      <LPFooter />
    </div>
  );
}
