import type { Metadata } from "next";
import { Phone, CheckCircle, Star, Clock, Shield, Wrench, MapPin } from "lucide-react";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "HVAC Service Sparta NJ | AC Repair & Heating | Air2Cool",
  description:
    "AC repair and heating service in Sparta NJ. Air2Cool serves Sussex County including Sparta Township. Licensed technicians, same-day service available. Call (201) 787-5657.",
  alternates: {
    canonical: "https://www.air2cool.com/service-areas/sparta",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HVACBusiness",
      "@id": "https://www.air2cool.com/service-areas/sparta#business",
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
        "name": "Sparta",
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
      "name": "HVAC Services in Sparta, NJ",
      "provider": {
        "@type": "HVACBusiness",
        "name": "Air2Cool Heating & Cooling",
      },
      "areaServed": { "@type": "City", "name": "Sparta", "addressRegion": "NJ" },
      "serviceType": "AC Repair, Heating Repair, Mini Split Installation",
      "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does Air2Cool service homes in Sparta NJ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — we serve Sparta Township in Sussex County including the Lake Mohawk community for AC repair, heating service, and mini split installations. Call (201) 787-5657.",
          },
        },
        {
          "@type": "Question",
          "name": "Can you service older HVAC systems in Sparta NJ lake homes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — we work on all makes, models, and ages of equipment including older systems common in Sparta's lake communities. Our technicians carry parts for most common brands and can often complete repairs same-day.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you install mini splits in Sparta NJ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — ductless mini splits are a popular choice in Sparta lake homes and we install and service them throughout the area. They're ideal for homes that lack ductwork or need efficient heating and cooling for additions.",
          },
        },
      ],
    },
  ],
};

const SERVICES = [
  { name: "AC Repair", href: "/services/ac-repair", desc: "Fast diagnosis for all makes and models." },
  { name: "Heating Repair", href: "/services/heating-repair", desc: "Furnace, boiler & heat pump repair." },
  { name: "Mini Split", href: "/services/mini-split", desc: "Ductless mini-split installs & service." },
  { name: "AC Installation", href: "/services/cooling-installation", desc: "Energy-efficient systems with 0% financing." },
  { name: "Heating Installation", href: "/services/heating-installation", desc: "New furnace or boiler with warranty." },
  { name: "Air Filtration", href: "/services/air-quality", desc: "Whole-home air purifiers & filters." },
  { name: "Humidifiers", href: "/services/humidifier", desc: "Whole-home humidity control systems." },
  { name: "Preventative Maintenance", href: "/services/preventative-maintenance", desc: "Annual tune-ups before breakdowns happen." },
];

const NEARBY = [
  { name: "Vernon", slug: "vernon" },
  { name: "Hamburg", slug: "hamburg" },
  { name: "Newton", slug: "newton" },
  { name: "Hardyston", slug: "hardyston" },
];

