import type { Metadata } from "next";
import { Phone, CheckCircle, Star, Clock, Shield, Wrench, MapPin } from "lucide-react";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "HVAC Service Hackettstown NJ | AC & Heating Repair | Air2Cool",
  description:
    "HVAC repair and installation in Hackettstown NJ. Air2Cool serves Warren County including Hackettstown for AC repair, furnace service, and installations. Call (201) 787-5657.",
  alternates: {
    canonical: "https://www.air2cool.com/service-areas/hackettstown",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HVACBusiness",
      "@id": "https://www.air2cool.com/service-areas/hackettstown#business",
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
        "name": "Hackettstown",
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
      "name": "HVAC Services in Hackettstown, NJ",
      "provider": {
        "@type": "HVACBusiness",
        "name": "Air2Cool Heating & Cooling",
      },
      "areaServed": { "@type": "City", "name": "Hackettstown", "addressRegion": "NJ" },
      "serviceType": "Heating Repair, AC Repair, Furnace Installation",
      "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does Air2Cool service HVAC systems in Hackettstown NJ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — Hackettstown is part of our Warren County service area. We provide AC repair, heating service, and full HVAC installations throughout Hackettstown. Call (201) 787-5657.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you repair boilers in Hackettstown NJ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — we service and replace boilers throughout Warren County including Hackettstown. Same-day service is available for heating emergencies. We're NTI-certified and handle all major boiler brands.",
          },
        },
        {
          "@type": "Question",
          "name": "How far is Air2Cool from Hackettstown NJ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "About 25-30 minutes from our Wharton base. We serve Hackettstown regularly as part of our Warren County route, with same-day and emergency service available.",
          },
        },
      ],
    },
  ],
};

const SERVICES = [
  { name: "Heating Repair", href: "/services/heating-repair", desc: "Furnace, boiler & heat pump repair." },
  { name: "Heating Installation", href: "/services/heating-installation", desc: "New furnace or boiler with warranty." },
  { name: "AC Repair", href: "/services/ac-repair", desc: "Fast diagnosis for all makes and models." },
  { name: "AC Installation", href: "/services/cooling-installation", desc: "Energy-efficient systems with 0% financing." },
  { name: "Mini Split", href: "/services/mini-split", desc: "Ductless mini-split installs & service." },
  { name: "Air Filtration", href: "/services/air-quality", desc: "Whole-home air purifiers & filters." },
  { name: "Humidifiers", href: "/services/humidifier", desc: "Whole-home humidity control systems." },
  { name: "Preventative Maintenance", href: "/services/preventative-maintenance", desc: "Annual tune-ups before breakdowns happen." },
];

const NEARBY = [
  { name: "Washington", slug: "washington" },
  { name: "Allamuchy", slug: "allamuchy" },
  { name: "Mansfield", slug: "mansfield" },
  { name: "Oxford", slug: "oxford" },
];

