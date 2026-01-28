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
        <header className="bg-slate-50 py-16 md:py-20 relative overflow-hidden border-b border-slate-200">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#000080]/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-slate-200/50 rounded-full blur-[100px]" />
            </div>

            <Container className="relative z-10">
                <div className="max-w-3xl">
                    {badge && (
                        <div className="flex items-center gap-2 text-[#B22234] font-bold tracking-widest uppercase text-xs mb-4">
                            {BadgeIcon && <BadgeIcon className="h-4 w-4" />}
                            {badge}
                        </div>
                    )}
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#000080]">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-xl text-slate-600 leading-relaxed mb-8">
                            {subtitle}
                        </p>
                    )}
                    {children}
                </div>
            </Container>
        </header>
    );
}
