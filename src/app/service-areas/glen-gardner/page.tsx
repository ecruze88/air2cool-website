import type { Metadata } from "next";
import { Phone, CheckCircle, Star, Clock, Shield, Wrench, MapPin } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HVAC Service in Glen Gardner NJ | AC & Heating Repair | Air2Cool | (201) 787-5657",
  description:
    "Air2Cool provides AC repair, furnace & boiler repair, and HVAC installation in Glen Gardner, NJ (Hunterdon County). Same-day service. Family-owned since 1998. Call (201) 787-5657.",
  alternates: {
    canonical: "https://www.air2cool.com/service-areas/glen-gardner",
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

export default function GlenGardnerPage() {
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
            Hunterdon County · 08826
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight">
            HVAC Service in Glen Gardner, NJ
          </h1>
          <p className="text-base md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Air2Cool has served Glen Gardner and Hunterdon County since 1998 — AC repair,
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
            HVAC Services in Glen Gardner
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
            Serving Glen Gardner &amp; Hunterdon County Homes Since 1998
          </h2>
          <div className="text-sm md:text-base text-gray-700 space-y-4 leading-relaxed">
            <p>
              Glen Gardner is a quiet borough tucked into the rolling hills of western Hunterdon County, situated along the South Branch of the Raritan River between High Bridge and Califon. The area is known for its historic rural character, with farmhouses, older Colonial-era homes, and residential properties that often feature aging heating systems — including oil furnaces, steam radiators, and hydronic boilers — that require experienced, specialized care. Air2Cool's licensed master technicians understand these systems inside and out and can diagnose issues that less experienced contractors might overlook.
            </p>
            <p>
              Whether you're dealing with a no-heat emergency on a cold Hunterdon County night or your central AC isn't keeping up during a summer heat wave, Air2Cool is your local HVAC expert. We offer same-day service throughout Glen Gardner, High Bridge, Lebanon, Hampton, Califon, and surrounding areas. Our 24/7 emergency line means you're never left waiting when it matters most. We also handle complete HVAC system replacements with 0% financing available, making it easy to upgrade an old, inefficient system without a major upfront cost.
            </p>
            <p>
              As a family-owned company based in nearby Wharton, NJ, we treat every Glen Gardner home like our own — honest pricing, quality workmanship, and no unnecessary upselling. Learn more about our service coverage on the{" "}
              <Link href="/service-areas/hunterdon-county" className="text-blue-600 hover:underline font-semibold">Hunterdon County HVAC page</Link>.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {["High Bridge", "Lebanon", "Califon", "Hampton"].map((name) => (
              <span
                key={name}
                className="text-xs bg-white border border-gray-200 px-3 py-1.5 rounded-full text-gray-600"
              >
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
            HVAC Questions from Glen Gardner Residents
          </h2>
          <div className="space-y-5">
            {[
              {
                q: "Do you offer same-day AC repair in Glen Gardner, NJ?",
                a: "Yes. Air2Cool offers same-day AC repair in Glen Gardner and throughout Hunterdon County. Call (201) 787-5657 early in the day and we'll do our best to dispatch a technician the same day. For after-hours emergencies, our line is open 24/7.",
              },
              {
                q: "Can you service oil furnaces and older boilers in Glen Gardner?",
                a: "Absolutely. Many Glen Gardner and Hunterdon County homes rely on older heating systems — oil furnaces, steam boilers, and hydronic systems. Our licensed master technicians have extensive experience with all types of heating equipment and can diagnose, repair, or replace older systems efficiently.",
              },
              {
                q: "What other towns near Glen Gardner does Air2Cool serve?",
                a: "We serve all of Hunterdon County, including High Bridge, Lebanon, Califon, Hampton, Clinton, Annandale, and surrounding communities. We also cover much of Morris County, Somerset County, and North NJ. If you're not sure whether we reach you, just call — we almost certainly do.",
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
            Why Glen Gardner Residents Choose Air2Cool
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
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4">Need HVAC Help in Glen Gardner?</h2>
          <p className="text-blue-100 mb-8 text-base md:text-lg">
            Call us or fill out the form — we respond fast, day or night.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+12017875657" className="bg-white text-blue-700 px-7 py-3.5 rounded-full font-bold text-lg hover:bg-gray-50 transition shadow-lg inline-flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> (201) 787-5657
            </a>
            <Link href="/contact" className="bg-white/10 border-2 border-white/40 text-white px-7 py-3.5 rounded-full font-semibold text-lg hover:bg-white/20 transition text-center">
              Request Estimate
            </Link>
          </div>
          <p className="mt-5 text-blue-200 text-sm">
            Also serving: High Bridge, Lebanon, Califon, Hampton and all of{" "}
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
