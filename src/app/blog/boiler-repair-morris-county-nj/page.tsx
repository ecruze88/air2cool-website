import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Boiler Repair in Morris County NJ — Common Problems & What They Cost | Air2Cool",
  description:
    "Boiler not working in Morris County NJ? Learn the most common boiler problems, what repairs typically cost, and when to replace. Air2Cool offers 24/7 emergency boiler repair. Call (201) 787-5657.",
  keywords: [
    "boiler repair Morris County NJ",
    "boiler not working NJ",
    "emergency boiler repair Morris County",
    "boiler repair Morristown NJ",
    "boiler repair Parsippany NJ",
    "boiler service North Jersey",
  ],
  alternates: {
    canonical: "/blog/boiler-repair-morris-county-nj",
  },
  openGraph: {
    title: "Boiler Repair in Morris County NJ — Common Problems & What They Cost",
    description:
      "Boiler not working in Morris County? Learn what's wrong, what it costs to fix, and when to call for emergency boiler repair. Air2Cool serves all of Morris County NJ.",
    url: "/blog/boiler-repair-morris-county-nj",
    type: "article",
  },
};

export default function BoilerRepairMorrisCountyBlogPost() {
  return (
    <main className="bg-white">
      <article className="max-w-3xl mx-auto px-4 md:px-6 py-10 md:py-16">
        {/* Header */}
        <header className="mb-10">
          <div className="text-sm text-red-600 font-semibold mb-2 uppercase tracking-wide">
            Air2Cool Blog · Boiler &amp; Heating Repair
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            Boiler Repair in Morris County NJ — Common Problems &amp; What They Cost
          </h1>
          <p className="text-gray-500 text-sm">
            Published by Air2Cool Heating &amp; Cooling · Serving Morris County since 1998
          </p>
        </header>

        {/* Intro */}
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
          Boilers are one of the most reliable heating systems you can own — but when they break down in January in Morris County, reliable doesn't feel like a comfort. Air2Cool has been repairing and replacing boilers throughout Morris County for over 26 years. Whether you're in Morristown or Rockaway, here's what you need to know about the most common boiler problems, what they cost to fix, and when it makes more sense to replace than repair.
        </p>

        {/* Section 1 */}
        <section className="mb-10">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
            Most Common Boiler Problems in NJ Homes
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Boiler problems fall into a few predictable categories. Here are the issues we see most often across Morris County:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-3 ml-2">
            <li>
              <strong>No heat or hot water:</strong> Usually caused by a failed thermostat, pilot light issue, low water pressure, or a faulty zone valve. Often the cheapest repairs on this list.
            </li>
            <li>
              <strong>Boiler is leaking water:</strong> Could be a failed pump seal, corroded pipe fitting, or pressure relief valve issue. Water leaks need prompt attention — left alone, they cause significant damage.
            </li>
            <li>
              <strong>Strange noises (banging, kettling, gurgling):</strong> Kettling — a rumbling sound like a boiling kettle — is usually caused by limescale buildup in the heat exchanger. Gurgling often means trapped air in the system.
            </li>
            <li>
              <strong>Low boiler pressure:</strong> The pressure gauge should read between 1–1.5 bar when cold. If it keeps dropping, you may have a slow leak somewhere in the system.
            </li>
            <li>
              <strong>Pilot light keeps going out:</strong> On older boilers with a standing pilot, this often means a faulty thermocouple — a $100–$200 repair.
            </li>
            <li>
              <strong>Radiators not heating evenly:</strong> Some radiators hot, some cold? Air in the system is the most common cause. Bleeding the radiators is a straightforward fix.
            </li>
            <li>
              <strong>Boiler keeps shutting off:</strong> Short-cycling is often caused by low water pressure, a closed valve, or a faulty thermostat. It stresses the system and wastes fuel.
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="mb-10">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
            What Boiler Repairs Cost in Morris County NJ
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Boiler repair costs vary widely based on the part, the labor involved, and the age of the system:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm text-left border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-gray-100 text-gray-700 font-semibold">
                <tr>
                  <th className="px-4 py-3">Repair Type</th>
                  <th className="px-4 py-3">Typical Cost Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-700">
                <tr><td className="px-4 py-3">Thermocouple replacement</td><td className="px-4 py-3">$100 – $200</td></tr>
                <tr><td className="px-4 py-3">Bleed radiators / remove trapped air</td><td className="px-4 py-3">$150 – $300</td></tr>
                <tr><td className="px-4 py-3">Circulator pump replacement</td><td className="px-4 py-3">$400 – $700</td></tr>
                <tr><td className="px-4 py-3">Zone valve replacement</td><td className="px-4 py-3">$300 – $600</td></tr>
                <tr><td className="px-4 py-3">Pressure relief valve</td><td className="px-4 py-3">$200 – $400</td></tr>
                <tr><td className="px-4 py-3">Ignition control module</td><td className="px-4 py-3">$350 – $650</td></tr>
                <tr><td className="px-4 py-3">Heat exchanger (if repairable)</td><td className="px-4 py-3">$700 – $1,500+</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed">
            These are estimates. We always provide a firm quote before starting work — no surprises on your final bill.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-10">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
            Repair vs. Replace: How to Know When It's Time
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Boilers last longer than furnaces — a well-maintained boiler can run 20–30 years. But there are clear signs that replacement makes more sense than another repair:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
            <li><strong>Age over 20 years:</strong> If your boiler is past the two-decade mark and needs a significant repair, the math usually favors replacement.</li>
            <li><strong>Frequent repairs in recent years:</strong> If you've had two or more repairs in the past three years, the system is telling you something.</li>
            <li><strong>Rising fuel bills:</strong> An aging, inefficient boiler burns more fuel to produce the same heat. A new condensing boiler can be 15–25% more efficient.</li>
            <li><strong>Carbon monoxide concerns:</strong> If your CO detector is going off or your technician finds a heat exchanger issue, replacement is the safe call.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Our team will always be upfront with you. If a repair is the right call, we'll tell you. If replacement will save you money in the long run, we'll show you the math. See our full{" "}
            <Link href="/services/heating-repair" className="text-blue-600 hover:underline font-semibold">
              heating repair services
            </Link>{" "}
            or visit our{" "}
            <Link href="/troubleshooting" className="text-blue-600 hover:underline font-semibold">
              troubleshooting guide
            </Link>{" "}
            if you want to diagnose the issue yourself first.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-10">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
            Morris County Towns We Serve for Boiler Repair
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Air2Cool is based in Wharton and covers every corner of{" "}
            <Link href="/service-areas/morris-county" className="text-blue-600 hover:underline font-semibold">
              Morris County
            </Link>
            . We regularly serve homeowners in:
          </p>
          <div className="grid sm:grid-cols-2 gap-2 mb-4">
            {[
              { name: "Morristown", slug: "morristown" },
              { name: "Parsippany", slug: "parsippany-troy-hills" },
              { name: "Randolph", slug: "randolph" },
              { name: "Denville", slug: "denville" },
              { name: "Rockaway", slug: "rockaway" },
              { name: "Dover", slug: "dover" },
              { name: "Mine Hill", slug: "mine-hill" },
              { name: "Wharton", slug: "wharton" },
            ].map((town) => (
              <Link
                key={town.slug}
                href={`/service-areas/${town.slug}`}
                className="text-blue-600 hover:underline text-sm font-medium"
              >
                → Boiler Repair in {town.name}, NJ
              </Link>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Morris County's older housing stock means a lot of boiler-heated homes — it's one of the heating system types we work on most. We're fluent in all major brands and system configurations, from old cast-iron steam boilers to modern high-efficiency hydronic systems.
          </p>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-red-700 to-orange-600 rounded-2xl p-7 md:p-10 text-white text-center mt-10">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
            24/7 Emergency Boiler Repair — Call Now
          </h2>
          <p className="text-red-100 mb-6 text-base md:text-lg">
            Don't wait in the cold. Call Air2Cool at{" "}
            <a href="tel:+12017875657" className="font-bold underline hover:no-underline">
              (201) 787-5657
            </a>{" "}
            for emergency boiler repair throughout Morris County — 24 hours a day, 7 days a week.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+12017875657"
              className="bg-white text-red-700 px-7 py-3.5 rounded-full font-bold text-base md:text-lg shadow-lg hover:bg-gray-50 transition"
            >
              Call (201) 787-5657
            </a>
            <Link
              href="/contact"
              className="bg-white/10 border-2 border-white text-white px-7 py-3.5 rounded-full font-semibold text-base md:text-lg hover:bg-white/20 transition text-center"
            >
              Schedule Service Online
            </Link>
          </div>
          <p className="mt-5 text-red-200 text-sm">
            Also see:{" "}
            <Link href="/services/heating-repair" className="underline hover:text-white">Heating Repair Services</Link>
            {" · "}
            <Link href="/services/hvac-installation" className="underline hover:text-white">New HVAC System Installation</Link>
            {" · "}
            <Link href="/service-areas/morris-county" className="underline hover:text-white">Morris County Service Area</Link>
          </p>
        </div>
      </article>
    </main>
  );
}
