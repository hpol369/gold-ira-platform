"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import {
  Calculator,
  ArrowRight,
  ArrowLeft,
  Coins,
  TrendingUp,
  Star,
  RefreshCw,
  Info,
  ChevronDown,
} from "lucide-react";

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I calculate silver melt value?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To calculate silver melt value, multiply the coin's silver content (in troy ounces) by the current spot price of silver. For example, a Morgan dollar contains 0.7734 oz of silver. At $25/oz, the melt value is $25 x 0.7734 = $19.34. For 90% silver coins, you can also use the formula: Face Value x 0.7234 x Spot Price."
      }
    },
    {
      "@type": "Question",
      "name": "What is the current melt value of silver coins?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Silver melt values fluctuate with the spot price of silver. At $25/oz silver: a Morgan/Peace dollar is worth ~$19.34, a half dollar ~$9.04, a quarter ~$4.52, and a dime ~$1.81. War nickels (35% silver) are worth ~$1.41. Use our calculator above with the current spot price for accurate values."
      }
    },
    {
      "@type": "Question",
      "name": "Do silver coins sell for more than melt value?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, most silver coins sell for premiums above melt value. Common circulated coins typically sell for 5-15% over melt. Key dates, rare varieties, and high-grade specimens can sell for significantly more based on numismatic value. During periods of high demand, even common coins can command 20%+ premiums."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I check the current silver spot price?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The silver spot price is available from financial websites like Kitco, APMEX, JM Bullion, and major financial news sites. The spot price updates during market hours (Sunday 6pm - Friday 5pm ET). Our calculator uses a default price you can adjust to match current market rates."
      }
    },
    {
      "@type": "Question",
      "name": "Why is melt value important for silver coins?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Melt value represents the floor value of any silver coin - the intrinsic worth of its metal content. For common date coins without numismatic premiums, melt value is the primary determinant of market price. Understanding melt value helps you avoid overpaying for common coins and recognize when key dates offer value beyond their silver content."
      }
    }
  ]
};

const coinTypes = [
  { id: "morgan", name: "Morgan Dollar (1878-1921)", silverOz: 0.7734, purity: 90, faceValue: 1.00 },
  { id: "peace", name: "Peace Dollar (1921-1935)", silverOz: 0.7734, purity: 90, faceValue: 1.00 },
  { id: "walking-liberty", name: "Walking Liberty Half (1916-1947)", silverOz: 0.3617, purity: 90, faceValue: 0.50 },
  { id: "franklin-half", name: "Franklin Half (1948-1963)", silverOz: 0.3617, purity: 90, faceValue: 0.50 },
  { id: "kennedy-half-64", name: "Kennedy Half 1964 (90%)", silverOz: 0.3617, purity: 90, faceValue: 0.50 },
  { id: "kennedy-half-65-70", name: "Kennedy Half 1965-1970 (40%)", silverOz: 0.1479, purity: 40, faceValue: 0.50 },
  { id: "washington-quarter", name: "Washington Quarter (1932-1964)", silverOz: 0.1808, purity: 90, faceValue: 0.25 },
  { id: "standing-liberty", name: "Standing Liberty Quarter (1916-1930)", silverOz: 0.1808, purity: 90, faceValue: 0.25 },
  { id: "barber-quarter", name: "Barber Quarter (1892-1916)", silverOz: 0.1808, purity: 90, faceValue: 0.25 },
  { id: "roosevelt-dime", name: "Roosevelt Dime (1946-1964)", silverOz: 0.0723, purity: 90, faceValue: 0.10 },
  { id: "mercury-dime", name: "Mercury Dime (1916-1945)", silverOz: 0.0723, purity: 90, faceValue: 0.10 },
  { id: "barber-dime", name: "Barber Dime (1892-1916)", silverOz: 0.0723, purity: 90, faceValue: 0.10 },
  { id: "war-nickel", name: "War Nickel (1942-1945)", silverOz: 0.0563, purity: 35, faceValue: 0.05 },
  { id: "silver-eagle", name: "American Silver Eagle", silverOz: 1.0000, purity: 99.9, faceValue: 1.00 },
  { id: "canadian-maple", name: "Canadian Silver Maple Leaf", silverOz: 1.0000, purity: 99.99, faceValue: 5.00 },
  { id: "10oz-bar", name: "10 oz Silver Bar", silverOz: 10.0000, purity: 99.9, faceValue: 0 },
  { id: "100oz-bar", name: "100 oz Silver Bar", silverOz: 100.0000, purity: 99.9, faceValue: 0 },
];

