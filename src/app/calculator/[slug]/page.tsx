import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WealthCalculator } from "@/components/home/WealthCalculator";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { Container } from "@/components/ui/Container";
import { Shield, Award, Star, Users, CheckCircle } from "lucide-react";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const resolvedParams = await params;
    const { amount, age } = parseSlug(resolvedParams.slug);

    if (!amount) {
        return {
            title: "Retirement Calculator | Rich Dad Retirement",
            description: "Calculate if you have enough to retire and protect your savings from inflation."
        };
    }

    const formattedAmount = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    }).format(amount);

    return {
        title: `Is ${formattedAmount} Enough to Retire at ${age}? - Reality Check`,
        description: `See exactly how long ${formattedAmount} will last in retirement when adjusted for inflation. Don't guess with your future.`
    };
}

export default async function CalculatorPage({ params }: { params: Params }) {
    const resolvedParams = await params;
    const { amount, age, isValid } = parseSlug(resolvedParams.slug);

    // If slug is totally invalid (doesn't match pattern at all), 404
    // But if it's just missing some parts, we might default. 
    // For now, let's be strict on the structure to avoid duplicate content issues.
    if (!isValid) {
        notFound();
    }

    // Default to 25 years horizon if retiring at standard age, 
    // or calculate based on life expectancy of 85.
    const lifeExpectancy = 85;
    const timeHorizon = Math.max(10, lifeExpectancy - age);

    const formattedAmount = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    }).format(amount);

    return (
        <main className="min-h-screen flex flex-col bg-slate-50">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-24 pb-12 bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto text-center mb-8">
                        <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-700 text-xs font-bold tracking-wider uppercase mb-4">
                            Inflation Reality Check
                        </span>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#000080] mb-6 leading-tight">
                            Is <span className="text-[#B22234] border-b-4 border-[#B22234]/20">{formattedAmount}</span> Enough to Retire at {age}?
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
                            The answer depends on the one "hidden tax" that could wipe out <strong className="text-slate-900">40% of your purchasing power</strong> in the next {timeHorizon} years.
                        </p>
                    </div>

                    {/* Trust Bar */}
                    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 py-6 border-t border-b border-slate-200 mt-8">
                        <div className="flex items-center gap-2 text-slate-500">
                            <Shield className="w-5 h-5 text-green-600" />
                            <span className="text-sm font-semibold">A+ BBB Rating</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-500">
                            <Award className="w-5 h-5 text-amber-500" />
                            <span className="text-sm font-semibold">Money Magazine #1</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-500">
                            <Star className="w-5 h-5 text-[#B22234] fill-current" />
                            <span className="text-sm font-semibold">4.9/5 (1,847 Reviews)</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-500">
                            <Users className="w-5 h-5 text-blue-600" />
                            <span className="text-sm font-semibold">Trusted by Joe Montana</span>
                        </div>
                    </div>
                </Container>
            </section>

            {/* The Calculator */}
            <WealthCalculator initialAmount={amount} initialYears={timeHorizon} />

            {/* The Bridge / Solution */}
            <section className="py-24 bg-slate-900 text-white">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white">
                                    The "Cash Trap"
                                </h2>
                                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                                    Most retirement calculators assume your dollars will buy the same amount of groceries in 20 years as they do today.
                                </p>
                                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                                    <strong className="text-amber-400">They are wrong.</strong>
                                </p>
                                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                                    As the government prints more money, your {formattedAmount} stays numerically the same, but its <em>value</em> quietly disappears. This is why standard 401(k)s often fail to protect retirees.
                                </p>
                            </div>
                            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 relative">
                                <div className="absolute -top-4 -left-4 bg-[#B22234] text-white px-4 py-2 font-bold rounded-lg shadow-lg">
                                    The Solution
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-amber-400">
                                    The Gold IRA Hedge
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex gap-3">
                                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                                            <span className="text-green-500 font-bold">✓</span>
                                        </div>
                                        <span className="text-slate-200">Zero Tax Consequences (Rollover)</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                                            <span className="text-green-500 font-bold">✓</span>
                                        </div>
                                        <span className="text-slate-200">Moves in Opposite Direction of Dollar</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                                            <span className="text-green-500 font-bold">✓</span>
                                        </div>
                                        <span className="text-slate-200">Physical Asset You Control</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Social Proof Section */}
            <section className="py-16 bg-white border-t border-slate-200">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] mb-4">
                                Why 23,000+ Americans Trust Augusta
                            </h2>
                            <p className="text-slate-600">
                                Real reviews from verified customers protecting their retirement
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {/* Testimonial 1 */}
                            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                                <div className="flex gap-1 mb-3">
                                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />)}
                                </div>
                                <p className="text-slate-600 text-sm mb-4 italic">
                                    "Finally someone who explained the inflation risk without trying to scare me into buying. Augusta educated me first."
                                </p>
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-[#000080] rounded-full flex items-center justify-center text-white text-sm font-bold">R</div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-800">Robert M.</p>
                                        <p className="text-xs text-slate-500">Retired, Texas</p>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial 2 */}
                            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                                <div className="flex gap-1 mb-3">
                                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />)}
                                </div>
                                <p className="text-slate-600 text-sm mb-4 italic">
                                    "I had $1.2M in my 401k and was worried about a crash. The rollover took 3 weeks and I never paid a dime in taxes."
                                </p>
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-[#B22234] rounded-full flex items-center justify-center text-white text-sm font-bold">S</div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-800">Susan K.</p>
                                        <p className="text-xs text-slate-500">Retired Teacher, Florida</p>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial 3 - Joe Montana */}
                            <div className="bg-gradient-to-br from-[#000080] to-[#000060] rounded-xl p-6 text-white">
                                <div className="flex gap-1 mb-3">
                                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />)}
                                </div>
                                <p className="text-blue-100 text-sm mb-4 italic">
                                    "I know what it takes to prepare for the big game. That's why I chose Augusta for my retirement."
                                </p>
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center text-[#000080] text-sm font-bold">JM</div>
                                    <div>
                                        <p className="text-sm font-semibold text-white">Joe Montana</p>
                                        <p className="text-xs text-blue-200">NFL Hall of Fame QB</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap justify-center items-center gap-8 mt-12 pt-8 border-t border-slate-200">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-[#000080]">A+</div>
                                <div className="text-xs text-slate-500">BBB Rating</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-[#000080]">AAA</div>
                                <div className="text-xs text-slate-500">BCA Rating</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-[#000080]">4.9</div>
                                <div className="text-xs text-slate-500">Trustpilot</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-[#000080]">#1</div>
                                <div className="text-xs text-slate-500">Money Magazine 2024</div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-slate-50">
                <Container>
                    <AugustaCTA
                        variant="default"
                        trackSource={`calc-${amount}-at-${age}`}
                        headline="Protect Your Retirement Now"
                        subheadline={`Don't let inflation eat your ${formattedAmount}. Get the free guide trusted by Joe Montana.`}
                    />
                </Container>
            </section>

            <Footer />
        </main>
    );
}

/**
 * Parses URL slugs like:
 * - is-1.5-million-enough-to-retire-at-60
 * - can-i-retire-with-500k-at-55
 * - is-2-million-enough-to-retire-at-65
 */
function parseSlug(slug: string): { amount: number; age: number; isValid: boolean } {
    try {
        // Normalize
        const cleanSlug = slug.toLowerCase();

        // Extract Age (looks for "at-XX")
        const ageMatch = cleanSlug.match(/at-(\d{2})/);
        const age = ageMatch ? parseInt(ageMatch[1]) : 60; // Default to 60 if not found

        // Extract Amount
        let amount = 0;

        // Pattern: Number + "Million"
        const millionMatch = cleanSlug.match(/([\d\.]+)-million/);
        if (millionMatch) {
            amount = parseFloat(millionMatch[1]) * 1_000_000;
        }

        // Pattern: Number + "k" (e.g. 500k)
        if (!amount) {
            const kMatch = cleanSlug.match(/(\d+)k/);
            if (kMatch) {
                amount = parseInt(kMatch[1]) * 1_000;
            }
        }

        // Pattern: plain number match (fallback, dangerous if year is picked up)
        // Let's stick to explicit patterns for safety.

        // Default valid range check
        if (amount < 5000 || amount > 100_000_000 || age < 18 || age > 100) {
            return { amount: 100000, age: 60, isValid: false };
        }

        return { amount, age, isValid: true };

    } catch (e) {
        return { amount: 100000, age: 60, isValid: false };
    }
}
