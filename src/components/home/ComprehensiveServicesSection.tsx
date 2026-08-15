"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ALL_CLINICAL_SERVICES } from "@/constants/servicesData";

export default function ComprehensiveServicesSection() {
  const [activeTabId, setActiveTabId] = useState<string>("neuro-rehab");

  const currentCategory =
    ALL_CLINICAL_SERVICES.find((cat) => cat.id === activeTabId) || ALL_CLINICAL_SERVICES[0];

  const totalServicesCount = ALL_CLINICAL_SERVICES.reduce(
    (acc, cat) => acc + cat.services.length,
    0
  );

  return (
    <section className="py-20 bg-white border-y border-slate-200" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 px-3.5 py-1.5 rounded-full text-xs font-bold text-teal-800 uppercase tracking-widest">
            <span>⚕️</span>
            <span>Comprehensive Clinical Services ({totalServicesCount} Specialized Treatments)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Our Specialized Physiotherapy & Rehabilitation Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From neurological recovery and orthopedic joint rehab to direct home visits and sports injury care in Thatipur, Gwalior under <strong>Dr. Hemant Singh PT (BPT)</strong>.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap border-b border-slate-200 pb-4">
          {ALL_CLINICAL_SERVICES.map((category) => {
            const isActive = category.id === activeTabId;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTabId(category.id)}
                className={`px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 border ${
                  isActive
                    ? "bg-teal-900 text-white border-teal-900 shadow-lg shadow-teal-950/20 scale-[1.02]"
                    : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200"
                }`}
              >
                <span className="text-base">{category.icon}</span>
                <span>{category.categoryName}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${
                    isActive ? "bg-teal-700 text-white" : "bg-slate-200 text-slate-700"
                  }`}
                >
                  {category.services.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Header Pill */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-xl border border-slate-800">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-400">
              Category: {currentCategory.badge}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-2">
              <span>{currentCategory.icon}</span> {currentCategory.categoryName}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">{currentCategory.subtitle}</p>
          </div>
          <Link
            href={`/book-appointment?category=${currentCategory.id}`}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-6 py-3 rounded-xl transition shadow-md whitespace-nowrap self-start md:self-auto"
          >
            📅 Book Consultation for {currentCategory.badge} →
          </Link>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCategory.services.map((service, idx) => (
            <div
              key={service.id}
              className="group bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-teal-600 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 relative overflow-hidden"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-teal-100/70 text-teal-900 text-2xl flex items-center justify-center font-black group-hover:scale-110 transition">
                    {service.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200 px-2.5 py-1 rounded-md">
                    {service.tag}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h4 className="font-extrabold text-slate-950 text-base group-hover:text-teal-900 transition flex items-center gap-1.5">
                    <span className="text-teal-700 text-xs font-bold">#{idx + 1}</span> {service.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold">
                <span className="text-slate-500 font-semibold">1-on-1 Assessment</span>
                <Link
                  href={`/book-appointment?service=${service.id}`}
                  className="text-teal-800 hover:text-teal-950 font-extrabold flex items-center gap-1 group-hover:translate-x-1 transition"
                >
                  Book Session →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Global Action Banner */}
        <div className="bg-teal-50 border border-teal-200 rounded-3xl p-6 sm:p-8 text-center space-y-4">
          <h3 className="text-lg sm:text-xl font-black text-teal-950">
            Unsure Which Treatment Approach You Need?
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 max-w-xl mx-auto leading-relaxed">
            Dr. Hemant Singh PT performs a detailed initial physical assessment to determine whether clinic consultation or home visit physiotherapy is best for your condition.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-1">
            <a
              href="tel:+918269615097"
              className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-6 py-3 rounded-xl transition shadow"
            >
              📞 Call Dr. Hemant Directly (+91 82696 15097)
            </a>
            <a
              href="https://wa.me/918269615097?text=Hello%20Dr.%20Hemant,%20I%20have%20a%20question%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-slate-100 text-emerald-800 border border-emerald-600 text-xs font-bold px-6 py-3 rounded-xl transition shadow-sm"
            >
              💬 Inquire via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
