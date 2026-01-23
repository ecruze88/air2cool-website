"use client";

import { useState } from "react";
import { ChevronDown, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";

const FAQ_CATEGORIES = {
  "Emergency Services": [
    {
      question: "Do you offer 24/7 emergency HVAC service?",
      answer: "Yes! Air2Cool provides 24/7 emergency HVAC service across North New Jersey. We understand that heating and cooling emergencies don't wait for business hours. Whether your furnace stops working on Christmas Eve or your AC fails during a summer heatwave, our Licensed Master HVAC Technicians are available day or night. We typically respond within 1-2 hours for emergency calls in Morris, Sussex, Warren, Essex, Passaic, Union, and Bergen County. Call (201) 787-5657 for immediate assistance.",
      keywords: "24/7 emergency HVAC, emergency furnace repair, emergency AC repair North NJ"
    },
    {
      question: "What qualifies as an HVAC emergency?",
      answer: "An HVAC emergency includes: complete heating system failure in winter, no AC during extreme heat (especially with elderly or young children), gas leaks or gas odors, electrical issues with HVAC equipment, water leaks from HVAC systems, strange burning smells from furnace or AC, carbon monoxide detector alerts, or refrigerant leaks. If you're experiencing any of these issues, call us immediately at (201) 787-5657.",
      keywords: "HVAC emergency, furnace emergency, AC emergency, heating emergency"
    },
    {
      question: "How fast can you respond to emergency calls?",
      answer: "For emergency HVAC calls in North New Jersey, we typically respond within 1-2 hours. Our response time depends on your location and current service demand, but we prioritize emergency situations involving no heat in winter, no AC with vulnerable family members, or safety issues like gas leaks.",
      keywords: "fast HVAC response time, emergency HVAC response NJ, quick furnace repair"
    }
  ],
  
  "Services & Repairs": [
    {
      question: "What HVAC brands do you service and repair?",
      answer: "Air2Cool services all major HVAC brands including Trane, Carrier, Lennox, Rheem, Goodman, American Standard, York, Mitsubishi, Daikin, Fujitsu, Bryant, Amana, Coleman, Payne, and more. Our technicians are trained on both residential and commercial HVAC systems. We have extensive experience with heat pumps, mini-splits, ductless systems, and traditional central air systems.",
      keywords: "HVAC brands serviced, Trane repair, Carrier repair, all HVAC brands NJ"
    },
    {
      question: "How do I know if I need repair or replacement?",
      answer: "Key factors: Age (15-20+ years = replace), Frequent repairs (multiple times/year), Rising energy bills, Uneven heating/cooling, Loud noises or strange smells, R-22 refrigerant systems. Our technicians provide honest assessments - if repair makes sense, we repair. If replacement is more cost-effective, we explain why with options. We never push unnecessary replacements. Call (201) 787-5657.",
      keywords: "repair vs replace HVAC, when to replace furnace, when to replace AC"
    },
    {
      question: "What's included in HVAC maintenance?",
      answer: "Comprehensive maintenance includes: filter replacement, refrigerant check, electrical inspection, condensate drain cleaning, discharge temp verification, coil cleaning and disinfection, outdoor unit washing, thermostat calibration, system testing. Regular maintenance prevents 85% of breakdowns and extends system life 5-10 years.",
      keywords: "HVAC tune-up, HVAC maintenance, furnace maintenance, AC maintenance"
    },
    {
      question: "Do you install new HVAC systems?",
      answer: "Yes! We specialize in complete HVAC installations including furnaces, central AC, heat pumps, ductless mini-splits, boilers, and commercial HVAC. We provide proper sizing (Manual J calculations), professional installation, and FREE house cleaning with every install. Includes complete design, ductwork inspection, thermostat installation, permits, warranties. Financing available. Call (201) 787-5657.",
      keywords: "HVAC installation NJ, new furnace, new AC, heat pump installation"
    },
    {
      question: "Do you service commercial HVAC?",
      answer: "Yes! We service commercial HVAC including rooftop units, commercial refrigeration, walk-in coolers/freezers, ice machines, package units, and more. We serve restaurants, retail, offices, warehouses, and medical facilities. Available 24/7 for commercial emergencies. Call (201) 787-5657.",
      keywords: "commercial HVAC NJ, commercial AC repair, commercial refrigeration"
    }
  ],
  
  "Service Areas & Availability": [
    {
      question: "What areas do you serve in North NJ?",
      answer: "Air2Cool serves all of North New Jersey including Morris County (Morristown, Dover, Randolph, Rockaway, Denville, Boonton, Parsippany, Madison, Wharton), Sussex County (Newton, Sparta, Hopatcong, Vernon), Warren County (Hackettstown, Washington, Phillipsburg), Essex County (Newark, Montclair, Livingston, West Orange), Passaic County (Paterson, Clifton, Wayne, Passaic), Union County (Elizabeth, Union, Summit, Westfield), and Bergen County (Hackensack, Paramus, Fair Lawn, Fort Lee). Call (201) 787-5657.",
      keywords: "HVAC Morris County, HVAC Sussex County, HVAC service North NJ"
    },
    {
      question: "What are your business hours?",
      answer: "Office hours: Monday-Friday, 7 AM-9 PM. However, we're available 24/7 for emergency HVAC service. Weekend appointments available. Call (201) 787-5657.",
      keywords: "HVAC business hours, weekend HVAC service, 24/7 HVAC"
    }
  ],
  
  "Pricing & Payment": [
    {
      question: "Do you provide free estimates?",
      answer: "Yes! Free estimates for new HVAC installations, system replacements, and major repairs. Diagnostic service calls have a standard fee that applies to repair if you proceed. Transparent pricing, no hidden fees. Includes detailed assessment, multiple equipment options, cost breakdown, rebates, and financing options. Call (201) 787-5657.",
      keywords: "free HVAC estimate, HVAC cost, furnace installation cost"
    },
    {
      question: "Do you offer financing?",
      answer: "Yes! Flexible financing through GreenSky and JCP&L programs. Options: 0% APR for 60 months, 9.99% APR for 120 months, loans $2,500-$55,000. Quick online approval. We accept all major credit cards, checks, and cash. Ask about current promotions: (201) 787-5657.",
      keywords: "HVAC financing, 0% financing HVAC, payment plans"
    },
    {
      question: "Are there warranties on your work?",
      answer: "Yes! All installations include manufacturer warranty (5-10 years on parts), workmanship warranty on labor, and extended warranty options. Repairs include warranty on parts and labor. We register all warranties for you and provide complete warranty documentation.",
      keywords: "HVAC warranty, furnace warranty, AC warranty, installation warranty"
    }
  ],
  
  "Equipment & Technology": [
    {
      question: "What is a heat pump?",
      answer: "Heat pumps provide both heating and cooling. They move heat rather than generate it, making them 2-3x more energy efficient. Benefits: lower energy bills (up to 50% savings), year-round comfort, environmentally friendly, eligible for rebates/tax credits. Modern heat pumps work well even in cold NJ winters. Ideal for homes without gas lines. Call (201) 787-5657.",
      keywords: "heat pump NJ, heat pump vs furnace, energy efficient heating"
    },
    {
      question: "What are ductless mini-splits?",
      answer: "Ductless mini-splits are flexible HVAC solutions for homes without ductwork, additions, garages. Benefits: no ductwork required, zone control (different temps per room), high efficiency (SEER 20+), quiet operation, sleek design, heating + cooling. Ideal for older homes, additions. We install Mitsubishi, Daikin, Fujitsu. Call (201) 787-5657.",
      keywords: "ductless mini split NJ, mini split installation, zone heating"
    },
    {
      question: "Should I get a smart thermostat?",
      answer: "Smart thermostats (Nest, Ecobee, Honeywell WiFi) offer: energy savings (10-23%), remote smartphone control, learning algorithms, usage reports, Alexa/Google integration. Most see ROI within 2 years. We install all major brands. Typically $200-400 installed. Some eligible for rebates. Call (201) 787-5657.",
      keywords: "smart thermostat installation, Nest, Ecobee, WiFi thermostat"
    }
  ],
  
  "Air Quality & Health": [
    {
      question: "How can I improve indoor air quality?",
      answer: "Solutions: UV air filtration (kills bacteria/viruses/mold), HEPA filtration (removes 99.97% particles), iWave-R purification (kills COVID-19), whole-house humidifiers, air exchangers, duct cleaning, regular filter changes. Can reduce airborne germs by 90%+. Important for allergies, asthma, children, elderly. Free assessment: (201) 787-5657.",
      keywords: "indoor air quality NJ, air purification, UV filtration, HEPA filter"
    },
    {
      question: "How often change HVAC filter?",
      answer: "Standard 1-inch: every 1-2 months. Pleated: every 3 months. HEPA: 6-12 months. Change more if you have pets (monthly), allergies (monthly), construction (every 2 weeks). Signs needed: visible dirt, reduced airflow, higher bills, more dust, constant HVAC running. Call (201) 787-5657.",
      keywords: "HVAC filter replacement, how often change air filter, furnace filter"
    },
    {
      question: "Do you install humidifiers?",
      answer: "Yes! Whole-house humidifiers maintain optimal humidity (35-45%). Benefits: healthier skin/respiratory, prevents dry air, protects wood furniture/floors, reduces static, helps feel warmer, lowers energy bills. We install Aprilaire, Honeywell. Winter in NJ creates very dry air. $400-800 installed. Call (201) 787-5657.",
      keywords: "whole house humidifier, furnace humidifier, humidifier installation NJ"
    }
  ],
  
  "Energy Efficiency": [
    {
      question: "How to lower heating/cooling bills?",
      answer: "Top ways: Upgrade to high-efficiency system (16+ SEER, 95%+ AFUE), Install smart thermostat (save 10-23%), Regular maintenance (5-15% improvement), Seal ductwork (prevents 20-30% loss), Add insulation, Replace old windows/doors, Change filters regularly, Use ceiling fans, Set moderate temps (68°F winter, 78°F summer). Many upgrades eligible for rebates. Call (201) 787-5657.",
      keywords: "lower heating bill, reduce cooling costs, energy efficient HVAC"
    },
    {
      question: "Are there HVAC rebates available?",
      answer: "Yes! NJ Clean Energy rebates (up to $3,500), Utility rebates (JCP&L, PSE&G), Federal tax credits (up to $2,000 for heat pumps, 30% geothermal), Manufacturer rebates. Requirements: minimum efficiency ratings (SEER 16+, AFUE 95%+), professional installation. We handle all paperwork. Total savings can reach $4,000-6,000. Call (201) 787-5657.",
      keywords: "HVAC rebates NJ, energy rebates, tax credits HVAC"
    }
  ]
};

export default function FAQClient() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (question: string) => {
    setOpenItems(prev =>
      prev.includes(question)
        ? prev.filter(q => q !== question)
        : [...prev, question]
    );
  };

  // Generate JSON-LD structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": Object.values(FAQ_CATEGORIES).flat().map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <main className="bg-white">
        {/* Hero Section - MOBILE OPTIMIZED */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-10 md:py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-3 md:mb-4">
              HVAC FAQ
            </h1>
            <p className="text-base md:text-xl text-blue-100">
              Everything about HVAC service in North New Jersey
            </p>
          </div>
        </section>

        {/* Quick Contact - MOBILE OPTIMIZED */}
        <section className="bg-red-600 text-white py-3 md:py-4">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6 text-center">
              <div className="flex items-center gap-2 text-sm md:text-base">
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                <span className="font-semibold">24/7 Emergency:</span>
                <a href="tel:+12017875657" className="underline font-bold">(201) 787-5657</a>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/30"></div>
              <Link href="/contact" className="flex items-center gap-2 hover:underline text-sm md:text-base">
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                <span className="font-semibold">Request Service</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Table of Contents - MOBILE OPTIMIZED */}
        <section className="py-8 md:py-10 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 text-center">Quick Navigation</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
              {Object.keys(FAQ_CATEGORIES).map((category) => (
                <a
                  key={category}
                  href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-white rounded-lg border-2 border-gray-200 p-3 md:p-4 hover:border-blue-500 hover:shadow-md transition-all text-center font-semibold text-gray-900 text-xs md:text-base"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Categories - MOBILE OPTIMIZED */}
        <section className="py-10 md:py-16">
          <div className="max-w-4xl mx-auto px-6">
            {Object.entries(FAQ_CATEGORIES).map(([category, faqs]) => (
              <div
                key={category}
                id={category.toLowerCase().replace(/\s+/g, '-')}
                className="mb-10 md:mb-16"
              >
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 md:mb-6 pb-3 md:pb-4 border-b-4 border-blue-600">
                  {category}
                </h2>
                
                <div className="space-y-3 md:space-y-4">
                  {faqs.map((faq, idx) => {
                    const isOpen = openItems.includes(faq.question);
                    
                    return (
                      <div
                        key={idx}
                        className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-blue-500 transition-colors"
                      >
                        <button
                          onClick={() => toggleItem(faq.question)}
                          className="w-full text-left px-4 md:px-6 py-4 md:py-5 flex items-center justify-between gap-3 md:gap-4 bg-white hover:bg-gray-50 transition-colors"
                        >
                          <span className="text-base md:text-lg font-bold text-gray-900 pr-2 md:pr-4">
                            {faq.question}
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 md:w-6 md:h-6 text-blue-600 shrink-0 transition-transform ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        
                        {isOpen && (
                          <div className="px-4 md:px-6 py-4 md:py-5 bg-gray-50 border-t-2 border-gray-200">
                            <p className="text-sm md:text-base text-gray-700 leading-relaxed whitespace-pre-line">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA - MOBILE OPTIMIZED */}
        <section className="py-10 md:py-12 bg-gradient-to-r from-blue-700 to-blue-600">
          <div className="max-w-4xl mx-auto px-6 text-center text-white">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-3 md:mb-4">
              Still Have Questions?
            </h2>
            <p className="text-base md:text-xl text-blue-100 mb-6 md:mb-8">
              Our friendly team is here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <a
                href="tel:+12017875657"
                className="bg-white text-blue-700 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg hover:bg-gray-50 transition inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                Call (201) 787-5657
              </a>
              <Link
                href="/contact"
                className="bg-white/10 backdrop-blur text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg border-2 border-white hover:bg-white/20 transition"
              >
                Request Service Online
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}