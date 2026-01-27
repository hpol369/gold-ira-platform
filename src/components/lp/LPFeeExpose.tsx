"use client";

import { XCircle, CheckCircle, AlertTriangle, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeeItem {
  title: string;
  description: string;
}

interface LPFeeExposeProps {
  headline?: string;
  hiddenFees?: FeeItem[];
  transparentFees?: FeeItem[];
  impactCallout?: string;
  className?: string;
}

const defaultHiddenFees: FeeItem[] = [
  {
    title: "Buyback Spreads",
    description: "When you sell, some companies buy back at 10-30% below spot price",
  },
  {
    title: "Premium Markups",
    description: "Hidden in the 'price per ounce' - often 5-15% over spot",
  },
  {
    title: "Percentage Storage",
    description: "0.5% of holdings - scales up as your account grows",
  },
  {
    title: "Liquidation Fees",
    description: "Surprise charges when you need to sell",
  },
  {
    title: "Wire Transfer Fees",
    description: "Nickel-and-dime charges on every transaction",
  },
];

const defaultTransparentFees: FeeItem[] = [
  {
    title: "Fair Buyback",
    description: "Competitive spreads shown upfront before purchase",
  },
  {
    title: "Clear Premiums",
    description: "All pricing transparent, no hidden markups",
  },
  {
    title: "Flat Storage",
    description: "$180/year total - same whether $50K or $500K",
  },
  {
    title: "No Liquidation Fees",
    description: "Sell anytime without penalty",
  },
  {
    title: "Minimal Transaction Fees",
    description: "Standard wire fees only when needed",
  },
];

const defaultImpactCallout =
  "On a $100,000 gold IRA, hidden buyback spreads alone can cost you $10,000-$30,000 when you sell. That's money you'll never see unless you choose a transparent provider.";

export function LPFeeExpose({
  headline = "The Hidden Fees Others Won't Tell You About",
  hiddenFees = defaultHiddenFees,
  transparentFees = defaultTransparentFees,
  impactCallout = defaultImpactCallout,
  className,
}: LPFeeExposeProps) {
  return (
    <section className={cn("bg-slate-900 py-16 md:py-20", className)}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium">
            <AlertTriangle className="h-4 w-4" />
            Fee Transparency Alert
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            {headline}
          </h2>
        </div>

        {/* Two-Column Comparison */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
          {/* Hidden Fees Column (Left - Red/Warning) */}
          <div className="rounded-2xl border border-red-500/30 bg-red-500/5 overflow-hidden">
            <div className="bg-red-500/10 border-b border-red-500/20 px-6 py-4">
              <h3 className="text-lg md:text-xl font-bold text-red-400 flex items-center gap-2">
                <XCircle className="h-5 w-5" />
                Hidden Industry Fees
              </h3>
            </div>
            <div className="p-6 space-y-5">
              {hiddenFees.map((fee, index) => (
                <div key={index} className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">{fee.title}</h4>
                    <p className="text-sm text-slate-400">{fee.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Augusta Column (Right - Green/Success) */}
          <div className="rounded-2xl border border-green-500/30 bg-green-500/5 overflow-hidden">
            <div className="bg-green-500/10 border-b border-green-500/20 px-6 py-4">
              <h3 className="text-lg md:text-xl font-bold text-green-400 flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Augusta Transparent Pricing
              </h3>
            </div>
            <div className="p-6 space-y-5">
              {transparentFees.map((fee, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">{fee.title}</h4>
                    <p className="text-sm text-slate-400">{fee.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Impact Callout Box */}
        <div className="rounded-xl border border-amber-400/30 bg-amber-500/5 p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="hidden sm:flex h-12 w-12 rounded-full bg-amber-500/20 items-center justify-center flex-shrink-0">
              <Lightbulb className="h-6 w-6 text-amber-400" />
            </div>
            <div>
              <h4 className="font-bold text-amber-400 mb-2 flex items-center gap-2">
                <Lightbulb className="h-5 w-5 sm:hidden" />
                The Real Cost of Hidden Fees
              </h4>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                {impactCallout}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
