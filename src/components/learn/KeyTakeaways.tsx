import { Lightbulb } from "lucide-react";

interface KeyTakeawaysProps {
    items: string[];
}

export function KeyTakeaways({ items }: KeyTakeawaysProps) {
    return (
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6
                        shadow-[0_8px_32px_rgba(0,0,0,0.3)] my-8">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-amber-500/20 rounded-xl text-amber-400 border border-amber-500/20">
                    <Lightbulb className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-serif font-bold text-white">Key Takeaways</h3>
            </div>
            <ul className="space-y-4">
                {items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 text-sm font-bold flex items-center justify-center mt-0.5 border border-amber-500/20">
                            {idx + 1}
                        </span>
                        <span className="text-slate-300 leading-relaxed font-medium">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
