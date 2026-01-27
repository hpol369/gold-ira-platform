// src/app/silver-retirement/page.tsx
// Silver Retirement Content Hub - Main landing page

import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import {
  Coins,
  ArrowRight,
  Shield,
  TrendingUp,
  Gift,
  FileText,
  Scale,
  Users,
  BarChart3,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Silver Retirement Guide | Silver IRA Investment for Retirees (2026)",
  description:
    "Complete guide to silver as a retirement investment. Learn about IRA-approved silver bars and coins, transfer options, RMD rules, and silver inheritance planning for retirees.",
  keywords: [
    "silver retirement",
    "silver IRA",
    "silver for retirees",
    "transfer ira to silver",
    "ira approved silver",
    "silver inheritance",
  ],
  openGraph: {
    title: "Silver Retirement Guide | Silver IRA Investment for Retirees",
    description: "Complete guide to silver as a retirement investment for retirees.",
    url: "https://www.richdadretirement.com/silver-retirement",
    type: "website",
  },
};

const hubPages = [
  {
    title: "Transfer IRA to Silver",
    description: "Step-by-step guide to transferring your existing IRA or 401(k) to silver. Learn about tax implications and rollover rules.",
    href: "/silver-retirement/transfer-ira-to-silver",
    icon: ArrowRight,
    color: "amber",
    cpc: "$15.00",
    volume: "100/mo",
    featured: true,
  },
  {
    title: "IRA-Approved Silver Bars",
    description: "Complete list of IRS-approved silver bars for your retirement account. Purity requirements, top brands, and pricing.",
    href: "/silver-retirement/ira-approved-bars",
    icon: BarChart3,
    color: "blue",
    cpc: "$7.00",
    volume: "30/mo",
  },
  {
    title: "IRA-Approved Silver Coins",
    description: "Which silver coins can go in your IRA? American Eagles, Maple Leafs, and what's NOT allowed.",
    href: "/silver-retirement/ira-approved-coins",
    icon: Coins,
    color: "green",
    cpc: "$4.00",
    volume: "20/mo",
  },
  {
    title: "How Much Silver Should Retirees Own?",
    description: "Portfolio allocation guidelines for silver. Age-based strategies and diversification recommendations.",
    href: "/silver-retirement/how-much-silver",
    icon: Scale,
    color: "purple",
  },
  {
    title: "Silver vs Bonds for Retirees",
    description: "Compare silver to bonds for retirement income. Inflation protection, risk profiles, and income generation.",
    href: "/silver-retirement/silver-vs-bonds",
    icon: TrendingUp,
    color: "teal",
  },
  {
    title: "Silver for Grandchildren",
    description: "Gift silver to grandchildren tax-efficiently. Educational value, trust strategies, and long-term wealth building.",
    href: "/silver-retirement/silver-for-grandchildren",
    icon: Gift,
    color: "pink",
  },
  {
    title: "Silver Inheritance Planning",
    description: "Estate planning with silver. Step-up basis rules, trust considerations, and leaving silver to your heirs.",
    href: "/silver-retirement/inheritance-planning",
    icon: FileText,
    color: "orange",
  },
  {
    title: "Silver IRA RMD Rules",
    description: "Required Minimum Distribution rules for Silver IRAs. In-kind distributions, tax implications, and strategies.",
    href: "/silver-retirement/rmd-rules",
    icon: AlertTriangle,
    color: "red",
  },
];

