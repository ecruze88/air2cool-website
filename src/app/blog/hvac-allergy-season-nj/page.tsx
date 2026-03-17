import type { Metadata } from "next";
import {
  Wind,
  CheckCircle,
  AlertTriangle,
  Calendar,
  Clock,
  Phone,
  ChevronRight,
  Leaf,
  Thermometer,
  Filter,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NJ Allergy Season & Your HVAC System — How to Breathe Easier | Air2Cool",
  description:
    "Spring allergies hitting hard in NJ? Your HVAC system could be making it worse. Here's how to use it to breathe easier this season.",
  keywords: [
    "HVAC allergy season NJ",
    "air quality NJ spring",
    "reduce allergens home NJ",
    "HVAC filter allergy NJ",
    "indoor air quality spring NJ",
    "allergy HVAC upgrade NJ",
    "iWave air purifier NJ",
    "Aprilaire dehumidifier NJ",
    "MERV filter allergy season",
    "Morris County air quality HVAC",
  ],
  alternates: {
    canonical: "/blog/hvac-allergy-season-nj",
  },
  openGraph: {
    title: "NJ Allergy Season is Here — How Your HVAC System Can Help (or Hurt)",
    description:
      "Spring allergies hitting hard in NJ? Your HVAC system could be making it worse. Here's how to use it to breathe easier this season.",
    url: "/blog/hvac-allergy-season-nj",
    type: "article",
  },
};

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "NJ Allergy Season is Here — How Your HVAC System Can Help (or Hurt)",
  description:
    "Spring allergies hitting hard in NJ? Your HVAC system could be making it worse. Learn 4 HVAC upgrades that reduce indoor allergens and a quick DIY checklist to prepare before allergy season peaks.",
  url: "https://www.air2cool.com/blog/hvac-allergy-season-nj",
  datePublished: "2026-03-17",
  dateModified: "2026-03-17",
  articleSection: "Maintenance",
  keywords: "HVAC allergy season NJ, air quality NJ spring, reduce allergens home NJ",
  author: {
    "@type": "Organization",
    name: "Air2Cool Heating & Cooling",
    "@id": "https://www.air2cool.com/#organization",
  },
  publisher: {
    "@type": "HVACBusiness",
    "@id": "https://www.air2cool.com/#organization",
    name: "Air2Cool Heating & Cooling",
    logo: {
      "@type": "ImageObject",
      url: "https://www.air2cool.com/Air2Cool-HeatingAC-&-Refrigeration-Logo-237w.webp",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.air2cool.com/blog/hvac-allergy-season-nj",
  },
};

const UPGRADES = [
  {
    icon: Filter,
    title: "Upgrade to a 4\" Media Filter (MERV 11)",
    body: [
      "Standard 1-inch fiberglass filters (MERV 1–4) capture large debris but let pollen, mold spores, and fine dust sail right through. Upgrading to a 4-inch media filter rated MERV 11 traps over 90% of particles down to 1 micron — that includes most pollen grains, pet dander, and mold spores.",
      "The deeper media bed also lasts longer — typically 6–12 months vs. 1–3 months for thin filters — so you're not forgetting to swap it out at exactly the wrong time of year.",
    ],
    link: { href: "/services/air-quality", label: "Learn about our air filtration services" },
    color: "teal",
  },
  {
    icon: Wind,
    title: "Install a Whole-House Dehumidifier (Aprilaire)",
    body: [
      "Humidity is the hidden allergy trigger. Dust mites peak above 50% relative humidity. Mold thrives above 60%. A portable dehumidifier handles one room; a whole-house unit integrated with your HVAC controls humidity in every room simultaneously.",
      "The Aprilaire whole-house dehumidifier is the gold standard for NJ homes — it can remove 70–120 pints per day and automatically maintains your target humidity level without you touching it all summer.",
    ],
    link: { href: "/services/air-quality", label: "See our indoor air quality services" },
    color: "blue",
  },
  {
    icon: Leaf,
    title: "Add an iWave-R Air Ionizer",
    body: [
      "The iWave-R mounts inside your existing ductwork and generates equal amounts of positive and negative ions. These ions attach to airborne particles — pollen, mold spores, bacteria, viruses — causing them to clump together and fall out of the air or get caught by your filter.",
      "Unlike UV systems, iWave-R produces zero ozone and is safe for continuous operation. It's one of the most effective upgrades for allergy sufferers because it actively cleans the air rather than just filtering what passes through the system.",
    ],
    link: { href: "/services/air-quality", label: "See our indoor air quality services" },
    color: "purple",
  },
  {
    icon: Thermometer,
    title: "Use a Smart Thermostat for Humidity Control",
    body: [
      "A smart thermostat with humidity sensing (like the Honeywell ElitePRO S1200) lets you set a maximum indoor humidity level. When humidity creeps up, the system automatically runs longer dehumidification cycles — not just cooling cycles — to pull moisture out.",
      "This is especially useful during NJ's muggy May and June, when humidity spikes quickly in the morning and evening even on mild-temperature days. Controlling humidity automatically means you're not constantly adjusting settings.",
    ],
    link: { href: "/services/air-quality", label: "See smart thermostat options" },
    color: "green",
  },
];

