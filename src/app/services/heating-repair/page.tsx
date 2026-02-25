import type { Metadata } from "next";
import { Flame, CheckCircle, Clock, Shield } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Furnace & Boiler Repair in Morris County NJ | Air2Cool | (201) 787-5657",
  description:
    "Expert furnace & boiler repair in Morris County & North NJ. Hydronic boilers, steam boilers, NTI specialists. 24/7 emergency heating service. All major brands serviced. Licensed Master HVAC Technicians. Call (201) 787-5657.",
  keywords: [
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
    title: "Furnace & Boiler Repair in Morris County NJ | Air2Cool",
    description:
      "24/7 emergency heating repair. Hydronic, steam & NTI boiler specialists. All major brands. Morris County & North NJ. Call (201) 787-5657.",
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
              Furnace & Boiler Repair Experts
            </h1>

            <p className="text-base md:text-xl text-gray-200 leading-relaxed max-w-3xl mb-6 md:mb-8">
              Furnace down? Boiler not heating? Get it fixed fast by our Licensed Master HVAC Technicians. We service all types: hydronic boilers, steam boilers, NTI boilers, and all major furnace brands.
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
              We understand that a heating emergency can happen at any time of the day or night, including in the middle of winter. That's why our reliable team is available 24 hours a day. We'll be there whenever you need us!
            </p>
          </div>
        </div>
      </section>

      {/* Comprehensive Solutions */}
      <section className="py-12 md:py-20 bg-white">
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

            <div className="bg-gray-50 rounded-2xl p-5 md:p-6 border border-gray-200">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                Heating Repair You Can Trust
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                When you hire us to repair your heating system, you can expect high-quality service backed by integrity and honesty. It's something our family-owned and operated company has been providing for over 20 years now. We'll respect your property and work diligently to make sure you're satisfied.
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
                Not all HVAC companies understand boilers. We do. With 20+ years specializing in all boiler systems, we're your North Jersey boiler experts.
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
      <section className="py-12 md:py-16 bg-gray-50">
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

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-red-700 to-orange-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-3 md:mb-4">
            Need Heating Repair Today?
          </h2>
          <p className="text-base md:text-xl text-red-100 mb-6 md:mb-8">
            Don't wait in the cold. Our team is ready to restore your heat quickly and efficiently.
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
        </div>
      </section>
    </main>
  );
}