export type MaintenanceEmailData = {
  firstName: string; lastName: string; email?: string; phone: string;
  address: string; city: string; state?: string; zipCode: string;
  propertyType?: string; serviceType?: string; numberOfSystems?: string;
  preferredContactMethod?: string; equipment: string[];
  equipmentManufacturerModel?: string; boilerSuppliesHotWater?: string;
  lastServiceDate?: string; currentlyOperating?: string; additionalNotes?: string;
};

export function escapeEmailHtml(value: unknown): string {
  return String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
}

export function buildMaintenanceEmail(data: MaintenanceEmailData) {
  const safe = (value: unknown, fallback: string) => escapeEmailHtml(value || fallback);
  const equipmentList = data.equipment.length
    ? data.equipment.map((item) => `<li>${escapeEmailHtml(item)}</li>`).join("")
    : "<li>No equipment specified</li>";
  const propertyType = data.propertyType === "residential" ? "Residential" : "Commercial";

  return {
    subject: `New Maintenance Request: ${data.serviceType || "General"} - ${data.firstName} ${data.lastName}`,
    html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #ea580c;">New Maintenance Request</h2>
      <div style="background: #fff7ed; padding: 20px; margin: 20px 0; border-left: 4px solid #ea580c;">
        <h3>Customer Information</h3>
        <p><strong>Name:</strong> ${safe(data.firstName, "Not provided")} ${safe(data.lastName, "")}</p>
        <p><strong>Email:</strong> ${safe(data.email, "Not provided")}</p><p><strong>Phone:</strong> ${safe(data.phone, "Not provided")}</p>
        <p><strong>Address:</strong> ${safe(data.address, "Not provided")}, ${safe(data.city, "")}, ${safe(data.state, "")} ${safe(data.zipCode, "")}</p>
        <p><strong>Property Type:</strong> ${propertyType}</p><p><strong>Service Requested:</strong> ${safe(data.serviceType, "Not specified")}</p>
        <p><strong>Number of Systems:</strong> ${safe(data.numberOfSystems, "Not specified")}</p><p><strong>Preferred Contact:</strong> ${safe(data.preferredContactMethod, "Not specified")}</p>
      </div>
      <div style="background: #f3f4f6; padding: 20px; margin: 20px 0;"><h3>Equipment Details</h3><ul>${equipmentList}</ul>
        <p><strong>Manufacturer / Model:</strong> ${safe(data.equipmentManufacturerModel, "Not provided")}</p>
        <p><strong>Boiler supplies domestic hot water:</strong> ${safe(data.boilerSuppliesHotWater, "Unknown")}</p>
        <p><strong>Last service date:</strong> ${safe(data.lastServiceDate, "Unknown")}</p><p><strong>Currently operating:</strong> ${safe(data.currentlyOperating, "Unknown")}</p>
      </div>
      ${data.additionalNotes ? `<div><h3>Customer Concerns:</h3><p style="white-space: pre-wrap;">${escapeEmailHtml(data.additionalNotes)}</p></div>` : ""}
      <p style="color: #6b7280; font-size: 14px;">Submitted from Air2Cool Maintenance Contract page</p></div>`,
  };
}
