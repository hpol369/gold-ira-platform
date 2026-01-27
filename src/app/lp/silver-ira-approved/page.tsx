import type { Metadata } from "next";
import {
  LPHeader,
  LPHero,
  LPTrustBar,
  LPProcess,
  LPFAQ,
  LPFinalCTA,
  LPFooter,
  type FAQItem,
  type Step,
} from "@/components/lp";
import { LPApprovedProducts } from "@/components/lp/LPApprovedProducts";

// noindex for paid landing pages - don't compete with SEO pages
export const metadata: Metadata = {
  title: "IRA-Approved Silver: What You Can Buy | Complete Guide",
  description:
    "Only .999 fine silver qualifies for IRAs. See the complete list of IRS-approved silver coins and bars. Free expert consultation.",
  robots: {
    index: false,
    follow: false,
  },
};

// Track source for all CTAs on this page
const TRACK_SOURCE = "lp-silver-ira-approved";

// 3-step process
const processSteps: Step[] = [
  {
    icon: "phone",
    title: "Free Consultation",
    description:
      "Speak with a silver specialist who will explain which products best fit your investment goals.",
  },
  {
    icon: "coins",
    title: "Choose Your Silver",
    description:
      "Select from IRS-approved coins and bars. Augusta's team helps you understand premiums and value.",
  },
  {
    icon: "shield",
    title: "Secure Storage",
    description:
      "Your silver is stored in an IRS-approved depository with full insurance protection.",
  },
];

// FAQ content specific to approved products
const faqs: FAQItem[] = [
  {
    question: "What makes silver 'IRA-approved'?",
    answer:
      "The IRS requires silver in retirement accounts to be at least .999 fine (99.9% pure) and produced by a national government mint or an accredited refiner. The silver must also be stored in an approved depository - not at home. Examples include American Silver Eagles (.999) and Canadian Maple Leafs (.9999).",
  },
  {
    question: "Why can't I hold silver at home in my IRA?",
    answer:
      "IRS regulations require IRA assets to be held by a qualified custodian in an approved depository. This ensures proper record-keeping, prevents premature distributions, and maintains the tax-advantaged status of your retirement account. Home storage would be considered a distribution and trigger taxes and penalties.",
  },
  {
    question: "What's the difference between coins and bars?",
    answer:
      "Government-minted coins (Eagles, Maple Leafs) carry higher premiums but are highly recognizable and liquid. Silver bars typically have lower premiums over spot price, making them more cost-efficient for larger investments. Both are equally IRA-approved if they meet purity requirements.",
  },
  {
    question: "Are collectible silver coins IRA-approved?",
    answer:
      "No. Collectible, numismatic, or proof coins are NOT IRA-approved, even if made of pure silver. The IRS specifically excludes coins valued primarily for rarity or condition. Stick to bullion coins like American Eagles (not proof versions) and standard bars.",
  },
  {
    question: "Can I buy junk silver (90% constitutional coins) for my IRA?",
    answer:
      "No. Pre-1965 US coins (commonly called 'junk silver') are 90% silver and don't meet the .999 purity requirement. While these are popular for personal collections, they cannot be held in an IRA. You need .999+ fine silver bullion products.",
  },
  {
    question: "Which silver products does Augusta offer?",
    answer:
      "Augusta offers a full range of IRS-approved silver products including American Silver Eagles, Canadian Silver Maple Leafs, Austrian Philharmonics, and premium silver bars from refiners like PAMP Suisse and Credit Suisse. Their specialists help you choose based on your budget and goals.",
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

export default function SilverIRAApprovedLandingPage() {
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
        headline="IRA-Approved Silver: What You Can Buy"
        subheadline="Only .999 fine silver qualifies. Here's the complete list of approved coins and bars."
        ctaText="Get Your Free Consultation"
        linkContext="silver"
        trackSource={TRACK_SOURCE}
        urgencyBadge="IRS Requirements 2026"
      />

      {/* Trust Bar */}
      <LPTrustBar rating={4.9} reviewCount={2847} bbbRating="A+" />

      {/* Approved Products Showcase */}
      <LPApprovedProducts />

      {/* How to Get Started */}
      <LPProcess
        headline="Start Your Silver IRA"
        steps={processSteps}
        ctaText="See Augusta's Silver Selection"
        linkContext="silver"
        trackSource={TRACK_SOURCE}
      />

      {/* FAQ Section */}
      <LPFAQ headline="Silver Product Questions" faqs={faqs} />

      {/* Final CTA */}
      <LPFinalCTA
        headline="Ready to Invest in IRA-Approved Silver?"
        subheadline="Expert guidance on which silver fits your goals"
        ctaText="Get Your Free Consultation"
        trustPoints={["IRS-approved products", "Expert guidance", "Secure storage"]}
        linkContext="silver"
        trackSource={TRACK_SOURCE}
      />

      {/* Minimal Footer */}
      <LPFooter />
    </div>
  );
}
