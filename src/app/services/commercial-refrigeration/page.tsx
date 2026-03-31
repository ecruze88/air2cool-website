import type { Metadata } from "next";
import { Home, CheckCircle, Wrench, Clock, Phone, Building2 } from "lucide-react";
import Link from "next/link";
import VideoShowcase from "@/components/VideoShowcase";

export const metadata: Metadata = {
  title: "Commercial HVAC & Refrigeration in Morris County NJ | Air2Cool | (201) 787-5657",
  description:
    "Expert commercial HVAC and refrigeration services in Morris County & North NJ. Rooftop units, walk-in coolers, freezers, ice machines. Restaurants, retail, offices. 24/7 emergency. Licensed commercial contractors. Call (201) 787-5657.",
  keywords: [
    "commercial HVAC Morris County NJ",
    "commercial refrigeration North NJ",
    "walk-in cooler repair Morris County",
    "rooftop unit installation NJ",
    "commercial AC contractor Morris County",
    "restaurant refrigeration repair NJ",
    "commercial HVAC contractor North Jersey",
    "walk-in freezer repair NJ",
  ],
  alternates: {
    canonical: "/services/commercial-refrigeration",
  },
  openGraph: {
    title: "Commercial HVAC & Refrigeration in Morris County NJ | Air2Cool",
    description:
      "Rooftop units, walk-in coolers, refrigeration systems for restaurants & businesses. 24/7 emergency. Morris County & North NJ. Call (201) 787-5657.",
    url: "/services/commercial-refrigeration",
  },
};

