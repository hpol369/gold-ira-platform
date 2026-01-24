import { Container } from "@/components/ui/Container";
import { LucideIcon } from "lucide-react";

interface PageHeaderProps {
    badge?: string;
    badgeIcon?: LucideIcon;
    title: string;
    subtitle?: string;
    children?: React.ReactNode;
}

export function PageHeader({ badge, badgeIcon: BadgeIcon, title, subtitle, children }: PageHeaderProps) {
    return (
        <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-20 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-slate-700/20 rounded-full blur-[100px]" />
            </div>

            <Container className="relative z-10">
                <div className="max-w-3xl">
                    {badge && (
                        <div className="flex items-center gap-2 text-amber-400 font-bold tracking-widest uppercase text-xs mb-4">
                            {BadgeIcon && <BadgeIcon className="h-4 w-4" />}
                            {badge}
                        </div>
                    )}
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-xl text-slate-300 leading-relaxed mb-8">
                            {subtitle}
                        </p>
                    )}
                    {children}
                </div>
            </Container>
        </header>
    );
}
