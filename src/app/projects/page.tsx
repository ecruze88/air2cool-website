import type { Metadata } from "next";
import { CheckCircle, Award, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Recent HVAC Projects | Air2Cool Installations in North NJ",
  description:
    "See our recent HVAC installations across North New Jersey. Boilers, furnaces, AC systems, and commercial HVAC. Professional installation with 26+ years experience. Licensed & insured.",
};

const GALLERY_PHOTOS = [
  {
    src: "/nti_wall_hung_boiler_install_with_primary_secondary_piping.webp",
    alt: "NTI wall hung boiler installation with primary secondary piping — Air2Cool NJ",
    caption: "NTI wall-hung boiler install with primary/secondary hydronic piping",
  },
  {
    src: "/nti_boiler_completed_install.webp",
    alt: "NTI boiler completed installation — Air2Cool NJ",
    caption: "NTI boiler — completed installation",
  },
  {
    src: "/hvac_piping_connections_closeup_detail.webp",
    alt: "HVAC piping connections closeup detail — Air2Cool NJ",
    caption: "Piping connections — closeup detail",
  },
  {
    src: "/hvac_control_panel_electrical_contactors_wiring_closeup.webp",
    alt: "HVAC control panel electrical contactors wiring closeup — Air2Cool NJ",
    caption: "Control panel — electrical contactors & wiring",
  },
  {
    src: "/commercial_install_ductwork_setup.webp",
    alt: "Commercial HVAC install ductwork setup — Air2Cool North NJ",
    caption: "Commercial ductwork installation setup",
  },
  {
    src: "/trane_3_phase_scroll_compressor_rooftop_unit_replacement.webp",
    alt: "Trane 3-phase scroll compressor rooftop unit replacement — Air2Cool NJ",
    caption: "Trane 3-phase scroll compressor — rooftop unit replacement",
  },
];

