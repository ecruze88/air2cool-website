"use client";

import { useState } from "react";
import { Wrench, CheckCircle, Home, Building2 } from "lucide-react";

export default function MaintenanceContractForm() {
  const [formData, setFormData] = useState({
    company: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "NJ",
    zipCode: "",
    propertyType: "residential",
    numberOfSystems: "1",
    hasFurnace: false,
    hasCondenser: false,
    hasRefrigerationUnit: false,
    hasRooftopUnit: false,
    hasHighEfficiencyBoiler: false,
    hasTanklessWaterHeater: false,
    hasHydronicConventionalBoiler: false,
    hasSteamBoiler: false,
    hasHydronicAirHandler: false,
    hasHeatPump: false,
    hasMiniSplit: false,
    preferredContactMethod: "phone",
    additionalNotes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitted(false);
    try {
      const res = await fetch("/api/maintenance-contract", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      await res.json().catch(() => ({} as Record<string, unknown>));
      if (!res.ok) {
        alert("Submission failed. Please call us at (201) 787-5657 instead.");
        setIsSubmitting(false);
        return;
      }
      setSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
      alert("Submission failed. Please call us at (201) 787-5657 instead.");
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        <div className="text-center">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
            <CheckCircle className="w-10 h-10 md:w-12 md:h-12 text-green-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 md:mb-4">
            Thank You!
          </h2>
          <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8">
            We&apos;ve received your maintenance contract request. Our team will send you a customized contract within 24 hours.
          </p>
          <div className="bg-blue-50 rounded-xl p-5 md:p-6 border border-blue-200 mb-6 md:mb-8">
            <p className="text-sm md:text-base text-gray-700 text-left">
              <strong>What&apos;s Next?</strong><br />
              1. We&apos;ll review your equipment information<br />
              2. Prepare your custom maintenance contract<br />
              3. Email you the contract for signature<br />
              4. Schedule your first maintenance visit
            </p>
          </div>
          <a
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 rounded-full font-semibold transition text-sm md:text-base"
          >
            Return to Homepage
          </a>
        </div>
      </div>
    );
  }

  const equipmentTypes = [
    { name: "Furnace", field: "hasFurnace" },
    { name: "Condenser", field: "hasCondenser" },
    { name: "Refrigeration Unit", field: "hasRefrigerationUnit" },
    { name: "Rooftop Unit", field: "hasRooftopUnit" },
    { name: "High Efficiency Boiler", field: "hasHighEfficiencyBoiler" },
    { name: "Tankless Water Heater", field: "hasTanklessWaterHeater" },
    { name: "Hydronic Conventional Boiler (Natural Gas)", field: "hasHydronicConventionalBoiler" },
    { name: "Steam Boiler", field: "hasSteamBoiler" },
    { name: "Hydronic Air Handler", field: "hasHydronicAirHandler" },
    { name: "Heat Pump", field: "hasHeatPump" },
    { name: "Mini Split", field: "hasMiniSplit" },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
      {/* Honeypot */}
      <input
        type="text"
        name="company"
        value={formData.company || ""}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      {/* Contact Information */}
      <div className="bg-white rounded-xl md:rounded-2xl border-2 border-gray-200 p-5 md:p-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
          <Home className="w-5 h-5 md:w-6 md:h-6 text-orange-600" />
          Contact Information
        </h2>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required
              className="w-full px-4 py-3 text-base rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required
              className="w-full px-4 py-3 text-base rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required
              className="w-full px-4 py-3 text-base rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="(201) 787-5657"
              className="w-full px-4 py-3 text-base rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:outline-none" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Street Address *</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} required
              className="w-full px-4 py-3 text-base rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">City *</label>
            <input type="text" name="city" value={formData.city} onChange={handleChange} required
              className="w-full px-4 py-3 text-base rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:outline-none" />
          </div>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">State *</label>
              <input type="text" name="state" value={formData.state} onChange={handleChange} required
                className="w-full px-4 py-3 text-base rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Zip Code *</label>
              <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} required
                className="w-full px-4 py-3 text-base rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:outline-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Property Type */}
      <div className="bg-white rounded-xl md:rounded-2xl border-2 border-gray-200 p-5 md:p-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
          <Building2 className="w-5 h-5 md:w-6 md:h-6 text-orange-600" />
          Property Information
        </h2>
        <div className="mb-4 md:mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Property Type *</label>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <label className="flex items-center gap-3 p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-orange-500 min-h-[44px]">
              <input type="radio" name="propertyType" value="residential" checked={formData.propertyType === "residential"} onChange={handleChange}
                className="w-5 h-5 text-orange-600" />
              <span className="font-medium text-base">Residential</span>
            </label>
            <label className="flex items-center gap-3 p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-orange-500 min-h-[44px]">
              <input type="radio" name="propertyType" value="commercial" checked={formData.propertyType === "commercial"} onChange={handleChange}
                className="w-5 h-5 text-orange-600" />
              <span className="font-medium text-base">Commercial</span>
            </label>
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Number of HVAC Systems *</label>
          <select name="numberOfSystems" value={formData.numberOfSystems} onChange={handleChange} required
            className="w-full px-4 py-3 text-base rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:outline-none">
            <option value="1">1 System</option>
            <option value="2">2 Systems</option>
            <option value="3">3 Systems</option>
            <option value="4+">4+ Systems</option>
          </select>
        </div>
      </div>

      {/* Equipment Information */}
      <div className="bg-white rounded-xl md:rounded-2xl border-2 border-gray-200 p-5 md:p-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
          <Wrench className="w-5 h-5 md:w-6 md:h-6 text-orange-600" />
          Equipment Information
        </h2>
        <p className="text-base text-gray-600 mb-4 md:mb-6">Select all equipment types you have:</p>
        <div className="grid md:grid-cols-2 gap-3 md:gap-4">
          {equipmentTypes.map((equipment) => (
            <label key={equipment.field}
              className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors min-h-[44px]">
              <input type="checkbox" name={equipment.field}
                checked={formData[equipment.field as keyof typeof formData] as boolean}
                onChange={handleChange} className="w-5 h-5 text-orange-600 rounded" />
              <span className="text-base font-medium text-gray-900">{equipment.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Additional Information */}
      <div className="bg-white rounded-xl md:rounded-2xl border-2 border-gray-200 p-5 md:p-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Additional Information</h2>
        <div className="mb-4 md:mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Contact Method</label>
          <select name="preferredContactMethod" value={formData.preferredContactMethod} onChange={handleChange}
            className="w-full px-4 py-3 text-base rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:outline-none">
            <option value="phone">Phone</option>
            <option value="email">Email</option>
            <option value="text">Text Message</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Notes (Optional)</label>
          <textarea name="additionalNotes" value={formData.additionalNotes} onChange={handleChange} rows={4}
            placeholder="Any specific concerns or information we should know?"
            className="w-full px-4 py-3 text-base rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:outline-none resize-none" />
        </div>
      </div>

      {/* Submit */}
      <div className="text-center">
        <button type="submit" disabled={isSubmitting}
          className="bg-orange-600 hover:bg-orange-700 disabled:bg-gray-400 text-white px-8 md:px-12 py-4 rounded-full font-bold text-lg shadow-lg transition-all disabled:cursor-not-allowed w-full sm:w-auto min-h-[52px]">
          {isSubmitting ? "Submitting..." : "Request Maintenance Contract"}
        </button>
        <p className="mt-3 text-sm text-gray-600">We&apos;ll email you a custom contract within 24 hours</p>
      </div>
    </form>
  );
}
