import type { Metadata } from "next";
import { CheckCircle, Clock, DollarSign, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Servicio de Calefacci\u00f3n y Aire Acondicionado en NJ | Air2Cool",
  description:
    "Air2Cool ofrece reparaci\u00f3n de aire acondicionado, calefacci\u00f3n e instalaci\u00f3n en el norte de NJ. Hablamos espa\u00f1ol. Servicio el mismo d\u00eda. Llame al (201) 787-5657.",
  alternates: {
    canonical: "/servicio-en-espanol",
  },
  openGraph: {
    title: "Servicio de Calefacci\u00f3n y Aire Acondicionado en NJ | Air2Cool",
    description:
      "Air2Cool ofrece reparaci\u00f3n de aire acondicionado, calefacci\u00f3n e instalaci\u00f3n en el norte de NJ. Hablamos espa\u00f1ol. Servicio el mismo d\u00eda. Llame al (201) 787-5657.",
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
  "M\u00e1s de 26 a\u00f1os sirviendo a Nueva Jersey",
  "M\u00e1s de 270 rese\u00f1as de 5 estrellas en Google",
  "T\u00e9cnicos con licencia y asegurados",
  "Hablamos espa\u00f1ol - comunicaci\u00f3n clara y sin barreras",
  "Financiamiento 0% APR disponible hasta $25,000",
  "Servicio el mismo d\u00eda y emergencias 24/7",
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
        text: "S\u00ed. Todo nuestro equipo habla espa\u00f1ol para explicar el problema, las opciones de reparaci\u00f3n o instalaci\u00f3n, y el precio con claridad.",
      },
    },
    {
      "@type": "Question",
      name: "\u00bfOfrecen servicio el mismo d\u00eda?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "S\u00ed. Air2Cool ofrece servicio el mismo d\u00eda para muchas reparaciones de aire acondicionado, calefacci\u00f3n y emergencias HVAC en el norte de Nueva Jersey.",
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
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
              condado de Morris y el norte de Nueva Jersey desde 1998. Todo nuestro equipo habla
              espa&ntilde;ol. Ofrecemos reparaci&oacute;n de aire acondicionado, reparaci&oacute;n de
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
                href="/contact"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-white px-6 py-3 text-base font-bold text-blue-900 shadow-lg hover:bg-blue-50"
              >
                Solicite un estimado gratis
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
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

      <section className="bg-gray-50 py-12 md:py-16">
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
              financiamiento 0% APR para proyectos calificados, disponible hasta $25,000 con
              aprobaci&oacute;n de cr&eacute;dito.
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
              <p className="text-base text-gray-700">S&iacute;. Todo nuestro equipo habla espa&ntilde;ol.</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">&iquest;Ofrecen servicio el mismo d&iacute;a?</h3>
              <p className="text-base text-gray-700">S&iacute;. Atendemos muchas reparaciones el mismo d&iacute;a.</p>
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
            Llame a Air2Cool al (201) 787-5657 o solicite un estimado gratis. Hablamos espa&ntilde;ol.
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
              href="/contact"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/50 px-6 py-3 text-base font-bold text-white hover:bg-white/10"
            >
              Contacto
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
