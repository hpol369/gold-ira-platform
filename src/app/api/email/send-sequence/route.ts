// Manual / ops endpoint: processes the email sequence queue on demand.
// NOTE: This is no longer wired to Vercel Cron — /api/cron/process-emails is
// the canonical daily cron (it also handles weekly re-engage enrollment).
// This route remains for manual triggering and queue-stats lookups.

import { NextRequest, NextResponse } from "next/server";
import { processEmailQueue, getQueueStats } from "@/lib/email-queue";

// Verify the request is from Vercel Cron or has the correct auth
function isAuthorized(request: NextRequest): boolean {
  // Vercel Cron sets this header
  const cronSecret = request.headers.get("authorization");
  if (cronSecret === `Bearer ${process.env.CRON_SECRET}`) {
    return true;
  }

  // Also allow Vercel's cron header
  const vercelCron = request.headers.get("x-vercel-cron");
  if (vercelCron) {
    return true;
  }

  // Allow in development
  if (process.env.NODE_ENV === "development") {
    return true;
  }

  return false;
}

export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const stats = await processEmailQueue();

    return NextResponse.json({
      success: true,
      ...stats,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("[EMAIL_CRON] Error:", error);
    return NextResponse.json(
      { error: "Failed to process email queue" },
      { status: 500 }
    );
  }
}

// POST for getting queue stats (dashboard use)
export async function POST(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const stats = await getQueueStats();

    return NextResponse.json({
      success: true,
      stats,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("[EMAIL_STATS] Error:", error);
    return NextResponse.json(
      { error: "Failed to get queue stats" },
      { status: 500 }
    );
  }
}
