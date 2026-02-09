// src/app/silver-retirement/silver-for-grandchildren/page.tsx
// Keywords: silver for grandchildren, buying silver for grandkids, silver as gift

import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import LeadCaptureButton from "@/components/lp/LeadCaptureButton";
import {
  ArrowRight,
  Gift,
  Heart,
  GraduationCap,
  Coins,
  Shield,
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Silver for Grandchildren | Gift Silver to Grandkids Tax-Free (2026)",
  description:
    "Learn how to gift silver to grandchildren. Tax-efficient strategies, educational value, trust options, and the best silver coins for grandkids. Build generational wealth with physical silver.",
  keywords: [
    "silver for grandchildren",
    "buying silver for grandkids",
    "silver as gift for grandchildren",
    "silver coins for grandchildren",
    "gift silver to grandkids",
  ],
  openGraph: {
    title: "Silver for Grandchildren | Gift Guide",
    description: "How to gift silver to grandchildren tax-efficiently.",
    url: "https://www.richdadretirement.com/silver-retirement/silver-for-grandchildren",
    type: "article",
  },
};

const giftStrategies = [
  {
    title: "Annual Gift Exclusion",
    limit: "$18,000 per year",
    description:
      "Gift up to $18,000 per grandchild annually without any gift tax or reporting. Married couples can gift $36,000 together. Silver coins or bars count toward this limit at fair market value.",
    icon: Gift,
    color: "green",
  },
  {
    title: "Direct Purchase for Them",
    limit: "No limit",
    description:
      "Buy silver coins in their name or for a UTMA/UGMA custodial account. The child gains full ownership at age 18-21 depending on state. No immediate tax consequences to you.",
    icon: Users,
    color: "blue",
  },
  {
    title: "Silver Trust",
    limit: "Varies",
    description:
      "Establish a trust that holds silver for grandchildren. You control distribution terms (age 25, college, etc.). Protects silver from their creditors and poor decisions until maturity.",
    icon: Shield,
    color: "purple",
  },
  {
    title: "Education-Focused Gift",
    limit: "Market value",
    description:
      "Gift silver with a 'matching' promise: for every coin they learn about, you add another. Teaches financial literacy while building their holdings.",
    icon: BookOpen,
    color: "amber",
  },
];

const bestSilverForKids = [
  {
    product: "American Silver Eagles",
    why: "Most recognized coin, holds value well, patriotic design appeals to kids",
    price: "~$35-40 each",
    recommended: true,
  },
  {
    product: "Canadian Silver Maple Leafs",
    why: "Beautiful design, slightly lower premium than Eagles, high purity",
    price: "~$30-35 each",
    recommended: true,
  },
  {
    product: "Silver Wildlife Coins",
    why: "Fun animal designs engage children, from various mints (Perth, RCM)",
    price: "~$30-45 each",
    recommended: true,
  },
  {
    product: "1 oz Silver Rounds",
    why: "Lowest premium option, good for building larger positions affordably",
    price: "~$28-32 each",
    recommended: false,
  },
  {
    product: "Birth Year Silver Coins",
    why: "Personal touch - Eagle or Maple from their birth year",
    price: "~$35-50 each",
    recommended: true,
  },
  {
    product: "Silver Proof Sets",
    why: "Beautiful presentation, higher collector value, special occasions",
    price: "~$50-100 per set",
    recommended: false,
  },
];

const educationalValue = [
  {
    lesson: "Real Money vs Paper",
    description:
      "Holding a silver coin teaches the difference between fiat currency and real money. One Eagle has been worth ~$1 to ~$50 - the paper dollar's value keeps changing, not the silver's.",
  },
  {
    lesson: "Delayed Gratification",
    description:
      "Unlike spending money instantly, watching a silver collection grow teaches patience and long-term thinking - crucial financial skills.",
  },
  {
    lesson: "History & Economics",
    description:
      "Silver coins from different countries spark conversations about history, trade, and how civilizations have valued precious metals for 5,000+ years.",
  },
  {
    lesson: "Supply & Demand",
    description:
      "As they follow silver prices, grandchildren learn about markets, industrial demand, and how scarcity affects value.",
  },
];

