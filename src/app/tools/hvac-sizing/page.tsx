import type { Metadata } from "next";
import Link from "next/link";
import SizingTool from "@/components/SizingTool";

export const metadata: Metadata = {
  title: "HVAC Sizing Calculator NJ | What Size Do I Need? | Air2Cool",
  description:
    "Free HVAC sizing estimator for NJ homeowners. Answer 5 questions and get an instant tonnage estimate for your home. Not a replacement for a Manual J — but a great starting point.",
  alternates: {
    canonical: "/tools/hvac-sizing",
  },
  openGraph: {
    title: "HVAC Sizing Calculator NJ | What Size Do I Need? | Air2Cool",
    description:
      "Free HVAC sizing estimator for NJ homeowners. Answer 5 questions and get an instant tonnage estimate for your home.",
    url: "/tools/hvac-sizing",
  },
};

export default function HvacSizingPage() {
  return (
    <main className="bg-white">
      {/* Breadcrumb */}
      <nav className="max-w-3xl mx-auto px-6 pt-6 pb-2" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
          <li><Link href="/" className="hover:text-blue-700 transition-colors">Home</Link></li>
          <li className="text-gray-300">/</li>
          <li><span className="text-gray-400">Tools</span></li>
          <li className="text-gray-300">/</li>
          <li className="text-gray-700 font-medium">HVAC Sizing Estimator</li>
        </ol>
      </nav>

      {/* Header */}
      <section className="max-w-3xl mx-auto px-6 pt-6 pb-8 md:pt-8 md:pb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          Free HVAC System Sizing Estimator for NJ Homes
        </h1>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          Getting the right size matters. An undersized system runs constantly and can&apos;t keep up. An
          oversized one short-cycles, wears out faster, and leaves your home humid in summer. Use this
          tool to get a ballpark — then call us for a free in-home assessment and proper Manual J
          calculation.
        </p>
      </section>

      {/* Tool */}
      <section className="max-w-3xl mx-auto px-6 pb-12 md:pb-16">
        <SizingTool compact={false} />
      </section>

      {/* Why sizing matters */}
      <section className="bg-gray-50 border-t border-gray-200 py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-5">
            Why system sizing matters
          </h2>
          <div className="text-base md:text-lg text-gray-700 leading-relaxed space-y-4">
            <p>
              HVAC capacity is measured in tons (1 ton = 12,000 BTU/hr). The old rule of thumb is 1 ton
              per 500–600 sq ft, but that ignores insulation quality, ceiling height, window area, local
              climate, and duct condition — all of which can shift the real number by 20–30%.
            </p>
            <p>
              An oversized system short-cycles: it blasts cold air, shuts off before removing humidity,
              and cycles on and off hundreds of times a day. An undersized system runs non-stop on the
              hottest days and never catches up. Both scenarios increase your energy bill and wear out
              equipment years early.
            </p>
            <p>
              Our technicians perform full Manual J load calculations as part of every free estimate — no
              cost, no obligation.
            </p>
          </div>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="tel:+12017875657"
              className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-7 py-4 rounded-full font-bold text-base md:text-lg shadow-lg transition-all text-center min-h-[52px]"
            >
              Call (201) 787-5657
            </a>
            <Link
              href="/contact"
              className="flex-1 flex items-center justify-center border-2 border-blue-700 text-blue-700 hover:bg-blue-50 px-7 py-4 rounded-full font-semibold text-base md:text-lg transition-all text-center min-h-[52px]"
            >
              Get free estimate →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
