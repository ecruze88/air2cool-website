import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HVAC FAQ | Heating & Cooling Questions | Air2Cool",
  description:
    "Answers to common North Jersey HVAC questions about emergency service, repairs, installations, maintenance, financing, and equipment.",
  alternates: { canonical: "/faq" },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
