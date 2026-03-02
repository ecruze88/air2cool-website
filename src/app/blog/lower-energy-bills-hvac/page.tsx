import type { Metadata } from "next";
import {
  Zap,
  Gauge,
  Thermometer,
  Wind,
  Settings,
  Wrench,
  Calendar,
  Clock,
  Phone,
  ChevronRight,
  TrendingDown,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Is My Energy Bill So High? 7 HVAC Fixes for NJ Homeowners | Air2Cool",
  description:
    "Spiking energy bills in New Jersey? Your HVAC system is usually the culprit. Learn how to lower heating and cooling costs with these 7 practical fixes — from refrigerant checks to smart thermostats. Air2Cool Heating & Cooling, (201) 787-5657.",
  keywords: [
    "high energy bills HVAC NJ",
    "why is my energy bill so high",
    "how to lower heating and cooling costs New Jersey",
    "reduce energy bills HVAC",
    "HVAC energy efficiency NJ",
    "lower electric bill air conditioning NJ",
    "heating bill too high NJ",
    "energy efficient HVAC North NJ",
    "AC high energy bill Morris County",
    "smart thermostat energy savings NJ",
  ],
  alternates: {
    canonical: "/blog/lower-energy-bills-hvac",
  },
  openGraph: {
    title: "Why Is My Energy Bill So High? 7 HVAC Fixes for NJ Homeowners | Air2Cool",
    description:
      "Spiking energy bills? Your HVAC is likely to blame. 7 practical fixes from North NJ's top HVAC contractor — refrigerant checks, combustion analysis, smart thermostats, duct sealing, and more.",
    url: "/blog/lower-energy-bills-hvac",
    type: "article",
  },
};

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Why Is My Energy Bill So High? 7 HVAC Fixes for NJ Homeowners",
  "description":
    "Practical guide for North NJ homeowners on how to lower heating and cooling costs. Covers refrigerant pressure checks, combustion efficiency analysis, air filter replacement, smart thermostats, duct sealing, temperature setbacks, and annual HVAC tune-ups.",
  "url": "https://www.air2cool.com/blog/lower-energy-bills-hvac",
  "datePublished": "2026-03-01",
  "dateModified": "2026-03-01",
  "articleSection": "Energy Efficiency",
  "keywords": "high energy bills HVAC NJ, how to lower heating and cooling costs New Jersey, HVAC energy efficiency",
  "author": {
    "@type": "Organization",
    "name": "Air2Cool Heating & Cooling",
    "@id": "https://www.air2cool.com/#organization",
  },
  "publisher": {
    "@type": "HVACBusiness",
    "@id": "https://www.air2cool.com/#organization",
    "name": "Air2Cool Heating & Cooling",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.air2cool.com/Air2Cool-HeatingAC-&-Refrigeration-Logo-237w.webp",
    },
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.air2cool.com/blog/lower-energy-bills-hvac",
  },
};

