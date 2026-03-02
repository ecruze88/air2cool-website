import type { Metadata } from "next";
import { MapPin, Phone, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import townsData from "@/data/service-areas.json";

type Town = { name: string; slug: string; countySlug: string };
const countyTowns = (townsData as { towns: Town[] }).towns.filter(
  (t) => t.countySlug === "warren-county"
);

export const metadata: Metadata = {
  title: "Warren County HVAC Service | Air2Cool Heating & Cooling",
  description:
    "Air2Cool serves Warren County, NJ — AC repair, furnace installation & 24/7 emergency HVAC in Hackettstown, Washington, Phillipsburg, Belvidere and more. Call (201) 787-5657.",
  alternates: { canonical: "https://www.air2cool.com/service-areas/warren-county" },
};

export default function WarrenCountyPage() {
  return (
    <main className="bg-white">
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-600/70 border border-blue-400/30 px-3 py-1.5 rounded-full text-sm font-semibold mb-4">
            <MapPin className="w-4 h-4" /> Warren County, NJ
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
            HVAC Service Across Warren County
          </h1>
          <p className="text-blue-100 text-base md:text-xl mb-8 max-w-2xl mx-auto">
            Hackettstown, Phillipsburg, Washington, and beyond — Air2Cool has covered Warren
            County&apos;s HVAC needs since 1998. All JCP&L service area. 24/7 emergency response.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+12017875657" className="bg-red-600 hover:bg-red-700 text-white px-7 py-3.5 rounded-full font-bold text-lg inline-flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> (201) 787-5657
            </a>
            <Link href="/contact" className="bg-white/10 border border-white/30 hover:bg-white/20 text-white px-7 py-3.5 rounded-full font-semibold text-lg text-center">
              Free Estimate
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 text-center mb-3">
            Towns We Serve in Warren County
          </h2>
          <p className="text-center text-gray-500 mb-10 text-sm md:text-base">
            Select your town for local HVAC info and service details.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {countyTowns.map((town) => (
              <Link key={town.slug} href={`/service-areas/${town.slug}`}
                className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-3 hover:border-blue-500 hover:bg-blue-50 transition-all group">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="font-medium text-gray-800 group-hover:text-blue-700 text-sm">{town.name}</span>
                <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-600 ml-auto" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6 text-center">
            HVAC Services in Warren County
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {["AC Repair & Diagnostics","AC Installation & Replacement","Furnace Repair","Furnace & Boiler Installation","Heat Pump Installation","Heating Repair","Air Filtration Systems","Whole-Home Humidifiers","Commercial Refrigeration","Preventative Maintenance Plans"].map((s) => (
              <div key={s} className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3">
                <CheckCircle className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="text-sm font-medium text-gray-800">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-5">
            Why Warren County Trusts Air2Cool
          </h2>
          <div className="text-gray-700 space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              Warren County spans from the Delaware River to the Morris County border, with a mix of
              small boroughs, agricultural townships, and growing residential areas. We&apos;ve been
              handling HVAC for Warren County homes and businesses since 1998.
            </p>
            <p>
              The county&apos;s older housing stock often means aging boilers and furnaces that need
              experienced techs. Our licensed master technicians handle all systems — from cast iron
              boilers in Phillipsburg to modern heat pumps in newer Hackettstown developments.
            </p>
            <p>
              We offer 0% financing up to $25,000, free house cleaning with new system installs, and
              discounts for first responders, veterans, and seniors. Call (201) 787-5657 any time.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-blue-700 to-blue-600 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4">Ready to Book in Warren County?</h2>
          <p className="text-blue-100 mb-8">Call or submit a request — we respond fast, 24/7.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+12017875657" className="bg-white text-blue-700 px-7 py-3.5 rounded-full font-bold text-lg inline-flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> (201) 787-5657
            </a>
            <Link href="/contact" className="bg-white/10 border-2 border-white/40 text-white px-7 py-3.5 rounded-full font-semibold text-lg text-center">
              Get Free Estimate
            </Link>
          </div>
          <p className="mt-4 text-blue-200 text-sm">
            <Link href="/service-areas" className="underline hover:text-white">← All Service Areas</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
