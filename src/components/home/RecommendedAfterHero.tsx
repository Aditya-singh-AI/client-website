"use client";

import React from "react";
import Link from "next/link";
import { CLINIC_DATA } from "@/constants/business";
import LiveStatusBadge from "@/components/interactive/LiveStatusBadge";
import LiveAnimatedCounter from "@/components/interactive/LiveAnimatedCounter";

export default function RecommendedAfterHero() {
  const specialties = [
    { title: "Back & Neck Pain", icon: "🧘", desc: "Spine, posture & disc care" },
    { title: "Sciatica Treatment", icon: "⚡", desc: "Nerve pain & leg numbness" },
    { title: "Knee Pain Physiotherapy", icon: "🦵", desc: "Joint stiffness & arthritis" },
    { title: "Shoulder Pain & Frozen Shoulder", icon: "💪", desc: "Range of motion restoration" },
    { title: "Stroke & Neuro Rehabilitation", icon: "🧠", desc: "Post-stroke motor & balance" },
    { title: "Post-Surgery Rehabilitation", icon: "🩺", desc: "Safe mobility & TKR/THR rehab" },
    { title: "Sports Injury Rehabilitation", icon: "🏃", desc: "Tendon, ligament & strain care" },
    { title: "Home Physiotherapy", icon: "🏠", desc: "1-on-1 therapy at your home" },
  ];

  return (
    <div className="space-y-16">
      {/* 1. HERO SECTION (EXACT PREVIOUS TEAL/SLATE/EMERALD COLOR SCHEME) */}
      <section className="relative bg-gradient-to-b from-teal-50/70 via-teal-50/30 to-white pt-8 pb-16 lg:pt-12 lg:pb-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Live Status Badge */}
              <div>
                <LiveStatusBadge />
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.15]">
                The Best Physiotherapy Clinic in Gwalior — <span className="text-teal-800 block sm:inline">Clinic & Home Visits</span>
              </h1>

              {/* Subheading Paragraphs */}
              <div className="space-y-2 max-w-2xl">
                <p className="text-slate-900 font-bold text-base sm:text-lg">
                  Expert care. Personal attention. Better recovery.
                </p>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  We help you move better, feel better and live a pain-free life with advanced physiotherapy treatment, clinical assessment and personalized rehabilitation programs in Thatipur, Gwalior.
                </p>
              </div>

              {/* 3 Key Feature Chips */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-slate-200 shadow-sm text-xs font-bold text-slate-800">
                  <span className="text-teal-700 text-base">👤</span>
                  <span>Experienced Physiotherapists</span>
                </div>
                <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-slate-200 shadow-sm text-xs font-bold text-slate-800">
                  <span className="text-teal-700 text-base">📝</span>
                  <span>Personalized Treatment Plan</span>
                </div>
                <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-slate-200 shadow-sm text-xs font-bold text-slate-800">
                  <span className="text-teal-700 text-base">🏠</span>
                  <span>Clinic & Home Visit Available</span>
                </div>
              </div>

              {/* 3 Call to Action Buttons (PREVIOUS EXACT BUTTON STYLES) */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`tel:${CLINIC_DATA.contact.rawPhone}`}
                  className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-6 py-3.5 rounded-xl shadow-md transition inline-flex items-center gap-2 text-sm"
                >
                  <span>📞</span> Call Now
                </a>
                <a
                  href={`https://wa.me/${CLINIC_DATA.contact.rawPhone}?text=Hello%20Dr.%20Hemant,%20I%20would%20like%20to%20inquire%20about%20physiotherapy%20consultation.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border-2 border-emerald-600 font-bold px-6 py-3.5 rounded-xl transition inline-flex items-center gap-2 text-sm"
                >
                  <span>💬</span> WhatsApp
                </a>
                <Link
                  href="/book-appointment"
                  className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 font-bold px-6 py-3.5 rounded-xl shadow-sm transition inline-flex items-center gap-2 text-sm"
                >
                  <span>📅</span> Book Appointment
                </Link>
              </div>
            </div>

            {/* Right Column: Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                <div className="aspect-[4/3] sm:aspect-[4/3] relative overflow-hidden">
                  <img
                    src="/images/dr-hemant-solo.jpg"
                    alt="Dr. Hemant Singh PT treating patient"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Top Doctor Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-teal-100 flex items-center gap-2.5">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    <div>
                      <p className="text-[11px] font-black text-slate-900 leading-tight">Dr. Hemant Singh PT</p>
                      <p className="text-[9px] font-semibold text-teal-700">Lead Physiotherapist (BPT)</p>
                    </div>
                  </div>

                  {/* Bottom Right Overlay Checklist Box */}
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur-md p-3.5 rounded-2xl border border-teal-500/30 text-white shadow-xl space-y-1.5">
                    <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[11px] font-extrabold">
                      <div className="flex items-center gap-1.5 text-slate-200">
                        <span className="text-emerald-400 font-black">✓</span> 1-on-1 Clinical Assessment
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-200">
                        <span className="text-emerald-400 font-black">✓</span> Evidence Based Treatment
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-200">
                        <span className="text-emerald-400 font-black">✓</span> Advanced Rehab Equipment
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-200">
                        <span className="text-emerald-400 font-black">✓</span> Pain Relief & Recovery Focused
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR SPECIALTIES GRID (8 CLEAN ICON CARDS) */}
      <section className="py-12 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950">Our Specialties</h2>
          <p className="text-slate-600 text-xs sm:text-sm">Targeted physiotherapy care for pain relief and physical recovery.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {specialties.map((item, idx) => (
            <Link
              key={idx}
              href="/services"
              className="group bg-white p-5 rounded-2xl border border-slate-200 hover:border-teal-700 shadow-sm hover:shadow-md transition text-center space-y-3 flex flex-col items-center justify-between"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-2xl flex items-center justify-center group-hover:scale-110 transition">
                {item.icon}
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-teal-800 transition">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. 5-BOX DARK TEAL/SLATE TRUST STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="space-y-2 border-b sm:border-b-0 sm:border-r border-slate-800 pb-4 sm:pb-0 pr-4">
            <div className="w-10 h-10 rounded-xl bg-teal-900 text-xl flex items-center justify-center">🏠</div>
            <h4 className="font-extrabold text-sm text-white">Clinic & Home Physiotherapy</h4>
            <p className="text-xs text-slate-300 leading-relaxed">Care at the clinic or at your doorstep.</p>
          </div>

          <div className="space-y-2 border-b sm:border-b-0 sm:border-r border-slate-800 pb-4 sm:pb-0 pr-4">
            <div className="w-10 h-10 rounded-xl bg-teal-900 text-xl flex items-center justify-center">👥</div>
            <h4 className="font-extrabold text-sm text-white">Experienced Physiotherapists</h4>
            <p className="text-xs text-slate-300 leading-relaxed">Skilled, trained & compassionate care.</p>
          </div>

          <div className="space-y-2 border-b sm:border-b-0 sm:border-r border-slate-800 pb-4 sm:pb-0 pr-4">
            <div className="w-10 h-10 rounded-xl bg-teal-900 text-xl flex items-center justify-center">📋</div>
            <h4 className="font-extrabold text-sm text-white">Personalized Treatment Plan</h4>
            <p className="text-xs text-slate-300 leading-relaxed">Tailored programs for faster & better recovery.</p>
          </div>

          <div className="space-y-2 border-b sm:border-b-0 sm:border-r border-slate-800 pb-4 sm:pb-0 pr-4">
            <div className="w-10 h-10 rounded-xl bg-teal-900 text-xl flex items-center justify-center">🦿</div>
            <h4 className="font-extrabold text-sm text-white">Advanced Rehab Equipment</h4>
            <p className="text-xs text-slate-300 leading-relaxed">Modern technology for effective treatment.</p>
          </div>

          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-teal-900 text-xl flex items-center justify-center">⭐</div>
            <h4 className="font-extrabold text-sm text-white">Trusted by Hundreds</h4>
            <p className="text-xs text-slate-300 leading-relaxed">5 Star Google ratings from our patients.</p>
          </div>
        </div>
      </section>

      {/* 4. KEY LIVE METRICS ROW (4 ANIMATED STATS CARDS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <LiveAnimatedCounter
            end={118}
            suffix="+"
            label="5 Star Google Reviews"
            icon="⭐"
            iconClass="text-amber-500"
          />
          <LiveAnimatedCounter
            end={1000}
            suffix="+"
            label="Patients Treated"
            icon="👤"
            iconClass="text-teal-700"
          />
          <LiveAnimatedCounter
            end={10}
            suffix="+"
            label="Years of Experience"
            icon="📅"
            iconClass="text-emerald-700"
          />
          <LiveAnimatedCounter
            end={100}
            suffix="%"
            label="Patient Satisfaction"
            icon="❤️"
            iconClass="text-rose-500"
          />
        </div>
      </section>
    </div>
  );
}
