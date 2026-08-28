import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ArchitectureLink = { label: string; href: string };

export default function EquipmentArchitectureLinks({
  title,
  description,
  links,
}: {
  title: string;
  description: string;
  links: readonly ArchitectureLink[];
}) {
  return (
    <section className="py-10 bg-slate-50 border-y border-slate-200">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">{title}</h2>
        <p className="text-gray-700 leading-relaxed mb-5">{description}</p>
        <div className="flex flex-wrap gap-3">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="inline-flex items-center gap-2 bg-white hover:bg-blue-50 border border-slate-300 hover:border-blue-400 text-blue-700 px-4 py-2.5 rounded-full font-semibold transition-colors">
              {link.label} <ArrowRight className="w-4 h-4" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
