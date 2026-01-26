// src/app/widow-guide/page.tsx
// P2-001: Widow's Guide Hub Page
// Emotional, supportive hub page for widow financial content

import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { getAllWidowGuideArticles } from "@/data/widow-guide";
import { Heart, ArrowRight, Phone, BookOpen, Clock, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Widow's Financial Guide | Navigating Finances After Loss",
  description:
    "Compassionate guidance for managing finances after losing a spouse. Survivor benefits, estate planning, insurance, and protecting your financial future.",
  keywords: [
    "widow financial guide",
    "what to do when spouse dies",
    "social security survivor benefits",
    "widow finances",
    "after spouse dies",
  ],
};

export default function WidowGuidePage() {
  const articles = getAllWidowGuideArticles();

  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar />

      {/* Hero Section - Emotional, Supportive */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-slate-900 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.15),transparent_50%)]" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-purple-400 text-sm font-medium mb-4">
              <Heart className="h-4 w-4" />
              COMPASSIONATE GUIDANCE
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Widow&apos;s Financial{" "}
              <span className="text-purple-400">Guide</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              We understand this is an incredibly difficult time. These resources
              are here to help you navigate the financial aspects of loss at your
              own pace.
            </p>

            {/* Emotional Support Note */}
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6 mb-8 text-left">
              <p className="text-purple-200 text-sm">
                <strong className="text-purple-300">A gentle reminder:</strong>{" "}
                There&apos;s no timeline for grief. These guides are meant to help when
                you&apos;re ready. Ask trusted family members or friends to help with
                tasks that feel overwhelming. You don&apos;t have to do this alone.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="lg" asChild>
                <Link href="/quiz">
                  Get Personalized Help <ArrowRight className="ml-2 h-4 w-4" />
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

      {/* Quick Stats */}
      <section className="py-8 border-y border-white/10 bg-slate-800/30">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-400">{articles.length}</div>
              <div className="text-sm text-slate-400">Helpful Guides</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400">24/7</div>
              <div className="text-sm text-slate-400">Available Resources</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400">Free</div>
              <div className="text-sm text-slate-400">Always No Cost</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400">SSA</div>
              <div className="text-sm text-slate-400">1-800-772-1213</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Key Resources */}
      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-serif font-bold text-white mb-8 text-center">
            Key Resources & Contacts
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="bg-blue-500/20 p-3 rounded-lg inline-block mb-4">
                <Phone className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="font-bold text-white mb-2">Social Security</h3>
              <p className="text-slate-400 text-sm mb-3">
                Report death and claim survivor benefits
              </p>
              <p className="text-lg font-semibold text-blue-400">1-800-772-1213</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="bg-green-500/20 p-3 rounded-lg inline-block mb-4">
                <Shield className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="font-bold text-white mb-2">VA Benefits</h3>
              <p className="text-slate-400 text-sm mb-3">
                Survivor benefits for veterans&apos; spouses
              </p>
              <p className="text-lg font-semibold text-green-400">1-800-827-1000</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="bg-amber-500/20 p-3 rounded-lg inline-block mb-4">
                <Clock className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="font-bold text-white mb-2">Medicare</h3>
              <p className="text-slate-400 text-sm mb-3">
                Health insurance questions and options
              </p>
              <p className="text-lg font-semibold text-amber-400">1-800-633-4227</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Guides */}
      <section id="guides" className="py-16 bg-slate-800/30 scroll-mt-16">
        <Container>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-serif font-bold text-white flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-purple-400" />
              Financial Guides
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/widow-guide/${article.slug}`}
                className="bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-purple-500/30 rounded-xl p-6 transition-all group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`px-2 py-0.5 rounded text-xs font-medium ${
                      article.articleType === "checklist"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-blue-500/20 text-blue-400"
                    }`}
                  >
                    {article.articleType === "checklist" ? "Checklist" : "Guide"}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors mb-2 leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-slate-400 line-clamp-2">
                  {article.subtitle}
                </p>
                <div className="mt-4 flex items-center text-purple-400 text-sm font-medium">
                  Read Guide <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Support Message */}
      <section className="py-16">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <Heart className="h-12 w-12 text-purple-400 mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
              You&apos;re Not Alone
            </h2>
            <p className="text-slate-400 mb-8">
              Millions of people navigate these challenges every year. Taking things
              one step at a time is not just okay—it&apos;s wise. When you&apos;re ready,
              professional guidance can help protect your financial future.
            </p>
            <Button variant="gold" size="xl" asChild>
              <Link href="/quiz">
                Get Personalized Guidance <ArrowRight className="ml-2 h-5 w-5" />
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
            headline="Protect Your Financial Future"
            subheadline="Augusta Precious Metals provides compassionate guidance for protecting your retirement savings. No pressure, just helpful information when you're ready."
            trackSource="widow-guide-hub"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
