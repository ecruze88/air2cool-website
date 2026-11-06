export const COMMERCIAL_EQUIPMENT = [
  "Rooftop Units / RTUs",
  "Packaged HVAC Systems",
  "Commercial Furnaces / Heating",
  "Commercial Boilers",
  "Chillers",
  "Hydronic / Circulation Pumps",
  "Commercial Split Systems",
  "Walk-In Coolers",
  "Walk-In Freezers",
  "Reach-In Refrigeration",
  "Ice Machines",
  "Compressors",
  "Other Mechanical Equipment",
] as const;

export const COMMERCIAL_PROPERTY_TYPES = [
  "Office", "Restaurant", "Retail", "Warehouse", "Multifamily",
  "Industrial", "School / Institutional", "Other",
] as const;

export const COMMERCIAL_REQUEST_TYPES = [
  "Preventative maintenance agreement",
  "Existing equipment evaluation",
  "Ongoing repair/service support",
  "Replacement planning",
  "Not sure - I would like Air2Cool to assess the property",
] as const;

type BaseRequest = {
  contactName: string;
  phone: string;
  email: string;
  serviceAddress: string;
  notes?: string;
};

export type ResidentialMaintenanceRequest = BaseRequest & {
  requestKind: "residential";
  furnaceCount: string;
  acCount: string;
  boilerCount: string;
  heatPumpCount: string;
  otherEquipment?: string;
};

export type CommercialMaintenanceRequest = BaseRequest & {
  requestKind: "commercial";
  companyName: string;
  propertyType: string;
  equipment: string[];
  equipmentCount?: string;
  requestType: string;
};

export type MaintenanceRequest = ResidentialMaintenanceRequest | CommercialMaintenanceRequest;

export function escapeEmailHtml(value: unknown): string {
  return String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
}

function text(value: unknown, maxLength = 2000): string {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function validEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function parseMaintenanceRequest(input: unknown): { data?: MaintenanceRequest; error?: string } {
  if (!input || typeof input !== "object") return { error: "Invalid request" };
  const body = input as Record<string, unknown>;
  if (text(body.company)) return { error: "Invalid submission" };

  const requestKind = body.requestKind;
  const base = {
    contactName: text(body.contactName, 120),
    phone: text(body.phone, 40),
    email: text(body.email, 200),
    serviceAddress: text(body.serviceAddress, 300),
    notes: text(body.notes, 4000),
  };
  if (!base.contactName || !base.phone || !base.email || !base.serviceAddress) return { error: "Please complete all required contact fields." };
  if (!validEmail(base.email)) return { error: "Please enter a valid email address." };

  if (requestKind === "residential") {
    return { data: {
      ...base,
      requestKind,
      furnaceCount: text(body.furnaceCount, 20) || "0",
      acCount: text(body.acCount, 20) || "0",
      boilerCount: text(body.boilerCount, 20) || "0",
      heatPumpCount: text(body.heatPumpCount, 20) || "0",
      otherEquipment: text(body.otherEquipment, 500),
    } };
  }

  if (requestKind === "commercial") {
    const companyName = text(body.companyName, 160);
    const propertyType = text(body.propertyType, 80);
    const requestType = text(body.requestType, 120);
    if (!companyName || !COMMERCIAL_PROPERTY_TYPES.includes(propertyType as typeof COMMERCIAL_PROPERTY_TYPES[number])) return { error: "Please provide the company/property name and property type." };
    if (!COMMERCIAL_REQUEST_TYPES.includes(requestType as typeof COMMERCIAL_REQUEST_TYPES[number])) return { error: "Please select a valid request type." };
    const submitted = Array.isArray(body.equipment) ? body.equipment : [];
    const equipment = submitted.map((item) => text(item, 100)).filter((item): item is typeof COMMERCIAL_EQUIPMENT[number] => COMMERCIAL_EQUIPMENT.includes(item as typeof COMMERCIAL_EQUIPMENT[number]));
    return { data: { ...base, requestKind, companyName, propertyType, equipment, equipmentCount: text(body.equipmentCount, 300), requestType } };
  }

  return { error: "Invalid maintenance request type." };
}

export function buildMaintenanceRequestEmail(data: MaintenanceRequest) {
  const safe = (value: unknown, fallback = "Not provided") => escapeEmailHtml(value || fallback);
  const contact = `<p><strong>Contact:</strong> ${safe(data.contactName)}</p><p><strong>Phone:</strong> ${safe(data.phone)}</p><p><strong>Email:</strong> ${safe(data.email)}</p><p><strong>Service address:</strong> ${safe(data.serviceAddress)}</p>`;
  if (data.requestKind === "residential") {
    return {
      subject: "New Residential Maintenance Request",
      html: `<div style="font-family:Arial,sans-serif;max-width:640px"><h2>New Residential Maintenance Request</h2>${contact}<h3>Residential equipment</h3><ul><li>Furnaces: ${safe(data.furnaceCount, "0")}</li><li>Central AC systems: ${safe(data.acCount, "0")}</li><li>Boilers: ${safe(data.boilerCount, "0")}</li><li>Heat pumps: ${safe(data.heatPumpCount, "0")}</li></ul><p><strong>Other residential equipment:</strong> ${safe(data.otherEquipment)}</p><p><strong>Notes/questions:</strong><br>${safe(data.notes)}</p></div>`,
    };
  }
  const equipment = data.equipment.length ? data.equipment.map((item) => `<li>${safe(item)}</li>`).join("") : "<li>None selected</li>";
  return {
    subject: "New Commercial Maintenance Request",
    html: `<div style="font-family:Arial,sans-serif;max-width:640px"><h2>New Commercial Maintenance Request</h2>${contact}<p><strong>Company/property:</strong> ${safe(data.companyName)}</p><p><strong>Property type:</strong> ${safe(data.propertyType)}</p><p><strong>Request type:</strong> ${safe(data.requestType)}</p><h3>Selected equipment</h3><ul>${equipment}</ul><p><strong>Approximate systems/equipment:</strong> ${safe(data.equipmentCount)}</p><p><strong>Notes:</strong><br>${safe(data.notes)}</p></div>`,
  };
}
