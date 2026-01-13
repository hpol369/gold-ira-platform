"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TOCItem {
    id: string;
    label: string;
}

interface TableOfContentsProps {
    items: TOCItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "0px 0px -80% 0px" }
        );

        items.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [items]);

    return (
        <nav className="hidden lg:block sticky top-24 self-start w-64 p-6 bg-background-subtle rounded-xl border border-primary/5">
            <h4 className="font-serif font-bold text-primary mb-4 uppercase tracking-wider text-sm">
                On This Page
            </h4>
            <ul className="space-y-3 border-l-2 border-gray-200">
                {items.map((item) => (
                    <li key={item.id} className="-ml-[2px]">
                        <a
                            href={`#${item.id}`}
                            className={cn(
                                "block pl-4 text-sm transition-all duration-200 hover:text-primary",
                                activeId === item.id
                                    ? "border-l-2 border-secondary font-semibold text-primary"
                                    : "border-l-2 border-transparent text-text-muted"
                            )}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
