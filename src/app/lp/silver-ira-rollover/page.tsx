import type { Metadata } from "next";
import {
  LPHeader,
  LPHero,
  LPTrustBar,
  LPBenefits,
  LPProcess,
  LPFAQ,
  LPFinalCTA,
  LPFooter,
  type FAQItem,
  type Benefit,
  type Step,
} from "@/components/lp";
import { LPAccountTypes } from "@/components/lp/LPAccountTypes";

// noindex for paid landing pages - don't compete with SEO pages
export const metadata: Metadata = {
  title: "Rollover 401k to Silver IRA (Tax-Free) | Free Consultation",
  description:
    "Convert your 401k, IRA, or retirement account to physical silver tax-free. We handle all paperwork. No taxes, no penalties.",
  robots: {
    index: false,
    follow: false,
  },
};

// Track source for all CTAs on this page
const TRACK_SOURCE = "lp-silver-ira-rollover";

// Rollover-specific benefits
const rolloverBenefits: Benefit[] = [
  {
    icon: "shield",
    title: "Tax-Free Transfer",
    description:
      "Direct rollovers move funds between custodians without triggering taxes or penalties.",
  },
  {
    icon: "clock",
    title: "Keep Your Benefits",
    description:
      "Your new Silver IRA maintains all the tax advantages of your original retirement account.",
  },
  {
    icon: "award",
    title: "We Handle Paperwork",
    description:
      "Augusta manages the entire rollover process. You just sign a few forms and we do the rest.",
  },
  {
    icon: "coins",
    title: "Own Physical Silver",
    description:
      "Your funds are converted to IRS-approved physical silver stored in secure, insured depositories.",
  },
];

// 3-step rollover process
const processSteps: Step[] = [
  {
    icon: "phone",
    title: "Free Consultation",
    description:
      "Speak with a rollover specialist who will answer all questions and explain your options.",
  },
  {
    icon: "file-text",
    title: "We Handle Everything",
    description:
      "Augusta initiates the transfer with your current custodian and handles all paperwork.",
  },
  {
    icon: "coins",
    title: "Own Physical Silver",
    description:
      "Once funds transfer, you select your silver. It's stored in an IRS-approved depository.",
  },
];

// FAQ content specific to rollovers
const faqs: FAQItem[] = [
  {
    question: "Is the 401k to silver rollover really tax-free?",
    answer:
      "Yes! A direct rollover (also called a trustee-to-trustee transfer) moves funds directly between custodians without you taking possession. Since funds never touch your hands, no taxes or penalties are triggered. This is different from an indirect rollover where you receive a check.",
  },
  {
    question: "How long does the rollover process take?",
    answer:
      "Most rollovers complete within 2-3 weeks. The exact timeline depends on your current custodian's processing speed. Augusta handles all communication with your existing provider to ensure a smooth, timely transfer.",
  },
  {
    question: "What happens to my current 401k or IRA account?",
    answer:
      "Once the rollover completes, the transferred funds are no longer in your original account - they're in your new Silver IRA. You can do a full rollover of all funds, or a partial rollover to diversify while keeping some in your existing account.",
  },
  {
    question: "Can I rollover a 401k from my current employer?",
    answer:
      "Most in-service rollovers (while still employed) are limited or not allowed. However, 401(k)s from previous employers can always be rolled over. Additionally, many plans allow rollovers after age 59½. Augusta's specialists can help you understand your specific options.",
  },
  {
    question: "Can I do a partial rollover?",
    answer:
      "Yes! You don't have to transfer everything. Many investors choose to diversify by moving a portion (like 10-25%) of their retirement funds to silver while keeping the rest in traditional investments. There's no minimum percentage required.",
  },
  {
    question: "What silver can I buy with my rollover funds?",
    answer:
      "IRS-approved silver includes American Silver Eagles, Canadian Maple Leafs, Austrian Philharmonics, and .999 fine silver bars from accredited refiners like PAMP Suisse. Augusta's specialists will guide you to the best options for your goals.",
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

export default function SilverIRARolloverLandingPage() {
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
        headline="Rollover Your 401k to Silver (Tax-Free)"
        subheadline="Keep your tax benefits. Own physical silver. We handle all the paperwork."
        ctaText="Start Your Tax-Free Rollover"
        linkContext="silver"
        trackSource={TRACK_SOURCE}
        urgencyBadge="No Taxes, No Penalties"
      />

      {/* Trust Bar */}
      <LPTrustBar rating={4.9} reviewCount={2847} bbbRating="A+" />

      {/* Rollover Benefits */}
      <LPBenefits
        headline="Why Rollover to Silver?"
        benefits={rolloverBenefits}
      />

      {/* Eligible Account Types */}
      <LPAccountTypes />

      {/* How It Works */}
      <LPProcess
        headline="Rollover in 3 Simple Steps"
        steps={processSteps}
        ctaText="Get Your Free Rollover Consultation"
        linkContext="silver"
        trackSource={TRACK_SOURCE}
      />

      {/* FAQ Section */}
      <LPFAQ headline="Rollover Questions Answered" faqs={faqs} />

      {/* Final CTA */}
      <LPFinalCTA
        headline="Ready to Rollover to Silver?"
        subheadline="Augusta handles everything - no paperwork hassle"
        ctaText="Start Your Tax-Free Rollover"
        trustPoints={["Tax-free transfer", "We handle paperwork", "A+ BBB rated"]}
        linkContext="silver"
        trackSource={TRACK_SOURCE}
      />

      {/* Minimal Footer */}
      <LPFooter />
    </div>
  );
}
