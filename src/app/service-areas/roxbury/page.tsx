import type { Metadata } from "next";
import { Phone, CheckCircle, Star, Clock, Shield, Wrench, MapPin } from "lucide-react";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "HVAC Service Roxbury NJ | AC Repair & Heating | Air2Cool",
  description:
    "HVAC repair and installation in Roxbury NJ. Air2Cool serves Succasunna, Ledgewood, and all of Roxbury Township. Same-day service from our Wharton base. Call (201) 787-5657.",
  alternates: {
    canonical: "https://www.air2cool.com/service-areas/roxbury",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HVACBusiness",
      "@id": "https://www.air2cool.com/service-areas/roxbury#business",
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
      "areaServed": {
        "@type": "City",
        "name": "Roxbury Township",
        "addressRegion": "NJ",
        "addressCountry": "US",
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "270",
      },
    },
    {
      "@type": "Service",
      "name": "HVAC Service in Roxbury Township, NJ",
      "provider": {
        "@type": "HVACBusiness",
        "name": "Air2Cool Heating & Cooling",
      },
      "areaServed": { "@type": "City", "name": "Roxbury", "addressRegion": "NJ" },
      "serviceType": "HVAC Repair, Installation, and Maintenance",
      "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you serve Succasunna and Ledgewood in Roxbury NJ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — we serve all communities within Roxbury Township including Succasunna, Ledgewood, and Landing. Our Wharton base puts us within 15 minutes of most Roxbury addresses.",
          },
        },
        {
          "@type": "Question",
          "name": "Can you install HVAC in a lakefront home in Landing NJ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — we handle HVAC for lakefront homes regularly, including ductless mini split installations for homes without existing ductwork and full system replacements for year-round conversions.",
          },
        },
        {
          "@type": "Question",
          "name": "How quickly can Air2Cool respond in Roxbury Township?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We're based in Wharton — most Roxbury Township addresses are 10–20 minutes away. Emergency calls are available 24/7 and we prioritize same-day response.",
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
  { name: "Mini Split", href: "/services/mini-split", desc: "Ductless mini-split installs & service." },
  { name: "Air Filtration", href: "/services/air-quality", desc: "Whole-home air purifiers & filters." },
  { name: "Humidifiers", href: "/services/humidifier", desc: "Whole-home humidity control systems." },
  { name: "Preventative Maintenance", href: "/services/preventative-maintenance", desc: "Annual tune-ups before breakdowns happen." },
];

