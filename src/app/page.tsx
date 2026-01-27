import CTA from "@/components/CTA";
import type { Metadata } from "next";
import Offers from "@/components/Offers";
import Link from "next/link";
import { Flame, Snowflake, Zap, Wind, Wrench, Thermometer, Phone, Star, Award, DollarSign, CheckCircle, Droplets, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Air2Cool Heating & Cooling | HVAC Repair & Installation in North NJ",
  description:
    "Air2Cool Heating & Cooling provides fast, reliable HVAC repair, installation, and maintenance across North New Jersey. Call to schedule service.",
};

const SERVICES = [
  {
    name: "Heating Repair",
    href: "/services/heating-repair",
    desc: "Fast furnace & boiler repairs - hydronic, steam, NTI, and all makes. 24/7 emergency service.",
    iconName: "flame",
    gradient: "from-red-500 to-orange-600"
  },
  {
    name: "Heating Installation",
    href: "/services/heating-installation",
    desc: "New furnaces & boilers professionally installed. Free house cleaning included with every install.",
    iconName: "flame",
    gradient: "from-red-600 to-orange-700"
  },
  {
    name: "Cooling Repair",
    href: "/services/ac-repair",
    desc: "Quick AC diagnostics and reliable repairs. Same-day service to beat the heat.",
    iconName: "snowflake",
    gradient: "from-blue-500 to-cyan-600"
  },
  {
    name: "Cooling Installation",
    href: "/services/cooling-installation",
    desc: "New AC, heat pumps & mini splits. Expert sizing and installation. Free house cleaning!",
    iconName: "snowflake",
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    name: "Complete HVAC Systems",
    href: "/services/hvac-installation",
    desc: "Full heating + cooling replacement. Professional sizing and setup for whole-home comfort.",
    iconName: "zap",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    name: "Air Filtration",
    href: "/services/air-filtration",
    desc: "Breathe cleaner air with professional filtration systems. Protect your family's health.",
    iconName: "wind",
    gradient: "from-green-500 to-teal-600"
  },
  {
    name: "Whole-Home Humidifier",
    href: "/services/humidifier",
    desc: "Eliminate dry winter air. Aprilaire 865 ductless steam humidifier for healthier, more comfortable homes.",
    iconName: "droplets",
    gradient: "from-cyan-400 to-blue-500"
  },
  {
    name: "Preventative Maintenance",
    href: "/services/preventative-maintenance",
    desc: "Keep your system running smoothly with regular maintenance. Extend equipment life and prevent costly repairs.",
    iconName: "wrench",
    gradient: "from-orange-500 to-amber-600"
  },
  {
    name: "Commercial Refrigeration",
    href: "/services/commercial-refrigeration",
    desc: "Expert commercial refrigeration service and repair for businesses across North NJ.",
    iconName: "thermometer",
    gradient: "from-cyan-500 to-blue-600"
  },
];

// Troubleshooting quick fixes for homepage
const TROUBLESHOOTING_PREVIEW = [
  {
    problem: "Furnace Not Heating",
    icon: Flame,
    quickFixes: [
      "Check thermostat set to HEAT mode",
      "Replace thermostat batteries",
      "Check circuit breaker",
      "Replace dirty air filter",
    ],
    color: "red",
    href: "/troubleshooting#heating"
  },
  {
    problem: "AC Not Cooling",
    icon: Snowflake,
    quickFixes: [
      "Check thermostat set to COOL",
      "Replace air filter",
      "Clear debris from outdoor unit",
      "Check both circuit breakers",
    ],
    color: "blue",
    href: "/troubleshooting#cooling"
  },
  {
    problem: "Thermostat Issues",
    icon: Thermometer,
    quickFixes: [
      "Replace batteries",
      "Check furnace/AC breaker",
      "Verify furnace door fully closed",
      "Clean dust from thermostat",
    ],
    color: "purple",
    href: "/troubleshooting#thermostat"
  },
  {
    problem: "Strange Noises",
    icon: AlertTriangle,
    quickFixes: [
      "Turn system OFF immediately",
      "Check for loose panels",
      "Clear debris from unit",
      "Call for professional diagnosis",
    ],
    color: "orange",
    href: "/troubleshooting#heating"
  },
];

// Icon mapping
const ICON_MAP = {
  flame: Flame,
  snowflake: Snowflake,
  zap: Zap,
  wind: Wind,
  wrench: Wrench,
  thermometer: Thermometer,
  droplets: Droplets,
};

