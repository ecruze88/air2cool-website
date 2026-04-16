"use client";

import { useState, useEffect } from "react";
import { Phone, MessageSquare, Clock, CheckCircle, Star, AlertCircle, Mail, DollarSign } from "lucide-react";

const EMERGENCY_SERVICES = [
  "No Heat / Furnace Not Working",
  "No AC / Not Cooling",
  "Boiler Not Working",
  "Strange Noises or Smells",
  "Gas Leak",
  "Other Emergency",
] as const;

const ESTIMATE_SERVICES = [
  "New Furnace Installation",
  "New Boiler Installation (Hydronic/Steam/NTI)",
  "New AC Installation",
  "New Heat Pump Installation",
  "Complete HVAC Replacement",
  "Mini Split Installation",
  "Humidifier Installation",
  "Other",
] as const;

export default function ContactClientDual() {
  const [emergencySent, setEmergencySent] = useState(false);
  const [estimateSent, setEstimateSent] = useState(false);
  const [emergencyError, setEmergencyError] = useState("");
  const [estimateError, setEstimateError] = useState("");

  const phoneNumber = "+1-201-787-5657";
  const telHref = "tel:+12017875657";

  useEffect(() => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (!siteKey) return;
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  async function getRecaptchaToken(action: string): Promise<string> {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (!siteKey) return '';
    return new Promise((resolve) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).grecaptcha.ready(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).grecaptcha.execute(siteKey, { action }).then(resolve);
      });
    });
  }

  function isValidEmergency(fields: Record<string, FormDataEntryValue>) {
    const name = String(fields.name || "").trim();
    const phone = String(fields.phone || "").trim();
    const email = String(fields.email || "").trim();
    const address = String(fields.address || "").trim();
    const town = String(fields.town || "").trim();
    const problem = String(fields.problem || "").trim();

    if (!name || name.length > 80) return false;
    if (!phone || phone.length > 32) return false;
    if (!email || email.length > 140) return false;
    if (!address || address.length > 200) return false;
    if (!town || town.length > 100) return false;
    if (!problem || problem.length > 200) return false;

    return true;
  }

  function isValidEstimate(fields: Record<string, FormDataEntryValue>) {
    const name = String(fields.name || "").trim();
    const email = String(fields.email || "").trim();
    const phone = String(fields.phone || "").trim();
    const address = String(fields.address || "").trim();
    const town = String(fields.town || "").trim();
    const service = String(fields.service || "").trim();
    const message = String(fields.message || "").trim();

    if (!name || name.length > 80) return false;
    if (!email || email.length > 140) return false;
    if (!phone || phone.length > 32) return false;
    if (!address || address.length > 200) return false;
    if (!town || town.length > 100) return false;
    if (!service || service.length > 100) return false;
    if (!message || message.length > 1000) return false;

    return true;
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-blue-50">
      {/* Emergency Banner - MOBILE OPTIMIZED */}
      <div className="bg-red-600 text-white py-2 md:py-3">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-2 md:gap-3 text-xs md:text-sm font-semibold">
          <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
          <span>24/7 Emergency Service</span>
          <span className="hidden sm:inline">•</span>
          <a href={telHref} className="hidden sm:inline hover:underline">
            (201) 787-5657
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Header - MOBILE OPTIMIZED */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 md:mb-4">
            Schedule HVAC Service in North NJ
          </h1>
          <p className="text-base md:text-xl text-gray-600 mb-4 md:mb-6">
            Emergency AC repair, furnace repair, or planning a new installation? We're here 24/7.
          </p>

          {/* Social Proof - MOBILE OPTIMIZED */}
          <div className="flex items-center justify-center gap-3 md:gap-4 flex-wrap">
            <div className="flex items-center gap-2 bg-white rounded-full px-3 md:px-4 py-1.5 md:py-2 shadow-sm border border-gray-200">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-semibold text-gray-900 text-sm md:text-base">5.0</span>
              <span className="text-xs md:text-sm text-gray-600">· 250+ Reviews</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2 text-gray-700 text-xs md:text-base">
              <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
              <span className="font-semibold">Licensed & Insured</span>
            </div>
          </div>
        </div>

        {/* Two Forms - MOBILE OPTIMIZED */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          
          {/* EMERGENCY FORM */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl md:rounded-3xl p-0.5 md:p-1">
            <div className="bg-white rounded-[15px] md:rounded-[22px] p-5 md:p-8 h-full">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-red-600 rounded-lg md:rounded-xl flex items-center justify-center shrink-0">
                  <AlertCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-extrabold text-gray-900">
                    Emergency Service
                  </h2>
                  <p className="text-xs md:text-sm text-gray-600">Response within 2 hours</p>
                </div>
              </div>

              {/* Quick Call Buttons */}
              <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                <a
                  href={telHref}
                  className="flex items-center justify-center gap-2 md:gap-3 w-full bg-red-600 hover:bg-red-700 text-white px-5 md:px-6 py-3 md:py-4 rounded-lg md:rounded-xl font-bold text-base md:text-lg shadow-lg transition-all"
                >
                  <Phone className="w-4 h-4 md:w-5 md:h-5" />
                  Call (201) 787-5657
                </a>
                <a
                  href="sms:+12017875657"
                  className="flex items-center justify-center gap-2 md:gap-3 w-full bg-blue-600 hover:bg-blue-700 text-white px-5 md:px-6 py-3 md:py-4 rounded-lg md:rounded-xl font-bold text-base md:text-lg shadow-lg transition-all"
                >
                  <MessageSquare className="w-4 h-4 md:w-5 md:h-5" />
                  Text Us Now
                </a>
              </div>

              <div className="relative mb-4 md:mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-xs md:text-sm">
                  <span className="px-3 md:px-4 bg-white text-gray-500">Or submit request</span>
                </div>
              </div>

              {emergencySent ? (
                <div className="text-center py-6 md:py-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    Emergency Request Sent!
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                    We'll call you within 2 hours.
                  </p>
                  <a
                    href={telHref}
                    className="inline-flex items-center gap-2 text-red-700 font-semibold hover:underline text-sm md:text-base"
                  >
                    <Phone className="w-4 h-4" />
                    Need immediate help? Call now
                  </a>
                </div>
              ) : (
                <form
                  className="space-y-3 md:space-y-4"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setEmergencyError("");

                    const formData = new FormData(e.currentTarget);
                    const data = Object.fromEntries(formData);

                    if (!isValidEmergency(data)) {
                      setEmergencyError("Please fill out all required fields.");
                      return;
                    }

                    try {
                      const recaptchaToken = await getRecaptchaToken('emergency');
                      const res = await fetch("/api/contact", {
                        method: "POST",
                        body: JSON.stringify({
                          type: "emergency",
                          recaptchaToken,
                          name: data.name,
                          email: data.email,
                          phone: data.phone,
                          address: data.address,
                          town: data.town,
                          problem: data.problem,
                          description: data.description || "",
                        }),
                        headers: { "Content-Type": "application/json" },
                      });

                      if (!res.ok) {
                        setEmergencyError("Submission failed. Please call (201) 787-5657");
                        return;
                      }

                      setEmergencySent(true);
                    } catch {
                      setEmergencyError("Submission failed. Please call (201) 787-5657");
                    }
                  }}
                >
                  {/* Name */}
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-gray-900 mb-1.5 md:mb-2">
                      Your Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      name="name"
                      placeholder="John Smith"
                      required
                      maxLength={80}
                      className="w-full rounded-lg md:rounded-xl border-2 border-gray-200 bg-gray-50 px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base text-gray-900 outline-none focus:border-red-500 focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-gray-900 mb-1.5 md:mb-2">
                      Phone Number <span className="text-red-600">*</span>
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="(201) 555-1234"
                      required
                      maxLength={32}
                      className="w-full rounded-lg md:rounded-xl border-2 border-gray-200 bg-gray-50 px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base text-gray-900 outline-none focus:border-red-500 focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-gray-900 mb-1.5 md:mb-2">
                      Email <span className="text-red-600">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="john@email.com"
                      required
                      maxLength={140}
                      className="w-full rounded-lg md:rounded-xl border-2 border-gray-200 bg-gray-50 px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base text-gray-900 outline-none focus:border-red-500 focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-gray-900 mb-1.5 md:mb-2">
                      Service Address <span className="text-red-600">*</span>
                    </label>
                    <input
                      name="address"
                      placeholder="123 Main St"
                      required
                      maxLength={200}
                      className="w-full rounded-lg md:rounded-xl border-2 border-gray-200 bg-gray-50 px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base text-gray-900 outline-none focus:border-red-500 focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Town/City */}
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-gray-900 mb-1.5 md:mb-2">
                      Town/City <span className="text-red-600">*</span>
                    </label>
                    <input
                      name="town"
                      placeholder="Dover"
                      required
                      maxLength={100}
                      className="w-full rounded-lg md:rounded-xl border-2 border-gray-200 bg-gray-50 px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base text-gray-900 outline-none focus:border-red-500 focus:bg-white transition-colors"
                      style={{ minHeight: "44px" }}
                    />
                  </div>

                  {/* Problem Type */}
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-gray-900 mb-1.5 md:mb-2">
                      What's the problem? <span className="text-red-600">*</span>
                    </label>
                    <select
                      name="problem"
                      required
                      className="w-full rounded-lg md:rounded-xl border-2 border-gray-200 bg-gray-50 px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base text-gray-900 outline-none focus:border-red-500 focus:bg-white transition-colors"
                      defaultValue=""
                    >
                      <option value="" disabled>Select problem type</option>
                      {EMERGENCY_SERVICES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Brief Description - Hide on mobile */}
                  <div className="hidden md:block">
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Brief Description <span className="text-gray-500 text-xs">(optional)</span>
                    </label>
                    <textarea
                      name="description"
                      placeholder="Any additional details..."
                      maxLength={300}
                      rows={2}
                      className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none focus:border-red-500 focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white px-5 md:px-6 py-3 md:py-4 rounded-lg md:rounded-xl font-bold text-base md:text-lg shadow-lg transition-all"
                  >
                    Send Emergency Request →
                  </button>

                  {emergencyError && (
                    <div className="rounded-lg md:rounded-xl border-2 border-red-200 bg-red-50 p-2.5 md:p-3 text-xs md:text-sm text-red-800 font-medium">
                      {emergencyError}
                    </div>
                  )}

                  <p className="text-xs text-center text-gray-500 flex items-center justify-center gap-1">
                    <Clock className="w-3 h-3" />
                    We'll call within 2 hours
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* ESTIMATE FORM */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl md:rounded-3xl p-0.5 md:p-1">
            <div className="bg-white rounded-[15px] md:rounded-[22px] p-5 md:p-8 h-full">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-lg md:rounded-xl flex items-center justify-center shrink-0">
                  <DollarSign className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-extrabold text-gray-900">
                    Free Estimate
                  </h2>
                  <p className="text-xs md:text-sm text-gray-600">Response within 24 hours</p>
                </div>
              </div>

              {estimateSent ? (
                <div className="text-center py-6 md:py-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    Estimate Request Received!
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                    We'll contact you within 24 hours to schedule your free estimate.
                  </p>
                  <p className="text-xs md:text-sm text-gray-500">
                    Check your email for confirmation.
                  </p>
                </div>
              ) : (
                <form
                  className="space-y-3 md:space-y-4"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setEstimateError("");

                    const formData = new FormData(e.currentTarget);
                    const data = Object.fromEntries(formData);

                    if (!isValidEstimate(data)) {
                      setEstimateError("Please fill out all required fields.");
                      return;
                    }

                    try {
                      const recaptchaToken = await getRecaptchaToken('estimate');
                      const res = await fetch("/api/contact", {
                        method: "POST",
                        body: JSON.stringify({
                          type: "estimate",
                          recaptchaToken,
                          name: data.name,
                          email: data.email,
                          phone: data.phone,
                          address: data.address,
                          town: data.town,
                          service: data.service,
                          message: data.message,
                          financing: data.financing === "on",
                        }),
                        headers: { "Content-Type": "application/json" },
                      });

                      if (!res.ok) {
                        setEstimateError("Submission failed. Please call (201) 787-5657");
                        return;
                      }

                      setEstimateSent(true);
                    } catch {
                      setEstimateError("Submission failed. Please call (201) 787-5657");
                    }
                  }}
                >
                  {/* Name */}
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-gray-900 mb-1.5 md:mb-2">
                      Your Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      name="name"
                      placeholder="John Smith"
                      required
                      maxLength={80}
                      className="w-full rounded-lg md:rounded-xl border-2 border-gray-200 bg-gray-50 px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base text-gray-900 outline-none focus:border-blue-500 focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs md:text-sm font-semibold text-gray-900 mb-1.5 md:mb-2">
                        Email <span className="text-red-600">*</span>
                      </label>
                      <input
                        name="email"
                        type="email"
                        placeholder="john@email.com"
                        required
                        maxLength={140}
                        className="w-full rounded-lg md:rounded-xl border-2 border-gray-200 bg-gray-50 px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base text-gray-900 outline-none focus:border-blue-500 focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs md:text-sm font-semibold text-gray-900 mb-1.5 md:mb-2">
                        Phone <span className="text-red-600">*</span>
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        placeholder="(201) 555-1234"
                        required
                        maxLength={32}
                        className="w-full rounded-lg md:rounded-xl border-2 border-gray-200 bg-gray-50 px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base text-gray-900 outline-none focus:border-blue-500 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Address + Town */}
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-gray-900 mb-1.5 md:mb-2">
                      Service Address <span className="text-red-600">*</span>
                    </label>
                    <input
                      name="address"
                      placeholder="123 Main St"
                      required
                      maxLength={200}
                      className="w-full rounded-lg md:rounded-xl border-2 border-gray-200 bg-gray-50 px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base text-gray-900 outline-none focus:border-blue-500 focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Town/City */}
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-gray-900 mb-1.5 md:mb-2">
                      Town/City <span className="text-red-600">*</span>
                    </label>
                    <input
                      name="town"
                      placeholder="Dover"
                      required
                      maxLength={100}
                      className="w-full rounded-lg md:rounded-xl border-2 border-gray-200 bg-gray-50 px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base text-gray-900 outline-none focus:border-blue-500 focus:bg-white transition-colors"
                      style={{ minHeight: "44px" }}
                    />
                  </div>

                  {/* Service Type */}
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-gray-900 mb-1.5 md:mb-2">
                      What do you need? <span className="text-red-600">*</span>
                    </label>
                    <select
                      name="service"
                      required
                      className="w-full rounded-lg md:rounded-xl border-2 border-gray-200 bg-gray-50 px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base text-gray-900 outline-none focus:border-blue-500 focus:bg-white transition-colors"
                      defaultValue=""
                    >
                      <option value="" disabled>Select a service</option>
                      {ESTIMATE_SERVICES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-gray-900 mb-1.5 md:mb-2">
                      Additional Details <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      name="message"
                      placeholder="Tell us about your project..."
                      required
                      maxLength={1000}
                      rows={3}
                      className="w-full rounded-lg md:rounded-xl border-2 border-gray-200 bg-gray-50 px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base text-gray-900 outline-none focus:border-blue-500 focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  {/* Financing Checkbox */}
                  <div className="flex items-start gap-2 md:gap-3 bg-green-50 p-3 md:p-4 rounded-lg md:rounded-xl border border-green-200">
                    <input
                      type="checkbox"
                      name="financing"
                      id="financing"
                      className="mt-0.5 md:mt-1 w-4 h-4 text-green-600 rounded"
                    />
                    <label htmlFor="financing" className="text-xs md:text-sm text-gray-700 cursor-pointer">
                      <span className="font-semibold">Interested in 0% financing</span> (up to $25k)
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-5 md:px-6 py-3 md:py-4 rounded-lg md:rounded-xl font-bold text-base md:text-lg shadow-lg transition-all"
                  >
                    Get Your Free Estimate →
                  </button>

                  {estimateError && (
                    <div className="rounded-lg md:rounded-xl border-2 border-red-200 bg-red-50 p-2.5 md:p-3 text-xs md:text-sm text-red-800 font-medium">
                      {estimateError}
                    </div>
                  )}

                  <p className="text-xs text-center text-gray-500 flex items-center justify-center gap-1">
                    <Mail className="w-3 h-3" />
                    Response within 24 hours
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Trust Section - MOBILE OPTIMIZED */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl md:rounded-2xl p-5 md:p-8 border-2 border-green-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
            <div>
              <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-green-600 mx-auto mb-1.5 md:mb-2" />
              <p className="font-bold text-gray-900 text-xs md:text-base">Family Owned</p>
              <p className="text-xs md:text-sm text-gray-600">Since 1998</p>
            </div>
            <div>
              <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-green-600 mx-auto mb-1.5 md:mb-2" />
              <p className="font-bold text-gray-900 text-xs md:text-base">Honest Pricing</p>
              <p className="text-xs md:text-sm text-gray-600">No upsells</p>
            </div>
            <div>
              <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-green-600 mx-auto mb-1.5 md:mb-2" />
              <p className="font-bold text-gray-900 text-xs md:text-base">Same-Day</p>
              <p className="text-xs md:text-sm text-gray-600">When needed</p>
            </div>
            <div>
              <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-green-600 mx-auto mb-1.5 md:mb-2" />
              <p className="font-bold text-gray-900 text-xs md:text-base">0% Financing</p>
              <p className="text-xs md:text-sm text-gray-600">Up to $25k</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}