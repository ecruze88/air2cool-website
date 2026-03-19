import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HVAC Maintenance Plans in NJ — What's Included & Is It Worth It? | Air2Cool",
  description:
    "Wondering if an HVAC maintenance plan in NJ is worth the cost? Learn what's included in Air2Cool's plan, how annual tune-ups prevent costly breakdowns, and how to sign up. Serving Morris County & North NJ.",
  keywords: [
    "HVAC maintenance plan NJ",
    "HVAC tune up North Jersey",
    "AC maintenance plan Morris County",
    "furnace maintenance plan NJ",
    "HVAC service agreement New Jersey",
    "preventative HVAC maintenance NJ",
  ],
  alternates: {
    canonical: "/blog/hvac-maintenance-plan-nj",
  },
  openGraph: {
    title: "HVAC Maintenance Plans in NJ — What's Included & Is It Worth It?",
    description:
      "Is an HVAC maintenance plan worth it in NJ? Learn what Air2Cool's plan covers, how much you'll save versus emergency repairs, and how to sign up.",
    url: "/blog/hvac-maintenance-plan-nj",
    type: "article",
  },
};

export default function HvacMaintenancePlanBlogPost() {
  return (
    <main className="bg-white">
      <article className="max-w-3xl mx-auto px-4 md:px-6 py-10 md:py-16">
        {/* Header */}
        <header className="mb-10">
          <div className="text-sm text-green-600 font-semibold mb-2 uppercase tracking-wide">
            Air2Cool Blog · Maintenance &amp; Prevention
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            HVAC Maintenance Plans in NJ — What&apos;s Included &amp; Is It Worth It?
          </h1>
          <p className="text-gray-500 text-sm">
            Published by Air2Cool Heating &amp; Cooling · Serving Morris County &amp; North NJ since 1998
          </p>
        </header>

        {/* Intro */}
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
          Your heating and cooling system is one of the most expensive pieces of equipment in your home — and one of the most neglected. An HVAC maintenance plan is essentially insurance against the worst-case scenario: your furnace dying in February or your AC failing on the hottest day of the year. But is it actually worth the cost? We'll break down exactly what a good plan covers, how it compares to the cost of emergency repairs, and what Air2Cool's maintenance plan includes for North NJ homeowners.
        </p>

        {/* Section 1 */}
        <section className="mb-10">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
            What Does an HVAC Maintenance Plan Include?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A solid HVAC maintenance plan typically covers two visits per year — one in fall before heating season, one in spring before cooling season. At each visit, a licensed technician runs a comprehensive inspection and tune-up of your system. Here's what that looks like at Air2Cool:
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
              <h3 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wide">🔥 Fall Heating Tune-Up</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Inspect and clean heat exchanger</li>
                <li>• Check flue and venting for blockages</li>
                <li>• Test ignition system and safety controls</li>
                <li>• Inspect and clean burners</li>
                <li>• Check gas pressure and connections</li>
                <li>• Lubricate blower motor bearings</li>
                <li>• Test thermostat calibration</li>
                <li>• Measure temperature rise across heat exchanger</li>
                <li>• Replace air filter (standard 1-inch)</li>
                <li>• Carbon monoxide check</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <h3 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wide">❄️ Spring Cooling Tune-Up</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Check refrigerant charge and inspect for leaks</li>
                <li>• Clean condenser coils</li>
                <li>• Inspect and straighten condenser fins</li>
                <li>• Test capacitors and contactors</li>
                <li>• Check electrical connections and wiring</li>
                <li>• Measure amperage on compressor and fan motors</li>
                <li>• Clear condensate drain line</li>
                <li>• Inspect evaporator coil</li>
                <li>• Test thermostat and system controls</li>
                <li>• Replace air filter (standard 1-inch)</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">
            This is a thorough inspection — not a 20-minute walkthrough. A proper tune-up catches small issues (a worn capacitor, a cracked heat exchanger, a clogged drain line) before they turn into emergency repairs or system failures. Learn more on our{" "}
            <Link href="/services/preventative-maintenance" className="text-blue-600 hover:underline font-semibold">
              preventative maintenance page
            </Link>
            .
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-10">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
            Annual vs. Bi-Annual Visits: What's the Difference?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Some companies offer maintenance plans with just one visit per year. For most New Jersey homes — where you're running the heat hard from November through March and the AC hard from June through September — one visit per year isn't enough.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>One visit per year</strong> makes sense if you have a newer system (under 5 years old) with no history of issues, or if your home has separate heating and cooling systems on different schedules.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Two visits per year</strong> is the right call for most NJ homeowners. Heating and cooling are two separate systems with different components that need to be checked seasonally. A spring AC tune-up and a fall heating tune-up keep both systems dialed in year-round.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-10">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
            Maintenance Plan Cost vs. Emergency Repair Cost
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Here's the comparison that makes the math obvious:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm text-left border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-gray-100 text-gray-700 font-semibold">
                <tr>
                  <th className="px-4 py-3">Scenario</th>
                  <th className="px-4 py-3">Typical Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-700">
                <tr><td className="px-4 py-3">Annual maintenance plan (2 visits)</td><td className="px-4 py-3">$180 – $350 / year</td></tr>
                <tr><td className="px-4 py-3">Emergency AC service call (weekend)</td><td className="px-4 py-3">$150 – $300 (just the call)</td></tr>
                <tr><td className="px-4 py-3">Capacitor failure (preventable with inspection)</td><td className="px-4 py-3">$200 – $400</td></tr>
                <tr><td className="px-4 py-3">Clogged condensate drain causing water damage</td><td className="px-4 py-3">$500 – $2,000+</td></tr>
                <tr><td className="px-4 py-3">Compressor failure from refrigerant overcharge</td><td className="px-4 py-3">$1,200 – $2,500</td></tr>
                <tr><td className="px-4 py-3">Heat exchanger failure (caught late)</td><td className="px-4 py-3">$1,500 – full replacement</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed">
            One prevented emergency repair typically pays for 2–3 years of a maintenance plan. The real value isn't just the money — it's not losing heat in January or AC during a July heat wave.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-10">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
            What Air2Cool&apos;s Maintenance Plan Covers
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Air2Cool's maintenance plan is built for Morris County and North NJ homeowners who want to protect their equipment investment and avoid emergency breakdowns. Plan members receive:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
            <li><strong>Two comprehensive tune-up visits</strong> per year (fall heating + spring cooling)</li>
            <li><strong>Priority scheduling</strong> — plan members move to the front of the line during peak season</li>
            <li><strong>Discounts on repairs</strong> — plan members receive a discount on any repair labor needed during or after a tune-up visit</li>
            <li><strong>Filter replacements</strong> included at each visit (standard 1-inch filters)</li>
            <li><strong>Full written report</strong> after each visit with system condition findings and any recommendations</li>
            <li><strong>Reminders and scheduling</strong> — we contact you when it's time, so you don't have to remember</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            We also offer{" "}
            <Link href="/financing" className="text-blue-600 hover:underline font-semibold">
              financing options
            </Link>{" "}
            if a tune-up reveals your system needs significant repairs or replacement.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-10">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
            How to Sign Up
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Signing up for Air2Cool's maintenance plan is straightforward. You can:
          </p>
          <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-2">
            <li>Call us at <a href="tel:+12017875657" className="text-blue-600 hover:underline font-semibold">(201) 787-5657</a> to speak with a technician and set up your first visit</li>
            <li>Fill out our{" "}
              <Link href="/contact" className="text-blue-600 hover:underline font-semibold">
                online contact form
              </Link>{" "}
              and mention you'd like to enroll in the maintenance plan</li>
          </ol>
          <p className="text-gray-700 leading-relaxed mt-4">
            There's no long-term contract — we keep it simple. Most homeowners who join renew every year because they see the value firsthand. If for any reason you're not happy, you're not locked in.
          </p>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-green-700 to-teal-600 rounded-2xl p-7 md:p-10 text-white text-center mt-10">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
            Sign Up for Air2Cool&apos;s Maintenance Plan
          </h2>
          <p className="text-green-100 mb-6 text-base md:text-lg">
            Protect your HVAC investment and avoid emergency breakdowns. Call{" "}
            <a href="tel:+12017875657" className="font-bold underline hover:no-underline">
              (201) 787-5657
            </a>{" "}
            or contact us online to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+12017875657"
              className="bg-white text-green-700 px-7 py-3.5 rounded-full font-bold text-base md:text-lg shadow-lg hover:bg-gray-50 transition"
            >
              Call (201) 787-5657
            </a>
            <Link
              href="/contact"
              className="bg-white/10 border-2 border-white text-white px-7 py-3.5 rounded-full font-semibold text-base md:text-lg hover:bg-white/20 transition text-center"
            >
              Sign Up Online
            </Link>
          </div>
          <p className="mt-5 text-green-200 text-sm">
            Also see:{" "}
            <Link href="/maintenance-contract" className="underline hover:text-white">Sign Up for a Maintenance Plan</Link>
            {" · "}
            <Link href="/services/preventative-maintenance" className="underline hover:text-white">Preventative Maintenance</Link>
            {" · "}
            <Link href="/financing" className="underline hover:text-white">Financing Options</Link>
          </p>
        </div>
      </article>
    </main>
  );
}
