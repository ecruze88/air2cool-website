import type { Metadata } from "next";
import { Zap, CheckCircle, Home, Gift } from "lucide-react";
import Link from "next/link";
import { COMPANY, PROMOTIONS } from "@/config/company";

export const metadata: Metadata = {
  title: "HVAC Installation North NJ — New System Replacement | Air2Cool | (201) 787-5657",
  description:
    "HVAC installation in Morris County and North NJ. Qualifying new systems include complimentary house cleaning; 0% APR financing up to $25,000 is available for qualifying customers, subject to applicable terms. Call (201) 787-5657.",
  keywords: [
    "HVAC installation North NJ",
    "HVAC installation Morris County NJ",
    "HVAC replacement North NJ",
    "new HVAC system Morris County",
    "heating and cooling installation NJ",
    "whole home HVAC installation Morris County",
    "HVAC system replacement North Jersey",
    "residential HVAC installation NJ",
    "commercial HVAC installation Morris County",
    "new AC installation NJ",
  ],
  alternates: {
    canonical: "/services/hvac-installation",
  },
  openGraph: {
    title: "HVAC Installation North NJ — New System Replacement | Air2Cool",
    description:
      "Full HVAC system replacements in Morris County and North NJ. Complimentary house cleaning and 0% APR financing up to $25,000 are available for qualifying installations and customers, subject to applicable terms.",
    url: "/services/hvac-installation",
  },
};

