import Link from "next/link";
import type { MDXComponents } from "mdx/types";

export const blogMdxComponents: MDXComponents = {
  h2: (props) => <h2 className="mt-12 text-2xl md:text-3xl font-extrabold text-gray-900" {...props} />,
  h3: (props) => <h3 className="mt-8 text-xl md:text-2xl font-bold text-gray-900" {...props} />,
  p: (props) => <p className="mt-4 text-base md:text-lg leading-8 text-gray-700" {...props} />,
  ul: (props) => <ul className="mt-4 list-disc space-y-3 pl-6 text-gray-700" {...props} />,
  ol: (props) => <ol className="mt-4 list-decimal space-y-3 pl-6 text-gray-700" {...props} />,
  li: (props) => <li className="pl-1 leading-8" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="mt-6 rounded-2xl border-l-4 border-blue-600 bg-blue-50 px-6 py-4 text-gray-800"
      {...props}
    />
  ),
  a: ({ href = "", ...props }) => {
    const className = "font-semibold text-blue-700 underline decoration-blue-200 underline-offset-4 transition hover:text-blue-900";

    if (href.startsWith("/")) {
      return <Link href={href} className={className} {...props} />;
    }

    return <a href={href} className={className} {...props} />;
  },
  strong: (props) => <strong className="font-bold text-gray-900" {...props} />,
  hr: (props) => <hr className="my-10 border-gray-200" {...props} />,
  code: (props) => <code className="rounded bg-slate-100 px-1.5 py-0.5 text-[0.95em] text-slate-800" {...props} />,
  pre: (props) => (
    <pre className="mt-6 overflow-x-auto rounded-2xl bg-slate-900 px-5 py-4 text-sm text-slate-100" {...props} />
  ),
};

