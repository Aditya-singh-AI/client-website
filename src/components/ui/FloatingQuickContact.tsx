"use client";

import React, { useState } from "react";
import { CLINIC_DATA } from "@/constants/business";

export default function FloatingQuickContact() {
  const [showTooltip, setShowTooltip] = useState<string | null>(null);

  const whatsappUrl = `https://wa.me/${CLINIC_DATA.contact.rawPhone}?text=Hello%20Nitya%20Physiotherapy,%20I%20would%20like%20to%20book%20a%20physiotherapy%20consultation.`;
  const callUrl = `tel:${CLINIC_DATA.contact.rawPhone}`;

  return (
    <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3 group">
      {/* Cool Clinical Treatment Live Pulse Pill */}
      <div className="hidden sm:flex items-center gap-2.5 bg-slate-950/90 backdrop-blur border border-teal-500/40 text-white px-3.5 py-2 rounded-full shadow-2xl animate-bounce-subtle">
        {/* Animated Clinical Pulse Icon */}
        <div className="relative flex items-center justify-center w-5 h-5">
          <span className="absolute w-full h-full bg-emerald-400 rounded-full animate-pulse opacity-50"></span>
          <span className="relative w-2.5 h-2.5 bg-emerald-500 rounded-full"></span>
        </div>
        <div className="text-[11px] font-bold leading-tight">
          <span className="text-teal-300 block">Dr Hemant Singh</span>
          <span className="text-slate-300 text-[10px] font-medium">Available for Consultation</span>
        </div>
      </div>

      {/* Action Buttons Stack */}
      <div className="flex sm:flex-col items-end gap-3">
        {/* WhatsApp Floating Button with Ring Pulse */}
        <div className="relative">
          {showTooltip === "wa" && (
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl border border-slate-700 animate-in fade-in z-50">
              💬 Instant WhatsApp Chat
            </div>
          )}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setShowTooltip("wa")}
            onMouseLeave={() => setShowTooltip(null)}
            className="relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 group-hover:shadow-emerald-500/30"
            aria-label="Contact on WhatsApp"
          >
            {/* Pulsing Aura Effect */}
            <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-30 animate-pulse"></span>
            
            {/* WhatsApp Icon */}
            <svg className="w-7 h-7 relative z-10 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.157 4.228 4.265-1.119z"/>
            </svg>
          </a>
        </div>

        {/* Call Now Floating Button with Ringing Vibration */}
        <div className="relative">
          {showTooltip === "call" && (
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl border border-slate-700 animate-in fade-in z-50">
              📞 Direct Call ({CLINIC_DATA.contact.phone})
            </div>
          )}
          <a
            href={callUrl}
            onMouseEnter={() => setShowTooltip("call")}
            onMouseLeave={() => setShowTooltip(null)}
            className="relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-teal-700 to-slate-900 border-2 border-teal-500 text-white shadow-xl hover:scale-110 active:scale-95 transition-all duration-300"
            aria-label="Call Doctor Now"
          >
            {/* Phone Icon */}
            <svg className="w-6 h-6 text-teal-200 animate-wiggle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