export default function MeltValueCalculatorPage() {
  const [selectedCoin, setSelectedCoin] = useState(coinTypes[0]);
  const [quantity, setQuantity] = useState(1);
  const [spotPrice, setSpotPrice] = useState(25.00);
  const [showResults, setShowResults] = useState(false);

  const calculations = useMemo(() => {
    const meltValuePer = selectedCoin.silverOz * spotPrice;
    const totalMeltValue = meltValuePer * quantity;
    const totalSilverOz = selectedCoin.silverOz * quantity;
    const totalFaceValue = selectedCoin.faceValue * quantity;

    return {
      meltValuePer,
      totalMeltValue,
      totalSilverOz,
      totalFaceValue,
    };
  }, [selectedCoin, quantity, spotPrice]);

  const handleCalculate = () => {
    setShowResults(true);
  };

  const handleReset = () => {
    setSelectedCoin(coinTypes[0]);
    setQuantity(1);
    setSpotPrice(25.00);
    setShowResults(false);
  };

  return (
    <main className="min-h-screen bg-white">
      <SchemaScript schema={schema} />
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-slate-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Link
              href="/silver-coin-values"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Silver Coin Values
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#B22234]/20 border border-[#B22234]/30 rounded-full text-[#B22234] font-semibold text-sm mb-6 ml-4">
              <Star className="h-4 w-4" />
              INTERACTIVE TOOL - 1,200 SEARCHES
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Silver Melt Value Calculator
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mb-8">
              Calculate the true silver value of any coin instantly.
              Enter your coin type, quantity, and current spot price to discover
              <span className="text-[#B22234] font-semibold"> what your silver is really worth</span> -
              not what the banks want you to think.
            </p>
          </div>
        </Container>
      </section>

      {/* Calculator Section */}
      <section className="py-12 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#B22234]/20 rounded-xl flex items-center justify-center">
                  <Calculator className="h-6 w-6 text-[#B22234]" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Melt Value Calculator</h2>
                  <p className="text-slate-600 text-sm">Calculate the silver content value of your coins</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Left Column - Inputs */}
                <div className="space-y-5">
                  {/* Coin Type Selector */}
                  <div>
                    <label className="block text-slate-900 font-semibold mb-2">
                      Coin Type
                    </label>
                    <div className="relative">
                      <select
                        value={selectedCoin.id}
                        onChange={(e) => {
                          const coin = coinTypes.find(c => c.id === e.target.value);
                          if (coin) setSelectedCoin(coin);
                        }}
                        className="w-full bg-slate-800 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 appearance-none focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
                      >
                        {coinTypes.map((coin) => (
                          <option key={coin.id} value={coin.id}>
                            {coin.name}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-600 pointer-events-none" />
                    </div>
                    <p className="text-xs text-slate-600 mt-1">
                      {selectedCoin.purity}% silver, {selectedCoin.silverOz} oz per coin
                    </p>
                  </div>

                  {/* Quantity Input */}
                  <div>
                    <label className="block text-slate-900 font-semibold mb-2">
                      Quantity
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="100000"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-full bg-slate-800 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
                    />
                  </div>

                  {/* Spot Price Input */}
                  <div>
                    <label className="block text-slate-900 font-semibold mb-2">
                      Silver Spot Price ($/oz)
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600">$</span>
                      <input
                        type="number"
                        min="1"
                        max="1000"
                        step="0.01"
                        value={spotPrice}
                        onChange={(e) => setSpotPrice(Math.max(1, parseFloat(e.target.value) || 25))}
                        className="w-full bg-slate-800 border border-slate-300 rounded-xl pl-8 pr-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
                      />
                    </div>
                    <p className="text-xs text-slate-600 mt-1 flex items-center gap-1">
                      <Info className="h-3 w-3" />
                      Check Kitco or APMEX for current spot prices
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <button
                      onClick={handleCalculate}
                      className="flex-1 bg-gradient-to-r from-[#B22234] to-[#8b1c2a] hover:from-amber-400 hover:to-amber-500 text-slate-900 font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2"
                    >
                      <Calculator className="h-5 w-5" />
                      Calculate Value
                    </button>
                    <button
                      onClick={handleReset}
                      className="bg-slate-100 hover:bg-white/20 text-slate-900 font-semibold py-3 px-4 rounded-xl transition-all"
                    >
                      <RefreshCw className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Right Column - Results */}
                <div className={`transition-all duration-300 ${showResults ? 'opacity-100' : 'opacity-50'}`}>
                  <div className="bg-gradient-to-br from-[#B22234]/10 via-amber-500/5 to-transparent border border-[#B22234]/30 rounded-xl p-6 h-full">
                    <h3 className="text-lg font-bold text-[#B22234] mb-4">Results</h3>

                    {/* Main Result */}
                    <div className="mb-6">
                      <p className="text-slate-600 text-sm mb-1">Total Melt Value</p>
                      <p className="text-4xl font-bold text-slate-900">
                        ${calculations.totalMeltValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </p>
                    </div>

                    {/* Breakdown */}
                    <div className="space-y-3 pt-4 border-t border-slate-200">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Value per coin:</span>
                        <span className="text-slate-900 font-semibold">
                          ${calculations.meltValuePer.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Total silver content:</span>
                        <span className="text-slate-900 font-semibold">
                          {calculations.totalSilverOz.toFixed(4)} oz
                        </span>
                      </div>
                      {calculations.totalFaceValue > 0 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-600">Total face value:</span>
                          <span className="text-slate-900 font-semibold">
                            ${calculations.totalFaceValue.toFixed(2)}
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between text-sm pt-2 border-t border-slate-200">
                        <span className="text-slate-600">Value over face:</span>
                        <span className="text-green-400 font-semibold">
                          {calculations.totalFaceValue > 0
                            ? `${((calculations.totalMeltValue / calculations.totalFaceValue - 1) * 100).toFixed(0)}% more`
                            : 'N/A'
                          }
                        </span>
                      </div>
                    </div>

                    {/* Premium Note */}
                    <div className="mt-4 p-3 bg-slate-50 rounded-lg">
                      <p className="text-xs text-slate-600">
                        <span className="text-[#B22234] font-semibold">Note:</span> Actual selling prices
                        are typically 5-15% above melt value for common coins. Key dates and
                        high-grade specimens can command much higher premiums.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Quick Reference */}
      <section className="py-12 bg-slate-50">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
              Quick Reference: Silver Content by Coin
            </h2>
            <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl overflow-hidden overflow-x-auto">
              <table className="w-full min-w-[600px] text-sm">
                <thead className="bg-slate-800/80">
                  <tr>
                    <th className="text-left p-4 text-slate-900 font-bold">Coin Type</th>
                    <th className="text-center p-4 text-slate-900 font-bold">Silver Content</th>
                    <th className="text-center p-4 text-slate-900 font-bold">Purity</th>
                    <th className="text-center p-4 text-[#B22234] font-bold">Melt @ $25/oz</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {coinTypes.slice(0, 13).map((coin) => (
                    <tr key={coin.id}>
                      <td className="p-4 text-slate-900">{coin.name}</td>
                      <td className="p-4 text-center text-slate-600">{coin.silverOz} oz</td>
                      <td className="p-4 text-center text-slate-600">{coin.purity}%</td>
                      <td className="p-4 text-center text-green-400 font-semibold">
                        ${(coin.silverOz * 25).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
              How Melt Value Is Calculated
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-[#B22234]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-[#B22234]">1</span>
                </div>
                <h3 className="text-slate-900 font-bold mb-2">Silver Content</h3>
                <p className="text-slate-600 text-sm">
                  Each coin has a specific amount of pure silver. A Morgan dollar contains
                  0.7734 oz, while a dime contains 0.0723 oz.
                </p>
              </div>
              <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-[#B22234]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-[#B22234]">2</span>
                </div>
                <h3 className="text-slate-900 font-bold mb-2">Spot Price</h3>
                <p className="text-slate-600 text-sm">
                  The spot price is the current market price for one troy ounce of silver.
                  It fluctuates based on supply, demand, and economic factors.
                </p>
              </div>
              <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-[#B22234]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-[#B22234]">3</span>
                </div>
                <h3 className="text-slate-900 font-bold mb-2">The Formula</h3>
                <p className="text-slate-600 text-sm">
                  Melt Value = Silver Content x Spot Price x Quantity.
                  This gives you the intrinsic metal value of your coins.
                </p>
              </div>
            </div>
            <div className="mt-8 bg-gradient-to-r from-[#B22234]/10 via-amber-500/5 to-transparent border-l-4 border-amber-500 rounded-r-xl p-4">
              <p className="text-slate-600 text-sm">
                <span className="font-semibold text-slate-900">Pro Tip:</span> For 90% silver coins,
                you can also use this shortcut: <span className="text-[#B22234] font-mono">Face Value x 0.7234 x Spot Price</span>.
                This works because all 90% silver coins contain the same silver-to-face-value ratio.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {schema.mainEntity.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-slate-900">
                    <h3 className="text-lg font-bold">{faq.name}</h3>
                    <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-slate-600">
                      <ArrowRight className="h-5 w-5 transition duration-300 group-open:rotate-90" />
                    </span>
                  </summary>
                  <p className="mt-4 leading-relaxed text-slate-600">
                    {faq.acceptedAnswer.text}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Related Pages */}
      <section className="py-12 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-slate-900 text-center mb-6">
              Explore Silver Coin Values
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                href="/silver-coin-values/morgan-dollar"
                className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-4 hover:bg-slate-100 transition-colors group"
              >
                <h3 className="font-bold text-slate-900 group-hover:text-[#B22234] transition-colors">Morgan Dollars</h3>
                <p className="text-sm text-slate-600">1878-1921 values</p>
              </Link>
              <Link
                href="/silver-coin-values/peace-dollar"
                className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-4 hover:bg-slate-100 transition-colors group"
              >
                <h3 className="font-bold text-slate-900 group-hover:text-[#B22234] transition-colors">Peace Dollars</h3>
                <p className="text-sm text-slate-600">1921-1935 values</p>
              </Link>
              <Link
                href="/silver-coin-values/junk-silver"
                className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-4 hover:bg-slate-100 transition-colors group"
              >
                <h3 className="font-bold text-slate-900 group-hover:text-[#B22234] transition-colors">Junk Silver</h3>
                <p className="text-sm text-slate-600">Constitutional silver</p>
              </Link>
              <Link
                href="/silver-coin-values"
                className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-4 hover:bg-slate-100 transition-colors group"
              >
                <h3 className="font-bold text-slate-900 group-hover:text-[#B22234] transition-colors">All Coin Values</h3>
                <p className="text-sm text-slate-600">Complete guide</p>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Now You Know the Value - What's Next?"
            subheadline="Understanding silver melt values is the first step to building real wealth. Augusta Precious Metals can help you add IRA-eligible silver and gold to your retirement account. Get a free consultation and learn how precious metals can protect your future."
            linkContext="silver"
            trackSource="melt-value-calculator"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
