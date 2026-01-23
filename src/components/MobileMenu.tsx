"use client";

import { useState } from "react";
import { X, Menu, Phone } from "lucide-react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Toggle body scroll
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      document.body.style.overflow = '';
      document.body.style.height = '';
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
    document.body.style.height = '';
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden p-3 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors"
        aria-label="Toggle menu"
      >
        <Menu className="w-6 h-6 text-gray-900" />
      </button>

      {/* Full Screen Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 lg:hidden"
          style={{ 
            zIndex: 999999,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }}
        >
          {/* Backdrop */}
          <div
            onClick={closeMenu}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Menu Panel - Slides in from right */}
          <div 
            className={`
              absolute top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl
              transition-transform duration-300 ease-in-out
              ${isOpen ? 'translate-x-0' : 'translate-x-full'}
            `}
          >
            {/* Header with close button */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
              <span className="text-lg font-bold text-gray-900">Menu</span>
              <button
                onClick={closeMenu}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-gray-900" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="overflow-y-auto h-[calc(100vh-80px-120px)] px-4 py-6">
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

            {/* Call Button - Fixed to Bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-6">
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
        </div>
      )}
    </>
  );
}