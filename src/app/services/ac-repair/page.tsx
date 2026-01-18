import type { Metadata } from "next";
import { Snowflake, CheckCircle, Clock, Zap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AC Repair Services | Air2Cool - North NJ",
  description:
    "Prompt and affordable air conditioning repair in North New Jersey. Same-day AC service available. Expert compressor repair, refrigerant recharge, and more. Call now!",
};

export default function ACRepairPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-800 text-white overflow-hidden">
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
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-4">
              <Snowflake className="w-4 h-4" />
              AC REPAIR
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 md:mb-6">
              Prompt and Affordable Air Conditioning Repairs
            </h1>

            <p className="text-base md:text-xl text-gray-200 leading-relaxed max-w-3xl mb-6 md:mb-8">
              New Jersey's summers can be unbearable, especially when your air conditioning system is not working as it should. If you're dealing with this unfortunate situation, give Air2Cool Heating/AC & Refrigeration a call. Our Licensed Master HVAC Technicians are available 24 hours a day to take care of all your AC repair needs.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-white text-blue-700 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-all shadow-lg hover:bg-gray-50 text-center"
              >
                Get Free Estimate
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

      {/* Experience Notice */}
      <section className="py-4 md:py-6 bg-blue-50 border-y border-blue-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 text-blue-900">
            <Zap className="w-5 h-5 md:w-6 md:h-6 shrink-0" />
            <p className="text-sm md:text-lg font-semibold">
              Our reliable team has over 20 years of experience working on both residential and commercial air conditioning systems. So whether it's for your home or business, you can count on us to get your AC system fixed promptly and affordably!
            </p>
          </div>
        </div>
      </section>

      {/* Complete Solutions */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-4 md:mb-6">
                Complete Air Conditioning System Solutions
              </h2>
              
              <div className="grid md:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                {[
                  "Compressor repair",
                  "Condensate drain lines",
                  "Air conditioner repair",
                  "Air conditioner service and cleaning",
                  "Ductless mini-split systems",
                  "Residential zoning systems",
                  "Thermostat service",
                  "Weather sealing and home efficiency",
                  "Whole-house humidifiers",
                  "Wi-Fi/smartphone thermostats",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 md:gap-3">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 rounded-2xl p-5 md:p-6 border border-gray-200">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                  Expect Quality Work and Excellent Customer Service
                </h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  When you hire us, you'll be working with a locally and family-owned company with integrity and a commitment to your satisfaction. When quality and excellent customer service matter, we're the professionals who will come through for you.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-6 md:p-8">
                {/* Placeholder - replace with actual image */}
                <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 aspect-4/3 flex items-center justify-center shadow-lg">
                  <Snowflake className="w-24 h-24 md:w-32 md:h-32 text-white opacity-20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonial */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Clock className="w-12 h-12 md:w-16 md:h-16 text-blue-600 mx-auto mb-4 md:mb-6" />
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-3 md:mb-4">
            Fast, Reliable Service When You Need It
          </h2>
          <div className="inline-block bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200">
            <p className="text-sm md:text-lg text-gray-600 italic">
              "Hector and his team were incredible! Our compressor went out during a heatwave and he was able to get us a new one, remove the old one and install it all in one day. Incredibly professional and responsive. Highly recommend this company!"
            </p>
            <p className="mt-3 md:mt-4 font-semibold text-sm md:text-base text-gray-900">
              - Lily Givoni, Google Review
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-blue-700 to-cyan-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-3 md:mb-4">
            Don't Suffer in the Heat
          </h2>
          <p className="text-base md:text-xl text-blue-100 mb-6 md:mb-8">
            Same-day AC repair service available. Call now to beat the heat!
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-700 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg hover:bg-gray-50 transition"
            >
              Schedule Repair
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