export default function RoxburyPage() {
  return (
    <>
      <Script
        id="schema-roxbury"
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
              Morris County · 07876
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight">
              HVAC Service in Roxbury Township, NJ
            </h1>
            <p className="text-base md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Air2Cool serves all of Roxbury Township — Succasunna, Ledgewood, Landing, and the Lake
              Hopatcong area. Based in Wharton, we deliver same-day service and 24/7 emergency response.
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
              { value: "270+", label: "5-Star Reviews" },
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
              HVAC Service in Roxbury Township, NJ
            </h2>
            <div className="text-base text-gray-700 space-y-4 leading-relaxed">
              <p>
                Roxbury Township covers several distinct communities — Succasunna, Ledgewood, Landing,
                and the Lake Hopatcong shoreline area among them. We serve all of them. Our Wharton base
                puts us squarely in the middle of our Roxbury service area.
              </p>
              <p>
                Roxbury has a good mix of 1970s–80s colonial and split-level homes alongside newer
                developments near Route 10 and the Roxbury Mall area. These older homes often have
                original systems that are well past their expected service life — original furnaces,
                aging central AC units, and ductwork that has never been properly balanced. We handle
                everything from emergency AC repairs on the hottest days to full system replacements
                with 0% financing.
              </p>
              <p>
                Landing and the Lake Hopatcong area within Roxbury also have lakefront properties with
                unique HVAC challenges — humidity control, seasonal system conversions, and often tight
                mechanical rooms where equipment changes require careful planning. We&apos;ve done
                dozens of mini split installs and full system overhauls in lakefront communities and
                know exactly what to expect.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Link
                  href="/services/cooling-installation"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold text-sm transition-colors"
                >
                  <CheckCircle className="w-4 h-4" /> AC Installation
                </Link>
                <Link
                  href="/services/heating-installation"
                  className="inline-flex items-center justify-center gap-2 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full font-semibold text-sm transition-colors"
                >
                  Heating Installation →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-10 md:py-14 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center mb-3">
              All HVAC Services in Roxbury
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

        {/* Why Air2Cool */}
        <section className="py-10 md:py-14 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center mb-8">
              Why Roxbury Residents Choose Air2Cool
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Shield className="w-6 h-6 text-blue-600" />,
                  title: "Licensed Master Techs",
                  body: "Every job done by NJ-licensed master HVAC technicians. No subcontractors, no shortcuts.",
                },
                {
                  icon: <Star className="w-6 h-6 text-yellow-500" />,
                  title: "270+ Five-Star Reviews",
                  body: "Real customers across Morris County and North Jersey. Check our Google reviews before you call.",
                },
                {
                  icon: <Clock className="w-6 h-6 text-red-600" />,
                  title: "24/7 Emergency Service",
                  body: "We answer at 2 AM because your AC doesn't care what day it is. Based in nearby Wharton.",
                },
                {
                  icon: <Wrench className="w-6 h-6 text-green-600" />,
                  title: "Lakefront Expertise",
                  body: "Mini splits, humidity control, and seasonal conversions for Landing and Lake Hopatcong properties.",
                },
                {
                  icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
                  title: "0% Financing Up to $25K",
                  body: "Same-day approval on most applications. Don't delay comfort over budget.",
                },
                {
                  icon: <MapPin className="w-6 h-6 text-purple-600" />,
                  title: "Local Since 1998",
                  body: "Family-owned out of Wharton, NJ. We know Roxbury Township inside and out.",
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
              Serving Roxbury Township and Nearby Morris County Communities
            </h2>
            <div className="text-sm md:text-base text-gray-700 space-y-4 leading-relaxed">
              <p>
                Air2Cool Heating &amp; Cooling has been the trusted HVAC contractor for Roxbury Township
                since 1998. We serve all neighborhoods — Succasunna, Ledgewood, Landing, and the Lake
                Hopatcong area. Whether you have a 1970s split-level with original ductwork or a modern
                lakefront home needing a mini split addition, we work on it all.
              </p>
              <p>
                We also serve nearby{" "}
                <Link href="/service-areas/randolph" className="text-blue-600 hover:underline">Randolph</Link>,{" "}
                <Link href="/service-areas/rockaway" className="text-blue-600 hover:underline">Rockaway</Link>,{" "}
                <Link href="/service-areas/jefferson" className="text-blue-600 hover:underline">Jefferson</Link>, and{" "}
                <Link href="/service-areas/mount-olive" className="text-blue-600 hover:underline">Mount Olive</Link>.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { name: "Randolph", slug: "randolph" },
                { name: "Rockaway", slug: "rockaway" },
                { name: "Jefferson", slug: "jefferson" },
                { name: "Mount Olive", slug: "mount-olive" },
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
              HVAC Questions from Roxbury Residents
            </h2>
            <div className="space-y-5">
              {[
                {
                  q: "Do you serve Succasunna and Ledgewood in Roxbury NJ?",
                  a: "Yes — we serve all communities within Roxbury Township including Succasunna, Ledgewood, and Landing. Our Wharton base puts us within 15 minutes of most Roxbury addresses.",
                },
                {
                  q: "Can you install HVAC in a lakefront home in Landing NJ?",
                  a: "Yes — we handle HVAC for lakefront homes regularly, including ductless mini split installations for homes without existing ductwork and full system replacements for year-round conversions.",
                },
                {
                  q: "How quickly can Air2Cool respond in Roxbury Township?",
                  a: "We're based in Wharton — most Roxbury Township addresses are 10–20 minutes away. Emergency calls are available 24/7 and we prioritize same-day response.",
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
              Need HVAC Help in Roxbury?
            </h2>
            <p className="text-blue-100 mb-8 text-base md:text-lg">
              Call us or fill out the form — we respond fast, day or night. Serving all of Roxbury Township.
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
              Also serving: Succasunna · Ledgewood · Landing · Lake Hopatcong area · all of Morris County
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
