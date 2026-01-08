import type { Metadata } from "next";
import { Flame, Snowflake, Wind, Wrench, Zap, Droplets, Waves, Home } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HVAC Services in North NJ | Air2Cool Heating & Cooling",
  description:
    "Complete HVAC services in North NJ: heating & cooling repair, furnace & boiler installation, AC & heat pump installation, mini splits, maintenance. Licensed with 26+ years experience. Call (201) 787-5657.",
};

const SERVICES = [
  // REPAIRS
  {
    icon: Flame,
    title: "Heating Repair",
    description: "Fast furnace & boiler repairs. Hydronic, steam, NTI—we fix all types. 24/7 emergency service available.",
    href: "/services/heating-repair",
    color: "red",
    category: "repair",
  },
  {
    icon: Snowflake,
    title: "Cooling Repair",
    description: "Quick AC repairs and diagnostics. Heat pumps and mini splits too. Same-day service to beat the heat.",
    href: "/services/ac-repair",
    color: "blue",
    category: "repair",
  },
  {
    icon: Wind,
    title: "Air Filtration",
    description: "Breathe cleaner air with professional filtration systems. Protect your family's health year-round.",
    href: "/services/air-filtration",
    color: "green",
    category: "repair",
  },
  {
    icon: Wrench,
    title: "Preventative Maintenance",
    description: "Keep systems running smoothly with regular tune-ups. Extend equipment life and prevent costly repairs.",
    href: "/services/preventative-maintenance",
    color: "orange",
    category: "repair",
  },
  // INSTALLATIONS
  {
    icon: Waves,
    title: "Heating Installation",
    description: "New furnaces & boilers professionally installed. Hydronic, steam, NTI systems. Free house cleaning included!",
    href: "/services/heating-installation",
    color: "red",
    category: "installation",
  },
  {
    icon: Snowflake,
    title: "Cooling Installation",
    description: "New AC, heat pumps & mini splits. Expert installation with proper sizing. Free house cleaning included!",
    href: "/services/cooling-installation",
    color: "cyan",
    category: "installation",
  },
  {
    icon: Zap,
    title: "Complete HVAC Systems",
    description: "Full heating + cooling system replacement. New construction. Whole-home comfort solutions.",
    href: "/services/hvac-installation",
    color: "purple",
    category: "installation",
  },
  {
    icon: Droplets,
    title: "Whole-Home Humidifier",
    description: "Eliminate dry winter air. Aprilaire 865 ductless steam humidifier for healthier, more comfortable homes.",
    href: "/services/humidifier",
    color: "cyan",
    category: "installation",
  },
  {
    icon: Home,
    title: "Commercial Refrigeration",
    description: "Expert commercial refrigeration service and repair for businesses across North NJ.",
    href: "/services/commercial-refrigeration",
    color: "indigo",
    category: "installation",
  },
];

const COLOR_CLASSES = {
  red: "from-red-500 to-red-600 hover:from-red-600 hover:to-red-700",
  blue: "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
  green: "from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
  purple: "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
  orange: "from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700",
  cyan: "from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700",
  amber: "from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700",
  indigo: "from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700",
};

export default function ServicesPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-4xl">
            <div className="inline-block mb-4">
              <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
                PROFESSIONAL HVAC SERVICES
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Heating & Cooling Services in{" "}
              <span className="text-blue-400">North New Jersey</span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mb-8">
              From repairs to complete system replacements, Air2Cool delivers professional HVAC service with honest pricing and expert installation. 26+ years of keeping North Jersey homes comfortable.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg"
              >
                Get Free Estimate
              </Link>
              <a
                href="tel:+12017875657"
                className="bg-white/10 hover:bg-white/20 backdrop-blur text-white px-8 py-4 rounded-full font-semibold text-lg transition-all border border-white/20"
              >
                Call (201) 787-5657
              </a>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-16 fill-white"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Complete HVAC Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From emergency repairs to new installations, we do it all. Serving Morris, Sussex, Warren, Essex, Passaic, Union, and Bergen County.
            </p>
          </div>

          {/* REPAIRS SECTION */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              <Wrench className="inline-block w-6 h-6 mr-2 text-gray-700" />
              Repair Services
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICES.filter(s => s.category === 'repair').map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="group relative rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${
                        COLOR_CLASSES[service.color as keyof typeof COLOR_CLASSES]
                      } text-white mb-4 shadow-lg`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <div className="flex items-center text-blue-700 font-semibold text-sm group-hover:gap-2 transition-all">
                      Learn More
                      <span className="inline-block transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </div>

                    <div className="absolute inset-0 rounded-2xl ring-2 ring-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* INSTALLATIONS SECTION */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              <Zap className="inline-block w-6 h-6 mr-2 text-gray-700" />
              Installation Services
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {SERVICES.filter(s => s.category === 'installation').map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="group relative rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${
                        COLOR_CLASSES[service.color as keyof typeof COLOR_CLASSES]
                      } text-white mb-4 shadow-lg`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <div className="flex items-center text-blue-700 font-semibold text-sm group-hover:gap-2 transition-all">
                      Learn More
                      <span className="inline-block transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </div>

                    <div className="absolute inset-0 rounded-2xl ring-2 ring-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Why Choose Air2Cool?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-700 mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Licensed & Insured</h3>
              <p className="text-gray-600 text-sm">
                Master HVACR technicians with full licensing and insurance
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-700 mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">24/7 Emergency Service</h3>
              <p className="text-gray-600 text-sm">
                Available any time, day or night, for urgent HVAC needs
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-700 mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Transparent Pricing</h3>
              <p className="text-gray-600 text-sm">
                Honest quotes with no hidden fees or surprise charges
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-purple-700 mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">26+ Years Experience</h3>
              <p className="text-gray-600 text-sm">
                Family owned and operated since 1998
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-red-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Need HVAC Service Today?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free estimate or schedule emergency service. Our team is ready to help.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-700 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-50 transition"
            >
              Get Free Estimate
            </Link>
            <a
              href="tel:+12017875657"
              className="bg-white/10 backdrop-blur text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white hover:bg-white/20 transition"
            >
              Call (201) 787-5657
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}