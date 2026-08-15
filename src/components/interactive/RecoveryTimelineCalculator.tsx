"use client";

import { useState } from "react";
import Link from "next/link";

interface RehabPhase {
  phase: string;
  duration: string;
  focus: string;
  activities: string[];
}

interface ConditionPlan {
  id: string;
  name: string;
  typicalTimeline: string;
  phases: RehabPhase[];
}

export default function RecoveryTimelineCalculator() {
  const plans: ConditionPlan[] = [
    {
      id: "lumbar-spine",
      name: "Lower Back Mechanical Pain",
      typicalTimeline: "3 to 6 Weeks (Graduated Progression)",
      phases: [
        { phase: "Phase 1: Relief & Load Reduction", duration: "Week 1–2", focus: "Symptom modulation and calming irritable tissues.", activities: ["Directional preference exercises", "Gentle spinal mobility", "Ergonomic adjustments"] },
        { phase: "Phase 2: Core & Hip Re-education", duration: "Week 3–4", focus: "Restoring active motor control and pelvic endurance.", activities: ["Lumbo-pelvic stabilizing drills", "Graduated walking", "Postural endurance"] },
        { phase: "Phase 3: Functional Resilience", duration: "Week 5+", focus: "Return to uninhibited lifting, sports, and daily work.", activities: ["Progressive resistance loading", "Home self-management plan", "Relapse prevention"] }
      ]
    },
    {
      id: "knee-rehab",
      name: "Knee Osteoarthritis / Ligament Recovery",
      typicalTimeline: "4 to 8 Weeks (Active Strength)",
      phases: [
        { phase: "Phase 1: Joint Activation", duration: "Week 1–2", focus: "Restoring non-painful knee flexion and extension.", activities: ["Quadriceps isometric sets", "Passive/active range of motion", "Swelling control"] },
        { phase: "Phase 2: Closed-Chain Loading", duration: "Week 3–5", focus: "Building quadricep and hamstring support for stairs/walking.", activities: ["Sit-to-stand mechanics", "Step-ups", "Balance board stability"] },
        { phase: "Phase 3: Community Mobility", duration: "Week 6+", focus: "Independent walking distance and functional stamina.", activities: ["Endurance loading", "Home maintenance routine", "Gait normalization"] }
      ]
    },
    {
      id: "post-tkr",
      name: "Post-Surgical Knee Replacement (Home Visit Focus)",
      typicalTimeline: "6 to 12 Weeks (Multidisciplinary)",
      phases: [
        { phase: "Phase 1: In-Home Acute Care", duration: "Week 1–3", focus: "Gait safety, transfer practice, and safe extension.", activities: ["Bed mobility drills", "Walker-to-cane progression", "Deep venous safety checks"] },
        { phase: "Phase 2: Range & Strength", duration: "Week 4–7", focus: "Achieving functional knee bend (>90–110°) and stair climbing.", activities: ["Supported squatting", "Resistance bands", "Step management at home"] },
        { phase: "Phase 3: Full Independence", duration: "Week 8+", focus: "Independent outdoor mobility and daily freedom.", activities: ["Unassisted community walking", "Long-term home gym routine"] }
      ]
    }
  ];

  const [selectedPlanId, setSelectedPlanId] = useState(plans[0].id);
  const currentPlan = plans.find((p) => p.id === selectedPlanId) || plans[0];

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 border border-slate-800 shadow-xl">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="text-teal-400 font-bold text-xs uppercase tracking-widest">Interactive Rehabilitation Planner</span>
        <h3 className="text-xl sm:text-3xl font-extrabold text-white mt-1">
          Explore Typical Rehabilitation Stages
        </h3>
        <p className="text-slate-400 text-xs sm:text-sm mt-2">
          Select a condition to see the clinical step progression guided by Dr. Hemant Singh PT (BPT).
        </p>
      </div>

      {/* Select Condition Buttons */}
      <div className="flex flex-wrap gap-2.5 justify-center mb-8">
        {plans.map((p) => (
          <button
            key={p.id}
            onClick={() => setSelectedPlanId(p.id)}
            className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all ${
              selectedPlanId === p.id
                ? "bg-teal-700 text-white ring-2 ring-teal-400 shadow-md"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>

      {/* Timeline Visual Cards */}
      <div className="bg-slate-950/80 rounded-xl p-6 border border-slate-800">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-slate-800 pb-4 mb-6">
          <h4 className="font-bold text-lg text-teal-300">{currentPlan.name}</h4>
          <span className="bg-teal-900/60 text-teal-200 border border-teal-700 text-xs px-3 py-1 rounded-full font-semibold">
            Typical Timeline: {currentPlan.typicalTimeline}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {currentPlan.phases.map((ph, idx) => (
            <div key={idx} className="bg-slate-900/90 p-5 rounded-lg border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold text-teal-400 uppercase tracking-wider">{ph.duration}</span>
                  <span className="text-xs bg-slate-800 text-slate-400 px-2 py-0.5 rounded font-mono">0{idx + 1}</span>
                </div>
                <h5 className="font-bold text-sm text-white mb-2">{ph.phase}</h5>
                <p className="text-xs text-slate-400 leading-relaxed mb-3">{ph.focus}</p>
              </div>
              <div className="pt-3 border-t border-slate-800/80">
                <p className="text-[10px] uppercase font-bold text-slate-500 mb-1">Key Focus Areas:</p>
                <ul className="text-[11px] text-slate-300 space-y-1">
                  {ph.activities.map((act, aIdx) => (
                    <li key={aIdx} className="flex items-center gap-1.5">
                      <span className="text-teal-400">▹</span> {act}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-4 border-t border-slate-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-slate-400 text-left max-w-lg">
            * Timelines vary per individual assessment, age, tissue healing rate, and adherence to prescribed exercise therapy.
          </p>
          <Link
            href="/book-appointment"
            className="bg-teal-700 hover:bg-teal-600 text-white text-xs font-bold px-6 py-2.5 rounded-lg transition whitespace-nowrap"
          >
            Book Assessment with Dr. Hemant →
          </Link>
        </div>
      </div>
    </div>
  );
}
