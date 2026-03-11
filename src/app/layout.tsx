import "./globals.css";
export { metadata, localBusinessSchema } from "./metadata";
import { Facebook, Instagram, Youtube, Star } from "lucide-react";
import Script from "next/script";
import MobileMenu from "@/components/MobileMenu";
import { Analytics } from "@vercel/analytics/next";
import StickyCallButton from "@/components/StickyCallButton";
import Image from "next/image";
import ScrollToTop from "@/components/ScrollToTop";

const businessName = process.env.BUSINESS_NAME || "Air2Cool Heating & Cooling";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
})
 {
  return (
    <html lang="en">
      <head>
        {/* Google Ads Conversion Tracking */}
        <Script
          id="google-ads-gtag"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-698757000"
        />
        <Script
          id="google-ads-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-698757000');
              gtag('config', 'AW-698757000/oH6vCLCBwdobEIjfmM0C', {
                'phone_conversion_number': '201-787-5657'
              });
            `,
          }}
        />

        {/* LocalBusiness Schema */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HVACBusiness",
              "@id": "https://www.air2cool.com/#organization",
              "name": "Air2Cool Heating & Cooling",
              "legalName": "Air2Cool Heating/AC & Refrigeration",
              "url": "https://www.air2cool.com",
              "logo": "https://www.air2cool.com/Air2Cool-HeatingAC-&-Refrigeration-Logo-237w.webp",
              "image": "https://www.air2cool.com/og-image.jpg",
              "description": "Family-owned HVAC contractor serving North New Jersey since 1998. Specializing in furnace repair, AC installation, heat pumps, and 24/7 emergency service.",
              "telephone": "+1-201-787-5657",
              "email": "air2cool1@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Wharton",
                "addressRegion": "NJ",
                "postalCode": "07885",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "40.8932",
                "longitude": "-74.5815"
              },
              "areaServed": [
                { "@type": "AdministrativeArea", "name": "Morris County" },
                { "@type": "AdministrativeArea", "name": "Sussex County" },
                { "@type": "AdministrativeArea", "name": "Warren County" },
                { "@type": "AdministrativeArea", "name": "Essex County" },
                { "@type": "AdministrativeArea", "name": "Passaic County" },
                { "@type": "AdministrativeArea", "name": "Union County" },
                { "@type": "AdministrativeArea", "name": "Bergen County" }
              ],
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "07:00",
                  "closes": "21:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Saturday", "Sunday"],
                  "opens": "00:00",
                  "closes": "23:59"
                }
              ],
              "priceRange": "$$",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "250"
              },
              "sameAs": [
                "https://www.facebook.com/profile.php?id=100063904906666",
                "https://www.instagram.com/air2cool7/",
                "https://www.youtube.com/@air2cool831",
                "https://www.tiktok.com/@air2cool.com0"
              ]
            })
          }}
        />
      </head>
      <body className="text-gray-900 min-h-screen" suppressHydrationWarning>
        {/* FLOATING LOGO (desktop only - hidden on mobile) */}
        <a
          href="/"
          aria-label="Go to homepage"
          className="hidden xl:block fixed left-6 top-35 z-9999"
        >
          <img
            src="/air2cool-logo-transparent.png"
            alt="Air2Cool Heating & Cooling"
            className="w-63 h-auto 2xl:w-108"
          />
        </a>
        

        <header className="sticky top-0 z-[1000] bg-white">

          {/* MOBILE: Two-row layout */}
          <div className="xl:hidden">
            {/* Row 1 — Logo (white, centered) */}
            <div className="bg-white flex justify-center items-center py-1 border-b border-gray-100">
              <a href="/">
                <Image
                  src="/air2cool-logo-600x200 (1).png"
                  alt="Air2Cool"
                  width={300}
                  height={100}
                  priority
                  style={{ objectFit: "contain" }}
                />
              </a>
            </div>

            {/* Row 2 — Menu bar (blue) */}
            <div className="bg-brand-red flex items-center justify-between px-4 py-1">
              <div className="flex items-center gap-2">
                <MobileMenu />
                <span className="text-white font-bold uppercase text-sm tracking-wide">Menu</span>
              </div>
              <a href="tel:+12017875657" className="text-white font-bold text-sm">
                (201) 787-5657
              </a>
            </div>
          </div>

          {/* DESKTOP: Single-row nav */}
          <div className="hidden xl:block bg-white/98 backdrop-blur border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
              {/* Spacer for floating logo */}
              <div className="w-60" />

              {/* Desktop Navigation */}
              <nav className="flex items-center gap-1">
                <a
                  href="/services"
                  className="px-4 py-2 rounded-lg text-sm font-semibold text-gray-700
                             hover:bg-gray-100 hover:text-brand-blue transition-colors"
                >
                  Services
                </a>

                <a
                  href="/troubleshooting"
                  className="px-4 py-2 rounded-lg text-sm font-semibold text-gray-700
                             hover:bg-gray-100 hover:text-orange-600 transition-colors"
                >
                  Troubleshooting
                </a>

                <a
                  href="/service-areas"
                  className="px-4 py-2 rounded-lg text-sm font-semibold text-gray-700
                             hover:bg-gray-100 hover:text-brand-blue transition-colors"
                >
                  Areas
                </a>

                <a
                  href="/about"
                  className="px-4 py-2 rounded-lg text-sm font-semibold text-gray-700
                             hover:bg-gray-100 hover:text-brand-blue transition-colors"
                >
                  About
                </a>

                <a
                  href="/reviews"
                  className="px-4 py-2 rounded-lg text-sm font-semibold text-gray-700
                             hover:bg-gray-100 hover:text-brand-blue transition-colors"
                >
                  Reviews
                </a>

                <a
                  href="/faq"
                  className="px-4 py-2 rounded-lg text-sm font-semibold text-gray-700
                             hover:bg-gray-100 hover:text-brand-blue transition-colors"
                >
                  FAQ
                </a>

                <a
                  href="/blog"
                  className="px-4 py-2 rounded-lg text-sm font-semibold text-gray-700
                             hover:bg-gray-100 hover:text-brand-blue transition-colors"
                >
                  Blog
                </a>

                <a
                  href="/financing"
                  className="px-4 py-2 rounded-lg text-sm font-semibold text-green-700 bg-green-50
                             hover:bg-green-100 transition-colors relative"
                >
                  Financing
                  <span className="absolute -top-1 -right-1 bg-green-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                    0% APR
                  </span>
                </a>
              </nav>

              {/* Right side */}
              <div className="flex items-center gap-3">
                <a
                  href="tel:+12017875657"
                  className="text-sm font-bold text-gray-700 hover:text-brand-blue transition-colors whitespace-nowrap"
                >
                  (201) 787-5657
                </a>
                <a
                  href="/contact"
                  className="bg-brand-red text-white px-6 py-2.5 rounded-full font-bold
                             hover:opacity-90 transition-opacity shadow-sm text-sm whitespace-nowrap"
                >
                  Schedule Service
                </a>
              </div>
            </div>
          </div>
                 {/* STICKY GOOGLE REVIEWS BANNER */}
        <section id="sticky-reviews-banner" className="sticky top-[60px] md:top-[73px] z-[999] bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 py-3 md:py-4 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
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
              <div className="hidden md:flex md:flex-row items-center justify-center gap-5 text-white">
                {/* Star Rating with Google Logo on LEFT side */}
                <div className="flex items-center gap-4">
                  {/* Google Logo on the left */}
                  <svg className="w-10 h-10 shrink-0" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  
                  {/* Star rating section on the right */}
                  <div className="flex flex-col items-center">
                    <div className="flex gap-0.5 mb-1.5">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-6 h-6 fill-yellow-300"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-4xl font-extrabold mb-1">5.0</p>
                    <p className="text-xs font-semibold opacity-90">PERFECT RATING</p>
                  </div>
                </div>

                <div className="w-px h-16 bg-white/30"></div>

                <div className="text-center">
                  <p className="text-3xl font-extrabold mb-1.5">250+</p>
                  <p className="text-sm font-semibold">Google Reviews</p>
                  <p className="text-xs opacity-90 mt-1">Real customers, real results</p>
                </div>

                <div className="w-px h-16 bg-white/30"></div>

                <div className="text-center max-w-xs">
                  <p className="text-lg font-bold mb-1">Most Trusted HVAC</p>
                  <p className="text-sm font-semibold mb-1.5">in North New Jersey</p>
                  <a
                    href="/reviews"
                    className="inline-block text-xs font-semibold bg-white text-blue-600 px-4 py-1.5 rounded-full hover:bg-blue-50 transition-all hover:scale-105 shadow-lg"
                  >
                    Read Our Reviews →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        </header>


        <main>{children}</main>
        

        <footer className="bg-gray-900 text-gray-300 mt-24">
          <div className="max-w-7xl mx-auto px-6 py-14">
            <div className="grid md:grid-cols-3 gap-10 items-start">
              
              <div>
                <img
                  src="/Air2Cool-HeatingAC-&-Refrigeration-Logo-237w.webp"
                  alt="Air2Cool Heating & Cooling"
                  className="h-14 w-auto mb-4"
                />
                <p className="text-sm text-gray-400 max-w-xs">
                  Family owned HVAC contractor proudly serving North New Jersey with
                  honest pricing and fast, reliable service.
                </p>
                
                <div className="mt-4 flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg w-fit">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="font-semibold text-white text-sm">5.0</span>
                  <span className="text-gray-400 text-xs">on Google</span>
                </div>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/services" className="hover:text-white transition">Services</a></li>
                  <li><a href="/troubleshooting" className="hover:text-white transition">Troubleshooting Guide</a></li>
                  <li><a href="/financing" className="hover:text-white transition">Financing Options</a></li>
                  <li><a href="/service-areas" className="hover:text-white transition">Service Areas</a></li>
                  <li><a href="/about" className="hover:text-white transition">About Us</a></li>
                  <li><a href="/reviews" className="hover:text-white transition">Reviews</a></li>
                  <li><a href="/faq" className="hover:text-white transition">FAQ</a></li>
                  <li><a href="/blog" className="hover:text-white transition">Blog</a></li>
                  <li><a href="/contact" className="hover:text-white transition">Contact Us</a></li>
                  <li><a href="/maintenance-contract" className="hover:text-white transition">Maintenance Plans</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.facebook.com/profile.php?id=100063904906666"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-brand-red transition"
                  >
                    <Facebook className="h-5 w-5 text-white" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@air2cool.com0"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Air2Cool TikTok"
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-black transition"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white">
                      <path d="M12.525 2h3.016c.117 1.098.486 2.16 1.087 3.04.6.88 1.404 1.53 2.372 1.86v3.1c-1.68-.055-3.25-.62-4.46-1.53v6.1c0 3.53-2.86 6.4-6.4 6.4-3.54 0-6.4-2.87-6.4-6.4s2.86-6.4 6.4-6.4c.36 0 .71.03 1.06.1v3.2a3.3 3.3 0 0 0-1.06-.18 3.1 3.1 0 1 0 3.1 3.1V2z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/air2cool7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-brand-red transition"
                  >
                    <Instagram className="h-5 w-5 text-white" />
                  </a>
                  <a
                    href="https://www.youtube.com/@air2cool831"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-brand-red transition"
                  >
                    <Youtube className="h-5 w-5 text-white" />
                  </a>
                </div>

                <div className="mt-6">
                  <h4 className="text-white font-semibold mb-2">Contact</h4>
                  <a href="tel:+12017875657" className="text-sm hover:text-white transition block">
                    (201) 787-5657
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 my-10" />

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
              <p>
                © {new Date().getFullYear()} Air2Cool Heating & Cooling. All rights reserved.
              </p>
              <p>Serving North New Jersey • 24/7 Emergency Service</p>
            </div>
          </div>
        </footer>

        {/* Tawk.to Live Chat Widget — temporarily disabled */}
        {/* <Script id="tawk-to-chat" strategy="lazyOnload" dangerouslySetInnerHTML={{ __html: `...` }} /> */}
        <ScrollToTop />
        <Analytics />
        <StickyCallButton />
      </body>
    </html>
  );
}
