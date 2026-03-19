import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Phone, CheckCircle, Star, Clock, Shield, Wrench, MapPin } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import townsData from "@/data/service-areas.json";

type Town = {
  name: string;
  slug: string;
  county: string;
  countySlug: string;
  zipCodes: string[];
  utility: string;
  nearbyTowns: string[];
};

const towns = (townsData as { towns: Town[] }).towns;

export async function generateStaticParams() {
  return towns.map((t) => ({ town: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ town: string }>;
}): Promise<Metadata> {
  const { town: slug } = await params;
  const town = towns.find((t) => t.slug === slug);
  if (!town) return {};

  const nearby = town.nearbyTowns.slice(0, 2).join(" and ");
  return {
    title: `${town.name} HVAC Repair & Installation | Air2Cool Heating & Cooling`,
    description: `Air2Cool provides AC repair, furnace installation, heating service & 24/7 emergency HVAC in ${town.name}, NJ — near ${nearby}. Family-owned since 1998. 250+ 5-star Google reviews. Call (201) 787-5657.`,
    alternates: {
      canonical: `https://www.air2cool.com/service-areas/${town.slug}`,
    },
  };
}

const TOWN_UNIQUE_CONTENT: Record<string, string> = {
  morristown: "Morristown's mix of historic Victorians, colonial homes, and newer condo developments means we work on every type of heating and cooling system imaginable — from century-old steam boilers to brand new heat pump installs. The town's elevation and exposure to winter winds off the Watchung Ridge can push older furnaces hard. If your system is over 15 years old and struggling, we can assess it honestly and tell you whether repair or replacement makes more financial sense.",
  "parsippany-troy-hills": "Parsippany-Troy Hills has one of the highest concentrations of commercial and light-industrial properties in Morris County, and our team handles both sides — residential HVAC for the dense neighborhoods around Lake Hiawatha and Parsippany Hills, and commercial rooftop unit service for businesses along Route 46 and 202. If you're a property manager or business owner, ask about our commercial maintenance contracts.",
  randolph: "Randolph's newer residential developments tend to have modern high-efficiency systems, but we also service plenty of older homes in the Ironia and Center Grove areas with original equipment that's overdue for an upgrade. We're just a few miles away in Wharton, so response times to Randolph are among our fastest in Morris County.",
  "rockaway-township": "Rockaway Borough and Rockaway Township sit right in our backyard — we're based in Wharton and have been serving the Rockaway area for over 26 years. We know the neighborhoods, the housing stock, and the kind of system problems that come up in homes near the Rockaway River corridor. When you call us for emergency service, you're getting a neighbor, not a dispatch center 50 miles away.",
  rockaway: "Rockaway Borough and Rockaway Township sit right in our backyard — we're based in Wharton and have been serving the Rockaway area for over 26 years. We know the neighborhoods, the housing stock, and the kind of system problems that come up in homes near the Rockaway River corridor. When you call us for emergency service, you're getting a neighbor, not a dispatch center 50 miles away.",
  denville: "Denville's lakefront communities — Indian Lake, Openaki, and others — can present unique HVAC challenges: seasonal homes converting to year-round use often need full system evaluations, and the humidity near the water means air quality and dehumidification are frequent topics. We've done dozens of mini split installs and full HVAC overhauls in the lake communities and know what works.",
  madison: "Madison's older housing stock — particularly around the Hartley Dodge Memorial area and the Kings Road neighborhoods — includes a lot of homes still running on aging oil-to-gas conversion setups and original boiler systems. We're comfortable working on all of it, and we'll give you a straight answer on whether your existing system has life left or whether a new high-efficiency install makes more sense financially.",
};

const SERVICES = [
  { name: "AC Repair", href: "/services/ac-repair", desc: "Fast diagnosis for all makes and models." },
  { name: "AC Installation", href: "/services/cooling-installation", desc: "Energy-efficient systems with 0% financing." },
  { name: "Heating Repair", href: "/services/heating-repair", desc: "Furnace, boiler & heat pump repair." },
  { name: "Heating Installation", href: "/services/heating-installation", desc: "New furnace or heat pump with warranty." },
  { name: "Air Filtration", href: "/services/air-quality", desc: "Whole-home air purifiers & filters." },
  { name: "Humidifiers", href: "/services/humidifier", desc: "Whole-home humidity control systems." },
  { name: "Commercial Refrigeration", href: "/services/commercial-refrigeration", desc: "Coolers & freezers for businesses." },
  { name: "Preventative Maintenance", href: "/services/preventative-maintenance", desc: "Annual tune-ups before breakdowns happen." },
];

export default async function TownPage({
  params,
}: {
  params: Promise<{ town: string }>;
}) {
  const { town: slug } = await params;
  const town = towns.find((t) => t.slug === slug);
  if (!town) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HVACBusiness",
        "@id": `https://www.air2cool.com/service-areas/${town.slug}#business`,
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
          "name": town.name,
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
        "name": `HVAC Service in ${town.name}, NJ`,
        "provider": {
          "@type": "HVACBusiness",
          "name": "Air2Cool Heating & Cooling",
        },
        "areaServed": { "@type": "City", "name": town.name, "addressRegion": "NJ" },
        "serviceType": "HVAC Repair, Installation, and Maintenance",
        "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" },
      },
    ],
  };

  return (
    <>
      <Script
        id={`schema-${town.slug}`}
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
              {town.county} · {town.zipCodes.join(", ")}
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight">
              HVAC Service in {town.name}, NJ
            </h1>
            <p className="text-base md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Air2Cool has served {town.name} and {town.county} since 1998 — AC repair,
              furnace installation, heating service, and emergency HVAC whenever you need it.
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
              HVAC Services in {town.name}
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

        {/* Local Copy */}
        <section className="py-10 md:py-14 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-5">
              Serving {town.name} and Nearby {town.county} Communities
            </h2>
            <div className="text-sm md:text-base text-gray-700 space-y-4 leading-relaxed">
              <p>
                Air2Cool Heating & Cooling has been the trusted HVAC contractor for {town.name}{" "}
                residents since 1998. Based right in Wharton, NJ, our technicians know {town.county}{" "}
                inside and out — from older homes that need careful diagnostics to newer builds looking
                for energy-efficient upgrades. Whether your {town.utility} bill has you watching the
                thermostat or your furnace gave out on a cold night, we pick up the phone 24/7.
              </p>
              <p>
                We also cover {town.nearbyTowns.join(", ")} and the surrounding area, so if you have
                neighbors or family looking for HVAC help, we&apos;re already in the area.
              </p>
              {TOWN_UNIQUE_CONTENT[town.slug] && (
                <p>{TOWN_UNIQUE_CONTENT[town.slug]}</p>
              )}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {town.nearbyTowns.map((name) => {
                const t = towns.find((x) => x.name === name);
                return t ? (
                  <Link
                    key={name}
                    href={`/service-areas/${t.slug}`}
                    className="text-xs bg-white border border-blue-200 px-3 py-1.5 rounded-full text-blue-700 hover:bg-blue-50 transition-colors"
                  >
                    {name}
                  </Link>
                ) : (
                  <span
                    key={name}
                    className="text-xs bg-white border border-gray-200 px-3 py-1.5 rounded-full text-gray-600"
                  >
                    {name}
                  </span>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Air2Cool */}
        <section className="py-10 md:py-14 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center mb-8">
              Why {town.name} Residents Choose Air2Cool
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
                  body: "Real customers across North Jersey. Check our Google reviews before you call.",
                },
                {
                  icon: <Clock className="w-6 h-6 text-red-600" />,
                  title: "24/7 Emergency Service",
                  body: "We answer at 2 AM because your furnace doesn't care what day it is.",
                },
                {
                  icon: <Wrench className="w-6 h-6 text-green-600" />,
                  title: "Free House Cleaning",
                  body: "Every new system install includes a complimentary professional house cleaning.",
                },
                {
                  icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
                  title: "0% Financing Up to $25K",
                  body: "Same-day approval on most applications. Don't delay comfort over budget.",
                },
                {
                  icon: <MapPin className="w-6 h-6 text-purple-600" />,
                  title: "Local Since 1998",
                  body: "Family-owned out of Wharton, NJ. We're your neighbors, not a call center.",
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

        {/* CTA */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-blue-700 to-blue-600 text-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
              Need HVAC Help in {town.name}?
            </h2>
            <p className="text-blue-100 mb-8 text-base md:text-lg">
              Call us or fill out the form — we respond fast, day or night.
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
                Request Estimate
              </Link>
            </div>
            <p className="mt-5 text-blue-200 text-sm">
              Also serving: {town.nearbyTowns.slice(0, 3).join(", ")} and all of {town.county}
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
