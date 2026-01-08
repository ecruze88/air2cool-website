"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

type Offer = {
  title: string;
  expiresText?: string;
  imageSrc: string;
  imageAlt: string;
  details?: string[];
  ctaLabel?: string;
  ctaHref?: string;
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function OffersCarousel({
  heading = "Current Offers",
  offers,
}: {
  heading?: string;
  offers?: Offer[];
}) {
  const defaultOffers: Offer[] = useMemo(
    () => [
      {
        title: "$2,200 OFF FURNACE + AC",
        expiresText: "Limited time offer",
        imageSrc: "/images/offers/offer-1.jpg",
        imageAlt: "Technician reviewing options with homeowner",
        details: [
          "Valid on qualifying system replacements",
          "Cannot be combined with other discounts",
        ],
        ctaLabel: "Request Service",
        ctaHref: "/contact",
      },
      {
        title: "$80 DRAIN CLEAR",
        expiresText: "Limited time offer",
        imageSrc: "/images/offers/offer-2.jpg",
        imageAlt: "Technician working at kitchen sink",
        details: ["Service area restrictions may apply"],
        ctaLabel: "Request Service",
        ctaHref: "/contact",
      },
      {
        title: "$2,200 OFF AC OR FURNACE UNIT",
        expiresText: "Limited time offer",
        imageSrc: "/images/offers/offer-3.jpg",
        imageAlt: "Technician inspecting outdoor condenser",
        details: ["Valid on qualifying equipment", "Ask about financing options"],
        ctaLabel: "Call Now",
        ctaHref: "tel:+12017875657",
      },
      {
        title: "$235 FURNACE & AC MAINTENANCE PLAN",
        expiresText: "Limited time offer",
        imageSrc: "/images/offers/offer-4.jpg",
        imageAlt: "HVAC equipment service",
        details: ["Includes seasonal maintenance", "Priority scheduling","20% off all parts",""],
        ctaLabel: "Request Service",
        ctaHref: "/contact",
      },
    ],
    []
  );

  const data = offers?.length ? offers : defaultOffers;

  const scrollerRef = useRef<HTMLDivElement | null>(null);

  // This is the LEFTMOST card index (page start), not "active offer"
  const [startIndex, setStartIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Responsive slides per view: mobile = 1, desktop = 3
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const update = () => {
      // Tailwind md breakpoint = 768px
      setSlidesPerView(window.innerWidth < 768 ? 1 : 3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // The last valid start index so you never "advance dots" past what can scroll
  const maxStartIndex = Math.max(0, data.length - slidesPerView);
  const totalDots = maxStartIndex + 1;

  function scrollToStart(idx: number) {
    const el = scrollerRef.current;
    if (!el) return;

    const nextStart = clamp(idx, 0, maxStartIndex);

    const cards = el.querySelectorAll("[data-offer-card]");
    const target = cards[nextStart] as HTMLElement | undefined;
    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });

    setStartIndex(nextStart);
  }

  function prev() {
    scrollToStart(startIndex - 1);
  }

  function next() {
    scrollToStart(startIndex + 1);
  }

  return (
    <section className="relative overflow-hidden bg-slate-50">
      {/* soft background accents */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -left-10 top-10 h-130 w-130 rounded-full bg-slate-100 blur-2xl" />
        <div className="absolute -right-10 bottom-0 h-130 w-130 rounded-full bg-slate-100 blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-center font-extrabold tracking-tight text-slate-900 text-3xl sm:text-4xl">
          {heading}
        </h2>

        <div className="mt-10 relative">
          {/* desktop arrows */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous offer"
            className="hidden md:flex absolute -left-6 top-1/2 z-10 h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-blue-700 text-white shadow-lg hover:opacity-95 disabled:opacity-40"
            disabled={startIndex <= 0}
          >
            ‹
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next offer"
            className="hidden md:flex absolute -right-6 top-1/2 z-10 h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-blue-700 text-white shadow-lg hover:opacity-95 disabled:opacity-40"
            disabled={startIndex >= maxStartIndex}
          >
            ›
          </button>

          {/* scroller */}
          <div
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-1 pb-6 pt-2"
            style={{ scrollbarWidth: "none" }}
          >
            {data.map((offer, idx) => (
              <article
                key={`${offer.title}-${idx}`}
                data-offer-card
                data-index={idx}
                className="snap-start shrink-0 w-[86%] sm:w-[70%] md:w-[calc((100%-2*1.5rem)/3)] overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 h-120 flex flex-col"
              >
                <div className="relative h-44">
                  <Image
                    src={offer.imageSrc}
                    alt={offer.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 80vw, 33vw"
                    priority={idx === 0}
                  />

                  {/* curved white wave */}
                </div>

                <div className="px-7 pb-6 pt-6 flex flex-col flex-1">
                  <div className="text-slate-900 font-extrabold text-3xl leading-tight">
                    {offer.title}
                  </div>

                  {offer.expiresText && (
                    <div className="mt-3 text-sm text-slate-600">
                      {offer.expiresText}
                    </div>
                  )}

                  <div className="mt-auto border-t border-slate-200 pt-4">
                    <button
                      type="button"
                      onClick={() =>
                        setOpenIndex(openIndex === idx ? null : idx)
                      }
                      className="w-full text-center text-sm font-semibold text-blue-900 hover:opacity-90"
                      aria-expanded={openIndex === idx}
                    >
                      Details{" "}
                      <span className="inline-block translate-y-px">
                        {openIndex === idx ? "˄" : "˅"}
                      </span>
                    </button>

                    {openIndex === idx && offer.details?.length ? (
                      <ul className="mt-4 space-y-2 text-sm text-slate-700">
                        {offer.details.map((d, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    {offer.ctaLabel && offer.ctaHref ? (
                      <a
                        href={offer.ctaHref}
                        className="mt-5 inline-flex w-full h-12 items-center justify-center rounded-xl bg-red-600 px-4 text-sm font-bold text-white hover:opacity-95"
                      >
                        {offer.ctaLabel}
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* dots (pages) */}
          <div className="flex items-center justify-center gap-2 pt-2">
            {Array.from({ length: totalDots }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to offers page ${i + 1}`}
                onClick={() => scrollToStart(i)}
                className={`h-2.5 w-2.5 rounded-full ${
                  i === startIndex
                    ? "bg-red-600"
                    : "bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          {/* mobile arrows */}
          <div className="mt-3 flex items-center justify-center gap-3 md:hidden">
            <button
              type="button"
              onClick={prev}
              className="h-10 w-10 rounded-full bg-blue-700 text-white shadow disabled:opacity-40"
              aria-label="Previous offers"
              disabled={startIndex <= 0}
            >
              ‹
            </button>
            <button
              type="button"
              onClick={next}
              className="h-10 w-10 rounded-full bg-blue-700 text-white shadow disabled:opacity-40"
              aria-label="Next offers"
              disabled={startIndex >= maxStartIndex}
            >
              ›
            </button>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-slate-500">
          Offers subject to change. Terms may apply.
        </p>
      </div>
    </section>
  );
}
