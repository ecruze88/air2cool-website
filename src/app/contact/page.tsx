import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Schedule HVAC Service in North NJ | Air2Cool | (201) 787-5657",
  description:
    "Schedule AC repair, furnace repair, or a free HVAC estimate in North Jersey. 24/7 emergency service. Air2Cool — family owned since 1998. Call (201) 787-5657.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
