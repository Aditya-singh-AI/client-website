import type { Metadata } from "next";
import Link from "next/link";
import { CLINIC_DATA } from "@/constants/business";

export const metadata: Metadata = {
  title: "Dr. Hemant Singh PT | Physiotherapist in Gwalior",
  description: "Learn about Dr. Hemant Singh PT (BPT), specialized in sports and musculoskeletal physiotherapy at Nitya Physiotherapy Clinic & Home Visits in Thatipur, Gwalior.",
};

export default function PractitionerPage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs text-slate-500">
          <Link href="/" className="hover:text-teal-700">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800 font-medium">Dr. Hemant Singh PT</span>
        </nav>

        <header className="border-b border-slate-200 pb-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1">
            <div className="aspect-[4/5] bg-slate-900 rounded-2xl border-4 border-white shadow-xl overflow-hidden relative group">
              <img
                src="/images/dr-hemant-solo.jpg"
                alt="Dr. Hemant Singh PT (BPT)"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              <span className="absolute bottom-3 left-3 right-3 bg-teal-950/85 backdrop-blur text-white text-[10px] font-bold px-2.5 py-1.5 rounded-lg border border-teal-700 text-center">
                Dr. Hemant Singh PT (BPT)
              </span>
            </div>
          </div>
          <div className="md:col-span-2 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-800">Lead Physiotherapist</span>
            <h1 className="text-3xl font-extrabold text-slate-950">{CLINIC_DATA.practitioner.name}</h1>
            <p className="text-sm font-semibold text-teal-900">{CLINIC_DATA.practitioner.qualifications} (Bachelor of Physiotherapy)</p>
            <p className="text-xs text-slate-600">Focus: {CLINIC_DATA.practitioner.specialization}</p>
            <div className="pt-4 flex flex-wrap gap-3">
              <Link href="/book-appointment" className="bg-teal-800 hover:bg-teal-900 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition shadow">
                Request Appointment
              </Link>
              <a href={`tel:${CLINIC_DATA.contact.rawPhone}`} className="border border-slate-300 text-slate-700 text-xs font-semibold px-4 py-2.5 rounded-xl hover:bg-slate-50 transition">
                Call Clinic
              </a>
            </div>
          </div>
        </header>

        <section className="space-y-6 text-slate-700 text-sm leading-relaxed max-w-4xl">
          <h2 className="text-xl font-bold text-slate-900">Professional Background & Clinical Practice</h2>
          <p>
            Dr. Hemant Singh PT is a qualified physical therapy practitioner holding a Bachelor of Physiotherapy (BPT). He serves patients across Gwalior through clinical assessments at Nitya Physiotherapy in Thatipur, as well as via specialized in-home rehabilitation visits.
          </p>
          <p>
            His primary clinical interests encompass sports injuries, musculoskeletal rehabilitation, joint mobility restoration, and functional recovery following orthopedic surgeries. Dr. Hemant's treatment philosophy focuses on active movement re-education, individualized exercise prescriptions, and practical ergonomics to foster long-term resilience.
          </p>

          <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-2 mt-6">
            <h3 className="font-bold text-slate-900 text-sm">Verified Credentials & Information</h3>
            <ul className="text-xs text-slate-600 space-y-1">
              <li>• <strong>Degree:</strong> Bachelor of Physiotherapy (BPT)</li>
              <li>• <strong>Focus Areas:</strong> Sports & Musculoskeletal Physical Therapy</li>
              <li>• <strong>Practice:</strong> Nitya Physiotherapy Clinic & Home Visits, Thatipur, Gwalior</li>
              <li>• <strong>Professional Registration:</strong> Registered Physical Therapist (BPT certified)</li>
            </ul>
          </div>

          <div className="pt-6 space-y-4">
            <h3 className="font-bold text-slate-900 text-base">Authentic Patient Care & Clinical Sessions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm space-y-2 p-2 bg-white">
                <div className="aspect-[4/3] rounded-lg overflow-hidden relative">
                  <img src="/images/dr-hemant-clinical-grid-1.jpg" alt="Clinical Consultations" className="w-full h-full object-cover" />
                </div>
                <p className="text-xs font-bold text-slate-800">Clinical Evaluation Suite</p>
                <p className="text-[11px] text-slate-500">Includes joint testing, spine model consultation & band rehab.</p>
              </div>

              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm space-y-2 p-2 bg-white">
                <div className="aspect-[4/3] rounded-lg overflow-hidden relative">
                  <img src="/images/dr-hemant-clinical-grid-2.jpg" alt="Musculoskeletal Therapy" className="w-full h-full object-cover" />
                </div>
                <p className="text-xs font-bold text-slate-800">Targeted Exercise Therapy</p>
                <p className="text-[11px] text-slate-500">Focus on lumbar, hip, knee range-of-motion & arm flex care.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}