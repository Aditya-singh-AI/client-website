'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, Menu, X, Calendar } from 'lucide-react';
import { BUSINESS_DETAILS } from '@/constants/business';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-700 text-white flex items-center justify-center font-bold text-lg shadow-md">
              NP
            </div>
            <div>
              <span className="font-extrabold text-slate-900 text-base sm:text-lg block leading-tight">
                {BUSINESS_DETAILS.shortName}
              </span>
              <span className="text-xs text-teal-700 font-semibold block">
                {BUSINESS_DETAILS.practitioner.name} ({BUSINESS_DETAILS.qualifications})
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
            <Link href="/" className="hover:text-teal-700 transition">Home</Link>
            <Link href="/services/home-physiotherapy" className="hover:text-teal-700 transition">Home Visits</Link>
            <Link href="/conditions/back-pain" className="hover:text-teal-700 transition">Conditions</Link>
            <Link href="/contact" className="hover:text-teal-700 transition">Contact</Link>
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_DETAILS.phone}`}
              className="px-4 py-2 rounded-lg border border-slate-200 text-slate-700 font-medium text-sm hover:bg-slate-50 transition flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-teal-600" />
              <span>Call</span>
            </a>
            <Link
              href="/book-appointment"
              className="px-5 py-2.5 rounded-lg bg-teal-700 hover:bg-teal-800 text-white font-medium text-sm shadow-md transition flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-3">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 font-medium">Home</Link>
          <Link href="/services/home-physiotherapy" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 font-medium">Home Visits</Link>
          <Link href="/conditions/back-pain" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 font-medium">Conditions</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 font-medium">Contact</Link>
          
          <div className="pt-2 flex flex-col gap-2">
            <Link
              href="/book-appointment"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-teal-700 text-white font-medium text-center py-3 rounded-lg shadow"
            >
              Book Appointment
            </Link>
            <a
              href={`https://wa.me/${BUSINESS_DETAILS.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 text-white font-medium text-center py-3 rounded-lg shadow flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Doctor</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
