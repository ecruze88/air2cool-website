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
      answer: "An HVAC emergency includes: complete heating system failure in winter, no AC during extreme heat (especially with elderly or young children), gas leaks or gas odors, electrical issues with HVAC equipment, water leaks from HVAC systems, strange burning smells from furnace or AC, carbon monoxide detector alerts, or refrigerant leaks. If you're experiencing any of these issues, call us immediately at (201) 787-5657. For non-emergency situations, you can schedule service during regular business hours.",
      keywords: "HVAC emergency, furnace emergency, AC emergency, heating emergency"
    },
    {
      question: "How fast can you respond to emergency calls?",
      answer: "For emergency HVAC calls in North New Jersey, we typically respond within 1-2 hours. Our response time depends on your location and current service demand, but we prioritize emergency situations involving no heat in winter, no AC with vulnerable family members, or safety issues like gas leaks. We serve Morris County, Sussex County, Warren County, Essex County, Passaic County, Union County, and Bergen County with fast emergency response times.",
      keywords: "fast HVAC response time, emergency HVAC response NJ, quick furnace repair"
    }
  ],
  
  "Services & Repairs": [
    {
      question: "What HVAC brands do you service and repair?",
      answer: "Air2Cool services all major HVAC brands including Trane, Carrier, Lennox, Rheem, Goodman, American Standard, York, Mitsubishi, Daikin, Fujitsu, Bryant, Amana, Coleman, Payne, and more. Our technicians are trained on both residential and commercial HVAC systems. We're Trane Certified Comfort Specialists and have extensive experience with heat pumps, mini-splits, ductless systems, and traditional central air systems. Whether you have a brand-name system or builder-grade equipment, we can diagnose and repair it.",
      keywords: "HVAC brands serviced, Trane repair, Carrier repair, all HVAC brands NJ"
    },
    {
      question: "How do I know if I need repair or replacement?",
      answer: "Here are key factors to consider: Age (systems over 15-20 years old are typically better replaced), Frequent repairs (if you're calling for service multiple times per year), Rising energy bills (inefficient systems cost more to run), Uneven heating/cooling (indicates system struggling), Loud noises or strange smells, R-22 refrigerant systems (no longer supported). Our technicians provide honest assessments - if a repair makes sense, we'll repair it. If replacement is more cost-effective long-term, we'll explain why and provide options. We never push unnecessary replacements. Get a free estimate: (201) 787-5657.",
      keywords: "repair vs replace HVAC, when to replace furnace, when to replace AC, HVAC replacement cost"
    },
    {
      question: "What's included in an HVAC tune-up or maintenance visit?",
      answer: "Our comprehensive HVAC maintenance includes: filter replacement (if provided or standard 1-inch filter for additional fee), refrigerant level check, electrical component inspection and tightening, condensate drain line cleaning, discharge temperature verification, visual mold inspection, odor neutralizer application to drain pan, evaporator coil disinfection, outdoor unit coil washing, thermostat calibration, system performance testing. Maintenance plan members receive 10% off all parts. Regular maintenance prevents 85% of HVAC breakdowns and extends system life by 5-10 years. Schedule maintenance: (201) 787-5657.",
      keywords: "HVAC tune-up, HVAC maintenance, furnace maintenance, AC maintenance, preventative maintenance"
    },
    {
      question: "Do you install new HVAC systems?",
      answer: "Yes! Air2Cool specializes in complete HVAC system installations including new furnaces, central air conditioners, heat pumps, ductless mini-split systems, boilers, and commercial HVAC. We provide proper system sizing (Manual J load calculations), professional installation, and free house cleaning with every new system installation. We're partnered with Trane for industry-leading equipment. Our installations include: complete system design, ductwork inspection/modification if needed, thermostat installation (WiFi thermostats available), electrical work, permits and inspections, warranty registration, system startup and testing. Financing available. Free estimates: (201) 787-5657.",
      keywords: "HVAC installation NJ, new furnace installation, new AC installation, heat pump installation, mini split installation"
    },
    {
      question: "Do you service commercial HVAC systems?",
      answer: "Yes, Air2Cool services commercial HVAC systems including rooftop units (RTUs), commercial refrigeration, walk-in coolers and freezers, ice machines, package units, split systems, VAV systems, exhaust fans, and HVAC management systems. We serve restaurants, retail stores, offices, warehouses, medical facilities, and other commercial properties across North New Jersey. Available 24/7 for commercial emergencies because we understand downtime costs you money. Call (201) 787-5657 for commercial HVAC service.",
      keywords: "commercial HVAC NJ, commercial AC repair, commercial refrigeration, restaurant HVAC"
    }
  ],
  
  "Service Areas & Availability": [
    {
      question: "What areas do you serve in North New Jersey?",
      answer: "Air2Cool serves all of North New Jersey including Morris County (Morristown, Dover, Randolph, Rockaway, Denville, Boonton, Parsippany, Madison, Wharton), Sussex County (Newton, Sparta, Hopatcong, Vernon), Warren County (Hackettstown, Washington, Phillipsburg), Essex County (Newark, Montclair, Livingston, West Orange, Bloomfield), Passaic County (Paterson, Clifton, Wayne, Passaic, Hawthorne), Union County (Elizabeth, Union, Summit, Westfield, Cranford), and Bergen County (Hackensack, Paramus, Fair Lawn, Fort Lee, Ridgewood). We've been serving North NJ since 2008. Call to confirm we serve your specific town: (201) 787-5657.",
      keywords: "HVAC Morris County, HVAC Sussex County, HVAC Warren County, HVAC service North NJ, HVAC near me"
    },
    {
      question: "What are your normal business hours?",
      answer: "Our office hours are Monday through Friday, 7:00 AM to 9:00 PM. However, we're available 24/7 for emergency HVAC service. Weekend appointments available. We understand that HVAC emergencies happen at inconvenient times, which is why we maintain 24-hour emergency availability for our North New Jersey customers. For non-emergency scheduling or questions, call during business hours at (201) 787-5657.",
      keywords: "HVAC business hours, weekend HVAC service, 24/7 HVAC"
    },
    {
      question: "How quickly can you schedule a non-emergency service call?",
      answer: "For non-emergency service calls, we typically schedule within 24-48 hours depending on the season. During peak seasons (summer for AC, winter for heating), scheduling may take 2-3 days. We always try to accommodate urgent situations as quickly as possible. Spring and fall are our best times for fast scheduling and are ideal for preventative maintenance before peak seasons. Schedule your service call: (201) 787-5657.",
      keywords: "HVAC appointment scheduling, fast HVAC service, same day HVAC"
    }
  ],
  
  "Pricing & Payment": [
    {
      question: "Do you provide free estimates?",
      answer: "Yes! Air2Cool provides free estimates for all new HVAC installations, system replacements, and major repairs. For diagnostic service calls, there is a standard service call fee that applies to the repair if you proceed with the work. We believe in transparent pricing with no hidden fees. Our estimates include: detailed system assessment, multiple equipment options (good, better, best), complete installation cost breakdown, available rebates and incentives, financing options. Get your free estimate: (201) 787-5657.",
      keywords: "free HVAC estimate, HVAC cost, furnace installation cost, AC installation cost"
    },
    {
      question: "Do you offer financing options?",
      answer: "Yes! We offer flexible financing through GreenSky and JCP&L Residential Energy Efficiency Program. Options include: 0% APR for 60 months on qualifying purchases, 9.99% APR for 120 months, loan amounts from $2,500 to $55,000. For qualifying energy-efficient upgrades, you may be eligible for 0% APR financing through the JCP&L program. We also accept all major credit cards, checks, and cash. Quick online approval process. Ask about current financing promotions: (201) 787-5657.",
      keywords: "HVAC financing, 0% financing HVAC, GreenSky financing, HVAC payment plans"
    },
    {
      question: "What payment methods do you accept?",
      answer: "Air2Cool accepts all major payment methods including cash, personal checks, business checks, all major credit cards (Visa, MasterCard, American Express, Discover), financing through GreenSky and JCP&L programs. Payment is due upon completion of service unless financing is arranged. We provide detailed invoices for all work performed.",
      keywords: "HVAC payment methods, pay for HVAC service"
    },
    {
      question: "Are there any warranties on your work?",
      answer: "Yes! All Air2Cool installations include: manufacturer's warranty on equipment (typically 5-10 years on parts), workmanship warranty on our installation labor, extended warranty options available on select equipment. Repairs include warranty on parts installed and labor performed. Trane equipment comes with industry-leading warranties. We also register all warranties on your behalf and provide you with warranty documentation. Specific warranty terms vary by equipment and service - we'll explain all warranty coverage before you commit.",
      keywords: "HVAC warranty, furnace warranty, AC warranty, installation warranty"
    }
  ],
  
  "Equipment & Technology": [
    {
      question: "What is a heat pump and should I consider one?",
      answer: "A heat pump is a highly efficient HVAC system that provides both heating and cooling. Unlike a traditional furnace, heat pumps move heat rather than generate it, making them 2-3x more energy efficient. Benefits include: lower energy bills (up to 50% savings), year-round comfort (heating and cooling), environmental friendly (no fossil fuels), eligible for rebates and tax credits, excellent for moderate climates. Modern heat pumps work efficiently even in cold New Jersey winters. They're ideal for homes without gas lines or those looking to reduce carbon footprint. Air2Cool installs all major heat pump brands. Free consultation: (201) 787-5657.",
      keywords: "heat pump NJ, heat pump vs furnace, heat pump cost, energy efficient heating"
    },
    {
      question: "What are ductless mini-split systems?",
      answer: "Ductless mini-split systems are flexible HVAC solutions perfect for: homes without ductwork, room additions, garages, workshops, multi-zone heating/cooling. Benefits include: no ductwork required (saves installation cost), zone control (set different temperatures in different rooms), high efficiency (SEER ratings 20+), quiet operation, sleek wall-mounted design, both heating and cooling. Ideal for older homes, additions, or spaces where ducted systems aren't practical. We install Mitsubishi, Daikin, Fujitsu, and other premium mini-split brands. Free estimate: (201) 787-5657.",
      keywords: "ductless mini split NJ, mini split installation, ductless AC, zone heating cooling"
    },
    {
      question: "Should I upgrade to a smart thermostat?",
      answer: "Smart thermostats like Nest, Ecobee, and Honeywell WiFi models offer significant benefits: energy savings (10-23% on heating/cooling), remote control via smartphone, learning algorithms that optimize comfort, usage reports and insights, integration with Alexa/Google Home, vacation mode and scheduling. Most customers see ROI within 2 years through energy savings. We install and program all major smart thermostat brands. Some models eligible for utility rebates. Professional installation ensures proper setup and configuration. Price: typically $200-400 installed. Schedule installation: (201) 787-5657.",
      keywords: "smart thermostat installation, Nest thermostat, Ecobee, WiFi thermostat, programmable thermostat"
    },
    {
      question: "What SEER rating should I look for in a new AC?",
      answer: "SEER (Seasonal Energy Efficiency Ratio) measures AC efficiency. Current ratings range from 14 (minimum) to 25+ (ultra-high efficiency). Recommendations: Budget-conscious: 14-16 SEER (meets minimum requirements), Mid-range: 16-18 SEER (good efficiency, moderate cost), Premium: 18-20 SEER (excellent efficiency, long-term savings), Ultra-efficient: 20+ SEER (maximum savings, highest upfront cost). Higher SEER = lower energy bills. In NJ climate, 16-18 SEER offers best value for most homes. Utility rebates often available for 16+ SEER systems. We'll help you choose the right efficiency level for your budget and usage. Free consultation: (201) 787-5657.",
      keywords: "SEER rating, energy efficient AC, high efficiency air conditioner, AC efficiency"
    }
  ],
  
  "Air Quality & Health": [
    {
      question: "How can I improve my indoor air quality?",
      answer: "Indoor air quality solutions we offer: UV air filtration (kills bacteria, viruses, mold), HEPA air filtration (removes 99.97% of particles), iWave-R air purification (proven to kill COVID-19), whole-house humidifiers (prevents dry air), air exchangers (brings in fresh outdoor air), duct cleaning (removes accumulated dust/debris), regular filter changes (every 1-3 months). Poor indoor air quality causes allergies, asthma, respiratory issues. Our air quality packages can reduce airborne germs by 90%+. Especially important for families with allergies, asthma, young children, or elderly members. Free air quality assessment: (201) 787-5657.",
      keywords: "indoor air quality NJ, air purification, UV air filtration, HEPA filter, air quality improvement"
    },
    {
      question: "How often should I change my HVAC filter?",
      answer: "Filter change frequency depends on filter type and conditions: Standard 1-inch filters: every 1-2 months, Pleated filters: every 3 months, HEPA filters: every 6-12 months, Washable filters: clean monthly. Change more frequently if you have: pets (every month), allergies (every month), construction/renovation (every 2 weeks), no pets/allergies (every 3 months). Signs you need a new filter: visible dirt/dust, reduced airflow, increased energy bills, more dust in home, HVAC running constantly. We provide filter replacements during maintenance visits. We can also set you up with a filter subscription. Stock filters: (201) 787-5657.",
      keywords: "HVAC filter replacement, how often change air filter, furnace filter, AC filter"
    },
    {
      question: "Do you offer whole-house humidifiers?",
      answer: "Yes! Whole-house humidifiers integrate with your HVAC system to maintain optimal humidity (35-45%) throughout your home. Benefits: healthier skin and respiratory system, prevents dry air discomfort, protects wood furniture and floors, reduces static electricity, helps you feel warmer (can lower thermostat 2-3°F), lowers energy bills. Types available: bypass humidifiers, fan-powered humidifiers, steam humidifiers. We install Aprilaire, Honeywell, and other premium brands. Professional installation includes: humidifier unit, water line connection, humidity controller, system integration. Winter in NJ creates very dry indoor air - humidifiers make a huge difference. Price: $400-800 installed. Schedule installation: (201) 787-5657.",
      keywords: "whole house humidifier, furnace humidifier, humidifier installation NJ, dry air solution"
    }
  ],
  
  "Energy Efficiency & Savings": [
    {
      question: "How can I lower my heating and cooling bills?",
      answer: "Top ways to reduce HVAC energy costs: Upgrade to high-efficiency system (16+ SEER AC, 95%+ AFUE furnace), Install programmable/smart thermostat (save 10-23%), Regular maintenance (improves efficiency 5-15%), Seal ductwork (20-30% of air escapes through leaks), Add insulation (attic, walls, basement), Replace old windows/doors, Change filters regularly, Use ceiling fans strategically, Set moderate temperatures (68°F winter, 78°F summer), Close vents in unused rooms, Install zone control system. Professional energy audit available. We can identify biggest energy wasters in your home. Many upgrades eligible for rebates/tax credits. Free efficiency consultation: (201) 787-5657.",
      keywords: "lower heating bill, reduce cooling costs, energy efficient HVAC, save money on energy"
    },
    {
      question: "Are there rebates available for new HVAC equipment?",
      answer: "Yes! Multiple rebate programs available in New Jersey: NJ Clean Energy Program rebates (up to $3,500 for high-efficiency equipment), Utility company rebates (JCP&L, PSE&G offer rebates), Federal tax credits (up to $2,000 for qualifying heat pumps, 30% for geothermal), Manufacturer rebates (Trane, Carrier often offer promotions), Energy Star rebates. Requirements typically include: minimum efficiency ratings (SEER 16+, AFUE 95%+), professional installation, proper documentation. We handle all rebate paperwork and ensure you get maximum savings. Total savings can reach $4,000-6,000 on complete system replacements. Ask about current rebates: (201) 787-5657.",
      keywords: "HVAC rebates NJ, energy rebates, tax credits HVAC, NJ Clean Energy rebates"
    },
    {
      question: "What's the most energy-efficient heating system?",
      answer: "Most energy-efficient heating options ranked: 1. Geothermal heat pumps (300-400% efficient) - highest upfront cost, 2. Air-source heat pumps (200-300% efficient) - excellent for NJ climate, 3. High-efficiency gas furnaces (95-98% AFUE) - best value for existing gas lines, 4. Ductless mini-splits (SEER 20-30) - great for zones/additions, 5. Boilers (85-95% AFUE) - good for radiant/baseboard heat. Efficiency ratings: AFUE 95%+ = high-efficiency furnace/boiler, HSPF 10+ = efficient heat pump, COP 3.0+ = excellent heat pump performance. We'll assess your home and recommend the most efficient and cost-effective option. Free energy analysis: (201) 787-5657.",
      keywords: "most efficient heating system, energy efficient furnace, best heating system NJ"
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
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              HVAC Frequently Asked Questions
            </h1>
            <p className="text-xl text-blue-100">
              Everything you need to know about HVAC service, repairs, and installations in North New Jersey
            </p>
          </div>
        </section>

        {/* Quick Contact Banner */}
        <section className="bg-red-600 text-white py-4">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-6 text-center">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">24/7 Emergency Service:</span>
                <a href="tel:+12017875657" className="underline font-bold">(201) 787-5657</a>
              </div>
              <div className="hidden md:block w-px h-6 bg-white/30"></div>
              <Link href="/contact" className="flex items-center gap-2 hover:underline">
                <MessageCircle className="w-5 h-5" />
                <span className="font-semibold">Request Service Online</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Navigation</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {Object.keys(FAQ_CATEGORIES).map((category) => (
                <a
                  key={category}
                  href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-white rounded-lg border-2 border-gray-200 p-4 hover:border-blue-500 hover:shadow-md transition-all text-center font-semibold text-gray-900"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            {Object.entries(FAQ_CATEGORIES).map(([category, faqs], categoryIdx) => (
              <div
                key={category}
                id={category.toLowerCase().replace(/\s+/g, '-')}
                className="mb-16"
              >
                <h2 className="text-3xl font-extrabold text-gray-900 mb-8 pb-4 border-b-4 border-blue-600">
                  {category}
                </h2>
                
                <div className="space-y-4">
                  {faqs.map((faq, idx) => {
                    const isOpen = openItems.includes(faq.question);
                    
                    return (
                      <div
                        key={idx}
                        className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-blue-500 transition-colors"
                      >
                        <button
                          onClick={() => toggleItem(faq.question)}
                          className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 bg-white hover:bg-gray-50 transition-colors"
                        >
                          <span className="text-lg font-bold text-gray-900 pr-4">
                            {faq.question}
                          </span>
                          <ChevronDown
                            className={`w-6 h-6 text-blue-600 shrink-0 transition-transform ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 py-5 bg-gray-50 border-t-2 border-gray-200">
                            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
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

        {/* Still Have Questions CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-600">
          <div className="max-w-4xl mx-auto px-6 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our friendly team is here to help! Call us or request service online.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:+12017875657"
                className="bg-white text-blue-700 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-50 transition inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call (201) 787-5657
              </a>
              <Link
                href="/contact"
                className="bg-white/10 backdrop-blur text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white hover:bg-white/20 transition"
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