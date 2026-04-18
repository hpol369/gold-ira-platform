import { NextRequest, NextResponse } from "next/server";
import { supabase, getLeadByEmail, updateLead } from "@/lib/supabase";
import { updateLeadNotification } from "@/lib/lead-notification";
import { sendNotification } from "@/lib/notifications";
import { uploadClickConversion } from "@/lib/google-ads";

// Types for Augusta postback events
export type PostbackType = "lead_capture" | "qualified_lead" | "trade_complete";

export interface PostbackEvent {
  type: PostbackType;
  sub_id?: string;        // Our tracking parameter (page source)
  lead_id?: string;       // Augusta's lead ID
  timestamp: string;
  ip?: string;
  user_agent?: string;
  location?: string;      // Geo location from Vercel headers
  // Additional fields Augusta might send
  [key: string]: string | undefined;
}

export async function GET(request: NextRequest) {
  // Augusta might use GET for postbacks
  return handlePostback(request, "GET");
}

export async function POST(request: NextRequest) {
  return handlePostback(request, "POST");
}

async function handlePostback(request: NextRequest, method: string) {
  try {
    const url = new URL(request.url);

    // Verify postback secret if configured
    const secret = url.searchParams.get("secret");
    const expectedSecret = process.env.POSTBACK_SECRET;
    if (expectedSecret && secret !== expectedSecret) {
      console.warn(`[POSTBACK] Unauthorized request from ${request.headers.get("x-forwarded-for")}`);
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get parameters from query string or body
    let params: Record<string, string> = {};

    // Get query params
    url.searchParams.forEach((value, key) => {
      params[key] = value;
    });

    // If POST, also check body
    if (method === "POST") {
      try {
        const body = await request.json();
        params = { ...params, ...body };
      } catch {
        // Body might not be JSON, try form data
        try {
          const formData = await request.formData();
          formData.forEach((value, key) => {
            params[key] = value.toString();
          });
        } catch {
          // No body, use query params only
        }
      }
    }

    // Determine event type from params
    // Augusta might use different parameter names - adjust as needed
    const eventType = determineEventType(params);

    // Get location from Vercel geo headers
    const country = request.headers.get("x-vercel-ip-country") || "";
    const city = request.headers.get("x-vercel-ip-city") || "";
    const region = request.headers.get("x-vercel-ip-country-region") || "";

    let location = "";
    if (city && region && country) {
      location = `${city}, ${region}, ${country}`;
    } else if (city && country) {
      location = `${city}, ${country}`;
    } else if (country) {
      location = country;
    }

    const event: PostbackEvent = {
      type: eventType,
      sub_id: params.sub_id || params.subid || params.source || "unknown",
      lead_id: params.lead_id || params.leadid || params.id,
      timestamp: new Date().toISOString(),
      ip: request.headers.get("x-forwarded-for") || "unknown",
      user_agent: request.headers.get("user-agent") || "unknown",
      location: location || undefined,
      ...params,
    };

    // Persist to Supabase
    try {
      await supabase.from("postback_events").insert({
        type: event.type,
        sub_id: event.sub_id,
        lead_id: event.lead_id,
        email: params.email || params.Email || params.EMAIL || null,
        ip: event.ip,
        user_agent: event.user_agent,
        location: event.location || null,
        raw_params: params,
      });
    } catch (dbError) {
      console.error("[POSTBACK] Supabase insert failed:", dbError);
    }

    // Log for debugging (visible in Vercel logs)
    console.log(`[POSTBACK] Received ${method} request`);
    console.log(`[POSTBACK] Raw params:`, JSON.stringify(params, null, 2));
    console.log(`[POSTBACK] Processed event:`, JSON.stringify(event, null, 2));

    // Send Telegram notification for lead_capture postbacks (direct Augusta link leads)
    if (eventType === "lead_capture") {
      try {
        await sendNotification(event);
        console.log(`[POSTBACK] Telegram notification sent for lead_capture`);
      } catch (notifyError) {
        console.error(`[POSTBACK] lead_capture notification failed:`, notifyError);
      }
    }

    // Fire Google Ads offline conversion using gclid (passed as sub_id)
    // This is needed when traffic goes directly to Augusta's landing page via Google Ads
    const gclid = event.sub_id;
    if (gclid && gclid !== "unknown") {
      const conversionValues: Record<PostbackType, number> = {
        lead_capture: 50,       // Lead captured - $50 value
        qualified_lead: 200,    // Qualified by Augusta - $200 value
        trade_complete: 1000,   // Trade completed - $1000+ value
      };

      const conversionValue = conversionValues[eventType] || 50;

      try {
        const result = await uploadClickConversion(gclid, conversionValue);
        if (result.success) {
          console.log(`[POSTBACK] Google Ads conversion uploaded: ${eventType}, gclid=${gclid}, value=$${conversionValue}`);
        } else {
          console.warn(`[POSTBACK] Google Ads conversion upload failed: ${result.error}`);
        }
      } catch (gadsError) {
        console.error(`[POSTBACK] Google Ads conversion error:`, gadsError);
        // Don't fail the postback - Google Ads upload is non-critical
      }
    }

    // Try to update the living notification
    try {
      const email = params.email || params.Email || params.EMAIL;

      if (email && (eventType === "qualified_lead" || eventType === "trade_complete")) {
        console.log(`[POSTBACK] Looking up lead by email:`, email);
        const lead = await getLeadByEmail(email);

        if (lead) {
          // Update lead status
          const newStatus = eventType === "trade_complete" ? "converted" : "qualified";
          await updateLead(lead.id!, { status: newStatus });
          lead.status = newStatus;

          console.log(`[POSTBACK] Lead found, updating status to:`, newStatus);

          // Update the Telegram notification
          await updateLeadNotification(lead);
          console.log(`[POSTBACK] Telegram notification updated`);
        } else {
          console.log(`[POSTBACK] Lead not found for email:`, email);
        }
      }
    } catch (notifyError) {
      console.error(`[POSTBACK] Notification update failed:`, notifyError);
      // Continue - don't fail the whole postback just because notification failed
    }

    // Return success (Augusta expects 200 OK)
    return NextResponse.json({
      success: true,
      message: "Postback received",
      event_type: eventType
    });

  } catch (error) {
    console.error("[POSTBACK ERROR]", error);
    // Still return 200 to prevent Augusta from retrying
    return NextResponse.json({
      success: false,
      message: "Error processing postback"
    });
  }
}

function determineEventType(params: Record<string, string>): PostbackType {
  // Check for explicit type parameter
  const type = params.type || params.event || params.action || "";

  if (type.includes("trade") || type.includes("complete") || type.includes("sale")) {
    return "trade_complete";
  }
  if (type.includes("qualified") || type.includes("qualify")) {
    return "qualified_lead";
  }

  // Default to lead capture
  return "lead_capture";
}

// OPTIONS — returns recent conversions from Supabase (used by /admin/conversions)
export async function OPTIONS() {
  try {
    const { data } = await supabase
      .from("postback_events")
      .select("type, sub_id, lead_id, created_at")
      .order("created_at", { ascending: false })
      .limit(100);

    const conversions = (data || []).map((row: { type: string; sub_id: string; lead_id: string; created_at: string }) => ({
      type: row.type,
      sub_id: row.sub_id,
      lead_id: row.lead_id,
      timestamp: row.created_at,
    }));

    return NextResponse.json(
      { conversions },
      {
        headers: {
          "Access-Control-Allow-Origin": "https://www.richdadretirement.com",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      }
    );
  } catch {
    return NextResponse.json(
      { conversions: [] },
      {
        headers: {
          "Access-Control-Allow-Origin": "https://www.richdadretirement.com",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      }
    );
  }
}
