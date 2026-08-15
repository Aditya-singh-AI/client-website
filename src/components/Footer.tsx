import React from 'react';
import Link from 'next/link';
import { Phone, MapPin } from 'lucide-react';
import { BUSINESS_DETAILS } from '@/constants/business';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-24 md:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-extrabold text-white">{BUSINESS_DETAILS.name}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Expert physiotherapy and rehabilitation services by {BUSINESS_DETAILS.practitioner.name} ({BUSINESS_DETAILS.qualifications}). Specialized in {BUSINESS_DETAILS.specialization}.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {BUSINESS_DETAILS.services.map((svc) => (
                <li key={svc.slug}>
                  <Link href={`/services/${svc.slug}`} className="hover:text-teal-400 transition">
                    {svc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contact & Clinic</h4>
            <div className="space-y-2.5 text-sm text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-1" />
                <span>{BUSINESS_DETAILS.address.full}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${BUSINESS_DETAILS.phone}`} className="hover:text-white transition font-medium">
                  {BUSINESS_DETAILS.phone}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {BUSINESS_DETAILS.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
