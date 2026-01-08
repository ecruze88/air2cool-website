import type { Metadata } from "next";
import { Snowflake, CheckCircle, DollarSign, Shield, Clock, Award, Zap, Wind } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cooling Installation - AC, Heat Pumps & Mini Splits | Air2Cool NJ",
  description:
    "Professional cooling system installation in Morris County & North NJ. New AC, heat pumps, ductless mini splits. 0% financing. Free house cleaning. Licensed HVAC technicians. Call (201) 787-5657.",
};

export default function CoolingInstallationPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-800 text-white overflow-hidden">
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
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-4">
              <Snowflake className="w-4 h-4" />
              COOLING INSTALLATION
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              New AC, Heat Pumps & Mini Splits
            </h1>

            <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mb-8">
              Beat the heat with a professionally installed cooling system. We install central air conditioners, energy-efficient heat pumps, and ductless mini-splits. Free house cleaning with every installation.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                href="/contact"
                className="bg-white text-blue-700 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:bg-gray-50"
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

            {/* Quick Benefits */}
            <div className="grid sm:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
                <div className="text-2xl mb-2">💰</div>
                <div className="text-sm font-semibold">0% Financing</div>
                <div className="text-xs text-gray-300">Up to $25k</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
                <div className="text-2xl mb-2">🏠</div>
                <div className="text-sm font-semibold">Free Cleaning</div>
                <div className="text-xs text-gray-300">Every install</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
                <div className="text-2xl mb-2">⭐</div>
                <div className="text-sm font-semibold">5.0 Rating</div>
                <div className="text-xs text-gray-300">150+ reviews</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
                <div className="text-2xl mb-2">🛡️</div>
                <div className="text-sm font-semibold">10-Year</div>
                <div className="text-xs text-gray-300">Warranties</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Cooling System Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Which Cooling System is Right for You?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We install all types of cooling systems to fit your home and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Central AC */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border-2 border-blue-200">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Snowflake className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Central Air Conditioning</h3>
              <p className="text-sm text-gray-600 mb-4">Whole-home cooling through ductwork</p>

              <div className="space-y-2 mb-6 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Cools entire home evenly</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Works with existing ducts</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700">High SEER ratings available</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Proven, reliable technology</span>
                </div>
              </div>

              <p className="text-xs text-gray-600 italic">
                <strong>Best for:</strong> Homes with ductwork, cooling-only needs
              </p>
            </div>

            {/* Heat Pumps */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border-2 border-green-200">
              <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Heat Pumps</h3>
              <p className="text-sm text-gray-600 mb-4">Cool in summer, heat in winter</p>

              <div className="space-y-2 mb-6 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Two systems in one</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Ultra energy-efficient</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Lower operating costs</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Eligible for rebates</span>
                </div>
              </div>

              <p className="text-xs text-gray-600 italic">
                <strong>Best for:</strong> Year-round comfort, energy savings
              </p>
            </div>

            {/* Mini Splits */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border-2 border-purple-200">
              <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Wind className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Ductless Mini Splits</h3>
              <p className="text-sm text-gray-600 mb-4">Zone cooling without ductwork</p>

              <div className="space-y-2 mb-6 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700">No ductwork needed</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Cool specific rooms/zones</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Whisper-quiet operation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Also provides heating</span>
                </div>
              </div>

              <p className="text-xs text-gray-600 italic">
                <strong>Best for:</strong> Additions, no ducts, zone control
              </p>
            </div>
          </div>

          {/* Brand trust */}
          <div className="text-center">
            <p className="text-gray-600 mb-4">We install and service all major brands:</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-gray-700">
              <span className="bg-gray-100 px-4 py-2 rounded-full">Trane</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full">Carrier</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full">Lennox</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full">Mitsubishi</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full">Daikin</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full">Rheem</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full">Goodman</span>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Professional Installation Process
            </h2>
            <p className="text-lg text-gray-600">
              From sizing to startup, we do it right
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "1. Proper Sizing",
                desc: "Manual J load calculations ensure your system is sized perfectly. Not too big, not too small—just right for maximum efficiency.",
              },
              {
                icon: Award,
                title: "2. Expert Installation",
                desc: "Licensed Master HVAC Technicians install your system to manufacturer specs. Clean lines, proper drainage, code-compliant work.",
              },
              {
                icon: Clock,
                title: "3. Testing & Cleanup",
                desc: "Complete system testing, refrigerant charge verification, and startup. Then we clean your entire house—free!",
              },
            ].map((step, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 rounded-2xl p-8 border-2 border-blue-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Also Included:</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              {[
                "Old equipment removal & disposal",
                "Electrical work & breakers",
                "Thermostat installation (WiFi available)",
                "Condensate drain installation",
                "Refrigerant line installation",
                "All permits & inspections",
                "Warranty registration",
                "System operation training",
                "24-month parts & labor warranty",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* When to Replace */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
            Signs It's Time for a New AC
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { emoji: "📅", text: "AC over 12-15 years old" },
              { emoji: "💸", text: "Frequent, expensive repairs" },
              { emoji: "🌡️", text: "Can't keep house cool" },
              { emoji: "💰", text: "Energy bills climbing" },
            ].map((sign, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 text-center border-2 border-blue-200">
                <div className="text-4xl mb-3">{sign.emoji}</div>
                <p className="font-semibold text-gray-900">{sign.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing CTA */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <DollarSign className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            0% Financing Available
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Don't let upfront costs stop you from staying cool. Get a new AC system with $0 down and 0% APR financing up to $25,000.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/financing"
              className="bg-white text-green-700 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-50 transition-all"
            >
              View Financing Options
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 backdrop-blur text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/30 transition-all"
            >
              Get Free Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Also Interested In */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
            Also Interested In?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/cooling-repair" className="group bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border-2 border-blue-200 hover:shadow-lg transition-all">
              <Snowflake className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700">AC Repair</h3>
              <p className="text-sm text-gray-600 mb-4">Fast AC repairs. Same-day service available.</p>
              <span className="text-blue-700 font-semibold text-sm">Learn More →</span>
            </Link>

            <Link href="/services/heating-installation" className="group bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border-2 border-red-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-4">
                <span className="text-white text-2xl">🔥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-700">Heating Installation</h3>
              <p className="text-sm text-gray-600 mb-4">New furnaces & boilers professionally installed.</p>
              <span className="text-red-700 font-semibold text-sm">Learn More →</span>
            </Link>

            <Link href="/services/preventative-maintenance" className="group bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border-2 border-orange-200 hover:shadow-lg transition-all">
              <Clock className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-700">Maintenance Plans</h3>
              <p className="text-sm text-gray-600 mb-4">Keep your AC running smoothly year-round.</p>
              <span className="text-orange-700 font-semibold text-sm">Learn More →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Ready for a New Cooling System?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get your free, no-pressure estimate. We'll assess your home and recommend the perfect cooling solution.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+12017875657"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full font-bold text-lg shadow-lg transition-all"
            >
              📞 Call (201) 787-5657
            </a>
            <Link
              href="/contact"
              className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-10 py-5 rounded-full font-bold text-lg transition-all"
            >
              Request Estimate Online
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Serving Morris, Sussex, Warren, Essex, Passaic, Union, and Bergen County
          </p>
        </div>
      </section>
    </main>
  );
}