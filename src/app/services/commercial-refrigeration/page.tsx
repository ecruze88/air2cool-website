import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Clock, Gauge, Phone, Snowflake, Wrench } from "lucide-react";
import { COMPANY, COMMERCIAL_MAINTENANCE_PLAN } from "@/config/company";

export const metadata: Metadata = {
  title: "Commercial Refrigeration Service North Jersey | Air2Cool",
  description: "Commercial refrigeration service, repair, maintenance and replacement for walk-in coolers, walk-in freezers, reach-ins and ice machines in Morris County and North Jersey.",
  alternates: { canonical: "/services/commercial-refrigeration" },
  openGraph: {
    title: "Commercial Refrigeration Service North Jersey | Air2Cool",
    description: "Service and repair for commercial refrigeration equipment, walk-ins, reach-ins and ice machines across Morris County and North Jersey.",
    url: "/services/commercial-refrigeration",
  },
};

const SERVICES = [
  ["Walk-in coolers, freezers and boxes", "Service for temperature, airflow, controls, evaporator, condensing-equipment and compressor concerns."],
  ["Reach-in refrigeration", "Commercial reach-in refrigerators and freezers, including applicable foodservice and retail equipment."],
  ["Restaurant refrigeration", "Service for applicable prep, storage, display and ice equipment used in restaurant and foodservice operations."],
  ["Condensing units and evaporators", "Diagnosis and service planning for applicable condensing equipment, evaporators, fans, controls and defrost components."],
  ["Ice machines", "Commercial ice-equipment diagnosis, service and maintenance where appropriate for the equipment and application."],
  ["Replacement and maintenance", "Equipment-condition evaluation, replacement planning and customized preventative-maintenance scopes."],
] as const;

const BRANDS = [
  ["True Refrigeration", "Reach-ins, commercial refrigerators and freezers, and applicable R-290 equipment."],
  ["Heatcraft", "Applicable condensing units, evaporators and walk-in refrigeration equipment."],
  ["Hussmann", "Applicable commercial refrigeration equipment and controls."],
  ["Beverage-Air", "Reach-in and commercial foodservice refrigeration equipment."],
  ["Manitowoc", "Applicable commercial ice equipment."],
] as const;

const FAQS = [
  ["Do you service walk-in coolers and freezers?", "Yes. Air2Cool services applicable walk-in coolers, walk-in freezers and walk-in boxes across Morris County and North Jersey, including temperature, controls, evaporator, condensing-equipment and compressor concerns."],
  ["Do you service restaurant refrigeration?", "Yes. Air2Cool works on applicable restaurant and foodservice refrigeration, including walk-ins, reach-ins, commercial refrigerators and freezers, prep equipment and ice machines."],
  ["Do you work on R-290 refrigeration equipment?", "Yes. Air2Cool has confirmed capability with applicable R-290 commercial refrigeration equipment. Service depends on the equipment, condition and required scope."],
  ["Do you service commercial ice machines?", "Air2Cool services applicable commercial ice equipment, including Manitowoc equipment represented in the company service architecture."],
  ["Do you offer refrigeration preventative maintenance?", `Yes. Commercial refrigeration equipment can be included in a customized agreement based on the facility, equipment, system count and agreed scope. ${COMMERCIAL_MAINTENANCE_PLAN.description}`],
  ["What commercial refrigeration brands do you service?", "Verified service experience represented in Air2Cool's current equipment architecture includes True Refrigeration, Heatcraft, Hussmann, Beverage-Air and Manitowoc."],
  ["Do you replace refrigeration compressors?", "Air2Cool diagnoses applicable refrigeration compressor and system concerns and can evaluate compressor replacement where appropriate. Overhaul depends on the compressor type, equipment condition and application; not every compressor is rebuildable."],
  ["What areas does Air2Cool serve?", "Air2Cool is based in Wharton and serves commercial customers throughout Morris County and surrounding North Jersey areas. Scheduling depends on the location, equipment and current workload."],
] as const;