const taxConsiderations = [
  {
    topic: "Annual Gift Exclusion",
    details:
      "You can gift $18,000 per grandchild per year (2026) without filing a gift tax return. Married couples can gift $36,000. Silver at fair market value counts toward this limit.",
  },
  {
    topic: "Gift Tax Reporting",
    details:
      "Gifts over $18,000 require IRS Form 709 but don't necessarily mean you owe tax - they count against your lifetime exemption ($13.61 million in 2026).",
  },
  {
    topic: "Cost Basis Transfer",
    details:
      "When you gift silver, the recipient inherits your cost basis. If you bought Eagles at $20 and gift them at $35, they use $20 as basis for capital gains if they sell.",
  },
  {
    topic: "UTMA/UGMA Accounts",
    details:
      "Gifts to custodial accounts are irrevocable and become the child's property at majority. First $1,250 of unearned income is tax-free, next $1,250 taxed at child's rate.",
  },
  {
    topic: "Trust Tax Treatment",
    details:
      "Trusts holding silver may face compressed tax brackets. Consult an estate attorney for complex situations involving substantial gifts.",
  },
];

const faqs = [
  {
    question: "What's the best age to start gifting silver to grandchildren?",
    answer:
      "You can start at birth! Many grandparents buy a silver coin for each birthday and Christmas, building a collection over time. By age 18, a grandchild could have 36+ ounces of silver. For educational engagement, ages 8-12 are ideal for teaching them about their collection.",
  },
  {
    question: "Should I gift physical silver or a Silver IRA?",
    answer:
      "For grandchildren, physical silver is better than an IRA. Children cannot open IRAs (no earned income), and the tactile experience of holding coins is more educational. Consider gifting physical silver now, with instructions to transfer it to their own IRA when they're working adults.",
  },
  {
    question: "How do I store silver I'm gifting to grandchildren?",
    answer:
      "Options include: 1) Keep it yourself until they're mature enough (note in writing it's theirs), 2) Use a custodial account (UTMA/UGMA) at a bank or dealer, 3) Home safe with insurance, 4) Safety deposit box in their parent's name. Avoid keeping it at the child's home.",
  },
  {
    question: "Can I gift silver from my IRA to grandchildren?",
    answer:
      "Not directly. Removing silver from an IRA is a taxable distribution. You'd need to take a distribution (pay taxes), then gift the silver. For significant amounts, this could be costly. Consider gifting from non-IRA holdings or cash to buy silver in their name.",
  },
  {
    question: "Is gifting silver better than a 529 plan?",
    answer:
      "They serve different purposes. 529 plans are strictly for education with tax-free growth but limited flexibility. Silver can be used for anything - education, first car, emergency fund, or held forever. Many grandparents do both: 529 for education, silver for general wealth building.",
  },
  {
    question: "What happens to gifted silver when I pass away?",
    answer:
      "If you've already gifted the silver (it's in their possession or a custodial account), it's not part of your estate. If you're holding it 'for them' without formal transfer, it may be in your estate. Proper documentation is crucial - consult an estate attorney.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Silver for Grandchildren: Gift Guide",
      "description": "How to gift silver to grandchildren tax-efficiently.",
      "author": {
        "@type": "Organization",
        "name": "Rich Dad Retirement",
      },
      "publisher": {
        "@type": "Organization",
        "name": "Rich Dad Retirement",
      },
      "datePublished": "2026-01-15",
      "dateModified": "2026-01-27",
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
        },
      })),
    },
  ],
};

