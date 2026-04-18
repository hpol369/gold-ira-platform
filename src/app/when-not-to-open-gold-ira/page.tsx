import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { SourcesSection } from "@/components/content/SourcesSection";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { AnswerFirst } from "@/components/seo/AnswerFirst";
import { FAQSection } from "@/components/seo/FAQSection";
import { ArticleMeta } from "@/components/content/ArticleMeta";
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { createPageMetadata } from "@/lib/metadata";
import {
  AlertTriangle,
  Ban,
  Clock,
  CreditCard,
  DollarSign,
  GraduationCap,
  Lightbulb,
  PieChart,
  Scale,
  Shield,
  ShieldAlert,
  TrendingDown,
  XCircle,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata = createPageMetadata({
  title: "When NOT to Open a Gold IRA | Honest Guide",
  description:
    "A Gold IRA isn't right for everyone. Learn the 9 situations where a Gold IRA is a bad idea, the fee math that makes small accounts expensive, and better alternatives.",
  url: "https://www.richdadretirement.com/when-not-to-open-gold-ira",
  type: "article",
});

// ---------------------------------------------------------------------------
// Schema data
// ---------------------------------------------------------------------------

const pageSlug = "/when-not-to-open-gold-ira";

const article = articleSchema({
  title: "When NOT to Open a Gold IRA | Honest Guide",
  description:
    "A Gold IRA isn't right for everyone. Learn the 9 situations where a Gold IRA is a bad idea, the fee math that makes small accounts expensive, and better alternatives.",
  slug: pageSlug,
  datePublished: "2026-03-19T08:00:00Z",
  dateModified: "2026-03-19T08:00:00Z",
});

const faqItems = [
  {
    question: "Is a Gold IRA ever a bad idea?",
    answer:
      "Yes. A Gold IRA is a bad idea when your account balance is under $50,000, you need the money within three years, you carry high-interest debt, or you are buying out of fear rather than as part of a diversification strategy. Annual fees of $200-$400 create a disproportionate drag on small balances.",
  },
  {
    question: "What is the minimum amount needed for a Gold IRA to make sense?",
    answer:
      "Most financial advisors suggest at least $50,000 to make the fixed-fee structure worthwhile. At that level, a $300 annual fee equals about 0.6% of your balance. Below $25,000, the same fee represents over 1.2%, which is four times the cost of a typical index fund.",
  },
  {
    question:
      "Are there cheaper alternatives to a Gold IRA for gold exposure?",
    answer:
      "Yes. Gold ETFs like GLD and IAU charge expense ratios of 0.25-0.40% per year, have no setup fees, and can be sold any business day. Gold mining stock funds (e.g., GDX) provide leveraged exposure to gold prices. I-Bonds offer government-backed inflation protection with zero fees.",
  },
  {
    question: "How do I know if a Gold IRA company is a scam?",
    answer:
      "Red flags include pressure to act immediately, claims of guaranteed returns, celebrity endorsements without disclosure, extremely high dealer markups (over 10%), free silver or coin promotions that hide costs, and lack of a verifiable BBB or BCA rating. The CFTC fined two precious metals dealers a combined $107 million in 2024-2025 for defrauding elderly investors.",
  },
  {
    question:
      "Should I open a Gold IRA if I am under 40?",
    answer:
      "Generally no. Investors under 40 have 20-30 years of compounding ahead. A broadly diversified stock index fund has historically returned roughly 10% per year over 30-year periods, while gold has averaged about 7.7%. At that time horizon, the compounding difference is substantial. Consider a Gold IRA later in life when capital preservation becomes more important than growth.",
  },
];

const faqSchemaData = faqSchema(faqItems);

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "When NOT to Open a Gold IRA", url: pageSlug },
]);

// ---------------------------------------------------------------------------
// Sources
// ---------------------------------------------------------------------------

