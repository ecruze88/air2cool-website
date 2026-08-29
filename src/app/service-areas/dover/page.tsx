import type { Metadata } from "next";
import { Phone, CheckCircle, Star, Clock, Shield, Wrench, MapPin } from "lucide-react";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "HVAC Service Dover NJ | AC Repair & Heating | Air2Cool",
  description:
    "AC repair and heating service in Dover NJ. Air2Cool is based just minutes away in Wharton and has served Dover since 1998. Same-day service. Call (201) 787-5657.",
  alternates: {
    canonical: "https://www.air2cool.com/service-areas/dover",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "HVAC Service in Dover, NJ",
      "provider": {
        "@id": "https://www.air2cool.com/#organization",
      },
      "areaServed": { "@type": "City", "name": "Dover", "addressRegion": "NJ" },
      "serviceType": "HVAC Repair, Installation, and Maintenance",
      "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you offer same-day HVAC service in Dover NJ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Same-day appointments may be available in Dover. We're based in neighboring Wharton, and actual response timing depends on technician availability, traffic, weather, and call volume.",
          },
        },
        {
          "@type": "Question",
          "name": "What types of heating systems do Dover homes typically have?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dover's older housing stock includes a lot of gas and oil boilers, particularly in the downtown and near Blackwell Street. Newer developments tend to have forced-air gas systems. We service all of these and handle oil-to-gas conversions.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you handle commercial HVAC in Dover NJ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — Dover has commercial properties along Route 46 and throughout the Route 15 corridor, and we service commercial HVAC systems, rooftop units, and commercial refrigeration for businesses in the area.",
          },
        },
      ],
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
  { name: "Commercial Refrigeration", href: "/services/commercial-refrigeration", desc: "Coolers & freezers for businesses." },
  { name: "Preventative Maintenance", href: "/services/preventative-maintenance", desc: "Seasonal tune-ups that help reduce breakdown risk." },
];

