import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AC Running But Not Cooling Your NJ Home? Here's Why | Air2Cool",
  description:
    "AC running but not cooling in New Jersey? Learn the 6 most common reasons — low refrigerant, dirty coils, failed compressor — what you can check yourself, and when to call for same-day AC repair. Air2Cool serves Morris County & North NJ.",
  keywords: [
    "AC not cooling NJ",
    "air conditioner not cooling house New Jersey",
    "AC running but not cooling NJ",
    "why is my AC not working NJ",
    "AC blowing warm air NJ",
    "air conditioner not cold Morris County",
  ],
  alternates: {
    canonical: "/blog/ac-not-cooling-nj",
  },
  openGraph: {
    title: "AC Running But Not Cooling Your NJ Home? Here's Why",
    description:
      "AC on but no cold air in New Jersey? Here are the 6 most common reasons and what to do about each. Air2Cool offers same-day AC repair throughout Morris County & North NJ.",
    url: "/blog/ac-not-cooling-nj",
    type: "article",
  },
};

export default function AcNotCoolingBlogPost() {
  return (
    <main className="bg-white">
      <article className="max-w-3xl mx-auto px-4 md:px-6 py-10 md:py-16">
        {/* Header */}
        <header className="mb-10">
          <div className="text-sm text-blue-600 font-semibold mb-2 uppercase tracking-wide">
            Air2Cool Blog · AC Troubleshooting
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            AC Running But Not Cooling Your NJ Home? Here&apos;s Why
          </h1>
          <p className="text-gray-500 text-sm">
            Published by Air2Cool Heating &amp; Cooling · Serving Morris County &amp; North NJ since 1998
          </p>
        </header>

        {/* Intro */}
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
          Your AC is running — the outdoor unit is humming, the air handler is blowing — but your house just isn't getting cold. This is one of the most frustrating HVAC situations you can face in a New Jersey summer, especially when the thermostat reads 80° and it's somehow still climbing. The good news: most of the time, the cause is diagnosable and fixable. Here are the six most common reasons an AC runs without cooling, what you can check yourself, and when it's time to call a pro.
        </p>

        {/* Section 1 */}
        <section className="mb-10">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
            6 Most Common Reasons Your AC Isn&apos;t Cooling
          </h2>

          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">1. Low Refrigerant (Refrigerant Leak)</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Refrigerant is the substance that absorbs heat from your home's air and releases it outside. When refrigerant leaks, your system can't transfer heat effectively — so it runs constantly but never cools. Signs include ice forming on the refrigerant lines, warm air from vents, and a hissing or bubbling sound near the unit. This requires a licensed technician — refrigerant is regulated and can't legally be handled by homeowners.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">2. Dirty or Clogged Air Filter</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                A severely clogged filter restricts airflow through your system, which causes the evaporator coil to freeze and prevents heat exchange. This is the easiest fix on this list — check your filter right now. If it's gray and caked with dust, replace it. A $10 fix can restore cooling immediately.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">3. Frozen Evaporator Coil</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                The evaporator coil sits inside your air handler and gets cold as refrigerant passes through it. When airflow is restricted (dirty filter, blocked vents) or refrigerant is low, the coil can freeze solid. A frozen coil blocks all air exchange. Turn the system to "fan only" for 2–3 hours to let it thaw, then check the underlying cause before restarting cooling mode.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">4. Dirty Condenser Coils</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                The condenser coils are in the outdoor unit — they release the heat your AC pulled from your home into the outside air. When they're coated with dirt, grass clippings, and debris, they can't dissipate heat effectively. The system works harder, runs longer, and cools less. Clear away debris from around the unit and gently rinse the coil fins with a hose.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">5. Failed Compressor</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                The compressor is the heart of the AC system — it pressurizes the refrigerant and drives the entire cooling cycle. When it fails, the outdoor unit may still run (the fan spins) but there's no cooling at all. Compressor failure is one of the more expensive repairs, often costing $1,200–$2,500 or more. Depending on the system's age, replacement may be more economical.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">6. Thermostat Issues</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Before assuming the worst, check your thermostat. Confirm it's set to "Cool," not "Fan" or "Heat." Check that the set temperature is below your current room temperature. Replace the batteries if it's battery-powered. If the thermostat is malfunctioning, it may be sending incorrect signals to the system — or no signals at all.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-10">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
            DIY Checks Every NJ Homeowner Can Do First
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Before you call for a repair, run through these quick checks:
          </p>
          <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-2">
            <li>Check and replace the air filter if it's dirty</li>
            <li>Confirm all supply and return vents are open and unobstructed</li>
            <li>Make sure the thermostat is set correctly and has fresh batteries</li>
            <li>Check the circuit breaker for both the air handler and outdoor unit</li>
            <li>Look at the outdoor unit — is the fan running? Is there ice on the refrigerant lines?</li>
            <li>Clear any debris (leaves, overgrown plants) from around the outdoor unit</li>
          </ol>
          <p className="text-gray-700 leading-relaxed mt-4">
            If none of these solve the problem, the issue is almost certainly mechanical — refrigerant, coils, compressor, or controls — and requires a licensed HVAC technician. Visit our{" "}
            <Link href="/troubleshooting" className="text-blue-600 hover:underline font-semibold">
              HVAC troubleshooting guide
            </Link>{" "}
            for more step-by-step guidance.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-10">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
            When to Call a Pro — and What to Expect
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Call for{" "}
            <Link href="/services/ac-repair" className="text-blue-600 hover:underline font-semibold">
              professional AC repair
            </Link>{" "}
            if:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-2">
            <li>Your filter is clean but the system still won't cool</li>
            <li>You see ice forming anywhere on the unit or lines</li>
            <li>You hear unusual noises (clicking, banging, hissing)</li>
            <li>The outdoor unit fan is not spinning</li>
            <li>The system keeps shutting off and restarting (short-cycling)</li>
            <li>The problem comes back within days of a filter change</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            At Air2Cool, we offer same-day appointments throughout Morris County and North NJ. We diagnose first, quote before we touch anything, and carry common parts on our trucks to complete most repairs in a single visit.
          </p>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-700 to-cyan-600 rounded-2xl p-7 md:p-10 text-white text-center mt-10">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
            Same-Day AC Repair Available — Call Now
          </h2>
          <p className="text-blue-100 mb-6 text-base md:text-lg">
            Call Air2Cool at{" "}
            <a href="tel:+12017875657" className="font-bold underline hover:no-underline">
              (201) 787-5657
            </a>{" "}
            for same-day AC repair throughout Morris County and North NJ. Don&apos;t sweat it out — we&apos;ll get your AC cooling again fast.
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
              Schedule Online
            </Link>
          </div>
          <p className="mt-5 text-blue-200 text-sm">
            Also see:{" "}
            <Link href="/services/ac-repair" className="underline hover:text-white">AC Repair Services</Link>
            {" · "}
            <Link href="/troubleshooting" className="underline hover:text-white">Troubleshooting Guide</Link>
            {" · "}
            <Link href="/service-areas/morris-county" className="underline hover:text-white">Morris County Service Area</Link>
          </p>
        </div>
      </article>
    </main>
  );
}
