"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, to: 'ops@rigteq.com' })
      });
      const data = await res.json();
      if (res.ok) setStatus('Message sent. We will reply shortly.');
      else setStatus(data.error || 'Unable to send message.');
    } catch (err) {
      setStatus('Network error. Please try later.');
    }
    setLoading(false);
  }

  return (
    <section id="contact" className="py-12">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl font-bold">Contact & Enquiry</h2>
        <p className="mt-2 text-neutral-600">Send us your questions — we'll get back in 1-2 business days.</p>

        <form onSubmit={submit} className="mt-6 grid gap-4">
          <input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Full name" className="p-3 border rounded" />
          <input required value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="Email" type="email" className="p-3 border rounded" />
          <input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="Phone" className="p-3 border rounded" />
          <textarea required value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Message" className="p-3 border rounded h-32" />

          <div className="flex items-center gap-3">
            <button disabled={loading} className="px-5 py-3 rounded-full bg-rose-600 text-white">{loading? 'Sending...':'Send Enquiry'}</button>
            {status && <div className="text-sm text-neutral-700">{status}</div>}
          </div>
        </form>
      </div>
    </section>
  );
}
