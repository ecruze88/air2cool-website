import type { Metadata } from "next";
import { Zap, CheckCircle, Home, Gift } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HVAC Installation Services | Air2Cool - North NJ",
  description:
    "Professional HVAC system installation in North New Jersey. New furnace, AC, and heat pump installations with FREE house cleaning. Get improved comfort and energy savings!",
};

export default function HVACInstallationPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-purple-900 via-indigo-800 to-purple-800 text-white overflow-hidden">
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
            <div className="inline-flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-4">
              <Zap className="w-4 h-4" />
              HVAC INSTALLATION
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Enjoy Improved Comfort and Energy Savings
            </h1>

            <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mb-8">
              Is your existing comfort system is not meeting expectations anymore? Make a change for the better with help from Air2Cool Heating/AC & Refrigeration. We can replace your older heating or air conditioning equipment with a more reliable and energy-efficient system. You'll not only have improved comfort but utility cost savings as well!
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-white text-purple-700 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:bg-gray-50"
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

      {/* Special Offer Banner */}
      <section className="py-8 bg-linear-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-4">
            <Gift className="w-10 h-10" />
            <div className="text-center">
              <p className="text-2xl font-bold">Get Free House Cleaning With New HVAC System!</p>
              <p className="text-purple-100">When you have us install a new HVAC system in your home, you'll also get your home professionally cleaned. We think you'll love the value!</p>
            </div>
          </div>
        </div>
      </section>

      {/* All Your HVAC Needs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                All Your HVAC System Needs
              </h2>
              
              <div className="space-y-4 mb-8">
                {[
                  "Full system design",
                  "Residential HVAC system installation",
                  "Commercial HVAC system installation",
                  "Ductless and mini-split systems",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-600 shrink-0 mt-0.5" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200">
                <Home className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Free House Cleaning With New Comfort System
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  When you have us install a new HVAC system in your home, you'll also get your home professionally cleaned. We think you'll love the value! To learn more about this special offer and for a free estimate, please contact us today.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-linear-to-br from-purple-100 to-pink-100 rounded-3xl p-8">
                {/* Placeholder - replace with actual image */}
                <div className="rounded-2xl bg-linear-to-br from-purple-600 to-pink-600 aspect-4/3 flex items-center justify-center shadow-lg">
                  <Zap className="w-32 h-32 text-white opacity-20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center">
            Why Choose Air2Cool for Your Installation?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Expert System Sizing
              </h3>
              <p className="text-gray-600">
                Properly sized systems ensure optimal comfort and efficiency. We take the time to calculate the right size for your home.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Energy Efficient Equipment
              </h3>
              <p className="text-gray-600">
                Modern HVAC systems can dramatically reduce your energy bills while keeping you more comfortable year-round.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Clean Installation
              </h3>
              <p className="text-gray-600">
                We treat your home with respect. Clean, professional installations with no mess left behind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonial */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block bg-linear-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg border-2 border-purple-200">
            <p className="text-gray-700 italic text-lg mb-4">
              "These guys were amazing. Hector and Jose are responsive, reliable, fast, and their prices were extremely competitive compared to the bigger companies. I can't say enough positives about them."
            </p>
            <p className="font-semibold text-gray-900">
              - Dr. Adam Price, Google Review
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-r from-purple-700 to-pink-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Upgrade Your Comfort System?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get a free estimate on a new HVAC installation. Plus, we'll clean your house for free!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-700 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-50 transition"
            >
              Get Free Estimate
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
            Make your new HVAC system affordable with flexible financing options. Ask us for details!
          </p>
        </div>
      </section>
    </main>
  );
}