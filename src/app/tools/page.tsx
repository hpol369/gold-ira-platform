import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import {
  Calculator,
  TrendingDown,
  PiggyBank,
  Scale,
  ArrowRight,
  Wrench,
  AlertTriangle,
  Timer,
  Building,
  Clock,
  Hourglass,
  Heart,
  Train,
  Layers,
  BarChart3,
  Flame,
  Target,
  Coffee,
  TrendingUp,
  Leaf,
  Shuffle,
  BadgeDollarSign,
  Briefcase,
  CalendarDays,
  DollarSign,
  GraduationCap,
  Users,
  Shield,
  CircleDollarSign,
  Percent,
  RefreshCw,
  LineChart,
  Landmark,
  Gift,
  HeartHandshake,
  Home,
  Key,
  UserCircle,
  LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Free Gold IRA Tools & Calculators | Rich Dad Retirement",
  description:
    "Use our free tools to analyze your retirement portfolio. Crash simulator, wealth calculator, RMD calculator, and more to help you make informed decisions.",
};

type ToolCategory =
  | "fire"
  | "federal"
  | "state"
  | "social-security"
  | "retirement"
  | "pension"
  | "estate"
  | "risk"
  | "home-equity"
  | "self-employed";

interface Tool {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  href: string;
  status: "available" | "coming-soon";
  color: string;
  category: ToolCategory;
}

const categoryInfo: Record<
  ToolCategory,
  { name: string; color: string; description: string }
> = {
  fire: {
    name: "FIRE & Wealth Building",
    color: "amber",
    description:
      "Financial Independence, Retire Early calculators for aggressive savers",
  },
  federal: {
    name: "Federal Employee Retirement",
    color: "blue",
    description: "FERS, TSP, and federal pension calculators",
  },
  state: {
    name: "State Pensions",
    color: "purple",
    description: "CalPERS, CalSTRS, and other state pension calculators",
  },
  "social-security": {
    name: "Social Security & Medicare",
    color: "green",
    description: "Optimize your Social Security benefits and Medicare planning",
  },
  retirement: {
    name: "Retirement Planning",
    color: "teal",
    description: "Comprehensive retirement planning and withdrawal strategies",
  },
  pension: {
    name: "Pension Decisions",
    color: "orange",
    description: "Compare pension options and lump sum decisions",
  },
  estate: {
    name: "Estate & Inheritance",
    color: "red",
    description: "Inherited IRA, estate planning, and charitable giving tools",
  },
  risk: {
    name: "Risk Analysis",
    color: "slate",
    description: "Portfolio risk assessment and crash simulation tools",
  },
  "home-equity": {
    name: "Home Equity & Loans",
    color: "cyan",
    description: "Reverse mortgage and home equity calculators",
  },
  "self-employed": {
    name: "Self-Employed",
    color: "violet",
    description: "Retirement planning tools for business owners",
  },
};

