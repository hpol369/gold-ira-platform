"use client";

import { ArrowRight, Shield, TrendingUp } from "lucide-react";

interface CalculatorCTAProps {
  /** The calculator type — determines the CTA messaging */
  calculatorType: "rmd" | "retirement" | "fire" | "gold-ira" | "gold-allocation" | "social-security" | "fers" | "calpers" | "tsp" | "general";
  /** Key result value to personalize CTA (e.g., "$15,000 RMD", "$500,000 needed") */
  resultValue?: string;
  /** Additional context from the calculation */
  resultContext?: string;
  /** Track source for analytics */
  trackSource: string;
}

const CTA_MESSAGES: Record<string, { headline: string; subtext: string; buttonText: string }> = {
  rmd: {
    headline: "Protect Your RMD Distributions from Inflation",
    subtext: "Your required minimum distributions lose purchasing power every year. A Gold IRA can hedge this risk.",
    buttonText: "See How Gold Protects Your RMDs",
  },
  retirement: {
    headline: "Is Your Retirement on Track?",
    subtext: "If your numbers show a gap, gold can help close it. Historically, gold has returned 8%+ annually over the last 20 years.",
    buttonText: "Get a Free Retirement Protection Plan",
  },
  fire: {
    headline: "Protect Your FIRE Number from Market Crashes",
    subtext: "Sequence-of-returns risk is the #1 threat to early retirement. Gold reduces portfolio volatility by 15-25%.",
    buttonText: "See How Gold Fits Your FIRE Plan",
  },
  "gold-ira": {
    headline: "Ready to Start Your Gold IRA?",
    subtext: "You've seen the numbers. Let us match you with the right company for your situation.",
    buttonText: "Find Your Best Match",
  },
  "gold-allocation": {
    headline: "Get Your Personalized Gold Allocation Plan",
    subtext: "Based on your portfolio, a specialist can help you optimize your precious metals allocation.",
    buttonText: "Speak With a Specialist",
  },
  "social-security": {
    headline: "Protect Your Social Security Purchasing Power",
    subtext: "Social Security COLAs don't keep up with real inflation. Gold has outpaced CPI for 50+ years.",
    buttonText: "See How Gold Protects Your Benefits",
  },
  fers: {
    headline: "Federal Employee? Protect Your FERS + TSP",
    subtext: "Your FERS pension has diet COLAs. Your TSP has zero gold exposure. Both lose to inflation.",
    buttonText: "See TSP to Gold IRA Options",
  },
  calpers: {
    headline: "CalPERS Member? Diversify Beyond Your Pension",
    subtext: "Your pension is one leg of the stool. Gold adds stability that CalPERS investments can't.",
    buttonText: "Explore Gold IRA Protection",
  },
  tsp: {
    headline: "Your TSP Has Zero Gold Exposure",
    subtext: "The G, F, C, S, and I funds don't include precious metals. A Gold IRA fills that gap.",
    buttonText: "See TSP Rollover Options",
  },
  general: {
    headline: "Ready to Protect What You've Built?",
    subtext: "Get matched with the right Gold IRA company for your situation. Free info call — educational, not sales.",
    buttonText: "Find Your Best Option",
  },
};

export function CalculatorCTA({ calculatorType, resultValue, resultContext, trackSource }: CalculatorCTAProps) {
  const message = CTA_MESSAGES[calculatorType] || CTA_MESSAGES.general;

  // Build /get-started link with context
  const params = new URLSearchParams({
    ref: trackSource,
    ...(resultContext && { context: resultContext }),
  });

  return (
    <div className="mt-8 bg-gradient-to-br from-[#000080]/5 to-[#B22234]/5 border border-[#000080]/20 rounded-2xl p-6 md:p-8">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-[#B22234]/10 rounded-xl flex items-center justify-center">
          <Shield className="h-6 w-6 text-[#B22234]" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-[#000080] mb-2">
            {resultValue ? message.headline.replace("Your", `Your ${resultValue}`) : message.headline}
          </h3>
          <p className="text-slate-600 mb-4">{message.subtext}</p>
          <a
            href={`/get-started?${params.toString()}`}
            className="inline-flex items-center gap-2 bg-[#B22234] hover:bg-[#9a1d2d] text-white font-bold py-3 px-6 rounded-xl transition-all"
          >
            {message.buttonText}
            <ArrowRight className="h-5 w-5" />
          </a>
          {resultValue && (
            <p className="text-slate-500 text-sm mt-3 flex items-center gap-1">
              <TrendingUp className="h-4 w-4" />
              Based on your calculation of {resultValue}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