const TRUST = [
  "All makes & models",
  "Transparent pricing",
  "Emergency service",
  "Over 20 years of service",
];

export default function HomePage() {
  return (
    <main className="bg-white">
      {/* PROMINENT GOOGLE REVIEWS BANNER - Right after header */}
 {/* PROMINENT GOOGLE REVIEWS BANNER - Right after header */}
{/* PROMINENT GOOGLE REVIEWS BANNER - Right after header */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 py-3 md:py-6 shadow-lg relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-center gap-3 md:gap-6 text-white text-center">
            {/* Mobile: Compact single row */}
            <div className="flex items-center gap-2 md:hidden">
              {/* Google Logo - Mobile */}
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-yellow-300 text-yellow-300" />
                ))}
              </div>
              <span className="font-bold text-lg">5.0</span>
              <span className="text-xs opacity-80">• 250+ Reviews</span>
            </div>

            {/* Desktop: Original layout */}
            <div className="hidden md:flex md:flex-row items-center justify-center gap-6 text-white">
              {/* Star Rating with Google Logo on LEFT side */}
              <div className="flex items-center gap-4">
                {/* Google Logo on the left */}
                <svg className="w-12 h-12 shrink-0" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                
                {/* Star rating section on the right */}
                <div className="flex flex-col items-center">
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-8 h-8 fill-yellow-300"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-5xl font-extrabold mb-1">5.0</p>
                  <p className="text-xs font-semibold opacity-90">PERFECT RATING</p>
                </div>
              </div>

              <div className="w-px h-20 bg-white/30"></div>

              <div className="text-center">
                <p className="text-4xl font-extrabold mb-2">250+</p>
                <p className="text-base font-semibold">Google Reviews</p>
                <p className="text-xs opacity-90 mt-1">Real customers, real results</p>
              </div>

              <div className="w-px h-20 bg-white/30"></div>

              <div className="text-center max-w-xs">
                <p className="text-xl font-bold mb-1">Most Trusted HVAC</p>
                <p className="text-base font-semibold mb-2">in North New Jersey</p>
                <a 
                  href="/reviews" 
                  className="inline-block text-xs font-semibold bg-white text-blue-600 px-5 py-2 rounded-full hover:bg-blue-50 transition-all hover:scale-105 shadow-lg"
                >
                  Read Our Reviews →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HERO (full bleed) - MOBILE OPTIMIZED */}
      <section className="relative overflow-hidden min-h-[85vh]">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/finalvid.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />

        {/* HERO CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 md:pt-32 pb-16 md:pb-24">
          <div className="max-w-4xl">
            {/* Urgency Banner */}
          {/* Emergency Call Button */}
            <a
              href="tel:+12017875657"
              className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full font-bold text-sm md:text-base mb-6 md:mb-8 shadow-2xl transition-all hover:scale-105"
            >
              <span className="w-2.5 h-2.5 bg-white rounded-full animate-ping"></span>
              <Phone className="w-5 h-5 md:w-6 md:h-6" />
              24/7 EMERGENCY SERVICE - TAP TO CALL
            </a>
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-4 md:mb-6">
              HVAC Problems?
              <br />
              <span className="text-blue-400">We Fix It Fast.</span>
            </h1>

            {/* Subheadline with urgency */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-100 font-semibold mb-3 md:mb-4">
              Same-Day Service • No Upsell BS • 26+ Years Trusted
            </p>
            
            <p className="text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed mb-6 md:mb-8">
              Furnace out in the cold? AC dead in the heat? We're your NJ HVAC experts with honest pricing and clean installs. Family owned since 1998.
            </p>

            {/* Trust Badges - IMPROVED MOBILE SPACING */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur border border-white/20 text-white px-4 py-3 rounded-full">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center shrink-0">
                  <Star className="w-5 h-5 text-white fill-white" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-sm md:text-base">5.0 Google Rating</div>
                  <div className="text-xs text-gray-300">250+ Reviews</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur border border-white/20 text-white px-4 py-3 rounded-full">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-sm md:text-base">Licensed & Insured</div>
                  <div className="text-xs text-gray-300">Master HVAC Techs</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur border border-white/20 text-white px-4 py-3 rounded-full">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shrink-0">
                  <DollarSign className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-sm md:text-base">0% Financing</div>
                  <div className="text-xs text-gray-300">Up to $25k Available</div>
                </div>
              </div>
            </div>

            {/* CTAs - STACKED ON MOBILE */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-0">
              <a
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-lg shadow-2xl transition-all hover:scale-105"
              >
                <span>Get Free Estimate</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              

            </div>

            {/* Urgency Text - HIDDEN ON MOBILE */}
            <p className="hidden md:flex mt-6 text-sm text-yellow-300 font-semibold items-center gap-2">
              <Zap className="w-4 h-4" />
              Emergency calls answered in under 5 minutes
            </p>
          </div>
        </div>
      </section>

      {/* OFFERS (Goettl-style) */}
      <Offers
        heading="Winter Specials - Limited Time!"
        offers={[
          {
            title: "$25 OFF SERVICE OR ANY REPAIR",
            expiresText: "Never expires! • Cannot be applied to service fee",
            imageSrc: "/2021-02-15.webp",
            imageAlt: "Air2Cool HVAC technician performing professional ductwork installation",
            details: [
              "Valid on any repair service",
              "Not valid with other offers or discounts",
              "Cannot be applied to diagnostic service fee",
              "Present coupon at time of service",
            ],
            ctaLabel: "Call (201) 787-5657",
            ctaHref: "tel:+12017875657",
          },
          {
            title: "$1000 OFF WATER BOILER INSTALLATION",
            expiresText: "With qualifying rebate program • Limited time offer",
            imageSrc: "/2025-01-08.webp",
            imageAlt: "Professional water boiler installation by Air2Cool technicians",
            details: [
              "Save $1000 on qualifying water boiler installations",
              "High-efficiency boilers only",
              "Cannot be combined with other offers",
           ],
          ctaLabel: "Get Free Estimate",
          ctaHref: "/contact",
          },
          {
            title: "$500 OFF NEW FURNACE",
            expiresText: "Limited time offer",
            imageSrc: "/2025-12-12.webp",
            imageAlt: "Air2Cool truck delivering new HVAC equipment to North NJ home",
            details: [
              "High-efficiency furnaces save on gas bills",
              "FREE house cleaning included",
              "0% financing available",
              "Up to 12-year warranties",
            ],
            ctaLabel: "Get Free Estimate",
            ctaHref: "/contact",
          },
          {
  title: "5% OFF FOR FIRST RESPONDERS",
  expiresText: "Police, Fire, EMT, Paramedics • Valid ID required",
  imageSrc: "/first_responders_discount.jpg",
  imageAlt: "Air2Cool supports first responders with special HVAC discounts",
  details: [
    "5% discount on all service calls and repairs",
    "5% discount on HVAC replacements and installations",
    "Valid for police, firefighters, EMTs, and paramedics",
    "Must present valid ID at time of service",
  ],
  ctaLabel: "Call (201) 787-5657",
  ctaHref: "tel:+12017875657",
          },
          {
  title: "5% OFF FOR VETERANS & MILITARY",
  expiresText: "Active duty & veterans • Thank you for your service",
  imageSrc: "/veteran_discount.jpg",
  imageAlt: "Air2Cool honors veterans with HVAC service discounts",
  details: [
    "5% discount on all service calls and repairs",
    "5% discount on HVAC replacements and installations",
    "Valid for active duty military and veterans",
    "Must present military ID or DD-214 at time of service",
  ],
  ctaLabel: "Call (201) 787-5657",
  ctaHref: "tel:+12017875657",
          },
          {
  title: "5% OFF FOR SENIORS",
  expiresText: "Ages 65+ • Never expires",
  imageSrc: "/senior_discount.jpg",
  imageAlt: "Air2Cool provides senior citizen HVAC discounts in North NJ",
  details: [
    "5% discount on all service calls and repairs",
    "5% discount on HVAC replacements and installations",
    "Valid for customers 65 years and older",
    "Must present valid ID at time of service",
  ],
  ctaLabel: "Call (201) 787-5657",
  ctaHref: "tel:+12017875657",
          },  
          {
            title: "0% APR",
            expiresText: "Up to $25,000 financing",
            imageSrc: "/2022-12-19.webp",
            imageAlt: "Air2Cool providing professional HVAC service to residential homes in North New Jersey",
            details: [
              "For replacements",
              "Instant approval available",
              "*With approved credit via NJNG SaveGreen",
            ],
            ctaLabel: "Learn More",
            ctaHref: "/financing",
          },
        ]}
      />

      {/* BODY */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* SERVICES HEADER */}
        <section className="mb-10">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Complete HVAC Services
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              From repairs to installations to air quality - we handle everything for your home comfort.
            </p>
          </div>
        </section>

        {/* SERVICE CARDS - All 9 services */}
        <section className="mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">{SERVICES.map((s) => {
              const Icon = ICON_MAP[s.iconName as keyof typeof ICON_MAP];
              return (
                <a
                  key={s.name}
                  href={s.href}
                  className="group rounded-xl md:rounded-2xl border border-gray-200 bg-white p-3 md:p-8 shadow-sm
                             hover:shadow-xl transition-all duration-300 hover:border-blue-500 hover:-translate-y-1"
                >
                  {/* Icon with gradient background */}
                  <div className={`inline-flex items-center justify-center w-9 h-9 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-gradient-to-br ${s.gradient} text-white mb-2 md:mb-5 shadow-lg`}>
                    <Icon className="w-4 h-4 md:w-7 md:h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="font-bold md:font-extrabold text-gray-900 text-xs md:text-xl mb-1 md:mb-3 group-hover:text-blue-700 transition-colors leading-tight">
                    {s.name}
                  </h3>

                  {/* Description - Hide on mobile */}
                  <p className="hidden md:block text-sm text-gray-600 leading-relaxed mb-4">
                    {s.desc}
                  </p>

                  {/* Arrow indicator */}
                  <div className="flex items-center text-blue-700 font-semibold text-xs md:text-sm group-hover:gap-2 transition-all">
                    <span className="hidden md:inline">Learn More</span>
                    <span className="inline-block transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* ========================================
            TROUBLESHOOTING HUB - EXPANDED SECTION
        ======================================== */}
        <section className="mb-16">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 py-2 rounded-full font-semibold text-sm mb-4">
              <AlertTriangle className="w-4 h-4" />
              DIY HELP CENTER
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              HVAC Not Working? Try These Quick Fixes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Before calling for service, check these common issues. Many HVAC problems have simple DIY solutions that can save you time and money.
            </p>
          </div>

          {/* Quick Troubleshooting Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {TROUBLESHOOTING_PREVIEW.map((item) => {
              const IconComponent = item.icon;
              const colorConfig = {
                red: {
                  gradient: 'from-red-500 to-orange-600',
                  bg: 'bg-red-50',
                  border: 'border-red-200',
                  iconBg: 'bg-red-600',
                  textColor: 'text-red-700'
                },
                blue: {
                  gradient: 'from-blue-500 to-cyan-600',
                  bg: 'bg-blue-50',
                  border: 'border-blue-200',
                  iconBg: 'bg-blue-600',
                  textColor: 'text-blue-700'
                },
                purple: {
                  gradient: 'from-purple-500 to-pink-600',
                  bg: 'bg-purple-50',
                  border: 'border-purple-200',
                  iconBg: 'bg-purple-600',
                  textColor: 'text-purple-700'
                },
                orange: {
                  gradient: 'from-orange-500 to-amber-600',
                  bg: 'bg-orange-50',
                  border: 'border-orange-200',
                  iconBg: 'bg-orange-600',
                  textColor: 'text-orange-700'
                }
              }[item.color];

              return (
                <div
                  key={item.problem}
                  className={`bg-white rounded-2xl border-2 ${colorConfig.border} p-6 hover:shadow-xl transition-all duration-300 group`}
                >
                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${colorConfig.iconBg} flex items-center justify-center shrink-0`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.problem}
                      </h3>
                    </div>
                  </div>

                  {/* Quick Fixes */}
                  <div className={`${colorConfig.bg} rounded-xl p-4 mb-4`}>
                    <p className="font-semibold text-sm mb-3 flex items-center gap-2 text-gray-900">
                      <CheckCircle className="w-4 h-4" />
                      Quick Checks to Try:
                    </p>
                    <ul className="space-y-2">
                      {item.quickFixes.map((fix, i) => (
                        <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                          <span className="text-green-600 mt-0.5 shrink-0 font-bold">✓</span>
                          <span>{fix}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Learn More Link */}
                  <a
                    href={item.href}
                    className={`inline-flex items-center gap-2 ${colorConfig.textColor} font-semibold text-sm hover:gap-3 transition-all`}
                  >
                    See Full Troubleshooting Guide
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              );
            })}
          </div>

          {/* Full Guide CTA */}
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-8 text-white shadow-2xl text-center">
            <AlertTriangle className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-extrabold mb-3">
              Need More Help?
            </h3>
            <p className="text-red-100 mb-6 max-w-2xl mx-auto">
              Our complete troubleshooting guide covers furnace, AC, boiler, and thermostat problems with step-by-step fixes. Or call us for same-day professional service.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/troubleshooting"
                className="inline-block bg-white text-red-700 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-50 transition-all"
              >
                View Full Guide →
              </Link>
              <a
                href="tel:+12017875657"
                className="inline-block bg-white/10 backdrop-blur text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all"
              >
                Call (201) 787-5657
              </a>
            </div>
          </div>
        </section>

        {/* RECENT PROJECTS - Call to Action */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Recent Projects */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 text-white shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
                See Our Work
              </h2>
              <p className="text-blue-100 mb-6">
                Browse our recent HVAC installations across North New Jersey.
              </p>
              <Link
                href="/projects"
                className="inline-block bg-white text-blue-700 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-50 transition-all"
              >
                View Projects →
              </Link>
            </div>

            {/* About Us */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
                26+ Years of Excellence
              </h2>
              <p className="text-purple-100 mb-6">
                Family owned since 1998. Learn about our commitment to North Jersey.
              </p>
              <Link
                href="/about"
                className="inline-block bg-white text-purple-700 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-50 transition-all"
              >
                About Air2Cool →
              </Link>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE AIR2COOL - With Truck Photo */}
        <section className="mb-16 py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-12">
              Why North Jersey Chooses Air2Cool
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image - Truck with Google 5-star badge */}
              <div className="order-2 lg:order-1">
                <img
                  src="/side-truck.jpg"
                  alt="Air2Cool HVAC service truck - Google 5-star rated contractor serving North New Jersey"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <p className="text-center text-sm text-gray-600 mt-4 italic">
                  Proudly serving North New Jersey since 1998
                </p>
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">26+ Years Experience</h3>
                    <p className="text-gray-600">Family owned and operated since 1998. Nearly three decades of keeping North Jersey comfortable.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center shrink-0">
                    <Star className="w-6 h-6 text-white fill-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">250+ 5-Star Reviews</h3>
                    <p className="text-gray-600">Perfect Google rating. Real customers, real results. Our reputation speaks for itself.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Licensed Master Technicians</h3>
                    <p className="text-gray-600">All work performed by certified professionals. Fully licensed and insured in NJ.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center shrink-0">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">0% Financing Available</h3>
                    <p className="text-gray-600">Up to $25,000 with approved credit. Make your home comfortable now, pay over time.</p>
                  </div>
                </div>

                <a
                  href="/about"
                  className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all hover:scale-105"
                >
                  Learn More About Us →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICE AREAS BLOCK - Simplified CTAs */}
        <section className="mb-16">
          <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-sm">
            <div className="bg-gradient-to-r from-brand-blue to-brand-red p-px">
              <div className="bg-white p-8 sm:p-10">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                  Service Areas
                </h2>
                <p className="mt-3 text-gray-700 max-w-3xl leading-relaxed">
                  Proudly serving Morris, Sussex, Warren, Essex, Passaic, Union,
                  and Bergen County.
                </p>

                <div className="mt-6">
                  <a
                    href="/service-areas"
                    className="inline-flex items-center text-brand-blue font-semibold hover:underline"
                  >
                    View all towns we serve →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA - One strong call to action before footer */}
        <section className="mb-8">
          <div className="bg-gradient-to-r from-brand-blue to-brand-red rounded-3xl p-12 text-center text-white shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg sm:text-xl mb-8 text-blue-50 max-w-2xl mx-auto">
              Get a free estimate or schedule service today. Our team is standing by.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/contact"
                className="rounded-full bg-white px-8 py-4 text-brand-blue font-bold shadow-lg hover:bg-gray-50 text-lg"
              >
                Get Free Estimate
              </a>
              <a
                href="tel:+12017875657"
                className="rounded-full bg-white/10 px-8 py-4 text-white font-semibold ring-2 ring-white hover:bg-white/20 text-lg backdrop-blur"
              >
                Call (201) 787-5657
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}