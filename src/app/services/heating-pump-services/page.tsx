import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Gauge, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Boiler & Heating Circulation Pump Services | Air2Cool",
  description: "Boiler circulation pump and hydronic heating pump inspection, diagnosis and equipment-specific service in Morris County and North Jersey.",
  alternates: { canonical: "/services/heating-pump-services" },
};

const symptoms = ["Poor or uneven heat circulation", "An unusually noisy pump", "A pump that does not run", "Visible leakage near the pump or connections", "A heating zone that does not warm properly"];

export default function HeatingPumpServicesPage() {
  return <main className="bg-white text-gray-900">
    <section className="bg-blue-950 text-white"><div className="max-w-5xl mx-auto px-6 py-16 md:py-24"><p className="text-cyan-300 font-bold uppercase tracking-widest mb-3">Hydronic heating service</p><h1 className="text-4xl md:text-6xl font-extrabold mb-5">Boiler & Heating Circulation Pump Services</h1><p className="text-lg md:text-xl text-blue-100 max-w-3xl mb-8">Service for water-circulation pumps used in boiler and hydronic heating systems. These heating circulators are different from refrigerant-based heat pumps.</p><Link href="/maintenance-contract" className="inline-flex bg-cyan-500 text-blue-950 px-6 py-3 rounded-lg font-bold">Request Heating Pump Service</Link></div></section>
    <section className="max-w-5xl mx-auto px-6 py-14"><h2 className="text-3xl font-bold mb-3">Symptoms need diagnosis</h2><p className="text-gray-700 mb-7">Each of these conditions may involve the pump, controls, valves, air in the system, distribution piping or another heating component. A symptom alone does not prove pump failure.</p><div className="grid sm:grid-cols-2 gap-4">{symptoms.map(item => <div key={item} className="flex gap-3"><CheckCircle className="w-5 h-5 text-cyan-700 shrink-0 mt-0.5"/><span>{item}</span></div>)}</div></section>
    <section className="bg-gray-50 border-y border-gray-200"><div className="max-w-5xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-10"><div><Gauge className="text-cyan-700 mb-3"/><h2 className="text-2xl font-bold mb-3">Inspection and maintenance</h2><p className="text-gray-700">Preventative service can review pump operation, visible condition, controls, connections and circulation behavior as appropriate for the system.</p></div><div><Wrench className="text-blue-700 mb-3"/><h2 className="text-2xl font-bold mb-3">Diagnosis and service options</h2><p className="text-gray-700">After assessing the equipment, Air2Cool can discuss supported repair or replacement options. Scope depends on pump type, condition, system design, parts requirements and application.</p></div></div></section>
    <section className="max-w-5xl mx-auto px-6 py-14"><h2 className="text-3xl font-bold mb-4">Residential and commercial applications</h2><p className="text-gray-700 max-w-3xl mb-7">Air2Cool evaluates residential boiler circulators and commercial hot-water heating distribution pumps. For commercial properties, provide the equipment count, model information, operating concern and access needs when known.</p><div className="flex flex-wrap gap-4"><Link href="/services/boiler-maintenance" className="text-blue-700 font-bold underline">Boiler maintenance</Link><Link href="/services/heating-repair" className="text-blue-700 font-bold underline">Heating repair</Link><Link href="/services/commercial-boiler-services" className="text-blue-700 font-bold underline">Commercial boiler service</Link><Link href="/services/commercial" className="text-blue-700 font-bold underline">Commercial HVAC & mechanical services</Link></div></section>
  </main>;
}
