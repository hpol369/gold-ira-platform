// src/app/api/submit-lead/route.ts
// Submits lead to Augusta's form and stores locally

import { NextRequest, NextResponse } from "next/server";

const AUGUSTA_FORM_URL = "https://www.augustapreciousmetals.com/instant-download-thank-you-high/";

// Your affiliate tracking IDs
const AFFILIATE_PARAMS = {
  aff_id: "5129",
  apmtrkr_cid: "1696",
};

interface LeadData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  investmentAmount?: string;
  source?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: LeadData = await request.json();

    // Validate required fields
    if (!body.firstName || !body.lastName || !body.email || !body.phone) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Build form data for Augusta
    const formData = new URLSearchParams({
      first_name: body.firstName,
      last_name: body.lastName,
      email: body.email,
      phone_number: body.phone,
      ...AFFILIATE_PARAMS,
      // Additional tracking
      optin_page: body.source || "richdadretirement.com",
    });

    // Submit to Augusta
    const augustaResponse = await fetch(AUGUSTA_FORM_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": request.headers.get("user-agent") || "Mozilla/5.0",
        "Origin": "https://learn.augustapreciousmetals.com",
        "Referer": "https://learn.augustapreciousmetals.com/apm-aff-lp-1-v3",
      },
      body: formData.toString(),
      redirect: "manual", // Don't follow redirects
    });

    // Augusta typically redirects on success (302/303)
    const isSuccess = augustaResponse.status >= 200 && augustaResponse.status < 400;

    if (isSuccess) {
      return NextResponse.json({
        success: true,
        message: "Lead submitted successfully",
        augustaStatus: augustaResponse.status,
      });
    } else {
      // Log for debugging but don't expose to client
      console.error("Augusta submission failed:", augustaResponse.status);

      return NextResponse.json({
        success: false,
        error: "Submission failed",
        augustaStatus: augustaResponse.status,
      }, { status: 500 });
    }
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
