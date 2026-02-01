import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WealthCalculator } from "@/components/home/WealthCalculator";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { Container } from "@/components/ui/Container";
import { Shield, Award, Star, Users, AlertTriangle, CheckCircle2 } from "lucide-react";
import {
  retirementAges,
  retirementAgeSlugs,
  getRetirementAgeData,
} from "@/config/retirement-ages";

interface PageProps {
  params: Promise<{ age: string }>;
}

export async function generateStaticParams() {
  return retirementAgeSlugs.map((age) => ({
    age,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { age } = await params;
  const data = getRetirementAgeData(age);

  if (!data) {
    return {
      title: "Page Not Found",
    };
  }

  return {
    title: data.metaTitle,
    description: data.metaDescription,
  };
}

export default async function HowMuchToRetirePage({ params }: PageProps) {
  const { age } = await params;
  const data = getRetirementAgeData(age);

  if (!data) {
    notFound();
  }

  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(data.defaultAmount);

  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-8">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-wider uppercase mb-4">
              Retirement Planning Calculator
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#000080] mb-6 leading-tight">
              {data.heroHeadline}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
              {data.heroSubheadline}
            </p>
          </div>

          {/* Trust Bar */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 py-6 border-t border-b border-slate-200 mt-8">
            <div className="flex items-center gap-2 text-slate-500">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-sm font-semibold">A+ BBB Rating</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500">
              <Award className="w-5 h-5 text-amber-500" />
              <span className="text-sm font-semibold">Money Magazine #1</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500">
              <Star className="w-5 h-5 text-[#B22234] fill-current" />
              <span className="text-sm font-semibold">4.9/5 (1,847 Reviews)</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold">Trusted by Joe Montana</span>
            </div>
          </div>
        </Container>
      </section>

      {/* The Calculator */}
      <WealthCalculator initialAmount={data.defaultAmount} initialYears={data.timeHorizon} />

      {/* Age-Specific Challenges Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] mb-4">
                Retiring at {data.age}: What You're Up Against
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Planning to retire at {data.age} means preparing for {data.timeHorizon} years of
                withdrawals. Here's what makes this timeline unique.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Pain Points */}
              <div className="bg-red-50 border border-red-200 rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-2 text-red-600 font-semibold mb-6">
                  <AlertTriangle className="h-5 w-5" />
                  CHALLENGES AT {data.age}
                </div>
                <ul className="space-y-4">
                  {data.painPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-red-200">
                        <span className="text-red-600 text-xs font-bold">{index + 1}</span>
                      </div>
                      <span className="text-slate-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="bg-green-50 border border-green-200 rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-2 text-green-600 font-semibold mb-6">
                  <CheckCircle2 className="h-5 w-5" />
                  ADVANTAGES AT {data.age}
                </div>
                <ul className="space-y-4">
                  {data.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* The Bridge / Solution */}
      <section className="py-24 bg-slate-900 text-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white">
                Now That You Know Your Number...
              </h2>
              <p className="text-lg text-slate-300">
                The question isn't just "how much"—it's "how do I protect it for {data.timeHorizon}{" "}
                years?"
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">The "Cash Trap"</h3>
                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                  Most retirement calculators assume your dollars will buy the same amount of
                  groceries in {data.timeHorizon} years as they do today.
                </p>
                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                  <strong className="text-amber-400">They are dangerously wrong.</strong>
                </p>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  With {data.timeHorizon} years of retirement at {data.age}, inflation could cut
                  your purchasing power by <strong className="text-white">40% or more</strong>. Your{" "}
                  {formattedAmount} might only buy {formattedAmount.replace("$500,000", "$300,000")}{" "}
                  worth of goods.
                </p>
              </div>
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute -top-4 -left-4 bg-[#B22234] text-white px-4 py-2 font-bold rounded-lg shadow-lg">
                  The Solution
                </div>
                <h3 className="text-xl font-bold mb-4 text-amber-400">The Gold IRA Hedge</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                      <span className="text-green-500 font-bold">✓</span>
                    </div>
                    <span className="text-slate-200">Zero Tax Consequences (Direct Rollover)</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                      <span className="text-green-500 font-bold">✓</span>
                    </div>
                    <span className="text-slate-200">
                      Moves Opposite to Dollar (Inflation Hedge)
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                      <span className="text-green-500 font-bold">✓</span>
                    </div>
                    <span className="text-slate-200">Physical Asset You Own & Control</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                      <span className="text-green-500 font-bold">✓</span>
                    </div>
                    <span className="text-slate-200">
                      Perfect for {data.timeHorizon}-Year Time Horizons
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-white border-t border-slate-200">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] mb-4">
                Why 23,000+ Americans Trust Augusta
              </h2>
              <p className="text-slate-600">
                Real reviews from verified customers protecting their retirement
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Testimonial 1 */}
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm mb-4 italic">
                  "I was worried my savings wouldn't last through retirement. Augusta showed me
                  exactly how gold could protect my purchasing power for the next 25 years."
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#000080] rounded-full flex items-center justify-center text-white text-sm font-bold">
                    R
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">Robert M.</p>
                    <p className="text-xs text-slate-500">Retired at 58, Texas</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm mb-4 italic">
                  "Planning to retire at 62, I needed to know my number would hold up. The rollover
                  was seamless and I sleep better knowing I have gold backing my retirement."
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#B22234] rounded-full flex items-center justify-center text-white text-sm font-bold">
                    S
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">Susan K.</p>
                    <p className="text-xs text-slate-500">Retiring Soon, Florida</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 - Joe Montana */}
              <div className="bg-gradient-to-br from-[#000080] to-[#000060] rounded-xl p-6 text-white">
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-blue-100 text-sm mb-4 italic">
                  "I know what it takes to prepare for the big game. That's why I chose Augusta for
                  my retirement."
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center text-[#000080] text-sm font-bold">
                    JM
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Joe Montana</p>
                    <p className="text-xs text-blue-200">NFL Hall of Fame QB</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center items-center gap-8 mt-12 pt-8 border-t border-slate-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#000080]">A+</div>
                <div className="text-xs text-slate-500">BBB Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#000080]">AAA</div>
                <div className="text-xs text-slate-500">BCA Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#000080]">4.9</div>
                <div className="text-xs text-slate-500">Trustpilot</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#000080]">#1</div>
                <div className="text-xs text-slate-500">Money Magazine 2024</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <Container>
          <AugustaCTA
            variant="default"
            trackSource={data.trackSource}
            headline={data.ctaText}
            subheadline={`Get the free guide trusted by Joe Montana. Learn how to protect your retirement savings for ${data.timeHorizon} years with a tax-free Gold IRA rollover.`}
          />
        </Container>
      </section>

      {/* Browse Other Ages */}
      <section className="py-12 bg-white border-t border-slate-200">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-lg font-semibold text-slate-500 mb-6">
              Calculate for Other Retirement Ages
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {retirementAgeSlugs
                .filter((slug) => slug !== age)
                .map((slug) => {
                  const ageData = retirementAges[slug];
                  return (
                    <a
                      key={slug}
                      href={`/calculator/how-much/${slug}`}
                      className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-full text-slate-600 font-semibold hover:bg-slate-100 hover:text-[#000080] hover:border-[#000080]/30 transition-all"
                    >
                      Retire at {ageData.age}
                    </a>
                  );
                })}
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
