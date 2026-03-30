import type { Metadata } from "next";
import { Award, Star, CheckCircle, Users, Truck, Shield, Heart, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Air2Cool | Family-Owned HVAC Since 1998 | Wharton NJ",
  description:
    "Air2Cool Heating & Cooling has served North New Jersey since 1998. Family-owned, licensed master technicians, 250+ five-star reviews. Based in Wharton, NJ.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Air2Cool | Family-Owned HVAC Since 1998 | Wharton NJ",
    description:
      "Air2Cool Heating & Cooling has served North New Jersey since 1998. Family-owned, licensed master technicians, 250+ five-star reviews. Based in Wharton, NJ.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HVACBusiness",
            "name": "Air2Cool Heating & Cooling",
            "url": "https://www.air2cool.com",
            "telephone": "+12017875657",
            "foundingDate": "1998",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "20 Kitchell Ave",
              "addressLocality": "Wharton",
              "addressRegion": "NJ",
              "postalCode": "07885",
              "addressCountry": "US"
            },
            "employee": {
              "@type": "Person",
              "name": "Hector",
              "jobTitle": "Owner & Master HVAC Technician"
            },
            "areaServed": [
              "Morris County NJ","Essex County NJ","Passaic County NJ","Bergen County NJ",
              "Sussex County NJ","Warren County NJ","Hunterdon County NJ","Somerset County NJ","Union County NJ"
            ]
          })
        }}
      />
      {/* Hero - MOBILE OPTIMIZED */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-800 text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 md:mb-6">
              Your Trusted HVAC Partner Since 1998
            </h1>
            <p className="text-base md:text-xl text-gray-200 mb-6 md:mb-8">
              For over 26 years, Air2Cool has been North New Jersey's go-to HVAC company. 
              Family-owned, locally operated, and committed to honest service.
            </p>
            <div className="flex flex-wrap gap-2 md:gap-4">
              <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-base">
                <Award className="w-4 h-4 md:w-5 md:h-5" />
                <span className="font-semibold">Licensed</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-base">
                <Star className="w-4 h-4 md:w-5 md:h-5 fill-white" />
                <span className="font-semibold">250+ Reviews</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-base">
                <Users className="w-4 h-4 md:w-5 md:h-5" />
                <span className="font-semibold">Family Owned</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story - MOBILE OPTIMIZED */}
      <section className="py-10 md:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <img
                src="/side-truck.jpg"
                alt="Air2Cool HVAC service truck"
                className="rounded-2xl shadow-2xl w-full"
              />
              <p className="text-center text-xs md:text-sm text-gray-600 mt-3 md:mt-4 italic">
                Proudly serving North NJ since 1998
              </p>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-4 md:mb-6">
                Our Story
              </h2>
              <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
                <p>
                  Air2Cool Heating/AC & Refrigeration provides high quality, affordable HVAC repair, installation, and maintenance services for residential and commercial customers across North and Central New Jersey.
                </p>
                <p>
                  We specialize in heating and air conditioning service, furnace and AC replacement, preventative maintenance, and commercial refrigeration for restaurants, retail locations, and small businesses.
                </p>
                <p className="hidden md:block">
                  We proudly serve Morris, Essex, Passaic, Bergen, Sussex, Warren, Hunterdon, Somerset, and Union County — offering fast response times, upfront pricing, and reliable workmanship.
                </p>
                <p>
                  With 250+ 5-star Google reviews and thousands of satisfied customers, 
                  we're proud to be one of North Jersey's most trusted HVAC companies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values - MOBILE OPTIMIZED */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-center text-gray-900 mb-6 md:mb-10">
            What Sets Us Apart
          </h2>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Honest Pricing</h3>
              <p className="text-xs md:text-base text-gray-600">
                Transparent quotes with no hidden fees. No surprises.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Award className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Expert Technicians</h3>
              <p className="text-xs md:text-base text-gray-600">
                Licensed Master HVAC Technicians with decades of experience.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Truck className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Fast Response</h3>
              <p className="text-xs md:text-base text-gray-600">
                Same-day service. 24/7 emergency response.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Recognition */}
      <section className="py-10 md:py-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-center text-gray-900 mb-6 md:mb-10">
            Community Recognition
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto mb-6 md:mb-8">
            <div className="relative w-full overflow-hidden rounded-2xl shadow-lg bg-gray-100" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/headstart_community_program_group_photo_indoor_event.webp"
                alt="NJBPU President Christine Guhl-Sadovy visits Head Start Community Program Dover Morris County NJ — Air2Cool project"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative w-full overflow-hidden rounded-2xl shadow-lg bg-gray-100" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/team_group_photo_indoor_event.webp"
                alt="Air2Cool team at Head Start Community Program recognition event Dover NJ"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
              Air2Cool completed a major energy efficiency upgrade at the Head Start Community Program facility in Dover, Morris County through the New Jersey Natural Gas Direct Install Program. The project included a new furnace, water heater, insulation, smart thermostat, and lighting upgrades. NJBPU President Christine Guhl-Sadovy and Morris County Government recognized the completed project — delivering energy savings equivalent to powering 140 homes per year and permanently removing the equivalent of 48 gas cars from the road.
            </p>
            <a
              href="https://www.facebook.com/share/1ANnxnnjN4/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 font-semibold hover:underline text-sm md:text-base min-h-[44px]"
            >
              View the official NJBPU recognition post →
            </a>
          </div>
        </div>
      </section>

      {/* Our Team - MOBILE OPTIMIZED */}
      <section className="py-10 md:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-center text-gray-900 mb-3 md:mb-6">
            Our Team
          </h2>
          <p className="text-center text-xs md:text-base text-gray-600 mb-6 md:mb-10 max-w-2xl mx-auto">
            Every team member is background-checked, drug-tested, and committed to exceptional service.
          </p>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <img
                src="/back-of-shirt.jpg"
                alt="Air2Cool HVAC technician"
                className="rounded-2xl shadow-2xl w-full"
              />
              <p className="text-xs md:text-sm text-gray-600 mt-3 md:mt-4 text-center italic">
                Our technicians take pride in professional work
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start gap-3 md:gap-4">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-600 shrink-0 mt-0.5 md:mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base">Licensed & Certified</h3>
                  <p className="text-gray-600 text-xs md:text-sm">
                    All technicians hold NJ HVAC licenses and manufacturer certifications.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-600 shrink-0 mt-0.5 md:mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base">Ongoing Training</h3>
                  <p className="text-gray-600 text-xs md:text-sm">
                    Regular training on new equipment and safety protocols.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-600 shrink-0 mt-0.5 md:mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base">Background Checked</h3>
                  <p className="text-gray-600 text-xs md:text-sm">
                    Every team member passes thorough background and drug screening.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-600 shrink-0 mt-0.5 md:mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base">Customer-First Attitude</h3>
                  <p className="text-gray-600 text-xs md:text-sm">
                    Respectful, professional, and committed to your satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment - MOBILE OPTIMIZED */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-center text-gray-900 mb-3 md:mb-6">
            Our Commitment to Quality
          </h2>
          <p className="text-center text-xs md:text-base text-gray-600 mb-6 md:mb-10 max-w-2xl mx-auto">
            Every installation done right - clean, code-compliant, and tested.
          </p>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start gap-3 md:gap-4">
                <Shield className="w-8 h-8 md:w-10 md:h-10 text-blue-600 shrink-0" />
                <div>
                  <h3 className="text-base md:text-xl font-bold text-gray-900 mb-1 md:mb-2">Proper Sizing</h3>
                  <p className="text-xs md:text-base text-gray-600">
                    Equipment sized correctly for maximum efficiency and comfort.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <Shield className="w-8 h-8 md:w-10 md:h-10 text-blue-600 shrink-0" />
                <div>
                  <h3 className="text-base md:text-xl font-bold text-gray-900 mb-1 md:mb-2">Clean Installation</h3>
                  <p className="text-xs md:text-base text-gray-600">
                    Professional work. We protect your home and include FREE house cleaning.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <Shield className="w-8 h-8 md:w-10 md:h-10 text-blue-600 shrink-0" />
                <div>
                  <h3 className="text-base md:text-xl font-bold text-gray-900 mb-1 md:mb-2">Complete Testing</h3>
                  <p className="text-xs md:text-base text-gray-600">
                    Full system testing and customer training before we leave.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <img
                src="/furnace-install.jpg"
                alt="Professional furnace installation"
                className="rounded-2xl shadow-2xl w-full"
              />
              <p className="text-xs md:text-sm text-gray-600 mt-3 md:mt-4 text-center italic">
                Clean, code-compliant installations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - MOBILE OPTIMIZED */}
      <section className="py-10 md:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-center text-gray-900 mb-6 md:mb-10">
            Why Choose Air2Cool
          </h2>

          <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 shadow-lg border-2 border-gray-200">
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex items-start gap-2 md:gap-3">
                <Heart className="w-5 h-5 md:w-6 md:h-6 text-red-600 shrink-0 mt-0.5 md:mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-0.5 md:mb-1 text-sm md:text-base">Family Owned</h4>
                  <p className="text-xs md:text-sm text-gray-600">Local family business, not a franchise</p>
                </div>
              </div>

              <div className="flex items-start gap-2 md:gap-3">
                <Star className="w-5 h-5 md:w-6 md:h-6 text-yellow-500 shrink-0 mt-0.5 md:mt-1 fill-yellow-500" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-0.5 md:mb-1 text-sm md:text-base">250+ Perfect Reviews</h4>
                  <p className="text-xs md:text-sm text-gray-600">Real customers, real results</p>
                </div>
              </div>

              <div className="flex items-start gap-2 md:gap-3">
                <Award className="w-5 h-5 md:w-6 md:h-6 text-blue-600 shrink-0 mt-0.5 md:mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-0.5 md:mb-1 text-sm md:text-base">26+ Years Experience</h4>
                  <p className="text-xs md:text-sm text-gray-600">Nearly three decades serving NJ</p>
                </div>
              </div>

              <div className="flex items-start gap-2 md:gap-3">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-600 shrink-0 mt-0.5 md:mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-0.5 md:mb-1 text-sm md:text-base">No Pressure Sales</h4>
                  <p className="text-xs md:text-sm text-gray-600">Honest recommendations, no gimmicks</p>
                </div>
              </div>

              <div className="flex items-start gap-2 md:gap-3">
                <Shield className="w-5 h-5 md:w-6 md:h-6 text-blue-600 shrink-0 mt-0.5 md:mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-0.5 md:mb-1 text-sm md:text-base">Licensed & Insured</h4>
                  <p className="text-xs md:text-sm text-gray-600">Master HVAC Technicians</p>
                </div>
              </div>

              <div className="flex items-start gap-2 md:gap-3">
                <Truck className="w-5 h-5 md:w-6 md:h-6 text-blue-600 shrink-0 mt-0.5 md:mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-0.5 md:mb-1 text-sm md:text-base">24/7 Emergency</h4>
                  <p className="text-xs md:text-sm text-gray-600">Available when you need us</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Serving All of North Jersey
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Air2Cool serves homeowners and businesses across 9 counties in North and Central New Jersey. From our base in Wharton, we can reach most service areas within 30–45 minutes.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 text-sm font-medium text-gray-700">
            {["Morris County","Essex County","Passaic County","Bergen County","Sussex County","Warren County","Hunterdon County","Somerset County","Union County"].map((county) => (
              <div key={county} className="bg-blue-50 border border-blue-200 rounded-xl py-2.5 px-3">
                {county}
              </div>
            ))}
          </div>
          <Link
            href="/service-areas"
            className="inline-block text-base text-blue-600 hover:text-blue-700 font-semibold hover:underline"
          >
            View all towns we serve →
          </Link>
        </div>
      </section>

      {/* CTA - MOBILE OPTIMIZED */}
      <section className="py-10 md:py-12 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-3 md:mb-4">
            Experience the Air2Cool Difference
          </h2>
          <p className="text-base md:text-xl mb-6 md:mb-8">
            Join thousands of satisfied customers across North NJ.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <Link
              href="/contact"
              className="bg-white text-blue-700 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg hover:bg-gray-50 transition-all w-full sm:w-auto text-center"
            >
              Get Free Estimate
            </Link>
            <a
              href="tel:+12017875657"
              className="bg-white/10 backdrop-blur text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg border-2 border-white/30 transition-all hover:bg-white/20 inline-flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
              Call (201) 787-5657
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}