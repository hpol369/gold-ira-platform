import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  AlertTriangle,
  Clock,
  TrendingDown,
  Shield,
  Star,
  Award,
} from "lucide-react";
import LeadCaptureButton from "@/components/lp/LeadCaptureButton";

// Age-specific data for the LP
const ageData: Record<
  string,
  {
    age: number;
    timeHorizon: number;
    headline: string;
    subheadline: string;
    painPoint: string;
    urgencyText: string;
  }
> = {
  "55": {
    age: 55,
    timeHorizon: 30,
    headline: "How Much Do You Really Need to Retire at 55?",
    subheadline:
      "Most calculators get it wrong. They ignore the one factor that could wipe out 40% of your savings.",
    painPoint: "30 years of withdrawals + 10 years before Medicare",
    urgencyText: "Planning early retirement? Time is your biggest asset — and risk.",
  },
  "60": {
    age: 60,
    timeHorizon: 25,
    headline: "How Much Do You Really Need to Retire at 60?",
    subheadline:
      "Most calculators get it wrong. They ignore the one factor that could wipe out 35% of your savings.",
    painPoint: "25 years of withdrawals + 5 years before Medicare",
    urgencyText: "The 60s are the critical decade. What you do now determines everything.",
  },
  "62": {
    age: 62,
    timeHorizon: 23,
    headline: "How Much Do You Really Need to Retire at 62?",
    subheadline:
      "Most calculators get it wrong. They ignore the one factor that could wipe out 30% of your savings.",
    painPoint: "23 years of withdrawals + Social Security timing decisions",
    urgencyText: "Age 62 = first Social Security eligibility. The decisions you make now are permanent.",
  },
};

const validAges = Object.keys(ageData);

interface PageProps {
  params: Promise<{ age: string }>;
}

