// src/components/seo/AnswerFirst.tsx
// GEO-optimized "answer-first" block for AI snippet extraction
// Places the direct answer in the first 2-3 sentences of a page

interface AnswerFirstProps {
  /** The direct answer to the page's target query (1-3 sentences) */
  answer: string;
  /** Optional TL;DR bullet points */
  keyFacts?: string[];
  /** Light or dark theme */
  variant?: "light" | "dark";
  className?: string;
}

export function AnswerFirst({
  answer,
  keyFacts,
  variant = "light",
  className = "",
}: AnswerFirstProps) {
  const isLight = variant === "light";

  return (
    <div
      className={`rounded-xl p-5 md:p-6 ${
        isLight
          ? "bg-amber-50 border border-amber-200"
          : "bg-white/5 backdrop-blur-xl border border-amber-500/20"
      } ${className}`}
    >
      <p
        className={`text-base md:text-lg leading-relaxed font-medium ${
          isLight ? "text-slate-800" : "text-slate-200"
        }`}
      >
        {answer}
      </p>
      {keyFacts && keyFacts.length > 0 && (
        <ul className="mt-4 space-y-2">
          {keyFacts.map((fact, i) => (
            <li
              key={i}
              className={`flex items-start gap-2 text-sm ${
                isLight ? "text-slate-700" : "text-slate-300"
              }`}
            >
              <span className="flex-shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span>{fact}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
