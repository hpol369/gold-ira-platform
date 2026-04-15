// src/app/api/leads/route.ts
// Quiz completion analytics — NOT a lead capture endpoint.
//
// The Universal Quiz doesn't collect contact info (by design — its CTA routes
// users to /get-started which handles real lead capture via /api/submit-lead).
// This endpoint exists purely to persist quiz-completion analytics so we can
// measure funnel dropoff from quiz-completed → lead-captured.
//
// Prior implementation wrote to /tmp/quiz-leads.json which is ephemeral on
// Vercel (per-instance, lost on cold start). We now write to the existing
// source_clicks table in Supabase for durable analytics.

import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { sendTelegramNotification } from "@/lib/notifications";

const REQUIRED_FIELDS = ["productType", "budget", "answers", "recommendedCompany"] as const;

interface QuizCompletion {
  productType: string;
  budget: string;
  answers: Record<string, string>;
  recommendedCompany: string;
  email?: string;
  utmParams?: Record<string, string>;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as QuizCompletion;

    // Validate required fields
    const missing = REQUIRED_FIELDS.filter((f) => !body[f]);
    if (missing.length > 0) {
      return NextResponse.json(
        { success: false, error: "Missing required fields", missingFields: missing },
        { status: 400 }
      );
    }

    if (typeof body.answers !== "object" || body.answers === null || Array.isArray(body.answers)) {
      return NextResponse.json(
        { success: false, error: "Invalid answers format — must be an object" },
        { status: 400 }
      );
    }

    // Request metadata
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";
    const userAgent = request.headers.get("user-agent") || "";
    const country = request.headers.get("x-vercel-ip-country") || "";
    const city = request.headers.get("x-vercel-ip-city") || "";
    const referer = request.headers.get("referer") || "";

    // Persist to source_clicks. We use this table because:
    // 1) it already exists (no migration needed)
    // 2) quiz completions are closer to traffic analytics than leads
    // 3) the source field encodes product + budget + recommendation
    const campaign = body.utmParams?.utm_campaign || body.utmParams?.ref || "universal-quiz";
    const { error } = await supabase.from("source_clicks").insert([
      {
        source: `quiz:${body.productType}:${body.budget}`,
        campaign,
        ip_address: ip,
        user_agent: userAgent,
        country,
        city: city ? decodeURIComponent(city) : "",
        referer,
      },
    ]);

    if (error) {
      // Don't fail the quiz over an analytics write — log and continue
      console.error("[QUIZ] source_clicks insert error:", error);
    }

    // Telegram alert for high-value completions
    if (body.budget === "100k-500k" || body.budget === "500k-plus") {
      const message = [
        "🎯 High-value quiz completion",
        `Product: ${body.productType}`,
        `Budget: ${body.budget}`,
        `Recommended: ${body.recommendedCompany}`,
        `Time: ${new Date().toISOString()}`,
      ].join("\n");

      try {
        await sendTelegramNotification(message, true);
      } catch (e) {
        console.error("[QUIZ] Telegram notification failed:", e);
      }
    }

    return NextResponse.json({ success: true, message: "Quiz completion recorded" }, { status: 201 });
  } catch (error) {
    if (error instanceof SyntaxError) {
      return NextResponse.json({ success: false, error: "Invalid JSON in request body" }, { status: 400 });
    }
    console.error("[QUIZ] Error:", error);
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}