export async function generateStaticParams() {
  return validAges.map((age) => ({ age }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { age } = await params;
  const data = ageData[age];

  if (!data) {
    return { title: "Page Not Found" };
  }

  return {
    title: `How Much to Retire at ${data.age}? | Free Retirement Guide`,
    description: `Calculate exactly how much you need to retire at ${data.age}. Get a personalized plan that accounts for ${data.timeHorizon} years of inflation.`,
    robots: {
      index: false,
      follow: false,
    },
  };
}

// FAQ content
const faqs = [
  {
    question: "How much do I really need to retire comfortably?",
    answer:
      "The general rule is 25x your annual expenses, but this ignores inflation. With 3-4% annual inflation, your purchasing power could drop 40% over 20 years. That's why smart retirees hedge with assets that historically rise with inflation — like gold.",
  },
  {
    question: "Why do most retirement calculators get it wrong?",
    answer:
      "Most calculators assume a fixed inflation rate and steady market returns. Reality is messier. Market crashes, inflation spikes, and healthcare costs can devastate a retirement plan. A truly protected retirement accounts for these risks.",
  },
  {
    question: "How does gold protect my retirement savings?",
    answer:
      "Gold has historically moved inversely to the dollar. When inflation rises and dollars lose value, gold typically gains. During the 2008 crash, stocks fell 50% while gold rose 25%. It's insurance for your retirement.",
  },
  {
    question: "Can I move my 401(k) or IRA to gold without taxes?",
    answer:
      "Yes! A direct rollover from a 401(k), IRA, 403(b), or TSP to a Gold IRA is 100% tax-free and penalty-free when done correctly. Augusta handles all the paperwork.",
  },
  {
    question: "What's the minimum investment?",
    answer:
      "Augusta Precious Metals works with retirement accounts of $50,000 or more. This ensures you get dedicated support and premium education — not a one-size-fits-all approach.",
  },
];

export default async function RetireAtAgeLandingPage({ params }: PageProps) {
  const { age } = await params;
  const data = ageData[age];

  if (!data) {
    notFound();
  }

  const source = `lp-retire-at-${age}`;

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Urgency Bar */}
      <div className="bg-[#000080] text-white p-3 text-center font-semibold text-sm">
        <span className="flex items-center justify-center gap-2">
          <Clock className="h-4 w-4" />
          {data.urgencyText}
        </span>
      </div>

      {/* Hero Section - Above the fold conversion focus */}
      <header className="relative py-12 md:py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Copy */}
            <div>
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-bold mb-4">
                <Award className="h-3 w-3" />
                #1 RATED BY MONEY MAGAZINE
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#000080] mb-4 leading-tight">
                {data.headline}
              </h1>

              <p className="text-lg text-slate-600 mb-6">{data.subheadline}</p>

              {/* Key Stat */}
              <div className="bg-red-50 border-l-4 border-[#B22234] p-4 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-[#B22234] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#B22234]">Your Challenge at {data.age}:</p>
                    <p className="text-slate-700">{data.painPoint}</p>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                  Personalized retirement number calculation
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                  Inflation protection strategies for {data.timeHorizon} years
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                  Tax-free rollover options explained
                </li>
              </ul>

              {/* CTA */}
              <LeadCaptureButton
                variant="retirement-number"
                source={`${source}-hero`}
                className="w-full md:w-auto bg-[#B22234] hover:bg-[#8b1c2a] text-white text-lg font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                Get My Retirement Number
                <ArrowRight className="h-5 w-5" />
              </LeadCaptureButton>

              <p className="text-xs text-slate-500 mt-3 flex items-center gap-1">
                <ShieldCheck className="h-3 w-3" />
                Free • No obligation • Takes 60 seconds
              </p>
            </div>

            {/* Right: Social Proof Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 md:p-8">
              <div className="text-center mb-6">
                <div className="text-5xl font-black text-[#000080] mb-1">23,000+</div>
                <p className="text-slate-600">Americans Trust Augusta</p>
              </div>

              {/* Rating */}
              <div className="flex justify-center items-center gap-2 mb-6">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-6 w-6 text-amber-400 fill-current" />
                  ))}
                </div>
                <span className="text-lg font-bold text-slate-700">4.9/5</span>
              </div>

              {/* Trust Signals */}
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-slate-50 rounded-lg p-3">
                  <div className="text-2xl font-black text-[#000080]">A+</div>
                  <div className="text-xs text-slate-500">BBB Rating</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-3">
                  <div className="text-2xl font-black text-[#000080]">AAA</div>
                  <div className="text-xs text-slate-500">BCA Rating</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-3">
                  <div className="text-2xl font-black text-[#000080]">0</div>
                  <div className="text-xs text-slate-500">BBB Complaints</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-3">
                  <div className="text-2xl font-black text-[#000080]">#1</div>
                  <div className="text-xs text-slate-500">Money Mag 2024</div>
                </div>
              </div>

              {/* Joe Montana */}
              <div className="mt-6 pt-6 border-t border-slate-200 flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center text-[#000080] font-bold text-lg">
                  JM
                </div>
                <div>
                  <p className="font-bold text-slate-800">Joe Montana</p>
                  <p className="text-xs text-slate-500">NFL Legend & Augusta Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Problem/Solution Section */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Problem */}
            <div className="bg-[#B22234]/20 rounded-xl p-6 border border-[#B22234]/30">
              <div className="flex items-center gap-2 text-[#B22234] font-bold mb-4">
                <TrendingDown className="h-5 w-5" />
                THE HIDDEN THREAT
              </div>
              <h3 className="text-xl font-bold mb-3">
                Inflation Could Wipe Out 40% of Your Savings
              </h3>
              <p className="text-slate-300 mb-4">
                At 3.5% annual inflation, your ${data.age === 55 ? "500,000" : "500,000"} will only
                buy ${data.age === 55 ? "295,000" : data.age === 60 ? "325,000" : "340,000"} worth
                of goods in {data.timeHorizon} years.
              </p>
              <p className="text-slate-400 text-sm">
                Most retirement calculators ignore this. They assume your dollars will buy the same
                groceries in 20 years. They won&apos;t.
              </p>
            </div>

            {/* Solution */}
            <div className="bg-green-900/30 rounded-xl p-6 border border-green-500/30">
              <div className="flex items-center gap-2 text-green-400 font-bold mb-4">
                <Shield className="h-5 w-5" />
                THE GOLD HEDGE
              </div>
              <h3 className="text-xl font-bold mb-3">Gold Rises When Dollars Fall</h3>
              <p className="text-slate-300 mb-4">
                Gold has protected purchasing power for 5,000 years. When the government prints
                money, gold typically rises in value.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  Tax-free 401(k)/IRA rollover
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  Physical gold you own
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  Historically rises during crises
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2008 Comparison - Quick Visual */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#000080] mb-8">
            What Happened in 2008?
          </h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <TrendingDown className="h-10 w-10 text-[#B22234] mx-auto mb-3" />
              <div className="text-4xl font-black text-[#B22234] mb-1">-50%</div>
              <div className="text-slate-600">S&P 500</div>
              <p className="text-xs text-slate-500 mt-2">Stocks crashed</p>
            </div>
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <Shield className="h-10 w-10 text-green-600 mx-auto mb-3" />
              <div className="text-4xl font-black text-green-600 mb-1">+25%</div>
              <div className="text-slate-600">Gold</div>
              <p className="text-xs text-slate-500 mt-2">Gold protected</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#000080] text-center mb-8">
            Real People. Real Protection.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200">
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 text-sm mb-3 italic">
                &quot;I was planning to retire at 58 and worried my savings wouldn&apos;t last. Augusta
                showed me how gold could protect my purchasing power.&quot;
              </p>
              <p className="text-sm font-semibold text-slate-800">Robert M., TX</p>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200">
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 text-sm mb-3 italic">
                &quot;The rollover was seamless — no taxes, no hassle. Now I sleep better knowing
                part of my retirement is in physical gold.&quot;
              </p>
              <p className="text-sm font-semibold text-slate-800">Susan K., FL</p>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200">
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 text-sm mb-3 italic">
                &quot;No pressure, just education. They helped me understand my options before I
                made any decisions.&quot;
              </p>
              <p className="text-sm font-semibold text-slate-800">Michael T., AZ</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Objection Handling */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#000080] text-center mb-8">
            Common Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-lg p-5 border border-slate-200"
              >
                <h3 className="font-bold text-[#000080] mb-2">{faq.question}</h3>
                <p className="text-slate-600 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#000080]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Find Your Number?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Get your personalized retirement calculation — and learn how to protect it for{" "}
            {data.timeHorizon} years.
          </p>

          <LeadCaptureButton
            variant="retirement-number"
            source={`${source}-footer`}
            className="bg-[#B22234] hover:bg-[#8b1c2a] text-white text-xl font-bold py-5 px-10 rounded-lg shadow-xl hover:scale-105 transition-all inline-flex items-center gap-3"
          >
            Get My Retirement Number
            <ArrowRight className="h-6 w-6" />
          </LeadCaptureButton>

          <div className="flex flex-wrap justify-center gap-6 mt-8 text-white/80 text-sm">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" />
              Free consultation
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" />
              No obligation
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" />
              60 seconds
            </span>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="bg-slate-900 text-slate-500 py-6 text-center text-xs">
        <div className="max-w-4xl mx-auto px-4">
          <p>&copy; 2026 Rich Dad Retirement. All Rights Reserved.</p>
          <p className="mt-2">
            Disclaimer: Not financial advice. Precious metals involve risk. Past performance
            doesn&apos;t guarantee future results.
          </p>
        </div>
      </footer>
    </div>
  );
}
