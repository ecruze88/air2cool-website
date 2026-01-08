import type { Metadata } from "next";
import { CheckCircle, Award, MapPin } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Recent HVAC Projects | Air2Cool Installations in North NJ",
  description:
    "See our recent HVAC installations across North New Jersey. Boilers, furnaces, AC systems, and commercial HVAC. Professional installation with 26+ years experience. Licensed & insured.",
};

export default function RecentProjectsPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Recent HVAC Installations
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              See the quality of our work across North New Jersey. From premium boiler 
              installations to commercial HVAC, every project is done right.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm border border-white/20">
                <CheckCircle className="inline w-4 h-4 mr-1" />
                All work code-compliant
              </div>
              <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm border border-white/20">
                <Award className="inline w-4 h-4 mr-1" />
                Licensed Master Technicians
              </div>
              <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm border border-white/20">
                <MapPin className="inline w-4 h-4 mr-1" />
                Serving all of North NJ
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESIDENTIAL HEATING INSTALLATIONS */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Residential Heating Systems
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Premium boiler and furnace installations with expert sizing and clean workmanship
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* NTI Boiler Installation */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/2025-01-08.webp"
                  alt="NTI boiler installation with professional copper piping by Air2Cool in North NJ"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  NTI Trinity Boiler Installation
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  <MapPin className="inline w-4 h-4 mr-1 text-blue-600" />
                  Residential - North New Jersey
                </p>
                <p className="text-gray-700 text-sm mb-4">
                  High-efficiency NTI Trinity boiler with professional copper piping, 
                  proper venting, and zone controls. Clean installation with all permits.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-semibold">
                    High-Efficiency
                  </span>
                  <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-semibold">
                    Clean Install
                  </span>
                </div>
              </div>
            </div>

            {/* 3 Lochinvar Boilers */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/three-install.jpeg"
                  alt="Three Lochinvar boilers installed by Air2Cool - multi-zone system Morris County NJ"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  3-Zone Lochinvar Boiler System
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  <MapPin className="inline w-4 h-4 mr-1 text-blue-600" />
                  Morris County, NJ
                </p>
                <p className="text-gray-700 text-sm mb-4">
                  Premium Lochinvar boiler installation with smart digital controls and 
                  3-zone management for optimal comfort and efficiency.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full font-semibold">
                    Premium Equipment
                  </span>
                  <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-semibold">
                    Multi-Zone
                  </span>
                </div>
              </div>
            </div>

            {/* Furnace Installation */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/furnace-install.jpg"
                  alt="Professional furnace installation with clean piping and proper venting"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  High-Efficiency Furnace Install
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  <MapPin className="inline w-4 h-4 mr-1 text-blue-600" />
                  Residential - North NJ
                </p>
                <p className="text-gray-700 text-sm mb-4">
                  Complete furnace replacement with proper sizing, clean piping, 
                  code-compliant venting, and full system testing.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full font-semibold">
                    Code-Compliant
                  </span>
                  <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-semibold">
                    Tested & Certified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMERCIAL HVAC */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Commercial HVAC Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional commercial installations with proper permitting and safety protocols
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Commercial Rooftop Units */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/commercial-rtu.jpeg"
                  alt="Commercial rooftop HVAC units installed by Air2Cool"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Multi-Unit Rooftop Installation
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  <MapPin className="inline w-4 h-4 mr-1 text-blue-600" />
                  Commercial - North NJ
                </p>
                <p className="text-gray-700 text-sm mb-4">
                  Commercial rooftop HVAC installation with proper curb mounting, 
                  electrical connections, and ductwork.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full font-semibold">
                    Commercial
                  </span>
                  <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-semibold">
                    Multi-Unit
                  </span>
                </div>
              </div>
            </div>

            {/* Commercial Ladder Work */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/air2cool-image1.webp"
                  alt="Commercial HVAC service with Air2Cool truck and safety equipment"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Commercial Building Service
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  <MapPin className="inline w-4 h-4 mr-1 text-blue-600" />
                  Commercial - North NJ
                </p>
                <p className="text-gray-700 text-sm mb-4">
                  Professional commercial HVAC service with proper safety protocols, 
                  equipment, and trained technicians.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-red-100 text-red-700 text-xs px-3 py-1 rounded-full font-semibold">
                    Safety First
                  </span>
                  <span className="bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full font-semibold">
                    Professional
                  </span>
                </div>
              </div>
            </div>

            {/* Roof Condensers */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/roof-condenser-1.jpg"
                  alt="Commercial condensing units on roof with proper mounting"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Rooftop Condensing Units
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  <MapPin className="inline w-4 h-4 mr-1 text-blue-600" />
                  Commercial - North NJ
                </p>
                <p className="text-gray-700 text-sm mb-4">
                  Multiple commercial condensing units with code-compliant platforms 
                  and proper mounting systems.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-cyan-100 text-cyan-700 text-xs px-3 py-1 rounded-full font-semibold">
                    Code-Compliant
                  </span>
                  <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-semibold">
                    Multi-Unit
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ON-SITE WORK & INSTALLATIONS */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Professional Service in Action
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our team serves North Jersey year-round with professional equipment and expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Ductwork Installation */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/2021-02-15.webp"
                  alt="Air2Cool technician installing ductwork at residential home"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Ductwork Installation
                </h3>
                <p className="text-sm text-gray-600">
                  Professional outdoor ductwork installation with proper sealing
                </p>
              </div>
            </div>

            {/* Equipment Delivery */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/2025-12-12.webp"
                  alt="Air2Cool truck delivering new HVAC equipment to residential home"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Equipment Delivery
                </h3>
                <p className="text-sm text-gray-600">
                  New system delivery and installation at residential property
                </p>
              </div>
            </div>

            {/* Winter Service */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/2025-12-30.webp"
                  alt="Air2Cool providing winter HVAC service in North NJ"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Year-Round Service
                </h3>
                <p className="text-sm text-gray-600">
                  We serve North Jersey in all weather conditions
                </p>
              </div>
            </div>

            {/* Service Call */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/2022-12-19.webp"
                  alt="Air2Cool service truck at residential location"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Residential Service
                </h3>
                <p className="text-sm text-gray-600">
                  Professional service for homes across North New Jersey
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Award className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Every Project Done Right
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Whether it's a residential boiler or commercial rooftop unit, we bring the same 
            commitment to quality, professionalism, and customer satisfaction.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
              <CheckCircle className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Proper Sizing</h3>
              <p className="text-sm text-gray-600">
                Manual J load calculations on every installation
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
              <CheckCircle className="w-10 h-10 text-green-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Clean Work</h3>
              <p className="text-sm text-gray-600">
                Professional installation with FREE house cleaning
              </p>
            </div>
            <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
              <CheckCircle className="w-10 h-10 text-purple-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Full Testing</h3>
              <p className="text-sm text-gray-600">
                Complete system testing and customer training
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8">
            Get a free estimate for your heating, cooling, or commercial HVAC project.
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
              className="bg-white/10 backdrop-blur text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/30 transition-all hover:bg-white/20"
            >
              Call (201) 787-5657
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}