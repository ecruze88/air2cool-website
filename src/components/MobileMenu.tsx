"use client";

import { useState } from "react";
import { X, Menu, Phone } from "lucide-react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Toggle body scroll
    if (!isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.classList.remove('overflow-hidden');
  };

  return (
    <>
      {/* Hamburger Button - Simple and Clean */}
      <button
        onClick={toggleMenu}
        className="lg:hidden p-3 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-gray-900" />
        ) : (
          <Menu className="w-6 h-6 text-gray-900" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 bg-white
          lg:hidden
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        style={{ 
          zIndex: 999999,
          top: '72px' // Below header
        }}
      >
        {/* Menu Content */}
        <div className="h-full overflow-y-auto pb-24">
          {/* Navigation Links */}
          <div className="px-4 py-6">
            <a
              href="/services"
              onClick={closeMenu}
              className="block px-4 py-4 text-lg font-semibold text-gray-900 hover:bg-gray-50 rounded-xl mb-1"
            >
              Services
            </a>

            <a
              href="/troubleshooting"
              onClick={closeMenu}
              className="block px-4 py-4 text-lg font-semibold text-gray-900 hover:bg-gray-50 rounded-xl mb-1"
            >
              Troubleshooting
            </a>

            <a
              href="/service-areas"
              onClick={closeMenu}
              className="block px-4 py-4 text-lg font-semibold text-gray-900 hover:bg-gray-50 rounded-xl mb-1"
            >
              Service Areas
            </a>

            <a
              href="/reviews"
              onClick={closeMenu}
              className="block px-4 py-4 text-lg font-semibold text-gray-900 hover:bg-gray-50 rounded-xl mb-1"
            >
              Reviews
            </a>

            <a
              href="/about"
              onClick={closeMenu}
              className="block px-4 py-4 text-lg font-semibold text-gray-900 hover:bg-gray-50 rounded-xl mb-1"
            >
              About
            </a>

            <a
              href="/faq"
              onClick={closeMenu}
              className="block px-4 py-4 text-lg font-semibold text-gray-900 hover:bg-gray-50 rounded-xl mb-1"
            >
              FAQ
            </a>

            <a
              href="/financing"
              onClick={closeMenu}
              className="flex items-center justify-between px-4 py-4 text-lg font-semibold text-gray-900 hover:bg-gray-50 rounded-xl mb-1"
            >
              <span>Financing</span>
              <span className="text-xs font-bold bg-green-100 text-green-700 px-2.5 py-1 rounded-full">
                0% APR
              </span>
            </a>

            <a
              href="/contact"
              onClick={closeMenu}
              className="block px-4 py-4 text-lg font-semibold text-gray-900 hover:bg-gray-50 rounded-xl mb-1"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Call Button - Fixed to Bottom */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-6">
          <a
            href="tel:+12017875657"
            onClick={closeMenu}
            className="flex items-center justify-center gap-3 w-full bg-red-600 text-white px-6 py-4 rounded-2xl font-bold text-lg shadow-lg active:bg-red-700"
          >
            <Phone className="w-5 h-5" />
            (201) 787-5657
          </a>
          <p className="text-center text-sm text-gray-600 mt-3">
            24/7 Emergency Service
          </p>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/50 lg:hidden"
          style={{ 
            zIndex: 999998,
            top: '72px'
          }}
        />
      )}
    </>
  );
}