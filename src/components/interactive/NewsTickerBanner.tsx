"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useClinicData } from "@/context/ClinicDataContext";
import { CLINIC_DATA } from "@/constants/business";

export default function NewsTickerBanner() {
  const { posts } = useClinicData();
  const [isPaused, setIsPaused] = useState(false);

  const tickerItems = [
    "🚨 Home Physiotherapy Visits Available across Thatipur, Suresh Nagar & Gwalior - Book Online Today!",
    "🧠 Specialized Care: Neurological Rehabilitation, Stroke Rehabilitation & Paralysis Rehabilitation",
    "🩺 Nitya Physiotherapy - Sports, Neurological & Musculoskeletal Rehabilitation Specialist",
    `📞 Emergency Consultation & Booking Line: ${CLINIC_DATA.contact.phone}`,
    ...posts.map((p) => `📌 ${p.type.toUpperCase()}: ${p.title} (${p.category})`),
  ];

  return (
    <div className="bg-slate-950 text-white border-b border-teal-900 overflow-hidden shadow-lg relative z-30">
      <div className="max-w-7xl mx-auto flex items-center h-11">
        {/* News Channel Badge */}
        <div className="bg-rose-600 text-white text-[11px] font-black tracking-wider uppercase px-3 sm:px-4 py-3 flex items-center gap-2 shrink-0 shadow-md">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
          <span>LIVE CLINIC TICKER</span>
        </div>

        {/* Continuous Scrolling Marquee */}
        <div
          className="flex-1 overflow-hidden relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className={`flex items-center gap-8 whitespace-nowrap text-xs font-semibold text-teal-100 ${
              isPaused ? "" : "animate-marquee"
            }`}
            style={{ animationDuration: "65s" }}
          >
            {tickerItems.concat(tickerItems).map((text, idx) => (
              <div key={idx} className="flex items-center gap-8 shrink-0">
                <span className="hover:text-emerald-300 transition cursor-pointer">{text}</span>
                <span className="text-teal-600 font-black">•</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Link */}
        <div className="hidden md:flex items-center gap-2 bg-teal-900/90 text-teal-200 text-xs px-4 py-3 font-bold shrink-0 border-l border-teal-800">
          <Link href="/blog" className="hover:text-white transition">
            View All Updates →
          </Link>
        </div>
      </div>
    </div>
  );
}
