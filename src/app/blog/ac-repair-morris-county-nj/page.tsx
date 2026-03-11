import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AC Repair in Morris County NJ — What to Expect and Who to Call | Air2Cool",
  description:
    "AC not cooling your home in Morris County NJ? Learn what causes it, what to expect from a repair visit, and why Air2Cool is Morris County's most trusted AC repair company. Call (201) 787-5657.",
  keywords: [
    "AC repair Morris County NJ",
    "AC not cooling house NJ",
    "air conditioner repair Morris County",
    "HVAC repair Morristown NJ",
    "AC repair Parsippany NJ",
    "AC repair Denville NJ",
    "emergency AC repair Morris County",
  ],
  alternates: {
    canonical: "/blog/ac-repair-morris-county-nj",
  },
  openGraph: {
    title: "AC Repair in Morris County NJ — What to Expect and Who to Call",
    description:
      "AC not cooling your home in Morris County? Learn what causes it and who to call for fast, reliable AC repair. Air2Cool serves all of Morris County NJ.",
    url: "/blog/ac-repair-morris-county-nj",
    type: "article",
  },
};

export default function ACRepairMorrisCountyBlogPost() {
  return (
    <main className="bg-white">
      <article className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        {/* Header */}
        <header className="mb-10">
          <div className="text-sm text-blue-600 font-semibold mb-2 uppercase tracking-wide">
            Air2Cool Blog · Morris County, NJ
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            AC Repair in Morris County NJ — What to Expect and Who to Call
          </h1>
          <p className="text-gray-500 text-sm">
            Published by Air2Cool Heating &amp; Cooling · Serving Morris County since 1998
          </p>
        </header>

        {/* Intro */}
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
          It's the hottest week of the summer in Morris County, and your air conditioner decides to stop working. It's one of the most frustrating situations a homeowner can face — but it's also one of the most common calls we get at Air2Cool. Whether you're in Morristown, Parsippany, Randolph, Denville, or Rockaway, understanding what's happening with your AC and what to expect from a repair visit can save you time, money, and a lot of stress.
        </p>

        {/* Section 1 */}
        <section className="mb-10">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
            Why Is My AC Not Cooling the House?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            "AC not cooling house NJ" is one of the most searched HVAC phrases every summer — and for good reason. There are several common causes, and not all of them require expensive repairs:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-2">
            <li><strong>Low refrigerant (freon):</strong> A refrigerant leak is one of the most common causes of an AC blowing warm air. You'll also notice ice forming on the lines.</li>
            <li><strong>Dirty air filter:</strong> A clogged filter restricts airflow and can cause the system to freeze up or perform poorly. Check yours first — it's a free fix.</li>
            <li><strong>Failed capacitor:</strong> Capacitors start the compressor and fan motors. When they fail, the unit won't cool. This is a relatively inexpensive repair.</li>
            <li><strong>Compressor failure:</strong> The compressor is the heart of the AC system. If it fails, the unit will run but produce no cooling. This is a larger repair or may justify replacement.</li>
            <li><strong>Frozen evaporator coil:</strong> Usually caused by restricted airflow or low refrigerant. The unit runs but can't transfer heat properly.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            The right diagnosis matters. A licensed technician will check each of these systematically before recommending any work. At Air2Cool, we give you a clear explanation of what's wrong and what it will cost before we touch anything.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-10">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
            What to Expect During an AC Repair Visit in Morris County
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            When you call for{" "}
            <Link href="/services/ac-repair" className="text-blue-600 hover:underline font-semibold">
              AC repair in Morris County NJ
            </Link>
            , here's what typically happens:
          </p>
          <ol className="list-decimal list-inside text-gray-700 space-y-3 ml-2">
            <li><strong>Scheduling:</strong> We offer same-day appointments throughout Morris County when you call early in the day, and 24/7 emergency service for urgent situations.</li>
            <li><strong>Diagnosis:</strong> Our technician inspects the system — checking refrigerant pressure, electrical components, thermostat function, airflow, and more.</li>
            <li><strong>Estimate:</strong> Before any work begins, we give you a clear price. No guessing, no hidden fees.</li>
            <li><strong>Repair:</strong> Most repairs are completed in one visit. We carry common parts on our trucks to avoid unnecessary delays.</li>
            <li><strong>Testing:</strong> We test the full system before we leave to confirm everything is working properly and your home is cooling down.</li>
          </ol>
        </section>

        {/* Section 3 */}
        <section className="mb-10">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
            Morris County Towns We Serve for AC Repair
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Air2Cool is based in Wharton and serves every town in{" "}
            <Link href="/service-areas/morris-county" className="text-blue-600 hover:underline font-semibold">
              Morris County
            </Link>
            . Our most frequently served towns include:
          </p>
          <div className="grid sm:grid-cols-2 gap-2 mb-4">
            {[
              { name: "Morristown", slug: "morristown" },
              { name: "Parsippany-Troy Hills", slug: "parsippany-troy-hills" },
              { name: "Randolph", slug: "randolph" },
              { name: "Denville", slug: "denville" },
              { name: "Rockaway", slug: "rockaway" },
              { name: "Dover", slug: "dover" },
              { name: "Wharton", slug: "wharton" },
              { name: "Madison", slug: "madison" },
            ].map((town) => (
              <Link
                key={town.slug}
                href={`/service-areas/${town.slug}`}
                className="text-blue-600 hover:underline text-sm font-medium"
              >
                → AC Repair in {town.name}, NJ
              </Link>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Morris County's diverse housing stock — from historic colonials in Morristown to newer developments in Randolph and Parsippany — means we work on a wide range of equipment. We're comfortable with older systems and the latest high-efficiency models alike.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-10">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
            Should You Repair or Replace Your AC System?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            This is one of the most common questions we field from Morris County homeowners. The answer depends on a few key factors:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-2">
            <li><strong>Age of the system:</strong> Most central AC units last 12–15 years. If yours is approaching that range and needs a major repair, replacement often makes more financial sense.</li>
            <li><strong>Cost of repair vs. replacement:</strong> The general rule: if the repair costs more than 50% of a new system's price, replace it.</li>
            <li><strong>Frequency of repairs:</strong> If you've called for repairs multiple times in recent years, a new system will likely be cheaper over time.</li>
            <li><strong>Energy efficiency:</strong> Older systems have much lower SEER ratings than modern units. A new system can significantly reduce your electric bills each summer.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Our technicians will always give you an honest assessment — we never push a replacement if a repair is the right call. If a new system does make sense, we install top brands with 0% APR financing available. Learn more on our{" "}
            <Link href="/services/hvac-installation" className="text-blue-600 hover:underline">
              HVAC installation page
            </Link>
            .
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-10">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
            Why Morris County Homeowners Choose Air2Cool
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            There are plenty of HVAC companies serving Morris County, but Air2Cool stands out for a few key reasons:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
            <li><strong>26+ years of experience</strong> serving Morris County homes and businesses</li>
            <li><strong>Licensed Master HVAC Technicians</strong> — not trainees or subcontractors</li>
            <li><strong>Same-day and 24/7 emergency service</strong> available year-round</li>
            <li><strong>Honest, transparent pricing</strong> — free estimates before any work begins</li>
            <li><strong>Family-owned and locally operated</strong> — we care about our neighbors</li>
            <li><strong>250+ five-star Google reviews</strong> from real Morris County customers</li>
          </ul>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-700 to-cyan-600 rounded-2xl p-7 md:p-10 text-white text-center mt-10">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
            Need AC Repair in Morris County? Call Us Today.
          </h2>
          <p className="text-blue-100 mb-6 text-base md:text-lg">
            Call Air2Cool at{" "}
            <a href="tel:+12017875657" className="font-bold underline hover:no-underline">
              (201) 787-5657
            </a>{" "}
            for same-day AC repair in Morris County. Or{" "}
            <Link href="/contact" className="font-bold underline hover:no-underline">
              request a free estimate online
            </Link>
            .
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+12017875657"
              className="bg-white text-blue-700 px-7 py-3.5 rounded-full font-bold text-base md:text-lg shadow-lg hover:bg-gray-50 transition"
            >
              Call (201) 787-5657
            </a>
            <Link
              href="/contact"
              className="bg-white/10 border-2 border-white text-white px-7 py-3.5 rounded-full font-semibold text-base md:text-lg hover:bg-white/20 transition text-center"
            >
              Free Estimate
            </Link>
          </div>
          <p className="mt-5 text-blue-200 text-sm">
            Also see:{" "}
            <Link href="/services/ac-repair" className="underline hover:text-white">AC Repair Services</Link>
            {" · "}
            <Link href="/service-areas/morris-county" className="underline hover:text-white">Morris County Service Area</Link>
          </p>
        </div>
      </article>
    </main>
  );
}
