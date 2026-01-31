import { AlertCircle, CheckCircle2, Info, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

interface CalloutProps {
    type?: "info" | "tip" | "warning" | "success";
    title: string;
    children: React.ReactNode;
    className?: string;
}

const variants = {
    info: {
        icon: Info,
        styles: "bg-blue-50 border-blue-200 text-blue-800",
        iconColor: "text-blue-600",
        titleColor: "text-blue-900",
    },
    tip: {
        icon: CheckCircle2,
        styles: "bg-amber-50 border-amber-200 text-amber-800",
        iconColor: "text-amber-600",
        titleColor: "text-amber-900",
    },
    warning: {
        icon: AlertTriangle,
        styles: "bg-orange-50 border-orange-200 text-orange-800",
        iconColor: "text-orange-600",
        titleColor: "text-orange-900",
    },
    success: {
        icon: CheckCircle2,
        styles: "bg-green-50 border-green-200 text-green-800",
        iconColor: "text-green-600",
        titleColor: "text-green-900",
    },
};

export function Callout({ type = "info", title, children, className }: CalloutProps) {
    const Variant = variants[type];
    const Icon = Variant.icon;

    return (
        <div className={cn("rounded-xl border p-6 my-8", Variant.styles, className)}>
            <div className="flex items-start gap-4">
                <div className={cn("p-2 rounded-full bg-white/50 shrink-0", Variant.iconColor)}>
                    <Icon className="h-5 w-5" />
                </div>
                <div>
                    <h4 className={cn("font-bold mb-2 text-lg", Variant.titleColor)}>{title}</h4>
                    <div className="text-sm leading-relaxed opacity-90 space-y-2">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
