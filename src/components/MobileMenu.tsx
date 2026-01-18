"use client";

import { useState } from "react";
import { X, Menu, Phone } from "lucide-react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Services", href: "/services" },
    { label: "Troubleshooting", href: "/troubleshooting" },
    { label: "Service Areas", href: "/service-areas" },
    { label: "Reviews", href: "/reviews" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Financing", href: "/financing", badge: "0% APR" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden p-2 -mr-2"
        aria-label="Menu"
      >
        <Menu className="w-7 h-7 text-gray-900" />
      </button>

      {/* Full Screen Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 z-[9998] lg:hidden transition-opacity"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu Panel */}
          <div className="fixed inset-0 z-[9999] lg:hidden bg-white overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
              <span className="text-lg font-bold text-gray-900">Menu</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 -mr-2"
                aria-label="Close"
              >
                <X className="w-7 h-7 text-gray-900" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="px-4 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between px-4 py-4 text-gray-900 text-lg font-medium rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors mb-1"
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-xs font-bold bg-green-100 text-green-700 px-2.5 py-1 rounded-full">
                      {link.badge}
                    </span>
                  )}
                </a>
              ))}
            </nav>

            {/* Call Button - Fixed to bottom */}
            <div className="fixed bottom-0 left-0 right-0 p-6 bg-white border-t border-gray-200">
              <a
                href="tel:+12017875657"
                className="flex items-center justify-center gap-3 w-full bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-2xl font-bold text-lg transition-colors shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="w-6 h-6" />
                (201) 787-5657
              </a>
              <p className="text-center text-sm text-gray-600 mt-3">
                24/7 Emergency Service
              </p>
            </div>

            {/* Spacer for fixed button */}
            <div className="h-32" />
          </div>
        </>
      )}
    </>
  );
}