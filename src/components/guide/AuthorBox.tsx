import { Container } from "@/components/ui/Container";
import Image from "next/image";

export function AuthorBox() {
    return (
        <div className="bg-background-subtle rounded-2xl p-8 border border-primary/5 mt-16 flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="w-24 h-24 rounded-full bg-gray-200 shrink-0 overflow-hidden border-4 border-white shadow-md relative">
                <Image
                    src="/images/thomas-richardson.png"
                    alt="Thomas Richardson"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="flex-1 text-center md:text-left">
                <p className="text-xs font-bold tracking-widest text-secondary uppercase mb-2">Written By</p>
                <h3 className="text-2xl font-serif font-bold text-primary mb-3">Thomas Richardson</h3>
                <p className="text-text-muted mb-4 leading-relaxed">
                    Thomas is a former wealth manager with 20+ years of experience. He founded Rich Dad Retirement to expose the flaws of traditional "paper asset" retirement planning and educate Americans on the stability of physical precious metals.
                </p>
                <div className="flex justify-center md:justify-start gap-4">
                    <span className="text-xs font-semibold text-primary/60 bg-white px-3 py-1 rounded-full border border-gray-100">
                        Certified Financial Planner™ (Ret.)
                    </span>
                    <span className="text-xs font-semibold text-primary/60 bg-white px-3 py-1 rounded-full border border-gray-100">
                        Precious Metals Expert
                    </span>
                </div>
            </div>
        </div>
    );
}
