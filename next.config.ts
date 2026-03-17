import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Your existing settings
  reactStrictMode: true,
  
  // SEO & Performance additions
  compress: true,
  poweredByHeader: false,
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  
  // SEO headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
        ],
      },
      // Cache static assets aggressively
      {
        source: '/(.*\\.(?:jpg|jpeg|png|webp|avif|svg|gif|mp4|webm))',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  
  async redirects() {
    return [
      { source: '/schedule-service-now',            destination: '/contact',                            permanent: true },
      { source: '/commercial-refrigeration',         destination: '/services/commercial-refrigeration', permanent: true },
      { source: '/air-conditioning-repair-services', destination: '/services/ac-repair',               permanent: true },
      { source: '/hepa-filter-installation',           destination: '/services/air-quality',             permanent: true },
      { source: '/services/air-filtration',           destination: '/services/air-quality',             permanent: true },
      { source: '/hvac-system-installation',         destination: '/services/hvac-installation',       permanent: true },
      { source: '/humidifier',                       destination: '/services/humidifier',              permanent: true },
      { source: '/locations/bergen-county',          destination: '/service-areas/bergen-county',      permanent: true },
      { source: '/locations/essex-county',           destination: '/service-areas/essex-county',       permanent: true },
      { source: '/locations/morris-county',          destination: '/service-areas/morris-county',      permanent: true },
      { source: '/locations/sussex-county',          destination: '/service-areas/sussex-county',      permanent: true },
      { source: '/request-estimate-form',            destination: '/contact',                            permanent: true },
      { source: '/heating-system-repair-services',   destination: '/services/heating-repair',            permanent: true },
      { source: '/air-filtration-system-installation', destination: '/services/air-quality',            permanent: true },
      { source: '/what-to-do-if-your-heater-is-not-working', destination: '/services/heating-repair',   permanent: true },
      { source: '/locations/warren-county',           destination: '/service-areas/warren-county',        permanent: true },
      { source: '/locations/passaic-county',          destination: '/service-areas/passaic-county',       permanent: true },
      { source: '/preventative-hvac-maintenance',     destination: '/services/preventative-maintenance',  permanent: true },
    ]
  },

  // Performance optimizations
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;