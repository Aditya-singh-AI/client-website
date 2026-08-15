"use client";

import { useEffect, useState, useRef } from "react";

interface CounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel: string;
}

export default function LiveAnimatedCounter({
  end,
  duration = 1800,
  prefix = "",
  suffix = "",
  label,
  sublabel,
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
            // Ease-out cubic animation
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
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <div
      ref={ref}
      className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-teal-600 transition-all duration-300 text-center flex flex-col justify-between"
    >
      <div>
        <div className="text-3xl sm:text-4xl font-black text-teal-900 tracking-tight flex items-center justify-center gap-0.5">
          <span>{prefix}</span>
          <span>{count}</span>
          <span className="text-teal-600">{suffix}</span>
        </div>
        <p className="text-sm font-bold text-slate-900 mt-2">{label}</p>
      </div>
      <p className="text-xs text-slate-500 mt-1">{sublabel}</p>
    </div>
  );
}
