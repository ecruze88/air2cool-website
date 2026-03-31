import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AC Running But Not Cooling Enough? 6 Causes in NJ Homes | Air2Cool",
  description:
    "AC on but still hot in your NJ home? These 6 issues are the most common reasons your AC can't keep up in summer — and what to do about each. Air2Cool serves Morris County & North NJ.",
  keywords: [
    "AC not cooling enough NJ",
    "AC running but not cold NJ",
    "air conditioner not keeping up NJ",
    "AC weak cooling Morris County",
    "why is my AC not working NJ",
    "AC not cooling house Parsippany",
    "AC not cooling Morristown NJ",
  ],
  alternates: {
    canonical: "/blog/ac-not-cooling-enough-nj",
  },
  openGraph: {
    title: "AC Running But Not Cooling Enough? 6 Causes in NJ Homes",
    description:
      "AC on but still hot in your NJ home? These 6 issues are the most common reasons your AC can't keep up in summer. Air2Cool serves Morris County & North NJ.",
    url: "/blog/ac-not-cooling-enough-nj",
    type: "article",
  },
};

export default function ACNotCoolingEnoughNJPost() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Why is my AC running but not cooling my NJ home?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The most common causes are a dirty air filter, low refrigerant, a frozen evaporator coil, or dirty condenser coils. Start by replacing the filter — if the problem persists, call a licensed HVAC technician.",
                },
              },
              {
                "@type": "Question",
                name: "How do I know if my AC is low on refrigerant?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Signs include warm air blowing from vents, ice on the refrigerant lines or indoor unit, a hissing sound, and a spike in your electric bill. Refrigerant leaks require a licensed technician to diagnose and repair.",
                },
              },
              {
                "@type": "Question",
                name: "Can an undersized AC unit be fixed?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Not really — an undersized system will always struggle on the hottest NJ days. The only real fix is replacing it with a properly sized system. Use our free HVAC sizing tool at air2cool.com/tools/hvac-sizing to get a ballpark before calling us.",
                },
              },
            ],
          }),
        }}
      />

      <article className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        <header className="mb-10">
          <div className="text-sm text-blue-600 font-semibold mb-2 uppercase tracking-wide">
            Air2Cool Blog · Morris County, NJ
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            AC Running But Not Cooling Enough — 6 Common Causes in NJ Homes
          </h1>
          <p className="text-gray-500 text-sm">
            Published by Air2Cool Heating &amp; Cooling · Serving Morris County since 1998
          </p>
        </header>

        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
          Your AC is running — you can hear it, the fan is blowing — but your home in Parsippany, Denville, Morristown, or Rockaway just won&apos;t get comfortable. This is one of the most frustrating problems we hear about every summer. The good news: most causes are diagnosable and fixable. Here are the six most common reasons an AC system runs but can&apos;t keep up in New Jersey heat.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
            1. Dirty Air Filter Blocking Airflow
          </h2>
          <p className="text-base text-gray-700 leading-relaxed mb-3">
            Start here — always. A clogged air filter is the single most overlooked cause of poor AC performance, and it&apos;s a free fix. When the filter is blocked, airflow through the system drops significantly. Less airflow means less cool air reaching your living spaces, and the system runs longer trying to compensate.
          </p>
          <p className="text-base text-gray-700 leading-relaxed">
            <strong>How to check it:</strong> Pull the filter from the return air vent or air handler. If it looks dark gray and you can&apos;t see light through it, replace it. NJ homeowners with pets or allergies should be changing filters every 30–45 days in summer. Everyone else: at least every 90 days.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
            2. Low Refrigerant (Freon Leak)
          </h2>
          <p className="text-base text-gray-700 leading-relaxed mb-3">
            Your AC doesn&apos;t &quot;use up&quot; refrigerant — it circulates the same charge indefinitely. If refrigerant is low, there&apos;s a leak somewhere in the system. A system with low refrigerant moves air just fine but can&apos;t absorb heat properly, so the air coming out of your vents feels lukewarm at best.
          </p>
          <p className="text-base text-gray-700 leading-relaxed">
            <strong>Signs:</strong> Warm air from vents despite a running system, ice on the copper refrigerant lines near the indoor unit, a faint hissing sound, or a noticeably higher electric bill. <strong>This is not DIY</strong> — refrigerant handling requires EPA certification. Call a licensed technician for{" "}
            <Link href="/services/ac-repair" className="text-blue-600 hover:underline font-semibold">
              AC repair in Morris County
            </Link>
            .
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
            3. Frozen Evaporator Coil
          </h2>
          <p className="text-base text-gray-700 leading-relaxed mb-3">
            A frozen evaporator coil is usually downstream of one of two problems: restricted airflow (dirty filter, closed vents) or low refrigerant. When the coil ices over, heat transfer stops completely — you get air movement but zero cooling.
          </p>
          <p className="text-base text-gray-700 leading-relaxed">
            <strong>How to identify it:</strong> Check the indoor unit (air handler or furnace). If you see ice forming on the copper lines or the coil itself, turn the system off and let it thaw for a few hours. Replace the filter and restart on &quot;fan only&quot; mode first. If it refreezes, low refrigerant is likely the culprit and you need a tech.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
            4. Dirty Condenser Coils on the Outdoor Unit
          </h2>
          <p className="text-base text-gray-700 leading-relaxed mb-3">
            The outdoor condenser unit sheds heat from your home into the outside air. When the coils are caked with dirt, grass clippings, or debris from the winter, that heat transfer is severely limited. The system runs harder and longer but can&apos;t cool efficiently — especially on 90°+ days in Morris County.
          </p>
          <p className="text-base text-gray-700 leading-relaxed">
            <strong>What to do:</strong> Turn off power to the unit at the disconnect box, then gently rinse the coil fins with a garden hose from the inside out (not a pressure washer). This is a legitimate DIY task if you&apos;re comfortable. For a thorough coil cleaning, this is covered in every Air2Cool{" "}
            <Link href="/services/preventative-maintenance" className="text-blue-600 hover:underline font-semibold">
              preventative maintenance visit
            </Link>
            .
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
            5. Undersized System for the Home
          </h2>
          <p className="text-base text-gray-700 leading-relaxed mb-3">
            This is extremely common in older NJ homes — especially those that added a sunroom, finished a basement, or enclosed a porch without upgrading the HVAC system. An undersized AC will run continuously on hot days and still never reach the set temperature. It&apos;s not broken — it just doesn&apos;t have enough capacity for the load.
          </p>
          <p className="text-base text-gray-700 leading-relaxed">
            <strong>How to tell:</strong> If your AC runs non-stop on a 95° day and the house temperature slowly climbs despite the system never turning off, sizing is probably the issue. Use our free{" "}
            <Link href="/tools/hvac-sizing" className="text-blue-600 hover:underline font-semibold">
              HVAC sizing tool
            </Link>{" "}
            to get a rough idea, then call us for a proper Manual J load calculation. The only real fix is right-sizing the replacement system.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
            6. Thermostat Issues
          </h2>
          <p className="text-base text-gray-700 leading-relaxed mb-3">
            Sometimes the problem is simpler than you&apos;d expect. A thermostat with dead batteries, one that&apos;s mounted near a heat source (sunny window, lamp, or oven), or one that&apos;s slightly miscalibrated can cause the system to short-cycle or never reach the right setpoint.
          </p>
          <p className="text-base text-gray-700 leading-relaxed">
            <strong>Quick checks:</strong> Replace the batteries even if the display looks fine. Make sure the thermostat is set to &quot;cool&quot; and &quot;auto&quot; (not &quot;fan on&quot;). Check the location — if it&apos;s near a sunny wall, the thermostat may think the house is warmer than it is, causing the AC to run more than needed in some rooms and less in others. A smart thermostat with remote sensors solves this permanently.
          </p>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-700 to-cyan-600 rounded-2xl p-7 md:p-10 text-white text-center mt-10">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
            Still Not Cooling? We&apos;ll Figure It Out.
          </h2>
          <p className="text-blue-100 mb-6 text-base md:text-lg">
            Need AC help in North NJ? Call Air2Cool at{" "}
            <a href="tel:+12017875657" className="font-bold underline hover:no-underline">
              (201) 787-5657
            </a>{" "}
            or{" "}
            <Link href="/contact" className="font-bold underline hover:no-underline">
              request a free estimate
            </Link>
            . Same-day service available across Morris County and North NJ.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+12017875657"
              className="bg-white text-blue-700 px-7 py-3.5 rounded-full font-bold text-base shadow-lg hover:bg-gray-50 transition min-h-[44px] flex items-center justify-center"
            >
              Call (201) 787-5657
            </a>
            <Link
              href="/contact"
              className="bg-white/10 border-2 border-white text-white px-7 py-3.5 rounded-full font-semibold text-base hover:bg-white/20 transition text-center min-h-[44px] flex items-center justify-center"
            >
              Free Estimate
            </Link>
          </div>
          <p className="mt-5 text-blue-200 text-sm">
            Also see:{" "}
            <Link href="/services/ac-repair" className="underline hover:text-white">AC Repair Services</Link>
            {" · "}
            <Link href="/tools/hvac-sizing" className="underline hover:text-white">Free HVAC Sizing Tool</Link>
          </p>
        </div>
      </article>
    </main>
  );
}
