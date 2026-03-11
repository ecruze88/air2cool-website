import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Schedule HVAC Service in North NJ | Air2Cool | (201) 787-5657",
  description:
    "Schedule HVAC service in NJ with Air2Cool. Same-day AC repair, furnace repair & HVAC installation across Morris County & North NJ. Free estimates. 24/7 emergency service. Call (201) 787-5657.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
