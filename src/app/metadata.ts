import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Air2Cool | North NJ HVAC Company | Heating & Cooling Near Me",
  
  description:
    "Air2Cool — trusted North NJ HVAC company since 1998. Furnace repair, AC installation & 24/7 service near you. 5.0-star Google rated. Call (201) 787-5657.",
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
    title: "Air2Cool | North NJ HVAC Company | Heating & Cooling Near Me",
    description:
      "Family-owned North NJ HVAC company since 1998. Furnace repair, AC installation & 24/7 emergency service near you. 5.0-star Google rated. Call (201) 787-5657.",
    url: "https://www.air2cool.com",
    siteName: "Air2Cool Heating & Cooling",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Air2Cool | North NJ HVAC Company | Near Me",
    description:
      "Family-owned North NJ HVAC company since 1998. Furnace repair, AC installation & 24/7 emergency service near you. 5.0-star Google rated. Call (201) 787-5657.",
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
    google: "c2C2TRmiBcuVHC2eExcNJkpNVJHPYpWpQsaojeTeaEI",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  
  // Additional metadata
  alternates: {
    canonical: "https://www.air2cool.com",
  },
  
  // Icons/Favicon configuration
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
  },
  manifest: "/site.webmanifest",
  
  // Geo tags for local SEO
  other: {
    'geo.region': 'US-NJ',
    'geo.placename': 'Wharton, New Jersey',
  },
};
