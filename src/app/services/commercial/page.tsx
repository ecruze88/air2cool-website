import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Building2, CheckCircle, Flame, Gauge, MapPin, Refrigerator, Settings, Snowflake, Wrench } from "lucide-react";
import { COMPANY } from "@/config/company";

export const metadata: Metadata = {
  title: "Commercial HVAC & Mechanical Services in North NJ | Air2Cool",
  description: "Commercial HVAC, mechanical maintenance, boilers, chillers, refrigeration, rooftop units, pumps and compressor service in Morris County and North Jersey.",
  keywords: ["commercial HVAC contractor North Jersey", "commercial HVAC Morris County NJ", "commercial mechanical services North Jersey", "commercial HVAC maintenance NJ", "commercial chiller service NJ", "commercial boiler service NJ", "rooftop HVAC service North Jersey"],
  alternates: { canonical: "/services/commercial" },
  openGraph: {
    title: "Commercial HVAC & Mechanical Services in North NJ | Air2Cool",
    description: "Commercial HVAC, boilers, chillers, refrigeration, pumps, compressors and planned mechanical maintenance throughout North Jersey.",
    url: "/services/commercial",
  },
};

const COUNTIES = [
  ["Morris", "/service-areas/morris-county"], ["Sussex", "/service-areas/sussex-county"],
  ["Warren", "/service-areas/warren-county"], ["Essex", "/service-areas/essex-county"],
  ["Passaic", "/service-areas/passaic-county"], ["Union", "/service-areas/union-county"],
  ["Bergen", "/service-areas/bergen-county"], ["Hunterdon", "/service-areas/hunterdon-county"],
  ["Somerset", "/service-areas/somerset-county"],
] as const;

const SERVICE_GROUPS = [
  {
    icon: Building2,
    title: "Commercial HVAC & Heating",
    description: "Service, replacement and planned maintenance for commercial comfort and heating equipment, with scope based on the building and application.",
    items: ["Rooftop units and packaged HVAC systems", "Commercial split systems and air conditioning", "Commercial furnaces and heating systems", "Commercial boilers and hydronic systems", "Boiler and heating circulation pumps", "Chiller service and mechanical support where appropriate", "Mechanical-system troubleshooting"],
  },
  {
    icon: Refrigerator,
    title: "Commercial Refrigeration",
    description: "Dedicated refrigeration service for restaurants, retail operations and other commercial facilities.",
    items: ["Walk-in coolers and walk-in freezers", "Reach-in and restaurant refrigeration", "Condensing units, evaporators and controls", "Ice machines and commercial refrigeration equipment", "R-290 systems where appropriate"],
    href: "/services/commercial-refrigeration",
    linkLabel: "Explore Commercial Refrigeration",
  },
  {
    icon: Settings,
    title: "Mechanical & Specialty Services",
    description: "A practical range of commercial mechanical capabilities for existing equipment, replacements and agreed project scopes.",
    items: ["Commercial mechanical maintenance", "Hydronic, boiler and circulation pumps", "Compressor diagnostics and replacement", "Compressor overhauls where appropriate", "Heat recovery unit installation", "Equipment retrofit and replacement work", "Related HVAC mechanical services"],
  },
];

const FAQS = [
  ["Do you offer commercial HVAC maintenance agreements?", "Yes. Air2Cool prepares commercial maintenance proposals around the facility, equipment, system count, operating requirements and agreed scope."],
  ["Do you service rooftop HVAC units?", "Air2Cool services rooftop units, packaged equipment, commercial split systems, furnaces and other applicable heating and cooling equipment."],
  ["Does Air2Cool service commercial boilers and circulation pumps?", "Yes. Commercial boiler, hydronic and heating-circulation-pump work is available based on the equipment, condition and required scope."],
  ["Do you service commercial chillers?", "Air2Cool provides commercial chiller service and mechanical support where appropriate for the equipment and application. Equipment information is reviewed before scope is confirmed."],
  ["Do you service walk-in coolers and freezers?", "Yes. Air2Cool services applicable walk-ins, reach-ins, condensing units, evaporators, refrigeration controls and related commercial refrigeration equipment."],
  ["Can Air2Cool overhaul commercial compressors?", "Compressor diagnostics, replacement and overhaul work are available where appropriate for the compressor type, equipment, condition and application. Not every compressor is a candidate for overhaul."],
  ["What areas does Air2Cool serve?", "Based in Wharton, Air2Cool serves commercial properties throughout Morris County and across its nine-county North Jersey service territory."],
  ["Can commercial customers qualify for SAVEGREEN incentives?", "Eligible NJNG commercial customers may qualify for SAVEGREEN incentives and On-Bill Repayment Program options. Eligibility, funding, project requirements and terms vary."],
] as const;

