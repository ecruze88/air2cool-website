import type { Metadata } from "next";
import { Snowflake, CheckCircle, DollarSign, Shield, Clock, Award, Zap, Wind } from "lucide-react";
import Link from "next/link";
import VideoShowcase from "@/components/VideoShowcase";

export const metadata: Metadata = {
  title: "AC & Cooling System Installation in North Jersey | Air2Cool | (201) 787-5657",
  description:
    "Professional AC installation in North Jersey. Central air, heat pumps & mini splits for Morris County, Essex County & beyond. Free estimates, 0% financing, 10-year warranties. Licensed since 1998. Call (201) 787-5657.",
  keywords: [
    "AC installation Morris County NJ",
    "central air conditioning installation NJ",
    "heat pump installation North NJ",
    "mini split installation Morris County",
    "ductless AC installation NJ",
    "cooling system installation Morris County",
    "new air conditioner installation NJ",
    "AC replacement Morris County",
  ],
  alternates: {
    canonical: "/services/cooling-installation",
  },
  openGraph: {
    title: "AC & Cooling System Installation in North Jersey | Air2Cool",
    description:
      "Central AC, heat pumps & ductless mini splits. 0% financing. Free house cleaning every install. Morris County & North NJ. Call (201) 787-5657.",
    url: "/services/cooling-installation",
  },
};