const whySilver = [
  {
    title: "Affordable Entry Point",
    description: "Silver trades at a fraction of gold's price, allowing retirees to acquire more physical metal for their investment.",
    icon: Coins,
  },
  {
    title: "Industrial Demand",
    description: "Unlike gold, silver has massive industrial applications in solar panels, electronics, and medical devices driving demand.",
    icon: TrendingUp,
  },
  {
    title: "Inflation Hedge",
    description: "Physical silver has historically maintained purchasing power during inflationary periods when paper assets lose value.",
    icon: Shield,
  },
  {
    title: "Portfolio Diversification",
    description: "Silver often moves independently of stocks and bonds, providing true diversification for retirement portfolios.",
    icon: BarChart3,
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "name": "Silver Retirement Guide",
      "description": "Complete guide to silver as a retirement investment for retirees.",
      "url": "https://www.richdadretirement.com/silver-retirement",
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is silver a good investment for retirement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Silver can be an excellent addition to a retirement portfolio. It offers inflation protection, portfolio diversification, and has both investment and industrial demand drivers. Most financial advisors recommend allocating 5-15% of retirement assets to precious metals, with silver being more affordable than gold for building positions.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I hold silver in my IRA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, you can hold physical silver in a self-directed IRA (Silver IRA). The IRS requires silver to be 99.9% pure (.999 fineness) and stored at an approved depository. You can transfer existing IRA or 401(k) funds to silver without tax penalties through a direct trustee-to-trustee transfer.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best silver to buy for an IRA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The best IRA-approved silver includes American Silver Eagle coins, Canadian Silver Maple Leafs, and silver bars from COMEX-approved refiners like PAMP Suisse, Royal Canadian Mint, and Johnson Matthey. All must meet the 99.9% purity requirement.",
          },
        },
        {
          "@type": "Question",
          "name": "How much silver should a retiree own?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most financial advisors suggest retirees allocate 5-15% of their portfolio to precious metals, with the exact amount depending on risk tolerance and proximity to retirement. Silver can be part of this allocation alongside gold. Conservative retirees might lean toward 5-10%, while those with longer time horizons might go up to 15%.",
          },
        },
      ],
    },
  ],
};

