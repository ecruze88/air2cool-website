import type { Metadata } from "next";
import { Snowflake, CheckCircle, ArrowRight, Zap, Wind } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mini Split Installation & Repair NJ | Ductless AC | Air2Cool",
  description:
    "Expert mini split installation and repair in North Jersey. Ductless AC systems for homes without ductwork. Morris County & surrounding areas. Free estimates. (201) 787-5657.",
  keywords: [
    "mini split installation NJ",
    "ductless AC installation North Jersey",
    "mini split repair Morris County",
    "ductless mini split Mendham NJ",
    "mini split air conditioner Rockaway NJ",
    "ductless AC Morris County",
    "mini split installation Randolph NJ",
    "ductless heat pump NJ",
    "Mitsubishi mini split NJ",
    "Daikin mini split installation North Jersey",
  ],
  alternates: {
    canonical: "/services/mini-split",
  },
  openGraph: {
    title: "Mini Split Installation & Repair NJ | Ductless AC | Air2Cool",
    description:
      "Expert ductless mini split installation and repair in Morris County & North Jersey. No ductwork needed. Free estimates. (201) 787-5657.",
    url: "/services/mini-split",
  },
};

const BENEFITS = [
  {
    title: "No Ductwork Required",
    body: "Mini splits connect via a small refrigerant line through a 3-inch hole in the wall — perfect for additions, sunrooms, garages, older homes, and any space that can't accommodate ductwork.",
    icon: Wind,
  },
  {
    title: "Zone-by-Zone Control",
    body: "Each indoor unit has its own thermostat and remote control. Set the bedroom at 68°F while keeping the living room at 72°F — and only condition spaces you're actually using.",
    icon: Zap,
  },
  {
    title: "Heating & Cooling in One",
    body: "Modern mini splits are heat pumps — they provide efficient heating down to -13°F outdoor temperatures and cooling all summer. One system, year-round comfort.",
    icon: Snowflake,
  },
];

const BRANDS = [
  { name: "Mitsubishi", note: "Industry leader, whisper-quiet, hyper-heat technology" },
  { name: "Daikin", note: "Inverter-driven, highly efficient, wide product range" },
  { name: "LG", note: "Art Cool series, smart home integration, multi-zone" },
  { name: "Fujitsu", note: "Halcyon series, energy star certified, slim profiles" },
  { name: "Carrier", note: "Infinity series, Wi-Fi enabled, compatible with Carrier ecosystem" },
];

const FAQS = [
  {
    q: "How much does mini split installation cost in NJ?",
    a: "Mini split installation in New Jersey typically costs $2,500–$5,500 for a single-zone system (one indoor unit). Multi-zone systems with 2–4 indoor units run $5,000–$12,000+ installed. The range depends on the brand, BTU capacity, number of zones, and installation complexity. Air2Cool provides free estimates — call (201) 787-5657 or request online.",
  },
  {
    q: "Do mini splits work for heating too?",
    a: "Yes. All mini splits installed by Air2Cool are heat pumps, meaning they provide both heating and cooling from a single outdoor unit. Modern units with hyper-heat technology (like Mitsubishi's H2i series) operate efficiently in outdoor temperatures as low as -13°F — well below any NJ winter low.",
  },
  {
    q: "Can you install a mini split in a home without ductwork?",
    a: "Absolutely — that's exactly what mini splits are designed for. Installation requires only a 3-inch hole through the wall to run the refrigerant line set, electrical, and condensate drain. There's no need to add ductwork, making mini splits the go-to solution for additions, converted garages, older homes, and any room that's difficult to heat or cool.",
  },
  {
    q: "What brands of mini splits do you install?",
    a: "Air2Cool installs and services all major mini split brands including Mitsubishi, Daikin, LG, Fujitsu, and Carrier. We'll help you choose the right brand and BTU size for your space and budget. All installations come with manufacturer warranty support.",
  },
  {
    q: "How long does mini split installation take?",
    a: "A single-zone mini split installation typically takes 4–6 hours. Multi-zone systems with multiple indoor units may take 1–2 days. Our licensed technicians handle everything: mounting the indoor and outdoor units, running the line set, electrical connections, and system startup.",
  },
];

