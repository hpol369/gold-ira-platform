import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "secondary" | "destructive" | "outline" | "gold" | "neutral"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
    const variants = {
        default: "border-[rgba(197,149,46,0.35)] bg-[rgba(197,149,46,0.12)] text-[#D4A94E]",
        gold: "border-[rgba(197,149,46,0.35)] bg-[rgba(197,149,46,0.12)] text-[#D4A94E]",
        secondary: "border-[#2A2D42] bg-[rgba(255,255,255,0.04)] text-[#D0CCC4]",
        neutral: "border-[#2A2D42] bg-[rgba(255,255,255,0.04)] text-[#D0CCC4]",
        destructive: "border-[rgba(220,38,38,0.35)] bg-[rgba(220,38,38,0.12)] text-[#FCA5A5]",
        outline: "border-[#2A2D42] text-[#D0CCC4] bg-transparent",
    }

    return (
        <div
            className={cn(
                "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5952E] focus:ring-offset-2 focus:ring-offset-[#0C0D18]",
                variants[variant],
                className
            )}
            {...props}
        />
    )
}

export { Badge }
