import type { Metadata } from "next";
import { Flame, CheckCircle, Clock, Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import VideoShowcase from "@/components/VideoShowcase";

export const metadata: Metadata = {
  title: "Heating Repair Morris County NJ | 24/7 Furnace & Boiler | Air2Cool",
  description:
    "Heating repair in Morris County & North Jersey. Furnace repair, boiler service, heat pump repair. 24/7 emergency heating service. Licensed since 1998. (201) 787-5657.",
  keywords: [
    "furnace repair NJ",
    "heating repair NJ",
    "furnace repair Morris County NJ",
    "boiler repair North NJ",
    "heating repair Morris County",
    "hydronic boiler repair NJ",
    "steam boiler repair Morris County",
    "NTI boiler repair NJ",
    "emergency furnace repair North Jersey",
    "boiler repair Morristown NJ",
    "heating system repair Morris County",
  ],
  alternates: {
    canonical: "/services/heating-repair",
  },
  openGraph: {
    title: "Heating Repair Morris County NJ | 24/7 Furnace & Boiler | Air2Cool",
    description:
      "Furnace repair, boiler service, heat pump repair. 24/7 emergency heating service. Morris County & North NJ. Licensed since 1998. (201) 787-5657.",
    url: "/services/heating-repair",
  },
};

export default function HeatingRepairPage() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Heating & Boiler Repair",
            "alternateName": "Furnace Repair",
            "description": "Expert furnace and boiler repair in Morris County & North NJ. Specialists in hydronic boilers, steam boilers, and NTI systems. 24/7 emergency service available.",
            "provider": {
              "@type": "HVACBusiness",
              "@id": "https://www.air2cool.com/#organization",
              "name": "Air2Cool Heating & Cooling",
              "telephone": "+1-201-787-5657",
              "url": "https://www.air2cool.com"
            },
            "areaServed": [
              { "@type": "AdministrativeArea", "name": "Morris County, NJ" },
              { "@type": "AdministrativeArea", "name": "North New Jersey" }
            ],
            "availableChannel": {
              "@type": "ServiceChannel",
              "servicePhone": {
                "@type": "ContactPoint",
                "telephone": "+1-201-787-5657",
                "contactType": "emergency",
                "availableLanguage": "English",
                "hoursAvailable": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                  "opens": "00:00",
                  "closes": "23:59"
                }
              }
            },
            "url": "https://www.air2cool.com/services/heating-repair",
            "serviceType": "HVAC Repair"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Do you repair all furnace brands?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Air2Cool services all major furnace brands including Carrier, Trane, Lennox, Rheem, York, Goodman, Bryant, Weil-McLain, Burnham, Buderus, and more. Our Licensed Master HVAC Technicians are trained on both gas and oil furnaces, as well as all types of boiler systems."
                }
              },
              {
                "@type": "Question",
                "name": "What are signs my furnace needs repair?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Common signs your furnace needs repair include: (1) No heat or insufficient heat despite the thermostat being set correctly, (2) Unusual noises like banging, rattling, or squealing when the system runs, (3) The system cycling on and off frequently without reaching the set temperature, (4) A yellow or flickering pilot light instead of a steady blue flame, which can indicate a carbon monoxide issue. If you notice any of these signs, call Air2Cool at (201) 787-5657."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer 24/7 heating repair in Morris County?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Air2Cool provides 24/7 emergency heating repair throughout Morris County and all of North Jersey. We serve Morristown, Randolph, Rockaway, Dover, Wharton, Denville, Parsippany, and surrounding towns. If your furnace or boiler fails in the middle of the night or on a weekend, call (201) 787-5657 and we'll dispatch a technician as quickly as possible."
                }
              },
              {
                "@type": "Question",
                "name": "How much does furnace repair cost in New Jersey?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Furnace repair costs in NJ typically range from $150 to $600 for most common repairs. A simple igniter replacement runs $150–$300. A blower motor replacement is typically $300–$600. More complex repairs like a heat exchanger replacement can be $600–$1,500+. We provide a free estimate before any work begins so you know exactly what you're paying."
                }
              }
            ]
          })
        }}
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-900 via-orange-800 to-red-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-4">
              <Flame className="w-4 h-4" />
              HEATING REPAIR
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 md:mb-6">
              Heating Repair in Morris County, NJ
            </h1>

            <p className="text-base md:text-xl text-gray-200 leading-relaxed max-w-3xl mb-6 md:mb-8">
              Furnace repair, boiler service, heat pump repair — Air2Cool has handled all of it in Morris County and North Jersey since 1998. Our Licensed Master HVAC Technicians are available 24/7 for emergency heating service so you&apos;re never left in the cold.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-white text-red-700 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-all shadow-lg hover:bg-gray-50 text-center"
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
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="py-4 md:py-6 bg-red-50 border-y border-red-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 text-red-900">
            <Clock className="w-5 h-5 md:w-6 md:h-6 shrink-0" />
            <p className="text-sm md:text-lg font-semibold">
              A heating emergency can happen any time — even at midnight in the dead of winter. That's why our reliable team is available 24 hours a day. We'll be there whenever you need us!
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
              Morris County's Furnace &amp; Boiler Repair Specialists
            </h2>
            <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Air2Cool specializes in <strong>furnace repair</strong>, <strong>boiler repair</strong>, and <strong>heat pump repair</strong> across Morris County and all of North Jersey. Our <strong>24/7 emergency heating service</strong> means you're covered day or night — we serve <strong>Morristown, Randolph, Rockaway, Dover, Wharton, Denville, Parsippany</strong>, and surrounding communities.
              </p>
              <p>
                When New Jersey temperatures drop below freezing, a broken furnace or boiler isn't just uncomfortable — it's a health and safety emergency. Air2Cool Heating &amp; Cooling has been keeping homes and businesses warm across{" "}
                <Link href="/service-areas/morris-county" className="text-red-600 hover:underline">Morris County</Link> and North NJ for over 26 years. We're the local heating repair specialists that homeowners in{" "}
                <Link href="/service-areas/morristown" className="text-red-600 hover:underline">Morristown</Link>,{" "}
                <Link href="/service-areas/parsippany-troy-hills" className="text-red-600 hover:underline">Parsippany</Link>,{" "}
                <Link href="/service-areas/randolph" className="text-red-600 hover:underline">Randolph</Link>, and{" "}
                <Link href="/service-areas/denville" className="text-red-600 hover:underline">Denville</Link> call first.
              </p>
              <p>
                Our Licensed Master HVAC Technicians are trained to diagnose and repair all types of heating systems: gas furnaces, oil furnaces, hydronic boilers, steam boilers, NTI boilers, and heat pumps. We work on all major brands and can typically complete most repairs in a single visit. Same-day appointments are available for urgent situations, and our 24/7 emergency line means you're never left in the cold.
              </p>
              <p>
                One thing that sets Air2Cool apart is our boiler expertise. Many HVAC companies don't fully understand the complexity of hydronic and steam systems — we do. As NTI-certified technicians and boiler specialists, we diagnose issues faster and fix them right the first time. Whether it's a failed circulator pump, zone valve problem, or a no-heat situation, we have the parts and know-how on hand.
              </p>
              <p>
                As a family-owned, locally-operated company, we treat every repair like it's our own home. We'll give you an honest diagnosis, transparent pricing, and no-pressure recommendations. If you need a full heating system replacement, visit our{" "}
                <Link href="/services/hvac-installation" className="text-red-600 hover:underline">HVAC installation page</Link>. For cooling needs, check our{" "}
                <Link href="/services/ac-repair" className="text-red-600 hover:underline">AC repair service</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Solutions */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-4 md:mb-6">
              Comprehensive Heating System Solutions
            </h2>

            <div className="grid md:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
              {[
                "Furnace repairs & service",
                "Hydronic boiler service",
                "Steam boiler repairs",
                "NTI boiler specialists",
                "All major boiler brands",
                "Heat pumps",
                "Ductless mini systems",
                "Residential & commercial",
                "Thermostat service",
                "Weather sealing",
                "Whole-house humidifiers",
                "Wi-Fi/smart thermostats",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 md:gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-5 md:p-6 border border-gray-200">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                Heating Repair You Can Trust
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                When you hire us to repair your heating system, you can expect high-quality service backed by integrity and honesty. It's something our family-owned and operated company has been providing for over 26 years now. We'll respect your property and work diligently to make sure you're satisfied.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Boiler Expertise Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border-2 border-amber-200">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-3 md:mb-4">
                Boiler Specialists You Can Trust
              </h2>
              <p className="text-base md:text-xl text-gray-700 max-w-3xl mx-auto">
                Not all HVAC companies understand boilers. We do. With 26+ years specializing in all boiler systems, we're your North Jersey boiler experts.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-5 md:p-6 border-2 border-blue-200">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Hydronic Boilers</h3>
                <p className="text-xs md:text-sm text-gray-700">
                  Expert service on hot water boilers. We handle baseboard systems, radiant floor heating, and all hydronic configurations.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-5 md:p-6 border-2 border-gray-300">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Steam Boilers</h3>
                <p className="text-xs md:text-sm text-gray-700">
                  Specialized steam system repair. We understand radiators, steam pipes, and the unique requirements of steam heat.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-5 md:p-6 border-2 border-green-200">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">NTI & All Brands</h3>
                <p className="text-xs md:text-sm text-gray-700">
                  NTI certified technicians plus expertise in Weil-McLain, Burnham, Buderus, Peerless, and all major boiler manufacturers.
                </p>
              </div>
            </div>

            <div className="bg-amber-50 rounded-2xl p-5 md:p-6 border-2 border-amber-200">
              <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-3">Common Boiler Issues We Fix:</h3>
              <div className="grid sm:grid-cols-2 gap-2 md:gap-3 text-xs md:text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-amber-600 flex-shrink-0" />
                  <span>No heat / cold radiators</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-amber-600 flex-shrink-0" />
                  <span>Leaking pipes or valves</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-amber-600 shrink-0" />
                  <span>Low water pressure</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-amber-600 flex-shrink-0" />
                  <span>Strange noises / banging</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-amber-600 flex-shrink-0" />
                  <span>Pilot light issues</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-amber-600 flex-shrink-0" />
                  <span>Thermostat not responding</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-amber-600 flex-shrink-0" />
                  <span>Circulator pump failure</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-amber-600 flex-shrink-0" />
                  <span>Zone valve problems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Service & Customer Testimonial */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Shield className="w-12 h-12 md:w-16 md:h-16 text-red-600 mx-auto mb-4 md:mb-6" />
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-3 md:mb-4">
            Quality Service You Can Trust
          </h2>
          <p className="text-sm md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
            We service all major heating brands and provide honest, reliable service backed by our 26+ years of experience. When you choose Air2Cool, you're getting expert technicians who truly care about keeping your family warm.
          </p>
          <div className="inline-block bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200">
            <p className="text-sm md:text-base text-gray-600 italic">
              "With cold weather approaching, I discovered that my heater was not working properly in a house that I had recently purchased. Hector sent his team over the same day that I contacted him. They found numerous problems and professionally repaired all of them. Very fast service with fair prices and honest work. I highly recommend Air2Cool to all my friends and family!"
            </p>
            <p className="mt-3 md:mt-4 text-sm md:text-base font-semibold text-gray-900">
              - Richard Farrell, Google Review
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center">
            Frequently Asked Questions — Furnace Repair NJ
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Do you offer emergency furnace repair in Morris County NJ?",
                a: "Yes. We provide 24/7 emergency heating repair throughout Morris County and North NJ. If your furnace or boiler fails in the middle of the night or on a weekend, call (201) 787-5657 and we'll dispatch a technician as quickly as possible.",
              },
              {
                q: "What are the most common reasons a furnace stops working?",
                a: "The most common causes include a dirty or clogged air filter restricting airflow, a faulty igniter or pilot light, a tripped circuit breaker, a malfunctioning thermostat, or a failed blower motor. Some issues are simple fixes; others require professional repair. Our technicians diagnose the root cause quickly so you're not paying for guesswork.",
              },
              {
                q: "Can you repair my boiler, or do you only work on furnaces?",
                a: "We specialize in both. Air2Cool is one of the few North NJ HVAC companies with deep expertise in all types of boiler systems — hydronic boilers, steam boilers, and NTI boilers. We're NTI-certified technicians and regularly service brands like Weil-McLain, Burnham, and Buderus.",
              },
              {
                q: "How long does a typical heating repair take?",
                a: "Most heating repairs can be completed in a single visit, typically 1–3 hours. More complex repairs involving parts that need to be ordered may require a follow-up appointment, but we keep common parts on our trucks to minimize delays. We'll always give you a time estimate upfront.",
              },
              {
                q: "When should I replace my furnace instead of repairing it?",
                a: "If your furnace is over 15–20 years old, requires frequent repairs, or the cost of repair exceeds 50% of a new system's price, replacement is usually the smarter investment. A new high-efficiency furnace can significantly reduce your energy bills. Our technicians will give you an honest assessment — no upselling. See our HVAC installation page for more details.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VideoShowcase
        title="NTI Boiler Installation — Morris County"
        src="/nti_boiler_installation_in_progress.mp4"
        caption="High-efficiency NTI boiler installed and running — same craftsmanship on every repair call"
        sectionClassName="py-10 md:py-16 bg-gradient-to-b from-gray-50 to-white"
      />

      {/* Recent Heating Installations — Photo Row (Task 5) */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6 text-center">
            Recent Heating Installations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto">
            <div>
              <div className="relative w-full overflow-hidden rounded-xl shadow-md bg-gray-100" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="/nti_wall_hung_boiler_install_with_primary_secondary_piping.webp"
                  alt="NTI wall hung boiler with primary secondary piping NJ — Air2Cool"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <div className="relative w-full overflow-hidden rounded-xl shadow-md bg-gray-100" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="/nti_boiler_completed_install.webp"
                  alt="NTI boiler completed installation North NJ — Air2Cool"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-red-700 to-orange-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-3 md:mb-4">
            Ready to Schedule Heating Repair?
          </h2>
          <p className="text-base md:text-xl text-red-100 mb-6 md:mb-8">
            Call Air2Cool at{" "}
            <a href="tel:+12017875657" className="font-bold underline hover:no-underline">
              (201) 787-5657
            </a>{" "}
            or get a free estimate at{" "}
            <Link href="/contact" className="font-bold underline hover:no-underline">
              /contact
            </Link>
            . Don't wait in the cold — our team is standing by.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-red-700 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg hover:bg-gray-50 transition"
            >
              Schedule Service
            </Link>
            <a
              href="tel:+12017875657"
              className="bg-white/10 backdrop-blur text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg border-2 border-white hover:bg-white/20 transition"
            >
              Call (201) 787-5657
            </a>
          </div>
          <p className="mt-6 text-sm text-red-200">
            Also serving:{" "}
            <Link href="/service-areas/morris-county" className="underline hover:no-underline">Morris County</Link> ·{" "}
            <Link href="/service-areas/morristown" className="underline hover:no-underline">Morristown</Link> ·{" "}
            <Link href="/service-areas/parsippany-troy-hills" className="underline hover:no-underline">Parsippany</Link> ·{" "}
            <Link href="/service-areas/randolph" className="underline hover:no-underline">Randolph</Link> ·{" "}
            <Link href="/service-areas/denville" className="underline hover:no-underline">Denville</Link> ·{" "}
            <Link href="/service-areas/rockaway" className="underline hover:no-underline">Rockaway</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
