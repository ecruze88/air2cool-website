import type { Metadata } from "next";
import {
  Lightbulb,
  Building2,
  Flame,
  Snowflake,
  Thermometer,
  Waves,
  Wind,
  Refrigerator,
  CheckCircle,
  Phone,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commercial HVAC & Refrigeration Services in North NJ | Air2Cool",
  description:
    "Commercial HVAC, refrigeration, LED lighting, RTUs, chillers, boilers and more in North NJ. Licensed commercial contractors. Call (201) 787-5657.",
  keywords: [
    "commercial HVAC North NJ",
    "commercial refrigeration NJ",
    "rooftop unit installation NJ",
    "commercial chiller service NJ",
    "commercial boiler NJ",
    "LED lighting retrofit NJ",
    "commercial furnace NJ",
    "commercial HVAC contractor North Jersey",
  ],
  alternates: {
    canonical: "/services/commercial",
  },
  openGraph: {
    title: "Commercial HVAC & Refrigeration Services in North NJ | Air2Cool",
    description:
      "RTUs, chillers, LED lighting, boilers, refrigeration and more. Licensed commercial HVAC contractors in North NJ. Call (201) 787-5657.",
    url: "/services/commercial",
  },
};

const SERVICES = [
  {
    icon: Lightbulb,
    title: "LED & High-Efficiency Lighting",
    description:
      "Commercial LED retrofits for offices, warehouses, retail, and parking structures. Significant energy savings and utility rebates available. We handle design, supply, and installation.",
    color: "amber",
  },
  {
    icon: Building2,
    title: "Rooftop Units (RTU)",
    description:
      "Installation, repair, and maintenance of commercial rooftop package units. Gas/electric, heat pump, and dedicated cooling RTUs for offices, retail, and industrial buildings.",
    color: "blue",
  },
  {
    icon: Flame,
    title: "Commercial Furnaces",
    description:
      "High-capacity heating systems for commercial buildings, warehouses, garages, and office spaces. Unit heaters, rooftop gas furnaces, and make-up air units.",
    color: "red",
  },
  {
    icon: Snowflake,
    title: "Commercial AC",
    description:
      "Central air systems for offices, retail, and commercial spaces. Split systems, VRF/VRV multi-zone systems, ductless commercial units, and custom ductwork design.",
    color: "cyan",
  },
  {
    icon: Thermometer,
    title: "Chiller Servicing",
    description:
      "Commercial chiller maintenance and repair. We service scroll, screw, and absorption chillers for medium and large commercial properties. Preventative maintenance contracts available.",
    color: "purple",
  },
  {
    icon: Waves,
    title: "Commercial Boilers",
    description:
      "Hydronic and steam boiler systems for commercial properties, multi-family buildings, and industrial facilities. Installation, repair, and annual maintenance.",
    color: "orange",
  },
  {
    icon: Wind,
    title: "Aerators",
    description:
      "Commercial aerator installation and service for ventilation and air circulation in large spaces, manufacturing facilities, and warehouses.",
    color: "teal",
  },
  {
    icon: Refrigerator,
    title: "Commercial Refrigeration",
    description:
      "Air2Cool services all commercial refrigeration equipment for restaurants, retail, and food service operations across North NJ. When your walk-in fails, we respond 24/7 — because downtime means lost inventory.",
    color: "indigo",
    href: "/services/commercial-refrigeration",
  },
];

const COLOR_CLASSES: Record<string, string> = {
  amber:  "bg-amber-100 text-amber-600 border-amber-200",
  blue:   "bg-blue-100 text-blue-600 border-blue-200",
  red:    "bg-red-100 text-red-600 border-red-200",
  cyan:   "bg-cyan-100 text-cyan-600 border-cyan-200",
  purple: "bg-purple-100 text-purple-600 border-purple-200",
  orange: "bg-orange-100 text-orange-600 border-orange-200",
  teal:   "bg-teal-100 text-teal-600 border-teal-200",
  indigo: "bg-indigo-100 text-indigo-600 border-indigo-200",
};

const COUNTIES = [
  "Morris", "Bergen", "Essex", "Passaic",
  "Sussex", "Warren", "Hunterdon", "Somerset", "Union",
];

const WHY_ITEMS = [
  "Licensed Master HVACR technicians on every job",
  "26+ years of commercial HVAC & refrigeration experience",
  "24/7 emergency commercial service — we answer every call",
  "All work fully permitted and code-compliant",
  "Customized preventative maintenance contracts",
  "One contractor for HVAC, refrigeration, and lighting",
];

