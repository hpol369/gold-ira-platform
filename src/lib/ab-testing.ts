"use client";

import { useState } from "react";

export type Variant = "control" | "variant";

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
    // Use lazy initialization to avoid setState in useEffect
    const [variant] = useState<Variant>(() => getOrCreateVariant(testName));
    return variant;
}
