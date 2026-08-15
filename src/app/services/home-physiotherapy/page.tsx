import type { Metadata } from "next";
import Link from "next/link";
import { CLINIC_DATA } from "@/constants/business";

export const metadata: Metadata = {
  title: "Home Physiotherapy in Gwalior | Nitya Physiotherapy",
  description: "Get personalised physiotherapy at home in Gwalior with Dr. Hemant Singh PT. Professional in-home rehabilitation for post-surgery, elderly care, and mobility issues.",
};

export default function HomePhysiotherapyPage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <nav aria-label="Breadcrumb" className="text-xs text-slate-500">
          <Link href="/" className="hover:text-teal-700">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800 font-medium">Home Physiotherapy</span>
        </nav>

        <header className="space-y-4 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800">Home Rehabilitation Service</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950">
            Physiotherapy at Home in Gwalior
          </h1>
          <p className="text-slate-700 text-base leading-relaxed">
            Home physiotherapy allows individuals who cannot easily visit a clinic to receive thorough clinical evaluation and guided physical rehabilitation directly within their residence.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-slate-700">
          <div className="space-y-4 bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h2 className="text-base font-bold text-slate-900">Who May Benefit From Home Visits?</h2>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>• Patients recovering from total knee or hip replacement surgeries</li>
              <li>• Elderly individuals with balance difficulties or severe mobility restrictions</li>
              <li>• Individuals experiencing acute back or neck pain spasms preventing travel</li>
              <li>• Neurological conditions requiring functional mobility training at home</li>
            </ul>
          </div>

          <div className="space-y-4 bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h2 className="text-base font-bold text-slate-900">How to Prepare for Your Home Visit</h2>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>• Ensure a well-lit, clutter-free room with sufficient space for movement</li>
              <li>• Keep recent orthopedic records, X-rays, or prescriptions handy</li>
              <li>• Wear comfortable, loose-fitting clothing suitable for exercise</li>
              <li>• Have a family member or attendant present during the session if helpful</li>
            </ul>
          </div>
        </div>

        <div className="bg-teal-900 text-white p-8 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-xl font-bold">Schedule a Home Physiotherapy Visit in Gwalior</h2>
            <p className="text-xs text-teal-200 mt-1">Serving Thatipur, Suresh Nagar, Morar, and surrounding areas.</p>
          </div>
          <Link
            href="/book-appointment?type=home"
            className="bg-white text-teal-950 hover:bg-teal-50 font-bold text-xs px-6 py-3 rounded whitespace-nowrap transition"
          >
            Request a Home Visit
          </Link>
        </div>
      </div>
    </div>
  );
}