import type { Metadata } from "next";
import { Wrench, CheckCircle } from "lucide-react";
import MaintenanceContractForm from "./MaintenanceContractForm";
import {
  COMPANY,
  COMMERCIAL_MAINTENANCE_PLAN,
  RESIDENTIAL_MAINTENANCE_PLAN,
} from "@/config/company";

export const metadata: Metadata = {
  title: "HVAC Maintenance Plans Morris County NJ | Air2Cool",
  description:
    `Explore residential and commercial HVAC maintenance-plan options from Air2Cool. Residential plans include two seasonal visits per covered system, priority service, and 20% off eligible repairs and replacement parts. Call ${COMPANY.phone.display}.`,
  alternates: {
    canonical: "/maintenance-contract",
  },
  openGraph: {
    title: "HVAC Maintenance Plans Morris County NJ | Air2Cool",
    description:
      "Explore Air2Cool residential and customized commercial HVAC maintenance-plan options in Morris County and North Jersey.",
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
              "name": COMPANY.name,
              "telephone": COMPANY.phone.e164,
              "url": "https://www.air2cool.com"
            },
            "areaServed": "Morris County, NJ",
            "description": "Residential HVAC maintenance plans include two seasonal visits per covered system, priority service, and 20% off eligible repairs and replacement parts. Commercial agreements are customized by facility and equipment needs.",
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
              <div className="text-xl md:text-2xl font-bold text-orange-900">Two Seasonal Visits</div>
              <div className="text-sm text-gray-700">Per covered residential system</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-bold text-orange-900">Priority Service</div>
              <div className="text-sm text-gray-700">Residential plan benefit</div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="text-xl md:text-2xl font-bold text-orange-900">20% Off</div>
              <div className="text-sm text-gray-700">Eligible residential repairs and parts</div>
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
              Air2Cool&apos;s residential maintenance plan includes two seasonal maintenance visits per covered HVAC system per year, priority service, <strong>20% off eligible repairs</strong>, and <strong>20% off eligible replacement parts</strong>. Commercial plans are customized for the facility and equipment. Call for plan options:{" "}
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
            Residential Maintenance Plan Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {RESIDENTIAL_MAINTENANCE_PLAN.benefits.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                <span className="text-base text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-5 md:p-7">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Commercial Maintenance Agreements</h3>
            <p className="text-gray-700 leading-relaxed">{COMMERCIAL_MAINTENANCE_PLAN.description}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
