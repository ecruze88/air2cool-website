"use client";

import { Menu, X, Phone } from "lucide-react";

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
          className="flex items-center justify-between px-6 py-5 border-b border-gray-200 bg-white flex-shrink-0"
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
          className="flex-shrink-0 bg-white border-t border-gray-200 p-6"
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