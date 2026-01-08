import { Resend } from 'resend';
import { NextRequest, NextResponse } from "next/server";

const RESEND_KEY = process.env.RESEND_API_KEY || 'REMOVED';
const EMAIL_TO = process.env.EMAIL_TO || 'air2cool1@gmail.com';
const EMAIL_FROM = process.env.EMAIL_FROM || 'onboarding@resend.dev';

const resend = new Resend(RESEND_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { name, email, phone, address, service, message, company } = body;
    
    if (company) {
      return NextResponse.json(
        { error: "Invalid submission" },
        { status: 400 }
      );
    }
    
    if (!name || !service || !message || !address) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    
    if (!email && !phone) {
      return NextResponse.json(
        { error: "Please provide either email or phone" },
        { status: 400 }
      );
    }
    
    try {
      const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Contact Form Submission</h2>
          
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email || 'Not provided'}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>Service Needed:</strong> ${service}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <strong>Message:</strong>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <hr style="border: 1px solid #e5e7eb; margin: 20px 0;">
          
          <p style="color: #6b7280; font-size: 14px;">
            Submitted from Air2Cool website contact form
          </p>
        </div>
      `;

      await resend.emails.send({
        from: EMAIL_FROM,
        to: EMAIL_TO,
        replyTo: email || undefined,
        subject: `New Contact: ${service} - ${name}`,
        html: emailHtml
      });
      
      console.log("Email sent successfully!");
      
    } catch (emailError) {
      console.error("Email send error:", emailError);
    }
    
    console.log("Contact form submission:", {
      name,
      email,
      phone,
      address,
      service,
      message
    });
    
    return NextResponse.json({ 
      success: true
    });
    
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}