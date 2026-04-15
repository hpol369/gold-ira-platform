import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { AnswerFirst } from "@/components/seo/AnswerFirst";
import { SourcesSection } from "@/components/content/SourcesSection";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { ArticleMeta } from "@/components/content/ArticleMeta";
import { InContentCTA } from "@/components/widgets/InContentCTA";
import { AutoRelatedContent } from "@/components/content/RelatedContent";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import {
  AlertTriangle,
  ShieldCheck,
  DollarSign,
  Clock,
  Users,
  CheckCircle2,
  XCircle,
  Banknote,
  Scale,
} from "lucide-react";
import { isPublished } from "@/data/editorial-schedule";

export const revalidate = 86400; // Revalidate daily so pages go live on schedule

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "7 Situations Where a Gold IRA Does Not Make Sense (2026)",
    description:
      "A Gold IRA is not always the right move. Learn 7 situations where fees, liquidity needs, or emotional decisions make other retirement options a better fit.",
    url: "https://www.richdadretirement.com/learn/when-a-gold-ira-does-not-make-sense",
    type: "article",
  }),
  robots: isPublished("when-a-gold-ira-does-not-make-sense") ? { index: true, follow: true } : { index: false, follow: true },
};

// ---------------------------------------------------------------------------
// Page data
// ---------------------------------------------------------------------------

const faqs = [
  {
    question: "Is a gold IRA always a bad idea?",
    answer:
      "No. It can make sense for some investors who want physical metals as a diversifier, but it is not right for everyone. The key is matching it to your goals, balance, and timeline.",
  },
  {
    question: "What is the main downside of a gold IRA?",
    answer:
      "Costs and complexity are two of the biggest drawbacks. Setup fees, annual custodian fees, storage fees, and dealer spreads can create significant drag on smaller accounts.",
  },
  {
    question: "Is a gold ETF cheaper than a gold IRA?",
    answer:
      "Often yes, especially for smaller accounts, though a gold ETF does not give you direct ownership of specific physical coins or bars in your IRA.",
  },
  {
    question: "Can gold help diversify retirement savings?",
    answer:
      "Yes, but too much gold can create concentration risk. Most experts suggest keeping precious metals as a modest allocation, not the majority of your portfolio.",
  },
  {
    question: "What is a reasonable alternative for inflation protection?",
    answer:
      "TIPS, I Bonds, diversified stock funds, short-term Treasuries, and sometimes a small gold allocation can all play a role in protecting against inflation.",
  },
];

const sources = [
  {
    name: "IRS IRA and RMD Rules",
    url: "https://www.irs.gov/retirement-plans",
    accessDate: "March 2026",
  },
  {
    name: "SEC Investor.gov: Investor Guidance",
    url: "https://www.investor.gov/",
    accessDate: "March 2026",
  },
  {
    name: "FINRA Investor Guidance on Alternative Investments and Fees",
    url: "https://www.finra.org/investors",
    accessDate: "March 2026",
  },
  {
    name: "World Gold Council",
    url: "https://www.gold.org/",
    accessDate: "March 2026",
  },
];

