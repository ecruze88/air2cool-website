import type { Metadata } from "next";
import { Phone, CheckCircle, Star, Clock, Shield, Wrench, MapPin } from "lucide-react";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "HVAC Service Vernon NJ | AC & Heating Repair | Air2Cool",
  description:
    "HVAC repair and installation in Vernon NJ. Air2Cool serves Vernon Township in Sussex County for AC, heating, and mini split systems. Call (201) 787-5657.",
  alternates: {
    canonical: "https://www.air2cool.com/service-areas/vernon",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HVACBusiness",
      "@id": "https://www.air2cool.com/service-areas/vernon#business",
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
        "name": "Vernon",
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
      "name": "HVAC Services in Vernon, NJ",
      "provider": {
        "@type": "HVACBusiness",
        "name": "Air2Cool Heating & Cooling",
      },
      "areaServed": { "@type": "City", "name": "Vernon", "addressRegion": "NJ" },
      "serviceType": "Heating Repair, Mini Split Installation, HVAC Service",
      "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does Air2Cool service HVAC in Vernon NJ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — we serve Vernon Township throughout Sussex County including the Mountain Creek area. We handle AC, heating, and mini split installations. Call (201) 787-5657.",
          },
        },
        {
          "@type": "Question",
          "name": "Do mini splits work well in Vernon NJ winters?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — modern mini splits are rated to operate efficiently down to 5°F which covers Vernon's coldest days. Many Vernon homeowners use them as primary or supplemental heat.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you service vacation homes and seasonal properties in Vernon NJ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — we regularly service seasonal homes in Vernon that are being converted to year-round use, including system sizing, installations, and upgrades. We understand the unique needs of mountain and resort-area properties.",
          },
        },
      ],
    },
  ],
};

const SERVICES = [
  { name: "Heating Repair", href: "/services/heating-repair", desc: "Furnace, boiler & heat pump repair." },
  { name: "Heating Installation", href: "/services/heating-installation", desc: "New furnace or boiler with warranty." },
  { name: "Mini Split", href: "/services/mini-split", desc: "Ductless mini-split installs & service." },
  { name: "AC Repair", href: "/services/ac-repair", desc: "Fast diagnosis for all makes and models." },
  { name: "AC Installation", href: "/services/cooling-installation", desc: "Energy-efficient systems with 0% financing." },
  { name: "Air Filtration", href: "/services/air-quality", desc: "Whole-home air purifiers & filters." },
  { name: "Humidifiers", href: "/services/humidifier", desc: "Whole-home humidity control systems." },
  { name: "Preventative Maintenance", href: "/services/preventative-maintenance", desc: "Annual tune-ups before breakdowns happen." },
];

const NEARBY = [
  { name: "Hardyston", slug: "hardyston" },
  { name: "Wantage", slug: "wantage" },
  { name: "Hamburg", slug: "hamburg" },
  { name: "Sparta", slug: "sparta" },
];

