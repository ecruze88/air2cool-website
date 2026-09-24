import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Flame, Camera, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "High-Efficiency Boiler Maintenance North Jersey | Air2Cool",
  description: "High-efficiency, condensing and combi boiler maintenance in Wharton, Morris County and North Jersey. Request an equipment-specific proposal from Air2Cool.",
  alternates: { canonical: "/services/boiler-maintenance" },
};

const procedures = [
  "Operational, burner and ignition inspection",
  "Heat-exchanger inspection and cleaning when specified for the equipment",
  "Condensate drain and trap inspection on applicable equipment",
  "Venting, combustion-air, control and safety-device checks",
  "Pump, circulation-system and relevant performance checks",
];

export default function BoilerMaintenancePage() {
  return <main className="bg-white text-gray-900">
    <section className="bg-slate-900 text-white"><div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
      <p className="text-sm font-bold uppercase tracking-widest text-orange-400 mb-3">Wharton, Morris County & North Jersey</p>
      <h1 className="text-4xl md:text-6xl font-extrabold mb-5">High-Efficiency Boiler Maintenance in North Jersey</h1>
      <p className="text-lg md:text-xl text-slate-200 max-w-3xl mb-8">Scheduled care for heating-only, combination, conventional and high-efficiency condensing boilers. The service scope is prepared for the manufacturer, model, configuration and application.</p>
      <Link href="/maintenance-contract" className="inline-flex bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-lg font-bold">Request Boiler Maintenance</Link>
    </div></section>

    <section className="max-w-5xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-10">
      <div><h2 className="text-3xl font-bold mb-4">Boiler type changes the service</h2><p className="text-gray-700 mb-4">A heating-only boiler serves the hydronic heating system. A combination boiler also produces domestic hot water. Conventional and condensing equipment have different venting, drainage, combustion and cleaning requirements, so the nameplate matters when preparing a quote.</p><p className="text-gray-700">Send the manufacturer and model number when known. A clear nameplate photograph can be provided during follow-up.</p></div>
      <div className="border-l-4 border-orange-500 pl-6"><Camera className="w-7 h-7 text-orange-600 mb-3"/><h2 className="text-2xl font-bold mb-3">Information for an accurate proposal</h2><p className="text-gray-700">Tell us whether the boiler supplies domestic hot water, when it was last serviced, whether it currently operates, and what concerns you have. The proposal identifies the work and materials included.</p></div>
    </section>

    <section className="bg-gray-50 border-y border-gray-200"><div className="max-w-5xl mx-auto px-6 py-14"><h2 className="text-3xl font-bold mb-3">Equipment-dependent maintenance</h2><p className="text-gray-700 mb-7">Depending on the boiler and manufacturer requirements, a maintenance visit may include:</p><div className="grid sm:grid-cols-2 gap-4">{procedures.map(item => <div key={item} className="flex gap-3"><CheckCircle className="w-5 h-5 text-orange-600 shrink-0 mt-0.5"/><span>{item}</span></div>)}</div></div></section>

    <section className="max-w-5xl mx-auto px-6 py-14"><h2 className="text-3xl font-bold mb-6">Maintenance and repair are different requests</h2><div className="grid md:grid-cols-2 gap-8"><div><Flame className="text-orange-600 mb-3"/><h3 className="text-xl font-bold mb-2">Scheduled maintenance</h3><p className="text-gray-700">Routine inspection and equipment-specific care can be requested once or through an ongoing agreement. Boiler agreement schedules and visit scope are defined in the proposal.</p></div><div><Wrench className="text-blue-700 mb-3"/><h3 className="text-xl font-bold mb-2">An existing fault</h3><p className="text-gray-700">No heat, error codes, leaks, unusual noises and other active problems require diagnosis. Combustion-side cleaning, domestic-hot-water descaling, hydronic flushing and corrective repair are separate scopes.</p></div></div></section>

    <section className="bg-orange-700 text-white"><div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between gap-6 items-start md:items-center"><div><h2 className="text-3xl font-bold">Plan service for your boiler</h2><p className="text-orange-100 mt-2">One-time maintenance and agreement requests are welcome.</p></div><div className="flex flex-wrap gap-3"><Link href="/maintenance-contract" className="bg-white text-orange-800 px-5 py-3 rounded-lg font-bold">Request Boiler Maintenance</Link><Link href="/services/heating-pump-services" className="border border-white px-5 py-3 rounded-lg font-bold">Heating Pump Service</Link></div></div></section>
  </main>;
}
