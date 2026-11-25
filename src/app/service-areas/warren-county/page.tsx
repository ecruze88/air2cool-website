import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { ArrowRight, CheckCircle, MapPin, Phone } from "lucide-react";
import { PROMOTIONS, RESPONSE_TIME_NOTE } from "@/config/company";

export const metadata: Metadata = {
  title: "HVAC Contractor Warren County NJ | Air2Cool",
  description: "Air2Cool provides heating repair, boiler service, AC repair, HVAC installation and commercial mechanical services throughout Warren County, NJ. Serving North Jersey since 1998.",
  alternates: { canonical: "https://www.air2cool.com/service-areas/warren-county" },
  openGraph: { title: "HVAC Contractor Warren County NJ | Air2Cool", description: "Heating, cooling, boiler, refrigeration and commercial mechanical service throughout Warren County, NJ.", url: "https://www.air2cool.com/service-areas/warren-county" },
};

const priorityTowns = [
  ["Hackettstown", "hackettstown"], ["Blairstown", "blairstown"], ["Allamuchy", "allamuchy"],
  ["Hope", "hope"], ["Mansfield", "mansfield"], ["Washington", "washington"],
  ["Oxford", "oxford"], ["Belvidere", "belvidere"],
] as const;

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Service", "@id": "https://www.air2cool.com/service-areas/warren-county#service", name: "Heating, Cooling and Commercial HVAC Services in Warren County, NJ", provider: { "@id": "https://www.air2cool.com/#organization" }, areaServed: { "@type": "AdministrativeArea", name: "Warren County, New Jersey" }, serviceType: ["Heating repair", "Boiler service", "Air conditioning repair", "HVAC installation", "Commercial mechanical service"], url: "https://www.air2cool.com/service-areas/warren-county" },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.air2cool.com" },
      { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://www.air2cool.com/service-areas" },
      { "@type": "ListItem", position: 3, name: "Warren County", item: "https://www.air2cool.com/service-areas/warren-county" },
    ] },
  ],
};

