import { MetadataRoute } from 'next'
import townsData from '@/data/service-areas.json'
import { getPublishedPosts } from '@/lib/blog'

type Town = { slug: string; countySlug: string }

export const revalidate = 60;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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

  // Tool pages
  const toolPages = [
    '/tools/hvac-sizing',
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

    // Tool pages
    ...toolPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
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