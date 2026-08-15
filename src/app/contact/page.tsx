import type { Metadata } from "next";
import { CLINIC_DATA } from "@/constants/business";

export const metadata: Metadata = {
  title: "Contact & Location | Nitya Physiotherapy Thatipur Gwalior",
  description: "Contact Nitya Physiotherapy Clinic in Thatipur, Gwalior. Phone, WhatsApp, full address, and Google Maps directions for Dr. Hemant Singh PT.",
};

export default function ContactPage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <header className="max-w-3xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800">Contact & Directions</span>
          <h1 className="text-3xl font-extrabold text-slate-950">
            Contact Nitya Physiotherapy Clinic & Home Visits
          </h1>
          <p className="text-slate-600 text-sm">
            Located in Thatipur, Gwalior. Reach out to schedule in-clinic consultations or book a home rehabilitation visit.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-sm space-y-4">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">Clinic Address</h2>
                <p className="font-bold text-slate-900 mt-1">{CLINIC_DATA.name}</p>
                <p className="text-slate-700 mt-0.5">{CLINIC_DATA.location.line1}</p>
                <p className="text-slate-700">{CLINIC_DATA.location.line2}</p>
                <p className="text-slate-700">{CLINIC_DATA.location.area}, {CLINIC_DATA.location.city} – {CLINIC_DATA.location.pincode}</p>
                <p className="text-slate-700">{CLINIC_DATA.location.state}, {CLINIC_DATA.location.country}</p>
              </div>

              <div className="pt-3 border-t border-slate-200 space-y-1.5 text-xs">
                <p><strong>Primary Physiotherapist:</strong> {CLINIC_DATA.practitioner.name} ({CLINIC_DATA.practitioner.qualifications})</p>
                <p><strong>Direct Phone:</strong> <a href={`tel:${CLINIC_DATA.contact.rawPhone}`} className="text-teal-800 font-bold">{CLINIC_DATA.contact.phone}</a></p>
                <p><strong>WhatsApp:</strong> <a href={`https://wa.me/${CLINIC_DATA.contact.rawPhone}`} className="text-emerald-700 font-bold">{CLINIC_DATA.contact.whatsapp}</a></p>
                <p><strong>Operating Hours:</strong> {CLINIC_DATA.location.openingHoursPlaceholder}</p>
              </div>

              <div className="pt-2">
                <a
                  href={CLINIC_DATA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-teal-800 hover:bg-teal-900 text-white font-bold text-xs py-3 rounded-lg shadow transition"
                >
                  📍 Open Location in Google Maps
                </a>
              </div>
            </div>

            <div className="p-4 bg-teal-50 border border-teal-200 rounded-lg text-xs text-teal-900">
              <strong>Home Visits:</strong> Available across Thatipur, Suresh Nagar, Morar, City Centre, and surrounding Gwalior sectors upon prior appointment.
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col space-y-4">
            <div className="rounded-xl overflow-hidden border border-slate-200 aspect-[16/10] bg-slate-100 relative shadow-sm">
              <iframe
                title="Nitya Physiotherapy Thatipur Gwalior Location Map"
                src={CLINIC_DATA.location.mapsEmbedUrlPlaceholder}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="flex justify-between items-center text-xs text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-200">
              <span>📍 Thatipur, Gwalior (Near Sheetla Garden)</span>
              <a
                href={CLINIC_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-teal-800 hover:underline"
              >
                Get Live Directions →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}