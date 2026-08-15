import type { Metadata } from "next";
import Link from "next/link";
import { CLINIC_DATA } from "@/constants/business";

export const metadata: Metadata = {
  title: "Physiotherapy for Back Pain in Gwalior | Nitya Physiotherapy",
  description: "Learn how physiotherapy assessment and exercise rehabilitation help manage lower back pain in Thatipur, Gwalior under Dr. Hemant Singh PT (BPT).",
};

export default function BackPainPage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <nav aria-label="Breadcrumb" className="text-xs text-slate-500">
          <Link href="/" className="hover:text-teal-700">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800 font-medium">Back Pain Physiotherapy</span>
        </nav>

        <header className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800">Spine & Musculoskeletal Care</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950">
            Physiotherapy for Back Pain in Gwalior
          </h1>
          <p className="text-slate-700 text-base leading-relaxed">
            Back pain is one of the most common reasons people seek physical rehabilitation. At Nitya Physiotherapy in Thatipur, Gwalior, assessment and treatment focus on identifying mechanical contributing factors and progressively restoring spinal function.
          </p>
        </header>

        <section className="space-y-4 text-sm text-slate-700 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">What Back Pain Can Involve</h2>
          <p>
            Discomfort in the lumbar spine can stem from various structures, including postural strain, muscular fatigue, facet joint irritation, or disc-related mechanical sensitivity. While symptoms can be disruptive, the majority of episodes improve through structured, conservative rehabilitation.
          </p>
        </section>

        <section className="space-y-4 text-sm text-slate-700 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">How Physiotherapy Assessment Works</h2>
          <p>
            During an evaluation with Dr. Hemant Singh PT (BPT), we examine:
          </p>
          <ul className="list-disc pl-5 text-xs text-slate-600 space-y-1">
            <li>Spinal flexion, extension, and lateral movement range</li>
            <li>Core and hip muscle strength balance</li>
            <li>Postural load patterns during sitting, standing, and lifting</li>
            <li>Neurological indicators (reflexes, sensation, and nerve tension) where relevant</li>
          </ul>
        </section>

        <section className="space-y-4 text-sm text-slate-700 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">Treatment Approaches Used at Nitya Physiotherapy</h2>
          <p>
            Treatment is individualized and may incorporate:
          </p>
          <ul className="list-disc pl-5 text-xs text-slate-600 space-y-1">
            <li>Graded active exercise therapy to build lumbar support</li>
            <li>Mobility exercises for tight pelvic and thoracic structures</li>
            <li>Ergonomic guidance for desk workers and manual tasks</li>
            <li>Progressive return-to-activity planning</li>
          </ul>
        </section>

        <div className="p-5 bg-amber-50 border-l-4 border-amber-500 rounded-r text-xs text-amber-900 space-y-1">
          <p className="font-bold">When Urgent Medical Attention is Required ("Red Flags"):</p>
          <p>If your back pain is accompanied by sudden numbness in the groin area, loss of bowel/bladder control, progressive weakness in your legs, or unexplained weight loss, consult a hospital emergency physician immediately.</p>
        </div>

        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-900">Nitya Physiotherapy Clinic & Home Visits</p>
            <p className="text-xs text-slate-500">Thatipur, Gwalior • Dr. Hemant Singh PT</p>
          </div>
          <Link
            href="/book-appointment"
            className="bg-teal-800 hover:bg-teal-900 text-white font-bold text-xs px-6 py-3 rounded transition"
          >
            Book an Assessment
          </Link>
        </div>
      </div>
    </div>
  );
}