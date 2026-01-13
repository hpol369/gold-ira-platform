import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

interface RelatedArticle {
    title: string;
    href: string;
}

interface RelatedReadsProps {
    articles: RelatedArticle[];
}

export function RelatedReads({ articles }: RelatedReadsProps) {
    return (
        <div className="bg-white rounded-xl border border-gray-100 p-8 my-12 shadow-sm not-prose">
            <div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-4">
                <BookOpen className="w-5 h-5 text-secondary" />
                <h3 className="text-lg font-serif font-bold text-primary m-0">Read This Next</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                {articles.map((article, idx) => (
                    <Link
                        key={idx}
                        href={article.href}
                        className="group flex flex-col gap-2 p-4 rounded-lg hover:bg-background-subtle transition-colors border border-transparent hover:border-gray-100"
                    >
                        <span className="font-semibold text-primary group-hover:text-secondary transition-colors line-clamp-2">
                            {article.title}
                        </span>
                        <span className="text-xs font-bold text-text-muted flex items-center gap-1 uppercase tracking-widest mt-auto">
                            Read Article <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
