import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Air2Cool Heating & Cooling | HVAC Repair & Installation North NJ | Morris County",
    template: "%s | Air2Cool Heating & Cooling",
  },
  description:
    "Air2Cool: Family-owned HVAC contractor serving Morris, Sussex, Warren, Essex, Passaic, Union & Bergen County since 2008. 24/7 emergency service. Furnace repair, AC installation, heat pumps. Licensed & insured. Call (201) 787-5657.",
  keywords: [
    // Primary Keywords
    "HVAC North NJ",
    "HVAC Morris County",
    "HVAC contractor North Jersey",
    
    // Service Keywords
    "furnace repair Morris County",
    "AC repair North NJ",
    "air conditioning installation NJ",
    "heat pump installation Morris County",
    "HVAC emergency service NJ",
    "furnace installation North Jersey",
    "AC replacement Morris County",
    "ductless mini split NJ",
    "commercial HVAC North NJ",
    "preventative HVAC maintenance",
    
    // Location Keywords
    "HVAC Morristown NJ",
    "HVAC Dover NJ",
    "HVAC Randolph NJ",
    "HVAC Wharton NJ",
    "HVAC Rockaway NJ",
    "HVAC Denville NJ",
    "HVAC Parsippany NJ",
    "HVAC Madison NJ",
    
    // Long-tail Keywords
    "24/7 emergency HVAC repair NJ",
    "same day AC repair Morris County",
    "affordable furnace installation North NJ",
    "licensed HVAC contractor Morris County",
    "family owned HVAC company NJ",
    "best HVAC company North Jersey",
    "HVAC financing North NJ",
    "free HVAC estimate Morris County",
  ],
  authors: [{ name: "Air2Cool Heating & Cooling" }],
  creator: "Air2Cool Heating & Cooling",
  publisher: "Air2Cool Heating & Cooling",
  metadataBase: new URL("https://www.air2cool.com"),
  
  // Enhanced metadata
  category: "HVAC Services",
  classification: "Local Business - HVAC Contractor",

  openGraph: {
    title: "Air2Cool Heating & Cooling | HVAC Repair & Installation North NJ",
    description:
      "Family-owned HVAC contractor serving North NJ since 2008. 24/7 emergency furnace & AC repair. Licensed, insured, 5.0 Google rating. Call (201) 787-5657 for service.",
    url: "https://www.air2cool.com",
    siteName: "Air2Cool Heating & Cooling",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Air2Cool Heating & Cooling - HVAC Services in Morris County & North NJ",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Air2Cool Heating & Cooling | HVAC Services North NJ",
    description:
      "24/7 HVAC repair & installation in Morris County. Family-owned since 2008. Licensed & insured. 5.0 ⭐ rated. Emergency service available.",
    images: ["/og-image.jpg"],
    creator: "@air2cool",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verification tags
  verification: {
    google: "your-google-verification-code-here",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  
  // Additional metadata
  alternates: {
    canonical: "https://www.air2cool.com",
  },
  
  // Geo tags for local SEO
  other: {
    'geo.region': 'US-NJ',
    'geo.placename': 'Wharton, New Jersey',
    'geo.position': '40.8932;-74.5815', // Wharton, NJ coordinates
  },
};

// LocalBusiness Schema for SEO
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  "@id": "https://www.air2cool.com/#organization",
  "name": "Air2Cool Heating & Cooling",
  "legalName": "Air2Cool Heating/AC & Refrigeration",
  "url": "https://www.air2cool.com",
  "logo": "https://www.air2cool.com/Air2Cool-HeatingAC-&-Refrigeration-Logo-237w.webp",
  "image": "https://www.air2cool.com/og-image.jpg",
  "description": "Family-owned HVAC contractor serving North New Jersey since 2008. Specializing in furnace repair, AC installation, heat pumps, and 24/7 emergency service.",
  "telephone": "+1-201-787-5657",
  "email": "air2cool1@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Wharton", // Add your actual street address
    "addressLocality": "Wharton",
    "addressRegion": "NJ",
    "postalCode": "07885", // Add your actual ZIP
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "40.8932",
    "longitude": "-74.5815"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Morristown",
      "containedIn": {
        "@type": "State",
        "name": "New Jersey"
      }
    },
    {
      "@type": "City",
      "name": "Dover",
      "containedIn": {
        "@type": "State",
        "name": "New Jersey"
      }
    },
    {
      "@type": "City",
      "name": "Randolph",
      "containedIn": {
        "@type": "State",
        "name": "New Jersey"
      }
    },
    // Add more cities as needed
    {
      "@type": "AdministrativeArea",
      "name": "Morris County"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Sussex County"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Warren County"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Essex County"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Passaic County"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Union County"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Bergen County"
    }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "07:00",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59",
      "description": "24/7 Emergency Service"
    }
  ],
  "priceRange": "$$",
  "paymentAccepted": ["Cash", "Check", "Credit Card", "Financing"],
  "currenciesAccepted": "USD",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "150",
    "bestRating": "5",
    "worstRating": "1"
  },
  "sameAs": [
    "https://www.facebook.com/profile.php?id=100063904906666",
    "https://www.instagram.com/air2cool7/",
    "https://www.youtube.com/@air2cool831",
    "https://www.tiktok.com/@air2cool.com0"
  ],
  "founder": {
    "@type": "Person",
    "name": "Hector" // Add last name if you want
  },
  "foundingDate": "2008",
  "slogan": "Clean installs, honest pricing, fast service",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "40.8932",
      "longitude": "-74.5815"
    },
    "geoRadius": "50000" // 50km service radius
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "HVAC Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Furnace Repair",
          "description": "Emergency and scheduled furnace repair services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AC Repair",
          "description": "Air conditioning repair and maintenance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "HVAC Installation",
          "description": "New HVAC system installation with professional sizing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Heat Pump Installation",
          "description": "Energy-efficient heat pump systems"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mini Split Installation",
          "description": "Ductless mini-split system installation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Air Filtration",
          "description": "Indoor air quality and filtration systems"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Preventative Maintenance",
          "description": "Regular HVAC maintenance programs"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Refrigeration",
          "description": "Commercial HVAC and refrigeration services"
        }
      }
    ]
  }
};