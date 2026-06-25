import type { Metadata } from "next";
import { CheckCircle, Clock, Phone, Snowflake, Zap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AC Repair Morris County NJ | Same-Day Service | Call Now",
  description:
    "AC broke down in Morris County? Air2Cool responds fast — same-day AC repair throughout Morris County and North NJ. Licensed since 1998, honest pricing. Call (201) 787-5657.",
  keywords: [
    "AC repair Morris County NJ",
    "same day AC repair NJ",
    "emergency AC repair Morris County",
    "air conditioner repair North NJ",
    "AC repair near me NJ",
  ],
  alternates: {
    canonical: "/services/ac-repair",
  },
  openGraph: {
    title: "AC Repair Morris County NJ | Same-Day Service | Call Now",
    description:
      "AC broke down in Morris County? Air2Cool responds fast — same-day AC repair throughout Morris County and North NJ. Licensed since 1998, honest pricing. Call (201) 787-5657.",
    url: "/services/ac-repair",
  },
};

const repairs = [
  {
    title: "Capacitor replacement",
    body: "If your outdoor unit hums but will not start, the fan will not spin, or the system clicks and shuts down, a failed capacitor may be the problem. Air2Cool stocks common capacitors and can usually replace them the same day after diagnosis.",
  },
  {
    title: "Refrigerant leak",
    body: "Warm air, ice on the refrigerant line, hissing sounds, or long run times can point to low refrigerant from a leak. We locate the cause, explain your options clearly, and provide upfront pricing before any work begins.",
  },
  {
    title: "Contactor replacement",
    body: "A worn contactor can keep the outdoor condenser from turning on or cause intermittent cooling. Our technicians test the electrical components safely and often complete contactor repairs during the same visit.",
  },
  {
    title: "Frozen evaporator coil",
    body: "Ice on the indoor coil usually means airflow trouble, low refrigerant, or a control issue. We thaw the system safely, find the root cause, and get cool air moving again as quickly as possible.",
  },
  {
    title: "Fan motor failure",
    body: "If the condenser fan or blower motor fails, your AC may run hot, trip breakers, or stop cooling altogether. We diagnose motor and relay issues and handle same-day repairs whenever parts are available.",
  },
  {
    title: "Dirty condenser coils",
    body: "Outdoor coils packed with grass, pollen, and debris force your AC to work harder and can make it blow warm air. We clean the coil, check pressures and temperatures, and confirm the system is cooling properly.",
  },
  {
    title: "Thermostat issues",
    body: "Blank screens, wrong settings, bad wiring, and failing sensors can make a healthy AC act broken. We repair or replace thermostats, including smart thermostats, and verify the full cooling cycle before we leave.",
  },
];

const serviceAreas = [
  { href: "/service-areas/wharton", town: "Wharton", time: "Home base" },
  { href: "/service-areas/dover", town: "Dover", time: "Under 15 min from Wharton" },
  { href: "/service-areas/rockaway", town: "Rockaway", time: "Under 15 min from Wharton" },
  { href: "/service-areas/mine-hill", town: "Mine Hill", time: "Under 15 min from Wharton" },
  { href: "/service-areas/mine-hill", town: "Victory Gardens", time: "Under 15 min from Wharton" },
  { href: "/service-areas/randolph", town: "Randolph", time: "15-25 min from Wharton" },
  { href: "/service-areas/denville", town: "Denville", time: "15-25 min from Wharton" },
  { href: "/service-areas/roxbury", town: "Roxbury", time: "15-25 min from Wharton" },
  { href: "/service-areas/morristown", town: "Morristown", time: "15-25 min from Wharton" },
  { href: "/service-areas/mount-olive", town: "Mount Olive", time: "15-25 min from Wharton" },
  { href: "/service-areas/parsippany-troy-hills", town: "Parsippany", time: "25-35 min from Wharton" },
  { href: "/service-areas/morristown", town: "Madison", time: "25-35 min from Wharton" },
  { href: "/service-areas/kinnelon", town: "Kinnelon", time: "25-35 min from Wharton" },
  { href: "/service-areas/hackettstown", town: "Hackettstown", time: "25-35 min from Wharton" },
  { href: "/service-areas/sussex-county", town: "Hopatcong", time: "25-35 min from Wharton" },
];

const faqs = [
  {
    q: "How quickly can Air2Cool respond to an AC repair call in Morris County NJ?",
    a: "Air2Cool offers same-day AC repair throughout Morris County and North NJ. Because we are based in Wharton, most Morris County emergency calls can get a technician on-site within a few hours, and urgent calls are prioritized.",
  },
  {
    q: "Do you offer emergency AC repair in NJ?",
    a: "Yes. Air2Cool answers emergency AC repair calls 24/7 across Morris County and North NJ. If your air conditioner stops working during extreme heat, call (201) 787-5657 for priority same-day service.",
  },
  {
    q: "What are the most common AC repairs in NJ?",
    a: "Common AC repairs in New Jersey include capacitor replacement, refrigerant leak diagnosis, contactor replacement, frozen evaporator coils, fan motor failure, dirty condenser coils, and thermostat issues. We provide upfront pricing before any work begins.",
  },
];

