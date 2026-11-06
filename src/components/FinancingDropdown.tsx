"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronDown } from "lucide-react";

const links = [
  { label: "Residential Financing", href: "/financing" },
  { label: "Commercial Incentives", href: "/commercial-incentives" },
];

export default function FinancingDropdown() {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const button = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cancelClose = () => { if (timer.current) clearTimeout(timer.current); };
  const scheduleClose = () => { timer.current = setTimeout(() => setOpen(false), 150); };
  const updatePosition = useCallback(() => { const rect = button.current?.getBoundingClientRect(); if (rect) setPosition({ top: rect.bottom + 4, left: rect.left }); }, []);

  useEffect(() => {
    if (!open) return;
    const closeOnOutside = (event: MouseEvent) => { if (!panel.current?.contains(event.target as Node) && !button.current?.contains(event.target as Node)) setOpen(false); };
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); button.current?.focus(); } };
    document.addEventListener("mousedown", closeOnOutside);
    document.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);
    return () => { document.removeEventListener("mousedown", closeOnOutside); document.removeEventListener("keydown", closeOnEscape); window.removeEventListener("resize", updatePosition); window.removeEventListener("scroll", updatePosition, true); };
  }, [open, updatePosition]);

  return <>
    <button ref={button} type="button" aria-haspopup="menu" aria-expanded={open} onMouseEnter={() => { cancelClose(); updatePosition(); setOpen(true); }} onMouseLeave={scheduleClose} onFocus={() => { updatePosition(); setOpen(true); }} onClick={() => { updatePosition(); setOpen((value) => !value); }} onKeyDown={(event) => { if (event.key === "ArrowDown") { event.preventDefault(); updatePosition(); setOpen(true); } }} className="relative flex items-center gap-1 rounded-lg bg-green-50 px-4 py-2 text-sm font-semibold text-green-700 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600">
      Financing <ChevronDown className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`} />
      <span className="absolute -top-1 -right-1 rounded-full bg-green-600 px-1.5 py-0.5 text-[10px] font-bold text-white">0% APR</span>
    </button>
    {open && createPortal(<div ref={panel} role="menu" style={{ position: "fixed", top: position.top, left: position.left, zIndex: 9999999 }} onMouseEnter={cancelClose} onMouseLeave={scheduleClose} className="w-56 overflow-hidden rounded-lg border border-gray-200 bg-white py-2 shadow-xl">{links.map((item) => <a key={item.href} role="menuitem" href={item.href} onClick={() => setOpen(false)} className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-800 focus:bg-gray-50 focus:outline-none">{item.label}</a>)}</div>, document.body)}
  </>;
}