export default function DoverPage() {
  return (
    <>
      <Script
        id="schema-dover"
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
              Morris County · 07801
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight">
              HVAC Service in Dover, NJ
            </h1>
            <p className="text-base md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Air2Cool has served Dover since 1998 — we&apos;re neighboring towns, based in Wharton just
              minutes away. Same-day service and 24/7 emergency response.
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
              { value: "300+", label: "5-Star Reviews" },
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

        {/* Unique Local Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-5">
              HVAC Service in Dover, NJ
            </h2>
            <div className="text-base text-gray-700 space-y-4 leading-relaxed">
              <p>
                Dover is one of our closest service areas — we&apos;re literally neighboring towns, and
                our Wharton base keeps us close to Dover. Actual response timing depends on technician availability and current conditions. Our location puts us
                right around the corner from Blackwell Street and the downtown area.
              </p>
              <p>
                Dover has a dense housing stock with a lot of older multi-family and single-family homes
                that often have aging systems in need of repair or replacement. We see a lot of boiler
                work in Dover&apos;s older homes, as well as furnace replacements and AC installations
                in properties that are being updated. If your home still has an aging oil or gas boiler,
                we can assess whether repair or a more efficient replacement makes financial sense.
              </p>
              <p>
                The town&apos;s proximity to Route 46 and the surrounding industrial areas also means we
                handle commercial refrigeration and commercial HVAC calls in the area. Whether you&apos;re
                a homeowner off Mine Hill or a business owner near the Route 46 corridor, we&apos;re
                already in your neighborhood regularly.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Link
                  href="/services/heating-repair"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold text-sm transition-colors"
                >
                  <CheckCircle className="w-4 h-4" /> Heating Repair Services
                </Link>
                <Link
                  href="/services/ac-repair"
                  className="inline-flex items-center justify-center gap-2 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full font-semibold text-sm transition-colors"
                >
                  AC Repair Services →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-10 md:py-14 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center mb-3">
              All HVAC Services in Dover
            </h2>
            <p className="text-center text-gray-500 mb-8 text-sm md:text-base">
            Service for many major brands. Licensed &amp; insured — NJ Master HVACR License #19HC00847000.
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

        {/* Why Air2Cool */}
        <section className="py-10 md:py-14 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center mb-8">
              Why Dover Residents Choose Air2Cool
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Shield className="w-6 h-6 text-blue-600" />,
                  title: "Licensed & Insured",
                  body: "Air2Cool operates under NJ Master HVACR License #19HC00847000, with work performed through its licensed HVACR operation by trained technicians.",
                },
                {
                  icon: <Star className="w-6 h-6 text-yellow-500" />,
                  title: "300+ Five-Star Reviews",
                  body: "Real customers across Morris County and North Jersey. Check our Google reviews before you call.",
                },
                {
                  icon: <Clock className="w-6 h-6 text-red-600" />,
                  title: "24/7 Emergency Service",
                  body: "We answer at 2 AM because your furnace doesn't care what day it is. 10–15 min from Wharton.",
                },
                {
                  icon: <Wrench className="w-6 h-6 text-green-600" />,
                  title: "Boilers & Furnaces",
                  body: "Specialists in Dover's older heating systems — boiler repair, furnace replacement, and more.",
                },
                {
                  icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
                  title: "0% Financing Up to $25,000",
                  body: "0% APR financing is available up to $25,000 for qualifying customers, subject to eligibility, approval, and applicable program terms.",
                },
                {
                  icon: <MapPin className="w-6 h-6 text-purple-600" />,
                  title: "Local Since 1998",
                  body: "Family-owned out of Wharton — neighboring Dover since 1998. We're your neighbors.",
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
              Serving Dover and Nearby Morris County Communities
            </h2>
            <div className="text-sm md:text-base text-gray-700 space-y-4 leading-relaxed">
              <p>
                Air2Cool Heating &amp; Cooling has been the trusted HVAC contractor for Dover residents
                since 1998. Based in neighboring Wharton, our technicians are familiar with Dover&apos;s
                neighborhoods — from Blackwell Street and the downtown corridor to the residential areas
                near Mine Hill and Victory Gardens. Whether you have a boiler from the 1970s or you&apos;re
                installing a brand new high-efficiency system, we handle it all.
              </p>
              <p>
                We also serve nearby{" "}
                <Link href="/service-areas/wharton" className="text-blue-600 hover:underline">Wharton</Link>,{" "}
                <Link href="/service-areas/rockaway" className="text-blue-600 hover:underline">Rockaway</Link>,{" "}
                <Link href="/service-areas/mine-hill" className="text-blue-600 hover:underline">Mine Hill</Link>, and{" "}
                <Link href="/service-areas/victory-gardens" className="text-blue-600 hover:underline">Victory Gardens</Link>.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { name: "Wharton", slug: "wharton" },
                { name: "Rockaway", slug: "rockaway" },
                { name: "Mine Hill", slug: "mine-hill" },
                { name: "Victory Gardens", slug: "victory-gardens" },
              ].map(({ name, slug }) => (
                <Link
                  key={slug}
                  href={`/service-areas/${slug}`}
                  className="text-xs bg-white border border-blue-200 px-3 py-1.5 rounded-full text-blue-700 hover:bg-blue-50 transition-colors"
                >
                  {name}
                </Link>
              ))}
              <Link
                href="/service-areas/morris-county"
                className="text-xs bg-white border border-blue-200 px-3 py-1.5 rounded-full text-blue-700 hover:bg-blue-50 transition-colors"
              >
                Morris County →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-10 md:py-14 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8">
              HVAC Questions from Dover Residents
            </h2>
            <div className="space-y-5">
              {[
                {
                  q: "Do you offer same-day HVAC service in Dover NJ?",
                  a: "Same-day appointments may be available in Dover. We're based in neighboring Wharton, and actual response timing depends on technician availability, traffic, weather, and call volume.",
                },
                {
                  q: "What types of heating systems do Dover homes typically have?",
                  a: "Dover's older housing stock includes a lot of gas and oil boilers, particularly in the downtown and near Blackwell Street. Newer developments tend to have forced-air gas systems. We service all of these and handle oil-to-gas conversions.",
                },
                {
                  q: "Do you handle commercial HVAC in Dover NJ?",
                  a: "Yes — Dover has commercial properties along Route 46 and throughout the Route 15 corridor, and we service commercial HVAC systems, rooftop units, and commercial refrigeration for businesses in the area.",
                },
              ].map((item) => (
                <div key={item.q} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <p className="font-bold text-gray-900 mb-2 text-sm md:text-base">{item.q}</p>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-blue-700 to-blue-600 text-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
              Need HVAC Help in Dover?
            </h2>
            <p className="text-blue-100 mb-8 text-base md:text-lg">
              Call for 24/7 emergency HVAC service or request service online. Response times vary based on technician availability, traffic, weather, and call volume.
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
              Also serving: Wharton · Rockaway · Mine Hill · Victory Gardens · all of Morris County
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
