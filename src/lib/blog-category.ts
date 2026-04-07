import { Flame, Wind, Wrench, type LucideIcon } from "lucide-react";

export type BlogCategoryTheme = {
  chipClassName: string;
  iconClassName: string;
  iconBgClassName: string;
  accentClassName: string;
  activeClassName: string;
  inactiveClassName: string;
  Icon: LucideIcon;
};

const DEFAULT_THEME: BlogCategoryTheme = {
  chipClassName: "text-slate-700 bg-slate-100",
  iconClassName: "text-slate-600",
  iconBgClassName: "bg-slate-100",
  accentClassName: "from-slate-700 to-slate-500",
  activeClassName: "bg-slate-800 text-white border-slate-800",
  inactiveClassName: "bg-white text-slate-700 border-slate-200 hover:border-slate-400",
  Icon: Wrench,
};

const CATEGORY_THEMES: Record<string, BlogCategoryTheme> = {
  Cooling: {
    chipClassName: "text-blue-700 bg-blue-50",
    iconClassName: "text-blue-600",
    iconBgClassName: "bg-blue-50",
    accentClassName: "from-blue-600 to-cyan-500",
    activeClassName: "bg-blue-500 text-white border-blue-500",
    inactiveClassName: "bg-blue-50 text-blue-700 border-blue-200 hover:border-blue-400",
    Icon: Wind,
  },
  Heating: {
    chipClassName: "text-orange-700 bg-orange-50",
    iconClassName: "text-orange-600",
    iconBgClassName: "bg-orange-50",
    accentClassName: "from-orange-500 to-amber-500",
    activeClassName: "bg-orange-500 text-white border-orange-500",
    inactiveClassName: "bg-orange-50 text-orange-700 border-orange-200 hover:border-orange-400",
    Icon: Flame,
  },
  Maintenance: {
    chipClassName: "text-green-700 bg-green-50",
    iconClassName: "text-green-600",
    iconBgClassName: "bg-green-50",
    accentClassName: "from-emerald-500 to-teal-500",
    activeClassName: "bg-green-500 text-white border-green-500",
    inactiveClassName: "bg-green-50 text-green-700 border-green-200 hover:border-green-400",
    Icon: Wrench,
  },
};

export function getBlogCategoryTheme(category: string): BlogCategoryTheme {
  return CATEGORY_THEMES[category] ?? DEFAULT_THEME;
}

