import type { Metadata } from "next";
import { Wind, CheckCircle, ArrowRight, Filter, Shield } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Indoor Air Quality & Filtration Services in North NJ | Air2Cool | (201) 787-5657",
  description:
    "Professional indoor air quality and air filtration services in North NJ & Morris County. Whole-house dehumidifiers, iWave-R purifiers, UV filtration, HEPA filters, and media filters installed by licensed HVAC technicians. Call (201) 787-5657.",
  keywords: [
    "indoor air quality North NJ",
    "air filtration Morris County NJ",
    "whole house dehumidifier NJ",
    "air purifier installation NJ",
    "UV air filtration Morris County",
    "HEPA filter installation NJ",
    "iWave air ionizer NJ",
    "Aprilaire dehumidifier Morris County",
    "Honeywell air filter NJ",
    "allergy HVAC solutions NJ",
    "air quality improvement North Jersey",
    "duct cleaning North NJ",
  ],
  alternates: {
    canonical: "/services/air-quality",
  },
  openGraph: {
    title: "Indoor Air Quality & Filtration Services in North NJ | Air2Cool",
    description:
      "UV filtration, HEPA filters, iWave-R purifiers, whole-house dehumidifiers & media filters. Breathe healthier air. Morris County & North NJ. Call (201) 787-5657.",
    url: "/services/air-quality",
  },
};

const PRODUCTS = [
  {
    brand: "Aprilaire",
    name: "Whole-House Dehumidifier",
    description:
      "Maintains ideal humidity levels throughout your entire home, not just one room. Prevents mold growth, reduces musty odors, and protects wood floors and furniture from moisture damage.",
    benefits: ["Controls 70–120 pints/day", "Whole-home coverage", "Prevents mold & mildew", "Auto humidity sensing"],
    href: "https://www.aprilaire.com",
    color: "blue",
  },
  {
    brand: "iWave-R",
    name: "Air Ionizer",
    description:
      "Mounts inside your existing duct system and generates positive and negative ions that actively kill bacteria, viruses, mold spores, and reduce allergens — without producing ozone.",
    benefits: ["Kills bacteria & viruses", "Reduces allergens & odors", "No ozone produced", "Self-cleaning needlepoint"],
    href: "https://www.iwaveair.com",
    color: "purple",
  },
  {
    brand: "Honeywell",
    name: "ElitePRO S1200 Smart Thermostat",
    description:
      "Wi-Fi enabled smart thermostat with remote sensor support, flexible scheduling, and energy usage tracking. Works with Alexa, Google Home, and Apple HomeKit for voice control.",
    benefits: ["Wi-Fi & voice control", "Remote room sensors", "Energy savings reports", "7-day scheduling"],
    href: "https://www.honeywellhome.com",
    color: "red",
  },
  {
    brand: "Honeywell",
    name: '4" Media Air Filter',
    description:
      "Deep-media filtration that traps over 90% of airborne particles including dust, pollen, pet dander, and smoke. Works with your existing HVAC system — no bypass around the filter.",
    benefits: ["MERV 11 filtration", "Traps 90%+ of particles", "Lasts up to 1 year", "Fits standard duct openings"],
    href: "https://www.honeywellhome.com",
    color: "green",
  },
];

const colorMap: Record<string, { badge: string; border: string; dot: string }> = {
  blue:   { badge: "bg-blue-100 text-blue-700",    border: "border-blue-200",   dot: "bg-blue-500" },
  purple: { badge: "bg-purple-100 text-purple-700", border: "border-purple-200", dot: "bg-purple-500" },
  red:    { badge: "bg-red-100 text-red-700",        border: "border-red-200",    dot: "bg-red-500" },
  green:  { badge: "bg-green-100 text-green-700",   border: "border-green-200",  dot: "bg-green-500" },
};

