// src/app/api/submit-to-augusta/route.ts
// Called when user clicks "Yes, Call Me" in the confirmation step.
// Verified by requiring the original email used to submit the lead — this
// prevents random actors from enumerating lead UUIDs and retriggering
// Augusta submissions for leads they don't own.

import { NextRequest, NextResponse } from "next/server";
import { getLeadById, updateLeadStatus } from "@/lib/supabase";
import { updateLeadNotification } from "@/lib/lead-notification";
import { submitToAugusta } from "@/lib/augusta";

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export async function POST(request: NextRequest) {
  try {
    const { leadId, email } = await request.json();

    if (!leadId || typeof leadId !== "string" || !UUID_RE.test(leadId)) {
      return NextResponse.json(
        { success: false, error: "Invalid leadId" },
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

    // Caller must know the email that was used to create the lead. This is
    // not cryptographic auth, but raises the bar from "enumerate UUID" to
    // "know UUID AND email" — sufficient for this flow because the legit
    // caller always has both from the originating submission response.
    if (!email || typeof email !== "string" || email.trim().toLowerCase() !== lead.email) {
      console.warn(`[SUBMIT-AUGUSTA] Email mismatch for lead ${leadId} from ${request.headers.get("x-forwarded-for")}`);
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 403 }
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
