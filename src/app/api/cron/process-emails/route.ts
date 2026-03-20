import { NextResponse } from "next/server";
import { processEmailQueue } from "@/lib/email-queue";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const result = await processEmailQueue();
    return NextResponse.json({ success: true, processed: result });
  } catch (error) {
    console.error("[CRON] Email queue processing failed:", error);
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}
