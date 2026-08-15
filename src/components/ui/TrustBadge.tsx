import React from 'react';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface TrustBadgeProps {
  title: string;
  subtitle?: string;
}

export default function TrustBadge({ title, subtitle }: TrustBadgeProps) {
  return (
    <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
      <div className="p-2 rounded-lg bg-teal-50 text-teal-700 shrink-0">
        <ShieldCheck className="w-5 h-5" />
      </div>
      <div>
        <h4 className="text-sm font-bold text-slate-900 leading-tight">{title}</h4>
        {subtitle && <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>}
      </div>
    </div>
  );
}
