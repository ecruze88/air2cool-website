import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { buildMaintenanceRequestEmail, parseMaintenanceRequest } from "@/lib/maintenance-requests";
import {
  checkSubmissionRateLimit,
  detectVendorSolicitation,
  honeypotIsFilled,
  logRejectedSubmission,
  VENDOR_INQUIRY_MESSAGE,
} from "@/lib/form-spam-protection";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as Record<string, unknown>;
    if (honeypotIsFilled(body)) {
      logRejectedSubmission("maintenance-request", "honeypot");
      return NextResponse.json({ success: true });
    }
    if (!checkSubmissionRateLimit(request, "maintenance-request")) {
      logRejectedSubmission("maintenance-request", "rate-limit");
      return NextResponse.json({ error: "Too many requests. Please try again shortly." }, { status: 429 });
    }
    if (detectVendorSolicitation(Object.values(body))) {
      logRejectedSubmission("maintenance-request", "vendor");
      return NextResponse.json({ error: VENDOR_INQUIRY_MESSAGE }, { status: 400 });
    }

    const parsed = parseMaintenanceRequest(body);
    if (!parsed.data) return NextResponse.json({ error: parsed.error }, { status: 400 });

    const key = process.env.RESEND_API_KEY;
    if (!key) return NextResponse.json({ error: "Email service is not configured." }, { status: 503 });

    const notification = buildMaintenanceRequestEmail(parsed.data);
    const resend = new Resend(key);
    const result = await resend.emails.send({
      from: process.env.EMAIL_FROM || "onboarding@resend.dev",
      to: process.env.EMAIL_TO || "air2cool1@gmail.com",
      replyTo: parsed.data.email,
      subject: notification.subject,
      html: notification.html,
    });
    if (result.error) return NextResponse.json({ error: "Unable to send the request. Please call Air2Cool." }, { status: 502 });
    return NextResponse.json({ success: true, message: "Maintenance request received." });
  } catch (error) {
    console.error("Maintenance request error:", error);
    return NextResponse.json({ error: "Unable to process the request." }, { status: 500 });
  }
}