const situations = [
  {
    number: 1,
    title: "You Need Income from Your Investments",
    icon: Banknote,
    iconColor: "bg-red-100 text-red-700",
    content:
      "Gold does not pay interest. It does not pay dividends. It just sits there. If you are retired and depending on your assets to help cover bills, a gold IRA may not solve your biggest problem. Income-producing options like bonds, CDs, dividend funds, or annuities may fit better depending on your situation.",
    alternative: "Treasury bonds, bond ladders, dividend funds, or immediate/fixed annuities.",
  },
  {
    number: 2,
    title: "You Are Only Investing a Small Amount",
    icon: DollarSign,
    iconColor: "bg-amber-100 text-amber-700",
    content:
      "Gold IRAs often come with setup fees, annual custodian fees, storage fees, and dealer markups. Those costs can eat up a small account fast. For example, if a retiree invests $10,000 and pays $250 to $400 a year in combined account and storage costs, that is a very high percentage drag before price movement even starts.",
    alternative: "A low-cost gold ETF in a traditional brokerage IRA may be cheaper and simpler.",
  },
  {
    number: 3,
    title: "You Are Chasing Fear or Headlines",
    icon: AlertTriangle,
    iconColor: "bg-orange-100 text-orange-700",
    content:
      "If your main reason is the dollar is about to collapse next month, slow down. Big emotional decisions are dangerous in retirement. Gold can be part of a measured diversification plan, but fear-based, all-in moves often lead to bad timing and regret.",
    alternative: "Build a written retirement allocation plan that includes cash, stocks, bonds, and maybe a small precious-metals slice if appropriate.",
  },
  {
    number: 4,
    title: "You Need Liquidity and Simplicity",
    icon: Clock,
    iconColor: "bg-blue-100 text-blue-700",
    content:
      "Selling gold in an IRA is usually not as simple as selling a mutual fund. There can be spreads, processing delays, and paperwork through the custodian and dealer. If you like simple statements, easy rebalancing, and fast access to market pricing, a gold IRA may feel clunky.",
    alternative: "Broad index funds, bond funds, or even a gold ETF if you want liquidity without physical storage.",
  },
  {
    number: 5,
    title: "You Already Have Enough Concentration Risk",
    icon: Scale,
    iconColor: "bg-purple-100 text-purple-700",
    content:
      "Some retirees pile into gold because they distrust Wall Street. But replacing one concentration risk with another is not real diversification. If too much of your nest egg is tied up in one asset, whether it is company stock, real estate, or gold, you are exposed to the risk that one area underperforms for years.",
    alternative: "A balanced mix of stock index funds, bonds, cash, and maybe a modest alternatives sleeve.",
  },
  {
    number: 6,
    title: "You Are Close to Taking Required Withdrawals and Hate Hassle",
    icon: Clock,
    iconColor: "bg-teal-100 text-teal-700",
    content:
      "Traditional IRA owners face required minimum distributions (RMDs) starting at the IRS age threshold. If a large share of your IRA is in physical metals, planning withdrawals can get awkward. You may need to sell metals to raise cash or distribute metals in kind, which adds complexity and valuation questions.",
    alternative: "Keep more liquid assets in traditional IRAs that will face RMDs soon, and reserve more specialized holdings for accounts where administration is easier.",
  },
  {
    number: 7,
    title: "Fees and Spreads Would Likely Outweigh the Benefit",
    icon: DollarSign,
    iconColor: "bg-red-100 text-red-700",
    content:
      "A gold IRA can include an account setup fee, annual custodian fee, depository storage fee, insurance cost, dealer spread/markup, and possible wire or transaction fees. If gold rises strongly, those costs may be worth it. But if gold is flat for years, the fee drag becomes very noticeable. If your all-in annual cost is 1.5% to 3% once spreads are included over time, your investment starts behind the starting line.",
    alternative: "Low-cost ETFs, TIPS, I Bonds if eligible, diversified commodity funds, or simply a broader stock/bond allocation.",
  },
];

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default function WhenGoldIraDoesNotMakeSensePage() {
  return (
    <>
      <Navbar />

      <SchemaScript
        schema={articleSchema({
          title: "7 Situations Where a Gold IRA Does Not Make Sense",
          description:
            "A Gold IRA is not always the right move. Learn 7 situations where fees, liquidity needs, or emotional decisions make other retirement options a better fit.",
          slug: "/learn/when-a-gold-ira-does-not-make-sense",
          datePublished: "2026-04-15",
          dateModified: "2026-04-15",
        })}
      />
      <SchemaScript schema={faqSchema(faqs)} />
      <SchemaScript
        schema={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Learn", url: "/learn" },
          { name: "When a Gold IRA Does Not Make Sense", url: "/learn/when-a-gold-ira-does-not-make-sense" },
        ])}
      />

      <main className="bg-white min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-100 pt-28 pb-12 md:pt-32 md:pb-16">
          <Container>
            <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#B22234] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/learn" className="hover:text-[#B22234] transition-colors">Learn</Link>
              <span>/</span>
              <span className="text-[#000080] font-medium">When a Gold IRA Does Not Make Sense</span>
            </nav>

            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#000080] mb-4 leading-tight">
                7 Situations Where a Gold IRA Does Not Make Sense
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-6">
                Gold IRAs get marketed as a cure-all. They are not. Here are seven situations where the answer is often &quot;skip it.&quot;
              </p>
              <ArticleMeta
                publishDate="2026-04-15"
                updateDate="2026-04-15"
                readTime="10 min"
              />
            </div>
          </Container>
        </section>

        {/* Content */}
        <Container className="py-12 md:py-16">
          <article className="max-w-3xl mx-auto">
            <AnswerFirst
              answer="A Gold IRA is not always the right move. If you need near-term income, have a small balance, don't understand the fee structure, or are reacting emotionally to market headlines, there may be better retirement options to evaluate first."
              keyFacts={[
                "Investment decisions driven by fear can lead to poor outcomes. Source: FINRA behavioral investor guidance",
                "Account size matters when fixed annual fees are involved. Source: SEC/industry fee frameworks",
                "Liquidity needs should be considered before holding less flexible retirement assets. Source: SEC Investor.gov",
              ]}
              className="mb-10"
            />

            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              A self-directed IRA that holds physical gold can be useful in some cases. But for many retirees, it may be too expensive, too complicated, or just a poor fit for their goals. If you are thinking about opening one, it helps to ask a hard question first: when does a gold IRA not make sense? For the full trust-building overview, see our <Link href="/when-not-to-open-gold-ira" className="text-[#B22234] font-medium hover:underline">When Not to Open a Gold IRA</Link> page.
            </p>

            {/* 7 Situations */}
            {situations.map((situation, i) => {
              const IconComponent = situation.icon;
              return (
                <section key={situation.number} id={`situation-${situation.number}`} className="mb-10 scroll-mt-24">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2.5 rounded-lg ${situation.iconColor}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080]">
                      {situation.number}. {situation.title}
                    </h2>
                  </div>
                  <p className="text-slate-600 mb-4">{situation.content}</p>
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                    <p className="text-sm text-slate-600">
                      <strong className="text-green-800">Alternative:</strong> {situation.alternative}
                    </p>
                  </div>
                  {i === 2 && <div className="mt-6"><InContentCTA trackSource="learn-when-gold-ira-bad" /></div>}
                </section>
              );
            })}

            <p className="text-slate-600 mb-8">
              For a deeper look at fees specifically, read our guide on <Link href="/learn/gold-ira-fees-explained" className="text-[#B22234] font-medium hover:underline">gold IRA fees explained</Link>. And if you want to model different scenarios, try our <Link href="/tools/gold-allocation-calculator" className="text-[#B22234] font-medium hover:underline">gold allocation calculator</Link>.
            </p>

            {/* Section: Who is this for */}
            <section id="who-is-this-for" className="mb-12 scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-green-100 rounded-lg text-green-700">
                  <Users className="w-5 h-5" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080]">
                  Who This Article Is For
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="font-bold text-green-800 mb-3">This Article Is For:</h3>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" /> Retirees trying to avoid expensive mistakes</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" /> People comparing a gold IRA with simpler options</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" /> Anyone worried about fees, liquidity, or complexity</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h3 className="font-bold text-red-800 mb-3">This Article Is Not For:</h3>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" /> People fully committed to physical metals no matter the cost</li>
                    <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" /> Traders looking to speculate on short-term price swings</li>
                    <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" /> Readers who already understand and accept the tradeoffs</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section: Blue-collar example */}
            <section id="example" className="mb-12 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] mb-4">
                A Blue-Collar Example: Joe the Union Electrician
              </h2>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <p className="text-slate-600 mb-4">
                  Joe is 61, a union electrician planning to retire next year. A radio ad tells him to move $80,000 from his 401(k) into a gold IRA before &quot;the next crash.&quot;
                </p>
                <p className="text-slate-600 mb-4">
                  He looks closer. He finds setup fees, yearly storage costs, and a dealer spread that means he starts in a hole. He also realizes he needs part of that money available within a few years.
                </p>
                <p className="text-slate-600">
                  Instead of moving all $80,000, Joe puts most of his money into a simple stock-and-bond rollover IRA and keeps just a small allocation to gold through a lower-cost fund. For his needs, that was the better fit.
                </p>
              </div>
            </section>

            {/* Section: Bottom line */}
            <section id="bottom-line" className="mb-12 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] mb-4">
                The Bottom Line
              </h2>
              <p className="text-slate-600 mb-4">
                A gold IRA is not automatically a scam, but it is also not automatically smart. It usually makes the least sense when you need income, your investment amount is small, you need liquidity, you hate complexity, you are making a fear-based decision, or fees will take too big a bite.
              </p>
              <p className="text-slate-600">
                For many retirees, the best answer is not &quot;never own gold.&quot; It is &quot;own it in the right amount, in the right vehicle, for the right reason.&quot; For the full picture, read our comprehensive <Link href="/guide/gold-ira-guide" className="text-[#B22234] font-medium hover:underline">Gold IRA Guide</Link>.
              </p>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-12 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <details key={i} className="group bg-slate-50 rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                      <h3 className="text-lg font-bold">{faq.question}</h3>
                      <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-[#B22234] sm:p-3">
                        <ShieldCheck className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" />
                      </span>
                    </summary>
                    <p className="mt-4 leading-relaxed text-slate-600">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <SourcesSection sources={sources} lastVerified="April 2026" />

            <AutoRelatedContent currentUrl="/learn/when-a-gold-ira-does-not-make-sense" />

            <AuthorBox />
          </article>
        </Container>

        {/* Footer CTA */}
        <section className="py-16 bg-slate-50 border-t border-slate-200">
          <Container>
            <AugustaCTA variant="footer" trackSource="learn-when-gold-ira-bad" />
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
