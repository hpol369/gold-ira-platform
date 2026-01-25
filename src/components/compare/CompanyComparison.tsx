// src/components/compare/CompanyComparison.tsx
// P1-030: Side-by-side company comparison for Gold IRA companies

import { Company } from "@/data/companies";
import { CheckCircle2, XCircle, Star, Shield, Award, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { getTrackedLink } from "@/config/affiliates";

interface CompanyComparisonProps {
  companyA: Company;
  companyB: Company;
  highlightWinner?: boolean;
}

export function CompanyComparisonTable({
  companyA,
  companyB,
  highlightWinner = true,
}: CompanyComparisonProps) {
  // Determine winners for each category
  const winners = {
    rating: companyA.rating > companyB.rating ? "A" : companyA.rating < companyB.rating ? "B" : "tie",
    minInvestment: companyA.minInvestment < companyB.minInvestment ? "A" : companyA.minInvestment > companyB.minInvestment ? "B" : "tie",
    setupFee: companyA.fees.setup < companyB.fees.setup ? "A" : companyA.fees.setup > companyB.fees.setup ? "B" : "tie",
    annualFee: companyA.fees.annual < companyB.fees.annual ? "A" : companyA.fees.annual > companyB.fees.annual ? "B" : "tie",
    storageFee: companyA.fees.storage < companyB.fees.storage ? "A" : companyA.fees.storage > companyB.fees.storage ? "B" : "tie",
    metals: companyA.metals.length > companyB.metals.length ? "A" : companyA.metals.length < companyB.metals.length ? "B" : "tie",
    reviewCount: companyA.reviewCount > companyB.reviewCount ? "A" : companyA.reviewCount < companyB.reviewCount ? "B" : "tie",
  };

  const getWinnerClass = (winner: string, side: "A" | "B") => {
    if (!highlightWinner || winner === "tie") return "";
    if (winner === side) return "bg-green-50 font-semibold text-green-900";
    return "";
  };

  const getBBBValue = (rating: string) => {
    const ratings = ["F", "D-", "D", "D+", "C-", "C", "C+", "B-", "B", "B+", "A-", "A", "A+"];
    return ratings.indexOf(rating);
  };

  const bbbWinner = getBBBValue(companyA.bbbRating) > getBBBValue(companyB.bbbRating) ? "A" :
    getBBBValue(companyA.bbbRating) < getBBBValue(companyB.bbbRating) ? "B" : "tie";

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-white rounded-xl overflow-hidden border border-slate-200">
        <thead>
          <tr className="bg-slate-100">
            <th className="p-4 text-left font-semibold text-slate-700 border-b border-slate-200 w-1/3">
              Feature
            </th>
            <th className={cn(
              "p-4 text-center border-b border-slate-200 w-1/3",
              companyA.featured ? "bg-amber-50" : ""
            )}>
              <Link href={`/reviews/${companyA.slug}`} className="hover:text-amber-600 transition-colors">
                <div className="font-bold text-slate-900">{companyA.name}</div>
                {companyA.featured && (
                  <div className="inline-flex items-center gap-1 text-xs text-amber-700 mt-1">
                    <Award className="h-3 w-3" />
                    #1 Rated
                  </div>
                )}
              </Link>
            </th>
            <th className={cn(
              "p-4 text-center border-b border-slate-200 w-1/3",
              companyB.featured ? "bg-amber-50" : ""
            )}>
              <Link href={`/reviews/${companyB.slug}`} className="hover:text-amber-600 transition-colors">
                <div className="font-bold text-slate-900">{companyB.name}</div>
                {companyB.featured && (
                  <div className="inline-flex items-center gap-1 text-xs text-amber-700 mt-1">
                    <Award className="h-3 w-3" />
                    #1 Rated
                  </div>
                )}
              </Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Rating */}
          <tr className="border-b border-slate-100">
            <td className="p-4 text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-amber-500" />
                Our Rating
              </div>
            </td>
            <td className={cn("p-4 text-center", getWinnerClass(winners.rating, "A"))}>
              <div className="text-xl font-bold">{companyA.rating}</div>
              <div className="text-xs text-slate-500">/ 5.0</div>
            </td>
            <td className={cn("p-4 text-center", getWinnerClass(winners.rating, "B"))}>
              <div className="text-xl font-bold">{companyB.rating}</div>
              <div className="text-xs text-slate-500">/ 5.0</div>
            </td>
          </tr>

          {/* BBB Rating */}
          <tr className="border-b border-slate-100">
            <td className="p-4 text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-blue-600" />
                BBB Rating
              </div>
            </td>
            <td className={cn("p-4 text-center", getWinnerClass(bbbWinner, "A"))}>
              <span className="text-lg font-bold">{companyA.bbbRating}</span>
            </td>
            <td className={cn("p-4 text-center", getWinnerClass(bbbWinner, "B"))}>
              <span className="text-lg font-bold">{companyB.bbbRating}</span>
            </td>
          </tr>

          {/* Minimum Investment */}
          <tr className="border-b border-slate-100">
            <td className="p-4 text-slate-600 font-medium">Minimum Investment</td>
            <td className={cn("p-4 text-center", getWinnerClass(winners.minInvestment, "A"))}>
              ${companyA.minInvestment.toLocaleString()}
            </td>
            <td className={cn("p-4 text-center", getWinnerClass(winners.minInvestment, "B"))}>
              ${companyB.minInvestment.toLocaleString()}
            </td>
          </tr>

          {/* Setup Fee */}
          <tr className="border-b border-slate-100">
            <td className="p-4 text-slate-600 font-medium">Setup Fee</td>
            <td className={cn("p-4 text-center", getWinnerClass(winners.setupFee, "A"))}>
              {companyA.fees.setup === 0 ? (
                <span className="text-green-600 font-semibold">Free</span>
              ) : (
                `$${companyA.fees.setup}`
              )}
            </td>
            <td className={cn("p-4 text-center", getWinnerClass(winners.setupFee, "B"))}>
              {companyB.fees.setup === 0 ? (
                <span className="text-green-600 font-semibold">Free</span>
              ) : (
                `$${companyB.fees.setup}`
              )}
            </td>
          </tr>

          {/* Annual Fee */}
          <tr className="border-b border-slate-100">
            <td className="p-4 text-slate-600 font-medium">Annual Fee</td>
            <td className={cn("p-4 text-center", getWinnerClass(winners.annualFee, "A"))}>
              ${companyA.fees.annual}
            </td>
            <td className={cn("p-4 text-center", getWinnerClass(winners.annualFee, "B"))}>
              ${companyB.fees.annual}
            </td>
          </tr>

          {/* Storage Fee */}
          <tr className="border-b border-slate-100">
            <td className="p-4 text-slate-600 font-medium">Storage Fee</td>
            <td className={cn("p-4 text-center", getWinnerClass(winners.storageFee, "A"))}>
              ${companyA.fees.storage}
            </td>
            <td className={cn("p-4 text-center", getWinnerClass(winners.storageFee, "B"))}>
              ${companyB.fees.storage}
            </td>
          </tr>

          {/* Metals Offered */}
          <tr className="border-b border-slate-100">
            <td className="p-4 text-slate-600 font-medium">Metals Offered</td>
            <td className={cn("p-4 text-center", getWinnerClass(winners.metals, "A"))}>
              <div className="flex flex-wrap justify-center gap-1">
                {companyA.metals.map((metal) => (
                  <span key={metal} className="px-2 py-0.5 bg-slate-100 text-xs rounded">
                    {metal}
                  </span>
                ))}
              </div>
            </td>
            <td className={cn("p-4 text-center", getWinnerClass(winners.metals, "B"))}>
              <div className="flex flex-wrap justify-center gap-1">
                {companyB.metals.map((metal) => (
                  <span key={metal} className="px-2 py-0.5 bg-slate-100 text-xs rounded">
                    {metal}
                  </span>
                ))}
              </div>
            </td>
          </tr>

          {/* Founded */}
          <tr className="border-b border-slate-100">
            <td className="p-4 text-slate-600 font-medium">Founded</td>
            <td className="p-4 text-center">{companyA.founded}</td>
            <td className="p-4 text-center">{companyB.founded}</td>
          </tr>

          {/* Reviews */}
          <tr className="border-b border-slate-100">
            <td className="p-4 text-slate-600 font-medium">Customer Reviews</td>
            <td className={cn("p-4 text-center", getWinnerClass(winners.reviewCount, "A"))}>
              {companyA.reviewCount.toLocaleString()}
            </td>
            <td className={cn("p-4 text-center", getWinnerClass(winners.reviewCount, "B"))}>
              {companyB.reviewCount.toLocaleString()}
            </td>
          </tr>

          {/* Best For */}
          <tr className="bg-slate-50">
            <td className="p-4 text-slate-600 font-medium">Best For</td>
            <td className="p-4 text-center text-sm text-slate-700">{companyA.bestFor}</td>
            <td className="p-4 text-center text-sm text-slate-700">{companyB.bestFor}</td>
          </tr>

          {/* CTAs */}
          <tr className="bg-slate-100">
            <td className="p-4"></td>
            <td className="p-4 text-center">
              <a
                href={getTrackedLink(companyA.affiliateLink, "compare-component", companyA.slug)}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all",
                  companyA.featured
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700"
                    : "bg-slate-900 text-white hover:bg-slate-800"
                )}
              >
                Visit Site
                <ArrowRight className="h-4 w-4" />
              </a>
            </td>
            <td className="p-4 text-center">
              <a
                href={getTrackedLink(companyB.affiliateLink, "compare-component", companyB.slug)}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all",
                  companyB.featured
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700"
                    : "bg-slate-900 text-white hover:bg-slate-800"
                )}
              >
                Visit Site
                <ArrowRight className="h-4 w-4" />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// Pros/Cons comparison component
