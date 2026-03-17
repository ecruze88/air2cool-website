"use client";

import { Wind, Wrench, Flame, Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

type Post = {
  slug: string;
  category: string;
  categoryColor: string;
  iconColor: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
};

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  Cooling: Wind,
  Maintenance: Wrench,
  Heating: Flame,
};

const TOPICS = [
  {
    label: "All",
    icon: null,
    activeClass: "bg-gray-900 text-white border-gray-900",
    inactiveClass: "bg-white text-gray-600 border-gray-200 hover:border-gray-400",
  },
  {
    label: "Heating",
    icon: Flame,
    activeClass: "bg-orange-500 text-white border-orange-500",
    inactiveClass: "bg-orange-50 text-orange-700 border-orange-200 hover:border-orange-400",
  },
  {
    label: "Cooling",
    icon: Wind,
    activeClass: "bg-blue-500 text-white border-blue-500",
    inactiveClass: "bg-blue-50 text-blue-700 border-blue-200 hover:border-blue-400",
  },
  {
    label: "Maintenance",
    icon: Wrench,
    activeClass: "bg-green-500 text-white border-green-500",
    inactiveClass: "bg-green-50 text-green-700 border-green-200 hover:border-green-400",
  },
];

export default function BlogClient({ posts }: { posts: Post[] }) {
  const [active, setActive] = useState("All");
  const articleListRef = useRef<HTMLDivElement>(null);
  const filtered = active === "All" ? posts : posts.filter((p) => p.category === active);

  function handleCategoryChange(cat: string) {
    setActive(cat);
    setTimeout(() => {
      articleListRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }

  return (
    <>
      {/* Blog Posts Grid */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">Latest Articles</h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 md:mb-10 max-w-3xl">
            North Jersey&apos;s climate is demanding — brutally cold winters, humid summers, and everything in between. Keeping your home comfortable year-round requires more than just turning a thermostat. Our HVAC technicians have put together these guides to help Morris County and North NJ homeowners understand their heating and cooling systems, catch small problems before they become expensive breakdowns, and make smarter decisions when it&apos;s time to repair or replace. Whether you&apos;re troubleshooting a furnace mid-January or trying to figure out why your AC can&apos;t keep up in July, you&apos;ll find practical, honest advice here — the same kind our techs give every customer. Have a question not covered here? Call us at (201) 787-5657 any time.
          </p>

          <div ref={articleListRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {filtered.map((post) => {
              const Icon = CATEGORY_ICONS[post.category] ?? Wind;
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <div className="h-2 bg-gradient-to-r from-orange-500 to-amber-500" />

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
                        <Icon className={`w-5 h-5 ${post.iconColor}`} />
                      </div>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide ${post.categoryColor}`}>
                        {post.category}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors leading-snug">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                      <span className="flex items-center gap-1 text-sm font-semibold text-blue-700 group-hover:gap-2 transition-all">
                        Read Article
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}

            {filtered.length === 0 && (
              <p className="col-span-3 py-16 text-center text-gray-400">
                No articles in this category yet.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Browse by Topic */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-5 md:mb-8 text-center">
            Browse by Topic
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {TOPICS.map(({ label, icon: Icon, activeClass, inactiveClass }) => (
              <button
                key={label}
                onClick={() => handleCategoryChange(label)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border font-semibold text-sm transition-all ${
                  active === label ? activeClass : inactiveClass
                }`}
              >
                {Icon && <Icon className="w-4 h-4" />}
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
