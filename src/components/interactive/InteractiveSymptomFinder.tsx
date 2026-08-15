"use client";

import { useState } from "react";
import Link from "next/link";

interface CategoryOption {
  id: string;
  name: string;
  icon: string;
  description: string;
  recommendedService: string;
  setting: "Clinic or Home Visit" | "Clinic Assessment" | "Specialized Home Visit";
  overview: string;
}

export default function InteractiveSymptomFinder() {
  const options: CategoryOption[] = [
    {
      id: "back-neck",
      name: "Spine & Neck Pain",
      icon: "🧘",
      description: "Lumbar discomfort, postural stiffness, cervical nerve sensitivity, sciatica.",
      recommendedService: "Musculoskeletal Assessment & Active Rehabilitation",
      setting: "Clinic or Home Visit",
      overview: "Focused physical therapy to reduce joint mechanical stress and strengthen core/spinal stabilizers."
    },
    {
      id: "knee-hip",
      name: "Knee & Joint Arthritis",
      icon: "🦵",
      description: "Difficulty walking, chronic joint degeneration, stiffness in morning.",
      recommendedService: "Joint Mobilization & Graded Strengthening",
      setting: "Clinic or Home Visit",
      overview: "Targeted load management exercises to support knee/hip joints and improve functional walking range."
    },
    {
      id: "post-surgery",
      name: "Post-Surgery Rehabilitation",
      icon: "🏥",
      description: "Total knee replacement (TKR), fracture fixation recovery, ligament reconstruction.",
      recommendedService: "Home Physiotherapy Program",
      setting: "Specialized Home Visit",
      overview: "Gradual mobility progression, swelling management, and safe gait training right at your home."
    },
    {
      id: "sports-injury",
      name: "Sports & Muscle Strain",
      icon: "🏃",
      description: "Ankle sprains, muscle tears, rotator cuff tendon issues, running injuries.",
      recommendedService: "Sports Physiotherapy & Return-to-Activity",
      setting: "Clinic Assessment",
      overview: "Active strength progression and functional return-to-sport drills under Dr. Hemant Singh PT."
    }
  ];

  const [selectedId, setSelectedId] = useState<string>(options[0].id);
  const current = options.find((o) => o.id === selectedId) || options[0];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-8">
      <div className="text-center max-w-xl mx-auto mb-8">
        <span className="text-teal-800 font-bold text-xs uppercase tracking-widest">Interactive Patient Navigator</span>
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 mt-1">
          Find the Right Rehabilitation Approach
        </h3>
        <p className="text-slate-600 text-xs sm:text-sm mt-2">
          Select your area of concern to explore recommended evaluation steps with Dr. Hemant Singh PT (BPT).
        </p>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mb-6">
        {options.map((opt) => {
          const isSelected = opt.id === selectedId;
          return (
            <button
              key={opt.id}
              onClick={() => setSelectedId(opt.id)}
              className={`p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col items-start ${
                isSelected
                  ? "bg-teal-900 text-white border-teal-900 shadow-md scale-[1.02]"
                  : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200"
              }`}
            >
              <span className="text-2xl mb-1">{opt.icon}</span>
              <span className="font-bold text-xs sm:text-sm leading-tight">{opt.name}</span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Results Card */}
      <div className="bg-gradient-to-br from-slate-50 to-teal-50/40 rounded-xl p-6 border border-teal-100 space-y-4 animate-in fade-in duration-200">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 border-b border-slate-200/80 pb-3">
          <div>
            <h4 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
              <span>{current.icon}</span> {current.name} Care Approach
            </h4>
            <p className="text-xs text-slate-600 mt-0.5">{current.description}</p>
          </div>
          <span className="inline-block self-start sm:self-auto bg-teal-800 text-white text-[11px] font-bold px-3 py-1 rounded-full">
            Recommended: {current.setting}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="space-y-1">
            <span className="font-bold text-slate-800 uppercase tracking-wide text-[10px]">Clinical Focus</span>
            <p className="text-slate-700 font-semibold">{current.recommendedService}</p>
            <p className="text-slate-600 leading-relaxed pt-1">{current.overview}</p>
          </div>
          <div className="space-y-1 bg-white p-4 rounded-lg border border-slate-200">
            <span className="font-bold text-teal-900 uppercase tracking-wide text-[10px]">What to Expect</span>
            <ul className="text-slate-600 space-y-1 text-[11px] pt-1">
              <li>✓ Comprehensive joint & muscle testing</li>
              <li>✓ Posture and movement tolerance screen</li>
              <li>✓ Custom home exercises & lifestyle guidance</li>
            </ul>
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 items-center justify-end">
          <Link
            href={`/book-appointment?condition=${current.id}`}
            className="w-full sm:w-auto text-center bg-teal-800 hover:bg-teal-900 text-white font-bold text-xs px-6 py-2.5 rounded-lg transition"
          >
            Request Assessment for {current.name} →
          </Link>
        </div>
      </div>
    </div>
  );
}