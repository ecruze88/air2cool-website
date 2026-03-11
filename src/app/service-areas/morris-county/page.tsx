import type { Metadata } from "next";
import { MapPin, Phone, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import townsData from "@/data/service-areas.json";

type Town = { name: string; slug: string; countySlug: string };
const countyTowns = (townsData as { towns: Town[] }).towns.filter(
  (t) => t.countySlug === "morris-county"
);

export const metadata: Metadata = {
  title: "AC Repair Morris County NJ | HVAC Service | Air2Cool | (201) 787-5657",
  description:
    "AC repair Morris County NJ by licensed technicians. Same-day service, 24/7 emergency. Furnace repair, HVAC installation & more. Family-owned since 1998. Call (201) 787-5657.",
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
            AC Repair &amp; HVAC Service in Morris County NJ
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

      {/* AC Repair & HVAC in Morris County — Primary SEO Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
            AC Repair in Morris County NJ — Same-Day Service by Licensed Technicians
          </h2>
          <div className="text-gray-700 space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              When your air conditioner breaks down in the middle of a Morris County summer, you need a technician on-site fast — not a national call center. Air2Cool Heating &amp; Cooling has been providing{" "}
              <Link href="/services/ac-repair" className="text-blue-600 hover:underline font-semibold">AC repair in Morris County NJ</Link>{" "}
              since 1998, with same-day appointments available and 24/7 emergency service for those brutal heatwave situations. We're based right in Wharton, meaning we can reach any part of the county quickly — whether you're in Morristown, Parsippany, Denville, Randolph, Rockaway, or anywhere in between.
            </p>
            <p>
              Our Licensed Master HVAC Technicians diagnose and repair all types of central air conditioning systems, ductless mini-splits, and heat pumps. Common AC problems we fix include compressor failure, refrigerant leaks, frozen evaporator coils, faulty capacitors, and systems that run but won't cool. We work on all major brands — Carrier, Trane, Lennox, Rheem, Goodman, and more — and we stock common parts on our trucks to minimize the time you're without cool air.
            </p>
            <p>
              Morris County's climate creates unique HVAC demands. Summers are hot and humid, winters are cold and brutal, and older homes throughout Morristown, Madison, and Chatham often have aging boiler and central AC systems that require expertise not every HVAC company has. Air2Cool's technicians have seen it all — from historic colonial homes in Morristown to modern developments in Parsippany and everything in between. We understand the equipment and the neighborhoods.
            </p>
            <p>
              Beyond{" "}
              <Link href="/services/ac-repair" className="text-blue-600 hover:underline">AC repair</Link>,
              we provide complete HVAC services throughout Morris County:{" "}
              <Link href="/services/heating-repair" className="text-blue-600 hover:underline">furnace and boiler repair</Link>,{" "}
              <Link href="/services/hvac-installation" className="text-blue-600 hover:underline">full HVAC system installation</Link>,
              preventative maintenance contracts, and commercial HVAC and refrigeration for businesses across the county. Whatever your heating or cooling need, Air2Cool is your Morris County neighbor — family-owned, locally operated, and available around the clock.
            </p>
            <p>
              We offer free estimates on all installations and replacements, transparent pricing with no surprise fees, and 0% APR financing up to $25,000. We also offer discounts for seniors, veterans, and first responders. Call{" "}
              <a href="tel:+12017875657" className="text-blue-600 hover:underline font-semibold">(201) 787-5657</a>{" "}
              any time to schedule service or request a free estimate online.
            </p>
          </div>
        </div>
      </section>

      {/* Top Morris County Towns */}
      <section className="py-10 md:py-14 bg-blue-50 border-y border-blue-100">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-2">
            Top Towns We Serve in Morris County
          </h2>
          <p className="text-sm text-gray-600 mb-6">Click your town for local HVAC service info and details.</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { name: "Morristown", slug: "morristown" },
              { name: "Parsippany-Troy Hills", slug: "parsippany-troy-hills" },
              { name: "Denville", slug: "denville" },
              { name: "Randolph", slug: "randolph" },
              { name: "Rockaway", slug: "rockaway" },
              { name: "Madison", slug: "madison" },
              { name: "Florham Park", slug: "florham-park" },
              { name: "East Hanover", slug: "east-hanover" },
              { name: "Mount Olive", slug: "mount-olive" },
              { name: "Dover", slug: "dover" },
              { name: "Wharton", slug: "wharton" },
              { name: "Chatham", slug: "chatham" },
            ].map((town) => (
              <Link
                key={town.slug}
                href={`/service-areas/${town.slug}`}
                className="flex items-center gap-2 bg-white border-2 border-blue-200 rounded-xl px-4 py-3 hover:border-blue-500 hover:bg-blue-100 transition-all group"
              >
                <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="font-semibold text-gray-800 group-hover:text-blue-700 text-sm">{town.name}</span>
                <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-600 ml-auto" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All towns grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 text-center mb-3">
            All Towns We Serve in Morris County
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
            {[
              { label: "AC Repair & Diagnostics", href: "/services/ac-repair" },
              { label: "AC Installation & Replacement", href: "/services/hvac-installation" },
              { label: "Furnace Repair", href: "/services/heating-repair" },
              { label: "Furnace & Boiler Installation", href: "/services/hvac-installation" },
              { label: "Heat Pump Installation", href: "/services/hvac-installation" },
              { label: "Heating Repair", href: "/services/heating-repair" },
              { label: "Air Filtration Systems", href: "/services/air-filtration" },
              { label: "Whole-Home Humidifiers", href: "/services/humidifier" },
              { label: "Commercial Refrigeration", href: "/services/commercial-refrigeration" },
              { label: "Preventative Maintenance Plans", href: "/services/preventative-maintenance" },
            ].map((s) => (
              <Link key={s.label} href={s.href} className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3 hover:border-blue-400 hover:bg-blue-50 transition-all group">
                <CheckCircle className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="text-sm font-medium text-gray-800 group-hover:text-blue-700">{s.label}</span>
                <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-600 ml-auto" />
              </Link>
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

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8 text-center">
            Frequently Asked Questions — HVAC Service in Morris County NJ
          </h2>
          <div className="space-y-5">
            {[
              {
                q: "Does Air2Cool offer same-day AC repair in Morris County NJ?",
                a: "Yes. We offer same-day AC repair throughout Morris County, including Morristown, Parsippany, Denville, Randolph, Rockaway, and all surrounding towns. Call (201) 787-5657 in the morning and we'll do our best to have a technician at your door that same day. For overnight emergencies, we're available 24/7.",
              },
              {
                q: "What areas of Morris County does Air2Cool serve?",
                a: "We serve every town in Morris County, including Morristown, Parsippany-Troy Hills, Denville, Randolph, Rockaway, Wharton, Dover, Madison, Chatham, Florham Park, East Hanover, Mount Olive, and all others. We cover both JCP&L and PSE&G service territories throughout the county.",
              },
              {
                q: "Do you repair boilers as well as air conditioners in Morris County?",
                a: "Absolutely. Air2Cool is one of the few Morris County HVAC companies with true boiler expertise. We service and repair hydronic boilers, steam boilers, and NTI boilers, and we're NTI-certified technicians. Many older Morris County homes rely on boiler heating, and we have the specialized knowledge to handle it right.",
              },
              {
                q: "How much does AC repair cost in Morris County NJ?",
                a: "The cost depends on the specific repair needed. Simple fixes like capacitor replacement or refrigerant recharge are relatively affordable, while larger repairs like compressor replacement cost more. We provide a free diagnostic estimate before any work begins — no guessing, no surprises. Most common repairs are completed in a single visit.",
              },
              {
                q: "Can Air2Cool install a new HVAC system in Morris County?",
                a: "Yes. We handle complete HVAC system replacements and new installations throughout Morris County. Our installations include a free house cleaning as a bonus, and we offer 0% APR financing up to $25,000. We'll properly size the system for your home and handle all permits and inspections.",
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

      <section className="py-12 bg-gradient-to-r from-blue-700 to-blue-600 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4">Ready to Book in Morris County?</h2>
          <p className="text-blue-100 mb-8">
            Call Air2Cool at{" "}
            <a href="tel:+12017875657" className="font-bold underline hover:no-underline">(201) 787-5657</a>{" "}
            or get a free estimate at{" "}
            <Link href="/contact" className="font-bold underline hover:no-underline">/contact</Link>.
            Same-day AC repair and 24/7 emergency service available across Morris County.
          </p>
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
            {" · "}
            <Link href="/services/ac-repair" className="underline hover:text-white">AC Repair</Link>
            {" · "}
            <Link href="/services/heating-repair" className="underline hover:text-white">Heating Repair</Link>
            {" · "}
            <Link href="/services/hvac-installation" className="underline hover:text-white">HVAC Installation</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
