import type { Metadata } from "next";
import { Wrench, CheckCircle } from "lucide-react";
import MaintenanceContractForm from "./MaintenanceContractForm";

export const metadata: Metadata = {
  title: "HVAC Maintenance Plans Morris County NJ | Air2Cool",
  description:
    "Protect your HVAC system year-round with Air2Cool's maintenance plan. 20% off parts & repairs, priority service, bi-annual tune-ups. Serving Morris County & North NJ. (201) 787-5657.",
  alternates: {
    canonical: "/maintenance-contract",
  },
  openGraph: {
    title: "HVAC Maintenance Plans Morris County NJ | Air2Cool",
    description:
      "Protect your HVAC system year-round with Air2Cool's maintenance plan. 20% off parts & repairs, priority service, bi-annual tune-ups. Morris County & North NJ.",
    url: "/maintenance-contract",
  },
};

export default function MaintenanceContractPage() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "HVAC Preventative Maintenance Plan",
            "provider": {
              "@type": "HVACBusiness",
              "name": "Air2Cool Heating & Cooling",
              "telephone": "+12017875657",
              "url": "https://www.air2cool.com"
            },
            "areaServed": "Morris County, NJ",
            "description": "Bi-annual HVAC tune-ups, 20% discount on parts and repairs, priority scheduling for members across North New Jersey.",
            "url": "https://www.air2cool.com/maintenance-contract"
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-700 to-amber-600 text-white py-10 md:py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Wrench className="w-4 h-4" />
            MAINTENANCE CONTRACT
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
            HVAC Maintenance Plans in North Jersey
          </h1>
          <p className="text-base md:text-xl text-orange-100">
            Protect your investment and keep your HVAC system running smoothly year-round
          </p>
        </div>
      </section>

      {/* Benefits Banner */}
      <section className="py-6 md:py-8 bg-orange-50 border-y border-orange-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 text-center">
            <div>
              <div className="text-xl md:text-2xl font-bold text-orange-900">20% Off Parts</div>
              <div className="text-sm text-gray-700">Member discount</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-bold text-orange-900">Priority Service</div>
              <div className="text-sm text-gray-700">Skip the line</div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="text-xl md:text-2xl font-bold text-orange-900">Expert Care</div>
              <div className="text-sm text-gray-700">Licensed technicians</div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro + Form */}
      <section className="py-10 md:py-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Intro paragraph above the form */}
          <div className="mb-8 md:mb-10 bg-blue-50 border border-blue-200 rounded-2xl p-5 md:p-7">
            <p className="text-base md:text-lg text-gray-800 leading-relaxed">
              Air2Cool&apos;s preventative maintenance plan keeps your heating and cooling system running at peak
              performance — and saves you money when something does go wrong. Members get{" "}
              <strong>20% off all parts and repairs</strong>, priority scheduling, and bi-annual tune-ups by
              licensed master technicians. Call for pricing:{" "}
              <a href="tel:+12017875657" className="text-blue-700 font-semibold hover:underline">
                (201) 787-5657
              </a>
            </p>
          </div>

          <MaintenanceContractForm />
        </div>
      </section>

      {/* Maintenance Plan Benefits */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6 md:mb-8 text-center">
            Your Maintenance Plan Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {[
              "Annual professional inspection",
              "Comprehensive system tune-up",
              "Safety checks and testing",
              "Performance optimization",
              "Early problem detection",
              "Extended equipment lifespan",
              "20% discount on all parts",
              "20% discount on repairs",
              "Priority scheduling",
              "Peace of mind protection",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                <span className="text-base text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
