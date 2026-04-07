"use client";

import { usePathname } from "next/navigation";

export default function FloatingLogo() {
  const pathname = usePathname() || "";
  const isBlog = pathname === "/blog" || pathname.startsWith("/blog/");

  const wrapperClassName = isBlog
    ? "hidden xl:block fixed left-2 top-3 z-[99999999] pointer-events-auto"
    : "hidden xl:block fixed left-6 top-35 z-[99999999]";

  const imageClassName = isBlog
    ? "w-38 h-auto 2xl:w-44 opacity-75 hover:opacity-100 transition-opacity duration-200"
    : "w-63 h-auto 2xl:w-108 opacity-75 hover:opacity-100 transition-opacity duration-200";

  return (
    <a
      href="/"
      aria-label="Go to homepage"
      className={wrapperClassName}
    >
      <img
        src="/air2cool-logo-transparent.png"
        alt="Air2Cool Heating & Cooling"
        className={imageClassName}
      />
    </a>
  );
}