export default function CommercialServicesPage() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Commercial HVAC & Mechanical Services",
            description:
              "Commercial HVAC, refrigeration, LED lighting, RTUs, chillers, and boilers in North NJ. Licensed commercial contractors since 1998.",
            provider: {
              "@type": "HVACBusiness",
              "@id": "https://www.air2cool.com/#organization",
              name: "Air2Cool Heating & Cooling",
              telephone: "+1-201-787-5657",
              url: "https://www.air2cool.com",
            },
            areaServed: COUNTIES.map((c) => ({
              "@type": "AdministrativeArea",
              name: `${c} County, NJ`,
            })),
            url: "https://www.air2cool.com/services/commercial",
            serviceType: "Commercial HVAC & Refrigeration",
            audience: {
              "@type": "BusinessAudience",
              audienceType:
                "Commercial businesses including restaurants, retail stores, offices, and warehouses",
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
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
            <div className="inline-block mb-4">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                COMMERCIAL SERVICES
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
              Commercial HVAC &amp; Mechanical Services in North NJ
            </h1>

            <p className="text-base md:text-xl text-gray-200 leading-relaxed max-w-3xl mb-6 md:mb-8">
              Family-owned commercial contractor serving businesses, restaurants, offices, and retail in North NJ since 1998. Licensed and insured for all commercial mechanical work — HVAC, refrigeration, boilers, chillers, and LED lighting.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
              <Link
                href="/contact"
                className="bg-white text-blue-700 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg hover:bg-gray-50 transition text-center"
              >
                Get a Commercial Quote
              </Link>
              <a
                href="tel:+12017875657"
                className="bg-white/10 hover:bg-white/20 backdrop-blur text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg border border-white/20 transition text-center"
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

      {/* Services Grid */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
              Commercial Services We Provide
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              From a single RTU repair to a full building mechanical fit-out — we handle it all.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              const c = COLOR_CLASSES[s.color];
              const inner = (
                <>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border-2 mb-4 shrink-0 ${c}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.description}</p>
                  {s.href && (
                    <span className="inline-block mt-3 text-sm font-semibold text-blue-600">
                      Learn More →
                    </span>
                  )}
                </>
              );

              return s.href ? (
                <Link
                  key={s.title}
                  href={s.href}
                  className="group bg-white rounded-2xl border-2 border-gray-200 p-5 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all"
                >
                  {inner}
                </Link>
              ) : (
                <div
                  key={s.title}
                  className="bg-white rounded-2xl border-2 border-gray-200 p-5 shadow-sm"
                >
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SaveGreen Direct Install Callout */}
      <section className="py-10 md:py-14 bg-emerald-50 border-y-2 border-emerald-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
            <div className="flex-1">
              <div className="inline-block bg-emerald-700 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                Approved SaveGreen Contractor
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
                Save Up to 80% on Commercial Upgrades
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                As an approved SaveGreen Direct Install contractor, Air2Cool helps NJ businesses access up to 80% in incentives on HVAC, refrigeration, and lighting upgrades — with 0% APR financing through NJ Natural Gas&apos;s On-Bill Repayment Program. Available through June 30, 2027.
              </p>

              <div className="bg-white rounded-2xl border border-emerald-200 p-5 mb-6 space-y-3">
                <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-3">Incentive Tiers</h3>
                {[
                  { tier: "Tier 1", desc: "≤100kW demand or ≤5,000 therms/year", pct: "Up to 80%" },
                  { tier: "Tier 2", desc: "Urban Enterprise Zones, nonprofits, schools", pct: "Up to 80%" },
                  { tier: "Tier 3", desc: "101–300kW demand", pct: "Up to 70%" },
                ].map((t) => (
                  <div key={t.tier} className="flex items-start gap-3">
                    <span className="shrink-0 bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-0.5 rounded-full mt-0.5">
                      {t.tier}
                    </span>
                    <div className="flex-1 flex flex-wrap items-center justify-between gap-2">
                      <span className="text-sm text-gray-700">{t.desc}</span>
                      <span className="text-sm font-bold text-emerald-700 whitespace-nowrap">{t.pct}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://www.savegreen.com/applications/business-applications/direct-install-application.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-full font-bold text-base transition text-center"
                >
                  Apply for Direct Install →
                </a>
                <a
                  href="tel:+12017875657"
                  className="bg-white border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-6 py-3 rounded-full font-semibold text-base transition text-center"
                >
                  Call Us to Get Started → (201) 787-5657
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Air2Cool for Commercial */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
                Why Choose Air2Cool for Commercial?
              </h2>
              <ul className="space-y-4">
                {WHY_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl border-2 border-blue-200 p-6 md:p-8 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Counties We Serve</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {COUNTIES.map((c) => (
                  <span
                    key={c}
                    className="bg-blue-50 text-blue-700 border border-blue-200 text-sm font-medium px-3 py-1 rounded-full"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Serving all commercial properties throughout North New Jersey. Emergency response available 24 hours a day, 7 days a week.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Commercial Work — Photos */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6 text-center">
            Recent Commercial Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
            <div className="overflow-hidden rounded-xl shadow-md bg-gray-100" style={{ aspectRatio: "4/3" }}>
              <img
                src="/commercial_install_ductwork_setup.webp"
                alt="Commercial HVAC ductwork installation setup North NJ — Air2Cool"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-xl shadow-md bg-gray-100" style={{ aspectRatio: "4/3" }}>
              <img
                src="/trane_3_phase_scroll_compressor_rooftop_unit_replacement.webp"
                alt="Trane 3-phase scroll compressor rooftop unit replacement NJ — Air2Cool"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* See Our Work — Commercial HVAC Videos */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8 text-center">
            See Our Work
          </h2>

          <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
            Commercial Blower System
          </h3>
          <div style={{ width: '100%', maxWidth: '480px', margin: '0 auto 2rem auto', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
            <video autoPlay muted loop playsInline preload="metadata" style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '360px', objectFit: 'cover' }}>
              <source src="/commercial_mechanical_blower_running.mp4" type="video/mp4" />
            </video>
            <div style={{ padding: '12px 16px', background: '#f8f9fa', fontSize: '14px', color: '#555', textAlign: 'center' }}>
              Commercial blower system — serviced and running at full capacity
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
            Triple Boiler Installation
          </h3>
          <div style={{ width: '100%', maxWidth: '480px', margin: '0 auto 2rem auto', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
            <video autoPlay muted loop playsInline preload="metadata" style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '360px', objectFit: 'cover' }}>
              <source src="/commercial_triple_Boiler_install.mp4" type="video/mp4" />
            </video>
            <div style={{ padding: '12px 16px', background: '#f8f9fa', fontSize: '14px', color: '#555', textAlign: 'center' }}>
              Triple boiler installation — large-scale commercial heating done right
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
            Commercial Filter Replacement
          </h3>
          <div style={{ width: '100%', maxWidth: '480px', margin: '0 auto 2rem auto', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
            <video autoPlay muted loop playsInline preload="metadata" style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '360px', objectFit: 'cover' }}>
              <source src="/commercial_massive_filter_replacement.mp4" type="video/mp4" />
            </video>
            <div style={{ padding: '12px 16px', background: '#f8f9fa', fontSize: '14px', color: '#555', textAlign: 'center' }}>
              Commercial-grade filter replacement — protecting your HVAC investment
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
            Completed HVAC System Walkthrough
          </h3>
          <div style={{ width: '100%', maxWidth: '480px', margin: '0 auto 2rem auto', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
            <video autoPlay muted loop playsInline preload="metadata" style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '360px', objectFit: 'cover' }}>
              <source src="/completed_commercial_hvac_installation_final_system_walkthrough.mp4" type="video/mp4" />
            </video>
            <div style={{ padding: '12px 16px', background: '#f8f9fa', fontSize: '14px', color: '#555', textAlign: 'center' }}>
              Completed commercial HVAC system — final walkthrough and commissioning
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-12 bg-gradient-to-r from-blue-700 to-slate-700">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3 md:mb-4">
            Get a Commercial Service Quote
          </h2>
          <p className="text-base md:text-xl text-blue-100 mb-5 md:mb-8 max-w-xl mx-auto">
            Call <strong>(201) 787-5657</strong> or request online. We&apos;ll respond within one business day for non-emergency inquiries.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-700 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg hover:bg-gray-50 transition w-full sm:w-auto text-center"
            >
              Request Quote Online
            </Link>
            <a
              href="tel:+12017875657"
              className="bg-white/10 backdrop-blur text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg border-2 border-white hover:bg-white/20 transition w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call (201) 787-5657
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
