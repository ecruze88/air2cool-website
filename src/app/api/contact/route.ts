import { Resend } from 'resend';
import { NextRequest, NextResponse } from "next/server";

const RESEND_KEY = process.env.RESEND_API_KEY || 'REMOVED';
const EMAIL_TO = process.env.EMAIL_TO || 'air2cool1@gmail.com';
const EMAIL_FROM = process.env.EMAIL_FROM || 'onboarding@resend.dev';

const resend = new Resend(RESEND_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { type, name, email, phone, address, service, message, problem, description, financing, company } = body;
    
    // Honeypot spam check
    if (company) {
      return NextResponse.json(
        { error: "Invalid submission" },
        { status: 400 }
      );
    }
    
    // Validate based on form type
    if (type === "emergency") {
      if (!name || !problem || !address) {
        return NextResponse.json(
          { error: "Missing required fields" },
          { status: 400 }
        );
      }
    } else if (type === "estimate") {
      if (!name || !service || !message || !address) {
        return NextResponse.json(
          { error: "Missing required fields" },
          { status: 400 }
        );
      }
    } else {
      return NextResponse.json(
        { error: "Invalid form type" },
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
      let emailHtml;
      let subject;
      
      if (type === "emergency") {
        // Emergency email format
        subject = `🚨 EMERGENCY: ${problem} - ${name}`;
        emailHtml = `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #dc2626; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #fff; padding: 20px; border: 2px solid #dc2626; border-top: none; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #dc2626; }
              .value { margin-top: 5px; padding: 10px; background: #fee; border-radius: 4px; }
              .urgent { background: #dc2626; color: white; padding: 10px; text-align: center; border-radius: 4px; margin-bottom: 20px; font-weight: bold; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0; font-size: 24px;">🚨 EMERGENCY SERVICE REQUEST</h1>
              </div>
              <div class="content">
                <div class="urgent">⚠️ URGENT - RESPONSE NEEDED WITHIN 2 HOURS</div>
                
                <div class="field">
                  <div class="label">Customer Name:</div>
                  <div class="value">${name}</div>
                </div>
                
                <div class="field">
                  <div class="label">Phone Number:</div>
                  <div class="value"><a href="tel:${phone}" style="color: #dc2626; text-decoration: none; font-weight: bold; font-size: 18px;">${phone || 'Not provided'}</a></div>
                </div>
                
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value"><a href="mailto:${email}" style="color: #dc2626;">${email || 'Not provided'}</a></div>
                </div>
                
                <div class="field">
                  <div class="label">Service Address:</div>
                  <div class="value">${address}</div>
                </div>
                
                <div class="field">
                  <div class="label">Problem Type:</div>
                  <div class="value"><strong>${problem}</strong></div>
                </div>
                
                ${description ? `
                <div class="field">
                  <div class="label">Additional Details:</div>
                  <div class="value">${description}</div>
                </div>
                ` : ''}
                
                <div class="field">
                  <div class="label">Submitted:</div>
                  <div class="value">${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} ET</div>
                </div>
                
                <div style="margin-top: 20px; padding: 15px; background: #fef3c7; border-left: 4px solid #f59e0b; border-radius: 4px;">
                  <strong>⏰ Action Required:</strong> Call customer within 2 hours at <a href="tel:${phone}" style="color: #dc2626; font-weight: bold;">${phone || email}</a>
                </div>
              </div>
            </div>
          </body>
          </html>
        `;
      } else {
        // Estimate email format
        subject = `💰 New Estimate: ${service} - ${name}`;
        emailHtml = `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #2563eb; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #fff; padding: 20px; border: 2px solid #2563eb; border-top: none; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #2563eb; }
              .value { margin-top: 5px; padding: 10px; background: #eff6ff; border-radius: 4px; }
              .financing { background: #10b981; color: white; padding: 8px 12px; border-radius: 4px; display: inline-block; margin-top: 5px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0; font-size: 24px;">💰 New Estimate Request</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Customer Name:</div>
                  <div class="value">${name}</div>
                </div>
                
                <div class="field">
                  <div class="label">Phone Number:</div>
                  <div class="value"><a href="tel:${phone}" style="color: #2563eb; text-decoration: none; font-weight: bold; font-size: 18px;">${phone || 'Not provided'}</a></div>
                </div>
                
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value"><a href="mailto:${email}" style="color: #2563eb;">${email || 'Not provided'}</a></div>
                </div>
                
                <div class="field">
                  <div class="label">Service Address:</div>
                  <div class="value">${address}</div>
                </div>
                
                <div class="field">
                  <div class="label">Service Requested:</div>
                  <div class="value"><strong>${service}</strong></div>
                </div>
                
                <div class="field">
                  <div class="label">Project Details:</div>
                  <div class="value">${message}</div>
                </div>
                
                ${financing ? `
                <div class="field">
                  <div class="label">Financing Interest:</div>
                  <div class="financing">✅ Customer interested in 0% financing (up to $25k)</div>
                </div>
                ` : ''}
                
                <div class="field">
                  <div class="label">Submitted:</div>
                  <div class="value">${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} ET</div>
                </div>
                
                <div style="margin-top: 20px; padding: 15px; background: #dbeafe; border-left: 4px solid #2563eb; border-radius: 4px;">
                  <strong>📅 Next Step:</strong> Contact customer within 24 hours to schedule free in-home estimate.
                </div>
              </div>
            </div>
          </body>
          </html>
        `;
      }

      await resend.emails.send({
        from: EMAIL_FROM,
        to: EMAIL_TO,
        replyTo: email || undefined,
        subject: subject,
        html: emailHtml
      });
      
      console.log(`${type} email sent successfully!`);
      
    } catch (emailError) {
      console.error("Email send error:", emailError);
    }
    
    console.log(`${type} form submission:`, body);
    
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