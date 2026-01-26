"use client";

import { Phone } from "lucide-react";

export default function StickyCallButton() {
  return (
    <a
      href="tel:+12017875657"
      className="lg:hidden fixed bottom-6 left-6 z-[9999] bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95 animate-pulse"
      aria-label="Call Air2Cool"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
}