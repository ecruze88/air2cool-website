import type { Metadata } from "next";
import { Phone, CheckCircle, Star, Clock, Shield, Wrench, MapPin, Snowflake } from "lucide-react";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "AC Repair & Replacement Millburn NJ | Air2Cool HVAC",
  description:
    "Fast AC repair and replacement in Millburn and Short Hills NJ. Air2Cool serves Millburn with same-day AC service, free estimates, and 0% financing. Call (201) 787-5657.",
  alternates: {
    canonical: "https://www.air2cool.com/service-areas/millburn",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.air2cool.com/service-areas/millburn#business",
      "name": "Air2Cool Heating & Cooling",
      "url": "https://www.air2cool.com",
      "telephone": "+1-201-787-5657",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Wharton",
        "addressRegion": "NJ",
        "postalCode": "07885",
        "addressCountry": "US",
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Millburn",
          "addressRegion": "NJ",
          "addressCountry": "US",
        },
        {
          "@type": "Place",
          "name": "Short Hills",
          "addressRegion": "NJ",
          "addressCountry": "US",
        },
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "250",
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "HVAC Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AC Repair Millburn NJ" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AC Replacement Millburn NJ" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Air Conditioning Repair Millburn NJ" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "HVAC Installation Millburn NJ" } },
        ],
      },
    },
    {
      "@type": "Service",
      "name": "AC Repair & Replacement in Millburn and Short Hills, NJ",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Air2Cool Heating & Cooling",
      },
      "areaServed": [
        { "@type": "City", "name": "Millburn", "addressRegion": "NJ" },
        { "@type": "Place", "name": "Short Hills", "addressRegion": "NJ" },
      ],
      "serviceType": "AC Repair, AC Replacement, HVAC Installation",
      "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" },
    },
  ],
};

const SERVICES = [
  { name: "AC Repair", href: "/services/ac-repair", desc: "Fast diagnosis for all makes and models." },
  { name: "AC Installation", href: "/services/cooling-installation", desc: "Energy-efficient systems with 0% financing." },
  { name: "Heating Repair", href: "/services/heating-repair", desc: "Furnace, boiler & heat pump repair." },
  { name: "Heating Installation", href: "/services/heating-installation", desc: "New furnace or heat pump with warranty." },
  { name: "Air Filtration", href: "/services/air-quality", desc: "Whole-home air purifiers & filters." },
  { name: "Humidifiers", href: "/services/humidifier", desc: "Whole-home humidity control systems." },
  { name: "Mini Split", href: "/services/mini-split", desc: "Ductless mini-split installs & service." },
  { name: "Preventative Maintenance", href: "/services/preventative-maintenance", desc: "Annual tune-ups before breakdowns happen." },
];