export default function ACRepairPage() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "AC Repair",
            alternateName: "Air Conditioner Repair",
            description:
              "Same-day and emergency air conditioning repair throughout Morris County and North New Jersey.",
            provider: {
              "@type": "HVACBusiness",
              "@id": "https://www.air2cool.com/#organization",
              name: "Air2Cool Heating & Cooling",
              telephone: "+1-201-787-5657",
              url: "https://www.air2cool.com",
            },
            areaServed: [
              { "@type": "AdministrativeArea", name: "Morris County, NJ" },
              { "@type": "AdministrativeArea", name: "North New Jersey" },
            ],
            availableChannel: {
              "@type": "ServiceChannel",
              servicePhone: {
                "@type": "ContactPoint",
                telephone: "+1-201-787-5657",
                contactType: "customer service",
                availableLanguage: "English",
              },
            },
            url: "https://www.air2cool.com/services/ac-repair",
            serviceType: "HVAC Repair",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />

      <section className="relative bg-gradient-to-br from-blue-950 via-cyan-900 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-4">
              <Snowflake className="w-4 h-4" />
              AC REPAIR
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 md:mb-6">
              Same-Day AC Repair in North NJ - We Fix It Fast
            </h1>
            <p className="text-base md:text-xl text-gray-200 leading-relaxed max-w-3xl mb-6 md:mb-8">
              AC stopped working? Don&apos;t wait. Air2Cool offers same-day AC repair throughout Morris County and North NJ - most calls get a technician on-site within a few hours. We&apos;ve been fixing air conditioners in North Jersey since 1998 and we answer emergency calls 24/7. Call (201) 787-5657 now.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <a
                href="tel:+12017875657"
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-all shadow-lg min-h-[44px]"
              >
                <Phone className="w-5 h-5" />
                Call (201) 787-5657
              </a>
              <Link
                href="/contact"
                className="bg-white text-blue-700 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-all shadow-lg hover:bg-gray-50 text-center min-h-[44px]"
              >
                Request Same-Day Service
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
          </svg>
        </div>
      </section>

      <section className="py-4 md:py-6 bg-blue-50 border-y border-blue-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 text-blue-900">
            <Zap className="w-5 h-5 md:w-6 md:h-6 shrink-0" />
            <p className="text-base md:text-lg font-semibold">
              Licensed since 1998. Same-day AC repair, honest diagnostics, and upfront pricing before any work begins.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
              Common AC Repairs We Handle Every Day
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-5">
              {repairs.map((repair) => (
                <div key={repair.title} className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{repair.title}</h3>
                  <p className="text-base text-gray-700 leading-relaxed">{repair.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-red-50 border-y border-red-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
              Emergency AC Repair - We Answer 24/7
            </h2>
            <div className="text-base text-gray-700 space-y-4 leading-relaxed">
              <p>
                When your AC quits during a Morris County heat wave, it is more than uncomfortable. High indoor heat and humidity can become a health concern for seniors, young children, pets, and anyone with breathing or medical issues.
              </p>
              <p>
                Air2Cool prioritizes emergency AC repair calls across Morris County. Because our team is based in Wharton, we can often respond faster than companies dispatching from Newark, New York City, or farther out of the area. Call <a href="tel:+12017875657" className="font-semibold text-red-700 hover:underline">(201) 787-5657</a> any time, day or night, and we will work to get a licensed technician to your home the same day.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
              AC Repair Service Areas in North NJ
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {serviceAreas.map((area) => (
                <Link
                  key={area.town}
                  href={area.href}
                  className="flex items-center justify-between gap-4 rounded-xl border border-gray-200 p-4 hover:border-blue-500 hover:shadow-md transition min-h-[44px]"
                >
                  <span className="font-bold text-blue-700">{area.town}</span>
                  <span className="text-sm text-gray-600 text-right">{area.time}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-4 text-center">
            Fast, Reliable Service When You Need It
          </h2>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200">
            <p className="text-base md:text-lg text-gray-700 italic">
              &quot;Hector and his team were incredible! Our compressor went out during a heatwave and he was able to get us a new one, remove the old one and install it all in one day. Incredibly professional and responsive. Highly recommend this company!&quot;
            </p>
            <p className="mt-4 font-semibold text-base text-gray-900">- Lily Givoni, Google Review</p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center">
            Frequently Asked Questions - AC Repair NJ
          </h2>
          <div className="space-y-6">
            {faqs.map((item) => (
              <div key={item.q} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-base text-gray-700 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-r from-blue-700 to-cyan-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-3 md:mb-4">
            Need AC Repair Today?
          </h2>
          <p className="text-base md:text-xl text-blue-100 mb-6 md:mb-8">
            Call Air2Cool now for same-day AC repair throughout Morris County and North NJ.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
            <a
              href="tel:+12017875657"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg hover:bg-gray-50 transition min-h-[44px]"
            >
              <Phone className="w-5 h-5" />
              Call (201) 787-5657
            </a>
            <Link
              href="/contact"
              className="bg-white/10 backdrop-blur text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg border-2 border-white hover:bg-white/20 transition min-h-[44px]"
            >
              Request Service Online
            </Link>
          </div>
          <p className="mt-6 text-sm text-blue-100">
            Also serving <Link href="/service-areas/morris-county" className="underline hover:no-underline">Morris County</Link>, <Link href="/service-areas/denville" className="underline hover:no-underline">Denville</Link>, <Link href="/service-areas/randolph" className="underline hover:no-underline">Randolph</Link>, <Link href="/service-areas/morristown" className="underline hover:no-underline">Morristown</Link>, and <Link href="/service-areas/rockaway" className="underline hover:no-underline">Rockaway</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}
