import { Check, X } from "lucide-react";

interface ProsConsProps {
    pros: string[];
    cons: string[];
}

export function ProsCons({ pros, cons }: ProsConsProps) {
    return (
        <div className="grid md:grid-cols-2 gap-6 my-12 not-prose">
            {/* Pros */}
            <div className="bg-green-50/50 border border-green-100 rounded-2xl p-6">
                <h3 className="font-bold text-green-800 text-lg mb-4 flex items-center gap-2">
                    <div className="bg-green-100 p-1.5 rounded-full">
                        <Check className="w-4 h-4 text-green-700" strokeWidth={3} />
                    </div>
                    The Good
                </h3>
                <ul className="space-y-3">
                    {pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                            <Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                            <span>{pro}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Cons */}
            <div className="bg-red-50/50 border border-red-100 rounded-2xl p-6">
                <h3 className="font-bold text-red-800 text-lg mb-4 flex items-center gap-2">
                    <div className="bg-red-100 p-1.5 rounded-full">
                        <X className="w-4 h-4 text-red-700" strokeWidth={3} />
                    </div>
                    The Bad
                </h3>
                <ul className="space-y-3">
                    {cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                            <X className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                            <span>{con}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
