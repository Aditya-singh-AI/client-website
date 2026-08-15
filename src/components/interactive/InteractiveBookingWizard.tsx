"use client";

import { useState } from "react";
import { CLINIC_DATA } from "@/constants/business";
import { useClinicData } from "@/context/ClinicDataContext";

export default function InteractiveBookingWizard() {
  const { addEnquiry } = useClinicData();
  const [step, setStep] = useState<number>(1);
  const [serviceType, setServiceType] = useState<"clinic" | "home" | "online">("clinic");
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [areaInGwalior, setAreaInGwalior] = useState("Thatipur");
  const [concern, setConcern] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const submitEnquiryToAdmin = () => {
    addEnquiry({
      name: patientName || "Patient Enquiry",
      phone: patientPhone || "Not Provided",
      serviceType: serviceType,
      area: areaInGwalior || "Gwalior",
      preferredDate: preferredDate || "Earliest Available",
      concern: concern || "General Physical Therapy Assessment",
    });
  };

  const handleWhatsAppDirect = () => {
    submitEnquiryToAdmin();
    const text = `Hello Dr. Hemant, I would like to book a physiotherapy session:%0A• Name: ${patientName}%0A• Service: ${
      serviceType === "home" ? "Home Visit" : serviceType === "clinic" ? "Clinic Consultation (Thatipur)" : "Online Video Consult"
    }%0A• Location: ${areaInGwalior}%0A• Preferred Date: ${preferredDate || "Earliest Available"}%0A• Primary Concern: ${concern || "Assessment"}`;
    window.open(`https://wa.me/${CLINIC_DATA.contact.rawPhone}?text=${text}`, "_blank");
    setIsSuccess(true);
  };

  const handleStandardSubmit = () => {
    submitEnquiryToAdmin();
    setIsSuccess(true);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
      {/* Step Indicators */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100 text-xs font-bold text-slate-500">
        <span className={step >= 1 ? "text-teal-800" : ""}>1. Select Service</span>
        <span>→</span>
        <span className={step >= 2 ? "text-teal-800" : ""}>2. Appointment Details</span>
        <span>→</span>
        <span className={step >= 3 ? "text-teal-800" : ""}>3. Confirmation</span>
      </div>

      {isSuccess ? (
        <div className="text-center py-10 space-y-4">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-800 text-3xl rounded-full flex items-center justify-center mx-auto shadow-inner">
            ✓
          </div>
          <h3 className="text-xl font-extrabold text-slate-900">Appointment Request Sent Successfully</h3>
          <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
            Your appointment details have been recorded and sent directly to <strong>Dr. Hemant Singh PT</strong>&apos;s admin dashboard. Our team will contact you shortly to confirm your schedule.
          </p>

          <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 max-w-md mx-auto text-left text-xs space-y-1 text-teal-950">
            <p><strong>Patient:</strong> {patientName} ({patientPhone})</p>
            <p><strong>Mode:</strong> {serviceType === "home" ? "Home Visit" : serviceType === "clinic" ? "Clinic Visit (Thatipur)" : "Online Video Consult"}</p>
            <p><strong>Location:</strong> {areaInGwalior}</p>
            <p><strong>Date:</strong> {preferredDate || "Earliest Available"}</p>
          </div>

          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${CLINIC_DATA.contact.rawPhone}`}
              className="bg-teal-800 hover:bg-teal-900 text-white text-xs font-bold px-6 py-3 rounded-xl transition shadow"
            >
              📞 Call Dr. Hemant Directly ({CLINIC_DATA.contact.phone})
            </a>
            <button
              onClick={() => {
                setIsSuccess(false);
                setStep(1);
                setPatientName("");
                setPatientPhone("");
                setConcern("");
              }}
              className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold px-5 py-3 rounded-xl transition"
            >
              Book Another Appointment
            </button>
          </div>
        </div>
      ) : (
        <div>
          {/* STEP 1: Select Type */}
          {step === 1 && (
            <div className="space-y-5">
              <h3 className="font-bold text-slate-900 text-base">Select Consultation Mode:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {[
                  {
                    id: "clinic",
                    title: "Clinic Visit",
                    loc: "Thatipur Clinic",
                    desc: "Full equipment & treatment beds at New Suresh Nagar.",
                    badge: "Thatipur"
                  },
                  {
                    id: "home",
                    title: "Home Visit",
                    loc: "At Your Residence",
                    desc: "Dr. Hemant visits your home anywhere in Gwalior.",
                    badge: "Popular in Gwalior"
                  },
                  {
                    id: "online",
                    title: "Online Consult",
                    loc: "Video Call",
                    desc: "Ergonomics, exercise guidance & remote check-in.",
                    badge: "Remote"
                  }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setServiceType(item.id as any)}
                    className={`p-4 rounded-xl border text-left transition flex flex-col justify-between ${
                      serviceType === item.id
                        ? "border-teal-800 bg-teal-50/70 ring-2 ring-teal-800"
                        : "border-slate-200 hover:border-slate-300 bg-slate-50"
                    }`}
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-100 px-2 py-0.5 rounded">
                        {item.badge}
                      </span>
                      <h4 className="font-bold text-slate-900 text-sm mt-2">{item.title}</h4>
                      <p className="text-xs text-slate-500 font-medium">{item.loc}</p>
                    </div>
                    <p className="text-[11px] text-slate-600 mt-2">{item.desc}</p>
                  </button>
                ))}
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="bg-teal-800 hover:bg-teal-900 text-white font-bold text-xs px-6 py-3 rounded-lg transition"
                >
                  Continue to Details →
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Patient Info */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="font-bold text-slate-900 text-base">Your Contact & Preferred Time</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder="Enter patient name"
                    className="w-full text-xs px-3.5 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    placeholder="+91 Mobile number"
                    className="w-full text-xs px-3.5 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Locality in Gwalior</label>
                  <input
                    type="text"
                    value={areaInGwalior}
                    onChange={(e) => setAreaInGwalior(e.target.value)}
                    placeholder="e.g. Thatipur, Suresh Nagar, Morar, City Centre"
                    className="w-full text-xs px-3.5 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Date</label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Primary Problem / Area of Pain</label>
                <input
                  type="text"
                  value={concern}
                  onChange={(e) => setConcern(e.target.value)}
                  placeholder="e.g. Lower back pain, Knee stiffness, Post-surgery rehab"
                  className="w-full text-xs px-3.5 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
                />
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="border border-slate-300 text-slate-700 text-xs font-semibold px-4 py-2.5 rounded-lg"
                >
                  ← Back
                </button>
                <button
                  type="button"
                  disabled={!patientName || !patientPhone}
                  onClick={() => setStep(3)}
                  className="bg-teal-800 hover:bg-teal-900 disabled:opacity-50 text-white font-bold text-xs px-6 py-2.5 rounded-lg transition"
                >
                  Review Summary →
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Review & Instant Dispatch */}
          {step === 3 && (
            <div className="space-y-5">
              <h3 className="font-bold text-slate-900 text-base">Review & Confirm Request</h3>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs space-y-2 text-slate-700">
                <p><strong>Patient:</strong> {patientName} ({patientPhone})</p>
                <p><strong>Service Mode:</strong> {serviceType === "home" ? "Home Visit (Gwalior)" : serviceType === "clinic" ? "Clinic Consultation (Thatipur)" : "Online Video Consult"}</p>
                <p><strong>Area:</strong> {areaInGwalior}</p>
                <p><strong>Preferred Date:</strong> {preferredDate || "Earliest Available"}</p>
                <p><strong>Notes:</strong> {concern || "General assessment"}</p>
              </div>

              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-lg transition flex items-center justify-center gap-2 shadow"
                >
                  <span>💬</span> Confirm & Send via WhatsApp
                </button>
                <button
                  type="button"
                  onClick={handleStandardSubmit}
                  className="w-full py-3 bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs rounded-lg transition"
                >
                  Submit Standard Request to Clinic Admin
                </button>
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                className="text-xs text-slate-500 hover:text-slate-800 block text-center w-full mt-2"
              >
                ← Edit details
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}