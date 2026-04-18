import { Check, X } from "lucide-react";

interface ProsConsProps {
    pros: string[];
    cons: string[];
}

export function ProsCons({ pros, cons }: ProsConsProps) {
    return (
        <div className="grid md:grid-cols-2 gap-6 my-12 not-prose">
            {/* Pros */}
            <div className="bg-[rgba(46,139,87,0.08)] border border-[rgba(46,139,87,0.32)] rounded-2xl p-6">
                <h3 className="font-serif font-bold text-[#86EFAC] text-lg mb-4 flex items-center gap-3 tracking-[-0.01em]">
                    <div className="bg-[rgba(46,139,87,0.2)] border border-[rgba(46,139,87,0.4)] p-1.5 rounded-full">
                        <Check className="w-4 h-4 text-[#86EFAC]" strokeWidth={3} />
                    </div>
                    The Good
                </h3>
                <ul className="space-y-3">
                    {pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-3 text-[#D0CCC4] text-sm leading-[1.6]">
                            <Check className="w-4 h-4 text-[#86EFAC] mt-0.5 shrink-0" />
                            <span>{pro}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Cons */}
            <div className="bg-[rgba(220,38,38,0.06)] border border-[rgba(220,38,38,0.28)] rounded-2xl p-6">
                <h3 className="font-serif font-bold text-[#FCA5A5] text-lg mb-4 flex items-center gap-3 tracking-[-0.01em]">
                    <div className="bg-[rgba(220,38,38,0.15)] border border-[rgba(220,38,38,0.4)] p-1.5 rounded-full">
                        <X className="w-4 h-4 text-[#FCA5A5]" strokeWidth={3} />
                    </div>
                    The Bad
                </h3>
                <ul className="space-y-3">
                    {cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-3 text-[#D0CCC4] text-sm leading-[1.6]">
                            <X className="w-4 h-4 text-[#FCA5A5] mt-0.5 shrink-0" />
                            <span>{con}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
