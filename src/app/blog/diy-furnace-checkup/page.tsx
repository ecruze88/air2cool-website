import type { Metadata } from "next";
import {
  Flame,
  CheckCircle,
  AlertTriangle,
  Shield,
  Thermometer,
  Volume2,
  Wind,
  Droplets,
  Calendar,
  Clock,
  Phone,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DIY Furnace Checkup: 8 Steps to Do Before Winter | Air2Cool",
  description:
    "Learn how to do a DIY furnace checkup before winter. Check air filters, inspect ignition, test CO detectors, and know when to call a pro. Step-by-step guide from North NJ's top HVAC contractor. Call (201) 787-5657.",
  keywords: [
    "DIY furnace checkup",
    "furnace maintenance checklist",
    "how to check your furnace",
    "annual furnace maintenance",
    "furnace inspection at home",
    "furnace not working NJ",
    "furnace maintenance North NJ",
    "furnace tune up checklist",
    "fall furnace checkup",
    "furnace safety check",
  ],
  alternates: {
    canonical: "/blog/diy-furnace-checkup",
  },
  openGraph: {
    title: "DIY Furnace Checkup: 8 Steps to Do Before Winter | Air2Cool",
    description:
      "8-step DIY furnace checkup guide for NJ homeowners. Replace filters, inspect ignition, test CO detectors — and know when to stop and call a pro.",
    url: "/blog/diy-furnace-checkup",
    type: "article",
  },
};

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "DIY Furnace Checkup: 8 Steps to Do Before Winter",
  "description":
    "A comprehensive step-by-step guide for homeowners in North NJ to perform a DIY furnace checkup before winter. Covers filter replacement, ignition inspection, CO detector testing, and warning signs to call a professional.",
  "url": "https://www.air2cool.com/blog/diy-furnace-checkup",
  "datePublished": "2025-10-15",
  "dateModified": "2025-10-15",
  "articleSection": "Furnace Maintenance",
  "keywords": "DIY furnace checkup, furnace maintenance checklist, furnace inspection",
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
    "@id": "https://www.air2cool.com/blog/diy-furnace-checkup",
  },
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Do a DIY Furnace Checkup",
  "description":
    "8 steps to inspect your furnace before winter to prevent breakdowns and ensure safe, efficient heating.",
  "totalTime": "PT45M",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "USD",
    "value": "15",
  },
  "supply": [
    { "@type": "HowToSupply", "name": "Replacement air filter (matching your current size)" },
    { "@type": "HowToSupply", "name": "Flashlight" },
    { "@type": "HowToSupply", "name": "Carbon monoxide detector" },
  ],
  "tool": [
    { "@type": "HowToTool", "name": "Screwdriver (flathead)" },
  ],
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Replace the Air Filter",
      "text": "Locate your furnace filter slot (usually near the air intake). Remove the old filter and note the size printed on the frame. Insert a new filter with the arrow pointing toward the furnace. Replace every 1–3 months during heating season.",
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Check the Thermostat",
      "text": "Set your thermostat to Heat mode and raise the temperature 5°F above room temperature. Your furnace should start within 1–2 minutes. If it doesn't respond, check the batteries and ensure the mode is set correctly.",
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Inspect the Pilot Light or Electronic Ignition",
      "text": "For older furnaces, the pilot light flame should burn steady blue. An orange or flickering flame can indicate a dirty burner or thermocouple issue. Modern furnaces use electronic ignition — listen for a clicking sound followed by the burner igniting.",
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Listen for Unusual Noises",
      "text": "Let the furnace run for a full cycle. Banging at startup suggests delayed ignition. Squealing may indicate a worn blower belt or bearing. Rattling could mean a loose panel or heat exchanger issue. Any persistent noise warrants a professional inspection.",
    },
    {
      "@type": "HowToStep",
      "position": 5,
      "name": "Check Vents and Registers",
      "text": "Walk through each room and ensure all supply and return registers are open and unobstructed. Move furniture, rugs, or curtains away from vents. Blocked airflow strains the system and reduces efficiency.",
    },
    {
      "@type": "HowToStep",
      "position": 6,
      "name": "Inspect the Condensate Drain (High-Efficiency Furnaces)",
      "text": "High-efficiency furnaces (AFUE 90%+) produce condensation. Locate the white PVC drain line and check that it flows freely into a floor drain or condensate pump. A clogged drain can trigger a safety shutoff.",
    },
    {
      "@type": "HowToStep",
      "position": 7,
      "name": "Inspect the Flue and Exhaust Pipe",
      "text": "Visually inspect the metal flue pipe connecting your furnace to the chimney or exterior vent. Look for rust, disconnected joints, or visible holes. A compromised flue can allow carbon monoxide into your home — do not operate the furnace if you find damage.",
    },
    {
      "@type": "HowToStep",
      "position": 8,
      "name": "Test Carbon Monoxide and Smoke Detectors",
      "text": "Press the test button on all CO and smoke detectors. Replace batteries if the alarm sounds weak or doesn't sound at all. Place a CO detector within 10 feet of your furnace if you don't already have one.",
    },
  ],
};

