import { MetadataRoute } from 'next'
import townsData from '@/data/service-areas.json'

type Town = { slug: string; countySlug: string }

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.air2cool.com'
  const currentDate = new Date()
  
  // Main pages
  const mainPages = [
    '',
    '/services',
    '/service-areas',
    '/about',
    '/reviews',
    '/faq',
    '/contact',
    '/financing',
    '/maintenance-contract',
    '/troubleshooting',
    '/projects',
  ]
  
  // Service pages
  const servicePages = [
    '/services/heating-repair',
    '/services/ac-repair',
    '/services/hvac-installation',
    '/services/heating-installation',
    '/services/cooling-installation',
    '/services/air-quality',
    '/services/mini-split',
    '/services/preventative-maintenance',
    '/services/commercial',
    '/services/commercial-refrigeration',
    '/services/humidifier',
  ]

  // Blog pages
  const blogPages = [
    '/blog',
    '/blog/emergency-ac-repair-rockaway-nj',
    '/blog/hvac-allergy-season-nj',
    '/blog/hvac-maintenance-plan-nj',
    '/blog/ac-not-cooling-nj',
    '/blog/boiler-repair-morris-county-nj',
    '/blog/mini-split-installation-nj',
    '/blog/furnace-replacement-cost-nj',
    '/blog/ac-repair-morris-county-nj',
    '/blog/lower-energy-bills-hvac',
    '/blog/diy-furnace-checkup',
  ]

  // County pages - important for local SEO
  const countyPages = [
    '/service-areas/morris-county',
    '/service-areas/sussex-county',
    '/service-areas/warren-county',
    '/service-areas/essex-county',
    '/service-areas/passaic-county',
    '/service-areas/union-county',
    '/service-areas/bergen-county',
    '/service-areas/hunterdon-county',
    '/service-areas/somerset-county',
  ]

  const towns = (townsData as { towns: Town[] }).towns

  return [
    // Homepage - highest priority
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1,
    },
    
    // Main pages - high priority
    ...mainPages.slice(1).map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),
    
    // Service pages - high priority for SEO
    ...servicePages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    
    // County pages - important for local SEO
    ...countyPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),

    // Blog pages
    ...blogPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),

    // Town pages
    ...towns.map((town) => ({
      url: `${baseUrl}/service-areas/${town.slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}