export default function MiniSplitPage() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Mini Split Installation & Repair",
            alternateName: "Ductless AC Installation",
            description:
              "Expert ductless mini split installation and repair in Morris County & North NJ. Single-zone and multi-zone systems. All major brands including Mitsubishi, Daikin, LG, and Fujitsu.",
            provider: {
              "@type": "HVACBusiness",
              "@id": "https://www.air2cool.com/#organization",
              name: "Air2Cool Heating & Cooling",
              telephone: "+1-201-787-5657",
              url: "https://www.air2cool.com",
            },
            areaServed: [
              { "@type": "AdministrativeArea", name: "Morris County, NJ" },
              { "@type": "City", name: "Mendham, NJ" },
              { "@type": "City", name: "Rockaway, NJ" },
              { "@type": "City", name: "Randolph, NJ" },
              { "@type": "AdministrativeArea", name: "Sussex County, NJ" },
              { "@type": "AdministrativeArea", name: "North New Jersey" },
            ],
            url: "https://www.air2cool.com/services/mini-split",
            serviceType: "Mini Split Installation",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          })
        }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-cyan-900 via-blue-800 to-cyan-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-24 md:py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-4">
              <Snowflake className="w-4 h-4" />
              DUCTLESS MINI SPLITS
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
              Mini Split (Ductless AC) Installation &amp; Repair in NJ
            </h1>

            <p className="text-base md:text-xl text-gray-200 leading-relaxed max-w-3xl mb-6 md:mb-8">
              No ductwork? No problem. Air2Cool installs and services ductless mini split systems throughout Morris County, Sussex County, and all of North Jersey. One system for heating and cooling — quiet, efficient, and zoned by room.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
              <Link
                href="/contact"
                className="bg-white text-cyan-700 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-all shadow-lg hover:bg-gray-50 text-center"
              >
                Get Free Estimate
              </Link>
              <a
                href="tel:+12017875657"
                className="bg-white/10 hover:bg-white/20 backdrop-blur text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all border border-white/20 text-center"
              >
                Call (201) 787-5657
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
          </svg>
        </div>
      </section>

      {/* What is a mini split */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
            What Is a Ductless Mini Split?
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
            A ductless mini split system consists of a compact outdoor compressor unit connected to one or more wall-mounted indoor air handlers via a refrigerant line. Unlike central HVAC systems, there&apos;s no ductwork — making them ideal for homes without existing ducts, room additions, converted garages, sunrooms, workshops, and any space that&apos;s always too hot or too cold.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
            Air2Cool has installed mini splits throughout <strong>Mendham, Rockaway, Randolph, Morris County, Sussex County</strong>, and surrounding North Jersey communities. Whether you need a single-zone system for one room or a multi-zone setup for the whole house, our licensed technicians will size and install it correctly.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Mini splits are inverter-driven heat pumps — they modulate output rather than cycling on and off, which makes them significantly more efficient than traditional systems. Many qualify for NJ utility rebates and federal tax credits.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 text-center">
            Why Choose a Mini Split?
          </h2>
          <p className="text-base text-gray-600 text-center mb-8 md:mb-10 max-w-2xl mx-auto">
            Mini splits solve comfort problems that central HVAC can&apos;t — and they do it more efficiently.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {BENEFITS.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="bg-white rounded-2xl p-6 border-2 border-cyan-100 shadow-sm">
                  <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center mb-4 border border-cyan-200">
                    <Icon className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{b.title}</h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">{b.body}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              "Quiet operation — as low as 19 dB",
              "Up to 40% more efficient than window units",
              "No energy loss from ductwork",
              "Remote and smartphone control",
              "Built-in dehumidification",
              "No ducts = no dust recirculation",
              "Quick installation — usually 1 day",
              "Available for rebates & tax credits",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-cyan-600 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini Split Install Photo */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <div className="overflow-hidden rounded-2xl shadow-lg" style={{ aspectRatio: "4/3" }}>
            <img
              src="/mini_split_advanced_system_install.webp"
              alt="Mini split advanced system installation North NJ — Air2Cool"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm text-gray-600 text-center mt-3">
            Advanced mini split system installation by Air2Cool — North NJ
          </p>
        </div>
      </section>

      {/* Brands */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 text-center">
            Brands We Install &amp; Service
          </h2>
          <p className="text-base text-gray-600 text-center mb-8 max-w-xl mx-auto">
            We install all major mini split brands and will recommend the right fit for your home and budget.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BRANDS.map((b) => (
              <div key={b.name} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <p className="font-bold text-gray-900 mb-1">{b.name}</p>
                <p className="text-xs md:text-sm text-gray-600">{b.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation process */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 text-center">
            The Installation Process
          </h2>
          <p className="text-base text-gray-600 text-center mb-8 max-w-xl mx-auto">
            A typical single-zone installation takes 4–6 hours. Here&apos;s what to expect.
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { step: "1", title: "Site Assessment", body: "We visit your home, measure the space, and recommend the right BTU capacity and unit placement." },
              { step: "2", title: "Mounting Units", body: "We mount the indoor air handler on the wall and position the outdoor compressor on a pad or bracket." },
              { step: "3", title: "Line Set & Electrical", body: "We run the refrigerant lines, drain line, and electrical through a 3-inch wall penetration and connect everything." },
              { step: "4", title: "System Startup", body: "We charge the system, test all functions, and walk you through the remote control and settings." },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm text-center">
                <div className="w-10 h-10 rounded-full bg-cyan-600 text-white flex items-center justify-center text-lg font-extrabold mx-auto mb-3">
                  {s.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm md:text-base">{s.title}</h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas served */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
            Mini Split Installation Near You
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
            Air2Cool installs and services mini split systems throughout Morris County, Sussex County, and all of North Jersey. We frequently serve homeowners in <strong>Mendham, Rockaway, Randolph, Chester, Long Valley, Flanders, Denville, Parsippany, Morristown, Dover, Wharton, Mine Hill, Roxbury</strong>, and surrounding communities.
          </p>
          <p className="text-sm md:text-base text-gray-600">
            Not sure if we serve your area?{" "}
            <a href="tel:+12017875657" className="text-cyan-700 font-semibold hover:underline">Call us at (201) 787-5657</a>{" "}
            or{" "}
            <Link href="/contact" className="text-cyan-700 font-semibold hover:underline">request a free estimate online</Link>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8 text-center">
            Frequently Asked Questions — Mini Split Installation NJ
          </h2>
          <div className="space-y-4">
            {FAQS.map((item) => (
              <div key={item.q} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-12 bg-gradient-to-r from-cyan-700 to-blue-700">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3 md:mb-4">
            Get a Free Mini Split Estimate
          </h2>
          <p className="text-base md:text-xl text-cyan-100 mb-5 md:mb-8 max-w-xl mx-auto">
            Call Air2Cool or request online. We&apos;ll assess your space, recommend the right system, and give you a clear upfront price — no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-cyan-700 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg hover:bg-gray-50 transition w-full sm:w-auto text-center"
            >
              Request Free Estimate
            </Link>
            <a
              href="tel:+12017875657"
              className="bg-white/10 backdrop-blur text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg border-2 border-white hover:bg-white/20 transition w-full sm:w-auto text-center"
            >
              Call (201) 787-5657
            </a>
          </div>
          <p className="mt-5 text-sm text-cyan-200">
            Serving Mendham · Rockaway · Randolph · Morris County · Sussex County · North Jersey
          </p>
        </div>
      </section>

      {/* Related */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">Related Services</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "AC Installation", href: "/services/cooling-installation" },
              { label: "AC Repair", href: "/services/ac-repair" },
              { label: "Heating Installation", href: "/services/heating-installation" },
              { label: "Complete HVAC Systems", href: "/services/hvac-installation" },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="inline-flex items-center gap-1.5 bg-gray-50 hover:bg-cyan-50 border border-gray-200 hover:border-cyan-300 text-sm font-medium text-gray-700 hover:text-cyan-700 px-4 py-2.5 rounded-full transition"
              >
                {s.label} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