export default function RecentProjectsPage() {
  return (
    <main className="bg-white">
      {/* JSON-LD ImageObject schema for each photo */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": GALLERY_PHOTOS.map((photo) => ({
              "@type": "ImageObject",
              "contentUrl": `https://www.air2cool.com${photo.src}`,
              "description": photo.alt,
              "name": photo.caption,
              "author": {
                "@type": "Organization",
                "name": "Air2Cool Heating & Cooling",
                "url": "https://www.air2cool.com",
              },
            })),
          }),
        }}
      />

      {/* Hero - MOBILE OPTIMIZED */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-800 text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 md:mb-6">
              Our Work
            </h1>
            <p className="text-base md:text-xl text-gray-200 mb-6 md:mb-8">
              Real jobs, real results. Browse recent HVAC installations, mechanical room builds, and commercial projects completed by Air2Cool across North New Jersey.
            </p>
            <div className="flex flex-wrap gap-2 md:gap-3">
              <div className="bg-white/10 backdrop-blur px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm border border-white/20">
                <CheckCircle className="inline w-3 h-3 md:w-4 md:h-4 mr-1" />
                Code-Compliant
              </div>
              <div className="bg-white/10 backdrop-blur px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm border border-white/20">
                <Award className="inline w-3 h-3 md:w-4 md:h-4 mr-1" />
                Licensed
              </div>
              <div className="bg-white/10 backdrop-blur px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm border border-white/20">
                <MapPin className="inline w-3 h-3 md:w-4 md:h-4 mr-1" />
                North NJ
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_PHOTOS.map((photo) => (
              <div key={photo.src} className="flex flex-col">
                <div className="relative w-full overflow-hidden rounded-xl shadow-lg bg-gray-100" style={{ aspectRatio: "4/3" }}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-600 text-center px-1">
                  {photo.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEHIND THE WORK — VIDEOS */}
      <section className="py-10 md:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-3 md:mb-4">
              Behind the Work
            </h2>
            <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
              Watch our team in action — tools, materials, and mechanical work on real jobsites across North NJ.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
              NTI Boiler Installation in Progress
            </h3>
            <div style={{ width: '100%', maxWidth: '480px', margin: '0 auto 2rem auto', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
              <video autoPlay muted loop playsInline preload="metadata" style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '360px', objectFit: 'cover' }}>
                <source src="/nti_boiler_installation_in_progress.mp4" type="video/mp4" />
              </video>
              <div style={{ padding: '12px 16px', background: '#f8f9fa', fontSize: '14px', color: '#555', textAlign: 'center' }}>
                NTI boiler installation in progress — Morris County, NJ
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
              Air Handler Attic Installation
            </h3>
            <div style={{ width: '100%', maxWidth: '480px', margin: '0 auto 2rem auto', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
              <video autoPlay muted loop playsInline preload="metadata" style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '360px', objectFit: 'cover' }}>
                <source src="/complete_air_handler_attic_install.mp4" type="video/mp4" />
              </video>
              <div style={{ padding: '12px 16px', background: '#f8f9fa', fontSize: '14px', color: '#555', textAlign: 'center' }}>
                Complete air handler attic installation — North NJ
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESIDENTIAL HEATING - MOBILE OPTIMIZED */}
      <section className="py-10 md:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-2 md:mb-4">
              Residential Heating Systems
            </h2>
            <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
              Premium boiler and furnace installations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {/* NTI Boiler */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/2025-01-08.webp"
                  alt="NTI boiler installation by Air2Cool"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-base md:text-xl font-bold text-gray-900 mb-1 md:mb-2">
                  NTI Trinity Boiler
                </h3>
                <p className="text-xs md:text-sm text-gray-600 mb-2 md:mb-3">
                  <MapPin className="inline w-3 h-3 md:w-4 md:h-4 mr-1 text-blue-600" />
                  Residential - North NJ
                </p>
                <p className="text-xs md:text-sm text-gray-700 mb-3 md:mb-4">
                  High-efficiency NTI Trinity boiler with professional copper piping and proper venting.
                </p>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  <span className="bg-blue-100 text-blue-700 text-xs px-2 md:px-3 py-0.5 md:py-1 rounded-full font-semibold">
                    High-Efficiency
                  </span>
                  <span className="bg-green-100 text-green-700 text-xs px-2 md:px-3 py-0.5 md:py-1 rounded-full font-semibold">
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
                  alt="Three Lochinvar boilers by Air2Cool"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-base md:text-xl font-bold text-gray-900 mb-1 md:mb-2">
                  3-Zone Lochinvar System
                </h3>
                <p className="text-xs md:text-sm text-gray-600 mb-2 md:mb-3">
                  <MapPin className="inline w-3 h-3 md:w-4 md:h-4 mr-1 text-blue-600" />
                  Morris County, NJ
                </p>
                <p className="text-xs md:text-sm text-gray-700 mb-3 md:mb-4">
                  Premium Lochinvar boilers with smart controls and 3-zone management.
                </p>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  <span className="bg-purple-100 text-purple-700 text-xs px-2 md:px-3 py-0.5 md:py-1 rounded-full font-semibold">
                    Premium
                  </span>
                  <span className="bg-blue-100 text-blue-700 text-xs px-2 md:px-3 py-0.5 md:py-1 rounded-full font-semibold">
                    Multi-Zone
                  </span>
                </div>
              </div>
            </div>

            {/* Furnace */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/furnace-install.jpg"
                  alt="Furnace installation by Air2Cool"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-base md:text-xl font-bold text-gray-900 mb-1 md:mb-2">
                  High-Efficiency Furnace
                </h3>
                <p className="text-xs md:text-sm text-gray-600 mb-2 md:mb-3">
                  <MapPin className="inline w-3 h-3 md:w-4 md:h-4 mr-1 text-blue-600" />
                  Residential - North NJ
                </p>
                <p className="text-xs md:text-sm text-gray-700 mb-3 md:mb-4">
                  Complete furnace replacement with proper sizing and code-compliant venting.
                </p>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  <span className="bg-orange-100 text-orange-700 text-xs px-2 md:px-3 py-0.5 md:py-1 rounded-full font-semibold">
                    Code-Compliant
                  </span>
                  <span className="bg-green-100 text-green-700 text-xs px-2 md:px-3 py-0.5 md:py-1 rounded-full font-semibold">
                    Tested
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMERCIAL HVAC - MOBILE OPTIMIZED */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-2 md:mb-4">
              Commercial HVAC Projects
            </h2>
            <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
              Professional commercial installations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {/* Commercial RTU */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/commercial-rtu.jpeg"
                  alt="Commercial rooftop units by Air2Cool"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-base md:text-xl font-bold text-gray-900 mb-1 md:mb-2">
                  Multi-Unit Rooftop Install
                </h3>
                <p className="text-xs md:text-sm text-gray-600 mb-2 md:mb-3">
                  <MapPin className="inline w-3 h-3 md:w-4 md:h-4 mr-1 text-blue-600" />
                  Commercial - North NJ
                </p>
                <p className="text-xs md:text-sm text-gray-700 mb-3 md:mb-4">
                  Commercial rooftop HVAC-R with proper mounting and electrical.
                </p>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  <span className="bg-indigo-100 text-indigo-700 text-xs px-2 md:px-3 py-0.5 md:py-1 rounded-full font-semibold">
                    Commercial
                  </span>
                  <span className="bg-blue-100 text-blue-700 text-xs px-2 md:px-3 py-0.5 md:py-1 rounded-full font-semibold">
                    Multi-Unit
                  </span>
                </div>
              </div>
            </div>

            {/* Commercial Service */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/air2cool-image1.webp"
                  alt="Commercial HVAC service by Air2Cool"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-base md:text-xl font-bold text-gray-900 mb-1 md:mb-2">
                  Commercial Building Service
                </h3>
                <p className="text-xs md:text-sm text-gray-600 mb-2 md:mb-3">
                  <MapPin className="inline w-3 h-3 md:w-4 md:h-4 mr-1 text-blue-600" />
                  Commercial - North NJ
                </p>
                <p className="text-xs md:text-sm text-gray-700 mb-3 md:mb-4">
                  Professional commercial HVAC-R service with proper safety protocols.
                </p>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  <span className="bg-red-100 text-red-700 text-xs px-2 md:px-3 py-0.5 md:py-1 rounded-full font-semibold">
                    Safety First
                  </span>
                  <span className="bg-indigo-100 text-indigo-700 text-xs px-2 md:px-3 py-0.5 md:py-1 rounded-full font-semibold">
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
                  alt="Rooftop condensing units by Air2Cool"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-base md:text-xl font-bold text-gray-900 mb-1 md:mb-2">
                  Rooftop Condensing Units
                </h3>
                <p className="text-xs md:text-sm text-gray-600 mb-2 md:mb-3">
                  <MapPin className="inline w-3 h-3 md:w-4 md:h-4 mr-1 text-blue-600" />
                  Commercial - North NJ
                </p>
                <p className="text-xs md:text-sm text-gray-700 mb-3 md:mb-4">
                  Multiple commercial units with code-compliant platforms.
                </p>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  <span className="bg-cyan-100 text-cyan-700 text-xs px-2 md:px-3 py-0.5 md:py-1 rounded-full font-semibold">
                    Code-Compliant
                  </span>
                  <span className="bg-blue-100 text-blue-700 text-xs px-2 md:px-3 py-0.5 md:py-1 rounded-full font-semibold">
                    Multi-Unit
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ON-SITE WORK - MOBILE OPTIMIZED */}
      <section className="py-10 md:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-2 md:mb-4">
              Professional Service in Action
            </h2>
            <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
              Our team serves North Jersey year-round
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {/* Ductwork */}
            <div className="bg-white rounded-lg md:rounded-xl overflow-hidden shadow-lg border-2 border-gray-200">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/2021-02-15.webp"
                  alt="Ductwork installation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 md:p-4">
                <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-1 md:mb-2">
                  Ductwork Install
                </h3>
                <p className="text-xs md:text-sm text-gray-600">
                  Professional ductwork with proper sealing
                </p>
              </div>
            </div>

            {/* Delivery */}
            <div className="bg-white rounded-lg md:rounded-xl overflow-hidden shadow-lg border-2 border-gray-200">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/2025-12-12.webp"
                  alt="Equipment delivery"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 md:p-4">
                <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-1 md:mb-2">
                  Equipment Delivery
                </h3>
                <p className="text-xs md:text-sm text-gray-600">
                  New system delivery and install
                </p>
              </div>
            </div>

            {/* Winter Service */}
            <div className="bg-white rounded-lg md:rounded-xl overflow-hidden shadow-lg border-2 border-gray-200">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/2025-12-30.webp"
                  alt="Winter HVAC service"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 md:p-4">
                <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-1 md:mb-2">
                  Year-Round Service
                </h3>
                <p className="text-xs md:text-sm text-gray-600">
                  All weather conditions
                </p>
              </div>
            </div>

            {/* Service Call */}
            <div className="bg-white rounded-lg md:rounded-xl overflow-hidden shadow-lg border-2 border-gray-200">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/2022-12-19.webp"
                  alt="Residential service"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 md:p-4">
                <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-1 md:mb-2">
                  Residential Service
                </h3>
                <p className="text-xs md:text-sm text-gray-600">
                  Professional home service
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment - MOBILE OPTIMIZED */}
      <section className="py-10 md:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Award className="w-12 h-12 md:w-16 md:h-16 text-blue-600 mx-auto mb-4 md:mb-6" />
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-4 md:mb-6">
            Every Project Done Right
          </h2>
          <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8">
            Same commitment to quality, professionalism, and customer satisfaction.
          </p>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            <div className="bg-blue-50 rounded-lg md:rounded-xl p-4 md:p-6 border-2 border-blue-200">
              <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-blue-600 mx-auto mb-2 md:mb-3" />
              <h3 className="font-bold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">Proper Sizing</h3>
              <p className="text-xs md:text-sm text-gray-600">
                Manual J load calculations
              </p>
            </div>
            <div className="bg-green-50 rounded-lg md:rounded-xl p-4 md:p-6 border-2 border-green-200">
              <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-green-600 mx-auto mb-2 md:mb-3" />
              <h3 className="font-bold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">Clean Work</h3>
              <p className="text-xs md:text-sm text-gray-600">
                FREE house cleaning
              </p>
            </div>
            <div className="bg-purple-50 rounded-lg md:rounded-xl p-4 md:p-6 border-2 border-purple-200">
              <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-purple-600 mx-auto mb-2 md:mb-3" />
              <h3 className="font-bold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">Full Testing</h3>
              <p className="text-xs md:text-sm text-gray-600">
                Complete system testing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - MOBILE OPTIMIZED */}
      <section className="py-10 md:py-12 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-3 md:mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-base md:text-xl mb-6 md:mb-8">
            Get a free estimate for your HVAC project.
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
              className="bg-white/10 backdrop-blur text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg border-2 border-white/30 transition-all hover:bg-white/20 w-full sm:w-auto text-center"
            >
              Call (201) 787-5657
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