const tools: Tool[] = [
  // FIRE & Wealth Building (amber)
  {
    id: "fire-number-calculator",
    name: "FIRE Number Calculator",
    description:
      "Calculate your Financial Independence number - the amount you need to retire early and live off your investments.",
    icon: Flame,
    href: "/tools/fire-number-calculator",
    status: "available",
    color: "amber",
    category: "fire",
  },
  {
    id: "coast-fire-calculator",
    name: "Coast FIRE Calculator",
    description:
      "Find out when you can stop saving and let compound growth do the work to reach your retirement goal.",
    icon: Target,
    href: "/tools/coast-fire-calculator",
    status: "available",
    color: "amber",
    category: "fire",
  },
  {
    id: "barista-fire-calculator",
    name: "Barista FIRE Calculator",
    description:
      "Calculate how much you need to semi-retire with a part-time job covering expenses while investments grow.",
    icon: Coffee,
    href: "/tools/barista-fire-calculator",
    status: "available",
    color: "amber",
    category: "fire",
  },
  {
    id: "fat-fire-calculator",
    name: "Fat FIRE Calculator",
    description:
      "Plan for an abundant early retirement with higher spending and a more comfortable lifestyle.",
    icon: TrendingUp,
    href: "/tools/fat-fire-calculator",
    status: "available",
    color: "amber",
    category: "fire",
  },
  {
    id: "lean-fire-calculator",
    name: "Lean FIRE Calculator",
    description:
      "Calculate the minimum needed to achieve financial independence with a frugal lifestyle.",
    icon: Leaf,
    href: "/tools/lean-fire-calculator",
    status: "available",
    color: "amber",
    category: "fire",
  },
  {
    id: "sequence-of-returns-calculator",
    name: "Sequence of Returns Calculator",
    description:
      "Understand how the order of investment returns impacts your retirement portfolio survival.",
    icon: Shuffle,
    href: "/tools/sequence-of-returns-calculator",
    status: "available",
    color: "amber",
    category: "fire",
  },

  // Federal Employee Retirement (blue)
  {
    id: "fers-calculator",
    name: "FERS Retirement Calculator",
    description:
      "Federal employees: Estimate your FERS pension, FERS Supplement, and TSP income in retirement.",
    icon: Building,
    href: "/tools/fers-calculator",
    status: "available",
    color: "blue",
    category: "federal",
  },
  {
    id: "fers-supplement-calculator",
    name: "FERS Supplement Calculator",
    description:
      "Calculate your Special Retirement Supplement - the bridge payment from retirement until Social Security.",
    icon: BadgeDollarSign,
    href: "/tools/fers-supplement-calculator",
    status: "available",
    color: "blue",
    category: "federal",
  },
  {
    id: "fers-annuity-calculator",
    name: "FERS Annuity Calculator",
    description:
      "Calculate your FERS basic annuity based on high-3 salary, years of service, and retirement age.",
    icon: Briefcase,
    href: "/tools/fers-annuity-calculator",
    status: "available",
    color: "blue",
    category: "federal",
  },
  {
    id: "tsp-calculator",
    name: "TSP Calculator",
    description:
      "Project your Thrift Savings Plan growth and retirement income from your federal TSP contributions.",
    icon: CalendarDays,
    href: "/tools/tsp-calculator",
    status: "available",
    color: "blue",
    category: "federal",
  },

  // State Pensions (purple)
  {
    id: "calpers-retirement-calculator",
    name: "CalPERS Retirement Calculator",
    description:
      "California public employees: Estimate your CalPERS pension based on your formula, service credit, and final compensation.",
    icon: Building,
    href: "/tools/calpers-retirement-calculator",
    status: "available",
    color: "purple",
    category: "state",
  },
  {
    id: "calpers-pension-calculator",
    name: "CalPERS Pension Calculator",
    description:
      "Detailed CalPERS benefit calculation with multiple retirement formulas and service purchase options.",
    icon: DollarSign,
    href: "/tools/calpers-pension-calculator",
    status: "available",
    color: "purple",
    category: "state",
  },
  {
    id: "calstrs-calculator",
    name: "CalSTRS Calculator",
    description:
      "California teachers: Calculate your CalSTRS retirement benefits based on years of service and age factor.",
    icon: GraduationCap,
    href: "/tools/calstrs-calculator",
    status: "available",
    color: "purple",
    category: "state",
  },

  // Social Security & Medicare (green)
  {
    id: "social-security-calculator",
    name: "Social Security Optimizer",
    description:
      "Find your optimal Social Security claiming age. Compare benefits at 62, FRA, and 70 to maximize lifetime income.",
    icon: Clock,
    href: "/tools/social-security-calculator",
    status: "available",
    color: "green",
    category: "social-security",
  },
  {
    id: "social-security-break-even-calculator",
    name: "Social Security Break-Even Calculator",
    description:
      "Calculate when delaying Social Security pays off by comparing total benefits at different claiming ages.",
    icon: Scale,
    href: "/tools/social-security-break-even-calculator",
    status: "available",
    color: "green",
    category: "social-security",
  },
  {
    id: "wep-calculator",
    name: "WEP Calculator",
    description:
      "Calculate how the Windfall Elimination Provision affects your Social Security if you have a pension from non-covered work.",
    icon: Users,
    href: "/tools/wep-calculator",
    status: "available",
    color: "green",
    category: "social-security",
  },
  {
    id: "medicaid-calculator",
    name: "Medicaid Spend-Down Calculator",
    description:
      "Estimate Medicaid eligibility and learn legitimate strategies to protect assets while qualifying for long-term care.",
    icon: Heart,
    href: "/tools/medicaid-calculator",
    status: "available",
    color: "green",
    category: "social-security",
  },

  // Retirement Planning (teal)
  {
    id: "401k-calculator",
    name: "401(k) Calculator",
    description:
      "Project your 401(k) growth with employer matching, contribution rates, and compound interest. See your retirement savings potential.",
    icon: Calculator,
    href: "/tools/401k-calculator",
    status: "available",
    color: "teal",
    category: "retirement",
  },
  {
    id: "retirement-calculator",
    name: "Retirement Readiness Calculator",
    description:
      "Calculate how much you need to retire comfortably. Factor in Social Security, expenses, and inflation to see if you're on track.",
    icon: Calculator,
    href: "/tools/retirement-calculator",
    status: "available",
    color: "teal",
    category: "retirement",
  },
  {
    id: "retirement-spending-calculator",
    name: "Retirement Spending Calculator",
    description:
      "Plan your retirement budget and see how different spending levels affect your portfolio longevity.",
    icon: PiggyBank,
    href: "/tools/retirement-spending-calculator",
    status: "available",
    color: "teal",
    category: "retirement",
  },
  {
    id: "retirement-longevity-calculator",
    name: "Retirement Longevity Calculator",
    description:
      "Estimate how long you might live based on health factors and plan your retirement income accordingly.",
    icon: Hourglass,
    href: "/tools/retirement-longevity-calculator",
    status: "available",
    color: "teal",
    category: "retirement",
  },
  {
    id: "money-longevity-calculator",
    name: "Money Longevity Calculator",
    description:
      "How long will your savings last? Calculate when your retirement funds may run out based on expenses and income.",
    icon: Hourglass,
    href: "/tools/money-longevity-calculator",
    status: "available",
    color: "teal",
    category: "retirement",
  },
  {
    id: "monte-carlo-retirement-simulator",
    name: "Monte Carlo Retirement Simulator",
    description:
      "Run thousands of simulations to see the probability of your retirement plan succeeding under various market conditions.",
    icon: LineChart,
    href: "/tools/monte-carlo-retirement-simulator",
    status: "available",
    color: "teal",
    category: "retirement",
  },
  {
    id: "rmd-calculator",
    name: "RMD Calculator",
    description:
      "Calculate your Required Minimum Distributions and plan your Gold IRA withdrawals strategically.",
    icon: Percent,
    href: "/tools/rmd-calculator",
    status: "available",
    color: "teal",
    category: "retirement",
  },
  {
    id: "72t-calculator",
    name: "72(t) SEPP Calculator",
    description:
      "Calculate penalty-free early withdrawals using IRS Rule 72(t). Compare all three IRS-approved calculation methods.",
    icon: Timer,
    href: "/tools/72t-calculator",
    status: "available",
    color: "teal",
    category: "retirement",
  },
  {
    id: "roth-conversion-calculator",
    name: "Roth Conversion Calculator",
    description:
      "Analyze whether converting traditional IRA to Roth makes sense based on your tax situation and time horizon.",
    icon: RefreshCw,
    href: "/tools/roth-conversion-calculator",
    status: "available",
    color: "teal",
    category: "retirement",
  },

  // Pension Decisions (orange)
  {
    id: "pension-vs-lump-sum-calculator",
    name: "Pension vs Lump Sum Calculator",
    description:
      "Compare taking a monthly pension versus a lump sum payout. See which option provides more lifetime value.",
    icon: Scale,
    href: "/tools/pension-vs-lump-sum-calculator",
    status: "available",
    color: "orange",
    category: "pension",
  },
  {
    id: "pension-present-value-calculator",
    name: "Pension Present Value Calculator",
    description:
      "Calculate the present value of your pension to understand its true worth in today's dollars.",
    icon: CircleDollarSign,
    href: "/tools/pension-present-value-calculator",
    status: "available",
    color: "orange",
    category: "pension",
  },
  {
    id: "railroad-retirement-calculator",
    name: "Railroad Retirement Calculator",
    description:
      "Calculate Railroad Retirement Board benefits including Tier I, Tier II, and spousal benefits. Compare to Social Security.",
    icon: Train,
    href: "/tools/railroad-retirement-calculator",
    status: "available",
    color: "orange",
    category: "pension",
  },
  {
    id: "railroad-tier-1-calculator",
    name: "Railroad Tier 1 Calculator",
    description:
      "Focused Tier I (Social Security equivalent) calculator with WEP/GPO considerations for mixed railroad and non-railroad work.",
    icon: Layers,
    href: "/tools/railroad-tier-1-calculator",
    status: "available",
    color: "orange",
    category: "pension",
  },

  // Estate & Inheritance (red)
  {
    id: "inherited-ira-rmd-calculator",
    name: "Inherited IRA RMD Calculator",
    description:
      "Calculate required distributions for inherited IRAs under the new SECURE Act rules for beneficiaries.",
    icon: Gift,
    href: "/tools/inherited-ira-rmd-calculator",
    status: "available",
    color: "red",
    category: "estate",
  },
  {
    id: "inheritance-calculator",
    name: "Inheritance Calculator",
    description:
      "Estimate estate taxes and inheritance amounts. Plan how to maximize what you leave to heirs.",
    icon: Landmark,
    href: "/tools/inheritance-calculator",
    status: "available",
    color: "red",
    category: "estate",
  },
  {
    id: "charitable-remainder-trust-calculator",
    name: "Charitable Remainder Trust Calculator",
    description:
      "Calculate income and tax benefits from a CRT while supporting your favorite charities.",
    icon: HeartHandshake,
    href: "/tools/charitable-remainder-trust-calculator",
    status: "available",
    color: "red",
    category: "estate",
  },
  {
    id: "nua-calculator",
    name: "NUA Calculator",
    description:
      "Calculate Net Unrealized Appreciation tax savings for employer stock in your 401(k). Compare NUA vs regular rollover strategy.",
    icon: BarChart3,
    href: "/tools/nua-calculator",
    status: "available",
    color: "red",
    category: "estate",
  },

  // Risk Analysis (slate)
  {
    id: "401k-risk-analyzer",
    name: "401(k) Risk Analyzer",
    description:
      "Discover how much of your 401(k) is exposed to stock market volatility. See your estimated risk score and potential losses in a market crash.",
    icon: AlertTriangle,
    href: "/tools/401k-risk-analyzer",
    status: "available",
    color: "slate",
    category: "risk",
  },
  {
    id: "crash-simulator",
    name: "Market Crash Simulator",
    description:
      "Test your portfolio against historical crashes like 2008, COVID-19, and the dot-com bubble. See how gold allocation could protect your retirement.",
    icon: TrendingDown,
    href: "/tools/crash-simulator",
    status: "available",
    color: "slate",
    category: "risk",
  },
  {
    id: "fees-comparison",
    name: "Fees Comparison Tool",
    description:
      "Compare setup fees, storage costs, and annual charges across different Gold IRA companies.",
    icon: Shield,
    href: "/tools/fees-comparison",
    status: "available",
    color: "slate",
    category: "risk",
  },

  // Home Equity & Loans (cyan)
  {
    id: "reverse-mortgage-calculator",
    name: "Reverse Mortgage Calculator",
    description:
      "Calculate how much you could receive from a reverse mortgage and understand the costs and implications.",
    icon: Home,
    href: "/tools/reverse-mortgage-calculator",
    status: "available",
    color: "cyan",
    category: "home-equity",
  },
  {
    id: "hecm-calculator",
    name: "HECM Calculator",
    description:
      "Calculate Home Equity Conversion Mortgage benefits for seniors 62+ looking to access home equity in retirement.",
    icon: Key,
    href: "/tools/hecm-calculator",
    status: "available",
    color: "cyan",
    category: "home-equity",
  },

  // Self-Employed (violet)
  {
    id: "solo-401k-calculator",
    name: "Solo 401(k) Calculator",
    description:
      "Calculate maximum contributions for self-employed individuals including employee and employer portions.",
    icon: UserCircle,
    href: "/tools/solo-401k-calculator",
    status: "available",
    color: "violet",
    category: "self-employed",
  },
];

