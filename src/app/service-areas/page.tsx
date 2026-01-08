import type { Metadata } from "next";
import { MapPin, Phone, Clock, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Service Areas | Air2Cool Heating & Cooling in North NJ",
  description:
    "Air2Cool serves Morris, Sussex, Warren, Essex, Passaic, Union, and Bergen County since 2008. Professional HVAC service across North New Jersey.",
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

export default function ServiceAreasPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-linear-to-r from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
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
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-4">
              <MapPin className="w-4 h-4" />
              SERVICE AREAS
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Serving North New Jersey Since 1998
            </h1>

            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Professional HVAC service across Morris, Sussex, Warren, Essex, Passaic, Union, and Bergen County. We're based in Wharton and come to you anywhere in North Jersey.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg"
              >
                Request Service
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

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-blue-50 border-y border-blue-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-extrabold text-blue-900 mb-2">7</div>
              <div className="text-gray-700 font-medium">Counties Served</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-blue-900 mb-2">100+</div>
              <div className="text-gray-700 font-medium">Towns & Cities</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-blue-900 mb-2">20+</div>
              <div className="text-gray-700 font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Counties Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Counties We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive HVAC service across seven counties in North New Jersey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COUNTIES.map((county, idx) => (
              <div
                key={county.name}
                className="bg-white rounded-2xl border-2 border-gray-200 p-6 hover:border-blue-500 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {county.name}
                  </h3>
                </div>

                <ul className="space-y-2">
                  {county.towns.slice(0, 8).map((town) => (
                    <li key={town} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                      <span className="text-sm">{town}</span>
                    </li>
                  ))}
                  {county.towns.length > 8 && (
                    <li className="text-sm text-blue-600 font-medium pt-2">
                      + {county.towns.length - 8} more towns
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Town List */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Complete Service Area List
            </h2>
            <p className="text-lg text-gray-600">
              Don't see your town? Give us a call — we likely serve your area!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {COUNTIES.flatMap(county => county.towns)
              .sort()
              .map((town) => (
                <div
                  key={town}
                  className="bg-white rounded-lg px-4 py-3 border border-gray-200 flex items-center gap-2"
                >
                  <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
                  <span className="text-gray-800">{town}</span>
                </div>
              ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              <strong>And many more towns!</strong> Call to confirm we serve your area.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center">
            Why North Jersey Trusts Air2Cool
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Fast Response Times
              </h3>
              <p className="text-gray-600">
                24/7 emergency service available. We understand HVAC problems can't wait.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Local & Family Owned
              </h3>
              <p className="text-gray-600">
                Based in Wharton, serving our neighbors across North Jersey since 2008.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Licensed & Insured
              </h3>
              <p className="text-gray-600">
                Master HVAC technicians with full licensing, bonding, and insurance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-r from-blue-700 to-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Need Fast, Friendly Service?
          </h2>
          <p className="text-xl text-blue-100 mb-2">
            Serving North Jersey. Quick response. Honest pricing.
          </p>
          <p className="text-lg text-blue-200 mb-8">
            Don't see your town listed? Call us — we likely serve your area!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-700 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-50 transition"
            >
              Request Estimate
            </Link>
            <a
              href="tel:+12017875657"
              className="bg-white/10 backdrop-blur text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white hover:bg-white/20 transition inline-flex items-center gap-2"
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