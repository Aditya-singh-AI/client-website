"use client";

import { useState } from "react";
import Link from "next/link";
import { CLINIC_DATA } from "@/constants/business";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-100 shadow-sm">
      {/* Top Notification / Trust Bar */}
      <div className="bg-teal-900 text-teal-50 text-xs py-2 px-4 text-center font-medium">
        <span>📍 Serving All Across Gwalior • Clinic Visits & Home Physiotherapy</span>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo / Identity */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <img
            src="/logo.webp"
            alt="Nitya Physiotherapy Clinic Logo"
            className="h-11 sm:h-12 w-auto object-contain"
          />
          <div className="flex flex-col">
            <span className="font-bold text-base sm:text-lg text-teal-950 tracking-tight leading-tight">
              Nitya Physiotherapy
            </span>
            <span className="text-[10px] sm:text-[11px] text-teal-700 font-semibold tracking-wide uppercase">
              Clinic & Home Visits • Gwalior
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden xl:flex items-center gap-5 text-xs font-semibold text-slate-700">
          <Link href="/" className="hover:text-teal-700 transition">Home</Link>
          <Link href="/physiotherapist/dr-hemant-singh" className="hover:text-teal-700 transition">About Us</Link>
          <Link href="/services" className="hover:text-teal-700 transition">Services</Link>
          <Link href="/services/home-physiotherapy" className="hover:text-teal-700 transition">Home Visit</Link>
          <Link href="/gallery" className="hover:text-teal-700 transition">Gallery</Link>
          <Link href="/reviews" className="hover:text-teal-700 transition">Reviews</Link>
          <Link href="/blog" className="hover:text-teal-700 transition">Blog</Link>
          <Link href="/contact" className="hover:text-teal-700 transition">Contact</Link>
        </div>

        {/* Desktop Primary CTA */}
        <div className="hidden lg:flex items-center gap-2.5 shrink-0">
          <a
            href={`tel:${CLINIC_DATA.contact.rawPhone}`}
            className="inline-flex items-center gap-1.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-3.5 py-2.5 rounded-lg transition shadow-sm"
          >
            <span>📞</span> Call Now
          </a>
          <Link
            href="/book-appointment"
            className="bg-teal-800 hover:bg-teal-900 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition shadow-sm"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-700 rounded-md"
          aria-label="Toggle Navigation Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-5 pt-3 pb-6 space-y-2 text-sm font-medium text-slate-800 shadow-xl">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block py-1.5">Home</Link>
          <Link href="/physiotherapist/dr-hemant-singh" onClick={() => setMobileMenuOpen(false)} className="block py-1.5">About Us</Link>
          <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 font-semibold text-teal-800">Our 23 Services</Link>
          <Link href="/services/home-physiotherapy" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-teal-800 font-semibold">Home Visit Physiotherapy</Link>
          <Link href="/gallery" onClick={() => setMobileMenuOpen(false)} className="block py-1.5">Clinic Gallery</Link>
          <Link href="/reviews" onClick={() => setMobileMenuOpen(false)} className="block py-1.5">Patient Reviews</Link>
          <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="block py-1.5">Patient Blog & Posters</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block py-1.5">Contact & Location</Link>
          <div className="pt-3 flex flex-col gap-2">
            <a
              href={`tel:${CLINIC_DATA.contact.rawPhone}`}
              className="w-full text-center bg-emerald-700 text-white py-2.5 rounded-md font-bold text-xs"
            >
              📞 Call Now ({CLINIC_DATA.contact.phone})
            </a>
            <Link
              href="/book-appointment"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-teal-800 text-white py-2.5 rounded-md font-bold text-xs"
            >
              Book Appointment
            </Link>
            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center text-xs text-slate-500 hover:text-teal-800 py-1.5 font-medium"
            >
              🔐 Doctor / Admin Portal Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}