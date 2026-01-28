import { NextRequest, NextResponse } from "next/server";
import { sendNotification } from "@/lib/notifications";

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

// Simple file-based storage (upgrade to DB later)
// In production, use Vercel KV, Supabase, or similar
const conversions: PostbackEvent[] = [];

export async function GET(request: NextRequest) {
  // Augusta might use GET for postbacks
  return handlePostback(request, "GET");
}

export async function POST(request: NextRequest) {
  return handlePostback(request, "POST");
}

async function handlePostback(request: NextRequest, method: string) {
  try {
    // Get parameters from query string or body
    const url = new URL(request.url);
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

    // Store the conversion
    conversions.push(event);

    // Log for debugging (visible in Vercel logs)
    console.log(`[POSTBACK] Received ${method} request`);
    console.log(`[POSTBACK] Raw params:`, JSON.stringify(params, null, 2));
    console.log(`[POSTBACK] Processed event:`, JSON.stringify(event, null, 2));

    // Send notification (wrapped in try/catch to not lose postback on notification error)
    try {
      await sendNotification(event);
      console.log(`[POSTBACK] Notification sent successfully`);
    } catch (notifyError) {
      console.error(`[POSTBACK] Notification failed:`, notifyError);
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

// Endpoint to view recent conversions (protected in production)
export async function OPTIONS() {
  return NextResponse.json({
    conversions: conversions.slice(-50), // Last 50
    total: conversions.length
  });
}
