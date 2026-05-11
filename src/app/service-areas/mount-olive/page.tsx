import type { Metadata } from "next";
import { Phone, CheckCircle, Star, Clock, Shield, Wrench, MapPin } from "lucide-react";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "HVAC Service Mount Olive NJ | AC Repair & Heating | Air2Cool",
  description:
    "AC repair and HVAC service in Mount Olive NJ including Budd Lake and Flanders. Air2Cool serves all of Mount Olive Township from our Wharton base. Call (201) 787-5657.",
  alternates: {
    canonical: "https://www.air2cool.com/service-areas/mount-olive",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HVACBusiness",
      "@id": "https://www.air2cool.com/service-areas/mount-olive#business",
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
        "name": "Mount Olive Township",
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
      "name": "HVAC Service in Mount Olive Township, NJ",
      "provider": {
        "@type": "HVACBusiness",
        "name": "Air2Cool Heating & Cooling",
      },
      "areaServed": { "@type": "City", "name": "Mount Olive", "addressRegion": "NJ" },
      "serviceType": "HVAC Repair, Installation, and Maintenance",
      "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you serve Budd Lake and Flanders in Mount Olive NJ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — we serve all communities within Mount Olive Township including Budd Lake, Flanders, and Netcong border areas. Air2Cool covers all of Morris County from our Wharton base.",
          },
        },
        {
          "@type": "Question",
          "name": "Can you install a mini split in a Budd Lake home?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — ductless mini splits are a popular solution for Budd Lake homes, especially those near the water that deal with humidity and may lack traditional ductwork. We handle sizing, installation, and commissioning.",
          },
        },
        {
          "@type": "Question",
          "name": "How far is Air2Cool from Mount Olive Township?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mount Olive Township is approximately 15–25 minutes from our Wharton base depending on your location in the township. Emergency calls are available 24/7.",
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

export default function MountOlivePage() {
  return (
    <>
      <Script
        id="schema-mount-olive"
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
              Morris County · 07828
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight">
              HVAC Service in Mount Olive Township, NJ
            </h1>
            <p className="text-base md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Air2Cool serves all of Mount Olive Township — Budd Lake, Flanders, and surrounding areas.
              AC repair, heating installation, and mini split service from our Wharton base.
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

        {/* Unique Local Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-5">
              HVAC Service in Mount Olive Township, NJ
            </h2>
            <div className="text-base text-gray-700 space-y-4 leading-relaxed">
              <p>
                Mount Olive Township covers a large area including Budd Lake, Flanders, and the Route 206
                corridor — each with its own character and housing stock. We serve all of it, regularly
                dispatching from our Wharton base approximately 20–25 minutes away.
              </p>
              <p>
                Budd Lake homes near the water present the same humidity and seasonal conversion challenges
                we see in other NJ lake communities. Mini splits are popular here for home additions,
                sunrooms, and garage conversions where extending existing ductwork isn&apos;t practical.
                We&apos;ve installed many ductless systems in the Budd Lake area and know the quirks of
                lakefront HVAC work well.
              </p>
              <p>
                The Flanders area along Route 206 has more traditional suburban housing — ranches,
                colonials, and newer developments with a mix of gas forced-air and heat pump systems.
                We regularly serve Mount Olive for AC repairs, furnace installations, and full HVAC
                replacements with proper Manual J load calculations to ensure the right system size for
                each home.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Link
                  href="/services/ac-repair"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold text-sm transition-colors"
                >
                  <CheckCircle className="w-4 h-4" /> AC Repair Services
                </Link>
                <Link
                  href="/services/mini-split"
                  className="inline-flex items-center justify-center gap-2 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full font-semibold text-sm transition-colors"
                >
                  Mini Split Installation →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-10 md:py-14 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center mb-3">
              All HVAC Services in Mount Olive
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
              Why Mount Olive Residents Choose Air2Cool
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
                  title: "250+ Five-Star Reviews",
                  body: "Real customers across Morris County and North Jersey. Check our Google reviews before you call.",
                },
                {
                  icon: <Clock className="w-6 h-6 text-red-600" />,
                  title: "24/7 Emergency Service",
                  body: "We answer at 2 AM. Approximately 20–25 minutes from our Wharton base to Mount Olive.",
                },
                {
                  icon: <Wrench className="w-6 h-6 text-green-600" />,
                  title: "Mini Split Specialists",
                  body: "Ductless installs for Budd Lake additions, sunrooms, and seasonal conversions.",
                },
                {
                  icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
                  title: "0% Financing Up to $25K",
                  body: "Same-day approval on most applications. Don't delay comfort over budget.",
                },
                {
                  icon: <MapPin className="w-6 h-6 text-purple-600" />,
                  title: "Local Since 1998",
                  body: "Family-owned out of Wharton, serving all of Mount Olive Township since 1998.",
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
              Serving Mount Olive Township and Nearby Morris County Communities
            </h2>
            <div className="text-sm md:text-base text-gray-700 space-y-4 leading-relaxed">
              <p>
                Air2Cool Heating &amp; Cooling has been the trusted HVAC contractor for Mount Olive Township
                since 1998. Whether you&apos;re in Budd Lake, Flanders, or the Netcong border area, we
                dispatch from nearby Wharton and can often provide same-day service even for routine
                maintenance requests during the busy season.
              </p>
              <p>
                We also serve nearby{" "}
                <Link href="/service-areas/wharton" className="text-blue-600 hover:underline">Wharton</Link>,{" "}
                <Link href="/service-areas/hackettstown" className="text-blue-600 hover:underline">Hackettstown</Link>,{" "}
                <Link href="/service-areas/chester" className="text-blue-600 hover:underline">Chester</Link>, and{" "}
                <Link href="/service-areas/long-valley" className="text-blue-600 hover:underline">Long Valley</Link>.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { name: "Wharton", slug: "wharton" },
                { name: "Hackettstown", slug: "hackettstown" },
                { name: "Chester", slug: "chester" },
                { name: "Long Valley", slug: "long-valley" },
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
              HVAC Questions from Mount Olive Residents
            </h2>
            <div className="space-y-5">
              {[
                {
                  q: "Do you serve Budd Lake and Flanders in Mount Olive NJ?",
                  a: "Yes — we serve all communities within Mount Olive Township including Budd Lake, Flanders, and Netcong border areas. Air2Cool covers all of Morris County from our Wharton base.",
                },
                {
                  q: "Can you install a mini split in a Budd Lake home?",
                  a: "Yes — ductless mini splits are a popular solution for Budd Lake homes, especially those near the water that deal with humidity and may lack traditional ductwork. We handle sizing, installation, and commissioning.",
                },
                {
                  q: "How far is Air2Cool from Mount Olive Township?",
                  a: "Mount Olive Township is approximately 15–25 minutes from our Wharton base depending on your location in the township. Emergency calls are available 24/7.",
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
              Need HVAC Help in Mount Olive?
            </h2>
            <p className="text-blue-100 mb-8 text-base md:text-lg">
              Call us or fill out the form — we respond fast, day or night. Serving all of Mount Olive Township.
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
              Also serving: Budd Lake · Flanders · Wharton · Hackettstown · all of Morris County
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
