import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";

export function AuthorBio() {
    return (
        <section className="py-24 bg-white">
            <Container>
                <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
                    {/* Image Placeholder */}
                    <FadeIn className="w-full md:w-1/3 flex-shrink-0">
                        <div className="aspect-[3/4] rounded-2xl bg-gray-100 relative overflow-hidden shadow-lg">
                            <div className="absolute inset-0 flex items-center justify-center bg-primary/5 text-gray-400 text-center p-4">
                                Financial Advisor <br /> Portrait Placeholder
                            </div>
                        </div>
                    </FadeIn>

                    {/* Content */}
                    <FadeIn delay={0.2} className="w-full md:w-2/3 space-y-6">
                        <h2 className="text-3xl font-serif font-bold text-primary">
                            Why I Built Rich Dad Retirement
                        </h2>
                        <div className="space-y-4 text-lg text-text leading-relaxed">
                            <p>
                                Hello, I&apos;m <span className="font-semibold text-primary">Thomas Richardson</span>.
                            </p>
                            <p>
                                After 20 years in traditional wealth management, I saw too many retirees lose their hard-earned savings to market crashes and inflation. I realized that the traditional "60/40" portfolio was no longer enough to protect against modern economic risks.
                            </p>
                            <p>
                                I created this platform to help Americans understand how to legally, safely, and easily move a portion of their retirement savings into physical gold—tax-free.
                            </p>
                        </div>

                        <div className="pt-4">
                            <span className="font-serif italic text-2xl text-primary font-bold">Thomas Richardson</span>
                            <p className="text-sm text-gray-500 uppercase tracking-wide mt-1">Senior Editor & Founder</p>
                        </div>
                    </FadeIn>
                </div>
            </Container>
        </section>
    );
}
