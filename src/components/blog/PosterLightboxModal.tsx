"use client";

import { BlogOrPosterItem } from "@/types/blog";
import { CLINIC_DATA } from "@/constants/business";

interface Props {
  poster: BlogOrPosterItem | null;
  onClose: () => void;
}

export default function PosterLightboxModal({ poster, onClose }: Props) {
  if (!poster) return null;

  const handleShareToWhatsApp = () => {
    const text = `Hello Dr. Hemant, I am asking regarding your clinical poster: "${poster.title}". I would like to consult about this.`;
    window.open(`https://wa.me/${CLINIC_DATA.contact.rawPhone}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl border border-slate-800 grid grid-cols-1 md:grid-cols-12 max-h-[90vh]">
        {/* Left: Poster Image Frame */}
        <div className="md:col-span-7 bg-slate-950 flex items-center justify-center p-4 relative min-h-[300px]">
          {poster.posterImageUrl ? (
            <img
              src={poster.posterImageUrl}
              alt={poster.title}
              className="max-h-[75vh] w-auto object-contain rounded-lg"
            />
          ) : (
            <div className="text-slate-500 text-center p-8">
              <span className="text-4xl">📄</span>
              <p className="text-xs mt-2 font-semibold">Clinical Infographic</p>
            </div>
          )}
        </div>

        {/* Right: Clinical Context & Consultation CTA */}
        <div className="md:col-span-5 p-6 flex flex-col justify-between overflow-y-auto bg-white">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 border border-teal-100 px-2.5 py-1 rounded-full">
                {poster.category}
              </span>
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-slate-800 text-lg font-bold p-1"
              >
                ✕
              </button>
            </div>

            <h3 className="font-extrabold text-slate-950 text-lg leading-snug">{poster.title}</h3>

            <p className="text-xs text-slate-600 leading-relaxed">{poster.summary}</p>

            {/* Key Takeaways */}
            <div className="space-y-2 pt-2">
              <p className="text-[10px] uppercase font-bold text-slate-500">Key Clinical Rules:</p>
              <ul className="space-y-1 text-xs text-slate-700">
                {poster.keyTakeaways.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-teal-700 font-bold">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
              <p>
                <strong>Author:</strong> {poster.author} ({poster.authorCredentials})
              </p>
              <p>Nitya Physiotherapy • Thatipur, Gwalior</p>
            </div>
          </div>

          <div className="pt-6 space-y-2">
            <button
              onClick={handleShareToWhatsApp}
              className="w-full py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-lg transition flex items-center justify-center gap-2 shadow"
            >
              <span>💬</span> Ask Dr. Hemant About This
            </button>
            <button
              onClick={onClose}
              className="w-full py-2 text-xs text-slate-500 hover:text-slate-800"
            >
              Close Viewer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
