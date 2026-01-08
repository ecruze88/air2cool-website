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
      {/* Hero Section */}
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-4">
              <DollarSign className="w-4 h-4" />
              FINANCING OPTIONS
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Affordable Financing for Your HVAC Upgrade
            </h1>

            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Don't let upfront costs stop you from getting the comfort system you need. We offer flexible financing options to make your HVAC project affordable with convenient monthly payments.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* NJNG SaveGreen Program */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* NJNG SaveGreen Info */}
            <div>
              <div className="bg-white rounded-2xl border-4 border-green-500 p-8 shadow-xl mb-8">
                <div className="text-center mb-6">
                  <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
                    New Jersey Natural Gas
                  </h2>
                  <div className="text-5xl font-black text-green-600">SaveGreen Program</div>
                  <p className="text-lg text-gray-700 mt-3">Rebates + 0% APR Financing Available!</p>
                </div>

                <div className="space-y-6">
                  {/* 0% APR Financing Box */}
                  <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl p-6 text-white border-2 border-green-700 shadow-lg">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-black mb-2">0% APR Financing</div>
                      <div className="text-xl font-bold">On-Bill Repayment Program (OBRP)</div>
                    </div>
                    <div className="space-y-3 text-green-50">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 shrink-0" />
                        <span><strong>Up to $25,000</strong> interest-free financing</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 shrink-0" />
                        <span><strong>0% APR</strong> - No interest charges ever!</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 shrink-0" />
                        <span><strong>Convenient payments</strong> added to your monthly gas bill</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 shrink-0" />
                        <span><strong>Loan amount is net of rebates</strong> - rebates reduce what you borrow!</span>
                      </div>
                    </div>
                  </div>

                  {/* Rebates Info */}
                  <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      PLUS Get Cash Back with Rebates
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <DollarSign className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                        <span className="text-gray-700">
                          <strong>Up to $3,650 in rebates</strong> for HVAC and water heating equipment
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                        <span className="text-gray-700">
                          <strong>Rebates reduce your loan</strong> - less to pay back means lower monthly payments
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                        <span className="text-gray-700">
                          <strong>Available for NJNG customers</strong> through June 30, 2027
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                        <span className="text-gray-700">
                          <strong>Professional installation required</strong> - We're your certified contractor
                        </span>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="https://powerforms.docusign.net/22cbeaf4-ad88-4419-8f57-e014c1687adb?env=na2&acct=012126eb-efad-4a70-b29a-c2482d2a8b9f&accountId=012126eb-efad-4a70-b29a-c2482d2a8b9f"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg transition text-center"
                  >
                    Learn More About SaveGreen Program →
                  </a>

                  <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      How Air2Cool Helps You Save
                    </h3>
                    <ol className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-blue-600 shrink-0">1.</span>
                        <span>We assess your current HVAC system and recommend qualifying energy-efficient upgrades</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-blue-600 shrink-0">2.</span>
                        <span>We help you apply for BOTH rebates AND 0% financing through NJNG SaveGreen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-blue-600 shrink-0">3.</span>
                        <span>We install your new high-efficiency system professionally</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-blue-600 shrink-0">4.</span>
                        <span>We handle all rebate paperwork and financing applications for you</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            {/* NJNG SaveGreen Benefits */}
            <div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-300 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-gray-900">
                      Save on Energy Bills
                    </div>
                    <div className="text-sm text-gray-700">
                      High-efficiency HVAC systems can save you 20-40% on energy costs
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Qualifying Equipment Rebates
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between bg-white rounded-lg p-4 border border-green-200">
                    <span className="font-semibold text-gray-900">High-Efficiency Furnaces</span>
                    <span className="text-green-600 font-bold">Up to $2,000</span>
                  </div>
                  <div className="flex items-center justify-between bg-white rounded-lg p-4 border border-green-200">
                    <span className="font-semibold text-gray-900">Central Air Conditioning</span>
                    <span className="text-green-600 font-bold">Up to $1,500</span>
                  </div>
                  <div className="flex items-center justify-between bg-white rounded-lg p-4 border border-green-200">
                    <span className="font-semibold text-gray-900">Heat Pumps</span>
                    <span className="text-green-600 font-bold">Up to $3,000</span>
                  </div>
                  <div className="flex items-center justify-between bg-white rounded-lg p-4 border border-green-200">
                    <span className="font-semibold text-gray-900">Smart Thermostats</span>
                    <span className="text-green-600 font-bold">Up to $150</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border-2 border-green-200">
                  <h4 className="font-bold text-gray-900 mb-3">Why Choose Energy-Efficient Equipment?</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold shrink-0">✓</span>
                      <span>Lower monthly utility bills year-round</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold shrink-0">✓</span>
                      <span>Better comfort with more consistent temperatures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold shrink-0">✓</span>
                      <span>Reduced environmental impact</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold shrink-0">✓</span>
                      <span>Increased home value</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold shrink-0">✓</span>
                      <span>Quieter operation with modern technology</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Stack Your Savings
                </h3>
                <p className="text-gray-700 mb-4">
                  Combine NJNG SaveGreen rebates with other available incentives:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-gray-900">Federal Tax Credits: </span>
                      <span className="text-gray-700">Up to 30% of equipment cost</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-gray-900">JCP&L Programs: </span>
                      <span className="text-gray-700">Additional rebates for qualifying equipment</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-gray-900">Manufacturer Rebates: </span>
                      <span className="text-gray-700">Seasonal promotions available</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white rounded-lg border border-blue-200">
                  <p className="text-sm text-gray-700">
                    <strong>Example:</strong> A $8,000 HVAC system could cost you as little as $4,500 after all rebates and credits!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JCP&L Energy Efficiency */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                JCP&L Residential Energy Efficiency Program Financing
              </h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-gray-900">0.00% APR fixed monthly payment financing</div>
                    <div className="text-gray-700">for qualifying home energy efficiency upgrades</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
                  <div className="text-gray-700">Loans from $2,500 to $35,000 available</div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
                  <div className="text-gray-700">Terms from 36 to 120 months based on loan amount</div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
                  <div className="text-gray-700">Approved contractor required (that's us!)</div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">How to Apply</h3>
                <p className="text-gray-700 mb-4">
                  Ask your contractor for their application link or visit:{" "}
                  <a 
                    href="https://www.neifund.org/jcpl-residential/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-semibold"
                  >
                    www.neifund.org/jcpl-residential/
                  </a>
                </p>
                <p className="text-sm text-gray-600">
                  Home Performance with ENERGYSTAR® (60 and 84 month terms only) for loan amounts $10,000 to less 120-month term available for loan amounts $10,000 to $35,000.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl p-10 text-white">
              <h3 className="text-2xl font-bold mb-6">Go Greener. Affordably.</h3>
              
              <div className="space-y-4 mb-8">
                <p className="text-blue-50">
                  Make energy-efficient upgrades to your home more affordable with special financing programs designed for New Jersey homeowners.
                </p>
                <p className="text-blue-50">
                  As an approved NEIF contractor, Air2Cool can help you access these exclusive financing options for qualifying HVAC upgrades.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                <div className="text-sm text-blue-100 mb-2">Example Monthly Payment:</div>
                <div className="text-4xl font-extrabold mb-2">$139/mo</div>
                <div className="text-blue-100">for a $5,000 system over 36 months at 0% APR</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center">
            Why Finance Your HVAC Upgrade?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Affordable Monthly Payments
              </h3>
              <p className="text-gray-600">
                Spread the cost over time with low monthly payments that fit your budget. Get the system you need today.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Energy Savings Start Now
              </h3>
              <p className="text-gray-600">
                New efficient systems can save you money on utilities immediately, often offsetting your monthly payment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Quick & Easy Approval
              </h3>
              <p className="text-gray-600">
                Fast approval process with flexible terms. We'll help you find the right financing option for your situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-emerald-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Contact us today to learn more about financing options and get a free estimate for your HVAC project.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-700 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-50 transition"
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
    </main>
  );
}