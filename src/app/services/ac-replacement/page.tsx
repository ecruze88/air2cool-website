import CTA from "@/components/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AC Replacement in North NJ | Air2Cool Heating & Cooling",
  description:
    "Replace your AC with confidence. Air2Cool installs high quality cooling systems in North NJ with expert workmanship and clean installs.",
};


export default function ACReplacementPage() {
  return (
    <main className="max-w-2xl mx-auto py-12">
      <h1 className="text-2xl font-bold mb-3">AC Replacement</h1>
      <p className="mb-4">
        Fast, clean, and expert central air conditioning replacement in North Jersey. Brands like Carrier, Trane, Lennox, and more. Duct upgrades available.
      </p>
      <ul className="list-disc ml-8 mb-6">
        <li>Free quote and system inspection</li>
        <li>High-efficiency options</li>
        <li>Flexible scheduling</li>
        <li>Old equipment disposal included</li>
      </ul>
      <CTA />
    </main>
  );
}
