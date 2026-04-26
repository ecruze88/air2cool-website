import type { Metadata } from "next";
import { Phone, CheckCircle, Star, Clock, Shield, Wrench, MapPin } from "lucide-react";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "HVAC Company Wharton NJ | Air2Cool — Local Since 1998",
  description:
    "Air2Cool is based in Wharton NJ — your local HVAC company for AC repair, heating, and installations. Same-day service, licensed master technicians. Call (201) 787-5657.",
  alternates: {
    canonical: "https://www.air2cool.com/service-areas/wharton",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HVACBusiness",
      "@id": "https://www.air2cool.com/service-areas/wharton#business",
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
        "name": "Wharton",
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
      "name": "HVAC Services in Wharton, NJ",
      "provider": {
        "@type": "HVACBusiness",
        "name": "Air2Cool Heating & Cooling",
      },
      "areaServed": { "@type": "City", "name": "Wharton", "addressRegion": "NJ" },
      "serviceType": "AC Repair, Heating Repair, HVAC Installation",
      "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Air2Cool based in Wharton NJ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — our headquarters is at 20 Kitchell Ave in Wharton. We've been serving Wharton and surrounding Morris County communities since 1998.",
          },
        },
        {
          "@type": "Question",
          "name": "How fast can Air2Cool respond to a call in Wharton NJ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "As our home base, Wharton gets our fastest response times — most calls get a technician on-site within the hour.",
          },
        },
        {
          "@type": "Question",
          "name": "Does Air2Cool offer emergency HVAC service in Wharton NJ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, 24/7 emergency service is available for Wharton residents for heating and AC emergencies.",
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
  { name: "Preventative Maintenance", href: "/services/preventative-maintenance", desc: "Annual tune-ups before breakdowns happen." },
];

const NEARBY = [
  { name: "Dover", slug: "dover" },
  { name: "Rockaway", slug: "rockaway" },
  { name: "Mine Hill", slug: "mine-hill" },
  { name: "Victory Gardens", slug: "victory-gardens" },
];

