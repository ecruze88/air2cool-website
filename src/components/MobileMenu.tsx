"use client";

import { useState, useEffect } from "react";
import { X, Menu, Phone } from "lucide-react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

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

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => {
          console.log('Menu button clicked'); // Debug log
          setIsOpen(true);
        }}
        className="p-2 -mr-2 relative z-10 touch-manipulation"
        aria-label="Open menu"
        type="button"
      >
        <Menu className="w-7 h-7 text-gray-900" />
      </button>

      {/* Menu Overlay - Only renders when open */}
      {isOpen && (
        <div className="fixed inset-0 z-[99999]">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={handleClose}
            aria-hidden="true"
          />

          {/* Menu Panel */}
          <div className="absolute inset-0 bg-white overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200 bg-white sticky top-0 z-10">
              <span className="text-lg font-bold text-gray-900">Menu</span>
              <button
                onClick={handleClose}
                className="p-2 -mr-2 hover:bg-gray-100 rounded-lg transition-colors touch-manipulation"
                aria-label="Close menu"
                type="button"
              >
                <X className="w-7 h-7 text-gray-900" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="px-4 py-6 pb-32">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleClose}
                  className="flex items-center justify-between px-4 py-4 text-gray-900 text-lg font-medium rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors mb-1 touch-manipulation"
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
            <div className="fixed bottom-0 left-0 right-0 p-6 bg-white border-t border-gray-200 z-20">
              <a
                href="tel:+12017875657"
                className="flex items-center justify-center gap-3 w-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white px-6 py-4 rounded-2xl font-bold text-lg transition-colors shadow-lg touch-manipulation"
                onClick={handleClose}
              >
                <Phone className="w-6 h-6" />
                (201) 787-5657
              </a>
              <p className="text-center text-sm text-gray-600 mt-3">
                24/7 Emergency Service
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}