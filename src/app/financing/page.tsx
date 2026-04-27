import type { Metadata } from "next";
import { DollarSign, CheckCircle, Zap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "0% APR HVAC Financing NJ | SaveGreen & JCP&L | Air2Cool",
  description:
    "Finance your new HVAC system with 0% APR through NJ Natural Gas SaveGreen or JCP&L. Up to $25,000. Air2Cool is an approved contractor. (201) 787-5657.",
  alternates: {
    canonical: "/financing",
  },
  openGraph: {
    title: "0% APR HVAC Financing NJ | SaveGreen & JCP&L | Air2Cool",
    description:
      "Finance your new HVAC system with 0% APR through NJ Natural Gas SaveGreen or JCP&L. Up to $25,000. Air2Cool is an approved contractor. (201) 787-5657.",
    url: "/financing",
  },
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

      {/* Financing Options — Side by Side Cards */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center mb-3">
            Choose Your Financing Program
          </h2>
          <p className="text-center text-gray-500 text-sm md:text-base mb-8 md:mb-10">
            All programs offer 0% APR — select the one that matches your situation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">

            {/* Card 1 — NJ Natural Gas SaveGreen */}
            <div className="flex flex-col rounded-2xl border-2 border-green-400 shadow-lg overflow-hidden">
              {/* Card header */}
              <div className="bg-green-600 px-6 py-5 text-white">
                <span className="inline-block text-xs font-bold uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full mb-2">
                  For NJ Natural Gas (NJNG) Customers
                </span>
                <p className="text-green-100 text-xs mb-3">Not sure? Check your utility bill — your utility company is listed at the top.</p>
                <h3 className="text-2xl font-extrabold leading-tight">NJ Natural Gas SaveGreen</h3>
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 bg-white px-6 py-6 gap-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700"><strong>0% APR</strong> — no interest, ever</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700"><strong>Up to $25,000</strong> interest-free</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700"><strong>On-bill repayment</strong> — paid on your gas bill</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700"><strong>Rebates up to $3,650</strong> reduce what you borrow</span>
                  </li>
                </ul>

                <div className="mt-auto pt-4">
                  <a
                    href="https://powerforms.docusign.net/22cbeaf4-ad88-4419-8f57-e014c1687adb?env=na2&acct=012126eb-efad-4a70-b29a-c2482d2a8b9f&accountId=012126eb-efad-4a70-b29a-c2482d2a8b9f"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition text-center text-sm"
                  >
                    Apply for SaveGreen →
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 — JCP&L Energy Efficiency */}
            <div className="flex flex-col rounded-2xl border-2 border-blue-400 shadow-lg overflow-hidden">
              {/* Card header */}
              <div className="bg-blue-600 px-6 py-5 text-white">
                <span className="inline-block text-xs font-bold uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full mb-2">
                  For JCP&amp;L Customers
                </span>
                <p className="text-blue-100 text-xs mb-3">Not sure? Check your utility bill — your utility company is listed at the top.</p>
                <h3 className="text-2xl font-extrabold leading-tight">JCP&amp;L Energy Efficiency</h3>
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 bg-white px-6 py-6 gap-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700"><strong>0% APR</strong> — no interest, ever</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700"><strong>$2,500–$35,000</strong> available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700"><strong>36–120 month</strong> flexible terms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Example: <strong>$139/mo</strong> for $5,000 / 36 months</span>
                  </li>
                </ul>

                <div className="mt-auto pt-4">
                  <a
                    href="https://www.neifund.org/air2cool-a-c-heating-refrigeration/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition text-center text-sm"
                  >
                    Apply for JCP&amp;L Financing →
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3 — SaveGreen Direct Install (Commercial) */}
            <div className="flex flex-col rounded-2xl border-2 border-emerald-400 shadow-lg overflow-hidden">
              <div className="bg-emerald-700 px-6 py-5 text-white">
                <span className="inline-block text-xs font-bold uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full mb-3">
                  For Businesses
                </span>
                <h3 className="text-2xl font-extrabold leading-tight">SaveGreen Direct Install</h3>
                <p className="text-emerald-100 text-sm mt-1 font-semibold">Up to 80% of upgrade costs covered</p>
              </div>

              <div className="flex flex-col flex-1 bg-white px-6 py-6 gap-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700"><strong>Up to 80% incentive</strong> on qualifying projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700"><strong>0% APR</strong> On-Bill Repayment Program</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Covers HVAC, refrigeration, and LED lighting upgrades</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Available for small to mid-sized NJ businesses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Program valid through <strong>June 30, 2027</strong></span>
                  </li>
                </ul>

                <div className="mt-auto pt-4">
                  <a
                    href="https://www.savegreen.com/applications/business-applications/direct-install-application.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 rounded-xl transition text-center text-sm"
                  >
                    Learn More &amp; Apply →
                  </a>
                </div>
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