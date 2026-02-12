/**
 * Google Ads Offline Conversion Upload
 *
 * Uploads click conversions to Google Ads using the gclid.
 * Used when traffic goes directly to Augusta's landing page
 * and we receive postbacks with the gclid as sub_id.
 *
 * Required env vars:
 *   GOOGLE_ADS_DEVELOPER_TOKEN
 *   GOOGLE_ADS_CLIENT_ID
 *   GOOGLE_ADS_CLIENT_SECRET
 *   GOOGLE_ADS_REFRESH_TOKEN
 *   GOOGLE_ADS_CUSTOMER_ID        (without dashes, e.g. "1234567890")
 *   GOOGLE_ADS_CONVERSION_ACTION_ID (numeric ID from Google Ads)
 */

const GOOGLE_ADS_API_VERSION = "v18";

interface ConversionUploadResult {
  success: boolean;
  error?: string;
  details?: Record<string, unknown>;
}

/**
 * Get a fresh access token using the refresh token
 */
async function getAccessToken(): Promise<string> {
  const clientId = process.env.GOOGLE_ADS_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_ADS_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_ADS_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error("Missing Google Ads OAuth credentials");
  }

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`OAuth token refresh failed: ${response.status} ${errorText}`);
  }

  const data = await response.json();
  return data.access_token;
}

/**
 * Format a Date to Google Ads conversion datetime format
 * Format: "yyyy-mm-dd hh:mm:ss+|-hh:mm" (e.g. "2026-02-12 15:30:00+00:00")
 */
function formatConversionDateTime(date: Date): string {
  const pad = (n: number) => n.toString().padStart(2, "0");
  return (
    `${date.getUTCFullYear()}-${pad(date.getUTCMonth() + 1)}-${pad(date.getUTCDate())} ` +
    `${pad(date.getUTCHours())}:${pad(date.getUTCMinutes())}:${pad(date.getUTCSeconds())}+00:00`
  );
}

/**
 * Upload an offline click conversion to Google Ads
 */
export async function uploadClickConversion(
  gclid: string,
  conversionValue: number,
  currencyCode: string = "USD",
  conversionDateTime?: Date
): Promise<ConversionUploadResult> {
  const developerToken = process.env.GOOGLE_ADS_DEVELOPER_TOKEN;
  const customerId = process.env.GOOGLE_ADS_CUSTOMER_ID;
  const conversionActionId = process.env.GOOGLE_ADS_CONVERSION_ACTION_ID;

  if (!developerToken || !customerId || !conversionActionId) {
    console.warn("[GOOGLE_ADS] Missing env vars, skipping conversion upload");
    return {
      success: false,
      error: "Missing Google Ads configuration (GOOGLE_ADS_DEVELOPER_TOKEN, GOOGLE_ADS_CUSTOMER_ID, or GOOGLE_ADS_CONVERSION_ACTION_ID)",
    };
  }

  // Validate gclid format (basic check - starts with letters/numbers, reasonable length)
  if (!gclid || gclid.length < 10 || gclid === "unknown") {
    console.warn(`[GOOGLE_ADS] Invalid gclid: "${gclid}", skipping conversion upload`);
    return {
      success: false,
      error: `Invalid gclid: "${gclid}"`,
    };
  }

  try {
    const accessToken = await getAccessToken();
    const dateTime = formatConversionDateTime(conversionDateTime || new Date());

    // Customer ID without dashes
    const cleanCustomerId = customerId.replace(/-/g, "");

    const conversionAction = `customers/${cleanCustomerId}/conversionActions/${conversionActionId}`;

    const url = `https://googleads.googleapis.com/${GOOGLE_ADS_API_VERSION}/customers/${cleanCustomerId}:uploadClickConversions`;

    const body = {
      conversions: [
        {
          gclid,
          conversionAction,
          conversionDateTime: dateTime,
          conversionValue,
          currencyCode,
        },
      ],
      partialFailure: true,
    };

    console.log(`[GOOGLE_ADS] Uploading conversion: gclid=${gclid}, value=${conversionValue} ${currencyCode}`);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "developer-token": developerToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.error(`[GOOGLE_ADS] Upload failed: ${response.status}`, JSON.stringify(responseData));
      return {
        success: false,
        error: `API error ${response.status}: ${JSON.stringify(responseData)}`,
        details: responseData,
      };
    }

    // Check for partial failures
    if (responseData.partialFailureError) {
      console.error(`[GOOGLE_ADS] Partial failure:`, JSON.stringify(responseData.partialFailureError));
      return {
        success: false,
        error: `Partial failure: ${JSON.stringify(responseData.partialFailureError)}`,
        details: responseData,
      };
    }

    console.log(`[GOOGLE_ADS] Conversion uploaded successfully for gclid=${gclid}`);
    return {
      success: true,
      details: responseData,
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error(`[GOOGLE_ADS] Error uploading conversion:`, errorMessage);
    return {
      success: false,
      error: errorMessage,
    };
  }
}
