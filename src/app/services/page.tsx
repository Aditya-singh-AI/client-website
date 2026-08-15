import type { Metadata } from "next";
import { CLINIC_DATA } from "@/constants/business";
import ComprehensiveServicesSection from "@/components/home/ComprehensiveServicesSection";
import FAQAccordion from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
  title: "Physiotherapy Services in Gwalior | Physical Therapist & Orthopedic Rehabilitation",
  description: "Comprehensive list of 23 physiotherapy services offered by Dr. Hemant Singh PT in Thatipur, Gwalior. Neuro rehabilitation, Stroke rehab, Knee & Back pain, Sciatica, Frozen Shoulder, Post Surgical care & Home Visits.",
};

export default function ServicesPage() {
  const faqs = [
    {
      question: "Which conditions require Neuro Rehabilitation vs. Orthopedic Physiotherapy?",
      answer: "Neuro rehabilitation targets conditions involving the brain, spinal cord, and nervous system (such as Stroke recovery, Parkinson's disease, or Paralysis). Orthopedic physiotherapy focuses on bone fractures, joint replacements, muscle sprains, knee arthritis, sciatica, back and neck pain."
    },
    {
      question: "Are home visit physiotherapy sessions available for all 23 listed services?",
      answer: "Yes, Dr. Hemant Singh PT provides customized home visits across Thatipur, Suresh Nagar, Morar, City Centre, and surrounding Gwalior sectors for patients unable to visit the clinic due to pain, mobility issues, or post-surgical recovery."
    },
    {
      question: "How long is each physiotherapy treatment session?",
      answer: "Initial clinical evaluation sessions take approximately 45 to 60 minutes, which includes physical examination, movement testing, and initial manual/exercise therapy."
    }
  ];

  return (
    <div className="py-12 bg-white space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            All Clinical Specialties
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950">
            Physiotherapy Services in Gwalior
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Exploration of specialized physical therapy programs under <strong>Dr. Hemant Singh PT (BPT)</strong>. Choose your area of concern below or request a home visit consultation.
          </p>
        </header>
      </div>

      <ComprehensiveServicesSection />

      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-teal-800 font-bold text-xs uppercase tracking-widest">Service FAQs</span>
            <h2 className="text-2xl font-extrabold text-slate-950 mt-1">Frequently Asked Questions</h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>
    </div>
  );
}