export default function WarrenCountyPage() {
  return <main className="bg-white">
    <Script id="schema-warren-county" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <section className="bg-slate-950 py-14 text-white md:py-20"><div className="mx-auto max-w-6xl px-6">
      <p className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-cyan-300"><MapPin className="h-4 w-4" />Warren County, New Jersey</p>
      <h1 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">Heating &amp; Air Conditioning Services in Warren County, NJ</h1>
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-200">Air2Cool provides residential heating and cooling, boiler and hydronic service, installation, refrigeration and commercial mechanical support throughout Warren County from our Wharton-based operation.</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href="/contact" className="inline-flex min-h-12 items-center justify-center bg-red-600 px-6 py-3 font-bold hover:bg-red-700">Request Service</Link><a href="tel:+12017875657" className="inline-flex min-h-12 items-center justify-center gap-2 border border-slate-500 px-6 py-3 font-bold hover:border-white"><Phone className="h-5 w-5" />Call (201) 787-5657</a></div>
      <p className="mt-4 text-sm text-slate-400">24/7 emergency service is available. {RESPONSE_TIME_NOTE}</p>
    </div></section>

    <section className="py-12 md:py-16"><div className="mx-auto max-w-6xl px-6"><div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
      <div><p className="mb-2 text-sm font-bold uppercase tracking-widest text-blue-700">Residential Service</p><h2 className="text-3xl font-extrabold text-slate-950">Heating, boilers and cooling for Warren County homes</h2><p className="mt-4 leading-relaxed text-slate-700">Air2Cool diagnoses and repairs furnaces, hydronic and steam boilers, central air conditioners, heat pumps and ductless systems. For boiler systems, our work can include controls, ignition, combustion, circulation, venting and domestic-hot-water concerns in applicable combi systems.</p>
        <div className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">{[
          ["Heating and furnace repair", "/services/heating-repair"], ["Boiler maintenance", "/services/boiler-maintenance"], ["Heating-system pumps", "/services/heating-pump-services"], ["Heating installation", "/services/heating-installation"], ["AC repair", "/services/ac-repair"], ["Cooling installation", "/services/cooling-installation"], ["Heat pumps and mini splits", "/services/mini-split"], ["Preventative maintenance", "/services/preventative-maintenance"],
        ].map(([label, href]) => <Link key={href} href={href} className="flex items-center gap-2 border-b border-slate-200 py-2 font-semibold text-blue-800 hover:text-blue-950"><CheckCircle className="h-4 w-4 shrink-0" />{label}</Link>)}</div>
      </div>
      <figure><Image src="/nti_wall_hung_boiler_install_with_primary_secondary_piping.webp" alt="Air2Cool NTI wall-hung boiler installation with primary and secondary hydronic piping" width={900} height={675} className="aspect-4/3 w-full object-cover" /><figcaption className="mt-3 text-sm leading-relaxed text-slate-600">Air2Cool NTI boiler installation work in North Jersey. Project photography demonstrates boiler and hydronic piping experience; no Warren County project location is claimed.</figcaption><div className="mt-3 flex gap-5 text-sm font-bold"><Link href="/brands/nti" className="text-blue-700 underline">NTI boiler experience</Link><Link href="/projects" className="text-blue-700 underline">View project work</Link></div></figure>
    </div></div></section>

    <section className="bg-slate-100 py-12 md:py-16"><div className="mx-auto max-w-6xl px-6">
      <div className="max-w-3xl"><p className="mb-2 text-sm font-bold uppercase tracking-widest text-orange-700">Commercial &amp; Mechanical</p><h2 className="text-3xl font-extrabold text-slate-950">Support for Warren County facilities and businesses</h2><p className="mt-4 leading-relaxed text-slate-700">Commercial service is planned around the equipment, property and operating concern. Air2Cool works on applicable rooftop and packaged HVAC equipment, commercial boilers, hydronic circulation systems, walk-in refrigeration, condensing units, evaporators, compressors and related controls.</p></div>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{[
        ["Commercial HVAC & mechanical", "/services/commercial", "Repair, replacement and mechanical support."], ["Commercial refrigeration", "/services/commercial-refrigeration", "Walk-ins, reach-ins, ice machines and refrigeration systems."], ["Commercial boiler service", "/services/commercial-boiler-services", "Boilers, controls, piping and circulation concerns."], ["Commercial maintenance", "/services/commercial-maintenance", "Facility-based preventative maintenance agreements."],
      ].map(([title, href, copy]) => <Link key={href} href={href} className="border-t-4 border-blue-700 bg-white p-5 hover:shadow-md"><h3 className="font-bold text-slate-950">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{copy}</p><span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-blue-700">Learn more <ArrowRight className="h-4 w-4" /></span></Link>)}</div>
    </div></section>

    <section className="py-12 md:py-16"><div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2">
      <div><h2 className="text-3xl font-extrabold text-slate-950">Warren County communities we serve</h2><p className="mt-3 leading-relaxed text-slate-700">Hackettstown and Blairstown are priority western service markets. Air2Cool also serves surrounding Warren County communities without representing that it maintains a separate office in the county.</p><div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">{priorityTowns.map(([name, slug]) => <Link key={slug} href={`/service-areas/${slug}`} className="flex min-h-11 items-center justify-between border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-800 hover:border-blue-600 hover:text-blue-700">{name}<ArrowRight className="h-4 w-4" /></Link>)}</div><Link href="/service-areas" className="mt-5 inline-flex font-bold text-blue-700 underline">Browse all Air2Cool service areas</Link></div>
      <div className="border-l-4 border-emerald-600 pl-6"><h2 className="text-2xl font-extrabold text-slate-950">Financing for qualifying projects</h2><p className="mt-3 leading-relaxed text-slate-700">{PROMOTIONS.financing} Program availability can depend on the utility territory, equipment, project and current program rules; Warren County customers should confirm the applicable option for their property.</p><Link href="/financing" className="mt-5 inline-flex items-center gap-2 font-bold text-blue-700 underline">Review residential financing options <ArrowRight className="h-4 w-4" /></Link><Link href="/commercial-incentives" className="mt-3 block font-bold text-blue-700 underline">Commercial incentives and financing</Link></div>
    </div></section>

    <section className="bg-blue-800 py-12 text-white"><div className="mx-auto max-w-4xl px-6 text-center"><h2 className="text-3xl font-extrabold">Request HVAC service in Warren County</h2><p className="mx-auto mt-3 max-w-2xl text-blue-100">Tell Air2Cool about the equipment, property and operating concern so the team can discuss the appropriate next step.</p><div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row"><Link href="/contact" className="bg-white px-6 py-3 font-bold text-blue-800">Request Service</Link><a href="tel:+12017875657" className="border border-blue-300 px-6 py-3 font-bold">Call (201) 787-5657</a></div></div></section>
  </main>;
}