export default function MillburnPage() {
  return (
    <>
      <Script
        id="schema-millburn"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main className="bg-white">

        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-14 md:py-20 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-5"
            style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: "40px 40px" }}
          />
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-600/70 border border-blue-400/30 px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold mb-5">
              <MapPin className="w-3.5 h-3.5" />
              Essex County · 07041
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight">
              HVAC Service in Millburn, NJ
            </h1>
            <p className="text-base md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Air2Cool has served Millburn and Short Hills since 1998 — AC repair, AC replacement,
              furnace installation, and 24/7 emergency HVAC whenever you need it.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+12017875657"
                className="bg-red-600 hover:bg-red-700 text-white px-7 py-3.5 rounded-full font-bold text-lg transition-all shadow-xl inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" /> Call (201) 787-5657
              </a>
              <Link
                href="/contact"
                className="bg-white/10 border border-white/30 hover:bg-white/20 text-white px-7 py-3.5 rounded-full font-semibold text-lg transition-all text-center"
              >
                Free Estimate
              </Link>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="py-5 bg-blue-50 border-y border-blue-100">
          <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: "5.0 ★", label: "Google Rating" },
              { value: "250+", label: "5-Star Reviews" },
              { value: "Since 1998", label: "Family Owned" },
              { value: "24/7", label: "Emergency Service" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-lg md:text-2xl font-extrabold text-blue-900">{s.value}</div>
                <div className="text-xs md:text-sm text-gray-600 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* AC Repair & Replacement Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                <Snowflake className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                AC Repair &amp; Replacement in Millburn, NJ
              </h2>
            </div>
            <div className="text-sm md:text-base text-gray-700 space-y-4 leading-relaxed">
              <p>
                Air2Cool serves Millburn and the Short Hills area for <strong>AC repair</strong>,{" "}
                <strong>AC replacement</strong>, and full HVAC installation. Whether your system is
                struggling to keep up on a humid summer day or has stopped working entirely, our licensed
                master technicians respond fast — often the same day you call.
              </p>
              <p>
                Millburn&apos;s older homes and larger properties — including many of the estate-style
                residences in the <strong>Short Hills</strong> section of town — frequently run aging
                central AC systems that are well past their useful life. A 15- or 20-year-old system may
                still be running, but it&apos;s costing you money in higher PSE&amp;G bills and putting
                you at risk of a breakdown on the hottest weekend of the year. We&apos;ll give you an
                honest assessment of whether repair or replacement makes more financial sense.
              </p>
              <p>
                For <strong>same-day AC repair in Millburn</strong>, call{" "}
                <a href="tel:+12017875657" className="text-blue-600 hover:underline font-semibold">
                  (201) 787-5657
                </a>{" "}
                or submit a request online. Our Wharton base puts us typically{" "}
                <strong>under 45 minutes from Millburn</strong> — we&apos;re not a distant call center
                dispatching a technician from three counties away.
              </p>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                href="/services/ac-repair"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold text-sm transition-colors"
              >
                <CheckCircle className="w-4 h-4" /> AC Repair Services
              </Link>
              <Link
                href="/services/cooling-installation"
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full font-semibold text-sm transition-colors"
              >
                <Snowflake className="w-4 h-4" /> AC Replacement &amp; Installation
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-10 md:py-14 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center mb-3">
              All HVAC Services in Millburn
            </h2>
            <p className="text-center text-gray-500 mb-8 text-sm md:text-base">
              All major brands serviced. Licensed master technicians, fully insured.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {SERVICES.map((s) => (
                <Link
                  key={s.name}
                  href={s.href}
                  className="group border border-gray-200 rounded-xl p-4 hover:border-blue-500 hover:shadow-md transition-all bg-white"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-sm text-gray-900 group-hover:text-blue-700 transition-colors">
                        {s.name}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{s.desc}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Millburn Homeowners Choose Air2Cool */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center mb-8">
              Why Millburn Homeowners Choose Air2Cool
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  icon: <Shield className="w-6 h-6 text-blue-600" />,
                  title: "Licensed Master Technicians",
                  body: "Every job done by NJ-licensed master HVAC technicians. No subcontractors, no shortcuts.",
                },
                {
                  icon: <Star className="w-6 h-6 text-yellow-500" />,
                  title: "250+ Five-Star Google Reviews",
                  body: "Real customers across North Jersey and Essex County. Check our Google profile before you call.",
                },
                {
                  icon: <Wrench className="w-6 h-6 text-green-600" />,
                  title: "Family Owned Since 1998",
                  body: "We've been servicing Millburn homes for over 26 years. You're getting a neighbor, not a national chain.",
                },
                {
                  icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
                  title: "Free Estimates on Replacements",
                  body: "No cost, no pressure estimates on all AC and HVAC system replacements. We'll tell you exactly what you need.",
                },
                {
                  icon: <Clock className="w-6 h-6 text-red-600" />,
                  title: "Same-Day AC Repair Available",
                  body: "We're based in Wharton — under 45 minutes to Millburn in most cases. Same-day and 24/7 emergency service available.",
                },
                {
                  icon: <MapPin className="w-6 h-6 text-purple-600" />,
                  title: "0% Financing Up to $25K",
                  body: "Through the SaveGreen program. Same-day approval on most applications — don't delay comfort over budget.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <div className="shrink-0 w-11 h-11 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1 text-sm md:text-base">{item.title}</div>
                    <div className="text-xs md:text-sm text-gray-600">{item.body}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-5">
              <p className="font-bold text-gray-900 mb-3">Discounts Available For:</p>
              <div className="flex flex-wrap gap-2">
                {["First Responders", "Veterans & Active Military", "Seniors 65+"].map((g) => (
                  <span
                    key={g}
                    className="inline-flex items-center gap-1.5 bg-white border border-blue-200 text-blue-800 px-3 py-1.5 rounded-full text-sm font-medium"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-blue-500" /> {g}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Local Content */}
        <section className="py-10 md:py-14 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-5">
              Serving Millburn, Short Hills, and Nearby Essex County Communities
            </h2>
            <div className="text-sm md:text-base text-gray-700 space-y-4 leading-relaxed">
              <p>
                Air2Cool Heating &amp; Cooling has been the trusted HVAC contractor for Millburn
                residents since 1998. Based in Wharton, NJ, our technicians know Essex County
                inside and out — from the historic homes near the Millburn town center to the
                larger properties in Short Hills. Whether your PSE&amp;G bill has you watching the
                thermostat or your AC gave out on the hottest day of the year, we pick up the phone 24/7.
              </p>
              <p>
                We also serve{" "}
                {["Maplewood", "South Orange", "Livingston", "Summit"].map((town, i, arr) => (
                  <span key={town}>
                    <Link
                      href={`/service-areas/${town.toLowerCase().replace(/ /g, "-")}`}
                      className="text-blue-600 hover:underline"
                    >
                      {town}
                    </Link>
                    {i < arr.length - 1 ? ", " : ""}
                  </span>
                ))}{" "}
                and surrounding Essex County communities.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Maplewood", "South Orange", "Livingston", "Summit"].map((name) => (
                <Link
                  key={name}
                  href={`/service-areas/${name.toLowerCase().replace(/ /g, "-")}`}
                  className="text-xs bg-white border border-blue-200 px-3 py-1.5 rounded-full text-blue-700 hover:bg-blue-50 transition-colors"
                >
                  {name}
                </Link>
              ))}
              <Link
                href="/service-areas/essex-county"
                className="text-xs bg-white border border-blue-200 px-3 py-1.5 rounded-full text-blue-700 hover:bg-blue-50 transition-colors"
              >
                Essex County →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-blue-700 to-blue-600 text-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
              Need AC Repair or Replacement in Millburn?
            </h2>
            <p className="text-blue-100 mb-8 text-base md:text-lg">
              Call us or fill out the form — we respond fast, day or night. Under 45 minutes from Wharton to Millburn.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+12017875657"
                className="bg-white text-blue-700 px-7 py-3.5 rounded-full font-bold text-lg hover:bg-gray-50 transition shadow-lg inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" /> (201) 787-5657
              </a>
              <Link
                href="/contact"
                className="bg-white/10 border-2 border-white/40 text-white px-7 py-3.5 rounded-full font-semibold text-lg hover:bg-white/20 transition text-center"
              >
                Request Free Estimate
              </Link>
            </div>
            <p className="mt-5 text-blue-200 text-sm">
              Also serving: Maplewood · South Orange · Livingston · Summit · all of Essex County
            </p>
            <p className="mt-2 text-blue-300 text-xs">
              <Link href="/service-areas" className="underline hover:text-white">
                ← View all service areas
              </Link>
            </p>
          </div>
        </section>

      </main>
    </>
  );
}
