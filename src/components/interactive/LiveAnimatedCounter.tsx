"use client";

import { useEffect, useState, useRef } from "react";

interface CounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel?: string;
  icon?: string;
  iconClass?: string;
}

export default function LiveAnimatedCounter({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  label,
  sublabel,
  icon,
  iconClass = "text-teal-700",
}: CounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTimestamp: number | null = null;

          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // Smooth ease-out cubic animation
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOutProgress * end));

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <div
      ref={ref}
      className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-teal-600 transition-all duration-300 text-center flex flex-col justify-between items-center group"
    >
      {icon && (
        <div className={`text-2xl mb-1 group-hover:scale-110 transition duration-300 ${iconClass}`}>
          {icon}
        </div>
      )}
      <div className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight flex items-center justify-center">
        <span>{prefix}</span>
        <span>{count}</span>
        <span className="text-slate-950">{suffix}</span>
      </div>
      <p className="text-xs font-bold text-slate-600 mt-1">{label}</p>
      {sublabel && <p className="text-[11px] text-slate-400 mt-0.5">{sublabel}</p>}
    </div>
  );
}
