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
        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8 my-12 shadow-sm not-prose">
            <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
                <BookOpen className="w-5 h-5 text-amber-400" />
                <h3 className="text-lg font-serif font-bold text-white m-0">Read This Next</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                {articles.map((article, idx) => (
                    <Link
                        key={idx}
                        href={article.href}
                        className="group flex flex-col gap-2 p-4 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                    >
                        <span className="font-semibold text-white group-hover:text-amber-400 transition-colors line-clamp-2">
                            {article.title}
                        </span>
                        <span className="text-xs font-bold text-slate-400 flex items-center gap-1 uppercase tracking-widest mt-auto">
                            Read Article <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
