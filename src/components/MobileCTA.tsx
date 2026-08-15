'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { BUSINESS_DETAILS } from '@/constants/business';

export default function MobileCTA() {
  return (
    <aside aria-label="Quick Actions" className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={`tel:${BUSINESS_DETAILS.phone}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-900 text-white text-[11px] font-bold shadow hover:bg-slate-800 transition active:scale-95"
        >
          <Phone className="w-4 h-4 text-emerald-400 mb-0.5" />
          <span>Call Now</span>
        </a>

        <a
          href={`https://wa.me/${BUSINESS_DETAILS.whatsapp.replace(/[^0-9]/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600 text-white text-[11px] font-bold shadow hover:bg-emerald-700 transition active:scale-95"
        >
          <MessageSquare className="w-4 h-4 fill-white mb-0.5" />
          <span>WhatsApp</span>
        </a>

        <Link
          href="/book-appointment"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-teal-700 text-white text-[11px] font-bold shadow hover:bg-teal-800 transition active:scale-95"
        >
          <Calendar className="w-4 h-4 text-teal-100 mb-0.5" />
          <span>Book Visit</span>
        </Link>
      </div>
    </aside>
  );
}
