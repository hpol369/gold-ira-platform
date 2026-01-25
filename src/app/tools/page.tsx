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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Free Gold IRA Tools & Calculators | Rich Dad Retirement",
  description:
    "Use our free tools to analyze your retirement portfolio. Crash simulator, wealth calculator, RMD calculator, and more to help you make informed decisions.",
};

const tools = [
  {
    id: "crash-simulator",
    name: "Market Crash Simulator",
    description:
      "Test your portfolio against historical crashes like 2008, COVID-19, and the dot-com bubble. See how gold allocation could protect your retirement.",
    icon: TrendingDown,
    href: "/tools/crash-simulator",
    status: "available",
    color: "red",
  },
  {
    id: "wealth-calculator",
    name: "Wealth Erosion Calculator",
    description:
      "See how inflation is silently destroying your purchasing power. Visualize the impact over 10, 20, or 30 years.",
    icon: Calculator,
    href: "/#wealth-calculator",
    status: "available",
    color: "amber",
  },
  {
    id: "rmd-calculator",
    name: "RMD Calculator",
    description:
      "Calculate your Required Minimum Distributions and plan your Gold IRA withdrawals strategically.",
    icon: PiggyBank,
    href: "/tools/rmd-calculator",
    status: "available",
    color: "green",
  },
  {
    id: "fees-comparison",
    name: "Fees Comparison Tool",
    description:
      "Compare setup fees, storage costs, and annual charges across different Gold IRA companies.",
    icon: Scale,
    href: "/tools/fees-comparison",
    status: "available",
    color: "blue",
  },
];

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-800 to-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 font-semibold text-sm mb-6">
              <Wrench className="h-4 w-4" />
              FREE TOOLS
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Gold IRA Tools & Calculators
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Make smarter retirement decisions with our free calculators and
              analysis tools. No signup required.
            </p>
          </div>
        </Container>
      </section>

      {/* Tools Grid */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {tools.map((tool) => {
                const Icon = tool.icon;
                const isAvailable = tool.status === "available";
                const colorClasses = {
                  red: "bg-red-500/20 text-red-400 border-red-500/30",
                  amber: "bg-amber-500/20 text-amber-400 border-amber-500/30",
                  green: "bg-green-500/20 text-green-400 border-green-500/30",
                  blue: "bg-blue-500/20 text-blue-400 border-blue-500/30",
                };

                const CardContent = (
                  <div
                    className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full transition-all ${
                      isAvailable
                        ? "hover:bg-white/10 hover:border-amber-500/30 cursor-pointer"
                        : "opacity-60"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center border ${
                          colorClasses[tool.color as keyof typeof colorClasses]
                        }`}
                      >
                        <Icon className="h-7 w-7" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-bold text-white">
                            {tool.name}
                          </h3>
                          {!isAvailable && (
                            <span className="px-2 py-0.5 bg-slate-700 text-slate-400 text-xs rounded-full">
                              Coming Soon
                            </span>
                          )}
                        </div>
                        <p className="text-slate-400 text-sm mb-4">
                          {tool.description}
                        </p>
                        {isAvailable && (
                          <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
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
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-800/50">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Need Personalized Guidance?"
            subheadline="Our tools give you insights, but a Gold IRA specialist can help you create a customized strategy for your specific situation."
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
