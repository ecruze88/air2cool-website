"use client";

import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

type Review = {
  initial: string;
  name: string;
  location: string;
  service: string;
  rating: number;
  text: string;
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

const REVIEWS: Review[] = [
  {
    initial: "H",
    name: "Hannah G.",
    location: "Northern NJ",
    service: "HVAC",
    rating: 5,
    text: "If I could give more than five stars, I absolutely would! Hector and his crew at Air2 Heating/AC & Refrigeration are simply the best. They're knowledgeable, reliable, and professional from start to finish. The quality of their work and attention to detail is outstanding.",
  },
  {
    initial: "C",
    name: "Chris Spellman",
    location: "Northern NJ",
    service: "EMERGENCY SERVICE",
    rating: 5,
    text: "This is the best HVAC company I've ever dealt with (and I've dealt with many over the years)! Most recently we called on a Sunday afternoon with a heating issue and Hector came within about 2 hours to fix it. He was here for over 45 minutes making sure everything was perfect.",
  },
  {
    initial: "J",
    name: "Jonathan Heitmann",
    location: "Northern NJ",
    service: "HVAC",
    rating: 5,
    text: "I would not use anyone else! Air2Cool is Awesome!!! Everyone working there is kind, professional and I leave my home open to them to walk in and do the work needed even if we're not home. You need something done with Central Air, furnace, anything with heating/AC/refrigeration, use AIR2COOL!!!",
  },
  {
    initial: "J",
    name: "Jackie Dubrovich",
    location: "Dover, NJ",
    service: "EMERGENCY SERVICE",
    rating: 5,
    text: "Hector, Manny and team were remarkably easy to work with! They were quick to respond when our business had an emergency during the heat wave and extremely communicative throughout the process. We have no prior experience in hiring an HVAC company and they made the entire process easy to understand.",
  },
  {
    initial: "P",
    name: "Pyotr Samuylov",
    location: "Northern NJ",
    service: "EMERGENCY SERVICE",
    rating: 5,
    text: "Christmas Eve. 9 degrees outside. The boiler won't start. No other HVAC people answering their phones. Hector from Air2Cool responds and guides me thru FaceTime on how to restart the boiler!!! Simply Amazing! Highly Recommended!!!",
  },
  {
    initial: "M",
    name: "Michael Mckeon",
    location: "Northern NJ",
    service: "WATER HEATER",
    rating: 5,
    text: "On Saturday during a snowstorm, my water heater decided to breakdown. I knew getting help was probably not going to happen, but then my wife and I were given Hectors number and he said he would be to our house within 90 minutes. He showed up in less than an hour and had everything replaced and working perfectly!",
  },
  {
    initial: "J",
    name: "Jennifer Reinmann",
    location: "Northern NJ",
    service: "FURNACE REPAIR",
    rating: 5,
    text: "We had such an amazing experience with Air2Cool! Hector came to check out our furnace that all of a sudden stopped working. He came the same day we called and had the problem fixed within 20 mins!! He was such a great guy and didn't even charge us since it was a quick fix.",
  },
  {
    initial: "T",
    name: "Thomas Donahue",
    location: "Northern NJ",
    service: "INSTALLATION",
    rating: 5,
    text: "I needed a new oil furnace and central AC system to replace my 30 year old system. I got 3 other quotes from local business – all significantly higher. Air2Cool came in with the best price and the highest quality equipment. Installation was flawless and the team was incredibly professional.",
  },
  {
    initial: "J",
    name: "Juanita Latorre",
    location: "Northern NJ",
    service: "HEATING REPAIR",
    rating: 5,
    text: "Air2Cool truly goes above and beyond! From the moment we reached out to Hector & Manny, they treated us like family. When our heater stopped working one night, Hector showed up late to help us. They genuinely care about their customers and it shows in everything they do.",
  },
  {
    initial: "A",
    name: "Anthony H.",
    location: "Northern NJ",
    service: "INSTALLATION",
    rating: 5,
    text: "I used Air2Cool to replace my furnace and outside condenser due to cooling issues and the age of the units. I got multiple quotes from other HVAC companies, however Air2cool were the most reasonable in price and the most professional. The installation was clean, efficient, and done right.",
  },
  {
    initial: "P",
    name: "Pat B.",
    location: "Northern NJ",
    service: "EMERGENCY SERVICE",
    rating: 5,
    text: "We came home on July 4th to our air conditioning unit not working. We searched for someone to come out on a holiday and expected the worst. Hector came out himself within an hour or so. He was very professional and the AC was fixed quickly. Best HVAC experience we've had!",
  },
  {
    initial: "V",
    name: "Valentina Centeno",
    location: "Northern NJ",
    service: "HVAC",
    rating: 5,
    text: "Everything about my experience with Air2Cool was excellent! Chris was outstanding—such a hard worker who took the time to explain everything thoroughly and clearly. He truly gave this his all and showed how much he cared about the job.",
  },
];

export default function ReviewsCarousel() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [startIndex, setStartIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const update = () => {
      setSlidesPerView(window.innerWidth < 768 ? 1 : 3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxStartIndex = Math.max(0, REVIEWS.length - slidesPerView);
  const totalDots = maxStartIndex + 1;

  // Sync active dot on scroll/swipe
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const handleScroll = () => {
      const cards = el.querySelectorAll<HTMLElement>("[data-review-card]");
      if (!cards.length) return;
      const cardWidth = cards[0].getBoundingClientRect().width;
      const idx = Math.round(el.scrollLeft / (cardWidth + 24)); // gap-6 = 24px
      setStartIndex(clamp(idx, 0, maxStartIndex));
    };
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [maxStartIndex]);

  function scrollToStart(idx: number) {
    const el = scrollerRef.current;
    if (!el) return;

    const nextStart = clamp(idx, 0, maxStartIndex);
    const cards = el.querySelectorAll("[data-review-card]");
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
    <div className="relative">
      {/* Desktop arrows */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous reviews"
        className="hidden md:flex absolute -left-6 top-1/2 z-10 h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-blue-700 text-white shadow-lg hover:opacity-95 disabled:opacity-40"
        disabled={startIndex <= 0}
      >
        ‹
      </button>

      <button
        type="button"
        onClick={next}
        aria-label="Next reviews"
        className="hidden md:flex absolute -right-6 top-1/2 z-10 h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-blue-700 text-white shadow-lg hover:opacity-95 disabled:opacity-40"
        disabled={startIndex >= maxStartIndex}
      >
        ›
      </button>

      {/* Scroller */}
      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-1 pb-6 pt-2"
        style={{ scrollbarWidth: "none" }}
      >
        {REVIEWS.map((review, idx) => (
          <article
            key={`${review.name}-${idx}`}
            data-review-card
            data-index={idx}
            className="snap-start shrink-0 w-[86%] sm:w-[70%] md:w-[calc((100%-2*1.5rem)/3)] rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col"
          >
            {/* Header with initial & stars */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center text-xl font-bold">
                  {review.initial}
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
              </svg>
            </div>

            {/* Review Text */}
            <p className="text-gray-700 leading-relaxed mb-4 grow">
              {review.text}
            </p>

            {/* Service Badge */}
            <div className="inline-block bg-blue-50 text-blue-900 px-3 py-1 rounded-full text-xs font-semibold mb-3 w-fit">
              {review.service}
            </div>

            {/* Author Info */}
            <div className="border-t pt-4">
              <div className="font-bold text-gray-900">{review.name}</div>
              <div className="text-sm text-gray-500">{review.location}</div>
            </div>
          </article>
        ))}
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 pt-2">
        {Array.from({ length: totalDots }).map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to reviews page ${i + 1}`}
            onClick={() => scrollToStart(i)}
            className={`h-2.5 w-2.5 rounded-full ${
              i === startIndex
                ? "bg-red-600"
                : "bg-slate-300 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>

      {/* Mobile arrows */}
      <div className="mt-3 flex items-center justify-center gap-3 md:hidden">
        <button
          type="button"
          onClick={prev}
          className="h-10 w-10 rounded-full bg-blue-700 text-white shadow disabled:opacity-40"
          aria-label="Previous reviews"
          disabled={startIndex <= 0}
        >
          ‹
        </button>
        <button
          type="button"
          onClick={next}
          className="h-10 w-10 rounded-full bg-blue-700 text-white shadow disabled:opacity-40"
          aria-label="Next reviews"
          disabled={startIndex >= maxStartIndex}
        >
          ›
        </button>
      </div>

      {/* Scroll hint text */}
      <div className="text-center mt-4 text-sm text-gray-500 md:hidden">
        ← Swipe to see more reviews →
      </div>
    </div>
  );
}