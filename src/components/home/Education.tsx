import Link from "next/link";
import { BookOpen, FileText, Globe } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

const resources = [
    {
        icon: BookOpen,
        title: "The Rich Dad Strategy",
        description: "Why 'savers are losers' and how to build real wealth with physical assets.",
        href: "/rich-dad-strategy"
    },
    {
        icon: FileText,
        title: "2026 Tax Rules",
        description: "Updated contribution limits and distribution rules for Precious Metals IRAs.",
        href: "/tax-rules"
    },
    {
        icon: Globe,
        title: "Physical vs. Paper Gold",
        description: "Why ETFs might not offer the same protection as physical bullion in a crisis.",
        href: "/physical-vs-paper"
    }
];

export function Education() {
    return (
        <section className="py-24 bg-primary text-white">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Educational Resources</h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Knowledge is your best investment. Explore our expert guides to understand the details.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {resources.map((item, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <Link href={item.href} className="block group h-full">
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-colors">
                                    <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center mb-6 text-secondary group-hover:scale-110 transition-transform">
                                        <item.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-bold font-serif mb-3 text-white group-hover:text-secondary transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </Link>
                        </FadeIn>
                    ))}
                </div>
            </Container>
        </section>
    );
}
