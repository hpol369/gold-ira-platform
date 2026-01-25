"use client";

import { useMemo } from "react";
import { Quote } from "lucide-react";
import {
  expertQuotes,
  getFeaturedQuotes,
  getQuotesByCategory,
  getRandomQuotes,
  type ExpertQuote,
} from "@/config/expert-quotes";

interface ExpertQuotesProps {
  variant?: "single" | "grid" | "carousel";
  category?: ExpertQuote["category"];
  featured?: boolean;
  count?: number;
  className?: string;
}

export function ExpertQuotes({
  variant = "single",
  category,
  featured,
  count = 3,
  className = "",
}: ExpertQuotesProps) {
  const quotes = useMemo(() => {
    if (featured) {
      return getFeaturedQuotes().slice(0, count);
    }
    if (category) {
      return getQuotesByCategory(category).slice(0, count);
    }
    return getRandomQuotes(count);
  }, [category, featured, count]);

  if (quotes.length === 0) return null;

  // Single quote display
  if (variant === "single") {
    const quote = quotes[0];
    return (
      <div
        className={`bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 rounded-2xl p-6 md:p-8 ${className}`}
      >
        <Quote className="h-8 w-8 text-amber-400/30 mb-4" />
        <blockquote className="text-xl md:text-2xl text-white font-medium italic leading-relaxed mb-6">
          &ldquo;{quote.quote}&rdquo;
        </blockquote>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center">
            <span className="text-amber-400 font-bold text-lg">
              {quote.author[0]}
            </span>
          </div>
          <div>
            <div className="text-white font-semibold">{quote.author}</div>
            <div className="text-slate-400 text-sm">
              {quote.title}
              {quote.organization && `, ${quote.organization}`}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Grid of quotes
  if (variant === "grid") {
    return (
      <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
        {quotes.map((quote) => (
          <div
            key={quote.id}
            className="bg-white/5 border border-white/10 rounded-xl p-6"
          >
            <Quote className="h-6 w-6 text-amber-400/30 mb-3" />
            <blockquote className="text-slate-300 italic mb-4 line-clamp-4">
              &ldquo;{quote.quote}&rdquo;
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-amber-400 font-bold text-sm">
                  {quote.author[0]}
                </span>
              </div>
              <div>
                <div className="text-white text-sm font-semibold">
                  {quote.author}
                </div>
                <div className="text-slate-500 text-xs">{quote.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Carousel/slider (simplified horizontal scroll)
  return (
    <div className={`overflow-x-auto pb-4 -mx-4 px-4 ${className}`}>
      <div className="flex gap-4" style={{ minWidth: "max-content" }}>
        {quotes.map((quote) => (
          <div
            key={quote.id}
            className="bg-white/5 border border-white/10 rounded-xl p-5 w-80 flex-shrink-0"
          >
            <Quote className="h-5 w-5 text-amber-400/30 mb-2" />
            <blockquote className="text-slate-300 text-sm italic mb-3 line-clamp-3">
              &ldquo;{quote.quote}&rdquo;
            </blockquote>
            <div className="text-white text-sm font-semibold">
              — {quote.author}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Simple inline quote for embedding in content
export function InlineQuote({ quoteId }: { quoteId: string }) {
  const quote = expertQuotes.find((q) => q.id === quoteId);
  if (!quote) return null;

  return (
    <blockquote className="border-l-4 border-amber-500 pl-4 my-6 py-2">
      <p className="text-slate-300 italic">&ldquo;{quote.quote}&rdquo;</p>
      <footer className="text-slate-500 text-sm mt-2">
        — {quote.author}, {quote.title}
      </footer>
    </blockquote>
  );
}
