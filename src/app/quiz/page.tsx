import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QuizWizard } from "@/components/quiz/QuizWizard";

export const metadata: Metadata = {
    title: "Gold IRA Quiz: Find Your Best Company Match | Rich Dad Retirement",
    description: "Take our 60-second quiz to find the best Gold IRA company for your retirement goals. Get personalized recommendations based on your investment needs.",
};

export default function QuizPage() {
    return (
        <main className="min-h-screen flex flex-col bg-slate-900">
            <Navbar />
            <div className="flex-grow flex flex-col items-center justify-center py-12 md:py-24 bg-gradient-to-b from-slate-800 to-slate-900">
                <h1 className="sr-only">Gold IRA Company Matching Quiz</h1>
                <QuizWizard />
            </div>
            <Footer />
        </main>
    );
}
