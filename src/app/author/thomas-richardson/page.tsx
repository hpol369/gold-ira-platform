import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Redirecting to Editorial Board | Rich Dad Retirement",
    description: "This page has moved. Redirecting to our Editorial Board page.",
    robots: { index: false, follow: true },
};

export default function AuthorRedirectPage() {
    redirect("/editorial-board");
}