export default function CoolingInstallationPage() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Cooling System Installation",
            "alternateName": "AC Installation",
            "description": "Professional installation of central air conditioners, heat pumps, and ductless mini-split systems in Morris County & North New Jersey. Includes free house cleaning and 0% financing options.",
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
            "url": "https://www.air2cool.com/services/cooling-installation",
            "serviceType": "HVAC Installation",
            "offers": {
              "@type": "Offer",
              "description": "Free estimate. 0% APR financing up to $25,000. Free house cleaning included.",
              "availability": "https://schema.org/InStock"
            }
          })
        }}
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: "40px 40px" }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-4">
              <Snowflake className="w-4 h-4" />
              COOLING INSTALLATION
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 md:mb-6">
              AC & Cooling System Installation in North Jersey
            </h1>

            <p className="text-base md:text-xl text-gray-200 leading-relaxed max-w-3xl mb-6 md:mb-8">
              Air2Cool has been installing cooling systems across Morris County, Essex County, and North Jersey since 1998. Whether you need central AC in Rockaway, a heat pump in Randolph, or a ductless mini split in Short Hills or Millburn — we size it right and back it with a 10-year warranty.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-6 md:mb-8">
              <Link href="/contact" className="bg-white text-blue-700 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-all shadow-lg hover:bg-gray-50 text-center">
                Get Free Estimate
              </Link>
              <a href="tel:+12017875657" className="bg-white/10 hover:bg-white/20 backdrop-blur text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all border border-white/20 text-center">
                Call (201) 787-5657
              </a>
            </div>

            {/* Quick Benefits */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-white/10 backdrop-blur rounded-xl p-3 border border-white/20">
                <div className="text-xl mb-1">💰</div>
                <div className="text-xs font-semibold">0% Financing</div>
                <div className="text-[10px] text-gray-300">Up to $25k</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-3 border border-white/20">
                <div className="text-xl mb-1">🏠</div>
                <div className="text-xs font-semibold">Free Cleaning</div>
                <div className="text-[10px] text-gray-300">Every install</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-3 border border-white/20">
                <div className="text-xl mb-1">⭐</div>
                <div className="text-xs font-semibold">5.0 Rating</div>
                <div className="text-[10px] text-gray-300">150+ reviews</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-3 border border-white/20">
                <div className="text-xl mb-1">🛡️</div>
                <div className="text-xs font-semibold">10-Year</div>
                <div className="text-[10px] text-gray-300">Warranties</div>
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

      {/* Cooling System Types - Compact */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
              Which Cooling System is Right for You?
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              We install all types of cooling systems to fit your home and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-6">
            {/* Central AC */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-5 md:p-6 border-2 border-blue-200">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-3">
                <Snowflake className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Central Air Conditioning</h3>
              <p className="text-xs md:text-sm text-gray-600 mb-3">Whole-home cooling through ductwork</p>
              <div className="space-y-1 text-xs md:text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-blue-600 shrink-0" />
                  <span className="text-gray-700">Cools entire home evenly</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-blue-600 shrink-0" />
                  <span className="text-gray-700">Works with existing ducts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-blue-600 shrink-0" />
                  <span className="text-gray-700">High SEER ratings available</span>
                </div>
              </div>
            </div>

            {/* Heat Pumps */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-5 md:p-6 border-2 border-green-200">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-green-600 rounded-xl flex items-center justify-center mb-3">
                <Zap className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Heat Pumps</h3>
              <p className="text-xs md:text-sm text-gray-600 mb-3">Cool in summer, heat in winter</p>
              <div className="space-y-1 text-xs md:text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-600 shrink-0" />
                  <span className="text-gray-700">Two systems in one</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-600 shrink-0" />
                  <span className="text-gray-700">Ultra energy-efficient</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-600 shrink-0" />
                  <span className="text-gray-700">Lower operating costs</span>
                </div>
              </div>
            </div>

            {/* Mini Splits */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-5 md:p-6 border-2 border-purple-200">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-3">
                <Wind className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Ductless Mini Splits</h3>
              <p className="text-xs md:text-sm text-gray-600 mb-3">Zone cooling without ductwork</p>
              <div className="space-y-1 text-xs md:text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-purple-600 shrink-0" />
                  <span className="text-gray-700">No ductwork needed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-purple-600 shrink-0" />
                  <span className="text-gray-700">Cool specific rooms/zones</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-purple-600 shrink-0" />
                  <span className="text-gray-700">Whisper-quiet operation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Brand trust */}
          <div className="text-center">
            <p className="text-xs md:text-sm text-gray-600 mb-3">We install all major brands:</p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 text-xs md:text-sm font-semibold text-gray-700">
              <span className="bg-gray-100 px-3 py-1.5 rounded-full">Trane</span>
              <span className="bg-gray-100 px-3 py-1.5 rounded-full">Carrier</span>
              <span className="bg-gray-100 px-3 py-1.5 rounded-full">Lennox</span>
              <span className="bg-gray-100 px-3 py-1.5 rounded-full">Mitsubishi</span>
              <span className="bg-gray-100 px-3 py-1.5 rounded-full">Daikin</span>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process - Compact */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
              Professional Installation Process
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-5 shadow-lg border-2 border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-3">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">1. Proper Sizing</h3>
              <p className="text-xs md:text-sm text-gray-600">Manual J load calculations ensure perfect sizing for maximum efficiency.</p>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-lg border-2 border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-3">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">2. Expert Installation</h3>
              <p className="text-xs md:text-sm text-gray-600">Licensed Master HVAC Technicians install to manufacturer specs.</p>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-lg border-2 border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-3">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">3. Testing & Cleanup</h3>
              <p className="text-xs md:text-sm text-gray-600">Complete system testing, then we clean your entire house—free!</p>
            </div>
          </div>
        </div>
      </section>

      <VideoShowcase
        title="Air Handler Attic Installation — North NJ"
        src="/complete_air_handler_attic_install.mp4"
        caption="Complete air handler attic installation — precision-fitted for maximum efficiency and long-term reliability"
        sectionClassName="py-10 md:py-14 bg-gray-50"
      />

      {/* Financing CTA */}
      <section className="py-10 md:py-12 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <DollarSign className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
            0% Financing Available
          </h2>
          <p className="text-sm md:text-base text-green-100 mb-6">
            $0 down and 0% APR financing up to $25,000. Don't let upfront costs stop you from staying cool.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/financing" className="bg-white text-green-700 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg hover:bg-gray-50 transition-all w-full sm:w-auto text-center">
              View Financing Options
            </Link>
            <Link href="/contact" className="bg-white/10 hover:bg-white/20 backdrop-blur text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg border-2 border-white/30 transition-all w-full sm:w-auto text-center">
              Get Free Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* AC Installation Near You */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
              AC Installation Near You
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              We install cooling systems throughout Morris County, Essex County, and surrounding areas of North Jersey.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-center text-sm text-gray-700">
            {["Rockaway", "Randolph", "Morristown", "Denville", "Parsippany", "Dover", "Wharton", "Short Hills", "Millburn", "Livingston", "Montclair", "West Orange", "Wayne", "Montville", "Lincoln Park", "Boonton"].map((town) => (
              <div key={town} className="bg-gray-50 rounded-xl py-2.5 px-3 font-medium border border-gray-200">
                {town}, NJ
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-500 mt-4">
            Don&apos;t see your town? <a href="tel:+12017875657" className="text-blue-600 font-semibold hover:underline">Call us — we likely serve your area.</a>
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
            Ready for a New Cooling System?
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6">
            Get your free, no-pressure estimate. We'll assess your home and recommend the perfect cooling solution.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+12017875657" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg transition-all w-full sm:w-auto">
              📞 Call (201) 787-5657
            </a>
            <Link href="/contact" className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-all w-full sm:w-auto text-center">
              Request Estimate Online
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}