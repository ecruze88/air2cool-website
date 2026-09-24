import { Resend } from 'resend';
import { NextRequest, NextResponse } from "next/server";
import { buildMaintenanceEmail } from "@/lib/maintenance-email";

const RESEND_KEY = process.env.RESEND_API_KEY || 'REMOVED';
const EMAIL_TO = process.env.EMAIL_TO || 'air2cool1@gmail.com';
const EMAIL_FROM = process.env.EMAIL_FROM || 'onboarding@resend.dev';

const resend = new Resend(RESEND_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { 
      firstName, 
      lastName, 
      email, 
      phone, 
      address, 
      city, 
      state, 
      zipCode,
      propertyType,
      serviceType,
      numberOfSystems,
      hasFurnace,
      hasCondenser,
      hasRefrigerationUnit,
      hasRooftopUnit,
      hasHighEfficiencyBoiler,
      hasTanklessWaterHeater,
      hasHydronicConventionalBoiler,
      hasSteamBoiler,
      hasHydronicAirHandler,
      furnaceBrand,
      furnaceAge,
      hasAC,
      acBrand,
      acAge,
      hasHeatPump,
      heatPumpBrand,
      heatPumpAge,
      hasMiniSplit,
      equipmentManufacturerModel,
      boilerSuppliesHotWater,
      lastServiceDate,
      currentlyOperating,
      miniSplitBrand,
      miniSplitAge,
      preferredContactMethod,
      additionalNotes,
      company 
    } = body;
    
    // Honeypot check
    if (company) {
      return NextResponse.json(
        { error: "Invalid submission" },
        { status: 400 }
      );
    }
    
    // Validation
    if (!firstName || !lastName || !phone || !address || !city || !zipCode) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    
    // Build equipment list
    const equipment = [];
    if (hasFurnace) {
      equipment.push(`Furnace: ${furnaceBrand || 'Unknown brand'}, ${furnaceAge || 'Unknown age'}`);
    }
    if (hasCondenser) equipment.push('Condenser');
    if (hasRefrigerationUnit) equipment.push('Refrigeration unit');
    if (hasRooftopUnit) equipment.push('Rooftop unit');
    if (hasHighEfficiencyBoiler) equipment.push('High-efficiency boiler');
    if (hasTanklessWaterHeater) equipment.push('Tankless water heater');
    if (hasHydronicConventionalBoiler) equipment.push('Hydronic conventional boiler');
    if (hasSteamBoiler) equipment.push('Steam boiler');
    if (hasHydronicAirHandler) equipment.push('Hydronic air handler');
    if (hasAC) {
      equipment.push(`Air Conditioner: ${acBrand || 'Unknown brand'}, ${acAge || 'Unknown age'}`);
    }
    if (hasHeatPump) {
      equipment.push(`Heat Pump: ${heatPumpBrand || 'Unknown brand'}, ${heatPumpAge || 'Unknown age'}`);
    }
    if (hasMiniSplit) {
      equipment.push(`Mini Split: ${miniSplitBrand || 'Unknown brand'}, ${miniSplitAge || 'Unknown age'}`);
    }
    
    const notification = buildMaintenanceEmail({
      firstName, lastName, email, phone, address, city, state, zipCode,
      propertyType, serviceType, numberOfSystems, preferredContactMethod,
      equipment, equipmentManufacturerModel, boilerSuppliesHotWater,
      lastServiceDate, currentlyOperating, additionalNotes,
    });
    
    try {
      /* Legacy inline template retained in history; formatter now provides escaped content.
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ea580c;">🔧 New Maintenance Contract Request</h2>
          
          <div style="background: #fff7ed; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ea580c;">
            <h3 style="margin-top: 0; color: #9a3412;">Customer Information</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email || 'Not provided'}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Address:</strong> ${address}, ${city}, ${state} ${zipCode}</p>
            <p><strong>Property Type:</strong> ${propertyType === 'residential' ? 'Residential' : 'Commercial'}</p>
            <p><strong>Service Requested:</strong> ${serviceType || 'Not specified'}</p>
            <p><strong>Number of Systems:</strong> ${numberOfSystems}</p>
            <p><strong>Preferred Contact:</strong> ${preferredContactMethod}</p>
          </div>
          
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1f2937;">Equipment Details</h3>
            <ul style="margin: 10px 0; padding-left: 20px;">
              ${equipmentList}
            </ul>
            <p><strong>Manufacturer / Model:</strong> ${equipmentManufacturerModel || 'Not provided'}</p>
            <p><strong>Boiler supplies domestic hot water:</strong> ${boilerSuppliesHotWater || 'Unknown'}</p>
            <p><strong>Last service date:</strong> ${lastServiceDate || 'Unknown'}</p>
            <p><strong>Currently operating:</strong> ${currentlyOperating || 'Unknown'}</p>
          </div>
          
          ${additionalNotes ? `
          <div style="margin: 20px 0;">
            <h3 style="color: #1f2937;">Additional Notes:</h3>
            <p style="white-space: pre-wrap; background: #f9fafb; padding: 15px; border-radius: 8px;">${additionalNotes}</p>
          </div>
          ` : ''}
          
          <div style="background: #dbeafe; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #1e40af;">
              <strong>⚡ Action Required:</strong> Review this information and prepare a maintenance contract for this customer. 
              Contact them via ${preferredContactMethod} to confirm details and schedule their first visit.
            </p>
          </div>
          
          <hr style="border: 1px solid #e5e7eb; margin: 20px 0;">
          
          <p style="color: #6b7280; font-size: 14px;">
            Submitted from Air2Cool Maintenance Contract page
          </p>
        </div>
      */

      await resend.emails.send({
        from: EMAIL_FROM,
        to: EMAIL_TO,
        replyTo: email || undefined,
        subject: notification.subject,
        html: notification.html
      });
      
      console.log("Maintenance contract email sent successfully!");
      
    } catch (emailError) {
      console.error("Email send error:", emailError);
      // Continue anyway - we still want to log the data
    }
    
    // Log for HouseCall system integration
    console.log("Maintenance contract submission:", {
      customer: `${firstName} ${lastName}`,
      email,
      phone,
      address: `${address}, ${city}, ${state} ${zipCode}`,
      propertyType,
      serviceType,
      numberOfSystems,
      equipment: equipment.length > 0 ? equipment : ['None specified'],
      equipmentManufacturerModel,
      boilerSuppliesHotWater,
      lastServiceDate,
      currentlyOperating,
      preferredContactMethod,
      additionalNotes
    });
    
    return NextResponse.json({ 
      success: true,
      message: "Maintenance contract request received"
    });
    
  } catch (error) {
    console.error("Maintenance contract form error:", error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