export default function VernonPage() {
  return (
    <>
      <Script
        id="schema-vernon"
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
              Sussex County · 07462
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight">
              HVAC Service in Vernon, NJ
            </h1>
            <p className="text-base md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Air2Cool serves Vernon Township and all of Sussex County for heating repair, mini split
              installations, and AC service. Reliable HVAC for mountain communities — call (201) 787-5657.
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
              Vernon Township is Sussex County&apos;s largest township by area — a spread-out community of mountain neighborhoods, ski resort areas, and rural properties with HVAC needs that differ significantly from the dense suburbs closer to the coast. Air2Cool makes the trip regularly, and we understand what it takes to keep homes running reliably at Vernon&apos;s elevation.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-10 md:py-14 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
              Heating &amp; AC Service in Vernon, NJ
            </h2>
            <div className="text-sm md:text-base text-gray-700 space-y-5 leading-relaxed">
              <p>
                Vernon&apos;s elevation means colder winters than most of New Jersey — heating system reliability is not optional here. We handle a lot of furnace service, boiler repair, and heat pump work in Vernon because when the temperature drops in the mountains, systems that were marginal in October start failing in December. If you haven&apos;t had your <Link href="/services/preventative-maintenance" className="text-blue-600 hover:underline">system serviced</Link> recently, before the deep cold sets in is the right time to call.
              </p>
              <p>
                The <strong>Mountain Creek resort area</strong> and surrounding communities create a distinctive service environment — many properties here are vacation homes or converted seasonal properties being brought to year-round standard. These jobs require careful evaluation of what the existing system can handle, what needs to be upgraded, and what the most cost-effective path to year-round comfort looks like. We&apos;re experienced with these assessments and won&apos;t oversell you on more than you need.
              </p>
              <p>
                <Link href="/services/mini-split" className="text-blue-600 hover:underline">Ductless mini split systems</Link> are particularly popular in Vernon for several reasons: they handle both heating and cooling efficiently, they don&apos;t require existing ductwork, and modern cold-climate mini splits are rated to operate efficiently down to <strong>5°F</strong> — which covers even Vernon&apos;s coldest days. For mountain homes, additions, or seasonal property conversions, mini splits are often the most practical solution.
              </p>
              <p>
                Vernon is at the outer edge of our service area, but we regularly make the trip for installations and service calls. For <Link href="/services/heating-installation" className="text-blue-600 hover:underline">new heating system installations</Link>, we&apos;ll schedule a dedicated day and make sure the job is done completely and correctly. Emergency heating calls are handled as quickly as we can reach you — we understand that a heating failure in Vernon in January is a serious situation.
              </p>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                href="/services/heating-repair"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold text-sm transition-colors"
              >
                <Wrench className="w-4 h-4" /> Heating Repair
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
              All HVAC Services in Vernon
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

        {/* Why Vernon Residents Choose Air2Cool */}
        <section className="py-10 md:py-14 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center mb-8">
              Why Vernon Residents Choose Air2Cool
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Clock className="w-6 h-6 text-red-600" />,
                  title: "24/7 Emergency Heating",
                  body: "Mountain heating failures can't wait. We answer emergency calls day and night, weekends included.",
                },
                {
                  icon: <Wrench className="w-6 h-6 text-blue-600" />,
                  title: "Cold-Climate Mini Splits",
                  body: "We install mini splits rated to 5°F — reliable heat for Vernon's coldest mountain nights.",
                },
                {
                  icon: <Star className="w-6 h-6 text-yellow-500" />,
                  title: "250+ Five-Star Reviews",
                  body: "Trusted across Sussex County and North NJ for over 26 years. Real reviews, real customers.",
                },
                {
                  icon: <Shield className="w-6 h-6 text-green-600" />,
                  title: "Licensed Master Technicians",
                  body: "NJ-licensed master HVAC technicians on every job. No subcontractors, no shortcuts.",
                },
                {
                  icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
                  title: "Seasonal Home Specialists",
                  body: "We regularly help vacation and seasonal homes in Vernon convert to reliable year-round systems.",
                },
                {
                  icon: <MapPin className="w-6 h-6 text-purple-600" />,
                  title: "Family Owned Since 1998",
                  body: "Headquartered in Wharton, NJ. We&apos;re your neighbor — not a franchise or out-of-state contractor.",
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
              Frequently Asked Questions — HVAC in Vernon, NJ
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Does Air2Cool service HVAC in Vernon NJ?",
                  a: "Yes — we serve Vernon Township throughout Sussex County including the Mountain Creek area. We handle AC repair, heating service, and mini split installations. Call (201) 787-5657.",
                },
                {
                  q: "Do mini splits work well in Vernon NJ winters?",
                  a: "Yes — modern cold-climate mini splits are rated to operate efficiently down to 5°F, which covers Vernon's coldest days. Many Vernon homeowners use them as primary or supplemental heat, especially in homes without existing ductwork.",
                },
                {
                  q: "Do you service vacation homes and seasonal properties in Vernon NJ?",
                  a: "Yes — we regularly service seasonal homes in Vernon that are being converted to year-round use. This includes system sizing, new installations, and upgrades. We understand the unique challenges of mountain resort-area properties.",
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
              Air2Cool serves all of Sussex County. If you&apos;re in Hardyston, Wantage, Hamburg, or Sparta, we&apos;re your HVAC company too.
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
              Need HVAC Service in Vernon?
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
              Also serving: Hardyston · Wantage · Hamburg · Sparta · all of Sussex County
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
