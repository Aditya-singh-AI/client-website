"use client";

import React from "react";
import Link from "next/link";
import { useClinicData } from "@/context/ClinicDataContext";
import { CLINIC_DATA } from "@/constants/business";

export default function ReviewsPage() {
  const { reviews } = useClinicData();

  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <header className="max-w-3xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800">Verified Patient Feedback</span>
          <h1 className="text-3xl font-extrabold text-slate-950">
            What Our Patients Say About Nitya Physiotherapy
          </h1>
          <p className="text-slate-600 text-sm">
            Read real recovery stories and reviews from patients treated in our Thatipur clinic and during home physiotherapy visits across Gwalior.
          </p>
        </header>

        {/* Google Reviews Badge Banner */}
        <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-2xl font-black text-slate-800">
              G
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-500 text-sm">
                <span>★★★★★</span>
                <span className="font-extrabold text-slate-900 ml-1 text-base">5.0 / 5.0 Rating</span>
              </div>
              <p className="text-xs text-slate-500">Based on verified Google & Clinic feedback in Gwalior</p>
            </div>
          </div>
          <a
            href={CLINIC_DATA.googleSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 font-bold text-xs px-5 py-3 rounded-xl shadow-sm transition inline-flex items-center gap-2"
          >
            <span>🌐</span> View All Reviews on Google Search
          </a>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 text-xs">★★★★★</div>
                  <span className="text-[10px] text-teal-800 bg-teal-50 px-2 py-0.5 rounded font-semibold border border-teal-100">
                    {rev.serviceType}
                  </span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed italic">
                  "{rev.reviewText}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex justify-between items-center text-xs">
                <div>
                  <h3 className="font-extrabold text-slate-900">{rev.patientName}</h3>
                  <p className="text-[11px] text-slate-500">{rev.condition}</p>
                </div>
                <span className="text-[10px] text-slate-400">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-teal-50 border border-teal-200 rounded-2xl p-8 space-y-4 max-w-2xl mx-auto">
          <h2 className="text-lg font-bold text-teal-950">Ready to Start Your Pain-Free Journey?</h2>
          <p className="text-xs text-teal-800">
            Book a clinical movement assessment with Dr. Hemant Singh PT at our Thatipur clinic or schedule a home visit.
          </p>
          <div className="flex justify-center gap-3 pt-2">
            <Link
              href="/book-appointment"
              className="bg-teal-800 hover:bg-teal-900 text-white font-bold text-xs px-6 py-3 rounded-lg shadow transition"
            >
              Book Appointment Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
