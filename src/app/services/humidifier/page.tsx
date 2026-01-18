import type { Metadata } from "next";
import { CheckCircle, Droplets, Home, Shield, Zap, Clock, DollarSign, AlertTriangle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aprilaire 865 Humidifier Installation | Whole-Home Humidity Control | Air2Cool NJ",
  description:
    "Professional installation of Aprilaire 865 ductless steam humidifier. Eliminate dry air, protect your home, improve health. Serving North NJ. 0% financing available. Call (201) 787-5657.",
};

export default function HumidifierPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-cyan-900 via-blue-800 to-cyan-800 text-white overflow-hidden py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-cyan-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Droplets className="w-4 h-4" />
                WHOLE-HOME HUMIDIFICATION
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 md:mb-6">
                Say Goodbye to Dry Winter Air
              </h1>

              <p className="text-base md:text-xl text-gray-200 mb-4 md:mb-6">
                Professional installation of the Aprilaire 865 ductless steam humidifier. 
                Eliminate dry skin, static shock, and protect your home's wood furniture and floors.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-6 md:mb-8">
                <Link
                  href="/contact"
                  className="bg-white text-cyan-700 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg hover:bg-gray-50 transition-all text-center"
                >
                  Get Free Estimate
                </Link>
                <a
                  href="tel:+12017875657"
                  className="bg-white/10 backdrop-blur text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg border-2 border-white/30 transition-all hover:bg-white/20 text-center"
                >
                  Call (201) 787-5657
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3 md:gap-4">
                <div className="bg-white/10 backdrop-blur px-3 md:px-4 py-2 rounded-full text-xs md:text-sm">
                  ✓ Professional Installation
                </div>
                <div className="bg-white/10 backdrop-blur px-3 md:px-4 py-2 rounded-full text-xs md:text-sm">
                  ✓ Factory Warranty
                </div>
                <div className="bg-white/10 backdrop-blur px-3 md:px-4 py-2 rounded-full text-xs md:text-sm">
                  ✓ 0% Financing Available
                </div>
              </div>
            </div>

            {/* Right: Product Highlight */}
            <div className="bg-white/10 backdrop-blur rounded-3xl p-6 md:p-8 border border-white/20">
              <div className="bg-white rounded-2xl p-5 md:p-6">
                <div className="text-center">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Aprilaire 865</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">Ductless Steam Humidifier Package</p>
                  
                  <div className="space-y-2 md:space-y-3 text-left">
                    <div className="flex items-center gap-2 text-xs md:text-sm text-gray-700">
                      <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-600" />
                      <span>Covers up to 3,400 sq ft</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs md:text-sm text-gray-700">
                      <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-600" />
                      <span>No ductwork needed</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs md:text-sm text-gray-700">
                      <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-600" />
                      <span>5-year factory warranty</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs md:text-sm text-gray-700">
                      <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-600" />
                      <span>Whisper-quiet operation</span>
                    </div>
                  </div>

                  <a
                    href="https://samedaysupply.com/products/aprilaire-steam-humidifer-865-ductless-steam-humidifier-package"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 md:mt-6 text-xs md:text-sm text-blue-600 hover:underline"
                  >
                    View Product Details →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Dry Air Causes */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8 md:mb-12">
            <AlertTriangle className="w-10 h-10 md:w-12 md:h-12 text-orange-500 mx-auto mb-3 md:mb-4" />
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-3 md:mb-4">
              Dry Winter Air Causes Real Problems
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
              Low humidity isn't just uncomfortable - it damages your health and your home
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-red-100">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-red-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Health Issues</h3>
              <ul className="space-y-2 text-xs md:text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Dry, itchy, cracked skin</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Chapped lips and bloody noses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Sore throat and sinus irritation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Aggravated asthma and allergies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Annoying static shocks</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-orange-100">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Home className="w-5 h-5 md:w-6 md:h-6 text-orange-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Home Damage</h3>
              <ul className="space-y-2 text-xs md:text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Cracked hardwood floors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Furniture joints loosen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Wallpaper peeling and gaps</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Doors shrink and warp</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Piano goes out of tune</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-blue-100">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <DollarSign className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Higher Costs</h3>
              <ul className="space-y-2 text-xs md:text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Furnace works harder</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Higher heating bills</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>More dust circulation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Dry air feels colder</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Turn heat up more often</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center bg-cyan-50 rounded-2xl p-6 md:p-8 border-2 border-cyan-200">
            <Droplets className="w-10 h-10 md:w-12 md:h-12 text-cyan-600 mx-auto mb-3 md:mb-4" />
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">
              The Solution: Proper Humidification
            </h3>
            <p className="text-sm md:text-lg text-gray-700 max-w-3xl mx-auto">
              Maintain ideal humidity (35-45%) and eliminate ALL these problems. 
              Healthier air, protected home, lower heating bills.
            </p>
          </div>
        </div>
      </section>

      {/* Why Aprilaire 865 */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-center text-gray-900 mb-8 md:mb-12">
            Why the Aprilaire 865?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-cyan-600 rounded-xl flex items-center justify-center shrink-0">
                  <Home className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                    No Ductwork Needed
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    Perfect for homes without forced air systems. Works with boilers, 
                    radiators, baseboard heat, or radiant floors.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-cyan-600 rounded-xl flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                    Powerful & Efficient
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    Steam technology humidifies faster and more effectively than 
                    evaporative humidifiers. Covers up to 3,400 sq ft.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-cyan-600 rounded-xl flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                    Easy Maintenance
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    No filters to replace! Just drain the canister once per season. 
                    Self-cleaning technology keeps it running smoothly.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-cyan-600 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                    Set It & Forget It
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    Digital thermostat automatically maintains perfect humidity levels. 
                    Whisper-quiet operation you'll barely notice.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 md:p-8 border-2 border-cyan-200">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                Technical Specs
              </h3>
              <div className="space-y-2 md:space-y-3">
                <div className="flex items-center gap-3 pb-2 md:pb-3 border-b border-cyan-200">
                  <span className="font-semibold text-gray-900 text-sm md:text-base w-24 md:w-32">Coverage:</span>
                  <span className="text-xs md:text-sm text-gray-700">Up to 3,400 sq ft</span>
                </div>
                <div className="flex items-center gap-3 pb-2 md:pb-3 border-b border-cyan-200">
                  <span className="font-semibold text-gray-900 text-sm md:text-base w-24 md:w-32">Output:</span>
                  <span className="text-xs md:text-sm text-gray-700">11.5 gallons/day</span>
                </div>
                <div className="flex items-center gap-3 pb-2 md:pb-3 border-b border-cyan-200">
                  <span className="font-semibold text-gray-900 text-sm md:text-base w-24 md:w-32">Type:</span>
                  <span className="text-xs md:text-sm text-gray-700">Steam (electrode)</span>
                </div>
                <div className="flex items-center gap-3 pb-2 md:pb-3 border-b border-cyan-200">
                  <span className="font-semibold text-gray-900 text-sm md:text-base w-24 md:w-32">Installation:</span>
                  <span className="text-xs md:text-sm text-gray-700">Ductless</span>
                </div>
                <div className="flex items-center gap-3 pb-2 md:pb-3 border-b border-cyan-200">
                  <span className="font-semibold text-gray-900 text-sm md:text-base w-24 md:w-32">Control:</span>
                  <span className="text-xs md:text-sm text-gray-700">Digital thermostat</span>
                </div>
                <div className="flex items-center gap-3 pb-2 md:pb-3 border-b border-cyan-200">
                  <span className="font-semibold text-gray-900 text-sm md:text-base w-24 md:w-32">Noise:</span>
                  <span className="text-xs md:text-sm text-gray-700">Whisper-quiet</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-gray-900 text-sm md:text-base w-24 md:w-32">Warranty:</span>
                  <span className="text-xs md:text-sm text-gray-700">5-year factory</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Info */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-4 md:mb-6">
            Professional Installation Included
          </h2>
          <p className="text-base md:text-xl text-gray-600 mb-8 md:mb-12">
            Our licensed Master HVAC Technicians will install your Aprilaire 865 
            properly and safely. We handle everything.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            <div className="bg-white rounded-xl p-5 md:p-6 shadow-lg">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-lg md:text-xl mx-auto mb-3">
                1
              </div>
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">Site Assessment</h3>
              <p className="text-xs md:text-sm text-gray-600">
                We evaluate your home and recommend the best location
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 md:p-6 shadow-lg">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-lg md:text-xl mx-auto mb-3">
                2
              </div>
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">Expert Install</h3>
              <p className="text-xs md:text-sm text-gray-600">
                Professional installation with all plumbing and electrical work
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 md:p-6 shadow-lg">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-lg md:text-xl mx-auto mb-3">
                3
              </div>
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">Testing & Training</h3>
              <p className="text-xs md:text-sm text-gray-600">
                We test everything and show you how to use it
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-lg shadow-lg transition-all hover:scale-105"
          >
            Get Your Free Estimate →
          </Link>
        </div>
      </section>

      {/* Financing CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <DollarSign className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4" />
          <h2 className="text-2xl md:text-4xl font-extrabold mb-3 md:mb-4">
            0% Financing Available
          </h2>
          <p className="text-base md:text-xl mb-6 md:mb-8">
            Make your home more comfortable with $0 down and 0% APR financing up to $25,000.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/financing"
              className="bg-white text-green-700 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg hover:bg-gray-50 transition-all w-full sm:w-auto text-center"
            >
              View Financing Options
            </Link>
            <a
              href="tel:+12017875657"
              className="bg-white/10 backdrop-blur text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg border-2 border-white/30 transition-all hover:bg-white/20 w-full sm:w-auto text-center"
            >
              Call (201) 787-5657
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}