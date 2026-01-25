import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import {
  GraduationCap,
  BookOpen,
  TrendingUp,
  Shield,
  Calculator,
  FileText,
  CheckCircle2,
  ArrowRight,
  Clock,
  Award,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Gold IRA Academy - Free Course | Rich Dad Retirement",
  description:
    "Master Gold IRA investing with our free 10-module course. Learn everything from basics to advanced strategies for protecting your retirement with precious metals.",
};

const modules = [
  {
    number: 1,
    title: "Understanding Gold IRAs",
    description: "What is a Gold IRA and how does it differ from traditional retirement accounts?",
    link: "/what-is-a-gold-ira",
    duration: "10 min",
    icon: BookOpen,
  },
  {
    number: 2,
    title: "Why Gold Matters",
    description: "The historical case for gold as a wealth preservation asset.",
    link: "/why-gold",
    duration: "15 min",
    icon: TrendingUp,
  },
  {
    number: 3,
    title: "Gold IRA Rules & Regulations",
    description: "IRS rules, contribution limits, and compliance requirements.",
    link: "/gold-ira-rules",
    duration: "12 min",
    icon: FileText,
  },
  {
    number: 4,
    title: "Tax Benefits & Strategies",
    description: "Understanding tax advantages and smart withdrawal strategies.",
    link: "/learn/gold-ira-tax-rules",
    duration: "15 min",
    icon: Calculator,
  },
  {
    number: 5,
    title: "Rollover Process",
    description: "How to roll over your 401(k), IRA, or TSP into gold.",
    link: "/rollover",
    duration: "10 min",
    icon: Shield,
  },
  {
    number: 6,
    title: "Choosing the Right Company",
    description: "How to evaluate and compare Gold IRA custodians.",
    link: "/best-gold-ira-companies",
    duration: "20 min",
    icon: Award,
  },
  {
    number: 7,
    title: "IRS-Approved Metals",
    description: "Which gold, silver, and platinum products qualify for your IRA.",
    link: "/learn/ira-approved-gold-coins",
    duration: "12 min",
    icon: CheckCircle2,
  },
  {
    number: 8,
    title: "Fees & Costs Explained",
    description: "Understanding setup fees, storage costs, and annual charges.",
    link: "/guide/gold-ira-fees",
    duration: "10 min",
    icon: Calculator,
  },
  {
    number: 9,
    title: "Avoiding Scams",
    description: "Red flags to watch for and how to protect yourself.",
    link: "/learn/gold-ira-scams",
    duration: "15 min",
    icon: Shield,
  },
  {
    number: 10,
    title: "Getting Started",
    description: "Step-by-step guide to opening your Gold IRA today.",
    link: "/guide/gold-ira-guide",
    duration: "10 min",
    icon: GraduationCap,
  },
];

export default function AcademyPage() {
  const totalDuration = modules.reduce((acc, m) => acc + parseInt(m.duration), 0);

  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-800 to-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 font-semibold text-sm mb-6">
              <GraduationCap className="h-4 w-4" />
              FREE COURSE
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Gold IRA Academy
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Master everything you need to know about Gold IRAs in 10 easy modules.
              From basics to advanced strategies—completely free.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-10">
              <div className="flex items-center gap-2 text-slate-300">
                <BookOpen className="h-5 w-5 text-amber-400" />
                <span>10 Modules</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="h-5 w-5 text-amber-400" />
                <span>{totalDuration} Minutes Total</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Users className="h-5 w-5 text-amber-400" />
                <span>50,000+ Students</span>
              </div>
            </div>

            <Link
              href="#module-1"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-bold text-lg rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all"
            >
              Start Learning Free
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Course Modules */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
              Course Curriculum
            </h2>

            <div className="space-y-4">
              {modules.map((module, index) => (
                <Link
                  key={module.number}
                  href={module.link}
                  id={`module-${module.number}`}
                  className="block group"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-amber-500/30 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center text-amber-400 font-bold">
                        {module.number}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                              {module.title}
                            </h3>
                            <p className="text-slate-400 mt-1">
                              {module.description}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 text-slate-500 text-sm whitespace-nowrap">
                            <Clock className="h-4 w-4" />
                            {module.duration}
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-slate-500 group-hover:text-amber-400 transition-colors flex-shrink-0" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Bonus Content */}
      <section className="py-16 bg-slate-800/30">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              Bonus Resources
            </h2>
            <p className="text-slate-400 text-center mb-12">
              Deep-dive guides on specific topics
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/learn/how-much-gold-in-portfolio" className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:border-amber-500/30 transition-all">
                <h3 className="font-bold text-white group-hover:text-amber-400 mb-2">Portfolio Allocation</h3>
                <p className="text-slate-400 text-sm">How much gold should be in your portfolio?</p>
              </Link>
              <Link href="/learn/gold-price-prediction-2026" className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:border-amber-500/30 transition-all">
                <h3 className="font-bold text-white group-hover:text-amber-400 mb-2">Gold Price Outlook</h3>
                <p className="text-slate-400 text-sm">Expert predictions for 2026</p>
              </Link>
              <Link href="/learn/gold-bullion-vs-gold-coins" className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:border-amber-500/30 transition-all">
                <h3 className="font-bold text-white group-hover:text-amber-400 mb-2">Bullion vs Coins</h3>
                <p className="text-slate-400 text-sm">Which is better for your IRA?</p>
              </Link>
              <Link href="/learn/indirect-vs-direct-rollover" className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:border-amber-500/30 transition-all">
                <h3 className="font-bold text-white group-hover:text-amber-400 mb-2">Rollover Types</h3>
                <p className="text-slate-400 text-sm">Direct vs indirect explained</p>
              </Link>
              <Link href="/guide/457b-to-gold-ira-rollover" className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:border-amber-500/30 transition-all">
                <h3 className="font-bold text-white group-hover:text-amber-400 mb-2">457(b) Rollover</h3>
                <p className="text-slate-400 text-sm">Guide for government employees</p>
              </Link>
              <Link href="/guide/noble-gold-fees" className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:border-amber-500/30 transition-all">
                <h3 className="font-bold text-white group-hover:text-amber-400 mb-2">Fee Comparison</h3>
                <p className="text-slate-400 text-sm">Noble Gold fees breakdown</p>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 bg-slate-800/50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
              What You&apos;ll Learn
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "How Gold IRAs protect against inflation and market crashes",
                "The exact process to roll over your existing retirement accounts",
                "IRS rules and regulations you must follow",
                "How to spot and avoid Gold IRA scams",
                "The difference between various precious metals options",
                "How to choose the best Gold IRA company for your needs",
                "Tax benefits and smart withdrawal strategies",
                "Real-world strategies used by sophisticated investors",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Ready to Put Your Knowledge Into Action?"
            subheadline="After completing the Academy, schedule a free consultation with Augusta Precious Metals to discuss your specific retirement goals."
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
