export type SeasonalFocus = "heating" | "cooling" | "balanced";

// Change only this value when the site's seasonal emphasis changes.
export const SEASONAL_FOCUS: SeasonalFocus = "heating";

type SeasonalLink = { label: string; href: string };
type NavigationSection = "heating" | "cooling" | "airQuality" | "maintenance" | "commercial";

type SeasonalContent = {
  heroHeading: string;
  heroDescription: string;
  primaryCta: SeasonalLink;
  servicesHeading: string;
  servicesDescription: string;
  calloutEyebrow: string;
  calloutHeading: string;
  calloutDescription: string;
  calloutLinks: readonly SeasonalLink[];
  priorityRoutes: readonly string[];
  navigationOrder: readonly NavigationSection[];
};

export const SEASONAL_CONTENT: Record<SeasonalFocus, SeasonalContent> = {
  heating: {
    heroHeading: "Heating, Boiler & HVAC Service Done Right.",
    heroDescription: "Heating repair, boiler maintenance, heating-system pumps, installations, cooling, refrigeration, and commercial mechanical service throughout North Jersey.",
    primaryCta: { label: "Request Heating Service", href: "/contact" },
    servicesHeading: "Heating & Complete HVAC Services",
    servicesDescription: "Heating and boiler support is featured for the season, with cooling, refrigeration, and year-round services still easy to reach.",
    calloutEyebrow: "Planned heating care",
    calloutHeading: "Preventative Heating, Boiler & Pump Maintenance",
    calloutDescription: "Keep heating maintenance planned and visible. Air2Cool provides boiler maintenance, heating circulation pump service, and commercial HVAC mechanical support throughout North Jersey. Service scope is tailored to the equipment and application.",
    calloutLinks: [
      { label: "Boiler maintenance", href: "/services/boiler-maintenance" },
      { label: "Heating pump service", href: "/services/heating-pump-services" },
      { label: "Commercial boiler service", href: "/services/commercial-boiler-services" },
    ],
    priorityRoutes: ["/services/heating-repair", "/services/boiler-maintenance", "/services/heating-pump-services", "/services/heating-installation", "/services/preventative-maintenance", "/services/humidifier"],
    navigationOrder: ["heating", "maintenance", "cooling", "airQuality", "commercial"],
  },
  cooling: {
    heroHeading: "Air Conditioning & HVAC Service Done Right.",
    heroDescription: "AC repair, cooling maintenance, system installation, heat pumps, ductless service, heating, refrigeration, and commercial HVAC support throughout North Jersey.",
    primaryCta: { label: "Request Cooling Service", href: "/contact" },
    servicesHeading: "Cooling & Complete HVAC Services",
    servicesDescription: "Air conditioning and cooling support is featured for the season, with heating, refrigeration, and year-round services still easy to reach.",
    calloutEyebrow: "Warm-weather service",
    calloutHeading: "AC Repair, Maintenance & Installation",
    calloutDescription: "Air2Cool provides air-conditioning diagnostics, preventative maintenance, replacement planning, and ductless service throughout North Jersey. Recommendations depend on the equipment, property, and operating condition.",
    calloutLinks: [
      { label: "AC repair", href: "/services/ac-repair" },
      { label: "Cooling installation", href: "/services/cooling-installation" },
      { label: "Ductless mini splits", href: "/services/mini-split" },
    ],
    priorityRoutes: ["/services/ac-repair", "/services/cooling-installation", "/services/mini-split", "/services/preventative-maintenance", "/services/air-quality", "/services/commercial-refrigeration"],
    navigationOrder: ["cooling", "maintenance", "heating", "airQuality", "commercial"],
  },
  balanced: {
    heroHeading: "Heating, Cooling & Refrigeration Done Right.",
    heroDescription: "Residential and commercial HVAC service, installation, boilers, refrigeration, and 24/7 emergency service throughout North Jersey.",
    primaryCta: { label: "Schedule Service", href: "/contact" },
    servicesHeading: "Complete HVAC Services",
    servicesDescription: "Heating, cooling, maintenance, installation, air quality, and commercial support for North Jersey properties.",
    calloutEyebrow: "Year-round planning",
    calloutHeading: "Preventative HVAC Maintenance",
    calloutDescription: "Plan heating and cooling maintenance around the equipment, season, and application. Residential and commercial options are available with agreement-specific scope.",
    calloutLinks: [
      { label: "Preventative maintenance", href: "/services/preventative-maintenance" },
      { label: "Heating repair", href: "/services/heating-repair" },
      { label: "AC repair", href: "/services/ac-repair" },
    ],
    priorityRoutes: ["/services/preventative-maintenance", "/services/heating-repair", "/services/ac-repair", "/services/hvac-installation", "/services/commercial", "/services/commercial-refrigeration"],
    navigationOrder: ["heating", "cooling", "maintenance", "airQuality", "commercial"],
  },
};

export const ACTIVE_SEASONAL_CONTENT = SEASONAL_CONTENT[SEASONAL_FOCUS];

export function orderBySeasonalPriority<T extends { href: string }>(items: readonly T[]): T[] {
  const positions = new Map(ACTIVE_SEASONAL_CONTENT.priorityRoutes.map((href, index) => [href, index]));
  return items.map((item, index) => ({ item, index })).sort((a, b) => {
    const aPosition = positions.get(a.item.href) ?? Number.MAX_SAFE_INTEGER;
    const bPosition = positions.get(b.item.href) ?? Number.MAX_SAFE_INTEGER;
    return aPosition - bPosition || a.index - b.index;
  }).map(({ item }) => item);
}
