import CTA from "@/components/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mini Split Installation in North NJ | Air2Cool Heating & Cooling",
  description:
    "Looking for ductless comfort? Air2Cool installs mini splits in North NJ with neat line sets, correct sizing, and reliable performance.",
};

export default function MiniSplitInstallPage() {
  return (
    <main className="max-w-2xl mx-auto py-12">
      <h1 className="text-2xl font-bold mb-3">Mini Split Installation</h1>
      <p className="mb-4">
        Perfect comfort for one room, whole homes, or additions. Air2Cool professionally installs Mitsubishi &amp; Fujitsu ductless mini splits with invisible linesets.
      </p>
      <ul className="list-disc ml-8 mb-6">
        <li>Wall, ceiling, or floor mounted units</li>
        <li>Single &amp; multi-zone</li>
        <li>Discreet install work, fast turnaround</li>
        <li>Smart controls available</li>
      </ul>
      <CTA />
    </main>
  );
}
