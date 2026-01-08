import type { Metadata } from "next";
import FAQClient from "./FAQClient";

export const metadata: Metadata = {
  title: "HVAC FAQ | Common Questions About Heating & Cooling in NJ | Air2Cool",
  description: "Get answers to common HVAC questions. Learn about emergency service, repairs, installations, pricing, energy efficiency, and more from Air2Cool's North NJ HVAC experts.",
  keywords: "HVAC FAQ, heating and cooling questions, HVAC service NJ, furnace repair questions, AC installation FAQ, emergency HVAC service",
};

export default function FAQPage() {
  return <FAQClient />;
}