export default function WhartonPage() {
  return (
    <>
      <Script
        id="schema-wharton"
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
              Our Hometown · Morris County · 07885
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight">
              HVAC Company in Wharton, NJ
            </h1>
            <p className="text-base md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Air2Cool is headquartered right here in Wharton — 20 Kitchell Ave. We&apos;re not a company
              that drives in from out of town. Wharton is our home, and your neighbors are our customers.
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

        {/* Local intro */}
        <section className="py-10 md:py-14 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              When you call Air2Cool from a Wharton address, you&apos;re calling your neighbor. Our office is at <strong>20 Kitchell Ave</strong> — right here in town. Our technicians live in this community, drive these streets every day, and have been taking care of Wharton homes and businesses since 1998. That means no guessing about your neighborhood, no driving in from two counties away, and no hand-off to a dispatch center that doesn&apos;t know your block.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-10 md:py-14 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
              HVAC Service in Wharton, NJ
            </h2>
            <div className="text-sm md:text-base text-gray-700 space-y-5 leading-relaxed">
              <p>
                Air2Cool has served Wharton homeowners since 1998 and we know the housing stock well — from the older colonials and ranches near the downtown to newer builds off Route 15. We&apos;ve replaced furnaces, repaired boilers, installed central AC systems, and handled emergency service calls in virtually every neighborhood in town. When your heating goes out in January, you want someone who can be at your door fast. That&apos;s us.
              </p>
              <p>
                Wharton sits at the heart of Morris County, bordered by <Link href="/service-areas/dover" className="text-blue-600 hover:underline">Dover</Link> and <Link href="/service-areas/rockaway" className="text-blue-600 hover:underline">Rockaway</Link>. That central location is exactly why we put our headquarters here — it puts us within reach of every Morris County community we serve. But for Wharton residents specifically, it means you get our fastest response times. Most calls within town get a technician on-site within the hour.
              </p>
              <p>
                We offer the full range of <Link href="/services/ac-repair" className="text-blue-600 hover:underline">AC repair</Link> and <Link href="/services/heating-repair" className="text-blue-600 hover:underline">heating repair</Link> services in Wharton, including 24/7 emergency calls. If your furnace fails on a Friday night in February, call us — we answer. If your AC dies the week of a heat wave, same deal. There&apos;s no premium surcharge for evenings or weekends for Wharton residents, because our team is already here.
              </p>
              <p>
                We&apos;re also proud to give back to the town that&apos;s supported us for over 26 years. Air2Cool sponsors the <strong>Wharton Little League</strong>, and we&apos;re committed to being a resource for this community — not just a vendor. When you call Air2Cool, you&apos;re supporting a locally owned business that puts Wharton first.
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
                href="/services/heating-repair"
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full font-semibold text-sm transition-colors"
              >
                <Wrench className="w-4 h-4" /> Heating Repair
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold text-sm transition-colors"
              >
                Get a Free Estimate
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-10 md:py-14 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center mb-3">
              All HVAC Services in Wharton
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

        {/* Why Wharton Residents Choose Air2Cool */}
        <section className="py-10 md:py-14 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center mb-8">
              Why Wharton Residents Choose Air2Cool
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <MapPin className="w-6 h-6 text-blue-600" />,
                  title: "Headquartered in Wharton",
                  body: "20 Kitchell Ave is our home base. When you call, your technician is already nearby — not driving in from another county.",
                },
                {
                  icon: <Clock className="w-6 h-6 text-red-600" />,
                  title: "Fastest Response Times",
                  body: "Most Wharton calls get a technician on-site within the hour. No other HVAC company can match our response time in town.",
                },
                {
                  icon: <Star className="w-6 h-6 text-yellow-500" />,
                  title: "250+ Five-Star Reviews",
                  body: "Real customers across Morris County. Check our Google reviews — you&apos;ll see Wharton neighbors recommending us.",
                },
                {
                  icon: <Shield className="w-6 h-6 text-green-600" />,
                  title: "Licensed Master Technicians",
                  body: "Every job done by NJ-licensed master HVAC technicians. No subcontractors, no shortcuts.",
                },
                {
                  icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
                  title: "0% Financing Up to $25K",
                  body: "Don&apos;t put off a needed replacement because of upfront cost. Same-day approval available.",
                },
                {
                  icon: <Shield className="w-6 h-6 text-purple-600" />,
                  title: "Community Sponsor",
                  body: "We sponsor the Wharton Little League because this town has supported us for 26+ years. We give back.",
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
              Frequently Asked Questions — HVAC in Wharton, NJ
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Is Air2Cool based in Wharton NJ?",
                  a: "Yes — our headquarters is at 20 Kitchell Ave in Wharton. We've been serving Wharton and surrounding Morris County communities since 1998. We're not a company that dispatches from far away — this is our hometown.",
                },
                {
                  q: "How fast can Air2Cool respond to a call in Wharton NJ?",
                  a: "As our home base, Wharton gets our fastest response times — most calls get a technician on-site within the hour. For 24/7 emergencies, we prioritize Wharton calls because our team is already here.",
                },
                {
                  q: "Does Air2Cool offer emergency HVAC service in Wharton NJ?",
                  a: "Yes — 24/7 emergency service is available for Wharton residents for both heating and AC emergencies. If your furnace fails in the middle of winter or your AC goes out during a heat wave, call (201) 787-5657 any time.",
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
              From our Wharton headquarters, we serve all of Morris County and beyond. Our neighbors in Dover, Rockaway, Mine Hill, and Victory Gardens all count on Air2Cool for fast, reliable HVAC service.
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
              Need HVAC Service in Wharton?
            </h2>
            <p className="text-blue-100 mb-8 text-base md:text-lg">
              We&apos;re right down the road. Call us or request a free estimate online.
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
              Also serving: Dover · Rockaway · Mine Hill · Victory Gardens · all of Morris County
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
