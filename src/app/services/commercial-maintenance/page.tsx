import type { Metadata } from "next";
import Link from "next/link";
import { Building2, CheckCircle, Refrigerator, Settings, Wrench } from "lucide-react";
import { COMPANY } from "@/config/company";

export const metadata: Metadata = {
  title: "Commercial HVAC Maintenance North Jersey | Air2Cool",
  description: "Commercial HVAC and mechanical maintenance for RTUs, boilers, chillers, refrigeration, pumps, and facility equipment throughout North Jersey.",
  alternates: { canonical: "/services/commercial-maintenance" },
  openGraph: { title: "Commercial HVAC Maintenance North Jersey | Air2Cool", description: "Facility-based commercial HVAC, refrigeration and mechanical maintenance agreements in North Jersey.", url: "/services/commercial-maintenance" },
};

const groups = [
  [Building2, "Commercial HVAC", ["Rooftop units / RTUs", "Packaged systems", "Commercial furnaces and heating", "Commercial split systems and air conditioning"]],
  [Settings, "Boilers & Hydronics", ["Commercial and high-efficiency boilers", "Hydronic systems", "Boiler and heating circulation pumps"]],
  [Wrench, "Cooling & Mechanical", ["Chillers where appropriate", "Pumps and compressors", "Mechanical equipment included in the agreement"]],
  [Refrigerator, "Commercial Refrigeration", ["Walk-in coolers and freezers", "Reach-in refrigeration", "Condensing units and evaporators", "Ice machines and refrigeration systems"]],
] as const;

export default function CommercialMaintenancePage() {
  return <main className="bg-white">
    <section className="bg-slate-950 text-white"><div className="max-w-7xl mx-auto px-6 py-14 md:py-20"><div className="max-w-4xl"><p className="text-sm font-bold uppercase tracking-widest text-cyan-300 mb-3">Facility-Based Agreements</p><h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-5">Commercial HVAC &amp; Mechanical Maintenance</h1><p className="text-base md:text-xl text-slate-200 leading-relaxed mb-7">Preventative maintenance for commercial HVAC, refrigeration, boilers, chillers, pumps, rooftop equipment and mechanical systems throughout Morris County and North Jersey.</p><div className="flex flex-col sm:flex-row gap-3"><Link href="/commercial-maintenance-request" className="bg-cyan-500 px-6 py-3.5 text-center font-bold text-slate-950 hover:bg-cyan-400">Request a Commercial Maintenance Proposal</Link><a href={COMPANY.phone.href} className="border border-white/50 px-6 py-3.5 text-center font-bold hover:bg-white/10">Call {COMPANY.phone.display}</a></div></div></div></section>

    <section className="py-12 md:py-16 bg-slate-50 border-b border-slate-200"><div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10"><div><h2 className="text-2xl md:text-4xl font-extrabold text-slate-950 mb-4">Built Around the Facility</h2><p className="text-slate-700 leading-relaxed mb-5">Each agreement is developed around the facility, equipment, system count, operating requirements, desired maintenance frequency and agreed scope. Equipment is included only when identified in the agreement.</p><p className="text-slate-700 leading-relaxed">Commercial maintenance customers receive <strong>10% off eligible repairs</strong> and <strong>10% off eligible replacement parts</strong>. Visit frequency and exact coverage are agreement-specific.</p></div><div><h2 className="text-xl font-bold text-slate-950 mb-4">Who We Work With</h2><div className="grid grid-cols-2 gap-3 text-sm text-slate-700">{["Facility managers", "Property managers", "Business owners", "Restaurants", "Retail properties", "Offices", "Warehouses", "Multifamily properties", "Industrial facilities", "Schools and institutions"].map((item) => <div key={item} className="flex gap-2"><CheckCircle className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />{item}</div>)}</div></div></div></section>

    <section className="py-12 md:py-20"><div className="max-w-7xl mx-auto px-6"><h2 className="text-2xl md:text-4xl font-extrabold text-slate-950 mb-9">Equipment Coverage by Agreement</h2><div className="grid md:grid-cols-2 gap-8">{groups.map(([Icon,title,items]) => <article key={title} className="border-t-4 border-blue-700 pt-5"><Icon className="w-8 h-8 text-blue-700 mb-3" /><h3 className="text-xl font-bold text-slate-950 mb-3">{title}</h3><ul className="space-y-2 text-slate-700">{items.map((item) => <li key={item} className="flex gap-2"><CheckCircle className="w-4 h-4 text-cyan-600 shrink-0 mt-1" />{item}</li>)}</ul></article>)}</div><p className="mt-8 text-sm text-slate-600">Listed equipment illustrates Air2Cool&apos;s commercial maintenance scope where applicable. It does not mean every agreement includes every item.</p></div></section>

    <section className="py-12 md:py-16 bg-slate-50 border-y border-slate-200"><div className="max-w-5xl mx-auto px-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"><div className="max-w-3xl"><h2 className="text-2xl md:text-4xl font-extrabold text-slate-950 mb-3">Plan the Right Maintenance Scope</h2><p className="text-slate-700">Share the facility, equipment and operating requirements on the dedicated proposal page so Air2Cool can review an appropriate commercial maintenance scope.</p></div><div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0"><Link href="/commercial-maintenance-request" className="bg-blue-800 px-6 py-3.5 text-center font-bold text-white hover:bg-blue-900">Request a Commercial Maintenance Proposal</Link><a href={COMPANY.phone.href} className="border border-blue-800 px-6 py-3.5 text-center font-bold text-blue-900 hover:bg-blue-50">Call {COMPANY.phone.display}</a></div></div></section>

    <section className="py-12 bg-white"><div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-5"><div><h2 className="text-2xl font-bold text-slate-950 mb-2">Need repair service instead?</h2><p className="text-slate-700">Use the broad commercial service page for operating issues, replacement planning and other mechanical needs.</p></div><Link href="/services/commercial" className="shrink-0 font-bold text-blue-700 underline underline-offset-4">Explore Commercial Services &rarr;</Link></div></section>
  </main>;
}
