import type { Metadata } from "next";
import { Wrench, CheckCircle, Calendar, DollarSign } from "lucide-react";
import Link from "next/link";
import VideoShowcase from "@/components/VideoShowcase";

export const metadata: Metadata = {
  title: "HVAC Preventative Maintenance in Morris County NJ | Air2Cool | (201) 787-5657",
  description:
    "Affordable HVAC preventative maintenance in Morris County & North NJ. Annual tune-ups, coil cleaning, refrigerant checks, 10% parts discount. Extend equipment life, prevent costly breakdowns. 26+ years experience. Call (201) 787-5657.",
  keywords: [
    "HVAC maintenance Morris County NJ",
    "AC tune up North NJ",
    "furnace tune up Morris County",
    "preventative HVAC maintenance NJ",
    "HVAC maintenance plan Morris County",
    "air conditioner maintenance North Jersey",
    "HVAC annual service NJ",
    "AC maintenance contract Morris County",
  ],
  alternates: {
    canonical: "/services/preventative-maintenance",
  },
  openGraph: {
    title: "HVAC Preventative Maintenance in Morris County NJ | Air2Cool",
    description:
      "Annual HVAC tune-ups, coil cleaning, refrigerant checks, 10% parts discount. Prevent breakdowns & extend equipment life. Morris County & North NJ. Call (201) 787-5657.",
    url: "/services/preventative-maintenance",
  },
};

export default function PreventativeMaintenancePage() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "HVAC Preventative Maintenance",
            "description": "Annual HVAC maintenance program in Morris County & North NJ. Includes refrigerant check, coil cleaning, electrical inspection, condensate drain cleaning, 10% discount on parts, and more. Extends equipment life and prevents costly breakdowns.",
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
            "url": "https://www.air2cool.com/services/preventative-maintenance",
            "serviceType": "HVAC Maintenance",
            "offers": {
              "@type": "Offer",
              "description": "One visit per year. Includes refrigerant check, coil cleaning, 10% parts discount.",
              "availability": "https://schema.org/InStock"
            }
          })
        }}
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-900 via-amber-800 to-orange-800 text-white overflow-hidden">
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
            <div className="inline-flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-4">
              <Wrench className="w-4 h-4" />
              PREVENTATIVE MAINTENANCE
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 md:mb-6">
              Keep Your Comfort System Running Smoothly
            </h1>

            <p className="text-base md:text-xl text-gray-200 leading-relaxed max-w-3xl mb-6 md:mb-8">
              Preventative maintenance is key to the longevity and reliability of your comfort system. If you're looking for a company that can take care of this important task for you, choose Air2Cool Heating/AC & Refrigeration. With over 20 years of experience, we know how to prevent future problems and keep your equipment running smoothly for years to come!
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <Link
                href="/maintenance-contract"
                className="bg-white text-orange-700 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-all shadow-lg hover:bg-gray-50 text-center"
              >
                Sign Up Today
              </Link>
              <a
                href="tel:+12017875657"
                className="bg-white/10 hover:bg-white/20 backdrop-blur text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all border border-white/20 text-center"
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

      {/* Program Benefits */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-4 md:mb-6">
              Benefit From Our Preventative Maintenance Program
            </h2>
            
            <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
              When you sign up for our preventative HVAC maintenance program, you'll enjoy the following services and perks:
            </p>

            <div className="space-y-3 md:space-y-4">
              {[
                "One visit per year",
                "Filter replacement, if provided, will be done for free, or we can install a standard one-inch thick filter for an additional fee",
                "Refrigerant levels check",
                "All electrical components checked and loose connections tightened",
                "Condensate drain lines cleaned to avoid water damage to ceilings",
                "Discharge temperatures checked",
                "Visual inspection for mold",
                "Odor neutralizer applied to drain pan",
                "Evaporator coil disinfection",
                "Outdoor unit coil washing",
                "10% discounts on all parts",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 md:gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-orange-600 shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="py-10 md:py-12 bg-orange-50 border-y border-orange-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border-2 border-orange-300">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 flex items-center gap-2">
              <Calendar className="w-5 h-5 md:w-6 md:h-6 text-orange-600" />
              Important Information
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Please note that our agreement is only for preventative maintenance. It does not cover any repairs, service calls, ductwork imperfections, thermostats, or refrigerant leaks. For more information about our pricing, please contact us today.
            </p>
          </div>
        </div>
      </section>

      <VideoShowcase
        title="What Neglect Actually Looks Like"
        src="/neglected_hvac_system_damage_due_to_lack_of_maintenance.mp4"
        caption="This is what years without maintenance does to an HVAC system — annual tune-ups prevent failures like this and keep your family safe"
        sectionClassName="py-10 md:py-16 bg-white"
      />

      {/* Why Maintenance Matters */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-8 md:mb-12 text-center">
            Why Regular Maintenance Matters
          </h2>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 md:p-8 border-2 border-orange-200">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                <DollarSign className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                Lower Energy Bills
              </h3>
              <p className="text-sm md:text-base text-gray-700">
                A well-maintained system runs more efficiently, reducing your monthly utility costs and saving you money.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 md:p-8 border-2 border-orange-200">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                <Wrench className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                Prevent Costly Repairs
              </h3>
              <p className="text-sm md:text-base text-gray-700">
                Catch small issues before they become expensive problems. Regular maintenance prevents major breakdowns.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 md:p-8 border-2 border-orange-200">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                <Calendar className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                Extend Equipment Life
              </h3>
              <p className="text-sm md:text-base text-gray-700">
                Proper maintenance can add years to your HVAC system's lifespan, delaying the need for expensive replacement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonial */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-orange-200">
            <p className="text-sm md:text-lg text-gray-700 italic mb-3 md:mb-4">
              "Hector and his crew are absolutely professional! We are ready for winter! Honest and fair business... totally recommend!"
            </p>
            <p className="text-sm md:text-base font-semibold text-gray-900">
              - Sandra Clark, Google Review
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-orange-700 to-amber-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-3 md:mb-4">
            Affordably Priced Preventative Maintenance
          </h2>
          <p className="text-base md:text-xl text-orange-100 mb-6 md:mb-8">
            Protect your investment and keep your system running smoothly. Sign up for our maintenance program today!
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
            <Link
              href="/maintenance-contract"
              className="bg-white text-orange-700 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg hover:bg-gray-50 transition"
            >
              Contact Us Today
            </Link>
            <a
              href="tel:+12017875657"
              className="bg-white/10 backdrop-blur text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg border-2 border-white hover:bg-white/20 transition"
            >
              Call (201) 787-5657
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}