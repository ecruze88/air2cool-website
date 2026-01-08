import type { Metadata } from "next";
import { Flame, CheckCircle, DollarSign, Shield, Snowflake, Clock, Award } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Furnace Replacement & Installation | Air2Cool - North NJ",
  description:
    "Professional furnace replacement in Morris County & North NJ. High-efficiency furnaces with expert installation. 0% financing available. Free estimates. Call (201) 787-5657.",
};

export default function FurnaceReplacementPage() {
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
              FURNACE REPLACEMENT
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              New High-Efficiency Furnace Installation
            </h1>

            <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mb-8">
              Time for a new furnace? Get a professional installation with free house cleaning included. We remove your old furnace and install trusted brands with precision & care. Serving Morris County and North Jersey since 2008.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
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
                <div className="text-sm font-semibold">12-Year</div>
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

      {/* Why Replace Your Furnace */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              When to Replace Your Furnace
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Not sure if you need a replacement? Here are the signs it's time for a new furnace.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-200">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-4">
                15+
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Age Over 15 Years</h3>
              <p className="text-gray-700 text-sm">
                Most furnaces last 15-20 years. If yours is getting old, it's time to start planning for replacement before it fails in the cold.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8 border-2 border-yellow-200">
              <DollarSign className="w-12 h-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rising Energy Bills</h3>
              <p className="text-gray-700 text-sm">
                Old furnaces lose efficiency. If your heating bills keep climbing, a new high-efficiency furnace can pay for itself in savings.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200">
              <Snowflake className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Uneven Heating</h3>
              <p className="text-gray-700 text-sm">
                Some rooms hot, others cold? Your furnace is struggling to distribute heat properly. A new system will heat your whole home evenly.
              </p>
            </div>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Frequent repairs (repair costs add up fast)",
              "Strange noises (banging, rattling, squealing)",
              "Yellow pilot light (sign of carbon monoxide)",
              "Excessive dust (poor air circulation)",
            ].map((sign, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                <CheckCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">{sign}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              What's Included in Our Installation
            </h2>
            <p className="text-lg text-gray-600">
              Complete, professional installation with no surprises
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Shield,
                title: "Proper System Sizing",
                desc: "Manual J load calculations ensure your new furnace is sized exactly right for your home. No guessing.",
                color: "blue",
              },
              {
                icon: Flame,
                title: "Old System Removal",
                desc: "We safely disconnect and remove your old furnace, disposing of it properly. Your space is left clean.",
                color: "red",
              },
              {
                icon: CheckCircle,
                title: "Professional Installation",
                desc: "Licensed Master HVAC Technicians install your new furnace to manufacturer specs and building codes.",
                color: "green",
              },
              {
                icon: Clock,
                title: "Testing & Startup",
                desc: "Complete system testing, safety checks, and startup. We make sure everything works perfectly before we leave.",
                color: "orange",
              },
              {
                icon: Award,
                title: "Free House Cleaning",
                desc: "We clean your entire house after installation. No dust, no mess. It's our thank-you for choosing us.",
                color: "purple",
              },
              {
                icon: Shield,
                title: "Warranty Registration",
                desc: "We register your equipment warranty and provide all documentation. Up to 12-year warranties available.",
                color: "cyan",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-sm border-2 border-gray-200 hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-xl flex items-center justify-center shrink-0`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands We Install */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-10 border-2 border-blue-200">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                Trusted Brands, Expert Installation
              </h2>
              <p className="text-lg text-gray-700">
                We're partnered with Trane and service all major brands
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">Trane</div>
                <p className="text-sm text-gray-600">Official Trane dealer. Industry-leading reliability and warranties.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">Carrier</div>
                <p className="text-sm text-gray-600">High-efficiency Carrier systems with excellent performance.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">Lennox</div>
                <p className="text-sm text-gray-600">Premium Lennox furnaces with advanced technology.</p>
              </div>
            </div>

            <p className="text-center mt-6 text-sm text-gray-600">
              Also installing: Rheem, Goodman, American Standard, Bryant, and more
            </p>
          </div>
        </div>
      </section>

      {/* Financing CTA */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            0% Financing Available
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Don't let upfront costs stop you. Get a new furnace with $0 down and 0% APR financing up to $25,000.
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

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Ready for a New Furnace?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get your free, no-pressure estimate today. We'll assess your home and recommend the right system.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+12017875657"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-full font-bold text-lg shadow-lg transition-all"
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
            Serving Morris County, Sussex, Warren, Essex, Passaic, Union, and Bergen County
          </p>
        </div>
      </section>
    </main>
  );
}