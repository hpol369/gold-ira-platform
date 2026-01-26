// src/app/senior-protection/page.tsx
// P2-007: Senior Protection Hub Page

import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { getAllSeniorProtectionArticles } from "@/data/senior-protection";
import { ShieldAlert, ArrowRight, Phone, AlertTriangle, BookOpen, Users, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Senior Protection Center | Scam Prevention & Financial Safety",
  description:
    "Protect yourself and loved ones from financial scams targeting seniors. Learn to identify grandparent scams, romance scams, and financial exploitation.",
  keywords: [
    "senior scam protection",
    "grandparent scam",
    "elder financial abuse",
    "protect seniors from scams",
    "financial exploitation elderly",
  ],
};

export default function SeniorProtectionPage() {
  const articles = getAllSeniorProtectionArticles();

  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/30 via-slate-900 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(239,68,68,0.15),transparent_50%)]" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-red-400 text-sm font-medium mb-4">
              <ShieldAlert className="h-4 w-4" />
              PROTECTION & AWARENESS
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Senior Protection{" "}
              <span className="text-red-400">Center</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Scammers steal billions from seniors every year. Knowledge is your
              best defense. Learn to recognize, avoid, and report financial scams
              targeting older Americans.
            </p>

            {/* Emergency Resources */}
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 mb-8 text-left">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-red-300 font-medium mb-2">
                    Think You&apos;ve Been Scammed?
                  </p>
                  <p className="text-slate-300 text-sm mb-3">
                    Act quickly. Stop all contact with the scammer and report immediately.
                  </p>
                  <div className="flex flex-wrap gap-3 text-sm">
                    <span className="bg-white/10 px-3 py-1 rounded text-slate-300">
                      FTC: reportfraud.ftc.gov
                    </span>
                    <span className="bg-white/10 px-3 py-1 rounded text-slate-300">
                      FBI IC3: ic3.gov
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="lg" asChild>
                <Link href="/quiz">
                  Protect Your Wealth <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-white/20 text-white hover:bg-white/10"
              >
                <a href="#guides">View Protection Guides</a>
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
              <div className="text-3xl font-bold text-red-400">$3.4B</div>
              <div className="text-sm text-slate-400">Lost Annually (60+)</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400">$9,000</div>
              <div className="text-sm text-slate-400">Avg. Grandparent Scam</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400">1 in 10</div>
              <div className="text-sm text-slate-400">Seniors Targeted</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400">60%+</div>
              <div className="text-sm text-slate-400">By Family Members</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Emergency Contacts */}
      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-serif font-bold text-white mb-8 text-center">
            If You Suspect Fraud or Exploitation
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="bg-red-500/20 p-3 rounded-lg inline-block mb-4">
                <Phone className="h-6 w-6 text-red-400" />
              </div>
              <h3 className="font-bold text-white mb-2">Adult Protective Services</h3>
              <p className="text-slate-400 text-sm mb-3">
                Report elder abuse and exploitation to your state&apos;s APS office.
              </p>
              <p className="text-sm text-red-400 font-medium">eldercare.acl.gov</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="bg-blue-500/20 p-3 rounded-lg inline-block mb-4">
                <ShieldAlert className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="font-bold text-white mb-2">AARP Fraud Helpline</h3>
              <p className="text-slate-400 text-sm mb-3">
                Free helpline for scam victims and those who suspect fraud.
              </p>
              <p className="text-lg font-semibold text-blue-400">877-908-3360</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="bg-amber-500/20 p-3 rounded-lg inline-block mb-4">
                <AlertTriangle className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="font-bold text-white mb-2">FTC Report Fraud</h3>
              <p className="text-slate-400 text-sm mb-3">
                Federal Trade Commission fraud reporting portal.
              </p>
              <p className="text-sm text-amber-400 font-medium">reportfraud.ftc.gov</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Guides */}
      <section id="guides" className="py-16 bg-slate-800/30 scroll-mt-16">
        <Container>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-serif font-bold text-white flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-red-400" />
              Protection Guides
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/senior-protection/${article.slug}`}
                className="bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-red-500/30 rounded-xl p-6 transition-all group"
              >
                <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors mb-2 leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-slate-400 line-clamp-2">
                  {article.subtitle}
                </p>
                <div className="mt-4 flex items-center text-red-400 text-sm font-medium">
                  Read Guide <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Family Section */}
      <section className="py-16">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <Users className="h-12 w-12 text-red-400 mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
              Protecting Loved Ones
            </h2>
            <p className="text-slate-400 mb-8">
              If you&apos;re concerned about an elderly parent or grandparent, these
              guides can help you recognize warning signs and take appropriate
              action while respecting their autonomy.
            </p>
            <Button variant="gold" size="xl" asChild>
              <Link href="/quiz">
                Get Protection Guidance <ArrowRight className="ml-2 h-5 w-5" />
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
            headline="Protect Your Retirement Assets"
            subheadline="Physical gold in secure storage can't be stolen through phone scams or wire fraud. Learn how a Gold IRA protects your wealth."
            trackSource="senior-protection-hub"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
