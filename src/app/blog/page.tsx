import type { Metadata } from "next";
import { BookOpen } from "lucide-react";
import Link from "next/link";
import BlogClient from "./BlogClient";
import { getPublishedPosts, formatDate } from "@/lib/blog";

export const revalidate = 60;

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

const CATEGORY_COLOR: Record<string, string> = {
  Cooling: "text-blue-700 bg-blue-50",
  Heating: "text-orange-700 bg-orange-50",
  Maintenance: "text-green-700 bg-green-50",
};

const ICON_COLOR: Record<string, string> = {
  Cooling: "text-blue-600",
  Heating: "text-orange-600",
  Maintenance: "text-green-600",
};

function calcReadTime(content: string): string {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 250));
  return `${minutes} min read`;
}

export default async function BlogPage() {
  const rawPosts = await getPublishedPosts();

  const posts = rawPosts.map((post) => ({
    slug: post.slug,
    category: post.category,
    categoryColor: CATEGORY_COLOR[post.category] ?? "text-slate-700 bg-slate-100",
    iconColor: ICON_COLOR[post.category] ?? "text-slate-600",
    title: post.title,
    excerpt: post.excerpt,
    date: formatDate(post.publishDate),
    readTime: calcReadTime(post.content),
  }));

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Air2Cool HVAC Tips & Guides",
            "description": "HVAC maintenance guides, troubleshooting tips, and seasonal advice from Air2Cool Heating & Cooling in Morris County, NJ.",
            "url": "https://www.air2cool.com/blog",
            "publisher": {
              "@type": "HVACBusiness",
              "@id": "https://www.air2cool.com/#organization",
              "name": "Air2Cool Heating & Cooling",
              "url": "https://www.air2cool.com",
            },
            "blogPost": rawPosts.map((post) => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.seoDescription,
              "url": `https://www.air2cool.com/blog/${post.slug}`,
              "datePublished": post.publishDate,
              "author": {
                "@type": "Organization",
                "name": post.author,
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-24 md:py-20 text-center">
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

      <BlogClient posts={posts} />

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
