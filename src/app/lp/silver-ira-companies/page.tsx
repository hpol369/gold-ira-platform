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
import { LPComparisonTable } from "@/components/lp/LPComparisonTable";

// noindex for paid landing pages - don't compete with SEO pages
export const metadata: Metadata = {
  title: "Best Silver IRA Companies 2026 | Compare Top Providers",
  description:
    "Compare the best silver IRA companies rated by fees, minimums, and customer reviews. See our #1 pick for education-first silver investing.",
  robots: {
    index: false,
    follow: false,
  },
};

// Track source for all CTAs on this page
const TRACK_SOURCE = "lp-silver-ira-companies";

// 3-step process
const processSteps: Step[] = [
  {
    icon: "phone",
    title: "Free Consultation",
    description:
      "Speak with Augusta's silver specialists. No pressure, just education about your options.",
  },
  {
    icon: "file-text",
    title: "Compare & Choose",
    description:
      "Review transparent pricing, fee structures, and silver product options side-by-side.",
  },
  {
    icon: "check-circle",
    title: "Start Your Silver IRA",
    description:
      "Augusta handles all paperwork for rollovers and account setup. Simple and stress-free.",
  },
];

// FAQ content specific to company comparison
const faqs: FAQItem[] = [
  {
    question: "How did you rank the silver IRA companies?",
    answer:
      "We evaluated 15+ companies based on: customer reviews and ratings, BBB complaints, fee transparency, minimum investment requirements, silver product selection, and quality of customer education. Augusta ranked #1 due to zero BBB complaints, highest customer satisfaction scores, and education-first approach.",
  },
  {
    question: "What makes Augusta different from other silver IRA companies?",
    answer:
      "Augusta is the only major silver IRA company with zero BBB complaints in company history. They focus on education first - you'll never experience high-pressure sales tactics. They also offer lifetime customer support and transparent pricing with no hidden markups on silver.",
  },
  {
    question: "What are typical silver IRA fees?",
    answer:
      "Most silver IRA companies charge $150-$300 per year for storage and custodian fees. Augusta charges a flat $180/year which includes both storage and custodian fees. Some companies have hidden markups on silver prices - Augusta is transparent about their premiums.",
  },
  {
    question: "What's the minimum to open a silver IRA?",
    answer:
      "Minimums vary by company: Noble Gold ($2K), Birch Gold ($10K), Goldco ($25K), Augusta ($50K). While Augusta has a higher minimum, it's designed for serious retirement investors and comes with premium education and support.",
  },
  {
    question: "Can I transfer my existing IRA to silver?",
    answer:
      "Yes! You can do a direct rollover from any existing IRA, 401(k), 403(b), TSP, or other qualified retirement account to a silver IRA. The transfer is tax-free when done as a direct rollover. Augusta handles all the paperwork.",
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

export default function SilverIRACompaniesLandingPage() {
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
        headline="Best Silver IRA Companies Ranked (2026)"
        subheadline="We analyzed 15+ providers. Here's our #1 pick for education-first silver investing."
        ctaText="See Our #1 Pick"
        linkContext="silver"
        trackSource={TRACK_SOURCE}
        urgencyBadge="Updated January 2026"
      />

      {/* Trust Bar */}
      <LPTrustBar rating={4.9} reviewCount={2847} bbbRating="A+" />

      {/* Why Silver? Brief Intro */}
      <section className="bg-slate-900 py-10 md:py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
            <span className="text-white font-semibold">With 50%+ going to industry, silver isn&apos;t just precious &mdash; it&apos;s essential.</span>
            {" "}Solar panels, electric cars, smartphones, and medical devices all rely on silver.
            Choose the right company to help you add this critical metal to your retirement.
          </p>
        </div>
      </section>

      {/* Company Comparison Table */}
      <LPComparisonTable headline="Quick Company Comparison" />

      {/* How to Get Started */}
      <LPProcess
        headline="How to Get Started with #1 Pick"
        steps={processSteps}
        ctaText="Get Free Consultation with Augusta"
        linkContext="silver"
        trackSource={TRACK_SOURCE}
      />

      {/* FAQ Section */}
      <LPFAQ headline="Company Comparison Questions" faqs={faqs} />

      {/* Final CTA */}
      <LPFinalCTA
        headline="Ready to Work with the #1 Silver IRA Company?"
        subheadline="Speak with Augusta's silver specialists today"
        ctaText="Get Your Free Consultation"
        trustPoints={["No obligation", "Education-first", "Zero BBB complaints"]}
        linkContext="silver"
        trackSource={TRACK_SOURCE}
      />

      {/* Minimal Footer */}
      <LPFooter />
    </div>
  );
}
