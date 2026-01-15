import type { Metadata } from "next";
import { Award, Star, CheckCircle, Users, Truck, Shield, Heart, Phone } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Air2Cool | Family-Owned HVAC Since 1998 | North NJ",
  description:
    "Learn about Air2Cool Heating & Cooling. Family-owned HVAC company serving North New Jersey since 1998. 250+ 5-star Google reviews. Licensed Master HVAC Technicians. Honest service, no gimmicks.",
};

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Your Trusted HVAC Partner Since 1998
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              For over 26 years, Air2Cool has been North New Jersey's go-to HVAC company. 
              Family-owned, locally operated, and committed to honest service without the high-pressure sales tactics.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
                <Award className="w-5 h-5" />
                <span className="font-semibold">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
                <Star className="w-5 h-5 fill-white" />
                <span className="font-semibold">250+ 5-Star Reviews</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
                <Users className="w-5 h-5" />
                <span className="font-semibold">Family Owned</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <img
                src="/side-truck.jpg"
                alt="Air2Cool HVAC service truck - family-owned company serving North New Jersey since 1998"
                className="rounded-2xl shadow-2xl w-full"
              />
              <p className="text-center text-sm text-gray-600 mt-4 italic">
                Proudly serving North New Jersey since 1998
              </p>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
Air2Cool Heating/AC & Refrigeration provides high quality, affordable HVAC repair, installation, and maintenance services for residential and commercial customers across North and Central New Jersey. We specialize in heating and air conditioning service, furnace and AC replacement, preventative maintenance, and commercial refrigeration for restaurants, retail locations, and small businesses.
Whether you need emergency HVAC repair, seasonal maintenance, or a full system installation, Air2Cool delivers dependable service without unnecessary upsells or hidden fees. With decades of experience and a strong local reputation, we are a trusted HVAC contractor for homeowners and businesses throughout New Jersey.
                </p>
                <p>
We proudly serve Morris, Essex, Somerset, Middlesex, Union, Passaic, Bergen, Sussex, and Warren Counties, offering fast response times, upfront pricing, and reliable workmanship. Our licensed and experienced HVAC technicians work with all major brands and system types, ensuring efficient, long lasting solutions for homes and commercial properties.

                </p>
                <p>
Whether you need emergency HVAC repair, seasonal maintenance, or a full system installation, Air2Cool delivers dependable service without unnecessary upsells or hidden fees. With decades of experience and a strong local reputation, we are a trusted HVAC contractor for homeowners and businesses throughout New Jersey.

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

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-12">
            What Sets Us Apart
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Honest Pricing</h3>
              <p className="text-gray-600">
                Transparent quotes with no hidden fees. We explain everything before we start work 
                so there are never any surprises.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Technicians</h3>
              <p className="text-gray-600">
                Licensed Master HVAC Technicians with decades of combined experience. We don't use 
                subcontractors - it's our team, our work.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Response</h3>
              <p className="text-gray-600">
                Same-day service available. 24/7 emergency response. We're here when you need us, 
                not when it's convenient for us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-6">
            Our Team
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Every member of the Air2Cool team is background-checked, drug-tested, and 
            committed to providing exceptional service.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/back-of-shirt.jpg"
                alt="Air2Cool HVAC technician performing professional installation with organized tools and clean workspace"
                className="rounded-2xl shadow-2xl w-full"
              />
              <p className="text-sm text-gray-600 mt-4 text-center italic">
                Our technicians take pride in clean, professional work
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Licensed & Certified</h3>
                  <p className="text-gray-600 text-sm">
                    All technicians hold NJ HVAC licenses and manufacturer certifications. We stay 
                    current on the latest equipment and techniques.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Ongoing Training</h3>
                  <p className="text-gray-600 text-sm">
                    Regular training on new equipment, techniques, and safety protocols. We invest 
                    in our team so they can serve you better.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Background Checked</h3>
                  <p className="text-gray-600 text-sm">
                    Every team member passes thorough background and drug screening. We take 
                    seriously the trust you place in us to work in your home.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Customer-First Attitude</h3>
                  <p className="text-gray-600 text-sm">
                    Respectful, professional, and committed to your satisfaction. We clean up after 
                    ourselves and treat your home like our own.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment to Quality */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-6">
            Our Commitment to Quality
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We don't cut corners. Every installation is done right the first time - 
            clean, code-compliant, and tested.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Shield className="w-10 h-10 text-blue-600 shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Proper Sizing</h3>
                  <p className="text-gray-600">
                    We size equipment correctly 
                    for maximum efficiency and comfort - not based on what fits or what's in stock.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Shield className="w-10 h-10 text-blue-600 shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Clean Installation</h3>
                  <p className="text-gray-600">
                    Professional piping, wiring, and ductwork. We protect your home during the 
                    install and include FREE house cleaning when we're done.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Shield className="w-10 h-10 text-blue-600 shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Complete Testing</h3>
                  <p className="text-gray-600">
                    Full system testing, combustion analysis where applicable, and customer training. 
                    We don't leave until you're 100% comfortable with your new system.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <img
                src="/furnace-install.jpg"
                alt="Professional furnace installation by Air2Cool - clean piping, proper venting, code-compliant work"
                className="rounded-2xl shadow-2xl w-full"
              />
              <p className="text-sm text-gray-600 mt-4 text-center italic">
                Every installation is clean, code-compliant, and tested
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Customers Choose Us */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-12">
            Why Customers Choose Air2Cool
          </h2>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Heart className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Family Owned & Operated</h4>
                  <p className="text-sm text-gray-600">Not a franchise or national chain - just a local family business</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Star className="w-6 h-6 text-yellow-500 shrink-0 mt-1 fill-yellow-500" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">250+ Perfect Google Reviews</h4>
                  <p className="text-sm text-gray-600">Real customers, real results - our reputation speaks for itself</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">26+ Years Experience</h4>
                  <p className="text-sm text-gray-600">Nearly three decades of keeping North Jersey comfortable</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">No High-Pressure Sales</h4>
                  <p className="text-sm text-gray-600">Honest recommendations without the gimmicks or pressure tactics</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Licensed & Insured</h4>
                  <p className="text-sm text-gray-600">Fully licensed Master HVAC Technicians and comprehensive insurance</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Truck className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">24/7 Emergency Service</h4>
                  <p className="text-sm text-gray-600">Available any time, day or night, when you need us most</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Serving North New Jersey
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Proudly serving Morris, Sussex, Warren, Essex, Passaic, Union, and Bergen County.
          </p>
          <Link
            href="/service-areas"
            className="inline-block text-blue-600 hover:text-blue-700 font-semibold hover:underline"
          >
            View all towns we serve →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Experience the Air2Cool Difference
          </h2>
          <p className="text-xl mb-8">
            Join thousands of satisfied customers across North New Jersey.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-blue-700 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-50 transition-all"
            >
              Get Free Estimate
            </Link>
            <a
              href="tel:+12017875657"
              className="bg-white/10 backdrop-blur text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/30 transition-all hover:bg-white/20 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call (201) 787-5657
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}