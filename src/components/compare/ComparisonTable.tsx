import { Check, X, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ComparisonRow {
    feature: string;
    optionA: string | boolean;
    optionB: string | boolean;
    winner?: "A" | "B" | "Tie";
}

interface ComparisonTableProps {
    optionAName: string;
    optionBName: string;
    rows: ComparisonRow[];
}

export function ComparisonTable({ optionAName, optionBName, rows }: ComparisonTableProps) {
    const renderValue = (value: string | boolean, isWinner: boolean) => {
        if (typeof value === "boolean") {
            return value ? (
                <Check className={cn("w-6 h-6 mx-auto", isWinner ? "text-green-600" : "text-gray-400")} />
            ) : (
                <X className="w-6 h-6 mx-auto text-red-400" />
            );
        }
        return <span className={cn(isWinner ? "font-bold text-green-700" : "text-gray-600")}>{value}</span>;
    };

    return (
        <div className="overflow-x-auto my-12 rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-center border-collapse bg-white">
                <thead>
                    <tr className="bg-gray-50">
                        <th className="p-4 text-left font-bold text-primary w-1/3">Feature</th>
                        <th className="p-4 font-bold text-primary w-1/3 bg-blue-50/50">{optionAName}</th>
                        <th className="p-4 font-bold text-primary w-1/3 bg-gold-50/20">{optionBName}</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {rows.map((row, idx) => (
                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                            <td className="p-4 text-left font-medium text-gray-700">{row.feature}</td>
                            <td className={cn("p-4", row.winner === "A" ? "bg-green-50/30" : "")}>
                                {renderValue(row.optionA, row.winner === "A")}
                            </td>
                            <td className={cn("p-4 border-l border-gray-50", row.winner === "B" ? "bg-green-50/30" : "")}>
                                {renderValue(row.optionB, row.winner === "B")}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
