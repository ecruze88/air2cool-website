import type { Metadata } from "next";
import { MapPin, Phone, Clock, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Service Areas | Air2Cool Heating & Cooling in North NJ",
  description:
    "Air2Cool serves Morris, Sussex, Warren, Essex, Passaic, Union, and Bergen County since 1998. Professional HVAC service across North New Jersey.",
};

const COUNTIES = [
  {
    name: "Morris County",
    towns: [
      "Morristown", "Dover", "Randolph", "Jefferson", "Rockaway", "Denville",
      "Boonton", "Parsippany-Troy Hills", "Hanover", "Madison", "Florham Park",
      "East Hanover", "Morris Plains", "Wharton", "Mount Olive", "Roxbury",
      "Chester", "Mendham", "Chatham", "Long Valley", "Butler"
    ]
  },
  {
    name: "Sussex County",
    towns: [
      "Newton", "Sparta", "Hopatcong", "Vernon", "Franklin", "Andover",
      "Hamburg", "Sussex", "Stanhope", "Ogdensburg", "Branchville"
    ]
  },
  {
    name: "Warren County",
    towns: [
      "Hackettstown", "Washington", "Phillipsburg", "Belvidere", "Oxford",
      "Blairstown", "Hope", "Lopatcong"
    ]
  },
  {
    name: "Essex County",
    towns: [
      "Newark", "East Orange", "West Orange", "Livingston", "Montclair",
      "Bloomfield", "Nutley", "Belleville", "Irvington", "Maplewood",
      "South Orange", "Millburn", "Verona", "Cedar Grove", "Essex Fells"
    ]
  },
  {
    name: "Passaic County",
    towns: [
      "Paterson", "Clifton", "Passaic", "Wayne", "West Milford", "Hawthorne",
      "Little Falls", "Woodland Park", "Ringwood", "Pompton Lakes", "Totowa",
      "Haledon", "Prospect Park", "Wanaque"
    ]
  },
  {
    name: "Union County",
    towns: [
      "Elizabeth", "Union", "Summit", "Westfield", "Plainfield", "Linden",
      "Rahway", "Roselle", "Cranford", "Berkeley Heights", "New Providence",
      "Springfield", "Hillside", "Kenilworth", "Clark"
    ]
  },
  {
    name: "Bergen County",
    towns: [
      "Hackensack", "Paramus", "Fair Lawn", "Fort Lee", "Englewood",
      "Ridgewood", "Mahwah", "Ramsey", "Wyckoff", "Glen Rock", "Closter",
      "River Edge", "Westwood", "Tenafly", "Bergenfield", "Dumont"
    ]
  }
];

function toSlug(town: string) {
  return town.toLowerCase().replace(/\s+/g, "-");
}

