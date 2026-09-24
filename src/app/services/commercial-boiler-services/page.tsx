import type { Metadata } from "next";
import Link from "next/link";
import { Building2, CheckCircle } from "lucide-react";
import { COMMERCIAL_MAINTENANCE_PLAN } from "@/config/company";

export const metadata: Metadata = {
  title: "Commercial Boiler Service & Maintenance North Jersey | Air2Cool",
  description: "Commercial boiler maintenance, circulation-system service planning and maintenance agreement requests for North Jersey properties and facilities.",
  alternates: { canonical: "/services/commercial-boiler-services" },
};

const info = ["Property type and service location", "Boiler manufacturer, model and equipment count", "Whether equipment currently operates", "Current symptoms and recent service history", "Site access and preferred service timing"];

export default function CommercialBoilerServicesPage() {
  return <main className="bg-white text-gray-900">
    <section className="bg-slate-950 text-white"><div className="max-w-5xl mx-auto px-6 py-16 md:py-24"><Building2 className="w-10 h-10 text-orange-400 mb-4"/><h1 className="text-4xl md:text-6xl font-extrabold mb-5">Commercial Boiler Service & Maintenance</h1><p className="text-lg md:text-xl text-slate-200 max-w-3xl mb-8">Planned maintenance and equipment-specific service for property owners, managers and facility teams across North Jersey.</p><Link href="/maintenance-contract" className="inline-flex bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-lg font-bold">Request a Commercial Maintenance Proposal</Link></div></section>
    <section className="max-w-5xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-10"><div><h2 className="text-3xl font-bold mb-4">Service planning for the facility</h2><p className="text-gray-700 mb-4">Commercial boiler work begins with the equipment, application and operating concern. Planned maintenance, corrective repair, replacement and installation are distinct scopes.</p><p className="text-gray-700">Air2Cool can also assess circulation pumps and related heating components. Access and service timing are coordinated as agreed for the property.</p></div><div className="bg-gray-50 border border-gray-200 p-7 rounded-lg"><h2 className="text-2xl font-bold mb-4">Information to provide</h2>{info.map(item => <div key={item} className="flex gap-3 mb-3"><CheckCircle className="w-5 h-5 text-orange-600 shrink-0 mt-0.5"/><span>{item}</span></div>)}</div></section>
    <section className="bg-slate-100"><div className="max-w-5xl mx-auto px-6 py-14"><h2 className="text-3xl font-bold mb-4">Commercial maintenance agreements</h2><p className="text-gray-700 max-w-3xl mb-4">Visit frequency, equipment coverage and service scope are defined by the agreement. {COMMERCIAL_MAINTENANCE_PLAN.description}</p><p className="text-gray-700">The proposal identifies the work, materials and equipment included; it does not turn residential plan terms into commercial or boiler-specific promises.</p></div></section>
    <section className="max-w-5xl mx-auto px-6 py-12 flex flex-wrap gap-4"><Link href="/services/heating-pump-services" className="text-blue-700 font-bold underline">Heating circulation pump service</Link><Link href="/services/commercial" className="text-blue-700 font-bold underline">Commercial HVAC & mechanical services</Link><Link href="/services/commercial-refrigeration" className="text-blue-700 font-bold underline">Commercial refrigeration</Link></section>
  </main>;
}
