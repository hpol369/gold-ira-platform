// src/app/api/submit-to-augusta/route.ts
// Called when user clicks "Yes, Call Me" in the confirmation step

import { NextRequest, NextResponse } from "next/server";
import { getLeadById, updateLeadStatus } from "@/lib/supabase";
import { updateLeadNotification } from "@/lib/lead-notification";
import { submitToAugusta } from "@/lib/augusta";

export async function POST(request: NextRequest) {
  try {
    const { leadId } = await request.json();

    if (!leadId) {
      return NextResponse.json(
        { success: false, error: "Missing leadId" },
        { status: 400 }
      );
    }

    const lead = await getLeadById(leadId);
    if (!lead) {
      return NextResponse.json(
        { success: false, error: "Lead not found" },
        { status: 404 }
      );
    }

    // Guard against double-submit
    if (lead.status === "sent_to_augusta") {
      return NextResponse.json({
        success: true,
        message: "Already submitted to Augusta",
        augustaSubmitted: true,
      });
    }

    const augustaSuccess = await submitToAugusta(lead);

    if (augustaSuccess) {
      await updateLeadStatus(lead.id!, "sent_to_augusta", {
        augusta_submitted_at: new Date().toISOString(),
      });
      lead.status = "sent_to_augusta";

      try {
        await updateLeadNotification(lead);
      } catch (err) {
        console.error("[TELEGRAM ERROR]", err);
      }
    }

    return NextResponse.json({
      success: true,
      message: augustaSuccess
        ? "Lead submitted to Augusta"
        : "Augusta submission failed — lead saved",
      augustaSubmitted: augustaSuccess,
    });
  } catch (error) {
    console.error("Submit to Augusta error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
