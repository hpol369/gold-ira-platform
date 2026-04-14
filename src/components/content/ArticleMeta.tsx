import Link from "next/link";
import { Clock, Users, ShieldCheck } from "lucide-react";

interface ArticleMetaProps {
  author?: string;
  authorUrl?: string;
  reviewer?: string;
  reviewerUrl?: string;
  publishDate: string;
  updateDate: string;
  readTime?: string;
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function ArticleMeta({
  author = "Rich Dad Retirement Editorial Team",
  authorUrl = "/editorial-board",
  reviewer = "Editorial Board",
  reviewerUrl = "/editorial-board",
  publishDate,
  updateDate,
  readTime,
}: ArticleMetaProps) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500 border-b border-slate-200 pb-4 mb-6">
      <span className="inline-flex items-center gap-1.5">
        <Users className="h-3.5 w-3.5" />
        <span>By{" "}
          <Link href={authorUrl} className="text-slate-700 font-medium hover:text-[#B22234] transition-colors">
            {author}
          </Link>
        </span>
      </span>

      <span className="text-slate-300">|</span>

      <span className="inline-flex items-center gap-1.5">
        <Clock className="h-3.5 w-3.5" />
        Updated {formatDate(updateDate)}
      </span>

      {reviewer && (
        <>
          <span className="text-slate-300">|</span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-green-600" />
            <span>Reviewed by{" "}
              <Link href={reviewerUrl || "/editorial-board"} className="text-slate-700 font-medium hover:text-[#B22234] transition-colors">
                {reviewer}
              </Link>
            </span>
          </span>
        </>
      )}

      {readTime && (
        <>
          <span className="text-slate-300">|</span>
          <span>{readTime} read</span>
        </>
      )}
    </div>
  );
}