export default function CommercialRefrigerationPage() {
  return (
    <main className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <Link
            href="/services/commercial"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors py-1"
          >
            ← All Commercial Services
          </Link>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Commercial HVAC & Refrigeration",
            "description": "Professional commercial HVAC installation, service, and repair in Morris County & North NJ. Rooftop units, walk-in coolers, freezers, ice machines, and refrigeration systems for restaurants, retail, and offices.",
            "provider": {
              "@type": "HVACBusiness",
              "@id": "https://www.air2cool.com/#organization",
              "name": "Air2Cool Heating & Cooling",
              "telephone": "+1-201-787-5657",
              "url": "https://www.air2cool.com"
            },
            "areaServed": [
              { "@type": "AdministrativeArea", "name": "Morris County, NJ" },
              { "@type": "AdministrativeArea", "name": "North New Jersey" }
            ],
            "url": "https://www.air2cool.com/services/commercial-refrigeration",
            "serviceType": "Commercial HVAC & Refrigeration",
            "audience": {
              "@type": "BusinessAudience",
              "audienceType": "Commercial businesses including restaurants, retail stores, and office buildings"
            }
          })
        }}
      />
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden py-12 md:py-20">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <div className="inline-block mb-4">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                COMMERCIAL HVAC & REFRIGERATION
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 md:mb-6">
              Commercial HVAC & Refrigeration Services
            </h1>

            <p className="text-base md:text-xl text-gray-200 leading-relaxed mb-6 md:mb-8">
              Professional commercial HVAC installation, service, and repair. Rooftop units, 
              walk-in coolers, refrigeration systems for restaurants, retail stores, and offices 
              across North New Jersey.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-6 md:mb-8">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg transition-all text-center"
              >
                Request Service Quote
              </Link>
              <a
                href="tel:+12017875657"
                className="bg-white/10 backdrop-blur text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg border-2 border-white/30 transition-all hover:bg-white/20 text-center"
              >
                Call (201) 787-5657
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="bg-white/10 backdrop-blur px-3 md:px-4 py-2 rounded-full text-xs md:text-sm border border-white/20">
                <CheckCircle className="inline w-3 h-3 md:w-4 md:h-4 mr-1" />
                24/7 Emergency Service
              </div>
              <div className="bg-white/10 backdrop-blur px-3 md:px-4 py-2 rounded-full text-xs md:text-sm border border-white/20">
                <CheckCircle className="inline w-3 h-3 md:w-4 md:h-4 mr-1" />
                Licensed Commercial Contractors
              </div>
              <div className="bg-white/10 backdrop-blur px-3 md:px-4 py-2 rounded-full text-xs md:text-sm border border-white/20">
                <CheckCircle className="inline w-3 h-3 md:w-4 md:h-4 mr-1" />
                Fully Insured
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
              Commercial Refrigeration Repair NJ — Keeping Your Business Running
            </h2>
            <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                When your walk-in cooler fails or a rooftop HVAC unit goes down, every hour of downtime costs your business money. Air2Cool Heating &amp; Cooling provides fast, professional commercial refrigeration repair across Morris County and all of North NJ, with 24/7 emergency service for critical situations. We&apos;ve been the go-to commercial HVAC and refrigeration contractor for restaurants, retail stores, office buildings, and warehouses throughout the region since 1998.
              </p>
              <p>
                Our licensed commercial technicians are trained on all types of commercial refrigeration equipment: walk-in coolers and freezers, reach-in refrigerators and display cases, ice machines, and refrigerated prep tables. We also service and install rooftop package units (RTUs), split systems, and multi-zone HVAC systems for commercial properties. Unlike many residential HVAC companies that dabble in commercial work, Air2Cool is a true commercial contractor — we understand the codes, the equipment, and the urgency your business demands.
              </p>
              <p>
                Restaurant owners in Morris County know us well. A failed walk-in cooler on a Saturday night is an emergency that can&apos;t wait until Monday. That&apos;s why our emergency line is staffed 24 hours a day, 7 days a week. We prioritize commercial refrigeration calls because we understand what&apos;s at stake — your inventory, your health code compliance, and your reputation. Most commercial refrigeration repairs are completed in a single visit; when parts need to be ordered, we communicate clearly and move fast.
              </p>
              <p>
                We serve commercial clients throughout Morris County, Bergen County, Essex County, and surrounding North NJ areas. Whether you need an emergency repair, a planned maintenance contract, or a full commercial HVAC system installation, Air2Cool is your local commercial specialist. Contact us for a free quote or call{" "}
                <a href="tel:+12017875657" className="text-blue-600 hover:underline font-semibold">(201) 787-5657</a>{" "}
                for immediate assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Commercial Showcase - PRIMARY IMAGE */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-3 md:mb-4">
              Commercial Rooftop HVAC Installation
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
              We handle commercial rooftop units, package systems, and multi-zone HVAC for 
              businesses across North New Jersey.
            </p>
          </div>

          {/* MAIN COMMERCIAL IMAGE */}
          <div className="max-w-5xl mx-auto mb-12 md:mb-16">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/commercial-rtu.jpeg"
                alt="Commercial rooftop HVAC units professionally installed by Air2Cool contractors in North New Jersey"
                className="w-full"
              />
            </div>
            <div className="text-center mt-4 md:mt-6">
              <p className="text-base md:text-lg font-semibold text-gray-900">
                Multi-Unit Commercial Rooftop Installation
              </p>
              <p className="text-xs md:text-sm text-gray-600 mt-2">
                Professional installation with proper curb mounting, ductwork, and electrical
              </p>
            </div>
          </div>

          {/* Installation Quality Points */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white rounded-xl p-5 md:p-6 shadow-lg border-2 border-gray-200">
              <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-blue-600 mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Code-Compliant</h3>
              <p className="text-sm md:text-base text-gray-600">
                All work meets NJ commercial building codes. We handle all permits and inspections.
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 md:p-6 shadow-lg border-2 border-gray-200">
              <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-blue-600 mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Proper Mounting</h3>
              <p className="text-sm md:text-base text-gray-600">
                Professional curb installation, weatherproofing, and vibration isolation.
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 md:p-6 shadow-lg border-2 border-gray-200">
              <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-blue-600 mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Minimal Downtime</h3>
              <p className="text-sm md:text-base text-gray-600">
                We work efficiently to minimize disruption to your business operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services We Provide */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-center text-gray-900 mb-8 md:mb-12">
            Commercial Services We Provide
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Rooftop Units */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-5 md:p-6 border-2 border-blue-200">
              <Building2 className="w-8 h-8 md:w-10 md:h-10 text-blue-600 mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Rooftop Units (RTUs)</h3>
              <ul className="space-y-2 text-xs md:text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Package units (heating + cooling)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Gas/electric rooftop systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Installation, repair, replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Preventative maintenance plans</span>
                </li>
              </ul>
            </div>

            {/* Refrigeration */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-5 md:p-6 border-2 border-cyan-200">
              <Wrench className="w-8 h-8 md:w-10 md:h-10 text-cyan-600 mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Commercial Refrigeration</h3>
              <ul className="space-y-2 text-xs md:text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">•</span>
                  <span>Walk-in coolers & freezers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">•</span>
                  <span>Reach-in refrigerators</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">•</span>
                  <span>Ice machines</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">•</span>
                  <span>Emergency repair service</span>
                </li>
              </ul>
            </div>

            {/* HVAC Systems */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-5 md:p-6 border-2 border-indigo-200">
              <Home className="w-8 h-8 md:w-10 md:h-10 text-indigo-600 mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Commercial HVAC</h3>
              <ul className="space-y-2 text-xs md:text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">•</span>
                  <span>Split systems & ductless</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">•</span>
                  <span>Zone control systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">•</span>
                  <span>Ductwork design & installation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">•</span>
                  <span>Commercial ventilation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-center text-gray-900 mb-8 md:mb-12">
            Industries We Serve
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-white rounded-xl p-5 md:p-6 shadow-md text-center">
              <Building2 className="w-10 h-10 md:w-12 md:h-12 text-blue-600 mx-auto mb-3" />
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">Restaurants</h3>
              <p className="text-xs md:text-sm text-gray-600">
                Walk-ins, reach-ins, ice machines, HVAC
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 md:p-6 shadow-md text-center">
              <Home className="w-10 h-10 md:w-12 md:h-12 text-cyan-600 mx-auto mb-3" />
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">Retail Stores</h3>
              <p className="text-xs md:text-sm text-gray-600">
                Rooftop units, split systems, refrigeration
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 md:p-6 shadow-md text-center">
              <Building2 className="w-10 h-10 md:w-12 md:h-12 text-indigo-600 mx-auto mb-3" />
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">Office Buildings</h3>
              <p className="text-xs md:text-sm text-gray-600">
                Multi-zone HVAC, rooftop package units
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 md:p-6 shadow-md text-center">
              <Wrench className="w-10 h-10 md:w-12 md:h-12 text-gray-600 mx-auto mb-3" />
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">Warehouses</h3>
              <p className="text-xs md:text-sm text-gray-600">
                Large-capacity heating & cooling systems
              </p>
            </div>
          </div>
        </div>
      </section>

      <VideoShowcase
        title="Walk-In Freezer Installation — North NJ"
        src="/walk_in_freezer_install.mp4"
        caption="Commercial walk-in freezer built to spec and fully commissioned — protecting your inventory around the clock"
        sectionClassName="py-10 md:py-16 bg-white"
      />

      {/* 24/7 Emergency Service */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Clock className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4" />
          <h2 className="text-2xl md:text-4xl font-extrabold mb-3 md:mb-4">
            24/7 Commercial Emergency Service
          </h2>
          <p className="text-base md:text-xl mb-6 md:mb-8">
            Equipment down? We understand downtime costs you money. Call us anytime for 
            emergency commercial HVAC and refrigeration repair.
          </p>
          <a
            href="tel:+12017875657"
            className="inline-flex items-center gap-2 bg-white text-red-700 px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-lg shadow-lg hover:bg-gray-50 transition-all"
          >
            <Phone className="w-4 h-4 md:w-5 md:h-5" />
            Emergency: (201) 787-5657
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center">
            Frequently Asked Questions — Commercial Refrigeration Repair NJ
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Do you offer emergency commercial refrigeration repair in NJ?",
                a: "Yes. We provide 24/7 emergency commercial refrigeration repair throughout Morris County and North NJ. If your walk-in cooler, freezer, or ice machine fails at any hour, call (201) 787-5657 and we'll dispatch a technician as quickly as possible. We understand that refrigeration downtime means spoiled inventory and lost revenue — we treat every call with urgency.",
              },
              {
                q: "What types of commercial refrigeration equipment do you service?",
                a: "We service and repair walk-in coolers and freezers, reach-in refrigerators, display cases, ice machines, refrigerated prep tables, and condenser units. We work on all major brands including Heatcraft, Hussmann, True, Beverage-Air, Manitowoc, and more. Whether it's a restaurant, grocery store, or food service operation, we have the tools and training to get your equipment back online fast.",
              },
              {
                q: "Can you also handle commercial HVAC — not just refrigeration?",
                a: "Absolutely. Air2Cool is a full commercial HVAC and refrigeration contractor. We install, service, and repair commercial rooftop package units (RTUs), split systems, ductless systems, and zone control HVAC for offices, retail stores, and warehouses. We handle all permits and inspections and work to minimize disruption to your business operations.",
              },
              {
                q: "Do you offer commercial HVAC maintenance contracts in NJ?",
                a: "Yes. We offer preventative maintenance plans for commercial HVAC and refrigeration systems. Regular maintenance significantly reduces emergency breakdowns, extends equipment life, and keeps your systems running at peak efficiency. Ask us about customized maintenance contracts for your business.",
              },
              {
                q: "How quickly can Air2Cool respond to a commercial service call in Morris County?",
                a: "For emergency calls, we aim to respond as fast as possible — often within a few hours during business hours, and we're available 24/7 for after-hours emergencies. For non-emergency service calls and maintenance, we typically schedule within 1–2 business days. We'll always confirm a timeframe when you call.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Commercial Services */}
      <section className="py-10 md:py-12 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-2 text-center">
            Other Commercial Services
          </h2>
          <p className="text-sm md:text-base text-gray-500 text-center mb-6 md:mb-8">
            Air2Cool handles all aspects of commercial mechanical work — one contractor for everything.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {[
              { title: "LED & High-Efficiency Lighting", desc: "Commercial LED retrofits with utility rebates." },
              { title: "Rooftop Units (RTU)", desc: "Installation, repair & maintenance of commercial RTUs." },
              { title: "Commercial Furnaces", desc: "High-capacity heating for warehouses, offices & garages." },
              { title: "Commercial AC", desc: "Split systems, VRF/VRV, ductless & custom ductwork." },
              { title: "Chiller Servicing", desc: "Scroll, screw & absorption chiller maintenance & repair." },
              { title: "Commercial Boilers", desc: "Hydronic & steam boiler installation, repair & maintenance." },
              { title: "Aerators", desc: "Ventilation & air circulation for large commercial spaces." },
            ].map((s) => (
              <Link
                key={s.title}
                href="/services/commercial"
                className="group flex flex-col gap-1 bg-gray-50 hover:bg-blue-50 border-2 border-gray-200 hover:border-blue-300 rounded-xl px-4 py-4 transition-all"
              >
                <span className="text-sm font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                  {s.title}
                </span>
                <span className="text-xs text-gray-500 leading-relaxed">{s.desc}</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link
              href="/services/commercial"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors py-2"
            >
              View All Commercial Services →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-4 md:mb-6">
            Need Commercial Refrigeration Repair in NJ?
          </h2>
          <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8">
            Call Air2Cool at{" "}
            <a href="tel:+12017875657" className="text-blue-600 font-bold hover:underline">(201) 787-5657</a>{" "}
            or request a free quote at{" "}
            <Link href="/contact" className="text-blue-600 font-bold hover:underline">/contact</Link>.
            24/7 emergency commercial refrigeration repair across Morris County &amp; North NJ.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-lg shadow-lg transition-all hover:scale-105 w-full sm:w-auto text-center"
            >
              Request Service Quote →
            </Link>
            <a
              href="tel:+12017875657"
              className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 md:px-10 py-4 md:py-5 rounded-full font-semibold text-base md:text-lg transition-all w-full sm:w-auto text-center"
            >
              Call (201) 787-5657
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}