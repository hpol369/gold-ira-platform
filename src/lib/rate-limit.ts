// src/lib/rate-limit.ts
// Shared rate limiter using Vercel KV — works correctly across multiple
// serverless instances (the prior in-memory Map was per-instance, so an
// attacker hitting different cold instances effectively had unlimited budget).
//
// Falls back to ALLOW (with a warning log) if KV is not configured. This
// keeps local dev frictionless and prevents a misconfigured Vercel env
// from blocking real lead submissions. Failing-open here is the right
// call: a leaky rate limit beats a leaky-then-broken endpoint.

import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";

export interface RateLimitConfig {
  /** Identifier prefix — e.g. "submit-lead" — namespaces this counter. */
  bucket: string;
  /** Max requests per identifier within the window. */
  max: number;
  /** Window length in seconds. */
  windowSec: number;
}

export interface RateLimitResult {
  ok: boolean;
  remaining: number;
  /** Seconds until the window resets. Use as Retry-After header on 429. */
  retryAfterSec: number;
}

/**
 * Best-effort detection of whether Vercel KV is wired up in this env.
 * @vercel/kv reads KV_REST_API_URL + KV_REST_API_TOKEN from process.env.
 */
function isKvConfigured(): boolean {
  return Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}

/**
 * Fixed-window counter. Simple, predictable, sufficient for abuse mitigation
 * at this scale. If you need smoother bursts later, swap to sliding window
 * with a Lua script — KV supports it via the underlying Upstash REST API.
 */
export async function checkRateLimit(
  identifier: string,
  config: RateLimitConfig
): Promise<RateLimitResult> {
  if (!isKvConfigured()) {
    // Fail open with a warning so this can't silently block production
    console.warn("[RATE-LIMIT] KV not configured — allowing request through");
    return { ok: true, remaining: config.max, retryAfterSec: 0 };
  }

  const key = `rl:${config.bucket}:${identifier}`;

  try {
    // INCR returns the new count; first call returns 1 and we set TTL.
    // Subsequent calls within the window just increment.
    const count = await kv.incr(key);
    if (count === 1) {
      // Best-effort TTL set; if it fails the key will live until next eviction
      await kv.expire(key, config.windowSec);
    }

    const ttl = await kv.ttl(key);
    const retryAfterSec = ttl > 0 ? ttl : config.windowSec;

    if (count > config.max) {
      return { ok: false, remaining: 0, retryAfterSec };
    }
    return { ok: true, remaining: Math.max(0, config.max - count), retryAfterSec };
  } catch (err) {
    // KV outage shouldn't take down lead capture — fail open with a log
    console.error("[RATE-LIMIT] KV error, failing open:", err);
    return { ok: true, remaining: config.max, retryAfterSec: 0 };
  }
}

/**
 * Convenience: extract the best identifier from a request.
 * Prefers x-forwarded-for first hop, falls back to x-real-ip, then "anon".
 */
export function getRequestIdentifier(request: Request): string {
  const fwd = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  if (fwd) return fwd;
  const real = request.headers.get("x-real-ip");
  if (real) return real.trim();
  return "anon";
}

/**
 * Build a 429 response with the standard Retry-After + RateLimit-* headers.
 */
export function rateLimitedResponse(result: RateLimitResult, max: number): NextResponse {
  return NextResponse.json(
    { success: false, error: "Too many requests" },
    {
      status: 429,
      headers: {
        "Retry-After": String(result.retryAfterSec),
        "RateLimit-Limit": String(max),
        "RateLimit-Remaining": String(result.remaining),
        "RateLimit-Reset": String(result.retryAfterSec),
      },
    }
  );
}
