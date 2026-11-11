"use client";

import { FormEvent, useState } from "react";
import BusinessInquiryNotice from "@/components/BusinessInquiryNotice";

const inputClass = "w-full min-h-12 border border-slate-300 bg-white px-3 py-2.5 text-base text-slate-950 focus:border-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-200";
const initial = { contactName: "", phone: "", email: "", serviceAddress: "", furnaceCount: "0", acCount: "0", boilerCount: "0", heatPumpCount: "0", otherEquipment: "", notes: "", company: "" };

export default function ResidentialMaintenanceForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const update = (name: string, value: string) => setForm((current) => ({ ...current, [name]: value }));

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");
    try {
      const response = await fetch("/api/maintenance-request", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, requestKind: "residential" }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Unable to submit request.");
      setStatus("success");
      setMessage("Your residential maintenance request was received. Air2Cool will follow up shortly.");
      setForm(initial);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to submit request. Please call Air2Cool.");
    }
  }

  return <form onSubmit={submit} className="space-y-6">
    <div className="grid md:grid-cols-2 gap-5">
      <Field label="Name" name="contactName" value={form.contactName} onChange={update} required autoComplete="name" />
      <Field label="Phone" name="phone" value={form.phone} onChange={update} required type="tel" autoComplete="tel" />
      <Field label="Email" name="email" value={form.email} onChange={update} required type="email" autoComplete="email" />
      <Field label="Service address" name="serviceAddress" value={form.serviceAddress} onChange={update} required autoComplete="street-address" />
    </div>
    <fieldset><legend className="text-lg font-bold text-slate-950 mb-3">Residential equipment counts</legend><div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[['furnaceCount','Furnaces'],['acCount','Central AC systems'],['boilerCount','Boilers'],['heatPumpCount','Heat pumps']].map(([name,label]) => <Field key={name} label={label} name={name} value={form[name as keyof typeof form]} onChange={update} type="number" min="0" inputMode="numeric" />)}
    </div></fieldset>
    <Field label="Other residential HVAC equipment (optional)" name="otherEquipment" value={form.otherEquipment} onChange={update} />
    <label className="block"><span className="block text-sm font-semibold text-slate-800 mb-1.5">Notes or questions (optional)</span><textarea name="notes" value={form.notes} onChange={(event) => update("notes", event.target.value)} rows={4} className={inputClass} /></label>
    <label className="absolute left-[-9999px]" aria-hidden="true">Company<input tabIndex={-1} autoComplete="off" name="company" value={form.company} onChange={(event) => update("company", event.target.value)} /></label>
    <BusinessInquiryNotice />
    <button type="submit" disabled={status === "sending"} className="min-h-12 w-full sm:w-auto bg-orange-700 px-7 py-3 font-bold text-white hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 disabled:bg-slate-400">{status === "sending" ? "Sending request..." : "Enroll in Residential Maintenance"}</button>
    <p role="status" aria-live="polite" className={status === "error" ? "text-red-700" : "text-emerald-700"}>{message}</p>
  </form>;
}

function Field({ label, name, value, onChange, required = false, type = "text", ...props }: { label: string; name: string; value: string; onChange: (name: string, value: string) => void; required?: boolean; type?: string; [key: string]: unknown }) {
  return <label className="block"><span className="block text-sm font-semibold text-slate-800 mb-1.5">{label}{required && <span aria-hidden="true"> *</span>}</span><input {...props} type={type} name={name} value={value} onChange={(event) => onChange(name, event.target.value)} required={required} aria-required={required} className={inputClass} /></label>;
}
