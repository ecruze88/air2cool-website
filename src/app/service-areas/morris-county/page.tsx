import type { Metadata } from "next";
import { MapPin, Phone, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import townsData from "@/data/service-areas.json";

type Town = { name: string; slug: string; countySlug: string };
const countyTowns = (townsData as { towns: Town[] }).towns.filter(
  (t) => t.countySlug === "morris-county"
);

export const metadata: Metadata = {
  title: "Morris County HVAC Service | Air2Cool Heating & Cooling",
  description:
    "Air2Cool serves all of Morris County, NJ — AC repair, furnace installation, heating service & 24/7 emergency HVAC. Based in Wharton. Family-owned since 1998. Call (201) 787-5657.",
  alternates: { canonical: "https://www.air2cool.com/service-areas/morris-county" },
};

export default function MorrisCountyPage() {
  return (
    <main className="bg-white">
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-600/70 border border-blue-400/30 px-3 py-1.5 rounded-full text-sm font-semibold mb-4">
            <MapPin className="w-4 h-4" /> Morris County, NJ
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
            HVAC Service Across Morris County
          </h1>
          <p className="text-blue-100 text-base md:text-xl mb-8 max-w-2xl mx-auto">
            From Morristown to Wharton, Parsippany to Chester — Air2Cool has served Morris County
            families and businesses since 1998. Licensed master techs, 250+ five-star reviews.
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
            Towns We Serve in Morris County
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
            HVAC Services in Morris County
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
            Why Morris County Trusts Air2Cool
          </h2>
          <div className="text-gray-700 space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              Morris County spans everything from the historic streets of Morristown to the rural
              roads of Long Valley and Chester, the established neighborhoods of Madison and Chatham,
              and the busy corridors of Parsippany-Troy Hills. Air2Cool has been covering it all since
              1998 — both JCP&L and PSE&G service territories.
            </p>
            <p>
              Based right in Wharton, we&apos;re centrally located to reach any Morris County town
              quickly. Whether you&apos;re in a colonial in Chatham, a condo in Parsippany, or a
              farmhouse outside Chester, our licensed master techs arrive equipped and ready.
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
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4">Ready to Book in Morris County?</h2>
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
