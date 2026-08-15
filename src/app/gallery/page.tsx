"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useClinicData, GalleryPhoto } from "@/context/ClinicDataContext";
import { CLINIC_DATA } from "@/constants/business";

export default function GalleryPage() {
  const { photos } = useClinicData();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activePhotoModal, setActivePhotoModal] = useState<GalleryPhoto | null>(null);

  const categories = ["All", "Clinic", "Treatment", "Equipment", "Home Visits"];

  const filteredPhotos = selectedCategory === "All"
    ? photos
    : photos.filter((p) => p.category === selectedCategory);

  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <header className="max-w-3xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800">Authentic Visual Practice</span>
          <h1 className="text-3xl font-extrabold text-slate-950">
            Clinic Facilities & Patient Rehabilitation Gallery
          </h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            View authentic photos of Dr. Hemant Singh PT (BPT) performing joint evaluations, manual therapy, clinical consultations, and specialized home visits across Thatipur and Gwalior.
          </p>
        </header>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 pt-2 border-b border-slate-200 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition ${
                selectedCategory === cat
                  ? "bg-teal-900 text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActivePhotoModal(photo)}
              className="group rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-lg transition cursor-pointer space-y-3 p-3 flex flex-col justify-between"
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden relative bg-slate-100">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <span className="absolute top-3 left-3 bg-teal-950/85 backdrop-blur text-white text-[10px] font-bold px-2.5 py-1 rounded-md border border-teal-700">
                  {photo.category}
                </span>
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <span className="bg-white/90 backdrop-blur text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow">
                    🔍 Click to Enlarge
                  </span>
                </div>
              </div>
              <div className="px-1 space-y-1">
                <h3 className="font-bold text-slate-900 text-sm group-hover:text-teal-800 transition">{photo.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox / Enlarged Modal */}
        {activePhotoModal && (
          <div
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActivePhotoModal(null)}
          >
            <div
              className="bg-white rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl space-y-4 p-4 sm:p-6 border border-slate-200 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                <div>
                  <span className="bg-teal-100 text-teal-800 text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {activePhotoModal.category}
                  </span>
                  <h3 className="text-lg font-extrabold text-slate-950 mt-1">{activePhotoModal.title}</h3>
                </div>
                <button
                  onClick={() => setActivePhotoModal(null)}
                  className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 font-bold hover:bg-slate-200 flex items-center justify-center transition"
                >
                  ✕
                </button>
              </div>

              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 shadow-inner">
                <img
                  src={activePhotoModal.imageUrl}
                  alt={activePhotoModal.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{activePhotoModal.caption}</p>

              <div className="pt-2 flex flex-wrap gap-3 justify-end border-t border-slate-100">
                <button
                  onClick={() => setActivePhotoModal(null)}
                  className="px-4 py-2 bg-slate-100 text-slate-700 text-xs font-bold rounded-xl hover:bg-slate-200 transition"
                >
                  Close
                </button>
                <Link
                  href="/book-appointment"
                  className="px-5 py-2 bg-teal-800 hover:bg-teal-900 text-white text-xs font-bold rounded-xl transition"
                >
                  Book Consultation Session →
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Home Visit CTA */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-teal-900 to-slate-900 text-white flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2">
            <h2 className="text-xl font-bold">Need Personal In-Home Physiotherapy in Gwalior?</h2>
            <p className="text-xs text-teal-200">
              Dr. Hemant Singh PT brings clinical rehabilitation tools directly to your doorstep in Thatipur, Suresh Nagar, Morar & nearby areas.
            </p>
          </div>
          <Link
            href="/book-appointment"
            className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold text-xs px-6 py-3.5 rounded-xl whitespace-nowrap shadow-lg transition"
          >
            Book Home Visit Session →
          </Link>
        </div>
      </div>
    </div>
  );
}
