import type { MetadataRoute } from "next";
import townsData from "@/data/service-areas.json";

type Town = { slug: string; countySlug: string };

const BASE_URL = "https://www.air2cool.com";

const COUNTY_SLUGS = [
  "morris-county",
  "sussex-county",
  "warren-county",
  "essex-county",
  "passaic-county",
  "union-county",
  "bergen-county",
  "hunterdon-county",
  "somerset-county",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const towns = (townsData as { towns: Town[] }).towns;

  const townEntries: MetadataRoute.Sitemap = towns.map((town) => ({
    url: `${BASE_URL}/service-areas/${town.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const countyEntries: MetadataRoute.Sitemap = COUNTY_SLUGS.map((slug) => ({
    url: `${BASE_URL}/service-areas/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...countyEntries, ...townEntries];
}