export default function SpartaPage() {
  return (
    <>
      <Script
        id="schema-sparta"
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
              Sussex County · 07871
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight">
              HVAC Service in Sparta, NJ
            </h1>
            <p className="text-base md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Air2Cool serves Sparta Township and the Lake Mohawk community for AC repair, heating service,
              and ductless mini split installations. Licensed master technicians since 1998.
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
              Sparta is one of Sussex County&apos;s most established residential communities — known throughout the region for its lakefront neighborhoods, particularly <strong>Lake Mohawk</strong>, where homes range from original small cottages to large newer construction. We serve Sparta regularly and understand the specific HVAC demands these properties create, from tight mechanical rooms in older lakeside homes to the need for year-round reliable heating at Sussex County elevation.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-10 md:py-14 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
              AC Repair, Heating &amp; Mini Splits in Sparta, NJ
            </h2>
            <div className="text-sm md:text-base text-gray-700 space-y-5 leading-relaxed">
              <p>
                <strong>Lake Mohawk</strong> properties often need specialized HVAC work. Many of the original lake cottages have tight mechanical spaces, older equipment that hasn&apos;t been touched in years, and the proximity to water creates persistent humidity challenges that affect both air quality and system lifespan. We&apos;re familiar with the layout and constraints these properties present, and we come equipped to work in tight spaces without cutting corners.
              </p>
              <p>
                Sparta&apos;s elevation and exposure mean heating systems work hard all winter — longer, colder heating seasons than you&apos;d see in towns closer to the coast. <Link href="/services/heating-repair" className="text-blue-600 hover:underline">Furnace and boiler reliability</Link> is critical here, and deferred maintenance catches up with systems quickly once temperatures drop in November. We recommend annual tune-ups for any Sparta home — it&apos;s the most cost-effective way to avoid an emergency call in January.
              </p>
              <p>
                <Link href="/services/mini-split" className="text-blue-600 hover:underline">Ductless mini splits</Link> have become increasingly popular in Sparta for lake homes and property additions where running new ductwork isn&apos;t practical. Whether it&apos;s a sunroom addition, a converted cottage, or a home that simply never had central air, mini splits offer an efficient solution that handles both heating and cooling without major renovation work. Modern units are rated for cold-weather operation and hold up well in Sussex County winters.
              </p>
              <p>
                For <Link href="/services/ac-repair" className="text-blue-600 hover:underline">AC repair</Link>, we service all major brands and carry common parts on our trucks for same-day repairs when possible. Sparta is a regular stop on our Sussex County route — call in the morning and we can often have someone there the same day.
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
              All HVAC Services in Sparta
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

        {/* Why Sparta Residents Choose Air2Cool */}
        <section className="py-10 md:py-14 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center mb-8">
              Why Sparta Residents Choose Air2Cool
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Wrench className="w-6 h-6 text-blue-600" />,
                  title: "Lake Home Experience",
                  body: "We've worked in Lake Mohawk properties for decades — tight spaces, older systems, high humidity. We know what to expect.",
                },
                {
                  icon: <Clock className="w-6 h-6 text-red-600" />,
                  title: "24/7 Emergency Service",
                  body: "Heating failures in Sparta winter can't wait. We answer emergency calls day and night, weekends included.",
                },
                {
                  icon: <Star className="w-6 h-6 text-yellow-500" />,
                  title: "250+ Five-Star Reviews",
                  body: "Trusted by Sussex County homeowners since 1998. Real reviews from real customers — check Google.",
                },
                {
                  icon: <Shield className="w-6 h-6 text-green-600" />,
                  title: "Licensed Master Technicians",
                  body: "Every job done by NJ-licensed master HVAC technicians. No subcontractors, no shortcuts.",
                },
                {
                  icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
                  title: "All Makes & Models",
                  body: "We service every brand, including older equipment common in Sparta lake homes. If it can be fixed, we can fix it.",
                },
                {
                  icon: <MapPin className="w-6 h-6 text-purple-600" />,
                  title: "Family Owned Since 1998",
                  body: "Headquartered in Wharton, NJ. Local, honest, and accountable — not a franchise operation.",
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
              Frequently Asked Questions — HVAC in Sparta, NJ
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Does Air2Cool service homes in Sparta NJ?",
                  a: "Yes — we serve Sparta Township in Sussex County including the Lake Mohawk community for AC repair, heating service, and mini split installations. Call (201) 787-5657 for same-day service.",
                },
                {
                  q: "Can you service older HVAC systems in Sparta NJ lake homes?",
                  a: "Yes — we work on all makes, models, and ages of equipment including the older systems common in Sparta's lake communities. Our technicians carry parts for most common brands and can often complete repairs same-day.",
                },
                {
                  q: "Do you install mini splits in Sparta NJ?",
                  a: "Yes — ductless mini splits are a popular choice in Sparta lake homes and we install and service them throughout the area. They're ideal for homes that lack ductwork, additions, and converted cottages that need efficient year-round heating and cooling.",
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
              Air2Cool serves all of Sussex County. If you&apos;re in Vernon, Hamburg, Newton, or Hardyston, we serve your community too.
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
                href="/service-areas/sussex-county"
                className="text-xs bg-white border border-blue-200 px-3 py-1.5 rounded-full text-blue-700 hover:bg-blue-50 transition-colors"
              >
                Sussex County →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-blue-700 to-blue-600 text-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
              Need HVAC Service in Sparta?
            </h2>
            <p className="text-blue-100 mb-8 text-base md:text-lg">
              Call us or request a free estimate — Sussex County&apos;s trusted HVAC company since 1998.
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
              Also serving: Vernon · Hamburg · Newton · Hardyston · all of Sussex County
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
