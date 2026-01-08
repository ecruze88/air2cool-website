import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Air2Cool Heating & Cooling | HVAC Service in North NJ",
  description:
    "Contact Air2Cool Heating & Cooling to schedule HVAC repair or installation in North NJ. Send a message or call for quick help.",
};

export default function ContactPage() {
  return <ContactClient />;
}
