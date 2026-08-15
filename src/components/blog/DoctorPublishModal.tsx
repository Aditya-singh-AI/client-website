"use client";

import { useState } from "react";
import { BlogCategory, BlogOrPosterItem, PostType } from "@/types/blog";
import { CLINIC_DATA } from "@/constants/business";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onPostPublished: (newPost: BlogOrPosterItem) => void;
}

const CATEGORIES: BlogCategory[] = [
  "Spine & Back",
  "Knee & Joint",
  "Home Physiotherapy",
  "Sports Rehab",
  "Posture & Ergonomics",
  "Post-Surgical Care",
];

export default function DoctorPublishModal({ isOpen, onClose, onPostPublished }: Props) {
  // Simple Doctor Security PIN (can be connected to NextAuth or environment variable)
  const [pin, setPin] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinError, setPinError] = useState(false);

  // Form Fields
  const [postType, setPostType] = useState<PostType>("poster");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<BlogCategory>("Spine & Back");
  const [summary, setSummary] = useState("");
  const [takeawayInput, setTakeawayInput] = useState("");
  const [takeaways, setTakeaways] = useState<string[]>([]);
  const [articleContent, setArticleContent] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleVerifyPin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default PIN matches clinic last digits (15097)
    if (pin === "20266" || pin === "20262") {
      setIsAuthenticated(true);
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddTakeaway = () => {
    if (takeawayInput.trim()) {
      setTakeaways([...takeaways, takeawayInput.trim()]);
      setTakeawayInput("");
    }
  };

  const handleRemoveTakeaway = (index: number) => {
    setTakeaways(takeaways.filter((_, i) => i !== index));
  };

  const handleSubmitPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !summary) return;

    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    const newPost: BlogOrPosterItem = {
      id: `post-${Date.now()}`,
      slug: `${slug}-${Date.now().toString().slice(-4)}`,
      type: postType,
      title,
      category,
      readTimeOrDuration: postType === "poster" ? "Infographic Poster" : "4 min read",
      publishedDate: new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" }),
      author: CLINIC_DATA.practitioner.name,
      authorCredentials: `${CLINIC_DATA.practitioner.qualifications} (Bachelor of Physiotherapy)`,
      summary,
      posterImageUrl: imagePreview || undefined,
      keyTakeaways: takeaways.length > 0 ? takeaways : ["Clinical assessment advised before starting exercises."],
      contentSections: articleContent
        ? [
            {
              heading: "Clinical Insights & Exercises",
              body: articleContent,
            },
          ]
        : undefined,
    };

    onPostPublished(newPost);
    // Reset form
    setTitle("");
    setSummary("");
    setImagePreview(null);
    setTakeaways([]);
    setArticleContent("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
        {/* Modal Header */}
        <div className="bg-teal-950 text-white p-5 flex items-center justify-between border-b border-teal-800">
          <div className="flex items-center gap-2.5">
            <span className="text-xl">🩺</span>
            <div>
              <h3 className="font-bold text-sm leading-none">Doctor Publishing Portal</h3>
              <p className="text-[11px] text-teal-300 mt-0.5">Upload Clinical Posters & Patient Guidance</p>
            </div>
          </div>
          <button onClick={onClose} className="text-teal-300 hover:text-white text-lg">
            ✕
          </button>
        </div>

        {!isAuthenticated ? (
          /* Step 1: Security PIN Verification */
          <form onSubmit={handleVerifyPin} className="p-8 space-y-4 text-center">
            <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center mx-auto text-xl">
              🔒
            </div>
            <h4 className="font-bold text-slate-900 text-base">Doctor Access Authentication</h4>
            <p className="text-xs text-slate-600 max-w-sm mx-auto">
              Please enter your 5-digit doctor PIN to publish posters or educational articles.
            </p>
            <div className="max-w-xs mx-auto space-y-2">
              <input
                type="password"
                placeholder="Enter PIN"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                className="w-full text-center text-sm font-bold tracking-widest px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-700 outline-none"
              />
              {pinError && <p className="text-xs text-rose-600 font-semibold">Incorrect PIN. Try Correct One.</p>}
              <button
                type="submit"
                className="w-full bg-teal-800 hover:bg-teal-900 text-white font-bold text-xs py-2.5 rounded-lg transition"
              >
                Verify & Open Publisher
              </button>
            </div>
          </form>
        ) : (
          /* Step 2: Post & Poster Upload Form */
          <form onSubmit={handleSubmitPost} className="p-6 space-y-5">
            {/* Post Type Selector */}
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setPostType("poster")}
                className={`flex-1 py-2.5 rounded-xl border text-xs font-bold transition flex items-center justify-center gap-2 ${
                  postType === "poster"
                    ? "bg-teal-900 text-white border-teal-900 shadow-sm"
                    : "bg-slate-50 text-slate-700 border-slate-200"
                }`}
              >
                <span>🖼️</span> Health Poster / Infographic
              </button>
              <button
                type="button"
                onClick={() => setPostType("article")}
                className={`flex-1 py-2.5 rounded-xl border text-xs font-bold transition flex items-center justify-center gap-2 ${
                  postType === "article"
                    ? "bg-teal-900 text-white border-teal-900 shadow-sm"
                    : "bg-slate-50 text-slate-700 border-slate-200"
                }`}
              >
                <span>📝</span> Detailed Clinical Article
              </button>
            </div>

            {/* Poster Upload Dropzone (If type is poster) */}
            {postType === "poster" && (
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-800">
                  Upload Poster Graphic / Clinical Infographic *
                </label>
                <div className="border-2 border-dashed border-slate-300 hover:border-teal-700 rounded-xl p-4 text-center cursor-pointer relative bg-slate-50">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  {imagePreview ? (
                    <div className="space-y-2">
                      <img
                        src={imagePreview}
                        alt="Poster Preview"
                        className="max-h-48 mx-auto rounded-lg shadow-sm border border-slate-200 object-contain"
                      />
                      <p className="text-[11px] text-teal-800 font-semibold">Click to change poster image</p>
                    </div>
                  ) : (
                    <div className="py-4 space-y-1">
                      <span className="text-3xl">📤</span>
                      <p className="text-xs font-bold text-slate-700">Click or drag image file here</p>
                      <p className="text-[10px] text-slate-500">Supports PNG, JPG, WebP health posters</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Title & Category */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">Post / Poster Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 5 Posture Tips for Neck Stiffness"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-700 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">Category *</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as BlogCategory)}
                  className="w-full text-xs px-3.5 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-700 outline-none bg-white"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Summary */}
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">
                Clinical Summary / Advice for Patients *
              </label>
              <textarea
                required
                rows={3}
                placeholder="Explain the clinical purpose, who should perform this, and safe execution rules..."
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                className="w-full text-xs px-3.5 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-700 outline-none"
              ></textarea>
            </div>

            {/* Key Clinical Takeaways */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-800">
                Key Takeaway Bullet Points (Optional)
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="e.g. Do not arch lower spine while stretching"
                  value={takeawayInput}
                  onChange={(e) => setTakeawayInput(e.target.value)}
                  className="flex-1 text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
                />
                <button
                  type="button"
                  onClick={handleAddTakeaway}
                  className="bg-slate-800 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-slate-900"
                >
                  + Add
                </button>
              </div>
              {takeaways.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {takeaways.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] bg-teal-50 border border-teal-200 text-teal-900 px-2.5 py-1 rounded-full flex items-center gap-1.5"
                    >
                      <span>✓ {t}</span>
                      <button
                        type="button"
                        onClick={() => handleRemoveTakeaway(idx)}
                        className="text-slate-400 hover:text-rose-600 font-bold"
                      >
                        ✕
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Detailed Article Body (if type is article) */}
            {postType === "article" && (
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">Full Article Content</label>
                <textarea
                  rows={6}
                  placeholder="Write full article instructions, precautions, and exercise protocol..."
                  value={articleContent}
                  onChange={(e) => setArticleContent(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-700 outline-none"
                ></textarea>
              </div>
            )}

            {/* Author Credential Lock (Compliance Rule) */}
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between text-xs text-slate-600">
              <span>
                <strong>Verified Author:</strong> {CLINIC_DATA.practitioner.name} ({CLINIC_DATA.practitioner.qualifications})
              </span>
              <span className="text-[10px] text-teal-800 font-semibold bg-teal-100 px-2 py-0.5 rounded">
                Verified Practitioner
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-3 border border-slate-300 text-slate-700 text-xs font-bold rounded-lg hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-3 bg-teal-800 hover:bg-teal-900 text-white text-xs font-bold rounded-lg transition shadow-md"
              >
                Publish Live to Blog
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
