import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { StickyMasterSidebar } from "@/components/reviews/StickyMasterSidebar";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { US_STATES } from "@/lib/states";
import { STATE_CONTENT } from "@/lib/state-content";
import { CITIES, getCityBySlug, getCitiesByState, getAllCitySlugs } from "@/lib/cities";
import { getCityContent } from "@/lib/city-content";
import { Metadata } from "next";
import { MapPin, Building2, AlertTriangle, ShieldCheck, CheckCircle2, Users, DollarSign, TrendingUp } from "lucide-react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { AFFILIATE_LINKS, getTrackedLink } from "@/config/affiliates";
import LeadCaptureButton from "@/components/lp/LeadCaptureButton";

export async function generateStaticParams() {
    return getAllCitySlugs();
}

type Props = {
    params: Promise<{ state: string; city: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { state, city } = await params;
    const cityData = getCityBySlug(state, city);
    if (!cityData) return {};

    return {
        title: `Gold IRA in ${cityData.name}, ${cityData.stateName} (2026) | Local Guide`,
        description: `${cityData.name}, ${cityData.stateName} residents: compare local coin shops vs tax-free Gold IRAs. Learn about retirement planning options for ${cityData.name} investors.`,
    };
}

export default async function CityPage({ params }: Props) {
    const { state, city } = await params;
    const cityData = getCityBySlug(state, city);
    const stateData = US_STATES.find(s => s.slug === state);

    if (!cityData || !stateData) {
        notFound();
    }

    const content = getCityContent(state, city);
    const stateContent = STATE_CONTENT[state];
    const otherCities = getCitiesByState(state).filter(c => c.slug !== city);

    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": `Gold IRA Guide for ${cityData.name}, ${cityData.stateName} (2026)`,
                "description": `Complete guide to Gold IRA investing for residents of ${cityData.name}, ${cityData.stateName}.`,
                "author": { "@type": "Organization", "name": "Rich Dad Retirement" },
                "datePublished": "2026-02-01",
                "dateModified": "2026-02-01"
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": `Are there Gold IRA dealers in ${cityData.name}?`,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": `While ${cityData.name} has local coin shops, national Gold IRA companies typically offer better pricing, full IRA tax advantages, and insured depository storage that local dealers cannot match.`
                        }
                    },
                    {
                        "@type": "Question",
                        "name": `What percentage of ${cityData.name} residents are near retirement?`,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": `Approximately ${cityData.retirementPct}% of ${cityData.name}'s population is age 55 or older, making retirement planning a significant concern for the community.`
                        }
                    }
                ]
            }
        ]
    };

    return (
        <main className="min-h-screen flex flex-col bg-white">
            <SchemaScript schema={schema} />
            <Navbar />
            <div className="flex-grow">
                {/* Hero */}
                <header className="bg-slate-50 py-16 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(178,34,52,0.08),transparent_50%)]" />
                    <Container className="relative z-10">
                        <div className="max-w-3xl">
                            <div className="flex items-center gap-2 mb-4">
                                <Link
                                    href={`/local/${state}`}
                                    className="inline-flex items-center gap-1.5 rounded-full bg-[#B22234]/10 px-3 py-1 text-sm font-semibold text-[#B22234] border border-[#B22234]/20 hover:bg-[#B22234]/20 transition-colors"
                                >
                                    <MapPin className="w-3.5 h-3.5" />
                                    {cityData.stateName}
                                </Link>
                                <span className="text-slate-400">/</span>
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#000080]/10 px-3 py-1 text-sm font-semibold text-[#000080] border border-[#000080]/20">
                                    {cityData.name}
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-[#000080]">
                                Gold IRA Guide for {cityData.name}, {cityData.stateName}
                            </h1>
                            <p className="text-xl text-slate-600">
                                A complete guide to Gold IRA investing for {cityData.name} residents—including local economy insights, {cityData.stateName} tax rules, and top-rated companies serving your area.
                            </p>
                        </div>
                    </Container>
                </header>

                <Container className="py-12">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Sidebar */}
                        <aside className="lg:w-80 flex-shrink-0 hidden lg:block relative order-last lg:order-first">
                            <StickyMasterSidebar />
                        </aside>

                        {/* Content */}
                        <article className="flex-1 prose prose-lg prose-slate prose-headings:font-serif prose-headings:text-[#000080] prose-p:text-slate-600 prose-strong:text-slate-900 prose-li:text-slate-600 max-w-none">

                            {/* City Stats Box */}
                            <div className="not-prose grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-center">
                                    <Users className="w-5 h-5 text-[#000080] mx-auto mb-1" />
                                    <p className="text-2xl font-bold text-slate-900">{(cityData.population / 1000).toFixed(0)}K</p>
                                    <p className="text-xs text-slate-500">Population</p>
                                </div>
                                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-center">
                                    <TrendingUp className="w-5 h-5 text-[#B22234] mx-auto mb-1" />
                                    <p className="text-2xl font-bold text-slate-900">{cityData.retirementPct}%</p>
                                    <p className="text-xs text-slate-500">Age 55+</p>
                                </div>
                                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-center">
                                    <DollarSign className="w-5 h-5 text-green-600 mx-auto mb-1" />
                                    <p className="text-2xl font-bold text-slate-900">${(cityData.medianIncome / 1000).toFixed(0)}K</p>
                                    <p className="text-xs text-slate-500">Median Income</p>
                                </div>
                                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-center">
                                    <Building2 className="w-5 h-5 text-amber-600 mx-auto mb-1" />
                                    <p className="text-2xl font-bold text-slate-900">{cityData.medianAge}</p>
                                    <p className="text-xs text-slate-500">Median Age</p>
                                </div>
                            </div>

                            {/* Section 1: Local Economy */}
                            <section>
                                <h2>1. {cityData.name}&apos;s Economy & Retirement Landscape</h2>
                                <p>
                                    {content?.localEconomy || `${cityData.name} is a major metropolitan area in ${cityData.stateName} with a diverse economy. The city's major employers include ${cityData.majorEmployers.slice(0, 3).join(', ')}.`}
                                </p>
                                <p>
                                    {content?.retirementContext || `With ${cityData.retirementPct}% of the population age 55 or older, retirement planning is a key concern for ${cityData.name} residents. A Gold IRA offers local investors a way to diversify beyond traditional stocks and bonds.`}
                                </p>

                                {cityData.majorEmployers.length > 0 && (
                                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 not-prose my-6">
                                        <h3 className="flex items-center gap-2 font-bold text-blue-700 text-lg mb-3">
                                            <Building2 className="w-5 h-5" /> Major Employers in {cityData.name}
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {cityData.majorEmployers.map((employer) => (
                                                <span key={employer} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                                    {employer}
                                                </span>
                                            ))}
                                        </div>
                                        <p className="text-sm text-blue-700 mt-3">
                                            Many {cityData.name} retirees from these organizations have 401(k), 403(b), or pension assets eligible for Gold IRA rollover.
                                        </p>
                                    </div>
                                )}
                            </section>

                            {/* Section 2: State Tax Rules */}
                            <section className="mt-12">
                                <h2>2. {cityData.stateName} Gold & Silver Tax Rules</h2>
                                <div className={`not-prose p-6 rounded-xl border mb-6 ${stateData.taxFriendly ? 'bg-green-50 border-green-200' : 'bg-amber-50 border-amber-200'}`}>
                                    <div className="flex items-center gap-3 mb-2">
                                        {stateData.taxFriendly ? (
                                            <CheckCircle2 className="w-6 h-6 text-green-600" />
                                        ) : (
                                            <AlertTriangle className="w-6 h-6 text-amber-600" />
                                        )}
                                        <h3 className={`font-bold text-lg ${stateData.taxFriendly ? 'text-green-700' : 'text-amber-700'}`}>
                                            {stateData.taxFriendly ? `${cityData.stateName}: Tax-Friendly for Gold` : `${cityData.stateName}: Sales Tax Applies to Gold`}
                                        </h3>
                                    </div>
                                    <p className={`text-sm ${stateData.taxFriendly ? 'text-green-800' : 'text-amber-800'}`}>
                                        {stateData.taxFriendly
                                            ? `${cityData.stateName} exempts investment-grade precious metals from sales tax. ${cityData.name} residents buying physical gold locally benefit from this exemption. However, a Gold IRA still offers additional tax advantages (tax-deferred or tax-free growth).`
                                            : `${cityData.stateName} charges sales tax on precious metals purchases. ${cityData.name} residents buying gold locally will pay this tax. A Gold IRA avoids sales tax entirely while providing tax-deferred or tax-free growth.`
                                        }
                                    </p>
                                </div>
                                <p>
                                    {stateContent?.taxInfo || `Check with ${cityData.stateName} tax authorities for specific rules. Regardless of state tax status, a Gold IRA provides federal tax advantages that local purchases cannot match.`}
                                </p>
                            </section>

                            {/* Section 3: Local vs National */}
                            <section className="mt-12">
                                <h2>3. {cityData.name} Local Dealers vs. National Gold IRA Companies</h2>
                                <p>
                                    {content?.localDealers || `${cityData.name} has several local coin shops and precious metals dealers. While buying locally offers the appeal of face-to-face transactions, national Gold IRA companies typically provide better pricing and full IRA tax advantages.`}
                                </p>

                                <div className="not-prose overflow-x-auto my-6">
                                    <table className="w-full text-left border-collapse bg-slate-50 rounded-xl border border-slate-200">
                                        <thead className="bg-slate-100">
                                            <tr>
                                                <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Feature</th>
                                                <th className="p-4 border-b border-slate-200 font-bold text-slate-900">{cityData.name} Coin Shop</th>
                                                <th className="p-4 border-b border-slate-200 font-bold text-[#B22234]">National Gold IRA</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-sm">
                                            <tr className="border-b border-slate-200">
                                                <td className="p-4 font-medium text-slate-900">Pricing</td>
                                                <td className="p-4 text-slate-600">Higher overhead = higher premiums</td>
                                                <td className="p-4 bg-green-50 font-semibold text-green-700">Volume pricing = lower premiums</td>
                                            </tr>
                                            <tr className="border-b border-slate-200">
                                                <td className="p-4 font-medium text-slate-900">Sales Tax</td>
                                                <td className="p-4 text-slate-600">{stateData.taxFriendly ? 'Exempt in ' + cityData.stateName : 'Taxable in ' + cityData.stateName}</td>
                                                <td className="p-4 bg-green-50 font-semibold text-green-700">No sales tax (IRA purchase)</td>
                                            </tr>
                                            <tr className="border-b border-slate-200">
                                                <td className="p-4 font-medium text-slate-900">Tax Benefits</td>
                                                <td className="p-4 text-slate-600">None (post-tax money)</td>
                                                <td className="p-4 bg-green-50 font-semibold text-green-700">Tax-deferred or tax-free (Roth)</td>
                                            </tr>
                                            <tr className="border-b border-slate-200">
                                                <td className="p-4 font-medium text-slate-900">Selection</td>
                                                <td className="p-4 text-slate-600">Limited to current inventory</td>
                                                <td className="p-4 bg-green-50 font-semibold text-green-700">All IRS-approved bullion</td>
                                            </tr>
                                            <tr className="border-b border-slate-200">
                                                <td className="p-4 font-medium text-slate-900">Storage</td>
                                                <td className="p-4 text-slate-600">Your responsibility (risky)</td>
                                                <td className="p-4 bg-green-50 font-semibold text-green-700">Insured depository included</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-medium text-slate-900">Insurance</td>
                                                <td className="p-4 text-slate-600">Limited homeowner&apos;s coverage</td>
                                                <td className="p-4 bg-green-50 font-semibold text-green-700">Full Lloyd&apos;s of London coverage</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* Section 4: Top Companies */}
                            <section className="mt-12">
                                <h2>4. Top 3 Gold IRA Companies for {cityData.name} Residents</h2>
                                <p>
                                    These nationally-licensed companies serve {cityData.name}, {cityData.stateName} and handle all paperwork, custodian setup, and secure depository storage:
                                </p>

                                <div className="not-prose grid gap-4 my-6">
                                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                                        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center shrink-0 border border-amber-200">
                                            <ShieldCheck className="w-8 h-8 text-[#B22234]" />
                                        </div>
                                        <div className="flex-grow">
                                            <h4 className="font-bold text-lg text-slate-900">#1 Augusta Precious Metals</h4>
                                            <p className="text-sm text-slate-600 mb-2">Best for: {cityData.name} investors with $50k+ who want education-first approach</p>
                                            <p className="text-xs text-green-600 font-semibold">A+ BBB Rating | Zero Complaints | Serves {cityData.name}</p>
                                        </div>
                                        <LeadCaptureButton
                                            variant="gold"
                                            source={`city-${state}-${city}-augusta`}
                                            className="inline-flex items-center justify-center rounded-md font-medium bg-[#B22234] hover:bg-[#8b1c2a] text-white h-10 px-4 text-sm"
                                        >
                                            Get Free Kit
                                        </LeadCaptureButton>
                                    </div>

                                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center shrink-0 border border-blue-200">
                                            <ShieldCheck className="w-8 h-8 text-blue-600" />
                                        </div>
                                        <div className="flex-grow">
                                            <h4 className="font-bold text-lg text-slate-900">#2 Goldco</h4>
                                            <p className="text-sm text-slate-600 mb-2">Best for: First-time {cityData.name} investors with excellent hand-holding</p>
                                            <p className="text-xs text-green-600 font-semibold">A+ BBB Rating | 5,000+ 5-Star Reviews | Serves {cityData.name}</p>
                                        </div>
                                        <Button variant="outline" asChild className="border-slate-300 text-slate-700 hover:bg-slate-100">
                                            <a href={getTrackedLink(AFFILIATE_LINKS.goldco, `city-${state}-${city}`, "goldco")} target="_blank" rel="noopener noreferrer">Get Free Kit</a>
                                        </Button>
                                    </div>

                                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                                        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center shrink-0 border border-amber-200">
                                            <ShieldCheck className="w-8 h-8 text-[#B22234]" />
                                        </div>
                                        <div className="flex-grow">
                                            <h4 className="font-bold text-lg text-slate-900">#3 Noble Gold Investments</h4>
                                            <p className="text-sm text-slate-600 mb-2">Best for: Smaller accounts & Texas storage option</p>
                                            <p className="text-xs text-green-600 font-semibold">A+ BBB Rating | Low-Pressure Sales | Serves {cityData.name}</p>
                                        </div>
                                        <Button variant="outline" asChild className="border-slate-300 text-slate-700 hover:bg-slate-100">
                                            <a href={getTrackedLink(AFFILIATE_LINKS.noble, `city-${state}-${city}`, "noble")} target="_blank" rel="noopener noreferrer">Get Free Kit</a>
                                        </Button>
                                    </div>
                                </div>
                            </section>

                            {/* Section 5: City-Specific Advice */}
                            {content?.citySpecificAdvice && (
                                <section className="mt-12">
                                    <h2>5. Retirement Planning Advice for {cityData.name} Residents</h2>
                                    <p>{content.citySpecificAdvice}</p>
                                </section>
                            )}

                            {/* Section 6: Next Steps */}
                            <section className="mt-12">
                                <h2>{content?.citySpecificAdvice ? '6' : '5'}. Next Steps for {cityData.name} Investors</h2>
                                <p>
                                    Ready to protect your retirement with gold? Here&apos;s the simple process:
                                </p>
                                <ol>
                                    <li><strong>Request a free kit</strong> from one of the companies above (no obligation)</li>
                                    <li><strong>Speak with a specialist</strong> who can answer your {cityData.name}-specific questions</li>
                                    <li><strong>Choose your metals</strong> from IRS-approved gold, silver, platinum, or palladium</li>
                                    <li><strong>Fund your IRA</strong> via rollover from your 401(k), 403(b), TSP, or existing IRA</li>
                                    <li><strong>Metals ship to an insured depository</strong> stored securely in your name</li>
                                </ol>
                                <p>
                                    The entire process typically takes 2-3 weeks. Your specialist handles all the paperwork with your existing retirement account custodian—you don&apos;t need to visit anyone in {cityData.name}.
                                </p>
                            </section>

                            {/* CTA */}
                            <div className="my-12 bg-gradient-to-r from-[#000080] to-[#000060] rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#B22234]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-serif font-bold mb-4 text-white">{cityData.name} Residents: Protect Your Retirement Today</h3>
                                    <p className="mb-6 text-gray-200">Compare the top Gold IRA companies serving {cityData.name}, {cityData.stateName}. Get free investor kits with no obligation.</p>
                                    <LeadCaptureButton
                                        variant="gold"
                                        source={`city-${state}-${city}-cta`}
                                        className="inline-flex items-center justify-center rounded-md font-medium bg-[#B22234] hover:bg-[#8b1c2a] text-white h-11 px-6 text-base"
                                    >
                                        Get Your Free Gold IRA Kit
                                    </LeadCaptureButton>
                                </div>
                            </div>

                            {/* Other Cities in State */}
                            {otherCities.length > 0 && (
                                <section className="mt-12">
                                    <h2>Other {cityData.stateName} Cities</h2>
                                    <p>Explore Gold IRA guides for other cities in {cityData.stateName}:</p>
                                    <div className="not-prose grid grid-cols-2 md:grid-cols-3 gap-2 my-4">
                                        {otherCities.map((c) => (
                                            <Link
                                                key={c.slug}
                                                href={`/local/${state}/${c.slug}`}
                                                className="bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg p-3 text-sm text-slate-700 hover:text-[#000080] transition-colors flex items-center gap-2"
                                            >
                                                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                                                {c.name}
                                            </Link>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {/* Back to state */}
                            <div className="not-prose mt-8">
                                <Link
                                    href={`/local/${state}`}
                                    className="inline-flex items-center gap-2 text-[#000080] hover:text-[#B22234] font-medium transition-colors"
                                >
                                    ← Back to {cityData.stateName} Gold IRA Guide
                                </Link>
                            </div>

                            <AuthorBox />
                        </article>
                    </div>
                </Container>
            </div>
            <Footer />
        </main>
    );
}
