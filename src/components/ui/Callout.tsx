import { CheckCircle2, Info, AlertTriangle } from "lucide-react";
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
        styles: "bg-[rgba(59,130,246,0.08)] border-[rgba(59,130,246,0.32)] text-[#D0CCC4]",
        iconBg: "bg-[rgba(59,130,246,0.12)] border border-[rgba(59,130,246,0.32)]",
        iconColor: "text-[#93C5FD]",
        titleColor: "text-[#F6F4EF]",
    },
    tip: {
        icon: CheckCircle2,
        styles: "bg-[rgba(197,149,46,0.08)] border-[rgba(197,149,46,0.32)] text-[#D0CCC4]",
        iconBg: "bg-[rgba(197,149,46,0.12)] border border-[rgba(197,149,46,0.32)]",
        iconColor: "text-[#D4A94E]",
        titleColor: "text-[#F6F4EF]",
    },
    warning: {
        icon: AlertTriangle,
        styles: "bg-[rgba(183,121,31,0.08)] border-[rgba(183,121,31,0.32)] text-[#D0CCC4]",
        iconBg: "bg-[rgba(183,121,31,0.12)] border border-[rgba(183,121,31,0.32)]",
        iconColor: "text-[#E8BE74]",
        titleColor: "text-[#F6F4EF]",
    },
    success: {
        icon: CheckCircle2,
        styles: "bg-[rgba(46,139,87,0.08)] border-[rgba(46,139,87,0.32)] text-[#D0CCC4]",
        iconBg: "bg-[rgba(46,139,87,0.12)] border border-[rgba(46,139,87,0.32)]",
        iconColor: "text-[#86EFAC]",
        titleColor: "text-[#F6F4EF]",
    },
};

export function Callout({ type = "info", title, children, className }: CalloutProps) {
    const Variant = variants[type];
    const Icon = Variant.icon;

    return (
        <div className={cn("rounded-xl border p-6 my-8", Variant.styles, className)}>
            <div className="flex items-start gap-4">
                <div className={cn("p-2 rounded-lg shrink-0", Variant.iconBg)}>
                    <Icon className={cn("h-5 w-5", Variant.iconColor)} />
                </div>
                <div>
                    <h4 className={cn("font-serif font-semibold mb-2 text-lg tracking-[-0.01em]", Variant.titleColor)}>{title}</h4>
                    <div className="text-[14px] leading-[1.65] text-[#D0CCC4] space-y-2">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
