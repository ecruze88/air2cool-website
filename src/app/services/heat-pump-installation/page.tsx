import CTA from "@/components/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Heat Pump Installation in North NJ | Air2Cool Heating & Cooling",
  description:
    "Air2Cool installs efficient heat pumps in North NJ for heating and cooling. Get expert recommendations and a professional install.",
};

export default function HeatPumpInstallPage() {
  return (
    <main className="max-w-2xl mx-auto py-12">
      <h1 className="text-2xl font-bold mb-3">Heat Pump Installation</h1>
      <p className="mb-4">
        Upgrade to a modern heat pump for reliable, all-year heating and cooling. Improve comfort and cut energy bills.
      </p>
      <ul className="list-disc ml-8 mb-6">
        <li>Ducted &amp; ductless options</li>
        <li>ENERGY STAR qualified equipment</li>
        <li>Heat pump experts</li>
        <li>Available rebates</li>
      </ul>
      <CTA />
    </main>
  );
}
