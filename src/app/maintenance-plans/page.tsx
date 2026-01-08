import CTA from "@/components/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HVAC Maintenance Plans in North NJ | Air2Cool Heating & Cooling",
  description:
    "Protect your system with Air2Cool HVAC maintenance plans in North NJ. Seasonal tune ups, priority scheduling, and longer equipment life.",
};

export default function MaintenancePage() {
  return (
    <main className="max-w-2xl mx-auto py-12">
      <h1 className="text-2xl font-bold mb-3">Maintenance &amp; Tune-Up Plans</h1>
      <p className="mb-5">Year-round peace of mind and lower bills for your heating and cooling equipment.</p>
      <ul className="list-disc ml-8 mb-6">
        <li>System inspection &amp; cleaning</li>
        <li>Discounted repairs</li>
        <li>Priority service</li>
        <li>No overtime charges</li>
      </ul>
      <CTA />
    </main>
  );
}
