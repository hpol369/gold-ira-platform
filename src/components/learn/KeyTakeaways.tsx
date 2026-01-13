import { Lightbulb } from "lucide-react";

interface KeyTakeawaysProps {
    items: string[];
}

export function KeyTakeaways({ items }: KeyTakeawaysProps) {
    return (
        <div className="bg-background-subtle rounded-2xl p-8 border-l-4 border-secondary my-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-white rounded-full text-secondary shadow-sm">
                    <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-primary">Key Takeaways</h3>
            </div>
            <ul className="space-y-4">
                {items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 text-secondary-dark text-sm font-bold flex items-center justify-center mt-0.5">
                            {idx + 1}
                        </span>
                        <span className="text-text-muted leading-relaxed font-medium">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
