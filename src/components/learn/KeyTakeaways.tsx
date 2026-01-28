import { Lightbulb } from "lucide-react";

interface KeyTakeawaysProps {
    items: string[];
}

export function KeyTakeaways({ items }: KeyTakeawaysProps) {
    return (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm my-8">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-amber-100 rounded-xl text-amber-700 border border-amber-200">
                    <Lightbulb className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#000080]">Key Takeaways</h3>
            </div>
            <ul className="space-y-4">
                {items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-sm font-bold flex items-center justify-center mt-0.5 border border-amber-200">
                            {idx + 1}
                        </span>
                        <span className="text-slate-700 leading-relaxed font-medium">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