const colorMap: Record<string, { icon: string; border: string; badge: string }> = {
  teal:   { icon: "text-teal-600 bg-teal-50",   border: "border-teal-200",   badge: "bg-teal-100 text-teal-700" },
  blue:   { icon: "text-blue-600 bg-blue-50",   border: "border-blue-200",   badge: "bg-blue-100 text-blue-700" },
  purple: { icon: "text-purple-600 bg-purple-50", border: "border-purple-200", badge: "bg-purple-100 text-purple-700" },
  green:  { icon: "text-green-600 bg-green-50", border: "border-green-200",  badge: "bg-green-100 text-green-700" },
};

const DIY_CHECKLIST = [
  "Replace your air filter — use at least MERV 8, ideally MERV 11. Don't wait until it looks gray.",
  "Check the condensate drain pan under your air handler. Standing water is a mold farm.",
  "Wipe down supply and return vent grilles with a damp cloth to remove dust buildup.",
  "Look inside visible duct openings with a flashlight for visible mold, dust clumps, or debris.",
  "Test your thermostat's fan-only mode. Running the fan 20 min/hour circulates air through the filter even when not heating or cooling.",
  "Schedule a professional tune-up — spring is the best time before cooling demand peaks.",
];

const PRO_SIGNS = [
  "Musty or moldy smell coming from vents — indicates mold inside ductwork or air handler",
  "Allergy symptoms that are worse indoors than outdoors",
  "Visible mold around vent grilles or on the air handler cabinet",
  "Humidity consistently above 60% even with AC running",
  "Filter clogged within 2–3 weeks of installation (sign of a bigger airflow or filtration problem)",
  "Black or brown buildup visible inside supply vents",
];

