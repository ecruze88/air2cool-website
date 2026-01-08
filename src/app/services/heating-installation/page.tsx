import type { Metadata } from "next";
import { Flame, CheckCircle, Shield, Award, DollarSign, Wrench, Clock } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Furnace & Boiler Installation in North NJ | Air2Cool Heating & Cooling",
  description:
    "Professional furnace and boiler installation in North New Jersey. Hydronic, steam, NTI systems. Free house cleaning with every install. Licensed Master HVAC Technicians. 0% financing available. Call (201) 787-5657.",
};

export default function HeatingInstallationPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-red-900 via-orange-800 to-red-800 text-white overflow-hidden py-20">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <div className="inline-block mb-4">
              <span className="bg-white text-red-700 px-4 py-2 rounded-full text-sm font-semibold">
                HEATING INSTALLATION
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              New Furnace & Boiler Installation
            </h1>

            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Professional installation of high-efficiency furnaces and boilers. Hydronic, steam, and NTI systems. 
              Every installation includes free house cleaning and expert sizing.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                href="/contact"
                className="bg-white text-red-700 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-50 transition-all"
              >
                Get Free Estimate
              </Link>
              <a
                href="tel:+12017875657"
                className="bg-white/10 backdrop-blur text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/30 transition-all hover:bg-white/20"
              >
                Call (201) 787-5657
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm border border-white/20">
                <CheckCircle className="inline w-4 h-4 mr-1" />
                Free House Cleaning
              </div>
              <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm border border-white/20">
                <CheckCircle className="inline w-4 h-4 mr-1" />
                0% Financing Available
              </div>
              <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm border border-white/20">
                <CheckCircle className="inline w-4 h-4 mr-1" />
                Licensed & Insured
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

      {/* Premium Installation Showcase - MAIN IMAGE */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Premium Boiler Installations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in high-end Lochinvar, NTI, and Weil-McLain boiler systems. 
              Every installation is professionally sized, installed, and tested.
            </p>
          </div>

          {/* MAIN SHOWCASE IMAGE */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/three-install.jpeg"
                alt="Professional Lochinvar boiler installation by Air2Cool - 3 zones with smart digital controls in Morris County NJ"
                className="w-full"
              />
            </div>
            <div className="text-center mt-6 space-y-2">
              <p className="text-lg font-semibold text-gray-900">
                Recent 3-Zone Lochinvar Installation - Morris County, NJ
              </p>
              <p className="text-sm text-gray-600">
                High-efficiency Lochinvar boilers with smart controls and zone management
              </p>
            </div>
          </div>

          {/* Installation Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Sizing</h3>
              <p className="text-gray-600">
                Manual J load calculations ensure your new system is perfectly sized for your home. 
                Not too big, not too small - just right for maximum efficiency.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Wrench className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Clean Installation</h3>
              <p className="text-gray-600">
                Professional piping, wiring, and setup. We protect your home during install and 
                include FREE house cleaning when we're done.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Complete Testing</h3>
              <p className="text-gray-600">
                Full system testing, combustion analysis, and customer training. We don't leave 
                until you're 100% comfortable with your new system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Systems We Install */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-12">
            Heating Systems We Install
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Furnaces */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border-2 border-orange-200">
              <Flame className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Gas Furnaces</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>High-efficiency models</strong> - Up to 98% AFUE</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>Top brands:</strong> Carrier, Trane, Lennox, Goodman</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>Single & two-stage</strong> models available</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>Variable-speed blowers</strong> for comfort</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>10-12 year warranties</strong> available</span>
                </li>
              </ul>
            </div>

            {/* Boilers */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200">
              <Flame className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Boilers (Hydronic/Steam)</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>Lochinvar</strong> - Premium condensing boilers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>NTI Trinity</strong> - High-efficiency wall-hung</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>Weil-McLain</strong> - Cast iron & condensing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>Hydronic & steam</strong> systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>Zone controls</strong> for efficiency</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Every Installation Includes
            </h2>
            <p className="text-xl text-gray-600">
              We don't cut corners. Here's what comes standard with every heating installation:
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Manual J Load Calculation</h4>
                  <p className="text-sm text-gray-600">Proper sizing based on your home's needs</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">All Permits & Inspections</h4>
                  <p className="text-sm text-gray-600">We handle everything with your town</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Professional Gas Piping</h4>
                  <p className="text-sm text-gray-600">Code-compliant and pressure tested</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Proper Venting</h4>
                  <p className="text-sm text-gray-600">PVC or stainless steel as required</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Condensate Management</h4>
                  <p className="text-sm text-gray-600">Proper drainage and pump if needed</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Thermostat Upgrade</h4>
                  <p className="text-sm text-gray-600">Programmable or smart thermostat</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Complete Testing</h4>
                  <p className="text-sm text-gray-600">Combustion analysis and safety checks</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">FREE House Cleaning</h4>
                  <p className="text-sm text-gray-600">We clean up after ourselves - guaranteed!</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
            <div className="flex items-start gap-4">
              <Award className="w-10 h-10 text-green-600 shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Factory Warranties Included</h4>
                <p className="text-gray-700">
                  All equipment comes with manufacturer warranties (typically 10-12 years on parts). 
                  We also offer extended labor warranties for extra peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financing */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <DollarSign className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            0% Financing Available
          </h2>
          <p className="text-xl mb-4">
            Up to $25,000 with $0 down and 0% APR financing.
          </p>
          <p className="text-lg text-green-100 mb-8">
            Plus: Check for available rebates from NJNG SaveGreen and state energy programs.
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
              className="bg-white/10 backdrop-blur text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/30 transition-all hover:bg-white/20"
            >
              Get Free Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Ready for a New Heating System?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get a free in-home estimate. We'll assess your needs, explain your options, 
            and provide upfront pricing - no pressure, no gimmicks.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-full font-bold text-lg shadow-lg transition-all hover:scale-105"
            >
              Schedule Free Estimate →
            </Link>
            <a
              href="tel:+12017875657"
              className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-10 py-5 rounded-full font-semibold text-lg transition-all"
            >
              Call (201) 787-5657
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}