export default function CommercialRefrigerationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Commercial Refrigeration Service",
    description: "Commercial refrigeration service, repair, maintenance and replacement for walk-in coolers, freezers, reach-ins, ice machines and related equipment in North Jersey.",
    provider: { "@type": "HVACBusiness", "@id": "https://www.air2cool.com/#organization", name: COMPANY.name, telephone: COMPANY.phone.e164, url: "https://www.air2cool.com" },
    areaServed: [{ "@type": "AdministrativeArea", name: "Morris County, NJ" }, { "@type": "AdministrativeArea", name: "North Jersey" }],
    url: "https://www.air2cool.com/services/commercial-refrigeration",
    serviceType: "Commercial Refrigeration Service",
  };

  return <main className="bg-white text-slate-950">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

    <section className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 pb-14 pt-10 md:pb-20 md:pt-14 xl:pt-28 2xl:pt-36">
        <Link href="/services/commercial" className="mb-8 inline-flex text-sm font-bold text-cyan-300 underline underline-offset-4 hover:text-cyan-200">&larr; All Commercial Services</Link>
        <div className="max-w-4xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-cyan-300">Commercial Refrigeration</p>
          <h1 className="mb-5 text-4xl font-extrabold leading-tight md:text-6xl">Commercial Refrigeration Service in North Jersey</h1>
          <p className="mb-8 max-w-3xl text-lg leading-relaxed text-slate-200 md:text-xl">Commercial refrigeration service, repair, replacement and maintenance for walk-in coolers and freezers, reach-ins, ice machines, condensing equipment, evaporators and refrigeration systems throughout Morris County and North Jersey.</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/contact?service=commercial-refrigeration" className="inline-flex min-h-12 items-center justify-center bg-cyan-500 px-6 py-3 font-bold text-slate-950 hover:bg-cyan-400">Request Refrigeration Service</Link>
            <Link href="/commercial-maintenance-request" className="inline-flex min-h-12 items-center justify-center border border-slate-500 px-6 py-3 font-bold text-white hover:border-white hover:bg-white/10">Request Commercial Maintenance</Link>
            <a href={COMPANY.phone.href} className="inline-flex min-h-12 items-center justify-center gap-2 px-4 py-3 font-bold text-white underline underline-offset-4"><Phone className="h-4 w-4" aria-hidden="true" />Call {COMPANY.phone.display}</a>
          </div>
          <p className="mt-6 text-sm text-slate-400">NJ Master HVACR License #{COMPANY.license.masterHvacrNumber}</p>
        </div>
      </div>
    </section>

    <section className="py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-3xl"><p className="mb-2 text-sm font-bold uppercase tracking-widest text-blue-700">Equipment &amp; Service Coverage</p><h2 className="mb-4 text-3xl font-extrabold md:text-4xl">Commercial refrigeration equipment we service</h2><p className="text-lg leading-relaxed text-slate-700">Air2Cool supports applicable refrigeration equipment for restaurants, foodservice, retail and commercial facilities. The manufacturer, model, refrigerant, system configuration and condition determine the available service path.</p></div>
        <div className="grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(([title, text], index) => {
            const Icon = index === 0 ? Snowflake : index === 4 ? Gauge : Wrench;
            return <article key={title} className="border-t-4 border-cyan-600 pt-5"><Icon className="mb-3 h-7 w-7 text-blue-700" aria-hidden="true" /><h3 className="mb-2 text-xl font-bold">{title}</h3><p className="leading-relaxed text-slate-700">{text}</p></article>;
          })}
        </div>
      </div>
    </section>

    <section className="border-y border-slate-200 bg-slate-50 py-14 md:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 sm:px-6 md:gap-12 lg:grid-cols-[minmax(340px,420px)_1fr] lg:gap-16">
        <figure className="mx-auto w-full max-w-[420px]">
          <div className="aspect-[25/44] overflow-hidden bg-slate-950 shadow-lg">
            <video controls muted playsInline preload="metadata" className="h-full w-full object-contain" aria-label="Air2Cool walk-in freezer installation and commissioning project">
              <source src="/walk_in_freezer_install.mp4" type="video/mp4" />
            </video>
          </div>
          <figcaption className="mt-3 text-sm leading-relaxed text-slate-600">Air2Cool walk-in freezer installation and commissioning project.</figcaption>
        </figure>
        <div>
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-blue-700">Featured Refrigeration Project</p>
          <h2 className="mb-4 text-3xl font-extrabold md:text-4xl">Walk-In Freezer Installation &amp; Commissioning</h2>
          <p className="mb-5 text-lg leading-relaxed text-slate-700">This documented Air2Cool project shows a walk-in freezer installation prepared and commissioned for commercial refrigeration service. Project scope depends on the equipment, application and site requirements.</p>
          <h3 className="mb-3 text-lg font-bold text-slate-950">Walk-in refrigeration support</h3>
          <ul className="space-y-3 text-slate-700">
            {["Walk-in coolers, freezers and boxes", "Evaporator and condensing-equipment concerns", "Refrigeration controls and defrost components", "Compressor and refrigerant-system evaluation", "Preventative maintenance and replacement planning"].map((item) => <li key={item} className="flex gap-3"><CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-cyan-700" aria-hidden="true" /><span>{item}</span></li>)}
          </ul>
        </div>
      </div>
    </section>

    <section className="py-14 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div><p className="mb-2 text-sm font-bold uppercase tracking-widest text-blue-700">Manufacturer Experience</p><h2 className="mb-4 text-3xl font-extrabold md:text-4xl">Commercial Refrigeration Brands We Service</h2><p className="leading-relaxed text-slate-700">These manufacturers are represented in Air2Cool&apos;s verified commercial-refrigeration service architecture.</p><p className="mt-4 text-sm leading-relaxed text-slate-500">Brand references indicate independent service experience and do not imply manufacturer authorization or endorsement.</p></div>
        <div className="grid gap-x-8 sm:grid-cols-2">
          {BRANDS.map(([brand, context]) => <article key={brand} className="border-t border-slate-300 py-5"><h3 className="mb-1 text-lg font-bold">{brand}</h3><p className="text-sm leading-relaxed text-slate-600">{context}</p></article>)}
        </div>
      </div>
    </section>

    <section className="border-y border-slate-200 bg-slate-50 py-14 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:gap-14">
        <div><h2 className="mb-4 text-3xl font-extrabold">R-290 Commercial Refrigeration</h2><p className="leading-relaxed text-slate-700">Air2Cool services applicable R-290 hydrocarbon commercial refrigeration equipment. R-290 is used in certain commercial refrigeration systems; the equipment label, manufacturer requirements and system design determine the appropriate service procedure and scope.</p><Link href="/equipment-we-service#commercial-refrigeration" className="mt-5 inline-flex font-bold text-blue-700 underline underline-offset-4">Browse refrigeration equipment &rarr;</Link></div>
        <div><h2 className="mb-4 text-3xl font-extrabold">Refrigeration Compressor Service</h2><p className="leading-relaxed text-slate-700">Air2Cool provides diagnostics, compressor replacement and system evaluation for applicable commercial refrigeration equipment. Overhaul is considered only where appropriate for the compressor type, equipment condition and application; not every compressor is rebuildable.</p><Link href="/services/commercial" className="mt-5 inline-flex font-bold text-blue-700 underline underline-offset-4">Explore Commercial HVAC &amp; Mechanical Services &rarr;</Link></div>
      </div>
    </section>

    <section className="bg-slate-900 py-14 text-white md:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div><p className="mb-2 text-sm font-bold uppercase tracking-widest text-cyan-300">Customized Agreements</p><h2 className="mb-4 text-3xl font-extrabold md:text-4xl">Commercial Refrigeration Maintenance</h2><p className="mb-5 text-lg leading-relaxed text-slate-200">Air2Cool can include applicable commercial refrigeration equipment in a customized commercial maintenance agreement based on the facility, equipment, system count, operating requirements and agreed scope.</p><ul className="mb-7 space-y-3 text-slate-200"><li className="flex gap-3"><CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" aria-hidden="true" />10% off eligible repairs</li><li className="flex gap-3"><CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" aria-hidden="true" />10% off eligible replacement parts</li></ul><div className="flex flex-col gap-3 sm:flex-row"><Link href="/services/commercial-maintenance" className="inline-flex min-h-12 items-center justify-center bg-cyan-500 px-6 py-3 font-bold text-slate-950 hover:bg-cyan-400">Explore Commercial Maintenance</Link><Link href="/commercial-maintenance-request" className="inline-flex min-h-12 items-center justify-center border border-slate-500 px-6 py-3 font-bold hover:border-white">Request Maintenance Proposal</Link></div></div>
        <div className="border-l-4 border-orange-500 pl-6"><Clock className="mb-4 h-8 w-8 text-orange-400" aria-hidden="true" /><h2 className="mb-3 text-2xl font-extrabold">Urgent refrigeration problem?</h2><p className="mb-5 leading-relaxed text-slate-300">Air2Cool&apos;s 24/7 emergency service line is available for urgent commercial refrigeration concerns. Dispatch and arrival timing depend on technician availability, location, traffic, weather, call volume and equipment needs.</p><a href={COMPANY.phone.href} className="inline-flex min-h-12 items-center gap-2 bg-orange-600 px-6 py-3 font-bold hover:bg-orange-700"><Phone className="h-5 w-5" aria-hidden="true" />Call {COMPANY.phone.display}</a></div>
      </div>
    </section>

    <section className="py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-3xl"><h2 className="mb-4 text-3xl font-extrabold md:text-4xl">A straightforward commercial service process</h2><p className="leading-relaxed text-slate-700">Clear equipment information helps Air2Cool identify the appropriate next step without overpromising a repair path before diagnosis.</p></div>
        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">{[
          ["1", "Describe the equipment and operating issue."], ["2", "Provide manufacturer and model information when available."], ["3", "Air2Cool evaluates the appropriate service path."], ["4", "Repair, replacement or maintenance scope is based on equipment condition."],
        ].map(([number, text]) => <li key={number} className="border-t-4 border-blue-700 pt-4"><span className="mb-2 block text-sm font-bold text-blue-700">STEP {number}</span><p className="font-semibold leading-relaxed">{text}</p></li>)}</ol>
      </div>
    </section>

    <section className="border-y border-slate-200 bg-slate-50 py-12 md:py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2 lg:gap-14"><div><h2 className="mb-4 text-2xl font-extrabold md:text-3xl">Commercial Incentives &amp; Utility Programs</h2><p className="mb-5 leading-relaxed text-slate-700">Qualifying commercial refrigeration or HVAC efficiency projects may be eligible for applicable JCP&amp;L or NJNG programs. Equipment eligibility, funding and approval depend on current program requirements.</p><Link href="/commercial-incentives" className="font-bold text-blue-700 underline underline-offset-4">Explore Commercial Incentives &rarr;</Link></div><div><h2 className="mb-4 text-2xl font-extrabold md:text-3xl">Related commercial capabilities</h2><div className="flex flex-col items-start gap-3"><Link href="/services/commercial" className="font-bold text-blue-700 underline underline-offset-4">Commercial HVAC &amp; mechanical services</Link><Link href="/services/commercial-boiler-services" className="font-bold text-blue-700 underline underline-offset-4">Commercial boiler services</Link><Link href="/projects" className="font-bold text-blue-700 underline underline-offset-4">Air2Cool project portfolio</Link></div></div></div>
    </section>

    <section className="py-14 md:py-20">
      <div className="mx-auto max-w-4xl px-6"><h2 className="mb-8 text-center text-3xl font-extrabold md:text-4xl">Commercial Refrigeration FAQ</h2><div className="divide-y divide-slate-200 border-y border-slate-200">{FAQS.map(([question, answer]) => <article key={question} className="py-6"><h3 className="mb-2 text-lg font-bold">{question}</h3><p className="leading-relaxed text-slate-700">{answer}</p></article>)}</div></div>
    </section>

    <section className="bg-blue-800 py-12 text-white md:py-16"><div className="mx-auto max-w-4xl px-6 text-center"><h2 className="mb-4 text-3xl font-extrabold md:text-4xl">Request Commercial Refrigeration Service</h2><p className="mb-7 text-lg text-blue-100">Tell Air2Cool about the equipment, manufacturer, model and operating concern when available.</p><div className="flex flex-col justify-center gap-3 sm:flex-row"><Link href="/contact?service=commercial-refrigeration" className="inline-flex min-h-12 items-center justify-center bg-white px-7 py-3 font-bold text-blue-800 hover:bg-blue-50">Request Refrigeration Service</Link><a href={COMPANY.phone.href} className="inline-flex min-h-12 items-center justify-center border border-blue-300 px-7 py-3 font-bold hover:bg-blue-700">Call {COMPANY.phone.display}</a></div></div></section>
  </main>;
}
