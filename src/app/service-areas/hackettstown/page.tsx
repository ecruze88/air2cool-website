import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { MapPin, Phone } from "lucide-react";
import { PROMOTIONS, RESPONSE_TIME_NOTE } from "@/config/company";

export const metadata: Metadata = {
  title: "HVAC Repair & Installation Hackettstown NJ | Air2Cool",
  description: "Heating, boiler and AC repair, HVAC installation, heat pumps, mini splits and commercial service in Hackettstown, NJ. Call Air2Cool at (201) 787-5657.",
  alternates: { canonical: "https://www.air2cool.com/service-areas/hackettstown" },
  openGraph: { title: "HVAC Repair & Installation Hackettstown NJ | Air2Cool", description: "Heating, cooling, boiler, installation and commercial HVAC service in Hackettstown and Warren County.", url: "https://www.air2cool.com/service-areas/hackettstown" },
};

const faqs = [
  { q: "Does Air2Cool provide HVAC service in Hackettstown?", a: "Yes. Hackettstown is a priority community within Air2Cool's Warren County service area. We provide heating, cooling, boiler, installation, maintenance and applicable commercial HVAC and refrigeration service." },
  { q: "Does Air2Cool repair and install boilers in Hackettstown?", a: "Yes. Air2Cool diagnoses, repairs, maintains and replaces applicable hydronic, steam, condensing and combination boiler systems. Our documented North Jersey project work includes NTI and Lochinvar boiler installations; no Hackettstown project location is implied unless specifically documented." },
  { q: "Is emergency HVAC service available in Hackettstown?", a: `Air2Cool's emergency service line is available 24/7. ${RESPONSE_TIME_NOTE}` },
];

