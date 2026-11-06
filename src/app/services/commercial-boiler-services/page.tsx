import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Building2, CheckCircle, Flame, Settings, Wrench } from "lucide-react";
import { COMMERCIAL_MAINTENANCE_PLAN } from "@/config/company";

export const metadata: Metadata = {
  title: "Commercial Boiler Installation & Repair North Jersey | Air2Cool",
  description: "Commercial boiler installation, repair, service and maintenance for facilities across North Jersey. Air2Cool works with all major commercial boiler brands.",
  alternates: { canonical: "/services/commercial-boiler-services" },
};

const SERVICES = [
  ["Commercial boiler installation", "Equipment selection, replacement planning and installation based on the facility, approved scope and application."],
  ["Boiler repair and service", "Diagnosis and corrective service for applicable commercial boiler systems, controls and operating concerns."],
  ["Preventative maintenance", "Equipment-specific inspection and maintenance scopes for commercial properties and facility teams."],
  ["Hydronic system support", "Service planning for circulation pumps, controls and related components within commercial heating systems."],
] as const;

const BRANDS = [
  "Cleaver-Brooks", "Fulton", "Weil-McLain", "Lochinvar", "AERCO", "Patterson-Kelley",
  "Burnham Commercial", "Laars", "Raypak", "NTI", "Navien", "Viessmann", "Bosch",
  "Peerless", "Miura", "Hurst", "Superior Boiler",
] as const;

const INFO = [
  "Property type and service location",
  "Boiler manufacturer, model and equipment count",
  "Whether the equipment currently operates",
  "Current symptoms and recent service history",
  "Site access and preferred service timing",
] as const;

export default function CommercialBoilerServicesPage() {
  return <main className="bg-white text-slate-950">
    <section className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 md:py-20 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Building2 className="mb-4 h-10 w-10 text-orange-400" />
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-orange-300">Commercial Boiler Specialists</p>
          <h1 className="mb-5 text-4xl font-extrabold leading-tight md:text-6xl">Commercial Boiler Installation, Repair &amp; Service</h1>
          <p className="mb-8 max-w-3xl text-lg leading-relaxed text-slate-200 md:text-xl">Commercial boiler installation, repair, maintenance and hydronic-system support for property owners, managers and facility teams across North Jersey.</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/contact?service=commercial-boiler" className="inline-flex min-h-12 items-center justify-center bg-orange-600 px-6 py-3 font-bold text-white hover:bg-orange-700">Request Commercial Boiler Service</Link>
            <Link href="/commercial-maintenance-request" className="inline-flex min-h-12 items-center justify-center border border-slate-500 px-6 py-3 font-bold text-white hover:border-white hover:bg-white/10">Request a Maintenance Proposal</Link>
          </div>
        </div>
        <figure>
          <div className="relative aspect-[4/3] overflow-hidden border border-slate-700 bg-slate-900">
            <Image src="/nti_boiler_completed_install.webp" alt="Completed high-efficiency boiler installation by Air2Cool" fill priority sizes="(max-width: 1024px) 100vw, 40vw" className="object-contain" />
          </div>
          <figcaption className="mt-3 text-sm text-slate-400">Completed boiler installation by Air2Cool.</figcaption>
        </figure>
      </div>
    </section>

    <section className="py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-3xl">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-blue-700">Complete Boiler Support</p>
          <h2 className="mb-4 text-3xl font-extrabold md:text-4xl">Service built around the equipment and facility</h2>
          <p className="text-lg leading-relaxed text-slate-700">Commercial boiler work begins with the equipment, application and operating concern. Installation, planned maintenance and corrective repair are evaluated as distinct scopes.</p>
        </div>
        <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
          {SERVICES.map(([title, description], index) => {
            const Icon = index === 0 ? Flame : index === 1 ? Wrench : Settings;
            return <article key={title} className="border-t-4 border-blue-700 pt-5">
              <Icon className="mb-3 h-7 w-7 text-orange-600" aria-hidden="true" />
              <h3 className="mb-2 text-xl font-bold">{title}</h3>
              <p className="leading-relaxed text-slate-700">{description}</p>
            </article>;
          })}
        </div>
      </div>
    </section>

    <section className="border-y border-slate-200 bg-slate-50 py-14 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-blue-700">Commercial Boiler Brands</p>
          <h2 className="mb-4 text-3xl font-extrabold md:text-4xl">Experience across all major manufacturers</h2>
          <p className="leading-relaxed text-slate-700">Air2Cool installs, repairs and services all major commercial boiler brands, including the manufacturers listed here.</p>
          <p className="mt-4 text-sm leading-relaxed text-slate-500">Brand references describe independent service experience and do not imply manufacturer authorization or endorsement.</p>
        </div>
        <ul className="grid grid-cols-2 gap-x-8 sm:grid-cols-3">
          {BRANDS.map((brand) => <li key={brand} className="border-b border-slate-300 py-3 font-semibold text-slate-800">{brand}</li>)}
        </ul>
      </div>
    </section>

    <section className="py-14 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="mb-4 text-3xl font-extrabold">Planning service for your facility</h2>
          <p className="mb-4 leading-relaxed text-slate-700">Air2Cool can assess the boiler, circulation pumps, controls and related heating components that fall within the agreed project scope. Access, shutdown requirements and service timing are coordinated with the property.</p>
          <p className="leading-relaxed text-slate-700">For repair concerns, share current operating conditions and symptoms. For installation or replacement planning, include available equipment and building information when possible.</p>
        </div>
        <div className="border border-slate-300 bg-white p-6 md:p-8">
          <h2 className="mb-5 text-2xl font-bold">Information to provide</h2>
          <ul className="space-y-4">
            {INFO.map((item) => <li key={item} className="flex gap-3"><CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-orange-600" aria-hidden="true" /><span>{item}</span></li>)}
          </ul>
        </div>
      </div>
    </section>

    <section className="bg-slate-900 py-12 text-white md:py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-4 text-3xl font-extrabold">Commercial boiler maintenance agreements</h2>
        <p className="mb-4 max-w-4xl leading-relaxed text-slate-200">Visit frequency, equipment coverage and service scope are defined by the agreement. {COMMERCIAL_MAINTENANCE_PLAN.description}</p>
        <p className="mb-7 max-w-4xl leading-relaxed text-slate-300">Each proposal identifies the work, materials and equipment included for the property.</p>
        <Link href="/commercial-maintenance-request" className="inline-flex min-h-12 items-center justify-center bg-orange-600 px-6 py-3 font-bold hover:bg-orange-700">Request a Commercial Maintenance Proposal</Link>
      </div>
    </section>

    <section className="mx-auto flex max-w-7xl flex-wrap gap-x-7 gap-y-4 px-6 py-12">
      <Link href="/services/heating-pump-services" className="font-bold text-blue-700 underline underline-offset-4">Heating circulation pump service</Link>
      <Link href="/services/commercial" className="font-bold text-blue-700 underline underline-offset-4">Commercial HVAC &amp; mechanical services</Link>
      <Link href="/services/commercial-maintenance" className="font-bold text-blue-700 underline underline-offset-4">Commercial maintenance</Link>
      <Link href="/services/commercial-refrigeration" className="font-bold text-blue-700 underline underline-offset-4">Commercial refrigeration</Link>
    </section>
  </main>;
}
