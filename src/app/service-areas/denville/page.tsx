import type { Metadata } from "next";
import { Phone, CheckCircle, Star, Clock, Shield, Wrench, MapPin } from "lucide-react";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "HVAC Repair & Installation Denville NJ | Air2Cool",
  description:
    "AC repair, furnace service, and HVAC installation in Denville NJ. Air2Cool has served Denville since 1998. Same-day service available. Call (201) 787-5657.",
  alternates: {
    canonical: "https://www.air2cool.com/service-areas/denville",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HVACBusiness",
      "@id": "https://www.air2cool.com/service-areas/denville#business",
      "name": "Air2Cool Heating & Cooling",
      "url": "https://www.air2cool.com",
      "telephone": "+1-201-787-5657",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "20 Kitchell Ave",
        "addressLocality": "Wharton",
        "addressRegion": "NJ",
        "postalCode": "07885",
        "addressCountry": "US",
      },
      "areaServed": {
        "@type": "City",
        "name": "Denville",
        "addressRegion": "NJ",
        "addressCountry": "US",
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "250",
      },
    },
    {
      "@type": "Service",
      "name": "HVAC Services in Denville, NJ",
      "provider": {
        "@type": "HVACBusiness",
        "name": "Air2Cool Heating & Cooling",
      },
      "areaServed": { "@type": "City", "name": "Denville", "addressRegion": "NJ" },
      "serviceType": "AC Repair, Mini Split Installation, HVAC Repair",
      "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you offer AC repair in Denville NJ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — Denville is one of our most frequently served Morris County communities. Same-day AC repair is available for Denville residents. Call (201) 787-5657.",
          },
        },
        {
          "@type": "Question",
          "name": "Can you install a mini split in a Denville lake home?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely — we regularly install ductless mini split systems in Denville's lake community homes, which often lack ductwork for traditional central AC. We handle Indian Lake, Openaki, and Rockaway Valley properties.",
          },
        },
        {
          "@type": "Question",
          "name": "How quickly can Air2Cool respond to a call in Denville NJ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We're based in nearby Wharton — most Denville calls get a technician on-site within 20 minutes. 24/7 emergency service is available.",
          },
        },
      ],
    },
  ],
};

const SERVICES = [
  { name: "AC Repair", href: "/services/ac-repair", desc: "Fast diagnosis for all makes and models." },
  { name: "AC Installation", href: "/services/cooling-installation", desc: "Energy-efficient systems with 0% financing." },
  { name: "Mini Split", href: "/services/mini-split", desc: "Ductless mini-split installs & service." },
  { name: "Heating Repair", href: "/services/heating-repair", desc: "Furnace, boiler & heat pump repair." },
  { name: "Heating Installation", href: "/services/heating-installation", desc: "New furnace or heat pump with warranty." },
  { name: "Air Filtration", href: "/services/air-quality", desc: "Whole-home air purifiers & filters." },
  { name: "Humidifiers", href: "/services/humidifier", desc: "Whole-home humidity control systems." },
  { name: "Preventative Maintenance", href: "/services/preventative-maintenance", desc: "Annual tune-ups before breakdowns happen." },
];

const NEARBY = [
  { name: "Rockaway", slug: "rockaway" },
  { name: "Parsippany", slug: "parsippany-troy-hills" },
  { name: "Mountain Lakes", slug: "mountain-lakes" },
  { name: "Boonton", slug: "boonton" },
];

