import type { Metadata } from "next";
import { Star, Phone } from "lucide-react";
import Link from "next/link";
import ReviewsCarousel from "@/components/ReviewsCarousel";

export const metadata: Metadata = {
  title: "Reviews | Air2Cool Heating & Cooling",
  description:
    "See what customers say about Air2Cool Heating & Cooling across North New Jersey. Read real 5-star reviews from homeowners in Morris County and beyond.",
};

export default function ReviewsPage() {
  return (
    <main className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-16">
        {/* Header - MOBILE OPTIMIZED */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
            Customer Reviews
          </h1>
          <p className="mt-3 md:mt-4 text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
            Real feedback from homeowners across North New Jersey who trust Air2Cool.
          </p>

          {/* Google Rating Badge - MOBILE OPTIMIZED */}
          <div className="mt-6 inline-flex items-center gap-2 md:gap-3 bg-gray-50 px-5 md:px-8 py-4 md:py-5 rounded-2xl border border-gray-200">
            <div className="text-4xl md:text-5xl font-bold text-gray-900">5.0</div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-0.5 md:gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-6 md:h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-xs md:text-sm font-medium text-gray-600">250+ Reviews</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Carousel */}
        <ReviewsCarousel />

        {/* CTA Section - MOBILE OPTIMIZED */}
        <div className="mt-10 md:mt-16 rounded-2xl md:rounded-3xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-700 to-red-600 p-px">
            <div className="bg-white p-6 md:p-10">
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2 md:mb-3">
                  Had a Great Experience?
                </h2>
                <p className="text-sm md:text-base text-gray-600 mb-5 md:mb-6">
                  We'd love to hear about it! Your feedback helps us improve and helps your neighbors find reliable HVAC service.
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 justify-center">
                  <a
                    href="https://g.page/r/CXTBM21G_0CKEAI/review"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-5 md:px-6 py-3 rounded-full font-bold ring-2 ring-gray-200 hover:ring-blue-700 transition-all text-sm md:text-base"
                  >
                    <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                    </svg>
                    Leave a Google Review
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center bg-red-600 text-white px-5 md:px-6 py-3 rounded-full font-bold shadow hover:bg-red-700 transition text-sm md:text-base"
                  >
                    Request Service
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges - MOBILE OPTIMIZED */}
        <div className="mt-10 md:mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 md:gap-8 px-5 md:px-8 py-4 md:py-6 bg-gray-50 rounded-2xl border border-gray-200">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-extrabold text-gray-900">26+</div>
              <div className="text-xs md:text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="h-8 md:h-12 w-px bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-extrabold text-gray-900">24/7</div>
              <div className="text-xs md:text-sm text-gray-600">Emergency Service</div>
            </div>
            <div className="h-8 md:h-12 w-px bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-extrabold text-gray-900">100%</div>
              <div className="text-xs md:text-sm text-gray-600">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-blue-700 to-cyan-600 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-3 md:mb-4">
            Ready to Experience the Air2Cool Difference?
          </h2>
          <p className="text-base md:text-lg text-blue-100 mb-6 md:mb-8">
            Join hundreds of satisfied North Jersey homeowners. Get a free estimate or call us now for same-day service.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-blue-700 px-7 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-50 transition-all w-full sm:w-auto text-center min-h-[52px] flex items-center justify-center"
            >
              Get Free Estimate
            </Link>
            <a
              href="tel:+12017875657"
              className="bg-white/10 border-2 border-white/40 text-white px-7 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all w-full sm:w-auto min-h-[52px] inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" /> Call (201) 787-5657
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}