export default function ServiceAreasPage() {
  return (
    <main className="bg-white">
      {/* Hero Section - MOBILE OPTIMIZED */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
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
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold mb-3">
              <MapPin className="w-3 h-3 md:w-4 md:h-4" />
              SERVICE AREAS
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 md:mb-6">
              Serving North New Jersey Since 1998
            </h1>

            <p className="text-base md:text-xl text-gray-200 leading-relaxed mb-6 md:mb-8">
              Professional HVAC service across Morris, Sussex, Warren, Essex, Passaic, Union, and Bergen County.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-red-600 hover:bg-red-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-all shadow-lg text-center"
              >
                Request Service
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

      {/* Quick Stats - MOBILE OPTIMIZED */}
      <section className="py-8 md:py-10 bg-blue-50 border-y border-blue-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-4 md:gap-8 text-center">
            <div>
              <div className="text-2xl md:text-4xl font-extrabold text-blue-900 mb-1 md:mb-2">7</div>
              <div className="text-xs md:text-base text-gray-700 font-medium">Counties</div>
            </div>
            <div>
              <div className="text-2xl md:text-4xl font-extrabold text-blue-900 mb-1 md:mb-2">100+</div>
              <div className="text-xs md:text-base text-gray-700 font-medium">Towns</div>
            </div>
            <div>
              <div className="text-2xl md:text-4xl font-extrabold text-blue-900 mb-1 md:mb-2">26+</div>
              <div className="text-xs md:text-base text-gray-700 font-medium">Years</div>
            </div>
          </div>
        </div>
      </section>

      {/* Counties Grid - MOBILE OPTIMIZED */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-2 md:mb-4">
              Counties We Serve
            </h2>
            <p className="text-sm md:text-lg text-gray-600">
              7 counties across North New Jersey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {COUNTIES.map((county) => (
              <Link
                key={county.name}
                href={`/service-areas/${toSlug(county.name)}`}
                className="block bg-white rounded-xl md:rounded-2xl border-2 border-gray-200 p-4 md:p-6 hover:border-blue-500 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                  </div>
                  <h3 className="text-base md:text-xl font-bold text-blue-700">
                    {county.name}
                  </h3>
                </div>

                <ul className="space-y-1.5 md:space-y-2">
                  {/* Show fewer towns on mobile */}
                  {county.towns.slice(0, 5).map((town) => (
                    <li key={town} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-blue-600 shrink-0" />
                      <span className="text-xs md:text-sm">{town}</span>
                    </li>
                  ))}
                  {county.towns.length > 5 && (
                    <li className="text-xs md:text-sm text-blue-600 font-medium pt-1 md:pt-2">
                      + {county.towns.length - 5} more towns
                    </li>
                  )}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Full Town List - MOBILE OPTIMIZED */}
      <section className="py-10 md:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-2 md:mb-4">
              Complete Service Area
            </h2>
            <p className="text-sm md:text-lg text-gray-600">
              Don't see your town? Call us — we likely serve your area!
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
            {COUNTIES.flatMap(county => county.towns)
              .sort()
              .map((town) => (
                <Link
                  key={town}
                  href={`/service-areas/${toSlug(town)}`}
                  className="bg-white rounded-lg px-3 py-2 md:px-4 md:py-3 border border-gray-200 flex items-center gap-1.5 md:gap-2 hover:border-blue-400 transition-colors"
                >
                  <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-600 shrink-0" />
                  <span className="text-xs md:text-sm text-blue-700 hover:underline">{town}</span>
                </Link>
              ))}
          </div>

          <div className="mt-6 md:mt-8 text-center">
            <p className="text-sm md:text-base text-gray-600">
              <strong>And many more towns!</strong> Call to confirm.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us - MOBILE OPTIMIZED */}
      <section className="py-10 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-6 md:mb-10 text-center">
            Why North Jersey Trusts Air2Cool
          </h2>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Clock className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
              </div>
              <h3 className="text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                Fast Response
              </h3>
              <p className="text-xs md:text-base text-gray-600">
                24/7 emergency service. HVAC problems can't wait.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <MapPin className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
              </div>
              <h3 className="text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                Local & Family Owned
              </h3>
              <p className="text-xs md:text-base text-gray-600">
                Based in Wharton, serving neighbors since 1998.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-red-600" />
              </div>
              <h3 className="text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                Licensed & Insured
              </h3>
              <p className="text-xs md:text-base text-gray-600">
                Master HVAC technicians, fully licensed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - MOBILE OPTIMIZED */}
      <section className="py-10 md:py-12 bg-gradient-to-r from-blue-700 to-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-3 md:mb-4">
            Need Fast, Friendly Service?
          </h2>
          <p className="text-base md:text-xl text-blue-100 mb-2">
            Serving North Jersey. Quick response. Honest pricing.
          </p>
          <p className="text-sm md:text-lg text-blue-200 mb-6 md:mb-8">
            Don't see your town? Call us!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-700 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg hover:bg-gray-50 transition w-full sm:w-auto text-center"
            >
              Request Estimate
            </Link>
            <a
              href="tel:+12017875657"
              className="bg-white/10 backdrop-blur text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg border-2 border-white hover:bg-white/20 transition inline-flex items-center justify-center gap-2 w-full sm:w-auto"
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