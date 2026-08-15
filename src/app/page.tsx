import Link from "next/link";
import { CLINIC_DATA } from "@/constants/business";
import FAQAccordion from "@/components/ui/FAQAccordion";
import JsonLd from "@/components/seo/JsonLd";

import LiveStatusBadge from "@/components/interactive/LiveStatusBadge";
import LiveBlogCarousel from "@/components/interactive/LiveBlogCarousel";
import NewsTickerBanner from "@/components/interactive/NewsTickerBanner";
import ComprehensiveServicesSection from "@/components/home/ComprehensiveServicesSection";
import RecommendedAfterHero from "@/components/home/RecommendedAfterHero";

export default function HomePage() {
  const faqs = [
    {
      question: "What should I expect during my initial physiotherapy assessment?",
      answer: "During your first session, Dr. Hemant Singh PT will take a thorough clinical history, assess joint mobility, muscle strength, posture, and nerve sensitivity, and discuss your physical limitations to establish a tailored rehabilitation plan."
    },
    {
      question: "Do you offer physiotherapy home visits across Gwalior?",
      answer: "Yes. Home physiotherapy visits are available for patients in Thatipur, Suresh Nagar, and across Gwalior who have difficulty traveling due to acute pain, post-surgical recovery, or mobility limitations."
    },
    {
      question: "Do I need a physician's referral before booking a session?",
      answer: "A referral is not strictly mandatory for an initial physical therapy evaluation. However, if you have recent X-rays, MRI scans, or post-surgical discharge summaries from your orthopedic surgeon, please keep them available for review."
    },
    {
      question: "What is the primary clinical focus of Dr. Hemant Singh PT?",
      answer: "Dr. Hemant Singh PT holds a Bachelor of Physiotherapy (BPT) with a primary clinical interest in Sports and Musculoskeletal Physiotherapy, helping patients regain pain-free movement through active exercise rehabilitation."
    },
    {
      question: "How do I schedule a clinic visit or home rehabilitation session?",
      answer: `You can request an appointment directly through our website booking form, phone us at ${CLINIC_DATA.contact.phone}, or send a message on WhatsApp for rapid scheduling confirmation.`
    }
  ];

  const servicesGrid = [
    {
      title: "Back & Neck Pain Treatment",
      icon: "🦴",
      desc: "Relief for lumbar strain, cervical stiffness, nerve compression, and sciatica.",
      link: "/conditions/back-pain"
    },
    {
      title: "Knee Pain & Arthritis",
      icon: "🦵",
      desc: "Targeted joint mobilization, quadriceps strengthening, and osteoarthritis care.",
      link: "/conditions/back-pain"
    },
    {
      title: "Sports Injury Rehabilitation",
      icon: "🏃",
      desc: "Ligament sprain, tendonitis, and muscle strain rehab for active recovery.",
      link: "/services/home-physiotherapy"
    },
    {
      title: "Stroke Rehabilitation",
      icon: "🧠",
      desc: "Neuro-muscular re-education, balance restoration, and gait retraining.",
      link: "/services/home-physiotherapy"
    },
    {
      title: "Post-Surgery Rehabilitation",
      icon: "🩺",
      desc: "Knee (TKR), hip replacement, and post-fracture joint range-of-motion recovery.",
      link: "/services/home-physiotherapy"
    },
    {
      title: "Shoulder Pain & Frozen Shoulder",
      icon: "💪",
      desc: "Rotator cuff exercise therapy, joint capsule stretching, and impingement relief.",
      link: "/conditions/back-pain"
    },
    {
      title: "Home Visit Physiotherapy",
      icon: "🏠",
      desc: "Personalized 1-on-1 clinical rehabilitation in Thatipur & major Gwalior sectors.",
      link: "/services/home-physiotherapy"
    },
    {
      title: "Posture & Mobility Training",
      icon: "🚶",
      desc: "Ergonomic correction, core stabilization, and fall prevention for elderly care.",
      link: "/services/home-physiotherapy"
    }
  ];

  const reviewsList = [
    {
      name: "Neha Sharma",
      review: "Very effective treatment. My back pain has reduced a lot. Highly recommended!",
      service: "Clinic Consultation (Thatipur)"
    },
    {
      name: "Rajesh Verma",
      review: "Professional and polite therapist. Home visit facility is very convenient.",
      service: "Home Physiotherapy Visit"
    },
    {
      name: "Pooja Mehta",
      review: "Great experience. I can see real improvement in my mobility and strength.",
      service: "Post-Surgical Rehab"
    }
  ];

  return (
    <>
      <JsonLd />

      {/* LIVE NEWS CHANNEL STYLE TICKER BANNER */}
      <NewsTickerBanner />

      {/* RECOMMENDED AFTER HERO DESIGN & SPECIALTIES & METRICS STRIP */}
      <RecommendedAfterHero />

      {/* COMPREHENSIVE 23 PHYSIOTHERAPY SERVICES SECTION */}
      <ComprehensiveServicesSection />

      {/* AUTHENTIC CLINICAL CARE & REHABILITATION SHOWCASE */}
      <section className="py-16 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400">Authentic Patient Care</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Live Clinical Practice & Treatment Sessions</h2>
              <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xl">
                Real photos from Dr. Hemant Singh PT's clinical assessments and specialized rehabilitation sessions in Thatipur, Gwalior.
              </p>
            </div>
            <Link
              href="/gallery"
              className="bg-teal-700 hover:bg-teal-600 text-white font-bold text-xs px-5 py-3 rounded-xl shadow transition whitespace-nowrap"
            >
              View Complete Photo Gallery →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Solo Photo Card */}
            <div className="group bg-slate-800/80 rounded-2xl overflow-hidden border border-slate-700 hover:border-teal-500 transition shadow-lg space-y-3 p-3">
              <div className="aspect-[4/3] rounded-xl overflow-hidden relative bg-slate-950">
                <img
                  src="/images/dr-hemant-solo.jpg"
                  alt="1-on-1 Musculoskeletal Rehab"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-3 left-3 bg-teal-900/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-md border border-teal-600">
                  Solo Assessment
                </span>
              </div>
              <div className="px-2 pb-1 space-y-1">
                <h3 className="font-bold text-white text-sm">1-on-1 Joint & Musculoskeletal Therapy</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Thorough knee evaluation and manual movement re-education session with Dr. Hemant.
                </p>
              </div>
            </div>

            {/* Grid 1 Photo Card */}
            <div className="group bg-slate-800/80 rounded-2xl overflow-hidden border border-slate-700 hover:border-teal-500 transition shadow-lg space-y-3 p-3">
              <div className="aspect-[4/3] rounded-xl overflow-hidden relative bg-slate-950">
                <img
                  src="/images/dr-hemant-clinical-grid-1.jpg"
                  alt="Clinical Consultation & Therapy Suite"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-3 left-3 bg-teal-900/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-md border border-teal-600">
                  4-Panel Clinical Suite
                </span>
              </div>
              <div className="px-2 pb-1 space-y-1">
                <h3 className="font-bold text-white text-sm">Clinical Consultations & Exercise Therapy</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Including anatomical model consultations, cervical mobilization, and band rehab.
                </p>
              </div>
            </div>

            {/* Grid 2 Photo Card */}
            <div className="group bg-slate-800/80 rounded-2xl overflow-hidden border border-slate-700 hover:border-teal-500 transition shadow-lg space-y-3 p-3">
              <div className="aspect-[4/3] rounded-xl overflow-hidden relative bg-slate-950">
                <img
                  src="/images/dr-hemant-clinical-grid-2.jpg"
                  alt="Targeted Physical Therapy Sessions"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-3 left-3 bg-teal-900/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-md border border-teal-600">
                  Specialized Rehab
                </span>
              </div>
              <div className="px-2 pb-1 space-y-1">
                <h3 className="font-bold text-white text-sm">Lumbar, Hip & Elbow Flexion Care</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Targeted joint range-of-motion restoration and active exercise rehabilitation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT NITYA PHYSIOTHERAPY CLINIC SECTION */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image / Visual Card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white p-3 space-y-3">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden relative group bg-slate-100">
                  <img
                    src="/images/dr-hemant-clinical-grid-1.jpg"
                    alt="Dr. Hemant Singh PT Clinical Treatment & Consultation Sessions"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-3 left-3 bg-teal-900/90 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1 rounded-lg border border-teal-700">
                    Real Clinical Consultations & Exercises
                  </span>
                </div>
                <div className="px-1 text-xs space-y-1">
                  <p className="font-bold text-slate-900">{CLINIC_DATA.name}</p>
                  <p className="text-slate-600">{CLINIC_DATA.address.full}</p>
                </div>
              </div>
            </div>

            {/* Right Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-800">Trusted Local Healthcare</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-950">About Nitya Physiotherapy Clinic</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Nitya Physiotherapy Clinic provides personalized physiotherapy care with the goal of pain relief, improved mobility and long-term wellness. We offer both clinic-based treatment and home physiotherapy visits as per patient needs.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <h3 className="font-bold text-sm text-slate-900">Why Choose Us?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-2 text-slate-800 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                    <span className="text-emerald-600 font-bold text-sm">✓</span>
                    <span>Personalized Treatment Plans</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-800 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                    <span className="text-emerald-600 font-bold text-sm">✓</span>
                    <span>Clinic & Home Visit Facility</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-800 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                    <span className="text-emerald-600 font-bold text-sm">✓</span>
                    <span>Experienced & Qualified Therapist</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-800 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                    <span className="text-emerald-600 font-bold text-sm">✓</span>
                    <span>Patient-Centered Care</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-800 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                    <span className="text-emerald-600 font-bold text-sm">✓</span>
                    <span>Modern Equipment & Techniques</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-800 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                    <span className="text-emerald-600 font-bold text-sm">✓</span>
                    <span>Focus on Long-Term Recovery</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/physiotherapist/dr-hemant-singh"
                  className="bg-teal-800 hover:bg-teal-900 text-white font-bold text-xs px-6 py-3 rounded-xl shadow transition inline-block"
                >
                  Learn More About Dr. Hemant Singh PT →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS STEP-BY-STEP FLOW */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950">How It Works</h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">A clear 4-step path to pain relief and physical recovery.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "1", title: "Book Appointment", desc: "Schedule online or via phone for clinic visit or home care.", icon: "📅" },
              { num: "2", title: "Assessment & Evaluation", desc: "Comprehensive 1-on-1 movement and pain evaluation.", icon: "👨‍⚕️" },
              { num: "3", title: "Personalized Treatment", desc: "Targeted exercise therapy, joint mobilization & modalities.", icon: "🩺" },
              { num: "4", title: "Progress & Rehabilitation", desc: "Regular progress tracking for sustainable long-term recovery.", icon: "📈" }
            ].map((step) => (
              <div key={step.num} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 relative text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-teal-800 text-white font-black text-xl flex items-center justify-center shadow-md">
                  {step.icon}
                </div>
                <span className="text-[10px] font-extrabold uppercase text-teal-800 tracking-wider">Step {step.num}</span>
                <h3 className="font-bold text-sm text-slate-900">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT OUR PATIENTS SAY */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950">What Our Patients Say</h2>
            <p className="text-slate-600 text-xs sm:text-sm">Genuine recovery feedback from Gwalior clinic and home visit patients.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviewsList.map((r, i) => (
              <div key={i} className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex text-amber-400 text-sm">★★★★★</div>
                  <p className="text-xs text-slate-700 italic leading-relaxed">"{r.review}"</p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-900">– {r.name}</span>
                  <span className="text-[10px] text-teal-800 bg-teal-50 px-2 py-0.5 rounded font-semibold">{r.service}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <a
              href={CLINIC_DATA.googleSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 font-bold text-xs px-5 py-3 rounded-xl shadow-sm transition"
            >
              <span>🌐</span> View All Reviews on Google
            </a>
          </div>
        </div>
      </section>





      {/* LIVE PATIENT BLOG & HEALTH POSTERS SLIDE CAROUSEL SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LiveBlogCarousel />
        </div>
      </section>

      {/* FAQS */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-teal-800 font-bold text-xs uppercase tracking-widest">Questions</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mt-2">Frequently Asked Questions</h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>
    </>
  );
}