const FILTER_TYPES = [
  {
    name: "Fiberglass / Flat Panel",
    merv: "MERV 1–4",
    lifespan: "Replace monthly",
    catches: "Large dust & lint only",
    upgrade: true,
  },
  {
    name: "Standard Pleated",
    merv: "MERV 7–8",
    lifespan: "Every 3 months",
    catches: "Dust, pollen, mold spores",
    upgrade: false,
  },
  {
    name: "High-Efficiency Media (4\")",
    merv: "MERV 11",
    lifespan: "Every 12 months",
    catches: "90%+ of particles incl. pet dander & smoke",
    upgrade: false,
  },
  {
    name: "HEPA Filtration",
    merv: "MERV 17+",
    lifespan: "Every 12–24 months",
    catches: "99.97% of particles ≥ 0.3 microns",
    upgrade: false,
  },
];

const STEPS = [
  {
    step: "1",
    title: "Free Assessment",
    body: "A licensed technician visits your home to measure humidity levels, test air quality, inspect ductwork, and identify problem areas like mold risk zones or poor ventilation.",
  },
  {
    step: "2",
    title: "Professional Installation",
    body: "We install the right equipment for your home's size and specific needs — properly integrated with your existing HVAC system for whole-home coverage.",
  },
  {
    step: "3",
    title: "Ongoing Maintenance",
    body: "We replace filters, clean ionizer needles, and verify humidity controls are dialed in. Your system keeps working hard without you thinking about it.",
  },
];