export default function SilverRetirementPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <SchemaScript schema={schema} />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800/50 via-slate-900 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(148,163,184,0.15),transparent_50%)]" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-slate-300 text-sm font-medium mb-4 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <Coins className="h-4 w-4" />
              SILVER RETIREMENT GUIDE
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Silver for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-white">
                Retirement
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              The complete guide to silver as a retirement investment. Learn how to
              protect your wealth, transfer your IRA to silver, and build a legacy
              for your family.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="lg" asChild>
                <Link href="/silver-retirement/transfer-ira-to-silver">
                  Transfer IRA to Silver <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-white/20 text-white hover:bg-white/10"
              >
                <a href="#guides">View All Guides</a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Silver for Retirement */}
      <section className="py-16 border-y border-white/10 bg-slate-800/30">
        <Container>
          <h2 className="text-2xl font-serif font-bold text-white text-center mb-4">
            Why Retirees Are Choosing Silver
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
            Physical silver offers unique advantages for retirement portfolios that
            paper assets simply cannot match.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whySilver.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
                >
                  <div className="bg-slate-700/50 p-3 rounded-lg inline-block mb-4">
                    <Icon className="h-6 w-6 text-slate-300" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Rich Dad Quote */}
      <section className="py-12 bg-gradient-to-r from-amber-900/20 via-slate-900 to-amber-900/20">
        <Container>
          <blockquote className="max-w-3xl mx-auto text-center">
            <p className="text-2xl md:text-3xl font-serif italic text-white mb-4">
              "Savers are losers. The system is designed to steal your wealth through
              inflation. Physical silver protects what you've worked a lifetime to build."
            </p>
            <footer className="text-amber-400 font-semibold">
              - Robert Kiyosaki, Rich Dad Philosophy
            </footer>
          </blockquote>
        </Container>
      </section>

      {/* Guides Grid */}
      <section id="guides" className="py-16 scroll-mt-16">
        <Container>
          <h2 className="text-2xl font-serif font-bold text-white text-center mb-4">
            Silver Retirement Guides
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
            Everything you need to know about silver for retirement, from IRA transfers
            to inheritance planning.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hubPages.map((page, index) => {
              const Icon = page.icon;
              const colorClasses: Record<string, string> = {
                amber: "bg-amber-500/20 text-amber-400 border-amber-500/30",
                blue: "bg-blue-500/20 text-blue-400 border-blue-500/30",
                green: "bg-green-500/20 text-green-400 border-green-500/30",
                purple: "bg-purple-500/20 text-purple-400 border-purple-500/30",
                teal: "bg-teal-500/20 text-teal-400 border-teal-500/30",
                pink: "bg-pink-500/20 text-pink-400 border-pink-500/30",
                orange: "bg-orange-500/20 text-orange-400 border-orange-500/30",
                red: "bg-red-500/20 text-red-400 border-red-500/30",
              };
              const iconColor = colorClasses[page.color] || colorClasses.amber;

              return (
                <Link
                  key={index}
                  href={page.href}
                  className={`bg-white/5 hover:bg-white/10 backdrop-blur-sm border rounded-xl p-6 transition-all group ${
                    page.featured
                      ? "border-amber-500/30 ring-1 ring-amber-500/20 md:col-span-2 lg:col-span-1"
                      : "border-white/10 hover:border-slate-500/30"
                  }`}
                >
                  {page.featured && (
                    <div className="inline-flex items-center gap-1 text-amber-400 text-xs font-bold mb-3 bg-amber-500/20 px-2 py-1 rounded">
                      HIGH VALUE KEYWORD
                    </div>
                  )}
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${iconColor.split(" ").slice(0, 2).join(" ")}`}>
                      <Icon className={`h-5 w-5 ${iconColor.split(" ")[2]}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                        {page.title}
                      </h3>
                      <p className="text-sm text-slate-400 line-clamp-2">
                        {page.description}
                      </p>
                      {(page.cpc || page.volume) && (
                        <div className="flex gap-3 mt-3 text-xs text-slate-500">
                          {page.cpc && <span>CPC: {page.cpc}</span>}
                          {page.volume && <span>Vol: {page.volume}</span>}
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 bg-slate-800/30 border-y border-white/10">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-white text-center mb-12">
              Silver IRA Benefits for Retirees
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Tax-Advantaged Growth</h4>
                    <p className="text-sm text-slate-400">
                      Silver in an IRA grows tax-deferred (Traditional) or tax-free (Roth).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Protection from Counterparty Risk</h4>
                    <p className="text-sm text-slate-400">
                      Physical silver has no counterparty risk unlike stocks, bonds, or ETFs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Easy Rollover Process</h4>
                    <p className="text-sm text-slate-400">
                      Transfer existing IRA/401(k) funds to silver without tax penalties.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Tangible Asset</h4>
                    <p className="text-sm text-slate-400">
                      Own real, physical silver stored securely in your name.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Legacy Planning</h4>
                    <p className="text-sm text-slate-400">
                      Pass physical silver to heirs with step-up in cost basis.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Industrial Demand Upside</h4>
                    <p className="text-sm text-slate-400">
                      Silver's use in solar and electronics creates investment upside.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-serif font-bold text-white text-center mb-8">
            Silver Retirement FAQs
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {(schema["@graph"][1] as { mainEntity: Array<{ name: string; acceptedAnswer: { text: string } }> }).mainEntity.map((faq, index) => (
              <details
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-white font-semibold list-none">
                  {faq.name}
                  <span className="text-amber-400 group-open:rotate-180 transition-transform">
                    &#9660;
                  </span>
                </summary>
                <p className="mt-4 text-slate-400">{faq.acceptedAnswer.text}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* Augusta CTA */}
      <section className="py-16 bg-slate-800/50 border-t border-white/10">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Ready to Add Silver to Your Retirement?"
            subheadline="Augusta Precious Metals offers both gold and silver IRAs with transparent pricing and lifetime customer support. Get a free consultation to learn how silver can protect your retirement."
            trackSource="silver-retirement-hub"
            linkContext="silver"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
