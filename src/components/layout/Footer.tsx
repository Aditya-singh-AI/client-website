"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CLINIC_DATA } from "@/constants/business";
import { useClinicData } from "@/context/ClinicDataContext";

export default function Footer() {
  const { addEnquiry } = useClinicData();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [serviceType, setServiceType] = useState<"clinic" | "home" | "online">("clinic");
  const [concern, setConcern] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    addEnquiry({
      name,
      phone,
      serviceType,
      area: "Thatipur / Gwalior",
      preferredDate,
      concern: concern || "Appointment Request",
    });

    setSubmitted(true);
    setName("");
    setPhone("");
    setPreferredDate("");
    setConcern("");
  };

  return (
    <footer className="bg-teal-950 text-slate-200 pt-16 pb-24 lg:pb-12 text-sm border-t border-teal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
        {/* Col 1: Contact Us */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white p-2.5 rounded-xl inline-block shadow-sm">
            <img src="/logo.png" alt="Nitya Physiotherapy Logo" className="h-12 w-auto object-contain" />
          </div>
          <h3 className="text-white font-bold text-base uppercase tracking-wider">{CLINIC_DATA.name}</h3>
          
          <div className="space-y-2 text-xs text-teal-100">
            <p className="flex items-center gap-2">
              <span className="text-teal-400">📞 Phone:</span>
              <a href={`tel:${CLINIC_DATA.contact.rawPhone}`} className="font-bold text-white hover:text-emerald-400 transition">
                {CLINIC_DATA.contact.phone}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-teal-400">💬 WhatsApp:</span>
              <a href={`https://wa.me/${CLINIC_DATA.contact.rawPhone}`} className="font-bold text-white hover:text-emerald-400 transition">
                {CLINIC_DATA.contact.whatsapp}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-teal-400">✉️ Email:</span>
              <a href={`mailto:${CLINIC_DATA.contact.email}`} className="text-white hover:text-emerald-400 transition">
                {CLINIC_DATA.contact.email}
              </a>
            </p>
            <p className="flex items-start gap-2 pt-1">
              <span className="text-teal-400 mt-0.5">📍 Address:</span>
              <span>{CLINIC_DATA.address.full}</span>
            </p>
            <p className="flex items-center gap-2 pt-1">
              <span className="text-teal-400">🕒 Timings:</span>
              <span>9:00 AM - 8:00 PM (Mon - Sat)</span>
            </p>
          </div>

          <div className="pt-2 flex gap-3">
            <a href={`https://wa.me/${CLINIC_DATA.contact.rawPhone}`} className="w-8 h-8 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center text-sm shadow">
              💬
            </a>
            <a href={`tel:${CLINIC_DATA.contact.rawPhone}`} className="w-8 h-8 rounded-full bg-teal-800 hover:bg-teal-700 text-white flex items-center justify-center text-sm shadow">
              📞
            </a>
            <a href={CLINIC_DATA.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-rose-600 hover:bg-rose-500 text-white flex items-center justify-center text-sm shadow">
              📍
            </a>
          </div>
        </div>

        {/* Col 2: Our Location Map Card */}
        <div className="lg:col-span-4 space-y-4">
          <h4 className="text-white font-bold text-sm uppercase tracking-wider">Our Location</h4>
          <div className="rounded-2xl overflow-hidden border border-teal-800 bg-teal-900 p-2 shadow-lg space-y-3">
            <div className="aspect-[4/3] rounded-xl overflow-hidden relative">
              <iframe
                title="Nitya Physiotherapy Location Map"
                src={CLINIC_DATA.location.mapsEmbedUrlPlaceholder}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                className="w-full h-full"
              ></iframe>
            </div>
            <a
              href={CLINIC_DATA.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white hover:bg-slate-100 text-teal-950 font-extrabold text-xs py-2.5 rounded-xl text-center block transition shadow-sm"
            >
              📍 View on Google Maps
            </a>
          </div>
        </div>

        {/* Col 3: Quick Book Appointment Form */}
        <div className="lg:col-span-4 space-y-4">
          <h4 className="text-white font-bold text-sm uppercase tracking-wider">Book Appointment</h4>
          
          {submitted ? (
            <div className="p-6 bg-emerald-900/90 border border-emerald-500/50 rounded-2xl text-center space-y-2">
              <span className="text-3xl">✓</span>
              <p className="font-bold text-white text-sm">Appointment Request Received!</p>
              <p className="text-xs text-emerald-100">Dr. Hemant Singh PT will contact you shortly to confirm session time.</p>
              <button onClick={() => setSubmitted(false)} className="text-xs text-teal-200 underline pt-2">Send another request</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2.5 text-xs">
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  required
                  placeholder="Your Name *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg bg-teal-900/90 border border-teal-800 text-white placeholder-teal-300 focus:outline-none focus:border-emerald-400"
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone Number *"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg bg-teal-900/90 border border-teal-800 text-white placeholder-teal-300 focus:outline-none focus:border-emerald-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg bg-teal-900/90 border border-teal-800 text-white focus:outline-none focus:border-emerald-400"
                />
                <select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value as any)}
                  className="w-full px-3 py-2.5 rounded-lg bg-teal-900/90 border border-teal-800 text-white focus:outline-none focus:border-emerald-400"
                >
                  <option value="clinic">Clinic Consultation</option>
                  <option value="home">Home Visit (Gwalior)</option>
                  <option value="online">Online Consultation</option>
                </select>
              </div>

              <textarea
                rows={2}
                placeholder="Your Message / Symptom Note (Optional)"
                value={concern}
                onChange={(e) => setConcern(e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg bg-teal-900/90 border border-teal-800 text-white placeholder-teal-300 focus:outline-none focus:border-emerald-400"
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-md transition"
              >
                Book Appointment
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Medical Disclaimer & Copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-teal-900 text-[11px] text-teal-300 flex flex-col md:flex-row justify-between gap-4">
        <p>
          <strong>Medical Disclaimer:</strong> Content on this website is for educational and appointment inquiry purposes only. It does not constitute individual medical diagnosis. An individualized clinical assessment is required prior to treatment.
        </p>
        <div className="whitespace-nowrap flex flex-col md:items-end gap-1">
          <p>© {new Date().getFullYear()} {CLINIC_DATA.name}. All rights reserved.</p>
          <div className="flex gap-3 text-[10px]">
            <Link href="/admin" className="text-teal-400 hover:underline">🔐 Doctor Login</Link>
            <span>•</span>
            <Link href="/contact" className="text-teal-400 hover:underline">Privacy Policy</Link>
            <span>•</span>
            <Link href="/contact" className="text-teal-400 hover:underline">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}