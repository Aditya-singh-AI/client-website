"use client";

import { useEffect, useState } from "react";
import { CLINIC_DATA } from "@/constants/business";

export default function LiveStatusBadge() {
  const [statusText, setStatusText] = useState("Open for Appointments");
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    // Determine status based on standard IST working hours (9:00 AM - 8:00 PM)
    const now = new Date();
    const currentHour = now.getHours();
    const currentDay = now.getDay(); // 0 is Sunday

    if (currentDay === 0) {
      setStatusText("Sunday: Home Visits & Advance Bookings On Request");
      setIsOpenNow(true);
    } else if (currentHour >= 9 && currentHour < 20) {
      setStatusText("Clinic & Home Visits Active Today");
      setIsOpenNow(true);
    } else {
      setStatusText("Closed for Walk-ins • Accepting Online Inquiries");
      setIsOpenNow(false);
    }
  }, []);

  return (
    <div className="inline-flex items-center gap-2.5 bg-slate-900/90 backdrop-blur text-white px-4 py-2 rounded-full border border-slate-700/80 shadow-lg text-xs">
      <span className="relative flex h-2.5 w-2.5">
        <span
          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
            isOpenNow ? "bg-emerald-400" : "bg-amber-400"
          }`}
        ></span>
        <span
          className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
            isOpenNow ? "bg-emerald-500" : "bg-amber-500"
          }`}
        ></span>
      </span>
      <span className="font-semibold text-slate-200">{statusText}</span>
      <span className="text-slate-500">|</span>
      <span className="text-teal-300 font-medium">Thatipur, Gwalior</span>
    </div>
  );
}
