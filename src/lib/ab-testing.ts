"use client";

import { useEffect, useState } from "react";

export type Variant = "control" | "variant";

export function useABTest(testName: string): Variant {
    const [variant, setVariant] = useState<Variant>("control");

    useEffect(() => {
        // Simple client-side random assignment
        // In production, this heavily relies on cookies/local storage for consistency
        const storageKey = `ab-test-${testName}`;
        const storedVariant = localStorage.getItem(storageKey);

        if (storedVariant === "control" || storedVariant === "variant") {
            setVariant(storedVariant);
        } else {
            const newVariant = Math.random() < 0.5 ? "control" : "variant";
            localStorage.setItem(storageKey, newVariant);
            setVariant(newVariant);
        }
    }, [testName]);

    return variant;
}
