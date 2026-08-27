import type { MetadataRoute } from "next";
import townsData from "@/data/service-areas.json";
import { SERVICE_COUNTIES } from "@/config/company";

type Town = { slug: string; countySlug: string };

const BASE_URL = "https://www.air2cool.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const towns = (townsData as { towns: Town[] }).towns;

  const townEntries: MetadataRoute.Sitemap = towns.map((town) => ({
    url: `${BASE_URL}/service-areas/${town.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const countyEntries: MetadataRoute.Sitemap = SERVICE_COUNTIES.map((county) => ({
    url: `${BASE_URL}/service-areas/${county.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...countyEntries, ...townEntries];
}