export default function AllergySeasonBlogPage() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-teal-900 via-green-800 to-teal-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 pt-10 pb-24 md:py-24">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-teal-200 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-white transition">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Maintenance</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-4">
            <Leaf className="w-4 h-4" />
            MAINTENANCE
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
            NJ Allergy Season is Here — How Your HVAC System Can Help (or Hurt)
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-teal-200 text-sm">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              March 17, 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              6 min read
            </span>
            <span className="flex items-center gap-1.5">
              By <span className="text-white font-semibold">Air2Cool Heating &amp; Cooling</span>
            </span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
          </svg>
        </div>
      </section>

      {/* Article */}
      <article className="py-10 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6">

          {/* Intro */}
          <div className="mb-10 md:mb-14">
            <p className="text-base md:text-xl text-gray-700 leading-relaxed mb-4">
              NJ allergy season doesn&apos;t ease you in. One week you&apos;re fine, and the next the oak and birch pollen counts hit &quot;very high&quot; and half the state is reaching for antihistamines. What most people don&apos;t realize is that their HVAC system — the same system they rely on for comfort — can either significantly reduce indoor allergens or actively make symptoms worse, depending on how well it&apos;s maintained and configured.
            </p>
            <p className="text-sm md:text-lg text-gray-600 leading-relaxed">
              This guide covers why NJ allergy season hits the way it does, how your HVAC system fits into the picture, four upgrades that make a real difference, and what you can do this weekend to prepare.
            </p>
          </div>

          {/* H2: Why NJ Allergy Season Hits Hard */}
          <section className="mb-10 md:mb-14">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
              Why NJ Allergy Season Hits Hard
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              New Jersey sits in a geographic sweet spot for high pollen counts — Atlantic coastal winds push pollen inland from the shore while the wooded suburbs of Morris, Passaic, and Sussex counties are loaded with oak, birch, and maple trees. Allergy season typically runs from <strong>March through June</strong>, peaking mid-April through mid-May when multiple tree types pollinate simultaneously.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              Mold spores add a second wave. NJ summers are humid — often 70–80% relative humidity — which creates ideal conditions for outdoor mold that generates spores from July through October. Those spores don&apos;t stay outside.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              And it&apos;s not just outdoor allergens. Dust mites — a major trigger for asthma and year-round allergies — peak indoors when humidity rises above 50%. In a typical NJ home without humidity control, indoor conditions during spring and summer are essentially a dust mite resort.
            </p>
          </section>

          {/* H2: How Your HVAC Can Make Allergies Worse */}
          <section className="mb-10 md:mb-14">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
              How Your HVAC Can Make Allergies Worse
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              Your HVAC system moves air through your home constantly — and if it&apos;s not properly maintained, it&apos;s moving allergens with it.
            </p>

            <div className="space-y-4">
              {[
                {
                  title: "Clogged or under-rated filter",
                  body: "A saturated filter doesn't just stop filtering — it can actually dislodge previously captured particles back into your airstream. A MERV 1–4 filter (the cheap kind) doesn't capture pollen or mold spores to begin with.",
                },
                {
                  title: "Mold in the duct system",
                  body: "Ductwork that runs through unconditioned spaces (attic, crawlspace) experiences condensation whenever warm, humid air contacts cold metal. That moisture, combined with dust buildup, creates a perfect environment for mold growth inside ducts. Every time the system runs, it distributes mold spores throughout your home.",
                },
                {
                  title: "Dirty evaporator coil",
                  body: "The evaporator coil inside your air handler stays cold and damp during operation — ideal conditions for mold and bacterial growth. A dirty coil circulates biological material directly into your conditioned air.",
                },
                {
                  title: "Recirculating allergens without dilution",
                  body: "Standard HVAC systems recirculate indoor air without introducing fresh outdoor air. Pollen that enters through open windows or doors, pet dander, and dust mite particles just keep cycling through the system unless your filtration is good enough to capture them.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">{item.title}: </span>
                    <span className="text-gray-700 text-sm md:text-base leading-relaxed">{item.body}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* H2: 4 Upgrades */}
          <section className="mb-10 md:mb-14">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
              4 HVAC Upgrades That Actually Help
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              These aren&apos;t gimmicks. Each one addresses a specific mechanism by which allergens enter or persist in your indoor air.
            </p>

            <div className="space-y-6">
              {UPGRADES.map((u, idx) => {
                const Icon = u.icon;
                const c = colorMap[u.color];
                return (
                  <div key={u.title} className={`border-2 ${c.border} rounded-2xl overflow-hidden`}>
                    <div className="flex items-center gap-3 px-5 py-4 bg-gray-50 border-b border-gray-100">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${c.icon}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${c.badge}`}>
                          UPGRADE {idx + 1}
                        </span>
                        <h3 className="font-bold text-gray-900 text-base md:text-lg leading-snug">{u.title}</h3>
                      </div>
                    </div>
                    <div className="px-5 py-4 space-y-3">
                      {u.body.map((para, i) => (
                        <p key={i} className="text-sm md:text-base text-gray-700 leading-relaxed">{para}</p>
                      ))}
                      <Link
                        href={u.link.href}
                        className="inline-flex items-center gap-1 text-sm font-semibold text-teal-700 hover:text-teal-900 transition mt-1"
                      >
                        {u.link.label} <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* H2: DIY Checklist */}
          <section className="mb-10 md:mb-14">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
              Quick DIY Checklist Before Allergy Season
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-5">
              You don&apos;t need a technician for these. Block out 30 minutes this weekend:
            </p>

            <div className="bg-teal-50 border-2 border-teal-200 rounded-2xl p-5 md:p-6">
              <ul className="space-y-3">
                {DIY_CHECKLIST.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-gray-800 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 pt-4 border-t border-teal-200">
                <p className="text-sm text-teal-800">
                  For a full professional tune-up including coil cleaning and duct inspection, see our{" "}
                  <Link href="/services/preventative-maintenance" className="font-semibold underline hover:no-underline">
                    preventative maintenance service
                  </Link>.
                </p>
              </div>
            </div>
          </section>

          {/* H2: When to Call a Pro */}
          <section className="mb-10 md:mb-14">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
              When to Call a Pro
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-5">
              DIY prep gets you most of the way there, but some signs indicate a problem that needs professional attention before allergy season peaks:
            </p>

            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-5 md:p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-red-100 rounded-xl flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="font-bold text-gray-900">Don&apos;t ignore these:</h3>
              </div>
              <ul className="space-y-3">
                {PRO_SIGNS.map((sign, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-1" />
                    <span className="text-sm md:text-base text-gray-800 leading-relaxed">{sign}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed mt-5">
              Any of the above can turn a manageable allergy season into a miserable one — and some (like mold in the air handler) can worsen respiratory symptoms even when pollen counts drop. A licensed tech can inspect, clean, and advise on the right combination of upgrades for your specific system and home.
            </p>
          </section>

          {/* Conclusion */}
          <div className="prose prose-lg max-w-none">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Your HVAC system runs 8–12 hours a day during spring and summer. That&apos;s a lot of air moving through your home — and a huge opportunity to either clean it or contaminate it. With the right filter, humidity control, and purification, most NJ homeowners can dramatically reduce their indoor allergen load without changing a single outdoor variable.
            </p>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="py-10 md:py-16 bg-gradient-to-r from-teal-700 to-green-600">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center text-white">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-3 md:mb-4">
            Breathe Easier This Spring
          </h2>
          <p className="text-base md:text-xl text-teal-100 mb-6 md:mb-8 max-w-xl mx-auto">
            Call Air2Cool at (201) 787-5657 for an air quality assessment. We&apos;ll inspect your system, measure humidity, and recommend the right upgrades for your home and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-teal-700 px-8 py-4 rounded-full font-bold text-base md:text-lg shadow-lg hover:bg-gray-50 transition text-center"
            >
              Get Free Air Quality Assessment
            </Link>
            <a
              href="tel:+12017875657"
              className="bg-white/10 backdrop-blur text-white px-8 py-4 rounded-full font-semibold text-base md:text-lg border-2 border-white hover:bg-white/20 transition flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call (201) 787-5657
            </a>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-5 md:mb-8">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                href: "/services/air-quality",
                label: "Indoor Air Quality",
                desc: "Dehumidifiers, air ionizers, and media filters for whole-home allergen control.",
                color: "from-teal-500 to-cyan-500",
              },
              {
                href: "/services/air-quality",
                label: "Air Filtration",
                desc: "UV filtration, HEPA filters, iWave-R purifiers, and duct cleaning.",
                color: "from-green-500 to-teal-500",
              },
              {
                href: "/services/preventative-maintenance",
                label: "Preventative Maintenance",
                desc: "Spring tune-up includes coil cleaning, filter check, and drain inspection.",
                color: "from-amber-500 to-yellow-500",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all"
              >
                <div className={`h-2 bg-gradient-to-r ${item.color}`} />
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 group-hover:text-teal-700 transition mb-2">
                    {item.label}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