const STEPS = [
  {
    number: 1,
    icon: Wind,
    title: "Replace the Air Filter",
    content: [
      "A clogged filter is the #1 cause of reduced furnace efficiency and early breakdowns. During peak heating season, North NJ homes with pets or dust accumulation can clog a filter in as little as 4–6 weeks.",
      "Find your filter slot — typically a rectangular slot on the side or bottom of the furnace unit, or inside the return air duct near the air handler. Remove the old filter and check the size printed on the cardboard frame (e.g., 16x25x1).",
      "Insert the new filter with the airflow arrow pointing toward the furnace blower, not away from it. Write the installation date on the frame with a marker so you remember when to change it next.",
    ],
    tip: "Use a MERV 8–11 rated filter for most homes. Higher MERV ratings (13+) can restrict airflow on older systems. Ask your HVAC tech what rating is right for your equipment.",
  },
  {
    number: 2,
    icon: Thermometer,
    title: "Check the Thermostat",
    content: [
      "Before assuming your furnace has a problem, verify the thermostat is working correctly. Switch it to Heat mode, set it 5°F above the current room temperature, and listen for the furnace to engage within 1–2 minutes.",
      "If nothing happens, replace the thermostat batteries — this solves the problem more often than you'd think. Also confirm the fan setting is on Auto (not On), which runs the blower only when the furnace is actively heating.",
      "If your thermostat is more than 10 years old or still uses a dial, upgrading to a programmable or Wi-Fi thermostat (like the Honeywell T10) can reduce your heating bill by up to 10%.",
    ],
    tip: "Smart thermostats with scheduling features can learn your patterns and automatically optimize when your furnace runs — saving fuel without sacrificing comfort.",
  },
  {
    number: 3,
    icon: Flame,
    title: "Inspect the Pilot Light / Electronic Ignition",
    content: [
      "Older furnaces (pre-2000) use a standing pilot light that burns continuously. Open the furnace access panel and look for a small blue flame. A steady blue flame is healthy. If the flame is orange, yellow, or flickering, there may be a dirty burner or a failing thermocouple.",
      "Modern furnaces use intermittent electronic ignition — no standing flame. When the thermostat calls for heat, you'll hear a clicking sound (the igniter) followed by the burner firing. If the furnace clicks repeatedly without igniting, the igniter may be failing.",
      "If the pilot light won't stay lit: turn the gas valve to Off, wait 5 minutes, then try relighting according to the label on your furnace door. If it goes out again within a few minutes, the thermocouple likely needs replacement — a $50–$100 repair a tech can handle in under an hour.",
    ],
    tip: "Never attempt to repair burner components or gas valves yourself. If you smell gas at any point during your checkup, leave the house immediately and call your gas utility.",
  },
  {
    number: 4,
    icon: Volume2,
    title: "Listen for Unusual Noises",
    content: [
      "Let your furnace run through a complete heat cycle (until the thermostat is satisfied and the blower shuts off). Different noises mean different problems:",
      "Banging or booming at startup: Often delayed ignition — gas builds up before finally igniting. This can stress the heat exchanger over time.",
      "Squealing or whining: Usually a worn blower motor belt or dry motor bearings. Easily fixed if caught early — ignored, it can lead to a burned-out motor.",
      "Rattling or vibrating: Check that the access panels are fully secured. Loose panels are harmless, but rattling from inside the unit may indicate a loose heat exchanger component — which can cause CO leaks.",
      "Rumbling after shutdown: Likely dirty burners causing combustion to continue briefly after the gas shuts off. Burner cleaning is part of a professional tune-up.",
    ],
    tip: "Record a short video of unusual noises on your phone before calling a technician. It helps diagnose the problem faster and can save you a service call.",
  },
  {
    number: 5,
    icon: CheckCircle,
    title: "Check Vents and Registers",
    content: [
      "Walk through your home and physically inspect every supply vent (warm air blows out) and return vent (pulls air in). Ensure they're open — it's common for homeowners to close vents in unused rooms thinking it saves energy, but it actually increases static pressure and strains the system.",
      "Look for blocked return vents. Large return registers are often located low on a wall or on the floor. Make sure rugs, furniture, and curtains aren't covering them.",
      "Feel for airflow at each supply vent while the furnace is running. Rooms with very weak airflow may have a partially collapsed or disconnected duct — worth investigating before winter.",
    ],
    tip: "Clean supply registers with a vacuum brush attachment at the start of each season to prevent dust and debris from recirculating through your home.",
  },
  {
    number: 6,
    icon: Droplets,
    title: "Inspect the Condensate Drain (High-Efficiency Furnaces)",
    content: [
      "If your furnace has an AFUE rating of 90% or higher — usually identifiable by a white PVC flue pipe instead of metal — it produces condensation as a byproduct of combustion and needs a drain line.",
      "Locate the condensate drain: a clear or white 3/4\" PVC pipe running from the furnace to a floor drain, utility sink, or condensate pump. Pour a small amount of water into the drain pan and confirm it flows freely.",
      "A clogged condensate drain will trigger the furnace's float switch safety shutoff — a common reason high-efficiency furnaces unexpectedly stop working in winter. You can clear minor clogs with a wet/dry vacuum attached to the drain outlet.",
    ],
    tip: "Adding a small amount of diluted white vinegar (1 cup per year) to the condensate pan helps prevent algae and biological buildup in the drain line.",
  },
  {
    number: 7,
    icon: Shield,
    title: "Inspect the Flue and Exhaust Pipe",
    content: [
      "The flue pipe carries combustion exhaust (including carbon monoxide) safely out of your home. For standard-efficiency furnaces, this is a metal B-vent or single-wall pipe running to the chimney. For high-efficiency furnaces, it's white PVC exiting through a sidewall.",
      "Visually trace the entire flue pipe from the furnace to its exit point. Look for: visible rust spots or holes, joints that have separated or are only loosely connected, and any dark discoloration or soot streaks on the outside of the pipe (indicates leakage).",
      "Any damage to the flue pipe is a serious safety hazard. Carbon monoxide from a leaking flue can accumulate in your home silently. If you find damage, do not run the furnace — call an HVAC contractor immediately.",
    ],
    tip: "Have your chimney inspected every 1–2 years if you have a gas furnace that vents through a masonry chimney. Deteriorating mortar and blockages from bird nests are common.",
  },
  {
    number: 8,
    icon: Shield,
    title: "Test Carbon Monoxide and Smoke Detectors",
    content: [
      "Carbon monoxide is odorless and colorless — CO detectors are your only warning system. Press the test button on every CO and smoke detector in your home. If the alarm sounds weak, replace the batteries. If the unit is more than 5 years old, replace the entire detector.",
      "You should have at least one CO detector on every floor of your home, and one within 10 feet of each gas appliance including your furnace, water heater, and oven.",
      "If your CO detector goes off during normal furnace operation, leave your home immediately, call 911, and then your gas utility. Do not re-enter until emergency services clear the building.",
    ],
    tip: "Combination smoke/CO detectors are available for as little as $30 at most hardware stores. The First Alert SCO5CN is a reliable, well-reviewed option for NJ homeowners.",
  },
];

