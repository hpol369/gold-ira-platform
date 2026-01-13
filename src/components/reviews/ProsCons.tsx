import { Check, X } from "lucide-react";

interface ProsConsProps {
    pros: string[];
    cons: string[];
}

export function ProsCons({ pros, cons }: ProsConsProps) {
    return (
        <div className="grid md:grid-cols-2 gap-8 my-12">
            <div className="bg-green-50/50 rounded-2xl p-8 border border-green-100">
                <h3 className="text-xl font-bold text-green-800 mb-6 flex items-center gap-2">
                    <div className="p-1.5 bg-green-100 rounded-full">
                        <Check className="w-5 h-5 text-green-600" />
                    </div>
                    The Good
                </h3>
                <ul className="space-y-4">
                    {pros.map((pro, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700 leading-relaxed font-medium">{pro}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="bg-red-50/50 rounded-2xl p-8 border border-red-100">
                <h3 className="text-xl font-bold text-red-800 mb-6 flex items-center gap-2">
                    <div className="p-1.5 bg-red-100 rounded-full">
                        <X className="w-5 h-5 text-red-600" />
                    </div>
                    The Bad
                </h3>
                <ul className="space-y-4">
                    {cons.map((con, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                            <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700 leading-relaxed font-medium">{con}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