export default function AirQualityPage() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Indoor Air Quality & Filtration Services",
            description:
              "Professional indoor air quality and air filtration services in Morris County & North NJ. UV filtration, HEPA filters, iWave-R air purifiers, whole-house dehumidifiers, duct cleaning, and media filters installed by licensed HVAC technicians.",
            provider: {
              "@type": "HVACBusiness",
              "@id": "https://www.air2cool.com/#organization",
              name: "Air2Cool Heating & Cooling",
              telephone: "+1-201-787-5657",
              url: "https://www.air2cool.com",
            },
            areaServed: [
              { "@type": "AdministrativeArea", name: "Morris County, NJ" },
              { "@type": "AdministrativeArea", name: "North New Jersey" },
            ],
            url: "https://www.air2cool.com/services/air-quality",
            serviceType: "Indoor Air Quality",
          }),
        }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-teal-900 via-cyan-800 to-teal-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-24 md:py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-4">
              <Wind className="w-4 h-4" />
              INDOOR AIR QUALITY &amp; FILTRATION
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
              Indoor Air Quality &amp; Filtration Services in North NJ
            </h1>

            <p className="text-base md:text-xl text-gray-200 leading-relaxed max-w-3xl mb-6 md:mb-8">
              The air inside your home can be 2–5× more polluted than outdoor air. Between NJ allergy seasons, summer humidity, and older homes with limited ventilation, what you breathe every day directly impacts your health, sleep, and comfort. Air2Cool installs proven filtration and purification systems to fix it.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
              <Link
                href="/contact"
                className="bg-white text-teal-700 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-all shadow-lg hover:bg-gray-50 text-center"
              >
                Get Free Assessment
              </Link>
              <a
                href="tel:+12017875657"
                className="bg-white/10 hover:bg-white/20 backdrop-blur text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all border border-white/20 text-center"
              >
                Call (201) 787-5657
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
          </svg>
        </div>
      </section>

      {/* Intro */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
            Why Indoor Air Quality Matters
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
            New Jersey allergy season runs from March through June, hammering residents with tree pollen, grass, and mold spores. Summer humidity routinely climbs above 70%, creating ideal conditions for mold growth inside walls and ductwork. Older homes — common throughout Morris, Sussex, and Passaic counties — often lack adequate ventilation, trapping stale air, VOCs from cleaning products, and pet dander indoors.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            The result: aggravated allergies, disrupted sleep, worsened asthma, and persistent musty odors. The right combination of dehumidification, purification, and filtration can dramatically improve how your family feels at home — and protect your property from hidden moisture damage.
          </p>
        </div>
      </section>

      {/* Air Filtration Systems */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
            {/* Left — services list */}
            <div>
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                <Filter className="w-3.5 h-3.5" />
                Air Filtration
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
                Air Filtration Systems
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                Most homes run on basic 1-inch flat-panel filters that block large dust but let pollen, mold spores, and fine particles pass right through. Upgrading to a high-efficiency media filter or HEPA system is the single biggest improvement you can make to your home's air.
              </p>

              <div className="space-y-2 mb-6">
                {[
                  "UV air filtration & germicidal lights",
                  "HEPA air filtration systems",
                  "4\" deep-media filters (MERV 11)",
                  "iWave-R 4900-20 air ionizer",
                  "Air duct analysis & cleaning",
                  "Air exchangers & fresh air vents",
                  "UV air sanitizing systems",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
                    <span className="text-sm md:text-base text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl p-4 md:p-6 border-2 border-green-200 shadow-sm">
                <Shield className="w-7 h-7 text-green-600 mb-3" />
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">Residential &amp; Commercial</h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  We offer both residential and commercial air quality equipment — from single-family homes to restaurants, medical offices, and retail spaces.
                </p>
              </div>
            </div>

            {/* Right — filter comparison */}
            <div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Filter Type Comparison</h3>
              <div className="space-y-3">
                {FILTER_TYPES.map((f) => (
                  <div key={f.name} className={`rounded-xl p-4 border-2 ${f.upgrade ? "border-orange-200 bg-orange-50" : "border-green-200 bg-white"}`}>
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <span className="font-bold text-sm md:text-base text-gray-900">{f.name}</span>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full shrink-0 ${f.upgrade ? "bg-orange-100 text-orange-700" : "bg-green-100 text-green-700"}`}>
                        {f.merv}
                      </span>
                    </div>
                    <p className="text-xs md:text-sm text-gray-600 mb-1">{f.catches}</p>
                    <p className="text-xs text-gray-500">{f.lifespan}</p>
                    {f.upgrade && (
                      <p className="text-xs font-semibold text-orange-600 mt-1.5">Most homes start here — consider upgrading</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Air Quality Solutions — iWave-R feature split */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Left — copy */}
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
                Our Air Quality Solutions
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                Air2Cool installs the iWave-R 4900-20 needle-point bipolar ionizer directly inside your existing ductwork. It generates equal parts positive and negative ions that actively neutralize bacteria, viruses, mold spores, and allergens — without producing ozone.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Self-cleaning — no maintenance required",
                  "Works with any HVAC system",
                  "No replacement parts or filters",
                  "Reduces odors, smoke & VOCs",
                  "EPA-verified, zero ozone output",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm md:text-base text-gray-700">
                    <CheckCircle className="w-4 h-4 text-teal-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full font-bold text-sm transition"
              >
                Get a Free Assessment <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right — product image */}
            <div className="flex items-center justify-center bg-green-50 rounded-2xl p-8 min-h-[300px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://m.media-amazon.com/images/I/61oHKFwNyyL._AC_SL1500_.jpg"
                alt="iWave-R 4900-20 Air Purifier"
                className="rounded-2xl w-full max-w-xs object-contain max-h-72"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products We Install */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 text-center">
            Products We Install
          </h2>
          <p className="text-base text-gray-600 text-center mb-8 md:mb-12 max-w-2xl mx-auto">
            We carry and install industry-leading equipment — nothing generic, nothing undersized.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {PRODUCTS.map((p) => {
              const c = colorMap[p.color];
              return (
                <div
                  key={p.name}
                  className={`bg-white rounded-2xl p-6 border-2 ${c.border} shadow-sm flex flex-col`}
                >
                  <div className="mb-3">
                    <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-2 ${c.badge}`}>
                      {p.brand}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 leading-snug">{p.name}</h3>
                  </div>

                  <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">{p.description}</p>

                  <ul className="space-y-1.5 mb-5">
                    {p.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${c.dot}`} />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-900 transition-colors"
                  >
                    View manufacturer site <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Air Quality Control Package */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 text-center">
              Air Quality Control Package
            </h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6 md:mb-8 text-center max-w-2xl mx-auto">
              To improve your air quality and comfort level, we offer a comprehensive air quality control package that reduces airborne germs and improves humidity levels — resulting in more moisturized skin, cleaner air, and a reduced risk of illness.
            </p>

            <div className="bg-white rounded-2xl p-5 md:p-8 shadow-lg border-2 border-green-200">
              <Shield className="w-8 h-8 md:w-10 md:h-10 text-green-600 mb-3" />
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                Advanced Filtration Technology
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-5">
                The air runs through a 4" media filter that traps over 90% of the dirt in the air and prevents it from entering your living spaces. Combined with UV germicidal treatment, your home's air is cleaned at every pass through the system.
              </p>

              <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-4 md:p-6 border border-green-200">
                <h4 className="font-bold text-gray-900 mb-3 text-sm md:text-base">Package Includes</h4>
                <ul className="space-y-2">
                  {[
                    "iWave-R air ionizer — kills bacteria, viruses & mold spores",
                    "UV germicidal light — continuous air sanitizing",
                    "4\" media filter — MERV 11, traps 90%+ of particles",
                    "Whole-house humidifier — ideal moisture balance",
                    "Honeywell Wi-Fi T10 thermostat with room sensor",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-600 mt-2 shrink-0" />
                      <span className="text-sm md:text-base text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-4 text-gray-600 text-xs md:text-sm">
                Contact us for a free estimate and to learn more about our comfort package.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why NJ */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
            Why Air Quality Is a Bigger Issue in NJ
          </h2>

          <div className="space-y-5">
            {[
              {
                title: "Allergy Season (March – June)",
                body: "NJ is one of the worst states for seasonal allergies. Oak, birch, and grass pollen counts regularly hit 'very high' from March through June. A proper filtration and purification system keeps pollen out of your living spaces even with windows open.",
              },
              {
                title: "High Summer Humidity",
                body: "Humidity in NJ summers regularly exceeds 70–80%. Above 60% relative humidity, mold and dust mites thrive. A whole-house dehumidifier integrated with your HVAC runs continuously to hold indoor RH at a safe 45–55%.",
              },
              {
                title: "Older Home Ventilation",
                body: "Homes built before the 1990s were designed to 'breathe' through gaps and cracks. Modern weatherproofing and energy upgrades seal those gaps — trapping stale air, CO₂, and VOCs inside. A balanced ventilation strategy lets you keep your home tight AND have fresh air.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 text-center">
            How It Works
          </h2>
          <p className="text-base text-gray-600 text-center mb-8 md:mb-12 max-w-xl mx-auto">
            Three simple steps from your call to cleaner air.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {STEPS.map((s) => (
              <div key={s.step} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 shadow-sm text-center">
                <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center text-xl font-extrabold mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-10 md:py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 md:p-8 shadow-lg border-2 border-green-200 max-w-2xl">
            <p className="text-sm md:text-base text-gray-700 italic mb-3 md:mb-4">
              &ldquo;Hector and his team are amazing. They were quick and responsive. Hector&rsquo;s loyalty and professionalism make him a keeper for future jobs. I would highly recommend them.&rdquo;
            </p>
            <p className="font-semibold text-gray-900 text-sm md:text-base">
              — George Houvardas, Google Review
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-12 bg-gradient-to-r from-teal-700 to-cyan-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3 md:mb-4">
            Get a Free Air Quality Assessment
          </h2>
          <p className="text-base md:text-xl text-teal-100 mb-5 md:mb-8 max-w-xl mx-auto">
            A licensed technician will measure your home&apos;s humidity and air quality — at no cost, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-teal-700 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg hover:bg-gray-50 transition w-full sm:w-auto text-center"
            >
              Schedule Free Assessment
            </Link>
            <a
              href="tel:+12017875657"
              className="bg-white/10 backdrop-blur text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg border-2 border-white hover:bg-white/20 transition w-full sm:w-auto text-center"
            >
              Call (201) 787-5657
            </a>
          </div>
        </div>
      </section>

      {/* Financing */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-lg md:text-2xl font-bold mb-2">0% Financing Available</p>
          <p className="text-gray-300 text-sm md:text-base">
            Ask about our flexible financing options for air quality and filtration system installations.
          </p>
        </div>
      </section>
    </main>
  );
}