const TIPS = [
  {
    number: 1,
    icon: Gauge,
    badge: "Call a Pro",
    badgeColor: "bg-purple-100 text-purple-700",
    title: "Get Your Refrigerant Pressures Checked",
    content: [
      "This is the most overlooked cause of high summer energy bills. Your AC works by cycling refrigerant between two sets of coils — and if the charge is off in either direction, the compressor runs much harder and longer to move the same amount of heat. The result: the system runs all day, rooms barely cool down, and your electricity bill climbs.",
      "Low refrigerant almost always means there's a leak somewhere — common spots are the evaporator coil, service valve fittings, and refrigerant line joints. An AC running just 10–15% low can use 20% or more electricity than it should. High-side pressure problems are equally damaging and put serious wear on the compressor over time.",
      "Signs your charge might be off: the AC runs constantly without reaching the set temperature, you see ice forming on the refrigerant lines or indoor coil, or you hear a faint hissing or bubbling near the unit. Only a licensed HVAC technician with a gauge set can accurately diagnose this — there's no homeowner shortcut here.",
    ],
    tip: "In New Jersey, refrigerant handling requires an EPA 608 certification. Never let an unlicensed person recharge your system — improper charging causes compressor damage and can void manufacturer warranties.",
  },
  {
    number: 2,
    icon: Thermometer,
    badge: "Call a Pro",
    badgeColor: "bg-purple-100 text-purple-700",
    title: "Run a Combustion Efficiency Analysis on Your Heating System",
    content: [
      "If your gas or oil heating bills have been creeping up year over year, your furnace or boiler may be burning fuel far less efficiently than it should. A combustion analyzer is a probe technicians insert into the flue that measures oxygen, CO₂, stack temperature, and excess air — then calculates your system's real combustion efficiency as a percentage.",
      "A properly tuned standard furnace should run at 78–82% AFUE. High-efficiency equipment hits 90–97%. Older, never-serviced equipment often tests at 65–70% — meaning 30–35 cents of every gas dollar goes straight out the flue as waste heat instead of warming your home.",
      "The fix is often a burner air-fuel adjustment — a 30-minute service call that shows up directly on your next bill. On a heating system burning $250/month in winter, improving from 70% to 80% combustion efficiency saves roughly $25/month. Over a full NJ heating season, that's $150–$200 back in your pocket.",
    ],
    tip: "If your heating equipment is over 15 years old and consistently testing below 75% combustion efficiency, replacing it with a 96% AFUE high-efficiency system can pay for itself in 5–7 years through fuel savings alone. Ask us about 0% financing options.",
  },
  {
    number: 3,
    icon: Wind,
    badge: "DIY",
    badgeColor: "bg-green-100 text-green-700",
    title: "Check and Replace Your Air Filter",
    content: [
      "A clogged air filter is one of the most common — and most overlooked — causes of high energy bills. When airflow is restricted, your blower motor draws more electricity to push air through the resistance. The system also takes longer to satisfy the thermostat, adding run time. That combination hits your bill from two directions at once.",
      "Most NJ homeowners change their filter every 6–12 months. In practice, a 1-inch MERV 8 filter in a home with pets or dusty conditions can clog enough to impact airflow in 4–6 weeks. Hold your current filter up to a light — if you can't see through it, replace it now. Write the install date on the new filter frame so you know when to check it next.",
      "While you're at it: make sure every supply and return vent in the house is open and unobstructed. Closing vents in unused rooms is a common myth that actually raises bills by increasing static pressure on the system. Leave every vent open.",
    ],
    tip: "Don't assume higher MERV means better performance. MERV 13+ filters restrict airflow significantly on most residential equipment. MERV 8–11 is the right range for most NJ homes. Your technician can tell you what rating your system was designed for.",
  },
  {
    number: 4,
    icon: Settings,
    badge: "DIY",
    badgeColor: "bg-green-100 text-green-700",
    title: "Install a Smart Thermostat",
    content: [
      "A smart thermostat is one of the highest-return upgrades a homeowner can make. The logic is simple: your HVAC system shouldn't run at full intensity all day while you're at work, or heat the house to 70°F at 3 AM when everyone's under blankets. Automatically scaling back during those hours cuts energy use without touching comfort when you're actually home.",
      "Modern models like the Google Nest, Ecobee, or Honeywell T10 Pro add geofencing (system adjusts when your phone leaves home), learning algorithms, and — most usefully for troubleshooting — real runtime data. If your system ran 16 hours yesterday, that number tells you something's wrong long before the bill arrives.",
      "EPA data shows a properly programmed thermostat cuts heating and cooling costs by 10–15%. In North NJ, where winters run long and summers are humid, that's typically $150–$300 per year. PSE&G and JCP&L customers may also qualify for utility rebates on qualifying smart thermostat models.",
    ],
    tip: "For winter: 68°F while home and awake, 60–65°F while sleeping or away. For summer: 76–78°F when home, 82–85°F when out. Even these modest setbacks add up to noticeable savings across a full season.",
  },
  {
    number: 5,
    icon: Wrench,
    badge: "Pro + DIY",
    badgeColor: "bg-blue-100 text-blue-700",
    title: "Find and Seal Duct Leaks",
    content: [
      "The U.S. Department of Energy estimates the typical home loses 20–30% of conditioned air through duct leaks before it reaches the living space. In North Jersey homes with ductwork running through unconditioned attics or crawlspaces, it can be worse — you're heating or cooling air that flows directly into a 130°F attic or an uninsulated basement.",
      "For accessible duct joints in the basement or utility room, this is a DIY fix. Use mastic sealant (a gray paste at any hardware store) or metal foil tape — not standard duct tape, which dries out and peels within a year or two. Focus on joints where sections connect, at register boots, and near the air handler cabinet.",
      "For ductwork inside walls, tight crawlspaces, or finished ceilings, professional duct blaster testing finds every leak using pressurization equipment. If your energy bills are consistently high despite other fixes, duct leakage is worth investigating properly.",
    ],
    tip: "Quick DIY leak test: hold a lit incense stick near duct joints while the system is running. Smoke pulled toward the duct or blown erratically away from it — that's a leak. Mark it and seal it with mastic or metal foil tape.",
  },
  {
    number: 6,
    icon: TrendingDown,
    badge: "DIY",
    badgeColor: "bg-green-100 text-green-700",
    title: "Use Temperature Setbacks Consistently",
    content: [
      "Every degree you set back the thermostat saves roughly 2–3% on HVAC energy use during that period. A consistent 7–10°F setback for 8 hours per day adds up to about 10% in annual savings according to DOE data — with no equipment changes and no service calls.",
      "In a North NJ home spending $2,400/year on heating and cooling, that's $200–$300 back annually. Stack it with a smart thermostat doing it automatically and those savings happen without you thinking about it.",
      "A common misconception: it costs more energy to reheat or re-cool a house after a setback than to hold a steady temperature all day. This isn't true. A cooler house in winter loses heat more slowly, so less fuel is needed to maintain it. The setback savings always outweigh the recovery cost — the physics work in your favor every time.",
    ],
    tip: "New to setbacks? Start with just 4°F for a week. Most people find the house recovers to comfortable temperature within 20–30 minutes of coming home. Once you see the savings on your bill, you'll push the setback further.",
  },
  {
    number: 7,
    icon: Calendar,
    badge: "Call a Pro",
    badgeColor: "bg-purple-100 text-purple-700",
    title: "Schedule an Annual HVAC Tune-Up",
    content: [
      "An HVAC system that hasn't been serviced in two or three years doesn't fail overnight — it degrades slowly and silently. Condenser coils get dirty and lose heat rejection efficiency. Blower wheels accumulate dust and move less air per revolution. Capacitors weaken and motors draw more starting current. None of this triggers an error code. It just quietly makes your system work harder every month.",
      "During a professional tune-up, a technician measures actual airflow, checks electrical draw at startup and during operation, cleans the evaporator and condenser coils, lubricates motor bearings, tests the refrigerant charge, and inspects the heat exchanger or heat pump components. Cumulatively, those corrections translate to shorter run times and real efficiency gains.",
      "The tune-up cost typically pays for itself within the first season through reduced run times and avoided breakdowns. Air2Cool's preventative maintenance plan members also receive 10% off parts year-round and priority scheduling for emergency calls.",
    ],
    tip: "Think of an HVAC tune-up like a car's oil change. Skipping it doesn't immediately break anything — but the deferred maintenance compounds. Consistent annual service is always cheaper than the combination of higher energy bills, shorter equipment life, and reactive repair calls.",
  },
];