export default function HackettstownPage() {
  return (
    <>
      <Script
        id="schema-hackettstown"
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
              Warren County · 07840
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight">
              HVAC Service in Hackettstown, NJ
            </h1>
            <p className="text-base md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Air2Cool serves Hackettstown and all of Warren County for AC repair, heating service, and
              full HVAC installations. Licensed master technicians, honest pricing, 24/7 emergency service.
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
              Hackettstown is one of Warren County&apos;s main towns and a regular part of our service route heading west from Wharton. We&apos;re approximately <strong>25–30 minutes away</strong>, and we serve Hackettstown for everything from routine AC tune-ups to emergency furnace repairs in the dead of winter. As a family-owned company with over 26 years of experience, we bring the same licensed, licensed craftsmanship to every Warren County home we serve.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-10 md:py-14 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
              Heating &amp; AC Service in Hackettstown, NJ
            </h2>
            <div className="text-sm md:text-base text-gray-700 space-y-5 leading-relaxed">
              <p>
                Hackettstown has a mix of older downtown housing stock and newer developments along the Route 46 corridor — and both present different HVAC service needs. The older homes near the center of town often have aging boilers or furnaces, original ductwork, and systems that were sized for a different era of energy efficiency. The newer builds along the Route 46 corridor tend to have more modern high-efficiency systems, but they still need regular maintenance and occasional repairs.
              </p>
              <p>
                One thing that stands out about Hackettstown compared to our Morris County service areas: the town gets noticeably colder winters. Elevated terrain and exposure to western weather patterns mean <Link href="/services/heating-repair" className="text-blue-600 hover:underline">heating system reliability</Link> is critical here. We see more boiler and furnace service calls in Hackettstown during winter than in some of our other service areas, and we come prepared with the parts and experience to handle them. If your system has been struggling or making unusual sounds, don&apos;t wait for a complete failure — call us before the temperature drops.
              </p>
              <p>
                The area around <strong>Centenary University</strong> is home to a mix of rental properties and smaller units where deferred maintenance is common. We&apos;re experienced in servicing these properties efficiently and getting systems back online quickly, whether you&apos;re a homeowner, a landlord, or a property manager.
              </p>
              <p>
                For new <Link href="/services/heating-installation" className="text-blue-600 hover:underline">heating system installations</Link>, we carry Lochinvar, NTI, and Weil-McLain boilers along with major furnace brands. We&apos;ll size the system properly for your home using Manual J load calculations — no guesswork, no oversizing — and include proper permits and final inspections.
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
                href="/services/heating-installation"
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full font-semibold text-sm transition-colors"
              >
                New Heating System
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-10 md:py-14 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center mb-3">
              All HVAC Services in Hackettstown
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

        {/* Why Hackettstown Residents Choose Air2Cool */}
        <section className="py-10 md:py-14 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center mb-8">
              Why Hackettstown Residents Choose Air2Cool
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Clock className="w-6 h-6 text-red-600" />,
                  title: "24/7 Emergency Heating",
                  body: "Hackettstown winters are no joke. We answer emergency calls around the clock — day, night, weekends, holidays.",
                },
                {
                  icon: <Wrench className="w-6 h-6 text-blue-600" />,
                  title: "Boiler Specialists",
                  body: "NTI-certified and experienced with all boiler brands. Hydronic, steam, and modern condensing systems.",
                },
                {
                  icon: <Star className="w-6 h-6 text-yellow-500" />,
                  title: "250+ Five-Star Reviews",
                  body: "Real customers across Morris and Warren County. Check Google before you call.",
                },
                {
                  icon: <Shield className="w-6 h-6 text-green-600" />,
                  title: "Licensed Master Technicians",
                  body: "Every job done by NJ-licensed master HVAC technicians. No subcontractors, no shortcuts.",
                },
                {
                  icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
                  title: "0% Financing Up to $25K",
                  body: "New heating or cooling system without the upfront strain. Same-day financing approval available.",
                },
                {
                  icon: <MapPin className="w-6 h-6 text-purple-600" />,
                  title: "25-30 Min From Wharton",
                  body: "Family-owned in Wharton, NJ — we serve Hackettstown regularly as part of our Warren County route.",
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
              Frequently Asked Questions — HVAC in Hackettstown, NJ
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Does Air2Cool service HVAC systems in Hackettstown NJ?",
                  a: "Yes — Hackettstown is part of our Warren County service area. We provide AC repair, heating service, and full HVAC installations throughout Hackettstown. Call (201) 787-5657 for same-day appointments.",
                },
                {
                  q: "Do you repair boilers in Hackettstown NJ?",
                  a: "Yes — we service and replace boilers throughout Warren County including Hackettstown. Same-day service is available for heating emergencies. We're NTI-certified and handle all major boiler brands including Weil-McLain, Burnham, and Buderus.",
                },
                {
                  q: "How far is Air2Cool from Hackettstown NJ?",
                  a: "About 25-30 minutes from our Wharton base. We serve Hackettstown regularly as part of our Warren County route. Emergency calls are prioritized and we'll get there as fast as possible.",
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
              Air2Cool serves all of Warren County and the surrounding region. If you&apos;re in Washington, Allamuchy, Mansfield, or Oxford, we&apos;re your HVAC company too.
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
                href="/service-areas/warren-county"
                className="text-xs bg-white border border-blue-200 px-3 py-1.5 rounded-full text-blue-700 hover:bg-blue-50 transition-colors"
              >
                Warren County →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-blue-700 to-blue-600 text-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
              Need HVAC Service in Hackettstown?
            </h2>
            <p className="text-blue-100 mb-8 text-base md:text-lg">
              Call us or request a free estimate online — Warren County&apos;s trusted HVAC company since 1998.
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
              Also serving: Washington · Allamuchy · Mansfield · Oxford · all of Warren County
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
