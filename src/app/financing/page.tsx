import type { Metadata } from "next";
import { DollarSign, CheckCircle, Calculator, FileText, Zap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Financing Options | Air2Cool Heating & Cooling",
  description:
    "Flexible financing options for your HVAC project. NJNG SaveGreen rebates and JCP&L energy efficiency programs available. Make your upgrade affordable!",
};

export default function FinancingPage() {
  return (
    <main className="bg-white">
      {/* Hero Section - MOBILE OPTIMIZED */}
      <section className="relative bg-gradient-to-r from-green-900 via-emerald-800 to-green-800 text-white overflow-hidden">
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
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 md:gap-2 bg-green-600 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
              <DollarSign className="w-3 h-3 md:w-4 md:h-4" />
              FINANCING OPTIONS
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 md:mb-6">
              Affordable HVAC Financing
            </h1>

            <p className="text-base md:text-xl text-gray-200 leading-relaxed mb-6 md:mb-8">
              Flexible financing to make your HVAC upgrade affordable with convenient monthly payments.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* NJNG SaveGreen - MOBILE OPTIMIZED */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* NJNG Info */}
            <div>
              <div className="bg-white rounded-xl md:rounded-2xl border-4 border-green-500 p-5 md:p-8 shadow-xl mb-6 md:mb-8">
                <div className="text-center mb-4 md:mb-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-1 md:mb-2">
                    NJ Natural Gas
                  </h2>
                  <div className="text-3xl md:text-5xl font-black text-green-600">SaveGreen</div>
                  <p className="text-sm md:text-lg text-gray-700 mt-2 md:mt-3">Rebates + 0% APR Financing!</p>
                </div>

                <div className="space-y-4 md:space-y-6">
                  {/* 0% APR Box */}
                  <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg md:rounded-xl p-4 md:p-6 text-white border-2 border-green-700 shadow-lg">
                    <div className="text-center mb-3 md:mb-4">
                      <div className="text-2xl md:text-3xl font-black mb-1 md:mb-2">0% APR Financing</div>
                      <div className="text-base md:text-xl font-bold">On-Bill Repayment</div>
                    </div>
                    <div className="space-y-2 md:space-y-3 text-xs md:text-base text-green-50">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 shrink-0 mt-0.5" />
                        <span><strong>Up to $25,000</strong> interest-free</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 shrink-0 mt-0.5" />
                        <span><strong>0% APR</strong> - No interest ever!</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 shrink-0 mt-0.5" />
                        <span><strong>Payments</strong> on your gas bill</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 shrink-0 mt-0.5" />
                        <span><strong>Rebates reduce</strong> what you borrow</span>
                      </div>
                    </div>
                  </div>

                  {/* Rebates */}
                  <div className="bg-green-50 rounded-lg md:rounded-xl p-4 md:p-6 border-2 border-green-200">
                    <h3 className="text-base md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
                      Cash Back Rebates
                    </h3>
                    <ul className="space-y-2 md:space-y-3">
                      <li className="flex items-start gap-2 md:gap-3">
                        <DollarSign className="w-4 h-4 md:w-5 md:h-5 text-green-600 shrink-0 mt-0.5" />
                        <span className="text-xs md:text-base text-gray-700">
                          <strong>Up to $3,650</strong> in HVAC rebates
                        </span>
                      </li>
                      <li className="flex items-start gap-2 md:gap-3">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 shrink-0 mt-0.5" />
                        <span className="text-xs md:text-base text-gray-700">
                          <strong>Rebates reduce loan</strong> = lower payments
                        </span>
                      </li>
                      <li className="flex items-start gap-2 md:gap-3">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 shrink-0 mt-0.5" />
                        <span className="text-xs md:text-base text-gray-700">
                          Available through June 30, 2027
                        </span>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="https://powerforms.docusign.net/22cbeaf4-ad88-4419-8f57-e014c1687adb?env=na2&acct=012126eb-efad-4a70-b29a-c2482d2a8b9f&accountId=012126eb-efad-4a70-b29a-c2482d2a8b9f"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 md:py-4 rounded-lg transition text-center text-sm md:text-base"
                  >
                    Learn More About SaveGreen →
                  </a>

                  {/* How We Help - Desktop only */}
                  <div className="hidden md:block bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      How Air2Cool Helps
                    </h3>
                    <ol className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-blue-600 shrink-0">1.</span>
                        <span>Assess system and recommend upgrades</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-blue-600 shrink-0">2.</span>
                        <span>Apply for rebates + 0% financing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-blue-600 shrink-0">3.</span>
                        <span>Professional installation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-blue-600 shrink-0">4.</span>
                        <span>Handle all paperwork</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl md:rounded-2xl p-5 md:p-8 border-2 border-green-300 mb-6 md:mb-8">
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-green-600 rounded-lg flex items-center justify-center shrink-0">
                    <Zap className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-lg md:text-2xl font-extrabold text-gray-900">
                      Save on Energy Bills
                    </div>
                    <div className="text-xs md:text-sm text-gray-700">
                      Save 20-40% on energy costs
                    </div>
                  </div>
                </div>

                <h3 className="text-base md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
                  Equipment Rebates
                </h3>

                <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                  <div className="flex items-center justify-between bg-white rounded-lg p-3 md:p-4 border border-green-200">
                    <span className="font-semibold text-gray-900 text-xs md:text-base">High-Efficiency Furnaces</span>
                    <span className="text-green-600 font-bold text-xs md:text-base">$2,000</span>
                  </div>
                  <div className="flex items-center justify-between bg-white rounded-lg p-3 md:p-4 border border-green-200">
                    <span className="font-semibold text-gray-900 text-xs md:text-base">Central AC</span>
                    <span className="text-green-600 font-bold text-xs md:text-base">$1,500</span>
                  </div>
                  <div className="flex items-center justify-between bg-white rounded-lg p-3 md:p-4 border border-green-200">
                    <span className="font-semibold text-gray-900 text-xs md:text-base">Heat Pumps</span>
                    <span className="text-green-600 font-bold text-xs md:text-base">$3,000</span>
                  </div>
                  <div className="flex items-center justify-between bg-white rounded-lg p-3 md:p-4 border border-green-200">
                    <span className="font-semibold text-gray-900 text-xs md:text-base">Smart Thermostats</span>
                    <span className="text-green-600 font-bold text-xs md:text-base">$150</span>
                  </div>
                </div>

                {/* Why Choose - Desktop only */}
                <div className="hidden md:block bg-white rounded-xl p-6 border-2 border-green-200">
                  <h4 className="font-bold text-gray-900 mb-3">Why Energy-Efficient?</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold shrink-0">✓</span>
                      <span>Lower utility bills</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold shrink-0">✓</span>
                      <span>Better comfort</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold shrink-0">✓</span>
                      <span>Increased home value</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Stack Savings - Condensed on mobile */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl md:rounded-2xl p-5 md:p-8 border-2 border-blue-300">
                <h3 className="text-base md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
                  Stack Your Savings
                </h3>
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-start gap-2 md:gap-3">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div className="text-xs md:text-base">
                      <span className="font-semibold text-gray-900">Federal Tax Credits: </span>
                      <span className="text-gray-700">Up to 30%</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 md:gap-3">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div className="text-xs md:text-base">
                      <span className="font-semibold text-gray-900">JCP&L Programs: </span>
                      <span className="text-gray-700">Additional rebates</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 md:gap-3">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div className="text-xs md:text-base">
                      <span className="font-semibold text-gray-900">Manufacturer Rebates: </span>
                      <span className="text-gray-700">Seasonal promotions</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-6 p-3 md:p-4 bg-white rounded-lg border border-blue-200">
                  <p className="text-xs md:text-sm text-gray-700">
                    <strong>Example:</strong> $8,000 system = $4,500 after rebates!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  {/* JCP&L - MOBILE OPTIMIZED */}
      <section className="py-10 md:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-4 md:mb-6">
                JCP&L Energy Efficiency Financing
              </h2>
              
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <div className="flex items-start gap-2 md:gap-3">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-600 shrink-0 mt-0.5" />
                  <div className="text-xs md:text-base">
                    <div className="font-bold text-gray-900">0% APR financing</div>
                    <div className="text-gray-700">For energy upgrades</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-2 md:gap-3">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-600 shrink-0 mt-0.5" />
                  <div className="text-xs md:text-base text-gray-700">Loans $2,500 to $35,000</div>
                </div>
                
                <div className="flex items-start gap-2 md:gap-3">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-600 shrink-0 mt-0.5" />
                  <div className="text-xs md:text-base text-gray-700">Terms 36-120 months</div>
                </div>
              </div>

              <a
                href="https://www.neifund.org/air2cool-a-c-heating-refrigeration/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 md:py-4 rounded-lg transition text-center text-sm md:text-base"
              >
                Apply for JCP&L Financing →
              </a>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-xl md:rounded-2xl p-6 md:p-10 text-white">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Go Greener. Affordably.</h3>
              
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <p className="text-xs md:text-base text-blue-50">
                  Make energy-efficient upgrades more affordable with special NJ financing programs.
                </p>
                <p className="text-xs md:text-base text-blue-50">
                  As an approved contractor, we help you access these exclusive options.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-lg md:rounded-xl p-4 md:p-6 border border-white/20">
                <div className="text-xs md:text-sm text-blue-100 mb-1 md:mb-2">Example Payment:</div>
                <div className="text-3xl md:text-4xl font-extrabold mb-1 md:mb-2">$139/mo</div>
                <div className="text-xs md:text-base text-blue-100">$5,000 system / 36 months / 0% APR</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits - MOBILE OPTIMIZED */}
      <section className="py-10 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-6 md:mb-10 text-center">
            Why Finance Your Upgrade?
          </h2>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <DollarSign className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
              </div>
              <h3 className="text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                Affordable Payments
              </h3>
              <p className="text-xs md:text-base text-gray-600">
                Low monthly payments that fit your budget.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Zap className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
              </div>
              <h3 className="text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                Instant Savings
              </h3>
              <p className="text-xs md:text-base text-gray-600">
                Energy savings start immediately.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-purple-600" />
              </div>
              <h3 className="text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                Quick Approval
              </h3>
              <p className="text-xs md:text-base text-gray-600">
                Fast approval with flexible terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - MOBILE OPTIMIZED */}
      <section className="py-10 md:py-12 bg-gradient-to-r from-green-700 to-emerald-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-3 md:mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-base md:text-xl text-green-100 mb-6 md:mb-8">
            Contact us to learn about financing and get a free estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-700 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg hover:bg-gray-50 transition w-full sm:w-auto text-center"
            >
              Get Free Estimate
            </Link>
            <a
              href="tel:+12017875657"
              className="bg-white/10 backdrop-blur text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg border-2 border-white hover:bg-white/20 transition w-full sm:w-auto text-center"
            >
              Call (201) 787-5657
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}