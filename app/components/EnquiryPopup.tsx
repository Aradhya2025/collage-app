"use client";
import { useEffect, useState } from "react";

export default function EnquiryPopup() {
  const [show, setShow] = useState(false);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    const key = 'nightingale_first_visit';
    if (!localStorage.getItem(key)) {
      setTimeout(() => setShow(true), 1200);
      localStorage.setItem(key, '1');
    }
  }, []);

  async function send(e: React.FormEvent) {
    e.preventDefault();
    const form = (e.target as HTMLFormElement);
    const data = new FormData(form);
    const payload = {
      name: data.get('name'),
      email: data.get('contact'),
      message: data.get('message'),
      to: 'ops@rigteq.com'
    };
    try {
      setSending(true); setStatus(null);
      const res = await fetch('/api/contact', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) });
      const json = await res.json();
      if (res.ok) setStatus('Thanks — we received your enquiry.');
      else setStatus(json.error || 'Unable to send.');
    } catch (err) {
      setStatus('Network error');
    } finally { setSending(false); }
  }

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={() => setShow(false)} />
      <div className="relative bg-white rounded-lg p-6 max-w-xl mx-4 shadow-lg">
        <h3 className="text-xl font-bold">Quick Enquiry</h3>
        <p className="mt-2 text-neutral-600">Have questions? Send a short message and our team will reach out.</p>

        <form onSubmit={send} className="mt-4 grid gap-2">
          <input name="name" placeholder="Your name" className="p-2 border rounded" />
          <input name="contact" placeholder="Email or phone" className="p-2 border rounded" />
          <textarea name="message" placeholder="Short message" className="p-2 border rounded" />
          <div className="flex justify-end gap-2 mt-2">
            <button type="button" onClick={() => setShow(false)} className="px-4 py-2 border rounded">Close</button>
            <button type="submit" disabled={sending} className="px-4 py-2 rounded bg-rose-600 text-white">{sending? 'Sending...':'Send'}</button>
          </div>
          {status && <div className="mt-2 text-sm">{status}</div>}
        </form>
      </div>
    </div>
  );
}
