import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AC Tune-Up NJ — What's Included, Cost & When to Schedule | Air2Cool",
  description:
    "Get your AC tuned up before summer hits North NJ. Learn what a professional AC tune-up includes, what it costs, and why spring is the best time to schedule. Air2Cool serves Morris County & North NJ.",
  keywords: [
    "AC tune-up NJ",
    "air conditioner tune-up Morris County",
    "AC maintenance North Jersey",
    "AC checkup cost NJ",
    "spring AC service NJ",
    "HVAC tune-up Randolph NJ",
    "AC maintenance Parsippany NJ",
  ],
  alternates: {
    canonical: "/blog/ac-tune-up-nj",
  },
  openGraph: {
    title: "AC Tune-Up NJ — What's Included, Cost & When to Schedule",
    description:
      "Learn what a professional AC tune-up includes, what it costs in NJ, and why spring is the best time to schedule. Air2Cool serves Morris County & North NJ.",
    url: "/blog/ac-tune-up-nj",
    type: "article",
  },
};

export default function ACTuneUpNJPost() {
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
                name: "How often should I get an AC tune-up in NJ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Once a year, ideally in spring before cooling season starts. Annual tune-ups catch small issues before they become mid-summer breakdowns.",
                },
              },
              {
                "@type": "Question",
                name: "How much does an AC tune-up cost in New Jersey?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Typically $80–$150 for a standard residential system. Air2Cool provides upfront pricing before any work begins — no surprises.",
                },
              },
              {
                "@type": "Question",
                name: "What happens if I skip my annual AC tune-up?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Dirty coils, low refrigerant, and worn components go undetected — leading to mid-summer breakdowns, higher energy bills, and potentially a full system failure on the hottest day of the year.",
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
            AC Tune-Up in NJ — What&apos;s Included and When to Schedule
          </h1>
          <p className="text-gray-500 text-sm">
            Published by Air2Cool Heating &amp; Cooling · Serving Morris County since 1998
          </p>
        </header>

        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
          If you live in Morris County, Randolph, Denville, Parsippany, Morristown, or Rockaway, you already know what a NJ summer feels like. It gets hot fast — and when it does, every HVAC company in the area is slammed with emergency calls. The best time to get your AC serviced is before that happens. A professional tune-up in spring takes less than two hours and can save you from a much more expensive problem in July.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
            Why Spring Is the Right Time for an AC Tune-Up in NJ
          </h2>
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            There&apos;s a reason we recommend scheduling before Memorial Day. Once temperatures climb and everyone&apos;s AC kicks on for the first time, the phones light up. Technicians get booked out days in advance and emergency calls take priority. If your system has a failing capacitor or low refrigerant, you won&apos;t find out until it dies on the hottest afternoon of the year.
          </p>
          <p className="text-base text-gray-700 leading-relaxed">
            Scheduling in April or early May means you get a same-week appointment, a thorough inspection with no rush, and peace of mind heading into summer. It also gives you time to address any issues before they become urgent — and before parts lead times stretch out.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
            What a Professional AC Tune-Up Includes
          </h2>
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            Not all tune-ups are created equal. A real{" "}
            <Link href="/services/preventative-maintenance" className="text-blue-600 hover:underline font-semibold">
              preventative maintenance visit
            </Link>{" "}
            should cover the following:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2 mb-4">
            <li><strong>Refrigerant level check:</strong> Low refrigerant is one of the top causes of poor cooling performance. We check pressures and look for signs of leaks.</li>
            <li><strong>Evaporator and condenser coil cleaning:</strong> Dirty coils force the system to work harder, driving up your electric bill and shortening equipment life.</li>
            <li><strong>Electrical connections and capacitor test:</strong> Loose connections and a weakening capacitor are leading causes of summer breakdowns — both are easy to catch during a tune-up.</li>
            <li><strong>Thermostat calibration:</strong> If your thermostat is reading off by a few degrees, your system runs longer than necessary.</li>
            <li><strong>Condensate drain flush:</strong> A clogged drain line causes water damage and can trigger a system shutoff. We clear it as standard.</li>
            <li><strong>Blower inspection:</strong> A dirty or unbalanced blower reduces airflow throughout your home — this often goes unnoticed until comfort complaints start coming in.</li>
          </ul>
          <p className="text-base text-gray-700 leading-relaxed">
            At the end of the visit, we tell you exactly what we found — including anything that should be addressed before summer. No upsells, just an honest report.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
            How Much Does an AC Tune-Up Cost in NJ?
          </h2>
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            Most residential AC tune-ups in New Jersey run between <strong>$80 and $150</strong> depending on the company and what&apos;s included. Be cautious of discount tune-up offers — a $49 special often means a quick visual check and a sales pitch, not a real inspection.
          </p>
          <p className="text-base text-gray-700 leading-relaxed">
            Air2Cool members on our{" "}
            <Link href="/services/preventative-maintenance" className="text-blue-600 hover:underline font-semibold">
              annual maintenance plan
            </Link>{" "}
            get priority scheduling, a 10% discount on parts, and coverage for both heating and cooling systems. For most homeowners, the plan pays for itself the first time it catches something before it fails.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
            Signs Your AC Needs More Than Just a Tune-Up
          </h2>
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            Sometimes a tune-up reveals a bigger issue. Here are warning signs that your system may need actual repair:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
            <li><strong>Warm air from the vents</strong> even with the system running — often low refrigerant or a failing compressor.</li>
            <li><strong>Ice on the refrigerant lines or indoor unit</strong> — a frozen evaporator coil that needs investigation.</li>
            <li><strong>The system won&apos;t start or keeps tripping the breaker</strong> — could be a failing capacitor or compressor drawing too much current.</li>
            <li><strong>Unusual sounds</strong> — grinding, banging, or squealing all point to mechanical issues that a tune-up alone won&apos;t fix.</li>
          </ul>
          <p className="text-base text-gray-700 leading-relaxed mt-4">
            If any of these apply to your system, we recommend booking a full diagnostic instead of waiting. Learn more about our{" "}
            <Link href="/services/ac-repair" className="text-blue-600 hover:underline font-semibold">
              AC repair services
            </Link>{" "}
            — we&apos;ll have a technician out fast.
          </p>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-700 to-cyan-600 rounded-2xl p-7 md:p-10 text-white text-center mt-10">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
            Ready to Schedule Your AC Tune-Up?
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
            <Link href="/services/ac-repair" className="underline hover:text-white">AC Repair</Link>
            {" · "}
            <Link href="/services/preventative-maintenance" className="underline hover:text-white">Maintenance Plans</Link>
          </p>
        </div>
      </article>
    </main>
  );
}
