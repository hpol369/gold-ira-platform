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
        styles: "bg-blue-50 border-blue-100 text-blue-900",
        iconColor: "text-blue-600",
    },
    tip: {
        icon: CheckCircle2,
        styles: "bg-background-subtle border-secondary/20 text-primary",
        iconColor: "text-secondary",
    },
    warning: {
        icon: AlertTriangle,
        styles: "bg-orange-50 border-orange-100 text-orange-900",
        iconColor: "text-orange-600",
    },
    success: {
        icon: CheckCircle2,
        styles: "bg-green-50 border-green-100 text-green-900",
        iconColor: "text-green-600",
    },
};

export function Callout({ type = "info", title, children, className }: CalloutProps) {
    const Variant = variants[type];
    const Icon = Variant.icon;

    return (
        <div className={cn("rounded-xl border p-6 my-8", Variant.styles, className)}>
            <div className="flex items-start gap-4">
                <div className={cn("p-2 rounded-full bg-white shadow-sm shrink-0", Variant.iconColor)}>
                    <Icon className="h-5 w-5" />
                </div>
                <div>
                    <h4 className="font-bold mb-2 text-lg">{title}</h4>
                    <div className="text-sm leading-relaxed opacity-90 space-y-2">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
