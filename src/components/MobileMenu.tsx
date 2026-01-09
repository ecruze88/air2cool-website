"use client";

import { useState } from "react";
import { X, Menu, Phone, Star } from "lucide-react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Services", href: "/services" },
    { label: "Areas", href: "/service-areas" },
    { label: "About", href: "/about" },
    { label: "Reviews", href: "/reviews" },
    { label: "FAQ", href: "/faq" },
    { label: "Financing", href: "/financing" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Hamburger Button - Only shows on mobile */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Open menu"
      >
        <Menu className="w-6 h-6 text-gray-900" />
      </button>

      {/* Overlay - Only shows when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[99998] lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-out Menu - Only shows on mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white z-[99999] shadow-2xl lg:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white">
          <div>
            <div className="font-bold text-gray-900">Menu</div>
            <div className="text-sm text-gray-600">Air2Cool HVAC</div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-gray-900" />
          </button>
        </div>

        {/* Google Rating */}
        <div className="px-6 py-4 bg-blue-50 border-b border-blue-200">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-semibold text-gray-900">5.0</span>
            <span className="text-sm text-gray-600">Google</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="py-4 bg-white">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-6 py-4 text-gray-900 font-semibold hover:bg-gray-50 active:bg-gray-100 transition-colors"
            >
              {link.label}
              {link.label === "Financing" && (
                <span className="ml-2 text-xs bg-green-600 text-white px-2 py-0.5 rounded-full">
                  0% APR
                </span>
              )}
            </a>
          ))}
        </nav>

        {/* Call Button */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-white">
          <a
            href="tel:+12017875657"
            className="flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-full font-bold transition-colors shadow-lg"
            onClick={() => setIsOpen(false)}
          >
            <Phone className="w-5 h-5" />
            Call (201) 787-5657
          </a>
          <div className="text-center mt-3 text-xs text-gray-600">
            24/7 Emergency Service Available
          </div>
        </div>
      </div>
    </>
  );
}