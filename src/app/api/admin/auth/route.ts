import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { pin } = await request.json();
    const adminPin = process.env.ADMIN_PIN;

    if (!adminPin) {
      console.error("[ADMIN AUTH] ADMIN_PIN env var not set");
      return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
    }

    if (pin === adminPin) {
      return NextResponse.json({ authenticated: true });
    }

    return NextResponse.json({ authenticated: false }, { status: 401 });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
