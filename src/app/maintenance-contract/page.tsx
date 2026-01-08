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
    systemTypes: [] as string[],
    
    // Specific Equipment
    hasFurnace: false,
    furnaceBrand: "",
    furnaceAge: "",
    
    hasAC: false,
    acBrand: "",
    acAge: "",
    
    hasHeatPump: false,
    heatPumpBrand: "",
    heatPumpAge: "",
    
    hasMiniSplit: false,
    miniSplitBrand: "",
    miniSplitAge: "",
    
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
        <div className="max-w-3xl mx-auto px-6 py-20">
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
              Thank You!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We've received your maintenance contract request. Our team will review your information and send you a customized maintenance contract within 24 hours.
            </p>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 mb-8">
              <p className="text-gray-700">
                <strong>What's Next?</strong><br />
                1. We'll review your equipment information<br />
                2. Prepare your custom maintenance contract<br />
                3. Email you the contract for signature<br />
                4. Schedule your first maintenance visit
              </p>
            </div>
            <a
              href="/"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition"
            >
              Return to Homepage
            </a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-orange-700 to-amber-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-4">
            <Wrench className="w-4 h-4" />
            MAINTENANCE CONTRACT
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Sign Up for Preventative Maintenance
          </h1>
          <p className="text-xl text-orange-100">
            Protect your investment and keep your HVAC system running smoothly year-round
          </p>
        </div>
      </section>

      {/* Benefits Banner */}
      <section className="py-8 bg-orange-50 border-y border-orange-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-orange-900">One Visit/Year</div>
              <div className="text-sm text-gray-700">Complete tune-up</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-900">10% Off Parts</div>
              <div className="text-sm text-gray-700">Member discount</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-900">Priority Service</div>
              <div className="text-sm text-gray-700">Skip the line</div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <form onSubmit={handleSubmit} className="space-y-8">
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
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Home className="w-6 h-6 text-orange-600" />
                Contact Information
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(201) 787-5657"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:outline-none"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:outline-none"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      State *
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Zip Code *
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Property Type */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Building2 className="w-6 h-6 text-orange-600" />
                Property Information
              </h2>
              
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Property Type *
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <label className="flex items-center gap-3 p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-orange-500 has-checked:border-orange-500 has-checked:bg-orange-50">
                    <input
                      type="radio"
                      name="propertyType"
                      value="residential"
                      checked={formData.propertyType === "residential"}
                      onChange={handleChange}
                      className="w-5 h-5 text-orange-600"
                    />
                    <span className="font-medium">Residential</span>
                  </label>
                  
                  <label className="flex items-center gap-3 p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-orange-500 has-checked:border-orange-500 has-checked:bg-orange-50">
                    <input
                      type="radio"
                      name="propertyType"
                      value="commercial"
                      checked={formData.propertyType === "commercial"}
                      onChange={handleChange}
                      className="w-5 h-5 text-orange-600"
                    />
                    <span className="font-medium">Commercial</span>
                  </label>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Number of HVAC Systems *
                </label>
                <select
                  name="numberOfSystems"
                  value={formData.numberOfSystems}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:outline-none"
                >
                  <option value="1">1 System</option>
                  <option value="2">2 Systems</option>
                  <option value="3">3 Systems</option>
                  <option value="4+">4+ Systems</option>
                </select>
              </div>
            </div>

            {/* Equipment Information */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Wrench className="w-6 h-6 text-orange-600" />
                Equipment Information
              </h2>
              
              <p className="text-gray-600 mb-6">
                Please check all equipment types you have and provide details:
              </p>

              {/* Furnace */}
              <div className="mb-6 p-6 bg-gray-50 rounded-xl">
                <label className="flex items-center gap-3 mb-4 cursor-pointer">
                  <input
                    type="checkbox"
                    name="hasFurnace"
                    checked={formData.hasFurnace}
                    onChange={handleChange}
                    className="w-5 h-5 text-orange-600 rounded"
                  />
                  <span className="text-lg font-semibold text-gray-900">Furnace</span>
                </label>
                
                {formData.hasFurnace && (
                  <div className="grid md:grid-cols-2 gap-4 ml-8">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Brand</label>
                      <input
                        type="text"
                        name="furnaceBrand"
                        value={formData.furnaceBrand}
                        onChange={handleChange}
                        placeholder="e.g., Trane, Carrier, Lennox"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Approximate Age</label>
                      <input
                        type="text"
                        name="furnaceAge"
                        value={formData.furnaceAge}
                        onChange={handleChange}
                        placeholder="e.g., 5 years, 10 years"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-500 focus:outline-none"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Air Conditioner */}
              <div className="mb-6 p-6 bg-gray-50 rounded-xl">
                <label className="flex items-center gap-3 mb-4 cursor-pointer">
                  <input
                    type="checkbox"
                    name="hasAC"
                    checked={formData.hasAC}
                    onChange={handleChange}
                    className="w-5 h-5 text-orange-600 rounded"
                  />
                  <span className="text-lg font-semibold text-gray-900">Air Conditioner (Central AC)</span>
                </label>
                
                {formData.hasAC && (
                  <div className="grid md:grid-cols-2 gap-4 ml-8">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Brand</label>
                      <input
                        type="text"
                        name="acBrand"
                        value={formData.acBrand}
                        onChange={handleChange}
                        placeholder="e.g., Trane, Carrier, Lennox"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Approximate Age</label>
                      <input
                        type="text"
                        name="acAge"
                        value={formData.acAge}
                        onChange={handleChange}
                        placeholder="e.g., 3 years, 8 years"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-500 focus:outline-none"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Heat Pump */}
              <div className="mb-6 p-6 bg-gray-50 rounded-xl">
                <label className="flex items-center gap-3 mb-4 cursor-pointer">
                  <input
                    type="checkbox"
                    name="hasHeatPump"
                    checked={formData.hasHeatPump}
                    onChange={handleChange}
                    className="w-5 h-5 text-orange-600 rounded"
                  />
                  <span className="text-lg font-semibold text-gray-900">Heat Pump</span>
                </label>
                
                {formData.hasHeatPump && (
                  <div className="grid md:grid-cols-2 gap-4 ml-8">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Brand</label>
                      <input
                        type="text"
                        name="heatPumpBrand"
                        value={formData.heatPumpBrand}
                        onChange={handleChange}
                        placeholder="e.g., Trane, Carrier, Lennox"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Approximate Age</label>
                      <input
                        type="text"
                        name="heatPumpAge"
                        value={formData.heatPumpAge}
                        onChange={handleChange}
                        placeholder="e.g., 2 years, 6 years"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-500 focus:outline-none"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Mini Split */}
              <div className="p-6 bg-gray-50 rounded-xl">
                <label className="flex items-center gap-3 mb-4 cursor-pointer">
                  <input
                    type="checkbox"
                    name="hasMiniSplit"
                    checked={formData.hasMiniSplit}
                    onChange={handleChange}
                    className="w-5 h-5 text-orange-600 rounded"
                  />
                  <span className="text-lg font-semibold text-gray-900">Mini Split System</span>
                </label>
                
                {formData.hasMiniSplit && (
                  <div className="grid md:grid-cols-2 gap-4 ml-8">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Brand</label>
                      <input
                        type="text"
                        name="miniSplitBrand"
                        value={formData.miniSplitBrand}
                        onChange={handleChange}
                        placeholder="e.g., Mitsubishi, Daikin, Fujitsu"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Approximate Age</label>
                      <input
                        type="text"
                        name="miniSplitAge"
                        value={formData.miniSplitAge}
                        onChange={handleChange}
                        placeholder="e.g., 1 year, 4 years"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-500 focus:outline-none"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Additional Information
              </h2>
              
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Preferred Contact Method
                </label>
                <select
                  name="preferredContactMethod"
                  value={formData.preferredContactMethod}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:outline-none"
                >
                  <option value="phone">Phone</option>
                  <option value="email">Email</option>
                  <option value="text">Text Message</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Additional Notes (Optional)
                </label>
                <textarea
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Any specific concerns or information we should know about your HVAC system?"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:outline-none resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-orange-600 hover:bg-orange-700 disabled:bg-gray-400 text-white px-12 py-4 rounded-full font-bold text-lg shadow-lg transition-all disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Request Maintenance Contract"}
              </button>
              
              <p className="mt-4 text-sm text-gray-600">
                We'll review your information and email you a custom maintenance contract within 24 hours
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
            What's Included in Your Maintenance Plan
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "One comprehensive visit per year",
              "Filter replacement (if provided) or standard filter installation",
              "Refrigerant levels check",
              "Electrical components inspection",
              "Condensate drain line cleaning",
              "Discharge temperature check",
              "Visual mold inspection",
              "Odor neutralizer application",
              "Evaporator coil disinfection",
              "Outdoor unit coil washing",
              "10% discount on all parts",
              "Priority scheduling",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}