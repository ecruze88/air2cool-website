import type { Metadata } from "next";
import Link from "next/link";
import CommercialMaintenanceForm from "@/components/CommercialMaintenanceForm";
import { COMPANY } from "@/config/company";

export const metadata: Metadata = {
  title: "Commercial Maintenance Proposal Request | Air2Cool",
  description: "Request a commercial HVAC and mechanical maintenance proposal from Air2Cool.",
  alternates: { canonical: "/commercial-maintenance-request" },
  robots: { index: false, follow: true },
};

export default function CommercialMaintenanceRequestPage() {
  return <main className="bg-slate-50">
    <section className="border-b border-blue-200 bg-blue-50"><div className="max-w-5xl mx-auto px-6 py-10 md:py-14"><Link href="/services/commercial-maintenance" className="text-sm font-bold text-blue-800 underline underline-offset-4">&larr; Commercial maintenance details</Link><h1 className="mt-5 text-3xl md:text-5xl font-extrabold text-slate-950">Request a Commercial Maintenance Proposal</h1><p className="mt-4 max-w-3xl text-base md:text-lg leading-relaxed text-slate-700">Tell us about your facility and equipment so Air2Cool can review your commercial maintenance needs.</p><p className="mt-3 text-sm text-slate-600">Prefer to speak with us? <a href={COMPANY.phone.href} className="font-bold text-blue-800 underline underline-offset-4">Call {COMPANY.phone.display}</a>.</p></div></section>
    <section className="py-10 md:py-16"><div className="max-w-5xl mx-auto px-6"><div className="border-t-4 border-blue-800 bg-white p-5 md:p-8 shadow-sm"><CommercialMaintenanceForm /></div></div></section>
  </main>;
}
