import type { Metadata } from "next";
import { Calendar, ChevronLeft, Tag } from "lucide-react";
import { compileMDX } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogMdxComponents } from "@/components/blog/mdx-components";
import { getBlogCategoryTheme } from "@/lib/blog-category";
import {
  formatDate,
  getPostBySlug,
  getPublishedPosts,
  isPostPublished,
} from "@/lib/blog";

export const revalidate = 60;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post || !isPostPublished(post)) {
    return {
      title: "Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: {
      absolute: post.seoTitle,
    },
    description: post.seoDescription,
    keywords: post.tags,
    authors: [{ name: post.author }],
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishDate,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.seoDescription,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post || !isPostPublished(post)) {
    notFound();
  }

  const theme = getBlogCategoryTheme(post.category);
  const { content } = await compileMDX({
    source: post.content,
    components: blogMdxComponents,
  });

  const relatedPosts = (await getPublishedPosts())
    .filter((candidate) => candidate.slug !== post.slug)
    .filter(
      (candidate) =>
        candidate.category === post.category || candidate.tags.some((tag) => post.tags.includes(tag))
    )
    .slice(0, 2);

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seoDescription,
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    articleSection: post.category,
    keywords: post.tags.join(", "),
    url: `https://www.air2cool.com/blog/${post.slug}`,
    author: {
      "@type": "Organization",
      name: post.author,
      "@id": "https://www.air2cool.com/#organization",
    },
    publisher: {
      "@type": "HVACBusiness",
      "@id": "https://www.air2cool.com/#organization",
      name: "Air2Cool Heating & Cooling",
      url: "https://www.air2cool.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.air2cool.com/Air2Cool-HeatingAC-&-Refrigeration-Logo-237w.webp",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.air2cool.com/blog/${post.slug}`,
    },
  };

  const Icon = theme.Icon;

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-10 pb-20 md:pt-14 md:pb-24">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-blue-100 hover:text-white transition mb-6">
            <ChevronLeft className="w-4 h-4" />
            Back to all articles
          </Link>

          <div className="mb-4 md:mb-5">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold tracking-wide ${theme.chipClassName} bg-white/95`}>
              <Icon className={`w-4 h-4 ${theme.iconClassName}`} />
              {post.category}
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-5">{post.title}</h1>

          <p className="text-base md:text-xl text-gray-200 leading-relaxed max-w-3xl mb-6">{post.excerpt}</p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-blue-100">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formatDate(post.publishDate)}
            </span>
            <span>By {post.author}</span>
            {post.tags.length > 0 ? (
              <span className="inline-flex items-center gap-1.5">
                <Tag className="w-4 h-4" />
                {post.tags.join(" · ")}
              </span>
            ) : null}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
          </svg>
        </div>
      </section>

      <article className="py-10 md:py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-10 shadow-sm">
            {content}
          </div>
        </div>
      </article>

      <section className="py-10 md:py-12 bg-gradient-to-r from-slate-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3 md:mb-4">Need a Pro? We&apos;re Just a Call Away.</h2>
          <p className="text-gray-300 text-sm md:text-base mb-5 md:mb-8">
            Air2Cool serves Morris County and North NJ. 24/7 emergency service, licensed and insured.
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

      {relatedPosts.length > 0 ? (
        <section className="bg-gray-50 py-10 md:py-14 border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-xl font-extrabold text-gray-900 mb-5">Related Articles</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {relatedPosts.map((relatedPost) => {
                const relatedTheme = getBlogCategoryTheme(relatedPost.category);
                return (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="bg-white rounded-xl p-5 border border-gray-200 hover:shadow-md transition-shadow"
                  >
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${relatedTheme.chipClassName}`}>
                      {relatedPost.category}
                    </span>
                    <p className="font-bold text-gray-900 mt-2 text-sm">{relatedPost.title}</p>
                    <p className="text-xs text-gray-500 mt-2">{formatDate(relatedPost.publishDate)}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}

