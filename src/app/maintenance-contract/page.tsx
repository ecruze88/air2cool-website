"use client";

import { useState } from "react";
import { Wrench, CheckCircle, Home, Building2 } from "lucide-react";

export default function MaintenanceContractPage() {
  const [formData, setFormData] = useState({
    // Honeypot
    company: "",
    
    // Contact Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "NJ",
    zipCode: "",
    
    // Property Type
    propertyType: "residential",
    
    // System Info
    numberOfSystems: "1",
    
    // Equipment - just boolean flags
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
    
    // Additional Info
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

      const json = await res.json().catch(() => ({} as any));

      if (!res.ok) {
        alert("Submission failed. Please call us at (201) 787-5657 instead.");
        setIsSubmitting(false);
        return;
      }

      console.log("Maintenance Contract Submitted:", formData);
      setSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
      alert("Submission failed. Please call us at (201) 787-5657 instead.");
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <main className="bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
          <div className="text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <CheckCircle className="w-10 h-10 md:w-12 md:h-12 text-green-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 md:mb-4">
              Thank You!
            </h1>
            <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8">
              We've received your maintenance contract request. Our team will send you a customized contract within 24 hours.
            </p>
            <div className="bg-blue-50 rounded-xl p-5 md:p-6 border border-blue-200 mb-6 md:mb-8">
              <p className="text-sm md:text-base text-gray-700 text-left">
                <strong>What's Next?</strong><br />
                1. We'll review your equipment information<br />
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
      </main>
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
    <main className="bg-white">
      {/* Hero Section - MOBILE OPTIMIZED */}
      <section className="bg-gradient-to-r from-orange-700 to-amber-600 text-white py-10 md:py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-1.5 md:gap-2 bg-orange-600 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
            <Wrench className="w-3 h-3 md:w-4 md:h-4" />
            MAINTENANCE CONTRACT
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-3 md:mb-4">
            Sign Up for Preventative Maintenance
          </h1>
          <p className="text-base md:text-xl text-orange-100">
            Protect your investment and keep your HVAC system running smoothly year-round
          </p>
        </div>
      </section>

      {/* Benefits Banner - MOBILE OPTIMIZED */}
      <section className="py-6 md:py-8 bg-orange-50 border-y border-orange-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 text-center">
            <div>
              <div className="text-xl md:text-2xl font-bold text-orange-900">20% Off Parts</div>
              <div className="text-xs md:text-sm text-gray-700">Member discount</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-bold text-orange-900">Priority Service</div>
              <div className="text-xs md:text-sm text-gray-700">Skip the line</div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="text-xl md:text-2xl font-bold text-orange-900">Expert Care</div>
              <div className="text-xs md:text-sm text-gray-700">Licensed technicians</div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section - MOBILE OPTIMIZED */}
      <section className="py-10 md:py-16">
        <div className="max-w-4xl mx-auto px-6">
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
                  <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(201) 787-5657"
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:outline-none"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:outline-none"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                      State *
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                      Zip Code *
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:outline-none"
                    />
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
                <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2 md:mb-3">
                  Property Type *
                </label>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <label className="flex items-center gap-2 md:gap-3 p-3 md:p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-orange-500">
                    <input
                      type="radio"
                      name="propertyType"
                      value="residential"
                      checked={formData.propertyType === "residential"}
                      onChange={handleChange}
                      className="w-4 h-4 md:w-5 md:h-5 text-orange-600"
                    />
                    <span className="font-medium text-sm md:text-base">Residential</span>
                  </label>
                  
                  <label className="flex items-center gap-2 md:gap-3 p-3 md:p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-orange-500">
                    <input
                      type="radio"
                      name="propertyType"
                      value="commercial"
                      checked={formData.propertyType === "commercial"}
                      onChange={handleChange}
                      className="w-4 h-4 md:w-5 md:h-5 text-orange-600"
                    />
                    <span className="font-medium text-sm md:text-base">Commercial</span>
                  </label>
                </div>
              </div>
              
              <div>
                <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                  Number of HVAC Systems *
                </label>
                <select
                  name="numberOfSystems"
                  value={formData.numberOfSystems}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:outline-none"
                >
                  <option value="1">1 System</option>
                  <option value="2">2 Systems</option>
                  <option value="3">3 Systems</option>
                  <option value="4+">4+ Systems</option>
                </select>
              </div>
            </div>

            {/* Equipment Information - CHECKBOXES ONLY */}
            <div className="bg-white rounded-xl md:rounded-2xl border-2 border-gray-200 p-5 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
                <Wrench className="w-5 h-5 md:w-6 md:h-6 text-orange-600" />
                Equipment Information
              </h2>
              
              <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                Select all equipment types you have:
              </p>

              <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                {equipmentTypes.map((equipment) => (
                  <label 
                    key={equipment.field} 
                    className="flex items-center gap-3 p-3 md:p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                  >
                    <input
                      type="checkbox"
                      name={equipment.field}
                      checked={formData[equipment.field as keyof typeof formData] as boolean}
                      onChange={handleChange}
                      className="w-5 h-5 text-orange-600 rounded"
                    />
                    <span className="text-sm md:text-base font-medium text-gray-900">
                      {equipment.name}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-white rounded-xl md:rounded-2xl border-2 border-gray-200 p-5 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                Additional Information
              </h2>
              
              <div className="mb-4 md:mb-6">
                <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                  Preferred Contact Method
                </label>
                <select
                  name="preferredContactMethod"
                  value={formData.preferredContactMethod}
                  onChange={handleChange}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:outline-none"
                >
                  <option value="phone">Phone</option>
                  <option value="email">Email</option>
                  <option value="text">Text Message</option>
                </select>
              </div>
              
              <div>
                <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                  Additional Notes (Optional)
                </label>
                <textarea
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Any specific concerns or information we should know?"
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:outline-none resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-orange-600 hover:bg-orange-700 disabled:bg-gray-400 text-white px-8 md:px-12 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg transition-all disabled:cursor-not-allowed w-full sm:w-auto"
              >
                {isSubmitting ? "Submitting..." : "Request Maintenance Contract"}
              </button>
              
              <p className="mt-3 md:mt-4 text-xs md:text-sm text-gray-600">
                We'll email you a custom contract within 24 hours
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Maintenance Plan Benefits - MOBILE OPTIMIZED */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6 md:mb-8 text-center">
            Your Maintenance Plan Benefits
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {[
              "Annual professional inspection",
              "Comprehensive system tune-up",
              "Safety checks and testing",
              "Performance optimization",
              "Early problem detection",
              "Extended equipment lifespan",
              "20% discount on all parts",
              "20% discount on repairs",
              "Priority scheduling",
              "Peace of mind protection",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 md:gap-3">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-orange-600 shrink-0 mt-0.5" />
                <span className="text-sm md:text-base text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}