const sources = [
  {
    name: "CFTC Press Release: $52 Million Judgment Against Precious Metals Dealer",
    url: "https://www.cftc.gov/PressRoom/PressReleases",
    accessDate: "March 2026",
  },
  {
    name: "IRS Publication 590-A: Contributions to Individual Retirement Arrangements",
    url: "https://www.irs.gov/publications/p590a",
    accessDate: "March 2026",
  },
  {
    name: "Bureau of Labor Statistics: CPI Inflation Calculator",
    url: "https://www.bls.gov/data/inflation_calculator.htm",
    accessDate: "March 2026",
  },
  {
    name: "FINRA Investor Alert: Gold and Precious Metals",
    url: "https://www.finra.org/investors/insights/gold",
    accessDate: "March 2026",
  },
  {
    name: "World Gold Council: Gold as a Strategic Asset (2025)",
    url: "https://www.gold.org/goldhub/research/relevance-of-gold-as-a-strategic-asset",
    accessDate: "March 2026",
  },
  {
    name: "S&P 500 Historical Returns (NYU Stern)",
    url: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/histretSP.html",
    accessDate: "March 2026",
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function BetterAlternative({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 my-6">
      <div className="flex items-start gap-3">
        <Lightbulb className="h-5 w-5 mt-0.5 text-emerald-600 flex-shrink-0" />
        <div>
          <p className="font-semibold text-emerald-800 mb-1">Better Alternative</p>
          <div className="text-sm text-emerald-700 leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}

function SectionIcon({ icon: Icon }: { icon: React.ElementType }) {
  return (
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[rgba(220,38,38,0.1)] mr-3 flex-shrink-0">
      <Icon className="h-5 w-5 text-[#D4A94E]" />
    </span>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function WhenNotToOpenGoldIraPage() {
  return (
    <main className="min-h-screen bg-[#0C0D18] pb-24">
      {/* Schema Scripts */}
      <SchemaScript schema={article} />
      <SchemaScript schema={faqSchemaData} />
      <SchemaScript schema={breadcrumbs} />

      {/* Page Header */}
      <header className="bg-[#0C0D18] border-b border-[#2A2D42] py-16 md:py-20 relative overflow-hidden">
        {/* Subtle patriot gradient accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B22234] via-[#000080] to-[#B22234]" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[rgba(220,38,38,0.08)] px-4 py-1.5 text-sm font-semibold text-[#D4A94E] mb-6 border border-red-200">
              <Shield className="h-3.5 w-3.5" />
              Honest Guide
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6 text-[#F6F4EF]">
              When <span className="text-[#D4A94E]">NOT</span> to Open a Gold IRA
            </h1>
            <p className="text-lg md:text-xl text-[#D0CCC4] leading-relaxed max-w-2xl">
              A Gold IRA can be a smart diversification tool — but only if your
              finances are in the right place. Here are the nine situations
              where it will cost you more than it helps.
            </p>
          </div>
        </Container>
      </header>

      {/* Content */}
      <Container className="py-12">
        <div className="max-w-3xl mx-auto">
          <ArticleMeta
            publishDate="2026-03-19"
            updateDate="2026-03-19"
            readTime="12 min"
          />

          {/* Answer First — GEO snippet bait */}
          <AnswerFirst
            answer="A Gold IRA can help some retirees diversify, but it is not the right move for everyone. If your balance is under $50,000, your time horizon is short, you carry high-interest debt, or you're buying out of fear, the costs and limitations will likely outweigh the benefits."
            keyFacts={[
              "Annual fees of $200-$400 represent a 1.2% drag on a $25,000 account (vs 0.3% on $100,000)",
              "CFTC fined two precious metals dealers $107M combined in 2024-2025 for targeting elderly investors",
              "A 5% dealer markup on $25,000 means starting $1,250 behind before any appreciation",
            ]}
            className="mb-10"
          />

          {/* Article Body */}
          <article className="prose prose-lg prose-headings:font-serif prose-headings:text-[#F6F4EF] prose-p:text-[#D0CCC4] prose-a:text-[#D4A94E] max-w-none">
            {/* Section 1 */}
            <div className="flex items-center not-prose mb-4 mt-12" id="under-50k">
              <SectionIcon icon={DollarSign} />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF]">
                1. When Your Retirement Savings Are Under $50,000
              </h2>
            </div>
            <p>
              Gold IRAs charge fixed annual fees — typically $200 to $400 per
              year for custodian and depository costs — regardless of your
              account size. On a $25,000 balance, a $300 annual fee eats 1.2%
              of your money every year before gold moves a single penny. That
              is four times the cost of a total stock market index fund.
            </p>
            <p>
              On top of annual fees, most Gold IRA companies charge a one-time
              setup fee ($50-$150) and dealers apply a markup of 3-8% on the
              coins or bars you purchase. On a $25,000 account, a 5% dealer
              markup means you start $1,250 in the hole from day one. Gold
              would need to appreciate roughly 6-7% in the first year just
              for you to break even.
            </p>
            <p>
              Larger accounts absorb these fixed costs far more efficiently.
              At $100,000, the same $300 annual fee is just 0.3% — comparable
              to a low-cost ETF. That is why most reputable Gold IRA companies
              set minimums of $25,000-$50,000.
            </p>
            <BetterAlternative>
              Buy shares of a gold ETF like GLD or IAU inside your existing
              IRA. Expense ratios run 0.25-0.40% per year, there is no setup
              fee, no dealer markup, and you can sell any business day. You
              get the same gold price exposure without the punishing fee math.
            </BetterAlternative>

            {/* Section 2 */}
            <div className="flex items-center not-prose mb-4 mt-12" id="short-horizon">
              <SectionIcon icon={Clock} />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF]">
                2. When You Need the Money Within 3-5 Years
              </h2>
            </div>
            <p>
              Physical gold inside an IRA is not a checking account. Selling
              takes days, not seconds: you contact your custodian, they
              coordinate with the dealer, you accept a buyback price (usually
              1-3% below spot), and the cash settles back into your IRA before
              you can withdraw it. The entire process can take one to two weeks.
            </p>
            <p>
              If you are within five years of needing the money, that
              illiquidity is a genuine risk. Gold can also drop 20-30% in a
              single year — it fell 28% in 2013 alone. If a downturn coincides
              with the year you need to sell, there is no dividend yield to
              cushion the fall. You eat the full loss.
            </p>
            <p>
              Gold is a long-term store of value, not a short-term trade.
              Academic research consistently shows gold performs best as a
              portfolio diversifier over horizons of seven years or more.
            </p>
            <BetterAlternative>
              Money you need within five years belongs in high-yield savings,
              short-term Treasury bills, or a bond ladder. These instruments
              offer daily liquidity, predictable income, and no risk of a 20%
              drawdown right when you need cash.
            </BetterAlternative>

            {/* Section 3 */}
            <div className="flex items-center not-prose mb-4 mt-12" id="over-allocated">
              <SectionIcon icon={PieChart} />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF]">
                3. When You Are Already Over-Allocated to Alternatives
              </h2>
            </div>
            <p>
              Most financial planners recommend keeping 5-15% of a retirement
              portfolio in precious metals and other alternative assets. If
              you already have 20% or more in real estate, crypto, commodities,
              or collectibles, adding a Gold IRA pushes you further away from
              the diversification it is supposed to provide.
            </p>
            <p>
              Alternative assets share a common weakness: they are illiquid,
              harder to value accurately, and do not produce income. Stacking
              too many of them in one portfolio amplifies your exposure to
              liquidity crunches — the exact scenario retirees need to avoid.
            </p>
            <p>
              Before opening a Gold IRA, audit your full portfolio. If
              alternatives already exceed 15%, the marginal benefit of adding
              gold is small and the concentration risk is real.
            </p>
            <BetterAlternative>
              If you want gold exposure but are already heavy on alternatives,
              consider rebalancing. Sell some of your existing alternative
              holdings first, then use the proceeds for gold — maintaining
              total alternative allocation at or below 15%.
            </BetterAlternative>

            {/* Section 4 — Fee Math Table */}
            <div className="flex items-center not-prose mb-4 mt-12" id="fee-math">
              <SectionIcon icon={Scale} />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF]">
                4. When Fees Would Eat Too Much of Your Balance
              </h2>
            </div>
            <p>
              This is the most overlooked deal-breaker. Gold IRA fees are
              fixed-dollar amounts, not percentages — which means they hit
              smaller accounts disproportionately hard. Here is the math that
              most Gold IRA ads conveniently leave out:
            </p>

            {/* Fee comparison table */}
            <div className="not-prose my-8 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[rgba(197,149,46,0.1)] text-white">
                    <th className="text-left px-4 py-3 font-semibold rounded-tl-lg">
                      Account Balance
                    </th>
                    <th className="text-center px-4 py-3 font-semibold">
                      Annual Fee ($300)
                    </th>
                    <th className="text-center px-4 py-3 font-semibold">
                      Fee as % of Balance
                    </th>
                    <th className="text-center px-4 py-3 font-semibold rounded-tr-lg">
                      10-Year Fee Drag
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#2A2D42] bg-[rgba(220,38,38,0.08)]">
                    <td className="px-4 py-3 font-medium text-[#F6F4EF]">$25,000</td>
                    <td className="px-4 py-3 text-center text-[#D0CCC4]">$300</td>
                    <td className="px-4 py-3 text-center font-semibold text-red-700">
                      1.20%
                    </td>
                    <td className="px-4 py-3 text-center text-red-700">$3,000 (12%)</td>
                  </tr>
                  <tr className="border-b border-[#2A2D42] bg-[#161828]">
                    <td className="px-4 py-3 font-medium text-[#F6F4EF]">$50,000</td>
                    <td className="px-4 py-3 text-center text-[#D0CCC4]">$300</td>
                    <td className="px-4 py-3 text-center font-semibold text-amber-700">
                      0.60%
                    </td>
                    <td className="px-4 py-3 text-center text-amber-700">$3,000 (6%)</td>
                  </tr>
                  <tr className="bg-emerald-50">
                    <td className="px-4 py-3 font-medium text-[#F6F4EF] rounded-bl-lg">
                      $100,000
                    </td>
                    <td className="px-4 py-3 text-center text-[#D0CCC4]">$300</td>
                    <td className="px-4 py-3 text-center font-semibold text-emerald-700">
                      0.30%
                    </td>
                    <td className="px-4 py-3 text-center text-emerald-700 rounded-br-lg">
                      $3,000 (3%)
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-[#A8A39A] mt-2">
                * Assumes flat $300/year fee and no account growth for
                simplicity. Actual drag is slightly lower as the account
                grows, but the fixed-cost disparity persists.
              </p>
            </div>

            <p>
              At $25,000, the fee drag alone wipes out gold&apos;s average annual
              real return. You need a consistently above-average year from
              gold prices just to keep pace with a zero-fee savings account.
            </p>
            <BetterAlternative>
              If your balance is below $50,000, consider a gold ETF (0.25-0.40%
              expense ratio) inside your existing IRA. You get gold price
              exposure at roughly one-third the cost, with no minimums and
              instant liquidity.
            </BetterAlternative>

            {/* Section 5 */}
            <div className="flex items-center not-prose mb-4 mt-12" id="high-interest-debt">
              <SectionIcon icon={CreditCard} />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF]">
                5. When You Have High-Interest Debt
              </h2>
            </div>
            <p>
              Gold has averaged roughly 7.7% annual returns over the past 50
              years. Credit card debt charges 22-28% APR. Every dollar you
              put into a Gold IRA instead of paying down a credit card balance
              is costing you 15-20% per year in net interest.
            </p>
            <p>
              That is not a close call. No legitimate financial advisor would
              recommend opening a Gold IRA while carrying $10,000+ in
              high-interest debt. The guaranteed &ldquo;return&rdquo; from paying down
              a 24% credit card dwarfs even the best-case scenario for gold.
            </p>
            <p>
              This applies to personal loans, payday lending, and any debt
              above roughly 8% APR. The rule is simple: if you have debt
              earning more than gold&apos;s long-term average return, pay the
              debt first.
            </p>
            <BetterAlternative>
              Pay off all debt above 8% APR before investing in alternatives.
              Then maximize your employer 401(k) match (that is an immediate
              50-100% return). Only after those two boxes are checked should
              you consider a Gold IRA.
            </BetterAlternative>

            {/* Section 6 */}
            <div className="flex items-center not-prose mb-4 mt-12" id="under-40">
              <SectionIcon icon={GraduationCap} />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF]">
                6. When You Are Under 40 and Still Building Wealth
              </h2>
            </div>
            <p>
              If you are in your 20s or 30s, you have the most powerful asset
              in investing: time. Over 30-year periods, the S&P 500 has
              returned approximately 10% per year on average, while gold has
              returned roughly 7.7%. That 2.3% gap may sound small, but
              compounding turns it into a chasm.
            </p>
            <p>
              A $50,000 investment growing at 10% for 30 years becomes
              approximately $872,000. At 7.7%, it becomes roughly $457,000 —
              a $415,000 difference. Young investors benefit most from
              growth-oriented assets that compound aggressively.
            </p>
            <p>
              Gold is a capital preservation tool. It shines when you are
              protecting wealth, not building it. The ideal time to add gold
              to your portfolio is in your 50s, as you shift from accumulation
              to preservation and your risk tolerance naturally declines.
            </p>
            <BetterAlternative>
              Maximize contributions to low-cost index funds (S&P 500 or total
              market) in your 20s-40s. When you are within 10-15 years of
              retirement, start shifting 5-15% into gold for diversification.
              This approach captures decades of compounding before adding
              the hedge.
            </BetterAlternative>

            {/* Section 7 */}
            <div className="flex items-center not-prose mb-4 mt-12" id="dont-understand-rules">
              <SectionIcon icon={Ban} />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF]">
                7. When You Do Not Understand the Rules
              </h2>
            </div>
            <p>
              Gold IRAs are self-directed retirement accounts governed by
              specific IRS rules. Violating those rules — even accidentally —
              can trigger taxes and penalties that devastate your balance.
              The most common mistakes include buying non-approved metals,
              taking physical possession before distribution, and exceeding
              annual contribution limits.
            </p>
            <p>
              For example: the IRS requires gold to be at least 99.5% pure
              (0.995 fineness). Popular coins like South African Krugerrands
              (91.7% gold) are not eligible. Buying non-approved metals inside
              your IRA is treated as a taxable distribution plus a 10%
              early withdrawal penalty if you are under 59 and a half.
            </p>
            <p>
              Similarly, you cannot store Gold IRA metals at home, in a safe
              deposit box, or anywhere other than an IRS-approved depository.
              Schemes promoting &ldquo;home storage Gold IRAs&rdquo; are almost always
              illegal and have resulted in multi-million-dollar IRS penalties.
            </p>
            <BetterAlternative>
              Spend two to four weeks educating yourself before investing.
              Read our Gold IRA rules guide, understand the contribution and
              distribution rules, and learn which metals are IRS-approved. A
              reputable company will also walk you through every rule during
              onboarding — be wary of any company that rushes past this step.
            </BetterAlternative>

            {/* Section 8 */}
            <div className="flex items-center not-prose mb-4 mt-12" id="fear-marketing">
              <SectionIcon icon={ShieldAlert} />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF]">
                8. When You Are Buying Because of Fear-Based Marketing
              </h2>
            </div>
            <p>
              If your first thought about gold came from a radio ad warning
              about economic collapse, a late-night TV infomercial, or a
              social media post predicting hyperinflation — pause. Fear-based
              marketing is the number one tool used by disreputable Gold IRA
              dealers to rush people into bad decisions.
            </p>
            <p>
              The CFTC fined two precious metals dealers a combined $107
              million in 2024-2025 specifically for using scare tactics to
              defraud elderly investors. These companies used predictions of
              dollar collapse and economic doom to convince retirees to move
              their entire life savings into overpriced gold coins with
              markups exceeding 50%.
            </p>
            <p>
              Gold is a legitimate investment, but fear is never a sound
              investment thesis. The investors who benefit most from gold are
              those who add it calmly, as a planned allocation within a
              diversified portfolio — not those who panic-buy after watching
              a doomsday commercial.
            </p>
            <BetterAlternative>
              Wait 30 days. If you still want gold exposure after the urgency
              fades, research three to five companies, compare fees and
              minimums, and make a decision based on math — not emotion. Any
              legitimate opportunity will still be there in a month.
            </BetterAlternative>

            {/* Section 9 */}
            <div className="flex items-center not-prose mb-4 mt-12" id="no-foundation">
              <SectionIcon icon={TrendingDown} />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF]">
                9. When Your Portfolio Lacks Basic Foundations
              </h2>
            </div>
            <p>
              A Gold IRA is an optimization — it fine-tunes a portfolio that
              already has the basics in place. If you do not yet have an
              emergency fund, you are not contributing to an employer-matched
              401(k), or you lack basic stock and bond diversification, a
              Gold IRA is adding a turbo charger to a car without an engine.
            </p>
            <p>
              The proper sequence matters: (1) build three to six months of
              emergency savings, (2) eliminate high-interest debt, (3)
              maximize employer retirement matching, (4) diversify across
              stocks and bonds, and then (5) add alternatives like gold at
              5-15% of your total portfolio.
            </p>
            <p>
              Skipping steps one through four to open a Gold IRA means you are
              taking on illiquidity risk, paying higher relative fees, and
              missing guaranteed returns from employer matching — all to hold
              an asset that performs best as a supplement, not a foundation.
            </p>
            <BetterAlternative>
              Build your financial foundation first. A fully funded emergency
              fund, zero high-interest debt, and a maxed employer match
              together provide more security than any Gold IRA. Come back to
              gold once those boxes are checked.
            </BetterAlternative>
          </article>

          {/* ----------------------------------------------------------- */}
          {/* Red Flags Section                                            */}
          {/* ----------------------------------------------------------- */}
          <section className="mt-16" id="red-flags">
            <div className="rounded-2xl border border-red-200 bg-[rgba(220,38,38,0.08)] p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="h-6 w-6 text-[#D4A94E]" />
                <h2 className="text-2xl font-serif font-bold text-[#D4A94E]">
                  Red Flags: 9 Warning Signs of a Bad Gold IRA Company
                </h2>
              </div>
              <ul className="space-y-3">
                {[
                  "Pressure to \"act now\" or claims that pricing expires today",
                  "Promises of guaranteed returns or specific price predictions",
                  "Celebrity endorsements without proper FTC disclosure",
                  "Dealer markups exceeding 8-10% over spot price",
                  "\"Free silver\" or bonus coin promotions that hide inflated prices elsewhere",
                  "No verifiable BBB, BCA, or Trustpilot profile — or a profile with suppressed reviews",
                  "Resistance to providing a full, written fee schedule before you commit",
                  "Recommendations to move 50% or more of your retirement into gold",
                  "Cold calls or unsolicited texts about gold investing from unknown numbers",
                ].map((flag, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-[#D4A94E] mt-0.5 flex-shrink-0" />
                    <span className="text-[#D0CCC4] text-sm leading-relaxed">
                      {flag}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ----------------------------------------------------------- */}
          {/* Alternatives Comparison Table                                */}
          {/* ----------------------------------------------------------- */}
          <section className="mt-16" id="alternatives">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF] mb-6">
              Gold IRA Alternatives Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[rgba(197,149,46,0.1)] text-white">
                    <th className="text-left px-4 py-3 font-semibold rounded-tl-lg">
                      Option
                    </th>
                    <th className="text-center px-4 py-3 font-semibold">
                      Annual Cost
                    </th>
                    <th className="text-center px-4 py-3 font-semibold">
                      Minimum
                    </th>
                    <th className="text-center px-4 py-3 font-semibold">
                      Liquidity
                    </th>
                    <th className="text-center px-4 py-3 font-semibold rounded-tr-lg">
                      Best For
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#2A2D42]">
                    <td className="px-4 py-3 font-medium text-[#F6F4EF]">
                      Gold IRA (Physical)
                    </td>
                    <td className="px-4 py-3 text-center text-[#D0CCC4]">
                      $200-$400 flat
                    </td>
                    <td className="px-4 py-3 text-center text-[#D0CCC4]">
                      $25K-$50K
                    </td>
                    <td className="px-4 py-3 text-center text-[#D0CCC4]">
                      Low (1-2 weeks)
                    </td>
                    <td className="px-4 py-3 text-center text-[#D0CCC4]">
                      Large accounts, long horizon
                    </td>
                  </tr>
                  <tr className="border-b border-[#2A2D42] bg-[#0C0D18]">
                    <td className="px-4 py-3 font-medium text-[#F6F4EF]">
                      Gold ETF (GLD, IAU)
                    </td>
                    <td className="px-4 py-3 text-center text-[#D0CCC4]">
                      0.25-0.40%
                    </td>
                    <td className="px-4 py-3 text-center text-[#D0CCC4]">
                      1 share (~$200)
                    </td>
                    <td className="px-4 py-3 text-center text-[#D0CCC4]">
                      High (same day)
                    </td>
                    <td className="px-4 py-3 text-center text-[#D0CCC4]">
                      Smaller accounts, flexibility
                    </td>
                  </tr>
                  <tr className="border-b border-[#2A2D42]">
                    <td className="px-4 py-3 font-medium text-[#F6F4EF]">
                      Gold Mining Funds (GDX)
                    </td>
                    <td className="px-4 py-3 text-center text-[#D0CCC4]">
                      0.50-0.55%
                    </td>
                    <td className="px-4 py-3 text-center text-[#D0CCC4]">
                      1 share (~$35)
                    </td>
                    <td className="px-4 py-3 text-center text-[#D0CCC4]">
                      High (same day)
                    </td>
                    <td className="px-4 py-3 text-center text-[#D0CCC4]">
                      Leveraged gold exposure
                    </td>
                  </tr>
                  <tr className="border-b border-[#2A2D42] bg-[#0C0D18]">
                    <td className="px-4 py-3 font-medium text-[#F6F4EF]">
                      I-Bonds (Treasury)
                    </td>
                    <td className="px-4 py-3 text-center text-[#D0CCC4]">
                      0% (no fees)
                    </td>
                    <td className="px-4 py-3 text-center text-[#D0CCC4]">
                      $25
                    </td>
                    <td className="px-4 py-3 text-center text-[#D0CCC4]">
                      Moderate (1-year lock)
                    </td>
                    <td className="px-4 py-3 text-center text-[#D0CCC4]">
                      Inflation protection, safety
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-[#F6F4EF] rounded-bl-lg">
                      High-Yield Savings
                    </td>
                    <td className="px-4 py-3 text-center text-[#D0CCC4]">
                      0% (no fees)
                    </td>
                    <td className="px-4 py-3 text-center text-[#D0CCC4]">
                      $0
                    </td>
                    <td className="px-4 py-3 text-center text-[#D0CCC4]">
                      Very high (instant)
                    </td>
                    <td className="px-4 py-3 text-center text-[#D0CCC4] rounded-br-lg">
                      Short-term needs, emergency fund
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ----------------------------------------------------------- */}
          {/* FAQ Section                                                  */}
          {/* ----------------------------------------------------------- */}
          <div className="mt-16">
            <FAQSection faqs={faqItems} includeSchema={false} />
          </div>

          {/* ----------------------------------------------------------- */}
          {/* Sources                                                      */}
          {/* ----------------------------------------------------------- */}
          <SourcesSection sources={sources} lastVerified="March 2026" />

          {/* ----------------------------------------------------------- */}
          {/* Author Box (dark-themed component — wrap in dark bg)         */}
          {/* ----------------------------------------------------------- */}
          <div className="mt-12 rounded-2xl bg-slate-900 p-1">
            <AuthorBox />
          </div>

          {/* ----------------------------------------------------------- */}
          {/* Augusta CTA — footer variant for qualified visitors          */}
          {/* ----------------------------------------------------------- */}
          <div className="mt-12">
            <AugustaCTA
              variant="footer"
              headline="Think a Gold IRA IS Right for You?"
              subheadline="If you have $50,000+ in savings, a long time horizon, and no high-interest debt, a Gold IRA can be a smart diversifier. Augusta Precious Metals offers a free, no-pressure educational web conference to help you decide."
              trackSource="when-not-to-open-gold-ira"
            />
          </div>
        </div>
      </Container>
    </main>
  );
}
