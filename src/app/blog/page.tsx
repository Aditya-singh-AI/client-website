"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BlogOrPosterItem, BlogCategory } from "@/types/blog";
import { INITIAL_POSTS } from "@/constants/initialBlogData";
import DoctorPublishModal from "@/components/blog/DoctorPublishModal";
import PosterLightboxModal from "@/components/blog/PosterLightboxModal";

const CATEGORIES: ("All" | BlogCategory)[] = [
  "All",
  "Spine & Back",
  "Knee & Joint",
  "Home Physiotherapy",
  "Sports Rehab",
  "Posture & Ergonomics",
  "Post-Surgical Care",
];

export default function BlogIndexPage() {
  const [posts, setPosts] = useState<BlogOrPosterItem[]>(INITIAL_POSTS);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeType, setActiveType] = useState<"all" | "poster" | "article">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isPublishModalOpen, setIsPublishModalOpen] = useState(false);
  const [selectedPoster, setSelectedPoster] = useState<BlogOrPosterItem | null>(null);

  // Load custom doctor uploads from localStorage if available
  useEffect(() => {
    const saved = localStorage.getItem("nitya_custom_posts");
    if (saved) {
      try {
        const parsed: BlogOrPosterItem[] = JSON.parse(saved);
        setPosts([...parsed, ...INITIAL_POSTS]);
      } catch (err) {
        console.error("Error loading stored posts", err);
      }
    }
  }, []);

  const handlePostPublished = (newPost: BlogOrPosterItem) => {
    const updated = [newPost, ...posts];
    setPosts(updated);
    // Save uploaded doctor posts to browser storage
    const customPosts = updated.filter((p) => !INITIAL_POSTS.some((init) => init.id === p.id));
    localStorage.setItem("nitya_custom_posts", JSON.stringify(customPosts));
  };

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesType = activeType === "all" || post.type === activeType;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesType && matchesSearch;
  });

  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      {/* Modals */}
      <DoctorPublishModal
        isOpen={isPublishModalOpen}
        onClose={() => setIsPublishModalOpen(false)}
        onPostPublished={handlePostPublished}
      />
      <PosterLightboxModal
        poster={selectedPoster}
        onClose={() => setSelectedPoster(null)}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Page Top Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-slate-200 pb-8">
          <div className="space-y-2 max-w-2xl">
            <span className="text-teal-800 font-bold text-xs uppercase tracking-widest">
              Patient Knowledge & Poster Hub
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950">
              Physiotherapy Guidance & Medical Posters
            </h1>
            <p className="text-slate-600 text-xs sm:text-sm">
              Clinical movement guides and health posters uploaded by Dr. Hemant Singh PT (BPT) for Thatipur and Gwalior patients.
            </p>
          </div>

          {/* Doctor Portal Action Button */}
          <button
            onClick={() => setIsPublishModalOpen(true)}
            className="bg-teal-900 hover:bg-teal-950 text-white text-xs font-bold px-5 py-3 rounded-xl flex items-center gap-2 shadow-lg transition"
          >
            <span>➕</span> Upload Poster / Article
          </button>
        </div>

        {/* Content Type Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-2 bg-slate-200/80 p-1 rounded-xl">
            <button
              onClick={() => setActiveType("all")}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition ${
                activeType === "all" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600"
              }`}
            >
              All Content ({posts.length})
            </button>
            <button
              onClick={() => setActiveType("poster")}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                activeType === "poster" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600"
              }`}
            >
              <span>🖼️</span> Health Posters ({posts.filter((p) => p.type === "poster").length})
            </button>
            <button
              onClick={() => setActiveType("article")}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                activeType === "article" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600"
              }`}
            >
              <span>📝</span> Clinical Articles ({posts.filter((p) => p.type === "article").length})
            </button>
          </div>

          {/* Search Input */}
          <div className="w-full sm:w-72">
            <input
              type="text"
              placeholder="Search posters or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-700 bg-white"
            />
          </div>
        </div>

        {/* Category Carousel / Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
                activeCategory === cat
                  ? "bg-teal-800 text-white shadow-sm"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Masonry-Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((item) => {
            const isPoster = item.type === "poster";

            return (
              <article
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between hover:border-teal-600 hover:shadow-md transition duration-300"
              >
                {/* Poster Graphic Frame */}
                {isPoster && item.posterImageUrl && (
                  <div
                    onClick={() => setSelectedPoster(item)}
                    className="relative aspect-[4/3] bg-slate-900 cursor-pointer group overflow-hidden"
                  >
                    <img
                      src={item.posterImageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white text-xs font-bold gap-1.5">
                      <span>🔍 Click to View Fullscreen Poster</span>
                    </div>
                  </div>
                )}

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-bold text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded border border-teal-100">
                      {item.category}
                    </span>
                    <span className="text-slate-400 font-medium">
                      {isPoster ? "🖼️ Poster" : item.readTimeOrDuration}
                    </span>
                  </div>

                  <h2 className="font-bold text-slate-900 text-base leading-snug">
                    {isPoster ? (
                      <button
                        onClick={() => setSelectedPoster(item)}
                        className="text-left hover:text-teal-800 transition"
                      >
                        {item.title}
                      </button>
                    ) : (
                      <Link href={`/blog/${item.slug}`} className="hover:text-teal-800 transition">
                        {item.title}
                      </Link>
                    )}
                  </h2>

                  <p className="text-xs text-slate-600 leading-relaxed">{item.summary}</p>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-4">
                  <div className="flex items-center justify-between text-xs pt-3">
                    <div>
                      <p className="font-bold text-slate-800">{item.author}</p>
                      <p className="text-[10px] text-slate-500">{item.authorCredentials}</p>
                    </div>
                    {isPoster ? (
                      <button
                        onClick={() => setSelectedPoster(item)}
                        className="text-xs font-bold text-teal-800 hover:text-teal-950 inline-flex items-center gap-1"
                      >
                        Open Poster →
                      </button>
                    ) : (
                      <Link
                        href={`/blog/${item.slug}`}
                        className="text-xs font-bold text-teal-800 hover:text-teal-950 inline-flex items-center gap-1"
                      >
                        Read Article →
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 text-slate-500 text-sm">
            No content found matching your search. Try resetting filters or upload a new poster!
          </div>
        )}
      </div>
    </div>
  );
}
