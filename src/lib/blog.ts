import { cache } from "react";
import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export const BLOG_REVALIDATE_SECONDS = 60;

const BLOG_DIRECTORY = path.join(process.cwd(), "content", "blog");

export type BlogCategory = "Cooling" | "Heating" | "Maintenance" | string;

export type FaqEntry = {
  question: string;
  answer: string;
};

export type BlogFrontmatter = {
  title: string;
  slug: string;
  excerpt: string;
  publishDate: string;
  author: string;
  category: BlogCategory;
  tags: string[];
  seoTitle: string;
  seoDescription: string;
  isDraft?: boolean;
  faq?: FaqEntry[];
};

export type BlogPost = BlogFrontmatter & {
  content: string;
};

function normalizeTags(tags: unknown): string[] {
  if (Array.isArray(tags)) {
    return tags
      .map((tag) => String(tag).trim())
      .filter(Boolean);
  }

  if (typeof tags === "string") {
    return tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);
  }

  return [];
}

function validateFrontmatter(fileName: string, data: Record<string, unknown>): BlogFrontmatter {
  const slug = typeof data.slug === "string" && data.slug.trim() ? data.slug.trim() : fileName.replace(/\.mdx$/, "");
  const title = typeof data.title === "string" ? data.title.trim() : "";
  const excerpt = typeof data.excerpt === "string" ? data.excerpt.trim() : "";
  const publishDate =
    typeof data.publishDate === "string"
      ? data.publishDate.trim()
      : data.publishDate instanceof Date
        ? data.publishDate.toISOString()
        : "";
  const author = typeof data.author === "string" ? data.author.trim() : "Air2Cool Heating & Cooling";
  const category = typeof data.category === "string" ? data.category.trim() : "Maintenance";
  const seoTitle = typeof data.seoTitle === "string" ? data.seoTitle.trim() : title;
  const seoDescription = typeof data.seoDescription === "string" ? data.seoDescription.trim() : excerpt;
  const isDraft = data.isDraft === true;
  const tags = normalizeTags(data.tags);

  const faq: FaqEntry[] = Array.isArray(data.faq)
    ? data.faq
        .filter((item): item is { question: unknown; answer: unknown } => item !== null && typeof item === "object")
        .map((item) => ({
          question: typeof item.question === "string" ? item.question.trim() : "",
          answer: typeof item.answer === "string" ? item.answer.trim() : "",
        }))
        .filter((item) => item.question && item.answer)
    : [];

  if (!title || !excerpt || !publishDate || !seoTitle || !seoDescription) {
    throw new Error(`Invalid frontmatter in ${fileName}. Required fields are missing.`);
  }

  if (Number.isNaN(new Date(publishDate).getTime())) {
    throw new Error(`Invalid publishDate in ${fileName}: ${publishDate}`);
  }

  return {
    title,
    slug,
    excerpt,
    publishDate,
    author,
    category,
    tags,
    seoTitle,
    seoDescription,
    isDraft,
    faq: faq.length > 0 ? faq : undefined,
  };
}

async function readPostFile(fileName: string): Promise<BlogPost> {
  const filePath = path.join(BLOG_DIRECTORY, fileName);
  const source = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(source);

  return {
    ...validateFrontmatter(fileName, data as Record<string, unknown>),
    content: content.trim(),
  };
}

export const getAllPosts = cache(async (): Promise<BlogPost[]> => {
  const entries = await fs.readdir(BLOG_DIRECTORY, { withFileTypes: true });
  const mdxFiles = entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".mdx"))
    .map((entry) => entry.name);

  const posts = await Promise.all(mdxFiles.map(readPostFile));

  return posts.sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
});

export function isPostPublished(post: Pick<BlogPost, "publishDate" | "isDraft">, now = new Date()): boolean {
  return post.isDraft !== true && new Date(post.publishDate).getTime() <= now.getTime();
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => isPostPublished(post));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug);
}

export function formatDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "America/New_York",
  }).format(new Date(date));
}

