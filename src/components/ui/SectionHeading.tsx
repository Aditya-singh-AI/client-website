import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ badge, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center max-w-2xl mx-auto space-y-2">
      {badge && (
        <span className="text-teal-700 font-bold text-xs uppercase tracking-wider block">
          {badge}
        </span>
      )}
      <h2 className="text-3xl font-extrabold text-slate-900">{title}</h2>
      {subtitle && <p className="text-sm text-slate-600 leading-relaxed">{subtitle}</p>}
    </div>
  );
}
