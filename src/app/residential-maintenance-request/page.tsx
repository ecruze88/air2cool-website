import type { Metadata } from "next";
import Link from "next/link";
import ResidentialMaintenanceForm from "@/components/ResidentialMaintenanceForm";
import { COMPANY } from "@/config/company";

export const metadata: Metadata = {
  title: "Residential Maintenance Request | Air2Cool",
  description: "Request enrollment in Air2Cool residential HVAC preventative maintenance.",
  alternates: { canonical: "/residential-maintenance-request" },
  robots: { index: false, follow: true },
};

export default function ResidentialMaintenanceRequestPage() {
  return <main className="bg-slate-50">
    <section className="border-b border-orange-200 bg-orange-50"><div className="max-w-5xl mx-auto px-6 py-10 md:py-14"><Link href="/services/preventative-maintenance" className="text-sm font-bold text-orange-800 underline underline-offset-4">&larr; Residential maintenance details</Link><h1 className="mt-5 text-3xl md:text-5xl font-extrabold text-slate-950">Residential Maintenance Request</h1><p className="mt-4 max-w-3xl text-base md:text-lg leading-relaxed text-slate-700">Tell us about your home HVAC equipment and we&apos;ll follow up about residential preventative maintenance.</p><p className="mt-3 text-sm text-slate-600">Prefer to speak with us? <a href={COMPANY.phone.href} className="font-bold text-orange-800 underline underline-offset-4">Call {COMPANY.phone.display}</a>.</p></div></section>
    <section className="py-10 md:py-16"><div className="max-w-5xl mx-auto px-6"><div className="border-t-4 border-orange-700 bg-white p-5 md:p-8 shadow-sm"><ResidentialMaintenanceForm /></div></div></section>
  </main>;
}