export default function HVACInstallationPage() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "HVAC System Installation",
            "description": `Complete HVAC system installation in Morris County & North NJ. Full heating and cooling replacements for residential and commercial properties. ${PROMOTIONS.houseCleaning} ${PROMOTIONS.financing}`,
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
            "url": "https://www.air2cool.com/services/hvac-installation",
            "serviceType": "HVAC Installation",
            "offers": {
              "@type": "Offer",
              "description": `${PROMOTIONS.houseCleaning} ${PROMOTIONS.financing}`,
              "availability": "https://schema.org/InStock"
            }
          })
        }}
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-indigo-800 to-purple-800 text-white overflow-hidden">
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
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-4">
              <Zap className="w-4 h-4" />
              HVAC INSTALLATION
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 md:mb-6">
              HVAC Installation North NJ — Expert System Replacement &amp; New Installs
            </h1>

            <p className="text-base md:text-xl text-gray-200 leading-relaxed max-w-3xl mb-6 md:mb-8">
              Ready to replace your aging HVAC system with something more efficient and reliable? Air2Cool installs complete heating and cooling systems across North NJ. {PROMOTIONS.houseCleaning} {PROMOTIONS.financing}
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
              <Link
                href="/contact"
                className="bg-white text-purple-700 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-all shadow-lg hover:bg-gray-50 w-full sm:w-auto text-center"
              >
                Get Free Estimate
              </Link>
              <a
                href="tel:+12017875657"
                className="bg-white/10 hover:bg-white/20 backdrop-blur text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all border border-white/20 w-full sm:w-auto text-center"
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
      <section className="py-4 md:py-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center sm:text-left">
            <Gift className="w-8 h-8 md:w-10 md:h-10 shrink-0" />
            <div className="text-center">
              <p className="text-base md:text-2xl font-bold">Free House Cleaning With Qualifying New HVAC Systems</p>
              <p className="text-purple-100 text-xs md:text-base">{PROMOTIONS.houseCleaning}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
              North NJ's HVAC Installation Experts
            </h2>
            <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                If your heating or cooling system is over 15 years old, constantly breaking down, or simply unable to keep up with North Jersey's extreme summers and winters, it may be time for a new HVAC installation. Air2Cool Heating &amp; Cooling has been replacing and installing HVAC systems across{" "}
                <Link href="/service-areas/morris-county" className="text-purple-600 hover:underline">Morris County</Link> and North NJ since {COMPANY.foundedYear}, earning a reputation for clean, professional work and honest pricing.
              </p>
              <p>
                Our installation process covers system design, load calculations, installation, and final testing. Load calculations help select equipment suited to the home or business and reduce the risk of oversizing or undersizing. We serve homeowners in{" "}
                <Link href="/service-areas/morristown" className="text-purple-600 hover:underline">Morristown</Link>,{" "}
                <Link href="/service-areas/parsippany-troy-hills" className="text-purple-600 hover:underline">Parsippany</Link>,{" "}
                <Link href="/service-areas/randolph" className="text-purple-600 hover:underline">Randolph</Link>,{" "}
                <Link href="/service-areas/denville" className="text-purple-600 hover:underline">Denville</Link>, and communities throughout North Jersey.
              </p>
              <p>
                Today&apos;s high-efficiency HVAC systems can improve comfort and indoor air quality when properly selected for the home. Whether you&apos;re replacing a single unit, upgrading to a ductless mini-split system, or installing a complete new central system, we carry top brands and will recommend equipment for your budget and home. {PROMOTIONS.financing}
              </p>
              <p>
                {PROMOTIONS.houseCleaning} If you have an existing system that needs repair rather than replacement, visit our{" "}
                <Link href="/services/ac-repair" className="text-purple-600 hover:underline">AC repair</Link> or{" "}
                <Link href="/services/heating-repair" className="text-purple-600 hover:underline">heating repair</Link> pages to learn more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* All Your HVAC Needs */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 md:mb-6">
                All Your HVAC System Needs
              </h2>

              <div className="space-y-2 md:space-y-4 mb-5 md:mb-8">
                {[
                  "Full system design",
                  "Residential HVAC system installation",
                  "Commercial HVAC system installation",
                  "Ductless and mini-split systems",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 md:w-6 md:h-6 text-purple-600 shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-5 md:p-8 border-2 border-purple-200">
                <Home className="w-8 h-8 md:w-12 md:h-12 text-purple-600 mb-3 md:mb-4" />
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">
                  Free House Cleaning With New Comfort System
                </h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {PROMOTIONS.houseCleaning} Contact us for a free estimate and offer details.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8">
                <div className="rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 aspect-4/3 flex items-center justify-center shadow-lg">
                  <Zap className="w-32 h-32 text-white opacity-20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6 md:mb-12 text-center">
            Why Choose Air2Cool for Your Installation?
          </h2>

          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
            <div className="bg-white rounded-2xl p-5 md:p-8 shadow-sm border border-gray-200">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
              </div>
              <h3 className="text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                Expert System Sizing
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Properly sized systems ensure optimal comfort and efficiency. We take the time to calculate the right size for your home.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 md:p-8 shadow-sm border border-gray-200">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                <Zap className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
              </div>
              <h3 className="text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                Energy Efficient Equipment
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Modern HVAC systems can dramatically reduce your energy bills while keeping you more comfortable year-round.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 md:p-8 shadow-sm border border-gray-200">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                <Home className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
              </div>
              <h3 className="text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                Clean Installation
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                We treat your home with respect. Clean, professional installations with no mess left behind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonial */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 md:p-8 shadow-lg border-2 border-purple-200">
            <p className="text-sm md:text-base text-gray-700 italic mb-3 md:mb-4">
              "These guys were amazing. Hector and Jose are responsive, reliable, fast, and their prices were extremely competitive compared to the bigger companies. I can't say enough positives about them."
            </p>
            <p className="text-sm md:text-base font-semibold text-gray-900">
              - Dr. Adam Price, Google Review
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center">
            Frequently Asked Questions — HVAC Installation North NJ
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How long does a full HVAC system installation take?",
                a: "Most residential HVAC replacements — swapping out an existing system — can be completed in one day, typically 4–8 hours. New installations in a home without existing ductwork may take 2–3 days. We'll give you a clear timeline during your free estimate so you can plan accordingly.",
              },
              {
                q: "What brands of HVAC equipment does Air2Cool install?",
                a: "We install equipment from top manufacturers including Carrier, Trane, Lennox, Goodman, and Mitsubishi. During your consultation, we'll recommend the brand and model that best fits your home's needs and your budget. We never push one brand over another — our goal is the right fit for you.",
              },
              {
                q: "Is financing available for HVAC installation in NJ?",
                a: `Yes. ${PROMOTIONS.financing} Ask about the applicable program terms when you request your free estimate.`,
              },
              {
                q: "Do I need to replace both my heating and cooling systems at the same time?",
                a: "Not always, but in many cases it makes sense to replace both units together. If one system is near the end of its life, the other likely is too. Replacing both at once saves on labor costs and ensures your new heating and cooling components are matched for maximum efficiency.",
              },
              {
                q: "What happens after Air2Cool installs my new HVAC system?",
                a: `After installation, our team tests the system and walks you through the operation of the new equipment, including thermostat programming if applicable. ${PROMOTIONS.houseCleaning} We are also available for follow-up questions and offer preventative maintenance plans.`,
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-12 bg-gradient-to-r from-purple-700 to-pink-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3 md:mb-4">
            Ready to Schedule Your HVAC Installation in North NJ?
          </h2>
          <p className="text-base md:text-xl text-purple-100 mb-5 md:mb-8">
            Call Air2Cool at{" "}
            <a href="tel:+12017875657" className="font-bold underline hover:no-underline">
              (201) 787-5657
            </a>{" "}
            or get a free estimate at{" "}
            <Link href="/contact" className="font-bold underline hover:no-underline">
              contact us online
            </Link>
            . Ask about current offers on qualifying installations.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-700 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg hover:bg-gray-50 transition w-full sm:w-auto text-center"
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
          <p className="mt-6 text-sm text-purple-200">
            Also serving:{" "}
            <Link href="/service-areas/morris-county" className="underline hover:no-underline">Morris County</Link> ·{" "}
            <Link href="/service-areas/morristown" className="underline hover:no-underline">Morristown</Link> ·{" "}
            <Link href="/service-areas/parsippany-troy-hills" className="underline hover:no-underline">Parsippany</Link> ·{" "}
            <Link href="/service-areas/randolph" className="underline hover:no-underline">Randolph</Link> ·{" "}
            <Link href="/service-areas/denville" className="underline hover:no-underline">Denville</Link>
          </p>
        </div>
      </section>

      {/* Financing Available */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-lg md:text-2xl font-bold mb-2">0% Financing Available</p>
          <p className="text-sm md:text-base text-gray-300">
            {PROMOTIONS.financing}
          </p>
        </div>
      </section>
    </main>
  );
}
