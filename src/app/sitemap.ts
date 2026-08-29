import { MetadataRoute } from 'next'
import townsData from '@/data/service-areas.json'
import { getPublishedPosts } from '@/lib/blog'
import { INDEXED_BRANDS } from '@/data/brands'
import { NOINDEX_TOWN_SLUGS } from '@/data/noindex-towns'

type Town = { slug: string; countySlug: string }

export const revalidate = 60;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.air2cool.com'
  
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

  // Tool pages
  const toolPages = [
    '/tools/hvac-sizing',
  ]

  const spanishPages = [
    '/servicio-en-espanol',
  ]

  const equipmentArchitecturePages = [
    '/brands',
    '/equipment-we-service',
    ...INDEXED_BRANDS.map((brand) => `/brands/${brand.slug}`),
  ]

  // Blog pages — dynamically generated from published MDX posts
  const publishedPosts = await getPublishedPosts();
  const blogPages = [
    '/blog',
    ...publishedPosts.map((post) => `/blog/${post.slug}`),
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

  const towns = (townsData as { towns: Town[] }).towns.filter(
    (town) => !NOINDEX_TOWN_SLUGS.has(town.slug)
  )

  return [
    // Homepage - highest priority
    {
      url: baseUrl,
      changeFrequency: 'daily',
      priority: 1,
    },
    
    // Main pages - high priority
    ...mainPages.slice(1).map((page) => ({
      url: `${baseUrl}${page}`,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),
    
    // Service pages - high priority for SEO
    ...servicePages.map((page) => ({
      url: `${baseUrl}${page}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    
    // County pages - important for local SEO
    ...countyPages.map((page) => ({
      url: `${baseUrl}${page}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),

    // Tool pages
    ...toolPages.map((page) => ({
      url: `${baseUrl}${page}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),

    // Spanish-language page
    ...spanishPages.map((page) => ({
      url: `${baseUrl}${page}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),

    // Brand and equipment architecture. Omit lastModified rather than using build time.
    ...equipmentArchitecturePages.map((page) => ({
      url: `${baseUrl}${page}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),

    // Blog pages
    ...blogPages.map((page) => ({
      url: `${baseUrl}${page}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),

    // Town pages
    ...towns.map((town) => ({
      url: `${baseUrl}/service-areas/${town.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
