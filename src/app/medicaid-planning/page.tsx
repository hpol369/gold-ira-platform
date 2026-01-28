// src/app/medicaid-planning/page.tsx
// P2-003: Medicaid Planning Hub Page

import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { getAllMedicaidArticles } from "@/data/medicaid-planning";
import { Shield, ArrowRight, Clock, Home, AlertTriangle, BookOpen, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Medicaid Planning Guide | Protect Assets & Qualify for Care",
  description:
    "Learn how to protect your assets while qualifying for Medicaid long-term care. Irrevocable trusts, lookback periods, estate recovery, and legal strategies.",
  keywords: [
    "medicaid planning",
    "medicaid asset protection",
    "irrevocable trust nursing home",
    "medicaid lookback period",
    "protect assets from nursing home",
  ],
};

export default function MedicaidPlanningPage() {
  const articles = getAllMedicaidArticles();

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08),transparent_50%)]" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-blue-600 text-sm font-medium mb-4">
              <Shield className="h-4 w-4" />
              ASSET PROTECTION
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#000080] mb-6">
              Medicaid Planning{" "}
              <span className="text-blue-600">Guide</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Protect your life savings while ensuring you qualify for the long-term
              care coverage you need. Learn legal strategies used by elder law
              attorneys.
            </p>

            {/* Warning Note */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8 text-left">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-amber-800 font-medium mb-1">
                    The 5-Year Rule Is Critical
                  </p>
                  <p className="text-slate-600 text-sm">
                    Medicaid reviews 5 years of financial history. Planning must begin
                    early - ideally before you need care. Assets transferred within the
                    lookback period trigger penalties.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="lg" asChild className="bg-[#B22234] hover:bg-[#8b1c2a] text-white">
                <Link href="/quiz">
                  Get Expert Guidance <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-slate-300 text-slate-700 hover:bg-slate-100"
              >
                <a href="#guides">View Guides</a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Key Stats */}
      <section className="py-8 border-y border-slate-200 bg-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">5 Years</div>
              <div className="text-sm text-slate-500">Lookback Period</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">$2,000</div>
              <div className="text-sm text-slate-500">Asset Limit (Single)</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">$10K+</div>
              <div className="text-sm text-slate-500">Monthly Care Cost</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">100%</div>
              <div className="text-sm text-slate-500">Legal Strategies</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Key Concepts */}
      <section className="py-16 bg-white">
        <Container>
          <h2 className="text-2xl font-serif font-bold text-[#000080] mb-8 text-center">
            Key Medicaid Planning Concepts
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <div className="bg-amber-100 p-3 rounded-lg inline-block mb-4">
                <Clock className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">5-Year Lookback</h3>
              <p className="text-slate-500 text-sm">
                Medicaid reviews all asset transfers from the past 60 months. Transfers
                during this period create penalty periods.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <div className="bg-blue-100 p-3 rounded-lg inline-block mb-4">
                <Home className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Home Protection</h3>
              <p className="text-slate-500 text-sm">
                Your home is exempt while you live, but may face estate recovery after
                death. Trusts and special deeds can protect it.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <div className="bg-green-100 p-3 rounded-lg inline-block mb-4">
                <Scale className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Legal Strategies</h3>
              <p className="text-slate-500 text-sm">
                Irrevocable trusts, Lady Bird deeds, and spousal protections are legal
                tools to protect assets.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Guides */}
      <section id="guides" className="py-16 bg-slate-50 scroll-mt-16">
        <Container>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-serif font-bold text-[#000080] flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-blue-600" />
              Medicaid Planning Guides
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/medicaid-planning/${article.slug}`}
                className="bg-white hover:bg-slate-50 border border-slate-200 hover:border-blue-300 rounded-xl p-6 transition-all group"
              >
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2 leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-slate-500 line-clamp-2">
                  {article.subtitle}
                </p>
                {article.volume && (
                  <div className="mt-4 text-xs text-slate-400">
                    {article.volume.toLocaleString()} monthly searches
                  </div>
                )}
                <div className="mt-4 flex items-center text-blue-600 text-sm font-medium">
                  Read Guide <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] mb-4">
              Start Planning Now
            </h2>
            <p className="text-slate-500 mb-8">
              The 5-year lookback means the best time to plan was 5 years ago. The
              second best time is today. Don&apos;t wait until you need care to
              protect your assets.
            </p>
            <Button variant="gold" size="xl" asChild className="bg-[#B22234] hover:bg-[#8b1c2a] text-white">
              <Link href="/quiz">
                Get Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Augusta CTA */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Protect Your Retirement Assets"
            subheadline="Physical gold in a Self-Directed IRA can be part of your asset protection strategy. Learn how precious metals fit into estate and Medicaid planning."
            trackSource="medicaid-planning-hub"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
