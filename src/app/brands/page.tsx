import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Snowflake, Wind, Wrench } from "lucide-react";
import { PUBLIC_BRANDS, type BrandCategory } from "@/data/brands";

export const metadata: Metadata = {
  title: "HVAC & Refrigeration Brands We Service",
  description:
    "Explore HVAC, boiler, commercial refrigeration, and indoor air quality brands serviced by Air2Cool across Morris County and North Jersey.",
  alternates: { canonical: "/brands" },
  openGraph: {
    title: "HVAC & Refrigeration Brands We Service | Air2Cool",
    description:
      "Residential, commercial, boiler, refrigeration, and indoor air quality equipment experience across North Jersey.",
    url: "/brands",
  },
};

const groups: { category: BrandCategory; id: string; intro: string }[] = [
  { category: "Residential / Light Commercial", id: "residential-light-commercial", intro: "Central air, furnaces, heat pumps, ductless systems, air handlers, packaged systems, and controls." },
  { category: "Boilers / Hydronics", id: "boilers-hydronics", intro: "Hydronic, steam, and combination boiler service for applicable residential and commercial systems." },
  { category: "Commercial Refrigeration", id: "commercial-refrigeration", intro: "Walk-ins, reach-ins, prep tables, display cases, ice equipment, and refrigeration components." },
  { category: "Commercial / Industrial", id: "commercial-industrial", intro: "Commercial and industrial equipment experience, including a documented MYCOM compressor overhaul." },
  { category: "Indoor Air Quality", id: "indoor-air-quality", intro: "Filtration, humidity control, ventilation, and whole-building air quality equipment." },
];

export default function BrandsPage() {
  return (
    <main className="bg-white">
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-cyan-300 font-bold tracking-widest uppercase mb-3">Equipment Experience</p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">HVAC &amp; Refrigeration Brands We Service</h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-4xl leading-relaxed">
            Air2Cool services many major makes and models of residential HVAC, light-commercial equipment, boilers, commercial refrigeration, and indoor air quality systems throughout Morris County and North Jersey.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/equipment-we-service" className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-3 rounded-full font-bold">Browse Equipment We Service</Link>
            <Link href="/contact" className="border border-white/40 hover:bg-white/10 px-6 py-3 rounded-full font-bold">Request Service</Link>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          {groups.map((group) => {
            const brands = PUBLIC_BRANDS.filter((brand) => brand.category === group.category);
            if (!brands.length) return null;
            return (
              <div id={group.id} key={group.category} className="scroll-mt-24">
                <div className="max-w-3xl mb-7">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-3">{group.category}</h2>
                  <p className="text-gray-600 text-lg">{group.intro}</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {brands.map((brand) => (
                    <article key={brand.slug} className="border border-slate-200 rounded-2xl p-6 shadow-sm bg-white">
                      <div className="flex items-center gap-3 mb-3">
                        {brand.refrigeration ? <Snowflake className="text-cyan-600" /> : brand.commercial ? <Building2 className="text-cyan-600" /> : brand.category === "Indoor Air Quality" ? <Wind className="text-cyan-600" /> : <Wrench className="text-cyan-600" />}
                        <h3 className="text-xl font-bold text-slate-900">{brand.name}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-4">{brand.summary}</p>
                      {brand.indexed ? (
                        <Link href={`/brands/${brand.slug}`} className="inline-flex items-center gap-2 font-bold text-blue-700 hover:text-blue-900">
                          View {brand.name} service <ArrowRight className="w-4 h-4" />
                        </Link>
                      ) : brand.relatedServices[0] ? (
                        <Link href={brand.relatedServices[0].href} className="inline-flex items-center gap-2 font-bold text-blue-700 hover:text-blue-900">
                          View service options <ArrowRight className="w-4 h-4" />
                        </Link>
                      ) : null}
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-100 py-14">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Don&apos;t see your equipment brand?</h2>
          <p className="text-gray-700 mb-7">This is a representative list, not a limit on the makes and models we can evaluate. Share the manufacturer, model, and symptoms when you request service.</p>
          <a href="tel:+12017875657" className="inline-block bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-full font-bold">Call (201) 787-5657</a>
          <p className="text-sm text-gray-500 mt-6">Brand references describe equipment service experience and do not imply manufacturer authorization, endorsement, or affiliation.</p>
        </div>
      </section>
    </main>
  );
}
