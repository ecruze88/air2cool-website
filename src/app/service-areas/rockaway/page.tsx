import type { Metadata } from "next";
import { Phone, CheckCircle, Star, Clock, Shield, Wrench, MapPin } from "lucide-react";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "HVAC Service Rockaway NJ | AC Repair & Heating | Air2Cool",
  description:
    "AC repair and heating service in Rockaway NJ — just minutes from our Wharton base. Air2Cool has served Rockaway Borough and Township since 1998. Call (201) 787-5657.",
  alternates: {
    canonical: "https://www.air2cool.com/service-areas/rockaway",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "HVAC Service in Rockaway, NJ",
      "provider": {
        "@id": "https://www.air2cool.com/#organization",
      },
      "areaServed": { "@type": "City", "name": "Rockaway", "addressRegion": "NJ" },
      "serviceType": "HVAC Repair, Installation, and Maintenance",
      "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you serve both Rockaway Borough and Rockaway Township?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — we serve both. Rockaway Borough and Rockaway Township have different housing types and HVAC needs, and we handle both: older Borough homes with boilers and newer Township properties with multi-zone systems.",
          },
        },
        {
          "@type": "Question",
          "name": "How fast can Air2Cool respond in Rockaway NJ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We're based in nearby Wharton and provide 24/7 emergency HVAC service in Rockaway. Response times vary based on technician availability, traffic, weather, and call volume.",
          },
        },
        {
          "@type": "Question",
          "name": "What HVAC services do you offer in Rockaway NJ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer the full range: AC repair and installation, heating repair and replacement, ductless mini splits, air quality systems, preventative maintenance, and 24/7 emergency service. All work is by licensed NJ master technicians.",
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
  { name: "Mini Split", href: "/services/mini-split", desc: "Ductless mini-split installs & service." },
  { name: "Preventative Maintenance", href: "/services/preventative-maintenance", desc: "Seasonal tune-ups that help reduce breakdown risk." },
];

export default function RockawayPage() {
  return (
    <>
      <Script
        id="schema-rockaway"
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
              Morris County · 07866
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight">
              HVAC Service in Rockaway, NJ
            </h1>
            <p className="text-base md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Air2Cool has served Rockaway Borough and Rockaway Township since 1998. We&apos;re based
              in neighboring Wharton — just minutes away. Same-day service and 24/7 emergency response.
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
              HVAC Service in Rockaway, NJ
            </h2>
            <div className="text-base text-gray-700 space-y-4 leading-relaxed">
              <p>
                Air2Cool has been serving Rockaway Borough and Rockaway Township since 1998 — we&apos;re
                based in neighboring Wharton, literally just a few minutes away. Rockaway is one of our
                most frequent service areas and we know the housing stock well.
              </p>
              <p>
                The Borough has a mix of older row homes and colonials near the downtown, while the Township
                spreads out into larger properties near Berkshire Valley Road and Green Pond Road. Both
                present very different HVAC needs. Older Borough homes often have original ductwork and
                aging boiler systems. Township properties tend to be larger with multi-zone systems or
                additions that need mini splits. We handle both.
              </p>
              <p>
                Route 46 and the Rockaway Townsquare area put us right in the middle of our natural service
                territory. For most Rockaway addresses — Borough or Township — response time is under 10
                minutes. When your system fails on a hot summer day or a cold January night, that proximity
                matters.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Link
                  href="/services/ac-repair"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold text-sm transition-colors"
                >
                  <CheckCircle className="w-4 h-4" /> AC Repair Services
                </Link>
                <Link
                  href="/services/heating-repair"
                  className="inline-flex items-center justify-center gap-2 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full font-semibold text-sm transition-colors"
                >
                  Heating Repair Services →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-10 md:py-14 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center mb-3">
              All HVAC Services in Rockaway
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
              Why Rockaway Residents Choose Air2Cool
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
                  body: "Call any time for 24/7 emergency HVAC service. Response timing depends on technician availability and current conditions.",
                },
                {
                  icon: <Wrench className="w-6 h-6 text-green-600" />,
                  title: "All Makes & Models",
                  body: "Borough boilers to Township multi-zone systems — we service it all.",
                },
                {
                  icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
                  title: "0% Financing Up to $25,000",
                  body: "0% APR financing is available up to $25,000 for qualifying customers, subject to eligibility, approval, and applicable program terms.",
                },
                {
                  icon: <MapPin className="w-6 h-6 text-purple-600" />,
                  title: "Local Since 1998",
                  body: "Family-owned out of Wharton — right next door to Rockaway. We're your neighbors.",
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
              Serving Rockaway and Nearby Morris County Communities
            </h2>
            <div className="text-sm md:text-base text-gray-700 space-y-4 leading-relaxed">
              <p>
                Air2Cool Heating &amp; Cooling has been the trusted HVAC contractor for Rockaway Borough
                and Township residents since 1998. Based in Wharton, our technicians are familiar with
                every neighborhood — from downtown Rockaway Borough to the rural stretches of the Township
                near Berkshire Valley. Whether you have an aging oil boiler or a brand new multi-zone
                system, we work on it all.
              </p>
              <p>
                We also serve nearby{" "}
                <Link href="/service-areas/dover" className="text-blue-600 hover:underline">Dover</Link>,{" "}
                <Link href="/service-areas/denville" className="text-blue-600 hover:underline">Denville</Link>,{" "}
                <Link href="/service-areas/wharton" className="text-blue-600 hover:underline">Wharton</Link>, and{" "}
                <Link href="/service-areas/mine-hill" className="text-blue-600 hover:underline">Mine Hill</Link>.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { name: "Dover", slug: "dover" },
                { name: "Denville", slug: "denville" },
                { name: "Wharton", slug: "wharton" },
                { name: "Mine Hill", slug: "mine-hill" },
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
              HVAC Questions from Rockaway Residents
            </h2>
            <div className="space-y-5">
              {[
                {
                  q: "Do you serve both Rockaway Borough and Rockaway Township?",
                  a: "Yes — we serve both. Rockaway Borough and Rockaway Township have different housing types and HVAC needs, and we handle both: older Borough homes with boilers and newer Township properties with multi-zone systems.",
                },
                {
                  q: "How fast can Air2Cool respond in Rockaway NJ?",
                  a: "We're based in nearby Wharton and provide 24/7 emergency HVAC service in Rockaway. Response times vary based on technician availability, traffic, weather, and call volume.",
                },
                {
                  q: "What HVAC services do you offer in Rockaway NJ?",
                  a: "We offer the full range: AC repair and installation, heating repair and replacement, ductless mini splits, air quality systems, preventative maintenance, and 24/7 emergency service. All work is by licensed NJ master technicians.",
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
              Need HVAC Help in Rockaway?
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
              Also serving: Dover · Denville · Wharton · Mine Hill · all of Morris County
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