export default function CommercialServicesPage() {
  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Service", name: "Commercial HVAC & Mechanical Services",
        description: "Commercial HVAC, mechanical maintenance, boilers, chillers, refrigeration, rooftop units, pumps and compressor service in North Jersey.",
        provider: { "@type": "HVACBusiness", "@id": "https://www.air2cool.com/#organization", name: COMPANY.name, telephone: COMPANY.phone.e164, url: "https://www.air2cool.com" },
        areaServed: COUNTIES.map(([name]) => ({ "@type": "AdministrativeArea", name: `${name} County, NJ` })),
        url: "https://www.air2cool.com/services/commercial", serviceType: "Commercial HVAC and Mechanical Services",
        audience: { "@type": "BusinessAudience", audienceType: "Facility managers, property managers and business owners in North Jersey" },
      }) }} />

      <section className="bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-20">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-widest text-cyan-300 mb-4">Commercial HVAC &amp; Mechanical Contractor</p>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-5">Commercial HVAC &amp; Mechanical Services in North Jersey</h1>
            <p className="text-base md:text-xl leading-relaxed text-slate-200 max-w-3xl mb-8">Commercial HVAC, boilers, chillers, refrigeration, walk-in coolers and freezers, pumps, compressors and mechanical service for businesses and facilities throughout Morris County and North Jersey.</p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <Link href="/contact" className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-3.5 font-bold text-center transition-colors">Request Commercial Service</Link>
              <Link href="/commercial-maintenance-request" className="border border-white/40 hover:bg-white/10 px-6 py-3.5 font-bold text-center transition-colors">Request Maintenance Proposal</Link>
              <a href={COMPANY.phone.href} className="border border-white/40 hover:bg-white/10 px-6 py-3.5 font-bold text-center transition-colors">Call {COMPANY.phone.display}</a>
            </div>
            <p className="mt-7 text-sm text-slate-400">NJ Master HVACR License #{COMPANY.license.masterHvacrNumber}</p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-9 lg:gap-14 items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-700 mb-3">Planned Service</p>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-950 mb-4">Commercial Preventative Maintenance</h2>
            <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-5">Air2Cool provides planned HVAC and mechanical maintenance built around the facility, equipment type, system count, operating requirements and agreed service scope.</p>
            <p className="text-slate-700 leading-relaxed mb-7">Commercial agreements are customized rather than forced into a residential schedule. Customers receive <strong>10% off eligible repairs</strong> and <strong>10% off eligible replacement parts</strong>.</p>
            <div className="flex flex-col sm:flex-row gap-3"><Link href="/services/commercial-maintenance" className="inline-flex justify-center bg-blue-700 hover:bg-blue-800 text-white px-6 py-3.5 font-bold transition-colors">Explore Commercial Maintenance</Link><Link href="/commercial-maintenance-request" className="inline-flex justify-center border border-blue-700 text-blue-800 px-6 py-3.5 font-bold hover:bg-blue-50">Request Maintenance Proposal</Link></div>
          </div>
          <div className="border-l-4 border-cyan-500 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-950 mb-4">Equipment may include</h3>
            <ul className="space-y-3">
              {["Rooftop and packaged HVAC units", "Commercial furnaces and split systems", "Commercial boilers and hydronic circulation pumps", "Chillers where appropriate for the equipment and application", "Refrigeration and walk-in systems", "Mechanical equipment covered by the agreement"].map((item) => (
                <li key={item} className="flex gap-3 text-sm md:text-base text-slate-700"><CheckCircle className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" /><span>{item}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-9 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-950 mb-4">Commercial Service Capabilities</h2>
            <p className="text-base md:text-lg text-slate-700 leading-relaxed">From rooftop HVAC and commercial boilers to chillers, refrigeration, pumps, compressors and specialty mechanical equipment, Air2Cool handles a wide range of commercial HVAC and mechanical service needs.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-7 lg:gap-9">
            {SERVICE_GROUPS.map((group) => {
              const Icon = group.icon;
              return <article key={group.title} className="border-t-4 border-blue-700 pt-6">
                <Icon className="w-8 h-8 text-blue-700 mb-4" />
                <h3 className="text-xl md:text-2xl font-bold text-slate-950 mb-3">{group.title}</h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-5">{group.description}</p>
                <ul className="space-y-2.5 mb-5">{group.items.map((item) => <li key={item} className="flex gap-2.5 text-sm text-slate-700"><CheckCircle className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" /><span>{item}</span></li>)}</ul>
                {group.href && <Link href={group.href} className="font-bold text-blue-700 hover:text-blue-900 underline underline-offset-4">{group.linkLabel} &rarr;</Link>}
              </article>;
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <Wrench className="w-9 h-9 text-cyan-400 mb-4" />
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4">Compressor Service &amp; Overhauls</h2>
            <p className="text-slate-200 leading-relaxed mb-5">Air2Cool provides compressor diagnostics, service, replacement and overhaul work where appropriate for the compressor type, equipment, condition and application. Overhaul is evaluated against equipment condition and replacement options rather than treated as the automatic answer.</p>
            <div className="border-l-4 border-cyan-400 pl-5"><h3 className="font-bold text-lg mb-2">MYCOM compressor experience</h3><p className="text-slate-300 leading-relaxed">Air2Cool has hands-on experience servicing and overhauling MYCOM reciprocating compressors, including F6WB equipment in large commercial applications.</p></div>
          </div>
          <div>
            <Snowflake className="w-9 h-9 text-cyan-400 mb-4" />
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Chillers &amp; Specialty Equipment</h2>
            <p className="text-slate-200 leading-relaxed mb-5">Commercial chiller service and mechanical support are available where appropriate for the equipment and application. Air2Cool also installs heat recovery units, with equipment and installation scope determined by the building and application.</p>
            <Link href="/equipment-we-service" className="font-bold text-cyan-300 hover:text-cyan-200 underline underline-offset-4">View Equipment Experience &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-9"><h2 className="text-2xl md:text-4xl font-extrabold text-slate-950 mb-4">Commercial Boilers &amp; Hydronic Pumps</h2><p className="text-slate-700 text-base md:text-lg leading-relaxed">Air2Cool services applicable commercial boiler systems, multi-boiler applications, hydronic distribution and boiler or heating circulation pumps. The equipment, configuration and condition determine the service or maintenance scope.</p></div>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/services/commercial-boiler-services" className="group border border-slate-300 bg-white p-6 hover:border-blue-600 transition-colors"><Flame className="w-8 h-8 text-red-600 mb-4" /><h3 className="text-xl font-bold text-slate-950 group-hover:text-blue-700 mb-2">Commercial Boiler Services</h3><p className="text-slate-600 mb-4">Equipment-specific commercial boiler maintenance, service and proposal planning.</p><span className="font-bold text-blue-700">Explore Commercial Boiler Services &rarr;</span></Link>
            <Link href="/services/heating-pump-services" className="group border border-slate-300 bg-white p-6 hover:border-blue-600 transition-colors"><Gauge className="w-8 h-8 text-blue-700 mb-4" /><h3 className="text-xl font-bold text-slate-950 group-hover:text-blue-700 mb-2">Heating &amp; Circulation Pumps</h3><p className="text-slate-600 mb-4">Diagnosis, service and replacement planning for applicable boiler and hydronic circulation pumps.</p><span className="font-bold text-blue-700">Explore Heating Pump Services &rarr;</span></Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8"><div><p className="text-sm font-bold uppercase tracking-widest text-blue-700 mb-2">Documented Air2Cool Work</p><h2 className="text-2xl md:text-4xl font-extrabold text-slate-950">Commercial Project Proof</h2></div><Link href="/projects" className="font-bold text-blue-700 hover:text-blue-900 underline underline-offset-4">View More Projects &rarr;</Link></div>
          <figure className="mx-auto mb-10 w-full max-w-[280px]"><div className="aspect-[9/16] overflow-hidden bg-slate-950 shadow-md"><video controls muted preload="metadata" playsInline className="h-full w-full object-cover" aria-label="Commercial triple boiler installation video"><source src="/commercial_triple_Boiler_install.mp4" type="video/mp4" /></video></div><figcaption className="mt-3 text-center text-sm leading-relaxed text-slate-700"><strong>Featured multi-boiler project:</strong> commercial triple-boiler installation by Air2Cool.</figcaption></figure>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              ["/trane_3_phase_scroll_compressor_rooftop_unit_replacement.webp", "Trane three-phase scroll compressor rooftop unit replacement by Air2Cool", "Trane rooftop equipment", "Three-phase scroll-compressor replacement work in North Jersey."],
              ["/commercial_install_ductwork_setup.webp", "Commercial HVAC ductwork installation setup by Air2Cool", "Commercial HVAC installation", "Documented ductwork setup on a North Jersey project."],
              ["/commercial-rtu.jpeg", "Commercial rooftop HVAC equipment serviced by Air2Cool", "Commercial rooftop HVAC", "Field experience with packaged rooftop equipment."],
            ].map(([src, alt, title, caption]) => <figure key={src}><div className="relative aspect-video overflow-hidden bg-slate-100"><Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain" /></div><figcaption className="mt-3 text-sm text-slate-700"><strong>{title}:</strong> {caption}</figcaption></figure>)}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 border-y border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-14">
          <div><h2 className="text-2xl md:text-3xl font-extrabold text-slate-950 mb-4">Commercial Equipment Experience</h2><p className="text-slate-700 leading-relaxed mb-5">Air2Cool works with all major commercial HVAC, refrigeration, boiler, hydronic and compressor brands, including Trane, True Refrigeration, Heatcraft, Hussmann, Beverage-Air, Manitowoc, MYCOM, NTI, Lochinvar, Weil-McLain and Navien.</p><p className="text-sm text-slate-500 mb-5">Brand references describe independent service experience and do not imply manufacturer authorization or endorsement.</p><Link href="/equipment-we-service" className="font-bold text-blue-700 hover:text-blue-900 underline underline-offset-4">Browse Equipment We Service &rarr;</Link></div>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5 content-start">{[
            ["HVAC & rooftop equipment", "Trane and other major commercial HVAC brands"], ["Commercial refrigeration", "True Refrigeration, Heatcraft, Hussmann, Beverage-Air, Manitowoc and other major brands"], ["Compressors", "MYCOM and other major commercial compressor brands"], ["Boilers & hydronics", "NTI, Lochinvar, Weil-McLain, Navien and other major boiler and hydronic brands"],
          ].map(([title, text]) => <div key={title} className="border-t border-slate-300 pt-4"><h3 className="font-bold text-slate-950 mb-1">{title}</h3><p className="text-sm text-slate-600">{text}</p></div>)}</div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-emerald-950 text-white">
        <div className="max-w-5xl mx-auto px-6"><p className="text-sm font-bold uppercase tracking-widest text-emerald-300 mb-3">JCP&amp;L and NJNG</p><h2 className="text-2xl md:text-4xl font-extrabold mb-4">Commercial Incentives &amp; Utility Programs</h2><p className="text-base md:text-lg text-emerald-50 leading-relaxed mb-6">Air2Cool participates in qualifying commercial energy-efficiency pathways through JCP&amp;L and NJNG. Program availability, equipment eligibility, incentives and approval depend on current utility requirements.</p><Link href="/commercial-incentives" className="inline-flex bg-white text-emerald-950 px-6 py-3.5 font-bold hover:bg-emerald-50 transition-colors">Explore Commercial Incentives &rarr;</Link></div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-14">
          <div><MapPin className="w-8 h-8 text-blue-700 mb-4" /><h2 className="text-2xl md:text-3xl font-extrabold text-slate-950 mb-4">Based in Wharton. Serving North Jersey.</h2><p className="text-slate-700 leading-relaxed mb-6">Based in Wharton, Air2Cool serves commercial properties throughout Morris County and across North Jersey. Service scope and scheduling depend on the equipment, location and current workload.</p><div className="grid grid-cols-2 sm:grid-cols-3 gap-3">{COUNTIES.map(([name, href]) => <Link key={name} href={href} className="border-b border-slate-300 py-2 text-sm font-semibold text-blue-700 hover:border-blue-700">{name} County</Link>)}</div></div>
          <div><h2 className="text-2xl md:text-3xl font-extrabold text-slate-950 mb-5">Commercial Service for Working Facilities</h2><p className="text-slate-700 leading-relaxed mb-5">Air2Cool works with facility managers, property managers and business owners responsible for restaurants, retail properties, warehouses, offices, multifamily buildings and other commercial facilities with applicable HVAC, refrigeration or mechanical equipment.</p><p className="text-slate-700 leading-relaxed">Send the equipment type, manufacturer and model information when available, along with the operating concern or project objective. That context helps the team determine the appropriate next step.</p></div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6"><h2 className="text-2xl md:text-4xl font-extrabold text-slate-950 mb-8">Commercial Service FAQ</h2><div className="divide-y divide-slate-300 border-y border-slate-300">{FAQS.map(([question, answer]) => <details key={question} className="group py-5"><summary className="cursor-pointer list-none flex items-start justify-between gap-5 font-bold text-slate-950"><span>{question}</span><span aria-hidden="true" className="text-blue-700 text-xl leading-none group-open:rotate-45 transition-transform">+</span></summary><p className="pt-3 pr-8 text-slate-700 leading-relaxed">{answer}</p></details>)}</div></div>
      </section>

      <section className="bg-blue-800 text-white py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6 text-center"><h2 className="text-2xl md:text-4xl font-extrabold mb-4">Discuss Your Commercial Equipment or Facility</h2><p className="text-blue-100 text-base md:text-lg mb-8">Request service for an operating issue or start a maintenance proposal for covered equipment.</p><div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3"><Link href="/contact" className="bg-white text-blue-800 px-6 py-3.5 font-bold hover:bg-blue-50 transition-colors">Request Commercial Service</Link><Link href="/commercial-maintenance-request" className="border border-white/50 px-6 py-3.5 font-bold hover:bg-white/10 transition-colors">Request Maintenance Proposal</Link><a href={COMPANY.phone.href} className="border border-white/50 px-6 py-3.5 font-bold hover:bg-white/10 transition-colors">Call {COMPANY.phone.display}</a></div></div>
      </section>
    </main>
  );
}
