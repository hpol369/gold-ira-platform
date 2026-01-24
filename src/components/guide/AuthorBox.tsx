import { Container } from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";

export function AuthorBox() {
    return (
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mt-16 flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="w-24 h-24 rounded-full bg-slate-700 shrink-0 overflow-hidden border-4 border-white/10 shadow-md relative">
                <Image
                    src="/images/thomas-richardson.png"
                    alt="Thomas Richardson"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="flex-1 text-center md:text-left">
                <p className="text-xs font-bold tracking-widest text-amber-400 uppercase mb-2">Written By</p>
                <Link href="/author/thomas-richardson" className="hover:underline hover:text-amber-400 transition-colors">
                    <h3 className="text-2xl font-serif font-bold text-white mb-3">Thomas Richardson</h3>
                </Link>
                <p className="text-slate-400 mb-4 leading-relaxed">
                    Thomas is a former wealth manager with 20+ years of experience. He founded Rich Dad Retirement to expose the flaws of traditional "paper asset" retirement planning and educate Americans on the stability of physical precious metals.
                </p>
                <div className="flex justify-center md:justify-start gap-4">
                    <span className="text-xs font-semibold text-slate-300 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                        Certified Financial Planner™ (Ret.)
                    </span>
                    <span className="text-xs font-semibold text-slate-300 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                        Precious Metals Expert
                    </span>
                </div>
            </div>
        </div>
    );
}
