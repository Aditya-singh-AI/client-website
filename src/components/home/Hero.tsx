// src/components/home/Hero.tsx
import Link from 'next/link';
import { BUSINESS_DETAILS } from '@/constants/business';

export default function Hero() {
  return (
    <section className="relative bg-white pt-20 pb-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-left">
            <span className="text-teal-600 font-semibold tracking-wide uppercase text-sm">
              Physiotherapy & Rehabilitation in Gwalior
            </span>
            <h1 className="mt-4 text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Personalised Physiotherapy Care in <span className="text-teal-700">Gwalior</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              {BUSINESS_DETAILS.name} provides expert rehabilitation in Thatipur and across Gwalior. 
              Whether at our clinic or in your home, {BUSINESS_DETAILS.practitioner.name} focuses on your recovery.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/book-appointment" className="bg-teal-700 text-white px-8 py-4 rounded-lg font-medium hover:bg-teal-800 transition shadow-lg shadow-teal-700/20 text-center">
                Book an Appointment
              </Link>
              <a href={`tel:${BUSINESS_DETAILS.phone}`} className="border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-lg font-medium hover:bg-slate-50 transition text-center">
                Call {BUSINESS_DETAILS.phone}
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="aspect-[16/10] bg-slate-200 rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder for Hero Image */}
              <div className="w-full h-full bg-gradient-to-br from-teal-800 to-slate-900 flex flex-col items-center justify-center p-8 text-center text-white">
                <span className="text-teal-300 font-bold text-xl mb-2">{BUSINESS_DETAILS.name}</span>
                <span className="text-slate-300 text-sm">{BUSINESS_DETAILS.practitioner.name} • {BUSINESS_DETAILS.qualifications}</span>
                <span className="text-xs text-slate-400 mt-4 bg-teal-900/60 px-3 py-1 rounded-full border border-teal-500/30">
                  {BUSINESS_DETAILS.specialization}
                </span>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden md:block border border-slate-100">
              <p className="text-teal-700 font-bold text-2xl">Clinic & Home</p>
              <p className="text-slate-500 text-sm">Rehabilitation Visits Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
