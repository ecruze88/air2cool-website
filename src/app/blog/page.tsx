import type { Metadata } from "next";
import { BookOpen } from "lucide-react";
import Link from "next/link";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "HVAC Tips & Guides Blog | Air2Cool Heating & Cooling",
  description:
    "Free HVAC tips, maintenance guides, and troubleshooting advice from Air2Cool's certified technicians. Serving Morris County & North NJ since 1998. Learn when to DIY and when to call a pro.",
  keywords: [
    "HVAC tips North NJ",
    "furnace maintenance guide",
    "AC maintenance tips Morris County",
    "HVAC blog North Jersey",
    "heating cooling advice NJ",
    "furnace checkup guide",
    "HVAC troubleshooting tips",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "HVAC Tips & Guides Blog | Air2Cool Heating & Cooling",
    description:
      "Free HVAC tips, maintenance guides, and troubleshooting advice from Air2Cool's certified technicians in North NJ.",
    url: "/blog",
    type: "website",
  },
};

const POSTS = [
  {
    slug: "hvac-maintenance-plan-nj",
    category: "Maintenance",
    categoryColor: "text-green-700 bg-green-50",
    iconColor: "text-green-600",
    title: "HVAC Maintenance Plans in NJ — What's Included & Is It Worth It?",
    excerpt:
      "Is an HVAC maintenance plan worth it in New Jersey? Learn what bi-annual tune-ups cover, how they compare to the cost of emergency repairs, and what Air2Cool's plan includes for Morris County homeowners.",
    date: "March 13, 2026",
    readTime: "6 min read",
  },
  {
    slug: "ac-not-cooling-nj",
    category: "Cooling",
    categoryColor: "text-blue-700 bg-blue-50",
    iconColor: "text-blue-600",
    title: "AC Running But Not Cooling Your NJ Home? Here's Why",
    excerpt:
      "AC on but no cold air in New Jersey? Learn the 6 most common causes — low refrigerant, dirty coils, frozen evaporator, failed compressor — what you can check yourself, and when to call for same-day repair.",
    date: "March 13, 2026",
    readTime: "5 min read",
  },
  {
    slug: "boiler-repair-morris-county-nj",
    category: "Heating",
    categoryColor: "text-red-700 bg-red-50",
    iconColor: "text-red-600",
    title: "Boiler Repair in Morris County NJ — Common Problems & What They Cost",
    excerpt:
      "Boiler not working in Morris County? Learn the most common boiler problems, what repairs typically cost, when to replace vs. repair, and which towns Air2Cool serves for 24/7 emergency boiler repair.",
    date: "March 13, 2026",
    readTime: "5 min read",
  },
  {
    slug: "mini-split-installation-nj",
    category: "Cooling",
    categoryColor: "text-blue-700 bg-blue-50",
    iconColor: "text-blue-600",
    title: "Mini Split Installation in NJ — Cost, Brands & What to Expect",
    excerpt:
      "Considering a ductless mini split in NJ? See 2026 installed cost ranges for single and multi-zone systems, how Mitsubishi, Daikin, and LG compare, and what the installation process looks like from start to finish.",
    date: "March 13, 2026",
    readTime: "6 min read",
  },
  {
    slug: "furnace-replacement-cost-nj",
    category: "Heating",
    categoryColor: "text-orange-700 bg-orange-50",
    iconColor: "text-orange-600",
    title: "How Much Does Furnace Replacement Cost in NJ? (2026 Guide)",
    excerpt:
      "Furnace replacement in NJ costs $3,500–$12,000+ depending on fuel type, efficiency rating, and brand. See 2026 price ranges for gas, oil, and electric systems, and learn about 0% APR financing options.",
    date: "March 13, 2026",
    readTime: "6 min read",
  },
  {
    slug: "ac-repair-morris-county-nj",
    category: "Cooling",
    categoryColor: "text-blue-700 bg-blue-50",
    iconColor: "text-blue-600",
    title: "AC Repair in Morris County NJ — What to Expect and Who to Call",
    excerpt:
      "AC not cooling your Morris County home? Learn the most common causes — from refrigerant leaks to failed capacitors — what to expect during a repair visit, and why Air2Cool is the go-to choice for same-day AC repair across Morris County.",
    date: "March 10, 2026",
    readTime: "6 min read",
  },
  {
    slug: "lower-energy-bills-hvac",
    category: "Maintenance",
    categoryColor: "text-green-700 bg-green-50",
    iconColor: "text-green-600",
    title: "Why Is My Energy Bill So High? 7 HVAC Fixes for NJ Homeowners",
    excerpt:
      "Spiking energy bills in New Jersey? Your HVAC system is usually the culprit. Learn how to lower heating and cooling costs with 7 practical fixes — from refrigerant checks to smart thermostats — from Air2Cool's certified technicians.",
    date: "November 20, 2025",
    readTime: "7 min read",
  },
  {
    slug: "diy-furnace-checkup",
    category: "Heating",
    categoryColor: "text-orange-700 bg-orange-50",
    iconColor: "text-orange-600",
    title: "DIY Furnace Checkup: 8 Steps to Do Before Winter",
    excerpt:
      "Don't wait for the first cold snap to find out your furnace has a problem. Run through this 8-step DIY inspection every fall to catch small issues before they become expensive breakdowns — and know when it's time to call a pro.",
    date: "October 15, 2025",
    readTime: "8 min read",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Air2Cool HVAC Tips & Guides",
            "description": "HVAC maintenance guides, troubleshooting tips, and industry advice from Air2Cool Heating & Cooling in Morris County, NJ.",
            "url": "https://www.air2cool.com/blog",
            "publisher": {
              "@type": "HVACBusiness",
              "@id": "https://www.air2cool.com/#organization",
              "name": "Air2Cool Heating & Cooling",
              "url": "https://www.air2cool.com",
            },
            "blogPost": POSTS.map((post) => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "url": `https://www.air2cool.com/blog/${post.slug}`,
              "datePublished": "2025-10-15",
              "author": {
                "@type": "Organization",
                "name": "Air2Cool Heating & Cooling",
              },
            })),
          })
        }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-4">
            <BookOpen className="w-4 h-4" />
            HVAC TIPS &amp; GUIDES
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 md:mb-6">
            Learn From the Pros
          </h1>

          <p className="text-base md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
            Free HVAC maintenance guides, troubleshooting tips, and seasonal advice from Air2Cool&apos;s certified technicians. Know when to DIY — and when to call us.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
          </svg>
        </div>
      </section>

      <BlogClient posts={POSTS} />

      {/* CTA */}
      <section className="py-10 md:py-12 bg-gradient-to-r from-slate-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3 md:mb-4">Need a Pro? We&apos;re Just a Call Away.</h2>
          <p className="text-gray-300 text-sm md:text-base mb-5 md:mb-8">
            Air2Cool serves Morris County &amp; North NJ. 24/7 emergency service, licensed &amp; insured.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-slate-800 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg hover:bg-gray-50 transition w-full sm:w-auto text-center"
            >
              Schedule Service
            </Link>
            <a
              href="tel:+12017875657"
              className="bg-white/10 backdrop-blur text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg border-2 border-white hover:bg-white/20 transition w-full sm:w-auto text-center"
            >
              Call (201) 787-5657
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
