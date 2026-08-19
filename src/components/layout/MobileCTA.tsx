import Link from "next/link";
import { CLINIC_DATA } from "@/constants/business";

export default function MobileCTA() {
  return (
    <aside
      aria-label="Quick contact mobile bar"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 px-3 py-2 flex items-center justify-between gap-2 shadow-[0_-3px_12px_rgba(0,0,0,0.08)] lg:hidden"
    >
      <a
        href={`tel:${CLINIC_DATA.contact.rawPhone}`}
        className="flex-1 flex flex-col items-center justify-center py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded text-center transition"
      >
        <span className="text-base leading-none">📞</span>
        <span className="text-[11px] font-bold mt-0.5 tracking-tight uppercase">Call</span>
      </a>

      <a
        href={`https://wa.me/${CLINIC_DATA.contact.rawPhone}?text=Hello%20Nitya%20Physiotherapy,%20I%20would%20like%20to%20inquire%20about%20a%20physiotherapy%20appointment.`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 rounded text-center transition"
      >
        <span className="text-base leading-none">💬</span>
        <span className="text-[11px] font-bold mt-0.5 tracking-tight uppercase">WhatsApp</span>
      </a>

      <Link
        href="/book-appointment"
        className="flex-[1.8] flex items-center justify-center py-2.5 bg-teal-800 hover:bg-teal-900 text-white rounded font-bold text-xs tracking-tight uppercase transition"
      >
        Book Consult
      </Link>
    </aside>
  );
}