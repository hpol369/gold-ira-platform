import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function TrustBadges() {
    const logos = [
        { name: "Forbes", width: 100 },
        { name: "CNBC", width: 80 },
        { name: "Bloomberg", width: 110 },
        { name: "Fox Business", width: 90 },
        { name: "Morningstar", width: 120 },
    ];

    return (
        <section className="py-12 border-y border-white/5 bg-slate-800/30">
            <Container>
                <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">
                    Insights Featured In
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-70 transition-all duration-500">
                    {logos.map((logo, i) => (
                        <div
                            key={i}
                            className="font-serif font-bold text-2xl text-slate-500 hover:text-amber-400 transition-colors cursor-default"
                        >
                            {logo.name}
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