const WARNING_SIGNS = [
  "Yellow or orange pilot light flame (should always be blue)",
  "Rotten egg smell — evacuate and call your gas company",
  "Visible cracks or holes in the heat exchanger or flue pipe",
  "CO detector alarm triggering during furnace operation",
  "Short cycling (furnace turns on and off every few minutes)",
  "Furnace running continuously but home won't reach set temperature",
  "Water pooling around the furnace base (beyond condensate)",
  "Burning smell that persists after first startup of the season",
];

export default function DIYFurnaceCheckupPage() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-orange-900 via-amber-800 to-orange-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 py-10 md:py-24">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-orange-200 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-white transition">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Heating</span>
          </nav>

          {/* Category badge */}
          <div className="inline-flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-4">
            <Flame className="w-4 h-4" />
            HEATING
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
            DIY Furnace Checkup: 8 Steps to Do Before Winter
          </h1>

          {/* Article meta */}
          <div className="flex flex-wrap items-center gap-4 text-orange-200 text-sm">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              October 15, 2025
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              8 min read
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
      <article className="py-10 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6">

          {/* Intro */}
          <div className="prose max-w-none mb-8 md:mb-12">
            <p className="text-base md:text-xl text-gray-700 leading-relaxed mb-4 md:mb-6">
              North New Jersey winters are brutal — and the last thing you want is to discover your furnace won&apos;t start on the first genuinely cold night in November. The good news: most furnace problems that cause mid-winter breakdowns show warning signs weeks or months beforehand. A simple 45-minute DIY checkup every fall can catch those issues early, keep your heating bills low, and protect your family.
            </p>
            <p className="text-sm md:text-lg text-gray-600 leading-relaxed mb-4 md:mb-6">
              This guide walks you through 8 practical steps any homeowner can do without special tools. At each step, we&apos;ll also tell you when what you&apos;re seeing means it&apos;s time to stop and call a licensed HVAC technician.
            </p>
          </div>

          {/* Safety First Box */}
          <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-6 md:p-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Safety First — Before You Begin</h2>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <span>Set your thermostat to Off before opening any furnace panels.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <span>Locate your gas shutoff valve — it&apos;s typically a lever on the gas line near the furnace. Know how to turn it off before you start.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <span>Never use an open flame to look inside the furnace — use a flashlight only.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <span>If you smell gas at any point: stop immediately, leave the house, and call PSE&amp;G (NJ gas utility) at 1-800-880-7734 from outside.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <span>This checklist is for visual inspection and basic maintenance only. Do not attempt to repair gas lines, heat exchangers, or electrical components.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Steps */}
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6 md:mb-8">The 8-Step Furnace Checkup</h2>

          <div className="space-y-10">
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="border border-gray-200 rounded-2xl overflow-hidden">
                  {/* Step header */}
                  <div className="flex items-center gap-4 bg-gradient-to-r from-orange-50 to-amber-50 px-6 py-4 border-b border-gray-200">
                    <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-extrabold text-lg shrink-0">
                      {step.number}
                    </div>
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  </div>

                  {/* Step body */}
                  <div className="px-6 py-5">
                    <div className="space-y-3 mb-4">
                      {step.content.map((para, i) => (
                        <p key={i} className="text-gray-700 leading-relaxed">{para}</p>
                      ))}
                    </div>

                    {/* Pro tip */}
                    <div className="bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 flex items-start gap-3">
                      <span className="text-xs font-bold text-blue-700 bg-blue-100 px-2 py-1 rounded-full shrink-0 mt-0.5">PRO TIP</span>
                      <p className="text-sm text-blue-800 leading-relaxed">{step.tip}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Warning Signs */}
          <div className="mt-16 bg-red-50 border-2 border-red-200 rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center shrink-0">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">Stop — Call a Pro If You See These</h2>
                <p className="text-gray-600">These signs go beyond DIY territory. Do not operate your furnace if any of these apply:</p>
              </div>
            </div>
            <ul className="grid sm:grid-cols-2 gap-3">
              {WARNING_SIGNS.map((sign, i) => (
                <li key={i} className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-1" />
                  <span className="text-gray-800 text-sm leading-relaxed">{sign}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Conclusion */}
          <div className="mt-12 prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Bottom Line</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A DIY furnace checkup takes less than an hour and can save you hundreds — or thousands — in emergency repair costs. But it&apos;s no substitute for a professional tune-up. A licensed HVAC technician will go deeper: measuring heat exchanger integrity, checking gas pressure and combustion efficiency, testing safety controls, and cleaning the burners and heat exchanger surfaces that aren&apos;t accessible in a DIY inspection.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At Air2Cool, we recommend combining a DIY checkup every fall with a professional preventative maintenance visit every 1–2 years. It&apos;s the best combination for a long equipment life, low utility bills, and peace of mind through New Jersey winters.
            </p>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-10 md:py-16 bg-gradient-to-r from-orange-700 to-amber-600">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center text-white">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-3 md:mb-4">
            Want a Pro to Handle It?
          </h2>
          <p className="text-base md:text-xl text-orange-100 mb-6 md:mb-8">
            Air2Cool&apos;s certified technicians serve Morris County &amp; North NJ. We offer annual furnace tune-ups, 24/7 emergency repairs, and honest flat-rate pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-orange-700 px-8 py-4 rounded-full font-bold text-base md:text-lg shadow-lg hover:bg-gray-50 transition text-center"
            >
              Schedule a Tune-Up
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
                href: "/services/heating-repair",
                label: "Heating Repair",
                desc: "24/7 emergency furnace & boiler repair. All major brands serviced.",
                color: "from-red-500 to-orange-500",
              },
              {
                href: "/services/preventative-maintenance",
                label: "Preventative Maintenance",
                desc: "Annual HVAC tune-up plans. 10% parts discount included.",
                color: "from-amber-500 to-yellow-500",
              },
              {
                href: "/services/heating-installation",
                label: "Furnace & Boiler Installation",
                desc: "Upgrade to a high-efficiency system. Free house cleaning included.",
                color: "from-orange-600 to-red-600",
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
