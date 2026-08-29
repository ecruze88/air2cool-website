import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle, Phone, Wrench } from "lucide-react";
import { COMPANY } from "@/config/company";
import { getBrandBySlug, INDEXED_BRANDS } from "@/data/brands";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return INDEXED_BRANDS.map((brand) => ({ slug: brand.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand?.indexed) return {};
  return {
    title: `${brand.seoTitle} | Air2Cool`,
    description: brand.seoDescription,
    alternates: { canonical: `/brands/${brand.slug}` },
    openGraph: { title: brand.seoTitle, description: brand.seoDescription, url: `/brands/${brand.slug}` },
  };
}

export default async function BrandPage({ params }: Props) {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand?.indexed || !brand.headline || !brand.serviceOverview || !brand.commonProblems || !brand.maintenanceGuidance || !brand.replacementGuidance || !brand.faqs) notFound();

  const pageUrl = `https://www.air2cool.com/brands/${brand.slug}`;
  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Service", name: brand.headline,
        description: brand.summary, url: pageUrl,
        provider: { "@type": "HVACBusiness", "@id": "https://www.air2cool.com/#organization", name: COMPANY.name, telephone: COMPANY.phone.e164 },
        areaServed: COMPANY.serviceCounties.map((county) => ({ "@type": "AdministrativeArea", name: `${county.fullName}, NJ` })),
        serviceType: brand.equipmentTypes,
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: brand.faqs.map((faq) => ({
          "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }) }} />

      <div className="border-b"><div className="max-w-7xl mx-auto px-6 py-3 text-sm"><Link href="/brands" className="text-blue-700 font-semibold">← All Brands</Link></div></div>
      <section className="bg-gradient-to-br from-blue-950 via-slate-900 to-cyan-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-cyan-300 font-bold uppercase tracking-widest mb-3">Morris County &amp; North Jersey</p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">{brand.headline}</h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-4xl leading-relaxed">{brand.summary}</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a href={COMPANY.phone.href} className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full font-bold"><Phone className="w-5 h-5" /> Call {COMPANY.phone.display}</a>
            <Link href="/contact" className="border border-white/40 hover:bg-white/10 px-6 py-3 rounded-full font-bold">Request Service</Link>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20"><div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.5fr_1fr] gap-12">
        <div><h2 className="text-3xl font-extrabold text-slate-900 mb-6">{brand.name} HVAC Service</h2><div className="space-y-5 text-gray-700 text-lg leading-relaxed">{brand.serviceOverview.map((text) => <p key={text}>{text}</p>)}</div></div>
        <aside className="space-y-5">
          <div className="bg-slate-50 border rounded-2xl p-7"><h2 className="text-xl font-bold mb-4">Equipment We Work On</h2><ul className="space-y-3">{brand.equipmentTypes.map((item) => <li key={item} className="flex gap-2"><CheckCircle className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />{item}</li>)}</ul></div>
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-7">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Air2Cool Capability</h2>
            <div className="space-y-4 text-gray-700">
              <p><strong className="text-slate-900">Service &amp; Repair:</strong> {brand.service ? `Available for applicable ${brand.name} equipment.` : `Not currently listed for ${brand.name} equipment.`}</p>
              <p><strong className="text-slate-900">Replacement / Installation:</strong> {brand.install ? `Available after evaluating the property, application, and existing ${brand.name} system.` : `Air2Cool does not currently present ${brand.name} as an installation offering.`}</p>
            </div>
          </div>
        </aside>
      </div></section>

      {brand.relatedProjects.length > 0 && (
        <section className="py-14 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Air2Cool Experience With {brand.name}</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {brand.relatedProjects.map((project) => (
                <Link key={`${project.href}-${project.label}`} href={project.href} className="group border border-slate-200 hover:border-blue-400 rounded-2xl p-6 transition-colors">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 mb-2">{project.label}</h3>
                  <span className="inline-flex items-center gap-2 text-blue-700 font-bold">View Air2Cool project experience <ArrowRight className="w-4 h-4" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-slate-50 py-14 md:py-20"><div className="max-w-7xl mx-auto px-6"><h2 className="text-3xl font-extrabold text-slate-900 mb-8">Common {brand.name} Equipment Problems</h2><div className="grid md:grid-cols-2 gap-5">{brand.commonProblems.map((problem) => <article key={problem.title} className="bg-white border rounded-2xl p-6"><Wrench className="text-cyan-600 mb-3" /><h3 className="text-xl font-bold mb-2">{problem.title}</h3><p className="text-gray-600 leading-relaxed">{problem.description}</p></article>)}</div></div></section>

      <section className="py-14 md:py-20"><div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
        <div><h2 className="text-3xl font-extrabold mb-5">Maintenance Guidance</h2><ul className="space-y-4">{brand.maintenanceGuidance.map((item) => <li key={item} className="flex gap-3 text-gray-700"><CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />{item}</li>)}</ul><Link href="/services/preventative-maintenance" className="inline-flex items-center gap-2 text-blue-700 font-bold mt-6">Explore preventative maintenance <ArrowRight className="w-4 h-4" /></Link></div>
        <div><h2 className="text-3xl font-extrabold mb-5">Repair or Replace?</h2><ul className="space-y-4">{brand.replacementGuidance.map((item) => <li key={item} className="flex gap-3 text-gray-700"><CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />{item}</li>)}</ul></div>
      </div></section>

      <section className="bg-blue-950 text-white py-14"><div className="max-w-7xl mx-auto px-6"><h2 className="text-3xl font-extrabold mb-7">Related Services &amp; Service Areas</h2><div className="flex flex-wrap gap-3 mb-7">{brand.relatedServices.map((link) => <Link key={link.href} href={link.href} className="bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded-full font-semibold">{link.label}</Link>)}<Link href="/equipment-we-service" className="bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded-full font-semibold">Equipment we service</Link><Link href="/service-areas/morris-county" className="bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded-full font-semibold">Morris County</Link><Link href="/service-areas" className="bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded-full font-semibold">North Jersey service areas</Link></div><p className="text-slate-300 text-sm">{brand.capabilityNote}</p></div></section>

      <section className="py-14 md:py-20"><div className="max-w-4xl mx-auto px-6"><h2 className="text-3xl font-extrabold text-slate-900 mb-8">{brand.name} Service FAQs</h2><div className="space-y-4">{brand.faqs.map((faq) => <details key={faq.question} className="border rounded-xl p-5"><summary className="font-bold cursor-pointer">{faq.question}</summary><p className="text-gray-700 mt-3 leading-relaxed">{faq.answer}</p></details>)}</div></div></section>
    </main>
  );
}
