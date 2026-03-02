import type { Metadata } from "next";
import { BookOpen, Flame, Wrench, Wind, Calendar, Clock, ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

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
    slug: "lower-energy-bills-hvac",
    category: "Energy Savings",
    categoryColor: "text-emerald-700 bg-emerald-50",
    accentColor: "from-emerald-500 to-teal-500",
    icon: Zap,
    iconColor: "text-emerald-600",
    title: "Why Is My Energy Bill So High? 7 HVAC Fixes for NJ Homeowners",
    excerpt:
      "Your HVAC system accounts for nearly half your home's energy use — and a struggling system keeps running while quietly wasting 20–40% more energy than it should. Here are the 7 most common causes of high energy bills in North NJ homes, and what to do about each one.",
    date: "March 1, 2026",
    readTime: "7 min read",
  },
  {
    slug: "diy-furnace-checkup",
    category: "Heating",
    categoryColor: "text-orange-700 bg-orange-50",
    accentColor: "from-orange-500 to-amber-500",
    icon: Flame,
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

      {/* Blog Posts Grid */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6 md:mb-10">Latest Articles</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {POSTS.map((post) => {
              const Icon = post.icon;
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  {/* Card top accent */}
                  <div className={`h-2 bg-linear-to-r ${post.accentColor}`} />

                  <div className="p-6 flex flex-col flex-1">
                    {/* Category + Icon */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
                        <Icon className={`w-5 h-5 ${post.iconColor}`} />
                      </div>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide ${post.categoryColor}`}>
                        {post.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-blue transition-colors leading-snug">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
                      {post.excerpt}
                    </p>

                    {/* Meta + CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-3 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                      <span className="flex items-center gap-1 text-sm font-semibold text-brand-blue group-hover:gap-2 transition-all">
                        Read Article
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-5 md:mb-8 text-center">Browse by Topic</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { label: "Heating", icon: Flame, color: "bg-orange-50 text-orange-700 border-orange-200" },
              { label: "Cooling", icon: Wind, color: "bg-blue-50 text-blue-700 border-blue-200" },
              { label: "Maintenance", icon: Wrench, color: "bg-green-50 text-green-700 border-green-200" },
            ].map(({ label, icon: Icon, color }) => (
              <span
                key={label}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border font-semibold text-sm ${color}`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

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