const schema = { "@context": "https://schema.org", "@graph": [
  { "@type": "Service", "@id": "https://www.air2cool.com/service-areas/hackettstown#service", name: "Heating and Air Conditioning Services in Hackettstown, NJ", provider: { "@id": "https://www.air2cool.com/#organization" }, areaServed: { "@type": "City", name: "Hackettstown", addressRegion: "NJ" }, serviceType: ["Heating repair", "Boiler service", "AC repair", "HVAC installation", "Commercial HVAC service"], url: "https://www.air2cool.com/service-areas/hackettstown" },
  { "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) },
] };

const services = [
  ["Heating and furnace repair", "/services/heating-repair", "Diagnosis for furnaces, boilers, heat pumps and heating controls."],
  ["Boiler maintenance", "/services/boiler-maintenance", "Equipment-specific maintenance for applicable hydronic and combi boilers."],
  ["Heating installation", "/services/heating-installation", "Furnace and boiler replacement based on the approved project scope."],
  ["AC repair", "/services/ac-repair", "Central-air diagnostics for airflow, electrical, controls and refrigerant-system concerns."],
  ["Cooling installation", "/services/cooling-installation", "Central AC, heat-pump and matched-system replacement."],
  ["Mini splits", "/services/mini-split", "Ductless equipment service and installation."],
  ["Preventative maintenance", "/services/preventative-maintenance", "Residential system maintenance and eligible plan benefits."],
  ["Commercial HVAC", "/services/commercial", "Mechanical service for applicable commercial equipment and facilities."],
] as const;

export default function HackettstownPage() {
  return <main className="bg-white">
    <Script id="schema-hackettstown" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <section className="bg-slate-950 py-14 text-white md:py-20"><div className="mx-auto max-w-6xl px-6"><p className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-cyan-300"><MapPin className="h-4 w-4" />Hackettstown, Warren County</p><h1 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">Heating &amp; Air Conditioning Services in Hackettstown, NJ</h1><p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-200">Air2Cool provides residential heating and cooling, boiler and hydronic service, installation, maintenance, commercial HVAC and refrigeration support in Hackettstown from our Wharton-based operation.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href="/contact" className="inline-flex min-h-12 items-center justify-center bg-red-600 px-6 py-3 font-bold hover:bg-red-700">Request Service</Link><a href="tel:+12017875657" className="inline-flex min-h-12 items-center justify-center gap-2 border border-slate-500 px-6 py-3 font-bold hover:border-white"><Phone className="h-5 w-5" />Call (201) 787-5657</a></div><p className="mt-4 text-sm text-slate-400">24/7 emergency service is available. {RESPONSE_TIME_NOTE}</p></div></section>

    <section className="py-12 md:py-16"><div className="mx-auto max-w-6xl px-6"><div className="max-w-3xl"><h2 className="text-3xl font-extrabold text-slate-950">HVAC repair and installation in Hackettstown</h2><p className="mt-4 leading-relaxed text-slate-700">A useful service call begins with the operating symptom and equipment configuration. Air2Cool evaluates heating and cooling equipment as a system, including airflow, electrical components, controls, drainage, venting, combustion, circulation and refrigerant performance where applicable. Repairs and replacement options are based on the diagnosis, equipment condition, compatibility and approved scope.</p></div><div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{services.map(([title, href, copy]) => <Link key={title} href={href} className="border-t-4 border-blue-700 bg-slate-50 p-5 hover:bg-white hover:shadow-md"><h3 className="font-bold text-slate-950">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{copy}</p></Link>)}</div></div></section>

    <section className="bg-slate-100 py-12 md:py-16"><div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_1fr]"><div><p className="mb-2 text-sm font-bold uppercase tracking-widest text-orange-700">Boilers &amp; Hydronics</p><h2 className="text-3xl font-extrabold text-slate-950">NTI, condensing and conventional boiler experience</h2><p className="mt-4 leading-relaxed text-slate-700">Air2Cool works on applicable hydronic and steam boilers, high-efficiency condensing boilers, combi systems, controls and circulation components. Domestic-hot-water complaints in combi systems, ignition faults, venting concerns, circulation noise and uneven heating require equipment-specific diagnosis rather than a generic parts recommendation.</p><div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 font-bold"><Link href="/brands/nti" className="text-blue-700 underline">NTI boiler service</Link><Link href="/services/heating-pump-services" className="text-blue-700 underline">Heating circulation pumps</Link><Link href="/projects" className="text-blue-700 underline">Boiler project evidence</Link></div></div><figure><Image src="/nti_wall_hung_boiler_install_with_primary_secondary_piping.webp" alt="Air2Cool NTI boiler installation with primary and secondary hydronic piping" width={900} height={675} className="aspect-4/3 w-full object-cover" /><figcaption className="mt-3 text-sm leading-relaxed text-slate-600">Air2Cool NTI boiler installation work in North Jersey. The photograph demonstrates equipment and piping experience and is not claimed as a Hackettstown project.</figcaption></figure></div></section>

    <section className="py-12 md:py-16"><div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2"><div><h2 className="text-3xl font-extrabold text-slate-950">Commercial HVAC and refrigeration</h2><p className="mt-3 leading-relaxed text-slate-700">Hackettstown businesses and property teams can request service for applicable rooftop units, packaged equipment, commercial heating and cooling, boilers, circulation systems, walk-in refrigeration, ice machines, condensing units, evaporators and compressors. Emergency repair and ongoing maintenance proposals follow separate request paths.</p><div className="mt-5 flex flex-wrap gap-4 font-bold"><Link href="/services/commercial" className="text-blue-700 underline">Commercial mechanical service</Link><Link href="/services/commercial-refrigeration" className="text-blue-700 underline">Commercial refrigeration</Link><Link href="/commercial-maintenance-request" className="text-blue-700 underline">Request a maintenance proposal</Link></div></div><div className="border-l-4 border-emerald-600 pl-6"><h2 className="text-2xl font-extrabold text-slate-950">Financing for qualifying customers</h2><p className="mt-3 leading-relaxed text-slate-700">{PROMOTIONS.financing} Program availability can vary by utility territory, equipment, project and current terms.</p><Link href="/financing" className="mt-4 inline-flex font-bold text-blue-700 underline">Review current financing information</Link></div></div></section>

    <section className="bg-slate-100 py-12"><div className="mx-auto max-w-6xl px-6"><h2 className="text-3xl font-extrabold text-slate-950">Hackettstown and nearby service areas</h2><p className="mt-3 max-w-3xl leading-relaxed text-slate-700">Hackettstown is linked to Air2Cool&apos;s wider Warren County and western North Jersey coverage. These pages describe service areas, not separate company locations.</p><div className="mt-6 flex flex-wrap gap-3">{[["Warren County", "warren-county"], ["Blairstown", "blairstown"], ["Allamuchy", "allamuchy"], ["Mansfield", "mansfield"], ["Washington", "washington"], ["Mount Olive", "mount-olive"], ["Long Valley", "long-valley"]].map(([name, slug]) => <Link key={slug} href={`/service-areas/${slug}`} className="border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-blue-800 hover:border-blue-700">{name}</Link>)}</div></div></section>

    <section className="py-12"><div className="mx-auto max-w-4xl px-6"><h2 className="text-3xl font-extrabold text-slate-950">Hackettstown HVAC questions</h2><div className="mt-6 divide-y divide-slate-200 border-y border-slate-200">{faqs.map((faq) => <div key={faq.q} className="py-5"><h3 className="font-bold text-slate-950">{faq.q}</h3><p className="mt-2 leading-relaxed text-slate-700">{faq.a}</p></div>)}</div></div></section>
  </main>;
}
