import type { Metadata } from "next";
import { Phone, CheckCircle, Star, Clock, Shield, Wrench, MapPin } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HVAC Service in Annandale NJ | AC & Heating Repair | Air2Cool | (201) 787-5657",
  description:
    "Air2Cool provides AC repair, furnace & boiler repair, and HVAC installation in Annandale, NJ (Hunterdon County). Same-day service. Family-owned since 1998. Call (201) 787-5657.",
  alternates: {
    canonical: "https://www.air2cool.com/service-areas/annandale",
  },
};

const SERVICES = [
  { name: "AC Repair", href: "/services/ac-repair", desc: "Fast diagnosis for all makes and models." },
  { name: "AC Installation", href: "/services/cooling-installation", desc: "Energy-efficient systems with 0% financing." },
  { name: "Heating Repair", href: "/services/heating-repair", desc: "Furnace, boiler & heat pump repair." },
  { name: "Heating Installation", href: "/services/heating-installation", desc: "New furnace or heat pump with warranty." },
  { name: "Air Filtration", href: "/services/air-filtration", desc: "Whole-home air purifiers & filters." },
  { name: "Humidifiers", href: "/services/humidifier", desc: "Whole-home humidity control systems." },
  { name: "Commercial Refrigeration", href: "/services/commercial-refrigeration", desc: "Coolers & freezers for businesses." },
  { name: "Preventative Maintenance", href: "/services/preventative-maintenance", desc: "Annual tune-ups before breakdowns happen." },
];

export default function AnnandaLePage() {
  return (
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
            Hunterdon County · 08801
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight">
            HVAC Service in Annandale, NJ
          </h1>
          <p className="text-base md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Air2Cool has served Annandale and Hunterdon County since 1998 — AC repair,
            furnace &amp; boiler service, and emergency HVAC whenever you need it.
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

      {/* Services */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 text-center mb-3">
            HVAC Services in Annandale
          </h2>
          <p className="text-center text-gray-500 mb-10 text-sm md:text-base">
            All major brands serviced. Licensed master technicians, fully insured.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.map((s) => (
              <Link
                key={s.name}
                href={s.href}
                className="group border border-gray-200 rounded-xl p-4 hover:border-blue-500 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-sm text-gray-900 group-hover:text-blue-700 transition-colors">{s.name}</div>
                    <div className="text-xs text-gray-500 mt-1">{s.desc}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Local Content */}
      <section className="py-10 md:py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-5">
            Serving Annandale &amp; Clinton Township for HVAC Since 1998
          </h2>
          <div className="text-sm md:text-base text-gray-700 space-y-4 leading-relaxed">
            <p>
              Annandale is a community within Clinton Township in central Hunterdon County, surrounded by the scenic hills and open farmland of western New Jersey. The area sits near landmarks like the Spruce Run Reservoir and Round Valley Reservoir, popular destinations that reflect the natural character of the region. Homes in Annandale range from older farmhouses and historic properties to suburban-style neighborhoods, many of which rely on boilers, oil furnaces, and aging central AC systems that require knowledgeable technicians — not cookie-cutter HVAC solutions.
            </p>
            <p>
              Air2Cool Heating &amp; Cooling has served Annandale, Clinton Township, and all of Hunterdon County since 1998. Our licensed master technicians are experienced with every type of heating and cooling equipment — hydronic boilers, steam systems, heat pumps, central air, and ductless mini-splits. Whether your furnace stops working on a January night or your AC can't keep up during a July heat wave, we respond fast. Same-day appointments are available throughout Annandale, Clinton, Lebanon, and High Bridge, and our 24/7 emergency line is always staffed.
            </p>
            <p>
              We also offer complete HVAC system replacements with 0% APR financing up to $25,000 and a free professional house cleaning with every new installation. For more information about service in your area, see our{" "}
              <Link href="/service-areas/hunterdon-county" className="text-blue-600 hover:underline font-semibold">Hunterdon County HVAC page</Link>.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {["Clinton", "Lebanon", "High Bridge", "Raritan Township"].map((name) => (
              <span key={name} className="text-xs bg-white border border-gray-200 px-3 py-1.5 rounded-full text-gray-600">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8">
            HVAC Questions from Annandale Residents
          </h2>
          <div className="space-y-5">
            {[
              {
                q: "Do you serve Annandale and Clinton Township for HVAC repairs?",
                a: "Yes. Air2Cool serves Annandale, Clinton Township, and all of Hunterdon County. We offer same-day AC repair and heating repair, plus 24/7 emergency service for urgent situations. Call (201) 787-5657 any time.",
              },
              {
                q: "Can you handle boiler and oil furnace repair in Annandale, NJ?",
                a: "Absolutely. Many Annandale and Clinton Township homes have older boilers and oil furnaces. Our licensed master technicians are experienced with all types of heating systems — hydronic boilers, steam systems, oil and gas furnaces — and can diagnose and repair them quickly.",
              },
              {
                q: "Do you install ductless mini-split systems in Annandale?",
                a: "Yes. Ductless mini-split systems are a popular choice for Hunterdon County homes that lack existing ductwork or need zone-controlled comfort. We install and service all major brands including Mitsubishi, Daikin, and LG. Contact us for a free estimate.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Air2Cool */}
      <section className="py-10 md:py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center mb-8">
            Why Annandale Residents Choose Air2Cool
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Shield className="w-6 h-6 text-blue-600" />, title: "Licensed Master Techs", body: "Every job done by NJ-licensed master HVAC technicians. No subcontractors, no shortcuts." },
              { icon: <Star className="w-6 h-6 text-yellow-500" />, title: "250+ Five-Star Reviews", body: "Real customers across North Jersey. Check our Google reviews before you call." },
              { icon: <Clock className="w-6 h-6 text-red-600" />, title: "24/7 Emergency Service", body: "We answer at 2 AM because your furnace doesn't care what day it is." },
              { icon: <Wrench className="w-6 h-6 text-green-600" />, title: "Free House Cleaning", body: "Every new system install includes a complimentary professional house cleaning." },
              { icon: <CheckCircle className="w-6 h-6 text-blue-600" />, title: "0% Financing Up to $25K", body: "Same-day approval on most applications. Don't delay comfort over budget." },
              { icon: <MapPin className="w-6 h-6 text-purple-600" />, title: "Local Since 1998", body: "Family-owned out of Wharton, NJ. We're your neighbors, not a call center." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 items-start">
                <div className="shrink-0 w-11 h-11 bg-white border border-gray-100 rounded-xl flex items-center justify-center">
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

      {/* CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-blue-700 to-blue-600 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4">Need HVAC Help in Annandale?</h2>
          <p className="text-blue-100 mb-8 text-base md:text-lg">Call us or fill out the form — we respond fast, day or night.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+12017875657" className="bg-white text-blue-700 px-7 py-3.5 rounded-full font-bold text-lg hover:bg-gray-50 transition shadow-lg inline-flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> (201) 787-5657
            </a>
            <Link href="/contact" className="bg-white/10 border-2 border-white/40 text-white px-7 py-3.5 rounded-full font-semibold text-lg hover:bg-white/20 transition text-center">
              Request Estimate
            </Link>
          </div>
          <p className="mt-5 text-blue-200 text-sm">
            Also serving: Clinton, Lebanon, High Bridge, Raritan Township and all of{" "}
            <Link href="/service-areas/hunterdon-county" className="underline hover:text-white">Hunterdon County</Link>
          </p>
          <p className="mt-2 text-blue-300 text-xs">
            <Link href="/service-areas" className="underline hover:text-white">← View all service areas</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