export default function DenvillePage() {
  return (
    <>
      <Script
        id="schema-denville"
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
              Morris County · 07834
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight">
              HVAC Repair &amp; Installation in Denville, NJ
            </h1>
            <p className="text-base md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Air2Cool has served Denville and Morris County since 1998 — AC repair, mini split installations,
              furnace service, and 24/7 emergency HVAC. Based in nearby Wharton, just 20 minutes away.
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

        {/* Intro */}
        <section className="py-10 md:py-14 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Denville is a central Morris County town we&apos;ve served for decades — sitting at the crossroads of Route 46 and 53 makes it one of our most frequently visited service areas. From the lake communities along Openaki Road to the ranch neighborhoods near Mountain Lakes, our crews know Denville well and can be there fast. We&apos;re based in Wharton, approximately <strong>15–20 minutes away</strong>.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-10 md:py-14 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
              HVAC Service in Denville, NJ
            </h2>
            <div className="text-sm md:text-base text-gray-700 space-y-5 leading-relaxed">
              <p>
                Denville&apos;s lake communities — <strong>Indian Lake, Openaki, and Rockaway Valley</strong> — present unique HVAC challenges that we understand well. Many of these homes were originally built as seasonal or summer properties and have since been converted to year-round use. That conversion often requires a full HVAC evaluation: the original heating setup may be undersized for winter loads, the ductwork may be minimal or nonexistent, and the proximity to water raises humidity concerns that affect air quality and system health.
              </p>
              <p>
                We frequently install <Link href="/services/mini-split" className="text-blue-600 hover:underline">ductless mini split systems</Link> in Denville lake homes that lack ductwork — they&apos;re ideal for additions, sunrooms, and homes where running new duct runs isn&apos;t practical. For homes with existing ductwork, we handle full central <Link href="/services/cooling-installation" className="text-blue-600 hover:underline">AC installations</Link> and heating upgrades.
              </p>
              <p>
                Denville also has a large stock of 1960s and 70s ranch homes — particularly in the areas closer to Route 53 — that often have original ductwork in need of evaluation. These homes frequently have undersized systems, outdated equipment, or configurations that waste energy. Our licensed technicians assess the full picture and give you honest recommendations, not just a quote to replace whatever broke.
              </p>
              <p>
                For <Link href="/services/ac-repair" className="text-blue-600 hover:underline">AC repair</Link> calls, most Denville service requests can be addressed same-day. We stock common parts on our trucks and have relationships with local suppliers for anything we don&apos;t carry. Emergency calls are answered 24/7 — if your heat or AC fails at an inconvenient hour, we&apos;ll be there.
              </p>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                href="/services/ac-repair"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold text-sm transition-colors"
              >
                <Wrench className="w-4 h-4" /> AC Repair
              </Link>
              <Link
                href="/services/mini-split"
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full font-semibold text-sm transition-colors"
              >
                Mini Split Installation
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-10 md:py-14 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center mb-3">
              All HVAC Services in Denville
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

        {/* Why Denville Residents Choose Air2Cool */}
        <section className="py-10 md:py-14 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center mb-8">
              Why Denville Residents Choose Air2Cool
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Clock className="w-6 h-6 text-red-600" />,
                  title: "20-Minute Response",
                  body: "Based in Wharton, we reach most Denville addresses within 20 minutes — faster than any company based outside Morris County.",
                },
                {
                  icon: <Wrench className="w-6 h-6 text-blue-600" />,
                  title: "Lake Home Specialists",
                  body: "We understand the unique HVAC challenges of Denville's Indian Lake and Openaki communities — conversions, humidity, space constraints.",
                },
                {
                  icon: <Star className="w-6 h-6 text-yellow-500" />,
                  title: "250+ Five-Star Reviews",
                  body: "Denville neighbors have been leaving us 5-star reviews for over 26 years. Check Google before you call.",
                },
                {
                  icon: <Shield className="w-6 h-6 text-green-600" />,
                  title: "Licensed Master Technicians",
                  body: "Every job done by NJ-licensed master HVAC technicians. No subcontractors, no shortcuts.",
                },
                {
                  icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
                  title: "0% Financing Up to $25K",
                  body: "Full system replacements don't have to break the bank. Same-day financing approval available.",
                },
                {
                  icon: <MapPin className="w-6 h-6 text-purple-600" />,
                  title: "Local Since 1998",
                  body: "Family-owned out of Wharton, right in Morris County. We know your neighborhood and we stand behind our work.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <div className="shrink-0 w-11 h-11 bg-gray-100 border border-gray-200 rounded-xl flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1 text-sm md:text-base">{item.title}</div>
                    <div className="text-xs md:text-sm text-gray-600">{item.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-10 md:py-14 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
              Frequently Asked Questions — HVAC in Denville, NJ
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Do you offer AC repair in Denville NJ?",
                  a: "Yes — Denville is one of our most frequently served Morris County communities. Same-day AC repair is available for Denville residents. Our technicians are familiar with every part of town, from the Route 46 corridor to the lake communities off Diamond Spring Road.",
                },
                {
                  q: "Can you install a mini split in a Denville lake home?",
                  a: "Absolutely — we regularly install ductless mini split systems in Denville's lake community homes at Indian Lake, Openaki, and Rockaway Valley, which often lack ductwork for traditional central AC. Mini splits are an ideal solution for these properties.",
                },
                {
                  q: "How quickly can Air2Cool respond to a call in Denville NJ?",
                  a: "We're based in nearby Wharton — most Denville calls get a technician on-site within 20 minutes. 24/7 emergency service is available for heating and AC emergencies.",
                },
              ].map((item) => (
                <div key={item.q} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2 text-sm md:text-base">{item.q}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nearby Areas */}
        <section className="py-10 md:py-14 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
              Nearby Areas We Also Serve
            </h2>
            <p className="text-sm md:text-base text-gray-700 mb-6 leading-relaxed">
              From our Wharton base, we serve all of central Morris County. Denville neighbors in Rockaway, Parsippany, Mountain Lakes, and Boonton all rely on Air2Cool for fast HVAC service.
            </p>
            <div className="flex flex-wrap gap-2">
              {NEARBY.map(({ name, slug }) => (
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

        {/* CTA */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-blue-700 to-blue-600 text-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
              Need HVAC Service in Denville?
            </h2>
            <p className="text-blue-100 mb-8 text-base md:text-lg">
              Call us or request a free estimate — same-day service available.
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
              Also serving: Rockaway · Parsippany · Mountain Lakes · Boonton · all of Morris County
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
