// src/components/reviews/ProsConsList.tsx
// P1-020: Pros and cons display component

import { CheckCircle2, XCircle, ThumbsUp, ThumbsDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProsConsListProps {
  pros: string[];
  cons: string[];
  variant?: "default" | "compact" | "detailed";
  className?: string;
}

export function ProsConsList({
  pros,
  cons,
  variant = "default",
  className,
}: ProsConsListProps) {
  if (variant === "compact") {
    return (
      <div className={cn("grid md:grid-cols-2 gap-4", className)}>
        {/* Pros */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-green-700 font-semibold text-sm mb-2">
            <ThumbsUp className="h-4 w-4" />
            Pros
          </div>
          {pros.slice(0, 3).map((pro, index) => (
            <div key={index} className="flex items-start gap-2 text-sm text-slate-700">
              <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
              <span>{pro}</span>
            </div>
          ))}
        </div>

        {/* Cons */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-red-700 font-semibold text-sm mb-2">
            <ThumbsDown className="h-4 w-4" />
            Cons
          </div>
          {cons.slice(0, 3).map((con, index) => (
            <div key={index} className="flex items-start gap-2 text-sm text-slate-700">
              <XCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
              <span>{con}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("grid md:grid-cols-2 gap-6", className)}>
      {/* Pros */}
      <div className="bg-green-50 rounded-xl p-6 border border-green-200">
        <div className="flex items-center gap-2 text-green-800 font-bold text-lg mb-4">
          <div className="p-2 bg-green-100 rounded-lg">
            <ThumbsUp className="h-5 w-5" />
          </div>
          Pros
        </div>
        <ul className="space-y-3">
          {pros.map((pro, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-green-900">{pro}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Cons */}
      <div className="bg-red-50 rounded-xl p-6 border border-red-200">
        <div className="flex items-center gap-2 text-red-800 font-bold text-lg mb-4">
          <div className="p-2 bg-red-100 rounded-lg">
            <ThumbsDown className="h-5 w-5" />
          </div>
          Cons
        </div>
        <ul className="space-y-3">
          {cons.map((con, index) => (
            <li key={index} className="flex items-start gap-3">
              <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <span className="text-red-900">{con}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Quick summary version for cards
interface QuickProsConsProps {
  pros: string[];
  cons: string[];
  limit?: number;
}

export function QuickProsCons({ pros, cons, limit = 3 }: QuickProsConsProps) {
  return (
    <div className="flex flex-col gap-2">
      {pros.slice(0, limit).map((pro, index) => (
        <div key={`pro-${index}`} className="flex items-center gap-2 text-sm">
          <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
          <span className="text-slate-700 truncate">{pro}</span>
        </div>
      ))}
      {cons.slice(0, 1).map((con, index) => (
        <div key={`con-${index}`} className="flex items-center gap-2 text-sm">
          <XCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
          <span className="text-slate-700 truncate">{con}</span>
        </div>
      ))}
    </div>
  );
}
