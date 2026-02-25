import type { Metadata } from "next";
import { Filter, CheckCircle, Wind, Shield } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Air Filtration & Indoor Air Quality in Morris County NJ | Air2Cool | (201) 787-5657",
  description:
    "Professional air filtration and indoor air quality services in Morris County & North NJ. UV filtration, HEPA filters, iWave-R purifiers, duct cleaning, air exchangers. Protect your family's health. Call (201) 787-5657.",
  keywords: [
    "air filtration Morris County NJ",
    "indoor air quality North NJ",
    "UV air filtration Morris County",
    "HEPA filter installation NJ",
    "air purifier installation Morris County",
    "duct cleaning North NJ",
    "iWave air purifier NJ",
    "air quality improvement Morris County",
  ],
  alternates: {
    canonical: "/services/air-filtration",
  },
  openGraph: {
    title: "Air Filtration & Indoor Air Quality in Morris County NJ | Air2Cool",
    description:
      "UV filtration, HEPA filters, iWave-R purifiers, duct cleaning. Breathe cleaner air. Morris County & North NJ. Call (201) 787-5657.",
    url: "/services/air-filtration",
  },
};

export default function AirFiltrationPage() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Air Filtration & Indoor Air Quality",
            "description": "Professional indoor air quality services in Morris County & North NJ. UV filtration systems, HEPA filters, iWave-R air purifiers, duct cleaning, air exchangers, and fresh air ventilation.",
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
            "url": "https://www.air2cool.com/services/air-filtration",
            "serviceType": "Indoor Air Quality"
          })
        }}
      />
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-green-900 via-teal-800 to-green-800 text-white overflow-hidden">
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
            <div className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-4">
              <Filter className="w-4 h-4" />
              AIR FILTRATION
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
              Breathe Cleaner Air Inside Your Home
            </h1>

            <p className="text-base md:text-xl text-gray-200 leading-relaxed max-w-3xl mb-6 md:mb-8">
              Are you concerned about the air in your home affecting your health and that of your family? Stay protected from the risks with a new air filtration system from Air2Cool Heating/AC & Refrigeration. Our Licensed Master HVAC Technicians will install state-of-the-art equipment that's designed to help you breathe cleaner air.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
              <Link
                href="/contact"
                className="bg-white text-green-700 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-all shadow-lg hover:bg-gray-50"
              >
                Get Free Estimate
              </Link>
              <a
                href="tel:+12017875657"
                className="bg-white/10 hover:bg-white/20 backdrop-blur text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all border border-white/20"
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

      {/* Services Offered */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
                Our Air Quality Solutions
              </h2>
              
              <div className="space-y-2 md:space-y-4 mb-5 md:mb-8">
                {[
                  "UV air filtration",
                  "HEPA air filtration",
                  "Air duct analysis",
                  "iWave-R 4900-20",
                  "Duct cleaning",
                  "Air exchangers",
                  "Fresh air vents",
                  "UV air sanitizing product",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 rounded-2xl p-4 md:p-6 border border-gray-200">
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  We offer both residential and commercial air quality equipment.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-linear-to-br from-green-100 to-teal-100 rounded-3xl p-8">
                {/* Placeholder - replace with actual image */}
                <div className="rounded-2xl bg-linear-to-br from-green-600 to-teal-600 aspect-4/3 flex items-center justify-center shadow-lg">
                  <Wind className="w-32 h-32 text-white opacity-20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Air Quality Control Package */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6 text-center">
              Take Advantage of Our Air Quality Control Package
            </h2>
            
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-5 md:mb-8 text-center">
              To improve your air quality and your comfort level, we have established an air quality control package. This package will reduce airborne germs and improve the humidity levels. These improved humidity levels come with an abundance of benefits, such as more moisturized skin, cleaner air, and a reduced risk of illness.
            </p>

            <div className="bg-white rounded-2xl p-5 md:p-8 shadow-lg border-2 border-green-200">
              <Shield className="w-8 h-8 md:w-12 md:h-12 text-green-600 mb-3 md:mb-4" />
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Advanced Filtration Technology
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 md:mb-6">
                The air will run through a 4x media filter, which traps over 90% of the dirt in the air and prevents it from entering your interior spaces.
              </p>

              <div className="bg-linear-to-r from-green-50 to-teal-50 rounded-xl p-4 md:p-6 border border-green-200">
                <h4 className="font-bold text-gray-900 mb-2 md:mb-3 text-sm md:text-base">Just Your Comfort Levels</h4>
                <ul className="space-y-2">
                  {[
                    'New add-on "iWAVE R" air filter - proven to kill COVID 19',
                    "UV germicidal light",
                    "Media filter",
                    "Humidifier",
                    "Honeywell Wi-Fi model T10 thermostats with one room sensor",
                    "Hot water tank replacement natural draft (40 gallons)",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-600 mt-2 shrink-0"></span>
                      <span className="text-sm md:text-base text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-4 md:mt-6 text-gray-600 text-xs md:text-sm">
                To learn more about our comfort package and for a free estimate, please contact us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonial */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block bg-linear-to-br from-green-50 to-teal-50 rounded-2xl p-6 md:p-8 shadow-lg border-2 border-green-200">
            <p className="text-sm md:text-base text-gray-700 italic mb-3 md:mb-4">
              "Hector and his team are amazing. They were quick and responsive. Hector's loyalty and professionalism make him a keeper for future jobs. I would highly recommend them."
            </p>
            <p className="font-semibold text-gray-900 text-sm md:text-base">
              - George Houvardas, Google Review
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-12 bg-linear-to-r from-green-700 to-teal-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3 md:mb-4">
            Invest in Modern Air Quality Products
          </h2>
          <p className="text-base md:text-xl text-green-100 mb-5 md:mb-8">
            Protect your family's health with professional air filtration. Call today for a free estimate.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 justify-center">
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

      {/* Financing Available */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-lg md:text-2xl font-bold mb-2">Financing Available</p>
          <p className="text-gray-300 text-sm md:text-base">
            Ask about our flexible financing options for air quality improvements.
          </p>
        </div>
      </section>
    </main>
  );
}