export default function SilverForGrandchildrenPage() {
  return (
    <main className="min-h-screen bg-white">
      <SchemaScript schema={schema} />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(236,72,153,0.15),transparent_50%)]" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Link
              href="/silver-retirement"
              className="inline-flex items-center gap-2 text-slate-600 text-sm hover:text-slate-900 transition-colors mb-6"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              Back to Silver Retirement Hub
            </Link>
            <div className="inline-flex items-center gap-2 text-pink-400 text-sm font-medium mb-4 bg-pink-500/20 px-4 py-2 rounded-full border border-pink-500/30">
              <Gift className="h-4 w-4" />
              GENERATIONAL WEALTH
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#000080] mb-6">
              Silver for{" "}
              <span className="text-pink-400">Grandchildren</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Gift silver to your grandchildren and teach them about real money.
              Tax-efficient strategies, educational value, and building
              generational wealth.
            </p>

            <LeadCaptureButton
              variant="silver"
              source="silver-retirement-grandchildren-hero"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-[#B22234] hover:bg-[#8b1c2a] text-white h-11 px-8"
            >
              Explore Silver Gifts <ArrowRight className="ml-2 h-4 w-4" />
            </LeadCaptureButton>
          </div>
        </Container>
      </section>

      {/* Emotional Value */}
      <section className="py-12 bg-slate-100 border-y border-slate-200">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="h-12 w-12 text-pink-400 mx-auto mb-4" />
            <h2 className="text-2xl font-serif font-bold text-[#000080] mb-4">
              More Than Just an Investment
            </h2>
            <p className="text-slate-600">
              When you gift silver to grandchildren, you're giving more than metal.
              You're teaching financial wisdom, creating memories, and leaving a
              tangible legacy they can hold in their hands long after you're gone.
            </p>
          </div>
        </Container>
      </section>

      {/* Gift Strategies */}
      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-serif font-bold text-[#000080] text-center mb-4">
            Ways to Gift Silver to Grandchildren
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Different strategies for different goals - from simple birthday gifts
            to structured trusts.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {giftStrategies.map((strategy, index) => {
              const Icon = strategy.icon;
              const colorClasses: Record<string, string> = {
                green: "bg-green-500/20 text-green-400",
                blue: "bg-blue-500/20 text-blue-400",
                purple: "bg-purple-500/20 text-purple-400",
                amber: "bg-[#B22234]/20 text-[#B22234]",
              };

              return (
                <div
                  key={index}
                  className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${colorClasses[strategy.color]}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-slate-900">{strategy.title}</h3>
                        <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                          {strategy.limit}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600">{strategy.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Best Silver for Kids */}
      <section className="py-16 bg-slate-100">
        <Container>
          <h2 className="text-2xl font-serif font-bold text-[#000080] text-center mb-4">
            Best Silver Coins for Grandchildren
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-8">
            Not all silver is created equal for gifts. Here are our top picks for
            grandchildren.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {bestSilverForKids.map((item, index) => (
              <div
                key={index}
                className={`bg-slate-50 border rounded-xl p-4 ${
                  item.recommended
                    ? "border-pink-500/30"
                    : "border-slate-200"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-slate-900">{item.product}</h3>
                  {item.recommended && (
                    <span className="text-xs text-pink-400 bg-pink-500/20 px-2 py-0.5 rounded">
                      TOP PICK
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate-600 mb-2">{item.why}</p>
                <p className="text-sm text-slate-600">{item.price}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Educational Value */}
      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-serif font-bold text-[#000080] text-center mb-4">
            <GraduationCap className="h-8 w-8 text-pink-400 inline-block mr-3" />
            Educational Value of Silver Gifts
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Silver isn't just a financial gift - it's a teaching tool that opens
            doors to important life lessons.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {educationalValue.map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 border border-slate-200 rounded-xl p-6"
              >
                <h3 className="font-bold text-slate-900 mb-2">{item.lesson}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Mid-Page CTA */}
      <section className="py-12 bg-gradient-to-r from-slate-100 via-[#B22234]/10 to-slate-100 border-y border-slate-200">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to Start Their Collection?
            </h3>
            <p className="text-slate-600 mb-6">
              Augusta Precious Metals can help you select the perfect silver
              coins for your grandchildren. Quality coins, competitive prices,
              and gift packaging available.
            </p>
            <LeadCaptureButton
              variant="silver"
              source="silver-retirement-grandchildren-mid"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-[#B22234] hover:bg-[#8b1c2a] text-white h-11 px-8"
            >
              Shop Silver Coins <ArrowRight className="ml-2 h-4 w-4" />
            </LeadCaptureButton>
          </div>
        </Container>
      </section>

      {/* Tax Considerations */}
      <section className="py-16 bg-slate-100">
        <Container>
          <h2 className="text-2xl font-serif font-bold text-[#000080] text-center mb-8">
            Tax Considerations for Silver Gifts
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {taxConsiderations.map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 border border-slate-200 rounded-xl p-4"
              >
                <h3 className="font-bold text-slate-900 mb-2">{item.topic}</h3>
                <p className="text-sm text-slate-600">{item.details}</p>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto mt-6 bg-[#B22234]/10 border border-[#B22234]/30 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-[#B22234] mt-0.5 flex-shrink-0" />
              <p className="text-sm text-slate-600">
                <strong className="text-slate-900">Note:</strong> Tax rules are complex
                and change frequently. This is general information, not tax advice.
                Consult a tax professional for your specific situation.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Gift Ideas by Occasion */}
      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-serif font-bold text-[#000080] text-center mb-8">
            Silver Gift Ideas by Occasion
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🎂</div>
              <h3 className="font-bold text-slate-900 mb-2">Birthdays</h3>
              <p className="text-sm text-slate-600">
                One American Eagle per year - they'll have 18+ ounces by adulthood
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🎄</div>
              <h3 className="font-bold text-slate-900 mb-2">Christmas</h3>
              <p className="text-sm text-slate-600">
                Silver ornament or holiday-themed coin from Perth or RCM
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🎓</div>
              <h3 className="font-bold text-slate-900 mb-2">Graduation</h3>
              <p className="text-sm text-slate-600">
                Larger gift - 10 oz bar or roll of Eagles to start adult life
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-slate-100 border-y border-slate-200">
        <Container>
          <h2 className="text-2xl font-serif font-bold text-[#000080] text-center mb-8">
            Silver for Grandchildren FAQs
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-slate-900 font-semibold list-none">
                  {faq.question}
                  <span className="text-[#B22234] group-open:rotate-180 transition-transform">
                    &#9660;
                  </span>
                </summary>
                <p className="mt-4 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* Related Pages */}
      <section className="py-12">
        <Container>
          <h2 className="text-xl font-bold text-slate-900 text-center mb-6">
            Related Guides
          </h2>
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Link
              href="/silver-retirement/inheritance-planning"
              className="bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg p-4 transition-colors"
            >
              <h3 className="font-semibold text-slate-900 mb-1">Silver Inheritance Planning</h3>
              <p className="text-sm text-slate-600">Estate planning with silver</p>
            </Link>
            <Link
              href="/silver-retirement/ira-approved-coins"
              className="bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg p-4 transition-colors"
            >
              <h3 className="font-semibold text-slate-900 mb-1">IRA-Approved Silver Coins</h3>
              <p className="text-sm text-slate-600">Best coins for IRAs</p>
            </Link>
            <Link
              href="/grandchildren"
              className="bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg p-4 transition-colors"
            >
              <h3 className="font-semibold text-slate-900 mb-1">Grandchildren Legacy Hub</h3>
              <p className="text-sm text-slate-600">More ways to gift wealth</p>
            </Link>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-16 border-t border-slate-200">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Start Their Silver Collection Today"
            subheadline="Augusta Precious Metals makes it easy to buy silver coins for your grandchildren. Quality coins, competitive pricing, and expert guidance on building generational wealth."
            trackSource="silver-grandchildren-footer"
            linkContext="silver"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
