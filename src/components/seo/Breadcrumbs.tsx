'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';
import { SchemaScript } from './SchemaScript';

export function Breadcrumbs() {
    const pathname = usePathname();

    // Don't show on home page
    if (pathname === '/') return null;

    const segments = pathname.split('/').filter(Boolean);

    // Generate breadrumb items
    const breadcrumbItems = segments.map((segment, index) => {
        const href = `/${segments.slice(0, index + 1).join('/')}`;

        // Format label: "gold-ira-guide" -> "Gold Ira Guide"
        const label = segment
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

        return {
            label,
            href,
            current: index === segments.length - 1
        };
    });

    // Add Home
    const allItems = [
        { label: 'Home', href: '/', current: false },
        ...breadcrumbItems
    ];

    // Schema.org Structured Data
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": allItems.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.label,
            "item": `https://www.richdadretirement.com${item.href}`
        }))
    };

    return (
        <nav aria-label="Breadcrumb" className="py-4 text-sm text-text-muted">
            <SchemaScript schema={schema} />
            <ol className="flex flex-wrap items-center gap-2">
                {allItems.map((item, index) => (
                    <li key={item.href} className="flex items-center">
                        {index > 0 && <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />}
                        {item.current ? (
                            <span className="font-semibold text-primary" aria-current="page">
                                {item.label}
                            </span>
                        ) : (
                            <Link
                                href={item.href}
                                className="hover:text-secondary hover:underline flex items-center transition-colors"
                            >
                                {index === 0 && <Home className="w-3 h-3 mr-1" />}
                                {item.label}
                            </Link>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
