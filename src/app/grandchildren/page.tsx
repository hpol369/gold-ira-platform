// src/app/grandchildren/page.tsx
// P2-005: Grandchildren Legacy Hub Page

import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { getAllGrandchildrenArticles } from "@/data/grandchildren";
import { Gift, ArrowRight, GraduationCap, Briefcase, Heart, BookOpen, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "Grandchildren Legacy Hub | Gift, Save & Invest for Grandkids",
  description:
    "Smart ways to gift money, set up trusts, and invest for your grandchildren's future. 529 plans, trust funds, and tax-efficient wealth transfer strategies.",
  keywords: [
    "grandchildren legacy",
    "529 plan grandparents",
    "trust fund for grandchildren",
    "gift money grandchildren",
    "save for grandchildren",
  ],
};

export default function GrandchildrenPage() {
  const articles = getAllGrandchildrenArticles();

  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/30 via-slate-900 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.15),transparent_50%)]" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-green-400 text-sm font-medium mb-4">
              <Gift className="h-4 w-4" />
              GENERATIONAL WEALTH
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Grandchildren{" "}
              <span className="text-green-400">Legacy Hub</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Building wealth for the next generation is one of the greatest gifts
              you can give. Learn smart ways to gift, save, and invest for your
              grandchildren&apos;s future.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="lg" asChild>
                <Link href="/quiz">
                  Plan Your Legacy <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-white/20 text-white hover:bg-white/10"
              >
                <a href="#guides">View Guides</a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Key Stats */}
      <section className="py-8 border-y border-white/10 bg-slate-800/30">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-400">$18K</div>
              <div className="text-sm text-slate-400">Annual Gift Exclusion</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400">$90K</div>
              <div className="text-sm text-slate-400">5-Year Superfunding</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400">Tax-Free</div>
              <div className="text-sm text-slate-400">529 Growth</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400">∞</div>
              <div className="text-sm text-slate-400">Direct Tuition Gifts</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Strategies Overview */}
      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-serif font-bold text-white mb-8 text-center">
            Ways to Build Grandchildren&apos;s Wealth
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="bg-green-500/20 p-3 rounded-lg inline-block mb-4">
                <GraduationCap className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="font-bold text-white mb-2">529 Education Plans</h3>
              <p className="text-slate-400 text-sm">
                Tax-free growth for education. Superfund up to $90K at once.
                New FAFSA rules make grandparent 529s more attractive than ever.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="bg-blue-500/20 p-3 rounded-lg inline-block mb-4">
                <Briefcase className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="font-bold text-white mb-2">Trust Funds</h3>
              <p className="text-slate-400 text-sm">
                Control when and how grandchildren receive money. Protect from
                creditors, divorce, and poor decisions with proper trust structure.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="bg-amber-500/20 p-3 rounded-lg inline-block mb-4">
                <DollarSign className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="font-bold text-white mb-2">Direct Gifts</h3>
              <p className="text-slate-400 text-sm">
                Annual gifts up to $18K per grandchild tax-free. Pay tuition
                directly to schools with no limit. Start building wealth now.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Guides */}
      <section id="guides" className="py-16 bg-slate-800/30 scroll-mt-16">
        <Container>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-serif font-bold text-white flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-green-400" />
              Legacy Planning Guides
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/grandchildren/${article.slug}`}
                className="bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-green-500/30 rounded-xl p-6 transition-all group"
              >
                <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors mb-2 leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-slate-400 line-clamp-2">
                  {article.subtitle}
                </p>
                {article.volume && (
                  <div className="mt-4 text-xs text-slate-500">
                    {article.volume.toLocaleString()} monthly searches
                  </div>
                )}
                <div className="mt-4 flex items-center text-green-400 text-sm font-medium">
                  Read Guide <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <Heart className="h-12 w-12 text-green-400 mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
              More Than Money
            </h2>
            <p className="text-slate-400 mb-8">
              The greatest legacy isn&apos;t just financial—it&apos;s the values,
              wisdom, and love you pass on. These guides help you build both
              financial wealth and family connections across generations.
            </p>
            <Button variant="gold" size="xl" asChild>
              <Link href="/quiz">
                Start Planning Today <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Augusta CTA */}
      <section className="py-16 bg-slate-800/50 border-t border-white/10">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Build Generational Wealth with Gold"
            subheadline="Physical gold has preserved wealth across generations for thousands of years. Learn how a Gold IRA can be part of your grandchildren's legacy."
            trackSource="grandchildren-hub"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
