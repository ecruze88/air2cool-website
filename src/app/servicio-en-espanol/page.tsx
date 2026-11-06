import type { Metadata } from "next";
import { CheckCircle, Clock, DollarSign, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Servicio de Calefacci\u00f3n y Aire Acondicionado en NJ | Air2Cool",
  description:
    "Air2Cool ofrece reparaci\u00f3n, instalaci\u00f3n y mantenimiento de calefacci\u00f3n y aire acondicionado en el norte de NJ. Se habla espa\u00f1ol. Llame al (201) 787-5657.",
  alternates: {
    canonical: "/servicio-en-espanol",
  },
  openGraph: {
    title: "Servicio de Calefacci\u00f3n y Aire Acondicionado en NJ | Air2Cool",
    description:
      "Air2Cool ofrece reparaci\u00f3n, instalaci\u00f3n y mantenimiento de calefacci\u00f3n y aire acondicionado en el norte de NJ. Se habla espa\u00f1ol.",
    url: "/servicio-en-espanol",
  },
};

const services = [
  "Reparaci\u00f3n de aire acondicionado",
  "Instalaci\u00f3n de aire acondicionado",
  "Reparaci\u00f3n de calefacci\u00f3n y calderas",
  "Instalaci\u00f3n de calefacci\u00f3n",
  "Mini splits sin ductos",
  "Mantenimiento preventivo",
  "Refrigeraci\u00f3n comercial",
];

const reasons = [
  "Sirviendo al norte de Nueva Jersey desde 1998",
  "M\u00e1s de 300 rese\u00f1as de 5 estrellas en Google",
  "NJ Master HVACR License #19HC00847000",
  "Servicio disponible en espa\u00f1ol",
  "Financiamiento al 0% hasta $25,000 para clientes que califican, sujeto a elegibilidad, aprobaci\u00f3n y t\u00e9rminos del programa",
  "L\u00ednea de emergencia HVAC disponible las 24 horas",
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "\u00bfAir2Cool habla espa\u00f1ol?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "S\u00ed. Air2Cool ofrece asistencia en espa\u00f1ol para hablar sobre problemas de HVAC, opciones de servicio y pr\u00f3ximos pasos.",
      },
    },
    {
      "@type": "Question",
      name: "\u00bfOfrecen servicio el mismo d\u00eda?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las citas para el mismo d\u00eda pueden estar disponibles seg\u00fan la disponibilidad de t\u00e9cnicos, el volumen de llamadas, el tr\u00e1fico, el clima y las condiciones del servicio.",
      },
    },
    {
      "@type": "Question",
      name: "\u00bfQu\u00e9 \u00e1reas sirven?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Servimos el condado de Morris, Dover, Wharton, Rockaway, Randolph, Denville, Parsippany, Morristown y todo el norte de Nueva Jersey.",
      },
    },
  ],
};

export default function ServicioEnEspanolPage() {
  return (
      <div lang="es" className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <nav aria-label="Navegación en español" className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-5 gap-y-2 px-4 py-3 text-sm font-semibold text-gray-700 sm:px-6">
          <a href="#servicios" className="hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700">Servicios</a>
          <a href="#financiamiento" className="hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700">Financiamiento</a>
          <Link href="/services/preventative-maintenance" className="hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700">Mantenimiento</Link>
          <Link href="/service-areas" className="hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700">&Aacute;reas de Servicio</Link>
          <Link href="/projects" className="hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700">Proyectos</Link>
          <Link href="/about" className="hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700">Sobre Nosotros</Link>
          <Link href="/" className="ml-auto text-blue-700 underline underline-offset-4 hover:text-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700">Ingl&eacute;s</Link>
        </div>
      </nav>

      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-20">
          <div className="max-w-4xl">
            <div className="inline-flex min-h-[44px] items-center rounded-full bg-white/15 px-4 text-sm font-bold mb-5">
              Se Habla Espa&ntilde;ol
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Servicio de HVAC en Espa&ntilde;ol &mdash; Norte de Nueva Jersey
            </h1>
            <p className="text-base md:text-xl leading-relaxed text-blue-50 max-w-3xl">
              Air2Cool es una empresa familiar de calefacci&oacute;n y aire acondicionado que sirve al
              condado de Morris y el norte de Nueva Jersey desde 1998. Ofrecemos asistencia en
              espa&ntilde;ol, reparaci&oacute;n de aire acondicionado, reparaci&oacute;n de
              calefacci&oacute;n, instalaci&oacute;n de sistemas nuevos, y servicio de emergencia las 24 horas.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+12017875657"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3 text-base font-bold text-white shadow-lg hover:bg-red-700"
              >
                <Phone className="h-5 w-5" />
                Llame al (201) 787-5657
              </a>
              <Link
                href="/contact?language=es"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-white px-6 py-3 text-base font-bold text-blue-900 shadow-lg hover:bg-blue-50"
              >
                Solicite servicio en espa&ntilde;ol
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="scroll-mt-32 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Nuestros Servicios</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {services.map((service) => (
                <div key={service} className="flex items-start gap-3 rounded-lg border border-gray-200 p-4">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                  <span className="text-base font-semibold text-gray-800">{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              &iquest;Por Qu&eacute; Elegir Air2Cool?
            </h2>
            <div className="space-y-3">
              {reasons.map((reason) => (
                <div key={reason} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                  <span className="text-base text-gray-700">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="financiamiento" className="scroll-mt-32 bg-gray-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8">
          <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
              <MapPin className="h-6 w-6 text-blue-700" />
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
              &Aacute;reas Que Servimos
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              Servimos el condado de Morris, Dover, Wharton, Rockaway, Randolph, Denville,
              Parsippany, Morristown y todo el norte de Nueva Jersey.
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
              <DollarSign className="h-6 w-6 text-green-700" />
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
              Programas de Financiamiento
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              Air2Cool ayuda a clientes de NJ Natural Gas SaveGreen y JCP&amp;L con opciones de
              financiamiento al 0% hasta $25,000 para clientes que califican, sujeto a
              elegibilidad, aprobaci&oacute;n y los t&eacute;rminos aplicables del programa.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-8">
            Preguntas Frecuentes
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">&iquest;Air2Cool habla espa&ntilde;ol?</h3>
              <p className="text-base text-gray-700">S&iacute;. Air2Cool ofrece asistencia en espa&ntilde;ol.</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">&iquest;Ofrecen servicio el mismo d&iacute;a?</h3>
              <p className="text-base text-gray-700">Las citas para el mismo d&iacute;a pueden estar disponibles seg&uacute;n la disponibilidad de t&eacute;cnicos y las condiciones actuales.</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">&iquest;Qu&eacute; &aacute;reas sirven?</h3>
              <p className="text-base text-gray-700">Morris County y todo el norte de Nueva Jersey.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto rounded-lg bg-gradient-to-r from-red-600 to-blue-700 p-6 md:p-10 text-center text-white">
          <Clock className="mx-auto mb-4 h-10 w-10" />
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4">&iquest;Necesita servicio de HVAC?</h2>
          <p className="text-base md:text-xl text-blue-50 mb-6">
            Llame a Air2Cool al (201) 787-5657 o solicite servicio. Se habla espa&ntilde;ol.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="tel:+12017875657"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-base font-bold text-red-700 hover:bg-red-50"
            >
              <Phone className="h-5 w-5" />
              (201) 787-5657
            </a>
            <Link
              href="/contact?language=es"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/50 px-6 py-3 text-base font-bold text-white hover:bg-white/10"
            >
              Solicitar servicio en espa&ntilde;ol
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