interface ProsConsComparisonProps {
  companyA: Company;
  companyB: Company;
}

export function ProsConsComparison({ companyA, companyB }: ProsConsComparisonProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Company A */}
      <div className={cn(
        "rounded-xl p-6 border",
        companyA.featured ? "bg-amber-50 border-amber-200" : "bg-white border-slate-200"
      )}>
        <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
          {companyA.name}
          {companyA.featured && (
            <span className="text-xs bg-amber-500 text-white px-2 py-0.5 rounded-full">#1</span>
          )}
        </h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-green-700 mb-2">Pros</h4>
            <ul className="space-y-2">
              {companyA.pros.map((pro, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-red-700 mb-2">Cons</h4>
            <ul className="space-y-2">
              {companyA.cons.map((con, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <XCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Company B */}
      <div className={cn(
        "rounded-xl p-6 border",
        companyB.featured ? "bg-amber-50 border-amber-200" : "bg-white border-slate-200"
      )}>
        <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
          {companyB.name}
          {companyB.featured && (
            <span className="text-xs bg-amber-500 text-white px-2 py-0.5 rounded-full">#1</span>
          )}
        </h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-green-700 mb-2">Pros</h4>
            <ul className="space-y-2">
              {companyB.pros.map((pro, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-red-700 mb-2">Cons</h4>
            <ul className="space-y-2">
              {companyB.cons.map((con, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <XCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Winner declaration component
interface ComparisonWinnerProps {
  companyA: Company;
  companyB: Company;
}

export function ComparisonWinner({ companyA, companyB }: ComparisonWinnerProps) {
  const winner = companyA.rating > companyB.rating ? companyA :
    companyA.rating < companyB.rating ? companyB : null;

  if (!winner) {
    return (
      <div className="bg-slate-100 rounded-xl p-8 text-center">
        <h3 className="text-xl font-bold text-slate-900 mb-2">It&apos;s a Tie!</h3>
        <p className="text-slate-600">
          Both companies have their strengths. Your choice depends on your specific needs and investment amount.
        </p>
      </div>
    );
  }

  const loser = winner === companyA ? companyB : companyA;

  return (
    <div className={cn(
      "rounded-xl p-8",
      winner.featured
        ? "bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200"
        : "bg-gradient-to-br from-green-50 to-green-100 border border-green-200"
    )}>
      <div className="text-center">
        <div className={cn(
          "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-4",
          winner.featured ? "bg-amber-500 text-white" : "bg-green-600 text-white"
        )}>
          <Award className="h-4 w-4" />
          OUR RECOMMENDATION
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">{winner.name} Wins</h3>
        <p className="text-slate-600 mb-6 max-w-xl mx-auto">
          With a rating of {winner.rating}/5 and {winner.bbbRating} BBB rating, {winner.name} edges out {loser.name} ({loser.rating}/5).
          {winner.featured && " As our #1 overall pick, they offer the best combination of service, fees, and customer satisfaction."}
        </p>
        <a
          href={getTrackedLink(winner.affiliateLink, "compare-component", winner.slug)}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all",
            winner.featured
              ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700 shadow-lg shadow-amber-500/25"
              : "bg-green-600 text-white hover:bg-green-700"
          )}
        >
          Get Started with {winner.name}
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
