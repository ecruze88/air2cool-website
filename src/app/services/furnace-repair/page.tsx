import CTA from "@/components/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Furnace Repair in North NJ | Air2Cool Heating & Cooling",
  description:
    "Furnace not heating? Air2Cool provides fast furnace repair in North NJ with clear diagnostics and dependable fixes. Call for service.",
};

export default function FurnaceRepairPage() {
  return (
    <main className="max-w-2xl mx-auto py-12">
      <h1 className="text-2xl font-bold mb-3">Furnace Repair</h1>
      <p className="mb-4">
        No heat? Smells? Blowing cold air? We fix all furnace brands. Call now for fast, honest repairs — often same-day.
      </p>
      <ul className="list-disc ml-8 mb-6">
        <li>NATE certified techs</li>
        <li>Diagnostic &amp; safety checks</li>
        <li>No hidden fees</li>
        <li>Emergency service 24/7</li>
      </ul>
      <CTA />
    </main>
  );
}
