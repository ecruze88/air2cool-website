"use client";

import { Menu, X, Phone, Star } from "lucide-react";

export default function MobileMenu() {
  const openMenu = () => {
    const menu = document.getElementById('mobile-menu-overlay');
    if (menu) {
      menu.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.height = '100vh';
    }

    // Hide floating logo
    const floatingLogo = document.querySelector('a[aria-label="Go to homepage"]');
    if (floatingLogo) {
      (floatingLogo as HTMLElement).style.setProperty('display', 'none', 'important');
    }

    // Hide sticky reviews banner (shown inside menu overlay instead)
    const reviewsBanner = document.getElementById('sticky-reviews-banner');
    if (reviewsBanner) {
      reviewsBanner.style.setProperty('display', 'none', 'important');
    }

    // AGGRESSIVE: Hide ALL Tawk.to elements with multiple selectors
    const tawkSelectors = [
      '.tawk-min-container',
      '#tawk-bubble',
      'iframe[title*="chat"]',
      'iframe[src*="tawk"]',
      '[id*="tawk"]',
      '[class*="tawk"]',
    ];

    tawkSelectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => {
        (el as HTMLElement).style.setProperty('display', 'none', 'important');
        (el as HTMLElement).style.setProperty('visibility', 'hidden', 'important');
        (el as HTMLElement).style.setProperty('opacity', '0', 'important');
        (el as HTMLElement).style.setProperty('pointer-events', 'none', 'important');
      });
    });
  };

  const closeMenu = () => {
    const menu = document.getElementById('mobile-menu-overlay');
    if (menu) {
      menu.style.display = 'none';
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
    }

    // Show floating logo again
    const floatingLogo = document.querySelector('a[aria-label="Go to homepage"]');
    if (floatingLogo) {
      (floatingLogo as HTMLElement).style.removeProperty('display');
    }

    // Restore sticky reviews banner
    const reviewsBanner = document.getElementById('sticky-reviews-banner');
    if (reviewsBanner) {
      reviewsBanner.style.removeProperty('display');
    }

    // Show ALL Tawk.to elements again
    const tawkSelectors = [
      '.tawk-min-container',
      '#tawk-bubble',
      'iframe[title*="chat"]',
      'iframe[src*="tawk"]',
      '[id*="tawk"]',
      '[class*="tawk"]',
    ];

    tawkSelectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => {
        (el as HTMLElement).style.removeProperty('display');
        (el as HTMLElement).style.removeProperty('visibility');
        (el as HTMLElement).style.removeProperty('opacity');
        (el as HTMLElement).style.removeProperty('pointer-events');
      });
    });
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={openMenu}
        className="xl:hidden p-2 hover:bg-gray-100 rounded-lg"
        type="button"
      >
        <Menu className="w-7 h-7 text-gray-900" />
      </button>

      {/* Mobile Menu - FULL SCREEN */}
      <div
        id="mobile-menu-overlay"
        style={{ 
          display: 'none',
          flexDirection: 'column',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 2147483647,
          backgroundColor: 'white'
        }}
        className="lg:hidden"
      >
        {/* Header */}
        <div 
          className="flex items-center justify-between px-6 py-5 border-b border-gray-200 bg-white shrink-0"
        >
          <span className="text-lg font-bold text-gray-900">Menu</span>
          <button
            onClick={closeMenu}
            className="p-2 hover:bg-gray-100 rounded-lg"
            type="button"
          >
            <X className="w-7 h-7 text-gray-900" />
          </button>
        </div>

        {/* Google Reviews Strip */}
        <div className="shrink-0 bg-linear-to-r from-blue-600 via-blue-500 to-cyan-500 px-4 py-3">
          <div className="flex items-center justify-center gap-2 text-white">
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
        </div>

        {/* Links - Scrollable middle section */}
        <div 
          className="flex-1 overflow-y-auto px-4 py-6 bg-white"
          style={{ backgroundColor: 'white' }}
        >
          <a 
            href="/services" 
            onClick={closeMenu} 
            className="block px-4 py-4 text-lg font-semibold text-gray-900 hover:bg-gray-50 active:bg-gray-100 rounded-xl mb-2"
          >
            Services
          </a>
          <a 
            href="/troubleshooting" 
            onClick={closeMenu} 
            className="block px-4 py-4 text-lg font-semibold text-gray-900 hover:bg-gray-50 active:bg-gray-100 rounded-xl mb-2"
          >
            Troubleshooting
          </a>
          <a 
            href="/service-areas" 
            onClick={closeMenu} 
            className="block px-4 py-4 text-lg font-semibold text-gray-900 hover:bg-gray-50 active:bg-gray-100 rounded-xl mb-2"
          >
            Service Areas
          </a>
          <a 
            href="/reviews" 
            onClick={closeMenu} 
            className="block px-4 py-4 text-lg font-semibold text-gray-900 hover:bg-gray-50 active:bg-gray-100 rounded-xl mb-2"
          >
            Reviews
          </a>
          <a 
            href="/about" 
            onClick={closeMenu} 
            className="block px-4 py-4 text-lg font-semibold text-gray-900 hover:bg-gray-50 active:bg-gray-100 rounded-xl mb-2"
          >
            About
          </a>
          <a
            href="/faq"
            onClick={closeMenu}
            className="block px-4 py-4 text-lg font-semibold text-gray-900 hover:bg-gray-50 active:bg-gray-100 rounded-xl mb-2"
          >
            FAQ
          </a>
          <a
            href="/blog"
            onClick={closeMenu}
            className="block px-4 py-4 text-lg font-semibold text-gray-900 hover:bg-gray-50 active:bg-gray-100 rounded-xl mb-2"
          >
            Blog
          </a>
          <a
            href="/maintenance-contract"
            onClick={closeMenu} 
            className="block px-4 py-4 text-lg font-semibold text-gray-900 hover:bg-gray-50 active:bg-gray-100 rounded-xl mb-2"
          >
            Preventative Maintenance
          </a>
          <a 
            href="/financing" 
            onClick={closeMenu} 
            className="flex items-center justify-between px-4 py-4 text-lg font-semibold text-gray-900 hover:bg-gray-50 active:bg-gray-100 rounded-xl mb-2"
          >
            <span>Financing</span>
            <span className="text-xs font-bold bg-green-100 text-green-700 px-2.5 py-1 rounded-full">
              0% APR
            </span>
          </a>
          <a 
            href="/contact" 
            onClick={closeMenu} 
            className="block px-4 py-4 text-lg font-semibold text-gray-900 hover:bg-gray-50 active:bg-gray-100 rounded-xl mb-2"
          >
            Contact
          </a>

          {/* Extra padding at bottom so last item isn't hidden behind call button */}
          <div className="h-32"></div>
        </div>

        {/* Call Button - Pinned to bottom */}
        <div 
          className="shrink-0 bg-white border-t border-gray-200 p-6"
          style={{ backgroundColor: 'white' }}
        >
          <a
            href="tel:+12017875657"
            onClick={closeMenu}
            className="flex items-center justify-center gap-3 w-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white px-6 py-4 rounded-2xl font-bold text-lg shadow-xl"
          >
            <Phone className="w-5 h-5" />
            (201) 787-5657
          </a>
          <p className="text-center text-sm text-gray-600 mt-3">
            24/7 Emergency Service
          </p>
        </div>
      </div>
    </>
  );
}