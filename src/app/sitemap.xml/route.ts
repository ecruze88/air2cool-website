import CTA from "@/components/CTA";
import { MetadataRoute } from 'next'
 
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
  ]
  
  // Service pages
  const servicePages = [
    '/services/heating-repair',
    '/services/ac-repair',
    '/services/hvac-installation',
    '/services/air-filtration',
    '/services/preventative-maintenance',
    '/services/commercial-refrigeration',
  ]
  
  // Location pages (you can add these as you create them)
  const locationPages = [
    '/locations/morris-county',
    '/locations/sussex-county',
    '/locations/warren-county',
    '/locations/essex-county',
    '/locations/passaic-county',
    '/locations/union-county',
    '/locations/bergen-county',
  ]
  
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
    
    // Location pages - important for local SEO
    ...locationPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}