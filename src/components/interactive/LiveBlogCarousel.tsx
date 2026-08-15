"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { useClinicData } from "@/context/ClinicDataContext";

export default function LiveBlogCarousel() {
  const { posts } = useClinicData();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -350 : 350;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Duplicate items for continuous seamless loop
  const displayPosts = posts.length > 0 ? posts.concat(posts) : [];

  return (
    <div className="space-y-6 overflow-hidden">
      {/* Header with Navigation Controls */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-600 animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-teal-800">
              Live TV News Slide Feed • Verified Patient Education
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 mt-1">
            Clinical Health Articles & Infographic Posters
          </h2>
          <p className="text-xs text-slate-600 mt-1">
            Live auto-sliding news channel feed. Hover cursor or tap card to pause auto-slide.
          </p>
        </div>

        {/* Carousel Arrow Controls */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full bg-slate-100 hover:bg-teal-800 hover:text-white text-slate-800 flex items-center justify-center font-bold transition shadow-sm border border-slate-200"
            aria-label="Scroll left"
          >
            ←
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full bg-slate-100 hover:bg-teal-800 hover:text-white text-slate-800 flex items-center justify-center font-bold transition shadow-sm border border-slate-200"
            aria-label="Scroll right"
          >
            →
          </button>
          <Link
            href="/blog"
            className="ml-2 text-xs font-bold text-teal-800 hover:text-teal-950 underline underline-offset-4"
          >
            View All ({posts.length}) →
          </Link>
        </div>
      </div>

      {/* News Channel Auto-Sliding Card Stream */}
      <div
        ref={scrollRef}
        className="overflow-hidden py-2"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className={`flex gap-6 w-max ${
            isPaused ? "" : "animate-marquee"
          }`}
          style={{ animationDuration: `${Math.max(25, displayPosts.length * 5)}s` }}
        >
          {displayPosts.map((post, idx) => (
            <div
              key={`${post.id}-${idx}`}
              className="shrink-0 w-[280px] sm:w-[320px] bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg hover:border-teal-600 transition duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Poster Image / Thumbnail Box */}
                <div className="aspect-[16/10] bg-slate-100 relative overflow-hidden">
                  {post.posterImageUrl ? (
                    <img
                      src={post.posterImageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-teal-900 to-slate-900 p-5 flex flex-col justify-between text-white">
                      <span className="text-2xl">📝</span>
                      <p className="text-xs font-semibold text-teal-200 uppercase tracking-wider">{post.category}</p>
                    </div>
                  )}
                  <span className="absolute top-3 left-3 bg-teal-950/80 backdrop-blur text-white text-[10px] font-bold px-2.5 py-1 rounded-md">
                    {post.type === "poster" ? "🖼️ Poster" : "📖 Article"}
                  </span>
                  <span className="absolute top-3 right-3 bg-white/90 text-slate-800 text-[10px] font-semibold px-2 py-0.5 rounded shadow">
                    {post.readTimeOrDuration}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-4 space-y-2">
                  <span className="text-[10px] font-bold text-teal-800 uppercase tracking-wider bg-teal-50 px-2 py-0.5 rounded">
                    {post.category}
                  </span>
                  <h3 className="font-extrabold text-slate-900 text-sm line-clamp-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {post.summary}
                  </p>
                </div>
              </div>

              {/* Footer / Read Link */}
              <div className="p-4 pt-0 border-t border-slate-100 mt-2 flex justify-between items-center text-xs">
                <span className="text-[11px] text-slate-400 font-medium">By {post.author}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-bold text-teal-800 hover:text-teal-950 inline-flex items-center gap-1"
                >
                  Read Post →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
