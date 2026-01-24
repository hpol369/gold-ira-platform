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
        styles: "bg-blue-500/10 border-blue-500/20 text-blue-300",
        iconColor: "text-blue-400",
    },
    tip: {
        icon: CheckCircle2,
        styles: "bg-amber-500/10 border-amber-500/20 text-amber-300",
        iconColor: "text-amber-400",
    },
    warning: {
        icon: AlertTriangle,
        styles: "bg-orange-500/10 border-orange-500/20 text-orange-300",
        iconColor: "text-orange-400",
    },
    success: {
        icon: CheckCircle2,
        styles: "bg-green-500/10 border-green-500/20 text-green-300",
        iconColor: "text-green-400",
    },
};

export function Callout({ type = "info", title, children, className }: CalloutProps) {
    const Variant = variants[type];
    const Icon = Variant.icon;

    return (
        <div className={cn("rounded-xl border p-6 my-8", Variant.styles, className)}>
            <div className="flex items-start gap-4">
                <div className={cn("p-2 rounded-full bg-white/10 shrink-0", Variant.iconColor)}>
                    <Icon className="h-5 w-5" />
                </div>
                <div>
                    <h4 className="font-bold mb-2 text-lg text-white">{title}</h4>
                    <div className="text-sm leading-relaxed opacity-90 space-y-2">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
