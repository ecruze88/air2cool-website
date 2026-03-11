import type { Metadata } from "next";
import { Snowflake, CheckCircle, Clock, Zap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AC Repair NJ — Same-Day Air Conditioning Repair | Air2Cool | (201) 787-5657",
  description:
    "Expert AC repair NJ. Same-day service available, 24/7 emergency. Serving Morris County, Bergen County & all of North NJ. 26+ years experience. Licensed Master HVAC Technicians. Call (201) 787-5657.",
  keywords: [
    "AC repair NJ",
    "AC repair Morris County NJ",
    "air conditioner repair North NJ",
    "same day AC repair NJ",
    "24/7 emergency AC service NJ",
    "compressor repair Morris County NJ",
    "refrigerant recharge North NJ",
    "heat pump repair NJ",
    "air conditioning repair Morristown NJ",
    "AC repair near me NJ",
  ],
  alternates: {
    canonical: "/services/ac-repair",
  },
  openGraph: {
    title: "AC Repair NJ — Same-Day Air Conditioning Repair | Air2Cool",
    description:
      "Same-day AC repair by licensed technicians. 24/7 emergency service. 26+ years experience in Morris County & North NJ. Call (201) 787-5657.",
    url: "/services/ac-repair",
  },
};

export default function ACRepairPage() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AC Repair",
            "alternateName": "Air Conditioner Repair",
            "description": "Expert air conditioning repair services including compressor replacement, refrigerant recharge, heat pump repair, and same-day emergency service in Morris County & North New Jersey.",
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
            "availableChannel": {
              "@type": "ServiceChannel",
              "servicePhone": {
                "@type": "ContactPoint",
                "telephone": "+1-201-787-5657",
                "contactType": "customer service",
                "availableLanguage": "English",
                "hoursAvailable": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                  "opens": "00:00",
                  "closes": "23:59"
                }
              }
            },
            "url": "https://www.air2cool.com/services/ac-repair",
            "serviceType": "HVAC Repair",
            "offers": {
              "@type": "Offer",
              "description": "Free estimates available. Same-day service.",
              "availability": "https://schema.org/InStock"
            }
          })
        }}
      />
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
              AC Repair NJ — Fast, Affordable Air Conditioning Repair
            </h1>

            <p className="text-base md:text-xl text-gray-200 leading-relaxed max-w-3xl mb-6 md:mb-8">
              New Jersey summers are no joke — when your AC goes down, you need it fixed today, not next week. Air2Cool's Licensed Master HVAC Technicians are available 24/7 for same-day AC repair across Morris County and all of North NJ.
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
              Our reliable team has over 26 years of experience working on both residential and commercial air conditioning systems. So whether it's for your home or business, you can count on us to get your AC system fixed promptly and affordably!
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
              North NJ's Trusted AC Repair Company
            </h2>
            <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                When your air conditioner breaks down in the middle of a New Jersey heat wave, every hour matters. Air2Cool Heating &amp; Cooling has been providing fast, reliable AC repair in NJ for over 26 years. We serve homeowners and businesses across{" "}
                <Link href="/service-areas/morris-county" className="text-blue-600 hover:underline">Morris County</Link>,{" "}
                <Link href="/service-areas/bergen-county" className="text-blue-600 hover:underline">Bergen County</Link>, and surrounding North Jersey communities including{" "}
                <Link href="/service-areas/morristown" className="text-blue-600 hover:underline">Morristown</Link>,{" "}
                <Link href="/service-areas/parsippany-troy-hills" className="text-blue-600 hover:underline">Parsippany</Link>,{" "}
                <Link href="/service-areas/denville" className="text-blue-600 hover:underline">Denville</Link>, and{" "}
                <Link href="/service-areas/rockaway" className="text-blue-600 hover:underline">Rockaway</Link>.
              </p>
              <p>
                Our Licensed Master HVAC Technicians diagnose and fix all makes and models of central air conditioning systems, ductless mini-splits, and heat pumps. Whether your AC is blowing warm air, making strange noises, leaking refrigerant, or not turning on at all, we have the tools and experience to get it running again — often the same day you call.
              </p>
              <p>
                As a locally owned and family-operated company, we charge honest prices and never upsell services you don't need. We'll give you a clear diagnosis and straightforward estimate before any work begins. Our 24/7 emergency availability means that even if your system fails at midnight on the hottest day of the year, Air2Cool is ready to respond. That's the difference between a national chain and a true North NJ neighbor.
              </p>
              <p>
                We also handle preventative maintenance and can advise you on whether a repair or a full{" "}
                <Link href="/services/hvac-installation" className="text-blue-600 hover:underline">HVAC system replacement</Link> is the smarter investment — with no pressure either way. If you're also dealing with heating problems, visit our{" "}
                <Link href="/services/heating-repair" className="text-blue-600 hover:underline">heating repair page</Link> to learn more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Solutions */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-4 md:mb-6">
                Complete Air Conditioning System Solutions
              </h2>

              <div className="grid md:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                {[
                  "Compressor replacement",
                  "Condensate drain lines",
                  "Air conditioner repair",
                  "Air conditioner service and cleaning",
                  "Ductless mini-split systems",
                  "Residential zoning systems",
                  "Thermostat service",
                  "Heat pump repair",
                  "Whole-house humidifiers",
                  "Wi-Fi/smartphone thermostats",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 md:gap-3">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl p-5 md:p-6 border border-gray-200">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                  Expect Quality Work and Excellent Customer Service
                </h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  When you hire us, you'll be working with a locally and family-owned company with integrity and a commitment to your satisfaction. When quality and excellent customer service matter, we're the professionals who will come through for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonial */}
      <section className="py-12 md:py-16 bg-white">
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

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center">
            Frequently Asked Questions — AC Repair NJ
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How quickly can Air2Cool respond to an AC repair call in NJ?",
                a: "We offer same-day AC repair service across Morris County and North NJ. In most cases, we can have a technician at your home or business within a few hours of your call. For 24/7 emergency situations — like a complete AC failure during a heat wave — we prioritize getting to you as fast as possible.",
              },
              {
                q: "What are the most common signs my air conditioner needs repair?",
                a: "Common warning signs include warm air blowing from vents, the system running constantly but not cooling, unusual noises (grinding, banging, or squealing), ice forming on the unit, water leaking near the indoor unit, and a sudden spike in your electric bill. If you notice any of these, call us before the problem gets worse.",
              },
              {
                q: "How much does AC repair cost in New Jersey?",
                a: "AC repair costs vary depending on the issue. Simple repairs like a capacitor replacement or refrigerant recharge are generally affordable, while a compressor replacement is a larger investment. We provide a free estimate before any work begins so you know exactly what you're paying for. No surprises.",
              },
              {
                q: "Do you repair all brands of air conditioners?",
                a: "Yes. Our technicians are trained and experienced with all major brands including Carrier, Trane, Lennox, Rheem, York, Goodman, Bryant, and more. We service both central air conditioning systems and ductless mini-split systems.",
              },
              {
                q: "Should I repair or replace my AC system?",
                a: "As a general rule, if your AC is under 10 years old and the repair cost is less than half the price of a new unit, repairing is usually the better choice. If it's older and breaking down repeatedly, a new energy-efficient system often makes more financial sense long-term. Our technicians will give you an honest recommendation — we never push unnecessary replacements. Learn more on our HVAC installation page.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-blue-700 to-cyan-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-3 md:mb-4">
            Ready to Schedule AC Repair in NJ?
          </h2>
          <p className="text-base md:text-xl text-blue-100 mb-6 md:mb-8">
            Call Air2Cool at{" "}
            <a href="tel:+12017875657" className="font-bold underline hover:no-underline">
              (201) 787-5657
            </a>{" "}
            or get a free estimate at{" "}
            <Link href="/contact" className="font-bold underline hover:no-underline">
              /contact
            </Link>
            . Same-day service available across Morris County and North NJ.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-700 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg hover:bg-gray-50 transition"
            >
              Get Free Estimate
            </Link>
            <a
              href="tel:+12017875657"
              className="bg-white/10 backdrop-blur text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg border-2 border-white hover:bg-white/20 transition"
            >
              Call (201) 787-5657
            </a>
          </div>
          <p className="mt-6 text-sm text-blue-200">
            Also serving:{" "}
            <Link href="/service-areas/morris-county" className="underline hover:no-underline">Morris County</Link> ·{" "}
            <Link href="/service-areas/bergen-county" className="underline hover:no-underline">Bergen County</Link> ·{" "}
            <Link href="/service-areas/parsippany-troy-hills" className="underline hover:no-underline">Parsippany</Link> ·{" "}
            <Link href="/service-areas/morristown" className="underline hover:no-underline">Morristown</Link> ·{" "}
            <Link href="/service-areas/denville" className="underline hover:no-underline">Denville</Link> ·{" "}
            <Link href="/service-areas/randolph" className="underline hover:no-underline">Randolph</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
