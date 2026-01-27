"use client";

import { CheckCircle, XCircle, Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface Product {
  name: string;
  country?: string;
  purity: string;
}

interface LPApprovedProductsProps {
  className?: string;
}

const approvedCoins: Product[] = [
  { name: "American Silver Eagle", country: "USA", purity: ".999" },
  { name: "Canadian Silver Maple Leaf", country: "Canada", purity: ".9999" },
  { name: "Austrian Silver Philharmonic", country: "Austria", purity: ".999" },
  { name: "Australian Silver Kangaroo", country: "Australia", purity: ".9999" },
  { name: "British Silver Britannia", country: "UK", purity: ".999" },
];

const approvedBars: Product[] = [
  { name: "PAMP Suisse Silver Bars", purity: ".999" },
  { name: "Johnson Matthey Silver Bars", purity: ".999" },
  { name: "Engelhard Silver Bars", purity: ".999" },
  { name: "Credit Suisse Silver Bars", purity: ".999" },
  { name: "Valcambi Silver Bars", purity: ".999" },
];

const notAllowed = [
  "Collectible/numismatic coins",
  ".925 sterling silver",
  "Junk silver (90% constitutional)",
  "Silver stored at home",
  "Silver jewelry or silverware",
];

export function LPApprovedProducts({ className }: LPApprovedProductsProps) {
  return (
    <section className={cn("bg-slate-900 py-12 md:py-16", className)}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* IRS Requirements */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-400 text-sm font-medium">
            <Info className="h-4 w-4" />
            IRS Requirements
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            IRA-Approved Silver Products
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            The IRS requires silver in an IRA to be at least .999 fine (99.9% pure) and produced by an accredited refiner.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Approved Coins */}
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-white/10 bg-white/5">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                Approved Silver Coins
              </h3>
            </div>
            <div className="p-4">
              <div className="space-y-3">
                {approvedCoins.map((coin) => (
                  <div
                    key={coin.name}
                    className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/[0.07] transition-colors"
                  >
                    <div>
                      <div className="text-white font-medium">{coin.name}</div>
                      {coin.country && (
                        <div className="text-slate-400 text-sm">{coin.country}</div>
                      )}
                    </div>
                    <div className="text-amber-400 font-mono text-xs md:text-sm bg-amber-500/10 px-2 py-1 rounded">
                      {coin.purity}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Approved Bars */}
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-white/10 bg-white/5">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                Approved Silver Bars
              </h3>
            </div>
            <div className="p-4">
              <div className="space-y-3">
                {approvedBars.map((bar) => (
                  <div
                    key={bar.name}
                    className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/[0.07] transition-colors"
                  >
                    <div className="text-white font-medium">{bar.name}</div>
                    <div className="text-amber-400 font-mono text-xs md:text-sm bg-amber-500/10 px-2 py-1 rounded">
                      {bar.purity}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* What's Not Allowed */}
        <div className="rounded-xl border border-red-400/20 bg-red-500/5 p-6">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <XCircle className="h-5 w-5 text-red-400" />
            What&apos;s NOT Allowed in a Silver IRA
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {notAllowed.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-slate-300 text-sm"
              >
                <XCircle className="h-4 w-4 text-red-400 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Storage Note */}
        <div className="mt-6 p-4 rounded-lg border border-amber-400/20 bg-amber-500/5 flex items-start gap-3">
          <Info className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div className="text-slate-300 text-sm">
            <span className="text-white font-medium">Important:</span> All IRA silver must be stored in an IRS-approved depository. Home storage is not permitted. Augusta partners with Brink&apos;s and Delaware Depository for secure, insured storage.
          </div>
        </div>
      </div>
    </section>
  );
}
