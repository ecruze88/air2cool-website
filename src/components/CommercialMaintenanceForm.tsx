"use client";

import { FormEvent, useState } from "react";
import { COMMERCIAL_EQUIPMENT, COMMERCIAL_PROPERTY_TYPES, COMMERCIAL_REQUEST_TYPES } from "@/lib/maintenance-requests";
import BusinessInquiryNotice from "@/components/BusinessInquiryNotice";

const inputClass = "w-full min-h-12 border border-slate-300 bg-white px-3 py-2.5 text-base text-slate-950 focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200";
const initial = { contactName: "", companyName: "", phone: "", email: "", serviceAddress: "", propertyType: "", equipment: [] as string[], equipmentCount: "", requestType: "", notes: "", company: "" };

export default function CommercialMaintenanceForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const update = (name: string, value: string) => setForm((current) => ({ ...current, [name]: value }));
  const toggleEquipment = (item: string) => setForm((current) => ({ ...current, equipment: current.equipment.includes(item) ? current.equipment.filter((value) => value !== item) : [...current.equipment, item] }));

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");
    try {
      const response = await fetch("/api/maintenance-request", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, requestKind: "commercial" }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Unable to submit request.");
      setStatus("success");
      setMessage("Your commercial maintenance request was received. Air2Cool will follow up about the facility and proposed scope.");
      setForm(initial);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to submit request. Please call Air2Cool.");
    }
  }

  return <form onSubmit={submit} className="space-y-7">
    <div className="grid md:grid-cols-2 gap-5">
      <Field label="Contact name" name="contactName" value={form.contactName} onChange={update} required autoComplete="name" />
      <Field label="Company or property name" name="companyName" value={form.companyName} onChange={update} required autoComplete="organization" />
      <Field label="Phone" name="phone" value={form.phone} onChange={update} required type="tel" autoComplete="tel" />
      <Field label="Email" name="email" value={form.email} onChange={update} required type="email" autoComplete="email" />
      <div className="md:col-span-2"><Field label="Service address" name="serviceAddress" value={form.serviceAddress} onChange={update} required autoComplete="street-address" /></div>
      <label className="block"><span className="block text-sm font-semibold text-slate-800 mb-1.5">Property type *</span><select className={inputClass} value={form.propertyType} onChange={(event) => update("propertyType", event.target.value)} required aria-required="true"><option value="">Select property type</option>{COMMERCIAL_PROPERTY_TYPES.map((item) => <option key={item}>{item}</option>)}</select></label>
      <label className="block"><span className="block text-sm font-semibold text-slate-800 mb-1.5">Request type *</span><select className={inputClass} value={form.requestType} onChange={(event) => update("requestType", event.target.value)} required aria-required="true"><option value="">Select request type</option>{COMMERCIAL_REQUEST_TYPES.map((item) => <option key={item}>{item}</option>)}</select></label>
    </div>
    <fieldset><legend className="text-lg font-bold text-slate-950 mb-3">Equipment to evaluate or maintain</legend><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">{COMMERCIAL_EQUIPMENT.map((item) => <label key={item} className="flex min-h-12 items-start gap-3 border border-slate-200 p-3 text-sm text-slate-800 hover:border-blue-400"><input type="checkbox" checked={form.equipment.includes(item)} onChange={() => toggleEquipment(item)} className="mt-0.5 h-5 w-5 shrink-0" /><span>{item}</span></label>)}</div></fieldset>
    <Field label="Approximate number of systems/equipment (optional)" name="equipmentCount" value={form.equipmentCount} onChange={update} />
    <label className="block"><span className="block text-sm font-semibold text-slate-800 mb-1.5">Facility details and notes (optional)</span><textarea name="notes" value={form.notes} onChange={(event) => update("notes", event.target.value)} rows={5} className={inputClass} /></label>
    <label className="absolute left-[-9999px]" aria-hidden="true">Company website<input tabIndex={-1} autoComplete="off" name="company" value={form.company} onChange={(event) => update("company", event.target.value)} /></label>
    <BusinessInquiryNotice />
    <button type="submit" disabled={status === "sending"} className="min-h-12 w-full sm:w-auto bg-blue-800 px-7 py-3 font-bold text-white hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 disabled:bg-slate-400">{status === "sending" ? "Sending request..." : "Request Commercial Maintenance Proposal"}</button>
    <p role="status" aria-live="polite" className={status === "error" ? "text-red-700" : "text-emerald-700"}>{message}</p>
  </form>;
}

function Field({ label, name, value, onChange, required = false, type = "text", ...props }: { label: string; name: string; value: string; onChange: (name: string, value: string) => void; required?: boolean; type?: string; [key: string]: unknown }) {
  return <label className="block"><span className="block text-sm font-semibold text-slate-800 mb-1.5">{label}{required && <span aria-hidden="true"> *</span>}</span><input {...props} type={type} name={name} value={value} onChange={(event) => onChange(name, event.target.value)} required={required} aria-required={required} className={inputClass} /></label>;
}
