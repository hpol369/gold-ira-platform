// src/app/api/leads/route.ts
// API endpoint for saving quiz leads

import { NextRequest, NextResponse } from 'next/server';
import { saveLead, getAllLeads, type QuizLead } from '@/lib/lead-storage';
import { sendTelegramNotification } from '@/lib/notifications';

// Required fields for a valid lead
const REQUIRED_FIELDS = ['productType', 'budget', 'answers', 'recommendedCompany'] as const;

interface LeadInput {
  productType: string;
  budget: string;
  answers: Record<string, string>;
  recommendedCompany: string;
  email?: string;
  utmParams?: Record<string, string>;
}

/**
 * POST /api/leads
 * Save a new quiz lead
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as LeadInput;

    // Validate required fields
    const missingFields: string[] = [];
    for (const field of REQUIRED_FIELDS) {
      if (!body[field]) {
        missingFields.push(field);
      }
    }

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing required fields',
          missingFields,
        },
        { status: 400 }
      );
    }

    // Validate answers is an object
    if (typeof body.answers !== 'object' || body.answers === null || Array.isArray(body.answers)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid answers format - must be an object',
        },
        { status: 400 }
      );
    }

    // Save the lead
    const leadId = await saveLead({
      productType: body.productType,
      budget: body.budget,
      answers: body.answers,
      recommendedCompany: body.recommendedCompany,
      email: body.email,
      utmParams: body.utmParams,
    });

    // Log full lead data for analytics
    console.log('[LEAD ANALYTICS]', JSON.stringify({
      id: leadId,
      productType: body.productType,
      budget: body.budget,
      answers: body.answers,
      recommendedCompany: body.recommendedCompany,
      email: body.email ? '[REDACTED]' : undefined,
      utmParams: body.utmParams,
      timestamp: new Date().toISOString(),
    }));

    // Send Telegram notification for high-value leads
    if (body.budget === '100k-500k' || body.budget === '500k-plus') {
      const message = `🎯 High-Value Lead!\n\nProduct: ${body.productType}\nBudget: ${body.budget}\nRecommended: ${body.recommendedCompany}\nTime: ${new Date().toISOString()}`;

      // Try to send notification (don't fail if it errors)
      try {
        await sendTelegramNotification(message, true);
      } catch (e) {
        console.error('Failed to send notification:', e);
      }
    }

    return NextResponse.json(
      {
        success: true,
        id: leadId,
        message: 'Lead saved successfully',
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error saving lead:', error);

    // Handle JSON parse errors
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid JSON in request body',
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/leads
 * Retrieve all leads (for admin/debugging purposes)
 */
export async function GET() {
  try {
    const leads = await getAllLeads();

    return NextResponse.json({
      success: true,
      count: leads.length,
      leads,
    });
  } catch (error) {
    console.error('Error fetching leads:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
      },
      { status: 500 }
    );
  }
}