export default function LowerEnergyBillsPage() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 md:py-24">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-emerald-200 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-white transition">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Energy Savings</span>
          </nav>

          {/* Category badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-4">
            <Zap className="w-4 h-4" />
            ENERGY SAVINGS
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
            Why Is My Energy Bill So High?<br className="hidden md:block" /> 7 HVAC Fixes for NJ Homeowners
          </h1>

          {/* Article meta */}
          <div className="flex flex-wrap items-center gap-4 text-emerald-200 text-sm">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              March 1, 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              7 min read
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

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-6">

          {/* Intro */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Your HVAC system — the furnace, air conditioner, and all the ductwork between them — accounts for 40–50% of a typical home&apos;s total energy use. So when your electric or gas bill jumps and nothing obvious has changed, there&apos;s a very good chance your heating or cooling equipment is working harder than it should be.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              The tricky part: a struggling HVAC system usually keeps running. It still heats and cools — it just uses 20–40% more energy doing it. Here are the seven most common HVAC causes of high energy bills in North New Jersey homes, and what you can actually do about each one.
            </p>
          </div>

          {/* Quick-scan callout */}
          <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-bold text-gray-900 mb-3">Quick Reference: DIY vs. Call a Pro</h2>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {[
                    { label: "Change your air filter", type: "DIY" },
                    { label: "Install a smart thermostat", type: "DIY" },
                    { label: "Use temperature setbacks", type: "DIY" },
                    { label: "Seal accessible duct joints", type: "DIY" },
                    { label: "Refrigerant pressure check", type: "Pro" },
                    { label: "Combustion efficiency analysis", type: "Pro" },
                    { label: "Annual HVAC tune-up", type: "Pro" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full shrink-0 ${item.type === "DIY" ? "bg-green-100 text-green-700" : "bg-purple-100 text-purple-700"}`}>
                        {item.type}
                      </span>
                      <span className="text-sm text-gray-700">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tips */}
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">The 7 Fixes</h2>

          <div className="space-y-10">
            {TIPS.map((tip) => {
              const Icon = tip.icon;
              return (
                <div key={tip.number} className="border border-gray-200 rounded-2xl overflow-hidden">
                  {/* Tip header */}
                  <div className="flex items-center gap-3 bg-gradient-to-r from-emerald-50 to-teal-50 px-6 py-4 border-b border-gray-200">
                    <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-extrabold text-lg shrink-0">
                      {tip.number}
                    </div>
                    <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-emerald-600" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 flex-1 leading-snug">
                      {tip.title}
                    </h3>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full shrink-0 hidden sm:block ${tip.badgeColor}`}>
                      {tip.badge}
                    </span>
                  </div>

                  {/* Tip body */}
                  <div className="px-6 py-5">
                    <div className="space-y-3 mb-4">
                      {tip.content.map((para, i) => (
                        <p key={i} className="text-gray-700 leading-relaxed">{para}</p>
                      ))}
                    </div>

                    {/* Pro tip */}
                    <div className="bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 flex items-start gap-3">
                      <span className="text-xs font-bold text-blue-700 bg-blue-100 px-2 py-1 rounded-full shrink-0 mt-0.5">PRO TIP</span>
                      <p className="text-sm text-blue-800 leading-relaxed">{tip.tip}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Conclusion */}
          <div className="mt-12 prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Bottom Line</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Most energy-wasting HVAC problems are invisible until the bill arrives. The system still runs, still heats and cools — it just does it inefficiently. A few of the fixes above (filter, thermostat, setbacks) are free or nearly free and take 20 minutes. Others require a licensed technician but pay for themselves quickly.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If you&apos;ve already handled the DIY items and your bills are still high, it&apos;s time for a professional energy efficiency inspection. Air2Cool&apos;s technicians check refrigerant pressures, run combustion analysis, test airflow, inspect duct sealing, and identify the biggest efficiency gaps in your specific system — so you know exactly where your money is going and how to stop it.
            </p>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-700 to-teal-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Lower Your Energy Bills?
          </h2>
          <p className="text-xl text-emerald-100 mb-3">
            Air2Cool&apos;s certified technicians serve Morris County &amp; North NJ. We offer energy efficiency inspections, annual tune-ups, refrigerant pressure checks, and combustion analysis.
          </p>
          <p className="text-emerald-200 mb-8">
            Call us at (201) 787-5657 for a tune-up or energy efficiency inspection — most homeowners see the savings on their very next bill.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-emerald-700 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-50 transition"
            >
              Schedule an Inspection
            </Link>
            <a
              href="tel:+12017875657"
              className="bg-white/10 backdrop-blur text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white hover:bg-white/20 transition flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call (201) 787-5657
            </a>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Related Services</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                href: "/services/preventative-maintenance",
                label: "Preventative Maintenance",
                desc: "Annual HVAC tune-up plans. 10% parts discount included for members.",
                color: "from-emerald-500 to-teal-500",
              },
              {
                href: "/services/ac-repair",
                label: "AC Repair & Refrigerant Service",
                desc: "Refrigerant pressure checks, leak detection, and same-day AC repairs.",
                color: "from-blue-500 to-cyan-500",
              },
              {
                href: "/services/heating-repair",
                label: "Heating Repair & Tune-Up",
                desc: "Combustion analysis, furnace tune-ups, and 24/7 emergency heating repair.",
                color: "from-orange-500 to-amber-500",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all"
              >
                <div className={`h-2 bg-gradient-to-r ${item.color}`} />
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 group-hover:text-brand-blue transition mb-2">
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
