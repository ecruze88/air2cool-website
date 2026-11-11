import type { NextRequest } from "next/server";

export const VENDOR_INQUIRY_MESSAGE =
  "This form is for HVAC service requests only. Business and vendor inquiries should be emailed to air2cool1@gmail.com.";

const VENDOR_PHRASES = [
  "website design", "website redesign", "redesign your website", "build a new website",
  "new website for your business", "web development", "seo services",
  "search engine optimization", "digital marketing", "marketing agency",
  "lead generation", "social media marketing", "advertising services",
  "business proposal", "business opportunity", "increase your sales",
  "boost conversions", "improve your ranking", "improve your google ranking",
  "google ranking", "google rankings", "backlinks", "guest post", "link building",
  "graphic design", "app development", "software development", "outsourcing services",
] as const;

const SOLICITATION_SIGNALS = [
  "we can", "we provide", "we offer", "our agency", "our services", "would you like",
  "help your business", "for hvac companies", "free audit", "schedule a call",
] as const;

const HVAC_SIGNALS = [
  "heating", "furnace", "boiler", "ac", "air conditioning", "no heat", "no cooling",
  "thermostat", "refrigerant", "leak", "compressor", "refrigeration", "walk-in",
  "freezer", "ice machine", "maintenance", "installation", "replacement", "estimate",
  "service appointment", "emergency service", "heat pump", "mini split", "rooftop unit",
] as const;

function normalize(values: unknown[]): string {
  return values.filter((value): value is string => typeof value === "string")
    .join(" ").toLowerCase().replace(/[^a-z0-9@.\s-]/g, " ").replace(/\s+/g, " ").trim();
}

export function detectVendorSolicitation(values: unknown[], strict = false): boolean {
  const text = normalize(values);
  if (!text) return false;
  const vendorMatches = VENDOR_PHRASES.filter((phrase) => text.includes(phrase));
  const solicitationMatches = SOLICITATION_SIGNALS.filter((phrase) => text.includes(phrase));
  const hasHvacContext = HVAC_SIGNALS.some((phrase) => text.includes(phrase));

  if (vendorMatches.length >= 2) return true;
  if (vendorMatches.length >= 1 && solicitationMatches.length >= 1) return true;
  return strict && vendorMatches.length >= 1 && !hasHvacContext;
}

export function honeypotIsFilled(body: Record<string, unknown>): boolean {
  return [body.companyWebsite, body.company].some(
    (value) => typeof value === "string" && value.trim().length > 0,
  );
}

type RateEntry = { count: number; resetAt: number };
const rateEntries = new Map<string, RateEntry>();

export function checkSubmissionRateLimit(
  request: NextRequest,
  route: string,
  limit = 6,
  windowMs = 10 * 60 * 1000,
): boolean {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const address = forwarded || request.headers.get("x-real-ip");
  if (!address) return true;

  const now = Date.now();
  const key = `${route}:${address}`;
  const current = rateEntries.get(key);
  if (!current || current.resetAt <= now) {
    rateEntries.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (current.count >= limit) return false;
  current.count += 1;
  return true;
}

export function logRejectedSubmission(route: string, reason: "honeypot" | "vendor" | "rate-limit") {
  console.warn("Form submission rejected", { route, reason, timestamp: new Date().toISOString() });
}
