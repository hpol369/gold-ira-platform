import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QuizWizard } from "@/components/quiz/QuizWizard";

export default function QuizPage() {
    return (
        <main className="min-h-screen flex flex-col bg-background">
            <Navbar />
            <div className="flex-grow flex items-center justify-center py-12 md:py-24 bg-gradient-to-b from-white to-background-subtle">
                <QuizWizard />
            </div>
            <Footer />
        </main>
    );
}