// Group tools by category
const toolsByCategory = tools.reduce(
  (acc, tool) => {
    if (!acc[tool.category]) {
      acc[tool.category] = [];
    }
    acc[tool.category].push(tool);
    return acc;
  },
  {} as Record<ToolCategory, Tool[]>
);

const categoryOrder: ToolCategory[] = [
  "fire",
  "federal",
  "state",
  "social-security",
  "retirement",
  "pension",
  "estate",
  "risk",
  "home-equity",
  "self-employed",
];

const colorClasses: Record<string, string> = {
  red: "bg-red-500/20 text-red-700 border-red-500/30",
  amber: "bg-amber-500/20 text-amber-700 border-amber-500/30",
  green: "bg-green-500/20 text-green-700 border-green-500/30",
  blue: "bg-blue-500/20 text-blue-700 border-blue-500/30",
  purple: "bg-purple-500/20 text-purple-700 border-purple-500/30",
  teal: "bg-teal-500/20 text-teal-400 border-teal-500/30",
  orange: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  slate: "bg-slate-500/20 text-slate-400 border-slate-500/30",
  cyan: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  violet: "bg-violet-500/20 text-violet-400 border-violet-500/30",
};

const categoryHeaderColors: Record<string, string> = {
  amber: "text-amber-700 border-amber-500/30",
  blue: "text-blue-700 border-blue-500/30",
  purple: "text-purple-700 border-purple-500/30",
  green: "text-green-700 border-green-500/30",
  teal: "text-teal-400 border-teal-500/30",
  orange: "text-orange-400 border-orange-500/30",
  red: "text-red-700 border-red-500/30",
  slate: "text-slate-400 border-slate-500/30",
  cyan: "text-cyan-400 border-cyan-500/30",
  violet: "text-violet-400 border-violet-500/30",
};

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#B22234]/10 border border-[#B22234]/30 rounded-full text-[#B22234] font-semibold text-sm mb-6">
              <Wrench className="h-4 w-4" />
              FREE TOOLS
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#000080] mb-6">
              Retirement Tools Built for Real Workers
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-4">
              After 30+ years of showing up every day, you've built something real.
              These free calculators help you protect what you've earned. No signup required.
            </p>
            <p className="text-lg text-[#B22234] font-semibold">
              {tools.length} Free Calculators Available
            </p>
          </div>
        </Container>
      </section>

      {/* Tools by Category */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-6xl mx-auto space-y-16">
            {categoryOrder.map((categoryKey) => {
              const categoryTools = toolsByCategory[categoryKey];
              if (!categoryTools || categoryTools.length === 0) return null;

              const category = categoryInfo[categoryKey];

              return (
                <div key={categoryKey}>
                  {/* Category Header */}
                  <div
                    className={`border-b ${categoryHeaderColors[category.color]} pb-4 mb-8`}
                  >
                    <h2
                      className={`text-2xl md:text-3xl font-bold ${categoryHeaderColors[category.color].split(" ")[0]}`}
                    >
                      {category.name}
                    </h2>
                    <p className="text-slate-400 mt-2">{category.description}</p>
                  </div>

                  {/* Tools Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryTools.map((tool) => {
                      const Icon = tool.icon;
                      const isAvailable = tool.status === "available";

                      const CardContent = (
                        <div
                          className={`bg-white border border-slate-200 rounded-2xl p-6 h-full transition-all shadow-sm ${
                            isAvailable
                              ? "hover:bg-slate-50 hover:border-[#B22234]/30 cursor-pointer"
                              : "opacity-60"
                          }`}
                        >
                          <div className="flex items-start gap-4">
                            <div
                              className={`w-12 h-12 rounded-xl flex items-center justify-center border shrink-0 ${
                                colorClasses[tool.color]
                              }`}
                            >
                              <Icon className="h-6 w-6" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-base font-bold text-slate-900 truncate">
                                  {tool.name}
                                </h3>
                                {!isAvailable && (
                                  <span className="px-2 py-0.5 bg-slate-200 text-slate-500 text-xs rounded-full shrink-0">
                                    Coming Soon
                                  </span>
                                )}
                              </div>
                              <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                                {tool.description}
                              </p>
                              {isAvailable && (
                                <div className="flex items-center gap-2 text-[#B22234] font-semibold text-sm">
                                  Use Tool
                                  <ArrowRight className="h-4 w-4" />
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      );

                      return isAvailable ? (
                        <Link key={tool.id} href={tool.href}>
                          {CardContent}
                        </Link>
                      ) : (
                        <div key={tool.id}>{CardContent}</div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-50">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Ready to Protect What You've Built?"
            subheadline="You've spent decades building your retirement savings. A Gold IRA specialist can show you how to protect it from the next market crash - no obligation, no pressure."
            trackSource="tools-hub"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
