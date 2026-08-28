import type { Metadata } from "next";
import Link from "next/link";
import { Building2, CheckCircle, Snowflake, Wind, Wrench } from "lucide-react";
import { getBrandBySlug } from "@/data/brands";
import { PUBLIC_REFRIGERANTS } from "@/data/refrigerants";

export const metadata: Metadata = {
  title: "HVAC & Refrigeration Equipment We Service",
  description: "Residential HVAC, commercial HVAC, boiler, refrigeration, indoor air quality, and specialty equipment serviced by Air2Cool in North Jersey.",
  alternates: { canonical: "/equipment-we-service" },
  openGraph: { title: "HVAC & Refrigeration Equipment We Service | Air2Cool", description: "Explore Air2Cool's residential, commercial, refrigeration, and indoor air quality equipment capabilities.", url: "/equipment-we-service" },
};

const categories = [
  {
    id: "residential-hvac",
    title: "Residential HVAC & Indoor Air Quality",
    icon: Wind,
    items: ["Central air conditioners", "Gas furnaces", "Heat pumps", "Air handlers", "Evaporator coils", "Hydronic boilers", "Steam boilers", "Combination boilers", "Ductless mini-splits", "Packaged systems", "Thermostats and zoning controls", "Media filtration systems", "Whole-home humidification", "Whole-home dehumidification"],
    links: [
      { label: "AC Repair", href: "/services/ac-repair" },
      { label: "Heating Repair", href: "/services/heating-repair" },
      { label: "Mini-Split Service", href: "/services/mini-split" },
      { label: "Preventative Maintenance", href: "/services/preventative-maintenance" },
      { label: "Cooling Installation", href: "/services/cooling-installation" },
      { label: "Heating Installation", href: "/services/heating-installation" },
      { label: "Complete HVAC Installation", href: "/services/hvac-installation" },
    ],
  },
  {
    id: "commercial-hvac",
    title: "Commercial HVAC",
    icon: Building2,
    items: ["Rooftop units (RTUs)", "Packaged systems", "Split systems", "Commercial heat pumps", "Commercial boilers", "VRF and VRV systems", "Chillers", "Unit heaters", "Ventilation systems", "Building and equipment controls", "Custom ductwork"],
    links: [{ label: "Commercial HVAC", href: "/services/commercial" }],
  },
  {
    id: "commercial-refrigeration",
    title: "Commercial Refrigeration",
    icon: Snowflake,
    items: ["Walk-in coolers", "Walk-in freezers", "Reach-in refrigerators and freezers", "Refrigerated prep tables", "Display cases", "Ice machines", "Condensing units", "Evaporators", "Refrigeration controls"],
    links: [{ label: "Commercial Refrigeration", href: "/services/commercial-refrigeration" }],
  },
] as const;

const trueBrand = getBrandBySlug("true-refrigeration");
const aprilaire = getBrandBySlug("aprilaire");
const mycom = getBrandBySlug("mycom");

export default function EquipmentWeServicePage() {
  return (
    <main className="bg-white">
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6"><p className="text-cyan-300 font-bold uppercase tracking-widest mb-3">Residential &amp; Commercial Capabilities</p><h1 className="text-4xl md:text-6xl font-extrabold mb-6">HVAC &amp; Refrigeration Equipment We Service</h1><p className="text-lg md:text-xl text-slate-200 max-w-4xl leading-relaxed">Air2Cool diagnoses, maintains, repairs, replaces, and installs a wide range of residential HVAC, commercial HVAC, and refrigeration equipment across Morris County and North Jersey. Available services vary by equipment type, system, manufacturer, and application.</p><div className="flex flex-wrap gap-4 mt-8"><Link href="/brands" className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-3 rounded-full font-bold">Browse Brands We Service</Link><Link href="/contact" className="border border-white/40 hover:bg-white/10 px-6 py-3 rounded-full font-bold">Request Service</Link></div></div>
      </section>

      <section className="py-14 md:py-20"><div className="max-w-7xl mx-auto px-6 space-y-14">{categories.map(({ id, title, icon: Icon, items, links }) => <div id={id} key={id} className="scroll-mt-24"><div className="flex items-center gap-3 mb-7"><Icon className="w-8 h-8 text-cyan-600" /><h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">{title}</h2></div><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{items.map((item) => <div key={item} className="flex gap-3 border border-slate-200 rounded-xl p-4"><CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" /><span className="font-semibold text-slate-800">{item}</span></div>)}</div><div className="flex flex-wrap gap-3 mt-6">{links.map((link) => <Link key={link.href} href={link.href} className="bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 px-4 py-2.5 rounded-full font-bold transition-colors">{link.label} →</Link>)}</div></div>)}</div></section>

      <section className="bg-slate-50 py-14 md:py-20"><div className="max-w-7xl mx-auto px-6"><h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">Confirmed Specialty Experience</h2><p className="text-gray-600 text-lg max-w-4xl mb-8">These examples describe specific equipment and project experience. Applicability depends on the equipment, site conditions, and scope of work.</p><div className="grid md:grid-cols-2 gap-5">
        <article className="bg-white border rounded-2xl p-6"><Snowflake className="text-cyan-600 mb-3" /><h3 className="text-xl font-bold mb-2">True Refrigeration Service</h3><p className="text-gray-700">{trueBrand?.summary}</p><Link href="/services/commercial-refrigeration" className="inline-flex items-center text-blue-700 font-bold mt-4">Commercial refrigeration service →</Link></article>
        {PUBLIC_REFRIGERANTS.map((refrigerant) => <article key={refrigerant.slug} className="bg-white border rounded-2xl p-6"><Snowflake className="text-cyan-600 mb-3" /><h3 className="text-xl font-bold mb-2">{refrigerant.name} Commercial Refrigeration</h3><p className="text-gray-700 mb-4">{refrigerant.summary}</p><p className="text-sm text-gray-500">Service is limited to applicable equipment and requires equipment-specific safety and diagnostic procedures.</p></article>)}
        <article className="bg-white border rounded-2xl p-6"><Wind className="text-cyan-600 mb-3" /><h3 className="text-xl font-bold mb-2">AprilAire E080W Dehumidifier</h3><p className="text-gray-700">{aprilaire?.summary}</p><Link href="/services/air-quality" className="inline-flex items-center text-blue-700 font-bold mt-4">Indoor air quality service →</Link></article>
        <article className="bg-white border rounded-2xl p-6"><Wrench className="text-cyan-600 mb-3" /><h3 className="text-xl font-bold mb-2">MYCOM F6WB Compressor Overhaul</h3><p className="text-gray-700">{mycom?.summary}</p><Link href="/services/commercial-refrigeration" className="inline-flex items-center text-blue-700 font-bold mt-4">Discuss commercial equipment →</Link></article>
      </div></div></section>

      <section className="py-14"><div className="max-w-4xl mx-auto px-6 text-center"><h2 className="text-3xl font-extrabold text-slate-900 mb-4">Need help identifying your equipment?</h2><p className="text-gray-700 mb-7">Send the manufacturer, model number, equipment type, and current symptoms. Our team can review the information and help determine the appropriate next step.</p><div className="flex flex-wrap justify-center gap-4"><a href="tel:+12017875657" className="bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-full font-bold">Call (201) 787-5657</a><Link href="/contact" className="bg-blue-700 hover:bg-blue-800 text-white px-7 py-3 rounded-full font-bold">Request Service Online</Link></div><p className="text-sm text-gray-500 mt-6">Brand and model references do not imply manufacturer authorization, endorsement, or affiliation.</p></div></section>
    </main>
  );
}
