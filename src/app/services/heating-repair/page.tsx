import type { Metadata } from "next";
import { Flame, CheckCircle, Clock, Shield } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Heating & Boiler Repair | Hydronic, Steam, NTI | Air2Cool North NJ",
  description:
    "Expert heating & boiler repair in North NJ. Hydronic boilers, steam boilers, NTI specialists. All major brands serviced. 24/7 emergency furnace & boiler service. Licensed HVAC technicians.",
};

export default function HeatingRepairPage() {
  return (
    <main className="bg-white">
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-4">
              <Flame className="w-4 h-4" />
              HEATING REPAIR
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Furnace & Boiler Repair Experts
            </h1>

            <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mb-8">
              Furnace down? Boiler not heating? Get it fixed fast by our Licensed Master HVAC Technicians. We service all types: hydronic boilers, steam boilers, NTI boilers, and all major furnace brands.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-white text-red-700 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:bg-gray-50"
              >
                Get Free Estimate
              </Link>
              <a
                href="tel:+12017875657"
                className="bg-white/10 hover:bg-white/20 backdrop-blur text-white px-8 py-4 rounded-full font-semibold text-lg transition-all border border-white/20"
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
      <section className="py-6 bg-red-50 border-y border-red-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 text-red-900">
            <Clock className="w-6 h-6" />
            <p className="text-lg font-semibold">
              We understand that a heating emergency can happen at any time of the day or night, including in the middle of winter. That's why our reliable team is available 24 hours a day. We'll be there whenever you need us!
            </p>
          </div>
        </div>
      </section>

      {/* Comprehensive Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                Comprehensive Heating System Solutions
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
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
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Heating Repair You Can Trust
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  When you hire us to repair your heating system, you can expect high-quality service backed by integrity and honesty. It's something our family-owned and operated company has been providing for over 20 years now. We'll respect your property and work diligently to make sure you're satisfied.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-red-100 to-orange-100 rounded-3xl p-8">
                {/* Placeholder - replace with actual image */}
                <div className="rounded-2xl bg-gradient-to-br from-red-600 to-orange-600 aspect-[4/3] flex items-center justify-center shadow-lg">
                  <Flame className="w-32 h-32 text-white opacity-20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Boiler Expertise Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-10 shadow-xl border-2 border-amber-200">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                Boiler Specialists You Can Trust
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Not all HVAC companies understand boilers. We do. With 20+ years specializing in all boiler systems, we're your North Jersey boiler experts.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border-2 border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hydronic Boilers</h3>
                <p className="text-gray-700 text-sm">
                  Expert service on hot water boilers. We handle baseboard systems, radiant floor heating, and all hydronic configurations.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-6 border-2 border-gray-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Steam Boilers</h3>
                <p className="text-gray-700 text-sm">
                  Specialized steam system repair. We understand radiators, steam pipes, and the unique requirements of steam heat.
                </p>
              </div>

              <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">NTI & All Brands</h3>
                <p className="text-gray-700 text-sm">
                  NTI certified technicians plus expertise in Weil-McLain, Burnham, Buderus, Peerless, and all major boiler manufacturers.
                </p>
              </div>
            </div>

            <div className="bg-amber-50 rounded-2xl p-6 border-2 border-amber-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Common Boiler Issues We Fix:</h3>
              <div className="grid sm:grid-cols-2 gap-3 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>No heat / cold radiators</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>Leaking pipes or valves</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Low water pressure</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>Strange noises / banging</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>Pilot light issues</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>Thermostat not responding</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>Circulator pump failure</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>Zone valve problems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership with Trane */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Shield className="w-16 h-16 text-red-600 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Our Partnership with Trane
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Our exclusive partnership with Trane provides our customers with the most reliable and technologically advanced product in the market. When you choose Air2Cool, you're getting the best equipment backed by industry-leading warranties.
          </p>
          <div className="inline-block bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <p className="text-gray-600 italic">
              "With cold weather approaching, I discovered that my heater was not working properly in a house that I had recently purchased. Hector sent his team over the same day that I contacted him. They found numerous problems and professionally repaired all of them. Very fast service with fair prices and honest work. I highly recommend Air2Cool to all my friends and family!"
            </p>
            <p className="mt-4 font-semibold text-gray-900">
              - Richard Farrell, Google Review
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-700 to-orange-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Need Heating Repair Today?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Don't wait in the cold. Our team is ready to restore your heat quickly and efficiently.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-red-700 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-50 transition"
            >
              Schedule Service
            </Link>
            <a
              href="tel:+12017875657"
              className="bg-white/10 backdrop-blur text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white hover:bg-white/20 transition"
            >
              Call (201) 787-5657
            </a>
          </div>
        </div>
      </section>

      {/* Financing Available */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-2xl font-bold mb-2">Financing Available</p>
          <p className="text-gray-300">
            Ask about our flexible financing options to make your heating repair affordable.
          </p>
        </div>
      </section>
    </main>
  );
}