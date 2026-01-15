import "./globals.css";
export { metadata, localBusinessSchema } from "./metadata";
import { Facebook, Instagram, Youtube, Star, Wrench } from "lucide-react";
import Script from "next/script";
import MobileMenu from "@/components/MobileMenu";
import { Analytics } from "@vercel/analytics/next"

const businessName = process.env.BUSINESS_NAME || "Air2Cool Heating & Cooling";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
              "description": "Family-owned HVAC contractor serving North New Jersey since 2008. Specializing in furnace repair, AC installation, heat pumps, and 24/7 emergency service.",
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
                "reviewCount": "150"
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
          className="hidden lg:block fixed left-6 top-[74px] z-[9999] rounded-2xl bg-gray-900/95 px-5 py-4 shadow-2xl ring-1 ring-white/10 backdrop-blur
                     hover:opacity-95 active:scale-95"
        >
          <img
            src="/Air2Cool-HeatingAC-&-Refrigeration-Logo-237w.webp"
            alt="Air2Cool Heating & Cooling"
            className="h-16 w-auto"
          />
        </a>

        <header className="sticky top-0 z-[1000]">
          {/* Top utility bar */}
          <div className="bg-gray-900 text-white text-sm">
            <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="opacity-90">Serving North New Jersey</span>
                <span className="opacity-30">|</span>
                <span className="opacity-90">24/7 Emergency Service</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="font-semibold text-white">5.0</span>
                  <span className="text-gray-300 text-xs">Google Reviews</span>
                </div>
                
                <a href="tel:+12017875657" className="font-bold hover:underline hidden sm:inline">
                  (201) 787-5657
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/98 backdrop-blur border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
              {/* Mobile Logo - Only shows on mobile */}
              <a href="/" className="lg:hidden">
                <img
                  src="/Air2Cool-HeatingAC-&-Refrigeration-Logo-237w.webp"
                  alt="Air2Cool Heating & Cooling"
                  className="h-12 w-auto"
                />
              </a>

              {/* Desktop spacer for floating logo */}
              <div className="hidden lg:block w-60" />

              {/* Desktop Navigation - Hidden on mobile */}
              <nav className="hidden lg:flex items-center gap-1">
                <a
                  href="/services"
                  className="px-4 py-2 rounded-lg text-sm font-semibold text-gray-700
                             hover:bg-gray-100 hover:text-brand-blue transition-colors"
                >
                  Services
                </a>

                {/* NEW - Troubleshooting Link */}
                <a
                  href="/troubleshooting"
                  className="px-4 py-2 rounded-lg text-sm font-semibold text-gray-700
                             hover:bg-gray-100 hover:text-orange-600 transition-colors
                             inline-flex items-center gap-1.5 group"
                >
                  <Wrench className="w-4 h-4 group-hover:text-orange-500 transition-colors" />
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
                  href="/financing"
                  className="px-4 py-2 rounded-lg text-sm font-semibold text-green-700 bg-green-50
                             hover:bg-green-100 transition-colors relative"
                >
                  Financing
                  <span className="absolute -top-1 -right-1 bg-green-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                    0% APR
                  </span>
                </a>
                
                <a
                  href="/contact"
                  className="px-4 py-2 rounded-lg text-sm font-semibold text-gray-700
                             hover:bg-gray-100 hover:text-brand-blue transition-colors"
                >
                  Contact
                </a>
              </nav>

              {/* Right side - Desktop CTA + Mobile Menu */}
              <div className="flex items-center gap-3">
                {/* Desktop CTA Button - Hidden on mobile */}
                <a
                  href="/contact"
                  className="hidden lg:block bg-brand-red text-white px-6 py-2.5 rounded-full font-bold 
                             hover:opacity-90 transition-opacity shadow-sm text-sm whitespace-nowrap"
                >
                  Schedule Service
                </a>

                {/* Mobile Menu - Only shows on mobile */}
                <MobileMenu />
              </div>
            </div>
          </div>
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

        {/* Tawk.to Live Chat Widget */}
        <Script
          id="tawk-to-chat"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                (function(){
                  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                  s1.async=true;
                  s1.src='https://embed.tawk.to/69582f5b562358197db48257/1je07hvlh';
                  s1.charset='UTF-8';
                  s1.setAttribute('crossorigin','*');
                  s0.parentNode.insertBefore(s1,s0);
                })();
              } catch(e) {
                // Suppress Tawk.to console errors
              }
            `,
          }}
        />
      </body>
    </html>
  );
}