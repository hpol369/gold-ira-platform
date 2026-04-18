"use client";

import { useState, useEffect } from "react";

export type Variant = "control" | "variant";

/** Fire GA4 event when variant is assigned */
function trackVariantAssignment(testName: string, variant: Variant) {
    if (typeof window === "undefined") return;
    const gtag = (window as unknown as Record<string, unknown>).gtag as (
        ...args: unknown[]
    ) => void;
    if (typeof gtag === "function") {
        gtag("event", "ab_test_assignment", {
            test_name: testName,
            variant: variant,
        });
    }
}

// Helper to get or create variant (runs only on client)
function getOrCreateVariant(testName: string): Variant {
    if (typeof window === "undefined") return "control";

    const storageKey = `ab-test-${testName}`;
    const storedVariant = localStorage.getItem(storageKey);

    if (storedVariant === "control" || storedVariant === "variant") {
        return storedVariant;
    }

    const newVariant: Variant = Math.random() < 0.5 ? "control" : "variant";
    localStorage.setItem(storageKey, newVariant);
    return newVariant;
}

export function useABTest(testName: string): Variant {
    const [variant] = useState<Variant>(() => getOrCreateVariant(testName));

    // Track assignment in GA4 on first render
    useEffect(() => {
        trackVariantAssignment(testName, variant);
    }, [testName, variant]);

    return variant;
}
