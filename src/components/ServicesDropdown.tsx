"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import { ChevronDown } from "lucide-react";

const COOLING = [
  { label: "AC Repair",       href: "/services/ac-repair" },
  { label: "AC Installation", href: "/services/cooling-installation" },
];

const HEATING = [
  { label: "Heating Repair",       href: "/services/heating-repair" },
  { label: "Heating Installation", href: "/services/heating-installation" },
];

const AIR_QUALITY = [
  { label: "Air Quality & Filtration", href: "/services/air-quality" },
  { label: "Humidifier",               href: "/services/humidifier" },
];

const MAINTENANCE = [
  { label: "Maintenance", href: "/services/preventative-maintenance" },
];

const COMMERCIAL = [
  { label: "All Commercial Services",  href: "/services/commercial" },
  { label: "Commercial Refrigeration", href: "/services/commercial-refrigeration" },
];

export default function ServicesDropdown() {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  };

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const updatePos = useCallback(() => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setPos({ top: rect.bottom + 4, left: rect.left });
  }, []);

  // Recalculate on scroll/resize so portal stays aligned
  useEffect(() => {
    if (!open) return;
    updatePos();
    window.addEventListener("scroll", updatePos, true);
    window.addEventListener("resize", updatePos);
    return () => {
      window.removeEventListener("scroll", updatePos, true);
      window.removeEventListener("resize", updatePos);
    };
  }, [open, updatePos]);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (
        panelRef.current && !panelRef.current.contains(e.target as Node) &&
        buttonRef.current && !buttonRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const panel = open
    ? ReactDOM.createPortal(
        <div
          ref={panelRef}
          style={{ position: "fixed", top: pos.top, left: pos.left, zIndex: 9999999 }}
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <div className="bg-white rounded-lg shadow-xl border border-gray-200 py-2 w-56 overflow-hidden">

            {/* RESIDENTIAL */}
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-4 pt-2 pb-1">
              Residential
            </p>

            <p className="text-[9px] font-bold text-gray-300 uppercase tracking-widest px-5 pt-1 pb-0.5">
              Cooling
            </p>
            {COOLING.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}
                className="block px-6 py-1.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-700 transition-colors">
                {item.label}
              </a>
            ))}

            <p className="text-[9px] font-bold text-gray-300 uppercase tracking-widest px-5 pt-2 pb-0.5">
              Heating
            </p>
            {HEATING.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}
                className="block px-6 py-1.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-700 transition-colors">
                {item.label}
              </a>
            ))}

            <p className="text-[9px] font-bold text-gray-300 uppercase tracking-widest px-5 pt-2 pb-0.5">
              Indoor Air Quality
            </p>
            {AIR_QUALITY.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}
                className="block px-6 py-1.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-700 transition-colors">
                {item.label}
              </a>
            ))}

            <p className="text-[9px] font-bold text-gray-300 uppercase tracking-widest px-5 pt-2 pb-0.5">
              Maintenance
            </p>
            {MAINTENANCE.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}
                className="block px-6 py-1.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-700 transition-colors">
                {item.label}
              </a>
            ))}

            {/* COMMERCIAL */}
            <div className="my-1.5 border-t border-gray-200" />
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-4 pt-1 pb-1">
              Commercial
            </p>
            {COMMERCIAL.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}
                className="block px-4 py-1.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-700 transition-colors">
                {item.label}
              </a>
            ))}
          </div>
        </div>,
        document.body
      )
    : null;

  return (
    <>
      <a
        ref={buttonRef}
        href="/services"
        className="px-4 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-100 hover:text-brand-blue transition-colors flex items-center gap-1"
        onMouseEnter={() => { cancelClose(); updatePos(); setOpen(true); }}
        onMouseLeave={scheduleClose}
      >
        Services
        <ChevronDown className={`w-3 h-3 opacity-60 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </a>

      {panel}
    </>
  );
}
