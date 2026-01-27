import type { Metadata } from "next";
import {
  LPHeader,
  LPHero,
  LPTrustBar,
  LPBenefits,
  LPProcess,
  LPFeatures,
  LPStats,
  LPComparisonTable,
  LPFAQ,
  LPFinalCTA,
  LPFooter,
  LPSilverDemand,
  type FAQItem,
  type Benefit,
  type Step,
} from "@/components/lp";

// noindex for paid landing pages - don't compete with SEO pages
export const metadata: Metadata = {
  title: "Best Silver IRA Company 2026 | Free Consultation",
  description:
    "Compare top silver IRA companies. A+ BBB rated. No pushy sales. Get your free consultation today.",
  robots: {
    index: false,
    follow: false,
  },
};

// Track source for all CTAs on this page
const TRACK_SOURCE = "lp-silver-ira";

// Silver-specific benefits (using string icon names)
const silverBenefits: Benefit[] = [
  {
    icon: "factory",
    title: "Essential for Modern Tech",
    description:
      "Silver powers your grandkids' phones, your neighbor's solar panels, and electric cars. Over 50% goes to industry - it's not just precious, it's essential.",
  },
  {
    icon: "trending-up",
    title: "Demand Growing, Supply Limited",
    description:
      "Solar panel production alone needs 600 million oz by 2030. Mining can't keep up. Unlike gold, silver gets used up.",
  },
  {
    icon: "bar-chart",
    title: "Gold-Silver Ratio at 80:1",
    description:
      "Historically, the ratio averaged 15-20:1. Today's 80:1 ratio means silver is historically cheap compared to gold.",
  },
  {
    icon: "dollar-sign",
    title: "More Metal for Your Money",
    description:
      "With silver at ~$30/oz vs gold at ~$2,400/oz, you own significantly more physical metal. Easier to buy, easier to sell.",
  },
];

// 3-step process (using string icon names)
const processSteps: Step[] = [
  {
    icon: "phone",
    title: "Free Consultation",
    description:
      "Speak with a silver specialist who will answer all your questions without any pressure or obligation.",
  },
  {
    icon: "refresh-ccw",
    title: "Easy Rollover",
    description:
      "We handle all the paperwork to transfer your existing 401k, IRA, or retirement account tax-free.",
  },
  {
    icon: "coins",
    title: "Own Physical Silver",
    description:
      "Your IRS-approved silver is stored in a secure depository with full insurance protection.",
  },
];

// Augusta features
const augustaFeatures = [
  "A+ BBB Rating - Zero Consumer Complaints",
  "No High-Pressure Sales Tactics",
  "Lifetime Customer Support",
  "Transparent Pricing - No Hidden Fees",
  "IRS-Approved Silver Products",
  "Free Silver IRA Guide",
];

// Silver stats
const silverStats = [
  { value: ".999", label: "Silver Purity Required" },
  { value: "$50K", label: "Minimum Investment" },
  { value: "80:1", label: "Gold-Silver Ratio" },
  { value: "50%+", label: "Industrial Demand" },
];

// FAQ content
const faqs: FAQItem[] = [
  {
    question: "What is a Silver IRA?",
    answer:
      "A Silver IRA is a self-directed retirement account that allows you to hold physical silver coins and bars as part of your retirement savings. It offers the same tax advantages as traditional IRAs while providing protection against inflation and market volatility.",
  },
  {
    question: "How do I rollover my 401k to a Silver IRA?",
    answer:
      "The process is simple and tax-free. You open a self-directed IRA, initiate a direct rollover from your 401k, and then purchase IRS-approved silver. Augusta handles all the paperwork and guides you through each step.",
  },
  {
    question: "What are the tax benefits of a Silver IRA?",
    answer:
      "Silver IRAs offer the same tax benefits as traditional IRAs - your contributions may be tax-deductible and your investments grow tax-deferred until retirement. Roth Silver IRAs offer tax-free growth and withdrawals.",
  },
  {
    question: "What silver coins are IRA-approved?",
    answer:
      "IRS-approved silver includes American Silver Eagles, Canadian Silver Maple Leafs, Austrian Silver Philharmonics, and silver bars with .999 purity from approved refiners like PAMP Suisse and Johnson Matthey.",
  },
  {
    question: "How much should I invest in silver?",
    answer:
      "Financial experts typically recommend allocating 5-15% of your portfolio to precious metals. Augusta's specialists can help you determine the right allocation based on your retirement goals and risk tolerance.",
  },
  {
    question: "Why is silver used in so many industries?",
    answer:
      "Silver has the highest electrical conductivity of any metal, making it irreplaceable in electronics, solar panels, and medical devices. Unlike gold which mostly sits in vaults, over 50% of silver is consumed by industry each year. This industrial demand, combined with growing green technology adoption, creates consistent buying pressure.",
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

export default function SilverIRALandingPage() {
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
        headline="Best Silver IRA Company 2026"
        subheadline="Protect your retirement with physical silver. No pushy sales. Education-first approach. Free expert consultation."
        ctaText="Get Your Free Consultation"
        linkContext="silver"
        trackSource={TRACK_SOURCE}
        urgencyBadge="2026 Guide"
      />

      {/* Trust Bar */}
      <LPTrustBar rating={4.9} reviewCount={2847} bbbRating="A+" />

      {/* Featured Testimonial */}
      <section className="bg-slate-900 py-8 md:py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8">
            <div className="absolute -top-3 left-6 bg-slate-900 px-2">
              <span className="text-amber-400 text-4xl">&ldquo;</span>
            </div>
            <blockquote className="text-slate-300 text-lg md:text-xl leading-relaxed mb-4">
              Augusta made the entire process simple. No pressure, just education. I now feel confident about my silver IRA and my retirement is better protected.
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                <span className="text-amber-400 font-bold">RK</span>
              </div>
              <div>
                <div className="text-white font-semibold">Robert K.</div>
                <div className="text-slate-400 text-sm">Verified Augusta Customer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Silver Section */}
      <LPBenefits headline="Why Silver for Your IRA?" benefits={silverBenefits} />

      {/* Silver Demand Drivers - Visual Section */}
      <LPSilverDemand />

      {/* How It Works */}
      <LPProcess
        headline="How It Works (3 Simple Steps)"
        steps={processSteps}
        ctaText="Start Free Consultation"
        linkContext="silver"
        trackSource={TRACK_SOURCE}
      />

      {/* Why Augusta Section */}
      <LPFeatures
        headline="Why Augusta Precious Metals?"
        features={augustaFeatures}
      />

      {/* Silver Stats */}
      <LPStats headline="Silver IRA Quick Facts" stats={silverStats} />

      {/* Company Comparison Table */}
      <LPComparisonTable headline="Compare Silver IRA Companies (2026)" trackSource={TRACK_SOURCE} />

      {/* FAQ Section */}
      <LPFAQ headline="Frequently Asked Questions" faqs={faqs} />

      {/* Final CTA */}
      <LPFinalCTA
        headline="Ready to Protect Your Retirement?"
        subheadline="Speak with a silver specialist today"
        ctaText="Get Your Free Consultation"
        trustPoints={["No obligation", "100% free", "Takes 15 minutes"]}
        linkContext="silver"
        trackSource={TRACK_SOURCE}
      />

      {/* Minimal Footer */}
      <LPFooter />
    </div>
  );
}
